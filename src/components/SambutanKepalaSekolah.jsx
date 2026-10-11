'use client'

import Link from 'next/link'

export default function SambutanKepalaSekolah() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-12 items-center">
          {/* Kolom Kiri - Foto Kepala Sekolah */}
          <div className="col-span-1 flex justify-center animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="relative w-full max-w-xs">
              {/* Shadow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-900/5 rounded-3xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-blue-100/50 bg-white p-1">
                <div className="relative h-96 bg-gradient-to-b from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
                  <img
                    src="/kepalasekolah.png"
                    alt="Kepala Sekolah"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x400/003366/FFFFFF?text=Kepala+Sekolah'
                    }}
                  />
                  {/* Fade-out overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Sambutan */}
          <div className="col-span-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {/* Label dengan Quote Icon */}
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.063-6-5.5-6C5.823 5.031 2 8.25 2 13c0 5 3 7 7 7z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.063-6-5.5-6C15.823 5.031 12 8.25 12 13c0 5 3 7 7 7z" opacity="0.5"></path>
              </svg>
              <span className="text-xs font-bold tracking-widest text-blue-900 uppercase">
                Sambutan Kepala Sekolah
              </span>
            </div>

            {/* Teks Utama Sambutan */}
            <blockquote className="mb-8">
              <p className="text-xl italic text-slate-700 leading-relaxed font-medium">
                "Selamat datang di SMK Negeri 1 Kawunganten. Kami berkomitmen untuk mencetak generasi muda yang berkarakter, mandiri, unggul, kompeten, dan siap kerja maupun berwirausaha. Pendidikan vokasi bukan hanya tentang keterampilan, tetapi membentuk karakter dan kepribadian yang luhur untuk menghadapi tantangan global."
              </p>
            </blockquote>

            {/* Profil Singkat */}
            <div className="mb-8 pb-8 border-b border-slate-200">
              <h3 className="text-lg font-bold text-blue-900 mb-1">
                Agus Darmono, S.Pd., M.Pd.
              </h3>
              <p className="text-xs font-bold tracking-widest text-blue-900 uppercase">
                Kepala Sekolah SMK Negeri 1 Kawunganten
              </p>
            </div>

            {/* Tombol */}
            <Link
              href="/sambutan-kepala-sekolah"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <span>Baca Sambutan Lengkap</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
