# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# Toko Online KFC

Versi: 1.0  
Tanggal: Juli 2026  
Status: Draft  
Produk: Website / Web App Toko Online KFC  

---

# 1. Ringkasan Produk

Toko Online KFC adalah aplikasi web untuk memudahkan pelanggan melihat menu, memilih paket makanan, melakukan pemesanan online, memilih metode pengiriman, melakukan pembayaran, dan memantau status pesanan.

Aplikasi harus terasa cepat, modern, mudah digunakan di mobile, dan konsisten dengan identitas visual KFC: dominasi merah, putih, hitam, serta aksen abu-abu netral. Tampilan harus fokus pada produk makanan, promo, kemudahan checkout, dan pengalaman pemesanan yang jelas.

---

# 2. Latar Belakang

KFC memiliki banyak kategori produk seperti ayam goreng, burger, rice box, bucket, minuman, dessert, dan paket keluarga. Pelanggan sering membutuhkan cara cepat untuk:

* melihat menu terbaru
* menemukan promo aktif
* memilih outlet terdekat
* memesan delivery atau pickup
* membayar secara online
* melihat ulang riwayat pesanan

Website toko online menjadi kanal resmi yang menyatukan katalog, promo, outlet, checkout, dan layanan pelanggan dalam satu pengalaman.

---

# 3. Tujuan Produk

Membangun toko online KFC yang:

* meningkatkan penjualan digital
* memudahkan pelanggan melakukan pemesanan
* menampilkan menu dan promo secara menarik
* mempercepat proses checkout
* mendukung delivery dan pickup
* meningkatkan repeat order
* memberi admin alat untuk mengelola menu, promo, outlet, dan pesanan
* menjaga tampilan konsisten dengan brand KFC

---

# 4. Target Pengguna

## 4.1 Pelanggan Umum

Profil:

* usia 15-45 tahun
* pengguna mobile dominan
* mencari makanan cepat saji untuk diri sendiri, keluarga, atau kantor

Kebutuhan:

* melihat menu dan harga
* mencari promo
* memilih outlet terdekat
* memesan makanan dengan cepat
* membayar dengan metode yang familiar
* melihat status pesanan

## 4.2 Pelanggan Keluarga / Grup

Kebutuhan:

* memilih bucket atau paket hemat
* menyesuaikan jumlah item
* memesan untuk beberapa orang
* menjadwalkan pengiriman

## 4.3 Admin / Operator

Kebutuhan:

* mengelola menu
* mengelola stok
* mengelola promo
* memproses pesanan
* memperbarui status pesanan
* melihat laporan transaksi

---

# 5. Identitas Visual

## 5.1 Prinsip Desain

Desain aplikasi harus:

* kuat secara brand
* bersih dan mudah dipindai
* mobile-first
* menonjolkan foto produk
* menggunakan CTA yang jelas
* tidak terlalu ramai meskipun menggunakan warna merah

## 5.2 Palet Warna

Warna utama:

* KFC Red: `#E4002B`
* Deep Red: `#B60022`
* White: `#FFFFFF`
* Black: `#111111`

Warna pendukung:

* Soft Gray: `#F5F5F5`
* Medium Gray: `#777777`
* Border Gray: `#E6E6E6`
* Warm Cream: `#FFF7F0`
* Success Green: `#168A4A`
* Warning Yellow: `#FFB000`

## 5.3 Penggunaan Warna

* Header utama menggunakan putih dengan aksen merah.
* Tombol utama menggunakan merah KFC.
* Tombol sekunder menggunakan putih dengan border merah atau hitam.
* Banner promo menggunakan merah solid atau kombinasi merah-hitam.
* Background halaman menggunakan putih atau abu-abu sangat muda.
* Harga, diskon, dan label promo menggunakan merah.
* Status sukses menggunakan hijau.
* Status menunggu pembayaran menggunakan kuning.

## 5.4 Tipografi

Rekomendasi:

* Font utama: Inter, Arial, atau system sans-serif
* Heading: tebal, padat, mudah dibaca
* Body: ukuran minimal 16px di mobile
* Harga dan CTA: bold

## 5.5 Komponen Visual

* Card produk dengan foto besar
* Badge promo berwarna merah
* Rating atau label populer
* Bottom cart bar di mobile
* Sticky header
* Section promo dengan visual kuat

