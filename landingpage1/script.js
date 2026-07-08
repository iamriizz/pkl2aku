const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const faqItems = document.querySelectorAll('.faq-item');
const categoryButtons = document.querySelectorAll('.tab');
const menuList = document.getElementById('menu-list');
const menuSearch = document.getElementById('menu-search');
const searchButton = document.getElementById('search-button');
const citySearch = document.getElementById('city-search');
const outletList = document.getElementById('outlet-list');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const cartDrawer = document.getElementById('cart-drawer');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const orderModal = document.getElementById('order-modal');
const closeModal = document.getElementById('close-modal');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.getElementById('close-checkout');
const orderForm = document.getElementById('order-form');
const checkoutForm = document.getElementById('checkout-form');
const qtyDecrease = document.getElementById('qty-decrease');
const qtyIncrease = document.getElementById('qty-increase');
const qtyInput = document.getElementById('qty-input');
const spiceLevel = document.getElementById('spice-level');
const sauceOption = document.getElementById('sauce-option');
const orderNote = document.getElementById('order-note');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const modalImage = document.getElementById('modal-image');
const modalCategory = document.getElementById('modal-category');
const modalRating = document.getElementById('modal-rating');

const baseProducts = [
  { id: 'ayam-1', category: 'ayam', name: '2 pcs Crispy Chicken', description: 'Dua potong ayam crispy dengan pilihan original atau spicy.', price: 52000, promoPrice: 47000, image: 'assets/images/kfc-bucket.svg', rating: 4.9, calories: '620 kkal', spicy: 'Original / Spicy', stock: 'Tersedia', bestSeller: true },
  { id: 'bucket-1', category: 'bucket', name: 'Super Bucket Deal', description: '6 ayam crispy, 3 nasi, dan 3 minuman untuk keluarga atau kantor.', price: 159000, promoPrice: 129000, image: 'assets/images/kfc-bucket.svg', rating: 4.9, calories: '6 pcs', spicy: 'Mix', stock: 'Promo', bestSeller: true },
  { id: 'burger-1', category: 'burger', name: 'Zinger Burger Combo', description: 'Burger ayam crispy spicy dengan fries dan minuman.', price: 62000, promoPrice: 56000, image: 'assets/images/kfc-burger.svg', rating: 4.8, calories: '710 kkal', spicy: 'Spicy', stock: 'Tersedia' },
  { id: 'rice-1', category: 'rice-box', name: 'Rice Box Spicy Mayo', description: 'Nasi hangat, ayam crispy potong, saus spicy mayo, dan topping gurih.', price: 35000, promoPrice: 32000, image: 'assets/images/kfc-ricebox.svg', rating: 4.7, calories: '540 kkal', spicy: 'Sedang', stock: 'Tersedia' },
  { id: 'snack-1', category: 'snack', name: 'French Fries Large', description: 'Kentang goreng renyah ukuran besar, cocok untuk side dish.', price: 25000, image: 'assets/images/kfc-burger.svg', rating: 4.6, calories: '310 kkal', spicy: 'Tidak pedas', stock: 'Tersedia' },
  { id: 'drink-1', category: 'minuman', name: 'Iced Cola', description: 'Minuman dingin segar untuk melengkapi menu ayam crispy.', price: 16000, image: 'assets/images/kfc-drink.svg', rating: 4.6, calories: '180 kkal', spicy: 'Tidak pedas', stock: 'Tersedia' },
  { id: 'dessert-1', category: 'dessert', name: 'Chocolate Sundae', description: 'Dessert dingin dengan saus cokelat manis dan creamy.', price: 18000, image: 'assets/images/kfc-drink.svg', rating: 4.5, calories: '240 kkal', spicy: 'Tidak pedas', stock: 'Tersedia' },
  { id: 'promo-1', category: 'promo', name: 'Rice Box Duo', description: '2 rice box spicy, 2 minuman, dan saus pilihan untuk makan siang.', price: 72000, promoPrice: 58000, image: 'assets/images/kfc-ricebox.svg', rating: 4.8, calories: '2 paket', spicy: 'Sedang', stock: 'Promo' },
];
const products = [];

