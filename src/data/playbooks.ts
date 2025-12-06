/**
 * Ergo Playbooks - Intent-based landing pages
 * Each playbook is a curated collection of resources for a specific use case
 */

export interface PlaybookStep {
  title: string;
  description: string;
  duration?: string;
  resources?: {
    type: 'link' | 'tool' | 'doc';
    title: string;
    href: string;
  }[];
}

export interface PlaybookCaseStudy {
  title: string;
  description: string;
  outcome?: string;
  link?: string;
  logo?: string;
}

export interface Playbook {
  // Core identification
  slug: string;
  title: string;
  subtitle: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  
  // Categorization
  cluster: 'defi' | 'privacy' | 'mining' | 'sustainability' | 'vc-alternative' | 'global-settlement' | 'developer' | 'investor';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToComplete: string;
  
  // Content
  heroDescription: string;
  
  // Why this matters
  problemStatement: string;
  solution: string;
  
  // Steps (for HowTo schema)
  steps: PlaybookStep[];
  
  // Related content (tags for matching)
  relatedInfographicTags: string[];
  relatedBlogTags: string[];
  relatedDocsTags: string[];
  
  // Manual overrides for specific content
  featuredInfographics?: string[]; // slugs
  featuredPosts?: string[]; // slugs
  featuredDocs?: string[]; // paths
  
  // Case studies
  caseStudies?: PlaybookCaseStudy[];
  
  // CTA
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  
  // Visual
  icon: string;
  gradient: string;
  
  // Dates
  publishDate: string;
  updatedDate?: string;
}

