export default function Perpustakaan() {
  const stats = [
    { label: 'Total Koleksi Buku Cetak', value: '4.000+' },
    { label: 'Jumlah E-book', value: '1.000+' },
    { label: 'Anggota Aktif', value: '1.200+' }
  ]

  const books = [
    {
      title: 'Teknik Otomotif Modern',
      author: 'Tim Ahli Industri',
      rating: 4.8,
      category: 'Teknik',
      image: '/buku/otomotif.png'
    },
    {
      title: 'Panduan Desain Grafis Profesional',
      author: 'Studio Kreatif',
      rating: 4.9,
      category: 'Desain',
      image: '/buku/desain.png'
    },
    {
      title: 'Dasar Pemrograman Web',
      author: 'Developer Indonesia',
      rating: 4.7,
      category: 'IT',
      image: '/buku/pemrograman.png'
    },
    {
      title: 'Seni Animasi 3D',
      author: 'Studio Animasi',
      rating: 4.6,
      category: 'Animasi',
      image: '/buku/animasi.png'
    },
    {
      title: 'Kepemimpinan dan Organisasi',
      author: 'Ahli Manajemen',
      rating: 4.5,
      category: 'Umum',
      image: '/buku/kepemimpinan.png'
    },
    {
      title: 'Mengasah Keterampilan Abad 21',
      author: 'Pendidik Profesional',
      rating: 4.7,
      category: 'Pengembangan Diri',
      image: '/buku/keterampilan.png'
    }
  ]

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="bg-white p-12 rounded-lg shadow-md mb-12 border border-gray-100 text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Perpustakaan & Pusat Literasi Digital</h1>
        <p className="text-xl text-gray-600 mb-2">SMK NEGERI 1 KAWUNGANTEN (SMK SAKA)</p>
        <p className="italic text-lg text-gray-500">"Jendela Dunia, Jantung Literasi, dan Inspirasi Masa Depan"</p>
      </div>

      <p className="text-gray-700 mb-12 leading-relaxed text-lg text-center">
        Selamat datang di Portal Resmi Perpustakaan SMK Negeri 1 Kawunganten. Kami berkomitmen untuk menjadi pusat layanan informasi, dokumentasi, dan sumber belajar tepercaya yang mendukung kegiatan belajar mengajar berbasis Kurikulum Merdeka.
      </p>

      {/* Statistik */}
      <section className="mb-12">
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profil */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Profil Perpustakaan</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-6 border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            Perpustakaan SMK Negeri 1 Kawunganten berfungsi sebagai fasilitas penunjang utama akademik sekolah. Kami tidak hanya mengelola koleksi buku cetak (buku teks pelajaran, fiksi, dan non-fiksi), tetapi juga menyediakan akses komputer pemustaka dan layanan e-library untuk memfasilitasi riset mandiri serta pengerjaan proyek siswa (P5).
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Jam Operasional</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Senin – Kamis:</strong> 07.00 – 15.30 WIB</li>
              <li><strong>Jumat:</strong> 07.00 – 14.00 WIB</li>
              <li><strong>Sabtu, Minggu & Hari Libur Nasional:</strong> Tutup</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Akses E-Library</h3>
            <p className="text-gray-700 mb-4">Perpustakaan digital dapat diakses melalui aplikasi khusus yang telah disediakan sekolah.</p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition font-medium">
              Download Aplikasi
            </button>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Visi & Misi Perpustakaan</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Visi</h3>
            <p className="italic text-gray-700">
              "Terwujudnya perpustakaan sekolah yang unggul berbasis teknologi informasi, sebagai pusat sumber belajar utama untuk mencetak generasi yang cerdas, berkarakter, kreatif, dan gemar membaca."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Misi</h3>
            <ol className="space-y-2 text-gray-700 text-sm">
              <li><strong>1. Aksesibilitas Modern:</strong> Menyediakan ragam koleksi bahan pustaka yang relevan dan berbasis digital</li>
              <li><strong>2. Pelayanan Prima:</strong> Menyelenggarakan sistem pelayanan sirkulasi yang ramah dan cepat</li>
              <li><strong>3. Budaya Literasi:</strong> Menggalakkan gerakan literasi sekolah untuk menumbuhkan minat membaca</li>
              <li><strong>4. Kenyamanan Pemustaka:</strong> Mewujudkan lingkungan ruang perpustakaan yang nyaman dan kondusif</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Inovasi Digital */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Inovasi Perpustakaan Digital (E-Library)</h2>
        
        <div className="bg-blue-50 border border-blue-200 text-gray-800 p-8 rounded-lg shadow-md mb-6">
          <p className="text-lg mb-6">
            Menjawab tantangan era transformasi digital, kini membaca buku di SMK Negeri 1 Kawunganten bisa dilakukan kapan saja dan di mana saja melalui Aplikasi Perpustakaan Digital.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-gray-800 mb-2">Ribuan Koleksi</p>
              <p className="text-sm text-gray-600">Ratusan judul e-book, modul, majalah digital dalam genggaman</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-gray-800 mb-2">Akun Resmi Siswa</p>
              <p className="text-sm text-gray-600">Login khusus untuk melacak riwayat peminjaman buku elektronik</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-gray-800 mb-2">Multiplatform</p>
              <p className="text-sm text-gray-600">Aplikasi Android maupun Desktop PC/Laptop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buku Rekomendasi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Buku Rekomendasi Terbaru</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{book.category}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fasilitas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Fasilitas & Area Ruang Fisik</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Ruang Koleksi Utama</h3>
            <p className="text-gray-700">Rak buku terstruktur rapi yang dikelompokkan berdasarkan nomor klasifikasi standar nasional.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Area Baca Lesehan & Sofa</h3>
            <p className="text-gray-700">Area santai yang dirancang nyaman agar siswa dapat membaca dengan fokus dan rileks.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Pojok Komputer & Internet</h3>
            <p className="text-gray-700">Fasilitas komputer terhubung jaringan untuk mencari letak buku cetak secara cepat lewat katalog digital.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Sudut Karya Siswa</h3>
            <p className="text-gray-700">Ruang pameran mini yang mendisplay buku, kliping, poster, atau karya tulis ilmiah terbaik siswa.</p>
          </div>
        </div>
      </section>

      {/* Tata Tertib */}
      <section className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tata Tertib & Alur Peminjaman Buku</h2>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Syarat Menjadi Anggota</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Seluruh siswa, guru, dan staf tata usaha secara otomatis terdaftar sebagai anggota</li>
              <li>✓ Wajib membawa Kartu Pelajar atau Kartu Anggota saat melakukan transaksi</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Aturan Peminjaman Buku Cetak</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Maksimal Peminjaman:</strong> 2 buku dalam sekali pinjam</li>
              <li><strong>Durasi Peminjaman:</strong> Maksimal 7 hari kalender</li>
              <li><strong>Perpanjangan:</strong> Dapat diperpanjang 1 kali (7 hari) jika tidak dipesan</li>
              <li><strong>Sanksi Keterlambatan:</strong> Denda administratif sesuai aturan sekolah</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
