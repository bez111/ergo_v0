// Q&A Hub - Programmatic SEO for long-tail queries
// Each question maps to existing content (docs, blog, playbooks, infographics, glossary)

export type QuestionIntent = 'how_to' | 'compare' | 'problem' | 'philosophy' | 'what_is';
export type QuestionPersona = 'builder' | 'miner' | 'investor' | 'freedom_seeker' | 'cypherpunk' | 'general';
export type QuestionStage = 'awareness' | 'consideration' | 'decision' | 'build';
export type ResourceType = 'doc' | 'blog' | 'playbook' | 'infographic' | 'glossary' | 'compare' | 'technology';
export type JsonLdType = 'FAQPage' | 'QAPage' | 'TechArticle' | 'HowTo';

export interface QuestionResource {
  type: ResourceType;
  title: string;
  url: string;
  badge?: string; // "Deep dive", "Visual", "For devs", "Beginner", etc.
}

export interface QuestionEntry {
  slug: string;
  query: string;
  intent: QuestionIntent;
  persona: QuestionPersona;
  stage: QuestionStage;
  category: string; // DeFi, Privacy, Mining, Technology, Philosophy, Getting Started
  shortAnswer: string; // 2-4 sentences, featured snippet style
  keyPoints?: string[]; // Bullet points under answer
  bestResources: QuestionResource[];
  relatedQuestions?: string[]; // slugs of related questions
  jsonLdType: JsonLdType;
  priority: 1 | 2 | 3; // 1 = highest
  seoTitle?: string;
  seoDescription?: string;
  publishDate: string;
  updatedDate?: string;
}

