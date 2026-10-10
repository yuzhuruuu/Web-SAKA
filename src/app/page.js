import YouTubeHero from '@/components/YouTubeHero'
import SchoolIntro from '@/components/SchoolIntro'
import QuickAccess from '@/components/QuickAccess'
import SchoolProfile from '@/components/SchoolProfile'
import SchoolHistory from '@/components/SchoolHistory'
import VisionMission from '@/components/VisionMission'
import SchoolInfo from '@/components/SchoolInfo'
import BeritaCard from '@/components/BeritaCard'
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

      {/* School Profile */}
      <SchoolProfile />

      {/* School History */}
      <SchoolHistory />

      {/* Vision & Mission */}
      <VisionMission />

      {/* School Info */}
      <SchoolInfo />

      {/* Berita Terbaru */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Berita Terbaru</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {beritaTerbaru.map((berita) => (
            <BeritaCard
              key={berita.id}
              id={berita.id}
              judul={berita.judul}
              tanggal={berita.tanggal}
              ringkasan={berita.ringkasan}
              gambar={berita.gambar}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/saka-news" className="btn btn-primary">
            Lihat Semua Berita
          </Link>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="container py-12 text-center">
        <Link 
          href="/ppdb"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition font-bold text-lg shadow-md hover:shadow-lg"
        >
          PPDB 2026 - Daftar Sekarang
        </Link>
      </section>
    </>
  )
}
