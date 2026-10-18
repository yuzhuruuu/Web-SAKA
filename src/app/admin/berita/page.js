'use client'

import { useEffect, useState } from 'react'
import { storage } from '@/utils/localStorage'
import { beritaList as defaultBeritaList } from '@/data/berita'
import { Plus, Edit, Trash2, X, Save } from 'lucide-react'

export default function AdminBerita() {
  const [beritaList, setBeritaList] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingBerita, setEditingBerita] = useState(null)
  const [formData, setFormData] = useState({
    judul: '',
    tanggal: '',
    ringkasan: '',
    gambar: '',
    isi: ''
  })

  // Load berita dari localStorage atau default
  useEffect(() => {
    const storedBerita = storage.getBerita()
    if (storedBerita) {
      setBeritaList(storedBerita)
    } else {
      setBeritaList(defaultBeritaList)
      storage.setBerita(defaultBeritaList)
    }
  }, [])

  // Reset form
  const resetForm = () => {
    setFormData({
      judul: '',
      tanggal: '',
      ringkasan: '',
      gambar: '',
      isi: ''
    })
    setEditingBerita(null)
  }

  // Open modal untuk tambah
  const handleTambah = () => {
    resetForm()
    setIsModalOpen(true)
  }

  // Open modal untuk edit
  const handleEdit = (berita) => {
    setEditingBerita(berita)
    setFormData({
      judul: berita.judul,
      tanggal: berita.tanggal,
      ringkasan: berita.ringkasan,
      gambar: berita.gambar,
      isi: berita.isi
    })
    setIsModalOpen(true)
  }

  // Simpan berita (tambah atau edit)
  const handleSimpan = (e) => {
    e.preventDefault()
    
    let updatedList
    if (editingBerita) {
      // Update existing
      updatedList = beritaList.map((b) =>
        b.id === editingBerita.id ? { ...formData, id: editingBerita.id } : b
      )
    } else {
      // Add new
      const newId = String(Math.max(...beritaList.map((b) => parseInt(b.id)), 0) + 1)
      updatedList = [...beritaList, { ...formData, id: newId }]
    }

    setBeritaList(updatedList)
    storage.setBerita(updatedList)
    setIsModalOpen(false)
    resetForm()
  }

  // Hapus berita
  const handleHapus = (id) => {
    if (confirm('Yakin ingin menghapus berita ini?')) {
      const updatedList = beritaList.filter((b) => b.id !== id)
      setBeritaList(updatedList)
      storage.setBerita(updatedList)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Kelola Berita</h1>
          <p className="text-gray-600">Tambah, edit, atau hapus berita</p>
        </div>
        <button
          onClick={handleTambah}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
          Tambah Berita
        </button>
      </div>

      {/* Berita List */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        {beritaList.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {beritaList.map((berita) => (
              <div key={berita.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex gap-6">
                  <img
                    src={berita.gambar}
                    alt={berita.judul}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{berita.judul}</h3>
                    <p className="text-sm text-gray-600 mb-2">{berita.tanggal}</p>
                    <p className="text-gray-700 line-clamp-2">{berita.ringkasan}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleEdit(berita)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleHapus(berita.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                    >
                      <Trash2 size={16} />
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center text-gray-500">
            <p>Belum ada berita. Klik "Tambah Berita" untuk membuat berita baru.</p>
          </div>
        )}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingBerita ? 'Edit Berita' : 'Tambah Berita'}
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false)
                  resetForm()
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSimpan} className="p-6 space-y-4">
              {/* Judul */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Berita *
                </label>
                <input
                  type="text"
                  value={formData.judul}
                  onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan judul berita"
                  required
                />
              </div>

              {/* Tanggal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal *
                </label>
                <input
                  type="text"
                  value={formData.tanggal}
                  onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Contoh: 10 Oktober 2026"
                  required
                />
              </div>

              {/* Gambar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL Gambar *
                </label>
                <input
                  type="text"
                  value={formData.gambar}
                  onChange={(e) => setFormData({ ...formData, gambar: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="/news/gambar.png"
                  required
                />
              </div>

              {/* Ringkasan */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ringkasan *
                </label>
                <textarea
                  value={formData.ringkasan}
                  onChange={(e) => setFormData({ ...formData, ringkasan: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ringkasan singkat berita"
                  rows="3"
                  required
                />
              </div>

              {/* Isi */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Isi Berita *
                </label>
                <textarea
                  value={formData.isi}
                  onChange={(e) => setFormData({ ...formData, isi: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Isi lengkap berita"
                  rows="6"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Save size={20} />
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false)
                    resetForm()
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
