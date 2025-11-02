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
  title: "Free Game & App Mods - Download Modded Games & Apps | freemods4u",
  description:
    "Download free modded games and apps with premium features unlocked. Get unlimited coins, unlocked levels, no ads, and more. Safe and verified mods for Android & iOS.",
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
