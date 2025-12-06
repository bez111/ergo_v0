"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react"
import { Lock, Zap, RefreshCw, Users, BookOpen, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap = {
  Shield,
  Zap,
  RefreshCw,
  BookOpen,
  Lock,
  Users,
} as const

interface DifferentiatorCardProps {
  differentiator: {
    text: string
    iconName: keyof typeof iconMap
    description: string
  }
  index: number
}

export function DifferentiatorCard({ differentiator, index }: DifferentiatorCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = iconMap[differentiator.iconName]

  return (
    <div
      className={cn(
        "group relative p-6 bg-neutral-900/50 rounded-xl border transition-all duration-300",
        "hover:bg-neutral-800/50 hover:scale-[1.02] active:scale-[0.98]",
        isHovered ? "border-orange-500/50" : "border-neutral-700"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="listitem"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            <Icon className="h-6 w-6 text-orange-400" />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
            {differentiator.text}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed">
          {differentiator.description}
        </p>
      </div>
      
      {/* Subtle glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-orange-500/5 rounded-xl pointer-events-none" />
      )}
    </div>
  )
} 