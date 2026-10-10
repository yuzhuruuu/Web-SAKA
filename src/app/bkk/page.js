export default function BKK() {
  return (
    <div className="container py-12">
      <div className="bg-white p-8 rounded-lg shadow-md mb-12 border border-gray-100">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Portal Bursa Kerja Khusus (BKK)</h1>
        <p className="text-lg text-gray-600">SMK NEGERI 1 KAWUNGANTEN (SMK SAKA)</p>
        <p className="text-sm text-gray-500 mt-2">Izin Resmi Disnaker No: Kep. 560 / 222 / BKK / IX / 2017</p>
      </div>

      <p className="text-gray-700 mb-12 leading-relaxed text-lg">
        Selamat datang di Portal Informasi Terpadu Bursa Kerja Khusus (BKK) SMK Negeri 1 Kawunganten, Kabupaten Cilacap. Portal ini didedikasikan secara khusus untuk melayani siswa tingkat akhir, alumni, masyarakat umum, serta mitra Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA) dalam proses penyaluran, pelatihan, dan penyerapan tenaga kerja yang kompeten, produktif, dan berdaya saing global.
      </p>

      {/* Profil & Landasan Hukum */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Profil & Landasan Hukum</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Apa itu BKK SMK Negeri 1 Kawunganten?</h3>
            <p className="text-gray-700 leading-relaxed">
              Bursa Kerja Khusus (BKK) adalah sebuah lembaga yang dibentuk di SMK Negeri 1 Kawunganten sebagai mitra instansi pemerintah yang bertanggung jawab di bidang ketenagakerjaan. BKK berfungsi memberikan pelayanan dan informasi lowongan kerja, pelaksana pemasaran, penyaluran, dan penempatan tenaga kerja bagi alumni sekolah kami maupun lulusan SMK di wilayah sekitarnya.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Landasan Hukum Pendirian</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• UU RI No. 13 Tahun 2003 tentang Ketenagakerjaan</li>
              <li>• Peraturan Menteri Tenaga Kerja RI No. 39 Tahun 2016</li>
              <li>• Perjanjian Kerja Sama dengan Kementerian Ketenagakerjaan RI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Visi, Misi & Tujuan Operasional</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Visi BKK</h3>
            <p className="italic text-gray-700">
              "Menjadi Bursa Kerja Khusus yang profesional, tepercaya, dan unggul dalam menjembatani komparasi kompetensi alumni dengan kebutuhan riil industri global guna mewujudkan generasi yang mandiri dan berdaya saing tinggi."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Misi BKK</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>1. Peta Potensi:</strong> Pendataan dan pemetaan kompetensi siswa tingkat akhir dan alumni</li>
              <li><strong>2. Kemitraan Strategis:</strong> Memperluas jejaring kerja sama dengan industri</li>
              <li><strong>3. Pra-Kerja Edukatif:</strong> Pelatihan mental, fisik, dan bimbingan karier</li>
              <li><strong>4. Optimalisasi Penyaluran:</strong> Fasilitasi rekrutmen yang akuntabel dan transparan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Unggulan & Layanan Utama</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Program Magang & Kerja Internasional</h3>
            <p className="text-gray-700 mb-3">Penyiapan alumni untuk berkarier di luar negeri, khususnya Jepang.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Diklat Bahasa Jepang (JLPT N4 / JFT-Basic)</li>
              <li>• Sponsorship Jalur Resmi</li>
              <li>• Program Ginou Jisshusei & SSW</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Pembekalan Karier & Pembinaan</h3>
            <p className="text-gray-700 mb-3">Program pra-seleksi kerja untuk siswa tingkat akhir.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Psychotest & HRD Interview Simulation</li>
              <li>• Pendidikan Karakter & Disiplin Industri</li>
              <li>• Pelatihan Fisik & Mental</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Bursa Kerja & Rekrutmen Massal</h3>
            <p className="text-gray-700 mb-3">Rekrutmen langsung dari perusahaan mitra di sekolah.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Tes Tertulis & Tes Fisik</li>
              <li>• Wawancara Langsung</li>
              <li>• Penempatan Kerja Langsung</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Tracer Study Alumni</h3>
            <p className="text-gray-700 mb-3">Sistem pencatatan elektronik jejak karier lulusan.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Monitoring Karier Alumni</li>
              <li>• Evaluasi Relevansi Pembelajaran</li>
              <li>• Data Placement Rate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mitra Industri */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Jejaring Mitra Industri (DUDIKA) Resmi</h2>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Industri Otomotif & Manufaktur</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• PT Toyota Nasmoko</p>
              <p>• Astra Honda Motor (AHM)</p>
              <p>• PT United Tractors</p>
              <p>• PT Astra International</p>
              <p>• Mitsubishi Motors</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Teknologi & Digital Creative</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• Axioo Indonesia</p>
              <p>• PT Citraweb Digital Multisolusi</p>
              <p>• Game Lab Indonesia</p>
              <p>• Lapan Mata Studio</p>
              <p>• Uki Studio</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Retail, Perbankan & Kuliner</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• PT Solaria</p>
              <p>• PT Indomarco Prismatama</p>
              <p>• PT Alfaria Trijaya</p>
              <p>• Lembaga Keuangan Regional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Layanan Hubungan BKK (Hubungi Kami)</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-gray-800 mb-2">Sekretariat Fisik:</p>
            <p className="text-sm text-gray-700">Gedung Pusat BKK SMK Negeri 1 Kawunganten, Jl. Pramuka, Desa Gunungjaya, Kecamatan Kawunganten, Kabupaten Cilacap, Jawa Tengah (53253)</p>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-gray-800">Email Resmi BKK:</p>
              <p className="text-sm text-gray-700">bkk@smkn1kawunganten.sch.id</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">WhatsApp Hotline:</p>
              <p className="text-sm text-gray-700">+62 882-2010-9174</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Instagram:</p>
              <p className="text-sm text-gray-700">@bkksmknsaka</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
