"use client"

import React from "react"
import { Shield, Zap, Database, Lock, Users, Cpu } from "lucide-react"

export function WhyErgo() {
  const mainFeatures = [
    {
      title: "FAIR & SECURE",
      subtitle: "Proof-of-Work Foundation",
      description: "No ICO, no premine. ASIC-resistant mining ensures true decentralization and long-term security for everyone.",
      icon: Shield,
    },
    {
      title: "POWERFUL & FLEXIBLE",
      subtitle: "Advanced Smart Contracts",
      description: "eUTXO model + ErgoScript enable secure, expressive DeFi applications that push the boundaries of what's possible.",
      icon: Zap,
    },
    {
      title: "SUSTAINABLE",
      subtitle: "Built to Last",
      description: "Storage rent mechanism prevents bloat and ensures network health with predictable costs for decades to come.",
      icon: Database,
    },
  ]

  const additionalFeatures = [
    {
      title: "PRIVACY FIRST",
      description: "Optional privacy with Sigma protocols for confidential transactions.",
      icon: Lock,
    },
    {
      title: "COMMUNITY DRIVEN",
      description: "Open-source development led by passionate contributors worldwide.",
      icon: Users,
    },
    {
      title: "DEVELOPER FRIENDLY",
      description: "World-class docs, tools, and support make building on Ergo easy.",
      icon: Cpu,
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-black" id="why-ergo">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="text-center space-y-6 max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">WHY</span> <span className="text-orange-400">ERGO?</span>
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
              A resilient blockchain platform combining proven principles with cutting-edge innovation
            </p>
          </div>

          {/* Main Features - Larger Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border border-neutral-800/50 rounded-2xl p-10 hover:border-orange-400/50 hover:from-neutral-900/80 hover:to-neutral-900/60 transition-all duration-500"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-400/0 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex bg-gradient-to-br from-orange-500/20 to-amber-900/20 p-4 rounded-xl border border-orange-500/20 group-hover:border-orange-400/40 transition-colors duration-300">
                        <Icon className="h-8 w-8 text-orange-400" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-white font-bold text-xl mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">
                        {feature.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Features - Compact Grid */}
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6 bg-neutral-900/30 border border-neutral-800/30 rounded-xl hover:bg-neutral-900/50 hover:border-orange-400/30 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-amber-900/30 to-amber-900/10 p-3 rounded-lg border border-amber-800/20 group-hover:border-amber-700/30 transition-colors duration-300 flex-shrink-0">
                      <Icon className="h-5 w-5 text-orange-400/90" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wide">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 