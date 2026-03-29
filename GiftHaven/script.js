/* ═══════════════════════════════════════════
   GiftHaven – Main JavaScript
   Handles: products, cart, filters, modal,
            search, sort, wishlist, toast
═══════════════════════════════════════════ */

'use strict';

/* ── Product Data ───────────────────────── */
const PRODUCTS = [
  // Photo-Based Gifts
  {
    id: 1, category: 'photo', name: 'LED Photo Lamp',
    desc: 'Your favourite photo printed on an acrylic panel that glows with a warm LED light — a night-light and a memory in one.',
    price: 1299, oldPrice: 1899, rating: 4.9, reviews: 2341,
    badge: 'Best Seller', trending: false,
    img: 'images/led_photo_lamp.png', emoji: '💡'
  },
  {
    id: 2, category: 'photo', name: 'Spotify Photo Plaque',
    desc: 'Scan the code to play your song. Your photo + favourite track printed on a premium frame — the gift that plays your story.',
    price: 899, oldPrice: 1299, rating: 4.8, reviews: 1876,
    badge: 'Trending', trending: true,
    img: 'images/spotify_photo_frame.png', emoji: '🎵'
  },
  {
    id: 3, category: 'photo', name: '3D Crystal Photo Frame',
    desc: 'Your photo laser-engraved inside a crystal block with an LED base that illuminates it beautifully. Luxury at its finest.',
    price: 2499, oldPrice: 3499, rating: 4.9, reviews: 980,
    badge: 'Premium', trending: false,
    img: 'images/crystal_photo_frame.png', emoji: '💎'
  },
  {
    id: 4, category: 'photo', name: 'Photo Cube (4–6 Photos)',
    desc: 'A rotating cube displaying 4 to 6 of your favourite photos — perfect for desks, gifting couples, and families.',
    price: 749, oldPrice: 999, rating: 4.7, reviews: 654,
    badge: null, trending: false,
    img: 'images/photo_cube.png', emoji: '🎲'
  },
  {
    id: 5, category: 'photo', name: 'Custom Photo Puzzle',
    desc: 'Your picture transformed into a beautiful jigsaw puzzle. Fun to build, gorgeous to display once complete.',
    price: 599, oldPrice: 849, rating: 4.6, reviews: 812,
    badge: 'Fun Gift', trending: false,
    img: 'images/photo_puzzle.png', emoji: '🧩'
  },
  {
    id: 6, category: 'photo', name: 'Photo Calendar (12 Months)',
    desc: 'Twelve months, twelve memories. A personalised wall calendar featuring your most loved photos, one for each month.',
    price: 699, oldPrice: 999, rating: 4.5, reviews: 1230,
    badge: null, trending: false,
    img: 'images/photo_calendar.png', emoji: '📅'
  },
  {
    id: 7, category: 'photo', name: 'Polaroid Photo String Lights',
    desc: 'Mini polaroid prints clipped onto fairy lights — a dreamy room décor gift that doubles as a photo wall.',
    price: 999, oldPrice: 1399, rating: 4.8, reviews: 2100,
    badge: 'Viral 🔥', trending: true,
    img: 'images/polaroid_lights.png', emoji: '✨'
  },

  // Jewellery
  {
    id: 8, category: 'jewellery', name: 'Photo Pendant Necklace',
    desc: 'A tiny locket carrying your loved one\'s photo, set in gold or silver tone. Wear your memories close to your heart.',
    price: 1499, oldPrice: 2099, rating: 4.9, reviews: 1543,
    badge: 'Romantic', trending: false,
    img: 'images/photo_pendant_necklace.png', emoji: '💍'
  },
  {
    id: 9, category: 'jewellery', name: 'Photo Bracelet',
    desc: 'A slim stainless steel bracelet engraved with a photo or a heartfelt message. Elegant and timeless.',
    price: 999, oldPrice: 1399, rating: 4.7, reviews: 876,
    badge: null, trending: false,
    img: 'images/photo_bracelet.png', emoji: '📿'
  },
  {
    id: 10, category: 'jewellery', name: 'Photo Keychain',
    desc: 'A compact resin keychain with your photo sealed inside. Thoughtful, affordable, and always with them.',
    price: 299, oldPrice: 499, rating: 4.6, reviews: 3200,
    badge: 'Best Value', trending: false,
    img: 'images/photo_keychain.png', emoji: '🔑'
  },
  {
    id: 11, category: 'jewellery', name: 'Projection Photo Necklace',
    desc: 'Shine a light through this special necklace to reveal a projected photo — magical, unique, and jaw-dropping.',
    price: 1799, oldPrice: 2499, rating: 4.9, reviews: 678,
    badge: 'Unique!', trending: true,
    img: 'images/projection_necklace.png', emoji: '🔮'
  },
  {
    id: 12, category: 'jewellery', name: 'Couple Name Ring',
    desc: 'A custom ring engraved with both names in elegant script font — a timeless symbol of your bond.',
    price: 899, oldPrice: 1299, rating: 4.8, reviews: 1100,
    badge: null, trending: false,
    img: 'images/name_ring.png', emoji: '💑'
  },

  // Home Décor
  {
    id: 13, category: 'home', name: 'Customised LED Name Board',
    desc: 'A glowing neon-style LED board with your name, couple name, or any message in a font of your choice.',
    price: 1999, oldPrice: 2799, rating: 4.8, reviews: 1432,
    badge: 'Popular', trending: false,
    img: 'images/led_name_board.png', emoji: '✡️'
  },
  {
    id: 14, category: 'home', name: 'Couple Photo Wall Clock',
    desc: 'A real working wall clock with your couple photo printed on the face — functional, beautiful, and personal.',
    price: 1299, oldPrice: 1799, rating: 4.7, reviews: 890,
    badge: null, trending: false,
    img: 'images/photo_wall_clock.png', emoji: '🕐'
  },
  {
    id: 15, category: 'home', name: 'Custom Star Map Frame',
    desc: 'The exact star constellation of your special date — be it a birthday, anniversary, or first meeting. Stunning art print.',
    price: 1699, oldPrice: 2299, rating: 4.9, reviews: 762,
    badge: 'Romantic', trending: true,
    img: 'images/star_map_frame.png', emoji: '🌌'
  },
  {
    id: 16, category: 'home', name: 'Moon Lamp with Photo',
    desc: 'A real‑looking moon lamp with your photo and name printed on it. Touch to change colour — magical bedroom décor.',
    price: 1899, oldPrice: 2599, rating: 4.8, reviews: 1287,
    badge: 'Trending', trending: true,
    img: 'images/moon_lamp.png', emoji: '🌙'
  },
  {
    id: 17, category: 'home', name: 'Customised Wooden Engraved Frame',
    desc: 'A natural wooden frame laser-engraved with your names, date, and photo. Rustic charm meets personalised elegance.',
    price: 899, oldPrice: 1299, rating: 4.6, reviews: 654,
    badge: null, trending: false,
    img: 'images/wooden_frame.png', emoji: '🪵'
  },

  // Daily Use
  {
    id: 18, category: 'daily', name: 'Magic Colour-Change Photo Mug',
    desc: 'Pour hot coffee or tea and watch your photo magically appear on a pitch-black mug. The best morning surprise!',
    price: 599, oldPrice: 899, rating: 4.8, reviews: 4321,
    badge: 'Top Rated', trending: true,
    img: 'images/magic_mug.png', emoji: '☕'
  },
  {
    id: 19, category: 'daily', name: 'Customised Water Bottle / Tumbler',
    desc: 'A sleek stainless steel tumbler with your name, photo, or quote printed on it. Personalised hydration!',
    price: 799, oldPrice: 1099, rating: 4.6, reviews: 2100,
    badge: null, trending: false,
    img: 'images/water_bottle.png', emoji: '🥤'
  },
  {
    id: 20, category: 'daily', name: 'Photo Cushion / Pillow',
    desc: 'Soft, huggable cushion with your photo printed on one side. Perfect for gifting — feel their hug every night.',
    price: 999, oldPrice: 1399, rating: 4.7, reviews: 1876,
    badge: 'Cosy Gift', trending: false,
    img: 'images/photo_cushion.png', emoji: '🛋️'
  },
  {
    id: 21, category: 'daily', name: 'Customised Phone Case',
    desc: 'A hard or silicone phone case printed with your photo, collage, or design. Available for all major phone models.',
    price: 499, oldPrice: 799, rating: 4.5, reviews: 3450,
    badge: null, trending: false,
    img: 'images/phone_case.png', emoji: '📱'
  },
  {
    id: 22, category: 'daily', name: 'Engraved Leather Wallet',
    desc: 'A premium faux-leather wallet laser-engraved with a name or short message. Classic, useful, and heartfelt.',
    price: 1199, oldPrice: 1699, rating: 4.6, reviews: 987,
    badge: null, trending: false,
    img: 'images/engraved_wallet.png', emoji: '👜'
  },

  // Cute Trending
  {
    id: 23, category: 'cute', name: 'Explosion Gift Box',
    desc: 'Open the lid and watch layers of folded photos, messages, and surprises explode out like confetti. Viral-worthy!',
    price: 1499, oldPrice: 1999, rating: 4.9, reviews: 2987,
    badge: '🔥 Viral', trending: true,
    img: 'images/explosion_gift_box.png', emoji: '💣'
  },
  {
    id: 24, category: 'cute', name: 'Memory Scrapbook / DIY Love Book',
    desc: 'A handcrafted scrapbook kit pre-decorated with your photos, love notes, and milestone captions.',
    price: 1299, oldPrice: 1799, rating: 4.8, reviews: 1543,
    badge: 'Heartfelt', trending: true,
    img: 'images/memory_scrapbook.png', emoji: '📖'
  },
  {
    id: 25, category: 'cute', name: 'Mini Photo Album Keychain',
    desc: 'A tiny accordion-style album with 8–10 mini photos that folds out of a cute keychain locket. So adorable!',
    price: 399, oldPrice: 599, rating: 4.7, reviews: 2765,
    badge: 'Cute!', trending: true,
    img: 'images/mini_album_keychain.png', emoji: '📷'
  },
  {
    id: 26, category: 'cute', name: 'QR Code Gift Surprise',
    desc: 'Scan the QR code to open a secret photo gallery, video message, or voice note. Modern, techy, and super thoughtful.',
    price: 799, oldPrice: 1099, rating: 4.8, reviews: 1234,
    badge: 'Trending', trending: true,
    img: 'images/qr_code_gift.png', emoji: '📲'
  },
  {
    id: 27, category: 'cute', name: 'Message in a Bottle',
    desc: 'A rolled love letter, a photo, and a poem sealed inside a glass bottle with wax — vintage romance at its best.',
    price: 699, oldPrice: 999, rating: 4.7, reviews: 876,
    badge: 'Romantic', trending: true,
    img: 'images/message_bottle.png', emoji: '✉️'
  }
  ,
  {
    id: 28, category: 'cute', name: 'Mini Love Scrapbook',
    desc: 'A handcrafted mini scrapbook filled with photos, memories, cute notes, and doodles — a perfect emotional surprise.',
    price: 799, oldPrice: 1199, rating: 4.8, reviews: 642,
    badge: 'Bestseller', trending: true,
    img: 'images/mini_love_scrapbook.png', emoji: '📖'
  }
  
];

