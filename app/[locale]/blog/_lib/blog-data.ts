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
    excerpt: 'A comprehensive deep dive into Ergo\'s extended UTXO model and how it combines the best of Bitcoin\'s security with Ethereum\'s expressiveness.',
    date: '2024-03-10',
    author: 'Technical Team',
    category: 'Technology',
    readTime: '12 min',
    image: '/assets/img/blog/eutxo-guide.jpg',
    tags: ['eUTXO', 'Technology', 'Blockchain']
  },
  {
    id: '3',
    slug: 'why-ergo-is-the-most-sustainable-blockchain',
    title: 'Why Ergo is the Most Sustainable Blockchain',
    excerpt: 'Learn about Ergo\'s innovative storage rent mechanism and how it ensures long-term blockchain sustainability without compromising decentralization.',
    date: '2024-03-05',
    author: 'Research Team',
    category: 'Sustainability',
    readTime: '10 min',
    image: '/assets/img/blog/sustainability.jpg',
    tags: ['Storage Rent', 'Sustainability', 'Economics']
  },
  {
    id: '4',
    slug: 'ergoscript-smart-contracts-tutorial',
    title: 'Building Your First Smart Contract with ErgoScript',
    excerpt: 'Step-by-step tutorial on creating, deploying, and interacting with smart contracts on the Ergo blockchain using ErgoScript.',
    date: '2024-02-28',
    author: 'Developer Relations',
    category: 'Tutorial',
    readTime: '15 min',
    image: '/assets/img/blog/ergoscript-tutorial.jpg',
    tags: ['ErgoScript', 'Tutorial', 'Development']
  },
  {
    id: '5',
    slug: 'sigma-protocols-privacy',
    title: 'Privacy Without Compromise: Sigma Protocols in Ergo',
    excerpt: 'Discover how Ergo\'s implementation of Sigma protocols enables powerful privacy features while maintaining transparency and auditability.',
    date: '2024-02-20',
    author: 'Privacy Team',
    category: 'Privacy',
    readTime: '9 min',
    image: '/assets/img/blog/sigma-privacy.jpg',
    tags: ['Privacy', 'Sigma Protocols', 'Cryptography']
  }
]

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