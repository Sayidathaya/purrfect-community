# 🐾 Purrfect Community
[# purrfect-community](https://sayidathaya.github.io/purrfect-community/)
### Website Komunitas Pecinta Kucing — Checkpoint 1

> Sebuah website komunitas pecinta kucing yang hangat, responsif, dan interaktif.  
> Dibuat untuk memenuhi tugas **Checkpoint 1** mata kuliah Pemrograman Web.

---

## 📋 Daftar Isi

- [Deskripsi Project](#-deskripsi-project)
- [Tema yang Dipilih](#-tema-yang-dipilih)
- [Struktur File](#-struktur-file)
- [Halaman Website](#-halaman-website)
- [Fitur & Ketentuan](#-fitur--ketentuan)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Cara Menjalankan](#-cara-menjalankan)
- [Fitur JavaScript](#-fitur-javascript)
- [Responsivitas](#-responsivitas)
- [Informasi Pembuat](#-informasi-pembuat)

---

## 📌 Deskripsi Project

**Purrfect Community** adalah website komunitas pecinta kucing yang berbasis di Samarinda, Kalimantan Timur. Website ini menjadi tempat berkumpul para *cat lover* untuk berbagi cerita, mendapatkan informasi perawatan kucing, menemukan teman sesama pencinta kucing, serta mengikuti berbagai event komunitas.

---

## 🎯 Tema yang Dipilih

> **Website Komunitas Hobi — Komunitas Pecinta Kucing**

Tema ini dipilih karena komunitas pecinta kucing adalah salah satu komunitas hobi yang aktif dan berkembang pesat, termasuk di wilayah Kalimantan Timur. Website ini dirancang agar terasa hangat, ramah, dan menyenangkan bagi semua kalangan.

---

## 📁 Struktur File

```
purrfect-community/
│
├── index.html              # Halaman Beranda
├── galeri.html             # Halaman Galeri Ras Kucing
├── komunitas.html          # Halaman Forum Komunitas
├── kontak.html             # Halaman Kontak & FAQ
├── tentang.html            # Halaman Tentang Kami
│
├── css/
│   └── style.css           # Stylesheet global (semua halaman)
│
└── js/
    └── main.js             # JavaScript global (semua halaman)
```

---

## 🌐 Halaman Website

| No | File | Halaman | Deskripsi |
|----|------|---------|-----------|
| 1 | `index.html` | 🏠 Beranda | Hero section, statistik komunitas, artikel populer, tips merawat kucing, CTA banner |
| 2 | `galeri.html` | 🐱 Galeri Kucing | Katalog 8 ras kucing dengan filter kategori (Lokal / Impor / Berbulu Panjang / Berbulu Pendek) |
| 3 | `komunitas.html` | 💬 Komunitas | Forum diskusi, daftar event, sidebar member aktif & topik populer |
| 4 | `kontak.html` | 📬 Kontak | Info kontak, sosial media, form pesan interaktif, FAQ accordion |
| 5 | `tentang.html` | ℹ️ Tentang Kami | Kisah komunitas, nilai-nilai, profil tim pengurus, timeline perjalanan |

---

## ✅ Fitur & Ketentuan

### Navbar & Navigasi
- ✅ Navbar memiliki **5 item link** (Beranda, Galeri Kucing, Komunitas, Kontak, Tentang Kami)
- ✅ Navbar **sticky** (tetap di atas saat di-scroll) menggunakan `position: sticky; top: 0`
- ✅ Navbar memiliki **blur effect** (`backdrop-filter: blur`) untuk kesan modern
- ✅ Item aktif otomatis ter-highlight sesuai halaman yang sedang dibuka

### Content Cards dengan Flexbox
- ✅ Layout kartu menggunakan **Flexbox** (`display: flex; flex-wrap: wrap`)
- ✅ Kartu diterapkan di semua halaman: artikel, ras kucing, tips, thread forum, event, tim, nilai

### Efek Hover dengan Transform & Transition
- ✅ Setiap kartu memiliki efek hover:
  ```css
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 40px rgba(61, 44, 44, .15);
  transition: transform .3s ease, box-shadow .3s ease;
  ```

### Responsif & Mobile Ready
- ✅ Lebar kartu **50%** pada layar di atas 700px (desktop)
- ✅ Lebar kartu **90%** pada layar di bawah 700px (mobile)
- ✅ Hamburger menu muncul di tampilan mobile
- ✅ Layout sidebar berubah menjadi kolom tunggal di mobile

---

## 🛠 Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|------------|
| **HTML5** | Struktur semantik halaman web |
| **CSS3** | Styling, Flexbox layout, animasi, media query |
| **JavaScript (Vanilla)** | Interaktivitas tanpa library tambahan |
| **Google Fonts** | Font `Playfair Display` (judul) & `Nunito` (teks) |
| **CSS Custom Properties** | Variabel warna global (`--orange`, `--cream`, dll.) |
| **IntersectionObserver API** | Scroll reveal animation |

> Tidak menggunakan framework CSS (Bootstrap, Tailwind) maupun library JavaScript (jQuery, React). Semua ditulis murni dari scratch.

---

## ▶️ Cara Menjalankan

### Metode 1 — Buka Langsung di Browser
1. Ekstrak file `purrfect-community.zip`
2. Buka folder hasil ekstrak
3. Double-click file `index.html`
4. Website akan terbuka di browser default

### Metode 2 — Menggunakan Live Server (VS Code)
1. Ekstrak file `purrfect-community.zip`
2. Buka folder di **Visual Studio Code**
3. Install ekstensi **Live Server** (jika belum)
4. Klik kanan `index.html` → **"Open with Live Server"**
5. Website akan terbuka di `http://127.0.0.1:5500`

> ⚠️ **Catatan:** Website memerlukan koneksi internet untuk memuat Google Fonts. Tanpa internet, font akan fallback ke `sans-serif`.

---

## ⚙️ Fitur JavaScript (`js/main.js`)

| Fitur | Deskripsi |
|-------|-----------|
| **Hamburger Menu** | Toggle menu di mobile + animasi tiga baris menjadi ✕ |
| **Auto Active Nav** | Deteksi halaman aktif secara otomatis berdasarkan URL |
| **Scroll Reveal** | Kartu muncul dengan animasi fade-up saat masuk viewport |
| **Counter Animasi** | Angka statistik di Beranda "menghitung" dari 0 saat terlihat |
| **Filter Galeri** | Tombol filter menyembunyikan/menampilkan ras kucing sesuai kategori |
| **FAQ Accordion** | Buka/tutup jawaban FAQ dengan animasi smooth |
| **Form Validation** | Validasi email, cek field kosong, animasi *shake* jika gagal |
| **Sticky Nav Shadow** | Bayangan navbar muncul saat halaman mulai di-scroll |

---

## 📱 Responsivitas

| Lebar Layar | Tampilan Kartu | Keterangan |
|-------------|---------------|------------|
| **> 700px** | `width: calc(50% - 12px)` | Layout 2 kolom (Desktop) |
| **≤ 700px** | `width: 90%` | Layout 1 kolom penuh (Mobile) |

Breakpoint utama menggunakan:
```css
@media (max-width: 700px) {
  .card { width: 90%; margin: 0 auto; }
}
```

---

## 🎨 Palet Warna

| Nama | Hex | Kegunaan |
|------|-----|----------|
| Cream | `#FFF8F0` | Background utama |
| Orange | `#E07B54` | Warna aksen utama, CTA, badge |
| Rose | `#D4A5A5` | Border navbar, dekorasi |
| Sage | `#7FAD7C` | Aksen sekunder, badge lokal |
| Dark | `#3D2C2C` | Teks utama, footer |
| Mid | `#7A5C5C` | Teks deskripsi |

---

## 👤 Informasi Pembuat

| | |
|--|--|
| **Nama** | *(Nama Mahasiswa)* |
| **NIM** | *(NIM Mahasiswa)* |
| **Kelas** | *(Kelas)* |
| **Mata Kuliah** | Pemrograman Web |
| **Tema** | Website Komunitas Hobi — Komunitas Pecinta Kucing |
| **Lokasi** | Samarinda, Kalimantan Timur |

---

<div align="center">

Dibuat dengan ❤️ untuk para **cat lover** di Kalimantan Timur

🐾 *"Every cat deserves a loving home"* 🐾

</div>
