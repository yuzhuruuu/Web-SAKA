export default function SchoolInfo() {
  const dataBasic = [
    { label: 'Nama Sekolah', value: 'SMK Negeri 1 Kawunganten' },
    { label: 'NPSN', value: '20360491' },
    { label: 'Status Sekolah', value: 'Negeri' },
    { label: 'Kepala Sekolah', value: 'Mukholid Anshori' },
    { label: 'Kurikulum', value: 'SMK Merdeka' },
    { label: 'Waktu Belajar', value: 'Sehari Penuh / 5 Hari seminggu' },
  ]

  const facilities = [
    'Ruang Kelas Berbasis Teori & Digital',
    'Bengkel Praktik Otomotif Resmi (Standar Industri TKRO & TSM)',
    'Laboratorium Komputer Multimedia & PPLG Terintegrasi',
    'Studio Animasi Khusus Praktik Kerja Produksi',
    'Perpustakaan Sekolah Terpadu',
    'Fasilitas Olahraga & Area Hijau Ramah Lingkungan',
  ]

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Informasi Sekolah</h2>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Data Dasar */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Data Dasar</h3>
          <div className="space-y-4">
            {dataBasic.map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-3">
                <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                <p className="text-gray-800 font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fasilitas */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Fasilitas Utama</h3>
          <div className="space-y-3">
            {facilities.map((facility, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <p className="text-gray-700">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
