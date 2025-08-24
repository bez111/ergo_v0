// Internal Linking Strategy for Ergo Platform
// Automated contextual linking with SEO best practices

export interface LinkRule {
  keywords: string[]
  targetUrl: string
  title: string
  priority: number
  maxLinksPerPage: number
  excludePages?: string[]
  contextRequired?: string[]
}

// Core linking rules for Ergo Platform
export const linkingRules: LinkRule[] = [
  // Technology Core Concepts
  {
    keywords: ['eUTXO', 'eUTXO model', 'extended UTXO'],
    targetUrl: '/technology/eutxo',
    title: 'Learn about eUTXO Model',
    priority: 10,
    maxLinksPerPage: 2,
    excludePages: ['/technology/eutxo']
  },
  {
    keywords: ['ErgoScript', 'Ergo Script', 'smart contracts'],
    targetUrl: '/technology/ergoscript',
    title: 'Explore ErgoScript',
    priority: 10,
    maxLinksPerPage: 2,
    excludePages: ['/technology/ergoscript']
  },
  {
    keywords: ['storage rent', 'blockchain sustainability'],
    targetUrl: '/technology/storage-rent',
    title: 'Understanding Storage Rent',
    priority: 9,
    maxLinksPerPage: 1,
    excludePages: ['/technology/storage-rent']
  },
  {
    keywords: ['NIPoPoWs', 'non-interactive proofs'],
    targetUrl: '/technology/nipopows',
    title: 'NIPoPoWs Technology',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/technology/nipopows']
  },
  {
    keywords: ['Autolykos', 'proof of work', 'mining algorithm'],
    targetUrl: '/technology/secure-pow',
    title: 'Autolykos PoW Algorithm',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/technology/secure-pow']
  },

  // Documentation Links
  {
    keywords: ['documentation', 'developer docs', 'API reference'],
    targetUrl: '/docs',
    title: 'Developer Documentation',
    priority: 9,
    maxLinksPerPage: 1,
    excludePages: ['/docs']
  },
  {
    keywords: ['getting started', 'quick start', 'tutorial'],
    targetUrl: '/docs/developers/tutorials',
    title: 'Getting Started Guide',
    priority: 8,
    maxLinksPerPage: 1
  },
  {
    keywords: ['wallet', 'wallets', 'Ergo wallet'],
    targetUrl: '/wallet',
    title: 'Get Ergo Wallet',
    priority: 9,
    maxLinksPerPage: 2,
    excludePages: ['/wallet']
  },

  // Ecosystem Links
  {
    keywords: ['ecosystem', 'dApps', 'applications'],
    targetUrl: '/ecosystem',
    title: 'Ergo Ecosystem',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/ecosystem']
  },
  {
    keywords: ['SigmaUSD', 'stablecoin', 'algorithmic stablecoin'],
    targetUrl: '/ecosystem/financial/sigmausd',
    title: 'SigmaUSD Stablecoin',
    priority: 7,
    maxLinksPerPage: 1
  },
  {
    keywords: ['ErgoDEX', 'decentralized exchange', 'DEX'],
    targetUrl: '/ecosystem/financial/ergodex',
    title: 'ErgoDEX Exchange',
    priority: 7,
    maxLinksPerPage: 1
  },

  // Use Cases
  {
    keywords: ['DeFi', 'decentralized finance'],
    targetUrl: '/use/cases/defi',
    title: 'DeFi Use Cases',
    priority: 8,
    maxLinksPerPage: 1
  },
  {
    keywords: ['privacy', 'confidential transactions'],
    targetUrl: '/use/cases/privacy',
    title: 'Privacy Features',
    priority: 7,
    maxLinksPerPage: 1
  },
  {
    keywords: ['NFT', 'NFTs', 'non-fungible tokens'],
    targetUrl: '/use/cases/nfts',
    title: 'NFTs on Ergo',
    priority: 6,
    maxLinksPerPage: 1
  },

  // Mining
  {
    keywords: ['mining', 'mine Ergo', 'mining pools'],
    targetUrl: '/use/mining',
    title: 'Start Mining Ergo',
    priority: 8,
    maxLinksPerPage: 1,
    excludePages: ['/use/mining']
  },

  // Community
  {
    keywords: ['community', 'Discord', 'Telegram'],
    targetUrl: '/start/community',
    title: 'Join Community',
    priority: 6,
    maxLinksPerPage: 1
  }
]

// Hub pages that should receive more internal links
export const hubPages = [
  '/technology',
  '/docs',
  '/ecosystem',
  '/use',
  '/blog'
]

