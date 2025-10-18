"use client"

import { useState } from "react"

type ServiceKey = "antenatal" | "laparoscopy" | "wellness"

const services: Array<{
  key: ServiceKey
  title: string
  description: string
  longDescription: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}> = [
  {
    key: "antenatal",
    title: "Antenatal & Postnatal Care",
    description:
      "Comprehensive care from early pregnancy to postpartum recovery, including monitoring, birth planning, and postnatal support.",
    longDescription:
      "We support you through every trimester with regular check‑ups, ultrasounds, and evidence‑based screening. Together we create a personalized birth plan, address nutrition and comfort concerns, and prepare for delivery. After birth, we focus on recovery, breastfeeding guidance, mental wellbeing, and newborn care to ensure a smooth transition home.",
    Icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 21s-6-3.5-6-9a4 4 0 0 1 7-2.5A4 4 0 0 1 18 12c0 5.5-6 9-6 9z" />
        <circle cx="12" cy="8" r="1.8" />
      </svg>
    )
  },
  {
    key: "laparoscopy",
    title: "Laparoscopic Gynecologic Surgery",
    description:
      "Minimally invasive keyhole procedures for gynecologic conditions, designed for faster recovery and smaller scars.",
    longDescription:
      "Laparoscopic (keyhole) surgery uses tiny incisions and a camera to treat conditions such as fibroids, cysts, and endometriosis. This approach typically means less pain, fewer complications, and a quicker return to daily activities. We discuss your options clearly and tailor the procedure to your diagnosis and goals.",
    Icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 16h6" />
        <path d="M10 16l6-6" />
        <circle cx="17" cy="9" r="2" />
      </svg>
    )
  },
  {
    key: "wellness",
    title: "Women's Health & Wellness",
    description:
      "Preventive screenings, cycle and fertility guidance, menopausal care, and long‑term reproductive wellness.",
    longDescription:
      "From routine check‑ups and Pap smears to guidance on cycles, fertility, and PCOS, we focus on prevention and clarity. We also help navigate perimenopause and menopause with symptom relief and lifestyle strategies. The goal is simple: practical, personalized care that supports you at every stage.",
    Icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 20c4-3 5-6.5 5-9a5 5 0 0 0-10 0c0 2.5 1 6 5 9z" />
        <path d="M9 12c.5 1 1.5 2 3 2s2.5-1 3-2" />
      </svg>
    )
  }
]

export default function Services() {
  const [open, setOpen] = useState<ServiceKey | null>(null)

  const current = services.find((s) => s.key === open) || null

  return (
    <section id="services" className="section bg-soft relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 sm:-top-28 md:-top-32 right-0 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-gradient-to-br from-primary-100/70 to-sky-100/60 blur-3xl" />
        <div className="absolute -bottom-24 sm:-bottom-28 md:-bottom-32 -left-10 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-gradient-to-tr from-rose-100/60 to-primary-100/50 blur-3xl" />
      </div>

      <div className="container-p">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Services</h2>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">Thoughtfully designed care across key gynecologic and obstetric needs.</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-7 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {services.map(({ key, title, Icon, description }) => (
            <div key={key} className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-md p-5 sm:p-6 md:p-7 shadow-sm transition-all hover:shadow-md">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-100/50 blur-2xl" />
              </div>
              <div className="mb-3 inline-flex h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                <Icon className="h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 tracking-tight">{title}</h3>
              <p className="mt-2 text-xs sm:text-sm md:text-sm text-slate-600">{description}</p>
              <button
                type="button"
                onClick={() => setOpen(key)}
                className="mt-4 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 rounded"
                aria-haspopup="dialog"
                aria-expanded={open === key}
                aria-controls={`service-dialog-${key}`}
              >
                <span className="text-xs sm:text-sm font-medium">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {current && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <button aria-label="Close overlay" className="absolute inset-0 bg-black/30" onClick={() => setOpen(null)} />
          <div
            role="dialog"
            aria-modal="true"
            id={`service-dialog-${current.key}`}
            className="relative w-full sm:w-[540px] md:w-[640px] max-w-[92vw] rounded-2xl bg-white/90 backdrop-blur-md shadow-xl ring-1 ring-slate-200 p-5 sm:p-6 md:p-7 animate-[fadeIn_200ms_ease-out]"
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                <current.Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{current.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  {current.longDescription}
                </p>
              </div>
              <button
                type="button"
                className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                onClick={() => setOpen(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="inline-flex items-center rounded-lg bg-primary-600 text-white px-3.5 py-2 text-sm font-medium shadow-sm hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </section>
  )
}
