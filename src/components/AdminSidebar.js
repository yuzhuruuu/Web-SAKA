'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Newspaper, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function AdminSidebar({ onLogout }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Newspaper, label: 'Kelola Berita', href: '/admin/berita' },
  ]

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-30 bg-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white transition-all duration-300 z-20 ${
          isOpen ? 'w-64' : 'w-0 lg:w-20'
        }`}
      >
        <div className={`flex flex-col h-full ${isOpen ? 'p-6' : 'p-0 lg:p-4'}`}>
          {/* Logo */}
          <div className={`mb-8 ${isOpen ? '' : 'hidden lg:block text-center'}`}>
            <h1 className={`font-bold ${isOpen ? 'text-2xl' : 'text-xs'}`}>
              {isOpen ? 'Admin Panel' : 'AP'}
            </h1>
            {isOpen && <p className="text-sm text-gray-400">SMK Negeri 1 Kwt</p>}
          </div>

          {/* Menu */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  } ${isOpen ? '' : 'justify-center'}`}
                >
                  <Icon size={20} />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <button
            onClick={onLogout}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors ${
              isOpen ? '' : 'justify-center'
            }`}
          >
            <LogOut size={20} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
