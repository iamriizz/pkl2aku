# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# Luma Wear - Toko Online Baju Perempuan Aesthetic

Versi: 1.0  
Tanggal: Juli 2026  
Status: Draft  
Produk: Website / Web App E-Commerce Fashion  
Target Platform: Desktop dan Mobile Web  

---

# 1. Ringkasan Produk

Luma Wear adalah toko online fashion perempuan yang menjual baju aesthetic dengan nuansa visual pink soft dan kombinasi warna pastel. Website ini dirancang untuk membantu customer menemukan produk fashion yang sesuai gaya mereka, melakukan pembelian dengan mudah, memantau status pesanan, serta melihat riwayat pembelian.

Produk yang dijual mencakup blouse, dress, cardigan, knitwear, rok, celana, outer, set outfit, dan aksesoris pendukung gaya feminin-modern. Pengalaman website harus terasa lembut, rapi, premium, mudah digunakan, dan cocok untuk audiens perempuan muda yang menyukai tampilan aesthetic.

Aplikasi memiliki dua sistem login terpisah:

* Login Customer untuk belanja, checkout, memantau pesanan, dan melihat riwayat.
* Login Admin untuk mengelola produk, stok, kategori, pesanan customer, pembayaran, pengiriman, dan laporan.

---

# 2. Latar Belakang

Belanja fashion perempuan secara online sangat dipengaruhi oleh visual produk, kemudahan memilih ukuran, kejelasan stok, rekomendasi outfit, dan kepastian status pesanan. Banyak toko online kecil masih mengandalkan chat manual untuk menerima pesanan, sehingga customer sulit memantau proses order dan admin sulit mengelola stok atau riwayat transaksi.

Luma Wear membutuhkan platform toko online yang mampu:

* menampilkan katalog baju secara aesthetic dan terstruktur
* memisahkan akses customer dan admin
* menyediakan checkout yang jelas
* mencatat riwayat pesanan customer
* membantu admin mengelola produk dan pesanan secara detail
* membangun identitas brand yang lembut, modern, dan mudah dipercaya

---

# 3. Tujuan Produk

Membangun website toko online Luma Wear yang:

* meningkatkan penjualan baju perempuan secara online
* memperkuat branding Luma Wear sebagai brand fashion aesthetic
* memudahkan customer mencari, memfilter, dan membeli produk
* menyediakan akun customer untuk riwayat dan tracking pesanan
* menyediakan dashboard admin untuk kelola barang dan pesanan
* mengurangi proses manual melalui chat
* memberi admin data stok, order, status pembayaran, dan status pengiriman
* memberi pengalaman mobile-first yang nyaman dan cepat

---

# 4. Target Pengguna

## 4.1 Customer

Profil:

* perempuan usia 16-35 tahun
* menyukai fashion aesthetic, soft, feminin, casual, dan pastel
* aktif menggunakan mobile phone
* terbiasa melihat katalog melalui Instagram, TikTok, marketplace, atau website brand
* membutuhkan informasi ukuran, warna, bahan, dan foto produk yang jelas

Kebutuhan:

* melihat katalog baju terbaru
* mencari produk berdasarkan kategori, warna, ukuran, harga, dan style
* melihat detail produk dengan foto dan deskripsi lengkap
* membuat akun dan login
* menyimpan alamat pengiriman
* checkout dengan ringkas
* memantau status pesanan
* melihat riwayat pesanan
* melakukan reorder atau membeli produk serupa

## 4.2 Admin / Owner Toko

Profil:

* owner, admin toko, atau staff operasional Luma Wear
* bertanggung jawab terhadap katalog, stok, pesanan, dan customer service

Kebutuhan:

* login ke dashboard admin secara terpisah
* menambah, mengedit, dan menghapus produk
* mengelola kategori, ukuran, warna, harga, stok, dan foto produk
* melihat pesanan customer secara detail
* mengubah status pembayaran dan pengiriman
* memproses resi pengiriman
* melihat riwayat transaksi
* memantau produk paling laris dan stok menipis

---

# 5. Identitas Visual dan UI Direction

