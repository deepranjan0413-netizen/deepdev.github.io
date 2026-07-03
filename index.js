/**
 * Cloud Functions backend for the PRESSMARK storefront.
 *
 * Why this exists: GitHub Pages (or any static host) can only serve files —
 * it cannot safely hold secret API keys (Razorpay key_secret, your fulfillment provider
 * client_secret). These functions run on Firebase's servers, keep those
 * secrets out of the browser, and are what the frontend calls into.
 *
 * SETUP (see README.md for full walkthrough):
 *   firebase functions:config:set \
 *     razorpay.key_id="rzp_live_xxx" razorpay.key_secret="xxx" \
 *     fulfillment.client_id="xxx" fulfillment.client_secret="xxx" \
 *     fulfillment.api_base="YOUR_FULFILLMENT_PROVIDER_API_BASE"   // switch to live base URL when ready
 *
 *   firebase deploy --only functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const crypto = require("crypto");
const cors = require("cors")({ origin: true });
const Razorpay = require("razorpay");
const fetch = (...args) => import("node-fetch").then(({ default: f }) => f(...args));

admin.initializeApp();
const db = admin.firestore();

function cfg() {
  return functions.config();
}

function razorpayClient() {
  const c = cfg().razorpay || {};
  return new Razorpay({ key_id: c.key_id, key_secret: c.key_secret });
}

/* -------------------------------------------------------------------------
 * createRazorpayOrder
 * POST { amount: number (rupees), currency: "INR", cart: [...] }
 * Returns a Razorpay order object the frontend uses to open checkout.js
 * ---------------------------------------------------------------------- */
exports.createRazorpayOrder = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { amount, currency = "INR", cart = [] } = req.body;
      if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }
      const instance = razorpayClient();
      const order = await instance.orders.create({
        amount: Math.round(amount * 100), // paise
        currency,
        receipt: `rcpt_${Date.now()}`,
        notes: { cart_summary: JSON.stringify(cart).slice(0, 480) },
      });

      // stash a pending order record so we can reconcile after payment
      await db.collection("orders").doc(order.id).set({
        status: "created",
        amount,
        currency,
        cart,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      res.json(order);
    } catch (err) {
      console.error("createRazorpayOrder error", err);
      res.status(500).json({ error: "Failed to create order" });
    }
  });
});

/* -------------------------------------------------------------------------
 * verifyPayment
 * POST { razorpay_order_id, razorpay_payment_id, razorpay_signature, cart }
 * Verifies the HMAC signature Razorpay sends back, marks the order paid,
 * and forwards it to your fulfillment provider.
 * ---------------------------------------------------------------------- */
exports.verifyPayment = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        cart = [],
        customer = {},
      } = req.body;

      const secret = (cfg().razorpay || {}).key_secret;
      const expected = crypto
        .createHmac("sha256", secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (expected !== razorpay_signature) {
        await db.collection("orders").doc(razorpay_order_id).update({ status: "signature_mismatch" });
        return res.status(400).json({ error: "Signature verification failed" });
      }

      await db.collection("orders").doc(razorpay_order_id).update({
        status: "paid",
        razorpay_payment_id,
        paidAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      // Push the fulfilment order to your fulfillment provider. Wrapped in try/catch so a
      // a hiccup on their end doesn't undo a successful, already-verified payment —
      // it's logged for manual retry instead.
      try {
        const fulfillmentResult = await createFulfillmentOrder({ cart, customer, razorpay_order_id });
        await db.collection("orders").doc(razorpay_order_id).update({
          fulfillmentStatus: "sent",
          fulfillmentResponse: fulfillmentResult,
        });
      } catch (qErr) {
        console.error("Fulfillment provider order error", qErr);
        await db.collection("orders").doc(razorpay_order_id).update({
          fulfillmentStatus: "failed",
          fulfillmentError: String(qErr),
        });
      }

      res.json({ ok: true });
    } catch (err) {
      console.error("verifyPayment error", err);
      res.status(500).json({ error: "Verification failed" });
    }
  });
});

/* -------------------------------------------------------------------------
 * createCodOrder
 * POST { amount, currency, cart, customer }
 * No payment gateway involved — the order goes straight to your fulfillment provider marked
 * as Cash on Delivery, and the buyer pays the courier on arrival.
 * ---------------------------------------------------------------------- */
