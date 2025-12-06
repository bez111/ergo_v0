/**
 * Internal Linking Data for Enhanced SEO
 * Defines related content relationships across the site
 */

export interface RelatedItem {
  title: string
  href: string
  description: string
  type: 'article' | 'guide' | 'technology' | 'use-case' | 'tutorial'
  readTime?: number
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
}

// Related content mapping for different pages
export const relatedContentMap: Record<string, RelatedItem[]> = {
  // Technology pages
  'ergoscript': [
    {
      title: 'eUTXO Model Explained',
      href: '/technology/eutxo-model',
      description: 'Understand the extended UTXO model that powers ErgoScript',
      type: 'technology',
      readTime: 8,
      difficulty: 'Intermediate'
    },
    {
      title: 'Build Your First dApp',
      href: '/use/defi',
      description: 'Apply ErgoScript knowledge to build DeFi applications',
      type: 'use-case',
      readTime: 15,
      difficulty: 'Advanced'
    },
    {
      title: 'Smart Contract Security',
      href: '/patterns',
      description: 'Best practices for secure ErgoScript development',
      type: 'guide',
      readTime: 12,
      difficulty: 'Advanced'
    }
  ],

  'eutxo-model': [
    {
      title: 'ErgoScript Tutorial',
      href: '/learn/ergoscript',
      description: 'Learn to program smart contracts with ErgoScript',
      type: 'tutorial',
      readTime: 20,
      difficulty: 'Intermediate'
    },
    {
      title: 'Native Tokens',
      href: '/technology/native-tokens',
      description: 'How eUTXO enables first-class token support',
      type: 'technology',
      readTime: 6,
      difficulty: 'Beginner'
    },
    {
      title: 'Privacy Features',
      href: '/technology/privacy-features',
      description: 'Privacy capabilities built on eUTXO foundation',
      type: 'technology',
      readTime: 10,
      difficulty: 'Intermediate'
    }
  ],

  'privacy-features': [
    {
      title: 'ErgoMixer Guide',
      href: '/use/privacy',
      description: 'Step-by-step guide to using Ergo\'s mixer',
      type: 'use-case',
      readTime: 8,
      difficulty: 'Beginner'
    },
    {
      title: 'Sigma Protocols Deep Dive',
      href: '/topics/privacy',
      description: 'Technical explanation of zero-knowledge proofs',
      type: 'guide',
      readTime: 15,
      difficulty: 'Advanced'
    },
    {
      title: 'eUTXO Model',
      href: '/technology/eutxo-model',
      description: 'Foundation that enables privacy features',
      type: 'technology',
      readTime: 8,
      difficulty: 'Intermediate'
    }
  ],

  // Use case pages
  'defi': [
    {
      title: 'ErgoScript Tutorial',
      href: '/learn/ergoscript',
      description: 'Learn the language for building DeFi protocols',
      type: 'tutorial',
      readTime: 20,
      difficulty: 'Advanced'
    },
    {
      title: 'Oracle Pools',
      href: '/technology/oracle-pools',
      description: 'Decentralized price feeds for DeFi applications',
      type: 'technology',
      readTime: 10,
      difficulty: 'Intermediate'
    },
    {
      title: 'Get ERG Tokens',
      href: '/use/get-erg',
      description: 'Acquire ERG to participate in DeFi protocols',
      type: 'use-case',
      readTime: 5,
      difficulty: 'Beginner'
    }
  ],

  'nfts': [
    {
      title: 'Native Tokens',
      href: '/technology/native-tokens',
      description: 'Technical foundation for NFTs on Ergo',
      type: 'technology',
      readTime: 6,
      difficulty: 'Beginner'
    },
    {
      title: 'Explore NFT Projects',
      href: '/ecosystem',
      description: 'Discover NFT marketplaces and tools',
      type: 'use-case',
      readTime: 5,
      difficulty: 'Beginner'
    },
    {
      title: 'ErgoScript for NFTs',
      href: '/patterns',
      description: 'Build advanced NFT contracts with royalties',
      type: 'guide',
      readTime: 18,
      difficulty: 'Advanced'
    }
  ],

  'mining': [
    {
      title: 'Autolykos Algorithm',
      href: '/technology/secure-pow',
      description: 'Technical details of Ergo\'s mining algorithm',
      type: 'technology',
      readTime: 12,
      difficulty: 'Intermediate'
    },
    {
      title: 'Mining Ecosystem',
      href: '/miners',
      description: 'Discover mining pools and tools',
      type: 'use-case',
      readTime: 8,
      difficulty: 'Beginner'
    },
    {
      title: 'Storage Rent',
      href: '/technology/storage-rent',
      description: 'How storage rent affects mining rewards',
      type: 'technology',
      readTime: 7,
      difficulty: 'Intermediate'
    }
  ],

  // Learn pages
  'learn-ergoscript': [
    {
      title: 'eUTXO Model',
      href: '/technology/eutxo-model',
      description: 'Understand the data model ErgoScript operates on',
      type: 'technology',
      readTime: 8,
      difficulty: 'Intermediate'
    },
    {
      title: 'Build DeFi Apps',
      href: '/use/defi',
      description: 'Apply your ErgoScript skills to real projects',
      type: 'use-case',
      readTime: 15,
      difficulty: 'Advanced'
    },
    {
      title: 'Developer Resources',
      href: '/docs/developers',
      description: 'Tools and SDKs for ErgoScript development',
      type: 'guide',
      readTime: 10,
      difficulty: 'Intermediate'
    }
  ],

  // Ecosystem pages
  'ecosystem': [
    {
      title: 'Technology Overview',
      href: '/technology',
      description: 'Learn the tech that powers these projects',
      type: 'technology',
      readTime: 10,
      difficulty: 'Beginner'
    },
    {
      title: 'Use Cases',
      href: '/use',
      description: 'See what you can build on Ergo',
      type: 'use-case',
      readTime: 8,
      difficulty: 'Beginner'
    },
    {
      title: 'Developer Grants',
      href: '/ecosystem/grants',
      description: 'Funding opportunities for builders',
      type: 'guide',
      readTime: 5,
      difficulty: 'Beginner'
    }
  ],

  // Start pages
  'start': [
    {
      title: 'Technology Overview',
      href: '/technology',
      description: 'Learn about Ergo\'s technical innovations',
      type: 'technology',
      readTime: 10,
      difficulty: 'Beginner'
    },
    {
      title: 'Use Cases',
      href: '/use',
      description: 'Discover what you can do with Ergo',
      type: 'use-case',
      readTime: 8,
      difficulty: 'Beginner'
    },
    {
      title: 'FAQ',
      href: '/learn/faq',
      description: 'Answers to common questions',
      type: 'guide',
      readTime: 5,
      difficulty: 'Beginner'
    }
  ],

  'quiz': [
    {
      title: 'Getting Started Guide',
      href: '/start/introduction',
      description: 'Comprehensive introduction to Ergo',
      type: 'guide',
      readTime: 12,
      difficulty: 'Beginner'
    },
    {
      title: 'Ergo vs Others',
      href: '/start/comparison',
      description: 'How Ergo compares to other blockchains',
      type: 'article',
      readTime: 8,
      difficulty: 'Beginner'
    },
    {
      title: 'Community FAQ',
      href: '/learn/faq',
      description: 'Frequently asked questions',
      type: 'guide',
      readTime: 6,
      difficulty: 'Beginner'
    }
  ]
}

