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
  views?: number // If tracking
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
    id: '1',
    slug: 'ergo-defi-revolution',
    title: 'The DeFi Revolution: How Ergo is Building the Future of Finance',
    excerpt: 'Explore how Ergo\'s advanced smart contract capabilities and unique economic model are powering the next generation of decentralized financial applications.',
    date: '2024-03-15',
    lastUpdated: '2024-03-15',
    author: authors['ergo-team'],
    category: 'DeFi',
    readTime: 8,
    wordCount: 1600,
    image: '',
    tags: ['DeFi', 'Smart Contracts', 'ErgoScript'],
    featured: true,
    trending: true,
    difficulty: 'Intermediate',
    views: 2500,
    shares: 145
  },
  {
    id: '2',
    slug: 'eutxo-ultimate-guide',
    title: 'Understanding eUTXO: The Ultimate Guide',
    excerpt: 'Dive deep into Ergo\'s extended UTXO model and discover how it enables more expressive and secure smart contracts than traditional account-based systems.',
    date: '2024-03-10',
    lastUpdated: '2024-03-12',
    author: authors['technical-team'],
    category: 'Technology',
    readTime: 12,
    wordCount: 2400,
    image: '',
    tags: ['eUTXO', 'Technology', 'Blockchain'],
    trending: true,
    difficulty: 'Advanced',
    views: 3200,
    shares: 189
  },
  {
    id: '3',
    slug: 'ergoscript-smart-contracts',
    title: 'ErgoScript: Writing Secure Smart Contracts',
    excerpt: 'Learn how ErgoScript\'s functional programming approach and built-in security features make it easier to write bug-free smart contracts.',
    date: '2024-03-05',
    author: authors['dev-relations'],
    category: 'Development',
    readTime: 10,
    wordCount: 2000,
    image: '',
    tags: ['ErgoScript', 'Development', 'Smart Contracts'],
    trending: true,
    difficulty: 'Intermediate',
    views: 2800,
    shares: 156
  },
  {
    id: '4',
    slug: 'ergo-mining-guide',
    title: 'Complete Guide to Ergo Mining',
    excerpt: 'Everything you need to know about mining Ergo, from hardware requirements to pool selection and optimization strategies.',
    date: '2024-02-28',
    lastUpdated: '2024-03-01',
    author: authors['mining-community'],
    category: 'Mining',
    readTime: 15,
    wordCount: 3000,
    image: '',
    tags: ['Mining', 'Hardware', 'Community'],
    difficulty: 'Beginner',
    views: 4100,
    shares: 234
  },
  {
    id: '5',
    slug: 'privacy-features-ergo',
    title: 'Privacy by Design: Ergo\'s Built-in Privacy Features',
    excerpt: 'Explore Ergo\'s privacy-preserving technologies including Sigma protocols, stealth addresses, and mixer applications.',
    date: '2024-02-20',
    author: authors['privacy-team'],
    category: 'Privacy',
    readTime: 9,
    wordCount: 1800,
    image: '',
    tags: ['Privacy', 'Sigma Protocols', 'Security'],
    difficulty: 'Intermediate',
    views: 1900,
    shares: 98
  },
  {
    id: '6',
    slug: 'ecosystem-update-q1-2024',
    title: 'Ergo Ecosystem Update: Q1 2024',
    excerpt: 'Discover the latest developments in the Ergo ecosystem, including new dApps, partnerships, and protocol improvements.',
    date: '2024-02-15',
    author: authors['ecosystem-team'],
    category: 'Ecosystem',
    readTime: 7,
    wordCount: 1400,
    image: '',
    tags: ['Ecosystem', 'Updates', 'dApps'],
    difficulty: 'Beginner',
    views: 1600,
    shares: 72
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