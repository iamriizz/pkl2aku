<?php
require_once __DIR__ . '/auth.php';

$user = auth_get_current_user();
$isLoggedIn = $user !== null;

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
  <title>Dimsum Narawi | Menu Dimsum Premium</title>
  <meta name="description" content="Dimsum Narawi - dimsum original, mentai, dan bakar dengan layanan pesan cepat via WhatsApp." />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand-group">
        <a class="brand" href="#home">Dimsum Narawi</a>
        <span class="brand-tag">Original • Mentai • Bakar</span>
      </div>
      <button class="nav-toggle" aria-label="Buka navigasi">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="site-nav">
        <a href="#home">Beranda</a>
        <a href="#menu">Menu</a>
        <a href="#promo">Promo</a>
        <a href="#about">Tentang</a>
        <a href="#location">Lokasi</a>
      </nav>
      <div class="header-actions">
        <?php if ($isLoggedIn): ?>
          <span class="header-user">Halo, <?= escape($user['username'] ?? $user['email']) ?></span>
          <a class="btn btn-secondary" href="logout.php">Keluar</a>
        <?php else: ?>
          <a class="btn btn-secondary" href="login.php">Login</a>
          <a class="btn btn-secondary" href="register.php">Daftar</a>
        <?php endif; ?>
        <button class="btn btn-secondary cart-button" id="open-cart" aria-label="Buka keranjang">
          <span class="cart-icon">🛒</span>
          <span>Keranjang</span>
          <span class="cart-count" id="cart-count">0</span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero hero-modern" id="home">
      <div class="container hero-modern-grid">
        <div class="hero-copy">
          <span class="eyebrow">Dimsum Premium</span>
          <h1>Dimsum Original, Mentai, dan Bakar dengan Saus Spesial</h1>
          <p>Temukan menu dimsum Narawi yang dibuat dengan daging berkualitas, kulit pangsit tipis, dan topping mewah. Pilih level sambal, tambahan saus, lalu pesan langsung dengan mudah.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#menu">Pilih Menu</a>
            <a class="btn btn-secondary" href="#promo">Lihat Promo</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="assets/images/dimsum-menu.svg" alt="Dimsum daging original" />
        </div>
      </div>
    </section>

    <section class="section menu-section" id="menu">
      <div class="container section-heading">
        <p class="overline">Menu Dimsum</p>
        <h2>Pilih Kategori Dimsum Favoritmu</h2>
        <p>Setiap menu hadir dengan foto HD, deskripsi singkat, harga jelas, dan tombol pesan siap pakai.</p>
      </div>
      <div class="container category-tabs" id="category-tabs">
        <button class="tab active" data-category="all">Semua</button>
        <button class="tab" data-category="original">Dimsum Original</button>
        <button class="tab" data-category="mentai">Dimsum Mentai</button>
        <button class="tab" data-category="bakar">Dimsum Bakar</button>
      </div>
      <div class="container menu-list" id="menu-list"></div>
    </section>

    <section class="section section-alt" id="promo">
      <div class="container section-heading">
        <p class="overline">Promo Spesial</p>
        <h2>Paket Hemat untuk Setiap Kesempatan</h2>
        <p>Pilih paket keluarga dan event dengan harga spesial untuk pengalaman dimsum terbaik.</p>
      </div>
      <div class="container promo-grid">
        <article class="promo-card">
          <div class="promo-image"><img src="assets/images/dimsum-promo.svg" alt="Paket meeting dimsum" /></div>
          <div class="promo-content">
            <h3>Paket Meeting 12 Orang</h3>
            <p>Paket lengkap 12 pcs dimsum + 4 minuman dan sambal spesial.</p>
            <div class="promo-meta">
              <span class="promo-price">Rp 280.000</span>
              <button class="btn btn-primary" data-promoid="meeting">Pesan Paket</button>
            </div>
          </div>
        </article>
        <article class="promo-card">
          <div class="promo-image"><img src="assets/images/dimsum-steam.svg" alt="Paket keluarga dimsum" /></div>
          <div class="promo-content">
            <h3>Paket Keluarga 6 Orang</h3>
            <p>8 pcs dimsum + sup jamur + 2 minuman, cocok untuk keluarga.</p>
            <div class="promo-meta">
              <span class="promo-price">Rp 170.000</span>
              <button class="btn btn-primary" data-promoid="keluarga">Pesan Paket</button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section section-alt about-section" id="about">
      <div class="container about-grid">
        <div>
          <p class="overline">Tentang Kami</p>
          <h2>Dimsum Narawi: Rasa Lokal dengan Sentuhan Modern</h2>
          <p>Kami menyajikan dimsum fresh setiap hari dengan kulit pangsit tipis, isian daging pilihan, dan saus khas Narawi untuk pengalaman makan yang memuaskan.</p>
          <ul class="about-list">
            <li>Menu Original, Mentai, Bakar</li>
            <li>Foto HD dan kartu menu rapih</li>
            <li>Checkout mudah via WhatsApp</li>
          </ul>
        </div>
        <div class="about-image">
          <img src="assets/images/dimsum-process.svg" alt="Proses pembuatan dimsum" />
        </div>
      </div>
    </section>

    <section class="section testimonials" id="testimonials">
      <div class="container section-heading">
        <p class="overline">Testimoni</p>
        <h2>Pelanggan Kami Senang</h2>
      </div>
      <div class="container testimony-grid">
        <article class="testimonial-card">
          <p>"Dimsum Narawi punya dimsum original yang juara. Pesan online gampang dan rasanya konsisten."</p>
          <footer><strong>Rina S.</strong><span>⭐⭐⭐⭐⭐</span></footer>
        </article>
        <article class="testimonial-card">
          <p>"Mentai-nya nendang! Suasana ShopeeFood ada di website, jadi pesan cepat tanpa ribet."</p>
          <footer><strong>Ayu M.</strong><span>⭐⭐⭐⭐⭐</span></footer>
        </article>
        <article class="testimonial-card">
          <p>"Cart-nya mudah dipakai, total harga muncul otomatis. Pas untuk acara keluarga."</p>
          <footer><strong>Pak Budi</strong><span>⭐⭐⭐⭐</span></footer>
        </article>
      </div>
    </section>

    <section class="section faq" id="faq">
      <div class="container section-heading">
        <p class="overline">FAQ</p>
        <h2>Informasi Cepat</h2>
      </div>
      <div class="container faq-grid">
        <div class="faq-item">
          <button class="faq-question">Bagaimana cara memesan?</button>
          <div class="faq-answer">Klik tombol "Pesan" pada produk, pilih jumlah dan level sambal, lalu simpan ke keranjang.</div>
        </div>
        <div class="faq-item">
          <button class="faq-question">Apa saja kategori menunya?</button>
          <div class="faq-answer">Tersedia Dimsum Original, Dimsum Mentai, dan Dimsum Bakar.</div>
        </div>
        <div class="faq-item">
          <button class="faq-question">Bagaimana checkout?</button>
          <div class="faq-answer">Isi formulir checkout dengan nama, WA, alamat, dan metode pembayaran.</div>
        </div>
        <div class="faq-item">
          <button class="faq-question">Bagaimana pesan via WhatsApp?</button>
          <div class="faq-answer">Setelah checkout, kami membuat pesan otomatis dengan daftar pesanan dan alamat Anda.</div>
        </div>
      </div>
    </section>

    <section class="section contact" id="location">
      <div class="container section-heading">
        <p class="overline">Kontak & Lokasi</p>
        <h2>Hubungi Dimsum Narawi</h2>
      </div>
      <div class="container contact-grid">
        <div class="contact-card">
          <h3>Alamat</h3>
          <p>Jl. Raya Narawi No. 12, Kota Lorem</p>
        </div>
        <div class="contact-card">
          <h3>Jam Buka</h3>
          <p>Senin - Minggu: 10:00 - 21:00</p>
        </div>
        <div class="contact-card">
          <h3>WhatsApp</h3>
          <p><a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a></p>
        </div>
      </div>
    </section>
  </main>

  <aside class="cart-drawer" id="cart-drawer" aria-hidden="true">
    <div class="drawer-header">
      <h2>Keranjang Anda</h2>
      <button class="close-drawer" id="close-cart">×</button>
    </div>
    <div class="drawer-body" id="cart-items"></div>
    <div class="drawer-footer">
      <div class="drawer-total">
        <span>Total</span>
        <strong id="cart-total">Rp 0</strong>
      </div>
      <button class="btn btn-primary full-width" id="checkout-button">Checkout</button>
    </div>
  </aside>

  <div class="modal hidden" id="order-modal" aria-hidden="true">
    <div class="modal-card">
      <button class="modal-close" id="close-modal">×</button>
      <div class="modal-content">
        <div class="modal-image"><img id="modal-image" src="" alt="" /></div>
        <div class="modal-info">
          <span class="menu-badge badge-orange" id="modal-category">Kategori</span>
          <h3 id="modal-title">Nama Menu</h3>
          <p id="modal-desc">Deskripsi menu</p>
          <div class="modal-meta">
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <strong id="modal-price">Rp 0</strong>
          </div>
          <form id="order-form">
            <label>Jumlah</label>
            <div class="quantity-control">
              <button type="button" id="qty-decrease">-</button>
              <input type="number" id="qty-input" value="1" min="1" />
              <button type="button" id="qty-increase">+</button>
            </div>
            <label>Level Sambal</label>
            <select id="spice-level" required>
              <option value="Tidak Pedas">Tidak Pedas</option>
              <option value="Sedang">Sedang</option>
              <option value="Pedas">Pedas</option>
            </select>
            <label>Tambahan Saus</label>
            <select id="sauce-option" required>
              <option value="Original">Original</option>
              <option value="Mentai">Mentai</option>
              <option value="BBQ">BBQ</option>
            </select>
            <label>Catatan</label>
            <textarea id="order-note" rows="3" placeholder="Catatan untuk penjual"></textarea>
            <button type="submit" class="btn btn-primary full-width">Tambah ke Keranjang</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
