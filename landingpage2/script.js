const STORAGE = {
  customer: 'luma_customer_session',
  customers: 'luma_customers',
  admin: 'luma_admin_session',
  products: 'luma_products',
  cart: 'luma_cart',
  wishlist: 'luma_wishlist',
  orders: 'luma_orders',
};
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'lumaadmin123';
const ORDER_STEPS = ['Menunggu Pembayaran', 'Pembayaran Dikonfirmasi', 'Diproses', 'Dikemas', 'Dikirim', 'Selesai'];
const seedProducts = [
  { id: 'lw-rose-knit', name: 'Rose Knit Cardigan', category: 'Cardigan', price: 189000, image: 'assets/luma-cardigan.svg', rating: 4.9, colors: ['Soft Pink', 'Ivory', 'Lavender'], sizes: ['S', 'M', 'L'], stock: 24, description: 'Cardigan knit lembut dengan cutting relaxed untuk layering pastel harian.', popular: 98, createdAt: '2026-07-01' },
  { id: 'lw-ivory-blouse', name: 'Ivory Ribbon Blouse', category: 'Blouse', price: 149000, image: 'assets/luma-blouse.svg', rating: 4.8, colors: ['Ivory', 'Soft Pink', 'Butter Cream'], sizes: ['XS', 'S', 'M', 'L'], stock: 18, description: 'Blouse ringan dengan detail ribbon dan bahan flowy yang nyaman.', popular: 87, createdAt: '2026-07-02' },
  { id: 'lw-lavender-dress', name: 'Lavender Daydream Dress', category: 'Dress', price: 259000, image: 'assets/luma-dress.svg', rating: 4.9, colors: ['Lavender', 'Soft Pink', 'Sky Blue'], sizes: ['S', 'M', 'L', 'XL'], stock: 12, description: 'Midi dress feminin untuk brunch, campus day, atau acara semi formal.', popular: 110, createdAt: '2026-07-03' },
  { id: 'lw-mint-set', name: 'Mint Muse Set Outfit', category: 'Set Outfit', price: 299000, image: 'assets/luma-set.svg', rating: 4.7, colors: ['Mint', 'Ivory'], sizes: ['S', 'M', 'L'], stock: 9, description: 'Set atasan dan skirt dengan palet mint lembut untuk tampilan effortless.', popular: 73, createdAt: '2026-07-04' },
  { id: 'lw-cloud-knit', name: 'Cloud Soft Knit Top', category: 'Knitwear', price: 169000, image: 'assets/luma-knit.svg', rating: 4.6, colors: ['Sky Blue', 'Ivory', 'Soft Pink'], sizes: ['All Size'], stock: 15, description: 'Knit top halus dengan warna pastel yang mudah dipadukan.', popular: 66, createdAt: '2026-07-05' },
  { id: 'lw-sale-skirt', name: 'Butter Pleated Skirt', category: 'Sale', price: 129000, image: 'assets/luma-skirt.svg', rating: 4.6, colors: ['Butter Cream', 'Ivory'], sizes: ['S', 'M', 'L'], stock: 7, description: 'Pleated skirt warna butter cream, cocok untuk look clean dan manis.', popular: 58, createdAt: '2026-07-06' },
];
let products = [];
let cart = [];
let wishlist = [];
let selectedProduct = null;
let activeCategory = 'all';
let activeOrderFilter = 'all';

const qs = (id) => document.getElementById(id);
const read = (key, fallback = []) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch (err) { return fallback; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const money = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value || 0);
const currentCustomer = () => read(STORAGE.customer, null);
const isAdmin = () => localStorage.getItem(STORAGE.admin) === '1';

