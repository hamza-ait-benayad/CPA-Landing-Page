"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Gamepad2 } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 glass-dark border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-accent transition-all duration-300 group"
          >
            <div className="p-2 rounded-lg glass-accent group-hover:animate-glow">
              <Gamepad2 className="w-5 h-5 text-accent" />
            </div>
            <span className="bg-gradient-green bg-clip-text text-transparent">CPA Gaming</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive("/")
                  ? "text-accent bg-green-500/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            <Link
              href="/games"
              className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive("/games") || pathname.startsWith("/games/")
                  ? "text-accent bg-green-500/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              Games
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
