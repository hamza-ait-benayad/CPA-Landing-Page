"use client"

import Link from "next/link"
import { getAllApps } from "@/lib/apps-data"
import AppCard from "@/components/app-card"
import { Button } from "@/components/ui/button"

export default function FeaturedApps() {
  const apps = getAllApps().slice(0, 3)

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Modded Apps</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
            Discover our most popular modded apps with premium features unlocked. Get premium subscriptions, unlocked features, and no ads.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* CTA to browse all apps */}
        <div className="text-center">
          <Link href="/apps">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full neon-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Browse All Apps
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

