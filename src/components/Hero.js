export default function Hero() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/banner.jpg" 
          alt="Sekolah" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">SMK Negeri 1 Kawunganten</h1>
        <p className="text-2xl mb-2">Sekolah Unggul Berwawasan Lingkungan</p>
        <p className="text-lg text-gray-200">Mencetak Lulusan Berkualitas Siap Industri</p>
      </div>
    </div>
  )
}
