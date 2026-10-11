'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function SambutanKepalaSekolah() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Kolom Kiri - Foto Kepala Sekolah (33%) */}
          <div className="lg:col-span-4">
            <ScrollReveal animation="fade-in-left" delay={100}>
              <div className="max-w-sm mx-auto">
                <div className="relative">
                  {/* Soft shadow backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/5 to-primary-dark/10 rounded-3xl blur-2xl"></div>
                  
                  {/* Image Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-gray-50 to-gray-100 p-2">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      <img
                        src="/kepalasekolah.png"
                        alt="Kepala Sekolah SMK Negeri 1 Kawunganten"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Kolom Kanan - Konten Teks (66%) */}
          <div className="lg:col-span-8">
            <ScrollReveal animation="fade-in-right" delay={150}>
              <div className="space-y-6">
                {/* Label Atas dengan Ikon Kutipan */}
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <span className="text-xs font-bold tracking-widest text-primary-dark uppercase">
                    SAMBUTAN KEPALA SEKOLAH
                  </span>
                </div>

                {/* Teks Kutipan Utama */}
                <blockquote className="text-lg font-medium italic text-gray-800 leading-relaxed">
                  "Selamat datang di SMK Negeri 1 Kawunganten. Kami berkomitmen untuk mencetak generasi muda yang berkarakter, mandiri, unggul, kompeten, dan siap kerja maupun berwirausaha. Pendidikan vokasi bukan hanya tentang keterampilan, tetapi membentuk karakter dan kepribadian yang luhur untuk menghadapi tantangan global."
                </blockquote>

                {/* Garis Pemisah */}
                <div className="w-12 h-1.5 bg-primary-dark rounded-full"></div>

                {/* Profil */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    Agus Darmono, S.Pd., M.Pd.
                  </h3>
                  <p className="text-xs font-bold tracking-widest text-primary-dark uppercase">
                    KEPALA SEKOLAH SMK NEGERI 1 KAWUNGANTEN
                  </p>
                </div>

                {/* Tombol */}
                <div className="pt-4">
                  <Link 
                    href="/sambutan-kepala-sekolah" 
                    className="group inline-flex items-center gap-3 bg-primary-dark text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105 hover:bg-blue-900"
                  >
                    Baca Sambutan Lengkap
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
