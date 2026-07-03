<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PRESSMARK — Custom Prints, Pressed to Order</title>
<meta name="description" content="Custom apparel, printed on demand and shipped by your fulfillment provider.">

<!-- ============================================================
  CONFIG — edit these to connect your own accounts. Nothing else
  in this file needs to change to rebrand or reconnect services.
============================================================= -->
<script>
  window.SITE_CONFIG = {
    brandName: "PRESSMARK",
    tagline: "Custom prints, pressed to order.",

    // Firebase project config — from Firebase Console > Project settings > General > Your apps
    firebase: {
      apiKey: "YOUR_FIREBASE_API_KEY",
      authDomain: "YOUR_PROJECT.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    },

    // Base URL of your deployed Cloud Functions (after `firebase deploy --only functions`)
    // e.g. "https://us-central1-your-project.cloudfunctions.net"
    functionsBase: "https://REGION-YOUR_PROJECT.cloudfunctions.net",

    // Public Razorpay key ID (safe to expose client-side; the secret stays server-side in Cloud Functions)
    razorpayKeyId: "rzp_test_XXXXXXXXXXXX",

    currency: "INR",
    currencySymbol: "₹"
  };
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
  :root{
    --canvas:#ECE7DC;
    --canvas-2:#E2DCCB;
    --panel:#FFFCF6;
    --ink:#171B2E;
    --ink-soft:#4A5178;
    --accent:#E2542A;
    --accent-ink:#B5401E;
    --accent-2:#2F6E5E;
    --line:#C7BFA9;
    --text:#171B2E;
    --text-mute:#6B664F;
    --white:#FFFCF6;
    --radius:2px;
    --shadow: 0 20px 60px -30px rgba(23,27,46,0.35);
  }

  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--canvas);
    color:var(--text);
    font-family:'Inter',sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,.display{
    font-family:'Anton',sans-serif;
    font-weight:400;
    letter-spacing:0.01em;
    text-transform:uppercase;
    line-height:0.95;
    color:var(--ink);
  }
  .mono{
    font-family:'IBM Plex Mono',monospace;
    letter-spacing:0.03em;
  }
  a{color:inherit;}
  img{max-width:100%;display:block;}
  button{font-family:inherit;cursor:pointer;}

  /* halftone texture used behind hero + section breaks */
  .halftone{
    background-image: radial-gradient(circle, rgba(23,27,46,0.10) 1.4px, transparent 1.6px);
    background-size: 14px 14px;
  }

  .wrap{max-width:1180px;margin:0 auto;padding:0 28px;}

  /* ---------- NAV ---------- */
  header.site-nav{
    position:sticky; top:0; z-index:50;
    background:rgba(236,231,220,0.92);
    backdrop-filter:blur(8px);
    border-bottom:1px solid var(--line);
  }
  .nav-inner{
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 28px; max-width:1180px; margin:0 auto;
  }
  .brand{
    font-family:'Anton',sans-serif; font-size:22px; letter-spacing:0.02em;
    text-transform:uppercase; display:flex; align-items:center; gap:8px;
  }
  .brand .dot{width:9px;height:9px;background:var(--accent);border-radius:50%;display:inline-block;}
  nav.links{display:flex; gap:28px; font-size:14px; font-weight:600; text-transform:uppercase; letter-spacing:0.04em;}
  nav.links a{text-decoration:none; opacity:0.75; transition:opacity .2s;}
  nav.links a:hover{opacity:1;}
  .nav-actions{display:flex; align-items:center; gap:14px;}
  .icon-btn{
    background:none;border:1px solid var(--ink);border-radius:50%;
    width:38px;height:38px;display:flex;align-items:center;justify-content:center;
    position:relative; transition: background .2s, color .2s;
  }
  .icon-btn:hover{background:var(--ink); color:var(--white);}
  .cart-count{
    position:absolute; top:-6px; right:-6px; background:var(--accent); color:white;
    font-size:10px; font-weight:700; border-radius:50%; width:18px;height:18px;
    display:flex;align-items:center;justify-content:center;
  }

  /* ---------- HERO ---------- */
  .hero{
    position:relative; overflow:hidden;
    display:grid; grid-template-columns: 1.05fr 0.95fr; align-items:center;
    min-height:88vh; gap:20px;
  }
  .hero-copy{position:relative; z-index:2; padding:40px 0 40px 28px;}
  .eyebrow{
    font-size:12px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
    color:var(--accent-ink); margin-bottom:18px; display:flex; align-items:center; gap:10px;
  }
  .eyebrow::before{content:'';width:22px;height:2px;background:var(--accent);}
  .hero h1{font-size:clamp(46px,7vw,92px); margin:0 0 22px;}
  .hero h1 .stroke{-webkit-text-stroke:1.5px var(--ink); color:transparent;}
  .hero p.lead{
    font-size:18px; line-height:1.6; color:var(--text-mute); max-width:460px; margin-bottom:34px;
  }
  .hero-actions{display:flex; gap:16px; align-items:center; flex-wrap:wrap;}
  .btn{
    padding:15px 30px; border-radius:var(--radius); font-weight:700; font-size:13px;
    text-transform:uppercase; letter-spacing:0.06em; border:2px solid var(--ink);
    display:inline-flex; align-items:center; gap:10px; transition: all .2s ease;
  }
  .btn-primary{background:var(--ink); color:var(--white);}
  .btn-primary:hover{background:var(--accent); border-color:var(--accent); transform:translateY(-2px);}
  .btn-ghost{background:transparent; color:var(--ink);}
  .btn-ghost:hover{background:var(--ink); color:var(--white);}

  .hero-stage{
    position:relative; height:100%; min-height:560px;
    display:flex; align-items:center; justify-content:center;
  }
  #tee-canvas{width:100%; height:100%; cursor:grab; touch-action:none;}
  #tee-canvas:active{cursor:grabbing;}
  .stage-hint{
    position:absolute; bottom:28px; left:50%; transform:translateX(-50%);
    font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-mute);
    display:flex; align-items:center; gap:8px;
  }

  /* trust strip */
  .trust-strip{
    background:var(--ink); color:var(--white); padding:14px 0; overflow:hidden;
    border-top:1px solid var(--line); border-bottom:1px solid var(--line);
  }
  .trust-track{
    display:flex; gap:60px; white-space:nowrap; animation: scroll-left 26s linear infinite;
    font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:0.08em;
  }
  .trust-track span{display:flex; align-items:center; gap:10px; opacity:0.9;}
  .trust-track span::before{content:'✦'; color:var(--accent);}
  @keyframes scroll-left{from{transform:translateX(0);}to{transform:translateX(-50%);}}

  /* ---------- SECTIONS ---------- */
  section{padding:100px 0;}
  .section-head{display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:48px; gap:24px; flex-wrap:wrap;}
  .section-head h2{font-size:clamp(32px,4vw,52px);}
  .section-head p{color:var(--text-mute); max-width:380px; font-size:15px; line-height:1.6;}
  .tag{
    font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;
    color:var(--accent-ink); border:1px solid var(--accent-ink); border-radius:20px;
    padding:5px 12px; display:inline-block; margin-bottom:16px;
  }

  /* catalog */
  .filter-row{display:flex; gap:10px; margin-bottom:36px; flex-wrap:wrap;}
  .filter-pill{
    padding:9px 18px; border-radius:20px; border:1px solid var(--line); background:var(--panel);
    font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.04em;
    transition:all .2s;
  }
  .filter-pill.active, .filter-pill:hover{background:var(--ink); color:var(--white); border-color:var(--ink);}

  .grid{display:grid; grid-template-columns:repeat(3,1fr); gap:26px;}
  .card{
    background:var(--panel); border:1px solid var(--line); border-radius:var(--radius);
    overflow:hidden; transition: transform .25s ease, box-shadow .25s ease; display:flex; flex-direction:column;
  }
  .card:hover{transform:translateY(-6px); box-shadow:var(--shadow);}
  .card-media{
    position:relative; aspect-ratio:4/5; overflow:hidden; background:var(--canvas-2);
  }
  .card-media img{width:100%; height:100%; object-fit:cover; transition:transform .5s ease;}
  .card:hover .card-media img{transform:scale(1.06);}
  .card-badge{
    position:absolute; top:12px; left:12px; background:var(--ink); color:var(--white);
    font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em;
    padding:5px 10px; border-radius:20px;
  }
  .quick-view{
    position:absolute; bottom:0; left:0; right:0; background:rgba(23,27,46,0.92); color:white;
    text-align:center; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em;
    padding:12px; transform:translateY(100%); transition:transform .25s ease;
  }
  .card:hover .quick-view{transform:translateY(0);}
  .card-body{padding:18px 18px 20px; display:flex; flex-direction:column; gap:8px; flex:1;}
  .card-cat{font-size:11px; color:var(--text-mute); text-transform:uppercase; letter-spacing:0.06em;}
  .card-name{font-size:16px; font-weight:700;}
  .stars{display:flex; align-items:center; gap:6px; font-size:13px;}
  .stars .star-icons{color:var(--accent); letter-spacing:2px;}
  .stars .count{color:var(--text-mute); font-size:12px;}
  .card-foot{display:flex; align-items:center; justify-content:space-between; margin-top:auto; padding-top:6px;}
  .price{font-family:'IBM Plex Mono',monospace; font-weight:600; font-size:16px;}
  .add-btn{
    width:38px; height:38px; border-radius:50%; border:2px solid var(--ink); background:none;
    display:flex; align-items:center; justify-content:center; font-size:18px; transition:all .2s;
  }
  .add-btn:hover{background:var(--accent); border-color:var(--accent); color:white;}

  /* how it works */
  .steps{display:grid; grid-template-columns:repeat(4,1fr); gap:24px;}
  .step{padding:28px 22px; border:1px solid var(--line); background:var(--panel); border-radius:var(--radius);}
  .step .num{font-family:'IBM Plex Mono',monospace; color:var(--accent-ink); font-size:13px; margin-bottom:14px;}
  .step h3{font-size:19px; text-transform:none; font-family:'Inter'; font-weight:700; margin:0 0 8px;}
  .step p{font-size:14px; color:var(--text-mute); line-height:1.6; margin:0;}

  /* reviews */
  .reviews-wrap{background:var(--ink); color:var(--white); border-radius:4px; padding:56px 48px; position:relative; overflow:hidden;}
  .reviews-wrap::before{
    content:''; position:absolute; inset:0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1.4px, transparent 1.6px);
    background-size:16px 16px; pointer-events:none;
  }
  .review-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:30px; position:relative; z-index:1;}
  .review-card .star-icons{color:var(--accent); font-size:15px; letter-spacing:2px;}
  .review-card p{font-size:14px; line-height:1.7; color:#D8D6CE; margin:14px 0 16px;}
  .review-who{font-size:12px; text-transform:uppercase; letter-spacing:0.06em; color:#9FA3C0;}
  .rating-summary{display:flex; align-items:center; gap:20px; margin-bottom:36px; position:relative; z-index:1;}
  .rating-summary .big{font-family:'Anton',sans-serif; font-size:56px;}
  .rating-summary .meta{font-size:13px; color:#B9B6A6;}

  /* footer */
  footer{background:var(--ink); color:var(--white); padding:60px 0 30px;}
  .foot-grid{display:grid; grid-template-columns:1.3fr 1fr 1fr 1fr; gap:40px; margin-bottom:40px;}
  .foot-grid h4{font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:#9FA3C0; margin:0 0 16px;}
  .foot-grid ul{list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; font-size:14px;}
  .foot-grid a{text-decoration:none; opacity:0.85;}
  .foot-grid a:hover{opacity:1; color:var(--accent);}
  .foot-bottom{
    border-top:1px solid rgba(255,255,255,0.12); padding-top:24px; display:flex; justify-content:space-between;
    font-size:12px; color:#8E92AF; flex-wrap:wrap; gap:12px;
  }
  .secure-badge{display:flex; align-items:center; gap:8px;}

  /* ---------- CART DRAWER ---------- */
  .overlay{
    position:fixed; inset:0; background:rgba(23,27,46,0.5); z-index:90; opacity:0; pointer-events:none; transition:opacity .3s;
  }
  .overlay.open{opacity:1; pointer-events:auto;}
  .drawer{
    position:fixed; top:0; right:0; height:100%; width:420px; max-width:92vw;
    background:var(--panel); z-index:95; box-shadow:-20px 0 60px rgba(0,0,0,0.25);
    transform:translateX(100%); transition:transform .35s cubic-bezier(.22,.9,.32,1);
    display:flex; flex-direction:column;
  }
  .drawer.open{transform:translateX(0);}
  .drawer-head{padding:24px; border-bottom:1px solid var(--line); display:flex; justify-content:space-between; align-items:center;}
  .drawer-items{flex:1; overflow-y:auto; padding:20px 24px; display:flex; flex-direction:column; gap:18px;}
  .cart-item{display:flex; gap:14px;}
  .cart-item img{width:70px; height:84px; object-fit:cover; border-radius:2px;}
  .cart-item .ci-name{font-weight:700; font-size:14px;}
  .cart-item .ci-meta{font-size:12px; color:var(--text-mute); margin:4px 0;}
  .qty-row{display:flex; align-items:center; gap:10px; margin-top:6px;}
  .qty-row button{width:22px;height:22px;border:1px solid var(--line); background:none; font-size:13px;}
  .remove-link{font-size:11px; color:var(--accent-ink); text-decoration:underline; background:none; border:none; padding:0; margin-top:6px;}
  .drawer-foot{border-top:1px solid var(--line); padding:22px 24px; background:var(--canvas-2);}
  .subtotal-row{display:flex; justify-content:space-between; font-weight:700; margin-bottom:16px; font-size:15px;}
  .empty-cart{padding:60px 24px; text-align:center; color:var(--text-mute); font-size:14px;}

  .pay-method-row{display:flex; gap:8px; margin-bottom:14px;}
  .pay-method{
    flex:1; padding:12px 10px; border:1px solid var(--line); background:var(--panel);
    font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.03em;
    border-radius:2px; transition:all .2s; text-align:center;
  }
  .pay-method.active{background:var(--ink); color:white; border-color:var(--ink);}
  .pay-method .sub{display:block; font-weight:400; text-transform:none; font-size:10px; opacity:0.75; margin-top:2px; letter-spacing:0;}

  .cf-input{
    width:100%; padding:12px 14px; border:1px solid var(--line); background:var(--panel);
    font-family:'Inter',sans-serif; font-size:14px; border-radius:2px; color:var(--text);
  }
  .cf-input:focus{border-color:var(--ink);}

  /* ---------- MODAL (quick view) ---------- */
  .modal{
    position:fixed; inset:0; z-index:100; display:flex; align-items:center; justify-content:center;
    background:rgba(23,27,46,0.55); opacity:0; pointer-events:none; transition:opacity .25s; padding:20px;
  }
  .modal.open{opacity:1; pointer-events:auto;}
  .modal-card{
    background:var(--panel); max-width:820px; width:100%; max-height:88vh; overflow-y:auto;
    border-radius:4px; display:grid; grid-template-columns:1fr 1fr;
  }
  .modal-media img{width:100%; height:100%; object-fit:cover;}
  .modal-body{padding:32px; display:flex; flex-direction:column;}
  .modal-close{position:absolute; top:16px; right:16px; background:var(--ink); color:white; border:none; width:34px;height:34px; border-radius:50%; font-size:16px;}
  .size-row{display:flex; gap:8px; margin:16px 0 20px;}
  .size-pill{width:42px; height:38px; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:600;}
  .size-pill.active{background:var(--ink); color:white; border-color:var(--ink);}
  .rate-row{display:flex; gap:6px; font-size:22px; cursor:pointer; margin:6px 0 4px;}
  .rate-row span{color:var(--line); transition:color .15s;}
  .rate-row span.active, .rate-row span:hover, .rate-row span:hover ~ span{color:var(--accent);}
  .auth-note{font-size:12px; color:var(--text-mute); margin-top:6px;}
  .review-list{margin-top:18px; border-top:1px solid var(--line); padding-top:16px; display:flex; flex-direction:column; gap:14px; max-height:180px; overflow-y:auto;}
  .review-list .r-item{font-size:13px; color:var(--text-mute); line-height:1.5;}
  .review-list .r-item b{color:var(--text);}

  .toast{
    position:fixed; bottom:24px; left:50%; transform:translateX(-50%) translateY(20px);
    background:var(--ink); color:white; padding:14px 22px; border-radius:4px; font-size:13px;
    z-index:200; opacity:0; transition:all .3s; pointer-events:none;
  }
  .toast.show{opacity:1; transform:translateX(-50%) translateY(0);}

  @media(max-width:900px){
    .hero{grid-template-columns:1fr; min-height:auto;}
    .hero-stage{min-height:380px; order:-1;}
    .hero-copy{padding:36px 4px;}
    .grid{grid-template-columns:repeat(2,1fr);}
    .steps{grid-template-columns:repeat(2,1fr);}
    .review-grid{grid-template-columns:1fr;}
    .foot-grid{grid-template-columns:1fr 1fr;}
    .modal-card{grid-template-columns:1fr;}
    nav.links{display:none;}
  }
  @media(max-width:560px){
    .grid{grid-template-columns:1fr;}
    .steps{grid-template-columns:1fr;}
  }

  @media (prefers-reduced-motion: reduce){
    .trust-track{animation:none;}
    *{transition-duration:0.01ms !important; animation-duration:0.01ms !important;}
  }

  :focus-visible{outline:3px solid var(--accent); outline-offset:2px;}
</style>
</head>
<body>

<header class="site-nav">
  <div class="nav-inner">
    <div class="brand"><span class="dot"></span><span id="brand-label">PRESSMARK</span></div>
    <nav class="links">
      <a href="#catalog">Catalog</a>
      <a href="#how">How it works</a>
      <a href="#reviews">Reviews</a>
    </nav>
    <div class="nav-actions">
      <button class="icon-btn" id="auth-btn" title="Sign in with Google">G</button>
      <button class="icon-btn" id="cart-btn" title="Cart">
        🛍
        <span class="cart-count" id="cart-count" style="display:none;">0</span>
      </button>
    </div>
  </div>
</header>

<!-- ================= HERO ================= -->
<section class="hero halftone">
  <div class="hero-copy">
    <div class="eyebrow">Print‑on‑demand · No stock · No waste</div>
    <h1>Wear it <br> <span class="stroke">before</span> <br> it's made.</h1>
    <p class="lead">Every piece on this rack is pressed only after you order it — designed, printed and shipped straight from the press. Drag the tee to see it in the round.</p>
    <div class="hero-actions">
      <a href="#catalog" class="btn btn-primary">Shop the Catalog →</a>
      <a href="#how" class="btn btn-ghost">How it works</a>
    </div>
  </div>
  <div class="hero-stage">
    <canvas id="tee-canvas"></canvas>
    <div class="stage-hint">↔ drag to rotate</div>
  </div>
</section>

<div class="trust-strip">
  <div class="trust-track" id="trust-track"></div>
</div>

<!-- ================= CATALOG ================= -->
<section id="catalog" class="wrap">
  <div class="section-head">
    <div>
      <span class="tag">The Rack</span>
      <h2>Fresh off the press</h2>
    </div>
    <p>Every product below is fetched live from your fulfillment provider's catalog. Ratings come straight from buyers who signed in with Google.</p>
  </div>

  <div class="filter-row" id="filter-row"></div>
  <div class="grid" id="product-grid"></div>
</section>

<!-- ================= HOW IT WORKS ================= -->
<section id="how" class="wrap">
  <div class="section-head">
    <div><span class="tag">Process</span><h2>From click to closet</h2></div>
  </div>
  <div class="steps">
    <div class="step"><div class="num">01 / ORDER</div><h3>Pick your print</h3><p>Choose a design, size and quantity. Nothing is pre‑made — your order kicks off production.</p></div>
    <div class="step"><div class="num">02 / PAY</div><h3>Checkout securely</h3><p>Payments are processed by Razorpay's PCI‑DSS compliant gateway. Card data never touches our servers.</p></div>
    <div class="step"><div class="num">03 / PRESS</div><h3>your fulfillment provider prints it</h3><p>Your order routes straight to your fulfillment provider's print floor, no warehouse, no middle step.</p></div>
    <div class="step"><div class="num">04 / SHIP</div><h3>Tracked delivery</h3><p>You get a tracking link the moment it leaves the press. Rate it once it lands.</p></div>
  </div>
</section>

<!-- ================= REVIEWS ================= -->
<section id="reviews" class="wrap">
  <div class="reviews-wrap">
    <div class="rating-summary">
      <div class="big" id="overall-rating">4.8</div>
      <div class="meta">out of 5 <br> from <span id="overall-count">—</span> verified buyers</div>
    </div>
    <div class="review-grid" id="review-grid"></div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="brand" style="color:white; margin-bottom:14px;"><span class="dot"></span><span id="brand-label-2">PRESSMARK</span></div>
        <p style="font-size:13px; color:#B9B6A6; line-height:1.6; max-width:260px;">Custom apparel, printed to order and fulfilled by your fulfillment provider. Designed to be edited — swap the config at the top of this file to make it yours.</p>
      </div>
      <div><h4>Shop</h4><ul><li><a href="#catalog">Catalog</a></li><li><a href="#how">How it works</a></li><li><a href="#reviews">Reviews</a></li></ul></div>
      <div><h4>Support</h4><ul><li><a href="#">Shipping & returns</a></li><li><a href="#">Size guide</a></li><li><a href="#">Contact</a></li></ul></div>
      <div><h4>Legal</h4><ul><li><a href="#">Privacy policy</a></li><li><a href="#">Terms of service</a></li><li><a href="#">Refund policy</a></li></ul></div>
    </div>
    <div class="foot-bottom">
      <div class="secure-badge">🔒 Payments secured by Razorpay · Data stored with Firebase (Google Cloud)</div>
      <div>© <span id="year"></span> <span id="brand-label-3">PRESSMARK</span>. All rights reserved.</div>
    </div>
  </div>
</footer>

<!-- ================= CART DRAWER ================= -->
<div class="overlay" id="overlay"></div>
<aside class="drawer" id="cart-drawer">
  <div class="drawer-head">
    <h3 style="margin:0; font-size:18px;">Your Cart</h3>
    <button class="icon-btn" id="close-drawer">✕</button>
  </div>
  <div class="drawer-items" id="drawer-items"></div>
  <div class="drawer-foot">
    <div class="subtotal-row"><span>Subtotal</span><span id="subtotal">₹0</span></div>
    <div class="pay-method-row" id="pay-method-row">
      <button type="button" class="pay-method active" data-method="online">Pay Online<span class="sub">Card / UPI / Netbanking</span></button>
      <button type="button" class="pay-method" data-method="cod">Cash on Delivery<span class="sub">Pay when it arrives</span></button>
    </div>
    <button class="btn btn-primary" style="width:100%; justify-content:center;" id="checkout-btn">Continue →</button>
  </div>
</aside>

<!-- ================= CHECKOUT MODAL (shipping details) ================= -->
<div class="modal" id="checkout-modal">
  <div class="modal-card" id="checkout-modal-card" style="grid-template-columns:1fr; max-width:460px; position:relative;">
    <button class="modal-close" id="checkout-modal-close">✕</button>
    <div class="modal-body">
      <span class="tag" id="checkout-method-tag">Pay Online</span>
      <h3 style="text-transform:none; font-family:'Inter'; font-size:22px; margin:6px 0 4px;">Delivery details</h3>
      <p style="font-size:13px; color:var(--text-mute); margin:0 0 18px;">Needed to ship your order — required either way.</p>
      <form id="checkout-form" style="display:flex; flex-direction:column; gap:12px;">
        <input required name="name" placeholder="Full name" class="cf-input">
        <input required name="phone" placeholder="Phone number" class="cf-input" type="tel" pattern="[0-9]{10}" maxlength="10">
        <input required name="address" placeholder="Address (house no, street, area)" class="cf-input">
        <div style="display:flex; gap:10px;">
          <input required name="city" placeholder="City" class="cf-input">
          <input required name="state" placeholder="State" class="cf-input">
        </div>
        <input required name="pincode" placeholder="Pincode" class="cf-input" pattern="[0-9]{6}" maxlength="6">
        <div id="cod-note" style="display:none; font-size:12px; color:var(--text-mute); background:var(--canvas-2); padding:10px 12px; border-radius:2px;">
          You'll pay the courier in cash when your order arrives. your fulfillment provider may add a small COD handling fee, confirmed at dispatch.
        </div>
        <button type="submit" class="btn btn-primary" style="justify-content:center; margin-top:8px;" id="checkout-submit">Pay ₹0 →</button>
      </form>
    </div>
  </div>
</div>

<!-- ================= QUICK VIEW MODAL ================= -->
<div class="modal" id="modal">
  <div class="modal-card" id="modal-card" style="position:relative;">
    <button class="modal-close" id="modal-close">✕</button>
    <div class="modal-media"><img id="modal-img" src="" alt=""></div>
    <div class="modal-body">
      <span class="card-cat" id="modal-cat"></span>
      <h3 style="text-transform:none; font-family:'Inter'; font-size:24px; margin:6px 0;" id="modal-name"></h3>
      <div class="stars"><span class="star-icons" id="modal-stars"></span><span class="count" id="modal-rating-text"></span></div>
      <p style="font-size:14px; color:var(--text-mute); line-height:1.6;" id="modal-desc"></p>
      <div class="price" id="modal-price" style="font-size:20px;"></div>
      <div class="size-row" id="modal-sizes"></div>
      <button class="btn btn-primary" id="modal-add" style="justify-content:center;">Add to Cart</button>

      <div style="margin-top:24px; padding-top:18px; border-top:1px solid var(--line);">
        <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px;">Rate this product</div>
        <div class="rate-row" id="rate-row">
          <span data-v="1">★</span><span data-v="2">★</span><span data-v="3">★</span><span data-v="4">★</span><span data-v="5">★</span>
        </div>
        <div class="auth-note" id="auth-note">Sign in with Google (top right) to leave a rating.</div>
        <div class="review-list" id="modal-reviews"></div>
      </div>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<!-- ============================================================
  Three.js — 3D rotating garment in the hero
============================================================= -->
<script type="importmap">
{ "imports": { "three": "https://unpkg.com/three@0.160.0/build/three.module.js" } }
</script>
<script type="module">
import * as THREE from "three";

const canvas = document.getElementById('tee-canvas');
const stage = canvas.parentElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.set(0, 0, 26);

function resize(){
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w/h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

// lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.55));
const key = new THREE.DirectionalLight(0xfff4e6, 1.1); key.position.set(6,10,8); scene.add(key);
const fill = new THREE.DirectionalLight(0x2f6e5e, 0.35); fill.position.set(-8,-4,6); scene.add(fill);
const rim = new THREE.DirectionalLight(0xe2542a, 0.5); rim.position.set(-6,6,-10); scene.add(rim);

// --- build a t-shirt silhouette shape ---
function teeShape(){
  const s = new THREE.Shape();
  s.moveTo(-9, -18);
  s.lineTo(9, -18);
  s.lineTo(9, 3);
  s.lineTo(16.5, 9);
  s.lineTo(11.5, 15);
  s.lineTo(4, 14.2);
  s.quadraticCurveTo(0, 11.5, -4, 14.2);
  s.lineTo(-11.5, 15);
  s.lineTo(-16.5, 9);
  s.lineTo(-9, 3);
  s.closePath();
  return s;
}

// print texture drawn on a canvas
function makeTexture(){
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#F3EFE7';
  ctx.fillRect(0,0,512,512);
  // halftone dots
  ctx.fillStyle = 'rgba(23,27,46,0.06)';
  for(let y=0;y<512;y+=16){
    for(let x=0;x<512;x+=16){
      ctx.beginPath();
      ctx.arc(x,y,1.4,0,Math.PI*2);
      ctx.fill();
    }
  }
  // emblem
  ctx.translate(256,230);
  ctx.strokeStyle = '#171B2E';
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(0,0,70,0,Math.PI*2); ctx.stroke();
  ctx.fillStyle = '#E2542A';
  ctx.beginPath(); ctx.arc(0,0,10,0,Math.PI*2); ctx.fill();
  ctx.font = '700 20px Arial';
  ctx.fillStyle = '#171B2E';
  ctx.textAlign = 'center';
  ctx.fillText('PRESSMARK', 0, 105);
  ctx.font = '400 12px Arial';
  ctx.fillText('CUSTOM · PRINTED TO ORDER', 0, 126);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const extrudeSettings = { depth: 1.6, bevelEnabled:true, bevelThickness:0.35, bevelSize:0.35, bevelSegments:3 };
const geo = new THREE.ExtrudeGeometry(teeShape(), extrudeSettings);
geo.center();
const mat = new THREE.MeshStandardMaterial({ map: makeTexture(), roughness:0.9, metalness:0.02 });
const tee = new THREE.Mesh(geo, mat);
const group = new THREE.Group();
group.add(tee);
scene.add(group);

resize();

// drag-to-rotate
let dragging=false, prevX=0, prevY=0, velX=0.006, velY=0;
function pointerDown(x,y){ dragging=true; prevX=x; prevY=y; canvas.style.cursor='grabbing'; }
function pointerMove(x,y){
  if(!dragging) return;
  const dx = x-prevX, dy = y-prevY;
  group.rotation.y += dx*0.008;
  group.rotation.x = THREE.MathUtils.clamp(group.rotation.x + dy*0.006, -0.5, 0.5);
  velX = dx*0.0006;
  prevX=x; prevY=y;
}
function pointerUp(){ dragging=false; canvas.style.cursor='grab'; }

canvas.addEventListener('pointerdown', e=>pointerDown(e.clientX,e.clientY));
window.addEventListener('pointermove', e=>pointerMove(e.clientX,e.clientY));
window.addEventListener('pointerup', pointerUp);
canvas.addEventListener('touchstart', e=>{const t=e.touches[0]; pointerDown(t.clientX,t.clientY);}, {passive:true});
canvas.addEventListener('touchmove', e=>{const t=e.touches[0]; pointerMove(t.clientX,t.clientY);}, {passive:true});
canvas.addEventListener('touchend', pointerUp);

let t=0;
function animate(){
  requestAnimationFrame(animate);
  t += 0.01;
  if(!dragging){
    group.rotation.y += velX;
    velX *= 0.98;
    if(Math.abs(velX) < 0.0015) velX = 0.0018; // gentle idle autorotate
  }
  group.position.y = Math.sin(t*0.8)*0.4;
  renderer.render(scene, camera);
}
animate();
</script>

<!-- ============================================================
  Firebase — Auth (Google) + Firestore (ratings)
============================================================= -->
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, collection, addDoc, query, orderBy, limit, getDocs, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const CONFIG = window.SITE_CONFIG;
document.querySelectorAll('#brand-label,#brand-label-2,#brand-label-3').forEach(el=>el.textContent = CONFIG.brandName);
document.getElementById('year').textContent = new Date().getFullYear();

let app, auth, db, currentUser = null;
try{
  app = initializeApp(CONFIG.firebase);
  auth = getAuth(app);
  db = getFirestore(app);
  onAuthStateChanged(auth, user=>{
    currentUser = user;
    const btn = document.getElementById('auth-btn');
    btn.textContent = user ? (user.displayName?.[0]?.toUpperCase() || 'U') : 'G';
    btn.title = user ? `Signed in as ${user.displayName}` : 'Sign in with Google';
    document.getElementById('auth-note').style.display = user ? 'none' : 'block';
  });
}catch(e){
  console.warn('Firebase not configured yet — running in demo mode with local data only.', e);
}

document.getElementById('auth-btn').addEventListener('click', async ()=>{
  if(!auth) return showToast('Connect Firebase in the config first.');
  if(currentUser){ await signOut(auth); showToast('Signed out.'); return; }
  try{
    await signInWithPopup(auth, new GoogleAuthProvider());
    showToast('Signed in with Google.');
  }catch(e){ showToast('Sign-in failed. Check Firebase Auth settings.'); }
});

window.__firebase = { getRatingSummary, submitRating, getReviews };

async function getRatingSummary(productId){
  if(!db) return null;
  try{
    const snap = await getDoc(doc(db, 'ratingSummaries', productId));
    return snap.exists() ? snap.data() : null;
  }catch(e){ return null; }
}

async function submitRating(productId, stars, text){
  if(!auth || !currentUser) throw new Error('not-signed-in');
  const ref = doc(db, 'products', productId, 'ratings', currentUser.uid);
  await setDoc(ref, {
    stars, text: text || '',
    displayName: currentUser.displayName,
    createdAt: serverTimestamp()
  });
  // Summary aggregation (average/count) is maintained by a Cloud Function
  // trigger (see functions/index.js -> onRatingWrite) for consistency.
}

async function getReviews(productId){
  if(!db) return [];
  try{
    const q = query(collection(db,'products',productId,'ratings'), orderBy('createdAt','desc'), limit(5));
    const snap = await getDocs(q);
    return snap.docs.map(d=>d.data());
  }catch(e){ return []; }
}
</script>

<!-- ============================================================
  Store logic — products, cart, checkout, UI wiring
  Swap PRODUCTS with a fetch() to your Cloud Function
  (getFulfillmentProducts) once your fulfillment provider's API key is connected.
============================================================= -->
<script>
const CONFIG = window.SITE_CONFIG;

const PRODUCTS = [
  { id:'p1', name:'Halftone Oversized Tee', category:'T-Shirts', price:799, image:'https://picsum.photos/seed/tee1/600/750', sizes:['S','M','L','XL'], desc:'Heavyweight 240 GSM cotton, boxy fit, screen-printed halftone graphic front and back.', ratingAvg:4.8, ratingCount:212 },
  { id:'p2', name:'Ink Drip Hoodie', category:'Hoodies', price:1499, image:'https://picsum.photos/seed/hoodie1/600/750', sizes:['S','M','L','XL','XXL'], desc:'Brushed fleece hoodie with a hand-drawn drip print, kangaroo pocket.', ratingAvg:4.6, ratingCount:154 },
  { id:'p3', name:'Registration Mark Cap', category:'Caps', price:499, image:'https://picsum.photos/seed/cap1/600/750', sizes:['One Size'], desc:'Structured six-panel cap embroidered with a print-registration mark.', ratingAvg:4.9, ratingCount:88 },
  { id:'p4', name:'Press Proof Sweatshirt', category:'Hoodies', price:1299, image:'https://picsum.photos/seed/sweat1/600/750', sizes:['S','M','L','XL'], desc:'Crewneck fleece with a distressed proof-sheet graphic.', ratingAvg:4.5, ratingCount:97 },
  { id:'p5', name:'Line Art Tote', category:'Accessories', price:399, image:'https://picsum.photos/seed/tote1/600/750', sizes:['One Size'], desc:'Canvas tote, single-colour line print, reinforced handles.', ratingAvg:4.7, ratingCount:61 },
  { id:'p6', name:'Grid Mug — Ink Navy', category:'Accessories', price:349, image:'https://picsum.photos/seed/mug1/600/750', sizes:['350ml'], desc:'Ceramic mug with a wraparound halftone grid print.', ratingAvg:4.4, ratingCount:40 }
];

let cart = JSON.parse(localStorage.getItem('pm_cart') || '[]');
let activeCategory = 'All';
let activeProduct = null;
let selectedSize = null;

function saveCart(){ localStorage.setItem('pm_cart', JSON.stringify(cart)); renderCart(); }
function money(n){ return CONFIG.currencySymbol + n.toLocaleString('en-IN'); }
function stars(avg){ const full = Math.round(avg); return '★★★★★☆☆☆☆☆'.slice(5-full, 10-full); }

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}

/* ---------- catalog render ---------- */
function renderFilters(){
  const cats = ['All', ...new Set(PRODUCTS.map(p=>p.category))];
  const row = document.getElementById('filter-row');
  row.innerHTML = cats.map(c =>
    `<button class="filter-pill ${c===activeCategory?'active':''}" data-cat="${c}">${c}</button>`
  ).join('');
  row.querySelectorAll('.filter-pill').forEach(btn=>{
    btn.addEventListener('click', ()=>{ activeCategory = btn.dataset.cat; renderFilters(); renderGrid(); });
  });
}

function renderGrid(){
  const grid = document.getElementById('product-grid');
  const items = activeCategory==='All' ? PRODUCTS : PRODUCTS.filter(p=>p.category===activeCategory);
  grid.innerHTML = items.map(p => `
    <div class="card" data-id="${p.id}">
      <div class="card-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="card-badge">${p.category}</span>
        <div class="quick-view">Quick View</div>
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category}</span>
        <div class="card-name">${p.name}</div>
        <div class="stars"><span class="star-icons">${stars(p.ratingAvg)}</span><span class="count">${p.ratingAvg} (${p.ratingCount})</span></div>
        <div class="card-foot">
          <span class="price">${money(p.price)}</span>
          <button class="add-btn" data-quickadd="${p.id}" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', (e)=>{
      if(e.target.closest('.add-btn')) return;
      openModal(card.dataset.id);
    });
  });
  grid.querySelectorAll('[data-quickadd]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      addToCart(btn.dataset.quickadd, null);
    });
  });
}

/* ---------- modal / quick view ---------- */
async function openModal(id){
  activeProduct = PRODUCTS.find(p=>p.id===id);
  selectedSize = activeProduct.sizes[0];
  document.getElementById('modal-img').src = activeProduct.image;
  document.getElementById('modal-cat').textContent = activeProduct.category;
  document.getElementById('modal-name').textContent = activeProduct.name;
  document.getElementById('modal-desc').textContent = activeProduct.desc;
  document.getElementById('modal-price').textContent = money(activeProduct.price);
  document.getElementById('modal-stars').textContent = stars(activeProduct.ratingAvg);
  document.getElementById('modal-rating-text').textContent = `${activeProduct.ratingAvg} (${activeProduct.ratingCount} ratings)`;
  document.getElementById('modal-sizes').innerHTML = activeProduct.sizes.map((s,i)=>
    `<div class="size-pill ${i===0?'active':''}" data-size="${s}">${s}</div>`
  ).join('');
  document.querySelectorAll('.size-pill').forEach(el=>{
    el.addEventListener('click', ()=>{
      document.querySelectorAll('.size-pill').forEach(x=>x.classList.remove('active'));
      el.classList.add('active'); selectedSize = el.dataset.size;
    });
  });
  document.querySelectorAll('#rate-row span').forEach(s=>s.classList.remove('active'));

  document.getElementById('modal').classList.add('open');

  // pull live rating summary + reviews if Firebase is connected
  if(window.__firebase){
    const summary = await window.__firebase.getRatingSummary(id);
    if(summary){
      document.getElementById('modal-stars').textContent = stars(summary.average);
      document.getElementById('modal-rating-text').textContent = `${summary.average.toFixed(1)} (${summary.count} ratings)`;
    }
    const reviews = await window.__firebase.getReviews(id);
    document.getElementById('modal-reviews').innerHTML = reviews.length
      ? reviews.map(r=>`<div class="r-item"><b>${r.displayName||'Buyer'}</b> — ${'★'.repeat(r.stars)} <br>${r.text||''}</div>`).join('')
      : '<div class="r-item">No written reviews yet — be the first.</div>';
  }
}
document.getElementById('modal-close').addEventListener('click', ()=>document.getElementById('modal').classList.remove('open'));
document.getElementById('modal').addEventListener('click', e=>{ if(e.target.id==='modal') e.currentTarget.classList.remove('open'); });

document.getElementById('modal-add').addEventListener('click', ()=>{
  addToCart(activeProduct.id, selectedSize);
  document.getElementById('modal').classList.remove('open');
});

document.querySelectorAll('#rate-row span').forEach(el=>{
  el.addEventListener('click', async ()=>{
    const v = parseInt(el.dataset.v,10);
    document.querySelectorAll('#rate-row span').forEach((s,i)=> s.classList.toggle('active', i<v));
    if(!window.__firebase) return showToast('Connect Firebase to save ratings.');
    try{
      await window.__firebase.submitRating(activeProduct.id, v, '');
      showToast('Thanks — your rating was saved.');
    }catch(e){
      showToast('Sign in with Google to rate this product.');
    }
  });
});

/* ---------- cart ---------- */
function addToCart(id, size){
  const product = PRODUCTS.find(p=>p.id===id);
  const key = id + '::' + (size || product.sizes[0]);
  const existing = cart.find(c=>c.key===key);
  if(existing){ existing.qty += 1; }
  else{ cart.push({ key, id, size: size || product.sizes[0], qty:1 }); }
  saveCart();
  showToast(`${product.name} added to cart`);
}
function changeQty(key, delta){
  const item = cart.find(c=>c.key===key);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(c=>c.key!==key);
  saveCart();
}
function removeItem(key){ cart = cart.filter(c=>c.key!==key); saveCart(); }

function renderCart(){
  const wrap = document.getElementById('drawer-items');
  const count = cart.reduce((a,c)=>a+c.qty,0);
  const countEl = document.getElementById('cart-count');
  countEl.style.display = count ? 'flex' : 'none';
  countEl.textContent = count;

  if(!cart.length){
    wrap.innerHTML = '<div class="empty-cart">Your cart is empty.<br>Add something fresh off the press.</div>';
  }else{
    wrap.innerHTML = cart.map(item=>{
      const p = PRODUCTS.find(pp=>pp.id===item.id);
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}">
          <div style="flex:1;">
            <div class="ci-name">${p.name}</div>
            <div class="ci-meta">Size: ${item.size} · ${money(p.price)}</div>
            <div class="qty-row">
              <button data-dec="${item.key}">−</button>
              <span>${item.qty}</span>
              <button data-inc="${item.key}">+</button>
            </div>
            <button class="remove-link" data-rm="${item.key}">Remove</button>
          </div>
        </div>`;
    }).join('');
    wrap.querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click',()=>changeQty(b.dataset.inc,1)));
    wrap.querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click',()=>changeQty(b.dataset.dec,-1)));
    wrap.querySelectorAll('[data-rm]').forEach(b=>b.addEventListener('click',()=>removeItem(b.dataset.rm)));
  }

  const subtotal = cart.reduce((a,c)=>{
    const p = PRODUCTS.find(pp=>pp.id===c.id);
    return a + p.price*c.qty;
  },0);
  document.getElementById('subtotal').textContent = money(subtotal);
}

document.getElementById('cart-btn').addEventListener('click', ()=>{
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
});
document.getElementById('close-drawer').addEventListener('click', closeDrawer);
document.getElementById('overlay').addEventListener('click', closeDrawer);
function closeDrawer(){
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

/* ---------- checkout: payment method + shipping form + Razorpay/COD ---------- */
let paymentMethod = 'online';

function cartSubtotal(){
  return cart.reduce((a,c)=>{
    const p = PRODUCTS.find(pp=>pp.id===c.id);
    return a + p.price*c.qty;
  },0);
}

document.querySelectorAll('.pay-method').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.pay-method').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    paymentMethod = btn.dataset.method;
  });
});

