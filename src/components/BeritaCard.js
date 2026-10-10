'use client'

import { useState } from 'react'
import { beritaList } from '@/data/berita'

export default function BeritaCard({ id, judul, tanggal, ringkasan, gambar }) {
  const [showModal, setShowModal] = useState(false)
  const berita = beritaList.find(b => b.id === id)

  return (
    <>
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
          <button 
            onClick={() => setShowModal(true)}
            className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition font-medium text-sm"
          >
            Baca Selengkapnya
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-800">{berita?.judul}</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              {berita?.gambar && (
                <img 
                  src={berita.gambar} 
                  alt={berita.judul}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              
              <p className="text-gray-500 text-sm mb-6">{berita?.tanggal}</p>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{berita?.isi}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-medium"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
