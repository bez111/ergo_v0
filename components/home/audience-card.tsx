"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Cpu, User, LineChart } from "lucide-react"

const iconMap = {
  Code,
  Cpu,
  User,
  LineChart,
} as const

interface AudienceCardProps {
  audience: {
    title: string
    description: string
    iconName: keyof typeof iconMap
    cta: string
    ctaLink: string
    links: { label: string; href: string }[]
  }
}

export function AudienceCard({ audience }: AudienceCardProps) {
  const Icon = iconMap[audience.iconName]
  
  return (
    <Card className="group relative h-full flex flex-col bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-colors" role="listitem">
      <CardHeader className="pb-3 space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
            <Icon className="h-6 w-6 text-orange-400" />
          </div>
          <CardTitle className="text-white">
            {audience.title}
          </CardTitle>
        </div>
        <CardDescription className="text-gray-400">
          {audience.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4 flex-1">
        <div className="space-y-2">
          {audience.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-sm text-gray-300 hover:text-orange-400 transition-colors duration-200 py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 mt-auto">
        <Button
          asChild
          className="w-full bg-transparent border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-black font-mono uppercase tracking-wider transition-colors"
        >
          <Link href={audience.ctaLink} className="inline-flex w-full items-center justify-center">
            {audience.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 