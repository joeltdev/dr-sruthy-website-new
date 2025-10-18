"use client"

import { motion } from 'framer-motion'

export default function AreasOfSpecialInterest() {
  const iconBaseProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5'
  } as const

  const Icons = {
    Waves: () => (
      <svg {...iconBaseProps}>
        <path d="M3 12c2.5-2 5.5-2 8 0s5.5 2 8 0" />
        <path d="M3 7c2.5-2 5.5-2 8 0s5.5 2 8 0" />
      </svg>
    ),
    ShieldHeart: () => (
      <svg {...iconBaseProps}>
        <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
        <path d="M12 16s-3-2-3-4a2 2 0 0 1 3-1.7A2 2 0 0 1 15 12c0 2-3 4-3 4z" />
      </svg>
    ),
    Scalpel: () => (
      <svg {...iconBaseProps}>
        <path d="M19 5l-8 8" />
        <path d="M10 16l-4 3h6l3-2" />
        <path d="M20 4l-1-1" />
      </svg>
    ),
    Ribbon: () => (
      <svg {...iconBaseProps}>
        <path d="M12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        <path d="M9 12l-4 7m10-7l4 7" />
      </svg>
    ),
    Users: () => (
      <svg {...iconBaseProps}>
        <path d="M16 14a4 4 0 0 1 4 4" />
        <path d="M4 18a4 4 0 0 1 4-4h4" />
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
      </svg>
    ),
  }

  const interests = [
    { label: 'Obstetric Ultrasound', Icon: Icons.Waves },
    { label: 'Vaginal Surgeries & Pelvic Floor Repairs', Icon: Icons.ShieldHeart },
    { label: 'Laparoscopic Procedures', Icon: Icons.Scalpel },
    { label: 'Gynecological Oncology', Icon: Icons.Ribbon },
    { label: 'Community Gynecology', Icon: Icons.Users },
  ]

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.06 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  return (
    <section id="special-interests" className="section bg-soft relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 sm:-top-28 md:-top-32 right-0 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-gradient-to-br from-primary-100/70 to-sky-100/60 blur-3xl" />
        <div className="absolute -bottom-24 sm:-bottom-28 md:-bottom-32 -left-10 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-gradient-to-tr from-rose-100/60 to-primary-100/50 blur-3xl" />
      </div>

      <div className="container-p">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              Areas of Special Interest
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Key focus areas that guide clinical practice and patient care.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-6 sm:mt-7 md:mt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {interests.map(({ label, Icon }) => (
              <motion.button
                key={label}
                variants={item}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex items-center justify-start gap-3 sm:gap-3.5 md:gap-4 rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-md p-4 sm:p-5 md:p-6 text-left shadow-sm transition-all hover:shadow-md focus:outline-none"
                aria-label={label}
              >
                <span className="grid place-content-center h-10 w-10 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100 transition-colors group-hover:bg-primary-100">
                  <Icon />
                </span>
                <span className="font-medium text-slate-800 text-sm sm:text-base md:text-base lg:text-lg">
                  {label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

