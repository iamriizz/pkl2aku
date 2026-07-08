const ORDERS_KEY = 'kfc_orders';
const statusResult = document.getElementById('status-result');
const statusForm = document.getElementById('status-search-form');
const orderSearch = document.getElementById('order-search');

const STATUS_STEPS = ['Menunggu Pembayaran', 'Pesanan Diterima', 'Sedang Disiapkan', 'Siap Diambil', 'Dalam Pengiriman', 'Selesai'];

function getOrders() {
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY)) || []; } catch (err) { return []; }
}
function formatCurrency(value) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value); }
function formatDate(value) {
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
}
function getOrderByNumber(orderNumber) {
  return getOrders().find((order) => order.orderNumber.toLowerCase() === orderNumber.toLowerCase());
}
function renderEmpty() {
  const latest = getOrders()[0];
  statusResult.innerHTML = `
    <article class="status-card empty-status">
      <h2>Masukkan nomor pesanan</h2>
      <p>Nomor pesanan akan muncul setelah checkout. ${latest ? `Pesanan terbaru di browser ini: <strong>${latest.orderNumber}</strong>.` : 'Belum ada pesanan tersimpan di browser ini.'}</p>
      ${latest ? `<button class="btn btn-primary" data-order-number="${latest.orderNumber}">Lihat Pesanan Terbaru</button>` : '<a class="btn btn-primary" href="index.html#menu">Mulai Pesan</a>'}
    </article>
  `;
  statusResult.querySelector('[data-order-number]')?.addEventListener('click', (event) => {
    orderSearch.value = event.currentTarget.dataset.orderNumber;
    renderOrder(getOrderByNumber(orderSearch.value));
  });
}
function renderOrder(order) {
  if (!order) {
    statusResult.innerHTML = '<article class="status-card empty-status"><h2>Pesanan tidak ditemukan</h2><p>Periksa kembali nomor pesanan atau hubungi customer care.</p></article>';
    return;
  }
  const currentIndex = Math.max(STATUS_STEPS.indexOf(order.status), 0);
  statusResult.innerHTML = `
    <article class="status-card">
      <div class="status-card-header">
        <div><p class="overline">${order.orderNumber}</p><h2>${order.status}</h2><p>${order.orderType} · ${order.outlet} · ${order.time}</p></div>
        <span class="status-pill">${order.paymentMethod}</span>
      </div>
      <div class="status-progress">
        ${STATUS_STEPS.map((step, index) => `<div class="${index < currentIndex ? 'done' : index === currentIndex ? 'active' : ''}"><span></span><strong>${step}</strong></div>`).join('')}
      </div>
      <div class="status-detail-grid">
        <div><h3>Detail Pelanggan</h3><p><strong>${order.customer.name}</strong><br>${order.customer.phone}<br>${order.customer.address}</p></div>
        <div><h3>Ringkasan Biaya</h3><p>Subtotal: ${formatCurrency(order.costs.subtotal)}<br>Diskon: -${formatCurrency(order.costs.discount)}<br>Delivery: ${formatCurrency(order.costs.deliveryFee)}<br>Pajak: ${formatCurrency(order.costs.tax)}</p><strong class="status-total">${formatCurrency(order.costs.total)}</strong></div>
      </div>
      <div class="status-items"><h3>Item Pesanan</h3>${order.items.map((item) => `<p>${item.quantity}x <strong>${item.name}</strong> · ${item.variant || '-'} · ${item.side || '-'}</p>`).join('')}</div>
      <p class="status-date">Dibuat: ${formatDate(order.createdAt)}${order.updatedAt ? ` · Update: ${formatDate(order.updatedAt)}` : ''}</p>
    </article>
  `;
}

statusForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = orderSearch.value.trim();
  if (!value) { renderEmpty(); return; }
  renderOrder(getOrderByNumber(value));
});

const queryOrder = new URLSearchParams(window.location.search).get('order');
if (queryOrder) {
  orderSearch.value = queryOrder;
  renderOrder(getOrderByNumber(queryOrder));
} else {
  renderEmpty();
}
