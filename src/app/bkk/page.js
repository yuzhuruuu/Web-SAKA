'use client'

import { useState, useEffect } from 'react'
import { Plane, Users, Briefcase, TrendingUp, Mail, MessageCircle } from 'lucide-react'
import PagesLayout from '@/components/PagesLayout'
import ScrollReveal from '@/components/ScrollReveal'

export default function BKK() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const programs = [
    {
      id: 1,
      title: 'Program Magang & Kerja Internasional',
      description: 'Penyiapan alumni untuk berkarier di luar negeri, khususnya Jepang.',
      icon: Plane,
      features: ['Diklat Bahasa Jepang (JLPT N4 / JFT-Basic)', 'Sponsorship Jalur Resmi', 'Program Ginou Jisshusei & SSW']
    },
    {
      id: 2,
      title: 'Pembekalan Karier & Pembinaan',
      description: 'Program pra-seleksi kerja untuk siswa tingkat akhir.',
      icon: Users,
      features: ['Psychotest & HRD Interview Simulation', 'Pendidikan Karakter & Disiplin Industri', 'Pelatihan Fisik & Mental']
    },
    {
      id: 3,
      title: 'Bursa Kerja & Rekrutmen Massal',
      description: 'Rekrutmen langsung dari perusahaan mitra di sekolah.',
      icon: Briefcase,
      features: ['Tes Tertulis & Tes Fisik', 'Wawancara Langsung', 'Penempatan Kerja Langsung']
    },
    {
      id: 4,
      title: 'Tracer Study Alumni',
      description: 'Sistem pencatatan elektronik jejak karier lulusan.',
      icon: TrendingUp,
      features: ['Monitoring Karier Alumni', 'Evaluasi Relevansi Pembelajaran', 'Data Placement Rate']
    }
  ]

  const partners = {
    otomotif: ['PT Toyota Nasmoko', 'Astra Honda Motor (AHM)', 'PT United Tractors', 'PT Astra International', 'Mitsubishi Motors'],
    teknologi: ['Axioo Indonesia', 'PT Citraweb Digital Multisolusi', 'Game Lab Indonesia', 'Lapan Mata Studio', 'Uki Studio'],
    retail: ['PT Solaria', 'PT Indomarco Prismatama', 'PT Alfaria Trijaya', 'Lembaga Keuangan Regional']
  }

  return (
    <PagesLayout
      label="KARIR & PENEMPATAN"
      title="Portal Bursa Kerja Khusus (BKK)"
      subtitle="Izin Resmi Disnaker No: Kep. 560 / 222 / BKK / IX / 2017"
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'BKK', href: null }
      ]}
    >

      {/* Profil & Landasan Hukum */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Profil & Landasan Hukum</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="font-bold text-2xl text-gray-800 mb-4">Apa itu BKK SMK Negeri 1 Kawunganten?</h3>
            <p className="text-gray-700 leading-relaxed">
              Bursa Kerja Khusus (BKK) adalah sebuah lembaga yang dibentuk di SMK Negeri 1 Kawunganten sebagai mitra instansi pemerintah yang bertanggung jawab di bidang ketenagakerjaan. BKK berfungsi memberikan pelayanan dan informasi lowongan kerja, pelaksana pemasaran, penyaluran, dan penempatan tenaga kerja bagi alumni sekolah kami maupun lulusan SMK di wilayah sekitarnya.
            </p>
          </div>

          <div 
            className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="font-bold text-2xl text-gray-800 mb-4">Landasan Hukum Pendirian</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-dark font-bold mt-1">•</span>
                <span>UU RI No. 13 Tahun 2003 tentang Ketenagakerjaan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-dark font-bold mt-1">•</span>
                <span>Peraturan Menteri Tenaga Kerja RI No. 39 Tahun 2016</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-dark font-bold mt-1">•</span>
                <span>Perjanjian Kerja Sama dengan Kementerian Ketenagakerjaan RI</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program Unggulan - Grid 2x2 */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Program Unggulan & Layanan Utama</h2>
        <p className="text-gray-600 mb-10 text-lg">Berbagai program unggulan untuk mempersiapkan masa depan karier Anda</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => {
            const IconComponent = program.icon
            return (
              <ScrollReveal key={program.id} animation="fade-in-up" delay={idx * 100}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Header dengan Background Biru */}
                  <div className="bg-primary-dark p-6 text-white">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                    <p className="text-white/90 text-sm">{program.description}</p>
                  </div>

                  {/* Body dengan Features */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {program.features.map((feature, fIdx) => (
                        <li 
                          key={fIdx} 
                          className="flex items-start gap-2 text-gray-700 text-sm"
                        >
                          <span className="text-primary-dark font-bold mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* Mitra Industri - Grid dengan Card Premium */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Jejaring Mitra Industri (DUDIKA)</h2>
        <p className="text-gray-600 mb-10 text-lg">Bekerja sama dengan perusahaan terkemuka di berbagai bidang industri</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Otomotif */}
          <div 
            className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Briefcase className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-4">Industri Otomotif & Manufaktur</h3>
            <div className="space-y-2">
              {partners.otomotif.map((partner, idx) => (
                <div key={idx} className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 text-gray-800 font-medium text-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Teknologi */}
          <div 
            className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-4 shadow-md">
              <TrendingUp className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-4">Teknologi & Digital Creative</h3>
            <div className="space-y-2">
              {partners.teknologi.map((partner, idx) => (
                <div key={idx} className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 text-gray-800 font-medium text-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Retail */}
          <div 
            className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Users className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-4">Retail, Perbankan & Kuliner</h3>
            <div className="space-y-2">
              {partners.retail.map((partner, idx) => (
                <div key={idx} className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 text-gray-800 font-medium text-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Banner dengan Background Biru Tua */}
      <section 
        className={`bg-gradient-to-r from-primary-dark to-blue-900 p-12 rounded-3xl shadow-2xl transition-all duration-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
          <p className="text-blue-100 text-lg">Sekretariat Fisik: Gedung Pusat BKK SMK Negeri 1 Kawunganten<br/>Jl. Pramuka, Desa Gunungjaya, Kecamatan Kawunganten, Kabupaten Cilacap, Jawa Tengah (53253)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <a 
            href="mailto:bkk@smkn1kawunganten.sch.id"
            className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-primary-dark" strokeWidth={2} />
            </div>
            <h3 className="font-bold text-white text-center mb-2">Email Resmi BKK</h3>
            <p className="text-blue-100 text-center text-sm">bkk@smkn1kawunganten.sch.id</p>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/6288220109174"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-green-600" strokeWidth={2} />
            </div>
            <h3 className="font-bold text-white text-center mb-2">WhatsApp Hotline</h3>
            <p className="text-blue-100 text-center text-sm">+62 882-2010-9174</p>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/bkksmknsaka"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="font-bold text-white text-center mb-2">Instagram</h3>
            <p className="text-blue-100 text-center text-sm">@bkksmknsaka</p>
          </a>
        </div>
      </section>
    </PagesLayout>
  )
}
