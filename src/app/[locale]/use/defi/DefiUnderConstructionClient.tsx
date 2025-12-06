"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Coins, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

export default function DefiUnderConstructionClient() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown to estimated launch (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])


  const features = [
    {
      icon: Coins,
      title: "Advanced AMM",
      description: "Next-generation automated market makers with concentrated liquidity",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Yield Farming",
      description: "Sustainable yield opportunities with innovative tokenomics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure Protocols",
      description: "Battle-tested smart contracts with formal verification",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second transactions with minimal fees",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center max-w-4xl mx-auto">

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  DeFi on Ergo
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              >
                The future of decentralized finance is being built on Ergo. 
                <br className="hidden md:block" />
                Advanced protocols, innovative primitives, and sustainable yields.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-400 mb-12"
              >
                🚀 Coming Soon - Be the first to experience next-generation DeFi
              </motion.p>
            </div>
          </div>
        </section>

        {/* Countdown Timer */}
        <section className="py-16 bg-gray-950/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Estimated Launch</h2>
              <div className="flex justify-center gap-4 md:gap-8">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 md:p-6 mb-2 min-w-[80px] md:min-w-[100px]">
                      <div className="text-2xl md:text-4xl font-bold text-white">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  What's Coming
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary DeFi protocols designed for the next generation of decentralized finance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:bg-gray-900/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <FinalCTASimple 
          title="Join the Ergo Community"
          description="Connect with developers, traders, and DeFi enthusiasts building the future of finance."
          className="bg-gradient-to-b from-gray-900 to-black"
        />
      </div>
    </BackgroundWrapper>
  )
}