const packages = [
  { id: 'promo-super-bucket', category: 'promo', name: 'Super Bucket Deal', description: '6 ayam crispy, 3 nasi, dan 3 minuman untuk makan ramai-ramai.', price: 129000, image: 'assets/images/kfc-bucket.svg', rating: 4.9, isPromo: true },
  { id: 'promo-rice-duo', category: 'promo', name: 'Rice Box Duo', description: '2 rice box spicy, 2 minuman, dan saus pilihan untuk makan siang cepat.', price: 58000, image: 'assets/images/kfc-ricebox.svg', rating: 4.8, isPromo: true },
];

const outlets = [
  { city: 'Jakarta', name: 'KFC Kemang', address: 'Jl. Kemang Raya No. 12', hours: '09.00 - 22.00 WIB', status: 'Buka' },
  { city: 'Bandung', name: 'KFC Dago', address: 'Jl. Ir. H. Juanda No. 88', hours: '09.00 - 22.00 WIB', status: 'Buka' },
  { city: 'Bekasi', name: 'KFC Summarecon Bekasi', address: 'Mall Summarecon Bekasi GF', hours: '10.00 - 22.00 WIB', status: 'Buka' },
  { city: 'Depok', name: 'KFC Margonda', address: 'Jl. Margonda Raya No. 45', hours: '10.00 - 21.00 WIB', status: 'Ramai' },
];

const STORAGE_KEY = 'kfc_cart';
let cart = [];
let selectedProduct = null;
let activeCategory = 'all';
let searchKeyword = '';

function refreshProducts() {
  const customItems = (typeof getAdminMenuItems === 'function' ? getAdminMenuItems() : []).map((item) => ({
    ...item,
    id: item.id,
    category: item.category || 'snack',
    name: item.name,
    description: item.description || 'Menu tambahan admin.',
    price: Number(item.price) || 0,
    image: item.image || 'assets/images/kfc-bucket.svg',
    rating: Number(item.rating) || 4.7,
    calories: item.calories || 'Menu baru',
    spicy: item.spicy || 'Original',
    stock: item.stock || 'Tersedia',
  }));
  products.splice(0, products.length, ...baseProducts, ...customItems);
}

function loadCart() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch (err) { return []; }
}
function saveCart() { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
function formatCurrency(value) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value); }
function getDisplayPrice(item) { return item.promoPrice || item.price; }
function toggleNav() { const isOpen = siteNav.classList.toggle('show'); navToggle?.setAttribute('aria-expanded', String(isOpen)); }
function productMatchesSearch(item) { const keyword = searchKeyword.trim().toLowerCase(); if (!keyword) return true; return [item.name, item.description, item.category, item.stock, item.spicy].some((value) => String(value).toLowerCase().includes(keyword)); }

function renderMenu() {
  const filtered = products.filter((item) => (activeCategory === 'all' || item.category === activeCategory) && productMatchesSearch(item));
  if (!filtered.length) { menuList.innerHTML = '<p class="empty-state">Menu tidak ditemukan. Coba kata kunci atau kategori lain.</p>'; return; }
  menuList.innerHTML = filtered.map((item) => `
    <article class="menu-card">
      <img src="${item.image}" alt="${item.name}" />
      <div class="menu-card-body">
        <span class="menu-badge">${item.promoPrice ? 'Promo' : item.stock}</span>
        <div class="menu-card-top"><h3>${item.name}</h3><div class="star-rating">${item.rating.toFixed(1)}</div></div>
        <p>${item.description}</p>
        <div class="menu-facts"><span>${item.category}</span><span>${item.calories}</span><span>${item.spicy}</span></div>
        <div class="menu-meta"><strong>${item.promoPrice ? `<small>${formatCurrency(item.price)}</small> ${formatCurrency(item.promoPrice)}` : formatCurrency(item.price)}</strong><button class="btn-order" data-id="${item.id}">Tambah</button></div>
      </div>
    </article>`).join('');
  document.querySelectorAll('.btn-order').forEach((button) => button.addEventListener('click', openOrderModal));
}

