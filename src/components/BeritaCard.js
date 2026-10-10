'use client'

import Link from 'next/link'

export default function BeritaCard({ id, judul, tanggal, ringkasan, gambar }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
      <img 
        src={gambar} 
        alt={judul} 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">{judul}</h3>
        <p className="text-sm text-gray-500 mb-3">{tanggal}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{ringkasan}</p>
        <Link 
          href={`/berita/${id}`}
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition font-medium text-sm"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  )
}
