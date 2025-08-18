'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Code, Cpu, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface RelatedItem {
  title: string
  description: string
  href: string
  type: 'article' | 'guide' | 'technology' | 'use-case'
  readTime?: number
}

interface RelatedContentProps {
  items: RelatedItem[]
  title?: string
  className?: string
}

const typeIcons = {
  article: FileText,
  guide: BookOpen,
  technology: Cpu,
  'use-case': Code,
}

export function RelatedContent({ 
  items, 
  title = 'Related Content',
  className = '' 
}: RelatedContentProps) {
  if (!items || items.length === 0) return null

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-neutral-100 mb-8">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = typeIcons[item.type] || FileText
            
            return (
              <Link key={item.href} href={item.href}>
                <Card className="h-full hover:border-brand-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary-500/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Icon className="w-5 h-5 text-brand-primary-400" />
                      {item.readTime && (
                        <span className="text-xs text-neutral-400">
                          {item.readTime} min read
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg mt-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2">
                      {item.description}
                    </CardDescription>
                    <div className="flex items-center mt-4 text-brand-primary-400 text-sm font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Pre-defined related content for common topics
export const relatedContentMap: Record<string, RelatedItem[]> = {
  ergoscript: [
    {
      title: 'ErgoScript Tutorial',
      description: 'Learn the basics of ErgoScript programming',
      href: '/docs/developers/ergoscript-languages',
      type: 'guide',
      readTime: 15
    },
    {
      title: 'Smart Contract Examples',
      description: 'Real-world ErgoScript contract examples',
      href: '/docs/developers/tutorials',
      type: 'guide',
      readTime: 10
    },
    {
      title: 'Sigma Protocols',
      description: 'Understanding Sigma protocols in Ergo',
      href: '/technology/privacy-features',
      type: 'technology',
      readTime: 8
    }
  ],
  stablecoins: [
    {
      title: 'AgeUSD Protocol',
      description: 'How the AgeUSD stablecoin protocol works',
      href: '/use/use-cases/algorithmic-stablecoins',
      type: 'use-case',
      readTime: 12
    },
    {
      title: 'DeFi on Ergo',
      description: 'Building decentralized finance applications',
      href: '/ecosystem/financial',
      type: 'article',
      readTime: 10
    },
    {
      title: 'Oracle Pools',
      description: 'Decentralized price feeds for DeFi',
      href: '/technology/oracle-pools',
      type: 'technology',
      readTime: 8
    }
  ],
  mining: [
    {
      title: 'Start Mining Ergo',
      description: 'Complete guide to mining ERG',
      href: '/docs/miners/mining-guides',
      type: 'guide',
      readTime: 20
    },
    {
      title: 'Autolykos Algorithm',
      description: 'Understanding Ergo\'s mining algorithm',
      href: '/docs/introduction/autolykos',
      type: 'technology',
      readTime: 15
    },
    {
      title: 'Mining Profitability',
      description: 'Calculate your mining rewards',
      href: '/use/mining',
      type: 'use-case',
      readTime: 5
    }
  ],
  privacy: [
    {
      title: 'Sigma Protocols',
      description: 'Zero-knowledge proofs in Ergo',
      href: '/technology/privacy-features',
      type: 'technology',
      readTime: 12
    },
    {
      title: 'Privacy Guide',
      description: 'Best practices for privacy on Ergo',
      href: '/docs/introduction/privacy-guide',
      type: 'guide',
      readTime: 10
    },
    {
      title: 'Mixer & ErgoMix',
      description: 'Privacy tools for transactions',
      href: '/use/use-cases/privacy-confidentiality',
      type: 'use-case',
      readTime: 8
    }
  ]
}

export default RelatedContent 