'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import Script from 'next/script'
import { useMemo } from 'react'

// Map of URLs to friendly names
const pathNames: Record<string, string> = {
  '': 'Home',
  'blog': 'Blog',
  'wallet': 'Wallets',
  'technology': 'Technology',
  'ecosystem': 'Ecosystem',
  'use': 'Use Cases',
  'learn': 'Learn',
  'faq': 'FAQ',
  'start': 'Get Started',
  'Docs': 'Documentation',
  'developers': 'Developers',
  'miners': 'Miners',
  'events': 'Events',
  'get-erg': 'Buy ERG',
  'mining': 'Mining',
  'ergoscript': 'ErgoScript',
  'eutxo': 'eUTXO Model',
  'nipopows': 'NIPoPoWs',
  'privacy-features': 'Privacy Features',
  'storage-rent': 'Storage Rent',
  'infrastructure': 'Infrastructure',
  'tooling': 'Tooling',
  'tutorials': 'Tutorials',
  'bounties-grants': 'Bounties & Grants',
  'community-support': 'Community Support',
  'resources': 'Resources',
  'introduction': 'Introduction',
  'why-ergo': 'Why Ergo',
  'research': 'Research',
  'guides': 'Guides'
}

interface BreadcrumbItem {
  name: string
  href: string
  current: boolean
}

export function AutoBreadcrumbs() {
  const pathname = usePathname()
  
  const { breadcrumbs, jsonLd } = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = [
      { name: 'Home', href: '/', current: pathname === '/' }
    ]
    
    let currentPath = ''
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const name = pathNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      items.push({
        name,
        href: currentPath,
        current: index === segments.length - 1
      })
    })
    
    // Generate JSON-LD
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://ergoblockchain.org${item.href}`
      }))
    }
    
    return { breadcrumbs: items, jsonLd }
  }, [pathname])
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null
  
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      
      <nav 
        className="flex px-4 py-3 border-b border-gray-800 bg-black/50 backdrop-blur-sm"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-600" aria-hidden="true" />
              )}
              {item.current ? (
                <span className="text-gray-400 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-3 h-3" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
} 