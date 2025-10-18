"use client"

import { useEffect, useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    const body = document.body
    const html = document.documentElement
    if (mobileOpen) {
      // Add overflow guards
      body.classList.add('overflow-hidden')
      html.classList.add('overflow-hidden')
      // Freeze scroll position (prevents iOS background scroll)
      const scrollY = window.scrollY || window.pageYOffset
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
    } else {
      // Restore scroll position and styles
      const top = body.style.top
      body.classList.remove('overflow-hidden')
      html.classList.remove('overflow-hidden')
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      if (top) {
        const y = -parseInt(top || '0', 10)
        window.scrollTo(0, y)
      }
    }
    return () => {
      // Cleanup in case component unmounts while open
      const top = body.style.top
      body.classList.remove('overflow-hidden')
      html.classList.remove('overflow-hidden')
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      if (top) {
        const y = -parseInt(top || '0', 10)
        window.scrollTo(0, y)
      }
    }
  }, [mobileOpen])

  // Close menu then navigate to anchor smoothly
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    setMobileOpen(false)
    // Wait for close transition to finish before scrolling
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Also update hash for history/SEO
        history.replaceState(null, '', `#${id}`)
      } else {
        // Fallback to hash navigation
        window.location.hash = `#${id}`
      }
    }, 300)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-primary-100">
      <div className="container-p py-3 md:py-4 flex items-center justify-between gap-3 md:gap-4">
        {/* Left: Logo */}
        <div className="flex-1 min-w-0">
          <a href="#" className="h-serif font-semibold text-slate-900 text-xl md:text-2xl whitespace-nowrap no-underline hover:no-underline">
            Dr. Sruthy Jose
          </a>
        </div>
        {/* Right: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 md:gap-6 whitespace-nowrap -mx-2 px-2">
          <a href="#about" className="text-sm md:text-[15px] lg:text-base font-normal md:font-medium lg:font-semibold text-slate-700 md:text-slate-800 md:tracking-tight md:antialiased hover:text-primary-800 hover:bg-primary-100/70 active:bg-primary-200/70 px-2 md:px-3 py-1 md:py-2 rounded-md transition-colors no-underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60">About</a>
          <a href="#experience" className="text-sm md:text-[15px] lg:text-base font-normal md:font-medium lg:font-semibold text-slate-700 md:text-slate-800 md:tracking-tight md:antialiased hover:text-primary-800 hover:bg-primary-100/70 active:bg-primary-200/70 px-2 md:px-3 py-1 md:py-2 rounded-md transition-colors no-underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60">Experience</a>
          <a href="#services" className="text-sm md:text-[15px] lg:text-base font-normal md:font-medium lg:font-semibold text-slate-700 md:text-slate-800 md:tracking-tight md:antialiased hover:text-primary-800 hover:bg-primary-100/70 active:bg-primary-200/70 px-2 md:px-3 py-1 md:py-2 rounded-md transition-colors no-underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60">Services</a>
          <a href="#contact" className="text-sm md:text-[15px] lg:text-base font-normal md:font-medium lg:font-semibold text-slate-700 md:text-slate-800 md:tracking-tight md:antialiased hover:text-primary-800 hover:bg-primary-100/70 active:bg-primary-200/70 px-2 md:px-3 py-1 md:py-2 rounded-md transition-colors no-underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60">Contact</a>
        </nav>
        {/* Right: Mobile Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-3 text-slate-700 hover:bg-primary-100/70 active:bg-primary-200/70 focus:outline-none focus:ring-2 focus:ring-primary-300/60"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-[70] h-screen w-full bg-gradient-to-b from-white to-primary-50/70 transition-opacity duration-300 ease-out overscroll-y-none overflow-hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        {/* Full-screen sliding panel */}
        <div
          className={`absolute inset-0 h-full w-full bg-white/90 backdrop-blur shadow-xl transition-transform duration-300 ease-out overscroll-y-none overflow-hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="pt-5 pb-8 h-full flex flex-col">
            {/* Top bar (visual separation from site header) */}
            <div className="px-3 flex items-center justify-end border-b border-primary-100 pb-2.5">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-md p-4 text-slate-700 hover:bg-primary-100/70 active:bg-primary-200/70 focus:outline-none focus:ring-2 focus:ring-primary-300/60"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="mt-2 flex flex-col">
              <a
                onClick={(e) => handleNavClick(e, 'about')}
                href="#about"
                className="group flex items-center justify-between w-full px-6 py-5 text-2xl sm:text-3xl font-semibold text-slate-900 border-b border-slate-200 hover:text-primary-700 active:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60 transition-colors no-underline hover:no-underline"
              >
                <span>About</span>
                <svg className="h-6 w-6 text-slate-400 group-hover:text-primary-600 group-active:text-primary-700 transform transition-transform duration-200 ease-out group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a
                onClick={(e) => handleNavClick(e, 'experience')}
                href="#experience"
                className="group flex items-center justify-between w-full px-6 py-5 text-2xl sm:text-3xl font-semibold text-slate-900 border-b border-slate-200 hover:text-primary-700 active:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60 transition-colors no-underline hover:no-underline"
              >
                <span>Experience</span>
                <svg className="h-6 w-6 text-slate-400 group-hover:text-primary-600 group-active:text-primary-700 transform transition-transform duration-200 ease-out group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a
                onClick={(e) => handleNavClick(e, 'services')}
                href="#services"
                className="group flex items-center justify-between w-full px-6 py-5 text-2xl sm:text-3xl font-semibold text-slate-900 border-b border-slate-200 hover:text-primary-700 active:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60 transition-colors no-underline hover:no-underline"
              >
                <span>Services</span>
                <svg className="h-6 w-6 text-slate-400 group-hover:text-primary-600 group-active:text-primary-700 transform transition-transform duration-200 ease-out group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a
                onClick={(e) => handleNavClick(e, 'contact')}
                href="#contact"
                className="group flex items-center justify-between w-full px-6 py-5 text-2xl sm:text-3xl font-semibold text-slate-900 hover:text-primary-700 active:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60 transition-colors no-underline hover:no-underline"
              >
                <span>Contact</span>
                <svg className="h-6 w-6 text-slate-400 group-hover:text-primary-600 group-active:text-primary-700 transform transition-transform duration-200 ease-out group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a
                onClick={(e) => handleNavClick(e, 'map')}
                href="#map"
                className="group flex items-center justify-between w-full px-6 py-5 text-2xl sm:text-3xl font-semibold text-slate-900 border-t border-slate-200 hover:text-primary-700 active:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60 transition-colors no-underline hover:no-underline"
              >
                <span>Map</span>
                <svg className="h-6 w-6 text-slate-400 group-hover:text-primary-600 group-active:text-primary-700 transform transition-transform duration-200 ease-out group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </nav>

            <div className="mt-auto" />
          </div>
        </div>
      </div>
    </header>
  )
}
