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
  /** When true, this post is pinned to the featured slot regardless of
   *  date. Use for cornerstone pieces (the manifesto) that should not
   *  drop out of the hero just because a newer update was published. */
  pinned?: boolean
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
    id: 'ergo-live-proof-surface-agent-economy',
    slug: 'ergo-live-proof-surface-agent-economy',
    title: 'Ergoblockchain.org Is Becoming a Live Proof Surface for the Agent Economy',
    excerpt:
      'The Ergo site is becoming more than a narrative website. It now exposes live agent-economy infrastructure: Sage full receipts, signed L1 evidence, MCP, Agent Hub, an ErgoScript playground and clear audit-gated mainnet boundaries.',
    date: '2026-05-20',
    lastUpdated: '2026-05-20',
    author: authors['dev-relations']!,
    category: 'Build Log',
    readTime: 9,
    wordCount: 2100,
    image: '/og/blog/ergo-live-proof-surface-agent-economy.webp',
    tags: ['Ergo', 'Agent Economy', 'Sage', 'Accord Protocol', 'MCP', 'ErgoScript', 'AI Agent Payments'],
    featured: true,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'agent-economy-live-proof-site-update',
    slug: 'agent-economy-live-proof-site-update',
    title: 'Ergoblockchain.org Is Becoming a Live Proof Surface for the Agent Economy',
    excerpt:
      'The Ergo site now exposes live agent-economy infrastructure: Agent Hub, MCP, Sage receipts, signed L1 evidence, an ErgoScript playground and clear testnet/mainnet gates.',
    date: '2026-05-18',
    lastUpdated: '2026-05-20',
    author: authors['dev-relations']!,
    category: 'Build Log',
    readTime: 9,
    wordCount: 2300,
    image: '/og/blog/agent-economy-live-proof-site-update.jpg',
    tags: ['Ergo', 'Agent Economy', 'Sage', 'MCP', 'Accord Protocol', 'ErgoScript Playground'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'shipping-paid-ai-on-chain',
    slug: 'shipping-paid-ai-on-chain',
    title: 'Shipping Sage: a paid AI agent settled on Ergo testnet',
    excerpt:
      'Sage now has a real Ergo testnet settlement trail, a full post-Blob receipt bundle, signed L1 conformance evidence, and a public receipt API.',
    date: '2026-05-15',
    lastUpdated: '2026-05-20',
    author: authors['ergo-team']!,
    category: 'Build Log',
    readTime: 11,
    wordCount: 2700,
    image: '/og/blog/shipping-paid-ai-on-chain.jpg',
    tags: ['Agent Economy', 'Accord Protocol', 'Sage', 'build log', 'Ergo testnet', 'AI agent payments', 'Claude'],
    featured: true,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
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
    image: '/og/ergo-in-five-minutes.jpg',
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
    image: '/og/ergo-manifesto.jpg',
    tags: ['Manifesto', 'Philosophy', 'Decentralization', 'Financial Freedom', 'Privacy'],
    featured: false,
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
    image: '/og/eutxo-vs-accounts.jpg',
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
    image: '/og/autolykos-proof-of-work.jpg',
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
    image: '/og/storage-rent.jpg',
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
    image: '/og/ergoscript-introduction.jpg',
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
    image: '/og/sigma-protocols-explained.jpg',
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
    image: '/og/sigma-protocols-privacy.jpg',
    tags: ['Sigma Protocols', 'Privacy', 'Zero Knowledge', 'Compliance', 'DeFi Privacy'],
    featured: false,
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
    image: '/og/nipopows-explained.jpg',
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
    image: '/og/oracle-pools-explained.jpg',
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
    image: '/og/babel-fees.jpg',
    tags: ['Babel Fees', 'Gas Abstraction', 'eUTXO', 'DeFi UX', 'On-chain Markets'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'agent-economy-manifesto',
    slug: 'agent-economy-manifesto',
    title: 'The Agent Economy Manifesto',
    excerpt:
      'Autonomous agents need more than payment rails. They need programmable money: bounded credit, machine-readable terms, work verification, verifiable settlement and policy-constrained Notes.',
    date: '2026-02-12',
    lastUpdated: '2026-05-13',
    author: authors['ergo-team']!,
    category: 'Vision',
    readTime: 12,
    wordCount: 3400,
    image: '/og/blog/agent-economy-manifesto.jpg',
    tags: ['Agent Economy', 'AI agents', 'programmable money', 'manifesto', 'Ergo'],
    featured: true,
    pinned: true,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'ergoscript-acceptance-predicates',
    slug: 'ergoscript-acceptance-predicates',
    title: 'ErgoScript Acceptance Predicates: On-Chain Work Verification for AI Agent Payments',
    excerpt: 'Acceptance predicates turn a payment into a conditionally redeemable work contract: the receiver can redeem only when the agreed task condition is satisfied.',
    date: '2026-03-12',
    lastUpdated: '2026-05-08',
    author: authors['dev-relations']!,
    category: 'Development',
    readTime: 10,
    wordCount: 2800,
    image: '/og/blog/ergoscript-acceptance-predicates.jpg',
    tags: ['ErgoScript', 'AI agent payments', 'acceptance predicates', 'eUTXO', 'work verification'],
    featured: false,
    trending: true,
    difficulty: 'Advanced',
    shares: 0
  },
  {
    id: 'notes-vs-tokens',
    slug: 'notes-vs-tokens',
    title: 'Notes vs Tokens: Programmable Bearer Instruments for AI Agent Payments',
    excerpt: 'Tokens are great for ownership. Notes are better for bounded, expiring, conditionally redeemable credit in autonomous agent workflows.',
    date: '2026-02-26',
    lastUpdated: '2026-05-08',
    author: authors['dev-relations']!,
    category: 'Development',
    readTime: 8,
    wordCount: 2400,
    image: '/og/blog/notes-vs-tokens.jpg',
    tags: ['Ergo Notes', 'native tokens', 'AI agent payments', 'bearer instruments', 'programmable credit'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'ergo-agent-economy-q2-2026',
    slug: 'ergo-agent-economy-q2-2026',
    title: 'Accord Protocol Q2 2026 Update: What Shipped in Ergo’s Agent Economy Stack',
    excerpt: 'Accord Protocol now ships a testnet-first agreement layer, full Note lifecycle, framework adapters and MCP tooling, with Sage providing a hosted proof, full receipt storage and signed L1 evidence.',
    date: '2026-05-06',
    lastUpdated: '2026-05-20',
    author: authors['dev-relations']!,
    category: 'Vision',
    readTime: 8,
    wordCount: 2100,
    image: '/og/blog/ergo-agent-economy-q2-2026.jpg',
    tags: ['Accord Protocol', 'Ergo', 'AI agent payments', 'MCP', 'x402', 'developer update'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'state-of-agent-payments-2026',
    slug: 'state-of-agent-payments-2026',
    title: 'AI Agent Payments in 2026: x402, Stripe, Ethereum, Solana and Ergo/Accord Compared',
    excerpt: 'The agent-payment landscape is moving quickly. x402 makes HTTP payments practical, Stripe is building agentic commerce, and Ergo/Accord now has a public Sage testnet proof with signed evidence.',
    date: '2026-04-15',
    lastUpdated: '2026-05-20',
    author: authors['dev-relations']!,
    category: 'Vision',
    readTime: 12,
    wordCount: 3000,
    image: '/og/blog/state-of-agent-payments-2026.jpg',
    tags: ['AI agent payments', 'x402', 'Stripe', 'Ergo', 'Accord Protocol', 'machine payments'],
    featured: false,
    trending: true,
    difficulty: 'Intermediate',
    shares: 0
  },
  {
    id: 'build-agent-pays-for-api',
    slug: 'build-agent-pays-for-api',
    title: 'Architecture Tutorial: Build an AI Agent That Pays for API Calls on Ergo Testnet',
    excerpt: 'An architecture tutorial for a paid API endpoint that an AI agent can call only after producing a verifiable Ergo payment receipt. Includes mock-mode (runnable without a wallet) and testnet-mode (with Nautilus / sigma-rust signing).',
    date: '2026-03-26',
    lastUpdated: '2026-05-08',
    author: authors['dev-relations']!,
    category: 'Development',
    readTime: 15,
    wordCount: 3200,
    image: '/og/blog/build-agent-pays-for-api.jpg',
    tags: ['Ergo', 'AI agent payments', 'API monetization', 'x402', 'developer tutorial', 'testnet'],
    featured: false,
    trending: true,
    difficulty: 'Advanced',
    shares: 0
  },
  {
    id: 'agents-cant-use-stripe',
    slug: 'agents-cant-use-stripe',
    title: 'Why AI Agents Need More Than Stripe: Agentic Commerce vs Autonomous Work Settlement',
    excerpt:
      'Stripe is building serious infrastructure for agentic commerce. The remaining gap is autonomous work settlement: programmable acceptance, credit Notes and verifiable receipts.',
    date: '2026-01-23',
    lastUpdated: '2026-05-08',
    author: authors['dev-relations']!,
    category: 'Development',
    readTime: 10,
    wordCount: 2600,
    image: '/og/blog/agents-cant-use-stripe.jpg',
    tags: ['Stripe', 'agentic commerce', 'AI agent payments', 'x402', 'Ergo', 'Accord Protocol'],
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
