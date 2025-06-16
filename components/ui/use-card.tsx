import * as React from "react"
import { Card } from "./card"
import Link from "next/link"
import Image from "next/image"

interface Project {
  name: string
  logo?: string
}

interface UseCardProps {
  icon?: React.ReactNode
  title: string
  subtitle?: string
  description?: string
  tags?: string[]
  projects?: Project[]
  cta?: { label: string; href: string }
  children?: React.ReactNode
  className?: string
}

export function UseCard({
  icon,
  title,
  subtitle,
  description,
  tags = [],
  projects = [],
  cta,
  children,
  className = "",
}: UseCardProps) {
  return (
    <Card className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl ${className}`}>
      {/* Header */}
      {(icon || title || subtitle) && (
        <div className="flex items-start gap-4 mb-4">
          {icon && <div className="p-3 bg-gray-800 rounded-lg flex items-center justify-center">{icon}</div>}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            {subtitle && <div className="text-gray-400 text-sm mb-1">{subtitle}</div>}
          </div>
        </div>
      )}
      {/* Description */}
      {description && <div className="mb-4 text-gray-300 leading-relaxed">{description}</div>}
      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">{tag}</span>
          ))}
        </div>
      )}
      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-3">Supported Projects:</p>
          <div className="flex items-center gap-3 flex-wrap">
            {projects.slice(0, 3).map((project) => (
              <div key={project.name} className="flex items-center gap-2">
                {project.logo && <Image src={project.logo} alt={project.name} width={24} height={24} className="w-6 h-6 rounded opacity-80" />}
                <span className="text-gray-300 text-sm">{project.name}</span>
              </div>
            ))}
            {projects.length > 3 && <span className="text-gray-400 text-sm">+{projects.length - 3} more</span>}
          </div>
        </div>
      )}
      {/* Custom children */}
      {children}
      {/* CTA */}
      {cta && (
        <Link href={cta.href}>
          <div className="mt-4 flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">
            <span>{cta.label}</span>
            {/* Можно добавить иконку стрелки, если нужно */}
          </div>
        </Link>
      )}
    </Card>
  )
} 