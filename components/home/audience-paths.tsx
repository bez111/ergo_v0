"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cpu, User, LineChart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function AudiencePaths() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationConfig = getAnimationConfig(isMobile, prefersReducedMotion)

  useEffect(() => {
    setHasMounted(true)
    const timer = setTimeout(() => {
      setIsInitialized(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const scaleOnHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  const audiences = [
    {
      title: "FOR DEVELOPERS",
      description: "Build innovative applications on Ergo",
      icon: Code,
      cta: "START BUILDING",
      ctaLink: "/build",
      links: [
        { label: "Documentation", href: "/build/docs" },
        { label: "Tutorials", href: "/build/tutorials" },
        { label: "Grants", href: "/ecosystem/grants" },
      ],
    },
    {
      title: "FOR MINERS",
      description: "Secure the network and earn rewards",
      icon: Cpu,
      cta: "START MINING",
      ctaLink: "/use/mining",
      links: [
        { label: "Mining Pools", href: "/use/mining/pools" },
        { label: "Profitability Calculator", href: "/use/mining/calculator" },
      ],
    },
    {
      title: "FOR USERS",
      description: "Use Ergo for payments, privacy, and DeFi",
      icon: User,
      cta: "GET STARTED",
      ctaLink: "/start",
      links: [
        { label: "Wallets", href: "/wallet" },
        { label: "Applications", href: "/ecosystem" },
        { label: "Buy ERG", href: "/use/get-erg" },
      ],
    },
    {
      title: "FOR INVESTORS",
      description: "Understand Ergo's value proposition",
      icon: LineChart,
      cta: "EXPLORE ECOSYSTEM",
      ctaLink: "/ecosystem",
      links: [
        { label: "Projects", href: "/ecosystem" },
        { label: "Statistics", href: "/technology/eutxo-model" },
        { label: "Use Cases", href: "/learn/use-cases" },
      ],
    },
  ]

  if (!hasMounted) {
    return (
      <section className="py-16 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-8">FIND YOUR PATH</h2>
              <p className="text-gray-400 md:text-lg mt-2 max-w-3xl mx-auto font-mono">
                <span className="text-brand-primary-400">&gt;</span> Ergo offers different entry points depending on your interests
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((audience, index) => (
                <Card key={index} className="flex flex-col h-full bg-neutral-900/50 border border-neutral-700">
                  <CardHeader>
                    <div className="rounded-full bg-brand-primary-500/20 p-3 w-fit mb-2 border border-brand-primary-500/30">
                      <audience.icon className="h-6 w-6 text-brand-primary-400" />
                    </div>
                    <CardTitle className="font-mono tracking-wider">{audience.title}</CardTitle>
                    <CardDescription className="text-gray-400 font-mono">{audience.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {audience.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-primary-400 hover:underline flex items-center gap-1 font-mono">
                            <ArrowRight className="h-3 w-3 text-brand-primary-400" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full gap-2 bg-transparent border-2 border-brand-primary-500 text-brand-primary-400 hover:bg-brand-primary-500 hover:text-black font-mono tracking-wider">
                      <Link href={audience.ctaLink}>
                        {audience.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col gap-8"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.1 : 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-brand-primary-400">FIND YOUR</span> PATH
            </h2>
            <div className="w-24 h-1 bg-brand-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 md:text-lg mt-2 max-w-3xl mx-auto font-mono">
              <span className="text-brand-primary-400">&gt;</span> Ergo offers different entry points depending on your interests
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className={cn(
                    "flex flex-col h-full bg-neutral-900/50 border border-neutral-700 transition-all duration-300 relative overflow-hidden backdrop-blur-sm hover:border-brand-primary-500/30 hover:bg-neutral-800/50",
                    hoveredIndex === index ? "border-brand-primary-500/50 bg-brand-primary-500/5" : "",
                  )}
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
                        hoveredIndex === index ? "bg-brand-primary-500/30" : "",
                      )}
                    >
                      <audience.icon
                        className={cn(
                          "h-6 w-6 text-brand-primary-400 transition-all duration-300",
                          hoveredIndex === index ? "scale-110" : "",
                        )}
                      />
                    </div>
                    <CardTitle className="font-mono tracking-wider group-hover:text-brand-primary-400 transition-colors duration-200">
                      {audience.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-mono">
                      {audience.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {audience.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-brand-primary-400 hover:underline flex items-center gap-2 font-mono transition-colors duration-200"
                          >
                            <ArrowRight className="h-3 w-3 text-brand-primary-400" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full gap-2 bg-transparent border-2 border-brand-primary-500 text-brand-primary-400 hover:bg-brand-primary-500 hover:text-black font-mono tracking-wider transition-all duration-200"
                    >
                      <Link href={audience.ctaLink}>
                        {audience.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>


                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
