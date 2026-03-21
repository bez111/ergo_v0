'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

// Types
export type ProgrammaticType = 
  | 'glossary' 
  | 'questions' 
  | 'playbooks' 
  | 'compare' 
  | 'topics' 
  | 'infographics'
  | 'patterns'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  /** Manual items array */
  items?: BreadcrumbItem[]
  
  /** Programmatic type - auto-generates path */
  type?: ProgrammaticType
  
  /** Current page title (required for programmatic type) */
  currentTitle?: string
  
  /** Optional category for deeper nesting */
  category?: string
  
  /** Display mode: visible (default) or hidden (SEO only, sr-only) */
  variant?: 'visible' | 'hidden'
  
  /** Show home icon (default: true) */
  showHome?: boolean
  
  /** Additional CSS classes */
  className?: string
}

// Type configuration for programmatic breadcrumbs
const typeConfig: Record<ProgrammaticType, { name: string; href: string; parent?: { name: string; href: string } }> = {
  glossary: { name: 'Glossary', href: '/learn/glossary', parent: { name: 'Learn', href: '/learn' } },
  questions: { name: 'Q&A', href: '/questions' },
  playbooks: { name: 'Playbooks', href: '/playbooks' },
  compare: { name: 'Compare', href: '/compare' },
  topics: { name: 'Topics', href: '/topics' },
  infographics: { name: 'Infographics', href: '/infographics' },
  patterns: { name: 'Patterns', href: '/patterns' },
}

// Special case formatting for auto-generated breadcrumbs
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

function formatSegmentName(segment: string): string {
  if (specialCases[segment.toLowerCase()]) {
    return specialCases[segment.toLowerCase()]
  }
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
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

function buildProgrammaticItems(
  type: ProgrammaticType,
  currentTitle: string,
  category?: string
): BreadcrumbItem[] {
  const config = typeConfig[type]
  const items: BreadcrumbItem[] = []
  
  // Add parent section if exists (e.g., Learn for Glossary)
  if (config.parent) {
    items.push({ name: config.parent.name, href: config.parent.href })
  }
  
  // Add type hub
  items.push({ name: config.name, href: config.href })
  
  // Add category if provided
  if (category) {
    items.push({ 
      name: category, 
      href: `${config.href}?category=${encodeURIComponent(category.toLowerCase())}` 
    })
  }
  
  // Add current page
  items.push({ name: currentTitle, href: '#' })
  
  return items
}

export function Breadcrumbs({ 
  items,
  type,
  currentTitle,
  category,
  variant = 'visible',
  showHome = true,
  className = ''
}: BreadcrumbsProps) {
  const pathname = usePathname()
  const baseUrl = 'https://www.ergoblockchain.org'
  
  // Determine breadcrumb items based on props
  let breadcrumbItems: BreadcrumbItem[]
  
  if (type && currentTitle) {
    // Programmatic mode
    breadcrumbItems = buildProgrammaticItems(type, currentTitle, category)
  } else if (items) {
    // Manual items mode
    breadcrumbItems = items
  } else {
    // Auto-generate from pathname
    breadcrumbItems = generateBreadcrumbsFromPath(pathname)
  }
  
  // Add home if requested
  const finalItems = showHome 
    ? [{ name: 'Home', href: '/' }, ...breadcrumbItems]
    : breadcrumbItems

  // Generate JSON-LD schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}${pathname}#breadcrumbs`,
    "itemListElement": finalItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.href !== '#' && { "item": `${baseUrl}${item.href}` })
    }))
  }

  if (finalItems.length <= 1) return null

  // Hidden variant - only schema + sr-only nav
  if (variant === 'hidden') {
    return (
      <>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
        />
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            {finalItems.map((item, index) => (
              <li key={`${item.href}-${index}`}>
                {item.href !== '#' ? (
                  <a href={`${baseUrl}${item.href}`}>{item.name}</a>
                ) : (
                  <span aria-current="page">{item.name}</span>
                )}
                {index < finalItems.length - 1 && <span> / </span>}
              </li>
            ))}
          </ol>
        </nav>
      </>
    )
  }

  // Visible variant
  return (
    <>
      <Script
        id={`breadcrumb-schema-${type || 'default'}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      
      <nav 
        aria-label="Breadcrumb"
        className={`flex items-center flex-wrap gap-1 text-sm text-neutral-400 ${className}`}
      >
        {finalItems.map((item, index) => (
          <div key={`${item.href}-${index}`} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-neutral-600" aria-hidden="true" />
            )}
            
            {index === finalItems.length - 1 ? (
              <span className="text-neutral-200 font-medium truncate max-w-[200px]" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                {index === 0 && showHome ? (
                  <>
                    <Home className="w-3.5 h-3.5" aria-label="Home" />
                    <span className="sr-only">Home</span>
                  </>
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

// Legacy exports for backwards compatibility during migration
export { Breadcrumbs as ProgrammaticBreadcrumbs }
export { Breadcrumbs as HiddenBreadcrumbs }

export default Breadcrumbs
