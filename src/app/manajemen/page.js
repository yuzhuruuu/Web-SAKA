'use client'

import { useState, useEffect } from 'react'
import { UserCircle, Briefcase, Users, Handshake, Wrench } from 'lucide-react'
import PagesLayout from '@/components/PagesLayout'

export default function Manajemen() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const manajemen = [
    {
      id: 'kepala-tu',
      role: 'Kepala Kantor Tata Usaha',
      badge: 'Kepala TU',
      name: 'Agung Mujahidin Rois',
      icon: UserCircle,
      tasks: [
        'Mengelola administrasi kepegawaian (pendidik dan tenaga kependidikan)',
        'Menyusun program kerja tata usaha sekolah dan mengelola sistem kearsipan serta persuratan resmi sekolah',
        'Mengoordinasikan pelayanan administrasi kesiswaan, mulai dari pendaftaran (PPDB) hingga urusan alumni',
        'Menyusun laporan berkas institusi secara berkala untuk Dinas Pendidikan'
      ]
    },
    {
      id: 'waka-kurikulum',
      role: 'Wakil Kepala Sekolah Bidang Kurikulum',
      badge: 'Waka Kurikulum',
      name: 'Teguh Widarto',
      icon: Briefcase,
      tasks: [
        'Menyusun dan mengembangkan program pembelajaran berbasis Kurikulum SMK Merdeka',
        'Mengatur pembagian tugas mengajar guru, pembuatan jadwal pelajaran, dan penentuan kalender akademik sekolah',
        'Mengkoordinasikan kegiatan evaluasi belajar siswa, termasuk UTS, UAS, hingga Asesmen Nasional',
        'Mengawasi jalannya proses Pembelajaran Tatap Muka maupun Praktik Kerja Lapangan (PKL) dari sisi akademik'
      ]
    },
    {
      id: 'waka-kesiswaan',
      role: 'Wakil Kepala Sekolah Bidang Kesiswaan',
      badge: 'Waka Kesiswaan',
      name: 'Winardi',
      icon: Users,
      tasks: [
        'Menyusun program pembinaan kesiswaan, penegakan kedisiplinan, dan tata tertib sekolah',
        'Membina dan mengawasi jalannya Organisasi Siswa Intra Sekolah (OSIS) serta seluruh ekstrakurikuler sekolah',
        'Mengkoordinasikan keikutsertaan siswa dalam berbagai perlombaan akademik dan non-akademik di tingkat kabupaten maupun provinsi',
        'Mengelola program beasiswa bagi siswa (seperti PIP/KIP) serta pelacakan prestasi siswa'
      ]
    },
    {
      id: 'waka-humas',
      role: 'Wakil Kepala Sekolah Bidang Hubungan Masyarakat',
      badge: 'Waka Humas',
      name: 'Eko Prasetiawan, S.T.',
      icon: Handshake,
      tasks: [
        'Membangun jalinan kerja sama dengan Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA) demi kelancaran program link and match',
        'Mengoordinasikan program Praktik Kerja Lapangan (PKL) siswa bersama mitra industri resmi seperti Toyota Nasmoko dan Astra Honda Motor',
        'Mengelola wadah Bursa Kerja Khusus (BKK) untuk penyaluran lulusan ke dunia kerja',
        'Menjadi jembatan komunikasi resmi antara sekolah dengan komite, orang tua murid, dan instansi luar'
      ]
    },
    {
      id: 'waka-sarpras',
      role: 'Wakil Kepala Sekolah Bidang Sarana & Prasarana',
      badge: 'Waka Sarpras',
      name: 'Sukanto',
      icon: Wrench,
      tasks: [
        'Merencanakan kebutuhan sarana, prasarana, serta alat penunjang praktik di setiap laboratorium komputer maupun bengkel otomotif',
        'Mengkoordinasikan pemeliharaan, perawatan, dan perbaikan seluruh fasilitas fisik gedung sekolah',
        'Melakukan inventarisasi seluruh aset milik sekolah agar tercatat dengan tertib dan aman',
        'Menyediakan lingkungan belajar yang bersih, aman, nyaman, dan mendukung program sekolah berwawasan lingkungan'
      ]
    }
  ]

  return (
    <PagesLayout
      label="ORGANISASI & TATA USAHA"
      title="Struktur Manajemen & Tata Usaha"
      subtitle="Sinergi kepemimpinan dan tata kelola administrasi yang akuntabel"
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Tentang SAKA', href: null },
        { label: 'Manajemen', href: null }
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {manajemen.map((item, idx) => {
          const IconComponent = item.icon
          const isLast = idx === manajemen.length - 1
          return (
            <div
              key={item.id}
              id={item.id}
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-mt-24 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${isLast ? 'md:col-span-2' : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Header dengan Background Biru */}
              <div className="bg-primary-dark p-6 text-white relative">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold">
                    {item.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-9 h-9" strokeWidth={2} />
                </div>

                {/* Nama & Jabatan */}
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <p className="text-white/90 text-sm font-medium">{item.role}</p>
              </div>

              {/* Body dengan Tugas */}
              <div className="p-6 bg-white">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary-dark rounded-full"></span>
                  Tugas & Tanggung Jawab Utama
                </h3>
                <ul className="space-y-3">
                  {item.tasks.map((task, taskIdx) => (
                    <li 
                      key={taskIdx} 
                      className={`flex items-start gap-3 text-gray-700 text-sm transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                      style={{ transitionDelay: `${idx * 100 + taskIdx * 50 + 100}ms` }}
                    >
                      <span className="text-primary-dark font-bold mt-0.5 text-base">✓</span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </PagesLayout>
  )
}