---

# 6. Sitemap

* Home
* Menu
* Detail Produk
* Promo
* Outlet
* Keranjang
* Checkout
* Pembayaran
* Status Pesanan
* Login
* Register
* Akun Saya
* Riwayat Pesanan
* FAQ
* Kontak
* Dashboard Admin

---

# 7. Struktur Halaman

## 7.1 Home

Tujuan:

Memberikan akses cepat ke promo, menu populer, kategori, dan checkout.

Komponen:

* sticky header
* hero banner
* search menu
* kategori menu
* promo aktif
* produk populer
* paket keluarga
* outlet terdekat
* CTA download / order
* FAQ ringkas
* footer

Hero:

Headline:

`Pesan KFC Favoritmu Lebih Cepat`

Subheadline:

`Ayam crispy, bucket hemat, burger, rice box, dan promo spesial siap diantar atau diambil di outlet terdekat.`

CTA:

* Pesan Sekarang
* Lihat Promo
* Cari Outlet

## 7.2 Menu

Tujuan:

Menampilkan semua produk dengan filter dan pencarian.

Kategori:

* Semua
* Ayam
* Bucket
* Burger
* Rice Box
* Snack
* Minuman
* Dessert
* Promo

Fitur:

* search menu
* filter kategori
* sort harga
* sort populer
* label promo
* indikator stok
* tombol tambah ke keranjang

Data produk:

* foto produk
* nama produk
* deskripsi singkat
* harga
* harga promo
* kategori
* kalori opsional
* level pedas opsional
* status stok

## 7.3 Detail Produk

Komponen:

* foto produk besar
* nama produk
* deskripsi
* harga
* pilihan varian
* pilihan side dish
* pilihan minuman
* catatan pesanan
* jumlah item
* tombol tambah ke keranjang

Contoh opsi:

* Original / Spicy
* Nasi / Kentang
* Cola / Mineral Water / Tea
* Saus tambahan

## 7.4 Promo

Tujuan:

Menampilkan promo aktif secara menarik dan mudah dipilih.

Komponen:

* banner promo utama
* list promo
* countdown promo
* syarat dan ketentuan
* tombol pesan promo

Jenis promo:

* bucket hemat
* paket keluarga
* lunch deal
* buy 1 get 1
* gratis ongkir
* voucher member

## 7.5 Outlet

Tujuan:

Membantu pelanggan menemukan outlet terdekat.

Fitur:

* pencarian kota
* daftar outlet
* jam operasional
* status buka/tutup
* estimasi delivery
* tombol pilih outlet
* integrasi peta opsional

## 7.6 Keranjang

Komponen:

* daftar item
* foto kecil produk
* nama produk
* varian
* jumlah
* subtotal
* tombol hapus
* input kode promo
* ringkasan harga
* CTA checkout

Ringkasan harga:

* subtotal
* diskon
* biaya pengiriman
* pajak
* total

## 7.7 Checkout

Langkah checkout:

1. Login atau lanjut sebagai tamu
2. Pilih delivery atau pickup
3. Isi alamat atau pilih outlet
4. Pilih waktu pengiriman
5. Pilih metode pembayaran
6. Review pesanan
7. Konfirmasi pembayaran

Form pelanggan:

* nama
* nomor WhatsApp
* email opsional
* alamat
* catatan alamat

Metode pembayaran:

* transfer bank
* e-wallet
* QRIS
* kartu debit/kredit
* cash on delivery jika tersedia

## 7.8 Status Pesanan

Status:

* Menunggu Pembayaran
* Pembayaran Berhasil
* Pesanan Diterima
* Sedang Disiapkan
* Siap Diambil
* Dalam Pengiriman
* Selesai
* Dibatalkan

Komponen:

* nomor pesanan
* estimasi waktu
* timeline status
* detail item
* total pembayaran
* tombol hubungi outlet

## 7.9 Akun Saya

Fitur:

* profil pengguna
* alamat tersimpan
* riwayat pesanan
* reorder
* voucher saya
* logout

## 7.10 Dashboard Admin

Fitur:

* ringkasan penjualan
* daftar pesanan masuk
* manajemen menu
* manajemen kategori
* manajemen promo
* manajemen outlet
* manajemen stok
* laporan transaksi