exports.createCodOrder = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { amount, currency = "INR", cart = [], customer = {} } = req.body;
      if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }
      if (!customer.name || !customer.phone || !customer.address || !customer.pincode) {
        return res.status(400).json({ error: "Missing shipping details" });
      }

      const orderRef = db.collection("orders").doc();
      await orderRef.set({
        status: "cod_pending",
        paymentMethod: "cod",
        amount,
        currency,
        cart,
        customer,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      try {
        const fulfillmentResult = await createFulfillmentOrder({
          cart,
          customer,
          razorpay_order_id: orderRef.id,
          paymentMethod: "cod",
        });
        await orderRef.update({ fulfillmentStatus: "sent", fulfillmentResponse: fulfillmentResult });
      } catch (qErr) {
        console.error("Fulfillment provider COD order error", qErr);
        await orderRef.update({ fulfillmentStatus: "failed", fulfillmentError: String(qErr) });
        // Order is still recorded — surface as failure so the buyer can retry
        // or you can manually push it to your fulfillment provider from the Firestore console.
        return res.status(502).json({ error: "Order saved but fulfillment dispatch failed — check Firestore." });
      }

      res.json({ ok: true, orderId: orderRef.id });
    } catch (err) {
      console.error("createCodOrder error", err);
      res.status(500).json({ error: "Failed to place COD order" });
    }
  });
});

/* -------------------------------------------------------------------------
 * createFulfillmentOrder — internal helper
 * Adjust the endpoint path/payload to match the exact spec in your fulfillment provider
 * dashboard's API/Integration docs (Dashboard > Settings > API) — in
 * particular, confirm the exact field name your fulfillment provider expects for COD vs
 * prepaid orders (commonly "payment_method": "cod" | "prepaid").
 * ---------------------------------------------------------------------- */
async function createFulfillmentOrder({ cart, customer, razorpay_order_id, paymentMethod = "prepaid" }) {
  const q = cfg().fulfillment || {};
  if (!q.client_id || !q.client_secret || !q.api_base) {
    throw new Error("Fulfillment provider credentials not configured — set them with firebase functions:config:set");
  }

  const payload = {
    order_number: razorpay_order_id,
    payment_method: paymentMethod, // "cod" or "prepaid" — verify against your fulfillment provider's docs
    customer,
    line_items: cart.map((item) => ({
      sku: item.id,
      size: item.size,
      quantity: item.qty,
    })),
  };

  const resp = await fetch(`${q.api_base}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ClientId": q.client_id,
      "Authorization": `Bearer ${q.client_secret}`,
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    throw new Error(`fulfillment provider's API responded ${resp.status}: ${await resp.text()}`);
  }
  return resp.json();
}

/* -------------------------------------------------------------------------
 * getFulfillmentProducts
 * GET — proxies your fulfillment provider product catalog so the frontend never needs
 * the fulfillment provider's secret key. Swap the mock PRODUCTS array in index.html for a
 * fetch() to this endpoint once it's deployed.
 * ---------------------------------------------------------------------- */
exports.getFulfillmentProducts = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const q = cfg().fulfillment || {};
      const resp = await fetch(`${q.api_base}/products`, {
        headers: {
          "ClientId": q.client_id,
          "Authorization": `Bearer ${q.client_secret}`,
        },
      });
      const data = await resp.json();
      res.json(data);
    } catch (err) {
      console.error("getFulfillmentProducts error", err);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
});

/* -------------------------------------------------------------------------
 * onRatingWrite — Firestore trigger
 * Recomputes the average/count whenever a rating is added or changed, and
 * writes it to ratingSummaries/{productId} so the storefront can read one
 * cheap document instead of every individual rating.
 * ---------------------------------------------------------------------- */
exports.onRatingWrite = functions.firestore
  .document("products/{productId}/ratings/{userId}")
  .onWrite(async (change, context) => {
    const { productId } = context.params;
    const snap = await db.collection("products").doc(productId).collection("ratings").get();
    if (snap.empty) return null;

    let total = 0;
    snap.forEach((doc) => (total += doc.data().stars || 0));
    const count = snap.size;
    const average = total / count;

    return db.collection("ratingSummaries").doc(productId).set({
      average,
      count,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  });
