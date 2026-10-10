'use client'

import { useState } from 'react'

export default function Ekstrakurikuler() {
  const [activeFilter, setActiveFilter] = useState('semua')

  const ekstrakurikulers = [
    {
      id: 'osis',
      name: 'OSIS',
      category: 'organisasi',
      desc: 'Organisasi Intra Sekolah yang menjadi motor penggerak seluruh kegiatan siswa di sekolah. OSIS melatih kepemimpinan, manajemen organisasi, dan tanggung jawab melalui perancangan berbagai acara besar sekolah, aksi sosial, serta penyaluran aspirasi siswa.',
      image: '/ekstrakurikuler/osis.png'
    },
    {
      id: 'pramuka',
      name: 'Pramuka',
      category: 'organisasi',
      desc: 'Gerakan Kepanduan Pramuka Gugus Depan SMKN 1 Kawunganten yang wajib diikuti untuk menanamkan jiwa dasadarma, kemandirian, cinta alam, serta kerja sama. Kegiatan meliputi berkemah, latihan kepemimpinan, dan teknik kepramukaan.',
      image: '/ekstrakurikuler/pramuka.png'
    },
    {
      id: 'bola-voli',
      name: 'Bola Voli',
      category: 'olahraga',
      desc: 'Ekstrakurikuler olahraga populer yang berfokus pada pengembangan teknik dasar voli, strategi tim, fisik, dan kekompakan kerja sama kelompok. Rutin mengadakan latihan dan siap berpartisipasi dalam berbagai turnamen antarpelajar.',
      image: '/ekstrakurikuler/voli.png'
    },
    {
      id: 'bandung-karate-club',
      name: 'Bandung Karate Club (BKC)',
      category: 'olahraga',
      desc: 'Wadah olahraga beladiri karate yang berfokus pada pembentukan fisik yang prima, ketahanan mental, kepribadian yang luhur, dan disiplin tinggi. Ekstrakurikuler ini aktif mencetak atlet berprestasi untuk berkompetisi di tingkat daerah maupun nasional.',
      image: '/ekstrakurikuler/karate.png'
    },
    {
      id: 'seni-musik',
      name: 'Seni Musik',
      category: 'seni',
      desc: 'Ruang kreativitas bagi siswa yang memiliki minat di bidang olah vokal maupun instrumen musik. Mulai dari pembentukan band, akustik, hingga pengenalan aransemen lagu, ekskul ini siap mengiringi berbagai pentas seni dan acara resmi sekolah.',
      image: '/ekstrakurikuler/musik.png'
    },
    {
      id: 'seni-tari',
      name: 'Seni Tari',
      category: 'seni',
      desc: 'Wadah pelestarian budaya sekaligus ekspresi estetika bagi siswa yang mencintai seni gerak tubuh. Ekskul ini mempelajari berbagai tari tradisional Nusantara hingga tari kreasi baru untuk ditampilkan pada upacara adat sekolah maupun festival budaya.',
      image: '/ekstrakurikuler/tari.png'
    },
    {
      id: 'paskib',
      name: 'Paskibra (Paskib)',
      category: 'seni',
      desc: 'Pasukan Pengibar Bendera yang melatih ketahanan fisik, konsentrasi, kekompakan, dan rasa nasionalisme tinggi melalui baris-berbaris (PBB). Anggotanya dipersiapkan menjadi petugas upacara sekolah hingga seleksi Paskibraka tingkat kabupaten.',
      image: '/ekstrakurikuler/paskib.png'
    },
    {
      id: 'frisa',
      name: 'FRISA (Forum Remaja Islam Saka)',
      category: 'kemanusiaan',
      desc: 'Forum Remaja Islam Saka (FRISA) merupakan wadah pendalaman kerohanian Islam bagi siswa. Kegiatannya meliputi kajian keagamaan, pembiasaan ibadah rutin, pelatihan dakwah, serta pengelolaan kegiatan hari besar Islam (PHBI) di sekolah.',
      image: '/ekstrakurikuler/frisa.png'
    },
    {
      id: 'pmr',
      name: 'PMR (Palang Merah Remaja)',
      category: 'kemanusiaan',
      desc: 'Ekskul yang bergerak di bidang kemanusiaan, kesehatan, dan pertolongan pertama. Siswa dibekali keterampilan medis dasar, kesiapsiagaan bencana, serta gaya hidup sehat untuk aktif bertugas menjaga kesehatan lingkungan sekolah.',
      image: '/ekstrakurikuler/pmr.png'
    },
    {
      id: 'kir',
      name: 'KIR (Karya Ilmiah Remaja)',
      category: 'kemanusiaan',
      desc: 'Wadah bagi siswa yang memiliki ketertarikan pada dunia penelitian, sains, dan inovasi teknologi. Di sini siswa diajak berpikir kritis melalui eksperimen sederhana, penulisan makalah ilmiah, hingga pembuatan proyek inovatif berbasis masalah sekitar.',
      image: '/ekstrakurikuler/kir.png'
    }
  ]

  const filters = [
    { id: 'semua', label: 'Semua' },
    { id: 'organisasi', label: 'Organisasi' },
    { id: 'olahraga', label: 'Olahraga' },
    { id: 'seni', label: 'Seni' },
    { id: 'kemanusiaan', label: 'Sains & Sosial' }
  ]

  const filtered = activeFilter === 'semua' 
    ? ekstrakurikulers 
    : ekstrakurikulers.filter(e => e.category === activeFilter)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 pt-8">Daftar Ekstrakurikuler</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Pengembangan diri siswa tidak hanya dilakukan di dalam kelas. SMK Negeri 1 Kawunganten menyediakan berbagai wadah ekstrakurikuler untuk mengasah minat, bakat, organisasi, dan soft skills siswa.
      </p>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-12 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeFilter === filter.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Ekstrakurikuler Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filtered.map((ekskul) => (
          <div
            key={ekskul.id}
            id={ekskul.id}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100 scroll-mt-24"
          >
            {/* Image */}
            <div className="relative h-40 bg-gray-200 overflow-hidden">
              {ekskul.image ? (
                <img
                  src={ekskul.image}
                  alt={ekskul.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl bg-gray-100">
                  {ekskul.icon}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{ekskul.icon}</span>
                <h3 className="text-lg font-bold text-gray-800">{ekskul.name}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{ekskul.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Tidak ada ekstrakurikuler dalam kategori ini</p>
        </div>
      )}
    </div>
  )
}
