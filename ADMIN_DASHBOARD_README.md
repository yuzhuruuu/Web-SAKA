# Admin Dashboard - SMK Negeri 1 Kawunganten

## 🎉 Fitur yang Sudah Dibuat

### 1. **Halaman Login Admin**
- **URL**: `http://localhost:3000/admin`
- **Credentials**:
  - Username: `admin`
  - Password: `admin123`
- Fitur:
  - Form login dengan validasi
  - Autentikasi tersimpan di localStorage
  - Auto-redirect ke dashboard jika sudah login

### 2. **Dashboard Admin**
- **URL**: `http://localhost:3000/admin/dashboard`
- Fitur:
  - Statistik: Total Berita, Berita Bulan Ini, Total Views
  - List 5 berita terbaru
  - Protected route (harus login dulu)

### 3. **Kelola Berita**
- **URL**: `http://localhost:3000/admin/berita`
- Fitur:
  - ✅ **Tambah Berita Baru** dengan form modal
  - ✅ **Edit Berita** yang sudah ada
  - ✅ **Hapus Berita** dengan konfirmasi
  - Semua data tersimpan di **localStorage**
  - Responsive design

### 4. **Sidebar Navigation**
- Menu: Dashboard, Kelola Berita
- Tombol Logout
- Responsive (collapsible di mobile)
- Highlight menu aktif

### 5. **Data Management**
- ✅ Data berita tersimpan di **localStorage** (`berita_list`)
- ✅ Halaman utama website otomatis membaca dari localStorage
- ✅ Jika belum ada data di localStorage, pakai data default
- ✅ Perubahan di admin langsung terlihat di website utama

## 📂 Struktur File Baru

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.js          # Layout admin dengan auth check
│   │   ├── page.js             # Halaman login
│   │   ├── dashboard/
│   │   │   └── page.js         # Dashboard utama
│   │   └── berita/
│   │       └── page.js         # Kelola berita
│   ├── page.js                 # Updated: baca dari localStorage
│   ├── berita/
│   │   ├── page.js             # Updated: baca dari localStorage
│   │   └── [id]/
│   │       └── page.js         # Updated: baca dari localStorage
├── components/
│   └── AdminSidebar.js         # Sidebar component
├── utils/
│   └── localStorage.js         # Helper functions
└── data/
    └── berita.js               # Updated: tambah getBeritaList()
```

## 🚀 Cara Menggunakan

### 1. **Login ke Admin Panel**
1. Buka browser: `http://localhost:3000/admin`
2. Login dengan:
   - Username: `admin`
   - Password: `admin123`
3. Klik "Login"

### 2. **Kelola Berita**
1. Dari dashboard, klik menu "Kelola Berita" di sidebar
2. **Tambah Berita**:
   - Klik tombol "Tambah Berita"
   - Isi form (Judul, Tanggal, Gambar URL, Ringkasan, Isi)
   - Klik "Simpan"
3. **Edit Berita**:
   - Klik tombol "Edit" pada berita yang ingin diubah
   - Ubah data di form
   - Klik "Simpan"
4. **Hapus Berita**:
   - Klik tombol "Hapus" pada berita
   - Konfirmasi penghapusan

### 3. **Melihat Perubahan di Website**
1. Buka tab baru: `http://localhost:3000`
2. Perubahan data berita akan langsung terlihat
3. **PENTING**: Halaman utama TIDAK berubah sama sekali dalam desain/tampilan, hanya datanya yang berubah sesuai yang dikelola di admin

### 4. **Logout**
- Klik tombol "Logout" di sidebar
- Akan redirect ke halaman login

## 🔒 Keamanan

- ✅ Protected routes: Semua halaman admin memerlukan login
- ✅ Auto-redirect jika belum login
- ✅ Session tersimpan di localStorage
- ⚠️ **Catatan**: Ini adalah demo sederhana. Untuk production, gunakan:
  - Backend API untuk autentikasi
  - Token JWT
  - Database real
  - Hash password

## 💾 Data Storage

### localStorage Keys:
- `admin_auth`: Menyimpan status login
- `berita_list`: Menyimpan semua data berita

### Reset Data:
Untuk reset ke data default, buka Console browser (F12) dan jalankan:
```javascript
localStorage.removeItem('berita_list')
localStorage.removeItem('admin_auth')
location.reload()
```

## ✨ Fitur Khusus

1. **Real-time Update**: Perubahan di admin langsung terlihat di website tanpa reload manual
2. **Persistent Data**: Data tetap tersimpan meski browser ditutup (localStorage)
3. **Responsive Design**: Admin panel bekerja di desktop dan mobile
4. **User-friendly**: Modal form, konfirmasi hapus, loading states

## 🎯 Yang Sudah Dicapai Sesuai Requirement

✅ Page awal (home) TIDAK berubah sama sekali, hanya datanya yang dinamis  
✅ Dashboard admin di `/admin` dengan login required  
✅ Data tersimpan di localStorage  
✅ Sidebar navigation  
✅ CRUD lengkap untuk berita  

## 🛠️ Teknologi

- **Next.js 16** (App Router)
- **React 18** (Client Components)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)
- **localStorage** (Data persistence)

## 📱 Screenshots Flow

1. Login → Admin Dashboard → Kelola Berita → CRUD Operations
2. Perubahan data → Langsung terlihat di halaman utama website

---

**Selamat mencoba! 🎉**
