'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function SambutanKepalaSekolah() {
  return (
    <section className="container py-16">
      <ScrollReveal animation="fade-in-up" delay={0}>
        <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">Sambutan Kepala Sekolah</h2>
      </ScrollReveal>

      <div className="flex gap-8 items-start">
        {/* Card Sambutan - Animasi dari kanan */}
        <ScrollReveal animation="fade-in-right" delay={100}>
          <div className="flex-1 bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Kepala SMK Negeri 1 Kawunganten</h3>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Assalamu'alaikum Warahmatullahi Wabarakatuh,<br/>
                Salam sejahtera untuk kita semua,<br/>
                Selamat datang di website resmi SMK Negeri 1 Kawunganten.
              </p>

              <p>
                Puji syukur senantiasa kita panjatkan ke hadirat Allah SWT, Tuhan Yang Maha Esa, yang telah memberikan rahmat dan hidayah-Nya sehingga website resmi SMK Negeri 1 Kawunganten ini dapat terus hadir sebagai media komunikasi dan informasi bagi seluruh warga sekolah, alumni, orang tua murid, serta masyarakat luas.
              </p>

              <p>
                Di era digital dan perkembangan teknologi yang sangat pesat ini, keberadaan website sekolah menjadi hal yang sangat krusial. Website ini dirancang untuk menjadi jendela informasi mengenai profil sekolah, visi dan misi, program keahlian, prestasi yang telah diraih, serta berbagai kegiatan akademik maupun non-akademik yang berlangsung di lingkungan SMK Negeri 1 Kawunganten.
              </p>

              <p>
                Sebagai lembaga pendidikan vokasi, SMK Negeri 1 Kawunganten berkomitmen penuh untuk mencetak generasi muda yang berkarakter, mandiri, unggul, kompeten, dan siap kerja maupun berwirausaha sesuai dengan semangat SMK Bisa-Hebat.
              </p>

              <p className="font-semibold mt-6 text-gray-800">Kepala SMK Negeri 1 Kawunganten</p>
            </div>

            <div className="mt-8">
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

        {/* Foto Sekolah - Animasi dari kiri */}
        <div className="flex flex-col gap-6 flex-shrink-0">
          <ScrollReveal animation="fade-in-left" delay={150}>
            <img 
              src="/gedung.png" 
              alt="Gedung SMK Negeri 1 Kawunganten" 
              className="w-56 h-56 object-cover rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300"
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-in-left" delay={200}>
            <img 
              src="/kelas.png" 
              alt="Ruang Kelas SMK Negeri 1 Kawunganten" 
              className="w-56 h-56 object-cover rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300"
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-in-left" delay={250}>
            <img 
              src="/depan.png" 
              alt="Depan Sekolah SMK Negeri 1 Kawunganten" 
              className="w-56 h-56 object-cover rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
