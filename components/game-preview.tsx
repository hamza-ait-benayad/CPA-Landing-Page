"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screenshots = [
  {
    id: 1,
    title: "Unlimited Coins & Resources",
    description: "Get unlimited coins, gems, and resources - no grinding needed",
    image: "/game-screenshot-1.jpg",
  },
  {
    id: 2,
    title: "All Levels Unlocked",
    description: "Access all levels and premium content from the start",
    image: "/game-screenshot-2.jpg",
  },
  {
    id: 3,
    title: "Ad-Free Experience",
    description: "Enjoy uninterrupted gameplay with no ads or popups",
    image: "/game-screenshot-3.jpg",
  },
  {
    id: 4,
    title: "Premium Features Unlocked",
    description: "Access all premium features and exclusive content for free",
    image: "/game-screenshot-4.jpg",
  },
]

export default function GamePreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Explore <span className="gradient-accent bg-clip-text text-transparent">Modded Features</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover premium modded features including unlimited resources, unlocked levels, and ad-free experience
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Left side - Current screenshot */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-muted">
                <Image
                  src={screenshots[currentIndex].image || "/placeholder.svg"}
                  alt={screenshots[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>

            {/* Right side - Feature list */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 order-1 lg:order-2">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    index === currentIndex
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 bg-muted/50"
                  }`}
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">{screenshot.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{screenshot.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="p-2.5 sm:p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={next}
              className="p-2.5 sm:p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 sm:w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