## 5.1 Karakter Brand

Luma Wear harus terasa:

* soft
* aesthetic
* feminine
* clean
* modern
* calm
* trustworthy
* premium tetapi tetap ramah

## 5.2 Palet Warna

Warna utama:

* Soft Pink: `#F8BBD0`
* Blush Pink: `#FCE4EC`
* Rose Pink: `#EFA3B8`
* Warm White: `#FFF9FB`

Warna pastel pendukung:

* Lavender Pastel: `#DCC6F2`
* Mint Pastel: `#CFEFE4`
* Butter Cream: `#FFF2C7`
* Sky Pastel: `#CFE8FF`

Warna netral:

* Ink: `#2F2630`
* Muted Mauve: `#8B7280`
* Border Pink Gray: `#E9D7DF`
* Surface: `#FFFFFF`

Warna status:

* Success: `#6FBF9B`
* Warning: `#F4C76E`
* Error: `#D95C75`
* Info: `#86BDEB`

## 5.3 Penggunaan Warna

* Background utama menggunakan warm white atau blush pink sangat lembut.
* Tombol utama menggunakan rose pink dengan teks putih.
* Tombol sekunder menggunakan putih dengan border soft pink.
* Badge promo menggunakan kombinasi rose pink dan butter cream.
* Status pesanan menggunakan warna pastel yang tetap mudah dibaca.
* Dashboard admin boleh lebih netral, namun tetap memakai aksen pink agar konsisten.

## 5.4 Tipografi

Rekomendasi:

* Heading: Playfair Display, Fraunces, atau serif modern untuk kesan fashion.
* Body: Inter, Poppins, atau system sans-serif untuk keterbacaan.
* Ukuran body minimal 16px di mobile.
* Harga, CTA, dan status menggunakan font weight tebal.

## 5.5 Gaya Komponen

* Product card dengan foto besar, nama produk, harga, warna tersedia, rating, dan badge stok.
* Rounded corner halus 8-16px.
* Shadow lembut, tidak terlalu gelap.
* Layout whitespace lega agar produk terlihat premium.
* Filter berbentuk chip atau sidebar ringan.
* Admin dashboard menggunakan tabel, panel, dan status badge yang mudah dipindai.

---

# 6. Sitemap

## 6.1 Area Publik

* Home
* Katalog Produk
* Detail Produk
* Koleksi / Lookbook
* Promo
* Tentang Luma Wear
* FAQ
* Kontak
* Login Customer
* Register Customer
* Login Admin

## 6.2 Area Customer

* Dashboard Customer
* Profil Saya
* Alamat Saya
* Wishlist
* Keranjang
* Checkout
* Pembayaran
* Pesanan Saya
* Detail Pesanan
* Riwayat Pesanan
* Ulasan Produk

## 6.3 Area Admin

* Dashboard Admin
* Kelola Produk
* Tambah Produk
* Kelola Kategori
* Kelola Stok dan Varian
* Kelola Pesanan
* Detail Pesanan Customer
* Kelola Pembayaran
* Kelola Pengiriman dan Resi
* Kelola Promo / Voucher
* Kelola Customer
* Laporan Penjualan
* Pengaturan Toko

---

# 7. Struktur Halaman Publik

## 7.1 Home

Tujuan:

Menampilkan identitas Luma Wear, produk unggulan, koleksi terbaru, dan jalur cepat menuju pembelian.

Komponen:

* sticky header
* hero banner visual fashion aesthetic
* CTA `Belanja Sekarang`
* CTA sekunder `Lihat Koleksi Baru`
* search produk
* kategori populer
* koleksi terbaru
* best seller
* promo aktif
* lookbook / outfit inspiration
* testimoni customer
* benefit toko
* footer

Hero copy contoh:

Headline:

`Soft Looks for Your Everyday Glow`

Subheadline:

`Temukan blouse, dress, knitwear, dan outfit pastel aesthetic pilihan Luma Wear untuk gaya feminin yang effortless.`

CTA:

* Belanja Sekarang
* Lihat Lookbook

