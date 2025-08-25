"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Cpu, User, LineChart, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  Code,
  Cpu,
  User,
  LineChart,
} as const

interface Audience {
  title: string
  description: string
  iconName: keyof typeof iconMap
  cta: string
  ctaLink: string
  links: { label: string; href: string }[]
}

export function AudiencePaths() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const audiences: Audience[] = [
    {
      title: "FOR DEVELOPERS",
      description: "Build innovative applications on Ergo",
      iconName: "Code",
      cta: "START BUILDING",
      ctaLink: "/docs",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Technology", href: "/technology" },
        { label: "Use Cases", href: "/use" },
      ],
    },
    {
      title: "FOR MINERS",
      description: "Secure the network and earn rewards",
      iconName: "Cpu",
      cta: "START MINING",
      ctaLink: "/use/mining",
      links: [
        { label: "Mining Documents", href: "/docs/miners" },
        { label: "Mining Pools", href: "/mining/pools" },
        { label: "Profitability Calculator", href: "/use/mining#calculator" },
      ],
    },
    {
      title: "FOR USERS",
      description: "Use Ergo for payments and DeFi",
      iconName: "User",
      cta: "GET STARTED",
      ctaLink: "/start/introduction",
      links: [
        { label: "Wallets", href: "/wallet" },
        { label: "Ecosystem", href: "/ecosystem" },
        { label: "Buy ERG", href: "/use/get-erg" },
      ],
    },
    {
      title: "FOR INVESTORS",
      description: "Understand Ergo's value proposition",
      iconName: "LineChart",
      cta: "EXPLORE ECOSYSTEM",
      ctaLink: "/ecosystem",
      links: [
        { label: "What is Ergo", href: "/start/introduction" },
        { label: "Projects", href: "/ecosystem" },
        { label: "Use Cases", href: "/use" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-neutral-950" id="choose-path">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              <span className="text-orange-400">GET STARTED</span> WITH ERGO
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Choose your path to explore the Ergo ecosystem.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => {
              const Icon = iconMap[audience.iconName]
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="group relative h-full flex flex-col bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                          <Icon className="h-6 w-6 text-orange-400" />
                        </div>
                        <CardTitle className="text-white text-sm font-bold">
                          {audience.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-400 text-sm">
                        {audience.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-4 flex-1">
                      <ul className="space-y-3">
                        {audience.links.map((link, linkIndex) => (
                          <li key={linkIndex} className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4 text-orange-400 flex-shrink-0" />
                            <Link
                              href={link.href}
                              className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-200"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="pt-4 mt-auto">
                      <Button 
                        asChild
                        className="w-full bg-transparent border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-black font-semibold uppercase tracking-wider transition-all duration-300 rounded-xl"
                      >
                        <Link href={audience.ctaLink} className="inline-flex w-full items-center justify-center">
                          {audience.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
