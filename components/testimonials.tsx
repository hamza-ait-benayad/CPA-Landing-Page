"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Mobile Gamer",
    content: "Best game I've downloaded this year! The graphics are stunning and gameplay is addictive.",
    rating: 5,
    avatar: "/diverse-group-avatars.png",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Casual Player",
    content: "Super easy to download and install. No hidden fees or ads. Highly recommended!",
    rating: 5,
    avatar: "/pandoran-bioluminescent-forest.png",
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Gaming Enthusiast",
    content: "The multiplayer mode is incredible. Playing with friends has never been this fun.",
    rating: 5,
    avatar: "/diverse-group-avatars.png",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Competitive Player",
    content: "Smooth performance, great community, and constant updates. This is the game to play.",
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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Players <span className="gradient-accent bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied players worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
                }`}
              >
                <div className="p-8 sm:p-12 rounded-2xl border border-border bg-background">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl text-foreground mb-8 leading-relaxed">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
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
