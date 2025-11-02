import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import OGAdsLocker from "@/components/ogads-locker"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Free Game & App Mods - Download Modded Games & Apps | freemods4u",
  description:
    "Download free modded games and apps with premium features unlocked. Get unlimited coins, unlocked levels, no ads, and more. Safe and verified mods for Android & iOS.",
  keywords: "free game mods, modded apps, apk mods, game mods, app mods, premium mods, free mods, unlocked games",
  metadataBase: new URL("https://freemods4u.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freemods4u.com",
    title: "Free Game & App Mods - Download Modded Games & Apps | freemods4u",
    description: "Download free modded games and apps with premium features unlocked. Safe and verified mods for Android & iOS.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "freemods4u - Free Game & App Mods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Game & App Mods - Download Modded Games & Apps | freemods4u",
    description: "Download free modded games and apps with premium features unlocked. Safe and verified mods.",
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
    canonical: "https://freemods4u.com",
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
              name: "freemods4u",
              description: "Free game and app mods platform - Download modded games and apps with premium features unlocked",
              url: "https://freemods4u.com",
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
      <body className={`${geistSans.className} antialiased`}>
        <OGAdsLocker />
        {children}
      </body>
    </html>
  )
}