function renderOutlets() {
  if (!outletList) return;
  const keyword = citySearch?.value.trim().toLowerCase() || '';
  const filtered = outlets.filter((outlet) => [outlet.city, outlet.name, outlet.address, outlet.status].some((value) => value.toLowerCase().includes(keyword)));
  outletList.innerHTML = filtered.length ? filtered.map((outlet) => `<article class="outlet-item"><strong>${outlet.name}</strong><span>${outlet.city} - ${outlet.address}</span><span>${outlet.hours} · ${outlet.status}</span></article>`).join('') : '<p class="empty-cart">Outlet belum ditemukan untuk kota tersebut.</p>';
}

function updateCartCount() { cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0); }
function openCart() { cartDrawer.classList.add('open'); cartDrawer.setAttribute('aria-hidden', 'false'); renderCartItems(); }
function closeCart() { cartDrawer.classList.remove('open'); cartDrawer.setAttribute('aria-hidden', 'true'); }

function fillModal(product) {
  selectedProduct = product;
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.description;
  modalPrice.textContent = formatCurrency(getDisplayPrice(product));
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalCategory.textContent = product.isPromo ? 'Promo' : product.category;
  modalRating.textContent = `Rating ${product.rating.toFixed(1)}`;
  qtyInput.value = 1;
  spiceLevel.value = 'Original';
  sauceOption.value = product.category === 'minuman' || product.category === 'dessert' ? 'Tanpa Side' : 'Nasi';
  orderNote.value = '';
  orderModal.classList.remove('hidden');
  orderModal.setAttribute('aria-hidden', 'false');
}
function openOrderModal(event) { const product = products.find((item) => item.id === event.currentTarget.dataset.id); if (product) fillModal(product); }
function closeOrderModal() { orderModal.classList.add('hidden'); orderModal.setAttribute('aria-hidden', 'true'); }

function addCartItem(event) {
  event.preventDefault();
  if (!selectedProduct) return;
  const quantity = Math.max(Number(qtyInput.value), 1);
  const variant = spiceLevel.value;
  const side = sauceOption.value;
  const note = orderNote.value.trim();
  const price = getDisplayPrice(selectedProduct);
  const existingItem = cart.find((item) => item.id === selectedProduct.id && item.variant === variant && item.side === side && item.note === note);
  if (existingItem) existingItem.quantity += quantity;
  else cart.push({ ...selectedProduct, price, quantity, variant, side, note });
  saveCart(); updateCartCount(); renderCartItems(); closeOrderModal(); openCart();
}

function renderCartItems() {
  if (!cart.length) { cartItemsContainer.innerHTML = '<p class="empty-cart">Keranjang kosong. Tambahkan menu KFC dulu ya.</p>'; cartTotal.textContent = formatCurrency(0); return; }
  let total = 0;
  cartItemsContainer.innerHTML = cart.map((item, index) => { const itemTotal = item.price * item.quantity; total += itemTotal; return `<div class="cart-item"><div><strong>${item.name}</strong><p>${item.quantity} x ${formatCurrency(item.price)}</p><p>Varian: ${item.variant}</p><p>Side: ${item.side}</p>${item.note ? `<p>Catatan: ${item.note}</p>` : ''}</div><div class="cart-item-actions"><button class="cart-remove" data-index="${index}">Hapus</button></div></div>`; }).join('');
  cartTotal.textContent = formatCurrency(total);
  document.querySelectorAll('.cart-remove').forEach((button) => button.addEventListener('click', removeCartItem));
}
function removeCartItem(event) { cart.splice(Number(event.currentTarget.dataset.index), 1); saveCart(); renderCartItems(); updateCartCount(); }
function checkoutOrder() { if (!cart.length) { alert('Keranjang kosong. Tambahkan pesanan sebelum checkout.'); return; } if (typeof getCurrentUser === 'function' && !getCurrentUser()) { window.location.href = 'login.html?redirect=checkout.html'; return; } window.location.href = 'checkout.html'; }
function handlePromoButton(event) { const promoKey = event.currentTarget.dataset.promoid; const pkg = packages.find((p) => p.id === `promo-${promoKey}` || p.id === promoKey); if (pkg) fillModal(pkg); }
function closeCheckoutModal() { checkoutModal?.classList.add('hidden'); checkoutModal?.setAttribute('aria-hidden', 'true'); }
function submitCheckout(event) { event.preventDefault(); }
function changeQuantity(amount) { qtyInput.value = Math.max(Number(qtyInput.value) + amount, 1); }

