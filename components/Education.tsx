"use client"

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="section bg-soft relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 sm:-top-28 md:-top-32 right-0 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-gradient-to-br from-primary-100/70 to-sky-100/60 blur-3xl" />
        <div className="absolute -bottom-24 sm:-bottom-28 md:-bottom-32 -left-10 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-gradient-to-tr from-rose-100/60 to-primary-100/50 blur-3xl" />
      </div>

      <div className="container-p">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Educational Qualifications</h2>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">Foundational training and specialization in Obstetrics & Gynecology.</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-7 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group relative w-full py-4 border-b border-slate-200 last:border-b-0 sm:w-auto sm:overflow-hidden sm:rounded-2xl sm:border sm:border-slate-200/70 sm:bg-white/60 sm:backdrop-blur-md sm:p-6 md:p-7 sm:h-full sm:shadow-sm sm:transition-all sm:hover:shadow-md"
          >
            <div className="hidden sm:block absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-100/50 blur-2xl" />
            </div>
            <div className="hidden sm:inline-flex mb-3 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 ring-1 ring-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"><path d="M4 8l8-4 8 4-8 4-8-4z"/><path d="M12 12v8"/></svg>
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-500">Undergraduate</div>
            <h3 className="mt-1 font-semibold text-slate-900 text-sm sm:text-base md:text-lg">M.B.B.S.</h3>
            <p className="mt-1 text-xs sm:text-sm md:text-sm text-slate-700">Government Medical College, Thiruvananthapuram (Kerala University)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative w-full py-4 border-b border-slate-200 last:border-b-0 sm:w-auto sm:overflow-hidden sm:rounded-2xl sm:border sm:border-slate-200/70 sm:bg-white/60 sm:backdrop-blur-md sm:p-6 md:p-7 sm:h-full sm:shadow-sm sm:transition-all sm:hover:shadow-md"
          >
            <div className="hidden sm:block absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-100/50 blur-2xl" />
            </div>
            <div className="hidden sm:inline-flex mb-3 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 ring-1 ring-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"><path d="M6 20V8l6-3 6 3v12"/><path d="M6 12h12"/></svg>
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-500">Postgraduate</div>
            <h3 className="mt-1 font-semibold text-slate-900 text-sm sm:text-base md:text-lg">D.N.B. (Obstetrics & Gynecology)</h3>
            <p className="mt-1 text-xs sm:text-sm md:text-sm text-slate-700">Cosmopolitan Hospital, Thiruvananthapuram (National Board of Examinations)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="group relative w-full py-4 border-b border-slate-200 last:border-b-0 sm:w-auto sm:overflow-hidden sm:rounded-2xl sm:border sm:border-slate-200/70 sm:bg-white/60 sm:backdrop-blur-md sm:p-6 md:p-7 sm:h-full sm:shadow-sm sm:transition-all sm:hover:shadow-md"
          >
            <div className="hidden sm:block absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-100/50 blur-2xl" />
            </div>
            <div className="hidden sm:inline-flex mb-3 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 ring-1 ring-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"><path d="M4 6h16"/><path d="M8 6v12l4-2 4 2V6"/></svg>
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-500">Fellowship</div>
            <h3 className="mt-1 font-semibold text-slate-900 text-sm sm:text-base md:text-lg">F.M.A.S.</h3>
            <p className="mt-1 text-xs sm:text-sm md:text-sm text-slate-700">Fellowship in Minimally Accessible Surgery – AMASI</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative w-full py-4 border-b border-slate-200 last:border-b-0 sm:w-auto sm:overflow-hidden sm:rounded-2xl sm:border sm:border-slate-200/70 sm:bg-white/60 sm:backdrop-blur-md sm:p-6 md:p-7 sm:h-full sm:shadow-sm sm:transition-all sm:hover:shadow-md"
          >
            <div className="hidden sm:block absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-100/50 blur-2xl" />
            </div>
            <div className="hidden sm:inline-flex mb-3 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 ring-1 ring-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"><path d="M4 12h16"/><path d="M12 4v16"/></svg>
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-500">Certification</div>
            <h3 className="mt-1 font-semibold text-slate-900 text-sm sm:text-base md:text-lg">Diagnostic Ultrasound Imaging</h3>
            <p className="mt-1 text-xs sm:text-sm md:text-sm text-slate-700">Obstetrics & Gynecology – Selvi School of Sonology, Chennai</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
