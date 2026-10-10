export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Tentang Sekolah */}
          <div>
            <h4 className="font-bold text-lg mb-4">SMK N 1 Kawunganten</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sekolah Menengah Kejuruan Negeri yang berkomitmen menghasilkan lulusan berkualitas siap industri.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>Telepon:</strong> 0280-5260602</p>
              <p><strong>Email:</strong> smksaka@gmail.com</p>
              <p><strong>BKK Email:</strong> bkk@smkn1kawunganten.sch.id</p>
              <p><strong>BKK WhatsApp:</strong> +62 882-2010-9174</p>
            </div>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="font-bold text-lg mb-4">Alamat</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Jl. Pramuka, Desa Gunungjaya<br />
              Kecamatan Kawunganten<br />
              Kabupaten Cilacap, Jawa Tengah 53253<br />
              Indonesia
            </p>
          </div>

          {/* Media Sosial */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Kami</h4>
            <div className="space-y-2 text-sm">
              <p><a href="#" className="text-gray-300 hover:text-white transition">Facebook: @smksaka</a></p>
              <p><a href="#" className="text-gray-300 hover:text-white transition">Instagram: @smkn1kawunganten</a></p>
              <p><a href="#" className="text-gray-300 hover:text-white transition">YouTube: SMK SAKA</a></p>
              <p><a href="#" className="text-gray-300 hover:text-white transition">TikTok: @smksaka</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2026 SMK N 1 Kawunganten TIM IT SAKA. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              NPSN: 20360491 | Status: Negeri
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