refreshProducts();
cart = loadCart();
navToggle?.addEventListener('click', toggleNav);
siteNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { siteNav.classList.remove('show'); navToggle?.setAttribute('aria-expanded', 'false'); }));
faqItems.forEach((item) => item.querySelector('.faq-question')?.addEventListener('click', () => item.classList.toggle('active')));
categoryButtons.forEach((button) => button.addEventListener('click', () => { categoryButtons.forEach((btn) => btn.classList.remove('active')); button.classList.add('active'); activeCategory = button.dataset.category; renderMenu(); }));
searchButton?.addEventListener('click', () => { searchKeyword = menuSearch.value; renderMenu(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); });
menuSearch?.addEventListener('input', () => { searchKeyword = menuSearch.value; renderMenu(); });
citySearch?.addEventListener('input', renderOutlets);
openCartBtn?.addEventListener('click', openCart);
closeCartBtn?.addEventListener('click', closeCart);
closeModal?.addEventListener('click', closeOrderModal);
orderModal?.addEventListener('click', (event) => { if (event.target === orderModal) closeOrderModal(); });
closeCheckout?.addEventListener('click', closeCheckoutModal);
checkoutButton?.addEventListener('click', checkoutOrder);
document.querySelectorAll('[data-promoid]').forEach((button) => button.addEventListener('click', handlePromoButton));
orderForm?.addEventListener('submit', addCartItem);
checkoutForm?.addEventListener('submit', submitCheckout);
qtyDecrease?.addEventListener('click', () => changeQuantity(-1));
qtyIncrease?.addEventListener('click', () => changeQuantity(1));
qtyInput?.addEventListener('input', () => { if (Number(qtyInput.value) < 1) qtyInput.value = 1; });
window.addEventListener('kfc:menu-updated', () => {
  refreshProducts();
  renderMenu();
});
window.addEventListener('kfc:orders-updated', renderOrderTracker);

const orderTrackerInput = document.getElementById('order-tracker-input');
const orderTrackerOutput = document.getElementById('order-tracker-output');
const trackOrderButton = document.getElementById('track-order-button');

function renderOrderTracker() {
  if (!orderTrackerInput || !orderTrackerOutput) return;
  const storedOrderNumber = localStorage.getItem('kfc_last_order_number') || '';
  const value = (orderTrackerInput.value || storedOrderNumber).trim();
  if (!value) {
    orderTrackerOutput.innerHTML = '<p class="admin-empty-state">Masukkan nomor pesanan untuk melihat detail.</p>';
    return;
  }
  orderTrackerInput.value = value;
  const order = typeof getOrderByNumber === 'function' ? getOrderByNumber(value) : null;
  if (!order) {
    orderTrackerOutput.innerHTML = '<p class="admin-empty-state">Pesanan tidak ditemukan. Coba cek nomor pesanan Anda lagi.</p>';
    return;
  }
  orderTrackerOutput.innerHTML = `
    <strong>${order.orderNumber}</strong>
    <p>${order.customerName} · ${order.phone}</p>
    <p>Status: ${order.status}</p>
    <p>Alamat: ${order.address}</p>
    <p>Menu: ${order.items.map((item) => `${item.name} x${item.quantity}`).join(', ')}</p>
    <p>Total: ${formatCurrency(order.totalAmount)}</p>
  `;
}

trackOrderButton?.addEventListener('click', renderOrderTracker);
orderTrackerInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    renderOrderTracker();
  }
});

renderMenu(); renderOutlets(); renderCartItems(); updateCartCount();
