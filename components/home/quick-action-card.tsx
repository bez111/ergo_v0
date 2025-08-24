"use client"

import React from "react"
import Link from "next/link"
import { Wallet, Layers, Users, CreditCard, Cpu } from "lucide-react"

const iconMap = {
  Wallet,
  CreditCard,
  Layers,
  Cpu,
  Users,
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
      className="group flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-neutral-700 bg-neutral-900/50 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
      aria-label={action.ariaLabel}
      data-analytics={action.analytics}
    >
      <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        <Icon className="h-6 w-6 text-orange-400" />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-orange-400 transition-colors duration-200">
          {action.title}
        </h3>
        <p className="text-xs text-gray-400">{action.description}</p>
      </div>
    </Link>
  )
} 