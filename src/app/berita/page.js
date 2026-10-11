'use client'

import BeritaCard from '@/components/BeritaCard'
import ScrollReveal from '@/components/ScrollReveal'
import PagesLayout from '@/components/PagesLayout'
import { beritaList } from '@/data/berita'

export default function Berita() {
  return (
    <PagesLayout
      label="INFORMASI"
      title="Berita & Pengumuman"
      subtitle="Portal berita terkini SMK Negeri 1 Kawunganten"
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Berita', href: null }
      ]}
    >
      {/* Grid Berita */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {beritaList.map((berita, idx) => (
          <ScrollReveal key={berita.id} animation="fade-in-up" delay={150 + idx * 50}>
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

      {beritaList.length === 0 && (
        <ScrollReveal animation="fade-in-up" delay={0}>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Belum ada berita tersedia</p>
          </div>
        </ScrollReveal>
      )}
    </PagesLayout>
  )
}
