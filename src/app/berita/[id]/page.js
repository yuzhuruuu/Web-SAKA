'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import PagesLayout from '@/components/PagesLayout'
import { beritaList } from '@/data/berita'

export default function DetailBerita({ params }) {
  const berita = beritaList.find(b => b.id === params.id)

  if (!berita) {
    return (
      <PagesLayout
        title="Berita Tidak Ditemukan"
        subtitle="Maaf, berita yang Anda cari tidak tersedia"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Berita', href: '/berita' },
          { label: 'Tidak Ditemukan', href: null }
        ]}
      >
        <div className="text-center py-12">
          <Link href="/berita" className="inline-block bg-primary-dark text-white px-6 py-3 rounded-lg hover:shadow-lg transition-transform">
            Kembali ke Berita
          </Link>
        </div>
      </PagesLayout>
    )
  }

  return (
    <PagesLayout
      title={berita.judul}
      subtitle={berita.tanggal}
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Berita', href: '/berita' },
        { label: berita.judul, href: null }
      ]}
    >
      <ScrollReveal animation="fade-in-up" delay={100}>
        <article className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          {/* Image */}
          <ScrollReveal animation="fade-in-up" delay={150}>
            <div className="w-full h-96 overflow-hidden">
              <img
                src={berita.gambar}
                alt={berita.judul}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="p-8">
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>{berita.isi}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={300}>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link href="/berita" className="inline-block bg-primary-dark text-white px-6 py-3 rounded-lg hover:shadow-lg transition-transform">
                  Kembali ke Berita
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </article>
      </ScrollReveal>
    </PagesLayout>
  )
}
