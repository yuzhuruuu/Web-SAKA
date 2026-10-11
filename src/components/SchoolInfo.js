'use client'

import Link from 'next/link'
import { GraduationCap, FileText, Trophy, Building2 } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function SchoolInfo() {
  const stats = [
    {
      icon: GraduationCap,
      value: '5',
      label: 'Konsentrasi Keahlian'
    },
    {
      icon: FileText,
      value: 'Merdeka',
      label: 'Kurikulum'
    },
    {
      icon: Trophy,
      value: 'Top 1',
      label: 'Juara Krenova Kabupaten'
    },
    {
      icon: Building2,
      value: 'Banyak',
      label: 'Mitra Industri (Nasmoko, AHM, dll)'
    }
  ]

  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri - Profil */}
        <ScrollReveal animation="fade-in-left" delay={0}>
          <div>
            {/* Label dengan ikon centang */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary-dark text-lg">✓</span>
              <p className="text-sm font-bold text-primary-dark tracking-wider">PROFIL SINGKAT</p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SMK N 1 KAWUNGANTEN <span className="text-primary-dark">Dalam Angka.</span>
            </h2>

            {/* Deskripsi */}
            <p className="text-gray-600 leading-relaxed mb-8">
              SMK Negeri 1 Kawunganten (SMKSAKA) adalah salah satu sekolah menengah kejuruan negeri unggulan yang terletak di Kabupaten Cilacap, Jawa Tengah. Sekolah ini mengusung visi sebagai "Sekolah Unggul Berwawasan Lingkungan" dan menerapkan Kurikulum Merdeka dengan 5 hari belajar untuk mencetak lulusan yang siap kerja dan berprestasi.
            </p>

            {/* Tombol Outline */}
            <div className="flex gap-4 flex-wrap">
              <Link 
                href="/about"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
              >
                Tentang Sekolah
              </Link>
              <Link 
                href="/konsentrasi-keahlian"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
              >
                Program Keahlian
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Kolom Kanan - Statistik Grid 2x2 */}
        <ScrollReveal animation="fade-in-right" delay={100}>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    {/* Ikon dengan background lingkaran */}
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-dark" strokeWidth={2} />
                    </div>

                    {/* Angka dan Label */}
                    <div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-600 leading-tight">{stat.label}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
