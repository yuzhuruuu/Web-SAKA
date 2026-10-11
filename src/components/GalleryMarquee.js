'use client'

import { useEffect, useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function GalleryMarquee() {
  const galleryImages = [
    { src: '/galeri/kegiatan1.png', alt: 'Kegiatan Sekolah 1', width: 'w-80', height: 'h-56' },
    { src: '/galeri/kegiatan2.png', alt: 'Kegiatan Sekolah 2', width: 'w-64', height: 'h-80' },
    { src: '/galeri/kegiatan3.png', alt: 'Kegiatan Sekolah 3', width: 'w-72', height: 'h-72' },
    { src: '/galeri/kegiatan4.png', alt: 'Kegiatan Sekolah 4', width: 'w-80', height: 'h-60' },
    { src: '/galeri/kegiatan5.png', alt: 'Kegiatan Sekolah 5', width: 'w-64', height: 'h-72' },
    { src: '/galeri/kegiatan6.png', alt: 'Kegiatan Sekolah 6', width: 'w-72', height: 'h-64' },
    { src: '/galeri/kegiatan7.png', alt: 'Kegiatan Sekolah 7', width: 'w-80', height: 'h-56' },
    { src: '/galeri/kegiatan8.png', alt: 'Kegiatan Sekolah 8', width: 'w-64', height: 'h-80' },
  ]

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Judul Section */}
      <div className="container text-center mb-12">
        <ScrollReveal animation="fade-in-up" delay={0}>
          <div className="text-sm font-bold text-primary-dark mb-3 tracking-widest">
            + GALERI SEKOLAH
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in-up" delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-800">Dokumentasi </span>
            <span className="text-primary-dark">SMK SAKA</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Overlays untuk efek fade di kiri dan kanan */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track - Duplikat untuk seamless loop */}
        <div className="flex animate-marquee hover:pause">
          {/* First Set */}
          {galleryImages.map((image, idx) => (
            <div
              key={`first-${idx}`}
              className={`${image.width} ${image.height} flex-shrink-0 mx-3`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${idx}/400/400?grayscale`
                  }}
                />
                {/* Overlay pada hover */}
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}

          {/* Second Set - Duplicate untuk seamless loop */}
          {galleryImages.map((image, idx) => (
            <div
              key={`second-${idx}`}
              className={`${image.width} ${image.height} flex-shrink-0 mx-3`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${idx + 100}/400/400?grayscale`
                  }}
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
