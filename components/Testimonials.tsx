"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Anitha K.',
    designation: 'New Mother',
    rating: 5,
    text:
      'Dr. Sruthy was incredibly patient and supportive throughout my pregnancy. Her guidance made a world of difference for our family.',
  },
  {
    name: 'Meera S.',
    designation: 'Patient',
    rating: 5,
    text:
      'Professional, compassionate, and highly skilled. I felt heard and cared for at every step. Highly recommend her clinical expertise.',
  },
  {
    name: 'Nisha R.',
    designation: 'Surgery Patient',
    rating: 5,
    text:
      'Excellent care and clear explanations. The laparoscopic procedure and recovery were smooth, thanks to her attentive follow-up.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[index]

  useEffect(() => {
    const id = setInterval(() => {
      next()
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section bg-soft">
      <div className="container-p">
        <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">Patient Testimonials</h2>
        <div className="mt-6 card p-6 md:p-8 mx-4 sm:mx-6 md:mx-auto md:max-w-[640px] lg:max-w-none rounded-3xl ring-1 ring-slate-200/70 bg-white">
          <div className="flex items-center justify-between mb-4">
            <button aria-label="Previous" onClick={prev} className="rounded-full border border-slate-200 p-2 hover:bg-slate-50">←</button>
            <div className="text-sm text-slate-500">{index + 1} / {testimonials.length}</div>
            <button aria-label="Next" onClick={next} className="rounded-full border border-slate-200 p-2 hover:bg-slate-50">→</button>
          </div>

          <div className="relative overflow-hidden min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-1" aria-label={`Rating: ${t.rating} out of 5`}>
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i <= (t.rating || 0) ? 'currentColor' : 'none'} className={`h-5 w-5 ${i <= (t.rating || 0) ? 'text-amber-500' : 'text-amber-300'}`}>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ))}
                </div>

                <p className="mt-3 text-base md:text-lg leading-relaxed text-slate-800 tracking-normal">“{t.text}”</p>
                <div className="mt-4">
                  <div className="text-base md:text-lg font-semibold text-slate-900">{t.name}</div>
                  {t?.designation && (
                    <div className="text-xs md:text-sm text-slate-600">{t.designation}</div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

