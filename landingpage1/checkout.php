<?php
require_once __DIR__ . '/auth.php';
require_login();
$user = auth_get_current_user();

function escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Checkout | Dimsum Narawi</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header auth-header">
    <div class="container header-inner">
      <div class="brand-group">
        <a class="brand" href="index.php">Dimsum Narawi</a>
        <span class="brand-tag">Original • Mentai • Bakar</span>
      </div>
      <nav class="site-nav">
        <a href="index.php">Beranda</a>
        <a href="index.php#menu">Menu</a>
        <a href="index.php#promo">Promo</a>
        <a href="index.php#about">Tentang</a>
        <a href="index.php#location">Lokasi</a>
      </nav>
      <div class="header-actions">
        <span class="header-user">Halo, <?= escape($user['username'] ?? $user['email']) ?></span>
        <a class="btn btn-secondary" href="logout.php">Logout</a>
      </div>
    </div>
  </header>
  <main class="checkout-page">
    <section class="checkout-card">
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1rem;">
        <div>
          <h1>Checkout Pesanan</h1>
          <p>Lengkapi data pemesanan, lalu kirim pesanan lewat WhatsApp.</p>
        </div>
        <div style="text-align: right;">
          <a class="btn btn-secondary" href="logout.php">Keluar</a>
          <a class="btn btn-secondary" href="index.php">Belanja lagi</a>
        </div>
      </div>

      <div class="checkout-summary">
        <h3>Ringkas Pesanan</h3>
        <div id="checkout-content"></div>
      </div>

      <form id="checkout-form" class="checkout-form">
        <h3>Data Pengiriman</h3>
        <label for="checkout-name">Nama</label>
        <input id="checkout-name" name="name" type="text" required />

        <label for="checkout-phone">Nomor WhatsApp</label>
        <input id="checkout-phone" name="phone" type="tel" required />

        <label for="checkout-address">Alamat</label>
        <textarea id="checkout-address" name="address" rows="3" required></textarea>

        <label for="payment-method">Metode Pembayaran</label>
        <select id="payment-method" name="payment_method" required>
          <option value="COD">COD</option>
          <option value="Transfer">Transfer</option>
          <option value="QRIS">QRIS</option>
        </select>

        <button type="submit" class="btn btn-primary full-width">Kirim Pesanan ke WhatsApp</button>
      </form>
    </section>
  </main>
  <script src="checkout.js"></script>
</body>
</html>
