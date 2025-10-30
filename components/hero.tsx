"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownload = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cpa_click", {
        event_category: "engagement",
        event_label: "hero_download",
      })
    }
    // Redirect to CPA link
    window.location.href = "https://your-cpa-link.com/download"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-50" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,217,255,.05)_25%,rgba(0,217,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,217,255,.05)_75%,rgba(0,217,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✨ Free & Safe Download
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Play the <span className="gradient-accent bg-clip-text text-transparent">Ultimate Game</span> Today
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Join millions of players worldwide. Download instantly, no ads, no hidden fees. Experience premium
                gaming for free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-background font-bold text-lg px-8 py-6 rounded-full neon-glow transition-all duration-300 hover:scale-105"
                >
                  Download Now
                </Button>
                <Link href="/games">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6 rounded-full bg-transparent w-full sm:w-auto"
                  >
                    Browse All Games
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-foreground">4.8/5</p>
                    <p className="text-sm text-muted-foreground">2,500+ Reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <p className="font-bold text-foreground">100% Safe</p>
                    <p className="text-sm text-muted-foreground">Verified Download</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-foreground">Instant</p>
                    <p className="text-sm text-muted-foreground">1-Click Setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              <Image
                src="/gaming-phone-mockup.jpg"
                alt="Game preview on mobile device"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
