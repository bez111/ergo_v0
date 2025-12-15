"use client"

/**
 * TechnologyCard Component
 * 
 * Premium card design for technology hub page
 * Features:
 * - Category color accent (left border)
 * - Icon with glow effect on hover
 * - Status indicator (pulsing for Live)
 * - "Explore" arrow on hover
 * - Compact details list
 */

import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { TechnologyCategory, TechnologyStatus } from "@/data/technology-topics"

interface TechnologyDetail {
  icon?: LucideIcon
  title: string
  description: string
}

interface TechnologyCardProps {
  title: string
  description: string
  shortDescription?: string
  icon: LucideIcon
  href: string
  category: TechnologyCategory
  status: TechnologyStatus
  details: TechnologyDetail[]
  index?: number
}

// Category colors for left border accent
const categoryAccentColors: Record<TechnologyCategory, string> = {
  core: "from-orange-500 to-amber-500",
  scaling: "from-cyan-500 to-blue-500", 
  privacy: "from-purple-500 to-violet-500",
  economics: "from-emerald-500 to-green-500",
  interop: "from-pink-500 to-rose-500",
}

// Category background colors for icon
const categoryIconBg: Record<TechnologyCategory, string> = {
  core: "bg-orange-500/20 group-hover:bg-orange-500/30",
  scaling: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
  privacy: "bg-purple-500/20 group-hover:bg-purple-500/30",
  economics: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
  interop: "bg-pink-500/20 group-hover:bg-pink-500/30",
}

// Category icon colors
const categoryIconColor: Record<TechnologyCategory, string> = {
  core: "text-orange-400",
  scaling: "text-cyan-400",
  privacy: "text-purple-400",
  economics: "text-emerald-400",
  interop: "text-pink-400",
}

// Category glow colors
const categoryGlow: Record<TechnologyCategory, string> = {
  core: "group-hover:shadow-orange-500/20",
  scaling: "group-hover:shadow-cyan-500/20",
  privacy: "group-hover:shadow-purple-500/20",
  economics: "group-hover:shadow-emerald-500/20",
  interop: "group-hover:shadow-pink-500/20",
}

// Category labels
const categoryLabels: Record<TechnologyCategory, string> = {
  core: "Core Protocol",
  scaling: "Scaling",
  privacy: "Privacy",
  economics: "Economics",
  interop: "Interoperability",
}

export function TechnologyCard({
  title,
  description,
  shortDescription,
  icon: Icon,
  href,
  category,
  status,
  details,
  index = 0,
}: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
      className="group h-full"
    >
      <Link href={href} prefetch={false} className="block h-full">
        <div className={`
          relative h-full overflow-hidden
          bg-black/80 backdrop-blur-sm
          border border-white/10
          rounded-2xl
          transition-all duration-300
          hover:border-white/20
          group-hover:shadow-xl ${categoryGlow[category]}
        `}>
          {/* Category accent - left border gradient */}
          <div className={`
            absolute left-0 top-0 bottom-0 w-1
            bg-gradient-to-b ${categoryAccentColors[category]}
            opacity-60 group-hover:opacity-100
            transition-opacity duration-300
          `} />

          {/* Content */}
          <div className="p-6 pl-5">
            {/* Header: Icon + Category + Status */}
            <div className="flex items-start justify-between mb-4">
              {/* Icon with glow */}
              <div className={`
                relative w-14 h-14 rounded-xl
                ${categoryIconBg[category]}
                flex items-center justify-center
                transition-all duration-300
                group-hover:scale-110
              `}>
                {/* Glow effect */}
                <div className={`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br ${categoryAccentColors[category]}
                  opacity-0 group-hover:opacity-20
                  blur-xl transition-opacity duration-300
                `} />
                <Icon className={`w-7 h-7 ${categoryIconColor[category]} relative z-10`} />
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2">
                {status === "live" ? (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-medium text-emerald-400">Live</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                    </span>
                    <span className="text-xs font-medium text-orange-400">Research</span>
                  </div>
                )}
              </div>
            </div>

            {/* Category label */}
            <div className="mb-2">
              <span className={`
                text-xs font-medium uppercase tracking-wider
                ${categoryIconColor[category]} opacity-80
              `}>
                {categoryLabels[category]}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {shortDescription || description}
            </p>

            {/* Details list - compact */}
            <div className="space-y-1.5 mb-4">
              {details.slice(0, 3).map((detail) => (
                <div
                  key={detail.title}
                  className="flex items-center gap-2 text-sm"
                >
                  {detail.icon ? (
                    <detail.icon className={`w-3.5 h-3.5 ${categoryIconColor[category]} flex-shrink-0`} />
                  ) : (
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${categoryAccentColors[category]}`} />
                  )}
                  <span className="text-neutral-300 truncate">{detail.title}</span>
                </div>
              ))}
            </div>

            {/* Explore CTA - appears on hover */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
                Learn more
              </span>
              <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <span className={categoryIconColor[category]}>Explore</span>
                <ArrowRight className={`w-4 h-4 ${categoryIconColor[category]}`} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

