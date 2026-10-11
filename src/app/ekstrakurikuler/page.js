'use client'

import { useState } from 'react'
import PagesLayout from '@/components/PagesLayout'
import ScrollReveal from '@/components/ScrollReveal'

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
    <PagesLayout
      label="PENGEMBANGAN DIRI"
      title="Daftar Ekstrakurikuler"
      subtitle="Pengembangan diri siswa melalui berbagai wadah ekstrakurikuler"
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Tentang SAKA', href: null },
        { label: 'Ekstrakurikuler', href: null }
      ]}
    >
      {/* Filter Buttons */}
      <ScrollReveal animation="fade-in-up" delay={0}>
        <div className="flex gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeFilter === filter.id
                  ? 'bg-primary-dark text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Ekstrakurikuler Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((ekskul, idx) => (
          <ScrollReveal key={ekskul.id} animation="fade-in-up" delay={idx * 50}>
            <div
              id={ekskul.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 scroll-mt-24"
            >
              {/* Image */}
              <div className="relative h-40 bg-gray-200 overflow-hidden">
                {ekskul.image && (
                  <img
                    src={ekskul.image}
                    alt={ekskul.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-20 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary-dark mb-3">{ekskul.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{ekskul.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Tidak ada ekstrakurikuler dalam kategori ini</p>
        </div>
      )}
    </PagesLayout>
  )
}
