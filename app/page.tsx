import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Stats } from '@/components/sections/stats'
import { Integrations } from '@/components/sections/integrations'
import { CTA } from '@/components/sections/cta'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
