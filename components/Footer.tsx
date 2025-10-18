export default function Footer() {
  return (
    <footer className="mt-16 border-t border-primary-100 bg-primary-50">
      <div className="container-p py-12 grid gap-12 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center text-center md:text-left md:justify-items-stretch lg:text-left lg:justify-items-stretch">
        {/* Brand */}
        <div className="space-y-2 text-center md:text-left lg:text-left">
          <div className="h-serif text-xl font-semibold text-slate-900">Dr. Sruthy Jose</div>
          <p className="text-slate-600 text-sm">Consultant Obstetrician & Gynecologist</p>
        </div>

        {/* Quick Links */}
        <div className="md:justify-self-start lg:justify-self-end lg:transform lg:translate-x-2">
          <div className="text-slate-900 font-semibold mb-3">Quick Links</div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-1 gap-2 text-base text-slate-700 justify-items-center text-center sm:grid-cols-1 md:grid-cols-2 md:gap-2 md:justify-items-start md:text-left">
              <li>
                <a href="#about" className="inline-flex items-center gap-2 hover:text-primary-700 no-underline hover:no-underline transition">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="inline-flex items-center gap-2 hover:text-primary-700 no-underline hover:no-underline transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#services" className="inline-flex items-center gap-2 hover:text-primary-700 no-underline hover:no-underline transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#trainings" className="inline-flex items-center gap-2 hover:text-primary-700 no-underline hover:no-underline transition">
                  Trainings & CME
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-flex items-center gap-2 hover:text-primary-700 no-underline hover:no-underline transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-primary-700 no-underline hover:no-underline transition">
                  Back to top
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social */}
        <div className="mt-8 md:mt-0 md:justify-self-start lg:justify-self-end lg:w-fit">
          <div className="text-slate-900 font-semibold mb-3 lg:text-left">Follow</div>
          <div className="flex items-center gap-3 justify-center md:justify-start lg:justify-start">
            <a aria-label="WhatsApp" href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition">
              <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.53c-.31-.16-1.82-.9-2.1-1.01c-.28-.1-.48-.16-.67.16c-.19.31-.77 1.01-.94 1.22c-.17.21-.35.24-.66.08c-.31-.16-1.31-.48-2.49-1.52c-.92-.79-1.55-1.76-1.73-2.06c-.18-.31-.02-.48.14-.64c.14-.14.31-.35.45-.52c.15-.17.19-.28.28-.48c.09-.21.05-.39-.02-.54c-.08-.16-.67-1.6-.92-2.19c-.24-.58-.49-.51-.67-.51c-.17 0-.37-.02-.57-.02s-.52.08-.79.39c-.27.31-1.04 1.02-1.04 2.49c0 1.46 1.07 2.87 1.22 3.07c.16.21 2.11 3.23 5.11 4.53c.71.31 1.26.5 1.69.64c.71.23 1.36.2 1.87.12c.57-.08 1.82-.74 2.08-1.46c.26-.72.26-1.33.18-1.46c-.08-.13-.28-.21-.6-.37zM16 3C9.92 3 5 7.92 5 14c0 2.1.63 4.05 1.71 5.68L5 27l7.49-1.96C13.93 25.67 14.95 26 16 26c6.08 0 11-4.92 11-11S22.08 3 16 3z"/></svg>
            </a>
            <a aria-label="LinkedIn" href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:text-primary-700 hover:bg-primary-50 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.154 1.46-2.154 2.968v5.695h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.839-1.562 3.036 0 3.6 2.001 3.6 4.604v5.591z"/></svg>
            </a>
            <a aria-label="Instagram" href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-100">
        <div className="container-p py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center">
          <div>© 2025 Dr. Sruthy Jose. All Rights Reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
