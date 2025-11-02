import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, Share2, Heart } from "lucide-react"
import { getAppById } from "@/lib/apps-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DownloadButton from "@/components/download-button"

interface AppDetailsPageProps {
  params: Promise<{
    appId: string
  }>
}

export async function generateMetadata({ params }: AppDetailsPageProps): Promise<Metadata> {
  const { appId } = await params
  const app = getAppById(appId)

  if (!app) {
    return {
      title: "App Not Found",
    }
  }

  return {
    title: `${app.title} Mod - Free Modded Download | freemods4u`,
    description: app.description,
    keywords: `${app.title}, ${app.category}, app download, ${app.title} app`,
    openGraph: {
      title: app.title,
      description: app.description,
      type: "website",
      images: [
        {
          url: app.heroImage,
          width: 1200,
          height: 630,
          alt: app.title,
        },
      ],
    },
  }
}

export default async function AppDetailsPage({ params }: AppDetailsPageProps) {
  const { appId } = await params
  const app = getAppById(appId)

  if (!app) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={app.heroImage || "/placeholder.svg"}
          alt={app.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                  {/* App Icon */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 overflow-hidden rounded-lg sm:rounded-xl border-2 border-background/20 shadow-lg">
                    <Image
                      src={app.thumbnail || "/placeholder.svg"}
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-1 sm:mb-2 line-clamp-2">
                      {app.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 lg:gap-4">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <span className="font-semibold text-sm sm:text-base">{app.rating}</span>
                        <span className="text-muted-foreground text-xs sm:text-sm">
                          ({app.reviews.toLocaleString()})
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        {app.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <DownloadButton
                  downloadUrl={app.downloadUrl}
                  appId={app.id}
                  title={app.title}
                  variant="hero"
                  className="bg-blue-500 text-white hover:bg-blue-600 w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">About This App</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{app.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {app.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-2 sm:p-3 bg-card border border-border rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {app.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-48 sm:h-64 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${app.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Support */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Platform Support</h2>
              <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {app.platform.map((platform) => (
                    <span
                      key={platform}
                      className="text-sm sm:text-base bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* App Icon */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden rounded-xl border-2 border-border shadow-lg">
                <Image
                  src={app.thumbnail || "/placeholder.svg"}
                  alt={app.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 112px, 128px"
                />
              </div>
            </div>

            {/* App Info Card */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Developer</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">{app.developer}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Publisher</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">{app.publisher}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Release Date</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">
                  {new Date(app.releaseDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-3">
              <DownloadButton
                downloadUrl={app.downloadUrl}
                appId={app.id}
                title={app.title}
                variant="sidebar"
                className="bg-blue-500 text-white hover:bg-blue-600"
              />
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

