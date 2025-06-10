"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, Zap, Users, Target, Lightbulb } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"

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
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-cyan-500/10" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <FadeIn>
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                GRANTS PROGRAM
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Empowering developers, researchers, and innovators to build the future of decentralized finance on Ergo
              </p>

              {/* Countdown */}
              <div className="flex justify-center items-center gap-4 mb-12">
                <Clock className="w-6 h-6 text-orange-500" />
                <span className="text-lg text-gray-300">Expected Launch: Q3 2025</span>
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
                    <Button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
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
                text="What to Expect"
                subtitle="Grants Program Features"
                description="Supporting innovation and development in the Ergo ecosystem"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Developer Support",
                    description: "Funding for innovative dApps, tools, and infrastructure projects",
                    color: "from-orange-500/20 to-orange-500/5",
                  },
                  {
                    icon: Target,
                    title: "Research Funding",
                    description: "Support for academic research and protocol improvements",
                    color: "from-cyan-500/20 to-cyan-500/5",
                  },
                  {
                    icon: Users,
                    title: "Community Projects",
                    description: "Grants for community-driven initiatives and educational content",
                    color: "from-purple-500/20 to-purple-500/5",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation Grants",
                    description: "Special funding for breakthrough ideas and experimental projects",
                    color: "from-orange-500/20 to-orange-500/5",
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
                  Join Discord Community
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  Learn About Ergo
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}
