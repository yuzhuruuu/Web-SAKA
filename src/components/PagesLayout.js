'use client'

import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export default function PagesLayout({ 
  title, 
  subtitle, 
  label = '',
  children,
  breadcrumb = []
}) {
  return (
    <div className="min-h-screen">
      {/* Page Header Section - Seragam dengan Navbar saat scrolled */}
      <section className="w-full bg-primary-dark text-white pt-32 pb-16 px-6 m-0">
        <div className="max-w-6xl mx-auto">
          {label && (
            <ScrollReveal animation="fade-in-up" delay={0}>
              <div className="text-sm font-bold text-blue-200 mb-4">+ {label}</div>
            </ScrollReveal>
          )}
          
          {title && (
            <ScrollReveal animation="fade-in-up" delay={100}>
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
            </ScrollReveal>
          )}
          
          {subtitle && (
            <ScrollReveal animation="fade-in-up" delay={200}>
              <p className="text-xl text-blue-100 mb-6">{subtitle}</p>
            </ScrollReveal>
          )}

          {/* Breadcrumb */}
          {breadcrumb.length > 0 && (
            <ScrollReveal animation="fade-in-up" delay={300}>
              <div className="text-sm text-blue-200 flex items-center gap-2">
                {breadcrumb.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.href ? (
                      <a href={item.href} className="hover:text-white transition">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-blue-100">{item.label}</span>
                    )}
                    {index < breadcrumb.length - 1 && <span>/</span>}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full px-6 py-16 bg-gray-50 m-0">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </section>
    </div>
  )
}
