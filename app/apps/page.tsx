import type { Metadata } from "next"
import { getAllApps } from "@/lib/apps-data"
import AppCard from "@/components/app-card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Apps Gallery - Browse All Apps | CPA Gaming",
  description:
    "Explore our collection of premium apps. Find your next favorite app from Photo & Video, Health & Fitness, Music & Audio, Productivity, Education, and Weather categories.",
  keywords: "app gallery, browse apps, app collection, free apps, premium apps",
  openGraph: {
    title: "Apps Gallery - Browse All Apps | CPA Gaming",
    description: "Explore our collection of premium apps across multiple categories.",
    type: "website",
  },
}

export default function AppsPage() {
  const apps = getAllApps()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Discover Our App Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">
            Browse through our curated selection of premium apps across multiple categories. Enhance your productivity,
            creativity, and entertainment.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