export const playbooks: Playbook[] = [
  // ============================================
  // DeFi CLUSTER
  // ============================================
  {
    slug: "build-defi-on-ergo",
    title: "Build a DeFi App on Ergo",
    subtitle: "From concept to mainnet in weeks, not months",
    
    seoTitle: "Build DeFi on Ergo 2025: eUTXO Smart Contracts Tutorial",
    seoDescription: "Complete guide to building decentralized finance applications on Ergo. Learn eUTXO patterns, ErgoScript, and deploy your first DeFi protocol.",
    keywords: ["ergo defi", "build defi app", "eutxo defi", "ergoscript tutorial", "ergo smart contracts", "defi development"],
    
    cluster: "defi",
    difficulty: "intermediate",
    timeToComplete: "2-4 weeks",
    
    heroDescription: "Ergo's eUTXO model eliminates entire classes of DeFi vulnerabilities. No reentrancy attacks, predictable fees, and parallel execution. Build secure DeFi that actually works.",
    
    problemStatement: "Traditional DeFi on account-based chains is plagued by exploits, unpredictable gas costs, and MEV extraction. Developers spend more time on security audits than building features.",
    solution: "Ergo's eUTXO model provides deterministic execution, no reentrancy by design, and MEV resistance. ErgoScript is expressive yet auditable. Build once, deploy with confidence.",
    
    steps: [
      {
        title: "Understand eUTXO Fundamentals",
        description: "Learn how boxes, registers, and ErgoScript work together. This mental model shift is crucial for secure DeFi.",
        duration: "2-3 days",
        resources: [
          { type: 'doc', title: "eUTXO Model Explained", href: "/technology/eutxo-model" },
          { type: 'doc', title: "Boxes and Registers", href: "/docs/developers/eutxo-model" },
        ]
      },
      {
        title: "Set Up Development Environment",
        description: "Install ErgoScript playground, configure AppKit, and connect to testnet.",
        duration: "1 day",
        resources: [
          { type: 'tool', title: "ErgoScript Playground", href: "https://scastie.scala-lang.org" },
          { type: 'doc', title: "AppKit Setup Guide", href: "/docs/developers/appkit" },
        ]
      },
      {
        title: "Build Your First Contract",
        description: "Start with a simple token swap contract. Understand input/output validation patterns.",
        duration: "3-5 days",
        resources: [
          { type: 'doc', title: "ErgoScript Tutorial", href: "/learn/ergoscript" },
          { type: 'link', title: "Contract Examples", href: "https://github.com/ergoplatform/ergoscript-by-example" },
        ]
      },
      {
        title: "Integrate Oracle Data",
        description: "Connect your DeFi app to Ergo's decentralized Oracle Pools for real-world data.",
        duration: "2-3 days",
        resources: [
          { type: 'doc', title: "Oracle Pools Guide", href: "/technology/oracle-pools" },
          { type: 'link', title: "Oracle Pool Explorer", href: "https://explorer.ergoplatform.com/en/oracle-pools" },
        ]
      },
      {
        title: "Deploy and Test",
        description: "Deploy to testnet, run integration tests, and prepare for mainnet launch.",
        duration: "1 week",
        resources: [
          { type: 'doc', title: "Deployment Guide", href: "/docs/developers/deployment" },
          { type: 'tool', title: "Ergo Testnet Faucet", href: "https://testnet.ergoplatform.com/faucet" },
        ]
      },
    ],
    
    relatedInfographicTags: ["eUTXO", "DeFi", "smart contracts", "ErgoScript"],
    relatedBlogTags: ["DeFi", "development", "smart contracts", "tutorial"],
    relatedDocsTags: ["developers", "ergoscript", "appkit"],
    
    featuredInfographics: [
      "ergo-eutxo-model-bitcoin-security-smart-contract-flexibility",
      "mev-resistance-vs-dark-forest",
      "ergo-oracle-pools-decentralized-reliable-real-world-data",
    ],
    
    caseStudies: [
      {
        title: "Spectrum Finance",
        description: "Decentralized exchange built on Ergo's eUTXO model with AMM and order book functionality.",
        outcome: "Processing millions in daily volume with zero exploits",
        link: "https://spectrum.fi",
      },
      {
        title: "SigmaUSD",
        description: "Algorithmic stablecoin using the AgeUSD protocol, fully collateralized by ERG.",
        outcome: "First algorithmic stablecoin on eUTXO, maintaining peg through market volatility",
        link: "https://sigmausd.io",
      },
    ],
    
    primaryCTA: {
      label: "Start Building",
      href: "/learn/ergoscript",
    },
    secondaryCTA: {
      label: "Join Developer Discord",
      href: "https://discord.gg/ergo-platform",
    },
    
    icon: "Code",
    gradient: "from-orange-500 to-red-500",
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // PRIVACY CLUSTER
  // ============================================
  {
    slug: "escape-financial-repression",
    title: "Escape Financial Repression with Ergo",
    subtitle: "Sovereign money for the digital age",
    
    seoTitle: "Financial Freedom with Ergo: Privacy, Self-Custody, Censorship Resistance",
    seoDescription: "Learn how Ergo enables financial sovereignty through Sigma Protocols, self-custody, and censorship-resistant transactions. Escape capital controls.",
    keywords: ["financial freedom", "capital controls", "ergo privacy", "sigma protocols", "self custody", "censorship resistance", "cbdc alternative"],
    
    cluster: "privacy",
    difficulty: "beginner",
    timeToComplete: "1-2 weeks",
    
    heroDescription: "In a world of increasing financial surveillance and capital controls, Ergo provides tools for genuine financial sovereignty. Optional privacy, true self-custody, and censorship-resistant transactions.",
    
    problemStatement: "CBDCs threaten programmable restrictions on your money. Banks can freeze accounts. Governments impose capital controls. Your financial freedom is not guaranteed.",
    solution: "Ergo offers a fair-launch, decentralized alternative with native privacy features. Sigma Protocols enable selective disclosure - prove what you need without revealing everything.",
    
    steps: [
      {
        title: "Set Up Self-Custody Wallet",
        description: "Install Nautilus or SAFEW wallet. Write down your seed phrase offline. Never share it with anyone.",
        duration: "30 minutes",
        resources: [
          { type: 'tool', title: "Nautilus Wallet", href: "https://nautilus.io" },
          { type: 'doc', title: "Wallet Security Guide", href: "/start/wallet" },
        ]
      },
      {
        title: "Understand Privacy Options",
        description: "Learn about Sigma Protocols and how they enable optional privacy on Ergo.",
        duration: "1-2 hours",
        resources: [
          { type: 'doc', title: "Sigma Protocols Explained", href: "/blog/sigma-protocols-explained" },
          { type: 'doc', title: "Privacy Features", href: "/technology/privacy-features" },
        ]
      },
      {
        title: "Use ErgoMixer for Privacy",
        description: "Mix your ERG to break transaction linkability. Understand the privacy guarantees.",
        duration: "1-2 hours",
        resources: [
          { type: 'tool', title: "ErgoMixer", href: "https://ergomixer.com" },
          { type: 'doc', title: "Mixing Guide", href: "/docs/users/ergomixer" },
        ]
      },
      {
        title: "Acquire ERG Without KYC",
        description: "Learn about peer-to-peer exchanges and privacy-preserving acquisition methods.",
        duration: "Varies",
        resources: [
          { type: 'link', title: "P2P Exchanges", href: "/start/get-erg" },
          { type: 'doc', title: "Privacy Best Practices", href: "/docs/users/privacy" },
        ]
      },
      {
        title: "Long-term Security",
        description: "Understand Storage Rent, backup strategies, and how to maintain sovereignty over time.",
        duration: "1 hour",
        resources: [
          { type: 'doc', title: "Storage Rent Guide", href: "/technology/storage-rent" },
          { type: 'doc', title: "Security Best Practices", href: "/start/security" },
        ]
      },
    ],
    
    relatedInfographicTags: ["privacy", "Sigma Protocols", "CBDC", "censorship", "self-custody"],
    relatedBlogTags: ["privacy", "Sigma Protocols", "security", "self-custody"],
    relatedDocsTags: ["privacy", "security", "wallet"],
    
    featuredInfographics: [
      "ergo-privacy-non-interactive-efficient",
      "vc-chain-vs-ergo-fair-launch",
    ],
    
    caseStudies: [
      {
        title: "ErgoMixer",
        description: "Non-custodial, decentralized mixer using Sigma Protocols for transaction privacy.",
        outcome: "Thousands of users maintaining financial privacy without trusted third parties",
      },
    ],
    
    primaryCTA: {
      label: "Get Started",
      href: "/start/wallet",
    },
    secondaryCTA: {
      label: "Learn About Privacy",
      href: "/technology/privacy-features",
    },
    
    icon: "Shield",
    gradient: "from-purple-500 to-blue-500",
    
    publishDate: "2025-01-20",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // MINING CLUSTER
  // ============================================
  {
    slug: "start-mining-ergo",
    title: "Start Mining Ergo",
    subtitle: "GPU mining that's actually profitable",
    
    seoTitle: "How to Mine Ergo 2025: GPU Mining Guide, Pools, Profitability",
    seoDescription: "Complete guide to mining Ergo with GPUs. Autolykos algorithm, pool selection, hardware optimization, and profitability calculations.",
    keywords: ["ergo mining", "gpu mining", "autolykos", "mining pool", "ergo profitability", "asic resistant mining"],
    
    cluster: "mining",
    difficulty: "beginner",
    timeToComplete: "1-2 days",
    
    heroDescription: "Ergo's Autolykos algorithm is ASIC-resistant and GPU-friendly. Mine with your existing hardware, join a decentralized network, and earn ERG while securing the blockchain.",
    
    problemStatement: "Bitcoin mining is dominated by ASICs and industrial operations. GPU miners are pushed out. Centralization threatens network security.",
    solution: "Autolykos keeps mining accessible to individuals with GPUs. Fair distribution, decentralized hashrate, and sustainable economics through Storage Rent.",
    
    steps: [
      {
        title: "Check Hardware Compatibility",
        description: "Verify your GPU meets minimum requirements (4GB+ VRAM). AMD and NVIDIA cards both work.",
        duration: "15 minutes",
        resources: [
          { type: 'doc', title: "Hardware Requirements", href: "/docs/miners/hardware" },
          { type: 'link', title: "GPU Comparison Chart", href: "/docs/miners/gpu-comparison" },
        ]
      },
      {
        title: "Choose Mining Software",
        description: "Download and configure mining software. Popular options include lolMiner, NBMiner, and T-Rex.",
        duration: "30 minutes",
        resources: [
          { type: 'link', title: "lolMiner", href: "https://github.com/Lolliedieb/lolMiner-releases" },
          { type: 'doc', title: "Mining Software Guide", href: "/docs/miners/software" },
        ]
      },
      {
        title: "Select a Mining Pool",
        description: "Join a pool to receive regular payouts. Consider pool fees, server locations, and payout thresholds.",
        duration: "15 minutes",
        resources: [
          { type: 'link', title: "Pool Comparison", href: "/docs/miners/pools" },
          { type: 'doc', title: "Solo vs Pool Mining", href: "/docs/miners/solo-vs-pool" },
        ]
      },
      {
        title: "Configure and Start Mining",
        description: "Set up your wallet address, configure batch files, and start mining. Monitor hashrate and temperature.",
        duration: "1 hour",
        resources: [
          { type: 'doc', title: "Configuration Guide", href: "/docs/miners/configuration" },
          { type: 'tool', title: "Ergo Explorer", href: "https://explorer.ergoplatform.com" },
        ]
      },
      {
        title: "Optimize for Efficiency",
        description: "Tune GPU settings for best hashrate per watt. Understand overclocking and undervolting.",
        duration: "2-4 hours",
        resources: [
          { type: 'doc', title: "Optimization Guide", href: "/docs/miners/optimization" },
          { type: 'link', title: "Mining Calculator", href: "https://whattomine.com/coins/340-erg-autolykos" },
        ]
      },
    ],
    
    relatedInfographicTags: ["mining", "Autolykos", "Proof-of-Work", "decentralization"],
    relatedBlogTags: ["mining", "Autolykos", "GPU", "profitability"],
    relatedDocsTags: ["miners", "mining", "autolykos"],
    
    featuredInfographics: [
      "autolykos-mining-without-masters",
      "pow-vs-pos-censorship-and-attack-surface",
    ],
    
    primaryCTA: {
      label: "Mining Docs",
      href: "/docs/miners",
    },
    secondaryCTA: {
      label: "Join Mining Community",
      href: "https://t.me/ergo_mining",
    },
    
    icon: "Pickaxe",
    gradient: "from-amber-500 to-orange-500",
    
    publishDate: "2025-01-10",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // VC-ALTERNATIVE CLUSTER
  // ============================================
  {
    slug: "fair-launch-alternative",
    title: "Why Fair Launch Matters",
    subtitle: "Ergo vs VC-funded chains",
    
    seoTitle: "Ergo Fair Launch vs VC Chains: No Premine, No ICO, True Decentralization",
    seoDescription: "Understand why Ergo's fair launch matters. Compare with VC-funded chains, learn about tokenomics, and why decentralization requires fair distribution.",
    keywords: ["fair launch crypto", "no premine", "no ico", "vc chain problems", "ergo tokenomics", "decentralized distribution"],
    
    cluster: "vc-alternative",
    difficulty: "beginner",
    timeToComplete: "1-2 hours",
    
    heroDescription: "Ergo had no ICO, no premine, no VC allocation. 100% of ERG was distributed through mining. This isn't just idealism - it's the foundation for true decentralization.",
    
    problemStatement: "Most modern blockchains launch with massive insider allocations. VCs dump on retail. Founders control governance. 'Decentralization' becomes marketing theater.",
    solution: "Ergo's fair launch means no insiders to dump, no VCs to appease, no foundation controlling the majority of tokens. The community owns the network from day one.",
    
    steps: [
      {
        title: "Understand Fair Launch Principles",
        description: "Learn why token distribution matters for long-term decentralization and security.",
        duration: "30 minutes",
        resources: [
          { type: 'doc', title: "Fair Launch Explained", href: "/learn/glossary/fair-launch" },
          { type: 'doc', title: "Ergo Manifesto", href: "/blog/ergo-manifesto" },
        ]
      },
      {
        title: "Compare Tokenomics",
        description: "See how Ergo's distribution compares to VC-funded chains. Understand the long-term implications.",
        duration: "1 hour",
        resources: [
          { type: 'doc', title: "Ergo vs VC Chains", href: "/compare/ergo-vs-vc-chain" },
          { type: 'doc', title: "Tokenomics Deep Dive", href: "/docs/tokenomics" },
        ]
      },
      {
        title: "Explore Governance",
        description: "Learn how Ergo's community-driven governance works without centralized token holders.",
        duration: "30 minutes",
        resources: [
          { type: 'doc', title: "Governance Model", href: "/docs/governance" },
          { type: 'link', title: "Ergo Foundation", href: "https://ergoplatform.org/foundation" },
        ]
      },
      {
        title: "Get Involved",
        description: "Join the community, participate in discussions, and contribute to Ergo's future.",
        duration: "Ongoing",
        resources: [
          { type: 'link', title: "Community Channels", href: "/start/community" },
          { type: 'link', title: "Contribute", href: "/contribute" },
        ]
      },
    ],
    
    relatedInfographicTags: ["fair launch", "tokenomics", "VC-chain", "decentralization"],
    relatedBlogTags: ["fair launch", "tokenomics", "manifesto", "decentralization"],
    relatedDocsTags: ["tokenomics", "governance", "foundation"],
    
    featuredInfographics: [
      "vc-chain-vs-ergo-fair-launch",
    ],
    
    primaryCTA: {
      label: "Read the Manifesto",
      href: "/blog/ergo-manifesto",
    },
    secondaryCTA: {
      label: "Compare Ergo",
      href: "/compare",
    },
    
    icon: "Scale",
    gradient: "from-green-500 to-teal-500",
    
    publishDate: "2025-01-25",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // INVESTOR CLUSTER
  // ============================================
  {
    slug: "add-ergo-to-portfolio",
    title: "Add Ergo to Your Portfolio",
    subtitle: "Fundamental analysis for long-term holders",
    
    seoTitle: "Ergo Investment Thesis 2025: Fundamentals, Tokenomics, Long-term Value",
    seoDescription: "Complete investment analysis of Ergo. Fair launch tokenomics, technical innovation, ecosystem growth, and why ERG deserves a place in your crypto portfolio.",
    keywords: ["ergo investment", "erg token", "ergo fundamentals", "crypto portfolio", "ergo price", "ergo analysis"],
    
    cluster: "investor",
    difficulty: "beginner",
    timeToComplete: "2-3 hours",
    
    heroDescription: "Ergo combines Bitcoin's security model with smart contract capabilities, fair launch distribution, and innovative economics. Here's the fundamental case for ERG.",
    
    problemStatement: "Most crypto projects are either technically sound but poorly distributed, or well-marketed but fundamentally weak. Finding genuine value is increasingly difficult.",
    solution: "Ergo offers a rare combination: peer-reviewed research, fair launch distribution, sustainable economics (Storage Rent), and genuine technical innovation (eUTXO, Sigma Protocols, NiPoPoWs).",
    
    steps: [
      {
        title: "Understand the Technology",
        description: "Learn what makes Ergo technically unique: eUTXO, Sigma Protocols, NiPoPoWs, and Storage Rent.",
        duration: "1-2 hours",
        resources: [
          { type: 'doc', title: "Technology Overview", href: "/technology" },
          { type: 'doc', title: "Ergo in 5 Minutes", href: "/blog/ergo-in-5-minutes" },
        ]
      },
      {
        title: "Analyze Tokenomics",
        description: "Understand ERG's fixed supply, emission schedule, and how Storage Rent creates sustainable economics.",
        duration: "30 minutes",
        resources: [
          { type: 'doc', title: "Emission Schedule", href: "/learn/glossary/emission-schedule" },
          { type: 'doc', title: "Storage Rent Economics", href: "/technology/storage-rent" },
        ]
      },
      {
        title: "Explore the Ecosystem",
        description: "Discover DeFi protocols, NFT platforms, and applications being built on Ergo.",
        duration: "1 hour",
        resources: [
          { type: 'doc', title: "Ecosystem Overview", href: "/ecosystem" },
          { type: 'link', title: "DeFi on Ergo", href: "/use/defi" },
        ]
      },
      {
        title: "Secure Your Holdings",
        description: "Set up proper self-custody, understand wallet security, and plan for long-term storage.",
        duration: "30 minutes",
        resources: [
          { type: 'doc', title: "Wallet Guide", href: "/start/wallet" },
          { type: 'doc', title: "Security Best Practices", href: "/start/security" },
        ]
      },
      {
        title: "Stay Informed",
        description: "Follow development updates, join the community, and track ecosystem growth.",
        duration: "Ongoing",
        resources: [
          { type: 'link', title: "Weekly Updates", href: "/blog" },
          { type: 'link', title: "Community Channels", href: "/start/community" },
        ]
      },
    ],
    
    relatedInfographicTags: ["tokenomics", "fair launch", "Storage Rent", "eUTXO"],
    relatedBlogTags: ["investment", "fundamentals", "tokenomics", "ecosystem"],
    relatedDocsTags: ["tokenomics", "technology", "ecosystem"],
    
    featuredInfographics: [
      "ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners",
      "vc-chain-vs-ergo-fair-launch",
    ],
    
    primaryCTA: {
      label: "Get ERG",
      href: "/start/get-erg",
    },
    secondaryCTA: {
      label: "Technology Deep Dive",
      href: "/technology",
    },
    
    icon: "TrendingUp",
    gradient: "from-blue-500 to-cyan-500",
    
    publishDate: "2025-01-30",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // SUSTAINABILITY CLUSTER
  // ============================================
  {
    slug: "sustainable-blockchain-economics",
    title: "Sustainable Blockchain Economics",
    subtitle: "How Ergo solves the security budget problem",
    
    seoTitle: "Ergo Storage Rent: Solving Blockchain's Long-term Security Problem",
    seoDescription: "Learn how Ergo's Storage Rent creates sustainable miner incentives beyond block rewards. The solution to Bitcoin's security budget problem.",
    keywords: ["storage rent", "blockchain sustainability", "security budget", "miner incentives", "ergo economics", "state bloat"],
    
    cluster: "sustainability",
    difficulty: "intermediate",
    timeToComplete: "1-2 hours",
    
    heroDescription: "What happens when block rewards run out? Ergo's Storage Rent provides a protocol-level solution to the security budget problem that every PoW chain will eventually face.",
    
    problemStatement: "Bitcoin's security budget relies on diminishing block rewards + transaction fees. As rewards halve, will fees be enough to secure a trillion-dollar network? Nobody knows.",
    solution: "Ergo's Storage Rent reclaims fees from dormant UTXOs, creating a sustainable revenue stream for miners indefinitely. Plus, it prevents state bloat and incentivizes active use of the chain.",
    
    steps: [
      {
        title: "Understand the Problem",
        description: "Learn about the security budget challenge facing Bitcoin and other PoW chains.",
        duration: "30 minutes",
        resources: [
          { type: 'doc', title: "Security Budget Problem", href: "/blog/storage-rent" },
          { type: 'doc', title: "Bitcoin's Challenge", href: "/compare/ergo-vs-bitcoin" },
        ]
      },
      {
        title: "Learn Storage Rent Mechanics",
        description: "Understand how Storage Rent works, when it applies, and how to avoid it.",
        duration: "30 minutes",
        resources: [
          { type: 'doc', title: "Storage Rent Explained", href: "/technology/storage-rent" },
          { type: 'doc', title: "Glossary: Storage Rent", href: "/learn/glossary/storage-rent" },
        ]
      },
      {
        title: "Explore Economic Implications",
        description: "See how Storage Rent affects tokenomics, miner incentives, and long-term sustainability.",
        duration: "30 minutes",
        resources: [
          { type: 'doc', title: "Economic Analysis", href: "/docs/tokenomics/storage-rent" },
          { type: 'doc', title: "Emission + Rent Model", href: "/learn/glossary/emission-schedule" },
        ]
      },
      {
        title: "Practical Considerations",
        description: "Learn how to manage your ERG holdings to minimize Storage Rent impact.",
        duration: "15 minutes",
        resources: [
          { type: 'doc', title: "User Guide", href: "/docs/users/storage-rent" },
          { type: 'doc', title: "Wallet Best Practices", href: "/start/wallet" },
        ]
      },
    ],
    
    relatedInfographicTags: ["Storage Rent", "sustainability", "economics", "mining"],
    relatedBlogTags: ["Storage Rent", "economics", "sustainability", "Bitcoin"],
    relatedDocsTags: ["storage-rent", "economics", "tokenomics"],
    
    featuredInfographics: [
      "ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners",
    ],
    
    primaryCTA: {
      label: "Learn More",
      href: "/technology/storage-rent",
    },
    secondaryCTA: {
      label: "Compare with Bitcoin",
      href: "/compare/ergo-vs-bitcoin",
    },
    
    icon: "Leaf",
    gradient: "from-emerald-500 to-green-500",
    
    publishDate: "2025-02-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // GLOBAL SETTLEMENT CLUSTER
  // ============================================
  {
    slug: "ergo-global-settlement",
    title: "Ergo for Global Settlement",
    subtitle: "Trustless, borderless, unstoppable",
    
    seoTitle: "Ergo as Global Settlement Layer: Cross-chain, NiPoPoWs, Trustless Bridges",
    seoDescription: "How Ergo's NiPoPoWs enable trustless cross-chain settlement. Light clients, bridges, and the infrastructure for global financial rails.",
    keywords: ["global settlement", "cross-chain", "nipopows", "trustless bridges", "ergo interoperability", "light clients"],
    
    cluster: "global-settlement",
    difficulty: "advanced",
    timeToComplete: "3-4 hours",
    
    heroDescription: "NiPoPoWs enable trustless verification of Ergo from mobile devices and other chains. This is the foundation for a global settlement layer that doesn't require trusted intermediaries.",
    
    problemStatement: "Cross-chain bridges are security nightmares. Billions lost to bridge hacks. Centralized validators, trusted setups, and complex multi-sigs create attack surfaces.",
    solution: "Ergo's NiPoPoWs enable cryptographic verification of chain state without full nodes. Trustless bridges, efficient light clients, and true interoperability become possible.",
    
    steps: [
      {
        title: "Understand NiPoPoWs",
        description: "Learn how Non-Interactive Proofs of Proof-of-Work enable trustless light clients.",
        duration: "1 hour",
        resources: [
          { type: 'doc', title: "NiPoPoWs Explained", href: "/technology/nipopows" },
          { type: 'doc', title: "Blog: NiPoPoWs Deep Dive", href: "/blog/nipopows-explained" },
        ]
      },
      {
        title: "Explore Bridge Architecture",
        description: "See how Rosen Bridge uses NiPoPoWs for trust-minimized cross-chain transfers.",
        duration: "1 hour",
        resources: [
          { type: 'link', title: "Rosen Bridge", href: "https://rosen.tech" },
          { type: 'doc', title: "Bridge Documentation", href: "/use/bridges" },
        ]
      },
      {
        title: "Light Client Development",
        description: "Understand how to build applications that verify Ergo state without full nodes.",
        duration: "1-2 hours",
        resources: [
          { type: 'doc', title: "Light Client Guide", href: "/docs/developers/light-clients" },
          { type: 'doc', title: "Glossary: Light Clients", href: "/learn/glossary/light-clients" },
        ]
      },
      {
        title: "Integration Patterns",
        description: "Learn patterns for integrating Ergo verification into other systems and chains.",
        duration: "1 hour",
        resources: [
          { type: 'doc', title: "Integration Guide", href: "/docs/developers/integration" },
          { type: 'link', title: "Developer Resources", href: "/docs/developers" },
        ]
      },
    ],
    
    relatedInfographicTags: ["NiPoPoWs", "cross-chain", "bridges", "light clients"],
    relatedBlogTags: ["NiPoPoWs", "bridges", "interoperability", "scalability"],
    relatedDocsTags: ["nipopows", "bridges", "light-clients"],
    
    featuredInfographics: [
      "ergo-nipopows-scalable-trustless-light-clients",
    ],
    
    caseStudies: [
      {
        title: "Rosen Bridge",
        description: "Trust-minimized bridge connecting Ergo to Cardano, Bitcoin, and Ethereum.",
        outcome: "Secure cross-chain transfers without centralized validators",
        link: "https://rosen.tech",
      },
    ],
    
    primaryCTA: {
      label: "Explore NiPoPoWs",
      href: "/technology/nipopows",
    },
    secondaryCTA: {
      label: "Use Rosen Bridge",
      href: "https://rosen.tech",
    },
    
    icon: "Globe",
    gradient: "from-indigo-500 to-purple-500",
    
    publishDate: "2025-02-05",
    updatedDate: "2025-11-26",
  },

  // ============================================
  // NEW PLAYBOOKS
  // ============================================
  {
    slug: "first-transaction-10-minutes",
    title: "Your First Ergo Transaction in 10 Minutes",
    subtitle: "From zero to sending ERG in one coffee break",
    
    seoTitle: "First Ergo Transaction: 10-Minute Quick Start Guide",
    seoDescription: "Get started with Ergo in 10 minutes. Install wallet, receive ERG, send your first transaction. Step-by-step beginner guide.",
    keywords: ["ergo tutorial", "first transaction", "ergo wallet setup", "beginner guide", "nautilus wallet", "ergo quick start"],
    
    cluster: "investor",
    difficulty: "beginner",
    estimatedTime: "10 minutes",
    
    problemStatement: "You've heard about Ergo but don't know where to start. Crypto can seem overwhelming with wallets, addresses, and transactions.",
    solution: "This playbook gets you from zero to your first transaction in 10 minutes. Install Nautilus wallet, secure your seed phrase, receive some ERG, and send a test transaction.",
    
    prerequisites: [
      "A computer with Chrome, Brave, or Firefox browser",
      "10 minutes of focused time",
      "Optional: A friend with ERG or exchange account",
    ],
    
    outcomes: [
      "Nautilus wallet installed and secured",
      "Seed phrase safely backed up",
      "First ERG received",
      "First transaction sent successfully",
    ],
    
    steps: [
      {
        title: "Install Nautilus Wallet",
        description: "Go to nautilus.io and install the browser extension. Nautilus is the most popular Ergo wallet with full dApp support.",
        duration: "2 minutes",
        resources: [
          { type: 'link', title: "Nautilus Official Site", href: "https://nautilus.io" },
          { type: 'glossary', title: "What is a Wallet?", href: "/learn/glossary/wallet" },
        ]
      },
      {
        title: "Create Wallet & Secure Seed Phrase",
        description: "Create a new wallet. Write down your 15-word seed phrase on paper (not digitally!). Store it safely. This phrase IS your wallet - lose it and you lose everything.",
        duration: "3 minutes",
        resources: [
          { type: 'glossary', title: "Seed Phrase Security", href: "/learn/glossary/seed-phrase" },
        ]
      },
      {
        title: "Get Your First ERG",
        description: "Copy your wallet address. Get ERG from: a friend, an exchange (KuCoin, Gate.io), or the Ergo faucet for small amounts. Wait for confirmation.",
        duration: "3 minutes",
        resources: [
          { type: 'question', title: "Where to Buy ERG?", href: "/questions/where-to-buy-ergo" },
        ]
      },
      {
        title: "Send Your First Transaction",
        description: "Send a small test amount to another address (or back to yourself). Review the fee (~0.001 ERG), confirm, and watch it confirm in ~2 minutes.",
        duration: "2 minutes",
        resources: [
          { type: 'glossary', title: "Transaction Fees", href: "/learn/glossary/transaction-fees" },
          { type: 'glossary', title: "Confirmation", href: "/learn/glossary/confirmation" },
        ]
      },
    ],
    
    relatedInfographicTags: ["ergo basics", "getting started", "wallet"],
    relatedBlogTags: ["beginner", "tutorial", "wallet"],
    relatedDocsTags: ["getting-started", "wallet"],
    
    featuredInfographics: [
      "ergo-blockchain-introduction-fundamentals",
    ],
    
    primaryCTA: {
      label: "Install Nautilus",
      href: "https://nautilus.io",
    },
    secondaryCTA: {
      label: "Learn More About Ergo",
      href: "/start/introduction",
    },
    
    icon: "Wallet",
    gradient: "from-green-500 to-emerald-500",
    
    publishDate: "2025-01-01",
  },

  {
    slug: "private-transaction-ergomixer",
    title: "Send a Private Transaction with ErgoMixer",
    subtitle: "Break transaction links for financial privacy",
    
    seoTitle: "ErgoMixer Tutorial: Private Transactions on Ergo",
    seoDescription: "Step-by-step guide to using ErgoMixer for private transactions. Non-custodial mixing with Sigma Protocols.",
    keywords: ["ergomixer", "private transaction", "ergo privacy", "transaction mixing", "sigma protocols", "financial privacy"],
    
    cluster: "privacy",
    difficulty: "intermediate",
    estimatedTime: "30 minutes",
    
    problemStatement: "Blockchain transactions are public. Anyone can trace your financial activity, link your addresses, and profile your spending. This compromises your privacy and security.",
    solution: "ErgoMixer breaks the link between your input and output addresses using Sigma Protocols. It's non-custodial (you control your funds) and trustless (no operator can steal or log).",
    
    prerequisites: [
      "Nautilus wallet with some ERG",
      "Understanding of basic Ergo transactions",
      "Patience for mixing rounds (more rounds = more privacy)",
    ],
    
    outcomes: [
      "Understand how ErgoMixer works",
      "Complete a mixing transaction",
      "Receive ERG at an unlinked address",
      "Know best practices for privacy",
    ],
    
    steps: [
      {
        title: "Understand the Privacy Model",
        description: "ErgoMixer uses Sigma Protocols to prove you're entitled to withdraw without revealing which deposit was yours. Multiple users mix together, breaking transaction links.",
        duration: "5 minutes",
        resources: [
          { type: 'glossary', title: "ErgoMixer", href: "/learn/glossary/ergomixer" },
          { type: 'glossary', title: "Sigma Protocols", href: "/learn/glossary/sigma-protocols" },
        ]
      },
      {
        title: "Access ErgoMixer",
        description: "Go to the ErgoMixer application. Connect your Nautilus wallet. The mixer is non-custodial - your funds stay in smart contracts, not with any operator.",
        duration: "3 minutes",
        resources: [
          { type: 'technology', title: "Privacy Features", href: "/technology/privacy-features" },
        ]
      },
      {
        title: "Deposit ERG for Mixing",
        description: "Choose a mixing pool (different amounts available). Deposit your ERG. The transaction enters a pool with other users' deposits.",
        duration: "5 minutes",
        resources: [
          { type: 'infographic', title: "Ergo Privacy", href: "/infographics/ergo-privacy-non-interactive-efficient" },
        ]
      },
      {
        title: "Wait for Mixing Rounds",
        description: "Your ERG goes through multiple mixing rounds. More rounds = stronger privacy. This can take hours depending on pool activity.",
        duration: "Variable",
        resources: []
      },
      {
        title: "Withdraw to Fresh Address",
        description: "Create a new address in your wallet. Withdraw mixed ERG to this address. The link between your original deposit and this withdrawal is broken.",
        duration: "5 minutes",
        resources: [
          { type: 'question', title: "Can Ergo Be Traced?", href: "/questions/can-ergo-be-traced" },
        ]
      },
    ],
    
    relatedInfographicTags: ["privacy", "Sigma Protocols", "ErgoMixer"],
    relatedBlogTags: ["privacy", "sigma protocols", "mixing"],
    relatedDocsTags: ["privacy", "ergomixer"],
    
    featuredInfographics: [
      "ergo-privacy-non-interactive-efficient",
      "privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins",
    ],
    
    primaryCTA: {
      label: "Learn About Privacy",
      href: "/technology/privacy-features",
    },
    secondaryCTA: {
      label: "Sigma Protocols Explained",
      href: "/learn/glossary/sigma-protocols",
    },
    
    icon: "Shield",
    gradient: "from-purple-500 to-pink-500",
    
    publishDate: "2025-01-01",
  },

  {
    slug: "launch-token-on-ergo",
    title: "Launch Your Own Token on Ergo",
    subtitle: "Create native tokens without smart contract deployment",
    
    seoTitle: "How to Create a Token on Ergo: Complete Guide",
    seoDescription: "Launch your own token on Ergo blockchain. Native tokens, low fees, no smart contract needed. Step-by-step minting guide.",
    keywords: ["ergo token", "create token", "mint token", "native tokens", "token launch", "ergo minting"],
    
    cluster: "developer",
    difficulty: "beginner",
    estimatedTime: "15 minutes",
    
    problemStatement: "On Ethereum, launching a token requires deploying a smart contract, paying high gas fees, and risking contract bugs. It's expensive and complex.",
    solution: "Ergo tokens are native to the protocol - no smart contract deployment needed. Mint tokens in a simple transaction for minimal fees. Your token inherits Ergo's full security.",
    
    prerequisites: [
      "Nautilus wallet with some ERG (for fees)",
      "Token name, description, and quantity decided",
      "Optional: Token image/logo for NFTs",
    ],
    
    outcomes: [
      "Understand Ergo's native token model",
      "Successfully mint your own token",
      "Token visible in wallet and explorers",
      "Know how to transfer and manage tokens",
    ],
    
    steps: [
      {
        title: "Understand Native Tokens",
        description: "Ergo tokens are first-class protocol citizens. They live in boxes alongside ERG, can be transferred atomically, and don't need wrapper contracts like ERC-20.",
        duration: "3 minutes",
        resources: [
          { type: 'glossary', title: "Token", href: "/learn/glossary/token" },
          { type: 'technology', title: "Native Tokens", href: "/technology/native-tokens" },
        ]
      },
      {
        title: "Choose Token Parameters",
        description: "Decide: Name, description, total supply (can be 1 for NFT), decimals (usually 0-9). These are set at minting and cannot be changed.",
        duration: "5 minutes",
        resources: [
          { type: 'glossary', title: "NFT", href: "/learn/glossary/nft" },
        ]
      },
      {
        title: "Use Token Minting Tool",
        description: "Use Ergo Token Minter or similar tool. Connect your Nautilus wallet, fill in token details, and submit the minting transaction.",
        duration: "5 minutes",
        resources: [
          { type: 'doc', title: "Developer Docs", href: "/docs/developers" },
        ]
      },
      {
        title: "Confirm and Verify",
        description: "Pay the small transaction fee (~0.001 ERG). After confirmation, your token appears in your wallet. Verify on Ergo Explorer.",
        duration: "2 minutes",
        resources: [
          { type: 'glossary', title: "Transaction Fees", href: "/learn/glossary/transaction-fees" },
        ]
      },
    ],
    
    relatedInfographicTags: ["tokens", "native tokens", "NFT"],
    relatedBlogTags: ["tokens", "development", "tutorial"],
    relatedDocsTags: ["tokens", "minting", "development"],
    
    featuredInfographics: [],
    
    primaryCTA: {
      label: "Learn About Native Tokens",
      href: "/technology/native-tokens",
    },
    secondaryCTA: {
      label: "Developer Documentation",
      href: "/docs/developers",
    },
    
    icon: "Coins",
    gradient: "from-yellow-500 to-orange-500",
    
    publishDate: "2025-01-01",
  },

  {
    slug: "provide-liquidity-spectrum",
    title: "Earn Fees by Providing Liquidity on Spectrum",
    subtitle: "Put your ERG to work in DeFi liquidity pools",
    
    seoTitle: "Provide Liquidity on Ergo: Spectrum Finance Guide",
    seoDescription: "Earn trading fees by providing liquidity on Spectrum DEX. Step-by-step guide to LP tokens, pools, and impermanent loss.",
    keywords: ["spectrum finance", "liquidity provider", "ergo defi", "lp tokens", "yield farming", "amm liquidity"],
    
    cluster: "defi",
    difficulty: "intermediate",
    estimatedTime: "20 minutes",
    
    problemStatement: "Holding ERG earns nothing. You want your assets to generate yield, but centralized options require giving up custody and trusting third parties.",
    solution: "Provide liquidity on Spectrum Finance DEX. Deposit token pairs into pools, earn a share of all trading fees. Non-custodial, permissionless, and you can withdraw anytime.",
    
    prerequisites: [
      "Nautilus wallet connected to Spectrum",
      "ERG and another token (e.g., SigUSD) for the pair",
      "Understanding of impermanent loss concept",
    ],
    
    outcomes: [
      "Understand how AMM liquidity pools work",
      "Successfully provide liquidity to a pool",
      "Receive LP tokens representing your share",
      "Know how to monitor and withdraw",
    ],
    
    steps: [
      {
        title: "Understand Liquidity Pools",
        description: "Pools hold paired tokens (e.g., ERG/SigUSD). Traders swap against the pool. LPs earn fees proportional to their share. Risk: impermanent loss if prices diverge.",
        duration: "5 minutes",
        resources: [
          { type: 'glossary', title: "Liquidity Pool", href: "/learn/glossary/liquidity-pool" },
          { type: 'glossary', title: "AMM", href: "/learn/glossary/amm" },
        ]
      },
      {
        title: "Choose a Pool",
        description: "Go to Spectrum Finance. Browse available pools. Consider: trading volume (more = more fees), token pair (tokens you're comfortable holding), and current APY.",
        duration: "3 minutes",
        resources: [
          { type: 'glossary', title: "DEX", href: "/learn/glossary/dex" },
        ]
      },
      {
        title: "Deposit Equal Value",
        description: "Select 'Add Liquidity'. Deposit equal USD value of both tokens. The protocol calculates exact amounts. Review and confirm the transaction.",
        duration: "5 minutes",
        resources: [
          { type: 'question', title: "How to Provide Liquidity", href: "/questions/how-to-provide-liquidity-ergo" },
        ]
      },
      {
        title: "Receive LP Tokens",
        description: "After confirmation, you receive LP tokens representing your pool share. These tokens are your receipt - keep them safe to withdraw later.",
        duration: "2 minutes",
        resources: []
      },
      {
        title: "Monitor and Withdraw",
        description: "Check your position periodically. Fees accumulate automatically. To exit, return LP tokens to receive your share of the pool (original tokens + earned fees).",
        duration: "5 minutes",
        resources: [
          { type: 'question', title: "Using Spectrum DEX", href: "/questions/how-to-use-spectrum-dex" },
        ]
      },
    ],
    
    relatedInfographicTags: ["DeFi", "liquidity", "AMM", "DEX"],
    relatedBlogTags: ["defi", "spectrum", "liquidity", "yield"],
    relatedDocsTags: ["defi", "spectrum", "liquidity"],
    
    featuredInfographics: [
      "mev-resistance-vs-dark-forest",
    ],
    
    caseStudies: [
      {
        title: "Spectrum Finance",
        description: "Leading DEX on Ergo with MEV-resistant AMM design.",
        outcome: "Trustless trading with no front-running",
        link: "https://spectrum.fi",
      },
    ],
    
    primaryCTA: {
      label: "Go to Spectrum Finance",
      href: "https://spectrum.fi",
    },
    secondaryCTA: {
      label: "Learn About DeFi on Ergo",
      href: "/topics/ergo-defi",
    },
    
    icon: "Layers",
    gradient: "from-blue-500 to-cyan-500",
    
    publishDate: "2025-01-01",
  },

  // ============================================
  // NEW PLAYBOOKS - v1.0 additions
  // ============================================
  {
    slug: "run-ergo-full-node",
    title: "Run an Ergo Full Node & Help Secure the Network",
    subtitle: "Contribute to decentralization while getting the best blockchain experience",
    
    seoTitle: "Run Ergo Full Node 2025: Complete Setup Guide for Linux, Mac & Windows",
    seoDescription: "Step-by-step guide to running an Ergo full node. Help secure the network, verify transactions yourself, and get faster wallet sync.",
    keywords: ["ergo full node", "run ergo node", "ergo node setup", "ergo decentralization", "blockchain node", "ergo network"],
    
    cluster: "sustainability",
    difficulty: "intermediate",
    timeToComplete: "1-2 hours",
    
    heroDescription: "Running a full node is the ultimate way to participate in Ergo. You verify every transaction yourself, contribute to network decentralization, and get the fastest wallet experience.",
    
    problemStatement: "Light wallets rely on third-party servers. You're trusting someone else to give you accurate blockchain data. This creates centralization points and potential privacy leaks.",
    
    solution: "Run your own full node to independently verify the entire blockchain. You become a first-class network participant, helping relay transactions and blocks while enjoying trustless verification.",
    
    steps: [
      {
        title: "Check System Requirements",
        description: "Ensure your system meets the minimum requirements: 8GB RAM, 50GB+ SSD storage, stable internet connection. Any modern computer from the last 5 years should work.",
        duration: "5 min",
        resources: [
          { type: "doc", title: "Node Requirements", href: "/docs/developers/infrastructure/node" },
        ],
      },
      {
        title: "Download Ergo Node",
        description: "Download the latest Ergo node release from GitHub. Choose the JAR file for your platform or use Docker for easier deployment.",
        duration: "5 min",
        resources: [
          { type: "link", title: "Ergo Node Releases", href: "https://github.com/ergoplatform/ergo/releases" },
          { type: "doc", title: "Docker Setup", href: "/docs/developers/infrastructure/node/docker" },
        ],
      },
      {
        title: "Configure Your Node",
        description: "Create a configuration file with your settings. Enable the API for wallet connectivity, set memory limits, and configure network ports.",
        duration: "15 min",
        resources: [
          { type: "doc", title: "Node Configuration", href: "/docs/developers/infrastructure/node/config" },
        ],
      },
      {
        title: "Start Initial Sync",
        description: "Launch the node and begin syncing the blockchain. Initial sync takes 4-12 hours depending on your hardware and internet speed.",
        duration: "4-12 hours",
        resources: [
          { type: "doc", title: "Sync Troubleshooting", href: "/docs/developers/infrastructure/node/troubleshooting" },
        ],
      },
      {
        title: "Connect Your Wallet",
        description: "Configure Nautilus or other wallets to use your local node. Enjoy instant transaction verification and maximum privacy.",
        duration: "10 min",
        resources: [
          { type: "tool", title: "Nautilus Wallet", href: "https://nautilus.io" },
        ],
      },
      {
        title: "Keep Your Node Running",
        description: "Set up the node as a system service for automatic startup. Monitor health and keep it updated with new releases.",
        duration: "15 min",
        resources: [
          { type: "doc", title: "Node Maintenance", href: "/docs/developers/infrastructure/node/maintenance" },
        ],
      },
    ],
    
    relatedInfographicTags: ["decentralization", "pow", "security"],
    relatedBlogTags: ["node", "infrastructure", "decentralization"],
    relatedDocsTags: ["node", "infrastructure"],
    
    caseStudies: [
      {
        title: "Community Node Operators",
        description: "Hundreds of independent node operators around the world help keep Ergo decentralized.",
        outcome: "True peer-to-peer network without central points of failure",
      },
    ],
    
    primaryCTA: {
      label: "Download Ergo Node",
      href: "https://github.com/ergoplatform/ergo/releases",
    },
    secondaryCTA: {
      label: "Node Documentation",
      href: "/docs/developers/infrastructure/node",
    },
    
    icon: "Server",
    gradient: "from-emerald-500 to-teal-500",
    
    publishDate: "2025-01-15",
  },

  {
    slug: "use-sigmausd-as-crypto-dollar",
    title: "Use SigmaUSD as a Crypto Dollar Hedge",
    subtitle: "Protect your crypto value with an algorithmic stablecoin backed by ERG",
    
    seoTitle: "SigmaUSD Guide 2025: How to Use Ergo's Algorithmic Stablecoin",
    seoDescription: "Complete guide to SigmaUSD - Ergo's decentralized algorithmic stablecoin. Learn how to mint, redeem, and use SigUSD for hedging and payments.",
    keywords: ["sigmausd", "ergo stablecoin", "sigUSD", "crypto dollar", "algorithmic stablecoin", "ergo hedge"],
    
    cluster: "defi",
    difficulty: "intermediate",
    timeToComplete: "30 minutes",
    
    heroDescription: "SigmaUSD is a crypto-native dollar hedge backed by ERG reserves. No bank accounts, no centralized custodians - just math and smart contracts keeping your value stable.",
    
    problemStatement: "Centralized stablecoins like USDT and USDC can freeze your funds, require KYC, and depend on traditional banking. You need a truly decentralized alternative.",
    
    solution: "SigmaUSD uses an overcollateralized reserve pool of ERG to maintain its peg. Mint SigUSD when you want stability, redeem for ERG when you're ready to exit. No permissions needed.",
    
    steps: [
      {
        title: "Understand the Mechanism",
        description: "SigmaUSD uses a reserve pool of ERG. SigUSD holders have a claim on the dollar value, while SigRSV holders absorb volatility in exchange for fees. The system maintains 400-800% collateralization.",
        duration: "10 min",
        resources: [
          { type: "doc", title: "SigmaUSD Explained", href: "/docs/developers/defi/sigmausd" },
          { type: "link", title: "SigmaUSD Whitepaper", href: "https://github.com/ergoplatform/ergo/wiki/SigmaUSD" },
        ],
      },
      {
        title: "Check Reserve Ratio",
        description: "Before minting, check the current reserve ratio on the SigmaUSD dashboard. Minting is only available when the reserve ratio is within healthy bounds.",
        duration: "2 min",
        resources: [
          { type: "tool", title: "SigmaUSD Dashboard", href: "https://sigmausd.io" },
        ],
      },
      {
        title: "Connect Your Wallet",
        description: "Connect Nautilus wallet to the SigmaUSD interface. Ensure you have ERG for minting and transaction fees.",
        duration: "5 min",
        resources: [
          { type: "tool", title: "Nautilus Wallet", href: "https://nautilus.io" },
        ],
      },
      {
        title: "Mint SigUSD",
        description: "Enter the amount of ERG you want to convert to SigUSD. Review the exchange rate and fees, then confirm the transaction.",
        duration: "5 min",
        resources: [
          { type: "tool", title: "Mint SigUSD", href: "https://sigmausd.io/#/mint" },
        ],
      },
      {
        title: "Use or Hold Your SigUSD",
        description: "Your SigUSD is now in your wallet. Use it for payments, trading on Spectrum, or simply hold as a stable store of value.",
        duration: "Ongoing",
        resources: [
          { type: "tool", title: "Trade on Spectrum", href: "https://spectrum.fi" },
        ],
      },
      {
        title: "Redeem When Ready",
        description: "When you want to exit, redeem your SigUSD for ERG at the current rate. The process is permissionless and instant.",
        duration: "5 min",
        resources: [
          { type: "tool", title: "Redeem SigUSD", href: "https://sigmausd.io/#/redeem" },
        ],
      },
    ],
    
    relatedInfographicTags: ["defi", "stablecoin", "sigmausd"],
    relatedBlogTags: ["sigmausd", "stablecoin", "defi"],
    relatedDocsTags: ["sigmausd", "defi"],
    
    caseStudies: [
      {
        title: "SigmaUSD Protocol",
        description: "First algorithmic stablecoin on eUTXO, inspired by AgeUSD protocol design.",
        outcome: "Millions in TVL with no centralized dependencies",
        link: "https://sigmausd.io",
      },
    ],
    
    primaryCTA: {
      label: "Go to SigmaUSD",
      href: "https://sigmausd.io",
    },
    secondaryCTA: {
      label: "Learn How It Works",
      href: "/docs/developers/defi/sigmausd",
    },
    
    icon: "DollarSign",
    gradient: "from-green-500 to-emerald-500",
    
    publishDate: "2025-01-15",
  },

  {
    slug: "bridge-assets-with-rosen",
    title: "Bridge Assets with Rosen Bridge (ERG <-> BTC & More)",
    subtitle: "Move assets between Ergo and other blockchains trustlessly",
    
    seoTitle: "Rosen Bridge Guide 2025: Bridge ERG, BTC, and More Between Chains",
    seoDescription: "Complete guide to using Rosen Bridge for cross-chain transfers. Bridge ERG to Bitcoin, Cardano, and other networks securely.",
    keywords: ["rosen bridge", "ergo bridge", "cross chain ergo", "bridge btc ergo", "ergo cardano bridge", "blockchain bridge"],
    
    cluster: "defi",
    difficulty: "intermediate",
    timeToComplete: "15-30 minutes",
    
    heroDescription: "Rosen Bridge connects Ergo to other blockchains through a decentralized network of watchers. Move your assets between chains without trusting a central custodian.",
    
    problemStatement: "Moving assets between blockchains traditionally requires centralized exchanges or custodial bridges. These create single points of failure and require trust.",
    
    solution: "Rosen Bridge uses a decentralized network of watchers who collectively verify cross-chain transfers. No single entity controls your funds during the bridging process.",
    
    steps: [
      {
        title: "Understand Rosen Bridge",
        description: "Rosen uses a network of independent watchers who monitor both chains. Transfers require consensus among watchers, making it trust-minimized.",
        duration: "5 min",
        resources: [
          { type: "doc", title: "Rosen Bridge Docs", href: "https://docs.rosen.tech" },
        ],
      },
      {
        title: "Check Supported Assets",
        description: "Review which assets can be bridged and to which chains. Currently supports ERG, rsERG, and wrapped assets on multiple networks.",
        duration: "2 min",
        resources: [
          { type: "tool", title: "Rosen Bridge App", href: "https://app.rosen.tech" },
        ],
      },
      {
        title: "Connect Source Wallet",
        description: "Connect your wallet on the source chain. For Ergo, use Nautilus. For other chains, use compatible wallets like MetaMask or Nami.",
        duration: "5 min",
        resources: [
          { type: "tool", title: "Nautilus Wallet", href: "https://nautilus.io" },
        ],
      },
      {
        title: "Initiate Bridge Transfer",
        description: "Select source and destination chains, enter amount, and provide destination address. Review fees and confirmation times.",
        duration: "5 min",
        resources: [
          { type: "tool", title: "Start Bridge", href: "https://app.rosen.tech" },
        ],
      },
      {
        title: "Wait for Confirmations",
        description: "Watchers need to observe and verify your transaction. This typically takes 10-30 minutes depending on the chains involved.",
        duration: "10-30 min",
      },
      {
        title: "Receive Bridged Assets",
        description: "Once confirmed, your bridged assets appear in your destination wallet. You can now use them on the new chain.",
        duration: "Automatic",
      },
    ],
    
    relatedInfographicTags: ["bridge", "cross-chain", "interoperability"],
    relatedBlogTags: ["rosen", "bridge", "cross-chain"],
    relatedDocsTags: ["bridge", "interoperability"],
    
    caseStudies: [
      {
        title: "Rosen Bridge",
        description: "Decentralized bridge connecting Ergo to Bitcoin, Cardano, and EVM chains.",
        outcome: "Trustless cross-chain asset transfers",
        link: "https://rosen.tech",
      },
    ],
    
    primaryCTA: {
      label: "Go to Rosen Bridge",
      href: "https://app.rosen.tech",
    },
    secondaryCTA: {
      label: "Bridge Documentation",
      href: "https://docs.rosen.tech",
    },
    
    icon: "ArrowLeftRight",
    gradient: "from-purple-500 to-pink-500",
    
    publishDate: "2025-01-15",
  },

  {
    slug: "ergo-crowdfunding-campaign-playbook",
    title: "Launch a Simple Crowdfunding Campaign on Ergo",
    subtitle: "Raise funds for your project with trustless, refundable contributions",
    
    seoTitle: "Ergo Crowdfunding 2025: Launch a Trustless Fundraising Campaign",
    seoDescription: "Step-by-step guide to launching a crowdfunding campaign on Ergo. Learn assurance contracts for automatic refunds if goals aren't met.",
    keywords: ["ergo crowdfunding", "assurance contract", "ergo fundraising", "crypto crowdfunding", "trustless fundraising", "ergo campaign"],
    
    cluster: "defi",
    difficulty: "intermediate",
    timeToComplete: "2-4 hours",
    
    heroDescription: "Ergo's assurance contracts enable trustless crowdfunding. Contributors know they'll get refunds if the goal isn't met - no trust in the project creator required.",
    
    problemStatement: "Traditional crowdfunding platforms take fees, can censor projects, and require trusting the platform to handle refunds. Crypto crowdfunding often lacks refund guarantees.",
    
    solution: "Use Ergo's assurance contract pattern: contributions are locked in a smart contract that automatically refunds if the goal isn't reached by the deadline. Success means funds go to the project.",
    
    steps: [
      {
        title: "Define Your Campaign",
        description: "Set clear goals: funding target, deadline, and what contributors receive. Be realistic about what you can deliver.",
        duration: "1 hour",
        resources: [
          { type: "doc", title: "Crowdfunding Patterns", href: "/patterns/ergo-crowdfunding-assurance-contract" },
        ],
      },
      {
        title: "Create Campaign Smart Contract",
        description: "Deploy an assurance contract with your funding goal, deadline, and receiving address. Use ErgoRaffle or build custom with Fleet SDK.",
        duration: "30 min",
        resources: [
          { type: "tool", title: "ErgoRaffle", href: "https://ergoraffle.com" },
          { type: "doc", title: "Fleet SDK", href: "/docs/developers/fleet-sdk" },
        ],
      },
      {
        title: "Prepare Campaign Materials",
        description: "Create a compelling description, visuals, and roadmap. Explain how funds will be used and what backers receive.",
        duration: "1-2 hours",
      },
      {
        title: "Launch and Promote",
        description: "Share your campaign with the Ergo community. Use Discord, Twitter, and Reddit to reach potential contributors.",
        duration: "Ongoing",
        resources: [
          { type: "link", title: "Ergo Discord", href: "https://discord.gg/ergo-platform-668903786361651200" },
          { type: "link", title: "Ergo Reddit", href: "https://reddit.com/r/ergonauts" },
        ],
      },
      {
        title: "Track Progress",
        description: "Monitor contributions and engage with your community. Provide updates and answer questions to build trust.",
        duration: "Ongoing",
      },
      {
        title: "Campaign Resolution",
        description: "If goal is met: claim funds and deliver on promises. If not met: contributors automatically get refunds. Either way, the contract handles it trustlessly.",
        duration: "Automatic",
      },
    ],
    
    relatedInfographicTags: ["crowdfunding", "defi", "community"],
    relatedBlogTags: ["crowdfunding", "community", "fundraising"],
    relatedDocsTags: ["crowdfunding", "contracts"],
    
    featuredInfographics: ["ergo-vs-privacy-coins"],
    
    caseStudies: [
      {
        title: "ErgoRaffle",
        description: "Platform for community raffles and crowdfunding on Ergo.",
        outcome: "Multiple successful community fundraising campaigns",
        link: "https://ergoraffle.com",
      },
    ],
    
    primaryCTA: {
      label: "Launch on ErgoRaffle",
      href: "https://ergoraffle.com",
    },
    secondaryCTA: {
      label: "Learn Crowdfunding Pattern",
      href: "/patterns/ergo-crowdfunding-assurance-contract",
    },
    
    icon: "Users",
    gradient: "from-amber-500 to-orange-500",
    
    publishDate: "2025-01-15",
  },

  {
    slug: "ergo-dao-treasury-multisig-playbook",
    title: "Set Up a Project Treasury & Multisig for Your DAO",
    subtitle: "Secure shared funds with multi-signature governance",
    
    seoTitle: "Ergo DAO Treasury 2025: Set Up Multisig Governance for Your Project",
    seoDescription: "Complete guide to setting up a DAO treasury on Ergo. Learn multi-signature patterns for secure, decentralized fund management.",
    keywords: ["ergo dao", "ergo multisig", "dao treasury", "ergo governance", "multi signature wallet", "project treasury"],
    
    cluster: "developer",
    difficulty: "advanced",
    timeToComplete: "4-8 hours",
    
    heroDescription: "A proper treasury setup is crucial for any serious project. Ergo's native multi-sig and Sigma protocols enable secure, privacy-preserving governance without trusting a single keyholder.",
    
    problemStatement: "Single-signature treasuries are a security risk. One compromised key means total loss. But coordinating multi-sig can be complex and error-prone.",
    
    solution: "Use Ergo's native threshold signatures (M-of-N) for treasury control. Combine with timelock for large transactions and optional DAO voting for full governance.",
    
    steps: [
      {
        title: "Define Governance Structure",
        description: "Decide on signers, threshold (e.g., 3-of-5), and any additional rules (timelocks, spending limits). Document roles and responsibilities.",
        duration: "1 hour",
        resources: [
          { type: "doc", title: "Multisig Pattern", href: "/patterns/ergo-multisig-wallet-m-of-n" },
        ],
      },
      {
        title: "Collect Signer Public Keys",
        description: "Each signer generates a keypair and shares their public key. Use secure channels and verify key ownership.",
        duration: "30 min",
        resources: [
          { type: "tool", title: "Nautilus Wallet", href: "https://nautilus.io" },
        ],
      },
      {
        title: "Create Multi-Sig Contract",
        description: "Deploy the multi-sig contract with the collected public keys and threshold. Use Paideia for full DAO features or custom ErgoScript for simple treasury.",
        duration: "1 hour",
        resources: [
          { type: "tool", title: "Paideia DAO", href: "https://paideia.im" },
          { type: "doc", title: "DAO Pattern", href: "/patterns/ergo-dao-treasury-voting-pattern" },
        ],
      },
      {
        title: "Fund the Treasury",
        description: "Transfer initial funds to the multi-sig address. Start with a small test amount to verify the setup works correctly.",
        duration: "30 min",
      },
      {
        title: "Test Spending Flow",
        description: "Create a test transaction requiring multiple signatures. Verify the signing process works and all signers can participate.",
        duration: "1 hour",
        resources: [
          { type: "doc", title: "Multi-Sig Signing", href: "/docs/developers/contracts/multisig" },
        ],
      },
      {
        title: "Document Procedures",
        description: "Create clear documentation for how spending proposals are created, discussed, signed, and executed. Include emergency procedures.",
        duration: "1-2 hours",
      },
      {
        title: "Set Up Monitoring",
        description: "Configure alerts for treasury activity. Use explorers and notification services to track all transactions.",
        duration: "30 min",
        resources: [
          { type: "tool", title: "Ergo Explorer", href: "https://explorer.ergoplatform.com" },
        ],
      },
    ],
    
    relatedInfographicTags: ["dao", "governance", "multisig", "treasury"],
    relatedBlogTags: ["dao", "governance", "treasury"],
    relatedDocsTags: ["dao", "multisig", "contracts"],
    
    caseStudies: [
      {
        title: "Paideia DAO",
        description: "Full-featured DAO platform on Ergo with treasury management, voting, and proposals.",
        outcome: "Multiple DAOs managing treasuries worth millions",
        link: "https://paideia.im",
      },
      {
        title: "Ergo Foundation",
        description: "The Ergo Foundation uses multi-sig for treasury management.",
        outcome: "Secure management of ecosystem development funds",
        link: "https://ergoplatform.org",
      },
    ],
    
    primaryCTA: {
      label: "Create DAO on Paideia",
      href: "https://paideia.im",
    },
    secondaryCTA: {
      label: "Learn DAO Patterns",
      href: "/patterns/ergo-dao-treasury-voting-pattern",
    },
    
    icon: "Building2",
    gradient: "from-indigo-500 to-purple-500",
    
    publishDate: "2025-01-15",
  },
];

// Helper functions
export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return playbooks.find(p => p.slug === slug);
}

export function getAllPlaybookSlugs(): string[] {
  return playbooks.map(p => p.slug);
}

export function getPlaybooksByCluster(cluster: Playbook['cluster']): Playbook[] {
  return playbooks.filter(p => p.cluster === cluster);
}

export function getPlaybooksByDifficulty(difficulty: Playbook['difficulty']): Playbook[] {
  return playbooks.filter(p => p.difficulty === difficulty);
}

// Cluster metadata
export const playbookClusters = [
  { id: 'defi', name: 'DeFi', icon: 'Layers', description: 'Build and use decentralized finance' },
  { id: 'privacy', name: 'Privacy', icon: 'Shield', description: 'Financial sovereignty and privacy' },
  { id: 'mining', name: 'Mining', icon: 'Pickaxe', description: 'GPU mining and network security' },
  { id: 'sustainability', name: 'Sustainability', icon: 'Leaf', description: 'Long-term blockchain economics' },
  { id: 'vc-alternative', name: 'Fair Launch', icon: 'Scale', description: 'True decentralization' },
  { id: 'global-settlement', name: 'Global Settlement', icon: 'Globe', description: 'Cross-chain infrastructure' },
  { id: 'developer', name: 'Developer', icon: 'Code', description: 'Build on Ergo' },
  { id: 'investor', name: 'Investor', icon: 'TrendingUp', description: 'Fundamental analysis' },
] as const;

