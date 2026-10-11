# 🎓 Website SMKN 1 Kawunganten

Website resmi **SMK Negeri 1 Kawunganten** yang dibangun dengan teknologi modern untuk memberikan informasi lengkap tentang sekolah, program pendidikan, berita, dan kegiatan-kegiatan sekolah kepada siswa, orang tua, dan masyarakat umum.

![Next.js](https://img.shields.io/badge/Next.js-Latest-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-Latest-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC?style=flat-square&logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=flat-square&logo=node.js)

---

## ✨ Fitur Utama

### 📚 Informasi Sekolah
- **Profil Sekolah** - Informasi umum, visi misi, dan sejarah sekolah
- **Sambutan Kepala Sekolah** - Sambutan dan pesan dari kepala sekolah
- **Struktur Organisasi** - Informasi tentang manajemen dan struktur organisasi

### 🎯 Program Pendidikan
- **Konsentrasi Keahlian** - Detail program keahlian yang ditawarkan
- **Bursa Kerja Khusus (BKK)** - Informasi tentang lowongan kerja dan kesempatan karir
- **PPDB** - Panduan lengkap penerimaan peserta didik baru

### 🎨 Kegiatan & Layanan
- **Ekstrakurikuler** - Program ekstrakurikuler dan SAKA
- **Perpustakaan** - Informasi dan akses layanan perpustakaan
- **Berita & Artikel** - Portal berita dan informasi terkini sekolah
- **Quick Access** - Akses cepat ke informasi penting

### 🎬 Multimedia
- **Video Hero Section** - Konten video interaktif di halaman utama
- **Gallery Gambar** - Galeri foto kegiatan sekolah
- **Animasi Scroll** - Efek animasi yang menarik saat scrolling

---

## 🛠 Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| **Next.js** | Latest | Framework React untuk production |
| **React** | Latest | Library UI dan komponen |
| **Tailwind CSS** | 3.3.0 | Utility-first CSS framework |
| **PostCSS** | 8.4.31 | CSS transformations |
| **Autoprefixer** | 10.4.16 | Vendor prefixes otomatis |
| **Node.js** | 14+ | JavaScript runtime |

---

## 📋 Requirement

- **Node.js** v14 atau lebih tinggi
- **npm** v6+ atau **yarn** v1.22+
- **Git** (untuk version control)
- Browser modern (Chrome, Firefox, Safari, Edge)

---

## 🚀 Instalasi & Setup

### 1. Clone atau Download Project

```bash
# Menggunakan Git
git clone <repository-url>
cd SMKN1Kwt

# Atau extract jika download sebagai ZIP
cd SMKN1Kwt
```

### 2. Install Dependencies

```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

### 3. Jalankan Development Server

```bash
# Menggunakan npm
npm run dev

# Atau menggunakan yarn
yarn dev
```

Server akan berjalan di: **http://localhost:3000**

### 4. Build untuk Production

```bash
# Build project
npm run build

# Jalankan production server
npm start
```

---

## 📜 Available Scripts

| Perintah | Kegunaan |
|----------|----------|
| `npm run dev` | Jalankan development server dengan hot reload |
| `npm run build` | Build project untuk production |
| `npm start` | Jalankan production server |

---

## 📁 Struktur Project

```
SMKN1Kwt/
├── src/
│   ├── app/                              # Halaman & routing (Next.js App Router)
│   │   ├── page.js                       # Halaman utama (/)
│   │   ├── layout.js                     # Layout global aplikasi
│   │   ├── about/
│   │   │   └── page.js                   # Halaman tentang sekolah
│   │   ├── berita/
│   │   │   ├── page.js                   # Daftar berita
│   │   │   └── [id]/
│   │   │       └── page.js               # Detail berita individual
│   │   ├── bkk/
│   │   │   └── page.js                   # Bursa Kerja Khusus
│   │   ├── ekstrakurikuler/
│   │   │   └── page.js                   # Program ekstrakurikuler
│   │   ├── konsentrasi-keahlian/
│   │   │   └── page.js                   # Konsentrasi keahlian & jurusan
│   │   ├── manajemen/
│   │   │   └── page.js                   # Struktur organisasi
│   │   ├── perpustakaan/
│   │   │   └── page.js                   # Informasi perpustakaan
│   │   ├── ppdb/
│   │   │   └── page.js                   # Penerimaan Peserta Didik Baru
│   │   └── sambutan-kepala-sekolah/
│   │       └── page.js                   # Sambutan kepala sekolah
│   │
│   ├── components/                       # Komponen React reusable
│   │   ├── Navbar.js                     # Navigation bar
│   │   ├── Footer.js                     # Footer
│   │   ├── Hero.js                       # Hero section
│   │   ├── YouTubeHero.js                # Video hero section
│   │   ├── PageHeader.js                 # Header halaman dengan breadcrumb
│   │   ├── ScrollReveal.js               # Animasi scroll reveal
│   │   ├── QuickAccess.js                # Menu akses cepat
│   │   ├── BeritaCard.js                 # Card komponen untuk berita
│   │   ├── SchoolProfile.js              # Profil sekolah
│   │   ├── SchoolIntro.js                # Pengenalan sekolah
│   │   ├── SchoolHistory.js              # Sejarah sekolah
│   │   ├── SchoolInfo.js                 # Info umum sekolah
│   │   ├── VisionMission.js              # Visi & misi
│   │   ├── SambutanKepalaSekolah.js      # Sambutan kepala sekolah
│   │   └── ...                           # Komponen lainnya
│   │
│   └── data/                             # Data statis & konfigurasi
│       └── berita.js                     # Data berita
│
├── public/                               # Asset statis
│   ├── images/                           # Gambar sekolah
│   ├── kepalasekolah.png                 # Foto kepala sekolah
│   └── ...                               # Asset lainnya
│
├── .gitignore                            # File yang diabaikan Git
├── jsconfig.json                         # Konfigurasi path alias JavaScript
├── next.config.js                        # Konfigurasi Next.js
├── package.json                          # Dependencies & scripts
├── package-lock.json                     # Lock file dependencies
├── postcss.config.js                     # Konfigurasi PostCSS
├── tailwind.config.js                    # Konfigurasi Tailwind CSS
└── README.md                             # File dokumentasi
```

---

## 🗺 Pages & Routes

| Route | Deskripsi | Status |
|-------|-----------|--------|
| `/` | Halaman utama dengan hero & berita terbaru | ✅ |
| `/about` | Tentang sekolah - profil & sejarah | ✅ |
| `/sambutan-kepala-sekolah` | Sambutan dari kepala sekolah | ✅ |
| `/berita` | Daftar berita dan artikel | ✅ |
| `/berita/[id]` | Detail halaman berita individual | ✅ |
| `/bkk` | Bursa Kerja Khusus (Job Fair) | ✅ |
| `/ekstrakurikuler` | Program ekstrakurikuler dan SAKA | ✅ |
| `/konsentrasi-keahlian` | Program konsentrasi keahlian | ✅ |
| `/manajemen` | Struktur organisasi & manajemen | ✅ |
| `/perpustakaan` | Informasi perpustakaan | ✅ |
| `/ppdb` | Penerimaan Peserta Didik Baru | ✅ |

---

## 🎨 Komponen Utama

### PageHeader
Header halaman dengan judul, subtitle, dan breadcrumb navigation.

```javascript
<PageHeader 
  title="Halaman Judul"
  subtitle="Subtitle halaman"
  breadcrumb={[
    { label: 'Beranda', href: '/' },
    { label: 'Halaman Saat Ini', href: null }
  ]}
/>
```

### ScrollReveal
Komponen untuk animasi reveal saat scrolling.

```javascript
<ScrollReveal animation="fade-in-up" delay={200}>
  <p>Konten yang akan di-animate</p>
</ScrollReveal>
```

### QuickAccess
Menu akses cepat ke berbagai halaman penting.

```javascript
<QuickAccess />
```

### BeritaCard
Card komponen untuk menampilkan artikel/berita.

```javascript
<BeritaCard 
  title="Judul Berita"
  excerpt="Kutipan berita..."
  image="/path/to/image.jpg"
  link="/berita/1"
/>
```

---

## 🎨 Palet Warna & Styling

Menggunakan Tailwind CSS dengan custom color palette:

```javascript
colors: {
  primary: '#1769aa',           // Biru utama
  'primary-dark': '#0b3b5a',    // Biru gelap
  accent: '#ffcc00',             // Kuning aksen
}
```

---

## 📱 Responsive Design

Website dirancang dengan mobile-first approach:
- **Mobile** - Fully responsive di semua ukuran
- **Tablet** - Layout optimal untuk tablet
- **Desktop** - Layout lengkap dengan sidebar dan grid

---

## 🔄 Fitur Animasi

Custom animations yang tersedia:

| Animasi | Efek |
|---------|------|
| `fade-in` | Fade in effect |
| `slide-up` | Slide dari bawah |
| `slide-down` | Slide dari atas |
| `slide-left` | Slide dari kanan |
| `slide-right` | Slide dari kiri |
| `scale-in` | Scale in effect |
| `bounce-soft` | Bounce lembut |

---

## 🚦 Development Workflow

### 1. Buat Branch Baru
```bash
git checkout -b feature/nama-fitur
```

### 2. Buat/Edit Komponen
```javascript
// src/components/NamaKomponen.js
export default function NamaKomponen() {
  return <div>Konten Komponen</div>
}
```

### 3. Buat Halaman Baru
```javascript
// src/app/nama-halaman/page.js
'use client'
import PageHeader from '@/components/PageHeader'

export default function NamaHalaman() {
  return (
    <div>
      <PageHeader title="Judul Halaman" />
      {/* Konten halaman */}
    </div>
  )
}
```

### 4. Test di Development Server
```bash
npm run dev
# Akses http://localhost:3000
```

### 5. Commit Perubahan
```bash
git add .
git commit -m "feat: deskripsi fitur baru"
```

### 6. Push ke Repository
```bash
git push origin feature/nama-fitur
```

---

## 🐛 Troubleshooting

### Port 3000 Sudah Digunakan
```bash
# Jalankan di port berbeda
npm run dev -- -p 3001
```

### Clear Cache & Rebuild
```bash
# Hapus .next folder
rm -rf .next

# Rebuild
npm run build
npm start
```

### Dependencies Error
```bash
# Clear cache npm
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Tidak Bekerja
- Restart development server
- Clear browser cache
- Refresh halaman

---

## 📦 Deployment

### Vercel (Rekomendasi untuk Next.js)
1. Push ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Self-Hosted
```bash
# Build
npm run build

# Start production server
npm start
```

---

## 👥 Tim Pengembang

Dikembangkan oleh siswa dan guru SMK Negeri 1 Kawunganten sebagai project praktik Web Programming.

---

## 📞 Kontak & Support

- **Email**: info@smkn1kawunganten.sch.id
- **Telepon**: (0265) XXXX-XXXX
- **Website**: www.smkn1kawunganten.sch.id
- **Alamat**: Jl. Sekolah No. 1, Kawunganten, Cilacap, Jawa Tengah

---

## 📄 Lisensi

Project ini adalah milik **SMK Negeri 1 Kawunganten**. Dilarang menyebarluaskan atau menggunakan tanpa izin dari sekolah.

---

## 🙏 Terima Kasih

Terima kasih kepada:
- Tim pengembang dan desainer
- Kepala Sekolah dan guru pembimbing
- Siswa yang terlibat dalam development
- Next.js dan Tailwind CSS community

---

**Last Updated**: October 2026

**Website SMKN 1 Kawunganten** - Membangun Generasi yang Berkarakter dan Berkompeten 🎓✨
