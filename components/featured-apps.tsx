"use client"

import Link from "next/link"
import { getAllApps } from "@/lib/apps-data"
import AppCard from "@/components/app-card"
import { Button } from "@/components/ui/button"

export default function FeaturedApps() {
  const apps = getAllApps().slice(0, 3)

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Apps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our most popular apps. Enhance your productivity, creativity, and entertainment.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* CTA to browse all apps */}
        <div className="text-center">
          <Link href="/apps">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-bold text-lg px-8 py-6 rounded-full neon-glow transition-all duration-300 hover:scale-105"
            >
              Browse All Apps
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

