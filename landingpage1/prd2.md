# Product Requirements Document (PRD)

## 1. Ringkasan Eksekutif

Nama produk: Website Resmi Dimsum Narawi

Tujuan: Membangun website yang profesional, mudah digunakan, dan memikat pelanggan untuk Dimsum Narawi. Website harus menampilkan identitas brand, menginspirasi keinginan beli, dan memudahkan pengunjung memesan melalui WhatsApp atau pilihan kontak lainnya.

Positioning: Website Dimsum Narawi akan diposisikan sebagai gerai dimsum lokal premium yang merangkul cita rasa tradisional dan pelayanan modern, dengan desain visual hangat dan navigasi cepat.

Target utama: Pelanggan lokal yang mencari dimsum berkualitas untuk makan di tempat, takeaway, dan katering kecil, termasuk pekerja kantoran, keluarga, dan generasi muda.

Kriteria keberhasilan:
- Traffic organik meningkat pada minggu pertama peluncuran.
- Pengunjung menemukan menu dalam waktu < 15 detik.
- Click-through rate pada CTA WhatsApp / pesan minimal 18%.
- Konsistensi brand terlihat pada semua halaman.

## 2. Tujuan Bisnis

- Menjadikan Dimsum Narawi pilihan top-of-mind untuk dimsum lokal di kawasan target.
- Mengonversi pengunjung web menjadi pemesan WhatsApp atau formulir kontak.
- Menurunkan jumlah pertanyaan berulang dengan konten menu dan FAQ yang jelas.
- Menunjukkan keunggulan operasional: kualitas bahan, kecepatan layanan, paket hemat, dan layanan antar.
- Mendukung kampanye offline dengan tampilan digital yang menarik dan mudah dibagikan.

## 3. Sasaran Pengguna

### Persona

1. **Rina, 28 tahun, pekerja kantoran**
   - Tujuan: Pesan makan siang cepat, sehat, dan lezat.
   - Preferensi: Browsing di smartphone, melihat harga & paket, cari menu hemat.
   - Harapan: CTA jelas, informasi takeaway, dan tombol WhatsApp siap pakai.

2. **Pak Budi, 45 tahun, kepala keluarga**
   - Tujuan: Cari tempat keluarga yang bersih, menu lengkap, dan layanan antar.
   - Preferensi: Desktop atau WhatsApp, butuh jam buka dan alamat jelas.
   - Harapan: Info lokasi mudah, testimoni keluarga, serta pilihan paket keluarga.

3. **Ayu, 22 tahun, mahasiswa**
   - Tujuan: Temukan menu baru, harga terjangkau, dan konten visual menarik.
   - Preferensi: Instagramable, foto makanan, caption singkat, dan paket promo.
   - Harapan: Gallery makanan, label promo, dan CTA sosial media.

### User Stories

- Sebagai pengguna ponsel, saya ingin melihat menu populer dan tombol "Pesan Sekarang" sehingga saya bisa memesan dengan cepat.
- Sebagai orang tua, saya ingin mengetahui jam buka dan lokasi sehingga saya bisa merencanakan kunjungan bersama keluarga.
- Sebagai pencari promo, saya ingin tahu paket hemat dan diskon agar saya bisa memesan lebih hemat.
- Sebagai pelanggan baru, saya ingin membaca testimoni sehingga saya merasa yakin memesan.

### Kebutuhan Pengguna

- Akses cepat ke menu, harga, dan informasi paket.
- CTA pemesanan WhatsApp dengan teks pesan otomatis.
- Foto makanan menggoda dan tampilan menu profesional.
- Informasi lokasi, jam buka, dan cara pesan yang jelas.
- Promo, paket keluarga, dan testimoni yang meningkatkan kepercayaan.

## 4. Ruang Lingkup Produk

### Termasuk

- Beranda dengan hero, value proposition, dan CTA tinggi.
- Halaman menu terstruktur dengan kategori dan filter.
- Halaman promo & paket dengan penawaran khusus yang jelas.
- Halaman Tentang Kami dengan cerita brand, visi, dan nilai.
- Halaman Lokasi & Kontak dengan Google Maps embed dan tombol "Buka di Google Maps".
- Halaman FAQ, testimoni, dan social proof.
- Form kontak / pemesanan sederhana dengan validasi input.
- Integrasi CTA WhatsApp, Google Maps, dan social media.
- Mobile-first responsive design dan animasi ringan untuk memperkuat pengalaman.
- Sistem konten yang mudah diperbarui untuk menu, promo, dan testimoni.

