"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Download } from "lucide-react"
import type { App } from "@/lib/apps-data"

interface AppCardProps {
  app: App
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/apps/${app.id}`}>
      <div className="group relative overflow-hidden rounded-xl glass-accent hover:glass transition-all duration-500 cursor-pointer h-28 animate-fade-in hover:scale-105 hover:shadow-2xl">
        {/* Banner Background Image */}
        <div className="absolute inset-0">
          <Image
            src={app.thumbnail || "/placeholder.svg"}
            alt={app.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex gap-3 p-3 h-full">
          {/* Left Icon/Image */}
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted/50 backdrop-blur-sm border border-white/10">
            <Image
              src={app.thumbnail || "/placeholder.svg"}
              alt={app.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-1.5 rounded-full bg-blue-500/80 backdrop-blur-sm group-hover:animate-glow">
                <Download className="w-3 h-3 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-base text-foreground group-hover:text-accent transition-colors line-clamp-1 flex-1 drop-shadow-sm">
                  {app.title}
                </h3>
                <span className="text-[10px] font-medium px-1.5 py-0.5 bg-blue-500/30 text-blue-300 rounded whitespace-nowrap flex-shrink-0 backdrop-blur-sm">
                  {app.category}
                </span>
              </div>
              <p className="text-xs text-foreground/90 line-clamp-1 mb-1.5 drop-shadow-sm">{app.shortDescription}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-blue-400 text-blue-400 drop-shadow-sm" />
                <span className="font-semibold text-xs text-foreground drop-shadow-sm">{app.rating}</span>
              </div>
              <span className="text-[10px] text-foreground/80 drop-shadow-sm">({app.reviews.toLocaleString()})</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-400/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-400/10 transition-all duration-300 pointer-events-none z-20" />
      </div>
    </Link>
  )
}

