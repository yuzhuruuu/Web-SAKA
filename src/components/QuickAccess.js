'use client'

import Link from 'next/link'
import { FileText, Users, BookOpen } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function QuickAccess() {
  const items = [
    {
      title: 'Informasi SPMB 2026',
      desc: 'Pelajari persyaratan dan jadwal pendaftaran siswa baru',
      href: '/ppdb',
      icon: FileText
    },
    {
      title: 'Informasi Pelayanan',
      desc: 'Tim manajemen SAKA siap membantu Anda',
      href: '/manajemen',
      icon: Users
    },
    {
      title: 'Perpustakaan',
      desc: 'Akses koleksi buku dan e-library sekolah',
      href: '/perpustakaan',
      icon: BookOpen
    }
  ]

  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => {
          const IconComponent = item.icon
          return (
            <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 100}>
              <Link
                href={item.href}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
              >
                <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-primary-dark transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
