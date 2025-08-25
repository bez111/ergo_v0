"use client"

import React from "react"
import { Shield, Zap, Database, BookOpen, Lock, Users } from "lucide-react"

export function WhatMakesDifferent() {
  const features = [
    {
      title: "FAIR LAUNCH & PROOF-OF-WORK",
      description: "Launched with no ICO or premine, secured by Autolykos v2 - an ASIC-resistant and energy-efficient Proof-of-Work algorithm ensuring fair distribution and robust security from day one.",
      icon: Shield,
    },
    {
      title: "eUTXO & ERGOSCRIPT FOR ADVANCED DEFI",
      description: "The extended UTXO model combined with our powerful language, ErgoScript, enables highly secure, predictable, and expressive financial applications, pushing the boundaries of DeFi.",
      icon: Zap,
    },
    {
      title: "STORAGE RENT FOR LONG-TERM SUSTAINABILITY",
      description: 'A novel mechanism ensuring network health and predictable operational costs by recycling fees from unused data ("dust") back to miners, preventing bloat and keeping the chain efficient.',
      icon: Database,
    },
    {
      title: "RESEARCH-DRIVEN INNOVATION",
      description: "Built on peer-reviewed academic research and first principles, Ergo fosters robust, groundbreaking solutions designed for real-world longevity.",
      icon: BookOpen,
    },
    {
      title: "ROBUST OPTIONAL PRIVACY (Σ-PROTOCOLS)",
      description: "Ergo offers flexible privacy features powered by Sigma protocols, enabling secure multi-signatures, ring signatures, and zero-knowledge proofs for tailored confidentiality options in transactions.",
      icon: Lock,
    },
    {
      title: "COMMUNITY-LED DEVELOPMENT",
      description: "A truly decentralized, open-source project where development is led by passionate community members and developers worldwide, ensuring the protocol remains free from centralized control.",
      icon: Users,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">WHAT MAKES</span> <span className="text-white">ERGO DIFFERENT</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Ergo combines proven cryptographic techniques with innovative blockchain design to create a<br />
              platform that's secure, scalable, and sustainable
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 hover:border-orange-400/40 hover:bg-neutral-900/60 transition-all duration-300"
                >
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-orange-900/40 to-orange-900/20 p-3 rounded-lg border border-orange-800/30 group-hover:border-orange-700/40 transition-colors duration-300 flex-shrink-0">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-tight uppercase tracking-wide">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 