"use client"

import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { HeroSection } from "@/components/build/hero-section"
import { QuickLinks } from "@/components/build/quick-links"
import { WhatsNew } from "@/components/build/whats-new"
import { DeveloperPaths } from "@/components/build/developer-paths"
import { MainTabs } from "@/components/build/main-tabs"
import { FaqSection } from "@/components/build/faq-section"
import { motion } from "framer-motion"

function SupportButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-lg z-50 animate-pulse"
    >
      <a href="https://discord.gg/ergoplatform" target="_blank" rel="noopener noreferrer">
        <HelpCircle className="w-5 h-5 mr-2" />
        Need Help?
      </a>
    </Button>
  )
}

export default function BuildPage() {
  return (
    <div className="min-h-screen text-white relative bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-cyan-500/10" />
                <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
                <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <main className="container mx-auto px-4 py-24 relative z-10">
        <HeroSection />
        <QuickLinks />
        <WhatsNew />
        <DeveloperPaths />
        <MainTabs />
        <FaqSection />
      </main>

      <SupportButton />
    </div>
  )
}
