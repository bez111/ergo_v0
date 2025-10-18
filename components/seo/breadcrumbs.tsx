'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export function Breadcrumbs({ 
  items, 
  className = '',
  showHome = true 
}: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Auto-generate breadcrumbs from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname)
  
  // Add home if requested
  const finalItems = showHome 
    ? [{ name: 'Home', href: '/' }, ...breadcrumbItems]
    : breadcrumbItems

  // Generate schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": finalItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ergoblockchain.org${item.href}`
    }))
  }

  if (finalItems.length <= 1) return null

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      
      <nav 
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-sm text-neutral-400 ${className}`}
      >
        {finalItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2" aria-hidden="true" />
            )}
            
            {index === finalItems.length - 1 ? (
              <span className="text-neutral-200" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-orange-400 transition-colors"
              >
                {index === 0 && showHome ? (
                  <Home className="w-4 h-4" aria-label="Home" />
                ) : (
                  item.name
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  if (!pathname || pathname === '/') return []
  
  const segments = pathname.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = []
  
  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const name = formatSegmentName(segment)
    items.push({ name, href })
  })
  
  return items
}

function formatSegmentName(segment: string): string {
  // Special cases
  const specialCases: Record<string, string> = {
    'docs': 'Documentation',
    'use-cases': 'Use Cases',
    'algorithmic-stablecoins': 'Algorithmic Stablecoins',
    'privacy-confidentiality': 'Privacy & Confidentiality',
    'cross-chain-bridges': 'Cross-Chain Bridges',
    'daos-alternative-economies': 'DAOs & Alternative Economies',
    'nfts-digital-assets': 'NFTs & Digital Assets',
    'oracles-data-feeds': 'Oracles & Data Feeds',
    'identity-reputation': 'Identity & Reputation',
    'gaming-metaverse': 'Gaming & Metaverse',
    'ergoscript': 'ErgoScript',
    'subblocks': 'Subblocks',
    'native-tokens': 'Native Tokens',
    'oracle-pools': 'Oracle Pools',
    'velvet-forks': 'Velvet Forks',
    'adaptive-emission': 'Adaptive Emission',
    'nipopows': 'NiPoPoWs',
    'eutxo': 'eUTXO',
    'faq': 'FAQ'
  }
  
  if (specialCases[segment.toLowerCase()]) {
    return specialCases[segment.toLowerCase()]
  }
  
  // Default: capitalize and replace hyphens
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default Breadcrumbs 