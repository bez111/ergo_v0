// Topic Hubs - Semantic Clusters for Topical Authority
// Each topic is a pillar page that aggregates all related content

export interface TopicResource {
  type: 'doc' | 'blog' | 'playbook' | 'infographic' | 'glossary' | 'question' | 'compare' | 'technology';
  title: string;
  url: string;
  description?: string;
  badge?: string;
  priority?: number; // 1 = featured, 2 = important, 3 = supplementary
}

export interface TopicTerm {
  term: string;
  slug: string;
  shortDefinition: string;
}

export interface TopicQuestion {
  question: string;
  slug: string;
}

export interface TopicSection {
  id: string;
  title: string;
  description: string;
}

export interface TopicHub {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  
  // Rich intro content (800-1500 words equivalent)
  heroStatement: string; // Bold opening statement
  introduction: string; // Main intro paragraph
  whatMakesUnique: string; // What makes Ergo's approach unique
  keyDifferentiators: string[]; // 3-5 bullet points
  
  // Content sections
  sections: TopicSection[];
  
  // Featured resources (manually curated, high priority)
  startHere: TopicResource[]; // 2-3 overview materials
  buildWithIt: TopicResource[]; // Dev docs, patterns, guides
  philosophy: TopicResource[]; // Philosophy, narrative, cypherpunk angle
  visuals: TopicResource[]; // Infographics, posters
  
  // Auto-aggregated by tags
  relatedTags: string[]; // Tags to match from other content
  
  // Inline glossary terms (DefinedTermSet)
  keyTerms: TopicTerm[];
  
  // Related Q&A
  relatedQuestions: TopicQuestion[];
  
  // Related topics for cross-linking
  relatedTopics: string[];
  
  // Metadata
  icon: string; // Lucide icon name
  color: string; // Theme color
  publishDate: string;
  updatedDate?: string;
}

