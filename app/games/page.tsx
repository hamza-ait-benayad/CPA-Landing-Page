import type { Metadata } from "next"
import { getAllGames } from "@/lib/games-data"
import GameCard from "@/components/game-card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Games Gallery - Browse All Games | CPA Gaming",
  description:
    "Explore our collection of premium games. Find your next favorite game from RPG, Action, Puzzle, Adventure, Strategy, and Racing genres.",
  keywords: "game gallery, browse games, game collection, free games, premium games",
  openGraph: {
    title: "Games Gallery - Browse All Games | CPA Gaming",
    description: "Explore our collection of premium games across multiple genres.",
    type: "website",
  },
}

export default function GamesPage() {
  const games = getAllGames()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Discover Our Game Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">
            Browse through our curated selection of premium games across multiple genres. Find your next favorite game
            and start playing today.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
