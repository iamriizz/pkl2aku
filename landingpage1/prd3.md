# PRD: Website Produk Dimsum Narawi

## 1. Ringkasan Produk
Website Dimsum Narawi adalah platform online untuk menampilkan menu dimsum premium, mengelola pemesanan, dan menghubungkan pelanggan langsung ke WhatsApp untuk konfirmasi pesanan. Website ini akan dikembangkan dengan tampilan marketplace ala Shopee — menggunakan warna oranye, banner promo, category chips, dan kartu produk modern — sekaligus menambahkan autentikasi frontend agar checkout lebih aman.

## 2. Tujuan Produk
- Menjadikan Dimsum Narawi mudah dikenali secara online.
- Menampilkan menu dimsum dan paket promo secara jelas.
- Menyediakan proses checkout sederhana untuk pelanggan.
- Mengamankan alur pembelian dengan login/registrasi.
- Meningkatkan konversi melalui pengalaman pembelian cepat dan familiar.

## 3. Sasaran Pengguna
- Pelanggan baru yang ingin mencari menu dimsum premium.
- Pelanggan yang ingin memesan paket keluarga atau meeting.
- Pengguna yang ingin melakukan checkout melalui WhatsApp.
- Pengguna yang ingin menyimpan sesi login untuk pemesanan berikutnya.

## 4. Ruang Lingkup Produk
- Halaman beranda dengan hero, marketplace search, kategori, promo, testimonial, dan FAQ.
- Desain visual yang mengikuti gaya Shopee: orange dominant, rounded cards, banner promo, dan category chips.
- Keranjang belanja sederhana berbasis frontend.
- Halaman login dan registrasi dengan desain konsisten.
- Halaman checkout yang terproteksi login.
- Autentikasi frontend menggunakan `localStorage` untuk user dan sesi.
- Integrasi pesan order ke WhatsApp.

## 5. Fitur Utama

### 5.1. Halaman Beranda
- Menampilkan hero section dengan CTA.
- Menu produktif dengan kategori: Original, Mentai, Bakar.
- Paket promo dengan tombol pesan.
- Keranjang muncul sebagai drawer dari sisi.
- Tombol checkout tersedia bila ada item di keranjang.

### 5.2. Login dan Registrasi
- Tombol `Login` dan `Daftar` ada di pojok kanan atas navbar.
- Login page dan register page tetap menggunakan tampilan website.
- Registrasi menyimpan data ke `localStorage` pada browser.
- Validasi input:
  - Nama pengguna tidak boleh kosong.
  - Email harus valid.
  - Email tidak boleh terdaftar dua kali.
  - Password minimal 8 karakter.
  - Konfirmasi password harus cocok.
- Password disimpan dengan hash SHA-256 di JavaScript.
- Verifikasi password dengan membandingkan hash saat login.
- Tampilkan pesan sukses dan error menggunakan alert sederhana di halaman.

### 5.3. Session dan Status Login
- Gunakan sesi frontend `localStorage` untuk status login aktif.
- Setelah login, tampilkan nama pengguna di navbar.
- Tombol `Login` berubah menjadi `Logout` bila sudah login.
- `Logout` menghapus sesi login dari browser.

### 5.4. Checkout
- Checkout hanya bisa diakses jika sudah login.
- Jika belum login dan menekan `Checkout` atau `Pesan Sekarang`, arahkan ke halaman `login.html`.
- Setelah login berhasil, kembali ke halaman `checkout.html`.
- Checkout mengumpulkan nama, nomor WA, alamat, dan metode pembayaran.
- Setelah submit checkout, pesan order terformat dikirim ke WhatsApp.

### 5.5. Keranjang
- Keranjang disimpan di `localStorage` agar item tetap ada selama sesi browser.
- Keranjang menampilkan item, jumlah, varian sambal, saus, dan catatan.
- Total harga terhitung otomatis.

## 6. Alur Pengguna

### 6.1. Pengguna Baru
1. Buka website.
2. Klik `Daftar` di navbar.
3. Isi username, email, password, konfirmasi password.
4. Login setelah registrasi berhasil.
5. Pilih produk/paket, tambahkan ke keranjang.
6. Klik `Checkout`.
7. Isi data checkout.
8. Kirim pesanan lewat WhatsApp.

### 6.2. Pengguna Terdaftar
1. Buka website.
2. Klik `Login` di navbar.
3. Masuk dengan email/username dan password.
4. Pilih produk/paket.
5. Checkout langsung.

### 6.3. Alur Checkout Tidak Login
1. Klik `Checkout` atau `Pesan Sekarang`.
2. Sistem redirect ke halaman `login.html`.
3. Login berhasil.
4. Sistem redirect kembali ke `checkout.html`.

## 7. Persyaratan Teknis
- HTML, CSS, JavaScript.
- Frontend-only tanpa backend PHP/MySQL.
- Desain gaya marketplace ala Shopee.
- File yang dibuat:
  - `index.html`
  - `login.html`
  - `register.html`
  - `checkout.html`
  - `auth.js`
  - `checkout.js`
  - `script.js`
  - `styles.css`
- `localStorage` untuk menyimpan data pengguna dan keranjang.
- Validasi form di JavaScript.
- Pastikan path file tetap di folder `landingpage1`.

## 8. Struktur Data
Penyimpanan pengguna pada browser `localStorage`:
- `id` string unik
- `username` string
- `email` string
- `passwordHash` SHA-256 dari kata sandi
- `createdAt` timestamp

## 9. Validasi & Pesan
- Input form harus divalidasi di frontend JavaScript.
- Pesan sukses/galat ditampilkan di halaman login/registrasi.
- Gunakan alert sederhana untuk menampilkan pesan validasi.

## 10. Batasan
- Tidak ada sistem pembayaran internal; order dikirim menggunakan WhatsApp.
- Tidak ada admin panel atau manajemen order backend.
- Fokus pada pengalaman pemesanan pengguna dan autentikasi.

## 11. Sukses Keluaran
- User dapat daftar dan login.
- Navbar menampilkan nama pengguna setelah login.
- Checkout terlindungi login.
- Redirect login-to-checkout bekerja.
- Pesan order berhasil dibuat untuk WhatsApp.
- Website dapat dijalankan sebagai situs statis via browser atau server HTTP statis.

---

Dokumen PRD ini mencakup semua kebutuhan fitur autentikasi dan checkout untuk website Dimsum Narawi tanpa mengubah tampilan utama homepage, menu, atau checkout yang sudah ada.
