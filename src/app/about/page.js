'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import PagesLayout from '@/components/PagesLayout'

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [formData, setFormData] = useState({
    kategori: '',
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    pesan: '',
    verifikasi: ''
  })

  const slides = [
    {
      type: 'visi',
      title: 'Visi',
      content: 'Menjadi Sekolah Unggul Berwawasan Lingkungan'
    },
    {
      type: 'misi',
      title: 'Misi',
      content: 'Menyelenggarakan pendidikan dengan kurikulum yang terintegrasi dengan lingkungan, serta membentuk manusia yang beriman, beretika, dan berbudi pekerti luhur dalam keberanekaan.'
    }
  ]

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      kategori: '',
      nama: '',
      email: '',
      telepon: '',
      subjek: '',
      pesan: '',
      verifikasi: ''
    })
    alert('Pesan Anda telah dikirim. Terima kasih!')
  }

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <PagesLayout
      label="PROFIL SEKOLAH"
      title="Profile SMK Negeri 1 Kawunganten"
      subtitle="SMK SAKA - Sekolah Unggul Berwawasan Lingkungan"
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Tentang', href: null }
      ]}
    >
      {/* Profil Sekolah */}
      <section className="mb-12">
        <ScrollReveal animation="fade-in-up" delay={100}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Profil Sekolah</h2>
        </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={200}>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                SMK Negeri 1 Kawunganten (SMK SAKA) adalah sekolah menengah kejuruan yang berlokasi di Desa Gunungjaya, Kecamatan Kawunganten, Kabupaten Cilacap, Jawa Tengah. Sekolah ini didirikan dengan visi untuk menghadirkan pendidikan vokasi berkualitas tinggi yang relevan dengan kebutuhan industri dan dunia kerja modern.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sebagai lembaga pendidikan vokasi, SMK Negeri 1 Kawunganten berkomitmen penuh untuk mencetak generasi muda yang berkarakter, mandiri, unggul, kompeten, dan siap kerja maupun berwirausaha sesuai dengan semangat SMK Bisa-Hebat.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Sejarah Singkat */}
        <section className="mb-12">
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Singkat</h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal animation="fade-in-up" delay={150}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="font-bold text-xl text-gray-800 mb-4">Pendirian Sekolah</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SMK Negeri 1 Kawunganten didirikan secara resmi pada tahun 2010. Berdirinya sekolah ini dilatarbelakangi oleh kebutuhan masyarakat di wilayah Cilacap Barat, khususnya Kecamatan Kawunganten dan sekitarnya, akan adanya lembaga pendidikan vokasi negeri yang berkualitas dan terjangkau.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sejak awal berdiri, sekolah yang akrab disapa dengan julukan "SMK SAKA" ini menempati lokasi strategis di Jalan Pramuka, Desa Bojong, Kecamatan Kawunganten, Kabupaten Cilacap. Kehadiran sekolah ini mengukir sejarah tersendiri sebagai salah satu SMK Negeri termuda di Kabupaten Cilacap.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="font-bold text-xl text-gray-800 mb-4">Perkembangan dan Capaian</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Meskipun menyandang status sebagai sekolah yang relatif muda, SMK Negeri 1 Kawunganten menunjukkan perkembangan yang sangat pesat. Mulai dari pembangunan infrastruktur gedung, penambahan fasilitas ruang praktik/bengkel standar industri, hingga peningkatan kuantitas dan kualitas tenaga pendidik secara berkelanjutan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Berkat konsistensi dalam menjaga mutu pendidikan, komitmen terhadap lingkungan hidup, serta jalinan kemitraan yang kuat dengan berbagai Dunia Usaha dan Dunia Industri (DUDIKA), sekolah ini berhasil meraih status Akreditasi A. Tidak hanya itu, pada tahun 2024, SMK Negeri 1 Kawunganten resmi ditetapkan sebagai SMK Pusat Keunggulan (PK), sebuah pengakuan bergengsi dari Kemendikbudristek atas komitmen sekolah dalam menghasilkan lulusan vokasi yang berdaya saing tinggi.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={250}>
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
            </ScrollReveal>
          </div>
        </section>

        {/* Visi & Misi Carousel */}
        <section className="mb-12">
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Visi dan Misi</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={200}>
            <div className="flex items-center justify-center gap-6">
              {/* Tombol Kiri */}
              <button
                onClick={prevSlide}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-dark text-white flex items-center justify-center hover:shadow-lg transition transform hover:scale-110"
              >
                &#8249;
              </button>

              {/* Slide */}
              <div className="flex-1 bg-white p-12 rounded-xl shadow-md border border-gray-100 min-h-64 flex flex-col items-center justify-center text-center">
                <div className="transition-all duration-500">
                  <h3 className="text-3xl font-bold text-primary-dark mb-6">
                    {slides[activeSlide].title}
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed italic">
                    "{slides[activeSlide].content}"
                  </p>
                </div>
              </div>

              {/* Tombol Kanan */}
              <button
                onClick={nextSlide}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-dark text-white flex items-center justify-center hover:shadow-lg transition transform hover:scale-110"
              >
                &#8250;
              </button>
            </div>

            {/* Indikator Slide */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    idx === activeSlide ? 'bg-primary-dark' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Status Sekolah & Fasilitas */}
        <section className="mb-12">
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Informasi Sekolah</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={150}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Status Sekolah</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Jenis Sekolah</p>
                    <p className="text-gray-700">Sekolah Menengah Kejuruan (SMK) Negeri</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Bentuk Pendidikan</p>
                    <p className="text-gray-700">Pendidikan Vokasi</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Kurikulum</p>
                    <p className="text-gray-700">Kurikulum Merdeka</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Akreditasi</p>
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
          </ScrollReveal>
        </section>

        {/* Kontak & Form - 2 Kolom */}
        <section className="mb-12">
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Kolom Kiri 40% - Kontak & Maps */}
            <div className="lg:col-span-2">
              {/* Card Kontak */}
              <ScrollReveal animation="fade-in-left" delay={150}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-6">Informasi Kontak</h3>
                  
                  <div className="space-y-4">
                    {/* Alamat */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-dark" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Alamat</p>
                        <p className="text-gray-700 text-sm">Jl. Pramuka, Desa Gunungjaya, Kec. Kawunganten, Kab. Cilacap, Jawa Tengah 53253</p>
                      </div>
                    </div>

                    {/* Telepon */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Telepon</p>
                        <p className="text-gray-700 text-sm">0280-5260602</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Email</p>
                        <p className="text-gray-700 text-sm">smkn1kawunganten@sch.id</p>
                      </div>
                    </div>

                    {/* Website */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Website</p>
                        <p className="text-gray-700 text-sm">https://smkn1kawunganten.sch.id</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Google Maps Embed */}
              <ScrollReveal animation="fade-in-left" delay={250}>
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.7382388850033!2d108.92718617500316!3d-7.603439392411569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e657199d789e077%3A0x38243c9c398bdee2!2sSMK%20Negeri%201%20Kawunganten!5e0!3m2!1sid!2sid!4v1791703716163!5m2!1sid!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Kolom Kanan 60% - Form */}
            <div className="lg:col-span-3">
              <ScrollReveal animation="fade-in-right" delay={150}>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Kirim Pesan</h3>
                  <p className="text-sm text-gray-600 mb-6">Silakan isi formulir di bawah untuk mengirim pesan kepada kami</p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Kategori */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Kategori Pesan</label>
                      <select
                        name="kategori"
                        value={formData.kategori}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="informasi">Informasi</option>
                        <option value="saran">Saran & Masukan</option>
                        <option value="pengaduan">Pengaduan</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>

                    {/* Nama */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleFormChange}
                        required
                        placeholder="Masukkan nama lengkap"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="Masukkan email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                      />
                    </div>

                    {/* Telepon */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Nomor Telepon</label>
                      <input
                        type="tel"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleFormChange}
                        placeholder="Masukkan nomor telepon"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                      />
                    </div>

                    {/* Subjek */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Subjek</label>
                      <input
                        type="text"
                        name="subjek"
                        value={formData.subjek}
                        onChange={handleFormChange}
                        required
                        placeholder="Masukkan subjek"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                      />
                    </div>

                    {/* Pesan */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Pesan</label>
                      <textarea
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleFormChange}
                        required
                        placeholder="Masukkan pesan Anda"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark resize-none"
                      />
                    </div>

                    {/* Verifikasi */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Kode Verifikasi (Ketik: SMKSAKA)</label>
                      <input
                        type="text"
                        name="verifikasi"
                        value={formData.verifikasi}
                        onChange={handleFormChange}
                        required
                        placeholder="Masukkan kode verifikasi"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                      />
                    </div>

                    {/* Tombol Kirim */}
                    <button
                      type="submit"
                      className="w-full bg-primary-dark text-white py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-[1.02]"
                    >
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </PagesLayout>
  )
}