export const questions: QuestionEntry[] = [
  // === DEFI / BUILDING ===
  {
    slug: "how-to-build-defi-on-ergo",
    query: "How to build DeFi on Ergo?",
    intent: "how_to",
    persona: "builder",
    stage: "build",
    category: "DeFi",
    shortAnswer: "Building DeFi on Ergo starts with understanding the eUTXO model and ErgoScript. Unlike account-based chains, Ergo's box model provides deterministic execution, no MEV by design, and predictable gas costs. Use Oracle Pools for price feeds, and leverage existing patterns from Spectrum Finance and SigmaUSD.",
    keyPoints: [
      "Learn eUTXO fundamentals - boxes hold value, data, and spending conditions",
      "Master ErgoScript - Ergo's functional smart contract language",
      "Integrate Oracle Pools for reliable off-chain data",
      "Study existing DeFi: Spectrum (DEX), SigmaUSD (stablecoin), DuckPools (lending)"
    ],
    bestResources: [
      { type: "playbook", title: "Build DeFi on Ergo Playbook", url: "/playbooks/build-defi-on-ergo", badge: "Step-by-step" },
      { type: "technology", title: "eUTXO Model Explained", url: "/technology/eutxo-model", badge: "Foundation" },
      { type: "glossary", title: "What is eUTXO?", url: "/learn/glossary/eutxo", badge: "Concept" },
      { type: "infographic", title: "eUTXO vs Account Model", url: "/infographics/eutxo-vs-accounts-vs-classic-utxo", badge: "Visual" },
      { type: "blog", title: "Oracle Pools Explained", url: "/blog/oracle-pools-explained", badge: "Deep dive" }
    ],
    relatedQuestions: ["what-is-eutxo", "how-ergoscript-works", "ergo-vs-ethereum-for-defi"],
    jsonLdType: "HowTo",
    priority: 1,
    seoTitle: "How to Build DeFi on Ergo: Complete Developer Guide",
    seoDescription: "Step-by-step guide to building decentralized finance applications on Ergo using eUTXO, ErgoScript, and Oracle Pools. No MEV, predictable fees.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "what-is-eutxo",
    query: "What is eUTXO and how does it work?",
    intent: "what_is",
    persona: "builder",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "eUTXO (Extended Unspent Transaction Output) is Ergo's smart contract model that extends Bitcoin's UTXO with programmable logic. Each 'box' contains ERG, tokens, data registers, and a guarding script. Transactions consume boxes and create new ones, enabling deterministic execution, parallel processing, and no reentrancy attacks.",
    keyPoints: [
      "Boxes = UTXOs with superpowers: value + tokens + data + script",
      "Deterministic: execution cost known before sending",
      "Parallel: unrelated transactions process simultaneously",
      "Secure: no reentrancy, no front-running by design"
    ],
    bestResources: [
      { type: "technology", title: "eUTXO Model", url: "/technology/eutxo-model", badge: "Core concept" },
      { type: "glossary", title: "eUTXO Definition", url: "/learn/glossary/eutxo", badge: "Quick read" },
      { type: "infographic", title: "eUTXO Visual Guide", url: "/infographics/ergo-eutxo-model-bitcoin-security-smart-contract-flexibility", badge: "Visual" },
      { type: "blog", title: "eUTXO vs Accounts", url: "/blog/eutxo-vs-accounts", badge: "Comparison" },
      { type: "glossary", title: "What are Boxes?", url: "/learn/glossary/boxes", badge: "Related" }
    ],
    relatedQuestions: ["how-to-build-defi-on-ergo", "ergo-vs-ethereum-for-defi", "what-are-ergo-boxes"],
    jsonLdType: "TechArticle",
    priority: 1,
    seoTitle: "What is eUTXO? Extended UTXO Model Explained",
    seoDescription: "Learn how Ergo's eUTXO model combines Bitcoin's security with smart contract flexibility. Deterministic execution, no MEV, parallel processing.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "ergo-vs-ethereum-for-defi",
    query: "Is Ergo better than Ethereum for DeFi?",
    intent: "compare",
    persona: "builder",
    stage: "consideration",
    category: "DeFi",
    shortAnswer: "Ergo offers structural advantages for DeFi: no MEV extraction, deterministic gas costs, and no reentrancy attacks due to eUTXO. Ethereum has larger ecosystem and liquidity. Choose Ergo for security-critical applications, fair trading, and predictable costs. Choose Ethereum for maximum composability with existing protocols.",
    keyPoints: [
      "Ergo: No MEV, no front-running, no sandwich attacks",
      "Ergo: Predictable fees (~$0.01), known before sending",
      "Ergo: No reentrancy vulnerabilities by design",
      "Ethereum: Larger ecosystem, more liquidity, more tooling",
      "Trade-off: Security vs ecosystem size"
    ],
    bestResources: [
      { type: "compare", title: "Ergo vs Ethereum", url: "/compare/ergo-vs-ethereum", badge: "Full comparison" },
      { type: "infographic", title: "MEV Resistance", url: "/infographics/mev-resistance-vs-dark-forest", badge: "Visual" },
      { type: "glossary", title: "MEV Resistance", url: "/learn/glossary/mev-resistance", badge: "Concept" },
      { type: "technology", title: "eUTXO Model", url: "/technology/eutxo-model", badge: "Why it matters" },
      { type: "playbook", title: "Build DeFi on Ergo", url: "/playbooks/build-defi-on-ergo", badge: "Get started" }
    ],
    relatedQuestions: ["what-is-mev-resistance", "how-to-build-defi-on-ergo", "what-is-eutxo"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Ergo vs Ethereum for DeFi: Which is Better?",
    seoDescription: "Compare Ergo and Ethereum for DeFi development. MEV resistance, gas costs, security models, and ecosystem differences explained.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // === PRIVACY ===
  {
    slug: "is-ergo-better-than-monero-for-privacy",
    query: "Is Ergo better than Monero for privacy?",
    intent: "compare",
    persona: "freedom_seeker",
    stage: "consideration",
    category: "Privacy",
    shortAnswer: "Different privacy models for different needs. Monero provides always-on, protocol-level privacy with ring signatures. Ergo offers optional privacy via Sigma Protocols with selective disclosure - you can prove things about data without revealing the data. Ergo excels at programmable privacy (private smart contracts), while Monero excels at simple private transfers.",
    keyPoints: [
      "Monero: Always-on privacy, ring signatures, stealth addresses",
      "Ergo: Optional privacy via Sigma Protocols, selective disclosure",
      "Ergo: Programmable privacy - private smart contracts possible",
      "Monero: Simpler UX for basic private payments",
      "Ergo: Can prove compliance without revealing details"
    ],
    bestResources: [
      { type: "compare", title: "Ergo vs Monero", url: "/compare/ergo-vs-monero", badge: "Full comparison" },
      { type: "infographic", title: "Ergo vs Privacy Coins", url: "/infographics/ergo-vs-privacy-coins", badge: "Visual" },
      { type: "glossary", title: "Sigma Protocols", url: "/learn/glossary/sigma-protocols", badge: "Key concept" },
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", badge: "Deep dive" },
      { type: "blog", title: "Sigma Protocols Explained", url: "/blog/sigma-protocols-explained", badge: "Technical" }
    ],
    relatedQuestions: ["what-are-sigma-protocols", "how-private-is-ergo", "can-ergo-be-traced"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Ergo vs Monero Privacy: Which is Better?",
    seoDescription: "Compare Ergo and Monero privacy features. Sigma Protocols vs ring signatures, programmable privacy vs always-on privacy explained.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "what-are-sigma-protocols",
    query: "What are Sigma Protocols and how do they work?",
    intent: "what_is",
    persona: "cypherpunk",
    stage: "awareness",
    category: "Privacy",
    shortAnswer: "Sigma Protocols are zero-knowledge proof systems that let you prove statements about data without revealing the data itself. On Ergo, they're built into ErgoScript, enabling privacy-preserving smart contracts. You can prove you own funds, meet conditions, or belong to a group - all without exposing your identity or exact values.",
    keyPoints: [
      "Zero-knowledge: prove something is true without revealing why",
      "Built into ErgoScript: first-class privacy primitives",
      "Selective disclosure: reveal only what's needed",
      "Use cases: ring signatures, threshold signatures, private voting"
    ],
    bestResources: [
      { type: "glossary", title: "Sigma Protocols", url: "/learn/glossary/sigma-protocols", badge: "Definition" },
      { type: "blog", title: "Sigma Protocols Explained", url: "/blog/sigma-protocols-explained", badge: "Deep dive" },
      { type: "infographic", title: "Privacy But Auditable", url: "/infographics/privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins", badge: "Visual" },
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", badge: "Overview" },
      { type: "glossary", title: "ErgoMixer", url: "/learn/glossary/ergomixer", badge: "Application" }
    ],
    relatedQuestions: ["is-ergo-better-than-monero-for-privacy", "how-private-is-ergo", "what-is-ergomixer"],
    jsonLdType: "TechArticle",
    priority: 1,
    seoTitle: "What are Sigma Protocols? Zero-Knowledge Proofs on Ergo",
    seoDescription: "Learn how Sigma Protocols enable privacy-preserving smart contracts on Ergo. Zero-knowledge proofs, selective disclosure, and programmable privacy.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "how-private-is-ergo",
    query: "How private is Ergo blockchain?",
    intent: "what_is",
    persona: "freedom_seeker",
    stage: "awareness",
    category: "Privacy",
    shortAnswer: "Ergo is not private by default like Monero, but offers powerful optional privacy tools. ErgoMixer provides non-interactive, non-custodial mixing. Sigma Protocols enable zero-knowledge proofs in smart contracts. Stealth addresses hide recipients. The key difference: Ergo's privacy is programmable - you choose when and how much to reveal.",
    keyPoints: [
      "Optional privacy: transparent by default, private when needed",
      "ErgoMixer: non-custodial, non-interactive token mixing",
      "Sigma Protocols: prove things without revealing data",
      "Stealth addresses: hide transaction recipients",
      "Programmable: privacy logic in smart contracts"
    ],
    bestResources: [
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", badge: "Overview" },
      { type: "glossary", title: "ErgoMixer", url: "/learn/glossary/ergomixer", badge: "Tool" },
      { type: "infographic", title: "Ergo Privacy", url: "/infographics/ergo-privacy-non-interactive-efficient", badge: "Visual" },
      { type: "blog", title: "Sigma Protocols Explained", url: "/blog/sigma-protocols-explained", badge: "Technical" },
      { type: "compare", title: "Ergo vs Monero", url: "/compare/ergo-vs-monero", badge: "Comparison" }
    ],
    relatedQuestions: ["what-are-sigma-protocols", "is-ergo-better-than-monero-for-privacy", "what-is-ergomixer"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "How Private is Ergo? Privacy Features Explained",
    seoDescription: "Understand Ergo's privacy model: ErgoMixer, Sigma Protocols, stealth addresses. Optional, programmable privacy for smart contracts.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // === FINANCIAL FREEDOM / PHILOSOPHY ===
  {
    slug: "how-to-escape-financial-repression-with-ergo",
    query: "How to escape financial repression with Ergo?",
    intent: "problem",
    persona: "freedom_seeker",
    stage: "consideration",
    category: "Philosophy",
    shortAnswer: "Ergo provides tools for financial sovereignty: self-custody with no third parties, censorship-resistant transactions via PoW, optional privacy with Sigma Protocols, and programmable money without permission. Unlike VC-backed chains, Ergo has no central authority that can freeze funds or comply with sanctions. Your keys, your coins, your freedom.",
    keyPoints: [
      "Self-custody: no banks, no intermediaries, no permission needed",
      "Censorship-resistant: PoW mining, no validator committees to pressure",
      "Optional privacy: Sigma Protocols, ErgoMixer for when you need it",
      "Fair launch: no VC control, no pre-mine, community-owned",
      "Programmable: build your own financial tools"
    ],
    bestResources: [
      { type: "playbook", title: "Escape Financial Repression", url: "/playbooks/escape-financial-repression", badge: "Guide" },
      { type: "infographic", title: "Financial Repression Stack", url: "/infographics/what-we-are-fighting-against-financial-repression-stack", badge: "Visual" },
      { type: "infographic", title: "Money Without Masters", url: "/infographics/money-without-masters-ergo-vs-banks-and-vc-crypto", badge: "Philosophy" },
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", badge: "Tools" },
      { type: "compare", title: "Ergo vs VC Chains", url: "/compare/ergo-vs-vc-chain", badge: "Why it matters" }
    ],
    relatedQuestions: ["why-ergo-fair-launch-matters", "is-ergo-censorship-resistant", "how-private-is-ergo"],
    jsonLdType: "HowTo",
    priority: 1,
    seoTitle: "How to Escape Financial Repression with Ergo",
    seoDescription: "Use Ergo for financial freedom: self-custody, censorship resistance, optional privacy. No banks, no VC control, no permission needed.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "why-ergo-fair-launch-matters",
    query: "Why does Ergo's fair launch matter?",
    intent: "philosophy",
    persona: "cypherpunk",
    stage: "awareness",
    category: "Philosophy",
    shortAnswer: "Ergo had no pre-mine, no ICO, no VC allocation. 100% of ERG comes from mining. This means no insiders dumping on you, no VCs controlling governance, no foundation with majority stake. Fair launch creates genuine decentralization - the network belongs to miners and users, not early investors seeking exit liquidity.",
    keyPoints: [
      "No pre-mine: zero coins existed before mining started",
      "No ICO/IEO: no token sale to insiders or VCs",
      "No VC allocation: no investors with governance power",
      "Genuine decentralization: network owned by participants",
      "Aligned incentives: builders and users, not extractors"
    ],
    bestResources: [
      { type: "infographic", title: "VC Chain vs Ergo", url: "/infographics/vc-chain-vs-ergo-fair-launch", badge: "Visual" },
      { type: "infographic", title: "Who Starts With Coins", url: "/infographics/who-starts-with-the-coins-vc-allocation-vs-ergo-supply", badge: "Data" },
      { type: "glossary", title: "Fair Launch", url: "/learn/glossary/fair-launch", badge: "Definition" },
      { type: "compare", title: "Ergo vs VC Chains", url: "/compare/ergo-vs-vc-chain", badge: "Comparison" },
      { type: "blog", title: "Ergo Manifesto", url: "/blog/ergo-manifesto", badge: "Philosophy" }
    ],
    relatedQuestions: ["how-to-escape-financial-repression-with-ergo", "is-ergo-decentralized", "who-controls-ergo"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Why Ergo's Fair Launch Matters: No Pre-mine, No VC",
    seoDescription: "Ergo's fair launch: no pre-mine, no ICO, no VC allocation. 100% mined. Why this creates genuine decentralization and aligned incentives.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // === MINING ===
  {
    slug: "how-to-mine-ergo",
    query: "How to mine Ergo?",
    intent: "how_to",
    persona: "miner",
    stage: "build",
    category: "Mining",
    shortAnswer: "Ergo uses Autolykos v2, a memory-hard, ASIC-resistant PoW algorithm. You can mine with consumer GPUs (4GB+ VRAM). Steps: get a wallet, choose mining software (lolMiner, T-Rex, Nanominer), join a pool (Herominers, 2Miners, Nanopool), configure your miner with pool address and wallet. Solo mining is possible but pools provide steadier income.",
    keyPoints: [
      "GPU mining: works with 4GB+ VRAM cards (AMD/NVIDIA)",
      "ASIC-resistant: Autolykos v2 levels the playing field",
      "Pool mining recommended: steadier rewards for most miners",
      "Software: lolMiner, T-Rex, Nanominer, SRBMiner",
      "Profitability: check whattomine.com for current rates"
    ],
    bestResources: [
      { type: "playbook", title: "Start Mining Ergo", url: "/playbooks/start-mining-ergo", badge: "Step-by-step" },
      { type: "glossary", title: "Autolykos", url: "/learn/glossary/autolykos", badge: "Algorithm" },
      { type: "infographic", title: "Autolykos Mining", url: "/infographics/autolykos-mining-without-masters", badge: "Visual" },
      { type: "technology", title: "Secure PoW", url: "/technology/secure-pow", badge: "Technical" },
      { type: "doc", title: "Mining Setup Guide", url: "/docs/miners/mining-setup", badge: "Documentation" }
    ],
    relatedQuestions: ["is-ergo-mining-profitable", "what-is-autolykos", "best-gpu-for-ergo-mining"],
    jsonLdType: "HowTo",
    priority: 1,
    seoTitle: "How to Mine Ergo: Complete GPU Mining Guide",
    seoDescription: "Start mining Ergo with your GPU. Autolykos v2 setup guide: wallet, software, pools, configuration. ASIC-resistant, 4GB+ VRAM.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "what-is-autolykos",
    query: "What is Autolykos and how does it work?",
    intent: "what_is",
    persona: "miner",
    stage: "awareness",
    category: "Mining",
    shortAnswer: "Autolykos is Ergo's memory-hard Proof-of-Work algorithm designed for GPU mining. It requires significant RAM (currently ~2.5GB), making ASIC development uneconomical. Autolykos v2 (current version) allows pool mining while maintaining ASIC resistance. The algorithm promotes decentralization by keeping mining accessible to consumer hardware.",
    keyPoints: [
      "Memory-hard: requires RAM, not just raw compute power",
      "ASIC-resistant: consumer GPUs remain competitive",
      "v2 upgrade: enabled pool mining (2021)",
      "Decentralization: accessible to home miners",
      "Fair: no mining advantage from specialized hardware"
    ],
    bestResources: [
      { type: "glossary", title: "Autolykos", url: "/learn/glossary/autolykos", badge: "Definition" },
      { type: "infographic", title: "Autolykos Mining", url: "/infographics/autolykos-mining-without-masters", badge: "Visual" },
      { type: "technology", title: "Secure PoW", url: "/technology/secure-pow", badge: "Technical" },
      { type: "infographic", title: "PoW vs PoS", url: "/infographics/pow-vs-pos-censorship-and-attack-surface", badge: "Comparison" },
      { type: "playbook", title: "Start Mining", url: "/playbooks/start-mining-ergo", badge: "Get started" }
    ],
    relatedQuestions: ["how-to-mine-ergo", "is-ergo-asic-resistant", "why-proof-of-work"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "What is Autolykos? Ergo's ASIC-Resistant Mining Algorithm",
    seoDescription: "Autolykos explained: Ergo's memory-hard PoW algorithm for GPU mining. ASIC-resistant, decentralized, accessible to consumer hardware.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // === TECHNOLOGY ===
  {
    slug: "what-is-storage-rent",
    query: "What is storage rent on Ergo?",
    intent: "what_is",
    persona: "builder",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "Storage rent is Ergo's solution to state bloat. Boxes (UTXOs) that remain unspent for 4+ years can have a small fee deducted by miners. This incentivizes cleaning up unused state, provides long-term miner revenue after emission ends, and keeps the blockchain sustainable. Lost coins eventually return to circulation instead of being locked forever.",
    keyPoints: [
      "4-year grace period: no rent for actively used boxes",
      "Miner revenue: sustainable income after block rewards end",
      "State cleanup: incentivizes removing unused data",
      "Lost coin recovery: dormant coins gradually return to circulation",
      "Sustainability: prevents infinite state growth"
    ],
    bestResources: [
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", badge: "Overview" },
      { type: "glossary", title: "Storage Rent", url: "/learn/glossary/storage-rent", badge: "Definition" },
      { type: "infographic", title: "Storage Rent Explained", url: "/infographics/ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners", badge: "Visual" },
      { type: "blog", title: "Storage Rent Deep Dive", url: "/blog/storage-rent", badge: "Technical" },
      { type: "infographic", title: "Storage Rent vs State Bloat", url: "/infographics/storage-rent-vs-state-bloat-ergo", badge: "Comparison" }
    ],
    relatedQuestions: ["how-ergo-stays-sustainable", "what-happens-to-lost-ergo", "why-storage-rent-matters"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "What is Storage Rent? Ergo's Solution to State Bloat",
    seoDescription: "Storage rent on Ergo: how it prevents blockchain bloat, provides miner revenue, and recovers lost coins. 4-year grace period explained.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "what-are-nipopows",
    query: "What are NiPoPoWs and why do they matter?",
    intent: "what_is",
    persona: "builder",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) are cryptographic proofs that compress blockchain history. Instead of downloading gigabytes of blocks, light clients can verify the chain with just kilobytes of data. This enables true trustless light wallets, efficient cross-chain bridges, and sidechains - all without trusting third parties.",
    keyPoints: [
      "Compression: verify chain with kilobytes, not gigabytes",
      "Trustless light clients: no need to trust servers",
      "Cross-chain bridges: efficient verification across chains",
      "Sidechains: secure communication with main chain",
      "Mobile-friendly: full security on resource-limited devices"
    ],
    bestResources: [
      { type: "technology", title: "NiPoPoWs", url: "/technology/nipopows", badge: "Overview" },
      { type: "glossary", title: "NiPoPoWs", url: "/learn/glossary/nipopows", badge: "Definition" },
      { type: "infographic", title: "NiPoPoWs Explained", url: "/infographics/ergo-nipopows-scalable-trustless-light-clients", badge: "Visual" },
      { type: "blog", title: "NiPoPoWs Deep Dive", url: "/blog/nipopows-explained", badge: "Technical" },
      { type: "glossary", title: "Light Clients", url: "/learn/glossary/light-clients", badge: "Related" }
    ],
    relatedQuestions: ["how-ergo-enables-light-clients", "what-are-ergo-bridges", "why-nipopows-matter-for-scaling"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "What are NiPoPoWs? Trustless Light Clients Explained",
    seoDescription: "NiPoPoWs on Ergo: compress blockchain proofs from gigabytes to kilobytes. Enable trustless light wallets, bridges, and sidechains.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "what-is-mev-resistance",
    query: "What is MEV resistance and why does Ergo have it?",
    intent: "what_is",
    persona: "builder",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "MEV (Maximal Extractable Value) is profit extracted by reordering, inserting, or censoring transactions - think front-running and sandwich attacks. Ergo's eUTXO model provides structural MEV resistance: transactions reference specific boxes (UTXOs), making reordering attacks much harder. There's no shared global state to exploit like in account-based chains.",
    keyPoints: [
      "MEV = value extracted by manipulating transaction order",
      "eUTXO protection: transactions reference specific boxes",
      "No global state: harder to front-run or sandwich",
      "Predictable execution: know exactly what will happen",
      "Fair trading: no 'dark forest' dynamics"
    ],
    bestResources: [
      { type: "glossary", title: "MEV Resistance", url: "/learn/glossary/mev-resistance", badge: "Definition" },
      { type: "infographic", title: "MEV Resistance vs Dark Forest", url: "/infographics/mev-resistance-vs-dark-forest", badge: "Visual" },
      { type: "technology", title: "eUTXO Model", url: "/technology/eutxo-model", badge: "Why it works" },
      { type: "compare", title: "Ergo vs Ethereum", url: "/compare/ergo-vs-ethereum", badge: "Comparison" },
      { type: "playbook", title: "Build DeFi on Ergo", url: "/playbooks/build-defi-on-ergo", badge: "Apply it" }
    ],
    relatedQuestions: ["ergo-vs-ethereum-for-defi", "what-is-eutxo", "how-to-build-defi-on-ergo"],
    jsonLdType: "TechArticle",
    priority: 1,
    seoTitle: "What is MEV Resistance? Why Ergo Has No Front-Running",
    seoDescription: "MEV resistance on Ergo: how eUTXO prevents front-running, sandwich attacks, and value extraction. No dark forest, fair trading.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // === GETTING STARTED ===
  {
    slug: "how-to-get-started-with-ergo",
    query: "How to get started with Ergo?",
    intent: "how_to",
    persona: "general",
    stage: "awareness",
    category: "Getting Started",
    shortAnswer: "Start by getting a wallet (Nautilus for browser, Terminus for mobile). Back up your seed phrase securely offline. Get some ERG from an exchange (Gate.io, KuCoin) or DEX (Spectrum). Make a test transaction. Then explore: try DeFi on Spectrum, check out NFTs, or dive into the technology if you're a builder.",
    keyPoints: [
      "Wallet: Nautilus (browser), Terminus (mobile), Satergo (desktop)",
      "Seed phrase: write it down, store offline, never share",
      "Get ERG: exchanges (Gate.io, KuCoin) or Spectrum DEX",
      "Test: send a small transaction to yourself",
      "Explore: DeFi, NFTs, mining, or building"
    ],
    bestResources: [
      { type: "doc", title: "Getting Started Guide", url: "/start/introduction", badge: "Start here" },
      { type: "doc", title: "Wallet Setup", url: "/wallet", badge: "Step 1" },
      { type: "blog", title: "Ergo in 5 Minutes", url: "/blog/ergo-in-5-minutes", badge: "Quick intro" },
      { type: "playbook", title: "Add Ergo to Portfolio", url: "/playbooks/add-ergo-to-portfolio", badge: "For investors" },
      { type: "infographic", title: "Ergo Introduction", url: "/infographics/ergo-blockchain-introduction-fundamentals", badge: "Visual" }
    ],
    relatedQuestions: ["where-to-buy-ergo", "best-ergo-wallet", "what-can-i-do-with-ergo"],
    jsonLdType: "HowTo",
    priority: 1,
    seoTitle: "How to Get Started with Ergo: Beginner's Guide",
    seoDescription: "Start using Ergo: wallet setup, buying ERG, first transaction. Complete beginner's guide to the Ergo blockchain.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "where-to-buy-ergo",
    query: "Where to buy ERG?",
    intent: "how_to",
    persona: "investor",
    stage: "decision",
    category: "Getting Started",
    shortAnswer: "ERG is available on centralized exchanges (Gate.io, KuCoin, Bitmart) and decentralized exchanges (Spectrum Finance on Ergo, Rosen Bridge from other chains). For self-custody, buy on an exchange and withdraw to your Nautilus or Terminus wallet. For maximum decentralization, use Spectrum DEX directly with a non-custodial wallet.",
    keyPoints: [
      "Centralized: Gate.io, KuCoin, Bitmart, CoinEx",
      "Decentralized: Spectrum Finance (native DEX)",
      "Cross-chain: Rosen Bridge from Cardano, Bitcoin",
      "Self-custody: always withdraw to your own wallet",
      "Verify: check official links, avoid scams"
    ],
    bestResources: [
      { type: "doc", title: "Get ERG", url: "/use/get-erg", badge: "Official guide" },
      { type: "playbook", title: "Add Ergo to Portfolio", url: "/playbooks/add-ergo-to-portfolio", badge: "Investment guide" },
      { type: "doc", title: "Wallet Setup", url: "/wallet", badge: "Store safely" },
      { type: "glossary", title: "Bridges", url: "/learn/glossary/bridges", badge: "Cross-chain" },
      { type: "doc", title: "DeFi on Ergo", url: "/use/defi", badge: "DEX trading" }
    ],
    relatedQuestions: ["how-to-get-started-with-ergo", "best-ergo-wallet", "is-ergo-a-good-investment"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Where to Buy ERG: Exchanges and DEX Guide",
    seoDescription: "Buy ERG on Gate.io, KuCoin, or Spectrum DEX. Complete guide to purchasing Ergo tokens safely.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "is-ergo-a-good-investment",
    query: "Is Ergo a good investment?",
    intent: "compare",
    persona: "investor",
    stage: "consideration",
    category: "Getting Started",
    shortAnswer: "This is not financial advice. Ergo has strong fundamentals: fair launch (no VC dump risk), innovative technology (eUTXO, Sigma Protocols, NiPoPoWs), active development, and a cypherpunk ethos. It's a smaller market cap project with higher risk/reward than established chains. Research thoroughly, understand the technology, and never invest more than you can afford to lose.",
    keyPoints: [
      "Fair launch: no insider allocations to dump",
      "Technology: unique innovations (eUTXO, Sigma, NiPoPoWs)",
      "Active development: consistent progress since 2019",
      "Small cap: higher volatility, higher risk/reward",
      "DYOR: this is not financial advice"
    ],
    bestResources: [
      { type: "playbook", title: "Add Ergo to Portfolio", url: "/playbooks/add-ergo-to-portfolio", badge: "Research guide" },
      { type: "infographic", title: "VC Chain vs Ergo", url: "/infographics/vc-chain-vs-ergo-fair-launch", badge: "Fair launch" },
      { type: "blog", title: "Ergo Manifesto", url: "/blog/ergo-manifesto", badge: "Philosophy" },
      { type: "technology", title: "Technology Overview", url: "/technology", badge: "Fundamentals" },
      { type: "compare", title: "Ergo vs Bitcoin", url: "/compare/ergo-vs-bitcoin", badge: "Comparison" }
    ],
    relatedQuestions: ["why-ergo-fair-launch-matters", "where-to-buy-ergo", "what-makes-ergo-different"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Is Ergo a Good Investment? Fundamentals Analysis",
    seoDescription: "Ergo investment analysis: fair launch, technology, development activity. Not financial advice - research guide for potential investors.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // === ERGOSCRIPT / DEVELOPMENT ===
  {
    slug: "how-ergoscript-works",
    query: "How does ErgoScript work?",
    intent: "what_is",
    persona: "builder",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "ErgoScript is Ergo's smart contract language - a functional, Scala-based DSL that compiles to ErgoTree. Unlike Solidity's imperative style, ErgoScript is declarative: you define conditions that must be true for a transaction to be valid. It has built-in Sigma Protocol support for zero-knowledge proofs and operates on the eUTXO model where scripts guard boxes.",
    keyPoints: [
      "Functional: declarative conditions, not imperative code",
      "Scala-based: familiar syntax for JVM developers",
      "Sigma Protocols: native zero-knowledge proof support",
      "Box-guarding: scripts protect UTXOs, not accounts",
      "Deterministic: predictable execution, known costs"
    ],
    bestResources: [
      { type: "technology", title: "ErgoScript", url: "/technology/ergoscript", badge: "Overview" },
      { type: "glossary", title: "ErgoScript", url: "/learn/glossary/ergoscript", badge: "Definition" },
      { type: "infographic", title: "ErgoScript Cypherpunk", url: "/infographics/ergoscript-cypherpunk-code-of-freedom", badge: "Visual" },
      { type: "doc", title: "ErgoScript Tutorial", url: "/learn/ergoscript", badge: "Learn" },
      { type: "playbook", title: "Build DeFi", url: "/playbooks/build-defi-on-ergo", badge: "Apply it" }
    ],
    relatedQuestions: ["what-is-eutxo", "how-to-build-defi-on-ergo", "ergo-vs-ethereum-for-defi"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "How ErgoScript Works: Smart Contracts on Ergo",
    seoDescription: "ErgoScript explained: functional smart contracts, Sigma Protocols, eUTXO model. Learn Ergo's declarative contract language.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // === ECOSYSTEM ===
  {
    slug: "what-is-sigmausd",
    query: "What is SigmaUSD and how does it work?",
    intent: "what_is",
    persona: "general",
    stage: "awareness",
    category: "DeFi",
    shortAnswer: "SigmaUSD is Ergo's algorithmic stablecoin, pegged to USD and backed by ERG reserves. It uses the AgeUSD protocol: users mint SigUSD by depositing ERG, while SigRSV holders provide reserve backing and absorb volatility. The reserve ratio (400-800%) ensures stability. No centralized issuer, no bank accounts - pure crypto collateral.",
    keyPoints: [
      "Algorithmic: no centralized issuer or bank backing",
      "ERG-collateralized: 400-800% reserve ratio",
      "SigRSV: reserve token absorbs ERG volatility",
      "AgeUSD protocol: proven stablecoin mechanism",
      "Decentralized: smart contract controlled"
    ],
    bestResources: [
      { type: "glossary", title: "SigmaUSD", url: "/learn/glossary/sigmausd", badge: "Definition" },
      { type: "doc", title: "Stablecoins on Ergo", url: "/use/stablecoins", badge: "Overview" },
      { type: "glossary", title: "Stablecoins", url: "/learn/glossary/stablecoins", badge: "Concept" },
      { type: "playbook", title: "Build DeFi", url: "/playbooks/build-defi-on-ergo", badge: "Related" },
      { type: "technology", title: "Oracle Pools", url: "/technology/oracle-pools", badge: "Price feeds" }
    ],
    relatedQuestions: ["how-to-build-defi-on-ergo", "what-is-sigrv", "is-sigmausd-safe"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "What is SigmaUSD? Ergo's Algorithmic Stablecoin",
    seoDescription: "SigmaUSD explained: ERG-backed stablecoin using AgeUSD protocol. 400-800% reserve ratio, decentralized, no bank backing.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },
  {
    slug: "what-is-rosen-bridge",
    query: "What is Rosen Bridge?",
    intent: "what_is",
    persona: "general",
    stage: "awareness",
    category: "DeFi",
    shortAnswer: "Rosen Bridge is Ergo's cross-chain bridge protocol for trustless asset transfers between blockchains. It connects Ergo with Cardano, Bitcoin (Runes), and Dogecoin. Unlike centralized bridges, Rosen uses a decentralized watcher network and multi-sig security. Bring assets to Ergo's DeFi ecosystem or move ERG to other chains.",
    keyPoints: [
      "Cross-chain: Ergo <-> Cardano, Bitcoin, Dogecoin",
      "Decentralized: watcher network, not centralized custodian",
      "Multi-sig security: distributed key management",
      "Trustless: verify on both chains",
      "Growing: more chains being added"
    ],
    bestResources: [
      { type: "glossary", title: "Bridges", url: "/learn/glossary/bridges", badge: "Concept" },
      { type: "doc", title: "Bridges on Ergo", url: "/use/bridges", badge: "Overview" },
      { type: "technology", title: "NiPoPoWs", url: "/technology/nipopows", badge: "Enabling tech" },
      { type: "playbook", title: "Build DeFi", url: "/playbooks/build-defi-on-ergo", badge: "Use case" },
      { type: "compare", title: "Ergo vs Cardano", url: "/compare/ergo-vs-cardano", badge: "Comparison" }
    ],
    relatedQuestions: ["what-are-nipopows", "how-to-bridge-to-ergo", "is-rosen-bridge-safe"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "What is Rosen Bridge? Cross-Chain on Ergo",
    seoDescription: "Rosen Bridge: trustless cross-chain transfers between Ergo, Cardano, Bitcoin, Dogecoin. Decentralized watcher network.",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26"
  },

  // ============================================
  // NEW QUESTIONS - Batch 1: Getting Started
  // ============================================
  {
    slug: "what-is-ergo-blockchain",
    query: "What is Ergo blockchain?",
    intent: "what_is",
    persona: "general",
    stage: "awareness",
    category: "Getting Started",
    shortAnswer: "Ergo is a fair-launched Proof-of-Work blockchain with advanced smart contract capabilities. It combines Bitcoin's security model (UTXO, PoW) with Ethereum-style programmability through the eUTXO model and ErgoScript. No pre-mine, no ICO, no VC control - built by cypherpunks for financial freedom.",
    keyPoints: [
      "Proof-of-Work with Autolykos (ASIC-resistant, GPU-friendly)",
      "eUTXO model: Bitcoin security + smart contracts",
      "Fair launch: no pre-mine, no ICO, no VC allocation",
      "Privacy via Sigma Protocols (zero-knowledge proofs)",
      "Storage rent for long-term sustainability",
      "NiPoPoWs for light clients and sidechains"
    ],
    bestResources: [
      { type: "doc", title: "Introduction to Ergo", url: "/start/introduction", badge: "Start here" },
      { type: "infographic", title: "Ergo Fundamentals", url: "/infographics/ergo-blockchain-introduction-fundamentals", badge: "Visual" },
      { type: "technology", title: "Technology Overview", url: "/technology", badge: "Deep dive" },
      { type: "glossary", title: "Key Terms", url: "/learn/glossary", badge: "Learn" }
    ],
    relatedQuestions: ["why-ergo-fair-launch-matters", "what-is-eutxo", "how-to-get-started-with-ergo"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "What is Ergo Blockchain? Complete Introduction",
    seoDescription: "Ergo is a fair-launched PoW blockchain with eUTXO smart contracts, Sigma Protocols privacy, and long-term sustainability features.",
    publishDate: "2025-01-01"
  },

  {
    slug: "how-to-buy-erg",
    query: "How to buy ERG cryptocurrency?",
    intent: "how_to",
    persona: "investor",
    stage: "decision",
    category: "Getting Started",
    shortAnswer: "Buy ERG on centralized exchanges (KuCoin, Gate.io, CoinEx) or decentralized exchanges (Spectrum Finance). First create a wallet (Nautilus recommended), then purchase ERG and withdraw to your wallet. Never leave large amounts on exchanges - self-custody is key.",
    keyPoints: [
      "Centralized: KuCoin, Gate.io, CoinEx, Bitpanda",
      "Decentralized: Spectrum Finance (swap from other tokens)",
      "Create wallet first (Nautilus browser extension)",
      "Withdraw to your wallet after purchase",
      "Never share seed phrase with anyone",
      "Start small to learn the process"
    ],
    bestResources: [
      { type: "doc", title: "Get ERG Guide", url: "/start/introduction", badge: "Guide" },
      { type: "playbook", title: "Add ERG to Portfolio", url: "/playbooks/add-ergo-to-portfolio", badge: "Step-by-step" },
      { type: "glossary", title: "What is a Wallet?", url: "/learn/glossary/wallet", badge: "Learn" },
      { type: "glossary", title: "Seed Phrase Safety", url: "/learn/glossary/seed-phrase", badge: "Security" }
    ],
    relatedQuestions: ["where-to-buy-ergo", "how-to-get-started-with-ergo", "what-wallet-for-ergo"],
    jsonLdType: "HowTo",
    priority: 1,
    seoTitle: "How to Buy ERG: Complete Guide to Purchasing Ergo",
    seoDescription: "Step-by-step guide to buying ERG cryptocurrency. Exchanges, wallets, and security best practices for Ergo purchases.",
    publishDate: "2025-01-01"
  },

  {
    slug: "what-wallet-for-ergo",
    query: "What is the best wallet for Ergo?",
    intent: "what_is",
    persona: "general",
    stage: "decision",
    category: "Getting Started",
    shortAnswer: "Nautilus is the most popular Ergo wallet - a browser extension supporting all Ergo features including tokens, NFTs, and dApp connections. For mobile, use Terminus. For maximum security, pair Nautilus with a Ledger hardware wallet. Always backup your seed phrase offline.",
    keyPoints: [
      "Nautilus: Browser extension, full-featured, dApp support",
      "Terminus: Mobile wallet for iOS/Android",
      "SAFEW: Desktop wallet with advanced features",
      "Ledger: Hardware wallet for maximum security",
      "All support ERG, tokens, and NFTs",
      "Backup seed phrase before using!"
    ],
    bestResources: [
      { type: "doc", title: "Wallet Guide", url: "/start/introduction", badge: "Overview" },
      { type: "glossary", title: "What is a Wallet?", url: "/learn/glossary/wallet", badge: "Concept" },
      { type: "glossary", title: "Seed Phrase", url: "/learn/glossary/seed-phrase", badge: "Security" }
    ],
    relatedQuestions: ["how-to-get-started-with-ergo", "how-to-buy-erg", "is-ergo-safe"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Best Ergo Wallet: Nautilus, Terminus, and More",
    seoDescription: "Compare Ergo wallets: Nautilus (browser), Terminus (mobile), SAFEW (desktop), and Ledger hardware wallet support.",
    publishDate: "2025-01-01"
  },

  {
    slug: "is-ergo-safe",
    query: "Is Ergo safe and secure?",
    intent: "what_is",
    persona: "investor",
    stage: "consideration",
    category: "Getting Started",
    shortAnswer: "Yes, Ergo is highly secure. It uses Proof-of-Work (the same security model as Bitcoin), has never been hacked, and the eUTXO model eliminates entire classes of smart contract vulnerabilities. The code is open-source and peer-reviewed. Your security also depends on proper seed phrase management.",
    keyPoints: [
      "PoW consensus: proven security model (like Bitcoin)",
      "Never been successfully attacked",
      "eUTXO prevents reentrancy attacks",
      "Open-source, peer-reviewed code",
      "No central point of failure",
      "Your security: protect your seed phrase!"
    ],
    bestResources: [
      { type: "technology", title: "Secure PoW", url: "/technology/secure-pow", badge: "Security" },
      { type: "glossary", title: "Proof-of-Work", url: "/learn/glossary/proof-of-work", badge: "Concept" },
      { type: "glossary", title: "51% Attack", url: "/learn/glossary/51-percent-attack", badge: "Threats" },
      { type: "compare", title: "Ergo vs Bitcoin", url: "/compare/ergo-vs-bitcoin", badge: "Comparison" }
    ],
    relatedQuestions: ["what-is-autolykos", "how-is-ergo-different-from-bitcoin", "what-wallet-for-ergo"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Is Ergo Safe? Security Analysis",
    seoDescription: "Ergo security explained: PoW consensus, eUTXO safety, open-source code, and best practices for protecting your ERG.",
    publishDate: "2025-01-01"
  },

  // ============================================
  // NEW QUESTIONS - Batch 2: Technology Deep Dives
  // ============================================
  {
    slug: "what-is-ergoscript",
    query: "What is ErgoScript and how does it work?",
    intent: "what_is",
    persona: "builder",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "ErgoScript is Ergo's smart contract language - a Scala-based, functional language that compiles to ErgoTree for on-chain execution. Unlike Solidity, ErgoScript is not Turing-complete by design, ensuring predictable execution costs and easier formal verification. It's powerful enough for complex DeFi yet safe enough to audit.",
    keyPoints: [
      "Scala-based functional language",
      "Compiles to ErgoTree (on-chain format)",
      "Not Turing-complete: predictable costs",
      "Supports Sigma Protocols natively",
      "Easier to audit than Solidity",
      "Powers all Ergo smart contracts"
    ],
    bestResources: [
      { type: "technology", title: "ErgoScript Guide", url: "/technology/ergoscript", badge: "Learn" },
      { type: "glossary", title: "ErgoScript", url: "/learn/glossary/ergoscript", badge: "Definition" },
      { type: "doc", title: "Developer Docs", url: "/docs/developers", badge: "Build" },
      { type: "playbook", title: "Build DeFi", url: "/playbooks/build-defi-on-ergo", badge: "Practice" }
    ],
    relatedQuestions: ["how-to-build-defi-on-ergo", "what-is-eutxo", "how-ergoscript-works"],
    jsonLdType: "TechArticle",
    priority: 1,
    seoTitle: "What is ErgoScript? Ergo Smart Contract Language",
    seoDescription: "ErgoScript: Ergo's Scala-based smart contract language. Learn how it works, why it's not Turing-complete, and how to build with it.",
    publishDate: "2025-01-01"
  },

  {
    slug: "what-is-storage-rent-ergo",
    query: "What is storage rent on Ergo?",
    intent: "what_is",
    persona: "general",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "Storage rent is Ergo's mechanism for long-term sustainability. Boxes (UTXOs) that remain unspent for ~4 years pay a small fee, which goes to miners. This prevents state bloat, recirculates lost coins, and ensures miners have income even after emission ends. It's like paying rent for blockchain storage space.",
    keyPoints: [
      "~4 years of inactivity triggers rent",
      "Small fee deducted from box value",
      "Prevents blockchain state bloat",
      "Recirculates lost/forgotten coins",
      "Provides miner income long-term",
      "Active users unaffected"
    ],
    bestResources: [
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", badge: "Deep dive" },
      { type: "glossary", title: "Storage Rent", url: "/learn/glossary/storage-rent", badge: "Definition" },
      { type: "infographic", title: "Storage Rent Visual", url: "/infographics/ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners", badge: "Visual" },
      { type: "blog", title: "Storage Rent Explained", url: "/blog/storage-rent", badge: "Article" }
    ],
    relatedQuestions: ["why-ergo-sustainable", "what-happens-after-emission", "how-miners-earn-on-ergo"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "What is Storage Rent on Ergo? Blockchain Sustainability",
    seoDescription: "Storage rent on Ergo: how it prevents state bloat, recirculates lost coins, and ensures long-term miner incentives.",
    publishDate: "2025-01-01"
  },

  {
    slug: "what-happens-after-emission",
    query: "What happens when all ERG is mined?",
    intent: "what_is",
    persona: "investor",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "When emission ends (~2045), miners will continue earning from transaction fees and storage rent. Unlike Bitcoin which relies solely on fees, Ergo's storage rent provides a sustainable income stream by recycling coins from inactive boxes. The network remains secure without depending on ever-increasing transaction volume.",
    keyPoints: [
      "Emission ends approximately 2045",
      "Miners earn transaction fees",
      "Storage rent provides additional income",
      "Lost coins get recirculated",
      "No 'security budget' crisis",
      "Sustainable by design"
    ],
    bestResources: [
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", badge: "Key mechanism" },
      { type: "glossary", title: "Emission Schedule", url: "/learn/glossary/emission-schedule", badge: "Definition" },
      { type: "infographic", title: "Sustainability Pillars", url: "/infographics/three-pillars-ergos-sustainability", badge: "Visual" },
      { type: "compare", title: "Ergo vs Bitcoin", url: "/compare/ergo-vs-bitcoin", badge: "Comparison" }
    ],
    relatedQuestions: ["what-is-storage-rent-ergo", "why-ergo-sustainable", "how-miners-earn-on-ergo"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "What Happens When All ERG is Mined? Post-Emission Security",
    seoDescription: "Ergo after emission: how storage rent and transaction fees ensure long-term miner incentives and network security.",
    publishDate: "2025-01-01"
  },

  {
    slug: "why-ergo-sustainable",
    query: "Why is Ergo sustainable long-term?",
    intent: "what_is",
    persona: "investor",
    stage: "consideration",
    category: "Philosophy",
    shortAnswer: "Ergo is designed for 100+ year sustainability through three pillars: Autolykos mining (fair, ASIC-resistant), NiPoPoWs (efficient light clients), and storage rent (prevents bloat, funds miners). Unlike chains that depend on infinite growth, Ergo's economics work even with stable or declining usage.",
    keyPoints: [
      "Autolykos: ASIC-resistant, decentralized mining",
      "NiPoPoWs: Light clients without trust",
      "Storage rent: Sustainable miner income",
      "No state bloat accumulation",
      "Works without infinite growth",
      "Research-driven, peer-reviewed design"
    ],
    bestResources: [
      { type: "infographic", title: "Three Pillars", url: "/infographics/three-pillars-ergos-sustainability", badge: "Visual" },
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", badge: "Key feature" },
      { type: "technology", title: "NiPoPoWs", url: "/technology/nipopows", badge: "Scalability" },
      { type: "playbook", title: "Sustainable Economics", url: "/playbooks/sustainable-blockchain-economics", badge: "Deep dive" }
    ],
    relatedQuestions: ["what-is-storage-rent-ergo", "what-happens-after-emission", "what-are-nipopows"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Why is Ergo Sustainable? Long-Term Blockchain Design",
    seoDescription: "Ergo's sustainability: Autolykos mining, NiPoPoWs, and storage rent create a blockchain designed to last 100+ years.",
    publishDate: "2025-01-01"
  },

  // ============================================
  // NEW QUESTIONS - Batch 3: Mining
  // ============================================
  {
    slug: "is-ergo-mining-profitable",
    query: "Is Ergo mining profitable in 2025?",
    intent: "what_is",
    persona: "miner",
    stage: "consideration",
    category: "Mining",
    shortAnswer: "Ergo mining profitability depends on your electricity cost, GPU efficiency, and ERG price. Use mining calculators with your specific hardware and power costs. Ergo is one of the most profitable GPU-mineable coins due to Autolykos being ASIC-resistant. Profitability improves significantly with cheap electricity.",
    keyPoints: [
      "Depends on: electricity cost, GPU, ERG price",
      "ASIC-resistant = GPU mining viable",
      "Use calculators: whattomine.com, etc.",
      "Cheap electricity is key advantage",
      "Consider long-term ERG price potential",
      "Pool mining recommended for consistent rewards"
    ],
    bestResources: [
      { type: "playbook", title: "Start Mining Ergo", url: "/playbooks/start-mining-ergo", badge: "Guide" },
      { type: "glossary", title: "GPU Mining", url: "/learn/glossary/gpu-mining", badge: "Concept" },
      { type: "glossary", title: "Mining Pool", url: "/learn/glossary/mining-pool", badge: "How-to" },
      { type: "technology", title: "Autolykos", url: "/technology/secure-pow", badge: "Algorithm" }
    ],
    relatedQuestions: ["how-to-mine-ergo", "what-is-autolykos", "best-gpu-for-ergo-mining"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Is Ergo Mining Profitable in 2025? Calculator & Guide",
    seoDescription: "Ergo mining profitability analysis: GPU requirements, electricity costs, and calculators. Is ERG mining worth it?",
    publishDate: "2025-01-01"
  },

  {
    slug: "best-gpu-for-ergo-mining",
    query: "What is the best GPU for Ergo mining?",
    intent: "what_is",
    persona: "miner",
    stage: "decision",
    category: "Mining",
    shortAnswer: "For Ergo mining, GPUs with high memory bandwidth perform best. Popular choices include NVIDIA RTX 3060 Ti, 3070, 3080, and AMD RX 6800 XT. Minimum 4GB VRAM required. The best GPU depends on your budget, electricity cost, and availability. Efficiency (hashrate per watt) matters more than raw hashrate.",
    keyPoints: [
      "NVIDIA: RTX 3060 Ti, 3070, 3080 popular",
      "AMD: RX 6800 XT, 6700 XT good options",
      "Minimum 4GB VRAM required",
      "Focus on efficiency (MH/s per watt)",
      "Consider used market for value",
      "Both brands work well with Autolykos"
    ],
    bestResources: [
      { type: "playbook", title: "Start Mining Ergo", url: "/playbooks/start-mining-ergo", badge: "Setup guide" },
      { type: "glossary", title: "GPU Mining", url: "/learn/glossary/gpu-mining", badge: "Basics" },
      { type: "glossary", title: "Hash Rate", url: "/learn/glossary/hash-rate", badge: "Metric" }
    ],
    relatedQuestions: ["how-to-mine-ergo", "is-ergo-mining-profitable", "what-is-autolykos"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Best GPU for Ergo Mining: NVIDIA vs AMD Comparison",
    seoDescription: "Best GPUs for Ergo mining: RTX 3060 Ti, 3070, 3080, RX 6800 XT. Comparison of hashrate, efficiency, and value.",
    publishDate: "2025-01-01"
  },

  {
    slug: "how-miners-earn-on-ergo",
    query: "How do miners earn money on Ergo?",
    intent: "how_to",
    persona: "miner",
    stage: "awareness",
    category: "Mining",
    shortAnswer: "Ergo miners earn from three sources: block rewards (newly minted ERG), transaction fees, and storage rent. Block rewards decrease over time according to the emission schedule, but storage rent ensures long-term income even after all ERG is mined. Most miners use pools for consistent payouts.",
    keyPoints: [
      "Block rewards: newly minted ERG",
      "Transaction fees: paid by users",
      "Storage rent: from inactive boxes",
      "Pool mining: consistent smaller payouts",
      "Solo mining: rare large payouts",
      "Rewards in ERG, sellable or holdable"
    ],
    bestResources: [
      { type: "glossary", title: "Block Reward", url: "/learn/glossary/block-reward", badge: "Definition" },
      { type: "glossary", title: "Transaction Fees", url: "/learn/glossary/transaction-fees", badge: "Definition" },
      { type: "technology", title: "Storage Rent", url: "/technology/storage-rent", badge: "Long-term" },
      { type: "playbook", title: "Start Mining", url: "/playbooks/start-mining-ergo", badge: "Guide" }
    ],
    relatedQuestions: ["how-to-mine-ergo", "what-is-storage-rent-ergo", "is-ergo-mining-profitable"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "How Do Ergo Miners Earn? Block Rewards, Fees & Storage Rent",
    seoDescription: "Ergo miner income sources: block rewards, transaction fees, and storage rent. Understanding mining economics.",
    publishDate: "2025-01-01"
  },

  // ============================================
  // NEW QUESTIONS - Batch 4: DeFi & Trading
  // ============================================
  {
    slug: "how-to-use-spectrum-dex",
    query: "How to use Spectrum DEX on Ergo?",
    intent: "how_to",
    persona: "general",
    stage: "decision",
    category: "DeFi",
    shortAnswer: "Connect your Nautilus wallet to Spectrum Finance, select tokens to swap, review the rate and slippage, then confirm. Spectrum uses AMM liquidity pools for instant trades. You can also provide liquidity to earn fees. All trades are atomic - they complete fully or not at all, with no front-running possible.",
    keyPoints: [
      "Connect Nautilus wallet to spectrum.fi",
      "Select tokens and amount to swap",
      "Review rate, slippage, and fees",
      "Confirm transaction in wallet",
      "Provide liquidity to earn fees",
      "No front-running or MEV extraction"
    ],
    bestResources: [
      { type: "glossary", title: "DEX", url: "/learn/glossary/dex", badge: "Concept" },
      { type: "glossary", title: "AMM", url: "/learn/glossary/amm", badge: "How it works" },
      { type: "glossary", title: "Liquidity Pool", url: "/learn/glossary/liquidity-pool", badge: "Earn fees" },
      { type: "playbook", title: "Build DeFi", url: "/playbooks/build-defi-on-ergo", badge: "Developer" }
    ],
    relatedQuestions: ["what-is-mev-resistance", "how-to-provide-liquidity-ergo", "ergo-vs-ethereum-for-defi"],
    jsonLdType: "HowTo",
    priority: 2,
    seoTitle: "How to Use Spectrum DEX: Ergo Decentralized Exchange Guide",
    seoDescription: "Step-by-step guide to using Spectrum Finance DEX on Ergo. Swap tokens, provide liquidity, earn fees.",
    publishDate: "2025-01-01"
  },

  {
    slug: "how-to-provide-liquidity-ergo",
    query: "How to provide liquidity on Ergo?",
    intent: "how_to",
    persona: "investor",
    stage: "decision",
    category: "DeFi",
    shortAnswer: "On Spectrum Finance, select a pool, deposit equal value of both tokens, and receive LP tokens representing your share. You earn a portion of all trading fees. Withdraw anytime by returning LP tokens. Be aware of impermanent loss if token prices diverge significantly.",
    keyPoints: [
      "Choose pool on Spectrum Finance",
      "Deposit equal value of both tokens",
      "Receive LP tokens as receipt",
      "Earn share of trading fees",
      "Withdraw anytime with LP tokens",
      "Risk: impermanent loss if prices diverge"
    ],
    bestResources: [
      { type: "glossary", title: "Liquidity Pool", url: "/learn/glossary/liquidity-pool", badge: "Concept" },
      { type: "glossary", title: "AMM", url: "/learn/glossary/amm", badge: "Mechanism" },
      { type: "glossary", title: "DEX", url: "/learn/glossary/dex", badge: "Platform" }
    ],
    relatedQuestions: ["how-to-use-spectrum-dex", "what-is-impermanent-loss", "ergo-vs-ethereum-for-defi"],
    jsonLdType: "HowTo",
    priority: 2,
    seoTitle: "How to Provide Liquidity on Ergo: Earn Trading Fees",
    seoDescription: "Guide to providing liquidity on Ergo DEX. Deposit tokens, earn fees, understand impermanent loss.",
    publishDate: "2025-01-01"
  },

  {
    slug: "how-to-use-sigmausd",
    query: "How to use SigmaUSD stablecoin?",
    intent: "how_to",
    persona: "general",
    stage: "decision",
    category: "DeFi",
    shortAnswer: "SigmaUSD is Ergo's algorithmic stablecoin pegged to USD. Mint it by depositing ERG as collateral on sigmausd.io. Use for stable value storage, trading pairs, or DeFi. Redeem anytime for ERG. The protocol uses SigRSV to absorb volatility - SigRSV holders take on risk for potential profit.",
    keyPoints: [
      "Mint on sigmausd.io with ERG collateral",
      "Pegged to ~$1 USD value",
      "Overcollateralized by ERG reserves",
      "Redeem anytime for ERG",
      "SigRSV absorbs price volatility",
      "Decentralized, no central issuer"
    ],
    bestResources: [
      { type: "glossary", title: "SigmaUSD", url: "/learn/glossary/sigmausd", badge: "Definition" },
      { type: "glossary", title: "SigRSV", url: "/learn/glossary/sigrsv", badge: "Reserve token" },
      { type: "glossary", title: "Stablecoin", url: "/learn/glossary/stablecoin", badge: "Concept" }
    ],
    relatedQuestions: ["what-is-sigmausd", "is-sigmausd-safe", "how-to-use-spectrum-dex"],
    jsonLdType: "HowTo",
    priority: 2,
    seoTitle: "How to Use SigmaUSD: Ergo Stablecoin Guide",
    seoDescription: "Guide to minting and using SigmaUSD stablecoin on Ergo. Collateral, redemption, and SigRSV explained.",
    publishDate: "2025-01-01"
  },

  // ============================================
  // NEW QUESTIONS - Batch 5: Philosophy & Freedom
  // ============================================
  {
    slug: "why-proof-of-work-matters",
    query: "Why does Proof-of-Work matter for decentralization?",
    intent: "philosophy",
    persona: "cypherpunk",
    stage: "awareness",
    category: "Philosophy",
    shortAnswer: "Proof-of-Work provides the strongest censorship resistance because anyone can mine without permission. Unlike PoS where validators can be identified and pressured, PoW miners are anonymous and replaceable. The energy cost creates a real-world anchor that can't be captured by regulators or insiders.",
    keyPoints: [
      "Permissionless: anyone can mine",
      "Anonymous: miners hard to identify/pressure",
      "Real-world cost: can't be gamed by insiders",
      "No 'rich get richer' staking dynamics",
      "Proven security model (Bitcoin since 2009)",
      "Censorship resistance by design"
    ],
    bestResources: [
      { type: "glossary", title: "Proof-of-Work", url: "/learn/glossary/proof-of-work", badge: "Definition" },
      { type: "infographic", title: "PoW vs PoS", url: "/infographics/pow-vs-pos-censorship-and-attack-surface", badge: "Visual" },
      { type: "compare", title: "Ergo vs Ethereum", url: "/compare/ergo-vs-ethereum", badge: "PoW vs PoS" },
      { type: "technology", title: "Secure PoW", url: "/technology/secure-pow", badge: "Deep dive" }
    ],
    relatedQuestions: ["is-pow-better-than-pos", "why-ergo-fair-launch-matters", "what-is-autolykos"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Why Proof-of-Work Matters for Decentralization",
    seoDescription: "Proof-of-Work and censorship resistance: why PoW provides stronger decentralization than Proof-of-Stake.",
    publishDate: "2025-01-01"
  },

  {
    slug: "is-pow-better-than-pos",
    query: "Is Proof-of-Work better than Proof-of-Stake?",
    intent: "compare",
    persona: "general",
    stage: "consideration",
    category: "Philosophy",
    shortAnswer: "Each has tradeoffs. PoW provides stronger censorship resistance, fairer distribution, and no 'rich get richer' dynamics. PoS is more energy-efficient but centralizes around large stakers and is more vulnerable to regulatory pressure. For financial freedom and decentralization, PoW is superior; for pure efficiency, PoS wins.",
    keyPoints: [
      "PoW: Stronger censorship resistance",
      "PoW: Fairer distribution (no pre-mine advantage)",
      "PoW: Anonymous, permissionless participation",
      "PoS: More energy efficient",
      "PoS: Centralizes around large stakers",
      "PoS: Validators can be regulated/pressured"
    ],
    bestResources: [
      { type: "infographic", title: "PoW vs PoS", url: "/infographics/pow-vs-pos-censorship-and-attack-surface", badge: "Visual" },
      { type: "glossary", title: "Proof-of-Work", url: "/learn/glossary/proof-of-work", badge: "Definition" },
      { type: "glossary", title: "Proof-of-Stake", url: "/learn/glossary/proof-of-stake", badge: "Definition" },
      { type: "compare", title: "Ergo vs Ethereum", url: "/compare/ergo-vs-ethereum", badge: "Comparison" }
    ],
    relatedQuestions: ["why-proof-of-work-matters", "what-is-autolykos", "why-ergo-fair-launch-matters"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Proof-of-Work vs Proof-of-Stake: Which is Better?",
    seoDescription: "PoW vs PoS comparison: censorship resistance, energy efficiency, decentralization, and security tradeoffs.",
    publishDate: "2025-01-01"
  },

  {
    slug: "what-is-financial-repression",
    query: "What is financial repression and how does Ergo help?",
    intent: "philosophy",
    persona: "freedom_seeker",
    stage: "awareness",
    category: "Philosophy",
    shortAnswer: "Financial repression includes capital controls, account freezes, surveillance, inflation, and restrictions on financial freedom. Governments use these tools to control citizens. Ergo provides escape: self-custody (no account freezes), privacy (no surveillance), censorship resistance (no blocked transactions), and sound money (no inflation).",
    keyPoints: [
      "Capital controls: Ergo is borderless",
      "Account freezes: Self-custody, you control keys",
      "Surveillance: Sigma Protocols for privacy",
      "Inflation: Fixed supply, predictable emission",
      "Censorship: PoW, no one can block transactions",
      "KYC overreach: Permissionless access"
    ],
    bestResources: [
      { type: "infographic", title: "Financial Repression", url: "/infographics/what-we-are-fighting-against-financial-repression-stack", badge: "Visual" },
      { type: "playbook", title: "Escape Financial Repression", url: "/playbooks/escape-financial-repression", badge: "Guide" },
      { type: "glossary", title: "Financial Freedom", url: "/learn/glossary/financial-freedom", badge: "Concept" },
      { type: "glossary", title: "Cypherpunk", url: "/learn/glossary/cypherpunk", badge: "Philosophy" }
    ],
    relatedQuestions: ["how-to-escape-financial-repression-with-ergo", "why-ergo-fair-launch-matters", "how-private-is-ergo"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Financial Repression: What It Is and How Ergo Helps",
    seoDescription: "Financial repression explained: capital controls, surveillance, inflation. How Ergo provides financial freedom.",
    publishDate: "2025-01-01"
  },

  {
    slug: "why-no-vc-funding-matters",
    query: "Why does Ergo's lack of VC funding matter?",
    intent: "philosophy",
    persona: "cypherpunk",
    stage: "awareness",
    category: "Philosophy",
    shortAnswer: "VC-funded chains have misaligned incentives: VCs need exits, so they push for hype over substance, centralized control, and token dumps. Ergo's fair launch means no insider allocations, no pressure to pump price, and no corporate governance. The community controls Ergo, not investors seeking returns.",
    keyPoints: [
      "No insider token allocations",
      "No pressure to pump for VC exits",
      "Community-driven development",
      "No corporate governance capture",
      "Aligned incentives: builders, not speculators",
      "True decentralization from day one"
    ],
    bestResources: [
      { type: "infographic", title: "VC Chain vs Ergo", url: "/infographics/vc-chain-vs-ergo-fair-launch", badge: "Visual" },
      { type: "infographic", title: "Who Starts With Coins", url: "/infographics/who-starts-with-the-coins-vc-allocation-vs-ergo-supply", badge: "Visual" },
      { type: "glossary", title: "Fair Launch", url: "/learn/glossary/fair-launch", badge: "Definition" },
      { type: "compare", title: "Ergo vs VC Chains", url: "/compare/ergo-vs-vc-chains", badge: "Comparison" }
    ],
    relatedQuestions: ["why-ergo-fair-launch-matters", "is-ergo-a-good-investment", "what-is-financial-repression"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Why No VC Funding Matters: Ergo's Fair Launch Advantage",
    seoDescription: "Why Ergo's lack of VC funding is a feature: fair launch, aligned incentives, true decentralization.",
    publishDate: "2025-01-01"
  },

  // ============================================
  // NEW QUESTIONS - Batch 6: Comparisons
  // ============================================
  {
    slug: "how-is-ergo-different-from-bitcoin",
    query: "How is Ergo different from Bitcoin?",
    intent: "compare",
    persona: "general",
    stage: "consideration",
    category: "Technology",
    shortAnswer: "Ergo extends Bitcoin's model with smart contracts. Both use PoW and UTXO, but Ergo adds: eUTXO for programmable boxes, ErgoScript for smart contracts, Sigma Protocols for privacy, storage rent for sustainability, and NiPoPoWs for light clients. Think of Ergo as 'Bitcoin with smart contracts done right.'",
    keyPoints: [
      "Same: PoW consensus, UTXO model, fair launch",
      "Ergo adds: Smart contracts via ErgoScript",
      "Ergo adds: Privacy via Sigma Protocols",
      "Ergo adds: Storage rent for sustainability",
      "Ergo adds: NiPoPoWs for light clients",
      "Bitcoin: Store of value; Ergo: Programmable value"
    ],
    bestResources: [
      { type: "compare", title: "Ergo vs Bitcoin", url: "/compare/ergo-vs-bitcoin", badge: "Full comparison" },
      { type: "technology", title: "eUTXO Model", url: "/technology/eutxo-model", badge: "Key difference" },
      { type: "infographic", title: "Smart Contract L1 Tree", url: "/infographics/smart-contract-l1-tree", badge: "Visual" }
    ],
    relatedQuestions: ["what-is-eutxo", "what-is-ergo-blockchain", "why-ergo-sustainable"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Ergo vs Bitcoin: Key Differences Explained",
    seoDescription: "How Ergo differs from Bitcoin: eUTXO smart contracts, Sigma Protocols privacy, storage rent, and NiPoPoWs.",
    publishDate: "2025-01-01"
  },

  {
    slug: "ergo-vs-cardano-comparison",
    query: "What's the difference between Ergo and Cardano?",
    intent: "compare",
    persona: "general",
    stage: "consideration",
    category: "Technology",
    shortAnswer: "Both use eUTXO, but differ in consensus and philosophy. Ergo: PoW (Autolykos), fair launch, no VC funding, storage rent. Cardano: PoS (Ouroboros), VC-funded, larger ecosystem. Ergo prioritizes decentralization and sustainability; Cardano prioritizes academic rigor and institutional adoption.",
    keyPoints: [
      "Both: eUTXO smart contract model",
      "Ergo: PoW; Cardano: PoS",
      "Ergo: Fair launch; Cardano: VC-funded",
      "Ergo: Storage rent; Cardano: No rent mechanism",
      "Cardano: Larger ecosystem, more funding",
      "Ergo: More decentralized, cypherpunk ethos"
    ],
    bestResources: [
      { type: "compare", title: "Ergo vs Cardano", url: "/compare/ergo-vs-cardano", badge: "Full comparison" },
      { type: "infographic", title: "PoW vs PoS", url: "/infographics/pow-vs-pos-censorship-and-attack-surface", badge: "Consensus" },
      { type: "glossary", title: "eUTXO", url: "/learn/glossary/eutxo", badge: "Shared model" }
    ],
    relatedQuestions: ["what-is-eutxo", "is-pow-better-than-pos", "why-no-vc-funding-matters"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "Ergo vs Cardano: eUTXO Siblings Compared",
    seoDescription: "Ergo vs Cardano comparison: PoW vs PoS, fair launch vs VC funding, and different approaches to eUTXO.",
    publishDate: "2025-01-01"
  },

  {
    slug: "ergo-vs-solana-comparison",
    query: "How does Ergo compare to Solana?",
    intent: "compare",
    persona: "general",
    stage: "consideration",
    category: "Technology",
    shortAnswer: "Opposite philosophies. Solana: PoS, VC-funded, speed-focused, centralized validators, frequent outages. Ergo: PoW, fair launch, security-focused, decentralized mining, 100% uptime. Solana trades decentralization for speed; Ergo prioritizes security and censorship resistance over raw TPS.",
    keyPoints: [
      "Solana: PoS with centralized validators",
      "Ergo: PoW with decentralized miners",
      "Solana: VC-funded, insider allocations",
      "Ergo: Fair launch, no pre-mine",
      "Solana: Fast but frequent outages",
      "Ergo: Slower but 100% uptime"
    ],
    bestResources: [
      { type: "compare", title: "Ergo vs Solana", url: "/compare/ergo-vs-solana", badge: "Full comparison" },
      { type: "infographic", title: "VC Chain vs Ergo", url: "/infographics/vc-chain-vs-ergo-fair-launch", badge: "Philosophy" },
      { type: "infographic", title: "PoW vs PoS", url: "/infographics/pow-vs-pos-censorship-and-attack-surface", badge: "Consensus" }
    ],
    relatedQuestions: ["why-no-vc-funding-matters", "is-pow-better-than-pos", "why-ergo-fair-launch-matters"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Ergo vs Solana: Decentralization vs Speed",
    seoDescription: "Ergo vs Solana comparison: PoW vs PoS, fair launch vs VC funding, security vs speed tradeoffs.",
    publishDate: "2025-01-01"
  },

  // ============================================
  // NEW QUESTIONS - Batch 7: Security & Privacy
  // ============================================
  {
    slug: "can-ergo-be-traced",
    query: "Can Ergo transactions be traced?",
    intent: "what_is",
    persona: "freedom_seeker",
    stage: "awareness",
    category: "Privacy",
    shortAnswer: "By default, Ergo transactions are public like Bitcoin. However, Ergo provides privacy tools: ErgoMixer for transaction mixing, Sigma Protocols for zero-knowledge proofs, and stealth addresses. Privacy is optional but powerful - you can prove things about data without revealing the data itself.",
    keyPoints: [
      "Default: Public blockchain (like Bitcoin)",
      "ErgoMixer: Mix transactions for privacy",
      "Sigma Protocols: Zero-knowledge proofs",
      "Stealth addresses: Hide recipients",
      "Optional privacy: Choose when needed",
      "Can prove compliance without revealing details"
    ],
    bestResources: [
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", badge: "Overview" },
      { type: "glossary", title: "Sigma Protocols", url: "/learn/glossary/sigma-protocols", badge: "Key tech" },
      { type: "glossary", title: "ErgoMixer", url: "/learn/glossary/ergomixer", badge: "Tool" },
      { type: "infographic", title: "Ergo Privacy", url: "/infographics/ergo-privacy-non-interactive-efficient", badge: "Visual" }
    ],
    relatedQuestions: ["how-private-is-ergo", "what-are-sigma-protocols", "is-ergo-better-than-monero-for-privacy"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Can Ergo Be Traced? Privacy on Ergo Explained",
    seoDescription: "Ergo privacy: default transparency with optional privacy via ErgoMixer, Sigma Protocols, and stealth addresses.",
    publishDate: "2025-01-01"
  },

  {
    slug: "is-ergo-anonymous",
    query: "Is Ergo anonymous?",
    intent: "what_is",
    persona: "freedom_seeker",
    stage: "awareness",
    category: "Privacy",
    shortAnswer: "Not by default, but it can be. Base Ergo transactions are pseudonymous (addresses visible, not names). For anonymity, use ErgoMixer to break transaction links, Sigma Protocols for zero-knowledge proofs, and proper operational security. Ergo offers 'privacy on demand' rather than always-on privacy like Monero.",
    keyPoints: [
      "Pseudonymous by default (addresses, not names)",
      "ErgoMixer: Break transaction links",
      "Sigma Protocols: Prove without revealing",
      "Privacy is optional, not forced",
      "Better for selective disclosure",
      "Operational security still matters"
    ],
    bestResources: [
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", badge: "Overview" },
      { type: "infographic", title: "Privacy But Auditable", url: "/infographics/privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins", badge: "Visual" },
      { type: "compare", title: "Ergo vs Monero", url: "/compare/ergo-vs-monero", badge: "Comparison" }
    ],
    relatedQuestions: ["can-ergo-be-traced", "how-private-is-ergo", "is-ergo-better-than-monero-for-privacy"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "Is Ergo Anonymous? Privacy Options Explained",
    seoDescription: "Ergo anonymity: pseudonymous by default with optional privacy tools. ErgoMixer, Sigma Protocols, and operational security.",
    publishDate: "2025-01-01"
  },

  {
    slug: "what-is-ergomixer",
    query: "What is ErgoMixer and how does it work?",
    intent: "what_is",
    persona: "freedom_seeker",
    stage: "awareness",
    category: "Privacy",
    shortAnswer: "ErgoMixer is a non-custodial, trustless mixing service that breaks the link between your input and output addresses. It uses Sigma Protocols to prove you're entitled to withdraw without revealing which deposit was yours. Unlike centralized mixers, there's no trusted party who could steal funds or keep logs.",
    keyPoints: [
      "Non-custodial: You control your funds",
      "Trustless: No operator can steal or log",
      "Uses Sigma Protocols for proofs",
      "Breaks transaction graph links",
      "Multiple mixing rounds for stronger privacy",
      "Open-source, verifiable code"
    ],
    bestResources: [
      { type: "glossary", title: "ErgoMixer", url: "/learn/glossary/ergomixer", badge: "Definition" },
      { type: "glossary", title: "Sigma Protocols", url: "/learn/glossary/sigma-protocols", badge: "How it works" },
      { type: "technology", title: "Privacy Features", url: "/technology/privacy-features", badge: "Context" }
    ],
    relatedQuestions: ["can-ergo-be-traced", "what-are-sigma-protocols", "how-private-is-ergo"],
    jsonLdType: "TechArticle",
    priority: 2,
    seoTitle: "What is ErgoMixer? Non-Custodial Mixing on Ergo",
    seoDescription: "ErgoMixer: trustless, non-custodial transaction mixing using Sigma Protocols. How it works and why it's secure.",
    publishDate: "2025-01-01"
  },

  // ============================================
  // NEW QUESTIONS - Batch 8: Ecosystem & Projects
  // ============================================
  {
    slug: "what-can-i-do-with-ergo",
    query: "What can I do with Ergo?",
    intent: "what_is",
    persona: "general",
    stage: "awareness",
    category: "Getting Started",
    shortAnswer: "Ergo supports a full ecosystem: trade on Spectrum DEX, use SigmaUSD stablecoin, mix transactions with ErgoMixer, collect NFTs on SkyHarbor, mine with GPUs, lend/borrow on DuckPools, bridge to other chains via Rosen, and build dApps with ErgoScript. It's a complete platform for decentralized finance and applications.",
    keyPoints: [
      "Trade: Spectrum DEX (swaps, liquidity)",
      "Stable value: SigmaUSD stablecoin",
      "Privacy: ErgoMixer transaction mixing",
      "NFTs: SkyHarbor marketplace",
      "Mining: GPU mining with Autolykos",
      "Building: ErgoScript smart contracts"
    ],
    bestResources: [
      { type: "doc", title: "Ecosystem Overview", url: "/ecosystem", badge: "Explore" },
      { type: "doc", title: "Use Cases", url: "/use", badge: "Applications" },
      { type: "playbook", title: "Get Started", url: "/start/introduction", badge: "Begin" }
    ],
    relatedQuestions: ["how-to-get-started-with-ergo", "how-to-use-spectrum-dex", "how-to-use-sigmausd"],
    jsonLdType: "FAQPage",
    priority: 1,
    seoTitle: "What Can I Do With Ergo? Ecosystem Guide",
    seoDescription: "Ergo ecosystem: DEX trading, stablecoins, NFTs, mining, privacy tools, and dApp development.",
    publishDate: "2025-01-01"
  },

  {
    slug: "what-are-ergo-nfts",
    query: "How do NFTs work on Ergo?",
    intent: "what_is",
    persona: "general",
    stage: "awareness",
    category: "Technology",
    shortAnswer: "Ergo NFTs are native tokens with quantity of 1, making each unique. Unlike Ethereum where NFTs need smart contracts, Ergo NFTs are first-class protocol citizens. Mint for minimal fees (~0.001 ERG), trade on SkyHarbor marketplace, and enjoy full eUTXO security. NFTs can include rich metadata and royalties.",
    keyPoints: [
      "Native tokens (no wrapper contracts)",
      "Mint for ~0.001 ERG (cents)",
      "Trade on SkyHarbor marketplace",
      "Support metadata and royalties",
      "Same security as ERG itself",
      "Can be used in smart contracts"
    ],
    bestResources: [
      { type: "glossary", title: "NFT", url: "/learn/glossary/nft", badge: "Definition" },
      { type: "glossary", title: "Token", url: "/learn/glossary/token", badge: "Related" },
      { type: "technology", title: "Native Tokens", url: "/technology/native-tokens", badge: "How it works" }
    ],
    relatedQuestions: ["what-can-i-do-with-ergo", "how-to-mint-nft-ergo", "what-is-eutxo"],
    jsonLdType: "FAQPage",
    priority: 2,
    seoTitle: "How Do NFTs Work on Ergo? Native Token NFTs",
    seoDescription: "Ergo NFTs: native tokens, low minting fees, SkyHarbor marketplace. How Ergo NFTs differ from Ethereum.",
    publishDate: "2025-01-01"
  }
];

// Helper functions
export function getQuestionBySlug(slug: string): QuestionEntry | undefined {
  return questions.find(q => q.slug === slug);
}

export function getAllQuestionSlugs(): string[] {
  return questions.map(q => q.slug);
}

export function getQuestionsByCategory(category: string): QuestionEntry[] {
  return questions.filter(q => q.category === category);
}

export function getQuestionsByPersona(persona: QuestionPersona): QuestionEntry[] {
  return questions.filter(q => q.persona === persona);
}

export function getQuestionsByIntent(intent: QuestionIntent): QuestionEntry[] {
  return questions.filter(q => q.intent === intent);
}

export function getRelatedQuestions(slugs: string[]): QuestionEntry[] {
  return questions.filter(q => slugs.includes(q.slug));
}

export function getQuestionsByPriority(priority: 1 | 2 | 3): QuestionEntry[] {
  return questions.filter(q => q.priority === priority);
}

// Categories for filtering
export const questionCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'DeFi', label: 'DeFi & Trading' },
  { id: 'Privacy', label: 'Privacy' },
  { id: 'Mining', label: 'Mining' },
  { id: 'Technology', label: 'Technology' },
  { id: 'Philosophy', label: 'Philosophy & Freedom' },
  { id: 'Getting Started', label: 'Getting Started' }
];

// Personas for filtering
export const questionPersonas = [
  { id: 'all', label: 'Everyone' },
  { id: 'builder', label: 'Builders' },
  { id: 'miner', label: 'Miners' },
  { id: 'investor', label: 'Investors' },
  { id: 'freedom_seeker', label: 'Freedom Seekers' },
  { id: 'cypherpunk', label: 'Cypherpunks' },
  { id: 'general', label: 'General' }
];

