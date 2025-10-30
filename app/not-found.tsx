import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full bg-primary hover:bg-primary/90 text-background font-bold">Go Home</Button>
            </Link>
            <Link href="/games">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Browse Games
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
