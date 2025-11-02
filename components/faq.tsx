"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Are the modded games and apps really free?",
    answer:
      "Yes! All modded games and apps on freemods4u are completely free to download. There are no hidden fees, subscriptions, or premium paywalls. We provide modded versions with premium features unlocked at no cost.",
  },
  {
    id: 2,
    question: "Is it safe to download modded games and apps?",
    answer:
      "Absolutely. All mods on freemods4u are 100% safe and verified. We use industry-standard security protocols and regularly scan all files for malware. Your data and device are completely protected.",
  },
  {
    id: 3,
    question: "What features do the mods include?",
    answer:
      "Our modded games and apps include premium features like unlimited coins/resources, all levels unlocked, no ads, premium subscriptions unlocked, and exclusive content - all available for free.",
  },
  {
    id: 4,
    question: "What devices are supported?",
    answer:
      "Our modded games and apps work on Android 8+ and iOS 12+. They're optimized for both phones and tablets. Check your device compatibility before downloading.",
  },
  {
    id: 5,
    question: "Do the mods require root or jailbreak?",
    answer:
      "No! Most of our mods work without requiring root access on Android or jailbreak on iOS. However, some advanced mods may require root/jailbreak, which will be clearly indicated.",
  },
  {
    id: 6,
    question: "How do I get support?",
    answer:
      "If you encounter any issues, contact our support team at support@freemods4u.com or visit our help center. We typically respond within 24 hours.",
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Frequently Asked <span className="gradient-accent bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Find answers to common questions about our game
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between bg-muted/30 hover:bg-muted/50 transition-colors duration-300 text-left"
                aria-expanded={openId === faq.id}
              >
                <h3 className="text-base sm:text-lg font-bold text-foreground pr-4 flex-1">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="p-4 sm:p-6 bg-background border-t border-border">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
