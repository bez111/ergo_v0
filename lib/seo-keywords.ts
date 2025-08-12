// SEO Keywords Strategy for Ergo Blockchain
// Target: TOP-3 positions for all Ergo-related searches

export const targetKeywords = {
  // Core Brand Keywords (Priority: HIGHEST)
  brand: [
    'ergo',
    'ergo blockchain',
    'ergo platform',
    'ergo crypto',
    'ergo coin',
    'ERG token',
    'ERG cryptocurrency',
    '$ERG'
  ],
  
  // Technology Keywords (Priority: HIGH)
  technology: [
    'ergo eutxo',
    'extended utxo blockchain',
    'ergoscript',
    'ergo smart contracts',
    'sigma protocols',
    'autolykos algorithm',
    'autolykos v2',
    'nipopows blockchain',
    'storage rent blockchain',
    'proof of work blockchain 2024',
    'asic resistant mining',
    'memory hard pow',
    'oracle pools ergo',
    'ergo oracle',
    'blockchain subblocks'
  ],
  
  // Layer-1 Competition Keywords (Priority: HIGH)
  layer1: [
    'layer 1 blockchain',
    'l1 blockchain 2024',
    'best layer 1 crypto',
    'bitcoin alternative',
    'ethereum alternative',
    'cardano vs ergo',
    'ergo vs ethereum',
    'ergo vs bitcoin',
    'pow blockchain 2024',
    'decentralized blockchain',
    'sustainable blockchain',
    'green proof of work'
  ],
  
  // DeFi Keywords (Priority: HIGH)
  defi: [
    'ergo defi',
    'ergo dex',
    'ergo swap',
    'sigmausd',
    'ergo stablecoin',
    'defi on utxo',
    'ergo lending',
    'ergo liquidity pools',
    'ergo yield farming',
    'ergo dao',
    'decentralized finance ergo'
  ],
  
  // NFT Keywords (Priority: MEDIUM)
  nft: [
    'ergo nft',
    'ergo nft marketplace',
    'ergo collectibles',
    'nft on ergo',
    'ergo art',
    'ergo digital assets'
  ],
  
  // Privacy Keywords (Priority: HIGH)
  privacy: [
    'ergo mixer',
    'ergomix',
    'private transactions ergo',
    'zero knowledge proofs ergo',
    'ring signatures ergo',
    'confidential assets ergo',
    'privacy blockchain',
    'anonymous crypto 2024'
  ],
  
  // Mining Keywords (Priority: HIGH)
  mining: [
    'ergo mining',
    'mine ergo',
    'ergo mining calculator',
    'ergo mining pools',
    'ergo hashrate',
    'ergo mining profitability',
    'gpu mining ergo',
    'best ergo miner',
    'ergo mining software',
    'autolykos mining'
  ],
  
  // Wallet Keywords (Priority: HIGH)
  wallet: [
    'ergo wallet',
    'nautilus wallet',
    'satergo wallet',
    'ergo mobile wallet',
    'ergo hardware wallet',
    'best ergo wallet',
    'ergo wallet download',
    'ergo browser wallet',
    'ledger ergo support'
  ],
  
  // Trading Keywords (Priority: HIGH)
  trading: [
    'buy ergo',
    'where to buy ergo',
    'ergo price',
    'ergo price prediction',
    'ergo coin price',
    'ergo exchanges',
    'ergo trading',
    'ergo usdt',
    'ergo btc',
    'ergo market cap',
    'ergo tokenomics',
    'ergo circulating supply'
  ],
  
  // Development Keywords (Priority: MEDIUM)
  development: [
    'ergo development',
    'build on ergo',
    'ergo developer',
    'ergo sdk',
    'ergo api',
    'ergo documentation',
    'ergo github',
    'ergo testnet',
    'ergo mainnet',
    'ergo smart contract tutorial'
  ],
  
  // Community Keywords (Priority: MEDIUM)
  community: [
    'ergo community',
    'ergo telegram',
    'ergo discord',
    'ergo reddit',
    'ergo twitter',
    'ergo news',
    'ergo updates',
    'ergo roadmap',
    'ergo team',
    'ergo foundation',
    'sigmanauts',
    'ergonauts'
  ],
  
  // Long-tail Keywords (Priority: MEDIUM-HIGH)
  longTail: [
    'what is ergo blockchain',
    'how to mine ergo',
    'how to buy ergo crypto',
    'is ergo a good investment',
    'ergo vs cardano comparison',
    'ergo blockchain explained',
    'ergo cryptocurrency review',
    'ergo blockchain use cases',
    'why ergo blockchain',
    'ergo blockchain tutorial',
    'ergo blockchain for beginners',
    'future of ergo blockchain'
  ],
  
  // Regional Keywords (Priority: MEDIUM)
  regional: [
    'ergo blockchain usa',
    'ergo crypto europe',
    'ergo blockchain asia',
    'ergo cryptocurrency india',
    'ergo blockchain china',
    'ergo crypto uk',
    'ergo blockchain canada',
    'ergo crypto australia'
  ],
  
  // Trending Keywords (Priority: HIGH)
  trending: [
    'ergo 2024',
    'ergo blockchain 2024',
    'ergo price 2024',
    'ergo mining 2024',
    'best pow blockchain 2024',
    'sustainable blockchain 2024',
    'ergo halvening',
    'ergo emission schedule',
    'ergo btc etf',
    'ergo institutional adoption'
  ]
}

