"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Gamepad2, Menu, X } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/apps", label: "Apps" },
  ]

  return (
    <nav className="sticky top-0 z-50 glass-dark border-b backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg sm:text-xl text-foreground hover:text-accent transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="p-1.5 sm:p-2 rounded-lg glass-accent group-hover:animate-glow">
              <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            </div>
            <span className="gradient-accent">freemods4u</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => {
              const isLinkActive =
                link.href === "/"
                  ? isActive("/")
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)
              const activeColor =
                link.href === "/apps" ? "bg-blue-500/20 text-blue-300" : "bg-green-500/20 text-green-300"

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    isLinkActive
                      ? `text-accent ${activeColor}`
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isLinkActive =
                link.href === "/"
                  ? isActive("/")
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)
              const activeColor =
                link.href === "/apps" ? "bg-blue-500/20 text-blue-300" : "bg-green-500/20 text-green-300"

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-all duration-300 px-4 py-3 rounded-lg ${
                    isLinkActive
                      ? `text-accent ${activeColor}`
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
