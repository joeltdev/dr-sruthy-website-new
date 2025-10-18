"use client"

import { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') || '').toString().trim()
    const phone = (data.get('phone') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()
    const composed = `Hello Doctor,\nI would like to book an appointment.\n\nHere are my details:\nName: ${name}\nPhone: ${phone}${message ? `\nMessage: ${message}` : ''}\n\nPlease let me know the available slots. Thank you.`
    const link = buildWhatsAppLink('+919496369276', composed)
    window.open(link, '_blank')
  }
  return (
    <section id="contact" className="section bg-soft relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 sm:-top-28 md:-top-32 right-0 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-gradient-to-br from-primary-100/90 to-sky-100/80 blur-3xl" />
        <div className="absolute -bottom-24 sm:-bottom-28 md:-bottom-32 -left-10 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-gradient-to-tr from-rose-100/85 to-primary-100/75 blur-3xl" />
      </div>
      <div className="container-p grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 items-stretch">
        {/* Info card (left) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white ring-1 ring-slate-900/5 p-6 sm:p-7 md:p-8 h-full shadow-md transition-all md:rounded-2xl md:border md:border-slate-200/70 md:bg-white/80 md:backdrop-blur-md md:shadow-sm md:hover:shadow-md"
        >
          <h2 className="h-serif text-xl sm:text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Get in touch</h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">Reach out for appointments, consultations, or general queries.</p>

          <div className="mt-5 grid gap-3 text-[15px] md:text-base">
            <div className="inline-flex items-center gap-3 py-3 text-slate-700">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <p>
                Puthentharayil House, Janatha Road, <span className="whitespace-nowrap">Kalady, Karamana P.O.</span>, Thiruvananthapuram, Kerala – <span className="whitespace-nowrap">695 002</span>
              </p>
            </div>

            <div className="inline-flex items-center gap-3 py-3 text-slate-700">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-700 ring-1 ring-sky-200/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.12a2 2 0 0 1 2.11-.45c.8.27 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <p>+91 94963 69276 / +91 97473 99276</p>
            </div>

            <div className="inline-flex items-center gap-3 py-3 text-slate-700">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-violet-700 ring-1 ring-violet-200/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="m22 6l-10 7L2 6"/></svg>
              </span>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a href={buildWhatsAppLink('+919496369276', 'Hello Doctor, I would like to book an appointment.')} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-emerald-600/50 bg-emerald-50 text-emerald-700 px-5 py-3 sm:px-6 sm:py-3.5 text-[16px] sm:text-[17px] font-medium hover:bg-emerald-100 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-emerald-500/20 no-underline">
              <svg width="18" height="18" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.53c-.31-.16-1.82-.9-2.1-1.01c-.28-.1-.48-.16-.67.16c-.19.31-.77 1.01-.94 1.22c-.17.21-.35.24-.66.08c-.31-.16-1.31-.48-2.49-1.52c-.92-.79-1.55-1.76-1.73-2.06c-.18-.31-.02-.48.14-.64c.14-.14.31-.35.45-.52c.15-.17.19-.28.28-.48c.09-.21.05-.39-.02-.54c-.08-.16-.67-1.6-.92-2.19c-.24-.58-.49-.51-.67-.51c-.17 0-.37-.02-.57-.02s-.52.08-.79.39c-.27.31-1.04 1.02-1.04 2.49c0 1.46 1.07 2.87 1.22 3.07c.16.21 2.11 3.23 5.11 4.53c.71.31 1.26.5 1.69.64c.71.23 1.36.2 1.87.12c.57-.08 1.82-.74 2.08-1.46c.26-.72.26-1.33.18-1.46c-.08-.13-.28-.21-.6-.37zM16 3C9.92 3 5 7.92 5 14c0 2.1.63 4.05 1.71 5.68L5 27l7.49-1.96C13.93 25.67 14.95 26 16 26c6.08 0 11-4.92 11-11S22.08 3 16 3z"/></svg>
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Form card (right) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl bg-white ring-1 ring-slate-900/5 p-6 sm:p-7 md:p-8 h-full shadow-md transition-all md:rounded-2xl md:border md:border-slate-200/70 md:bg-white/80 md:backdrop-blur-md md:shadow-sm"
        >
          <h3 className="h-serif text-xl sm:text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Get Appointment</h3>
          <p className="mt-1.5 text-emerald-800 text-sm bg-emerald-50 ring-1 ring-emerald-200/70 rounded-md px-3 py-2">After you submit this form, WhatsApp will open to send your appointment request to the doctor.</p>
          <form className="relative space-y-5 mt-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <div className="relative group">
                <span className="pointer-events-none absolute left-5 sm:left-5 top-1/2 -translate-y-1/2 text-slate-800 z-10">
                  <svg className="w-5 h-5 drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 1-4-4H8a4 4 0 0 1-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  className="peer w-full rounded-full pl-14 sm:pl-14 pr-5 py-4 text-[16px] text-slate-900 placeholder-slate-500/90 bg-white ring-1 ring-slate-200/80 shadow-md transition-all duration-200 focus:bg-white focus:ring-sky-200 focus:shadow-[0_8px_30px_rgba(2,132,199,0.12)] outline-none md:bg-slate-50 md:ring-transparent md:shadow-sm md:focus:ring-0"
                  placeholder="Your name"
                  aria-label="Your name"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="relative group">
                <span className="pointer-events-none absolute left-5 sm:left-5 top-1/2 -translate-y-1/2 text-slate-800 z-10">
                  <svg className="w-5 h-5 drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.12a2 2 0 0 1 2.11-.45c.8.27 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <input
                  id="c-phone"
                  name="phone"
                  type="tel"
                  required
                  className="peer w-full rounded-full pl-14 sm:pl-14 pr-5 py-4 text-[16px] text-slate-900 placeholder-slate-500/90 bg-white ring-1 ring-slate-200/80 shadow-md transition-all duration-200 focus:bg-white focus:ring-sky-200 focus:shadow-[0_8px_30px_rgba(2,132,199,0.12)] outline-none md:bg-slate-50 md:ring-transparent md:shadow-sm md:focus:ring-0"
                  placeholder="Phone number"
                  aria-label="Phone"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="relative group">
                <span className="pointer-events-none absolute left-5 sm:left-5 top-3.5 text-slate-800 z-10">
                  <svg className="w-5 h-5 drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </span>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  className="peer w-full rounded-2xl pl-14 sm:pl-14 pr-5 py-4 text-[16px] text-slate-900 placeholder-slate-500/90 bg-white ring-1 ring-slate-200/80 shadow-md transition-all duration-200 focus:bg-white focus:ring-sky-200 focus:shadow-[0_8px_30px_rgba(2,132,199,0.12)] outline-none min-h-[140px] md:bg-slate-50 md:ring-transparent md:shadow-sm md:focus:ring-0"
                  placeholder="Message"
                  aria-label="Message"
                />
              </div>
              <p className="text-xs text-slate-500">Your details are safe with us. We’ll get back to you shortly.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-7 py-4 sm:px-8 sm:py-4 text-[16px] sm:text-[17px] font-semibold shadow-md hover:bg-slate-800 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-400/25 md:shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <path d="M9 16l2 2l4-4"/>
                </svg>
                Get appointment
              </button>
            </div>
          </form>
        </motion.div>

        {/* Map card (full width below) */}
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-mt-24 md:scroll-mt-28 rounded-3xl bg-transparent ring-0 shadow-none overflow-hidden h-[420px] md:h-[360px] md:col-span-2 lg:col-span-2 md:rounded-2xl md:bg-white md:border md:border-slate-200/70 md:ring-0 md:shadow-sm"
        >
          <div className="w-full h-full relative">
            {/* Mobile-only top bar */}
            <div className="absolute top-3 left-3 z-10 block md:hidden pointer-events-none">
              <div className="rounded-full overflow-hidden bg-white border border-slate-200 shadow-md px-5 py-3 flex items-center gap-3 w-max min-w-[260px] sm:min-w-[300px] pointer-events-auto">
                <div className="inline-flex items-center gap-2 text-slate-700 shrink-0">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-200/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="text-[13px] font-medium">Clinic location</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Thiruvananthapuram%2C%20Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3.5 py-1.5 text-[12px] font-semibold shadow-sm hover:bg-slate-800 active:translate-y-[1px] active:scale-[0.99] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400/30 no-underline shrink-0"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  Open
                </a>
              </div>
            </div>
            <iframe
              title="Map of Trivandrum"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.281077294518!2d76.9366!3d8.5241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf9b6dc3b8b%3A0x9eb2a5d1a5b2a37!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
            />
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