## 7.2 Katalog Produk

Tujuan:

Memudahkan customer menemukan produk yang sesuai preferensi.

Fitur:

* search produk
* filter kategori
* filter harga
* filter ukuran
* filter warna
* filter bahan
* filter status stok
* sort produk terbaru
* sort harga termurah / termahal
* sort paling populer
* pagination atau infinite scroll

Kategori awal:

* Blouse
* Dress
* Cardigan
* Knitwear
* Outer
* Skirt
* Pants
* Set Outfit
* Accessories
* Sale

## 7.3 Detail Produk

Informasi wajib:

* nama produk
* galeri foto produk
* harga normal
* harga diskon jika ada
* deskripsi produk
* bahan
* ukuran tersedia
* warna tersedia
* stok per varian
* size chart
* panduan perawatan
* estimasi berat produk
* rekomendasi style
* ulasan customer
* produk serupa

Aksi:

* pilih warna
* pilih ukuran
* pilih jumlah
* tambah ke keranjang
* tambah ke wishlist
* beli sekarang

## 7.4 Promo

Konten:

* voucher diskon
* promo koleksi tertentu
* free shipping campaign
* bundle outfit
* flash sale

Informasi wajib:

* nama promo
* periode promo
* syarat dan ketentuan
* minimum pembelian
* kode voucher
* status aktif / berakhir

## 7.5 FAQ

Topik:

* cara order
* panduan ukuran
* metode pembayaran
* estimasi pengiriman
* retur dan penukaran ukuran
* cara cek pesanan
* cara menggunakan voucher

---

# 8. Sistem Login Terpisah

## 8.1 Login Customer

Tujuan:

Memberi customer akses ke fitur personal seperti profil, alamat, wishlist, checkout, tracking pesanan, dan riwayat pesanan.

Field login:

* email atau username
* password

Fitur:

* register akun baru
* login
* logout
* lupa password
* edit profil
* simpan alamat
* simpan nomor telepon
* ubah password

Validasi:

* email harus valid
* password minimal 8 karakter
* email tidak boleh duplikat
* customer tidak boleh mengakses dashboard admin

## 8.2 Login Admin

Tujuan:

Memberi admin akses ke pengelolaan toko.

Field login:

* username / email admin
* password

Fitur keamanan:

* route admin terpisah dari customer
* session admin terpisah
* role-based access
* logout admin
* proteksi halaman dashboard admin
* log aktivitas admin untuk perubahan penting

Role admin:

* Super Admin: akses penuh
* Product Admin: kelola produk, kategori, stok
* Order Admin: kelola pesanan, pembayaran, pengiriman
* Viewer: hanya melihat laporan

Validasi:

* customer tidak bisa login melalui form admin
* admin tidak bisa masuk melalui form customer biasa untuk dashboard admin
* akses dashboard ditolak jika belum login sebagai admin

---

# 9. Fitur Customer

## 9.1 Register dan Profil

Customer dapat:

* membuat akun
* login
* mengedit nama
* mengedit email
* mengedit nomor telepon
* mengelola alamat pengiriman
* menentukan alamat utama

## 9.2 Wishlist

Customer dapat:

* menyimpan produk favorit
* menghapus produk dari wishlist
* memindahkan produk wishlist ke keranjang
* melihat status stok produk wishlist

## 9.3 Keranjang

Customer dapat:

* menambahkan produk ke keranjang
* memilih ukuran dan warna
* mengubah jumlah
* menghapus item
* melihat subtotal
* melihat estimasi ongkir
* memasukkan voucher

Validasi:

* jumlah tidak boleh melebihi stok
* produk habis tidak bisa checkout
* varian ukuran dan warna wajib dipilih

## 9.4 Checkout

Step checkout:

1. Review keranjang
2. Pilih alamat
3. Pilih metode pengiriman
4. Masukkan voucher
5. Pilih metode pembayaran
6. Konfirmasi pesanan

Metode pembayaran:

* transfer bank
* virtual account
* QRIS
* e-wallet
* COD opsional

Output setelah checkout:

