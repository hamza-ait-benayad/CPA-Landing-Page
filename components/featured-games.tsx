"use client"

import Link from "next/link"
import { getAllGames } from "@/lib/games-data"
import GameCard from "@/components/game-card"
import { Button } from "@/components/ui/button"

export default function FeaturedGames() {
  const games = getAllGames().slice(0, 3)

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Reward Packs</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
            Discover our most popular modded games with premium features unlocked. Get unlimited coins, unlocked levels, and no ads.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* CTA to browse all games */}
        <div className="text-center">
          <Link href="/games">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full neon-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Browse All Games
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
