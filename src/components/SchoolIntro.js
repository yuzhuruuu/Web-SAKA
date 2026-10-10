import Link from 'next/link'

export default function SchoolIntro() {
  return (
    <section className="container py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">SMK N 1 Kawunganten</h1>
        <p className="text-xl text-gray-600 mb-8">Selamat datang di website resmi SMK N 1 Kawunganten</p>
        <div className="flex gap-4 justify-center">
          <Link href="/ppdb" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-medium">
            Info PPDB 2026
          </Link>
        </div>
      </div>
    </section>
  )
}
