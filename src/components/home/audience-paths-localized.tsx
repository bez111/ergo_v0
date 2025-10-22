"use client"

import React, { useState, useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Cpu, User, LineChart, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card"

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
  const t = useTranslations('audiencePaths')
  const locale = useLocale()

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const audiences: Audience[] = [
    {
      title: t('audiences.developers.title').toUpperCase(),
      description: t('audiences.developers.description'),
      iconName: "Code",
      cta: t('audiences.developers.cta').toUpperCase(),
      ctaLink: "/docs",
      links: [
        { label: t('audiences.developers.links.documentation'), href: "/docs" },
        { label: t('audiences.developers.links.technology'), href: "/technology" },
        { label: t('audiences.developers.links.useCases'), href: "/use" },
      ],
    },
    {
      title: t('audiences.miners.title').toUpperCase(),
      description: t('audiences.miners.description'),
      iconName: "Cpu",
      cta: t('audiences.miners.cta').toUpperCase(),
      ctaLink: "/use/mining",
      links: [
        { label: t('audiences.miners.links.miningDocs'), href: "/docs/miners" },
        { label: t('audiences.miners.links.miningPools'), href: "/mining/pools" },
        { label: t('audiences.miners.links.calculator'), href: "/use/mining#calculator" },
      ],
    },
    {
      title: t('audiences.users.title').toUpperCase(),
      description: t('audiences.users.description'),
      iconName: "User",
      cta: t('audiences.users.cta').toUpperCase(),
      ctaLink: "/start/introduction",
      links: [
        { label: t('audiences.users.links.wallets'), href: "/wallet" },
        { label: t('audiences.users.links.ecosystem'), href: "/ecosystem" },
        { label: t('audiences.users.links.buyErg'), href: "/use/get-erg" },
      ],
    },
    {
      title: t('audiences.investors.title').toUpperCase(),
      description: t('audiences.investors.description'),
      iconName: "LineChart",
      cta: t('audiences.investors.cta').toUpperCase(),
      ctaLink: "/ecosystem",
      links: [
        { label: t('audiences.investors.links.whatIsErgo'), href: "/start/introduction" },
        { label: t('audiences.investors.links.projects'), href: "/ecosystem" },
        { label: t('audiences.investors.links.community'), href: "/start/community" },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 relative" id="choose-path">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{t('title').split(' ').slice(0, 2).join(' ')}</span> {t('title').split(' ').slice(2).join(' ')}
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              {t('subtitle')}
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
                  <Card className="group relative h-full flex flex-col bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 border-neutral-700 hover:border-orange-500/30 hover:from-neutral-900/80 hover:to-neutral-900/60 transition-all duration-300">
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
                        className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider transition-all duration-300 rounded-lg"
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
