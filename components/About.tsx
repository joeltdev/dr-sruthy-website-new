"use client"

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section bg-soft py-8 md:py-10 lg:py-16 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 sm:-top-28 md:-top-32 right-0 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-gradient-to-br from-primary-50/70 to-sky-50/60 blur-3xl" />
        <div className="absolute -bottom-24 sm:-bottom-28 md:-bottom-32 -left-10 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-gradient-to-tr from-sky-50/60 to-primary-50/50 blur-3xl" />
      </div>
      <div className="container-p">
        <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 pl-0 sm:pl-6 md:pl-8">About Dr. Sruthy Jose</h2>
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Text card (left) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-6 md:p-8 h-full min-h-[380px] md:min-h-[420px] lg:min-h-[460px] flex flex-col justify-center gap-5 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden>
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-primary-100/60 blur-3xl" />
            </div>
            <span className="self-start inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 ring-1 ring-primary-200/70 shadow-sm px-3 py-1.5 text-xs font-medium text-primary-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l3 7l7 3l-7 3l-3 7l-3-7l-7-3l7-3z"/></svg>
              Personalized Women’s Care
            </span>
            <p className="text-slate-700 text-[15px] md:text-base leading-7">
              Dr. Sruthy Jose serves as a Senior Consultant in the Department of Obstetrics and Gynaecology at Cosmopolitan Hospital, Trivandrum. She manages both morning and evening OPD sessions and handles a wide spectrum of minor and major gynaecological cases.
            </p>
            <p className="text-slate-700 text-[15px] md:text-base leading-7">
              She specializes in advanced laparoscopic surgeries, both major and minor, including Total Laparoscopic Hysterectomy. In addition to her clinical practice, Dr. Sruthy Jose is actively involved in DNB postgraduate training, conducting clinical instruction and lectures for medical trainees.
            </p>
            <ul className="mt-1 grid sm:grid-cols-2 gap-2.5 clear-both">
              <li className="inline-flex items-center gap-2 text-slate-700 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200/70">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 7c-4 0-6 3-8 9c-2-3-4-5-8-5"/><circle cx="4" cy="11" r="2"/><circle cx="20" cy="7" r="2"/></svg>
                </span>
                High‑risk pregnancy care
              </li>
              <li className="inline-flex items-center gap-2 text-slate-700 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700 ring-1 ring-sky-200/70">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16z"/><path d="M12 6v6l3 3"/></svg>
                </span>
                Laparoscopic gynecologic surgery
              </li>
              <li className="inline-flex items-center gap-2 text-slate-700 text-sm">
               <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-200/70">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* This path creates the upward-curving (happy) mouth */}
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2s4-2 4-2"/> 
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </span>
                Adolescent to menopause care
              </li>
              <li className="inline-flex items-center gap-2 text-slate-700 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 ring-1 ring-amber-200/70">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
                </span>
                Evidence‑based, patient‑centric approach
              </li>
            </ul>
          </div>

          {/* Image card (right) */}
          <div className="group relative overflow-hidden rounded-3xl h-full min-h-[380px] md:min-h-[420px] lg:min-h-[460px] shadow-md ring-1 ring-black/5">
            <div className="relative w-full h-full rounded-3xl overflow-hidden ring-1 ring-white/70 transition-colors">
              <Image
                src="/doctor-photos/SAN01647 (2).jpg"
                alt="Dr. Sruthy Jose"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