---

# 8. User Flow

## 8.1 Flow Order Delivery

1. User membuka home
2. User memilih menu atau promo
3. User menambahkan produk ke keranjang
4. User membuka keranjang
5. User memilih delivery
6. User mengisi alamat
7. User memilih metode pembayaran
8. User melakukan konfirmasi
9. Sistem membuat nomor pesanan
10. User melihat status pesanan

## 8.2 Flow Pickup

1. User memilih menu
2. User menambahkan item ke keranjang
3. User memilih pickup
4. User memilih outlet
5. User memilih jam pengambilan
6. User membayar
7. Sistem menampilkan kode pesanan
8. User mengambil pesanan di outlet

## 8.3 Flow Reorder

1. User login
2. User membuka riwayat pesanan
3. User klik pesan lagi
4. Sistem memasukkan item ke keranjang
5. User checkout

---

# 9. Functional Requirements

## 9.1 Menu dan Produk

* Sistem dapat menampilkan daftar produk.
* Sistem dapat memfilter produk berdasarkan kategori.
* Sistem dapat mencari produk berdasarkan nama.
* Sistem dapat menampilkan detail produk.
* Sistem dapat menampilkan status stok.
* Sistem dapat menampilkan harga normal dan harga promo.

## 9.2 Keranjang

* User dapat menambahkan item ke keranjang.
* User dapat mengubah jumlah item.
* User dapat menghapus item.
* Sistem menghitung subtotal secara otomatis.
* Sistem menyimpan keranjang sementara di browser atau akun.

## 9.3 Promo

* Sistem dapat menampilkan promo aktif.
* Sistem dapat memvalidasi kode promo.
* Sistem dapat menghitung diskon.
* Promo memiliki tanggal mulai dan tanggal selesai.

## 9.4 Checkout

* User dapat memilih delivery atau pickup.
* User dapat mengisi data kontak.
* User dapat memilih alamat atau outlet.
* User dapat memilih metode pembayaran.
* Sistem dapat membuat nomor pesanan unik.
* Sistem dapat menampilkan ringkasan pesanan sebelum konfirmasi.

## 9.5 Pembayaran

* Sistem dapat menampilkan instruksi pembayaran.
* Sistem dapat menerima status pembayaran.
* Sistem dapat mengubah status pesanan setelah pembayaran berhasil.

## 9.6 Order Tracking

* User dapat melihat status pesanan.
* Admin dapat memperbarui status pesanan.
* User mendapat informasi estimasi waktu.

## 9.7 Admin

* Admin dapat login.
* Admin dapat menambah, mengubah, dan menghapus menu.
* Admin dapat mengatur stok.
* Admin dapat membuat promo.
* Admin dapat melihat pesanan masuk.
* Admin dapat memperbarui status pesanan.

---

# 10. Non-Functional Requirements

## 10.1 Performance

* Halaman utama dimuat kurang dari 3 detik pada koneksi 4G.
* Gambar produk harus dioptimalkan.
* Interaksi tambah keranjang harus terasa instan.

## 10.2 Responsiveness

* Mobile-first.
* Layout harus baik di ukuran 360px, 768px, 1024px, dan desktop besar.
* Tombol checkout harus mudah dijangkau di mobile.

## 10.3 Accessibility

* Warna teks harus memiliki kontras yang baik.
* Semua tombol memiliki label jelas.
* Form memiliki label.
* Navigasi bisa digunakan dengan keyboard.

## 10.4 Security

* Password harus di-hash.
* Input form harus divalidasi.
* Admin route harus dilindungi autentikasi.
* Data pembayaran tidak boleh disimpan sembarangan.

## 10.5 SEO

* Setiap halaman memiliki title dan meta description.
* Produk memiliki struktur heading yang rapi.
* URL harus mudah dibaca.
* Gambar memiliki alt text.

---

# 11. Data Model Awal

## 11.1 Product

Field:

* id
* name
* slug
* category_id
* description
* image
* price
* promo_price
* stock
* is_available
* is_featured
* created_at
* updated_at

## 11.2 Category

Field:

* id
* name
* slug
* sort_order

## 11.3 Order

Field:

