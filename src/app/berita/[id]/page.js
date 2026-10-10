import Link from 'next/link'
import { beritaList } from '@/data/berita'

export default function DetailBerita({ params }) {
  const berita = beritaList.find(b => b.id === params.id)

  if (!berita) {
    return (
      <div className="container py-12 pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Berita Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Maaf, berita yang Anda cari tidak tersedia.</p>
          <Link href="/berita" className="btn btn-primary">
            Kembali ke Berita
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <Link href="/berita" className="text-primary hover:underline mb-6 inline-block font-medium">
        ← Kembali ke Berita
      </Link>

      <article className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        {/* Image */}
        <div className="w-full h-96 overflow-hidden">
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{berita.judul}</h1>
          
          <p className="text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200">
            {berita.tanggal}
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>{berita.isi}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/berita" className="btn btn-primary">
              Kembali ke Berita
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
