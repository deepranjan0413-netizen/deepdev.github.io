# PRESSMARK — Print-on-Demand Storefront

A 3D, print-on-demand storefront that connects to your fulfillment provider's catalog, takes secure payments through Razorpay, stores ratings/orders in Firebase (your Google account), and lives on GitHub so you can keep editing it.

**How the pieces fit together:**

```
 Shopper's browser                 GitHub Pages                Firebase (Google Cloud)          Fulfillment Provider & Razorpay
 ┌────────────────┐   serves     ┌───────────────┐  calls    ┌────────────────────┐   calls   ┌──────────────────┐
 │ index.html      │◄────────────│ your GitHub    │──────────►│ Cloud Functions     │──────────►│ fulfillment provider's API        │
 │ (3D UI, cart)   │              │ repo (static)  │           │ (secret keys live   │           │ (products/orders) │
 │                 │─────────────────────────────────────────►│ here, never in the  │──────────►│ Razorpay API      │
 │                 │  auth/data                                │ browser)            │           │ (payments)        │
 └────────────────┘                                            │ + Firestore (ratings,│
                                                                 │   orders, sign-in)   │
                                                                 └────────────────────┘
```

**Why GitHub can't be the whole server:** GitHub Pages only serves static files. Payment logic and your fulfillment provider secret key have to run somewhere that keeps them hidden from the browser — that's what the small `functions/` folder does, hosted on Firebase (still free-tier friendly, still fully yours). GitHub still hosts and version-controls everything, including that backend code, and you redeploy it with one command whenever you edit it.

---

## 1. Set up Firebase (data + secure backend + Google sign-in)

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project** → name it (e.g. `pressmark-store`).
2. In the project, go to **Build → Firestore Database → Create database** (start in production mode).
3. Go to **Build → Authentication → Get started → Sign-in method → enable Google**.
4. Go to **Project settings → General → Your apps → Add app → Web (`</>`)**. Copy the `firebaseConfig` object it gives you.
5. Paste those values into `index.html`, inside `window.SITE_CONFIG.firebase` near the top of the file.
6. Cloud Functions need the **Blaze (pay-as-you-go)** plan because they call external APIs (Razorpay, your fulfillment provider). It has a generous free tier — you won't be billed at low volume, but Google requires a card on file. Upgrade under **Project settings → Usage and billing**.

Install the Firebase CLI once, locally or in Codespaces:
```bash
npm install -g firebase-tools
firebase login
cd pressmark-store
firebase use --add        # pick your new Firebase project
```

## 2. Connect Razorpay (secure payment gateway)

1. Create a account at [dashboard.razorpay.com](https://dashboard.razorpay.com) and complete KYC (needed before you can accept live payments).
2. Go to **Settings → API Keys → Generate Test Key** first (switch to Live keys once you're ready to go live).
3. Copy the **Key ID** into `index.html` → `window.SITE_CONFIG.razorpayKeyId`.
4. Set the **Key ID + Key Secret** on your backend (the secret must *never* go in `index.html`):
   ```bash
   firebase functions:config:set razorpay.key_id="rzp_test_XXXX" razorpay.key_secret="YOUR_SECRET"
   ```

This is what makes checkout genuinely secure: card details are handled entirely inside Razorpay's own hosted checkout widget, and the payment signature is verified server-side in `functions/index.js` before anything is marked "paid."

## 3. Connect your fulfillment provider

1. Log into your fulfillment provider's dashboard, and open the **API / Integration** section (Settings → API in the dashboard) — this is where your fulfillment provider issues your Client ID and Client Secret for programmatic access.
2. Note the API base URL they give you (sandbox vs. live).
3. Set these on your backend:
   ```bash
   firebase functions:config:set fulfillment.client_id="YOUR_CLIENT_ID" fulfillment.client_secret="YOUR_CLIENT_SECRET" fulfillment.api_base="YOUR_FULFILLMENT_PROVIDER_API_BASE"
   ```
4. Open `functions/index.js` and check the `createFulfillmentOrder` and `getFulfillmentProducts` functions — adjust the endpoint paths and payload fields to exactly match what your fulfillment provider's API docs specify (their field names may differ slightly from the placeholders here; the dashboard's API section includes a reference/Swagger doc).
5. Once confirmed working, replace the hardcoded `PRODUCTS` array in `index.html` with a `fetch()` to your deployed `getFulfillmentProducts` function, so the catalog stays in sync with your fulfillment provider automatically.

## 4. Deploy the backend

```bash
cd functions
npm install
cd ..
firebase deploy --only functions,firestore:rules
```

Copy the printed function URLs (they look like `https://us-central1-your-project.cloudfunctions.net/createRazorpayOrder`) and set the base of that in `index.html` → `window.SITE_CONFIG.functionsBase`.

## 5. Put it on GitHub (and make it redeployable)

```bash
cd pressmark-store
git init
git add .
git commit -m "Initial storefront"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pressmark-store.git
git push -u origin main
```

Then in your GitHub repo: **Settings → Pages → Source → GitHub Actions**. The included workflow (`.github/workflows/deploy.yml`) will publish the site automatically on every push — your live URL will be `https://YOUR_USERNAME.github.io/pressmark-store/`.

**To change anything later:** edit `index.html` (colors, copy, products, layout), commit, and push. It redeploys itself. Backend changes (`functions/index.js`) need one more command: `firebase deploy --only functions`.

## 6. Go live checklist

- [ ] Razorpay KYC approved, switched from test keys to live keys
- [ ] fulfillment provider's API base switched from sandbox to production
- [ ] Firestore rules deployed (`firebase deploy --only firestore:rules`) — they're already written to lock down orders and ratings correctly
- [ ] Custom domain connected (optional): GitHub Pages → Settings → Pages → Custom domain
- [ ] Real product photos swapped in for the placeholder images
- [ ] Privacy policy / refund policy pages filled in (footer links are stubbed)

## What's mocked right now vs. live

| Feature | Current state | To make it live |
|---|---|---|
| Products | 6 placeholder items in `index.html` | Point at `getFulfillmentProducts` once your fulfillment provider key is set |
| Payments | Fully wired to Razorpay, needs your keys | Add keys (Step 2) |
| Ratings | Fully wired to Firestore + Google sign-in | Add Firebase config (Step 1) |
| Order fulfillment | Calls your fulfillment provider on successful payment or COD placement | Confirm field names match your fulfillment provider's docs (Step 3.4), including the `payment_method` field used for COD |
| 3D hero | Fully live, no setup needed | — |

## File map

```
pressmark-store/
├─ index.html                 the entire storefront (3D hero, catalog, cart, checkout, ratings)
├─ firebase.json               Firebase project config
├─ firestore.rules             who can read/write what in the database
├─ firestore.indexes.json      required by Firebase, empty for now
├─ functions/
│  ├─ index.js                 secure backend: Razorpay orders, your fulfillment provider orders, rating aggregation
│  └─ package.json
└─ .github/workflows/deploy.yml   auto-publishes index.html to GitHub Pages on push
```
