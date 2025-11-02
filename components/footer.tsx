import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">freemods4u</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Your ultimate destination for free modded games and apps. Download premium mods with unlocked features, unlimited resources, and no ads.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/apps" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="text-lg sm:text-xl text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-lg sm:text-xl text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="text-lg sm:text-xl text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="text-lg sm:text-xl text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                💬
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">© {currentYear} freemods4u. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Made with ❤️ for gamers worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
