export default function Manajemen() {
  const manajemen = [
    {
      id: 'kepala-tu',
      role: 'Kepala Kantor Tata Usaha (TU)',
      name: 'Agung Mujahidin Rois',
      tasks: [
        'Mengelola administrasi kepegawaian (pendidik dan tenaga kependidikan).',
        'Menyusun program kerja tata usaha sekolah dan mengelola sistem kearsipan serta persuratan resmi sekolah.',
        'Mengoordinasikan pelayanan administrasi kesiswaan, mulai dari pendaftaran (PPDB) hingga urusan alumni.',
        'Menyusun laporan berkas institusi secara berkala untuk Dinas Pendidikan.'
      ]
    },
    {
      id: 'waka-kurikulum',
      role: 'Wakil Kepala Sekolah Bidang Kurikulum',
      name: 'Teguh Widarto',
      tasks: [
        'Menyusun dan mengembangkan program pembelajaran berbasis Kurikulum SMK Merdeka.',
        'Mengatur pembagian tugas mengajar guru, pembuatan jadwal pelajaran, dan penentuan kalender akademik sekolah.',
        'Mengkoordinasikan kegiatan evaluasi belajar siswa, termasuk UTS, UAS, hingga Asesmen Nasional.',
        'Mengawasi jalannya proses Pembelajaran Tatap Muka maupun Praktik Kerja Lapangan (PKL) dari sisi akademik.'
      ]
    },
    {
      id: 'waka-kesiswaan',
      role: 'Wakil Kepala Sekolah Bidang Kesiswaan',
      name: 'Winardi',
      tasks: [
        'Menyusun program pembinaan kesiswaan, penegakan kedisiplinan, dan tata tertib sekolah.',
        'Membina dan mengawasi jalannya Organisasi Siswa Intra Sekolah (OSIS) serta seluruh ekstrakurikuler sekolah.',
        'Mengkoordinasikan keikutsertaan siswa dalam berbagai perlombaan akademik dan non-akademik di tingkat kabupaten maupun provinsi.',
        'Mengelola program beasiswa bagi siswa (seperti PIP/KIP) serta pelacakan prestasi siswa.'
      ]
    },
    {
      id: 'waka-humas',
      role: 'Wakil Kepala Sekolah Bidang Hubungan Masyarakat',
      name: 'Eko Prasetiawan, S.T.',
      tasks: [
        'Membangun jalinan kerja sama dengan Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA) demi kelancaran program link and match.',
        'Mengoordinasikan program Praktik Kerja Lapangan (PKL) siswa bersama mitra industri resmi seperti Toyota Nasmoko dan Astra Honda Motor.',
        'Mengelola wadah Bursa Kerja Khusus (BKK) untuk penyaluran lulusan ke dunia kerja.',
        'Menjadi jembatan komunikasi resmi antara sekolah dengan komite, orang tua murid, dan instansi luar.'
      ]
    },
    {
      id: 'waka-sarpras',
      role: 'Wakil Kepala Sekolah Bidang Sarana & Prasarana',
      name: 'Sukanto',
      tasks: [
        'Merencanakan kebutuhan sarana, prasarana, serta alat penunjang praktik di setiap laboratorium komputer maupun bengkel otomotif.',
        'Mengkoordinasikan pemeliharaan, perawatan, dan perbaikan seluruh fasilitas fisik gedung sekolah.',
        'Melakukan inventarisasi seluruh aset milik sekolah agar tercatat dengan tertib dan aman.',
        'Menyediakan lingkungan belajar yang bersih, aman, nyaman, dan mendukung program sekolah berwawasan lingkungan.'
      ]
    }
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Struktur Manajemen & Tata Usaha</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Selamat datang di halaman Manajemen SMK Negeri 1 Kawunganten. Sinergi kepemimpinan dan tata kelola administrasi yang akuntabel adalah kunci kami dalam mencetak lulusan SMK yang berkarakter, unggul, dan siap kerja.
      </p>

      <div className="space-y-6">
        {manajemen.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 scroll-mt-24 hover:shadow-lg transition"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{item.role}</h2>
              <p className="text-lg text-gray-600 font-semibold">{item.name}</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">Tugas & Tanggung Jawab Utama:</h3>
              <ul className="space-y-2">
                {item.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
