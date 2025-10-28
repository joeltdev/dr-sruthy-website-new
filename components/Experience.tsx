"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Experience() {
  return (
    <section id="experience" className="section bg-soft">
      <div className="container-p">
        <div className="w-full max-w-3xl md:max-w-4xl mx-auto">
          <div>
            <h2 className="h-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 text-left">Professional Experience</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Key roles with responsibilities and focus areas.</p>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-8 lg:grid lg:grid-cols-[1fr,18rem] lg:gap-8 lg:items-start">
            {/* Right-aligned feature image above timeline */}
            <div className="order-1 lg:order-2 hidden lg:flex justify-end">
              <Image
                src="/doctor-photos/newimag.JPG"
                alt="Dr. Sruthy Jose professional portrait"
                width={400}
                height={500}
                className="w-44 sm:w-52 md:w-60 lg:w-72 h-auto aspect-[4/5] lg:aspect-[3/4] object-cover rounded-2xl ring-1 ring-slate-200 shadow-sm mb-4 md:mb-6 lg:mb-0"
                priority={false}
              />
            </div>
            {/* Two-column list */}
            <div className="mt-6 md:mt-6 lg:mt-0 order-2 lg:order-1">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem,1fr] lg:grid-cols-[12rem,1fr] md:gap-6"
                >
                  <span className="md:hidden absolute left-3 top-1.5 bottom-0 w-px bg-slate-200" aria-hidden="true"></span>
                  <span className="md:hidden absolute left-2.5 top-0.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white shadow-sm" aria-hidden="true"></span>
                  <div className="text-[12px] sm:text-sm md:text-sm lg:text-[13px] text-slate-600 md:pt-1">Jan 2023 – Present</div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-tight">
                      <span className="block">Senior Consultant (Obstetrics & Gynaecology)</span>
                      <span className="block text-slate-700 font-normal">Cosmopolitan Hospital, Trivandrum</span>
                    </h3>
                    <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-[15px] md:text-base lg:text-base">
                      <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Provides comprehensive obstetric and gynecologic care</li>
                      <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Focus on minimally invasive gynecologic surgery</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Role 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem,1fr] lg:grid-cols-[12rem,1fr] md:gap-6"
                >
                  <span className="md:hidden absolute left-3 top-1.5 bottom-0 w-px bg-slate-200" aria-hidden="true"></span>
                  <span className="md:hidden absolute left-2.5 top-0.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white shadow-sm" aria-hidden="true"></span>
                  <div className="text-[12px] sm:text-sm md:text-sm lg:text-[13px] text-slate-600 md:pt-1">Dec 2021 – Present</div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-tight">
                      <span className="block">Consultant (Obstetrics & Gynecology)</span>
                      <span className="block text-slate-700 font-normal">Al-Arif Hospital, Trivandrum</span>
                    </h3>
                    <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-[15px] md:text-base lg:text-base">
                      <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Independent management of outpatient & inpatient obstetric and gynecological cases</li>
                      <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Expertise in high-risk pregnancy management</li>
                      <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Performs major surgeries independently: Cesarean Sections; Abdominal & Vaginal Hysterectomy; Ovarian Cystectomy, Ectopic Surgeries</li>
                      <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Skilled in major & minor laparoscopic surgeries including TLH, sterilization, and cystectomy</li>
                      <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Proficient in obstetric & gynec ultrasound investigations</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Full-width list below image on desktop */}
          <div className="mt-8 lg:mt-10">
            <div className="space-y-8">
              {/* Role 2 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem,1fr] lg:grid-cols-[12rem,1fr] md:gap-6"
              >
                <span className="md:hidden absolute left-3 top-1.5 bottom-0 w-px bg-slate-200" aria-hidden="true"></span>
                <span className="md:hidden absolute left-2.5 top-0.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white shadow-sm" aria-hidden="true"></span>
                <div className="text-[12px] sm:text-sm md:text-sm lg:text-[13px] text-slate-600 md:pt-1">July 2021 – Sept 2021</div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-tight">
                    <span className="block">Fellow in Advanced Laparoscopic Surgery</span>
                    <span className="block text-slate-700 font-normal">Dr. Niteen Ghorpade’s Inspiria Laparoscopy & IVF Centre, Shirdi</span>
                  </h3>
                  <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-[15px] md:text-base lg:text-base">
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Hands-on training in retroperitoneal dissection, total laparoscopic hysterectomy, and endosuturing</li>
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Exposure to advanced laparoscopic procedures in gynecology</li>
                  </ul>
                </div>
              </motion.div>

              {/* Role 3 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem,1fr] lg:grid-cols-[12rem,1fr] md:gap-6"
              >
                <span className="md:hidden absolute left-3 top-1.5 bottom-0 w-px bg-slate-200" aria-hidden="true"></span>
                <span className="md:hidden absolute left-2.5 top-0.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white shadow-sm" aria-hidden="true"></span>
                <div className="text-[12px] sm:text-sm md:text-sm lg:text-[13px] text-slate-600 md:pt-1">Feb 2020 – June 2021</div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-tight">
                    <span className="block">Consultant (Obs. & Gyn.)</span>
                    <span className="block text-slate-700 font-normal">KIMS Trust Hospital, Koduvally, Kozhikode</span>
                  </h3>
                  <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-[15px] md:text-base lg:text-base">
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Independent management of obstetric and gynecological cases</li>
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Surgical experience in both elective and emergency conditions</li>
                  </ul>
                </div>
              </motion.div>

              {/* Role 4 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem,1fr] lg:grid-cols-[12rem,1fr] md:gap-6"
              >
                <span className="md:hidden absolute left-3 top-1.5 bottom-0 w-px bg-slate-200" aria-hidden="true"></span>
                <span className="md:hidden absolute left-2.5 top-0.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white shadow-sm" aria-hidden="true"></span>
                <div className="text-[12px] sm:text-sm md:text-sm lg:text-[13px] text-slate-600 md:pt-1">June 2019 – Jan 2020</div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-tight">
                    <span className="block">Senior Resident (Obs. & Gyn.)</span>
                    <span className="block text-slate-700 font-normal">KMCT Medical College, Kozhikode</span>
                  </h3>
                  <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-[15px] md:text-base lg:text-base">
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Performed cesarean sections, hysterectomies, ovarian surgeries</li>
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Assisted in laparoscopic procedures and ultrasound diagnostics</li>
                  </ul>
                </div>
              </motion.div>

              {/* Role 5 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem,1fr] lg:grid-cols-[12rem,1fr] md:gap-6"
              >
                <span className="md:hidden absolute left-3 top-1.5 bottom-0 w-px bg-slate-200" aria-hidden="true"></span>
                <span className="md:hidden absolute left-2.5 top-0.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white shadow-sm" aria-hidden="true"></span>
                <div className="text-[12px] sm:text-sm md:text-sm lg:text-[13px] text-slate-600 md:pt-1">Aug 2017 – May 2019</div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-tight">
                    <span className="block">Senior Resident</span>
                    <span className="block text-slate-700 font-normal">ESIC Super Specialty Hospital, Kollam</span>
                  </h3>
                  <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-[15px] md:text-base lg:text-base">
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Managed inpatient and outpatient departments independently</li>
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Performed major and minor gynecological surgeries</li>
                  </ul>
                </div>
              </motion.div>

              {/* Role 6 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem,1fr] lg:grid-cols-[12rem,1fr] md:gap-6"
              >
                <span className="md:hidden absolute left-3 top-1.5 bottom-0 w-px bg-slate-200" aria-hidden="true"></span>
                <span className="md:hidden absolute left-2.5 top-0.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white shadow-sm" aria-hidden="true"></span>
                <div className="text-[12px] sm:text-sm md:text-sm lg:text-[13px] text-slate-600 md:pt-1">Apr 2010 – July 2012</div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-tight">
                    <span className="block">Medical Officer</span>
                    <span className="block text-slate-700 font-normal">Thaluk Hospital Thamarassery & CHC Balussery</span>
                  </h3>
                  <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-[15px] md:text-base lg:text-base">
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Managed general cases and minor surgeries</li>
                    <li className="flex gap-1.5 md:gap-2 text-slate-700"><CheckIcon />Conducted community health programs and awareness campaigns</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
