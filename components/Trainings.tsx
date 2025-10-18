"use client"

import { motion } from 'framer-motion'

export default function Trainings() {
  const items = [
    { title: 'Laparoscopic Workshop by I.A.G.E.', year: '2020' },
    {
      title:
        'EMOCALS (Emergency Management in Obstetrics and Life Support) – FOGSI & KFOG',
      year: '2019',
    },
    {
      title:
        'Infertility Management Updates – Kollam OG Society & ARMC Hospital',
      year: '2018',
    },
    {
      title: 'Fetal Medicine Updates – Kollam OG Society & Lifeline Hospital',
      year: '2018',
    },
    {
      title:
        'One-month Training in Gynec Oncology – Regional Cancer Centre, Trivandrum',
      year: '2016',
    },
    {
      title:
        'ADVANCES International Congress – Trivandrum OBGY Club & KJK Hospital',
      year: '2016',
      children: [
        {
          title: 'Paper Presentation: “Elderly Pregnancy and Associated Complications”',
        },
      ],
    },
  ] as {
    title: string
    year?: string
    children?: { title: string }[]
  }[]

  const extractYear = (text: string) => {
    const match = text.match(/\((\d{4})\)\s*$/)
    return match ? match[1] : null
  }

  const grouped = items.reduce((acc, item) => {
    const y = item.year ?? extractYear(item.title) ?? '—'
    if (!acc[y]) acc[y] = []
    acc[y].push(item)
    return acc
  }, {} as Record<string, typeof items>)

  const years = Object.keys(grouped)
    .filter(Boolean)
    .sort((a, b) => Number(b) - Number(a))

  return (
    <section id="trainings" className="section bg-soft">
      <div className="container-p">
        <div className="w-full max-w-3xl md:max-w-5xl mx-auto">
          <div>
            <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 text-left">Trainings & CME Participation</h2>
            <p className="mt-2 text-slate-600">Selected workshops, courses, and academic activities.</p>
          </div>

          <div className="mt-8 sm:mt-10">
            {/* Mobile: modern vertical list */}
            <div className="md:hidden">
              <div className="space-y-12 sm:space-y-14">
                {years.map((year) => (
                  <div key={year} className="pt-1">
                    <h3 className="text-xl sm:text-[22px] font-semibold tracking-tight text-slate-900">{year}</h3>
                    <div className="mt-4 sm:mt-5 border-l border-slate-200 pl-4 sm:pl-5 space-y-4 sm:space-y-5">
                      {grouped[year].map((item, idx) => {
                        const itemYear = item.year ?? extractYear(item.title)
                        const title = item.year ? item.title : (itemYear ? item.title.replace(/\s*\(\d{4}\)\s*$/, '') : item.title)
                        return (
                          <div key={`${year}-m-${idx}`} className="relative text-slate-800 text-[0.95rem] sm:text-[0.98rem] leading-relaxed">
                            <span className="absolute -left-2 sm:-left-2.5 top-2 h-2 w-2 rounded-full bg-primary-400" />
                            {title}
                            {item.children && item.children.length > 0 && (
                              <ul className="mt-2 sm:mt-2.5 ml-0 space-y-1.5 text-[0.9rem] sm:text-[0.95rem] text-slate-600">
                                {item.children.map((child, cIdx) => (
                                  <li key={cIdx} className="relative pl-4">
                                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-slate-400" />
                                    {child.title}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>

            {/* Desktop/Tablet: site-consistent soft cards */}
            <div className="hidden md:block">
              <div className="relative">
                <div aria-hidden className="pointer-events-none absolute left-[4.5rem] top-0 bottom-0 w-px bg-sky-200/70" />
                <div className="space-y-10 md:space-y-12">
                  {years.map((year, yIdx) => (
                    <div key={year} className="md:grid md:grid-cols-[9rem,1fr] md:gap-8 lg:gap-10">
                      <div className="flex md:block items-center md:items-start">
                        <div>
                          <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-primary-50/80 px-3 py-1 text-xs md:text-sm font-medium text-primary-700">
                            <BookIcon />
                            {year}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                          {grouped[year].map((item, idx) => {
                            const itemYear = item.year ?? extractYear(item.title)
                            const title = item.year ? item.title : (itemYear ? item.title.replace(/\s*\(\d{4}\)\s*$/, '') : item.title)
                            return (
                              <motion.div
                                key={`${year}-${idx}`}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: (yIdx * 0.03) + (idx * 0.04) }}
                                className="rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
                                  <div className="min-w-0">
                                    <h3 className="text-[1rem] lg:text-[1.05rem] font-semibold text-slate-900 leading-snug">
                                      {title}
                                    </h3>
                                    {item.children && item.children.length > 0 && (
                                      <ul className="mt-2 space-y-1.5 text-sm lg:text-[0.95rem] text-slate-700">
                                        {item.children.map((child, cIdx) => (
                                          <li key={cIdx}>{child.title}</li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M8 3H20V21H6.5A2.5 2.5 0 0 1 4 18.5V5.5A2.5 2.5 0 0 1 6.5 3H8" />
    </svg>
  )
}

