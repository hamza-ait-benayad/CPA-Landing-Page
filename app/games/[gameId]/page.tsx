import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, Download, Share2, Heart } from "lucide-react"
import { getGameById } from "@/lib/games-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface GameDetailsPageProps {
  params: Promise<{
    gameId: string
  }>
}

export async function generateMetadata({ params }: GameDetailsPageProps): Promise<Metadata> {
  const { gameId } = await params
  const game = getGameById(gameId)

  if (!game) {
    return {
      title: "Game Not Found",
    }
  }

  return {
    title: `${game.title} - Download & Play | CPA Gaming`,
    description: game.description,
    keywords: `${game.title}, ${game.genre}, game download, play ${game.title}`,
    openGraph: {
      title: game.title,
      description: game.description,
      type: "website",
      images: [
        {
          url: game.heroImage,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
    },
  }
}

export default async function GameDetailsPage({ params }: GameDetailsPageProps) {
  const { gameId } = await params
  const game = getGameById(gameId)

  if (!game) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden">
        <Image
          src={game.heroImage || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 line-clamp-2">
                  {game.title}
                </h1>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    <span className="font-semibold">{game.rating}</span>
                    <span className="text-muted-foreground text-sm">({game.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <span className="text-xs sm:text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                    {game.genre}
                  </span>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">About This Game</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{game.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {game.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-2 sm:p-3 bg-card border border-border rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-48 sm:h-64 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${game.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">System Requirements</h2>
              <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Operating System</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{game.systemRequirements.os}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Processor</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{game.systemRequirements.processor}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Memory (RAM)</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{game.systemRequirements.memory}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Storage</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{game.systemRequirements.storage}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Game Info Card */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Developer</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">{game.developer}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Publisher</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">{game.publisher}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Release Date</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">
                  {new Date(game.releaseDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full bg-accent text-accent-foreground px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download className="w-4 sm:w-5 h-4 sm:h-5" />
                Download Now
              </button>
              <button className="w-full bg-card border border-border text-foreground px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <Heart className="w-4 sm:w-5 h-4 sm:h-5" />
                Add to Wishlist
              </button>
              <button className="w-full bg-card border border-border text-foreground px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <Share2 className="w-4 sm:w-5 h-4 sm:h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
