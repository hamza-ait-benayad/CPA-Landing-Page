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

  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-screen flex items-center justify-center overflow-hidden bg-background pt-12 pb-12 sm:pt-20 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-50" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,217,255,.05)_25%,rgba(0,217,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,217,255,.05)_75%,rgba(0,217,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} text-center lg:text-left`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
                  ✨ Free & Safe Download
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
                Free <span className="gradient-accent bg-clip-text text-transparent">Game & App Mods</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Download free modded games and apps with premium features unlocked. Get unlimited coins, unlocked levels, no ads, and more. All mods are safe, verified, and completely free.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <Link href="/games" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-background font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full neon-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    Browse All Games
                  </Button>
                </Link>
                <Link href="/apps" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full bg-transparent w-full sm:w-auto"
                  >
                    Browse All Apps
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 sm:pt-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base">4.8/5</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">2,500+ Reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">🔒</span>
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base">100% Safe</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Verified Download</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base">Instant</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">1-Click Setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} order-first lg:order-last`}
          >
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              <Image
                src="/hero_1.png"
                alt="Game preview on mobile device"
                fill 
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
