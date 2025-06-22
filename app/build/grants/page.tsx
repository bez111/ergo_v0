"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, Zap, Users, Target, Lightbulb, Code } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"

export default function GrantsPage() {
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
    <div className="min-h-screen relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <FadeIn>
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                Ergo Foundation Grants
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block">
                Build on Ergo
              </h1>
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
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
                    >
                      Notify Me
                    </Button>
                  </form>
                ) : (
                  <div className="text-green-400 text-lg">
                    ✓ Thank you! We'll notify you when the grants program launches.
                  </div>
                )}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.2}>
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                text="Grant Categories"
                subtitle="Areas of Focus"
                description="Supporting innovation and development in the Ergo ecosystem"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Code,
                    title: "Core Protocol Development",
                    description: "Grants for improving Ergo's core infrastructure, scalability, and security.",
                    color: "from-orange-500/20 to-orange-500/5",
                  },
                  {
                    icon: Target,
                    title: "dApp & Tooling",
                    description: "Support for building decentralized applications and developer tools on the Ergo platform.",
                    color: "from-cyan-500/20 to-cyan-500/5",
                  },
                  {
                    icon: Lightbulb,
                    title: "Research & Innovation",
                    description: "Funding for novel research in cryptography, smart contracts, and blockchain economics.",
                    color: "from-purple-500/20 to-purple-500/5",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group"
                  >
                    <Card
                      className={`bg-gradient-to-br ${feature.color} border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full`}
                    >
                      <CardContent className="p-8 text-center">
                        <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.4}>
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-[1.1] pb-1">
                Ready to Build on Ergo?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start preparing your project proposal and join our community to stay updated
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                  Join Developer Discord
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  Explore Build Hub
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}
