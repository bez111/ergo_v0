"use client"

import Link from "next/link"
import Image from "next/image"

import { motion } from "framer-motion"
import { ArrowRight, Coins, Shield, Palette, Users, TrendingUp, Link2 } from "lucide-react"
import type { UseCase } from "@/lib/use-cases-data"
import { Card } from "@/components/ui/card"

const iconMap = {
  coins: Coins,
  shield: Shield,
  palette: Palette,
  users: Users,
  link: Link2,
  "trending-up": TrendingUp,
}

interface UseCaseCardProps {
  useCase: UseCase
  index: number
}

export function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  const IconComponent = iconMap[useCase.icon as keyof typeof iconMap] || Coins
  const visibleProjects = useCase.supportedProjects.slice(0, 3)
  const remainingCount = useCase.supportedProjects.length - 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, y: -5 }}
    >
      <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <IconComponent className="w-6 h-6 text-gray-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{useCase.problemStatement}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <p className="text-gray-300 leading-relaxed">{useCase.solution}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {useCase.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Supported Projects */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-3">Supported Projects:</p>
          <div className="flex items-center gap-3 flex-wrap">
            {visibleProjects.map((project) => (
              <div key={project.name} className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">{project.name}</span>
              </div>
            ))}
            {remainingCount > 0 && <span className="text-gray-400 text-sm">+{remainingCount} more</span>}
          </div>
        </div>

        {/* CTA */}
        {useCase.id && (
          <Link href={`/use/use-cases/${useCase.id}`}>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className="font-medium">Explore Use Case</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        )}
      </Card>
    </motion.div>
  )
}
