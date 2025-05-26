"use client"

import { useState } from "react"
import { Lock, Zap, RefreshCw, Users, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/section-heading"

export function Differentiation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const differentiators = [
    {
      text: "NO ICO, NO PREMINE, PURE POW",
      icon: Lock,
      description: "Fair launch with no pre-allocated tokens ensures true decentralization",
    },
    {
      text: "eUTXO MODEL FOR SCALABLE DEFI & PRIVACY",
      icon: Zap,
      description: "Extended UTXO model combines Bitcoin's security with Ethereum's programmability",
    },
    {
      text: "STORAGE RENT FOR SUSTAINABILITY",
      icon: RefreshCw,
      description: "Prevents blockchain bloat and ensures long-term economic sustainability",
    },
    {
      text: "COMMUNITY-DRIVEN GOVERNANCE",
      icon: Users,
      description: "Decisions made through community consensus rather than centralized control",
    },
    {
      text: "RESEARCH-BASED DEVELOPMENT",
      icon: BookOpen,
      description: "Built on peer-reviewed academic research and cryptographic innovations",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-primary/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/glitch-texture.png')] opacity-5 bg-cover bg-center"></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <SectionHeading text="HOW IS ERGO DIFFERENT?" />

          <div className="space-y-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-lg border border-primary/30 bg-black/80 backdrop-blur-sm transition-all duration-300 relative overflow-hidden",
                  hoveredIndex === index ? "border-primary/50 bg-primary/5" : "",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glitch corner effect */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute rotate-45 bg-primary/20 text-primary/80 font-mono text-[8px] py-0.5 px-4 font-bold -right-5 top-3">
                    ERGO
                  </div>
                </div>

                <div
                  className={cn(
                    "rounded-full bg-primary/10 p-3 flex-shrink-0 border border-primary/30 transition-all duration-300",
                    hoveredIndex === index ? "bg-primary/20" : "",
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-6 w-6 text-primary transition-transform duration-300",
                      hoveredIndex === index ? "scale-110" : "scale-100",
                    )}
                  />
                </div>
                <div>
                  <p className="text-lg font-medium font-mono tracking-wider">{item.text}</p>
                  {hoveredIndex === index && (
                    <p className="text-sm text-gray-400 mt-1 animate-in fade-in slide-in-from-bottom-1 duration-300 font-mono">
                      {item.description}
                    </p>
                  )}
                </div>

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