function initProducts() {
  const saved = read(STORAGE.products, null);
  products = saved && saved.length ? saved : seedProducts;
  write(STORAGE.products, products);
}
function colorValue(color) {
  return { 'Soft Pink': '#f8bbd0', Ivory: '#fffaf0', Lavender: '#dcc6f2', Mint: '#cfefe4', 'Sky Blue': '#cfe8ff', 'Butter Cream': '#fff2c7' }[color] || '#efa3b8';
}
function showAlert(id, message, type = 'error') {
  const el = qs(id);
  if (el) el.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
}
function renderSession() {
  const customer = currentCustomer();
  qs('customer-session-name')?.classList.toggle('hidden', !customer);
  if (customer) qs('customer-session-name').textContent = `Halo, ${customer.name}`;
  qs('customer-auth-panel')?.classList.toggle('hidden', !!customer);
  qs('customer-dashboard')?.classList.toggle('hidden', !customer);
  if (customer) {
    qs('customer-greeting').textContent = `Halo, ${customer.name}`;
    qs('customer-profile-card').innerHTML = `<strong>${customer.name}</strong><p>${customer.email} · ${customer.phone}</p><p>${customer.address}</p>`;
  }
  qs('admin-login-card')?.classList.toggle('hidden', isAdmin());
  qs('admin-dashboard')?.classList.toggle('hidden', !isAdmin());
}
function productMatches(product) {
  const keyword = (qs('product-search')?.value || '').trim().toLowerCase();
  const size = qs('size-filter')?.value || 'all';
  const color = qs('color-filter')?.value || 'all';
  const price = qs('price-filter')?.value || 'all';
  const categoryOk = activeCategory === 'all' || product.category === activeCategory;
  const keywordOk = !keyword || [product.name, product.category, product.description, product.colors.join(' '), product.sizes.join(' ')].join(' ').toLowerCase().includes(keyword);
  const sizeOk = size === 'all' || product.sizes.includes(size);
  const colorOk = color === 'all' || product.colors.includes(color);
  const priceOk = price === 'all' || (price === 'under150' && product.price < 150000) || (price === '150to250' && product.price >= 150000 && product.price <= 250000) || (price === 'above250' && product.price > 250000);
  return categoryOk && keywordOk && sizeOk && colorOk && priceOk;
}
function sortedProducts(items) {
  const mode = qs('sort-select')?.value || 'newest';
  return [...items].sort((a, b) => {
    if (mode === 'low') return a.price - b.price;
    if (mode === 'high') return b.price - a.price;
    if (mode === 'popular') return b.popular - a.popular;
    return String(b.createdAt).localeCompare(String(a.createdAt));
  });
}
function renderProducts() {
  const grid = qs('product-grid');
  if (!grid) return;
  const items = sortedProducts(products.filter(productMatches));
  grid.innerHTML = items.length ? items.map((p) => `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}" />
      <div class="product-body">
        <span class="pill">${p.category}</span>
        <div class="product-top"><h3>${p.name}</h3><strong>${p.rating.toFixed(1)}</strong></div>
        <p>${p.description}</p>
        <div class="swatches">${p.colors.map((c) => `<span class="swatch" title="${c}" style="background:${colorValue(c)}"></span>`).join('')}</div>
        <p><strong>Ukuran:</strong> ${p.sizes.join(', ')} · <strong>Stok:</strong> ${p.stock}</p>
        <div class="product-top"><span class="product-price">${money(p.price)}</span></div>
        <div class="product-actions"><button class="btn btn-primary" data-open-product="${p.id}" type="button">Detail</button><button class="btn btn-outline" data-wish="${p.id}" type="button">Wishlist</button></div>
      </div>
    </article>`).join('') : '<p class="empty-state">Produk tidak ditemukan. Coba filter lain.</p>';
  grid.querySelectorAll('[data-open-product]').forEach((btn) => btn.addEventListener('click', () => openProduct(btn.dataset.openProduct)));
  grid.querySelectorAll('[data-wish]').forEach((btn) => btn.addEventListener('click', () => toggleWishlist(btn.dataset.wish)));
}
function openProduct(id) {
  selectedProduct = products.find((p) => p.id === id);
  if (!selectedProduct) return;
  qs('modal-image').src = selectedProduct.image;
  qs('modal-image').alt = selectedProduct.name;
  qs('modal-category').textContent = selectedProduct.category;
  qs('modal-title').textContent = selectedProduct.name;
  qs('modal-description').textContent = selectedProduct.description;
  qs('modal-price').textContent = money(selectedProduct.price);
  qs('modal-color').innerHTML = selectedProduct.colors.map((c) => `<option>${c}</option>`).join('');
  qs('modal-size').innerHTML = selectedProduct.sizes.map((s) => `<option>${s}</option>`).join('');
  qs('modal-qty').value = 1;
  qs('product-modal').classList.remove('hidden');
}
function closeModal(id) { qs(id)?.classList.add('hidden'); }
function renderCart() {
  cart = read(STORAGE.cart);
  wishlist = read(STORAGE.wishlist);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  qs('cart-count').textContent = count;
  qs('wishlist-count').textContent = wishlist.length;
  const box = qs('cart-items');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  qs('cart-total').textContent = money(total);
  box.innerHTML = cart.length ? cart.map((item, i) => `<div class="cart-item"><div><strong>${item.name}</strong><p>${item.color} · ${item.size}</p><p>${item.qty} x ${money(item.price)}</p></div><button class="btn btn-outline" data-remove-cart="${i}" type="button">Hapus</button></div>`).join('') : '<p class="empty-state">Cart masih kosong.</p>';
  box.querySelectorAll('[data-remove-cart]').forEach((btn) => btn.addEventListener('click', () => { cart.splice(Number(btn.dataset.removeCart), 1); write(STORAGE.cart, cart); renderCart(); }));
  renderWishlist();
}
function renderWishlist() {
  const box = qs('wishlist-items');
  const items = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  box.innerHTML = items.length ? items.map((p) => `<div class="cart-item"><div><strong>${p.name}</strong><p>${p.category} · ${money(p.price)}</p></div><button class="btn btn-primary" data-open-product="${p.id}" type="button">Beli</button></div>`).join('') : '<p class="empty-state">Wishlist masih kosong.</p>';
  box.querySelectorAll('[data-open-product]').forEach((btn) => btn.addEventListener('click', () => openProduct(btn.dataset.openProduct)));
}
function toggleWishlist(id) {
  wishlist = read(STORAGE.wishlist);
  wishlist = wishlist.includes(id) ? wishlist.filter((item) => item !== id) : [...wishlist, id];
  write(STORAGE.wishlist, wishlist);
  renderCart();
}
function addToCart(event) {
  event.preventDefault();
  if (!selectedProduct) return;
  const qty = Math.max(Number(qs('modal-qty').value), 1);
  if (qty > selectedProduct.stock) { alert('Jumlah melebihi stok tersedia.'); return; }
  cart.push({ id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, color: qs('modal-color').value, size: qs('modal-size').value, qty });
  write(STORAGE.cart, cart);
  renderCart();
  closeModal('product-modal');
  qs('cart-drawer').classList.add('open');
}
function checkoutStart() {
  if (!cart.length) { alert('Cart masih kosong.'); return; }
  const customer = currentCustomer();
  if (!customer) { document.querySelector('#orders')?.scrollIntoView({ behavior: 'smooth' }); showAlert('customer-alert', 'Login customer dulu untuk checkout.'); return; }
  qs('checkout-address').value = customer.address;
  renderCheckoutSummary();
  qs('checkout-modal').classList.remove('hidden');
}
function renderCheckoutSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = subtotal >= 300000 ? 25000 : 0;
  const shipping = 18000;
  const total = subtotal - discount + shipping;
  qs('checkout-summary').innerHTML = `<div class="profile-card"><p>Subtotal: <strong>${money(subtotal)}</strong></p><p>Diskon: <strong>-${money(discount)}</strong></p><p>Ongkir: <strong>${money(shipping)}</strong></p><h3>Total: ${money(total)}</h3></div>`;
}
function createOrder(event) {
  event.preventDefault();
  const customer = currentCustomer();
  if (!customer || !cart.length) return;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = subtotal >= 300000 ? 25000 : 0;
  const shipping = 18000;
  const order = {
    id: `order-${Date.now()}`,
    number: `LUMA-${Date.now().toString().slice(-6)}`,
    customerEmail: customer.email,
    customerName: customer.name,
    phone: customer.phone,
    address: qs('checkout-address').value.trim(),
    paymentMethod: qs('checkout-payment').value,
    courier: qs('checkout-courier').value,
    note: qs('checkout-note').value.trim(),
    items: cart,
    subtotal,
    discount,
    shipping,
    total: subtotal - discount + shipping,
    paymentStatus: 'Belum Dibayar',
    status: 'Menunggu Pembayaran',
    trackingNumber: '',
    createdAt: new Date().toISOString(),
  };
  write(STORAGE.orders, [order, ...read(STORAGE.orders)]);
  write(STORAGE.cart, []);
  cart = [];
  closeModal('checkout-modal');
  qs('cart-drawer').classList.remove('open');
  renderCart();
  renderCustomerOrders();
  renderAdmin();
  document.querySelector('#orders')?.scrollIntoView({ behavior: 'smooth' });
}
function statusClass(status) {
  if (status === 'Selesai') return 'done';
  if (status === 'Dibatalkan') return 'cancel';
  if (status === 'Menunggu Pembayaran') return 'waiting';
  return 'process';
}
function timeline(status) {
  if (status === 'Dibatalkan') return '<div class="timeline"><div class="timeline-step active"><span></span><div><strong>Dibatalkan</strong><p>Pesanan dibatalkan.</p></div></div></div>';
  const active = ORDER_STEPS.indexOf(status);
  return `<div class="timeline">${ORDER_STEPS.map((step, i) => `<div class="timeline-step ${i < active ? 'done' : i === active ? 'active' : ''}"><span></span><div><strong>${step}</strong></div></div>`).join('')}</div>`;
}
function renderCustomerOrders() {
  const customer = currentCustomer();
  const box = qs('customer-orders');
  if (!box || !customer) return;
  const orders = read(STORAGE.orders).filter((o) => o.customerEmail === customer.email).filter((o) => activeOrderFilter === 'all' || o.status === activeOrderFilter);
  box.innerHTML = orders.length ? orders.map((o) => `<article class="order-card"><div class="order-card-head"><div><span class="status-pill ${statusClass(o.status)}">${o.status}</span><h3>${o.number}</h3><p>${new Date(o.createdAt).toLocaleString('id-ID')} · ${o.items.length} item · ${money(o.total)}</p><p>${o.courier}${o.trackingNumber ? ` · Resi: ${o.trackingNumber}` : ''}</p></div><strong>${o.paymentStatus}</strong></div>${timeline(o.status)}<p><strong>Produk:</strong> ${o.items.map((item) => `${item.name} x${item.qty}`).join(', ')}</p></article>`).join('') : '<p class="empty-state">Belum ada pesanan pada filter ini.</p>';
}
function renderAdmin() {
  if (!isAdmin()) return;
  const orders = read(STORAGE.orders);
  const customers = read(STORAGE.customers);
  const revenue = orders.filter((o) => o.status !== 'Dibatalkan').reduce((sum, o) => sum + o.total, 0);
  qs('admin-stats').innerHTML = `<article><strong>${orders.length}</strong><span>Total pesanan</span></article><article><strong>${orders.filter((o) => !['Selesai','Dibatalkan'].includes(o.status)).length}</strong><span>Pesanan aktif</span></article><article><strong>${money(revenue)}</strong><span>Estimasi omzet</span></article><article><strong>${products.filter((p) => p.stock <= 10).length}</strong><span>Stok menipis</span></article>`;
  qs('admin-active-orders').innerHTML = renderAdminOrders(orders.filter((o) => !['Selesai','Dibatalkan'].includes(o.status)));
  qs('admin-orders').innerHTML = renderAdminOrders(orders);
  qs('admin-products').innerHTML = products.map((p) => `<div class="admin-item"><div><strong>${p.name}</strong><p>${p.category} · ${money(p.price)} · Stok ${p.stock}</p><p>${p.colors.join(', ')} · ${p.sizes.join(', ')}</p></div><button class="btn btn-outline" data-delete-product="${p.id}" type="button">Nonaktifkan</button></div>`).join('');
  qs('admin-products').querySelectorAll('[data-delete-product]').forEach((btn) => btn.addEventListener('click', () => { products = products.filter((p) => p.id !== btn.dataset.deleteProduct); write(STORAGE.products, products); renderProducts(); renderAdmin(); }));
  qs('admin-customers').innerHTML = customers.length ? customers.map((c) => { const total = orders.filter((o) => o.customerEmail === c.email).reduce((sum, o) => sum + o.total, 0); return `<div class="admin-item"><div><strong>${c.name}</strong><p>${c.email} · ${c.phone}</p><p>Total transaksi: ${money(total)}</p></div><span class="status-pill process">${orders.filter((o) => o.customerEmail === c.email).length} order</span></div>`; }).join('') : '<p class="empty-state">Belum ada customer.</p>';
}
function renderAdminOrders(orders) {
  return orders.length ? orders.map((o) => `<article class="admin-order-card"><div><span class="status-pill ${statusClass(o.status)}">${o.status}</span><h3>${o.number}</h3><p>${o.customerName} · ${o.phone}</p><p>${o.address}</p><p>${o.items.map((item) => `${item.name} ${item.color}/${item.size} x${item.qty}`).join(', ')}</p><p>Total ${money(o.total)} · ${o.paymentMethod} · ${o.paymentStatus}</p></div><div class="admin-order-actions"><select data-order-status="${o.id}">${[...ORDER_STEPS, 'Dibatalkan'].map((s) => `<option ${s === o.status ? 'selected' : ''}>${s}</option>`).join('')}</select><select data-payment-status="${o.id}"><option ${o.paymentStatus === 'Belum Dibayar' ? 'selected' : ''}>Belum Dibayar</option><option ${o.paymentStatus === 'Menunggu Verifikasi' ? 'selected' : ''}>Menunggu Verifikasi</option><option ${o.paymentStatus === 'Lunas' ? 'selected' : ''}>Lunas</option><option ${o.paymentStatus === 'Refund' ? 'selected' : ''}>Refund</option></select><input data-resi="${o.id}" value="${o.trackingNumber || ''}" placeholder="Nomor resi" /><button class="btn btn-primary" data-save-order="${o.id}" type="button">Simpan</button></div></article>`).join('') : '<p class="empty-state">Belum ada pesanan.</p>';
}
function saveAdminOrder(id) {
  const orders = read(STORAGE.orders).map((o) => o.id === id ? { ...o, status: document.querySelector(`[data-order-status="${id}"]`).value, paymentStatus: document.querySelector(`[data-payment-status="${id}"]`).value, trackingNumber: document.querySelector(`[data-resi="${id}"]`).value.trim() } : o);
  write(STORAGE.orders, orders);
  renderCustomerOrders();
  renderAdmin();
}
function bindEvents() {
  qs('nav-toggle')?.addEventListener('click', () => { const open = qs('site-nav').classList.toggle('show'); qs('nav-toggle').setAttribute('aria-expanded', String(open)); });
  document.querySelectorAll('.site-nav a').forEach((a) => a.addEventListener('click', () => qs('site-nav')?.classList.remove('show')));
  ['product-search','size-filter','color-filter','price-filter','sort-select'].forEach((id) => qs(id)?.addEventListener('input', renderProducts));
  qs('search-action')?.addEventListener('click', renderProducts);
  document.querySelectorAll('[data-category]').forEach((btn) => btn.addEventListener('click', () => { document.querySelectorAll('[data-category]').forEach((b) => b.classList.remove('active')); btn.classList.add('active'); activeCategory = btn.dataset.category; renderProducts(); }));
  qs('add-cart-form')?.addEventListener('submit', addToCart);
  qs('close-product-modal')?.addEventListener('click', () => closeModal('product-modal'));
  qs('close-checkout-modal')?.addEventListener('click', () => closeModal('checkout-modal'));
  qs('open-cart')?.addEventListener('click', () => qs('cart-drawer').classList.add('open'));
  qs('close-cart')?.addEventListener('click', () => qs('cart-drawer').classList.remove('open'));
  qs('open-wishlist')?.addEventListener('click', () => qs('wishlist-drawer').classList.add('open'));
  qs('close-wishlist')?.addEventListener('click', () => qs('wishlist-drawer').classList.remove('open'));
  qs('checkout-button')?.addEventListener('click', checkoutStart);
  qs('checkout-form')?.addEventListener('submit', createOrder);
  qs('customer-login-form')?.addEventListener('submit', (event) => { event.preventDefault(); const customer = { email: qs('customer-email').value.trim().toLowerCase(), name: qs('customer-name').value.trim(), phone: qs('customer-phone').value.trim(), address: qs('customer-address').value.trim() }; const customers = read(STORAGE.customers); write(STORAGE.customers, [customer, ...customers.filter((c) => c.email !== customer.email)]); write(STORAGE.customer, customer); showAlert('customer-alert', 'Login customer berhasil.', 'success'); renderSession(); renderCustomerOrders(); renderAdmin(); });
  qs('customer-logout')?.addEventListener('click', () => { localStorage.removeItem(STORAGE.customer); renderSession(); });
  document.querySelectorAll('[id$="customer-login"], #customer-login-shortcut').forEach((btn) => btn.addEventListener('click', () => document.querySelector('#orders')?.scrollIntoView({ behavior: 'smooth' })));
  document.querySelectorAll('[id$="admin-login"], #admin-login-shortcut').forEach((btn) => btn.addEventListener('click', () => document.querySelector('#admin')?.scrollIntoView({ behavior: 'smooth' })));
  qs('quick-track-button')?.addEventListener('click', () => document.querySelector('#orders')?.scrollIntoView({ behavior: 'smooth' }));
  qs('admin-login-form')?.addEventListener('submit', (event) => { event.preventDefault(); if (qs('admin-username').value === ADMIN_USERNAME && qs('admin-password').value === ADMIN_PASSWORD) { localStorage.setItem(STORAGE.admin, '1'); showAlert('admin-alert', 'Login admin berhasil.', 'success'); renderSession(); renderAdmin(); } else showAlert('admin-alert', 'Username atau password admin salah.'); });
  qs('admin-logout')?.addEventListener('click', () => { localStorage.removeItem(STORAGE.admin); renderSession(); });
  document.querySelectorAll('[data-admin-view]').forEach((btn) => btn.addEventListener('click', () => { document.querySelectorAll('[data-admin-view]').forEach((b) => b.classList.remove('active')); btn.classList.add('active'); document.querySelectorAll('.admin-view').forEach((v) => v.classList.add('hidden')); qs(`admin-view-${btn.dataset.adminView}`).classList.remove('hidden'); qs('admin-view-title').textContent = btn.textContent; renderAdmin(); }));
  qs('product-form')?.addEventListener('submit', (event) => { event.preventDefault(); const item = { id: `custom-${Date.now()}`, name: qs('product-name').value.trim(), category: qs('product-category').value, price: Number(qs('product-price').value), stock: Number(qs('product-stock').value), colors: qs('product-colors').value.split(',').map((v) => v.trim()).filter(Boolean), sizes: qs('product-sizes').value.split(',').map((v) => v.trim()).filter(Boolean), description: qs('product-description').value.trim(), image: 'assets/luma-set.svg', rating: 4.7, popular: 1, createdAt: new Date().toISOString() }; products.unshift(item); write(STORAGE.products, products); event.target.reset(); renderProducts(); renderAdmin(); });
  document.body.addEventListener('click', (event) => { const save = event.target.closest('[data-save-order]'); if (save) saveAdminOrder(save.dataset.saveOrder); });
  document.querySelectorAll('.order-tab').forEach((btn) => btn.addEventListener('click', () => { document.querySelectorAll('.order-tab').forEach((b) => b.classList.remove('active')); btn.classList.add('active'); activeOrderFilter = btn.dataset.orderFilter; renderCustomerOrders(); }));
  document.querySelectorAll('.faq-question').forEach((btn) => btn.addEventListener('click', () => btn.closest('article').classList.toggle('active')));
}
initProducts();
cart = read(STORAGE.cart);
wishlist = read(STORAGE.wishlist);
bindEvents();
renderSession();
renderProducts();
renderCart();
renderCustomerOrders();
renderAdmin();
