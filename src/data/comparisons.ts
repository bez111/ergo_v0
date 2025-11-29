/**
 * Comparison data for "Ergo vs X" landing pages
 * Used to generate /compare/ergo-vs-[competitor] pages
 * 
 * Matrix data is sourced from blockchain-matrix.ts (single source of truth)
 */

import { getComparisonMatrix, chains, type ChainId } from './blockchain-matrix';

export interface ComparisonRow {
  feature: string;
  ergo: string;
  competitor: string;
  ergoAdvantage?: boolean;
  notes?: string;
}

export interface ComparisonData {
  slug: string;
  name: string;
  logo?: string;
  color?: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  keywords: string[];
  
  // Content
  summary: {
    headline: string;
    subheadline: string;
    points: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  
  // Comparison matrix - now sourced from blockchain-matrix.ts
  matrixRows: ComparisonRow[];
  
  // Detailed sections
  sections: {
    title: string;
    content: string;
    ergoAdvantage: string;
  }[];
  
  // Related content tags
  relatedTags: string[];
  
  // FAQ for Schema.org
  faq: {
    question: string;
    answer: string;
  }[];
  
  // Dates
  publishDate: string;
  updatedDate?: string;
}

/**
 * Helper to get matrix rows from the centralized blockchain-matrix source
 */
function getMatrixRowsForChain(chainId: ChainId): ComparisonRow[] {
  return getComparisonMatrix(chainId);
}

export const comparisons: ComparisonData[] = [
  // ============================================
  // BITCOIN
  // ============================================
  {
    slug: "bitcoin",
    name: "Bitcoin",
    logo: "/logos/bitcoin.svg",
    color: "#F7931A",
    
    seoTitle: "Ergo vs Bitcoin 2025: Smart Contracts, Privacy & Sustainability Compared",
    seoDescription: "Complete comparison of Ergo and Bitcoin: eUTXO smart contracts vs simple UTXO, Sigma Protocols privacy, storage rent sustainability, and NiPoPoWs light clients.",
    keywords: [
      "ergo vs bitcoin",
      "ergo bitcoin comparison",
      "eutxo vs utxo",
      "bitcoin smart contracts alternative",
      "ergo privacy vs bitcoin",
      "storage rent bitcoin",
    ],
    
    summary: {
      headline: "Bitcoin's Security Model + Smart Contract Power",
      subheadline: "Ergo extends Bitcoin's proven UTXO security with programmable smart contracts, native privacy, and long-term sustainability.",
      points: [
        {
          title: "Programmable eUTXO",
          description: "Same UTXO security model as Bitcoin, but with full smart contract capabilities via ErgoScript",
          icon: "Code",
        },
        {
          title: "Native Privacy",
          description: "Sigma Protocols enable zero-knowledge proofs at L1, while Bitcoin has no native privacy",
          icon: "Shield",
        },
        {
          title: "Long-term Sustainability",
          description: "Storage rent ensures miner revenue beyond block rewards, solving Bitcoin's security budget problem",
          icon: "TrendingUp",
        },
        {
          title: "Trustless Light Clients",
          description: "NiPoPoWs enable mobile wallets to verify blockchain without trusting third parties",
          icon: "Smartphone",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('bitcoin'),
    
    sections: [
      {
        title: "Smart Contract Capabilities",
        content: "Bitcoin's Script language is intentionally limited to simple spending conditions. While this provides security through simplicity, it prevents complex DeFi applications. Ergo's ErgoScript is a powerful, Turing-complete (within limits) language that enables sophisticated smart contracts while maintaining the security benefits of the UTXO model.",
        ergoAdvantage: "Full DeFi capabilities: DEXs, lending protocols, stablecoins, DAOs, and more - all on a UTXO-based L1.",
      },
      {
        title: "Privacy Architecture",
        content: "Bitcoin transactions are pseudonymous but fully transparent on-chain. Privacy requires external tools like CoinJoin or L2 solutions. Ergo has Sigma Protocols built into the core protocol, enabling zero-knowledge proofs natively without trusted setup.",
        ergoAdvantage: "Optional privacy with selective disclosure - prove what you need without revealing everything.",
      },
      {
        title: "Long-term Security Budget",
        content: "Bitcoin's block rewards halve every 4 years, eventually relying entirely on transaction fees. This creates uncertainty about long-term miner incentives. Ergo's storage rent reclaims fees from dormant UTXOs, providing a sustainable revenue stream for miners indefinitely.",
        ergoAdvantage: "Protocol-level solution to the security budget problem that Bitcoin hasn't solved.",
      },
    ],
    
    relatedTags: ["Bitcoin", "UTXO", "Proof-of-Work", "fair launch", "PoW", "mining"],
    
    faq: [
      {
        question: "How is Ergo different from Bitcoin?",
        answer: "While sharing Bitcoin's UTXO model and PoW consensus, Ergo adds programmable smart contracts via ErgoScript, native privacy through Sigma Protocols, storage rent for long-term sustainability, and NiPoPoWs for trustless light clients.",
      },
      {
        question: "Is Ergo more private than Bitcoin?",
        answer: "Yes. Ergo has native Sigma Protocols enabling zero-knowledge proofs at L1, while Bitcoin requires external tools or L2 solutions for privacy. Ergo's privacy is optional with selective disclosure capabilities.",
      },
      {
        question: "Can Ergo do everything Bitcoin does?",
        answer: "Yes, and more. Ergo supports all Bitcoin use cases (store of value, payments) plus full smart contract capabilities, native tokens, and advanced cryptographic features.",
      },
      {
        question: "Is Ergo a Bitcoin fork?",
        answer: "No. Ergo is built from scratch with its own codebase, but it shares philosophical alignment with Bitcoin: fair launch, PoW consensus, UTXO model, and cypherpunk values.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // ETHEREUM
  // ============================================
  {
    slug: "ethereum",
    name: "Ethereum",
    logo: "/logos/ethereum.svg",
    color: "#627EEA",
    
    seoTitle: "Ergo vs Ethereum 2025: eUTXO vs Account Model, PoW vs PoS Compared",
    seoDescription: "Complete comparison of Ergo and Ethereum: eUTXO vs account model, predictable fees, no reentrancy attacks, PoW security, and native privacy with Sigma Protocols.",
    keywords: [
      "ergo vs ethereum",
      "eutxo vs account model",
      "ergo ethereum comparison",
      "pow vs pos",
      "reentrancy attacks",
      "predictable fees blockchain",
    ],
    
    summary: {
      headline: "Predictable, Secure, and Truly Decentralized",
      subheadline: "Ergo offers Ethereum-level programmability without the security pitfalls, unpredictable fees, or centralization risks.",
      points: [
        {
          title: "No Reentrancy Attacks",
          description: "eUTXO model eliminates entire classes of smart contract vulnerabilities that plague Ethereum",
          icon: "Shield",
        },
        {
          title: "Predictable Fees",
          description: "No gas price auctions or MEV extraction - fees are stable and predictable",
          icon: "DollarSign",
        },
        {
          title: "True Decentralization",
          description: "PoW consensus with GPU mining keeps the network accessible and censorship-resistant",
          icon: "Users",
        },
        {
          title: "Parallel Execution",
          description: "UTXO-based transactions can be validated in parallel, improving throughput",
          icon: "Zap",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('ethereum'),
    
    sections: [
      {
        title: "Security Model",
        content: "Ethereum's account model with global mutable state has led to billions in losses from reentrancy attacks, flash loan exploits, and other vulnerabilities. Ergo's eUTXO model makes these attack vectors impossible by design - each UTXO is consumed atomically, eliminating shared state manipulation.",
        ergoAdvantage: "No DAO hack, no reentrancy exploits possible. Security by design, not by careful coding.",
      },
      {
        title: "Fee Economics",
        content: "Ethereum's gas auction model leads to unpredictable fees, especially during network congestion. MEV extraction (sandwich attacks, frontrunning) further taxes users. Ergo's fee model is predictable, and its MEV-aware design with local transaction ordering minimizes extraction opportunities.",
        ergoAdvantage: "Know your fees before you transact. No surprise gas spikes or MEV taxes.",
      },
      {
        title: "Consensus & Decentralization",
        content: "Ethereum's move to PoS concentrated power among large stakers and introduced new censorship vectors (OFAC compliance by validators). Ergo's PoW with GPU-friendly Autolykos keeps mining accessible and maintains stronger censorship resistance.",
        ergoAdvantage: "True permissionless participation in consensus. No minimum stake, no validator cartels.",
      },
    ],
    
    relatedTags: ["Ethereum", "smart contracts", "DeFi", "account model", "PoS", "MEV"],
    
    faq: [
      {
        question: "What advantages does Ergo have over Ethereum?",
        answer: "Ergo offers predictable fees without MEV extraction, eliminates reentrancy attacks by design, provides native privacy via Sigma Protocols, maintains PoW decentralization, and has first-class native tokens without wrapper contracts.",
      },
      {
        question: "Can Ergo run Ethereum dApps?",
        answer: "Not directly - Ergo uses ErgoScript, not Solidity. However, most DeFi concepts (DEXs, lending, stablecoins) have been implemented on Ergo with often better security properties due to the eUTXO model.",
      },
      {
        question: "Why does Ergo use PoW instead of PoS like Ethereum?",
        answer: "PoW provides stronger censorship resistance, fairer distribution (anyone can mine), and proven security. PoS tends toward plutocracy and has shown censorship compliance issues.",
      },
      {
        question: "Is Ergo faster than Ethereum?",
        answer: "Ergo has ~2 minute blocks vs Ethereum's ~12 seconds, but Ergo's UTXO model enables parallel validation and its upcoming subblock technology will improve confirmation times significantly.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // CARDANO
  // ============================================
  {
    slug: "cardano",
    name: "Cardano",
    logo: "/logos/cardano.svg",
    color: "#2F6DFE",
    
    seoTitle: "Ergo vs Cardano 2025: eUTXO Cousins with Different Philosophies",
    seoDescription: "Compare Ergo and Cardano: both use eUTXO, but Ergo has PoW consensus, storage rent, fair launch, and native Sigma Protocols privacy.",
    keywords: [
      "ergo vs cardano",
      "eutxo comparison",
      "ergo cardano",
      "pow vs pos cardano",
      "fair launch vs ico",
    ],
    
    summary: {
      headline: "eUTXO Siblings with Different DNA",
      subheadline: "Both use extended UTXO, but Ergo chose PoW, fair launch, and protocol-level sustainability.",
      points: [
        {
          title: "Proof-of-Work Security",
          description: "Ergo uses battle-tested PoW while Cardano relies on PoS with different security assumptions",
          icon: "Shield",
        },
        {
          title: "Fair Launch",
          description: "No ICO, no premine, no VC allocation - Ergo's distribution is earned through mining",
          icon: "Scale",
        },
        {
          title: "Storage Rent",
          description: "Protocol-level sustainability mechanism that Cardano lacks",
          icon: "Database",
        },
        {
          title: "Native Privacy",
          description: "Sigma Protocols built-in vs Cardano's planned Midnight sidechain",
          icon: "Eye",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('cardano'),
    
    sections: [
      {
        title: "Consensus Philosophy",
        content: "Cardano chose Proof-of-Stake for energy efficiency and scalability. Ergo chose Proof-of-Work for censorship resistance, fair distribution, and proven security. Both are valid choices with different tradeoffs.",
        ergoAdvantage: "PoW means anyone can participate in consensus without minimum stake requirements or delegation.",
      },
      {
        title: "Token Distribution",
        content: "Cardano had an ICO and foundation allocation. Ergo had no ICO, no premine, and no VC investors. All ERG is earned through mining, similar to Bitcoin's distribution model.",
        ergoAdvantage: "No insider advantage. Everyone competes on equal terms from day one.",
      },
      {
        title: "Privacy Approach",
        content: "Cardano is developing Midnight as a separate privacy sidechain. Ergo has Sigma Protocols built into the base layer, enabling privacy features on the main chain without additional infrastructure.",
        ergoAdvantage: "Privacy is a first-class feature, not an afterthought on a separate chain.",
      },
    ],
    
    relatedTags: ["Cardano", "eUTXO", "PoS", "Plutus", "academic research"],
    
    faq: [
      {
        question: "How does Ergo compare to Cardano?",
        answer: "Both use eUTXO, but Ergo has PoW consensus, fair launch tokenomics, native privacy via Sigma Protocols, and storage rent for sustainability. Cardano has a larger ecosystem but different philosophical choices.",
      },
      {
        question: "Is Ergo related to Cardano?",
        answer: "Yes, historically. Alex Chepurnoy (Ergo's founder) was a core developer at IOHK (Cardano's development company). Both projects share academic rigor but made different design choices.",
      },
      {
        question: "Which is better for DeFi, Ergo or Cardano?",
        answer: "Both support DeFi on eUTXO. Ergo has pioneering implementations like ErgoDEX and SigmaUSD. Cardano has more projects due to larger ecosystem. Ergo's PoW and storage rent provide different security/sustainability properties.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // MONERO
  // ============================================
  {
    slug: "monero",
    name: "Monero",
    logo: "/logos/monero.svg",
    color: "#FF6600",
    
    seoTitle: "Ergo vs Monero 2025: Privacy Approaches Compared",
    seoDescription: "Compare Ergo and Monero privacy: Sigma Protocols vs Ring Signatures, optional vs mandatory privacy, smart contracts, and regulatory considerations.",
    keywords: [
      "ergo vs monero",
      "privacy coin comparison",
      "sigma protocols vs ring signatures",
      "optional privacy blockchain",
      "ergo privacy",
    ],
    
    summary: {
      headline: "Privacy: Mandatory vs Programmable",
      subheadline: "Monero enforces privacy by default. Ergo offers programmable privacy with selective disclosure.",
      points: [
        {
          title: "Programmable Privacy",
          description: "Ergo's Sigma Protocols allow selective disclosure - prove what you need without revealing everything",
          icon: "Eye",
        },
        {
          title: "Smart Contracts",
          description: "Full DeFi capabilities that Monero's privacy model doesn't support",
          icon: "Code",
        },
        {
          title: "Regulatory Flexibility",
          description: "Optional privacy with audit capabilities vs mandatory opacity",
          icon: "Scale",
        },
        {
          title: "Fair Launch",
          description: "Both had fair launches with no premine - aligned cypherpunk values",
          icon: "Shield",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('monero'),
    
    sections: [
      {
        title: "Privacy Philosophy",
        content: "Monero believes privacy should be mandatory and universal - every transaction is private. Ergo believes privacy should be programmable - users choose their privacy level and can prove specific properties without revealing everything.",
        ergoAdvantage: "Selective disclosure enables use cases like tax compliance proofs, age verification, or credit checks without full transparency.",
      },
      {
        title: "Smart Contract Capabilities",
        content: "Monero's privacy model (ring signatures, stealth addresses) is incompatible with complex smart contracts. Ergo's Sigma Protocols work within the eUTXO model, enabling private DeFi applications.",
        ergoAdvantage: "Private DEXs, lending protocols, and stablecoins are possible on Ergo but not on Monero.",
      },
      {
        title: "Regulatory Landscape",
        content: "Monero has been delisted from many exchanges due to regulatory pressure on mandatory privacy coins. Ergo's optional privacy model provides more flexibility while still enabling strong privacy when needed.",
        ergoAdvantage: "Better exchange accessibility while maintaining privacy capabilities for those who need them.",
      },
    ],
    
    relatedTags: ["Monero", "privacy", "Sigma Protocols", "zero-knowledge", "cypherpunk"],
    
    faq: [
      {
        question: "Is Ergo a privacy coin like Monero?",
        answer: "Ergo has strong privacy capabilities via Sigma Protocols, but privacy is optional rather than mandatory. This gives users choice and enables smart contracts that Monero can't support.",
      },
      {
        question: "Which is more private, Ergo or Monero?",
        answer: "Monero provides stronger default privacy since all transactions are private. Ergo provides programmable privacy - potentially very strong when used, but optional. Different tools for different needs.",
      },
      {
        question: "Can Ergo be used for private transactions?",
        answer: "Yes. ErgoMixer and Sigma Protocols enable private transactions. The difference is that Ergo users choose when to use privacy features rather than having them enforced.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // ZCASH
  // ============================================
  {
    slug: "zcash",
    name: "Zcash",
    logo: "/logos/zcash.svg",
    color: "#F4B728",
    
    seoTitle: "Ergo vs Zcash 2025: Sigma Protocols vs zk-SNARKs Privacy",
    seoDescription: "Compare Ergo and Zcash: Sigma Protocols vs zk-SNARKs, no trusted setup, smart contracts, fair launch vs founders reward.",
    keywords: [
      "ergo vs zcash",
      "sigma protocols vs zk-snarks",
      "no trusted setup",
      "privacy blockchain comparison",
    ],
    
    summary: {
      headline: "Zero-Knowledge Without Trusted Setup",
      subheadline: "Both enable ZK proofs, but Ergo's Sigma Protocols require no trusted setup ceremony.",
      points: [
        {
          title: "No Trusted Setup",
          description: "Sigma Protocols don't require trusted setup ceremonies that could be compromised",
          icon: "Shield",
        },
        {
          title: "Smart Contracts",
          description: "Full DeFi capabilities vs Zcash's limited programmability",
          icon: "Code",
        },
        {
          title: "Fair Launch",
          description: "No founders reward or dev tax - all coins earned through mining",
          icon: "Scale",
        },
        {
          title: "Composable Privacy",
          description: "Privacy features work with smart contracts, not just transfers",
          icon: "Layers",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('zcash'),
    
    sections: [
      {
        title: "Trusted Setup Concern",
        content: "Zcash's zk-SNARKs required a trusted setup ceremony. If any participant kept their secret, they could create unlimited coins. While Zcash has done multiple ceremonies, the risk remains. Ergo's Sigma Protocols require no trusted setup.",
        ergoAdvantage: "Mathematical security without ceremony trust assumptions.",
      },
      {
        title: "Tokenomics",
        content: "Zcash had a 20% 'founders reward' going to the company and investors. Ergo had no founders reward, no dev tax - all coins are mined fairly like Bitcoin.",
        ergoAdvantage: "Aligned incentives with no insider advantages.",
      },
    ],
    
    relatedTags: ["Zcash", "privacy", "zero-knowledge", "zk-SNARKs", "trusted setup"],
    
    faq: [
      {
        question: "How is Ergo's privacy different from Zcash?",
        answer: "Ergo uses Sigma Protocols (no trusted setup needed), while Zcash uses zk-SNARKs (required trusted setup). Ergo also has full smart contracts while Zcash is limited to transfers.",
      },
      {
        question: "Which has better privacy technology?",
        answer: "Both are cryptographically sound. zk-SNARKs produce smaller proofs but require trusted setup. Sigma Protocols have no setup risk but larger proofs. Ergo's advantage is smart contract integration.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // SOLANA
  // ============================================
  {
    slug: "solana",
    name: "Solana",
    logo: "/logos/solana.svg",
    color: "#14F195",
    
    seoTitle: "Ergo vs Solana 2025: Decentralization vs Speed Tradeoffs",
    seoDescription: "Compare Ergo and Solana: PoW vs PoS, decentralization vs TPS, fair launch vs VC funding, and sustainability approaches.",
    keywords: [
      "ergo vs solana",
      "decentralization vs speed",
      "pow vs pos solana",
      "vc chain comparison",
    ],
    
    summary: {
      headline: "Decentralization Over Speed Theater",
      subheadline: "Solana optimizes for TPS. Ergo optimizes for decentralization, security, and sustainability.",
      points: [
        {
          title: "True Decentralization",
          description: "GPU mining vs validator hardware requirements that cost $50K+",
          icon: "Users",
        },
        {
          title: "No VC Control",
          description: "Fair launch vs massive VC/insider allocation",
          icon: "Scale",
        },
        {
          title: "Network Stability",
          description: "No outages vs Solana's frequent network halts",
          icon: "Shield",
        },
        {
          title: "Sustainable Security",
          description: "Storage rent vs inflationary staking rewards",
          icon: "TrendingUp",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('solana'),
    
    sections: [
      {
        title: "Decentralization Reality",
        content: "Solana's high throughput requires expensive hardware ($50K+), limiting validators to well-funded entities. Ergo's GPU mining allows anyone with consumer hardware to participate in consensus.",
        ergoAdvantage: "Real decentralization means anyone can run a node and mine, not just well-funded validators.",
      },
      {
        title: "Token Distribution",
        content: "Solana had significant VC funding and insider allocation. Nearly 50% of tokens went to insiders before public availability. Ergo had no ICO, no premine, no VC - all tokens are mined.",
        ergoAdvantage: "No insider advantage. Fair competition from day one.",
      },
      {
        title: "Network Reliability",
        content: "Solana has experienced multiple extended outages, sometimes lasting 24+ hours. Ergo has maintained consistent uptime since launch, demonstrating the reliability of PoW consensus.",
        ergoAdvantage: "Battle-tested reliability vs experimental high-speed architecture.",
      },
    ],
    
    relatedTags: ["Solana", "VC chains", "PoS", "high TPS", "decentralization"],
    
    faq: [
      {
        question: "Why is Ergo slower than Solana?",
        answer: "Ergo prioritizes security and decentralization over raw speed. Solana's speed comes with tradeoffs: expensive validator requirements, network outages, and centralization concerns.",
      },
      {
        question: "Is Solana more decentralized than Ergo?",
        answer: "No. Solana's high hardware requirements concentrate validators among well-funded entities. Ergo's GPU mining allows broader participation. True decentralization isn't about validator count but accessibility.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // CBDC
  // ============================================
  {
    slug: "cbdc",
    name: "CBDCs",
    logo: "/logos/cbdc.svg",
    color: "#DC2626",
    
    seoTitle: "Ergo vs CBDCs 2025: Decentralized Money vs Central Bank Digital Currencies",
    seoDescription: "Compare Ergo blockchain with Central Bank Digital Currencies: privacy, censorship resistance, programmable money, and financial freedom.",
    keywords: [
      "ergo vs cbdc",
      "decentralized vs central bank",
      "cbdc privacy concerns",
      "censorship resistant money",
      "financial freedom blockchain",
    ],
    
    summary: {
      headline: "Money Without Masters vs Programmable Control",
      subheadline: "CBDCs give central banks unprecedented control. Ergo gives individuals financial sovereignty.",
      points: [
        {
          title: "Privacy by Design",
          description: "Sigma Protocols for privacy vs total surveillance capability",
          icon: "Eye",
        },
        {
          title: "Censorship Resistance",
          description: "Permissionless transactions vs freezable, controllable money",
          icon: "Shield",
        },
        {
          title: "No Expiration",
          description: "Your money doesn't expire vs programmable expiration dates",
          icon: "Clock",
        },
        {
          title: "Self-Custody",
          description: "You hold your keys vs bank-controlled accounts",
          icon: "Key",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('cbdc'),
    
    sections: [
      {
        title: "Surveillance vs Privacy",
        content: "CBDCs give central banks complete visibility into every transaction. They can track, analyze, and profile all spending. Ergo's Sigma Protocols enable privacy by default, with selective disclosure only when users choose.",
        ergoAdvantage: "Financial privacy is a human right. Ergo protects it; CBDCs eliminate it.",
      },
      {
        title: "Programmable Control",
        content: "CBDCs can be programmed with spending restrictions, expiration dates, geographic limits, and approved merchant lists. Your money becomes a tool of control. Ergo's programmability serves users, not authorities.",
        ergoAdvantage: "Smart contracts that empower users, not restrict them.",
      },
      {
        title: "Financial Sovereignty",
        content: "With CBDCs, your money exists at the pleasure of the central bank. It can be frozen, seized, or devalued at will. Ergo enables true self-custody where only you control your funds.",
        ergoAdvantage: "Not your keys, not your coins. Ergo ensures your keys, your coins.",
      },
    ],
    
    relatedTags: ["CBDC", "financial freedom", "censorship resistance", "privacy", "central banks"],
    
    faq: [
      {
        question: "Why should I care about CBDCs?",
        answer: "CBDCs give governments unprecedented control over money: surveillance of all transactions, ability to freeze accounts, programmable restrictions, and potential negative interest rates. They're the opposite of financial freedom.",
      },
      {
        question: "How does Ergo protect against CBDC-style control?",
        answer: "Ergo is decentralized (no central authority), private (Sigma Protocols), censorship-resistant (PoW mining), and self-custodial (you hold your keys). No one can freeze, expire, or restrict your ERG.",
      },
      {
        question: "Can Ergo and CBDCs coexist?",
        answer: "Yes, but they serve opposite purposes. CBDCs are tools of control; Ergo is a tool of freedom. As CBDCs roll out, alternatives like Ergo become more important for preserving financial autonomy.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // VC CHAINS (GENERIC)
  // ============================================
  {
    slug: "vc-chains",
    name: "VC-Funded Chains",
    logo: "/logos/vc-chain.svg",
    color: "#8B5CF6",
    
    seoTitle: "Ergo vs VC-Funded Blockchains 2025: Fair Launch vs Insider Allocation",
    seoDescription: "Compare Ergo's fair launch with VC-funded blockchains: token distribution, governance, incentive alignment, and long-term sustainability.",
    keywords: [
      "ergo vs vc chains",
      "fair launch crypto",
      "no ico blockchain",
      "vc funded crypto problems",
      "decentralized token distribution",
    ],
    
    summary: {
      headline: "Built for Users, Not Investors",
      subheadline: "VC chains optimize for investor returns. Ergo optimizes for user empowerment.",
      points: [
        {
          title: "Fair Distribution",
          description: "All ERG is mined - no insider allocation, no ICO, no premine",
          icon: "Scale",
        },
        {
          title: "Aligned Incentives",
          description: "No VCs demanding returns, pivots, or token unlocks",
          icon: "Target",
        },
        {
          title: "Community Governance",
          description: "Decisions made by users and miners, not boardrooms",
          icon: "Users",
        },
        {
          title: "Long-term Focus",
          description: "Building sustainable technology, not pumping for exits",
          icon: "TrendingUp",
        },
      ],
    },
    
    // Matrix rows sourced from blockchain-matrix.ts (single source of truth)
    matrixRows: getMatrixRowsForChain('vc-chain'),
    
    sections: [
      {
        title: "Token Distribution",
        content: "Typical VC chains allocate 40-60% of tokens to insiders: founders, team, advisors, and VCs. These tokens unlock over time, creating constant sell pressure. Ergo has zero insider allocation - all ERG is mined through PoW.",
        ergoAdvantage: "No token unlocks, no insider dumps. Supply is predictable and fair.",
      },
      {
        title: "Incentive Alignment",
        content: "VC-funded projects must deliver returns to investors. This often means prioritizing token price over technology, rushing to market, or pivoting away from original vision. Ergo's only stakeholders are users and miners.",
        ergoAdvantage: "Development focused on technology and users, not investor returns.",
      },
      {
        title: "Governance Reality",
        content: "Despite 'decentralized governance' claims, VC chains are typically controlled by foundations holding large token stakes. Ergo's governance emerges from community consensus and miner signaling.",
        ergoAdvantage: "Real decentralization in decision-making, not theater.",
      },
    ],
    
    relatedTags: ["VC chains", "fair launch", "token distribution", "ICO", "premine", "decentralization"],
    
    faq: [
      {
        question: "What's wrong with VC-funded blockchains?",
        answer: "VC funding creates misaligned incentives: projects must deliver investor returns, leading to token dumps, rushed development, and governance controlled by large stakeholders rather than users.",
      },
      {
        question: "How is Ergo funded without VCs?",
        answer: "Ergo has a treasury funded by a portion of block rewards (similar to Zcash's approach but without founders reward). This provides sustainable development funding without insider control.",
      },
      {
        question: "Why does fair launch matter?",
        answer: "Fair launch means everyone competes on equal terms from day one. No insiders got tokens cheaper than you. This creates genuine decentralization and aligned community incentives.",
      },
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-11-26",
  },

  // ============================================
  // KASPA (PoW competitor)
  // ============================================
  {
    slug: "kaspa",
    name: "Kaspa",
    logo: "/logos/kaspa.svg",
    color: "#49EACB",
    
    seoTitle: "Ergo vs Kaspa 2025: Smart Contracts, Sustainability & PoW Compared",
    seoDescription: "Ergo vs Kaspa comparison: eUTXO smart contracts vs pure payments, storage rent vs no rent, privacy features, and long-term sustainability.",
    keywords: [
      "ergo vs kaspa",
      "kaspa ergo comparison",
      "pow smart contracts",
      "kaspa smart contracts",
      "ergo kaspa mining",
      "best pow blockchain 2025",
    ],
    
    summary: {
      headline: "Smart Contract PoW vs Speed-Focused PoW",
      subheadline: "Both are fair-launched PoW chains, but Ergo adds smart contracts, privacy, and sustainability features Kaspa lacks.",
      points: [
        {
          title: "Smart Contracts",
          description: "Ergo has full smart contract support via ErgoScript; Kaspa is payments-only (smart contracts planned)",
          icon: "Code",
        },
        {
          title: "Privacy Features",
          description: "Ergo offers Sigma Protocols and ErgoMixer; Kaspa has no native privacy",
          icon: "Shield",
        },
        {
          title: "Long-term Sustainability",
          description: "Ergo has storage rent for post-emission security; Kaspa relies on fees only",
          icon: "Leaf",
        },
        {
          title: "Light Clients",
          description: "Ergo has NiPoPoWs for trustless light clients; Kaspa uses SPV",
          icon: "Smartphone",
        },
      ],
    },
    
    matrixRows: [
      { feature: "Consensus", ergo: "Autolykos PoW (ASIC-resistant)", competitor: "kHeavyHash PoW (ASIC-friendly)", ergoAdvantage: true, notes: "Ergo keeps mining accessible to GPUs" },
      { feature: "Smart Contracts", ergo: "Full support (ErgoScript)", competitor: "None (planned)", ergoAdvantage: true, notes: "Kaspa is payments-only currently" },
      { feature: "Block Time", ergo: "~2 minutes", competitor: "~1 second", ergoAdvantage: false, notes: "Kaspa optimizes for speed via DAG" },
      { feature: "Privacy", ergo: "Sigma Protocols, ErgoMixer", competitor: "None", ergoAdvantage: true, notes: "Ergo has native privacy tools" },
      { feature: "State Model", ergo: "eUTXO (programmable)", competitor: "UTXO (simple)", ergoAdvantage: true, notes: "eUTXO enables DeFi" },
      { feature: "Long-term Security", ergo: "Storage rent + fees", competitor: "Fees only", ergoAdvantage: true, notes: "Storage rent ensures miner income" },
      { feature: "Light Clients", ergo: "NiPoPoWs (trustless)", competitor: "SPV (trust-based)", ergoAdvantage: true, notes: "NiPoPoWs are cryptographically secure" },
      { feature: "Fair Launch", ergo: "Yes (no premine)", competitor: "Yes (no premine)", notes: "Both have fair launches" },
      { feature: "DeFi Ecosystem", ergo: "Active (Spectrum, SigmaUSD)", competitor: "None", ergoAdvantage: true, notes: "Ergo has working DeFi" },
    ],
    
    sections: [
      {
        title: "Smart Contract Capabilities",
        content: "Ergo launched with full smart contract support via ErgoScript, enabling DEXs, stablecoins, lending, and complex DeFi. Kaspa launched as a pure payment chain with smart contracts on the roadmap but not yet implemented.",
        ergoAdvantage: "Working DeFi ecosystem today vs promised future features.",
      },
      {
        title: "Mining Accessibility",
        content: "Ergo's Autolykos is memory-hard and ASIC-resistant, keeping mining accessible to GPU owners. Kaspa's kHeavyHash has seen ASIC development, potentially centralizing mining.",
        ergoAdvantage: "GPU mining remains viable, promoting decentralization.",
      },
      {
        title: "Long-term Sustainability",
        content: "Both chains will eventually run out of block rewards. Ergo's storage rent provides additional miner income from unused UTXOs. Kaspa must rely entirely on transaction fees.",
        ergoAdvantage: "Storage rent ensures sustainable security budget.",
      },
      {
        title: "Speed vs Security Trade-off",
        content: "Kaspa's BlockDAG achieves ~1 second blocks but requires complex consensus. Ergo's ~2 minute blocks are simpler and proven secure, with NiPoPoWs enabling fast verification.",
        ergoAdvantage: "Simpler, battle-tested design with light client support.",
      },
    ],
    
    relatedTags: ["Kaspa", "PoW", "mining", "smart contracts", "DAG", "ASIC resistance"],
    
    faq: [
      {
        question: "Is Kaspa faster than Ergo?",
        answer: "Kaspa has faster block times (~1 sec vs ~2 min), but Ergo's NiPoPoWs enable fast verification. For DeFi, Ergo's eUTXO model with atomic swaps provides instant finality for trades.",
      },
      {
        question: "Does Kaspa have smart contracts?",
        answer: "Not yet. Kaspa launched as a pure payment chain. Smart contracts are on the roadmap but not implemented. Ergo has had full smart contracts since launch.",
      },
      {
        question: "Which is better for mining?",
        answer: "Ergo remains GPU-friendly due to ASIC-resistant Autolykos. Kaspa has seen ASIC development which may centralize mining over time.",
      },
      {
        question: "Which has better long-term economics?",
        answer: "Ergo's storage rent provides sustainable miner income after emission ends. Kaspa relies on transaction fees only, which may not sustain security.",
      },
    ],
    
    publishDate: "2025-01-01",
  },

  // ============================================
  // RAVENCOIN (PoW asset chain)
  // ============================================
  {
    slug: "ravencoin",
    name: "Ravencoin",
    logo: "/logos/ravencoin.svg",
    color: "#384182",
    
    seoTitle: "Ergo vs Ravencoin 2025: Smart Contracts, Privacy & Token Features Compared",
    seoDescription: "Ergo vs Ravencoin comparison: eUTXO smart contracts vs asset-focused scripting, privacy features, DeFi capabilities, and sustainability.",
    keywords: [
      "ergo vs ravencoin",
      "ravencoin ergo comparison",
      "pow tokens",
      "asset tokens blockchain",
      "ergo ravencoin mining",
      "best pow for tokens",
    ],
    
    summary: {
      headline: "Full DeFi Platform vs Asset-Focused Chain",
      subheadline: "Both enable native tokens on PoW, but Ergo adds smart contracts, privacy, and DeFi that Ravencoin can't support.",
      points: [
        {
          title: "Smart Contracts",
          description: "Ergo has Turing-incomplete but powerful ErgoScript; Ravencoin has limited asset scripts",
          icon: "Code",
        },
        {
          title: "DeFi Capabilities",
          description: "Ergo supports DEXs, lending, stablecoins; Ravencoin is asset issuance only",
          icon: "Layers",
        },
        {
          title: "Privacy",
          description: "Ergo has Sigma Protocols; Ravencoin has no privacy features",
          icon: "Shield",
        },
        {
          title: "Sustainability",
          description: "Ergo has storage rent; Ravencoin has no long-term security mechanism",
          icon: "Leaf",
        },
      ],
    },
    
    matrixRows: [
      { feature: "Consensus", ergo: "Autolykos PoW", competitor: "KAWPOW PoW", notes: "Both GPU-mineable" },
      { feature: "Smart Contracts", ergo: "Full (ErgoScript)", competitor: "Limited (asset scripts)", ergoAdvantage: true, notes: "Ergo enables DeFi" },
      { feature: "Token Focus", ergo: "General purpose + tokens", competitor: "Asset issuance focused", ergoAdvantage: true, notes: "Ergo is more versatile" },
      { feature: "DeFi", ergo: "Active ecosystem", competitor: "None", ergoAdvantage: true, notes: "DEXs, stablecoins, lending on Ergo" },
      { feature: "Privacy", ergo: "Sigma Protocols, ErgoMixer", competitor: "None", ergoAdvantage: true, notes: "Ergo has native privacy" },
      { feature: "State Model", ergo: "eUTXO", competitor: "UTXO + asset layer", ergoAdvantage: true, notes: "eUTXO is more programmable" },
      { feature: "Long-term Security", ergo: "Storage rent", competitor: "Fees only", ergoAdvantage: true, notes: "Storage rent sustains miners" },
      { feature: "Fair Launch", ergo: "Yes", competitor: "Yes", notes: "Both fair launched" },
      { feature: "Messaging", ergo: "Via contracts", competitor: "Native messaging", notes: "RVN has built-in messaging" },
    ],
    
    sections: [
      {
        title: "Smart Contract Power",
        content: "Ravencoin was designed specifically for asset issuance with limited scripting. Ergo's ErgoScript enables complex DeFi: DEXs, stablecoins, lending protocols, and more. If you need more than token transfers, Ergo is the choice.",
        ergoAdvantage: "Full DeFi capabilities vs simple asset transfers.",
      },
      {
        title: "Token Capabilities",
        content: "Both support native tokens without smart contracts. Ravencoin has unique features like messaging and restricted assets. Ergo tokens can participate in complex DeFi protocols and smart contracts.",
        ergoAdvantage: "Tokens can be used in DeFi, not just transferred.",
      },
      {
        title: "Privacy Features",
        content: "Ravencoin has no privacy features. Ergo provides Sigma Protocols for zero-knowledge proofs and ErgoMixer for transaction mixing, enabling private transfers when needed.",
        ergoAdvantage: "Optional privacy for sensitive transactions.",
      },
      {
        title: "Long-term Viability",
        content: "Both face the post-emission challenge. Ergo's storage rent provides sustainable miner income. Ravencoin must rely entirely on transaction fees, which may not sustain security.",
        ergoAdvantage: "Storage rent ensures long-term security budget.",
      },
    ],
    
    relatedTags: ["Ravencoin", "PoW", "tokens", "assets", "mining", "native tokens"],
    
    faq: [
      {
        question: "Is Ravencoin better for tokens than Ergo?",
        answer: "Ravencoin has specialized token features like messaging and restricted assets. But Ergo tokens can participate in DeFi (DEXs, lending, etc.), making them more useful overall.",
      },
      {
        question: "Which is better for mining?",
        answer: "Both are GPU-mineable. Ravencoin uses KAWPOW, Ergo uses Autolykos. Both resist ASICs, though market conditions affect profitability.",
      },
      {
        question: "Can Ravencoin do DeFi?",
        answer: "No. Ravencoin's scripting is limited to asset operations. For DEXs, stablecoins, or lending, you need Ergo's smart contracts.",
      },
      {
        question: "Which has a larger community?",
        answer: "Ravencoin has been around longer and has a larger market cap. Ergo has a more technically active community building DeFi and tools.",
      },
    ],
    
    publishDate: "2025-01-01",
  },

  // ============================================
  // LITECOIN (OG PoW)
  // ============================================
  {
    slug: "litecoin",
    name: "Litecoin",
    logo: "/logos/litecoin.svg",
    color: "#345D9D",
    
    seoTitle: "Ergo vs Litecoin 2025: Smart Contracts, Privacy & Features Compared",
    seoDescription: "Ergo vs Litecoin comparison: eUTXO smart contracts vs simple payments, Sigma Protocols vs MWEB privacy, and DeFi capabilities.",
    keywords: [
      "ergo vs litecoin",
      "litecoin ergo comparison",
      "ltc smart contracts",
      "pow comparison",
      "litecoin privacy",
      "ergo litecoin",
    ],
    
    summary: {
      headline: "Modern Smart Contract PoW vs Classic Payment Coin",
      subheadline: "Litecoin is digital silver to Bitcoin's gold. Ergo is programmable money with full DeFi capabilities.",
      points: [
        {
          title: "Smart Contracts",
          description: "Ergo has full ErgoScript contracts; Litecoin has Bitcoin-like limited scripting",
          icon: "Code",
        },
        {
          title: "Privacy Approach",
          description: "Ergo uses Sigma Protocols (ZK proofs); Litecoin added MWEB (MimbleWimble)",
          icon: "Shield",
        },
        {
          title: "DeFi",
          description: "Ergo has active DEXs and stablecoins; Litecoin has no DeFi",
          icon: "Layers",
        },
        {
          title: "Innovation",
          description: "Ergo: research-driven with novel features; Litecoin: conservative Bitcoin fork",
          icon: "Lightbulb",
        },
      ],
    },
    
    matrixRows: [
      { feature: "Consensus", ergo: "Autolykos PoW (ASIC-resistant)", competitor: "Scrypt PoW (ASIC-dominated)", ergoAdvantage: true, notes: "Ergo keeps GPU mining viable" },
      { feature: "Smart Contracts", ergo: "Full (ErgoScript)", competitor: "Limited (Bitcoin-like)", ergoAdvantage: true, notes: "Ergo enables DeFi" },
      { feature: "Privacy", ergo: "Sigma Protocols, ErgoMixer", competitor: "MWEB (opt-in)", notes: "Different approaches, both optional" },
      { feature: "DeFi", ergo: "Active ecosystem", competitor: "None", ergoAdvantage: true, notes: "DEXs, stablecoins on Ergo" },
      { feature: "Block Time", ergo: "~2 minutes", competitor: "~2.5 minutes", notes: "Similar" },
      { feature: "State Model", ergo: "eUTXO", competitor: "UTXO", ergoAdvantage: true, notes: "eUTXO is programmable" },
      { feature: "Long-term Security", ergo: "Storage rent", competitor: "Fees only", ergoAdvantage: true, notes: "Storage rent sustains miners" },
      { feature: "Adoption", ergo: "Growing", competitor: "Established", notes: "LTC has longer history" },
      { feature: "Fair Launch", ergo: "Yes", competitor: "Yes (early mining)", notes: "Both fair launched" },
    ],
    
    sections: [
      {
        title: "Purpose & Vision",
        content: "Litecoin was created as 'silver to Bitcoin's gold' - a faster, lighter Bitcoin for payments. Ergo was built from scratch with smart contracts, privacy, and sustainability as core features. Different visions, different capabilities.",
        ergoAdvantage: "Built for DeFi and programmable money from day one.",
      },
      {
        title: "Smart Contract Capabilities",
        content: "Litecoin has Bitcoin-like scripting - useful for basic multi-sig but not DeFi. Ergo's ErgoScript enables DEXs, stablecoins, lending, and complex financial applications.",
        ergoAdvantage: "Full DeFi capabilities vs payment-only functionality.",
      },
      {
        title: "Privacy Features",
        content: "Litecoin added MWEB (MimbleWimble Extension Blocks) for optional privacy. Ergo uses Sigma Protocols enabling zero-knowledge proofs. Both offer opt-in privacy with different technical approaches.",
        ergoAdvantage: "Sigma Protocols are more flexible for smart contract privacy.",
      },
      {
        title: "Mining Decentralization",
        content: "Litecoin mining is dominated by ASICs, concentrating hash power. Ergo's Autolykos remains GPU-friendly, keeping mining accessible to individuals.",
        ergoAdvantage: "More decentralized mining participation.",
      },
    ],
    
    relatedTags: ["Litecoin", "PoW", "payments", "MWEB", "mining", "Bitcoin fork"],
    
    faq: [
      {
        question: "Is Litecoin faster than Ergo?",
        answer: "Slightly - 2.5 min vs 2 min blocks. But for DeFi, Ergo's atomic swaps provide instant trade finality. Speed alone doesn't determine usefulness.",
      },
      {
        question: "Which has better privacy?",
        answer: "Different approaches. Litecoin uses MWEB (MimbleWimble), Ergo uses Sigma Protocols. Ergo's approach integrates better with smart contracts.",
      },
      {
        question: "Can I do DeFi on Litecoin?",
        answer: "No. Litecoin's scripting is too limited. For DEXs, stablecoins, or lending, you need Ergo's smart contracts.",
      },
      {
        question: "Which is more decentralized?",
        answer: "Ergo, due to ASIC-resistant mining. Litecoin mining is dominated by ASIC farms, while Ergo remains GPU-mineable.",
      },
    ],
    
    publishDate: "2025-01-01",
  },
];

// Helper functions
export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}

export function getRelatedInfographicTags(slug: string): string[] {
  const comparison = getComparisonBySlug(slug);
  return comparison?.relatedTags || [];
}

