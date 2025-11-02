import type { Metadata } from "next"
import { getAllApps } from "@/lib/apps-data"
import AppCard from "@/components/app-card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Modded Apps - Free App Mods Download | freemods4u",
  description:
    "Explore our collection of free modded apps with premium features unlocked. Download modded Photo & Video, Health & Fitness, Music & Audio, Productivity, Education, and Weather apps.",
  keywords: "modded apps, app mods, free app mods, apk mods, unlocked apps, premium app mods",
  openGraph: {
    title: "Modded Apps - Free App Mods Download | freemods4u",
    description: "Explore our collection of free modded apps with premium features unlocked across multiple categories.",
    type: "website",
  },
}

export default function AppsPage() {
  const apps = getAllApps()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Free Modded Apps Collection
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl text-balance">
            Browse through our curated selection of free modded apps with premium features unlocked. Get premium subscriptions, unlocked features, no ads, and more across multiple categories.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

