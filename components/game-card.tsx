"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Play } from "lucide-react"
import type { Game } from "@/lib/games-data"

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.id}`}>
      <div className="group relative overflow-hidden rounded-xl glass-accent hover:glass transition-all duration-500 cursor-pointer h-full animate-fade-in hover:scale-105 hover:shadow-2xl">
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={game.thumbnail || "/placeholder.svg"}
            alt={game.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 rounded-full bg-green-500/80 backdrop-blur-sm group-hover:animate-glow">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors line-clamp-2">
              {game.title}
            </h3>
            <span className="text-xs font-semibold px-2 py-1 bg-green-500/30 text-green-300 rounded-lg whitespace-nowrap">
              {game.genre}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{game.shortDescription}</p>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-green-400 text-green-400" />
              <span className="font-semibold text-sm text-foreground">{game.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({game.reviews.toLocaleString()})</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {game.features.slice(0, 2).map((feature) => (
              <span key={feature} className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-md">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-400/0 group-hover:from-green-500/10 group-hover:via-green-500/5 group-hover:to-green-400/10 transition-all duration-300 pointer-events-none" />
      </div>
    </Link>
  )
}