// Generate internal links for content
export function generateInternalLinks(
  content: string,
  currentUrl: string,
  maxLinks: number = 5
): { content: string; linksAdded: number } {
  let modifiedContent = content
  let linksAdded = 0
  const usedRules = new Set<string>()

  // Sort rules by priority
  const sortedRules = [...linkingRules].sort((a, b) => b.priority - a.priority)

  for (const rule of sortedRules) {
    if (linksAdded >= maxLinks) break
    if (rule.excludePages?.includes(currentUrl)) continue
    if (usedRules.has(rule.targetUrl)) continue

    let ruleLinksAdded = 0
    
    for (const keyword of rule.keywords) {
      if (ruleLinksAdded >= rule.maxLinksPerPage) break
      if (linksAdded >= maxLinks) break

      // Create regex for keyword matching (case insensitive, word boundaries)
      const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b(?![^<]*>)`, 'gi')
      
      // Check if keyword exists and isn't already linked
      const matches = modifiedContent.match(regex)
      if (matches && matches.length > 0) {
        // Replace first occurrence with link
        modifiedContent = modifiedContent.replace(
          regex,
          `<a href="${rule.targetUrl}" title="${rule.title}" class="internal-link">$&</a>`
        )
        ruleLinksAdded++
        linksAdded++
        usedRules.add(rule.targetUrl)
        break // Only one link per rule per page
      }
    }
  }

  return { content: modifiedContent, linksAdded }
}

// Escape special regex characters
function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Generate contextual links based on page type
export function getContextualLinks(pageType: string, currentUrl: string) {
  const links: Array<{ url: string; title: string; description: string }> = []

  switch (pageType) {
    case 'technology':
      links.push(
        { url: '/docs', title: 'Developer Documentation', description: 'Technical guides and API reference' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Applications built on Ergo' },
        { url: '/use', title: 'Use Cases', description: 'Real-world applications' }
      )
      break

    case 'docs':
      links.push(
        { url: '/technology', title: 'Technology', description: 'Core blockchain concepts' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Live applications' },
        { url: '/start/introduction', title: 'Getting Started', description: 'New to Ergo?' }
      )
      break

    case 'blog':
      links.push(
        { url: '/docs', title: 'Documentation', description: 'Technical resources' },
        { url: '/technology', title: 'Technology', description: 'Learn the fundamentals' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Explore applications' }
      )
      break

    case 'ecosystem':
      links.push(
        { url: '/technology', title: 'Technology', description: 'Understanding the platform' },
        { url: '/docs', title: 'Build on Ergo', description: 'Developer resources' },
        { url: '/use', title: 'Use Cases', description: 'Application scenarios' }
      )
      break

    default:
      // Homepage and other pages
      links.push(
        { url: '/technology', title: 'Technology', description: 'Core innovations' },
        { url: '/docs', title: 'Documentation', description: 'Developer resources' },
        { url: '/ecosystem', title: 'Ecosystem', description: 'Applications and tools' }
      )
  }

  // Filter out current page
  return links.filter(link => link.url !== currentUrl)
}

// Calculate internal linking score for a page
export function calculateLinkingScore(
  internalLinks: number,
  externalLinks: number,
  pageDepth: number,
  isHubPage: boolean
): { score: number; recommendations: string[] } {
  let score = 0
  const recommendations: string[] = []

  // Internal links scoring
  if (internalLinks >= 3 && internalLinks <= 8) {
    score += 30
  } else if (internalLinks < 3) {
    score += internalLinks * 10
    recommendations.push('Add more internal links (target: 3-8 per page)')
  } else {
    score += 20
    recommendations.push('Consider reducing internal links (current: excessive)')
  }

  // External links scoring
  if (externalLinks <= 3) {
    score += 20
  } else {
    score += 10
    recommendations.push('Limit external links to maintain link equity')
  }

  // Page depth scoring
  if (pageDepth <= 3) {
    score += 30
  } else if (pageDepth <= 5) {
    score += 20
  } else {
    score += 10
    recommendations.push('Page is too deep in site hierarchy')
  }

  // Hub page bonus
  if (isHubPage) {
    score += 20
  }

  return { score, recommendations }
}

// Generate breadcrumb navigation
export function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [{ name: 'Home', url: '/' }]

  let currentPath = ''
  for (const segment of segments) {
    currentPath += `/${segment}`
    
    // Convert segment to readable name
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({ name, url: currentPath })
  }

  return breadcrumbs
} 