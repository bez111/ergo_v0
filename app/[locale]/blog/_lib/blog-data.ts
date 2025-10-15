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
    avatar: '/assets/img/authors/ergo-team.jpg',
    role: 'Core Team',
    twitter: 'ergoplatform',
    github: 'ergoplatform'
  },
  'technical-team': {
    id: 'technical-team',
    name: 'Technical Team',
    bio: 'Blockchain architects and cryptography experts',
    avatar: '/assets/img/authors/technical-team.jpg',
    role: 'Technical Lead',
    twitter: 'ergoplatform'
  },
  'dev-relations': {
    id: 'dev-relations',
    name: 'Developer Relations',
    bio: 'Helping developers build on Ergo',
    avatar: '/assets/img/authors/dev-relations.jpg',
    role: 'Developer Advocate'
  },
  'mining-community': {
    id: 'mining-community',
    name: 'Mining Community',
    bio: 'Ergo miners and pool operators sharing knowledge',
    avatar: '/assets/img/authors/mining-community.jpg',
    role: 'Community Contributor'
  },
  'privacy-team': {
    id: 'privacy-team',
    name: 'Privacy Team',
    bio: 'Privacy and cryptography specialists',
    avatar: '/assets/img/authors/privacy-team.jpg',
    role: 'Privacy Expert'
  },
  'ecosystem-team': {
    id: 'ecosystem-team',
    name: 'Ecosystem Team',
    bio: 'Growing the Ergo ecosystem and partnerships',
    avatar: '/assets/img/authors/ecosystem-team.jpg',
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
    image: '/assets/img/blog/defi-revolution.jpg',
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
    author: 'Technical Team',
    category: 'Technology',
    readTime: '12 min',
    image: '/assets/img/blog/eutxo-guide.jpg',
    tags: ['eUTXO', 'Technology', 'Blockchain']
  },
  {
    id: '3',
    slug: 'ergoscript-smart-contracts',
    title: 'ErgoScript: Writing Secure Smart Contracts',
    excerpt: 'Learn how ErgoScript\'s functional programming approach and built-in security features make it easier to write bug-free smart contracts.',
    date: '2024-03-05',
    author: 'Developer Relations',
    category: 'Development',
    readTime: '10 min',
    image: '/assets/img/blog/ergoscript-contracts.jpg',
    tags: ['ErgoScript', 'Development', 'Smart Contracts']
  },
  {
    id: '4',
    slug: 'ergo-mining-guide',
    title: 'Complete Guide to Ergo Mining',
    excerpt: 'Everything you need to know about mining Ergo, from hardware requirements to pool selection and optimization strategies.',
    date: '2024-02-28',
    author: 'Mining Community',
    category: 'Mining',
    readTime: '15 min',
    image: '/assets/img/blog/mining-guide.jpg',
    tags: ['Mining', 'Hardware', 'Community']
  },
  {
    id: '5',
    slug: 'privacy-features-ergo',
    title: 'Privacy by Design: Ergo\'s Built-in Privacy Features',
    excerpt: 'Explore Ergo\'s privacy-preserving technologies including Sigma protocols, stealth addresses, and mixer applications.',
    date: '2024-02-20',
    author: 'Privacy Team',
    category: 'Privacy',
    readTime: '9 min',
    image: '/assets/img/blog/privacy-features.jpg',
    tags: ['Privacy', 'Sigma Protocols', 'Security']
  },
  {
    id: '6',
    slug: 'ecosystem-update-q1-2024',
    title: 'Ergo Ecosystem Update: Q1 2024',
    excerpt: 'Discover the latest developments in the Ergo ecosystem, including new dApps, partnerships, and protocol improvements.',
    date: '2024-02-15',
    author: 'Ecosystem Team',
    category: 'Ecosystem',
    readTime: '7 min',
    image: '/assets/img/blog/ecosystem-update.jpg',
    tags: ['Ecosystem', 'Updates', 'dApps']
  }
]

// Extract unique categories from blog posts
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