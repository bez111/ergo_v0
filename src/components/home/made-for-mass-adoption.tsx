"use client"

import Link from "next/link"
import { Wallet, Pickaxe, Code, TrendingUp } from "lucide-react"
import { CyberButton } from "@/components/animations/cyber-button"
import { Card } from "@/components/ui/card"

export function MadeForMassAdoption() {
  const paths = [
    {
      icon: Wallet,
      title: "Freedom seekers",
      desc: "Take control of your money. Private transactions when you need them. No banks, no permissions, just freedom.",
      cta: "Get started",
      href: "/hodlers"
    },
    {
      icon: Code,
      title: "Cypherpunks",
      desc: "Build unstoppable smart contracts with ErgoScript. Create privacy-preserving dApps that actually work.",
      cta: "Start building",
      href: "/builders"
    },
    {
      icon: Pickaxe,
      title: "Miners",
      desc: "GPU-friendly mining that stays decentralized. Secure the network, earn rewards, resist ASICs.",
      cta: "Start mining",
      href: "/miners"
    },
    {
      icon: TrendingUp,
      title: "Community",
      desc: "No VCs, no pre-mine, no corporate control. Built by the community, for the community since 2019.",
      cta: "Join us",
      href: "/start/community"
    }
  ]

  return (
    <section id="cypherpunks-freedom" className="py-24 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 
            className="font-bold tracking-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
          >
            <span className="text-orange-400">Choose your</span> <span className="text-white">path. Build your</span> <span className="text-orange-400">future</span><span className="text-white">.</span>
          </h2>
          <p 
            className="text-gray-400 mx-auto"
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: 1.4,
              maxWidth: '60ch',
              opacity: 0.85
            }}
          >
            Find your role in the decentralized future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, i) => (
            <Link 
              key={i}
              href={path.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
            >
              <Card className="bg-black/80 border border-white/10 hover:bg-black/90 hover:border-orange-500/50 rounded-3xl transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col cursor-pointer">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Icon and Title in same line */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex-shrink-0">
                      <path.icon className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors leading-tight">
                      {path.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed flex-1 group-hover:text-gray-300 transition-colors text-sm">
                    {path.desc}
                  </p>
                  
                  {/* Hover Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-200">
                      {path.cta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Start Here Button */}
        <div className="mt-12 text-center">
          <CyberButton
            className="gap-2 bg-orange-500 text-black hover:bg-transparent hover:text-orange-500 hover:border-orange-500 font-mono uppercase tracking-wider px-8 py-4 border-2 border-orange-500"
            asChild
          >
            <Link href="/start" className="inline-flex items-center">
              <span>Start here</span>
            </Link>
          </CyberButton>
        </div>

      </div>
    </section>
  )
}
