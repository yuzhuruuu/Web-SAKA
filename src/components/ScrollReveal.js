'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  duration = 400,
  once = true 
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay sebelum trigger animasi
          const timer = setTimeout(() => {
            setIsVisible(true)
          }, delay)

          // Jika once=true, lepas observer setelah animasi trigger
          if (once) {
            observer.unobserve(entry.target)
          }

          return () => clearTimeout(timer)
        } else if (!once) {
          // Jika once=false, reset animasi saat keluar viewport
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, once])

  const animationClasses = {
    'fade-in-up': 'animate-fade-in animate-slide-up',
    'fade-in-left': 'animate-fade-in animate-slide-left',
    'fade-in-right': 'animate-fade-in animate-slide-right',
    'scale-in': 'animate-scale-in',
    'fade-in': 'animate-fade-in',
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
      style={{
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}
