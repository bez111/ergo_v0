"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, Code, Target, Users, Lightbulb, ArrowLeft } from "lucide-react"

export default function BuildGrantsPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Link
                href="/build"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Build
              </Link>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent">
              DEVELOPER GRANTS
            </h1>

            <div className="text-4xl md:text-6xl font-bold mb-8 text-orange-500">Coming Soon</div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Funding developers, researchers, and innovators building the future of blockchain technology on Ergo
            </p>

            {/* Countdown */}
            <div className="flex justify-center items-center gap-4 mb-12">
              <Clock className="w-6 h-6 text-orange-500" />
              <span className="text-lg text-gray-300">Expected Launch: Q2 2025</span>
            </div>

            {/* Email Subscription */}
            <div className="max-w-md mx-auto">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email for updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-900/50 border-orange-500/20 text-white placeholder-gray-400"
                    required
                  />
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    <Mail className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                </form>
              ) : (
                <div className="text-green-400 text-lg">
                  ✓ Thank you! We'll notify you when developer grants launch.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">What to Expect</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Code,
                  title: "dApp Development",
                  description: "Funding for innovative decentralized applications and smart contracts",
                },
                {
                  icon: Target,
                  title: "Core Infrastructure",
                  description: "Support for protocol improvements, tools, and developer resources",
                },
                {
                  icon: Users,
                  title: "Bug Bounties",
                  description: "Rewards for finding and reporting security vulnerabilities",
                },
                {
                  icon: Lightbulb,
                  title: "Research Grants",
                  description: "Funding for academic research and experimental blockchain projects",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.title}
                    className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full"
                  >
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build on Ergo?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start preparing your project proposal and join our developer community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3"
                size="lg"
                asChild
              >
                <Link href="/build">Explore Developer Portal</Link>
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3"
                size="lg"
                asChild
              >
                <Link href="/build">Join Developer Discord</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
