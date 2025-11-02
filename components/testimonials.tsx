"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Mobile Gamer",
    content: "Best modded game I've downloaded! Unlimited coins and all features unlocked. Highly recommended!",
    rating: 5,
    avatar: "/diverse-group-avatars.png",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Casual Player",
    content: "Super easy to download and install. The mod works perfectly with unlimited resources and no ads!",
    rating: 5,
    avatar: "/pandoran-bioluminescent-forest.png",
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Gaming Enthusiast",
    content: "All premium features unlocked for free! This is exactly what I was looking for. Amazing mod!",
    rating: 5,
    avatar: "/diverse-group-avatars.png",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Competitive Player",
    content: "Safe, verified, and works perfectly. All levels unlocked from the start. This mod is fantastic!",
    rating: 5,
    avatar: "/diverse-group-avatars.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            What Players <span className="gradient-accent bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Join thousands of satisfied players worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[200px] sm:min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
                }`}
              >
                <div className="p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-border bg-background">
                  {/* Rating */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-lg sm:text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-base sm:text-lg lg:text-xl text-foreground mb-6 sm:mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 sm:w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