// Topic clusters for cross-linking
export const topicClusters = {
  'smart-contracts': {
    hub: '/learn/ergoscript',
    pages: [
      '/technology/eutxo-model',
      '/use/defi',
      '/patterns',
      '/docs/developers'
    ]
  },
  
  'privacy': {
    hub: '/technology/privacy-features',
    pages: [
      '/use/privacy',
      '/topics/privacy',
      '/ecosystem/projects/ergomixer'
    ]
  },
  
  'defi': {
    hub: '/use/defi',
    pages: [
      '/learn/ergoscript',
      '/technology/oracle-pools',
      '/use/get-erg',
      '/ecosystem/projects/spectrum'
    ]
  },
  
  'mining': {
    hub: '/miners',
    pages: [
      '/technology/secure-pow',
      '/miners',
      '/technology/storage-rent'
    ]
  },
  
  'nfts': {
    hub: '/use/nfts',
    pages: [
      '/technology/native-tokens',
      '/ecosystem/projects/auction-house',
      '/patterns'
    ]
  }
}

// Get related content for a specific page
export function getRelatedContent(pageKey: string, limit: number = 3): RelatedItem[] {
  const related = relatedContentMap[pageKey] || []
  return related.slice(0, limit)
}

// Get topic cluster links
export function getTopicClusterLinks(topic: string, currentPage: string): RelatedItem[] {
  const cluster = topicClusters[topic as keyof typeof topicClusters]
  if (!cluster) return []
  
  return cluster.pages
    .filter(page => page !== currentPage)
    .map(page => {
      // Convert page path to related item
      const segments = page.split('/').filter(Boolean)
      const title = segments[segments.length - 1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      return {
        title,
        href: page,
        description: `Learn more about ${title.toLowerCase()}`,
        type: segments[0] as RelatedItem['type'] || 'article'
      }
    })
}

// Contextual link suggestions for content
export const contextualLinks = {
  // When mentioning these terms, suggest these links
  'ergoscript': '/learn/ergoscript',
  'eutxo': '/technology/eutxo-model',
  'eutxo model': '/technology/eutxo-model',
  'sigma protocols': '/technology/privacy-features',
  'autolykos': '/technology/secure-pow',
  'storage rent': '/technology/storage-rent',
  'oracle pools': '/technology/oracle-pools',
  'native tokens': '/technology/native-tokens',
  'nipopows': '/technology/nipopows',
  'ergomixer': '/use/privacy',
  'defi': '/use/defi',
  'nft': '/use/nfts',
  'mining': '/miners',
  'stablecoins': '/use/stablecoins',
  'bridges': '/use/bridges',
  'daos': '/use/daos'
}
