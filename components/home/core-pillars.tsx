"use client"

import { useState } from "react"
import { Shield, Code, RefreshCw, Lock, Database, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/section-heading"

export function CorePillars() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const pillars = [
    {
      title: "SECURE POW",
      description: "ASIC-resistant Proof of Work consensus for long-term security and decentralization",
      icon: Shield,
    },
    {
      title: "SMART CONTRACTS",
      description: "Powerful ErgoScript language designed for secure financial contracts",
      icon: Code,
    },
    {
      title: "SUSTAINABLE ECONOMICS",
      description: "Storage rent mechanism prevents blockchain bloat and ensures long-term sustainability",
      icon: RefreshCw,
    },
    {
      title: "PRIVACY",
      description: "Advanced cryptographic features enabling optional privacy while maintaining compliance",
      icon: Lock,
    },
    {
      title: "ORACLE POOLS",
      description: "First-class oracle solution for reliable off-chain data with built-in incentives",
      icon: Database,
    },
    {
      title: "DEV FRIENDLY",
      description: "Comprehensive tools and resources for developers to build innovative applications",
      icon: Cpu,
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-5 bg-cover bg-center"></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeading text="CORE PILLARS" />

          <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg font-mono">
            <span className="text-primary">&gt;</span> Ergo combines proven principles with cutting-edge cryptography
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border border-primary/30 bg-black/80 backdrop-blur-sm relative overflow-hidden group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover effect */}
                <div
                  className={cn(
                    "absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300",
                    hoveredIndex === index ? "opacity-100" : "",
                  )}
                ></div>

                <div
                  className={cn(
                    "rounded-full bg-primary/10 p-3 border border-primary/30 z-10 transition-all duration-300",
                    hoveredIndex === index ? "bg-primary/20 scale-110" : "",
                  )}
                >
                  <pillar.icon
                    className={cn(
                      "h-6 w-6 text-primary transition-all duration-300",
                      hoveredIndex === index ? "scale-110" : "",
                    )}
                  />
                </div>
                <h3 className="text-lg font-bold font-mono tracking-wider z-10">{pillar.title}</h3>
                <p className="text-sm text-gray-400 text-center z-10 font-mono">{pillar.description}</p>

                {/* Border highlight on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 border border-primary/50 rounded-lg pointer-events-none">
                    <div className="absolute top-0 left-0 w-1 h-1 bg-primary"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-primary"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-primary"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
