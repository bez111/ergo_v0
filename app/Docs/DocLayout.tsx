import React from 'react'
import { docStyles, cn } from './doc-styles'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface DocLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function DocLayout({ children, title, description, className }: DocLayoutProps) {
  return (
    <div className={cn(docStyles.page, className)}>
      <div className={docStyles.container}>
        {title && (
          <div className="mb-12">
            <h1 className={docStyles.h1}>{title}</h1>
            {description && <p className={docStyles.lead}>{description}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

interface DocSectionProps {
  children: React.ReactNode
  title?: string
  icon?: React.ReactNode
  className?: string
}

export function DocSection({ children, title, icon, className }: DocSectionProps) {
  return (
    <div className={cn(docStyles.section, className)}>
      {title && (
        <h2 className={docStyles.sectionTitle}>
          {icon}
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}

interface DocCardProps {
  href?: string
  title: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export function DocCard({ href, title, description, icon, children, className, onClick }: DocCardProps) {
  const content = (
    <div className="flex items-start gap-4">
      {icon && (
        <div className="flex-shrink-0">
          <div className={docStyles.featureIcon}>
            {icon}
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className={docStyles.featureTitle}>
          {title}
        </h3>
        {description && (
          <p className={docStyles.featureDescription}>
            {description}
          </p>
        )}
        {children}
      </div>
      {href && <ChevronRight className={docStyles.chevron} />}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className={cn(docStyles.featureCard, className)}>
        {content}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={cn(docStyles.featureCard, className)}>
        {content}
      </button>
    )
  }

  return (
    <div className={cn(docStyles.card, className)}>
      {content}
    </div>
  )
}

interface DocGridProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4
  className?: string
}

export function DocGrid({ children, columns = 2, className }: DocGridProps) {
  const gridClass = columns === 3 ? docStyles.grid3 : columns === 4 ? docStyles.grid4 : docStyles.grid2
  return (
    <div className={cn(gridClass, className)}>
      {children}
    </div>
  )
}

interface DocButtonProps {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function DocButton({ href, variant = 'primary', icon, children, className, onClick }: DocButtonProps) {
  const variantClass = 
    variant === 'secondary' ? docStyles.buttonSecondary :
    variant === 'outline' ? docStyles.buttonOutline :
    docStyles.buttonPrimary

  const content = (
    <>
      {icon}
      {children}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(variantClass, className)}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cn(variantClass, className)}>
      {content}
    </button>
  )
}

interface DocAlertProps {
  variant?: 'info' | 'warning' | 'success' | 'error'
  title?: string
  children: React.ReactNode
  className?: string
}

export function DocAlert({ variant = 'info', title, children, className }: DocAlertProps) {
  const variantClass = 
    variant === 'warning' ? docStyles.alertWarning :
    variant === 'success' ? docStyles.alertSuccess :
    variant === 'error' ? docStyles.alertError :
    docStyles.alertInfo

  return (
    <div className={cn(variantClass, className)}>
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  )
}

interface DocListProps {
  items: Array<{ icon?: React.ReactNode; text: string }>
  className?: string
}

export function DocList({ items, className }: DocListProps) {
  return (
    <ul className={cn(docStyles.list, className)}>
      {items.map((item, index) => (
        <li key={index} className={docStyles.listItem}>
          {item.icon}
          {item.text}
        </li>
      ))}
    </ul>
  )
}

interface DocCodeProps {
  children: string
  inline?: boolean
  className?: string
}

export function DocCode({ children, inline = false, className }: DocCodeProps) {
  if (inline) {
    return <code className={cn(docStyles.codeInline, className)}>{children}</code>
  }
  
  return (
    <pre className={cn(docStyles.codeBlock, className)}>
      <code>{children}</code>
    </pre>
  )
} 