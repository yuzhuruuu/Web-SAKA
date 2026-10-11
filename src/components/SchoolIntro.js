'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function SchoolIntro() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white py-20">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Judul dengan animasi muncul dari bawah ke atas */}
          <h1 
            className={`text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            SMK N 1 Kawunganten
          </h1>
          
          {/* Deskripsi dengan animasi muncul dari bawah ke atas */}
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Selamat datang di website resmi SMK N 1 Kawunganten
          </p>

          {/* Tagline/Slogan dengan animasi muncul dari bawah ke atas */}
          <div 
            className={`mb-10 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="inline-block bg-blue-50 text-primary-dark px-6 py-2 rounded-full text-lg font-semibold italic border-2 border-primary-dark/20">
              "Sekolah Unggul Berwawasan Lingkungan"
            </span>
          </div>
          
          {/* Tombol dengan animasi muncul dari bawah ke atas */}
          <div 
            className={`flex gap-4 justify-center transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <Link 
              href="/ppdb" 
              className="group bg-primary-dark text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 hover:scale-105 hover:bg-blue-900"
            >
              Info PPDB 2027
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