### Tidak Termasuk

- Payment gateway dan keranjang belanja kompleks.
- Integrasi ERP atau POS internal.
- Portal admin tingkat lanjut kecuali CMS ringan untuk update manual.
- Loyalty program kompleks atau login pelanggan.

## 5. Asumsi

- Konten visual (foto, logo) tersedia dari tim Dimsum Narawi.
- Menu, harga, dan promo akan di-update secara manual saat diperlukan.
- Website akan di-hosting di platform statis atau CMS ringan.
- WhatsApp akan menjadi kanal pemesanan utama di fase awal.
- Google Maps dan social media sudah dimiliki/siap digunakan.

## 6. Fitur Utama dan Kebutuhan Fungsional

### 6.1 Beranda

Kebutuhan:
- Hero section dengan headline: "Dimsum Segar, Rasa Otentik, Pesan Sekarang".
- Subheadline pendek yang menekankan bahan segar, handmade, dan layanan cepat.
- Dua CTA utama: "Pesan via WhatsApp" dan "Lihat Menu".
- Quick highlight: "Best Seller", "Paket Keluarga", "Antar Cepat".
- Section visual menu populer dengan gambar dan label "Best Seller" / "Baru".
- Section keunggulan: bahan lokal, proses handmade, layanan pesan cepat.
- Banner promo aktif dengan countdown atau teks diskon.
- Section testimonial singkat untuk social proof.

### 6.2 Halaman Menu

Kebutuhan:
- Kategori: Dimsum, Kuah & Lauk, Snack, Minuman, Paket.
- Setiap item memiliki nama, deskripsi singkat, harga, dan foto mini.
- Label: Best Seller, Favorit Keluarga, Promo Spesial.
- Tombol "Pesan Sekarang" di setiap item yang membuka WhatsApp dengan pesan otomatis.
- Filter kategori dan anchor navigation untuk akses cepat.
- Section "Menu Rekomendasi" dan "Paket Terlaris".

### 6.3 Halaman Promo & Paket

Kebutuhan:
- Daftar paket hemat, paket keluarga, dan paket meeting.
- Detail isi paket, harga, jumlah porsi, dan syarat minimal pembelian.
- Tema visual untuk promo: harga jelas, manfaat menonjol.
- CTA tombol "Pesan Paket" yang terhubung ke WhatsApp dengan teks pesanan.
- Highlight promo harian / mingguan.
- Notifikasi singkat: "Promo hanya untuk take away" atau "Gratis antar minimal...".

### 6.4 Halaman Lokasi & Kontak

Kebutuhan:
- Alamat lengkap dan rute singkat.
- Jam operasional harian dengan label status "Buka Sekarang" jika relevan.
- Google Maps embed atau peta statis plus tombol "Buka di Google Maps".
- Nomor WhatsApp dan telepon yang klik-to-call.
- Form kontak sederhana: nama, nomor WA, email optional, pesan singkat.
- CTA kedua: berkirim pesan mengenai katering atau event.

### 6.5 Halaman Tentang Kami

Kebutuhan:
- Cerita brand Dimsum Narawi: asal usul, komitmen kualitas, dan misi.
- Nilai perusahaan: bahan segar, handmade, rasa otentik, pelayanan ramah.
- Foto gerai, tim, dan proses pembuatan.
- Visual timeline singkat: "Dari dapur lokal ke rasa favorit kota".
- CTA sekunder: "Kenali menu kami" atau "Pesan sekarang".

### 6.6 Halaman FAQ

Kebutuhan:
- Pertanyaan umum dengan jawaban ringkas dan langsung.
- Topik FAQ: cara pesan, jam buka, metode pembayaran, layanan antar, catering.
- Section CTA akhir: "Masih ragu? Hubungi kami via WhatsApp".

### 6.7 Testimonial atau Review

Kebutuhan:
- 3-5 testimoni pelanggan dengan nama, rating bintang, dan komentar singkat.
- Layout yang menonjolkan review terbaik dan pengalaman pelanggan.
- Pilihan user generated content jika tersedia (foto pelanggan / review Instagram).
- CTAs di akhir testimonial: "Pesan sekarang".

### 6.8 Footer

Kebutuhan:
- Informasi kontak singkat dan jam buka.
- Link cepat: Beranda, Menu, Promo, Tentang Kami, Lokasi.
- Social media icons: Instagram, TikTok, WhatsApp.
- Catatan copyright dan disclaimer singkat.

## 7. Kebutuhan Non-Fungsional

