
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { Card } from "./card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

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

function CardInner({
  icon,
  title,
  subtitle,
  description,
  tags,
  projects,
  cta,
  children,
  className,
  withGroupHover,
}: Omit<UseCardProps, "className"> & { className?: string; withGroupHover?: boolean }) {
  return (
    <Card
      className={
        `bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 transition-all duration-200 h-full flex flex-col ` +
        `hover:border-orange-500/30 hover:-translate-y-0.5 ${className || ""}`
      }
    >
      {/* Content wrapper that grows */}
      <div className="flex-1">
        {/* Header */}
        {(icon || title || subtitle) && (
          <div className="flex items-start gap-3 mb-3">
            {icon && (
              <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 text-orange-400" })}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white leading-tight">{title}</h3>
              {subtitle && <div className="text-neutral-400 text-sm mt-1">{subtitle}</div>}
            </div>
          </div>
        )}

        {description && <div className="mb-4 text-neutral-300 text-sm leading-relaxed">{description}</div>}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-neutral-900/60 border border-neutral-700 text-neutral-400 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        {projects && projects.length > 0 && (
          <div className="mb-4">
            <p className="text-neutral-500 text-sm mb-2">Supported Projects:</p>
            <div className="flex items-center gap-2 flex-wrap">
              {projects.slice(0, 3).map((project) => (
                <div key={project.name} className="flex items-center gap-1.5">
                  {project.logo && (
                    <Image src={project.logo} alt={project.name} width={20} height={20} className="w-5 h-5 rounded opacity-70" />
                  )}
                  <span className="text-neutral-400 text-sm">{project.name}</span>
                </div>
              ))}
              {projects.length > 3 && <span className="text-neutral-500 text-sm">+{projects.length - 3}</span>}
            </div>
          </div>
        )}

        {children}
      </div>

      {/* CTA at bottom - hidden by default, shows on hover */}
      {cta && (
        <div 
          className={
            `inline-flex items-center gap-1.5 text-neutral-400 text-sm font-medium transition-all duration-200 mt-auto pt-2 ` +
            `${withGroupHover 
              ? "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-orange-400" 
              : "opacity-0 translate-y-1 hover:opacity-100 hover:translate-y-0 hover:text-orange-400"}`
          }
        >
          <span>{cta.label}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </Card>
  )
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
  if (cta?.href) {
    return (
      <Link
        href={cta.href}
        aria-label={`${title} — ${cta.label}`}
        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-xl h-full"
      >
        <CardInner
          icon={icon}
          title={title}
          subtitle={subtitle}
          description={description}
          tags={tags}
          projects={projects}
          cta={cta}
          className={className + " cursor-pointer"}
          withGroupHover
        />
      </Link>
    )
  }

  return (
    <CardInner
      icon={icon}
      title={title}
      subtitle={subtitle}
      description={description}
      tags={tags}
      projects={projects}
      cta={cta}
      className={className}
    />
  )
} 