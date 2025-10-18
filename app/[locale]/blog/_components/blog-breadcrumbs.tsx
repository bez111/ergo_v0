"use client"

import Link from 'next/link'
import { ChevronRight, Home, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface BlogBreadcrumbsProps {
  title: string
  category: string
}

interface BreadcrumbItem {
  label: string
  href: string
  icon?: LucideIcon
  current?: boolean
}

export function BlogBreadcrumbs({ title, category }: BlogBreadcrumbsProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Blog', href: '/blog' },
    { label: category.charAt(0).toUpperCase() + category.slice(1), href: `/blog?category=${category}` },
    { label: title, href: '#', current: true }
  ]

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <motion.ol 
        className="flex items-center space-x-2 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
            )}
            {crumb.current ? (
              <span className="text-gray-400 truncate max-w-[200px]" title={crumb.label}>
                {crumb.icon && <crumb.icon className="w-4 h-4 inline mr-1" />}
                {crumb.label.length > 30 ? `${crumb.label.slice(0, 30)}...` : crumb.label}
              </span>
            ) : (
              <Link 
                href={crumb.href}
                className="text-gray-500 hover:text-orange-400 transition-colors flex items-center"
              >
                {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </motion.ol>
    </nav>
  )
} 