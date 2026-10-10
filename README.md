# Website SMKN 1 Kawunganten

Website resmi SMKN 1 Kawunganten yang dibangun dengan teknologi modern untuk memberikan informasi lengkap tentang sekolah, program pendidikan, dan kegiatan-kegiatan sekolah.

## Fitur Utama

- **Profil Sekolah** - Informasi umum, visi misi, dan sejarah sekolah
- **Program Pendidikan** - Detail konsentrasi keahlian dan program BKK
- **Kegiatan Sekolah** - Informasi tentang ekstrakurikuler dan kegiatan SAKA
- **Perpustakaan** - Akses informasi perpustakaan sekolah
- **PPDB** - Panduan penerimaan peserta didik baru
- **Berita** - Portal berita dan informasi terkini
- **Manajemen** - Informasi struktur organisasi dan tata usaha

## Tech Stack

- **Framework** - Next.js (React framework)
- **Styling** - Tailwind CSS
- **Build Tools** - PostCSS & Autoprefixer
- **Node.js** - JavaScript runtime

## Requirements

- Node.js v14 atau lebih tinggi
- npm atau yarn package manager

## Instalasi

1. Clone atau download project ini

```bash
cd SMKN1Kwt
```

2. Install dependencies

```bash
npm install
```

3. Jalankan development server

```bash
npm run dev
```

4. Buka browser dan akses http://localhost:3000

## Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build project untuk production
- `npm start` - Jalankan production server

## Struktur Project

```
SMKN1Kwt/
├── src/
│   ├── app/                          # Halaman Next.js App Router
│   │   ├── page.js                   # Halaman utama
│   │   ├── layout.js                 # Layout global
│   │   ├── bkk/                      # Halaman BKK
│   │   ├── ekstrakurikuler/          # Halaman ekstrakurikuler
│   │   ├── konsentrasi-keahlian/     # Program konsentrasi keahlian
│   │   ├── manajemen/                # Halaman manajemen
│   │   ├── perpustakaan/             # Halaman perpustakaan
│   │   ├── ppdb/                     # Halaman PPDB
│   │   └── saka-news/                # Halaman berita SAKA
│   ├── components/                   # React components reusable
│   │   ├── Navbar.js                 # Navigation bar
│   │   ├── Footer.js                 # Footer
│   │   ├── Hero.js                   # Hero section
│   │   ├── YouTubeHero.js            # Video hero section
│   │   ├── SchoolProfile.js          # Profil sekolah
│   │   ├── SchoolIntro.js            # Pengenalan sekolah
│   │   ├── SchoolHistory.js          # Sejarah sekolah
│   │   ├── SchoolInfo.js             # Info sekolah
│   │   ├── VisionMission.js          # Visi & misi
│   │   ├── QuickAccess.js            # Akses cepat
│   │   └── ...                       # Components lainnya
│   └── data/                         # Data statis
│       └── berita.js                 # Data berita
├── public/                           # Asset statis (gambar, dll)
├── package.json                      # Dependencies & scripts
├── tailwind.config.js                # Konfigurasi Tailwind CSS
├── postcss.config.js                 # Konfigurasi PostCSS
├── next.config.js                    # Konfigurasi Next.js
└── jsconfig.json                     # Konfigurasi JavaScript

```

## Pages & Routes

| Route | Deskripsi |
|-------|-----------|
| `/` | Halaman utama dengan profil dan berita sekolah |
| `/bkk` | Bursa Kerja Khusus (Job Fair) |
| `/ekstrakurikuler` | Program ekstrakurikuler sekolah |
| `/konsentrasi-keahlian` | Program konsentrasi keahlian |
| `/manajemen` | Struktur organisasi dan manajemen |
| `/perpustakaan` | Informasi perpustakaan sekolah |
| `/ppdb` | Penerimaan Peserta Didik Baru |
| `/saka-news` | Berita dan informasi SAKA |

## Kontribusi

Untuk mengembangkan atau memodifikasi website:

1. Buat branch baru untuk fitur/perbaikan Anda
2. Lakukan perubahan di direktori `src/`
3. Test di development server
4. Commit dengan pesan yang jelas

## Lisensi

Project ini adalah milik SMKN 1 Kawunganten.

---

**Website SMKN 1 Kawunganten** - Membangun generasi yang berkarakter dan berkompeten
