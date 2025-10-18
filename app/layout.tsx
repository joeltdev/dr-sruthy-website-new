import type { Metadata } from 'next'
import './globals.css'
import { Inter, Lora } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Dr. Sruthy Jose | Obstetrician & Gynecologist in Thiruvananthapuram',
  description:
    'Specialist in Laparoscopic Surgery, High-Risk Pregnancy Care, and Women’s Health.',
  openGraph: {
    title: 'Dr. Sruthy Jose | Obstetrician & Gynecologist in Thiruvananthapuram',
    description:
      'Specialist in Laparoscopic Surgery, High-Risk Pregnancy Care, and Women’s Health.',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sruthy Jose | Obstetrician & Gynecologist',
    description:
      'Specialist in Laparoscopic Surgery, High-Risk Pregnancy Care, and Women’s Health.'
  },
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-pastel-blue via-white to-lavender-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  )
}
