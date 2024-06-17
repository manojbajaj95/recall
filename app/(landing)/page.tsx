import { Benefits } from '@/components/Benefits'
import { CallToAction } from '@/components/CallToAction'
import CheckoutButton from '@/components/CheckoutButton'
import { Faqs } from '@/components/Faqs'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Problem } from '@/components/Problem'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Problem /> */}
        <Benefits />
        <Testimonials />
        <Features />
        <CallToAction />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
