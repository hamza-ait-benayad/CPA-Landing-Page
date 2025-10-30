"use client"

import Link from "next/link"
import { getAllGames } from "@/lib/games-data"
import GameCard from "@/components/game-card"
import { Button } from "@/components/ui/button"

export default function FeaturedGames() {
  const games = getAllGames().slice(0, 3)

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Games</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our most popular games. Choose your favorite and start playing today.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* CTA to browse all games */}
        <div className="text-center">
          <Link href="/games">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-bold text-lg px-8 py-6 rounded-full neon-glow transition-all duration-300 hover:scale-105"
            >
              Browse All Games
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
