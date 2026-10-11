import YouTubeHero from '@/components/YouTubeHero'
import SchoolIntro from '@/components/SchoolIntro'
import QuickAccess from '@/components/QuickAccess'
import SchoolInfo from '@/components/SchoolInfo'
import SambutanKepalaSekolah from '@/components/SambutanKepalaSekolah'
import BeritaCard from '@/components/BeritaCard'
import GalleryMarquee from '@/components/GalleryMarquee'
import ScrollReveal from '@/components/ScrollReveal'
import { beritaList } from '@/data/berita'
import Link from 'next/link'

export default function Home() {
  const beritaTerbaru = beritaList.slice(0, 3)

  return (
    <>
      {/* YouTube Hero */}
      <YouTubeHero />

      {/* School Intro */}
      <SchoolIntro />

      {/* Quick Access */}
      <QuickAccess />

      {/* Sambutan Kepala Sekolah */}
      <SambutanKepalaSekolah />
      
      {/* School Info - Section Baru */}
      <SchoolInfo />

      {/* Berita Terbaru */}
      <section className="container py-12">
        <ScrollReveal animation="fade-in-up" delay={0}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Berita Terbaru</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          {beritaTerbaru.map((berita, idx) => (
            <ScrollReveal key={berita.id} animation="fade-in-up" delay={100 + idx * 100}>
              <BeritaCard
                id={berita.id}
                judul={berita.judul}
                tanggal={berita.tanggal}
                ringkasan={berita.ringkasan}
                gambar={berita.gambar}
              />
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="fade-in-up" delay={400}>
          <div className="text-center">
            <Link href="/berita" className="btn bg-primary-dark text-white hover:shadow-lg transition-transform">
              Lihat Semua Berita
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Galeri Sekolah - Section Baru */}
      <GalleryMarquee />

      {/* Pre-Footer CTA */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="text-sm font-bold text-primary-dark mb-3">
              PUSAT INFORMASI
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Masih Ada Pertanyaan? Mari Cari Tahu
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={150}>
            <p className="text-xl text-gray-600 mb-8">
              Lebih <span className="text-primary-dark font-bold">Lengkap</span>
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200}>
            <Link
              href="/about"
              className="inline-block bg-primary-dark text-white px-8 py-4 rounded-lg hover:shadow-lg transition font-bold text-lg shadow-md hover:scale-105"
            >
              Tentang Kami →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
