"use client"

import Link from "next/link"
import Image from "next/image"
import { Code, Shield, Zap, Layers } from "lucide-react"

export function HeroSection() {
  const features = [
    { icon: Shield, label: "Secure PoW" },
    { icon: Zap, label: "Smart Contracts" },
    { icon: Code, label: "Privacy" },
    { icon: Layers, label: "eUTXO Model" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 lg:py-32">
      {/* Статичный фон */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/cyberpunk-grid.png"
          alt="Background grid"
          fill
          priority
          quality={75}
          className="opacity-20 object-cover"
        />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="text-7xl font-extrabold tracking-tighter text-primary">ERGO</div>
          {/* Заголовок */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Decentralized Money for a Free Society
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-mono max-w-3xl mx-auto">
              Join a movement for open, programmable, and censorship-resistant finance.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/start"
              className="flex items-center gap-2 bg-primary text-white hover:bg-primary/80 font-mono uppercase tracking-wider border-2 border-primary px-6 py-3 rounded-lg"
            >
              <span className="text-white">&gt;</span>
              <span className="ml-2">get-started</span>
              <span className="ml-1">_</span>
            </Link>
            <Link
              href="/build"
              className="flex items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono uppercase tracking-wider px-6 py-3 rounded-lg"
            >
              <Code className="h-5 w-5" />
              Start Building
            </Link>
          </div>
          {/* Иконки функций */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center gap-2 text-center">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-white/70">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
