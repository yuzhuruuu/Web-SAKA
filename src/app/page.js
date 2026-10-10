import YouTubeHero from '@/components/YouTubeHero'
import SchoolIntro from '@/components/SchoolIntro'
import QuickAccess from '@/components/QuickAccess'
import BeritaCard from '@/components/BeritaCard'
import { beritaList } from '@/data/berita'
import Link from 'next/link'

export default function Home() {
  const beritaTerbaru = beritaList.slice(0, 3)

  return (
    <>
      {/* YouTube Hero */}
      <YouTubeHero />

      {/* School Intro */}
      <SchoolIntro />

      {/* Quick Access */}
      <QuickAccess />

      {/* Sambutan Kepala Sekolah */}
      <section className="container py-12">
        <div className="flex gap-6 items-start">
          {/* Card Sambutan */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sambutan Kepala SMK Negeri 1 Kawunganten</h2>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
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

              <p className="font-semibold mt-6">Kepala SMK Negeri 1 Kawunganten</p>
            </div>
          </div>

          {/* Foto Sekolah */}
          <div className="flex flex-col gap-4 flex-shrink-0">
            <img 
              src="/gedung.png" 
              alt="Gedung SMK Negeri 1 Kawunganten" 
              className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-100"
            />
            <img 
              src="/kelas.png" 
              alt="Ruang Kelas SMK Negeri 1 Kawunganten" 
              className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-100"
            />
            <img 
              src="/depan.png" 
              alt="Depan Sekolah SMK Negeri 1 Kawunganten" 
              className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-100"
            />
                        <img 
              src="/lab.png" 
              alt="Laboratorium SMK Negeri 1 Kawunganten" 
              className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Berita Terbaru</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {beritaTerbaru.map((berita) => (
            <BeritaCard
              key={berita.id}
              id={berita.id}
              judul={berita.judul}
              tanggal={berita.tanggal}
              ringkasan={berita.ringkasan}
              gambar={berita.gambar}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/berita" className="btn btn-primary">
            Lihat Semua Berita
          </Link>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="container py-12 text-center">
        <Link 
          href="/ppdb"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition font-bold text-lg shadow-md hover:shadow-lg"
        >
          PPDB 2026 - Daftar Sekarang
        </Link>
      </section>
    </>
  )
}
