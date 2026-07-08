const STORAGE_KEY = 'kfc_cart';
const checkoutContent = document.getElementById('checkout-content');
const checkoutForm = document.getElementById('checkout-form');

if (typeof requireLogin === 'function') {
  requireLogin();
}

function loadCart() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch (err) { return []; }
}
function saveCart(cart) { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
function formatCurrency(value) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value); }
function getCosts(cart) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal >= 100000 ? 15000 : 0;
  const deliveryFee = 12000;
  const tax = Math.round((subtotal - discount) * 0.1);
  const total = subtotal - discount + deliveryFee + tax;
  return { subtotal, discount, deliveryFee, tax, total };
}

function renderCheckout() {
  const cart = loadCart();
  if (!cart.length) {
    checkoutContent.innerHTML = '<p class="checkout-empty">Keranjang kosong. Tambahkan pesanan KFC terlebih dahulu, lalu kembali ke checkout.</p>';
    return;
  }
  const costs = getCosts(cart);
  checkoutContent.innerHTML = `
    <ul>
      ${cart.map((item) => `<li><strong>${item.name}</strong><br />${item.quantity} x ${formatCurrency(item.price)}<br />Varian: ${item.variant || '-'}, Side: ${item.side || '-'}${item.note ? `<br />Catatan: ${item.note}` : ''}</li>`).join('')}
    </ul>
    <div class="checkout-line"><span>Subtotal</span><span>${formatCurrency(costs.subtotal)}</span></div>
    <div class="checkout-line"><span>Diskon</span><span>-${formatCurrency(costs.discount)}</span></div>
    <div class="checkout-line"><span>Delivery fee</span><span>${formatCurrency(costs.deliveryFee)}</span></div>
    <div class="checkout-line"><span>Pajak estimasi</span><span>${formatCurrency(costs.tax)}</span></div>
    <div class="checkout-total"><span>Total</span><span>${formatCurrency(costs.total)}</span></div>
  `;
}

checkoutForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const cart = loadCart();
  if (!cart.length) { alert('Keranjang kosong. Tambahkan pesanan terlebih dahulu.'); return; }

  const orderType = document.querySelector('input[name="order_type"]:checked')?.value || 'Delivery';
  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const outlet = document.getElementById('checkout-outlet').value;
  const time = document.getElementById('checkout-time').value;
  const promo = document.getElementById('promo-code').value.trim() || '-';
  const paymentMethod = document.getElementById('payment-method').value;
  if (!name || !phone || !address) { alert('Mohon lengkapi semua data checkout.'); return; }

  const costs = getCosts(cart);
  const orderNumber = `KFC-${Date.now().toString().slice(-6)}`;
  const orderSummary = cart.map((item) => `- ${item.name} x${item.quantity} (${item.variant || '-'}, ${item.side || '-'})${item.note ? `, Catatan: ${item.note}` : ''}`).join('\n');
  const order = {
    id: `order-${Date.now()}`,
    orderNumber,
    customerName: name,
    phone,
    address,
    items: cart.map((item) => ({ name: item.name, quantity: item.quantity, variant: item.variant, side: item.side, note: item.note })),
    totalAmount: costs.total,
    orderDate: new Date().toISOString(),
    status: 'Menunggu Konfirmasi',
    orderType,
    outlet,
    time,
    promo,
    paymentMethod,
  };
  addOrder(order);
  localStorage.setItem('kfc_last_order_number', order.orderNumber);
  saveCart([]);
  checkoutForm.reset();
  checkoutContent.innerHTML = `
    <div class="admin-panel-card">
      <h3>Pesanan Tersimpan</h3>
      <p>Nomor pesanan Anda: <strong>${order.orderNumber}</strong></p>
      <p>Status saat ini: <strong>${order.status}</strong></p>
      <p>Pesanan telah tersimpan di sistem dan dapat dilihat di halaman Pesanan Saya.</p>
      <a class="btn btn-outline" href="index.html#pesanan-saya">Lihat Pesanan Saya</a>
    </div>
  `;
  window.dispatchEvent(new Event('kfc:orders-updated'));
});

renderCheckout();
