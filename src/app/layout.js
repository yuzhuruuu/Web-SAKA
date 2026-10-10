import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'SMK N 1 Kawunganten',
  description: 'Website profil SMK Negeri 1 Kawunganten'
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
