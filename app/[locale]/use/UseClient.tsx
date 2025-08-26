"use client"

import { motion } from "framer-motion"
import { Coins, Shield, Palette, Users, TrendingUp, Link2, Eye, Brain, Gamepad2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMemo } from "react"
import { useCases as data } from "./_data"
import { useTranslations } from "next-intl"
import { useLocalizedPath } from "@/hooks/use-localized-path"

const iconNode = {
  coins: <Coins className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  shield: <Shield className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  palette: <Palette className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  users: <Users className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  link: <Link2 className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  "trending-up": <TrendingUp className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  eye: <Eye className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  brain: <Brain className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  gamepad: <Gamepad2 className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
} as const

function isComingSoon(uc: { supportedProjects: string[] }) {
  return !uc.supportedProjects || uc.supportedProjects.length === 0
}

export default function UseClient() {
  const t = useTranslations('useCases')
  const localizedPath = useLocalizedPath()
  const useCases = useMemo(() => data, [])
  return (
    <div className="min-h-screen relative pb-24">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t('title')}</h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">{t('description')}</p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">From DeFi and stablecoins to DAOs and the metaverse, discover how Ergo's technology is building a new era of digital sovereignty.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                  <Link href="/ecosystem">Explore Ecosystem</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-neutral-900/40 px-6 py-3 rounded-xl">
                  <Link href="/docs">Start Building</Link>
                </Button>
              </div>
            </div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Featured Use Cases</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Decentralized Finance (DeFi)", icon: iconNode.coins },
                      { name: "NFTs & Digital Assets", icon: iconNode.palette },
                      { name: "Privacy Applications", icon: iconNode.shield },
                    ].map((feature) => (
                      <motion.div key={feature.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700" whileHover={{ scale: 1.01, x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400">{feature.icon}</div>
                          <h4 className="font-semibold text-white">{feature.name}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Use Cases Grid */}
      <div className="py-14 px-4 max-w-7xl mx-auto">
        <h2 className="sr-only" id="all-use-cases">All Use Cases</h2>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } } }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch" aria-labelledby="all-use-cases">
          {useCases.map((uc) => (
            <motion.div key={uc.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="relative h-full">
              <Card className="relative bg-neutral-900/50 border border-neutral-700 rounded-xl transition-all duration-200 hover:border-orange-500/30 hover:-translate-y-0.5 h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  {isComingSoon(uc) && (
                    <span className="absolute top-5 right-5 px-3 py-1 rounded-md bg-neutral-900/60 border border-neutral-700 text-[10px] text-neutral-300">Coming soon</span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">{iconNode[uc.icon as keyof typeof iconNode]}</div>
                    <h3 className="text-2xl font-bold text-white">{uc.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {uc.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-neutral-900/60 border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                    {uc.tags.length > 3 && (
                      <span className="bg-neutral-900/60 border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">+{uc.tags.length - 3}</span>
                    )}
                  </div>
                  <p className="text-neutral-400 font-medium mb-1">{uc.subtitle}</p>
                  <p className="text-neutral-300 text-base mb-5">{uc.description}</p>
                                      <Button asChild className="mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-orange-500/50 bg-neutral-900/50 text-neutral-200 transition-all hover:border-orange-500 hover:text-orange-400 hover:bg-neutral-900/60 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <Link href={`/use/${uc.id}`} className="flex items-center gap-2" aria-label={`Explore: ${uc.title}`}>
                      Explore: {uc.title} <ArrowRight className="w-5 h-5" aria-hidden="true" focusable="false" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 