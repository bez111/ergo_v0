export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  image?: string
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ergo-defi-revolution',
    title: 'The DeFi Revolution: How Ergo is Building the Future of Finance',
    excerpt: 'Explore how Ergo\'s advanced smart contract capabilities and unique economic model are powering the next generation of decentralized financial applications.',
    date: '2024-03-15',
    author: 'Ergo Team',
    category: 'DeFi',
    readTime: '8 min',
    image: '/assets/img/blog/defi-revolution.jpg',
    tags: ['DeFi', 'Smart Contracts', 'ErgoScript']
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