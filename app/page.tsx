import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Trainings from '@/components/Trainings'
import AreasOfSpecialInterest from '@/components/AreasOfSpecialInterest'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ApproachInFocus from '@/components/ApproachInFocus'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Trainings />
      <AreasOfSpecialInterest />
      <Services />
      <ApproachInFocus />
      <Contact />
      <Footer />
    </main>
  )
}
