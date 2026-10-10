'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => pathname === path
  const isDropdownActive = (paths) => paths.some(p => pathname.startsWith(p))

  const menuItems = [
    { label: 'Beranda', href: '/', id: 'beranda' },
    {
      label: 'About',
      id: 'about',
      submenu: [
        { label: 'Konsentrasi Keahlian', href: '/konsentrasi-keahlian' },
        { label: 'Ekstrakurikuler', href: '/ekstrakurikuler' },
        { label: 'Manajemen', href: '/manajemen' },
      ],
    },
    { label: 'BKK', href: '/bkk', id: 'bkk' },
    { label: 'SAKA News', href: '/saka-news', id: 'sakanews' },
  ]

  return (
    <nav className={`fixed z-50 bg-white/20 backdrop-blur-md border border-white/30 transition-all ease-out ${
      isScrolled 
        ? 'duration-500 top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl rounded-full shadow-lg py-4' 
        : 'duration-500 top-0 left-0 right-0 w-full rounded-none shadow-md py-6'
    }`}>
      <div className="px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
              <img src="/logo.png" alt="Logo SMK" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">SMKN 1 Kawunganten</div>
            </div>
          </Link>

          {/* Menu */}
          <ul className="flex gap-8 items-center">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => item.submenu && setDropdownOpen(item.id)}
                onMouseLeave={() => item.submenu && setDropdownOpen(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={`text-sm font-medium transition relative pb-1 ${
                        isDropdownActive(item.submenu.map(s => s.href))
                          ? 'text-primary font-bold'
                          : 'text-gray-800 hover:text-primary'
                      }`}
                    >
                      {item.label}
                      {isDropdownActive(item.submenu.map(s => s.href)) && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen === item.id && (
                      <div className="absolute left-0 top-full pt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className={`block px-4 py-2.5 text-sm transition rounded-lg mx-2 mb-1 ${
                              isActive(subitem.href)
                                ? 'bg-blue-50 text-primary font-bold'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                            }`}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition relative pb-1 block ${
                      isActive(item.href)
                        ? 'text-primary font-bold'
                        : 'text-gray-800 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

