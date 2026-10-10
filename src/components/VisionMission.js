export default function VisionMission() {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-2 gap-8">
        {/* Visi */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Visi</h2>
          <p className="text-lg italic text-gray-700 font-semibold">
            "Menjadi Sekolah Unggul Berwawasan Lingkungan"
          </p>
        </div>

        {/* Misi */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Misi</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Menyelenggarakan pendidikan dan pelatihan dengan kurikulum yang terintegrasi dengan kelestarian lingkungan.</li>
            <li>Membentuk manusia yang beriman, beretika, dan berbudi pekerti luhur dalam bingkai keberinekaan global.</li>
            <li>Mengembangkan sarana dan iklim belajar yang adaptif untuk menghasilkan lulusan yang kompeten, mandiri, dan berdaya saing di dunia industri.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
