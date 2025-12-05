"use client"

import { Download } from "lucide-react"
import { triggerOGAdsLocker } from "@/lib/ogads-locker"

interface DownloadButtonProps {
  downloadUrl: string
  gameId?: string
  appId?: string
  title?: string
  variant?: "default" | "sidebar" | "hero"
  className?: string
}

export default function DownloadButton({
  downloadUrl,
  gameId,
  appId,
  title,
  variant = "default",
  className = "",
}: DownloadButtonProps) {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    console.log("Download button clicked", { downloadUrl, gameId, appId, title })

    // Track analytics if available
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cpa_click", {
        event_category: "engagement",
        event_label: gameId ? `game_download_${gameId}` : `app_download_${appId}`,
      })
    }

    // Trigger content locker
    try {
      triggerOGAdsLocker(downloadUrl, {
        gameId,
        appId,
        title,
      })
    } catch (error) {
      console.error("Error in handleDownload:", error)
      // Fallback: redirect directly if trigger fails
      window.location.href = downloadUrl
    }
  }

  const baseStyles = "font-semibold transition-colors flex items-center justify-center gap-2"

  const variantStyles = {
    default: "bg-accent text-accent-foreground hover:bg-accent/90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg",
    sidebar:
      "bg-accent text-accent-foreground hover:bg-accent/90 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full",
    hero: "bg-accent text-accent-foreground hover:bg-accent/90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto whitespace-nowrap",
  }

  return (
    <button
      onClick={handleDownload}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <Download className="w-4 sm:w-5 h-4 sm:h-5" />
      {variant === "hero" ? "Download" : "Download Now"}
    </button>
  )
}

