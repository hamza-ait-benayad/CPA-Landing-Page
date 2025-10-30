"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screenshots = [
  {
    id: 1,
    title: "Stunning Graphics",
    description: "Experience breathtaking visuals and immersive gameplay",
    image: "/game-screenshot-1.jpg",
  },
  {
    id: 2,
    title: "Endless Levels",
    description: "Hundreds of challenging levels to master",
    image: "/game-screenshot-2.jpg",
  },
  {
    id: 3,
    title: "Multiplayer Mode",
    description: "Compete with friends and players worldwide",
    image: "/game-screenshot-3.jpg",
  },
  {
    id: 4,
    title: "Daily Rewards",
    description: "Earn rewards and unlock exclusive content",
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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Explore the <span className="gradient-accent bg-clip-text text-transparent">Game Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our game the most downloaded in its category
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left side - Current screenshot */}
            <div className="lg:col-span-2">
              <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden border border-border bg-muted">
                <Image
                  src={screenshots[currentIndex].image || "/placeholder.svg"}
                  alt={screenshots[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>

            {/* Right side - Feature list */}
            <div className="space-y-4">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    index === currentIndex
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 bg-muted/50"
                  }`}
                >
                  <h3 className="font-bold text-foreground mb-1">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
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