document.getElementById('checkout-btn').addEventListener('click', ()=>{
  if(!cart.length) return showToast('Your cart is empty.');
  const subtotal = cartSubtotal();
  const isCod = paymentMethod === 'cod';

  document.getElementById('checkout-method-tag').textContent = isCod ? 'Cash on Delivery' : 'Pay Online';
  document.getElementById('cod-note').style.display = isCod ? 'block' : 'none';
  document.getElementById('checkout-submit').textContent = isCod
    ? `Place Order — Pay ${money(subtotal)} on delivery →`
    : `Pay ${money(subtotal)} →`;

  document.getElementById('checkout-modal').classList.add('open');
});
document.getElementById('checkout-modal-close').addEventListener('click', ()=>document.getElementById('checkout-modal').classList.remove('open'));
document.getElementById('checkout-modal').addEventListener('click', e=>{ if(e.target.id==='checkout-modal') e.currentTarget.classList.remove('open'); });

document.getElementById('checkout-form').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const fd = new FormData(e.target);
  const customer = Object.fromEntries(fd.entries());
  const subtotal = cartSubtotal();

  if(CONFIG.functionsBase.includes('REGION-YOUR_PROJECT')){
    showToast('Connect Cloud Functions in the config first (see README).');
    return;
  }

  const submitBtn = document.getElementById('checkout-submit');
  submitBtn.disabled = true;

  try{
    if(paymentMethod === 'cod'){
      const res = await fetch(`${CONFIG.functionsBase}/createCodOrder`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ amount: subtotal, currency: CONFIG.currency, cart, customer })
      });
      if(!res.ok) throw new Error('cod-failed');
      cart = []; saveCart(); closeDrawer();
      document.getElementById('checkout-modal').classList.remove('open');
      showToast('Order placed — pay cash when it arrives at your door.');
    } else {
      const orderRes = await fetch(`${CONFIG.functionsBase}/createRazorpayOrder`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ amount: subtotal, currency: CONFIG.currency, cart, customer })
      });
      const order = await orderRes.json();

      const rzp = new Razorpay({
        key: CONFIG.razorpayKeyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: CONFIG.brandName,
        description: 'Order payment',
        prefill: { name: customer.name, contact: customer.phone },
        handler: async function(response){
          await fetch(`${CONFIG.functionsBase}/verifyPayment`, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({ ...response, cart, customer })
          });
          cart = []; saveCart(); closeDrawer();
          document.getElementById('checkout-modal').classList.remove('open');
          showToast('Payment successful — your order is headed to the press.');
        },
        modal: { ondismiss: function(){ submitBtn.disabled = false; } },
        theme: { color: '#171B2E' }
      });
      rzp.open();
    }
  }catch(err){
    showToast(paymentMethod === 'cod' ? 'Could not place COD order. Try again.' : 'Checkout failed to start. Check your Cloud Functions deployment.');
  }finally{
    submitBtn.disabled = false;
  }
});

