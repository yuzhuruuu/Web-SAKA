// Utils untuk localStorage
export const storage = {
  // Auth
  getAuth: () => {
    if (typeof window === 'undefined') return null
    const auth = localStorage.getItem('admin_auth')
    return auth ? JSON.parse(auth) : null
  },
  
  setAuth: (isAuthenticated) => {
    if (typeof window === 'undefined') return
    localStorage.setItem('admin_auth', JSON.stringify({ 
      isAuthenticated, 
      timestamp: Date.now() 
    }))
  },
  
  clearAuth: () => {
    if (typeof window === 'undefined') return
    localStorage.removeItem('admin_auth')
  },

  // Berita
  getBerita: () => {
    if (typeof window === 'undefined') return null
    const berita = localStorage.getItem('berita_list')
    return berita ? JSON.parse(berita) : null
  },
  
  setBerita: (beritaList) => {
    if (typeof window === 'undefined') return
    localStorage.setItem('berita_list', JSON.stringify(beritaList))
  },
  
  clearBerita: () => {
    if (typeof window === 'undefined') return
    localStorage.removeItem('berita_list')
  }
}

// Default credentials (untuk demo, di production pakai backend)
export const DEFAULT_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
}
