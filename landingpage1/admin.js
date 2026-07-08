const ORDERS_KEY = 'kfc_orders';
const ADMIN_MENU_KEY = 'kfc_admin_menu';
const ADMIN_PROMO_KEY = 'kfc_admin_promos';
const STATUS_STEPS = ['Menunggu Pembayaran', 'Pesanan Diterima', 'Sedang Disiapkan', 'Siap Diambil', 'Dalam Pengiriman', 'Selesai', 'Dibatalkan'];

const adminStats = document.getElementById('admin-stats');
const adminOrders = document.getElementById('admin-orders');
const seedOrderButton = document.getElementById('seed-order-button');
const clearCompletedButton = document.getElementById('clear-completed-button');
const adminMenuForm = document.getElementById('admin-menu-form');
const adminPromoForm = document.getElementById('admin-promo-form');
const adminMenuList = document.getElementById('admin-menu-list');
const adminPromoList = document.getElementById('admin-promo-list');

function read(key, fallback = []) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (err) { return fallback; } }
function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function getOrders() { return read(ORDERS_KEY); }
function saveOrders(orders) { write(ORDERS_KEY, orders); }
function formatCurrency(value) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value); }
function buildOrderNumber() { return `KFC-${Date.now().toString().slice(-6)}`; }

function renderStats() {
  const orders = getOrders();
  const revenue = orders.filter((order) => order.status !== 'Dibatalkan').reduce((sum, order) => sum + order.costs.total, 0);
  const active = orders.filter((order) => !['Selesai', 'Dibatalkan'].includes(order.status)).length;
  adminStats.innerHTML = `
    <article><span>Total Pesanan</span><strong>${orders.length}</strong></article>
    <article><span>Pesanan Aktif</span><strong>${active}</strong></article>
    <article><span>Estimasi Omzet</span><strong>${formatCurrency(revenue)}</strong></article>
    <article><span>Menu Admin</span><strong>${read(ADMIN_MENU_KEY).length}</strong></article>
  `;
}
function renderOrders() {
  const orders = getOrders();
  if (!orders.length) {
    adminOrders.innerHTML = '<p class="empty-cart">Belum ada pesanan. Klik tombol contoh pesanan atau lakukan checkout dari website.</p>';
    renderStats();
    return;
  }
  adminOrders.innerHTML = orders.map((order) => `
    <article class="admin-order-card">
      <div>
        <p class="overline">${order.orderNumber}</p>
        <h3>${order.customer.name}</h3>
        <p>${order.orderType} · ${order.outlet} · ${order.time}</p>
        <p>${order.items.map((item) => `${item.quantity}x ${item.name}`).join(', ')}</p>
      </div>
      <div class="admin-order-actions">
        <strong>${formatCurrency(order.costs.total)}</strong>
        <select data-order-status="${order.orderNumber}">${STATUS_STEPS.map((status) => `<option value="${status}" ${status === order.status ? 'selected' : ''}>${status}</option>`).join('')}</select>
        <a class="btn btn-outline btn-sm" href="status.html?order=${encodeURIComponent(order.orderNumber)}">Lihat</a>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('[data-order-status]').forEach((select) => {
    select.addEventListener('change', () => updateOrderStatus(select.dataset.orderStatus, select.value));
  });
  renderStats();
}
function updateOrderStatus(orderNumber, status) {
  const orders = getOrders().map((order) => order.orderNumber === orderNumber ? { ...order, status, updatedAt: new Date().toISOString() } : order);
  saveOrders(orders);
  renderOrders();
}
function seedOrder() {
  const orders = getOrders();
  orders.unshift({
    orderNumber: buildOrderNumber(),
    status: 'Pesanan Diterima',
    orderType: 'Delivery',
    outlet: 'KFC Kemang',
    time: 'Secepatnya',
    paymentMethod: 'QRIS',
    promo: 'KFCHEMAT',
    customer: { name: 'Customer Demo', phone: '081234567890', address: 'Jl. Contoh No. 10' },
    items: [{ name: 'Super Bucket Deal', quantity: 1, price: 129000, variant: 'Mix Original & Spicy', side: 'Nasi' }],
    costs: { subtotal: 129000, discount: 15000, deliveryFee: 12000, tax: 11400, total: 137400 },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  saveOrders(orders);
  renderOrders();
}
function renderAdminList(key, container) {
  const items = read(key);
  container.innerHTML = items.length ? items.map((item, index) => `<article><div><strong>${item.title}</strong><span>${item.meta}</span></div><button class="cart-remove" data-remove="${key}" data-index="${index}">Hapus</button></article>`).join('') : '<p class="empty-cart">Belum ada data.</p>';
  container.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => {
    const next = read(button.dataset.remove).filter((_, index) => index !== Number(button.dataset.index));
    write(button.dataset.remove, next);
    renderLists(); renderStats();
  }));
}
function renderLists() {
  renderAdminList(ADMIN_MENU_KEY, adminMenuList);
  renderAdminList(ADMIN_PROMO_KEY, adminPromoList);
}

seedOrderButton?.addEventListener('click', seedOrder);
clearCompletedButton?.addEventListener('click', () => {
  saveOrders(getOrders().filter((order) => order.status !== 'Selesai'));
  renderOrders();
});
adminMenuForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('menu-name').value.trim();
  const price = Number(document.getElementById('menu-price').value);
  if (!title || !price) return;
  write(ADMIN_MENU_KEY, [{ title, meta: formatCurrency(price) }, ...read(ADMIN_MENU_KEY)]);
  adminMenuForm.reset(); renderLists(); renderStats();
});
adminPromoForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('promo-title').value.trim();
  const meta = document.getElementById('promo-discount').value.trim();
  if (!title || !meta) return;
  write(ADMIN_PROMO_KEY, [{ title, meta }, ...read(ADMIN_PROMO_KEY)]);
  adminPromoForm.reset(); renderLists();
});

renderOrders();
renderLists();
