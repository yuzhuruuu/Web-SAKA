export default function About() {
  return (
    <div className="container py-12">
      <div className="pt-8 mb-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Profile SMK Negeri 1 Kawunganten</h1>
        <p className="text-gray-600 text-lg">SMK SAKA - Sekolah Unggul Berwawasan Lingkungan</p>
      </div>

      {/* Profil Sekolah */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Profil Sekolah</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            SMK Negeri 1 Kawunganten (SMK SAKA) adalah sekolah menengah kejuruan yang berlokasi di Desa Gunungjaya, Kecamatan Kawunganten, Kabupaten Cilacap, Jawa Tengah. Sekolah ini didirikan dengan visi untuk menghadirkan pendidikan vokasi berkualitas tinggi yang relevan dengan kebutuhan industri dan dunia kerja modern.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sebagai lembaga pendidikan vokasi, SMK Negeri 1 Kawunganten berkomitmen penuh untuk mencetak generasi muda yang berkarakter, mandiri, unggul, kompeten, dan siap kerja maupun berwirausaha sesuai dengan semangat SMK Bisa-Hebat.
          </p>
        </div>
      </section>

      {/* Sejarah Singkat */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Singkat</h2>
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Pendirian Sekolah</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              SMK Negeri 1 Kawunganten didirikan secara resmi pada tahun 2010. Berdirinya sekolah ini dilatarbelakangi oleh kebutuhan masyarakat di wilayah Cilacap Barat, khususnya Kecamatan Kawunganten dan sekitarnya, akan adanya lembaga pendidikan vokasi negeri yang berkualitas dan terjangkau.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sejak awal berdiri, sekolah yang akrab disapa dengan julukan "SMK SAKA" ini menempati lokasi strategis di Jalan Pramuka, Desa Bojong, Kecamatan Kawunganten, Kabupaten Cilacap. Kehadiran sekolah ini mengukir sejarah tersendiri sebagai salah satu SMK Negeri termuda di Kabupaten Cilacap.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Perkembangan dan Capaian</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Meskipun menyandang status sebagai sekolah yang relatif muda, SMK Negeri 1 Kawunganten menunjukkan perkembangan yang sangat pesat. Mulai dari pembangunan infrastruktur gedung, penambahan fasilitas ruang praktik/bengkel standar industri, hingga peningkatan kuantitas dan kualitas tenaga pendidik secara berkelanjutan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Berkat konsistensi dalam menjaga mutu pendidikan, komitmen terhadap lingkungan hidup, serta jalinan kemitraan yang kuat dengan berbagai Dunia Usaha dan Dunia Industri (DUDIKA), sekolah ini berhasil meraih status Akreditasi A. Tidak hanya itu, pada tahun 2024, SMK Negeri 1 Kawunganten resmi ditetapkan sebagai SMK Pusat Keunggulan (PK), sebuah pengakuan bergengsi dari Kemendikbudristek atas komitmen sekolah dalam menghasilkan lulusan vokasi yang berdaya saing tinggi.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Evolusi Program Keahlian</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Untuk menjawab kebutuhan pasar kerja yang dinamis, SMK Negeri 1 Kawunganten terus memperluas pilihan kompetensi keahliannya. Dari yang semula berfokus pada bidang otomotif dan multimedia, saat ini sekolah telah memiliki konsentrasi keahlian unggulan:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>1. Teknik Kendaraan Ringan Otomotif (TKRO)</li>
              <li>2. Teknik Sepeda Motor (TSM)</li>
              <li>3. Desain Komunikasi Visual (DKV)</li>
              <li>4. Animasi</li>
              <li>5. Pengembangan Perangkat Lunak dan Gim (PPLG / RPL)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Kini, dengan mengusung visi "Sekolah Unggul Berwawasan Lingkungan" dan slogan "Tiada Hari Tanpa Prestasi", SMK Negeri 1 Kawunganten terus melangkah maju untuk mencetak generasi lulusan yang berkarakter kuat, cerdas, terampil, dan siap menghadapi tantangan global.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Visi dan Misi</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-2xl text-primary mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed italic text-lg">
              "Menjadi Sekolah Unggul Berwawasan Lingkungan"
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-2xl text-primary mb-4">Misi</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Menyelenggarakan pendidikan dengan kurikulum yang terintegrasi dengan lingkungan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Membentuk manusia yang beriman, beretika, dan berbudi pekerti luhur dalam keberanekaan.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tagline & Visi Resmi</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-3">Tagline Utama</h3>
            <p className="text-lg font-semibold text-primary mb-2">Sekolah Unggul Berwawasan Lingkungan</p>
            <p className="text-gray-700">Komitmen kami untuk menjadi sekolah yang unggul dalam akademik, karakter, dan kepedulian terhadap lingkungan sekitar.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-3">Motto Sekolah</h3>
            <p className="text-lg font-semibold text-primary mb-2">SMK Saka Jaya</p>
            <p className="text-gray-700">Semangat mencapai kejayaan bersama melalui dedikasi, profesionalisme, dan inovasi berkelanjutan.</p>
          </div>
        </div>
      </section>

      {/* Informasi Sekolah */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Informasi Sekolah</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Status Sekolah</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-800">Jenis:</p>
                <p className="text-gray-700">Sekolah Menengah Kejuruan (SMK) Negeri</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Bentuk Pendidikan:</p>
                <p className="text-gray-700">Pendidikan Vokasi</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Kurikulum:</p>
                <p className="text-gray-700">Kurikulum Merdeka</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Akreditasi:</p>
                <p className="text-gray-700">A (Sangat Baik)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Fasilitas Utama</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Laboratorium Komputer Multimedia</li>
              <li>✓ Bengkel Otomotif Standar Industri</li>
              <li>✓ Studio Fotografi & Desain Grafis</li>
              <li>✓ Perpustakaan Digital</li>
              <li>✓ Aula & Ruang Serbaguna</li>
              <li>✓ Fasilitas Olahraga Lengkap</li>
            </ul>
          </div>
        </div>
      </section>

            {/* Alamat */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Alamat Sekolah</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-800">Lokasi:</p>
              <p className="text-gray-700">Jalan Pramuka, Desa Gunungjaya, Kecamatan Kawunganten, Kabupaten Cilacap, Jawa Tengah 53253</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Telepon:</p>
              <p className="text-gray-700">0280-5260602</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email:</p>
              <p className="text-gray-700">smksaka@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Website:</p>
              <p className="text-gray-700">https://smkn1kawunganten.sch.id</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
