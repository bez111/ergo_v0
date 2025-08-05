"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

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
        {title} <span className="text-brand-primary-400">{highlight}</span>
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
            className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black"
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
  className = "" 
}) => {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4"
  }[columns]

  return (
    <div className={`grid ${gridClass} gap-6 ${className}`}>
      {items.map((feature, index) => (
        <motion.div 
          key={feature.title} 
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:border-neutral-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          tabIndex={0}
          role="article"
          aria-label={feature.title}
        >
          <feature.icon className={`w-12 h-12 ${feature.color || 'text-brand-primary-400'} mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`} />
          <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
          <p className="text-gray-300 text-sm">{feature.description}</p>
        </motion.div>
      ))}
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
}

export const StatsGrid: React.FC<StatsGridProps> = ({ 
  items, 
  columns = 4, 
  className = "" 
}) => {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3", 
    4: "grid-cols-2 md:grid-cols-4"
  }[columns]

  return (
    <div className={`grid ${gridClass} gap-4 ${className}`}>
      {items.map((stat, index) => (
        <motion.div 
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="text-center p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black"
          tabIndex={0}
          role="button"
          aria-label={`${stat.value} ${stat.label}`}
        >
          <stat.icon className={`w-8 h-8 ${stat.color || 'text-brand-primary-400'} mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`} />
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
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
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  badge,
  action,
  className = ""
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }} 
      className={`group ${className}`}
    >
      <Card className="bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-black h-full">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5 text-brand-primary-400" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-white group-hover:text-brand-primary-400 transition-colors">
                {title}
              </CardTitle>
              {subtitle && (
                <div className="text-gray-400 text-sm">{subtitle}</div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between">
            {badge && (
              <Badge className="bg-brand-primary-500/20 text-brand-primary-400 border border-brand-primary-500/30">
                {badge}
              </Badge>
            )}
            {action && (
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-brand-primary-400 hover:text-brand-primary-300 focus:ring-2 focus:ring-brand-primary-500"
                onClick={action.onClick}
              >
                {action.text}
                <action.icon className="w-4 h-4 ml-1" />
              </Button>
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
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    if (!copyable) return
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="text-gray-400 hover:text-white"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
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