* nomor pesanan
* instruksi pembayaran
* ringkasan item
* total pembayaran
* status awal pesanan

## 9.5 Pesanan Saya

Customer dapat melihat daftar pesanan dengan informasi:

* nomor pesanan
* tanggal order
* total pembayaran
* jumlah item
* status pesanan
* status pembayaran
* status pengiriman
* tombol lihat detail

Filter pesanan:

* Semua
* Menunggu Pembayaran
* Diproses
* Dikemas
* Dikirim
* Selesai
* Dibatalkan

## 9.6 Detail Pesanan

Informasi detail:

* nomor pesanan
* data customer
* alamat pengiriman
* daftar produk
* ukuran dan warna produk
* harga per item
* subtotal
* diskon
* ongkir
* total
* metode pembayaran
* status pembayaran
* jasa pengiriman
* nomor resi
* timeline status pesanan

Timeline status:

1. Pesanan Dibuat
2. Menunggu Pembayaran
3. Pembayaran Dikonfirmasi
4. Pesanan Diproses
5. Pesanan Dikemas
6. Pesanan Dikirim
7. Pesanan Selesai

Jika dibatalkan:

* status berubah menjadi `Dibatalkan`
* alasan pembatalan ditampilkan

## 9.7 Riwayat Pesanan

Customer dapat:

* melihat pesanan terdahulu
* mencari berdasarkan nomor order
* filter berdasarkan tanggal
* melihat invoice
* membeli ulang produk yang masih tersedia
* memberi ulasan setelah pesanan selesai

## 9.8 Ulasan Produk

Customer dapat memberi ulasan jika:

* pesanan sudah selesai
* produk termasuk dalam pesanan tersebut

Field ulasan:

* rating 1-5
* komentar
* foto opsional

---

# 10. Fitur Admin

## 10.1 Dashboard Admin

Tujuan:

Memberi ringkasan performa toko dan pekerjaan yang harus diproses.

Widget utama:

* total pesanan hari ini
* pesanan menunggu pembayaran
* pesanan perlu dikemas
* pesanan dikirim
* omzet hari ini
* produk stok menipis
* produk terlaris
* customer baru

## 10.2 Kelola Produk

Admin dapat:

* menambah produk baru
* mengedit produk
* menghapus / menonaktifkan produk
* upload beberapa foto produk
* mengatur kategori
* mengatur harga normal
* mengatur harga diskon
* mengatur deskripsi
* mengatur bahan
* mengatur size chart
* mengatur berat produk
* mengatur status produk: draft, aktif, nonaktif, habis

Field produk:

* product_id
* nama produk
* slug
* kategori
* deskripsi pendek
* deskripsi lengkap
* bahan
* panduan perawatan
* harga normal
* harga diskon
* berat
* foto utama
* galeri foto
* status
* created_at
* updated_at

## 10.3 Kelola Varian dan Stok

Admin dapat mengelola varian berdasarkan kombinasi:

* ukuran: XS, S, M, L, XL, All Size
* warna: soft pink, ivory, lavender, mint, beige, sky blue, black, white
* stok per varian
* SKU per varian

Contoh:

| Produk | Warna | Ukuran | SKU | Stok |
|---|---|---|---|---|
| Luma Rose Blouse | Soft Pink | S | LRB-PNK-S | 12 |
| Luma Rose Blouse | Soft Pink | M | LRB-PNK-M | 8 |
| Luma Rose Blouse | Ivory | M | LRB-IVR-M | 5 |

## 10.4 Kelola Kategori

Admin dapat:

* menambah kategori
* mengedit kategori
* menghapus kategori jika tidak digunakan
* mengatur urutan kategori
* mengatur banner kategori

Field kategori:

* category_id
* nama kategori
* deskripsi
* banner image
* status

## 10.5 Kelola Pesanan Customer

Admin dapat melihat daftar pesanan dengan kolom:

* nomor pesanan
* nama customer
* tanggal pesanan
* daftar produk
* total pembayaran
* status pembayaran
* status pesanan
* status pengiriman
* metode pembayaran
* jasa pengiriman
* nomor resi

