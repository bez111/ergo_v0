"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Shield, Twitter, Send, Users, Lock, Code, Github, MessageCircle, ArrowRight } from "lucide-react"

export function JoinMovement() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const values = [
    { icon: Shield, text: "Financial Freedom" },
    { icon: Lock, text: "Privacy First" },
    { icon: Users, text: "Community Driven" },
    { icon: Code, text: "Open Source" },
  ]

  const socialLinks = [
    { name: "Discord", href: "https://discord.gg/ergo-platform", icon: MessageCircle, count: "15k+" },
    { name: "Twitter", href: "https://twitter.com/ergo_platform", icon: Twitter, count: "50k+" },
    { name: "Telegram", href: "https://t.me/ergoplatform", icon: Send, count: "8k+" },
    { name: "GitHub", href: "https://github.com/ergoplatform", icon: Github, count: "100+" }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("Newsletter subscription:", email)
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
        }}></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-white">Join the</span>{" "}
              <span className="text-orange-400">Movement</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Be part of the financial revolution. Stay updated and connect with our global community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Manifesto Compact */}
            <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Building the monetary system that should have existed from the beginning - 
                fair, private, and unstoppable. No ICO, no premine, just pure decentralization.
              </p>
              
              {/* Values Grid - Compact */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-neutral-900/50 border border-neutral-800/50 rounded-lg hover:border-orange-400/30 transition-all duration-300"
                    >
                      <Icon className="h-4 w-4 text-orange-400" />
                      <span className="text-gray-200 text-xs font-medium">{value.text}</span>
                    </div>
                  )
                })}
              </div>
              
              <Link 
                href="/docs/introduction/manifesto"
                className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors text-sm group"
              >
                <span>Read Full Manifesto</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Newsletter & Community */}
            <div className="space-y-6">
              {/* Newsletter - Compact */}
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Weekly insights on development and opportunities.
                </p>

                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-3 py-2 bg-black/50 border border-neutral-700 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-black font-semibold rounded-lg text-sm transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Community Stats - Compact Grid */}
              <div className="grid grid-cols-4 gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center p-3 bg-neutral-900/30 border border-neutral-800/50 rounded-lg hover:bg-neutral-900/50 hover:border-orange-400/30 transition-all"
                    >
                      <Icon className="h-4 w-4 text-orange-400 mb-1" />
                      <div className="text-sm font-bold text-orange-400">{social.count}</div>
                      <div className="text-xs text-gray-400">{social.name}</div>
                    </Link>
                  )
                })}
              </div>

              {/* CTA Buttons - Compact */}
              <div className="flex gap-2">
                <Link
                  href="/wallet"
                  className="flex-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg text-sm text-center transition-colors"
                >
                  Get Wallet
                </Link>
                <Link
                  href="/docs/developers"
                  className="flex-1 px-3 py-2 border border-orange-500/50 hover:border-orange-400 text-orange-400 font-semibold rounded-lg text-sm text-center transition-colors"
                >
                  Start Building
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 