'use client'

import PagesLayout from '@/components/PagesLayout'
import ScrollReveal from '@/components/ScrollReveal'

export default function KonsentrasiKeahlian() {
  const pplgProgram = {
    id: 'pplg',
    name: 'Pengembangan Perangkat Lunak dan Gim (PPLG) — Program Baru',
    fokus: 'Pemrograman aplikasi web dan mobile, penulisan kode (coding), rekayasa perangkat lunak, arsitektur basis data, serta perancangan mekanik pembuatan game.',
    fasilitas: 'Lab Pemrograman berbasis komputasi awan (Cloud) untuk menunjang praktik pembuatan web berskala industri.',
    prospek: 'Junior Web/Mobile Developer, Software Tester, Game Programmer, IT Support, dan Database Administrator.',
    mitra: ['PT Citraweb Digital Multisolusi'],
    image: '/jurusan/lab.png',
    badge: 'NEW'
  }

  const otherPrograms = [
    {
      id: 'tkro',
      name: 'Teknik Kendaraan Ringan Otomotif (TKRO)',
      fokus: 'Perawatan berkala, diagnosis kerusakan mekanis, kelistrikan, serta perbaikan menyeluruh pada komponen kendaraan roda empat (mobil).',
      fasilitas: 'Bengkel Otomotif standar industri yang dilengkapi alat uji emisi dan scanner diagnostik modern.',
      prospek: 'Teknisi/Mekanik Mobil, Service Advisor, Operator Pabrik Otomotif, dan Wirausaha Bengkel Mandiri.',
      mitra: ['Toyota Nasmoko', 'Mitsubishi'],
      image: '/jurusan/tkro.png'
    },
    {
      id: 'tsm',
      name: 'Teknik Sepeda Motor (TSM)',
      fokus: 'Keterampilan komprehensif sebagai mekanik profesional, mendiagnosis sistem injeksi modern, perawatan preventif, serta teknik tata kelola bengkel roda dua.',
      fasilitas: 'Laboratorium Praktik Motor yang terstandarisasi dengan instruktur yang tersertifikasi.',
      prospek: 'Mekanik Resmi Bengkel, Staff Teknisi ATPM, Modifikator, dan Entrepreneur Motor.',
      mitra: ['Astra Honda Motor (AHM)', 'Jaringan AHASS'],
      image: '/jurusan/tsm.png'
    },
    {
      id: 'dkv',
      name: 'Desain Komunikasi Visual (DKV)',
      fokus: 'Pembuatan aset grafis komersial, fotografi studio, videografi sinematik, produksi konten kreatif untuk media sosial, serta strategi digital branding dan periklanan.',
      fasilitas: 'Laboratorium Komputer Berspesifikasi Tinggi (Creative Lab) dan Studio Fotografi Sekolah.',
      prospek: 'Graphic Designer, Content Creator, Fotografer/Videografer, UI/UX Designer Junior, dan Social Media Specialist.',
      mitra: ['Axioo Class Program', 'PT Wivi Digital Inovatif'],
      image: '/jurusan/dkv.png'
    },
    {
      id: 'animasi',
      name: 'Animasi',
      fokus: 'Produksi film animasi 2D dan 3D, pembuatan konsep karakter (storyboarding), modeling, digital sculpting, rigging, hingga pengisian efek visual (VFX) dan video editing.',
      fasilitas: 'Lab Gambar (Light Box Table) dan Lab Komputer Animasi berkinerja tinggi untuk kelancaran proses rendering.',
      prospek: '3D Animator, Character Modeler, Concept Artist, Video Editor, dan Storyboard Artist di industri kreatif digital.',
      mitra: ['Lapan Mata Studio', 'Uki Studio', 'Game Lab Indonesia'],
      image: '/jurusan/animasi.png'
    }
  ]

  const ProgramCard = ({ program, delay }) => (
    <ScrollReveal animation="fade-in-up" delay={delay}>
      <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-primary-dark opacity-20 group-hover:opacity-30 transition"></div>
          
          {program.badge && (
            <div className="absolute top-4 right-4 bg-primary-dark text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {program.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-primary-dark">{program.name}</h3>

          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-800">Fokus</p>
              <p>{program.fokus}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Fasilitas Unggulan</p>
              <p>{program.fasilitas}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Prospek Karier</p>
              <p>{program.prospek}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-2">Mitra Industri</p>
              <div className="flex flex-wrap gap-2">
                {program.mitra.map((m, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-blue-50 text-primary-dark px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )

  return (
    <PagesLayout
      label="PROGRAM KEAHLIAN"
      title="Kompetensi Keahlian"
      subtitle="Program keahlian unggulan dan baru untuk menjawab kebutuhan industri"
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Tentang SAKA', href: null },
        { label: 'Konsentrasi Keahlian', href: null }
      ]}
    >
      {/* PPLG - Full Width */}
      <div className="mb-8">
        <ProgramCard program={pplgProgram} delay={0} />
      </div>

      {/* Other Programs - 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherPrograms.map((program, idx) => (
          <ProgramCard key={program.id} program={program} delay={idx * 100} />
        ))}
      </div>
    </PagesLayout>
  )
}