Admin dapat melakukan aksi:

* melihat detail pesanan
* mengonfirmasi pembayaran
* mengubah status pesanan
* memasukkan nomor resi
* membatalkan pesanan
* memberi catatan internal
* menghubungi customer

## 10.6 Detail Pesanan Admin

Halaman detail pesanan harus menampilkan:

* data customer
* alamat lengkap
* nomor telepon
* item pesanan
* ukuran dan warna tiap item
* catatan customer
* subtotal
* diskon
* ongkir
* total pembayaran
* bukti pembayaran jika transfer manual
* status pembayaran
* status fulfillment
* timeline perubahan status
* admin yang terakhir mengubah status
* catatan internal admin

## 10.7 Status Pesanan Admin

Status pesanan:

* Menunggu Pembayaran
* Pembayaran Dikonfirmasi
* Diproses
* Dikemas
* Dikirim
* Selesai
* Dibatalkan
* Retur / Tukar Ukuran

Aturan perubahan status:

* `Menunggu Pembayaran` dapat berubah ke `Pembayaran Dikonfirmasi` atau `Dibatalkan`.
* `Pembayaran Dikonfirmasi` dapat berubah ke `Diproses`.
* `Diproses` dapat berubah ke `Dikemas`.
* `Dikemas` dapat berubah ke `Dikirim` setelah resi diisi.
* `Dikirim` dapat berubah ke `Selesai`.
* `Selesai` tidak dapat diedit kecuali oleh Super Admin.

## 10.8 Kelola Pembayaran

Admin dapat:

* melihat pesanan yang menunggu pembayaran
* memvalidasi bukti transfer manual
* mengubah status pembayaran
* melihat metode pembayaran
* melihat total yang harus dibayar
* menandai pembayaran gagal

Status pembayaran:

* Belum Dibayar
* Menunggu Verifikasi
* Lunas
* Gagal
* Refund

## 10.9 Kelola Pengiriman

Admin dapat:

* memilih jasa pengiriman
* memasukkan nomor resi
* mengubah status pengiriman
* mencetak label pengiriman
* melihat alamat lengkap customer

Status pengiriman:

* Belum Diproses
* Dikemas
* Diserahkan ke Kurir
* Dalam Pengiriman
* Terkirim

## 10.10 Kelola Promo / Voucher

Admin dapat:

* membuat kode voucher
* menentukan tipe diskon: nominal atau persentase
* menentukan minimum pembelian
* menentukan kuota voucher
* menentukan tanggal mulai dan berakhir
* mengaktifkan atau menonaktifkan voucher

Contoh voucher:

* LUMASOFT10: diskon 10%
* PASTELDAY: diskon Rp 25.000 minimum belanja Rp 250.000
* FREESHIP: gratis ongkir dengan syarat tertentu

## 10.11 Kelola Customer

Admin dapat melihat:

* nama customer
* email
* nomor telepon
* jumlah pesanan
* total transaksi
* tanggal bergabung
* status akun

Admin tidak boleh melihat password customer.

## 10.12 Laporan Penjualan

Filter laporan:

* hari ini
* 7 hari terakhir
* bulan ini
* custom date range

Data laporan:

* omzet total
* jumlah pesanan
* jumlah customer baru
* produk terlaris
* kategori terlaris
* voucher paling sering dipakai
* pesanan dibatalkan

---

# 11. Data Model Awal

## 11.1 User Customer

Field:

* id
* name
* email
* phone
* password_hash
* created_at
* updated_at

## 11.2 Admin User

Field:

* id
* name
* email
* username
* password_hash
* role
* status
* last_login_at
* created_at
* updated_at

## 11.3 Product

Field:

* id
* category_id
* name
* slug
* short_description
* description
* material
* care_instruction
* price
* sale_price
* weight
* main_image
* status
* created_at
* updated_at

## 11.4 Product Variant

Field:

* id
* product_id
* sku
* color
* size
* stock
* image
* status

## 11.5 Order

Field:

