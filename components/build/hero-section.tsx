"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { Users, Play } from "lucide-react"
import Link from "next/link"
import { codeExample } from "@/lib/build-page-data"

export function HeroSection() {
  return (
    <FadeIn>
      <section className="mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2">
              Build on Ergo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              The Future of Secure & Programmable Money
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold" asChild>
                <Link href="/build/docs">
                  <Play className="w-5 h-5 mr-2" /> Get Started
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm"
                asChild
              >
                <Link href="https://discord.gg/ergoplatform" target="_blank">
                  <Users className="w-5 h-5 mr-2" /> Join Discord
                </Link>
              </Button>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-center text-white/80">ErgoScript Example</h3>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <pre className="text-green-400">{codeExample}</pre>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </FadeIn>
  )
} 