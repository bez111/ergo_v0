"use client"

import { useCases } from "./data"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { UseCard } from "@/components/ui/use-card"
import { Coins, Shield, Palette, Users, TrendingUp, Link2, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const iconMap = {
  coins: <Coins className="w-6 h-6 text-gray-300" />,
  shield: <Shield className="w-6 h-6 text-gray-300" />,
  palette: <Palette className="w-6 h-6 text-gray-300" />,
  users: <Users className="w-6 h-6 text-gray-300" />,
  link: <Link2 className="w-6 h-6 text-gray-300" />,
  "trending-up": <TrendingUp className="w-6 h-6 text-gray-300" />,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function UsePage() {
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

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                  REAL-WORLD APPLICATIONS
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pr-4">
                    Ergo Use Cases
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  Discover how Ergo's powerful technology is being used to build the future of finance.
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  From decentralized finance to NFTs and privacy, Ergo provides the tools to create secure and scalable applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                    <Link href="/ecosystem">
                      Explore Ecosystem
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    <Link href="/build">
                      Start Building
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl p-8">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        Featured Use Cases
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "Decentralized Finance (DeFi)", icon: <Coins className="w-6 h-6" /> },
                          { name: "Non-Fungible Tokens (NFTs)", icon: <Palette className="w-6 h-6" /> },
                          { name: "Privacy Applications", icon: <Shield className="w-6 h-6" /> },
                        ].map((feature, index) => (
                          <motion.div
                            key={feature.name}
                            className={`p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700/50`}
                            whileHover={{ scale: 1.02, x: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-orange-400">{feature.icon}</div>
                              <div>
                                <h4 className="font-semibold text-white">{feature.name}</h4>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {useCases.map((uc, idx) => (
          <UseCard
            key={uc.id}
            icon={iconMap[uc.icon as keyof typeof iconMap]}
            title={uc.title}
            subtitle={uc.problemStatement}
            description={uc.solution}
            tags={uc.tags}
            projects={uc.supportedProjects}
            cta={{ label: "Explore Use Case", href: `/use/use-cases/${uc.id}` }}
          />
        ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 