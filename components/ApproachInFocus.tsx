"use client"

import Image from 'next/image'

export default function ApproachInFocus() {
  return (
    <section className="section bg-soft pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 lg:pt-16 lg:pb-20 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-pastel-lavender/60 to-pastel-blue/40" />
      <div className="container-p">
        <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
          Our Approach in Focus
        </h2>

        <div className="mt-6 sm:mt-7 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <div className="group relative overflow-hidden rounded-3xl h-[340px] sm:h-[360px] md:h-[420px] lg:h-[460px] bg-white/40 backdrop-blur-md ring-1 ring-slate-200/60 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-0.5">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/60" aria-hidden />
            <Image
              src="/doctor-photos/SAN01738.JPG"
              alt="Compassionate care in practice"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[25%_center] scale-[1.06] sm:scale-[1.06] md:scale-[1.08] lg:scale-[1.08] transition-transform duration-500 ease-out group-hover:scale-[1.1]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-emerald-700">Compassionate Care</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black/70 via-black/40 to-black/0" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-7">
              <p className="h-serif text-white/95 text-[15px] sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-tight drop-shadow-md font-normal max-w-prose">Listening first, treating with empathy, and supporting every step of the way.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl h-[340px] sm:h-[360px] md:h-[420px] lg:h-[460px] bg-white/40 backdrop-blur-md ring-1 ring-slate-200/60 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-0.5">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/60" aria-hidden />
            <Image
              src="/doctor-photos/SAN01791.JPG"
              alt="Attention to detail and precision"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-primary-50/90 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-primary-700">Attention to Detail</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black/70 via-black/40 to-black/0" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-7">
              <p className="h-serif text-white/95 text-[15px] sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-tight drop-shadow-md font-normal max-w-prose">Every decision is thoughtful, precise, and centered on your well‑being.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
