export default function KonsentrasiKeahlian() {
  const programs = [
    {
      id: 'tkro',
      name: 'Teknik Kendaraan Ringan Otomotif (TKRO)',
      fokus: 'Perawatan berkala, diagnosis kerusakan mekanis, kelistrikan, serta perbaikan menyeluruh pada komponen kendaraan roda empat (mobil).',
      fasilitas: 'Bengkel Otomotif standar industri yang dilengkapi alat uji emisi dan scanner diagnostik modern.',
      prospek: 'Teknisi/Mekanik Mobil, Service Advisor, Operator Pabrik Otomotif, dan Wirausaha Bengkel Mandiri.',
      mitra: ['Toyota Nasmoko', 'Mitsubishi'],
      color: 'from-red-500 to-red-600',
      accentColor: 'text-red-600',
      bgColor: 'bg-red-50',
      image: '/jurusan/tkro.png',
      span: 'col-span-2'
    },
    {
      id: 'tsm',
      name: 'Teknik Sepeda Motor (TSM)',
      fokus: 'Keterampilan komprehensif sebagai mekanik profesional, mendiagnosis sistem injeksi modern, perawatan preventif, serta teknik tata kelola bengkel roda dua.',
      fasilitas: 'Laboratorium Praktik Motor yang terstandarisasi dengan instruktur yang tersertifikasi.',
      prospek: 'Mekanik Resmi Bengkel, Staff Teknisi ATPM, Modifikator, dan Entrepreneur Motor.',
      mitra: ['Astra Honda Motor (AHM)', 'Jaringan AHASS'],
      color: 'from-orange-500 to-orange-600',
      accentColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      image: '/jurusan/tsm.png'
    },
    {
      id: 'dkv',
      name: 'Desain Komunikasi Visual (DKV)',
      fokus: 'Pembuatan aset grafis komersial, fotografi studio, videografi sinematik, produksi konten kreatif untuk media sosial, serta strategi digital branding dan periklanan.',
      fasilitas: 'Laboratorium Komputer Berspesifikasi Tinggi (Creative Lab) dan Studio Fotografi Sekolah.',
      prospek: 'Graphic Designer, Content Creator, Fotografer/Videografer, UI/UX Designer Junior, dan Social Media Specialist.',
      mitra: ['Axioo Class Program', 'PT Wivi Digital Inovatif'],
      color: 'from-purple-500 to-purple-600',
      accentColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: '/jurusan/dkv.png'
    },
    {
      id: 'animasi',
      name: 'Animasi',
      fokus: 'Produksi film animasi 2D dan 3D, pembuatan konsep karakter (storyboarding), modeling, digital sculpting, rigging, hingga pengisian efek visual (VFX) dan video editing.',
      fasilitas: 'Lab Gambar (Light Box Table) dan Lab Komputer Animasi berkinerja tinggi untuk kelancaran proses rendering.',
      prospek: '3D Animator, Character Modeler, Concept Artist, Video Editor, dan Storyboard Artist di industri kreatif digital.',
      mitra: ['Lapan Mata Studio', 'Uki Studio', 'Game Lab Indonesia'],
      color: 'from-pink-500 to-pink-600',
      accentColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      image: '/jurusan/animasi.png'
    },
    {
      id: 'pplg',
      name: 'Pengembangan Perangkat Lunak dan Gim (PPLG) — Program Baru',
      fokus: 'Pemrograman aplikasi web dan mobile, penulisan kode (coding), rekayasa perangkat lunak, arsitektur basis data, serta perancangan mekanik pembuatan game.',
      fasilitas: 'Lab Pemrograman berbasis komputasi awan (Cloud) untuk menunjang praktik pembuatan web berskala industri.',
      prospek: 'Junior Web/Mobile Developer, Software Tester, Game Programmer, IT Support, dan Database Administrator.',
      mitra: ['PT Citraweb Digital Multisolusi'],
      color: 'from-blue-500 to-cyan-600',
      accentColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: '/jurusan/lab.png',
      span: 'col-span-2',
      badge: 'NEW'
    }
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Kompetensi Keahlian</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        SMK Negeri 1 Kawunganten memiliki beberapa kompetensi keahlian unggulan dan program baru untuk menjawab kebutuhan industri digital maupun manufaktur. Berikut ringkasan setiap program beserta fokus, fasilitas, prospek karier, dan mitra industri terkait.
      </p>

      <div className="grid grid-cols-2 gap-6 auto-rows-max">
        {programs.map((program) => (
          <div
            key={program.id}
            className={`${program.span || 'col-span-1'} group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100`}
          >
            {/* Image Header */}
            <div className="relative h-48 overflow-hidden bg-gray-200">
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-20 group-hover:opacity-30 transition`}></div>
              
              {program.badge && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {program.badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${program.accentColor}`}>{program.name}</h3>

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
                        className={`inline-block ${program.bgColor} ${program.accentColor} px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
