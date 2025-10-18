'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { StructuredData } from './structured-data'

export interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Generate Schema.org structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.href && {
        "item": `https://ergoblockchain.org${item.href}`
      })
    }))
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <nav 
        aria-label="Breadcrumb"
        className={`flex items-center space-x-1 text-sm ${className}`}
      >
        <ol className="flex items-center space-x-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
              )}
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className={index === items.length - 1 ? 'text-white' : 'text-gray-400'}>
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

// Pre-defined breadcrumb patterns for common pages
export const breadcrumbPatterns = {
  technology: [
    { name: 'Home', href: '/' },
    { name: 'Technology', href: '/technology' }
  ],
  ecosystem: [
    { name: 'Home', href: '/' },
    { name: 'Ecosystem', href: '/ecosystem' }
  ],
  docs: [
    { name: 'Home', href: '/' },
          { name: 'Documentation', href: '/docs' }
  ],
  blog: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' }
  ],
  start: [
    { name: 'Home', href: '/' },
    { name: 'Get Started', href: '/start' }
  ]
}

// Helper function to generate breadcrumbs from path
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', href: '/' }]
  
  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({
      name,
      href: index === segments.length - 1 ? undefined : currentPath
    })
  })
  
  return breadcrumbs
} 