// Generate meta tags for specific keywords
export function generateMetaForKeywords(keywords: string[]): string {
  return keywords.join(', ')
}

// Get keywords by category
export function getKeywordsByCategory(category: string): string[] {
  return targetKeywords[category as keyof typeof targetKeywords] || []
}

// Get all high-priority keywords
export function getHighPriorityKeywords(): string[] {
  return [
    ...targetKeywords.brand,
    ...targetKeywords.technology,
    ...targetKeywords.layer1,
    ...targetKeywords.defi,
    ...targetKeywords.privacy,
    ...targetKeywords.mining,
    ...targetKeywords.wallet,
    ...targetKeywords.trading,
    ...targetKeywords.trending
  ]
}

// SEO Content Strategy
export const contentStrategy = {
  pillarContent: [
    {
      title: 'Complete Guide to Ergo Blockchain',
      target: 'ergo blockchain',
      wordCount: 5000,
      schema: 'Article'
    },
    {
      title: 'Ergo vs Ethereum vs Cardano: Layer-1 Comparison',
      target: 'layer 1 blockchain',
      wordCount: 4000,
      schema: 'Comparison'
    },
    {
      title: 'ErgoScript Tutorial: From Zero to Hero',
      target: 'ergoscript',
      wordCount: 6000,
      schema: 'Tutorial'
    },
    {
      title: 'Ergo Mining Ultimate Guide 2024',
      target: 'ergo mining',
      wordCount: 3500,
      schema: 'HowTo'
    },
    {
      title: 'Ergo DeFi Ecosystem Overview',
      target: 'ergo defi',
      wordCount: 3000,
      schema: 'Article'
    }
  ],
  
  clusterContent: [
    {
      cluster: 'Mining',
      articles: [
        'How to Mine Ergo: Beginner Guide',
        'Ergo Mining Calculator and Profitability',
        'Best Ergo Mining Pools 2024',
        'Ergo Mining Hardware Comparison',
        'Autolykos Algorithm Explained'
      ]
    },
    {
      cluster: 'Trading',
      articles: [
        'Where to Buy Ergo: Complete Exchange List',
        'Ergo Price Analysis and Predictions',
        'Ergo Tokenomics Deep Dive',
        'How to Trade ERG: Strategies',
        'Ergo Market Analysis 2024'
      ]
    },
    {
      cluster: 'Development',
      articles: [
        'Building dApps on Ergo',
        'ErgoScript vs Solidity',
        'Ergo SDK Tutorial Series',
        'Smart Contract Security on Ergo',
        'Ergo Developer Resources'
      ]
    }
  ]
}

// Link Building Strategy
export const linkBuildingTargets = {
  tier1: [
    'CoinDesk',
    'CoinTelegraph',
    'Decrypt',
    'The Block',
    'CryptoSlate',
    'Messari',
    'DeFi Pulse',
    'Dune Analytics'
  ],
  tier2: [
    'Altcoin Daily',
    'Crypto Banter',
    'Coin Bureau',
    'Digital Asset News',
    'Bankless',
    'The Defiant',
    'Unchained Podcast',
    'What Bitcoin Did'
  ],
  tier3: [
    'Reddit r/cryptocurrency',
    'Reddit r/cardano',
    'Bitcoin Talk Forum',
    'Telegram Crypto Groups',
    'Discord Crypto Servers',
    'Twitter Crypto Influencers'
  ]
} 