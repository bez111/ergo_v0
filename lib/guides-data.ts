export interface Guide {
  id: string
  title: string
  description: string
  content: string
  slug: string
  image?: string
  category: string
  level: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  estimatedTime: number
  publishedAt: string
  views: number
  likes: number
  featured?: boolean
  popular?: boolean
}

export const categories = [
  {
    id: "wallets",
    name: "Wallets",
    count: 8,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "defi",
    name: "DeFi",
    count: 12,
    color: "from-orange-400 to-amber-500",
  },
  {
    id: "mining",
    name: "Mining",
    count: 6,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "development",
    name: "Development",
    count: 10,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "security",
    name: "Security",
    count: 5,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "nfts",
    name: "NFTs",
    count: 4,
    color: "from-orange-600 to-red-600",
  },
]

export const guidesData: Guide[] = [
  {
    id: "1",
    title: "Complete Guide to Ergo Wallets: From Beginner to Pro",
    description: "Everything you need to know about choosing, setting up, and securing your Ergo wallet for maximum safety and convenience.",
    content: "Full guide content would go here...",
    slug: "complete-guide-ergo-wallets",
    category: "wallets",
    level: "Beginner",
    tags: ["wallets", "security", "setup", "beginners"],
    estimatedTime: 15,
    publishedAt: "Dec 15, 2024",
    views: 3456,
    likes: 234,
    featured: true,
    popular: true,
  },
  {
    id: "2",
    title: "ErgoScript Smart Contract Development: Step-by-Step",
    description: "Learn to build and deploy smart contracts on Ergo using ErgoScript, from basic concepts to advanced patterns.",
    content: "Full guide content would go here...",
    slug: "ergoscript-smart-contract-development",
    category: "development",
    level: "Intermediate",
    tags: ["ergoscript", "smart-contracts", "programming", "development"],
    estimatedTime: 45,
    publishedAt: "Dec 12, 2024",
    views: 2876,
    likes: 167,
    popular: true,
  },
  {
    id: "3",
    title: "Ergo Mining Setup: Hardware, Software, and Optimization",
    description: "Complete setup guide for mining Ergo, including hardware recommendations, software configuration, and performance optimization.",
    content: "Full guide content would go here...",
    slug: "ergo-mining-setup-hardware-software",
    category: "mining",
    level: "Beginner",
    tags: ["mining", "hardware", "setup", "optimization"],
    estimatedTime: 30,
    publishedAt: "Dec 10, 2024",
    views: 4245,
    likes: 324,
    popular: true,
  },
  {
    id: "4",
    title: "DeFi on Ergo: Using Spectrum Finance and DEXs",
    description: "Master decentralized finance on Ergo with comprehensive guides to trading, liquidity provision, and yield farming.",
    content: "Full guide content would go here...",
    slug: "defi-ergo-spectrum-finance-dexs",
    category: "defi",
    level: "Intermediate",
    tags: ["defi", "spectrum", "trading", "liquidity"],
    estimatedTime: 25,
    publishedAt: "Dec 8, 2024",
    views: 2654,
    likes: 178,
  },
  {
    id: "5",
    title: "Advanced ErgoScript: Complex Smart Contract Patterns",
    description: "Explore advanced ErgoScript patterns, including multi-sig wallets, time-locks, and complex DeFi protocols.",
    content: "Full guide content would go here...",
    slug: "advanced-ergoscript-complex-patterns",
    category: "development",
    level: "Advanced",
    tags: ["ergoscript", "advanced", "patterns", "multisig"],
    estimatedTime: 60,
    publishedAt: "Dec 5, 2024",
    views: 1187,
    likes: 95,
  },
  {
    id: "6",
    title: "Ergo Wallet Security: Best Practices and Advanced Techniques",
    description: "Essential security practices for protecting your ERG and tokens, including cold storage, multi-sig, and threat prevention.",
    content: "Full guide content would go here...",
    slug: "ergo-wallet-security-best-practices",
    category: "security",
    level: "Intermediate",
    tags: ["security", "wallets", "cold-storage", "multisig"],
    estimatedTime: 20,
    publishedAt: "Dec 3, 2024",
    views: 1987,
    likes: 145,
  },
  {
    id: "7",
    title: "Creating and Trading NFTs on Ergo",
    description: "Complete guide to creating, minting, and trading NFTs on Ergo marketplaces with step-by-step instructions.",
    content: "Full guide content would go here...",
    slug: "creating-trading-nfts-ergo",
    category: "nfts",
    level: "Beginner",
    tags: ["nfts", "minting", "marketplaces", "trading"],
    estimatedTime: 18,
    publishedAt: "Dec 1, 2024",
    views: 2341,
    likes: 189,
  },
  {
    id: "8",
    title: "SigmaUSD: Understanding and Using Algorithmic Stablecoins",
    description: "Deep dive into SigmaUSD mechanics, including minting, redeeming, and participating in the stablecoin ecosystem.",
    content: "Full guide content would go here...",
    slug: "sigmausd-algorithmic-stablecoins-guide",
    category: "defi",
    level: "Advanced",
    tags: ["sigmausd", "stablecoin", "algorithmic", "defi"],
    estimatedTime: 35,
    publishedAt: "Nov 28, 2024",
    views: 1654,
    likes: 112,
  },
] 