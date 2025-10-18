"use client"

import { buildWhatsAppLink } from '@/lib/whatsapp'

const WHATSAPP_NUMBER = '+919496369276' // placeholder can be updated

export default function FloatingWhatsApp() {
  const url = buildWhatsAppLink(WHATSAPP_NUMBER, 'Hello Doctor, I would like to book an appointment.')
  return (
    <a
      href={url}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.48.04.2 5.33.2 11.92c0 2.1.55 4.14 1.59 5.94L0 24l6.3-1.64a11.77 11.77 0 0 0 5.76 1.49h.05c6.58 0 11.94-5.36 11.99-11.94a11.9 11.9 0 0 0-3.58-8.43ZM12.11 21.3h-.04a9.42 9.42 0 0 1-4.8-1.31l-.34-.2-3.74.97.99-3.65-.22-.37a9.42 9.42 0 0 1-1.4-4.98c0-5.2 4.24-9.45 9.47-9.47 2.53 0 4.91.99 6.7 2.78 1.78 1.79 2.76 4.17 2.75 6.7-.03 5.2-4.28 9.43-9.57 9.53Zm5.5-7.05c-.3-.15-1.77-.86-2.05-.95-.27-.1-.47-.15-.66.15-.19.3-.76.95-.93 1.15-.17.2-.34.22-.64.08-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.19 0-.49.07-.75.37-.26.3-1 1-1 2.43 0 1.43 1.03 2.8 1.18 2.99.15.2 2.04 3.12 4.95 4.38.69.3 1.23.47 1.64.6.69.22 1.32.19 1.82.12.55-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34Z"/>
      </svg>
    </a>
  )
}