export const topics: TopicHub[] = [
  // ==================== DEFI ====================
  {
    slug: "ergo-defi",
    title: "DeFi on Ergo",
    subtitle: "Decentralized Finance Without MEV, Without Permission",
    seoTitle: "Ergo DeFi — MEV-Resistant DEX & Stablecoins | Ergo",
    seoDescription: "DeFi without MEV. Explore Ergo's DEXs, stablecoins, oracles & lending. No front-running, predictable fees, fair for all.",
    keywords: ["Ergo DeFi", "eUTXO DeFi", "MEV resistant DEX", "SigmaUSD", "Spectrum Finance", "Oracle Pools", "decentralized finance"],
    
    heroStatement: "DeFi that actually works for users, not extractors.",
    
    introduction: "Ergo's approach to DeFi is fundamentally different from account-based chains like Ethereum. Built on the eUTXO model, Ergo eliminates entire categories of exploits that plague traditional DeFi: eliminates front-running and sandwich attacks by design (no public mempool ordering games). Every transaction's cost is known before you send it. Every trade executes exactly as expected. This isn't a minor improvement - it's a structural advantage that makes DeFi actually usable for regular people, not just sophisticated traders with MEV bots.",
    
    whatMakesUnique: "While Ethereum DeFi has become a 'dark forest' where users are hunted by MEV extractors, Ergo's eUTXO model creates a fundamentally fairer environment. Transactions reference specific boxes (UTXOs), making reordering attacks impractical. Oracle Pools provide decentralized price feeds without single points of failure. And because Ergo is PoW with fair launch, there's no VC cartel controlling governance or extracting value from the protocol.",
    
    keyDifferentiators: [
      "MEV-resistant by design extraction: transactions can't be front-run or sandwiched by design",
      "Predictable fees: know exactly what you'll pay before sending (~$0.01)",
      "Deterministic execution: transactions either fully succeed or fully fail",
      "Decentralized oracles: Oracle Pools provide trustless price feeds",
      "Fair launch: no VC allocation, no insider advantages"
    ],
    
    sections: [
      { id: "overview", title: "Understanding Ergo DeFi", description: "Core concepts and how it differs from EVM DeFi" },
      { id: "ecosystem", title: "DeFi Ecosystem", description: "DEXs, stablecoins, lending, and more" },
      { id: "build", title: "Build DeFi Apps", description: "Developer resources and patterns" },
      { id: "philosophy", title: "DeFi Philosophy", description: "Why fair DeFi matters" }
    ],
    
    startHere: [
      { type: "infographic", title: "eUTXO Model Explained", url: "/infographics/ergo-eutxo-model-bitcoin-security-smart-contract-flexibility", description: "Visual guide to how eUTXO enables secure DeFi", badge: "Start Here", priority: 1 },
      { type: "blog", title: "eUTXO vs Account Model", url: "/blog/eutxo-vs-accounts", description: "Deep comparison of the two smart contract paradigms", badge: "Essential", priority: 1 },
      { type: "technology", title: "Oracle Pools", url: "/technology/oracle-pools", description: "How Ergo solves the oracle problem", badge: "Core Tech", priority: 1 }
    ],
    
    buildWithIt: [
      { type: "playbook", title: "Build DeFi on Ergo", url: "/playbooks/build-defi-on-ergo", description: "Step-by-step guide to building DeFi apps", badge: "Developer Guide", priority: 1 },
      { type: "technology", title: "ErgoScript", url: "/technology/ergoscript", description: "Learn Ergo's smart contract language", badge: "Language", priority: 1 },
      { type: "glossary", title: "Boxes & Registers", url: "/learn/glossary/boxes", description: "Understanding eUTXO data structures", badge: "Concept", priority: 2 },
      { type: "doc", title: "AppKit Documentation", url: "/docs/developers/tooling/frameworks/appkit", description: "SDK for building Ergo applications", badge: "SDK", priority: 2 }
    ],
    
    philosophy: [
      { type: "infographic", title: "MEV Resistance vs Dark Forest", url: "/infographics/mev-resistance-vs-dark-forest", description: "Why MEV-free trading matters", badge: "Philosophy", priority: 1 },
      { type: "blog", title: "Ergo Manifesto", url: "/blog/ergo-manifesto", description: "The cypherpunk vision behind Ergo", badge: "Manifesto", priority: 1 },
      { type: "infographic", title: "Money Without Masters", url: "/infographics/money-without-masters-ergo-vs-banks-and-vc-crypto", description: "DeFi as financial liberation", badge: "Vision", priority: 2 }
    ],
    
    visuals: [
      { type: "infographic", title: "Blockchain Matrix", url: "/infographics/blockchain-matrix-where-ergo-actually-fits", description: "Where Ergo fits in the crypto landscape", priority: 1 },
      { type: "infographic", title: "Oracle Pools Explained", url: "/infographics/ergo-oracle-pools-decentralized-reliable-real-world-data", description: "Visual guide to decentralized oracles", priority: 1 },
      { type: "infographic", title: "Smart Contract L1 Tree", url: "/infographics/smart-contract-l1-tree", description: "Comparing smart contract platforms", priority: 2 }
    ],
    
    relatedTags: ["DeFi", "eUTXO", "Oracle Pools", "SigmaUSD", "Spectrum", "DEX", "stablecoin", "lending", "AMM", "liquidity"],
    
    keyTerms: [
      { term: "eUTXO", slug: "eutxo", shortDefinition: "Extended UTXO model that enables smart contracts while maintaining Bitcoin-like security" },
      { term: "MEV Resistance", slug: "mev-resistance", shortDefinition: "Structural protection against front-running and sandwich attacks" },
      { term: "Oracle Pools", slug: "oracle-pools", shortDefinition: "Decentralized system for bringing off-chain data to smart contracts" },
      { term: "SigmaUSD", slug: "sigmausd", shortDefinition: "Algorithmic stablecoin backed by ERG reserves" },
      { term: "Babel Fees", slug: "babel-fees", shortDefinition: "Pay transaction fees in any token, not just ERG" },
      { term: "Boxes", slug: "boxes", shortDefinition: "eUTXO containers holding value, tokens, and smart contract data" }
    ],
    
    relatedQuestions: [
      { question: "How to build DeFi on Ergo?", slug: "how-to-build-defi-on-ergo" },
      { question: "Is Ergo better than Ethereum for DeFi?", slug: "ergo-vs-ethereum-for-defi" },
      { question: "What is MEV resistance?", slug: "what-is-mev-resistance" },
      { question: "What is eUTXO?", slug: "what-is-eutxo" }
    ],
    
    relatedTopics: ["ergo-privacy", "ergo-technology"],
    
    icon: "Wallet",
    color: "orange",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // ==================== PRIVACY ====================
  {
    slug: "ergo-privacy",
    title: "Privacy on Ergo",
    subtitle: "Programmable Privacy with Sigma Protocols",
    seoTitle: "Ergo Privacy — Sigma Protocols & ErgoMixer | Ergo",
    seoDescription: "Optional privacy with Sigma Protocols. ErgoMixer for non-custodial mixing, zero-knowledge proofs, selective disclosure. Private but auditable.",
    keywords: ["Ergo privacy", "Sigma Protocols", "zero-knowledge proofs", "ErgoMixer", "private blockchain", "selective disclosure", "ring signatures"],
    
    heroStatement: "Privacy is not about hiding. It's about control.",
    
    introduction: "Ergo takes a unique approach to blockchain privacy: optional, programmable, and provable. Unlike always-on privacy coins that hide everything, Ergo's Sigma Protocols let you prove things about your data without revealing the data itself. You can prove you're over 18 without showing your birthdate. Prove you have sufficient funds without revealing your balance. Prove membership in a group without identifying yourself. This is privacy that works in the real world - where sometimes you need to prove compliance while protecting your details.",
    
    whatMakesUnique: "Most privacy solutions force a binary choice: full transparency or full opacity. Ergo's Sigma Protocols enable selective disclosure - reveal exactly what's needed, nothing more. This isn't just academic cryptography; it's built into ErgoScript as a first-class primitive. Every smart contract can incorporate zero-knowledge proofs. ErgoMixer provides non-interactive, non-custodial mixing. And because privacy is optional, Ergo remains accessible to regulated entities while empowering individuals.",
    
    keyDifferentiators: [
      "Sigma Protocols: native zero-knowledge proofs in every smart contract",
      "Selective disclosure: prove statements without revealing underlying data",
      "ErgoMixer: non-custodial, non-interactive token mixing",
      "Programmable privacy: build custom privacy logic into dApps",
      "Optional by design: transparent when needed, private when required"
    ],
    
    sections: [
      { id: "overview", title: "Understanding Ergo Privacy", description: "How privacy works on Ergo" },
      { id: "sigma", title: "Sigma Protocols", description: "Zero-knowledge proofs explained" },
      { id: "tools", title: "Privacy Tools", description: "ErgoMixer and other privacy applications" },
      { id: "philosophy", title: "Privacy Philosophy", description: "Why privacy matters for freedom" }
    ],
    
    startHere: [
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", description: "Overview of Ergo's privacy capabilities", badge: "Start Here", priority: 1 },
      { type: "blog", title: "Sigma Protocols Explained", url: "/blog/sigma-protocols-explained", description: "Deep dive into zero-knowledge proofs", badge: "Essential", priority: 1 },
      { type: "infographic", title: "Ergo Privacy Model", url: "/infographics/ergo-privacy-non-interactive-efficient", description: "Visual guide to privacy on Ergo", badge: "Visual", priority: 1 }
    ],
    
    buildWithIt: [
      { type: "glossary", title: "Sigma Protocols", url: "/learn/glossary/sigma-protocols", description: "Technical definition and use cases", badge: "Concept", priority: 1 },
      { type: "technology", title: "ErgoScript", url: "/technology/ergoscript", description: "Write privacy-preserving smart contracts", badge: "Language", priority: 1 },
      { type: "glossary", title: "ErgoMixer", url: "/learn/glossary/ergomixer", description: "Non-custodial token mixing", badge: "Tool", priority: 2 }
    ],
    
    philosophy: [
      { type: "infographic", title: "Privacy But Auditable", url: "/infographics/privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins", description: "Sigma Protocols vs other privacy approaches", badge: "Comparison", priority: 1 },
      { type: "compare", title: "Ergo vs Monero", url: "/compare/ergo-vs-monero", description: "Different privacy models compared", badge: "Comparison", priority: 1 },
      { type: "playbook", title: "Escape Financial Repression", url: "/playbooks/escape-financial-repression", description: "Privacy for financial freedom", badge: "Guide", priority: 2 }
    ],
    
    visuals: [
      { type: "infographic", title: "Ergo vs Privacy Coins", url: "/infographics/ergo-vs-privacy-coins", description: "Comparing privacy approaches", priority: 1 },
      { type: "infographic", title: "Financial Repression Stack", url: "/infographics/what-we-are-fighting-against-financial-repression-stack", description: "Why privacy matters", priority: 2 }
    ],
    
    relatedTags: ["privacy", "Sigma Protocols", "zero-knowledge", "ErgoMixer", "ring signatures", "stealth addresses", "confidential"],
    
    keyTerms: [
      { term: "Sigma Protocols", slug: "sigma-protocols", shortDefinition: "Zero-knowledge proof systems for proving statements without revealing data" },
      { term: "ErgoMixer", slug: "ergomixer", shortDefinition: "Non-interactive, non-custodial token mixing service" },
      { term: "Zero-Knowledge Proofs", slug: "zero-knowledge-proofs", shortDefinition: "Cryptographic proofs that reveal nothing except the truth of a statement" },
      { term: "Selective Disclosure", slug: "selective-disclosure", shortDefinition: "Revealing only specific data while keeping the rest private" },
      { term: "Ring Signatures", slug: "ring-signatures", shortDefinition: "Signatures that prove group membership without identifying the signer" }
    ],
    
    relatedQuestions: [
      { question: "Is Ergo better than Monero for privacy?", slug: "is-ergo-better-than-monero-for-privacy" },
      { question: "What are Sigma Protocols?", slug: "what-are-sigma-protocols" },
      { question: "How private is Ergo?", slug: "how-private-is-ergo" }
    ],
    
    relatedTopics: ["ergo-defi", "ergo-philosophy"],
    
    icon: "Shield",
    color: "purple",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // ==================== MINING ====================
  {
    slug: "ergo-mining",
    title: "Mining Ergo",
    subtitle: "Fair, Accessible, ASIC-Resistant Proof-of-Work",
    seoTitle: "Ergo Mining — Autolykos GPU Mining Guide | Ergo",
    seoDescription: "GPU mining with Autolykos. ASIC-resistant, fair rewards, storage rent income. Pool selection, profitability calculator, setup guides.",
    keywords: ["Ergo mining", "Autolykos", "GPU mining", "ASIC resistant", "proof of work", "mining pools", "ERG mining"],
    
    heroStatement: "Mining without masters. Proof-of-Work for everyone.",
    
    introduction: "Ergo's Autolykos algorithm represents a return to Bitcoin's original vision: mining accessible to regular people with consumer hardware. Unlike Bitcoin's ASIC-dominated mining or Ethereum's move to PoS, Ergo maintains GPU-friendly, memory-hard Proof-of-Work. This isn't nostalgia - it's a deliberate design choice for decentralization. When anyone can mine with their gaming PC, no single entity can dominate hashrate. When mining is distributed, censorship resistance is real.",
    
    whatMakesUnique: "Autolykos v2 is memory-hard, requiring significant RAM that makes ASIC development uneconomical. The algorithm was designed by cryptographers, not as an afterthought. Storage rent provides sustainable miner revenue after emission ends - solving Bitcoin's long-term security budget problem. And Ergo's fair launch means miners aren't competing against VC-subsidized insiders; everyone started from zero.",
    
    keyDifferentiators: [
      "ASIC-resistant: Autolykos keeps mining accessible to GPU miners",
      "Memory-hard: requires RAM, not just raw compute power",
      "Storage rent: sustainable miner income after block rewards end",
      "Fair launch: no pre-mine advantage for anyone",
      "Pool mining: Autolykos v2 enables pool participation"
    ],
    
    sections: [
      { id: "overview", title: "Understanding Ergo Mining", description: "How Autolykos works and why it matters" },
      { id: "setup", title: "Mining Setup", description: "Hardware, software, and pool selection" },
      { id: "economics", title: "Mining Economics", description: "Profitability, rewards, and sustainability" },
      { id: "philosophy", title: "PoW Philosophy", description: "Why Proof-of-Work matters" }
    ],
    
    startHere: [
      { type: "playbook", title: "Start Mining Ergo", url: "/playbooks/start-mining-ergo", description: "Step-by-step mining setup guide", badge: "Start Here", priority: 1 },
      { type: "infographic", title: "Autolykos Explained", url: "/infographics/autolykos-mining-without-masters", description: "Visual guide to Ergo's mining algorithm", badge: "Visual", priority: 1 },
      { type: "technology", title: "Secure PoW", url: "/technology/secure-pow", description: "Technical overview of Autolykos", badge: "Technical", priority: 1 }
    ],
    
    buildWithIt: [
      { type: "doc", title: "Mining Setup Guide", url: "/docs/miners/mining-setup", description: "Detailed configuration instructions", badge: "Guide", priority: 1 },
      { type: "glossary", title: "Autolykos", url: "/learn/glossary/autolykos", description: "Algorithm definition and properties", badge: "Concept", priority: 1 },
      { type: "doc", title: "Pool Selection", url: "/miners#pools", description: "Choosing a mining pool", badge: "Pools", priority: 2 }
    ],
    
    philosophy: [
      { type: "infographic", title: "PoW vs PoS", url: "/infographics/pow-vs-pos-censorship-and-attack-surface", description: "Why Proof-of-Work provides stronger guarantees", badge: "Comparison", priority: 1 },
      { type: "infographic", title: "Three Pillars of Sustainability", url: "/infographics/three-pillars-ergos-sustainability", description: "Long-term mining economics", badge: "Economics", priority: 1 },
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", description: "Sustainable miner revenue", badge: "Sustainability", priority: 2 }
    ],
    
    visuals: [
      { type: "infographic", title: "How Security is Maintained", url: "/infographics/how-is-security-maintained-pos-vs-ergo-autolykos", description: "PoS vs Autolykos security comparison", priority: 1 },
      { type: "infographic", title: "Storage Rent vs State Bloat", url: "/infographics/storage-rent-vs-state-bloat-ergo", description: "How storage rent helps miners", priority: 2 }
    ],
    
    relatedTags: ["mining", "Autolykos", "PoW", "Proof-of-Work", "GPU mining", "ASIC resistant", "hashrate", "pools"],
    
    keyTerms: [
      { term: "Autolykos", slug: "autolykos", shortDefinition: "Ergo's memory-hard, ASIC-resistant Proof-of-Work algorithm" },
      { term: "Storage Rent", slug: "storage-rent", shortDefinition: "Fee mechanism providing sustainable miner revenue" },
      { term: "Proof-of-Work", slug: "proof-of-work", shortDefinition: "Consensus mechanism where miners expend energy to secure the network" },
      { term: "Emission Schedule", slug: "emission-schedule", shortDefinition: "The predetermined release of new ERG through mining" },
      { term: "Memory-Hard", slug: "memory-hard", shortDefinition: "Algorithm requiring significant RAM, resisting ASIC optimization" }
    ],
    
    relatedQuestions: [
      { question: "How to mine Ergo?", slug: "how-to-mine-ergo" },
      { question: "What is Autolykos?", slug: "what-is-autolykos" }
    ],
    
    relatedTopics: ["ergo-sustainability", "ergo-philosophy"],
    
    icon: "Pickaxe",
    color: "amber",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // ==================== TECHNOLOGY ====================
  {
    slug: "ergo-technology",
    title: "Ergo Technology",
    subtitle: "Research-Driven Innovation for Real-World Use",
    seoTitle: "Ergo Technology — eUTXO, ErgoScript & NiPoPoWs | Ergo",
    seoDescription: "Ergo's tech stack explained. eUTXO model, ErgoScript smart contracts, NiPoPoWs light clients, Sigma Protocols. Research-driven innovation.",
    keywords: ["Ergo technology", "eUTXO", "ErgoScript", "NiPoPoWs", "Sigma Protocols", "blockchain innovation", "smart contracts"],
    
    heroStatement: "Technology that solves real problems, not hype cycles.",
    
    introduction: "Ergo's technology stack represents years of academic research translated into practical blockchain innovation. Every major component - eUTXO, ErgoScript, NiPoPoWs, Sigma Protocols - comes from peer-reviewed cryptographic research. This isn't technology for technology's sake; each innovation solves specific problems. eUTXO eliminates MEV and enables parallel processing. NiPoPoWs compress blockchain proofs from gigabytes to kilobytes. Sigma Protocols bring zero-knowledge proofs to every smart contract. The result is a blockchain that's simultaneously more secure, more scalable, and more private than its competitors.",
    
    whatMakesUnique: "Most blockchains copy Ethereum's account model or Bitcoin's simple scripts. Ergo charts a different path: extending Bitcoin's UTXO model with rich smart contract capabilities while maintaining its security properties. ErgoScript is a functional language, not imperative like Solidity - this makes contracts easier to verify and harder to exploit. NiPoPoWs enable truly trustless light clients and efficient cross-chain bridges. These aren't incremental improvements; they're architectural advantages.",
    
    keyDifferentiators: [
      "eUTXO: smart contracts with Bitcoin-level security guarantees",
      "ErgoScript: functional, verifiable smart contract language",
      "NiPoPoWs: logarithmic proof compression for light clients",
      "Sigma Protocols: native zero-knowledge proofs",
      "Research-driven: peer-reviewed cryptography, not marketing"
    ],
    
    sections: [
      { id: "overview", title: "Technology Overview", description: "The Ergo technology stack" },
      { id: "eutxo", title: "eUTXO Model", description: "Extended UTXO explained" },
      { id: "scripting", title: "Smart Contracts", description: "ErgoScript and contract development" },
      { id: "scaling", title: "Scaling & Light Clients", description: "NiPoPoWs and future scaling" }
    ],
    
    startHere: [
      { type: "technology", title: "eUTXO Model", url: "/technology/eutxo-model", description: "Foundation of Ergo's architecture", badge: "Core", priority: 1 },
      { type: "technology", title: "ErgoScript", url: "/technology/ergoscript", description: "Smart contract language", badge: "Core", priority: 1 },
      { type: "infographic", title: "Ergo Introduction", url: "/infographics/ergo-blockchain-introduction-fundamentals", description: "Visual technology overview", badge: "Visual", priority: 1 }
    ],
    
    buildWithIt: [
      { type: "technology", title: "NiPoPoWs", url: "/technology/nipopows", description: "Light client technology", badge: "Scaling", priority: 1 },
      { type: "technology", title: "Oracle Pools", url: "/technology/oracle-pools", description: "Decentralized data feeds", badge: "Infrastructure", priority: 1 },
      { type: "technology", title: "Native Tokens", url: "/technology/native-tokens", description: "First-class token support", badge: "Tokens", priority: 2 },
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", description: "State management", badge: "Sustainability", priority: 2 }
    ],
    
    philosophy: [
      { type: "infographic", title: "Research-Driven Cypherpunk", url: "/infographics/ergo-blockchain-research-driven-cypherpunk-aligned", description: "Academic foundations of Ergo", badge: "Philosophy", priority: 1 },
      { type: "blog", title: "Ergo Manifesto", url: "/blog/ergo-manifesto", description: "Vision and principles", badge: "Manifesto", priority: 1 }
    ],
    
    visuals: [
      { type: "infographic", title: "eUTXO vs Accounts", url: "/infographics/eutxo-vs-accounts-vs-classic-utxo", description: "Comparing blockchain models", priority: 1 },
      { type: "infographic", title: "NiPoPoWs Explained", url: "/infographics/ergo-nipopows-scalable-trustless-light-clients", description: "Light client technology", priority: 1 },
      { type: "infographic", title: "ErgoScript Cypherpunk", url: "/infographics/ergoscript-cypherpunk-code-of-freedom", description: "Smart contract philosophy", priority: 2 }
    ],
    
    relatedTags: ["technology", "eUTXO", "ErgoScript", "NiPoPoWs", "Sigma Protocols", "smart contracts", "blockchain"],
    
    keyTerms: [
      { term: "eUTXO", slug: "eutxo", shortDefinition: "Extended UTXO model combining Bitcoin security with smart contract flexibility" },
      { term: "ErgoScript", slug: "ergoscript", shortDefinition: "Functional smart contract language with native Sigma Protocol support" },
      { term: "NiPoPoWs", slug: "nipopows", shortDefinition: "Proofs that compress blockchain history to kilobytes" },
      { term: "Boxes", slug: "boxes", shortDefinition: "eUTXO containers holding value, tokens, and contract data" },
      { term: "Subblocks", slug: "subblocks", shortDefinition: "Technology for faster transaction confirmations" },
      { term: "Velvet Forks", slug: "velvet-forks", shortDefinition: "Soft protocol upgrades without hard forks" }
    ],
    
    relatedQuestions: [
      { question: "What is eUTXO?", slug: "what-is-eutxo" },
      { question: "How does ErgoScript work?", slug: "how-ergoscript-works" },
      { question: "What are NiPoPoWs?", slug: "what-are-nipopows" },
      { question: "What is storage rent?", slug: "what-is-storage-rent" }
    ],
    
    relatedTopics: ["ergo-defi", "ergo-privacy", "ergo-mining"],
    
    icon: "Code",
    color: "blue",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // ==================== PHILOSOPHY / FREEDOM ====================
  {
    slug: "ergo-philosophy",
    title: "Ergo Philosophy",
    subtitle: "Cypherpunk Values for Financial Freedom",
    seoTitle: "Ergo Philosophy — Fair Launch & Cypherpunk Values | Ergo",
    seoDescription: "Money without masters. Fair launch, no pre-mine, no VC control. Cypherpunk values, financial sovereignty, open-source community.",
    keywords: ["Ergo philosophy", "cypherpunk", "fair launch", "financial freedom", "decentralization", "money without masters"],
    
    heroStatement: "Money without masters. Finance without permission.",
    
    introduction: "Ergo isn't just a blockchain - it's a statement about what cryptocurrency should be. In a world where most 'crypto' projects are VC-backed, pre-mined, and designed for extraction, Ergo represents a return to first principles. No pre-mine. No ICO. No VC allocation. 100% of ERG comes from mining, just like Bitcoin. This isn't idealism; it's the foundation for genuine decentralization. When no insider group controls a majority of tokens, governance is actually decentralized. When there's no VC exit to fund, development serves users, not investors.",
    
    whatMakesUnique: "Ergo was built by people who remember why Bitcoin was created: to provide an alternative to a financial system that serves the powerful at the expense of everyone else. The Ergo Manifesto articulates a vision of financial tools for ordinary people, not just sophisticated traders or wealthy investors. Privacy is a right, not a feature to be regulated away. Self-custody is the default, not an option. And the technology is designed to remain accessible - ASIC-resistant mining, light clients, low fees - so that participation isn't limited to those with resources.",
    
    keyDifferentiators: [
      "Fair launch: no pre-mine, no ICO, no VC allocation",
      "Cypherpunk values: privacy, self-custody, censorship resistance",
      "Community-owned: no controlling foundation or company",
      "Accessible: designed for ordinary people, not just institutions",
      "Long-term thinking: sustainability over short-term gains"
    ],
    
    sections: [
      { id: "manifesto", title: "The Ergo Manifesto", description: "Core principles and vision" },
      { id: "fair-launch", title: "Fair Launch", description: "Why distribution matters" },
      { id: "freedom", title: "Financial Freedom", description: "Tools for sovereignty" },
      { id: "future", title: "Building the Future", description: "What we're working toward" }
    ],
    
    startHere: [
      { type: "blog", title: "Ergo Manifesto", url: "/blog/ergo-manifesto", description: "The founding vision of Ergo", badge: "Essential", priority: 1 },
      { type: "infographic", title: "Money Without Masters", url: "/infographics/money-without-masters-ergo-vs-banks-and-vc-crypto", description: "Ergo vs traditional finance and VC crypto", badge: "Visual", priority: 1 },
      { type: "infographic", title: "Who Actually Needs Ergo", url: "/infographics/who-actually-needs-ergo", description: "Real-world use cases for financial freedom", badge: "Use Cases", priority: 1 }
    ],
    
    buildWithIt: [
      { type: "playbook", title: "Escape Financial Repression", url: "/playbooks/escape-financial-repression", description: "Practical guide to financial sovereignty", badge: "Guide", priority: 1 },
      { type: "glossary", title: "Fair Launch", url: "/learn/glossary/fair-launch", description: "What fair launch means", badge: "Concept", priority: 1 },
      { type: "compare", title: "Ergo vs VC Chains", url: "/compare/ergo-vs-vc-chain", description: "Why fair launch matters", badge: "Comparison", priority: 2 }
    ],
    
    philosophy: [
      { type: "infographic", title: "Financial Repression Stack", url: "/infographics/what-we-are-fighting-against-financial-repression-stack", description: "What we're building against", badge: "Context", priority: 1 },
      { type: "infographic", title: "Powered by Builders", url: "/infographics/powered-by-builders-designed-for-freedom", description: "Community-driven development", badge: "Community", priority: 1 },
      { type: "infographic", title: "VC Chain vs Ergo", url: "/infographics/vc-chain-vs-ergo-fair-launch", description: "Fair launch vs VC funding", badge: "Comparison", priority: 2 }
    ],
    
    visuals: [
      { type: "infographic", title: "Who Starts With Coins", url: "/infographics/who-starts-with-the-coins-vc-allocation-vs-ergo-supply", description: "Token distribution comparison", priority: 1 },
      { type: "infographic", title: "How It Starts", url: "/infographics/how-it-starts-vc-chain-vs-ergo", description: "Project origins comparison", priority: 2 },
      { type: "infographic", title: "Engineered for Global Settlement", url: "/infographics/engineered-for-global-settlement-ergo", description: "Long-term vision", priority: 2 }
    ],
    
    relatedTags: ["philosophy", "cypherpunk", "fair launch", "freedom", "decentralization", "manifesto", "sovereignty"],
    
    keyTerms: [
      { term: "Fair Launch", slug: "fair-launch", shortDefinition: "No pre-mine, no ICO, no insider allocation - 100% mined" },
      { term: "Cypherpunk", slug: "cypherpunk", shortDefinition: "Movement advocating privacy and cryptography for social change" },
      { term: "Self-Custody", slug: "self-custody", shortDefinition: "Holding your own keys, controlling your own assets" },
      { term: "Censorship Resistance", slug: "censorship-resistance", shortDefinition: "Ability to transact without permission from any authority" },
      { term: "Financial Sovereignty", slug: "financial-sovereignty", shortDefinition: "Complete control over your financial life" }
    ],
    
    relatedQuestions: [
      { question: "Why does fair launch matter?", slug: "why-ergo-fair-launch-matters" },
      { question: "How to escape financial repression?", slug: "how-to-escape-financial-repression-with-ergo" },
      { question: "Is Ergo a good investment?", slug: "is-ergo-a-good-investment" }
    ],
    
    relatedTopics: ["ergo-privacy", "ergo-mining"],
    
    icon: "Lightbulb",
    color: "rose",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // ==================== SUSTAINABILITY ====================
  {
    slug: "ergo-sustainability",
    title: "Ergo Sustainability",
    subtitle: "Built to Last: Long-Term Economics and Security",
    seoTitle: "Ergo Sustainability — Storage Rent & Long-Term Security | Ergo",
    seoDescription: "How Ergo stays sustainable forever. Storage rent for miner revenue, capped emission, state management. Economic security beyond block rewards.",
    keywords: ["Ergo sustainability", "storage rent", "emission schedule", "blockchain sustainability", "miner revenue", "state bloat"],
    
    heroStatement: "A blockchain designed for centuries, not quarters.",
    
    introduction: "Most blockchains face a fundamental problem: what happens when block rewards run out? Bitcoin's security budget relies on fees that may not materialize. PoS chains depend on perpetual inflation. Ergo solves this with storage rent - a small fee on dormant UTXOs that provides sustainable miner revenue forever. Combined with a carefully designed emission schedule and state management, Ergo is built for genuine long-term sustainability, not just the next market cycle.",
    
    whatMakesUnique: "Storage rent isn't just about miner revenue - it's about blockchain health. By incentivizing the cleanup of unused state, Ergo prevents the bloat that makes full nodes increasingly expensive to run. Lost coins gradually return to circulation instead of being locked forever. And because rent is only charged on boxes untouched for 4+ years, active users are unaffected. This is sustainability through design, not hope.",
    
    keyDifferentiators: [
      "Storage rent: sustainable miner revenue after emission ends",
      "State cleanup: incentivizes removing unused data",
      "Lost coin recovery: dormant coins return to circulation",
      "Predictable emission: known supply schedule",
      "Full node affordability: manageable state size forever"
    ],
    
    sections: [
      { id: "overview", title: "Sustainability Overview", description: "How Ergo ensures long-term viability" },
      { id: "storage-rent", title: "Storage Rent", description: "The key sustainability mechanism" },
      { id: "economics", title: "Economic Model", description: "Emission, fees, and incentives" },
      { id: "future", title: "Long-Term Vision", description: "Ergo in 50+ years" }
    ],
    
    startHere: [
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", description: "Core sustainability mechanism", badge: "Core", priority: 1 },
      { type: "infographic", title: "Three Pillars", url: "/infographics/three-pillars-ergos-sustainability", description: "Ergo's sustainability model", badge: "Visual", priority: 1 },
      { type: "blog", title: "Storage Rent Explained", url: "/blog/storage-rent", description: "Deep dive into storage rent", badge: "Essential", priority: 1 }
    ],
    
    buildWithIt: [
      { type: "glossary", title: "Storage Rent", url: "/learn/glossary/storage-rent", description: "Technical definition", badge: "Concept", priority: 1 },
      { type: "glossary", title: "Emission Schedule", url: "/learn/glossary/emission-schedule", description: "ERG supply schedule", badge: "Economics", priority: 1 },
      { type: "technology", title: "Adaptive Emission", url: "/technology/adaptive-emission", description: "Dynamic emission adjustments", badge: "Technical", priority: 2 }
    ],
    
    philosophy: [
      { type: "infographic", title: "Storage Rent vs State Bloat", url: "/infographics/storage-rent-vs-state-bloat-ergo", description: "Why storage rent matters", badge: "Comparison", priority: 1 },
      { type: "infographic", title: "Engineered for Global Settlement", url: "/infographics/engineered-for-global-settlement-ergo", description: "Long-term vision", badge: "Vision", priority: 2 }
    ],
    
    visuals: [
      { type: "infographic", title: "Storage Rent Infographic", url: "/infographics/ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners", description: "Visual explanation", priority: 1 }
    ],
    
    relatedTags: ["sustainability", "storage rent", "emission", "economics", "long-term", "miners"],
    
    keyTerms: [
      { term: "Storage Rent", slug: "storage-rent", shortDefinition: "Fee on dormant boxes providing sustainable miner revenue" },
      { term: "Emission Schedule", slug: "emission-schedule", shortDefinition: "Predetermined release of new ERG through mining" },
      { term: "State Bloat", slug: "state-bloat", shortDefinition: "Growth of blockchain state making nodes expensive" },
      { term: "Adaptive Emission", slug: "adaptive-emission", shortDefinition: "Dynamic adjustment of block rewards based on conditions" }
    ],
    
    relatedQuestions: [
      { question: "What is storage rent?", slug: "what-is-storage-rent" }
    ],
    
    relatedTopics: ["ergo-mining", "ergo-technology"],

    icon: "Leaf",
    color: "green",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // ==================== AGENT ECONOMY ====================
  {
    slug: "agent-economy",
    title: "Agent Economy on Ergo",
    subtitle: "The Base Layer for Autonomous Agent Payments",
    seoTitle: "Agent Economy on Ergo — AI Agent Payments, Notes & Reserves",
    seoDescription: "Ergo combines all four agent payment primitives at the protocol level: Reserve, Note, Tracker, and Acceptance Predicate. No identity, no gas bootstrapping, no governance kill switch.",
    keywords: ["agent economy", "AI agent payments", "autonomous agent blockchain", "ergo agent payments", "note reserve tracker", "acceptance predicate", "ChainCash", "Fleet SDK", "machine-to-machine payments", "programmable IOU"],

    heroStatement: "Every AI system will need to pay and be paid. Ergo already has the primitives.",

    introduction: "Autonomous AI agents are a fundamentally new kind of economic actor. They transact at machine speed, without persistent identity, at micropayment scale ($0.001 per API call), with conditional acceptance logic that no human-centric payment rail supports. Stripe requires KYC. Lightning requires persistent channels. Ethereum has non-deterministic gas and mandatory ETH pre-funding. Ergo is designed to satisfy the requirements agents have — at the protocol level, with no application-layer workarounds.",

    whatMakesUnique: "Ergo's agent payment stack consists of four composable UTxO primitives: Reserve (collateral backing), Note (programmable bearer IOU), Tracker (anti-double-spend registry), and Acceptance Predicate (on-chain task completion condition). These aren't features bolted on for AI — they're protocol properties that emerge from eUTXO's deterministic execution, ErgoScript's expressive power, and Babel Fees' gas abstraction. ChainCash is the live mainnet reference implementation.",

    keyDifferentiators: [
      "Notes: programmable bearer IOUs transferable between agents without issuer round-trips",
      "Acceptance Predicates: task completion logic enforced on-chain by miners, not your server",
      "Babel Fees: agents pay fees in any token — zero ERG bootstrapping required",
      "Deterministic eUTXO: agents know exact costs before submitting — no gas surprises",
      "PoW: no validator multisig that can freeze agent infrastructure"
    ],

    sections: [
      { id: "primitives", title: "The Four Primitives", description: "Reserve, Note, Tracker, Acceptance Predicate" },
      { id: "why-ergo", title: "Why Ergo", description: "What makes Ergo uniquely suited for agent commerce" },
      { id: "build", title: "Build", description: "SDKs, quickstart, examples" },
      { id: "reference", title: "Reference Implementation", description: "ChainCash on mainnet" }
    ],

    startHere: [
      { type: "blog", title: "Agent Economy Manifesto", url: "/blog/agent-economy-manifesto", description: "Why every AI agent will need to pay and be paid — and why Ergo already has the primitives", badge: "Start Here", priority: 1 },
      { type: "technology", title: "Agent Payments Architecture", url: "/build/agent-payments", description: "Reserve, Note, Tracker, Acceptance Predicate — the full technical reference", badge: "Architecture", priority: 1 },
      { type: "compare", title: "Ergo vs ETH vs SOL for Agents", url: "/agent-economy/vs", description: "10-criteria comparison across chains for agent-specific requirements", badge: "Comparison", priority: 1 }
    ],

    buildWithIt: [
      { type: "doc", title: "10-Minute Quickstart", url: "/build/quickstart", description: "First agent payment on Ergo testnet in under 10 minutes", badge: "Quickstart", priority: 1 },
      { type: "playbook", title: "7-Step Agent Economy Playbook", url: "/playbooks/build-agent-economy-apps", description: "From environment setup to mainnet deployment", badge: "Playbook", priority: 1 },
      { type: "doc", title: "GitHub: ergo-agent-economy", url: "https://github.com/bez111/ergo-agent-economy", description: "Open source examples: basic payment, Note IOU, acceptance predicate", badge: "Code", priority: 1 },
      { type: "doc", title: "Live Testnet Demos", url: "/demos", description: "Working agent payment flows — address lookup, live stats", badge: "Demo", priority: 2 }
    ],

    philosophy: [
      { type: "blog", title: "Why AI Agents Can't Use Stripe", url: "/blog/agents-cant-use-stripe", description: "The structural reasons every human-centric payment rail fails autonomous agents", badge: "Essential", priority: 1 },
      { type: "technology", title: "Agent Economy Hub", url: "/agent-economy", description: "The full narrative: why agents need new money primitives", badge: "Vision", priority: 1 }
    ],

    visuals: [],

    relatedTags: ["Agent Economy", "AI Payments", "Note", "Reserve", "Tracker", "Acceptance Predicate", "ChainCash", "Fleet SDK", "Babel Fees", "autonomous agents"],

    keyTerms: [
      { term: "Note", slug: "note-bearer-instrument", shortDefinition: "Programmable bearer IOU transferable between agents as payment" },
      { term: "Reserve", slug: "reserve-box", shortDefinition: "Collateral UTxO backing a Note issuance system" },
      { term: "Tracker", slug: "tracker-anti-double-spend", shortDefinition: "On-chain registry preventing double-redemption of Notes" },
      { term: "Acceptance Predicate", slug: "acceptance-predicate", shortDefinition: "ErgoScript condition encoding task completion in the payment itself" },
      { term: "Babel Fees", slug: "babel-fees-agent", shortDefinition: "Pay transaction fees in any token — agents don't need pre-funded ERG wallets" },
      { term: "ChainCash", slug: "chaincash", shortDefinition: "Live mainnet reference implementation of the Reserve+Note+Tracker stack" },
      { term: "Programmable IOU", slug: "programmable-iou", shortDefinition: "A Note with custom acceptance conditions enforced on-chain" },
      { term: "Agent Economy", slug: "agent-economy", shortDefinition: "The emerging system of autonomous AI agents transacting without human intermediaries" }
    ],

    relatedQuestions: [
      { question: "Why can't AI agents use Stripe?", slug: "why-cant-ai-agents-use-stripe" },
      { question: "What blockchain is best for AI agent payments?", slug: "best-blockchain-ai-agent-payments" },
      { question: "What is a Note in Ergo?", slug: "what-is-note-ergo" },
      { question: "How do Babel Fees work for agents?", slug: "how-babel-fees-work-agents" }
    ],

    relatedTopics: ["ergo-defi", "ergo-technology"],

    icon: "Bot",
    color: "orange",
    publishDate: "2026-03-20",
    updatedDate: "2026-03-20"
  }
];

// Helper functions
export function getTopicBySlug(slug: string): TopicHub | undefined {
  return topics.find(t => t.slug === slug);
}

export function getAllTopicSlugs(): string[] {
  return topics.map(t => t.slug);
}

export function getRelatedTopics(slugs: string[]): TopicHub[] {
  return topics.filter(t => slugs.includes(t.slug));
}

// Topic metadata for navigation
export const topicCategories = topics.map(t => ({
  slug: t.slug,
  title: t.title,
  subtitle: t.subtitle,
  icon: t.icon,
  color: t.color
}));

