'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import PagesLayout from '@/components/PagesLayout'
import { getBeritaList } from '@/data/berita'

export default function DetailBerita() {
  const params = useParams()
  const [berita, setBerita] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const beritaList = getBeritaList()
    const found = beritaList.find(b => b.id === params.id)
    setBerita(found)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

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
      label="BERITA & INFORMASI"
      title={berita.judul}
      subtitle={berita.tanggal}
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Berita', href: '/berita' },
        { label: berita.judul, href: null }
      ]}
    >
      <ScrollReveal animation="fade-in-up" delay={0}>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Image */}
          <div className="w-full h-96 overflow-hidden bg-gray-200">
            <img
              src={berita.gambar}
              alt={berita.judul}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="mb-6">
                <p className="text-sm text-primary-dark font-semibold mb-2">{berita.tanggal}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{berita.judul}</h1>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={150}>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                {berita.isi.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
                <Link 
                  href="/berita" 
                  className="inline-flex items-center gap-2 bg-primary-dark text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  ← Kembali ke Berita
                </Link>
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 border-2 border-primary-dark text-primary-dark px-6 py-3 rounded-lg hover:bg-primary-dark hover:text-white transition-all duration-300"
                >
                  Beranda
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </article>
      </ScrollReveal>
    </PagesLayout>
  )
}
