"use client"

import Image from 'next/image'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="section bg-soft relative overflow-hidden pt-8 sm:pt-10 md:pt-12 lg:pt-1 pb-6 sm:pb-8 md:pb-12 lg:pb-3">
      {/* Faint diagonal line pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-pastel-azure to-pastel-blue"
      />
      <div className="container-p grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-primary-50/80 px-3 py-1 text-xs md:text-sm font-medium text-primary-700">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l3 7l7 3l-7 3l-3 7l-3-7l-7-3l7-3z"/></svg>
            Book your appointment today
          </div>

          <h1 className="tracking-tight leading-tight">
            <span
              className="block text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Dr. Sruthy Jose
            </span>
            <span
              className="block mt-1 text-xl md:text-2xl lg:text-3xl font-medium text-slate-700"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              DNB (OBG), FMAS
            </span>
          </h1>
          <p className="mt-4 sm:mt-8 md:mt-8 lg:mt-3 text-primary-700 font-medium">Consultant Obstetrician & Gynecologist</p>
          <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-1 text-slate-600 max-w-none lg:max-w-prose text-[15px] md:text-[17px] lg:text-[18px] lg:leading-8 font-normal">Specialist in Laparoscopic Surgery, High-Risk Pregnancy Care, and Women’s Health.</p>
          <p className="mt-4 sm:mt-2 text-slate-700 max-w-none lg:max-w-prose text-[14px] md:text-[16px] lg:text-[17px] leading-relaxed">
            Dr. Sruthy Jose is an experienced Obstetrician and Gynecologist based in Thiruvananthapuram, Kerala, with over a decade of clinical experience. She provides compassionate, comprehensive care to women at every stage of life.
          </p>

          <div className="mt-6 sm:mt-8 md:mt-7 lg:mt-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-slate-200 px-3 py-1 text-xs text-slate-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 7V3h8v4"/><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M16 13H8"/></svg>
              Mon–Sat, 9am–6pm
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-slate-200 px-3 py-1 text-xs text-slate-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Thiruvananthapuram
            </span>
          </div>

          <div className="hidden sm:mt-12 md:mt-10 lg:mt-6 sm:flex flex-wrap items-center justify-start gap-2.5">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs text-emerald-700 whitespace-nowrap">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {/* This is the new, happy/smiling face icon code */}
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2s4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              Women’s Health
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-sky-50 ring-1 ring-sky-200 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs text-sky-600 whitespace-nowrap">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16z"/><path d="M12 6v6l3 3"/></svg>
              Laparoscopy
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-sky-50 ring-1 ring-sky-200 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs text-sky-700 whitespace-nowrap">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 7c-4 0-6 3-8 9c-2-3-4-5-8-5"/><circle cx="4" cy="11" r="2"/><circle cx="20" cy="7" r="2"/></svg>
              High-Risk Pregnancy
            </span>
          </div>

          <div className="mt-6 sm:mt-12 md:mt-10 lg:mt-6 flex flex-wrap items-center justify-start gap-2.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 max-[399px]:gap-1 rounded-full bg-gradient-to-r from-primary-600 to-violet-600 text-white hover:text-white focus:text-white active:text-white visited:text-white px-6 sm:px-6 md:px-7 lg:px-8 max-[399px]:px-4 py-3 sm:py-3 md:py-3.5 lg:py-4 max-[399px]:py-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-semibold shadow-sm hover:from-primary-700 hover:to-violet-700 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-400/30 no-underline hover:no-underline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book appointment
            </a>
            <a
              href={buildWhatsAppLink('+919496369276', 'Hello, I would like to book an appointment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 max-[399px]:gap-1 rounded-full border border-emerald-600/50 bg-emerald-50 text-emerald-700 px-5 sm:px-6 md:px-6 lg:px-7 max-[399px]:px-4 py-2.5 sm:py-3 md:py-3.5 lg:py-4 max-[399px]:py-2 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold shadow-sm hover:bg-emerald-100 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 no-underline hover:no-underline"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.53c-.31-.16-1.82-.9-2.1-1.01c-.28-.1-.48-.16-.67.16c-.19.31-.77 1.01-.94 1.22c-.17.21-.35.24-.66.08c-.31-.16-1.31-.48-2.49-1.52c-.92-.79-1.55-1.76-1.73-2.06c-.18-.31-.02-.48.14-.64c.14-.14.31-.35.45-.52c.15-.17.19-.28.28-.48c.09-.21.05-.39-.02-.54c-.08-.16-.67-1.6-.92-2.19c-.24-.58-.49-.51-.67-.51c-.17 0-.37-.02-.57-.02s-.52.08-.79.39c-.27.31-1.04 1.02-1.04 2.49c0 1.46 1.07 2.87 1.22 3.07c.16.21 2.11 3.23 5.11 4.53c.71.31 1.26.5 1.69.64c.71.23 1.36.2 1.87.12c.57-.08 1.82-.74 2.08-1.46c.26-.72.26-1.33.18-1.46c-.08-.13-.28-.21-.6-.37zM16 3C9.92 3 5 7.92 5 14c0 2.1.63 4.05 1.71 5.68L5 27l7.49-1.96C13.93 25.67 14.95 26 16 26c6.08 0 11-4.92 11-11S22.08 3 16 3z"/></svg>
              WhatsApp
            </a>
          </div>

        </motion.div>

        {/* Mobile-only hero image (non-transparent, rounded, like About image) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 block md:hidden mt-4"
        >
          <div className="group relative overflow-hidden rounded-2xl h-[58vh] min-h-[400px] max-h-[560px] sm:h-[62vh] sm:min-h-[440px] sm:max-h-[600px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/60 shadow-md">
              <Image
                src="/doctor-photos/SAN01581.JPG"
                alt="Dr. Sruthy Jose"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-1 hidden md:block mt-6 lg:mt-0"
        >
          <div className="relative w-full">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute right-[-24px] md:right-[-40px] bottom-4 md:bottom-6 h-[360px] md:h-[480px] w-[360px] md:w-[480px] rounded-full bg-primary-100/25 blur-3xl" />
              <div className="absolute -right-2 sm:-right-4 md:-right-8 lg:-right-10 top-6 sm:top-8 md:top-6 lg:top-8 h-[340px] sm:h-[380px] md:h-[500px] lg:h-[560px] w-[160px] sm:w-[180px] md:w-[220px] lg:w-[260px] rounded-[120px] sm:rounded-[140px] md:rounded-[160px] lg:rounded-[180px] bg-gradient-to-b from-primary-100/20 via-primary-50/15 to-transparent blur-3xl rotate-6 sm:rotate-6 md:rotate-12 lg:rotate-12" />
              <div className="absolute -right-6 md:-right-10 top-8 md:top-10 h-56 w-56 md:h-72 md:w-72 rounded-full bg-gradient-to-br from-primary-200/50 via-pastel-azure/40 to-pastel-blue/40 blur-3xl animate-drift-slower" />
              <div className="absolute -left-6 md:-left-8 bottom-8 md:bottom-10 h-40 w-40 md:h-56 md:w-56 rounded-full bg-gradient-to-tr from-emerald-200/40 via-primary-100/40 to-cyan-100/40 blur-3xl animate-drift-slow" />
              <div className="absolute right-10 md:right-14 bottom-4 h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/30 blur-2xl animate-float-slow" />

              {/* Subtle medical icons (decorative) */}
              <div className="absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)]">
                {/* Cross */}
                <span className="absolute left-6 top-6 sm:left-8 sm:top-8 md:left-10 md:top-10 text-primary-400/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
                {/* Stethoscope */}
                <span className="absolute right-8 top-20 sm:right-10 sm:top-24 md:right-14 md:top-28 text-sky-500/25">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M8 15a6 6 0 0 0 12 0v-2"/><circle cx="20" cy="13" r="2"/></svg>
                </span>
                {/* Heartbeat */}
                <span className="absolute left-10 bottom-12 sm:left-12 sm:bottom-14 md:left-16 md:bottom-16 text-sky-400/25">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10c0-3 2.5-5 5.5-5c2 0 3.5 1 4.5 2c1-1 2.5-2 4.5-2C20.5 5 23 7 23 10c0 6-8.5 9-10.5 11C11.5 19 3 16 3 10Z"/><path d="M8 11l2 2l2-3l2 2h2"/></svg>
                </span>
                {/* Pill */}
                <span className="absolute left-1/2 top-8 -translate-x-1/2 text-emerald-500/20">
                  <svg className="w-6 h-6 md:w-8 md:h-8 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="10" height="10" rx="5"/><rect x="11" y="7" width="10" height="10" rx="5"/></svg>
                </span>
                {/* Syringe */}
                <span className="absolute right-14 bottom-10 text-sky-400/20">
                  <svg className="w-6 h-6 md:w-8 md:h-8 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2v3m-2-1h4"/><path d="M22 6l-8 8"/><path d="M16 10l-6 6l-4-4l6-6"/><path d="M3 21l3-3"/></svg>
                </span>
              </div>
            </div>
            <div className="relative z-10 aspect-[4/5] md:aspect-[3/4] w-full grid place-items-center px-2 md:px-3 pb-0 mt-3 md:mt-4 mb-[-6px] md:mb-[-8px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex items:end justify-center">
                <div className="h-[60%] md:h-[65%] w-[70%] md:w-[72%] rounded-full bg-primary-100/25 blur-3xl" />
              </div>
              <Image
                src="/doctor-photos/SAN01581.png"
                alt="Dr. Sruthy Jose portrait"
                fill
                className="object-contain object-bottom drop-shadow-xl translate-y-[10px] md:translate-y-[16px] origin-bottom scale-[1.03] md:scale-[1.08]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
