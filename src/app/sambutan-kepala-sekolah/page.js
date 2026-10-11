'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import PagesLayout from '@/components/PagesLayout'

export default function SambutanKepalaSekolah() {
  return (
    <PagesLayout
      label="PROFIL SEKOLAH"
      title="Sambutan Kepala Sekolah"
      subtitle="Pesan dari kepala sekolah SMK Negeri 1 Kawunganten"
      breadcrumb={[
        { label: 'Beranda', href: '/' },
        { label: 'Tentang SAKA', href: null },
        { label: 'Sambutan Kepala', href: null }
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri - Profil Kepala Sekolah (Sticky) */}
        <div className="lg:sticky lg:top-40 h-fit">
          <ScrollReveal animation="fade-in-left" delay={100}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              {/* Foto Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                <div className="text-white text-center">
                  <img
                  src="/kepalasekolah.png"
                    alt="Foto Kepala Sekolah"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <p className="text-xs font-bold text-primary-dark mb-2">KEPALA SEKOLAH</p>
                <h3 className="text-lg font-bold text-gray-800">Agus Darmono, S.Pd., M.Pd.</h3>
                <p className="text-sm text-gray-600 mt-2">Kepala SMK Negeri 1 Kawunganten</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Kolom Kanan - Isi Sambutan */}
        <div className="lg:col-span-2">
          {/* Kotak Kutipan */}
          <ScrollReveal animation="fade-in-right" delay={100}>
            <div className="bg-blue-50 border-l-4 border-primary-dark rounded-lg p-6 mb-8">
              <div className="text-4xl text-primary-dark mb-4">"</div>
              <p className="italic text-gray-800 text-lg leading-relaxed">
                Dengan mengusung visi "Sekolah Unggul Berwawasan Lingkungan", SMK Negeri 1 Kawunganten terus melangkah maju untuk mencetak generasi lulusan yang berkarakter kuat, cerdas, terampil, dan siap menghadapi tantangan global.
              </p>
            </div>
          </ScrollReveal>

          {/* Teks Utama */}
          <ScrollReveal animation="fade-in-right" delay={200}>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Assalamu'alaikum Warahmatullahi Wabarakatuh,<br/>
                Salam sejahtera untuk kita semua,<br/>
                Selamat datang di website resmi SMK Negeri 1 Kawunganten.
              </p>

              <p>
                Puji syukur senantiasa kita panjatkan ke hadirat Allah SWT, Tuhan Yang Maha Esa, yang telah memberikan rahmat dan hidayah-Nya sehingga website resmi SMK Negeri 1 Kawunganten ini dapat terus hadir sebagai media komunikasi dan informasi bagi seluruh warga sekolah, alumni, orang tua murid, serta masyarakat luas.
              </p>

              <p>
                Di era digital dan perkembangan teknologi yang sangat pesat ini, keberadaan website sekolah menjadi hal yang sangat krusial. Website ini dirancang untuk menjadi jendela informasi mengenai profil sekolah, visi dan misi, program keahlian, prestasi yang telah diraih, serta berbagai kegiatan akademik maupun non-akademik yang berlangsung di lingkungan SMK Negeri 1 Kawunganten.
              </p>

              <p>
                Sebagai lembaga pendidikan vokasi, SMK Negeri 1 Kawunganten berkomitmen penuh untuk mencetak generasi muda yang berkarakter, mandiri, unggul, kompeten, dan siap kerja maupun berwirausaha sesuai dengan semangat SMK Bisa-Hebat. Kami terus bersinergi dengan Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA) demi menyelaraskan kurikulum agar lulusan kami memiliki daya saing yang tinggi di pasar kerja global.
              </p>

              <p>
                Kami menyadari bahwa keberhasilan pendidikan tidak lepas dari dukungan, kerja sama, dan kontribusi dari seluruh pihak—mulai dari para guru, staf tata usaha, komite sekolah, orang tua, hingga seluruh stakeholder terkait. Oleh karena itu, kami sangat terbuka menerima masukan, saran, dan kritik yang membangun demi kemajuan sekolah yang kita cintai ini.
              </p>

              <p>
                Terima kasih atas kepercayaan yang telah diberikan kepada kami. Mari bersama-sama kita bergandengan tangan untuk mengantarkan putra-putri kita menuju masa depan yang gemilang.
              </p>

              <p>
                Wabillahi taufik wal hidayah,<br/>
                Wassalamu'alaikum Warahmatullahi Wabarakatuh.
              </p>

              <p className="font-semibold pt-4">Kepala Sekolah,</p>
            </div>
          </ScrollReveal>

          {/* Divider & Buttons */}
          <ScrollReveal animation="fade-in-up" delay={300}>
            <hr className="my-8 border-gray-200" />
            
            <div className="flex gap-4 flex-wrap">
              <Link 
                href="/berita"
                className="px-6 py-3 rounded-lg font-medium transition border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
              >
                Berita Sekolah
              </Link>
              <Link 
                href="/about"
                className="px-6 py-3 rounded-lg font-medium transition border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
              >
                Hubungi Kami
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PagesLayout>
  )
}