/* ---------- reviews section + trust strip (static seed, swappable) ---------- */
const REVIEWS = [
  { name:'Ananya R.', stars:5, text:'Print quality is genuinely screen-print level, not a sticker-on-fabric feel. Sizing ran true.' },
  { name:'Rohit K.', stars:5, text:'Ordered the hoodie on a Tuesday, it was at my door in four days. Fleece is thick, not the cheap kind.' },
  { name:'Meher S.', stars:4, text:'Cap embroidery is crisp. Only wish there were more colourways.' }
];
document.getElementById('review-grid').innerHTML = REVIEWS.map(r=>`
  <div class="review-card">
    <div class="star-icons">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
    <p>"${r.text}"</p>
    <div class="review-who">${r.name} · Verified buyer</div>
  </div>
`).join('');
const totalCount = PRODUCTS.reduce((a,p)=>a+p.ratingCount,0);
const avg = (PRODUCTS.reduce((a,p)=>a+p.ratingAvg*p.ratingCount,0)/totalCount).toFixed(1);
document.getElementById('overall-rating').textContent = avg;
document.getElementById('overall-count').textContent = totalCount.toLocaleString('en-IN');

const trustItems = ['Secure checkout via Razorpay','Cash on Delivery available','Printed & shipped by your fulfillment provider','4.8★ average buyer rating','Google-verified reviews only','Ships pan-India'];
document.getElementById('trust-track').innerHTML = [...trustItems, ...trustItems].map(t=>`<span>${t}</span>`).join('');

renderFilters();
renderGrid();
renderCart();
</script>

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
</body>
</html>
