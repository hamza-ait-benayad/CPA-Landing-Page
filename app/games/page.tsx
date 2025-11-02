import type { Metadata } from "next"
import { getAllGames } from "@/lib/games-data"
import GameCard from "@/components/game-card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Modded Games - Free Game Mods Download | freemods4u",
  description:
    "Explore our collection of free modded games with premium features unlocked. Download modded RPG, Action, Puzzle, Adventure, Strategy, and Racing games.",
  keywords: "modded games, game mods, free game mods, apk mods, unlocked games, premium game mods",
  openGraph: {
    title: "Modded Games - Free Game Mods Download | freemods4u",
    description: "Explore our collection of free modded games with premium features unlocked across multiple genres.",
    type: "website",
  },
}

export default function GamesPage() {
  const games = getAllGames()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Free Modded Games Collection
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl text-balance">
            Browse through our curated selection of free modded games with premium features unlocked. Get unlimited coins, unlocked levels, no ads, and more across multiple genres.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
