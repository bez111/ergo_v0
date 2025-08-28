import React from "react"
import Link from "next/link"
import { Code, Cpu, User, LineChart, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  Code,
  Cpu,
  User,
  LineChart,
} as const

export function AudiencePaths() {
  const audiences = [
    {
      title: "For Developers",
      description: "Build advanced DeFi applications and dApps with ErgoScript",
      iconName: "Code" as const,
      cta: "Start Developing",
      ctaLink: "/docs",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Technology", href: "/technology" },
        { label: "Use Cases", href: "/use-cases" }
      ],
    },
    {
      title: "For Miners",
      description: "Join the ASIC-resistant Autolykos mining network",
      iconName: "Cpu" as const,
      cta: "Start Mining",
      ctaLink: "/mining",
      links: [
        { label: "Mining Docs", href: "/mining" },
        { label: "Mining Pools", href: "/mining-pools" },
        { label: "Profitability Calculator", href: "/mining-calculator" }
      ],
    },
    {
      title: "For Users",
      description: "Explore the ecosystem and start using Ergo",
      iconName: "User" as const,
      cta: "Get Wallet",
      ctaLink: "/wallets",
      links: [
        { label: "Wallets", href: "/wallets" },
        { label: "Ecosystem", href: "/ecosystem" },
        { label: "Buy ERG", href: "/buy-erg" }
      ],
    },
    {
      title: "For Investors",
      description: "Learn about investment opportunities in the Ergo ecosystem",
      iconName: "LineChart" as const,
      cta: "Learn About Investing",
      ctaLink: "/invest",
      links: [
        { label: "What is Ergo", href: "/what-is-ergo" },
        { label: "Projects", href: "/projects" },
        { label: "Community", href: "/community" }
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="audience-paths">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                GET STARTED WITH ERGO
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your path and start your journey in the Ergo ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => {
              const Icon = iconMap[audience.iconName]
              return (
                <Card key={index} className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-orange-900/20 rounded-xl border border-orange-500/20">
                      <Icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-white text-lg mb-2">{audience.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">
                      {audience.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {audience.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="block text-sm text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                        >
                          {link.label}
                          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold">
                      <Link href={audience.ctaLink}>
                        {audience.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
