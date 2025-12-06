"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { CopyButton } from "@/components/ui/copy-button"

// Types для паттернов
export interface FeatureGridItem {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

export interface HeroPatternProps {
  title: string
  highlight: string
  subtitle: string
  description: string
  primaryAction: {
    text: string
    icon: LucideIcon
    onClick?: () => void
  }
  secondaryAction: {
    text: string
    icon: LucideIcon
    onClick?: () => void
  }
}

export interface FeatureGridProps {
  items: FeatureGridItem[]
  columns?: 2 | 3 | 4
  className?: string
  isInitialized?: boolean
  isTabVisited?: boolean
}

// Hero Pattern Component
export const HeroPattern: React.FC<HeroPatternProps> = ({
  title,
  highlight,
  subtitle,
  description,
  primaryAction,
  secondaryAction
}) => {
  return (
    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
      <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
        {title} <span className="text-orange-400">{highlight}</span>
      </h1>
      <p className="text-xl text-gray-400 mb-6">
        {subtitle}
      </p>
      {description && (
        <p className="text-gray-400 mb-6">
          {description}
        </p>
      )}
      <div className="flex flex-wrap gap-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
            onClick={primaryAction.onClick}
          >
            <primaryAction.icon className="w-4 h-4 mr-2" />
            {primaryAction.text}
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button 
            variant="outline" 
            className="border-neutral-700 text-gray-300 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black"
            onClick={secondaryAction.onClick}
          >
            <secondaryAction.icon className="w-4 h-4 mr-2" />
            {secondaryAction.text}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

// Feature Grid Pattern Component
export const FeatureGrid: React.FC<FeatureGridProps> = ({ 
  items, 
  columns = 3, 
  className = "",
  isInitialized = true,
  isTabVisited = false
}) => {
  const gridClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
  }[columns]

  return (
    <div className={`grid ${gridClass} gap-6 ${className}`}>
      {items.map((feature, index) => {
        const animationProps = isTabVisited 
          ? {
              initial: { opacity: 1, y: 0 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0 }
            }
          : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4, delay: index * 0.1 }
            }
        
        return (
          <motion.div 
            key={feature.title} 
            className="bg-black/80 border-white/10 rounded-3xl p-6 text-center hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black group cursor-pointer"
            {...animationProps}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            tabIndex={0}
            role="article"
            aria-label={feature.title}
          >
            <feature.icon className={`w-12 h-12 ${feature.color || 'text-orange-400'} mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`} />
            <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

// Stats Grid Pattern Component
export interface StatsGridItem {
  value: string
  label: string
  icon: LucideIcon
  color?: string
}

export interface StatsGridProps {
  items: StatsGridItem[]
  columns?: 2 | 3 | 4
  className?: string
  isInitialized?: boolean
  isTabVisited?: boolean
}

export const StatsGrid: React.FC<StatsGridProps> = ({ 
  items, 
  columns = 4, 
  className = "",
  isInitialized = true,
  isTabVisited = false
}) => {
  const gridClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3", 
    4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
  }[columns]

  return (
    <div className={`grid ${gridClass} gap-4 ${className}`}>
      {items.map((stat, index) => {
        const animationProps = isTabVisited 
          ? {
              initial: { opacity: 1, scale: 1 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0 }
            }
          : {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, delay: index * 0.1 }
            }
        
        return (
          <motion.div 
            key={stat.label}
            {...animationProps}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-center p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
            tabIndex={0}
            role="button"
            aria-label={`${stat.value} ${stat.label}`}
          >
            <stat.icon className={`w-8 h-8 ${stat.color || 'text-orange-400'} mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`} />
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        )
      })}
    </div>
  )
}

// Feature Card Pattern
export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  subtitle?: string
  description: string
  badge?: string
  action?: {
    text: string
    icon: LucideIcon
    onClick?: () => void
  }
  className?: string
  variant?: "default" | "compact"
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  badge,
  action,
  className = "",
  variant = "default",
}) => {
  const isCompact = variant === "compact"
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }} 
      className={`group ${className}`}
    >
      <Card className={`bg-neutral-900/50 border-neutral-700 hover:border-orange-500/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-black h-full cursor-pointer ${isCompact ? 'p-0' : ''}`}>
        <CardHeader className={isCompact ? 'px-5 pt-5 pb-3' : undefined}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5 text-orange-400" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                {title}
              </CardTitle>
              {subtitle && (
                <div className="text-gray-400 text-sm">{subtitle}</div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className={isCompact ? 'px-5 pb-5 pt-0' : undefined}>
          {!isCompact && (
            <p className="text-gray-300 mb-4">
              {description}
            </p>
          )}
          <div className="flex items-center justify-between">
            {badge && (
              <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/30">
                {badge}
              </Badge>
            )}
            {action && (
              isCompact ? (
                <button 
                  className="text-orange-400 hover:text-orange-300 text-sm inline-flex items-center"
                  onClick={action.onClick}
                >
                  {action.text}
                  <action.icon className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-orange-400 hover:text-orange-300 focus:ring-2 focus:ring-orange-500"
                  onClick={action.onClick}
                >
                  {action.text}
                  <action.icon className="w-4 h-4 ml-1" />
                </Button>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Code Snippet Pattern с автоматическим копированием
export interface CodeSnippetProps {
  title: string
  language: string
  code: string
  filename?: string
  copyable?: boolean
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  title,
  language,
  code,
  filename,
  copyable = true
}) => {
  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-neutral-700">
        <div>
          <h4 className="text-white font-semibold">{title}</h4>
          {filename && (
            <p className="text-gray-400 text-sm">{filename}</p>
          )}
        </div>
        {copyable && (
          <CopyButton text={code} size="md" />
        )}
      </div>
      <div className="p-4 bg-black">
        <pre className="text-sm overflow-x-auto">
          <code className={`language-${language} text-gray-300`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}

// Export all patterns
export const patterns = {
  HeroPattern,
  FeatureGrid,
  StatsGrid,
  FeatureCard,
  CodeSnippet
} 