* id
* order_number
* user_id
* customer_name
* phone
* email
* order_type
* outlet_id
* address
* subtotal
* discount
* delivery_fee
* tax
* total
* payment_method
* payment_status
* order_status
* created_at
* updated_at

## 11.4 Order Item

Field:

* id
* order_id
* product_id
* product_name
* quantity
* unit_price
* subtotal
* options
* note

## 11.5 Outlet

Field:

* id
* name
* city
* address
* latitude
* longitude
* phone
* opening_hours
* is_open

## 11.6 Promo

Field:

* id
* code
* title
* description
* discount_type
* discount_value
* min_order
* start_date
* end_date
* is_active

---

# 12. Komponen UI Utama

* Header
* Navigation menu
* Hero banner
* Search bar
* Category tabs
* Product card
* Promo card
* Product detail modal
* Cart drawer
* Checkout form
* Order summary
* Status timeline
* Outlet selector
* Admin table
* Toast notification
* Empty state
* Loading state

---

# 13. Copywriting Utama

## Hero

Headline:

`Pesan KFC Favoritmu Lebih Cepat`

Subheadline:

`Ayam crispy, bucket hemat, burger, rice box, dan promo spesial siap diantar atau diambil di outlet terdekat.`

CTA:

* Pesan Sekarang
* Lihat Promo
* Cari Outlet

## Promo

Headline:

`Promo KFC Hari Ini`

Subheadline:

`Paket hemat untuk makan sendiri, berdua, keluarga, atau acara kantor.`

## Checkout

Headline:

`Selesaikan Pesanan`

Subheadline:

`Periksa kembali menu, alamat, dan metode pembayaran sebelum konfirmasi.`

---

# 14. Acceptance Criteria

## 14.1 Home

* User dapat melihat hero, kategori menu, promo, produk populer, dan outlet.
* CTA utama mengarah ke section menu atau checkout flow.
* Tampilan konsisten dengan warna merah, putih, dan hitam.

## 14.2 Menu

* User dapat memfilter produk berdasarkan kategori.
* User dapat mencari produk.
* User dapat menambahkan produk ke keranjang.
* Produk yang habis tidak bisa ditambahkan ke keranjang.

## 14.3 Keranjang

* User dapat mengubah jumlah item.
* Total harga berubah otomatis.
* User dapat menghapus item.
* User dapat lanjut ke checkout jika keranjang tidak kosong.

## 14.4 Checkout

* User dapat memilih delivery atau pickup.
* Form wajib divalidasi.
* Sistem menampilkan ringkasan biaya.
* Sistem membuat nomor pesanan setelah konfirmasi.

## 14.5 Admin

* Admin dapat melihat daftar pesanan.
* Admin dapat mengubah status pesanan.
* Admin dapat mengelola produk dan promo.

---

# 15. Prioritas MVP

## Wajib Ada

* Home
* Menu
* Detail produk
* Keranjang
* Checkout
* Promo
* Outlet
* Login/register sederhana
* Riwayat pesanan
* Dashboard admin dasar

## Bisa Menyusul

* payment gateway penuh
* live tracking kurir
* voucher member
* loyalty point
* rekomendasi produk otomatis
* push notification

---

# 16. Risiko dan Catatan

* Nama dan identitas KFC adalah brand/trademark. Implementasi publik harus menggunakan aset resmi dan mengikuti pedoman brand resmi.
* Foto produk harus menggunakan aset resmi atau aset yang memiliki izin.
* Harga dan promo harus mudah diperbarui karena dapat berubah berkala.
* Integrasi pembayaran dan delivery membutuhkan validasi keamanan tambahan.

---

# 17. Success Metrics

* Conversion rate checkout minimal 5%.
* Cart abandonment turun di bawah 60%.
* Waktu checkout rata-rata kurang dari 2 menit.
* Mobile traffic minimal 80%.
* Repeat order meningkat minimal 20%.
* Halaman utama memiliki load time kurang dari 3 detik.

---

# 18. Kesimpulan

Toko Online KFC harus menjadi aplikasi pemesanan makanan yang cepat, visual, mudah dipahami, dan kuat secara brand. Fokus utama produk adalah menampilkan menu secara menarik, mempercepat checkout, memudahkan pemilihan delivery atau pickup, serta memberikan admin kontrol yang cukup untuk mengelola operasional digital.
