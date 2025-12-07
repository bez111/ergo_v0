export interface Author {
  id: string
  name: string
  bio: string
  avatar: string
  role: string
  twitter?: string
  github?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string // For full content
  date: string
  lastUpdated?: string // Important for SEO
  author: Author
  category: string
  readTime: number // Changed to number for calculations
  wordCount?: number // For SEO
  image?: string
  tags?: string[]
  trending?: boolean // For trending section
  featured?: boolean // For hero section
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  shares?: number // Social proof
}

// Author definitions
export const authors: Record<string, Author> = {
  'ergo-team': {
    id: 'ergo-team',
    name: 'Ergo Team',
    bio: 'Core developers and contributors building the Ergo Platform',
    avatar: '', // Will show initials
    role: 'Core Team',
    twitter: 'ergoplatform',
    github: 'ergoplatform'
  },
  'technical-team': {
    id: 'technical-team',
    name: 'Technical Team',
    bio: 'Blockchain architects and cryptography experts',
    avatar: '', // Will show initials
    role: 'Technical Lead',
    twitter: 'ergoplatform'
  },
  'dev-relations': {
    id: 'dev-relations',
    name: 'Developer Relations',
    bio: 'Helping developers build on Ergo',
    avatar: '', // Will show initials
    role: 'Developer Advocate'
  },
  'mining-community': {
    id: 'mining-community',
    name: 'Mining Community',
    bio: 'Ergo miners and pool operators sharing knowledge',
    avatar: '', // Will show initials
    role: 'Community Contributor'
  },
  'privacy-team': {
    id: 'privacy-team',
    name: 'Privacy Team',
    bio: 'Privacy and cryptography specialists',
    avatar: '', // Will show initials
    role: 'Privacy Expert'
  },
  'ecosystem-team': {
    id: 'ecosystem-team',
    name: 'Ecosystem Team',
    bio: 'Growing the Ergo ecosystem and partnerships',
    avatar: '', // Will show initials
    role: 'Ecosystem Lead'
  }
}

