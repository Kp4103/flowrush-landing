import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import ServicesSlider from '@/components/ServicesSlider'
import WhiteLabel from '@/components/WhiteLabel'
import Process from '@/components/Process'
import TeamExtension from '@/components/TeamExtension'
import TrustReasons from '@/components/TrustReasons'
import FAQ from '@/components/FAQ'
import GlobalConnectivity from '@/components/GlobalConnectivity'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyChoose />
      <ServicesSlider />
      <WhiteLabel />
      <Process />
      <TeamExtension />
      <TrustReasons />
      <FAQ />
      <GlobalConnectivity />
      <Footer />
    </main>
  )
}
