'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { storage } from '@/utils/localStorage'
import AdminSidebar from '@/components/AdminSidebar'

export default function AdminLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide navbar and footer for admin routes
    const navbar = document.querySelector('nav')
    const footer = document.querySelector('footer')
    if (navbar) navbar.style.display = 'none'
    if (footer) footer.style.display = 'none'

    // Cleanup on unmount
    return () => {
      if (navbar) navbar.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  useEffect(() => {
    // Cek auth dari localStorage
    const auth = storage.getAuth()
    
    if (pathname === '/admin') {
      // Halaman login, jika sudah auth redirect ke dashboard
      if (auth?.isAuthenticated) {
        router.push('/admin/dashboard')
      } else {
        setIsLoading(false)
      }
    } else {
      // Halaman lain, harus auth
      if (!auth?.isAuthenticated) {
        router.push('/admin')
      } else {
        setIsAuthenticated(true)
        setIsLoading(false)
      }
    }
  }, [pathname, router])

  const handleLogout = () => {
    storage.clearAuth()
    router.push('/admin')
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Halaman login (tanpa sidebar)
  if (pathname === '/admin') {
    return <div className="min-h-screen">{children}</div>
  }

  // Halaman admin lainnya (dengan sidebar)
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar onLogout={handleLogout} />
      <main className="flex-1 lg:ml-64 p-6 lg:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
