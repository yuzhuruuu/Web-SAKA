'use client'

import { useEffect, useState } from 'react'
import { storage } from '@/utils/localStorage'
import { Newspaper, Eye, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBerita: 0,
    beritaBulanIni: 0,
    totalViews: 0
  })
  const [recentBerita, setRecentBerita] = useState([])

  useEffect(() => {
    // Ambil data berita dari localStorage atau default
    const beritaFromStorage = storage.getBerita()
    let beritaList = []

    if (beritaFromStorage) {
      beritaList = beritaFromStorage
    } else {
      // Import default berita
      import('@/data/berita').then((module) => {
        beritaList = module.beritaList
        setStats({
          totalBerita: beritaList.length,
          beritaBulanIni: beritaList.filter((b) => {
            const bulanIni = new Date().getMonth()
            const tanggalBerita = new Date(b.tanggal)
            return tanggalBerita.getMonth() === bulanIni
          }).length,
          totalViews: Math.floor(Math.random() * 5000) + 1000
        })
        setRecentBerita(beritaList.slice(0, 5))
      })
      return
    }

    // Hitung statistik
    const bulanIni = new Date().getMonth()
    const beritaBulanIni = beritaList.filter((b) => {
      const tanggalBerita = new Date(b.tanggal)
      return tanggalBerita.getMonth() === bulanIni
    }).length

    setStats({
      totalBerita: beritaList.length,
      beritaBulanIni,
      totalViews: Math.floor(Math.random() * 5000) + 1000
    })
    
    setRecentBerita(beritaList.slice(0, 5))
  }, [])

  const statCards = [
    {
      icon: Newspaper,
      label: 'Total Berita',
      value: stats.totalBerita,
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Calendar,
      label: 'Berita Bulan Ini',
      value: stats.beritaBulanIni,
      color: 'bg-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: TrendingUp,
      label: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Selamat datang di Admin Panel SMK Negeri 1 Kawunganten</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`${stat.iconBg} p-4 rounded-full`}>
                  <Icon className={stat.iconColor} size={24} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Berita */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Berita Terbaru</h2>
          <Link
            href="/admin/berita"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Lihat Semua →
          </Link>
        </div>

        {recentBerita.length > 0 ? (
          <div className="space-y-4">
            {recentBerita.map((berita) => (
              <div
                key={berita.id}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={berita.gambar}
                  alt={berita.judul}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{berita.judul}</h3>
                  <p className="text-sm text-gray-600">{berita.tanggal}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">Belum ada berita</p>
        )}
      </div>
    </div>
  )
}
