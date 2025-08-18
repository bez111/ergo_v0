import React from "react"
import Link from "next/link"
import { AudienceCard } from "./audience-card"

export function AudiencePaths() {
  const audiences = [
    {
      title: "FOR DEVELOPERS",
      description: "Build innovative applications on Ergo",
      iconName: "Code" as const,
      cta: "START BUILDING",
              ctaLink: "/docs",
      links: [
        { label: "Documentation", href: "/docs" },
                  { label: "Tutorials", href: "/docs/developers/tutorials" },
        { label: "Grants", href: "/ecosystem/grants" },
      ],
    },
    {
      title: "FOR MINERS",
      description: "Secure the network and earn rewards",
      iconName: "Cpu" as const,
      cta: "START MINING",
      ctaLink: "/use/mining",
      links: [
        { label: "Mining Pools", href: "/use/mining#pools" },
        { label: "Profitability Calculator", href: "/use/mining#calculator" },
      ],
    },
    {
      title: "FOR USERS",
      description: "Use Ergo for payments, privacy, and DeFi",
      iconName: "User" as const,
      cta: "GET STARTED",
      ctaLink: "/start",
      links: [
        { label: "Wallets", href: "/wallet" },
        { label: "Applications", href: "/ecosystem" },
        { label: "Buy ERG", href: "/use/get-erg" },
      ],
    },
    {
      title: "FOR INVESTORS",
      description: "Understand Ergo's value proposition",
      iconName: "LineChart" as const,
      cta: "EXPLORE ECOSYSTEM",
      ctaLink: "/ecosystem",
      links: [
        { label: "Projects", href: "/ecosystem" },
        { label: "Statistics", href: "/technology/eutxo-model" },
        { label: "Use Cases", href: "/learn/use-cases" },
      ],
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-neutral-700">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-orange-400">GET STARTED</span> WITH ERGO
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your path and join the Ergo ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {audiences.map((audience, index) => (
              <div key={index} className="h-full">
                <AudienceCard audience={audience} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,136,0,0.02)_25%,rgba(255,136,0,0.02)_75%,transparent_75%,transparent)] bg-[length:20px_20px] pointer-events-none" />
    </section>
  )
}
