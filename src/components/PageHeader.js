'use client'

import ScrollReveal from '@/components/ScrollReveal'

export default function PageHeader({ 
  title, 
  subtitle, 
  label = '',
  children 
}) {
  return (
    <div className="w-full bg-primary-dark text-white pt-32 pb-16 px-6 m-0">
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
            <p className="text-xl text-blue-100">{subtitle}</p>
          </ScrollReveal>
        )}

        {children && (
          <ScrollReveal animation="fade-in-up" delay={300}>
            {children}
          </ScrollReveal>
        )}
      </div>
    </div>
  )
}
