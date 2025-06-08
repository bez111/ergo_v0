"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, Zap, Users, Target, Lightbulb } from "lucide-react"

// Simple binary rain background
function BinaryRainBackground() {
  const binaryChars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    char: Math.random() > 0.5 ? "1" : "0",
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {binaryChars.map((item) => (
        <div
          key={item.id}
          className="absolute text-orange-500 text-sm font-mono"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
          }}
        >
          {item.char}
        </div>
      ))}
    </div>
  )
}

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
    <div className="min-h-screen bg-black text-white relative">
      <BinaryRainBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              GRANTS PROGRAM
            </motion.h1>

            <motion.div
              className="text-4xl md:text-6xl font-bold mb-8 text-orange-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Coming Soon
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering developers, researchers, and innovators to build the future of decentralized finance on Ergo
            </motion.p>

            {/* Countdown */}
            <motion.div
              className="flex justify-center items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Clock className="w-6 h-6 text-orange-500" />
              <span className="text-lg text-gray-300">Expected Launch: Q3 2025</span>
            </motion.div>

            {/* Email Subscription */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
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
                  ✓ Thank you! We'll notify you when the grants program launches.
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              What to Expect
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Developer Support",
                  description: "Funding for innovative dApps, tools, and infrastructure projects",
                },
                {
                  icon: Target,
                  title: "Research Funding",
                  description: "Support for academic research and protocol improvements",
                },
                {
                  icon: Users,
                  title: "Community Projects",
                  description: "Grants for community-driven initiatives and educational content",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Grants",
                  description: "Special funding for breakthrough ideas and experimental projects",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build on Ergo?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start preparing your project proposal and join our community to stay updated
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3" size="lg">
                  Join Discord Community
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3"
                  size="lg"
                >
                  Learn About Ergo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
