"use client"

import React from "react"
import Link from "next/link"
import { Wallet, Layers, Users, CreditCard, Cpu, Code, Zap } from "lucide-react"

const iconMap = {
  Wallet,
  CreditCard,
  Layers,
  Cpu,
  Users,
  Code,
  Zap,
} as const

interface QuickActionCardProps {
  action: {
    title: string
    description: string
    iconName: keyof typeof iconMap
    href: string
    ariaLabel: string
    analytics?: string
  }
}

export function QuickActionCard({ action }: QuickActionCardProps) {
  const Icon = iconMap[action.iconName]

  return (
    <Link
      href={action.href}
      className="group relative p-6 rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 hover:scale-105"
      aria-label={action.ariaLabel}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-orange-400" />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm font-mono tracking-wider group-hover:text-orange-400 transition-colors duration-200">
            {action.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            {action.description}
          </p>
        </div>
      </div>
    </Link>
  )
} 