"use client"

import React from "react"
import { Shield, Code, RefreshCw, Lock, Database, Cpu } from "lucide-react"

export function CorePillars() {
  const pillars = [
    {
      title: "SECURITY (POW)",
      description: "ASIC-resistant Autolykos v2 PoW ensures robust decentralization, fair mining, and long-term security for everyone.",
      icon: Shield,
    },
    {
      title: "PROGRAMMABILITY (eUTXO + ERGOSCRIPT)",
      description: "Formally verifiable, expressive, and secure contracts—powered by ErgoScript and the advanced eUTXO model.",
      icon: Code,
    },
    {
      title: "SUSTAINABILITY (STORAGE RENT)",
      description: "Storage rent and predictable costs maintain long-term network health and prevent blockchain bloat.",
      icon: RefreshCw,
    },
    {
      title: "PRIVACY",
      description: "Protocol-level privacy using Sigma protocols—enabling confidential dApps and transactions.",
      icon: Lock,
    },
    {
      title: "ORACLE POOLS",
      description: "The first truly decentralized oracle pools—reliable, permissionless off-chain data access with built-in incentives.",
      icon: Database,
    },
    {
      title: "DEV FRIENDLY",
      description: "World-class docs, open tools, and a vibrant, collaborative community make building on Ergo easy and innovative.",
      icon: Cpu,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-orange-400">CORE</span> <span className="text-white">PILLARS</span>
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">&gt;</span> Ergo combines proven principles with cutting-edge cryptography
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="group relative bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-8 hover:border-orange-400/40 hover:bg-neutral-900/60 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-orange-900/40 to-orange-900/20 p-4 rounded-xl border border-orange-800/30 group-hover:border-orange-700/40 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-orange-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-center font-semibold text-base mb-4 tracking-wide uppercase">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-center text-sm leading-relaxed">
                    {pillar.description}
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