* id
* order_number
* customer_id
* customer_name
* phone
* shipping_address
* subtotal
* discount
* shipping_cost
* total
* payment_method
* payment_status
* order_status
* shipping_status
* courier
* tracking_number
* customer_note
* admin_note
* created_at
* updated_at

## 11.6 Order Item

Field:

* id
* order_id
* product_id
* variant_id
* product_name
* color
* size
* quantity
* price
* total

## 11.7 Voucher

Field:

* id
* code
* name
* discount_type
* discount_value
* min_purchase
* quota
* used_count
* start_date
* end_date
* status

---

# 12. User Flow

## 12.1 Flow Customer Belanja

1. Customer membuka home.
2. Customer mencari atau memilih kategori produk.
3. Customer membuka detail produk.
4. Customer memilih warna, ukuran, dan jumlah.
5. Customer menambahkan produk ke keranjang.
6. Customer login atau register.
7. Customer memilih alamat dan metode pengiriman.
8. Customer memilih metode pembayaran.
9. Customer membuat pesanan.
10. Sistem membuat nomor pesanan.
11. Customer melihat status di Pesanan Saya.
12. Customer dapat memantau update status hingga selesai.

## 12.2 Flow Admin Kelola Produk

1. Admin login melalui halaman admin.
2. Admin masuk dashboard.
3. Admin membuka menu Kelola Produk.
4. Admin menambah atau mengedit produk.
5. Admin mengatur varian warna dan ukuran.
6. Admin menyimpan perubahan.
7. Produk tampil di katalog customer jika status aktif.

## 12.3 Flow Admin Proses Pesanan

1. Admin login dashboard.
2. Admin membuka daftar pesanan.
3. Admin melihat detail pesanan customer.
4. Admin memverifikasi pembayaran.
5. Admin mengubah status menjadi Diproses.
6. Admin mengemas pesanan.
7. Admin memasukkan nomor resi.
8. Admin mengubah status menjadi Dikirim.
9. Customer melihat perubahan status di akun mereka.
10. Pesanan ditandai Selesai setelah diterima.

---

# 13. Kebutuhan Non-Fungsional

## 13.1 Performance

* Halaman home harus terasa ringan di mobile.
* Gambar produk harus dioptimasi.
* Katalog harus tetap responsif untuk minimal 100 produk.
* Interaksi filter produk harus cepat.

## 13.2 Security

* Password disimpan dalam bentuk hash.
* Session admin dan customer harus dipisah.
* Endpoint admin harus dilindungi autentikasi admin.
* Customer hanya bisa melihat pesanan miliknya sendiri.
* Validasi input dilakukan di frontend dan backend.
* Upload gambar harus membatasi tipe file dan ukuran.

## 13.3 Accessibility

* Kontras teks harus cukup meskipun memakai warna pastel.
* Semua tombol punya label jelas.
* Form punya label.
* Website dapat digunakan dengan keyboard.
* Gambar produk punya alt text.

## 13.4 Responsiveness

Breakpoint minimal:

* Mobile: 360px - 767px
* Tablet: 768px - 1023px
* Desktop: 1024px ke atas

Prioritas desain:

* mobile-first
* sticky cart summary di mobile
* filter katalog mudah dibuka/tutup
* dashboard admin tetap nyaman di tablet/laptop

---

# 14. Acceptance Criteria

## 14.1 Customer Login

* Customer dapat register dengan email unik.
* Customer dapat login dan logout.
* Customer yang belum login diarahkan ke login saat checkout.
* Customer tidak dapat mengakses dashboard admin.

## 14.2 Admin Login

* Admin dapat login dari halaman admin terpisah.
* Admin dapat logout.
* Admin tidak menggunakan session customer.
* Halaman dashboard admin tidak dapat dibuka tanpa login admin.

## 14.3 Katalog Produk

* Produk aktif tampil di katalog.
* Produk nonaktif tidak tampil ke customer.
* Customer dapat mencari produk berdasarkan nama.
* Customer dapat filter berdasarkan kategori, ukuran, warna, dan harga.
* Produk menampilkan stok atau status habis.

