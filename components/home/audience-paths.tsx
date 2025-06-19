"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cpu, User, LineChart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/section-heading"

export function AudiencePaths() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <SectionHeading text="FIND YOUR PATH" />

            <p className="text-gray-400 md:text-lg mt-2 max-w-3xl mx-auto font-mono">
              <span className="text-primary">&gt;</span> Ergo offers different entry points depending on your interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <Card
                key={index}
                className={cn(
                  "flex flex-col h-full bg-black border border-primary/30 transition-all duration-300 relative overflow-hidden",
                  hoveredIndex === index ? "border-primary/50 bg-primary/5" : "",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader>
                  <div
                    className={cn(
                      "rounded-full bg-primary/10 p-3 w-fit mb-2 border border-primary/30 transition-all duration-300",
                      hoveredIndex === index ? "bg-primary/20" : "",
                    )}
                  >
                    <audience.icon
                      className={cn(
                        "h-6 w-6 text-primary transition-all duration-300",
                        hoveredIndex === index ? "scale-110" : "",
                      )}
                    />
                  </div>
                  <CardTitle className="font-mono tracking-wider">{audience.title}</CardTitle>
                  <CardDescription className="text-gray-400 font-mono">{audience.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {audience.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-primary hover:underline flex items-center gap-1 font-mono"
                        >
                          <ArrowRight className="h-3 w-3 text-primary" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono tracking-wider"
                  >
                    <Link href={audience.ctaLink}>
                      {audience.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>

                {/* Border highlight on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 border border-primary/50 rounded-lg pointer-events-none">
                    <div className="absolute top-0 left-0 w-1 h-1 bg-primary"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-primary"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-primary"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-primary"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