export const blogPosts: BlogPost[] = [
  // Ordered by newest first (for "Newest" sort). Starting 2025-11-11 and stepping 4 days back.
  {
    id: 'ergo-in-5-minutes',
    slug: 'ergo-in-5-minutes',
    title: 'Ergo in 5 Minutes: Why It Matters & How It Works',
    excerpt: 'Quick introduction to Ergo: fair launch, eUTXO, Sigma protocols, and DeFi ecosystem. Proof-of-Work blockchain with privacy and security.',
    date: '2025-11-11',
    lastUpdated: '2025-11-11',
    author: authors['ergo-team']!,
    category: 'Technology',
    readTime: 5,
    wordCount: 1500,
    image: '/og/ergo-in-five-minutes.png',
    tags: ['Introduction', 'eUTXO', 'Sigma Protocols', 'Fair Launch'],
    featured: false,
    trending: true,
    difficulty: 'Beginner',
    shares: 300
  },
  {
    id: 'ergo-manifesto',
    slug: 'ergo-manifesto',
    title: 'The Ergo Manifesto: Ergonomic Money for Everyone',
    excerpt: 'The foundational vision of Ergo Platform by Kushti - creating decentralized financial tools that empower ordinary people. A manifesto for true peer-to-peer economic freedom.',
    date: '2025-11-14',
    lastUpdated: '2025-11-14',
    author: {
      id: 'kushti',
      name: 'Kushti',
      bio: 'Core developer of Ergo Platform, blockchain researcher since 2011, former IOHK researcher',
      avatar: '',
      role: 'Founder & Core Developer',
      twitter: 'chepurnoy',
      github: 'kushti'
    },
    category: 'Vision',
    readTime: 10,
    wordCount: 2500,
    image: '/og/ergo-manifesto.svg',
    tags: ['Manifesto', 'Philosophy', 'Decentralization', 'Financial Freedom', 'Privacy'],
    featured: true,
    trending: true,
    difficulty: 'Beginner',
    shares: 450
  },
  {
    id: 'eutxo-vs-accounts',
    slug: 'eutxo-vs-accounts',
    title: 'Two Blockchain Models: Why Ergo Chose Differently',
    excerpt: 'Deterministic execution, explicit state transitions, and auditable privacy patterns — how Ergo\'s eUTXO model differs from Ethereum\'s account model for secure, scalable DeFi.',
    date: '2025-11-17',
    lastUpdated: '2025-11-17',
    author: authors['technical-team']!,
    category: 'Technology',
    readTime: 8,
    wordCount: 2200,
    image: '/og/eutxo-vs-accounts.svg',
    tags: ['eUTXO', 'Smart Contracts', 'Ethereum Comparison', 'Technical'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'autolykos-proof-of-work',
    slug: 'autolykos-proof-of-work',
    title: "Autolykos: Ergo's Sustainable GPU Mining Algorithm",
    excerpt:
      'Autolykos is the Ergo mining algorithm: a memory-hard proof-of-work designed for ASIC-resistant mining, sustainable PoW, and a more decentralised, GPU-friendly Ergo blockchain.',
    date: '2025-11-21',
    lastUpdated: '2025-11-21',
    author: authors['technical-team']!,
    category: 'Technology',
    readTime: 10,
    wordCount: 2400,
    image: '/og/blog-default.svg',
    tags: ['Autolykos', 'Proof-of-Work', 'GPU mining Ergo', 'ASIC resistance', 'Sustainable PoW'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'storage-rent',
    slug: 'storage-rent',
    title: 'How Ergo\'s Storage Rent Solves Blockchain State Bloat',
    excerpt: 'Ergo\'s miners can charge small fees on dormant accounts, clearing dust transactions and ensuring blockchain state stays manageable.',
    date: '2025-11-24',
    lastUpdated: '2025-11-24',
    author: authors['ergo-team']!,
    category: 'Technology',
    readTime: 8,
    wordCount: 2000,
    image: '/og/blog-default.svg',
    tags: ['Storage Rent', 'State Bloat', 'Demurrage', 'Scalability', 'Decentralization'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'ergoscript-introduction',
    slug: 'ergoscript-introduction',
    title: 'ErgoScript Tutorial: Smart Contracts on Ergo Blockchain',
    excerpt:
      "ErgoScript is the Ergo blockchain's functional smart contract language, purpose-built for the eUTXO model. Learn how it works and what makes Ergo smart contracts secure and predictable.",
    date: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: authors['technical-team']!,
    category: 'Technology',
    readTime: 12,
    wordCount: 2600,
    image: '/og/blog-default.svg',
    tags: ['ErgoScript', 'Smart Contracts', 'eUTXO', 'Ergo Developers', 'Functional Programming'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'sigma-protocols-explained',
    slug: 'sigma-protocols-explained',
    title: 'Sigma Protocols Explained (Without A PhD)',
    excerpt: 'A plain-English guide to Sigma Protocols – the powerful, flexible zero-knowledge cryptography that powers Ergo\'s privacy and smart contracts.',
    date: '2025-12-01',
    lastUpdated: '2025-12-01',
    author: authors['privacy-team']!,
    category: 'Privacy',
    readTime: 10,
    wordCount: 2400,
    image: '/og/blog-default.svg',
    tags: ['Sigma Protocols', 'Zero Knowledge', 'Beginner Guide', 'Cryptography', 'Privacy Tutorial'],
    featured: false,
    trending: true,
    difficulty: 'Beginner',
    shares: 0
  },
  {
    id: 'sigma-protocols-privacy',
    slug: 'sigma-protocols-privacy',
    title: 'Ergo And Sigma Protocols: The Next Step In Blockchain Privacy',
    excerpt: 'As first-gen privacy coins see a resurgence of activity, Ergo\'s composable zero-knowledge signatures offer new options for compliant confidentiality.',
    date: '2025-12-04',
    lastUpdated: '2025-12-04',
    author: authors['ergo-team']!,
    category: 'Privacy',
    readTime: 9,
    wordCount: 2200,
    image: '/og/blog-default.svg',
    tags: ['Sigma Protocols', 'Privacy', 'Zero Knowledge', 'Compliance', 'DeFi Privacy'],
    featured: true,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'nipopows-explained',
    slug: 'nipopows-explained',
    title: 'NiPoPoWs: Trustless Light Clients & Bridges on Ergo',
    excerpt: 'Learn how Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) enable lightweight blockchain verification, stateless clients, and trustless cross-chain bridges on Ergo.',
    date: '2025-12-07',
    lastUpdated: '2025-12-07',
    author: authors['technical-team']!,
    category: 'Technology',
    readTime: 8,
    wordCount: 1200,
    image: '/og/blog-default.svg',
    tags: ['NiPoPoW', 'Non-interactive Proofs of Proof-of-Work', 'Light Clients', 'Cross-Chain Bridges', 'Blockchain Scalability', 'Trustless Bridges', 'Superblocks', 'Succinct Proofs'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'oracle-pools-explained',
    slug: 'oracle-pools-explained',
    title: 'Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained',
    excerpt: 'Learn how Ergo\'s decentralized oracle pools minimize trust assumptions through on-chain aggregation, permissionless participation, and transparent data storage in eUTXOs.',
    date: '2025-12-11',
    lastUpdated: '2025-12-11',
    author: authors['technical-team']!,
    category: 'Technology',
    readTime: 12,
    wordCount: 2800,
    image: '/og/blog-default.svg',
    tags: ['Oracle Pools', 'Decentralized Oracles', 'Trust-Minimized Oracles', 'On-Chain Aggregation', 'Permissionless Oracles', 'eUTXO Oracles', 'DeFi Oracles', 'Oracle Security'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'babel-fees',
    slug: 'babel-fees',
    title: 'Babel Fees: Pay Ergo Transaction Fees in Any Token',
    excerpt:
      "Ergo's Babel Fees turn gas payments into an on-chain market, letting users pay transaction fees in almost any token while miners still receive ERG.",
    date: '2025-12-14',
    lastUpdated: '2025-12-14',
    author: authors['technical-team']!,
    category: 'Technology',
    readTime: 9,
    wordCount: 2200,
    image: '/og/babel-fees.png',
    tags: ['Babel Fees', 'Gas Abstraction', 'eUTXO', 'DeFi UX', 'On-chain Markets'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  }
]

// Category definitions with metadata for SEO
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
}

export const categoryDefinitions: Category[] = [
  {
    id: 'vision',
    name: 'Vision',
    slug: 'vision',
    description: 'Foundational vision and manifesto of Ergo Platform',
    icon: 'Eye',
    color: 'orange'
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    slug: 'philosophy',
    description: 'Principles and foundational ideas behind Ergo Platform',
    icon: 'BookOpen',
    color: 'purple'
  },
  {
    id: 'defi',
    name: 'DeFi',
    slug: 'defi',
    description: 'Decentralized finance innovations, protocols, and applications on Ergo',
    icon: 'Coins',
    color: 'orange'
  },
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Deep dives into Ergo\'s technical architecture and blockchain innovations',
    icon: 'Cog',
    color: 'blue'
  },
  {
    id: 'development',
    name: 'Development',
    slug: 'development',
    description: 'Developer tutorials, guides, and best practices for building on Ergo',
    icon: 'Code2',
    color: 'green'
  },
  {
    id: 'mining',
    name: 'Mining',
    slug: 'mining',
    description: 'Mining guides, hardware reviews, and optimization strategies',
    icon: 'Pickaxe',
    color: 'purple'
  },
  {
    id: 'privacy',
    name: 'Privacy',
    slug: 'privacy',
    description: 'Privacy features, zero-knowledge proofs, and confidential transactions',
    icon: 'Shield',
    color: 'indigo'
  },
  {
    id: 'ecosystem',
    name: 'Ecosystem',
    slug: 'ecosystem',
    description: 'Updates, news, and highlights from the Ergo ecosystem',
    icon: 'Network',
    color: 'cyan'
  }
]

// Extract unique categories from blog posts (legacy compatibility)
export const categories = Array.from(new Set(blogPosts.map(post => post.category))).sort()

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug)
  if (!currentPost) return []
  
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.category === currentPost.category ||
      post.tags?.some(tag => currentPost.tags?.includes(tag))
    )
    .slice(0, limit)
} 