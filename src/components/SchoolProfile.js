export default function SchoolProfile() {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Profil Sekolah</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SMK Negeri 1 Kawunganten adalah sekolah menengah kejuruan negeri yang berlokasi di wilayah strategis Kecamatan Kawunganten, Kabupaten Cilacap, Jawa Tengah. Didirikan secara resmi pada 5 Juni 2010, sekolah ini terus bertransformasi menjadi pusat pendidikan vokasi unggulan yang melahirkan lulusan berkompeten, berkarakter, serta siap menghadapi dinamika dunia kerja dan industri modern.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Saat ini, SMK Negeri 1 Kawunganten menerapkan Kurikulum Merdeka untuk memastikan seluruh proses pembelajaran bersifat adaptif dan berbasis proyek riil (project-based learning).
          </p>
        </div>

        {/* Images Sidebar */}
        <div className="flex flex-col gap-4">
          <img src="/gedung.png" alt="Gedung SMK" className="w-full h-48 object-cover rounded-xl shadow-md" />
          <img src="/lab.png" alt="Laboratorium" className="w-full h-48 object-cover rounded-xl shadow-md" />
        </div>
      </div>
    </section>
  )
}