/* ── State ──────────────────────────────── */
let cart       = JSON.parse(localStorage.getItem('gifthaven-cart') || '[]');
let wishlist   = JSON.parse(localStorage.getItem('gifthaven-wishlist') || '[]');
let activeCategory = 'all';
let searchQuery    = '';
let sortOrder      = 'default';

/* ── Helpers ────────────────────────────── */
function saveCart()     { localStorage.setItem('gifthaven-cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('gifthaven-wishlist', JSON.stringify(wishlist)); }
function formatINR(n)   { return '₹' + n.toLocaleString('en-IN'); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

/* ── Filter + Sort products ─────────────── */
function filteredProducts() {
  let list = PRODUCTS.filter(p => {
    const matchCat  = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (sortOrder === 'price-low')  list.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-high') list.sort((a, b) => b.price - a.price);
  if (sortOrder === 'popular')    list.sort((a, b) => b.reviews - a.reviews);
  return list;
}

/* ── Render Products ────────────────────── */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const list = filteredProducts();

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text-muted)">
      <div style="font-size:4rem;margin-bottom:16px">🔍</div>
      <h3 style="color:#fff;margin-bottom:8px">No gifts found</h3>
      <p>Try a different search or category</p>
    </div>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card fade-in" style="animation-delay:${i * 0.06}s"
         data-id="${p.id}" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=product-img-placeholder>${p.emoji}</div>'" />`
          : `<div class="product-img-placeholder">${p.emoji}</div>`
        }
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="product-wishlist ${wishlist.includes(p.id) ? 'loved' : ''}"
                onclick="toggleWishlist(event, ${p.id})" aria-label="Wishlist">
          ${wishlist.includes(p.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <span class="product-cat">${categoryLabel(p.category)}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-stars">
          <span style="color:var(--gold)">${starsHTML(p.rating)}</span>
          <span>(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-footer">
          <div>
            <span class="product-price">${formatINR(p.price)}</span>
            <span class="product-old-price">${formatINR(p.oldPrice)}</span>
          </div>
          <button class="add-to-cart" onclick="addToCart(event, ${p.id})">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

function categoryLabel(cat) {
  const map = { photo: '📸 Photo Gift', jewellery: '💍 Jewellery', home: '🏠 Home Décor', daily: '☕ Daily Use', cute: '💖 Cute Trending' };
  return map[cat] || cat;
}

/* ── Cart Logic ─────────────────────────── */
function addToCart(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty = (existing.qty || 1) + 1;
  else cart.push({ id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 });
  saveCart();
  renderCart();
  updateCartCount();
  showToast(`✅ ${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
  updateCartCount();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, (item.qty || 1) + delta);
  saveCart();
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((s, x) => s + (x.qty || 1), 0);
  document.getElementById('cartCount').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const empty     = document.getElementById('cartEmpty');
  const footer    = document.getElementById('cartFooter');

  if (cart.length === 0) {
    empty.style.display   = 'flex';
    footer.style.display  = 'none';
    container.innerHTML   = '';
    container.appendChild(empty);
    return;
  }

  empty.style.display  = 'none';
  footer.style.display = 'block';

  const total = cart.reduce((s, x) => s + x.price * (x.qty || 1), 0);
  document.getElementById('cartTotal').textContent = formatINR(total);

  container.innerHTML = cart.map(x => `
    <div class="cart-item">
      <span class="cart-item-icon">${x.emoji}</span>
      <div class="cart-item-info">
        <h4>${x.name}</h4>
        <div class="cart-item-price">${formatINR(x.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${x.id}, -1)">−</button>
          <span class="qty-num">${x.qty || 1}</span>
          <button class="qty-btn" onclick="changeQty(${x.id}, 1)">+</button>
          <span class="remove-item" onclick="removeFromCart(${x.id})">Remove</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart()  {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ── Wishlist Logic ─────────────────────── */
function toggleWishlist(e, id) {
  e.stopPropagation();
  const idx = wishlist.indexOf(id);
  const p   = PRODUCTS.find(x => x.id === id);
  if (idx === -1) {
    wishlist.push(id);
    showToast(`❤️ ${p.name} saved to wishlist!`);
  } else {
    wishlist.splice(idx, 1);
    showToast(`💔 ${p.name} removed from wishlist`);
  }
  saveWishlist();
  renderProducts();
}

/* ── Modal Logic ────────────────────────── */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const saving = p.oldPrice - p.price;
  const pct    = Math.round((saving / p.oldPrice) * 100);

  document.getElementById('modalContent').innerHTML = `
    ${p.img
      ? `<img class="modal-img" src="${p.img}" alt="${p.name}" onerror="this.outerHTML='<div class=modal-img-placeholder>${p.emoji}</div>'">`
      : `<div class="modal-img-placeholder">${p.emoji}</div>`
    }
    <div class="modal-body">
      <div class="modal-category">${categoryLabel(p.category)}</div>
      <h2 class="modal-name">${p.name}</h2>
      <div class="product-stars" style="margin-bottom:12px">
        <span style="color:var(--gold)">${starsHTML(p.rating)}</span>
        <span style="color:var(--text-muted);margin-left:8px">${p.rating} · ${p.reviews.toLocaleString()} reviews</span>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-price-row">
        <span class="modal-price">${formatINR(p.price)}</span>
        <span class="modal-old">${formatINR(p.oldPrice)}</span>
        <span class="modal-saving">Save ${pct}%</span>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="addToCart(event,${p.id});closeModal()">
          🛒 Add to Cart
        </button>
        <button class="btn btn-ghost" onclick="toggleWishlist(event,${p.id});closeModal()">
          ${wishlist.includes(p.id) ? '❤️ Wishlisted' : '🤍 Wishlist'}
        </button>
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ── Event Listeners ────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Initial render */
  renderProducts();
  renderCart();
  updateCartCount();

  /* Categories */
  document.querySelectorAll('.cat-card').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
      renderProducts();
    });
  });

  /* Sort */
  document.getElementById('sortSelect').addEventListener('change', e => {
    sortOrder = e.target.value;
    renderProducts();
  });

  /* Search */
  document.getElementById('searchBtn').addEventListener('click', () => {
    document.getElementById('searchBar').classList.toggle('show');
    if (document.getElementById('searchBar').classList.contains('show'))
      document.getElementById('searchInput').focus();
  });
  document.getElementById('searchClose').addEventListener('click', () => {
    document.getElementById('searchBar').classList.remove('show');
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    renderProducts();
  });
  document.getElementById('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    activeCategory = 'all';
    document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    renderProducts();
  });

  /* Cart open / close */
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);

  /* Checkout button */
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) { showToast('🛒 Your cart is empty!'); return; }
    showToast('🎉 Order placed! Thank you for shopping with GiftHaven!');
    cart = [];
    saveCart();
    renderCart();
    updateCartCount();
    closeCart();
  });

  /* Modal close */
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  /* Hamburger menu */
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  /* Navbar scroll effect */
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });

  /* Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); }
  });

  /* Trending banner – show trending category */
  document.getElementById('showTrending').addEventListener('click', e => {
    e.preventDefault();
    activeCategory = 'cute';
    document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="cute"]').classList.add('active');
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });

  /* Contact form */
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('📩 Message sent! We\'ll reply within 24 hours.');
    e.target.reset();
  });

  /* Footer category links */
  document.querySelectorAll('.fl-col a[data-cat]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      activeCategory = a.dataset.cat;
      document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('active'));
      const btn = document.querySelector(`[data-category="${a.dataset.cat}"]`);
      if (btn) btn.classList.add('active');
      renderProducts();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Intersection Observer – trigger fade-in on scroll */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('fade-in');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.why-card, .cat-card, .trending-item').forEach(el => observer.observe(el));
});

/* ── Expose to window for inline onclick handlers ── */
window.addToCart      = addToCart;
window.openModal      = openModal;
window.closeModal     = closeModal;
window.toggleWishlist = toggleWishlist;
window.changeQty      = changeQty;
window.removeFromCart = removeFromCart;
window.openCart       = openCart;
window.closeCart      = closeCart;
