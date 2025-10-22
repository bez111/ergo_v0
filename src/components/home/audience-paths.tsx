"use client"

import React from "react"
import Link from "next/link"
import { Code, Cpu, User, LineChart, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"

const iconMap = {
  Code,
  Cpu,
  User,
  LineChart,
} as const

export function AudiencePaths() {
  const t = useTranslations('audiencePaths')
  
  const audiences = [
    {
      title: t("audiences.developers.title"),
      description: t("audiences.developers.description"),
      iconName: "Code" as const,
      cta: t("audiences.developers.cta"),
      ctaLink: "/docs",
      links: [
        { label: t("audiences.developers.links.documentation"), href: "/docs" },
        { label: t("audiences.developers.links.technology"), href: "/technology" },
        { label: t("audiences.developers.links.useCases"), href: "/use-cases" }
      ],
    },
    {
      title: t("audiences.miners.title"),
      description: t("audiences.miners.description"),
      iconName: "Cpu" as const,
      cta: t("audiences.miners.cta"),
      ctaLink: "/mining",
      links: [
        { label: t("audiences.miners.links.miningDocs"), href: "/mining" },
        { label: t("audiences.miners.links.miningPools"), href: "/mining-pools" },
        { label: t("audiences.miners.links.calculator"), href: "/mining-calculator" }
      ],
    },
    {
      title: t("audiences.users.title"),
      description: t("audiences.users.description"),
      iconName: "User" as const,
      cta: t("audiences.users.cta"),
      ctaLink: "/wallets",
      links: [
        { label: t("audiences.users.links.wallets"), href: "/wallets" },
        { label: t("audiences.users.links.ecosystem"), href: "/ecosystem" },
        { label: t("audiences.users.links.buyErg"), href: "/buy-erg" }
      ],
    },
    {
      title: t("audiences.investors.title"),
      description: t("audiences.investors.description"),
      iconName: "LineChart" as const,
      cta: t("audiences.investors.cta"),
      ctaLink: "/invest",
      links: [
        { label: t("audiences.investors.links.whatIsErgo"), href: "/what-is-ergo" },
        { label: t("audiences.investors.links.projects"), href: "/projects" },
        { label: t("audiences.investors.links.community"), href: "/community" }
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="audience-paths">
      {/* Semi-transparent overlay - same as GET STARTED WITH ERGO */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => {
              const Icon = iconMap[audience.iconName]
              return (
                <Card
                  key={index}
                  className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-orange-900/20 rounded-xl border border-orange-500/20">
                      <Icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-white text-lg mb-2">{audience.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">
                      {audience.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
                  <CardFooter>
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
