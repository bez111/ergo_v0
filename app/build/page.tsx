"use client"

import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { HeroSection } from "@/components/build/hero-section"
import { QuickLinks } from "@/components/build/quick-links"
import { WhatsNew } from "@/components/build/whats-new"
import { DeveloperPaths } from "@/components/build/developer-paths"
import { MainTabs } from "@/components/build/main-tabs"
import { FaqSection } from "@/components/build/faq-section"

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
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />

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
