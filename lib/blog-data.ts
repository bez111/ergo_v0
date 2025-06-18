export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  slug: string
  image?: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar?: string
    bio: string
    role: string
    social: {
      twitter?: string
      github?: string
      linkedin?: string
    }
  }
  publishedAt: string
  readTime: number
  views: number
  likes: number
  featured?: boolean
  trending?: boolean
}

export const categories = [
  {
    id: "defi",
    name: "DeFi",
    count: 12,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "tech",
    name: "Technology",
    count: 8,
    color: "from-orange-400 to-amber-500",
  },
  {
    id: "guides",
    name: "Guides",
    count: 15,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "development",
    name: "Development",
    count: 6,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "mining",
    name: "Mining",
    count: 4,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "news",
    name: "News",
    count: 10,
    color: "from-orange-600 to-red-600",
  },
]

export const blogStats = {
  totalArticles: 128,
  totalAuthors: 24,
  totalViews: 45672,
  totalLikes: 3421,
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Ergo: Ecosystem Growth and Innovation",
    description:
      "Explore the latest developments and trending narratives in the Ergo ecosystem, from DeFi protocols to mining innovations.",
    content: "Full article content would go here...",
    slug: "future-of-ergo-ecosystem-growth",
    category: "defi",
    tags: ["ecosystem", "defi", "innovation", "blockchain"],
    author: {
      name: "Alex Chen",
      bio: "Blockchain researcher and DeFi analyst with 5+ years experience in the cryptocurrency space.",
      role: "Lead Researcher",
      social: {
        twitter: "@alexchen_crypto",
        github: "alexchen",
        linkedin: "alexchen-crypto",
      },
    },
    publishedAt: "Dec 15, 2024",
    readTime: 8,
    views: 2341,
    likes: 89,
    featured: true,
    trending: true,
  },
  {
    id: "2",
    title: "ErgoScript Deep Dive: Smart Contracts Made Simple",
    description: "A comprehensive guide to ErgoScript programming and smart contract development on the Ergo platform.",
    content: "Full article content would go here...",
    slug: "ergoscript-deep-dive-smart-contracts",
    category: "development",
    tags: ["ergoscript", "smart-contracts", "programming", "tutorial"],
    author: {
      name: "Sarah Johnson",
      bio: "Senior blockchain developer and ErgoScript expert, contributing to core Ergo development.",
      role: "Core Developer",
      social: {
        twitter: "@sarah_ergo",
        github: "sarahjohnson",
      },
    },
    publishedAt: "Dec 12, 2024",
    readTime: 12,
    views: 1876,
    likes: 67,
    trending: true,
  },
  {
    id: "3",
    title: "Mining Ergo: Complete Setup Guide for 2024",
    description:
      "Everything you need to know about mining Ergo, from hardware requirements to pool selection and optimization tips.",
    content: "Full article content would go here...",
    slug: "mining-ergo-complete-setup-guide-2024",
    category: "mining",
    tags: ["mining", "hardware", "setup", "guide"],
    author: {
      name: "Mike Rodriguez",
      bio: "Mining specialist with extensive experience in GPU mining and pool operations.",
      role: "Mining Expert",
      social: {
        twitter: "@mike_mines",
        github: "mikerodriguez",
      },
    },
    publishedAt: "Dec 10, 2024",
    readTime: 15,
    views: 3245,
    likes: 124,
    trending: true,
  },
  {
    id: "4",
    title: "Understanding UTXO Model vs Account Model",
    description: "A detailed comparison of blockchain architectures and why Ergo chose the extended UTXO model.",
    content: "Full article content would go here...",
    slug: "understanding-utxo-vs-account-model",
    category: "tech",
    tags: ["utxo", "blockchain", "architecture", "comparison"],
    author: {
      name: "Dr. Emily Watson",
      bio: "PhD in Computer Science, specializing in distributed systems and blockchain technology.",
      role: "Research Director",
      social: {
        twitter: "@emily_blockchain",
        linkedin: "emily-watson-phd",
      },
    },
    publishedAt: "Dec 8, 2024",
    readTime: 10,
    views: 1654,
    likes: 78,
  },
  {
    id: "5",
    title: "SigmaUSD: Algorithmic Stablecoin on Ergo",
    description:
      "Learn how SigmaUSD works as a decentralized, algorithmic stablecoin built on Ergo's robust foundation.",
    content: "Full article content would go here...",
    slug: "sigmausd-algorithmic-stablecoin-ergo",
    category: "defi",
    tags: ["sigmausd", "stablecoin", "defi", "algorithmic"],
    author: {
      name: "James Park",
      bio: "DeFi protocol designer and economist, focusing on stablecoin mechanisms and monetary policy.",
      role: "DeFi Architect",
      social: {
        twitter: "@james_defi",
        github: "jamespark",
      },
    },
    publishedAt: "Dec 5, 2024",
    readTime: 9,
    views: 2187,
    likes: 95,
  },
  {
    id: "6",
    title: "Ergo Wallet Security Best Practices",
    description:
      "Essential security tips and best practices for keeping your ERG and tokens safe in various wallet types.",
    content: "Full article content would go here...",
    slug: "ergo-wallet-security-best-practices",
    category: "guides",
    tags: ["security", "wallet", "best-practices", "safety"],
    author: {
      name: "Lisa Chang",
      bio: "Cybersecurity specialist with focus on cryptocurrency security and user education.",
      role: "Security Consultant",
      social: {
        twitter: "@lisa_security",
        linkedin: "lisa-chang-security",
      },
    },
    publishedAt: "Dec 3, 2024",
    readTime: 7,
    views: 1432,
    likes: 56,
  },
]