- Performance: waktu muat halaman < 3 detik pada mobile 4G.
- Mobile-first: UI optimal untuk layar kecil dan mudah di-scroll.
- Aksesibilitas: kontras warna memenuhi WCAG AA, ukuran teks & tombol bisa di-tap.
- Keandalan: uptime hosting > 99%.
- SEO: meta title, meta description, heading terstruktur, alt text gambar, URL ramah.
- Keamanan: form validasi, proteksi bot sederhana (honeypot), dan sanitasi input.
- Monitoring: integrasi Google Analytics / Matomo dan event klik WhatsApp.
- Maintainability: struktur halaman mudah diperbarui tanpa pengembang besar.

## 8. Desain UX/UI

Prinsip desain:
- Bersih, hangat, dan premium.
- Fokus pada foto makanan dan elemen visual yang mengundang selera.
- Navigasi sederhana dengan akses cepat ke menu dan pemesanan.
- CTA berwarna kontras untuk memaksimalkan klik.
- Visual storytelling: foto makanan, brand story, dan testimoni diatur secara logis.

Arah gaya:
- Warna utama: merah marun / bata, krem, putih gading, aksen emas/cokelat.
- Tipografi: judul tegas dan body copy mudah dibaca.
- Elemen grafis: garis tipis, card menu, ikon makanan ringan.
- Animasi ringan: fade-in gambar, micro-interaction pada tombol.
- Layout: hero, keunggulan, menu populer, promo, testimonial, dan CTA bottom.

## 9. Konten yang Dibutuhkan

- Logo dan varian warna.
- Foto kualitas tinggi: dimsum, paket, interior, dan suasana gerai.
- Deskripsi menu dengan bahan utama dan keunggulan.
- Harga terkini untuk semua item dan paket.
- Alamat lengkap dan koordinat peta.
- Nomor WhatsApp aktif dan teks pesan default.
- Jam operasional.
- Testimoni pelanggan.
- Nilai brand, misi, dan cerita singkat usaha.
- Copy headline dan microcopy CTA.

## 10. Arsitektur Informasi

1. Beranda
2. Menu
3. Promo & Paket
4. Tentang Kami
5. Lokasi & Kontak
6. FAQ
7. Testimoni

Footer:
- Link cepat ke halaman utama.
- Kontak, jam buka, social media.

## 11. Kriteria Penerimaan

- Semua halaman tersedia dan dapat diakses dari navigasi utama.
- Menu ditampilkan lengkap dengan foto, harga, dan label.
- CTA WhatsApp berfungsi dengan pesan otomatis dan kontak langsung.
- Google Maps membuka lokasi dengan benar.
- Form kontak mengirim pesan dan memvalidasi input.
- Halaman responsif dan tampil baik di mobile.
- Brand tone konsisten di seluruh halaman.
- Promo dan testimoni terlihat jelas dan terstruktur.

## 12. Metode Pengukuran Keberhasilan

- Visitor per hari/minggu.
- Klik CTA WhatsApp / pesan.
- Durasi sesi rata-rata > 1 menit.
- Bounce rate < 60%.
- Rasio klik menu ke pesan > 10%.
- Feedback pelanggan positif mengenai kemudahan pesan.
- Peningkatan permintaan catering atau paket keluarga.

## 13. Batasan dan Risiko

- Konten tidak lengkap atau foto belum siap pada peluncuran.
- Pembaruan harga masih manual tanpa sistem backend dinamis.
- Ketergantungan pada WhatsApp sebagai jalur pemesanan utama.
- Hosting lambat mengurangi pengalaman mobile.
- Ketergantungan pada pihak ketiga (Google Maps, social media) untuk peta dan tautan.

## 14. Rencana Peluncuran dan Milestone

1. Kumpulkan konten dan aset visual.
2. Finalisasi struktur halaman dan wireframe.
3. Bangun website dan integrasi WhatsApp/Maps.
4. Uji responsivitas, performa, dan form.
5. Review konten, gambar, dan copy dengan tim.
6. Launch website dan pantau analytics.
7. Review hasil setelah 2 minggu dan optimasi.

## 15. Rekomendasi Tambahan

- Gunakan WhatsApp API atau button yang mudah diklik untuk mengurangi friction.
- Siapkan akun Google Business Profile untuk visibilitas lokasi.
- Tampilkan paket hemat dan best seller di homepage.
- Tambahkan opsi testimonial bergambar jika memungkinkan.
- Rencanakan update rutin untuk promo dan menu baru.
