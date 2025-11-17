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
  views?: number // Dynamic - loaded from analytics
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
  {
    id: 'ergo-manifesto',
    slug: 'ergo-manifesto',
    title: 'The Ergo Manifesto: Building Ergonomic Money for Regular People',
    excerpt: 'The foundational vision of Ergo Platform - creating decentralized financial tools that empower ordinary people, not corporations. A manifesto for true peer-to-peer economic freedom.',
    date: '2025-11-01',
    lastUpdated: '2025-11-15',
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
    views: 8000,
    shares: 450
  },
  {
    id: 'ergo-in-5-minutes',
    slug: 'ergo-in-5-minutes',
    title: 'Ergo in 5 Minutes: Why It Matters & How It Works',
    excerpt: 'Quick introduction to Ergo: fair launch, eUTXO, Sigma protocols, and DeFi ecosystem. Proof-of-Work blockchain with privacy and security.',
    date: '2025-11-05',
    lastUpdated: '2025-11-15',
    author: authors['ergo-team']!,
    category: 'Technology',
    readTime: 5,
    wordCount: 1500,
    image: '/og/ergo-5-minutes.svg',
    tags: ['Introduction', 'eUTXO', 'Sigma Protocols', 'Fair Launch'],
    featured: false,
    trending: true,
    difficulty: 'Beginner',
    views: 5000,
    shares: 300
  },
  {
    id: 'eutxo-vs-accounts',
    slug: 'eutxo-vs-accounts',
    title: 'Two Blockchain Models: Why Ergo Chose Differently',
    excerpt: 'Deterministic execution, explicit state transitions, and auditable privacy patterns — how Ergo\'s eUTXO model differs from Ethereum\'s account model for secure, scalable DeFi.',
    date: '2025-11-07',
    lastUpdated: '2025-11-15',
    author: authors['technical-team']!,
    category: 'Technology',
    readTime: 8,
    wordCount: 2200,
    image: '/og/eutxo-vs-accounts.svg',
    tags: ['eUTXO', 'Smart Contracts', 'Ethereum Comparison', 'Technical'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    views: 0,
    shares: 0
  },
  {
    id: 'storage-rent',
    slug: 'storage-rent',
    title: 'How Ergo\'s Storage Rent Solves Blockchain State Bloat',
    excerpt: 'Ergo\'s miners can charge small fees on dormant accounts, clearing dust transactions and ensuring blockchain state stays manageable.',
    date: '2025-11-10',
    lastUpdated: '2025-11-15',
    author: authors['ergo-team']!,
    category: 'Technology',
    readTime: 8,
    wordCount: 2000,
    image: '/og/blog-default.svg',
    tags: ['Storage Rent', 'State Bloat', 'Demurrage', 'Scalability', 'Decentralization'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    views: 0,
    shares: 0
  },
  {
    id: 'sigma-protocols-privacy',
    slug: 'sigma-protocols-privacy',
    title: 'Ergo And Sigma Protocols: The Next Step In Blockchain Privacy',
    excerpt: 'As first-gen privacy coins see a resurgence of activity, Ergo\'s composable zero-knowledge signatures offer new options for compliant confidentiality.',
    date: '2025-11-12',
    lastUpdated: '2025-11-15',
    author: authors['ergo-team']!,
    category: 'Privacy',
    readTime: 9,
    wordCount: 2200,
    image: '/og/blog-default.svg',
    tags: ['Sigma Protocols', 'Privacy', 'Zero Knowledge', 'Compliance', 'DeFi Privacy'],
    featured: true,
    trending: true,
    difficulty: 'Intermediate',
    views: undefined,
    shares: 0
  },
  {
    id: 'sigma-protocols-explained',
    slug: 'sigma-protocols-explained',
    title: 'Sigma Protocols Explained (Without A PhD)',
    excerpt: 'A plain-English guide to Sigma Protocols – the powerful, flexible zero-knowledge cryptography that powers Ergo\'s privacy and smart contracts.',
    date: '2025-11-13',
    lastUpdated: '2025-11-15',
    author: authors['privacy-team']!,
    category: 'Privacy',
    readTime: 10,
    wordCount: 2400,
    image: '/og/blog-default.svg',
    tags: ['Sigma Protocols', 'Zero Knowledge', 'Beginner Guide', 'Cryptography', 'Privacy Tutorial'],
    featured: false,
    trending: true,
    difficulty: 'Beginner',
    views: undefined,
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