## 14.4 Keranjang dan Checkout

* Customer dapat menambahkan produk dengan varian ukuran dan warna.
* Sistem mencegah checkout jika stok tidak cukup.
* Total pembayaran dihitung dari subtotal, diskon, dan ongkir.
* Pesanan berhasil menghasilkan nomor pesanan unik.

## 14.5 Tracking dan Riwayat Pesanan

* Customer dapat melihat daftar pesanan miliknya.
* Customer dapat membuka detail pesanan.
* Customer dapat melihat timeline status pesanan.
* Perubahan status oleh admin tampil di sisi customer.
* Customer dapat melihat riwayat pesanan selesai.

## 14.6 Admin Kelola Barang

* Admin dapat menambah produk.
* Admin dapat mengedit produk.
* Admin dapat mengatur varian ukuran dan warna.
* Admin dapat mengatur stok per varian.
* Admin dapat menonaktifkan produk.

## 14.7 Admin Kelola Pesanan

* Admin dapat melihat semua pesanan customer.
* Admin dapat melihat detail pesanan.
* Admin dapat mengubah status pembayaran.
* Admin dapat mengubah status pesanan.
* Admin dapat memasukkan nomor resi.
* Admin dapat memberi catatan internal.

---

# 15. Prioritas MVP

## Phase 1 - MVP

* Home
* Katalog produk
* Detail produk
* Register dan login customer
* Login admin terpisah
* Keranjang
* Checkout
* Pesanan Saya
* Riwayat pesanan
* Dashboard admin
* Kelola produk
* Kelola pesanan
* Update status pesanan

## Phase 2 - Enhancement

* Wishlist
* Voucher
* Ulasan produk
* Lookbook
* Rekomendasi outfit
* Laporan penjualan
* Upload bukti pembayaran
* Cetak invoice

## Phase 3 - Advanced

* Integrasi payment gateway
* Integrasi ongkir otomatis
* Integrasi resi otomatis
* Notifikasi email / WhatsApp
* Loyalty point
* Product recommendation engine
* Retur dan tukar ukuran otomatis

---

# 16. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Stok tidak sinkron | Customer membeli produk habis | Stok dikunci saat checkout dan dikurangi setelah pembayaran valid |
| Warna pastel kurang kontras | Teks sulit dibaca | Gunakan warna netral gelap untuk teks utama |
| Admin salah update status | Customer bingung | Tambahkan timeline dan log aktivitas admin |
| Foto produk terlalu berat | Website lambat | Optimasi gambar dan lazy loading |
| Customer salah pilih ukuran | Retur meningkat | Sediakan size chart dan panduan ukuran yang jelas |

---

# 17. Success Metrics

Target 3-6 bulan setelah launch:

* conversion rate checkout minimal 3%
* cart abandonment turun 20%
* 70% customer dapat melacak pesanan tanpa chat admin
* repeat order minimal 15%
* waktu admin memproses pesanan turun 30%
* produk habis yang masih tampil turun hingga mendekati 0 kasus
* customer satisfaction minimal 4.5/5

---

# 18. Catatan Implementasi UI

Halaman customer harus mengutamakan visual produk dan nuansa brand. Gunakan foto fashion yang terang, background soft, dan CTA yang jelas. Hindari tampilan terlalu ramai. Warna pink pastel harus dominan, tetapi teks utama tetap menggunakan warna gelap agar mudah dibaca.

Dashboard admin harus lebih fungsional: tabel rapi, filter jelas, status badge, tombol aksi cepat, dan detail pesanan lengkap. Admin perlu bisa bekerja cepat tanpa banyak klik, terutama untuk mengubah status pesanan dan memasukkan resi.

---

# 19. Kesimpulan

Luma Wear membutuhkan toko online fashion yang bukan hanya cantik secara visual, tetapi juga kuat secara operasional. Dengan login customer dan admin yang terpisah, customer dapat berbelanja dan memantau pesanan secara mandiri, sementara admin dapat mengelola produk, stok, pembayaran, pengiriman, dan pesanan secara detail dalam satu dashboard.
