import BeritaCard from '@/components/BeritaCard'
import { beritaList } from '@/data/berita'

export default function SakaNews() {
  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">SAKA News</h1>
        <p className="text-gray-600 max-w-2xl">
          Portal berita terkini SMK Negeri 1 Kawunganten. Dapatkan informasi terbaru tentang kegiatan, prestasi, dan pengumuman penting sekolah.
        </p>
      </div>

      {/* Filter kategori bisa ditambahkan di sini jika diperlukan */}

      {/* Grid Berita */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {beritaList.map((berita) => (
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

      {beritaList.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Belum ada berita tersedia</p>
        </div>
      )}
    </div>
  )
}
