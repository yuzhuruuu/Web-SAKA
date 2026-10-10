export default function QuickAccess() {
  const items = [
    {
      title: 'Informasi SPMB 2026',
      desc: 'Pelajari persyaratan dan jadwal pendaftaran siswa baru',
      href: '/ppdb',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H5V4h14v14zm-5.04-6.71l-2.75 3.54-1.3-1.54c-.3-.36-.77-.36-1.07 0-.3.36-.3.96 0 1.32l1.98 2.36c.3.36.77.36 1.07 0L17.1 9.7c.3-.36.3-.96 0-1.32-.3-.36-.77-.36-1.07 0l-4.04 4.85z"/>
        </svg>
      )
    },
    {
      title: 'Informasi Pelayanan',
      desc: 'Tim manajemen SAKA siap membantu Anda',
      href: '/manajemen',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      title: 'Perpustakaan',
      desc: 'Akses koleksi buku dan e-library sekolah',
      href: '/perpustakaan',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2h-3V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10H1v2h22zM7 18h10v2H7z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="container py-12">
      <div className="grid grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition mx-auto text-primary">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2 text-center group-hover:text-primary transition">{item.title}</h3>
            <p className="text-sm text-gray-600 text-center">{item.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
