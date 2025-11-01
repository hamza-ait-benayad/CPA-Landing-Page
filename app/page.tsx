import type { Metadata } from "next"
import Hero from "@/components/hero"
import FeaturedGames from "@/components/featured-games"
import FeaturedApps from "@/components/featured-apps"
import GamePreview from "@/components/game-preview"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Free Game Download - Play Now | CPA Gaming",
  description:
    "Download our free game instantly. No ads, no hidden fees. Join thousands of players enjoying premium gaming.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedGames />
      <FeaturedApps />
      <GamePreview />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
