"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Is the game really free?",
    answer:
      "Yes! The game is completely free to download and play. There are no hidden fees or premium paywalls. We offer optional cosmetic purchases, but they're not required to enjoy the full game.",
  },
  {
    id: 2,
    question: "Is it safe to download?",
    answer:
      "Absolutely. Our download is 100% safe and verified. We use industry-standard security protocols and our app is regularly scanned for malware. Your data and device are completely protected.",
  },
  {
    id: 3,
    question: "What devices are supported?",
    answer:
      "The game works on iOS 12+ and Android 8+. It's optimized for both phones and tablets. Check your device compatibility before downloading.",
  },
  {
    id: 4,
    question: "How much storage space do I need?",
    answer:
      "The game requires approximately 500MB of free storage space. Make sure you have enough space before downloading to ensure a smooth installation.",
  },
  {
    id: 5,
    question: "Can I play offline?",
    answer:
      "Yes! Most game modes can be played offline. However, multiplayer features and leaderboards require an internet connection.",
  },
  {
    id: 6,
    question: "How do I get support?",
    answer:
      "If you encounter any issues, contact our support team at support@cpagame.com or visit our help center. We typically respond within 24 hours.",
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-accent bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our game
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                aria-expanded={openId === faq.id}
              >
                <h3 className="text-lg font-bold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="p-6 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
