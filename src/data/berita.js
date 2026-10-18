// Default berita list
const defaultBeritaList = [
  {
    id: '1',
    judul: '1000 Domain Gratis untuk Jurusan Baru',
    tanggal: '10 Oktober 2026',
    ringkasan: 'Program kerjasama dengan PT Citraweb menyediakan 1000 domain gratis untuk siswa jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).',
    gambar: '/news/domain.png',
    isi: 'Sebagai bagian dari komitmen pengembangan infrastruktur digital, SMK Negeri 1 Kawunganten menjalin kerjasama dengan PT Citraweb Digital Multisolusi untuk memberikan 1000 domain gratis kepada seluruh siswa jurusan PPLG. Program ini bertujuan untuk mendukung praktik pembuatan website dan aplikasi web berskala industri. Setiap siswa akan mendapatkan 1 domain gratis yang dapat digunakan selama 1 tahun akademik untuk mendeploy proyek-proyek pembelajaran mereka.'
  },
  {
    id: '2',
    judul: 'Juara Utama Video Grafi',
    tanggal: '28 September 2026',
    ringkasan: 'Tim DKV dan Animasi SMK Negeri 1 Kawunganten meraih juara pertama dalam kompetisi video grafis tingkat Provinsi.',
    gambar: '/news/juara.png',
    isi: 'Prestasi gemilang diraih oleh tim Desain Komunikasi Visual dan Animasi SMK Negeri 1 Kawunganten dalam kompetisi video grafis tingkat Provinsi Jawa Tengah yang diselenggarakan di Kota Semarang. Tim yang terdiri dari siswa-siswi program keahlian DKV dan Animasi berhasil mengalahkan 18 sekolah kompetitor lainnya dengan karya visual yang kreatif dan inovatif. Penghargaan ini membuktikan komitmen sekolah dalam mengembangkan bakat siswa di bidang desain dan kreativitas digital.'
  },
  {
    id: '3',
    judul: 'Sinkronisasi Jurusan Baru',
    tanggal: '15 September 2026',
    ringkasan: 'Kurikulum jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) disinkronisasi dengan standar industri nasional dan kebutuhan dunia kerja.',
    gambar: '/news/sinkronisasi.png',
    isi: 'Dalam upaya memastikan kualitas pembelajaran yang relevan dengan kebutuhan industri, SMK Negeri 1 Kawunganten melakukan sinkronisasi kurikulum jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) dengan standar industri terkini. Kolaborasi intensif dilakukan dengan PT Citraweb Digital Multisolusi dan praktisi teknologi informasi untuk memastikan setiap kompetensi yang diajarkan selaras dengan permintaan dunia kerja. Hasil sinkronisasi ini diharapkan menghasilkan lulusan yang lebih siap dan kompeten.'
  },
  {
    id: '4',
    judul: 'Peluncuran Laboratorium Komputer Multimedia Terbaru',
    tanggal: '1 September 2026',
    ringkasan: 'Sekolah meluncurkan laboratorium komputer multimedia dengan peralatan dan teknologi terkini untuk mendukung pembelajaran praktis siswa.',
    gambar: '/news/lab.png',
    isi: 'Laboratorium komputer multimedia terbaru telah diresmikan oleh Kepala Sekolah Mukholid Anshori beserta stakeholder sekolah. Fasilitas ini dilengkapi dengan 30 unit komputer gaming grade dengan spesifikasi tinggi, software profesional desain grafis (Adobe Creative Cloud), editing video (DaVinci Resolve), dan tools animasi 3D (Blender, Maya). Lab ini akan digunakan untuk praktik siswa program keahlian Desain Komunikasi Visual dan Animasi. Investasi sebesar ratusan juta rupiah ini menunjukkan komitmen sekolah terhadap kualitas pendidikan praktis yang relevan industri.'
  },
  {
    id: '5',
    judul: 'Juara Paskibra Tingkat Kabupaten',
    tanggal: '20 Agustus 2026',
    ringkasan: 'Pasukan Pengibar Bendera (Paskibra) SMK Negeri 1 Kawunganten berhasil meraih juara pertama dalam kompetisi tingkat kabupaten.',
    gambar: '/news/lomba.png',
    isi: 'Dengan dedikasi dan latihan intensif selama berbulan-bulan, Paskibra SMK Negeri 1 Kawunganten berhasil merebut gelar juara pertama dalam kompetisi Paskibra tingkat Kabupaten Cilacap. Tim yang terdiri dari 16 peserta ini menampilkan gerakan yang presisi, sinkron sempurna, dan penuh semangat nasionalisme. Kemenangan ini merupakan hasil dari pembinaan yang intensif oleh pembina ekstrakurikuler dan dedikasi tinggi dari seluruh anggota tim. Prestasi ini menjadi kebanggaan bagi sekolah dan membuka peluang untuk berkompetisi di tingkat provinsi.'
  },
  {
    id: '6',
    judul: 'Kerjasama Industri Manufaktur',
    tanggal: '5 Agustus 2026',
    ringkasan: 'Siswa program keahlian Otomotif melakukan kunjungan industri ke fasilitas manufaktur terkemuka untuk memperluas wawasan praktis.',
    gambar: '/news/kerjasama.png',
    isi: 'Sebanyak 120 siswa dari program keahlian Teknik Kendaraan Ringan Otomotif (TKRO) dan Teknik Sepeda Motor (TSM) melakukan kunjungan industri ke fasilitas manufaktur PT Toyota Nasmoko dan Astra Honda Motor. Dalam kunjungan ini, siswa mendapatkan pemahaman mendalam tentang proses produksi, quality control, teknologi terkini dalam industri otomotif, serta peluang karir di industri. Kegiatan ini menjadi bagian penting dari kurikulum untuk mempersiapkan siswa menghadapi dunia kerja yang sesungguhnya dan membangun networking dengan industri mitra.'
  }
]

// Function untuk get berita dari localStorage atau default
export function getBeritaList() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('berita_list')
    if (stored) {
      return JSON.parse(stored)
    }
  }
  return defaultBeritaList
}

// Export default berita untuk compatibility
export const beritaList = defaultBeritaList
