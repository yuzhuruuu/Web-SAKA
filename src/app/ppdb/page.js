import Link from 'next/link'

export default function PPDB() {
  const jurusan = [
    {
      name: 'Teknik Kendaraan Ringan Otomotif (TKRO)',
      kuota: 60,
      deskripsi: 'Program keahlian untuk perawatan dan perbaikan kendaraan roda empat'
    },
    {
      name: 'Teknik Sepeda Motor (TSM)',
      kuota: 40,
      deskripsi: 'Program keahlian untuk mekanik dan perawatan kendaraan roda dua'
    },
    {
      name: 'Desain Komunikasi Visual (DKV)',
      kuota: 40,
      deskripsi: 'Program keahlian desain grafis, fotografi, dan videografi'
    },
    {
      name: 'Animasi',
      kuota: 35,
      deskripsi: 'Program keahlian produksi animasi 2D dan 3D'
    },
    {
      name: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
      kuota: 35,
      deskripsi: 'Program keahlian pemrograman web, mobile, dan game development'
    }
  ]

  const persyaratan = [
    'Lulusan SMP/MTs atau sederajat',
    'Fotokopi Ijazah dan SKL (2 lembar)',
    'Fotokopi KTP/Kartu Pelajar (2 lembar)',
    'Fotokopi Kartu Keluarga (1 lembar)',
    'Pasfoto 3x4 warna latar merah (6 lembar)',
    'Surat Keterangan Sehat dari dokter',
    'Surat rekomendasi dari sekolah asal (opsional)'
  ]

  const tahapan = [
    { no: 1, tahap: 'Pendaftaran Online', tanggal: '15 - 30 Agustus 2026' },
    { no: 2, tahap: 'Verifikasi Berkas', tanggal: '1 - 5 September 2026' },
    { no: 3, tahap: 'Tes Akademik & Psikotes', tanggal: '10 - 15 September 2026' },
    { no: 4, tahap: 'Tes Kesehatan', tanggal: '18 - 20 September 2026' },
    { no: 5, tahap: 'Pengumuman Hasil Akhir', tanggal: '25 September 2026' },
    { no: 6, tahap: 'Pendaftaran Ulang', tanggal: '27 - 30 September 2026' }
  ]

  return (
    <div className="container py-12">
      <div className="pt-8 mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Informasi PPDB 2026/2027</h1>
        <p className="text-gray-600 text-lg">
          Penerimaan Peserta Didik Baru SMK Negeri 1 Kawunganten Tahun Ajaran 2026/2027
        </p>
      </div>

      {/* Pengantar */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12 border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sambutan PPDB</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Selamat datang calon siswa baru SMK Negeri 1 Kawunganten! Kami dengan senang hati membuka kesempatan bagi Anda untuk menjadi bagian dari keluarga besar SMK Saka. Sekolah kami menawarkan berbagai program keahlian unggulan yang dirancang untuk mempersiapkan Anda menghadapi dunia kerja dan industri modern.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dengan fasilitas lengkap, kurikulum berbasis kompetensi, dan guru-guru profesional, kami siap membimbing Anda menjadi lulusan yang berkualitas, berkarakter, dan siap bersaing di era digital.
        </p>
      </section>

      {/* Program Keahlian */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Program Keahlian yang Tersedia</h2>
        <div className="grid grid-cols-1 gap-4">
          {jurusan.map((j, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{j.name}</h3>
                  <p className="text-gray-600 mb-2">{j.deskripsi}</p>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Kuota</p>
                  <p className="text-2xl font-bold text-primary">{j.kuota}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Persyaratan */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Persyaratan Pendaftaran</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <ul className="space-y-3">
            {persyaratan.map((p, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tahapan */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Tahapan Penerimaan</h2>
        <div className="grid grid-cols-1 gap-4">
          {tahapan.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-center gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {t.no}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800 mb-1">{t.tahap}</h3>
                <p className="text-sm text-gray-600">{t.tanggal}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Butuh Informasi Lebih Lanjut?</h2>
        <p className="text-gray-600 mb-6">
          Hubungi sekretariat PPDB SMK Negeri 1 Kawunganten untuk informasi selengkapnya
        </p>
        <div className="space-y-2 text-gray-700 mb-8">
          <p><strong>Telepon:</strong> 0280-5260602</p>
          <p><strong>Email:</strong> ppdb@smkn1kawunganten.sch.id</p>
          <p><strong>WhatsApp:</strong> +62 882-5783-8769</p>
        </div>
        <Link href="/" className="btn btn-primary">
          Kembali ke Beranda
        </Link>
      </section>
    </div>
  )
}
