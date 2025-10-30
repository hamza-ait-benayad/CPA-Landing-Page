import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Free Game Download - Play Now | CPA Gaming",
  description:
    "Download our free game instantly. No ads, no hidden fees. Join thousands of players enjoying premium gaming. Click to download now!",
  keywords: "free game download, mobile game, gaming app, play free games",
  metadataBase: new URL("https://cpa-game-landing.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cpa-game-landing.vercel.app",
    title: "Free Game Download - Play Now | CPA Gaming",
    description: "Download our free game instantly. No ads, no hidden fees. Join thousands of players.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CPA Game Landing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Game Download - Play Now | CPA Gaming",
    description: "Download our free game instantly. No ads, no hidden fees.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cpa-game-landing.vercel.app",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CPA Game",
              description: "Free game download platform",
              url: "https://cpa-game-landing.vercel.app",
              applicationCategory: "GameApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "2500",
              },
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f0f0f" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  )
}
