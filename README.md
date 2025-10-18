# Dr. Sruthy Jose — Portfolio & Booking Website

A modern, responsive, and elegant portfolio and booking website for **Dr. Sruthy Jose, DNB (OBG), FMAS** — Consultant Obstetrician & Gynecologist.

Built with **Next.js (App Router, TypeScript)**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack
- Next.js 14 (TypeScript, App Router)
- Tailwind CSS
- Framer Motion
- Google Fonts (Inter, Lora)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 to view.

## Project Structure
- `app/`
  - `layout.tsx` — Global layout, SEO metadata, fonts
  - `page.tsx` — Homepage assembling all sections
  - `globals.css` — Tailwind base and custom styles
  - `icon.svg` — App icon (favicon)
- `components/`
  - `Header.tsx` — Top bar with quick WhatsApp form
  - `Hero.tsx` — Hero with doctor image and intro
  - `About.tsx` — Education, experience, trainings, interests
  - `Testimonials.tsx` — Patient testimonials carousel
  - `Contact.tsx` — Address, phones, email, form, and map
  - `Footer.tsx` — Footer with links and socials
  - `FloatingWhatsApp.tsx` — Floating WA chat button
- `lib/whatsapp.ts` — Helper to build WhatsApp deep link
- `tailwind.config.ts` — Tailwind theme (pastel palette)
- `next.config.ts` — Remote image domains

## Customization

- Update WhatsApp number(s):
  - `components/Header.tsx` — `WHATSAPP_NUMBER = '+91XXXXXXXXXX'`
  - `components/FloatingWhatsApp.tsx` — `WHATSAPP_NUMBER = '+919496369276'`
- Replace hero image URL in `components/Hero.tsx` with your own image or local asset.
- Update email and additional contact info in `components/Contact.tsx`.
- Add/replace trainings & CME items in `components/About.tsx`.
- Update social links in `components/Footer.tsx`.

## SEO
- Title: “Dr. Sruthy Jose | Obstetrician & Gynecologist in Thiruvananthapuram”
- Description: “Specialist in Laparoscopic Surgery, High-Risk Pregnancy Care, and Women’s Health.”

These are configured in `app/layout.tsx` (`export const metadata`).

## Deployment
Build and start:
```bash
npm run build
npm start
```

Deploy easily on Vercel/Netlify. If using custom domain, configure DNS and project settings accordingly.

## License
Private project — all rights reserved.
