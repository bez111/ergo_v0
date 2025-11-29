/**
 * Ergo Glossary - Programmatic dictionary of blockchain terms
 * Used to generate /learn/glossary/[term] pages
 */

export interface GlossaryFAQ {
  question: string;
  answer: string;
}

export interface GlossaryTerm {
  // Core identification
  slug: string;
  term: string;
  
  // Definitions
  shortDefinition: string;        // 1-2 sentences for tooltips and cards
  definition: string;             // Full paragraph definition
  
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  keywords: string[];
  
  // Content
  keyPoints?: string[];           // Bullet points for quick understanding
  technicalDetails?: string;      // For advanced users
  useCases?: string[];            // Real-world applications
  
  // Related content (tags for matching)
  relatedTags: string[];
  
  // FAQ for Schema.org rich snippets
  faq: GlossaryFAQ[];
  
  // Metadata
  category: 'consensus' | 'smart-contracts' | 'privacy' | 'scalability' | 'economics' | 'mining' | 'general';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  
  // External resources
  learnMoreUrl?: string;
  docsUrl?: string;
  
  // Dates
  publishDate: string;
  updatedDate?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  // ============================================
  // eUTXO
  // ============================================
  {
    slug: "eutxo",
    term: "eUTXO",
    
    shortDefinition: "Extended Unspent Transaction Output - Ergo's programmable UTXO model that combines Bitcoin's security with smart contract capabilities.",
    
    definition: "eUTXO (Extended Unspent Transaction Output) is Ergo's state model that extends Bitcoin's simple UTXO design with programmable 'boxes' containing data, tokens, and smart contract logic. Unlike account-based models (Ethereum), eUTXO transactions consume specific outputs and create new ones, enabling parallel processing, deterministic execution, and elimination of reentrancy attacks.",
    
    keywords: [
      "eutxo",
      "extended utxo",
      "ergo state model",
      "utxo vs account",
      "programmable utxo",
      "ergo boxes",
    ],
    
    keyPoints: [
      "Each 'box' contains ERG, tokens, and arbitrary data (registers R0-R9)",
      "Transactions consume boxes and create new ones atomically",
      "Enables parallel transaction validation (no shared state)",
      "Eliminates reentrancy attacks by design",
      "Deterministic - you know the exact outcome before submitting",
      "Native multi-asset support without wrapper contracts",
    ],
    
    technicalDetails: "Ergo boxes have registers R0-R9 where R0 holds the monetary value, R1 the protecting script (ErgoScript), R2 the tokens, R3 the creation info, and R4-R9 are available for arbitrary data. Scripts can access box contents, context (block height, headers), and perform cryptographic operations via Sigma protocols.",
    
    useCases: [
      "DEXs with atomic swaps (no front-running possible)",
      "Multi-signature wallets with complex spending conditions",
      "Time-locked contracts with predictable execution",
      "Privacy-preserving DeFi applications",
    ],
    
    relatedTags: ["eUTXO", "UTXO", "smart contracts", "boxes", "ErgoScript", "state model"],
    
    faq: [
      {
        question: "What is eUTXO in Ergo?",
        answer: "eUTXO (Extended UTXO) is Ergo's state model where funds are stored in 'boxes' that can contain ERG, tokens, and data. Unlike Ethereum's account model, transactions consume specific boxes and create new ones, enabling parallel processing and eliminating reentrancy attacks.",
      },
      {
        question: "How is eUTXO different from Bitcoin's UTXO?",
        answer: "While Bitcoin's UTXO can only hold BTC with simple spending conditions, Ergo's eUTXO boxes can hold multiple tokens, arbitrary data in registers, and complex smart contract logic via ErgoScript. This enables DeFi applications while keeping UTXO security benefits.",
      },
      {
        question: "Why is eUTXO more secure than account model?",
        answer: "eUTXO eliminates reentrancy attacks (like the DAO hack) because each box can only be spent once. Transactions are deterministic - you know exactly what will happen before submitting. There's no shared mutable state that attackers can exploit.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    docsUrl: "/docs/developers/eutxo",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // NiPoPoWs
  // ============================================
  {
    slug: "nipopows",
    term: "NiPoPoWs",
    
    shortDefinition: "Non-Interactive Proofs of Proof-of-Work - cryptographic proofs that allow light clients to verify blockchain state without downloading the full chain.",
    
    definition: "NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) are succinct cryptographic proofs that demonstrate a blockchain's cumulative work without requiring the full chain data. Ergo's implementation enables trustless light clients, cross-chain bridges, and sidechains by compressing proof-of-work verification into ~1MB proofs instead of gigabytes of blockchain data.",
    
    keywords: [
      "nipopows",
      "light clients",
      "superblocks",
      "proof of work proofs",
      "trustless verification",
      "cross-chain bridges",
    ],
    
    keyPoints: [
      "Compress PoW verification from gigabytes to ~1MB",
      "Enable trustless mobile wallets without full node",
      "Power cross-chain bridges without trusted intermediaries",
      "Based on 'superblocks' - blocks with extra-difficult PoW",
      "Logarithmic proof size relative to chain length",
      "Native support in Ergo's block headers",
    ],
    
    technicalDetails: "NiPoPoWs work by sampling 'superblocks' - blocks whose hash has more leading zeros than required. These form a subchain that probabilistically represents the full chain's work. Ergo includes interlink vectors in block headers, enabling efficient proof generation. Proofs are verified by checking superblock connectivity and comparing cumulative difficulty.",
    
    useCases: [
      "Mobile wallets that verify transactions without trusting servers",
      "Trustless bridges to other blockchains (Bitcoin, Ethereum)",
      "Sidechains with security inherited from mainnet",
      "IoT devices with limited storage/bandwidth",
    ],
    
    relatedTags: ["NiPoPoW", "light clients", "superblocks", "cross-chain", "bridges", "mobile wallets"],
    
    faq: [
      {
        question: "What are NiPoPoWs?",
        answer: "NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) are cryptographic proofs that compress blockchain verification from gigabytes to about 1MB. They allow light clients to verify the chain's work without downloading all blocks.",
      },
      {
        question: "How do NiPoPoWs enable trustless light clients?",
        answer: "Instead of trusting a server, light clients can verify NiPoPoW proofs themselves. These proofs mathematically demonstrate the chain's cumulative work using 'superblocks' - specially selected blocks that represent the full chain's security.",
      },
      {
        question: "Can NiPoPoWs be used for cross-chain bridges?",
        answer: "Yes! NiPoPoWs enable trustless bridges where one chain can verify another's state without intermediaries. Ergo can prove its state to Bitcoin or Ethereum smart contracts, enabling decentralized cross-chain transfers.",
      },
    ],
    
    category: "scalability",
    difficulty: "advanced",
    docsUrl: "/docs/developers/nipopows",
    learnMoreUrl: "/blog/nipopows-explained",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Sigma Protocols
  // ============================================
  {
    slug: "sigma-protocols",
    term: "Sigma Protocols",
    
    shortDefinition: "Zero-knowledge proof protocols native to Ergo that enable privacy features and complex cryptographic conditions without trusted setup.",
    
    definition: "Sigma Protocols (Σ-protocols) are a class of zero-knowledge proofs built into Ergo's core. They allow proving knowledge of secrets (like private keys) without revealing them, enabling privacy features, multi-signature schemes, and complex access control. Unlike zk-SNARKs, Sigma Protocols require no trusted setup ceremony.",
    
    keywords: [
      "sigma protocols",
      "zero knowledge proofs",
      "ergo privacy",
      "zkp",
      "no trusted setup",
      "cryptographic proofs",
    ],
    
    keyPoints: [
      "Prove knowledge without revealing the secret",
      "No trusted setup required (unlike zk-SNARKs)",
      "Native to ErgoScript - use in any smart contract",
      "Composable: AND, OR, THRESHOLD combinations",
      "Enable selective disclosure (prove age without revealing birthdate)",
      "Power ErgoMixer and privacy applications",
    ],
    
    technicalDetails: "Sigma Protocols in Ergo support Schnorr signatures, Diffie-Hellman tuples, and their compositions. ErgoScript's `proveDlog(x)` proves knowledge of discrete log, `proveDHTuple(g,h,u,v)` proves DDH relations. These can be combined with AND (&&), OR (||), and THRESHOLD (atLeast) operations to create complex spending conditions.",
    
    useCases: [
      "Private transactions via ErgoMixer",
      "Multi-signature with hidden signers (ring signatures)",
      "Age/credential verification without revealing data",
      "Atomic swaps with privacy guarantees",
      "Voting systems with verifiable anonymity",
    ],
    
    relatedTags: ["Sigma Protocols", "zero knowledge", "privacy", "ZK proofs", "ErgoMixer", "cryptography"],
    
    faq: [
      {
        question: "What are Sigma Protocols in Ergo?",
        answer: "Sigma Protocols are zero-knowledge proof systems built into Ergo that let you prove you know a secret without revealing it. They enable privacy features, complex multi-sig schemes, and selective disclosure - all without trusted setup.",
      },
      {
        question: "How are Sigma Protocols different from zk-SNARKs?",
        answer: "Unlike zk-SNARKs (used by Zcash), Sigma Protocols don't require a trusted setup ceremony. They're also composable - you can combine proofs with AND, OR, and THRESHOLD logic directly in ErgoScript smart contracts.",
      },
      {
        question: "What can I build with Sigma Protocols?",
        answer: "Privacy-preserving applications like mixers, anonymous voting, credential verification without data exposure, complex multi-signature wallets, and atomic swaps where participants' identities remain hidden.",
      },
    ],
    
    category: "privacy",
    difficulty: "advanced",
    docsUrl: "/docs/developers/sigma-protocols",
    learnMoreUrl: "/blog/sigma-protocols-explained",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Autolykos
  // ============================================
  {
    slug: "autolykos",
    term: "Autolykos",
    
    shortDefinition: "Ergo's memory-hard, ASIC-resistant Proof-of-Work mining algorithm designed to keep mining accessible to consumer GPUs.",
    
    definition: "Autolykos is Ergo's Proof-of-Work consensus algorithm, currently in version 2. It's memory-hard (requiring ~2.5GB RAM), making ASIC development economically unfeasible while remaining efficient on consumer GPUs. This design promotes mining decentralization by preventing hardware monopolies.",
    
    keywords: [
      "autolykos",
      "ergo mining",
      "asic resistant",
      "gpu mining",
      "proof of work",
      "memory hard",
    ],
    
    keyPoints: [
      "Memory-hard: requires ~2.5GB GPU RAM",
      "ASIC-resistant by economic design, not algorithm obscurity",
      "GPU-friendly: efficient on consumer graphics cards",
      "Autolykos v2: removed pool resistance, enabling traditional pools",
      "~2 minute block time target",
      "Difficulty adjustment every epoch",
    ],
    
    technicalDetails: "Autolykos v2 uses a memory-hard function based on Blake2b256 hashing with a large lookup table (~2.5GB). Miners must find a nonce where hash(block_header || nonce || solution) meets difficulty. The solution requires accessing random table elements, making memory bandwidth the bottleneck rather than raw compute.",
    
    useCases: [
      "Solo mining with consumer GPUs",
      "Pool mining for consistent rewards",
      "Decentralized network security",
      "Fair distribution of new ERG",
    ],
    
    relatedTags: ["Autolykos", "mining", "PoW", "Proof-of-Work", "GPU mining", "ASIC resistance"],
    
    faq: [
      {
        question: "What is Autolykos?",
        answer: "Autolykos is Ergo's Proof-of-Work mining algorithm. It's memory-hard (needs ~2.5GB GPU RAM), making ASIC development uneconomical while remaining efficient on consumer GPUs. This keeps mining decentralized and accessible.",
      },
      {
        question: "Can I mine Ergo with my GPU?",
        answer: "Yes! Autolykos is designed for GPU mining. Any graphics card with 3GB+ VRAM can mine ERG. Popular choices include NVIDIA RTX series and AMD RX cards. You can solo mine or join a pool.",
      },
      {
        question: "Is Autolykos truly ASIC-resistant?",
        answer: "Autolykos is ASIC-resistant by economic design. The memory requirements (~2.5GB) make specialized hardware development expensive with minimal advantage over GPUs. Unlike algorithm-obscurity approaches, this resistance is sustainable.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    docsUrl: "/docs/miners/autolykos",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Storage Rent
  // ============================================
  {
    slug: "storage-rent",
    term: "Storage Rent",
    
    shortDefinition: "Ergo's mechanism where inactive UTXOs pay small fees after ~4 years, preventing state bloat and providing sustainable miner revenue.",
    
    definition: "Storage Rent is Ergo's protocol-level solution to blockchain state bloat. Boxes (UTXOs) that remain unspent for approximately 4 years become eligible for a small fee deduction by miners. This incentivizes cleaning up dust, funds long-term network security, and ensures the blockchain remains lightweight and decentralized.",
    
    keywords: [
      "storage rent",
      "state bloat",
      "demurrage",
      "blockchain sustainability",
      "miner revenue",
      "dust cleanup",
    ],
    
    keyPoints: [
      "Applies to boxes inactive for ~4 years (1,051,200 blocks)",
      "Miners can claim small fees from dormant boxes",
      "Prevents state bloat that plagues other chains",
      "Provides sustainable miner revenue beyond block rewards",
      "Lost coins eventually return to circulation",
      "Keeps full node requirements manageable",
    ],
    
    technicalDetails: "After 1,051,200 blocks (~4 years), a box's storage rent equals 0.14 ERG per 1KB of box size. Miners can include a 'storage rent collection' transaction that either: (1) reduces the box value by the rent amount, or (2) if value < rent, claims the entire box. Users can reset the timer by moving their funds.",
    
    useCases: [
      "Automatic dust cleanup (tiny UTXOs)",
      "Recovery of lost coins over time",
      "Sustainable security budget for miners",
      "Keeping full nodes accessible",
    ],
    
    relatedTags: ["Storage Rent", "state bloat", "sustainability", "demurrage", "miners", "economics"],
    
    faq: [
      {
        question: "What is Storage Rent in Ergo?",
        answer: "Storage Rent is a small fee that miners can collect from boxes (UTXOs) that haven't moved in ~4 years. It prevents blockchain bloat, provides sustainable miner income, and ensures lost coins eventually return to circulation.",
      },
      {
        question: "Will I lose my ERG to Storage Rent?",
        answer: "Only if you don't touch your funds for ~4 years AND don't have enough to cover the tiny rent (~0.14 ERG per KB). Simply moving your funds resets the timer. Active users are unaffected.",
      },
      {
        question: "Why does Ergo need Storage Rent?",
        answer: "Other blockchains face growing state size that makes running nodes expensive. Storage Rent keeps Ergo's state manageable, funds miners after block rewards decrease, and recovers lost coins - all while barely affecting active users.",
      },
    ],
    
    category: "economics",
    difficulty: "intermediate",
    docsUrl: "/docs/developers/storage-rent",
    learnMoreUrl: "/blog/storage-rent",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Oracle Pools
  // ============================================
  {
    slug: "oracle-pools",
    term: "Oracle Pools",
    
    shortDefinition: "Decentralized data feeds on Ergo where multiple oracles post data on-chain, aggregated into reliable price feeds for DeFi applications.",
    
    definition: "Oracle Pools are Ergo's native solution for bringing off-chain data (prices, events, etc.) onto the blockchain. Multiple independent oracles post data to a shared pool, which aggregates and publishes consensus values. This decentralized design avoids single points of failure and manipulation risks of centralized oracles.",
    
    keywords: [
      "oracle pools",
      "decentralized oracles",
      "price feeds",
      "off-chain data",
      "defi oracles",
      "data aggregation",
    ],
    
    keyPoints: [
      "Multiple independent oracles post data",
      "On-chain aggregation (median, average)",
      "Permissionless participation with staking",
      "Native eUTXO design - data stored in boxes",
      "Powers SigmaUSD, DEXs, and DeFi protocols",
      "Transparent and auditable on-chain",
    ],
    
    technicalDetails: "Oracle pools use a hierarchical box structure: individual oracles post to 'datapoint boxes', which are aggregated into 'pool boxes' containing the consensus value. Oracles stake tokens and are rewarded for accurate data. The aggregation logic (median, weighted average) is encoded in ErgoScript.",
    
    useCases: [
      "ERG/USD price feeds for stablecoins",
      "Cross-chain asset prices for DEXs",
      "Sports/event outcomes for prediction markets",
      "Weather data for parametric insurance",
    ],
    
    relatedTags: ["Oracle Pools", "oracles", "price feeds", "DeFi", "data feeds", "SigmaUSD"],
    
    faq: [
      {
        question: "What are Oracle Pools?",
        answer: "Oracle Pools are Ergo's decentralized data feeds. Multiple independent oracles submit data (like ERG/USD price), which is aggregated on-chain into a reliable value that DeFi applications can trust.",
      },
      {
        question: "How are Oracle Pools different from Chainlink?",
        answer: "Ergo's Oracle Pools are native to the eUTXO model with on-chain aggregation and transparent data storage in boxes. Anyone can become an oracle by staking. There's no off-chain committee or centralized infrastructure.",
      },
      {
        question: "What DeFi applications use Oracle Pools?",
        answer: "SigmaUSD (Ergo's algorithmic stablecoin) relies on ERG/USD oracle pools for minting/redeeming. DEXs use them for price references, and lending protocols need them for collateral valuation.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    docsUrl: "/docs/developers/oracle-pools",
    learnMoreUrl: "/blog/oracle-pools-explained",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // ErgoScript
  // ============================================
  {
    slug: "ergoscript",
    term: "ErgoScript",
    
    shortDefinition: "Ergo's smart contract language - a declarative, Scala-based language for defining spending conditions on boxes.",
    
    definition: "ErgoScript is Ergo's native smart contract language. It's a declarative, non-Turing-complete (within bounds) language based on Scala that defines the conditions under which a box can be spent. ErgoScript supports Sigma Protocols natively, enabling privacy-preserving contracts impossible on other platforms.",
    
    keywords: [
      "ergoscript",
      "smart contracts",
      "ergo programming",
      "scala",
      "declarative contracts",
      "spending conditions",
    ],
    
    keyPoints: [
      "Declarative: describes WHAT conditions, not HOW to execute",
      "Based on Scala - familiar syntax for developers",
      "Native Sigma Protocol support for ZK proofs",
      "Bounded execution - predictable costs, no gas surprises",
      "Access to box registers, context, and headers",
      "Compile to efficient ErgoTree bytecode",
    ],
    
    technicalDetails: "ErgoScript compiles to ErgoTree, a typed abstract syntax tree evaluated by nodes. Key constructs include: `SELF` (current box), `INPUTS`/`OUTPUTS` (transaction boxes), `CONTEXT` (block info), and Sigma propositions (`proveDlog`, `proveDHTuple`). Scripts return Boolean or SigmaProp values.",
    
    useCases: [
      "Custom token issuance and management",
      "DEX order matching logic",
      "Stablecoin minting/burning rules",
      "Multi-signature and time-locked wallets",
      "Privacy-preserving DeFi contracts",
    ],
    
    relatedTags: ["ErgoScript", "smart contracts", "Scala", "programming", "developers", "contracts"],
    
    faq: [
      {
        question: "What is ErgoScript?",
        answer: "ErgoScript is Ergo's smart contract language. It's declarative (you describe conditions, not steps), based on Scala syntax, and has native support for Sigma Protocols enabling privacy features.",
      },
      {
        question: "Is ErgoScript Turing-complete?",
        answer: "ErgoScript is Turing-complete within bounded resources. Every operation has a known cost, and total script cost is limited. This prevents infinite loops and makes execution costs predictable - no gas surprises.",
      },
      {
        question: "How hard is it to learn ErgoScript?",
        answer: "If you know Scala, JavaScript, or functional programming, ErgoScript feels familiar. The main shift is thinking declaratively about spending conditions rather than imperative execution steps.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    docsUrl: "/docs/developers/ergoscript",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Fair Launch
  // ============================================
  {
    slug: "fair-launch",
    term: "Fair Launch",
    
    shortDefinition: "A cryptocurrency launch with no pre-mine, no ICO, and no insider allocation - all coins are earned through mining from day one.",
    
    definition: "Fair Launch refers to a cryptocurrency's distribution model where there's no pre-mine (coins created before public launch), no ICO/private sale (coins sold to investors), and no team allocation. All coins are distributed through the same mechanism available to everyone - typically mining. Ergo and Bitcoin are examples of fair-launched cryptocurrencies.",
    
    keywords: [
      "fair launch",
      "no premine",
      "no ico",
      "token distribution",
      "decentralization",
      "cypherpunk",
    ],
    
    keyPoints: [
      "No pre-mine: zero coins created before launch",
      "No ICO: no private/public token sales",
      "No team/VC allocation: founders mine like everyone else",
      "All ERG earned through Proof-of-Work mining",
      "Aligns with Bitcoin's distribution model",
      "Maximizes decentralization from day one",
    ],
    
    technicalDetails: "Ergo launched on July 1, 2019 with block #1. The treasury receives 7.5% of block rewards (decreasing over time) for ecosystem development, but this is transparent, on-chain, and community-governed - not a pre-mine or founder allocation.",
    
    useCases: [
      "Ensuring no insider advantage",
      "Building community trust",
      "Regulatory clarity (not a security)",
      "True decentralization of ownership",
    ],
    
    relatedTags: ["fair launch", "tokenomics", "distribution", "no ICO", "premine", "decentralization"],
    
    faq: [
      {
        question: "What is a fair launch?",
        answer: "A fair launch means no pre-mine, no ICO, and no insider allocation. All coins are distributed through the same mechanism (mining) available to everyone from day one. Ergo and Bitcoin are fair-launched.",
      },
      {
        question: "Did Ergo have an ICO or pre-mine?",
        answer: "No. Ergo had zero coins at launch. All ERG has been mined through Proof-of-Work since block #1 on July 1, 2019. The treasury (7.5% of rewards) is transparent and on-chain, not a pre-mine.",
      },
      {
        question: "Why does fair launch matter?",
        answer: "Fair launch ensures no insiders got coins cheaper than you. It maximizes decentralization, builds community trust, and often provides regulatory clarity since there's no investment contract.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Boxes
  // ============================================
  {
    slug: "boxes",
    term: "Boxes",
    
    shortDefinition: "The fundamental unit of state in Ergo - containers that hold ERG, tokens, data, and smart contract logic.",
    
    definition: "In Ergo, 'boxes' are the eUTXO equivalent of Bitcoin's UTXOs but far more powerful. Each box contains: monetary value (ERG), optional tokens, a protecting script (ErgoScript), and up to 10 registers (R0-R9) for arbitrary data. Transactions consume existing boxes and create new ones.",
    
    keywords: [
      "ergo boxes",
      "utxo",
      "state model",
      "registers",
      "tokens",
      "smart contracts",
    ],
    
    keyPoints: [
      "R0: Monetary value in nanoERG",
      "R1: Protecting script (ErgoScript/ErgoTree)",
      "R2: Tokens (native multi-asset)",
      "R3: Creation info (height, transaction ID)",
      "R4-R9: Custom data registers",
      "Immutable once created - only consumed or preserved",
    ],
    
    technicalDetails: "Boxes are identified by a unique ID derived from the creating transaction. The minimum box value is ~0.001 ERG to prevent spam. Boxes can hold up to 255 different token types. Register data is typed (Int, Long, Coll[Byte], GroupElement, etc.) and validated by the protecting script.",
    
    useCases: [
      "Storing ERG and native tokens",
      "Encoding smart contract state",
      "NFT metadata storage",
      "Oracle data publication",
      "DEX order representation",
    ],
    
    relatedTags: ["boxes", "eUTXO", "registers", "state", "tokens", "UTXO"],
    
    faq: [
      {
        question: "What are boxes in Ergo?",
        answer: "Boxes are Ergo's fundamental state units - like Bitcoin's UTXOs but programmable. Each box holds ERG, tokens, a protecting script, and custom data in registers. Transactions consume boxes and create new ones.",
      },
      {
        question: "What can I store in a box?",
        answer: "ERG (mandatory), up to 255 token types, and arbitrary data in registers R4-R9. Data can be integers, byte arrays, cryptographic elements, or complex structures. The protecting script defines who can spend it.",
      },
      {
        question: "How are boxes different from Ethereum accounts?",
        answer: "Boxes are immutable and consumed when spent (like cash). Ethereum accounts persist and mutate. This makes Ergo transactions deterministic and parallelizable, eliminating reentrancy attacks possible on Ethereum.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    docsUrl: "/docs/developers/boxes",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // SigmaUSD
  // ============================================
  {
    slug: "sigmausd",
    term: "SigmaUSD",
    
    shortDefinition: "Ergo's algorithmic stablecoin backed by ERG reserves, using the AgeUSD protocol for crypto-collateralized stability.",
    
    definition: "SigmaUSD is an algorithmic stablecoin on Ergo that maintains a soft peg to the US Dollar through over-collateralization with ERG. It uses the AgeUSD protocol where users can mint SigmaUSD by locking ERG, or mint SigmaRSV (reserve tokens) to provide additional collateral. The system maintains stability without centralized reserves or trusted custodians.",
    
    keywords: [
      "sigmausd",
      "stablecoin",
      "ageusd",
      "algorithmic stablecoin",
      "defi",
      "sigmaRSV",
    ],
    
    keyPoints: [
      "Soft-pegged to USD via ERG collateral",
      "Over-collateralized (typically 400-800%)",
      "SigmaRSV: reserve token for additional backing",
      "No centralized reserves or custodians",
      "Oracle pool provides ERG/USD price",
      "Fully on-chain and transparent",
    ],
    
    technicalDetails: "SigmaUSD uses a reserve ratio model. When ratio > 400%, users can mint SigmaUSD (paying ERG) or redeem (receiving ERG). SigmaRSV holders absorb ERG price volatility in exchange for potential gains. Minting/redeeming is restricted when reserves are too low or too high to maintain stability.",
    
    useCases: [
      "Stable value storage on Ergo",
      "Trading pair for DEXs",
      "Hedging ERG price volatility",
      "Earning yield via SigmaRSV",
    ],
    
    relatedTags: ["SigmaUSD", "stablecoin", "DeFi", "AgeUSD", "SigmaRSV", "algorithmic"],
    
    faq: [
      {
        question: "What is SigmaUSD?",
        answer: "SigmaUSD is Ergo's algorithmic stablecoin, soft-pegged to USD through ERG collateral. It uses the AgeUSD protocol - no centralized reserves, fully on-chain, and typically over-collateralized by 400-800%.",
      },
      {
        question: "How does SigmaUSD maintain its peg?",
        answer: "Through over-collateralization with ERG. When ERG price drops, the reserve ratio increases (more collateral per SigmaUSD). SigmaRSV holders absorb volatility. Oracle pools provide the ERG/USD price for minting/redeeming.",
      },
      {
        question: "What is SigmaRSV?",
        answer: "SigmaRSV is the reserve token that provides additional collateral to SigmaUSD. Holders take on ERG price risk but benefit when ERG rises. It's like being long ERG with leverage while backing the stablecoin.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    learnMoreUrl: "https://sigmausd.io",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Subblocks
  // ============================================
  {
    slug: "subblocks",
    term: "Subblocks",
    
    shortDefinition: "A scalability feature that increases Ergo's throughput by allowing parallel transaction processing between main blocks.",
    
    definition: "Subblocks are an upcoming Ergo scalability enhancement that introduces intermediate blocks between main (key) blocks. This allows transactions to be processed in parallel, significantly increasing throughput without sacrificing security or decentralization. Subblocks inherit the security of their parent key block while enabling faster confirmation times.",
    
    keywords: [
      "subblocks",
      "ergo scalability",
      "throughput",
      "parallel processing",
      "key blocks",
      "block production",
    ],
    
    keyPoints: [
      "Intermediate blocks between main key blocks",
      "Enable parallel transaction processing",
      "Faster confirmation times for users",
      "No sacrifice to security or decentralization",
      "Inherit security from parent key block",
      "Significant throughput improvement",
    ],
    
    technicalDetails: "Subblocks work by allowing miners to produce smaller, intermediate blocks between full key blocks. These subblocks can be processed in parallel, as they don't need to wait for full block validation. The key block then consolidates all subblock transactions, maintaining the security guarantees of the main chain.",
    
    useCases: [
      "High-throughput DeFi applications",
      "Faster DEX order execution",
      "Improved user experience with quicker confirmations",
      "Scaling without layer 2 complexity",
    ],
    
    relatedTags: ["subblocks", "scalability", "throughput", "parallelism", "key blocks", "performance"],
    
    faq: [
      {
        question: "What are subblocks in Ergo?",
        answer: "Subblocks are intermediate blocks between main key blocks that enable parallel transaction processing, significantly increasing Ergo's throughput while maintaining security.",
      },
      {
        question: "How do subblocks improve scalability?",
        answer: "By allowing transactions to be processed in parallel between key blocks, subblocks increase the number of transactions per second without requiring larger blocks or sacrificing decentralization.",
      },
      {
        question: "Are subblocks live on Ergo mainnet?",
        answer: "Subblocks are an upcoming feature being developed to enhance Ergo's scalability. Check the official roadmap for current implementation status.",
      },
    ],
    
    category: "scalability",
    difficulty: "intermediate",
    docsUrl: "/technology/subblocks",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Velvet Forks
  // ============================================
  {
    slug: "velvet-forks",
    term: "Velvet Forks",
    
    shortDefinition: "A soft upgrade mechanism that allows adding new features to a blockchain without requiring all nodes to upgrade simultaneously.",
    
    definition: "Velvet forks are a blockchain upgrade mechanism that enables backward-compatible protocol changes. Unlike hard forks (which split the chain) or soft forks (which require majority miner adoption), velvet forks allow new features to be added gradually. Nodes that don't upgrade continue to function, while upgraded nodes can use new capabilities.",
    
    keywords: [
      "velvet forks",
      "blockchain upgrades",
      "soft fork",
      "backward compatible",
      "protocol upgrade",
      "nipopows",
    ],
    
    keyPoints: [
      "Backward-compatible protocol upgrades",
      "No chain split or forced upgrades",
      "Gradual feature adoption",
      "Non-upgraded nodes remain functional",
      "Enables NiPoPoW deployment on existing chains",
      "Lower coordination overhead than hard forks",
    ],
    
    technicalDetails: "Velvet forks work by embedding new data structures (like NiPoPoW interlinks) in blocks without changing consensus rules. Old nodes ignore this extra data while new nodes can use it. This is particularly useful for adding light client support to chains that didn't originally have it.",
    
    useCases: [
      "Adding NiPoPoWs to existing blockchains",
      "Gradual protocol upgrades",
      "Cross-chain bridge deployment",
      "Light client support on legacy chains",
    ],
    
    relatedTags: ["velvet forks", "upgrades", "NiPoPoW", "soft fork", "protocol", "backward compatible"],
    
    faq: [
      {
        question: "What is a velvet fork?",
        answer: "A velvet fork is a blockchain upgrade mechanism that adds new features without requiring all nodes to upgrade. Old nodes continue working while new nodes can use enhanced capabilities.",
      },
      {
        question: "How are velvet forks different from hard forks?",
        answer: "Hard forks require all nodes to upgrade or risk chain splits. Velvet forks are backward-compatible - non-upgraded nodes simply ignore the new data while remaining fully functional.",
      },
      {
        question: "What can velvet forks enable?",
        answer: "Velvet forks can add NiPoPoW support to existing chains, enable cross-chain bridges, and deploy light client infrastructure without disrupting the network.",
      },
    ],
    
    category: "scalability",
    difficulty: "advanced",
    docsUrl: "/technology/velvet-forks",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Native Tokens
  // ============================================
  {
    slug: "native-tokens",
    term: "Native Tokens",
    
    shortDefinition: "First-class tokens on Ergo that exist at the protocol level without requiring smart contracts, enabling efficient multi-asset transactions.",
    
    definition: "Native tokens in Ergo are first-class citizens of the protocol, stored directly in boxes alongside ERG. Unlike Ethereum's ERC-20 tokens (which require smart contract calls), Ergo tokens are handled at the base layer. This makes transfers cheaper, more efficient, and enables atomic multi-asset transactions.",
    
    keywords: [
      "native tokens",
      "ergo tokens",
      "multi-asset",
      "erc-20 alternative",
      "token standard",
      "first-class tokens",
    ],
    
    keyPoints: [
      "Tokens stored directly in boxes (UTXOs)",
      "No smart contract needed for basic transfers",
      "Up to 255 different tokens per box",
      "Atomic multi-asset transactions",
      "Lower fees than contract-based tokens",
      "NFTs are native tokens with quantity 1",
    ],
    
    technicalDetails: "Native tokens are stored in register R2 of Ergo boxes. Each box can hold up to 255 different token types. Token IDs are derived from the box ID of the minting transaction, ensuring uniqueness. Tokens can have metadata stored in additional registers.",
    
    useCases: [
      "Creating fungible tokens (like stablecoins)",
      "Minting NFTs and collectibles",
      "Multi-asset DeFi protocols",
      "Efficient token airdrops",
      "Tokenized real-world assets",
    ],
    
    relatedTags: ["native tokens", "tokens", "NFT", "multi-asset", "ERC-20", "tokenization"],
    
    faq: [
      {
        question: "What are native tokens in Ergo?",
        answer: "Native tokens are first-class assets stored directly in Ergo boxes at the protocol level. They don't require smart contracts for basic operations, making them more efficient than ERC-20 style tokens.",
      },
      {
        question: "How are Ergo tokens different from ERC-20?",
        answer: "Ergo tokens exist at the protocol level, not in smart contracts. This means cheaper transfers, atomic multi-asset transactions, and no risk of contract bugs affecting token balances.",
      },
      {
        question: "How do I create a token on Ergo?",
        answer: "Tokens are created by including them in a transaction output. The token ID is derived from the creating transaction, ensuring uniqueness. You can set quantity, decimals, and metadata.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    docsUrl: "/technology/native-tokens",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // MEV Resistance
  // ============================================
  {
    slug: "mev-resistance",
    term: "MEV Resistance",
    
    shortDefinition: "Ergo's design features that prevent Maximal Extractable Value attacks like front-running and sandwich attacks common on Ethereum.",
    
    definition: "MEV (Maximal Extractable Value) resistance refers to Ergo's architectural advantages that make it difficult for miners or validators to extract value by reordering, inserting, or censoring transactions. The eUTXO model's deterministic execution and local state make MEV attacks significantly harder than on account-based chains.",
    
    keywords: [
      "mev resistance",
      "maximal extractable value",
      "front-running",
      "sandwich attack",
      "transaction ordering",
      "dark forest",
    ],
    
    keyPoints: [
      "eUTXO model provides natural MEV resistance",
      "Deterministic transaction execution",
      "No global state manipulation",
      "Local ordering instead of global mempool",
      "Harder to front-run or sandwich attack",
      "Fairer DeFi for regular users",
    ],
    
    technicalDetails: "In account-based chains, miners can see pending transactions and insert their own to profit (front-running). Ergo's eUTXO model uses local state - each transaction specifies exact inputs and outputs. This determinism makes it harder to profitably reorder transactions, as outcomes are predictable before submission.",
    
    useCases: [
      "Fair DEX trading without front-running",
      "Predictable transaction costs",
      "Protection for DeFi users",
      "Trustworthy oracle updates",
    ],
    
    relatedTags: ["MEV", "MEV resistance", "front-running", "DeFi", "eUTXO", "transaction ordering", "dark forest"],
    
    faq: [
      {
        question: "What is MEV?",
        answer: "MEV (Maximal Extractable Value) is profit that miners/validators can extract by manipulating transaction order. Common attacks include front-running (trading before you) and sandwich attacks (trading before and after you).",
      },
      {
        question: "How does Ergo resist MEV?",
        answer: "Ergo's eUTXO model uses local state and deterministic execution. Transactions specify exact inputs/outputs, making it hard to profitably reorder them. There's no global state to manipulate.",
      },
      {
        question: "Why is MEV resistance important?",
        answer: "MEV extracts billions from DeFi users annually on Ethereum. MEV resistance means fairer trading, predictable costs, and no 'dark forest' where bots prey on regular users.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    learnMoreUrl: "/infographics/mev-resistance-vs-dark-forest",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Babel Fees
  // ============================================
  {
    slug: "babel-fees",
    term: "Babel Fees",
    
    shortDefinition: "A mechanism allowing users to pay transaction fees in tokens other than ERG, improving accessibility and user experience.",
    
    definition: "Babel Fees is an Ergo feature that enables users to pay transaction fees using tokens other than the native ERG. This is achieved through a marketplace where fee providers accept tokens in exchange for covering ERG fees. It dramatically improves UX for users who hold tokens but no ERG.",
    
    keywords: [
      "babel fees",
      "transaction fees",
      "token fees",
      "user experience",
      "gas abstraction",
      "fee delegation",
    ],
    
    keyPoints: [
      "Pay fees in any accepted token",
      "No need to hold ERG for transactions",
      "Marketplace of fee providers",
      "Improves onboarding experience",
      "Works with native tokens",
      "Decentralized fee abstraction",
    ],
    
    technicalDetails: "Babel Fees work through a two-step process: users create a transaction paying in tokens, fee providers see these requests and submit the actual transaction (paying ERG fees) while receiving the offered tokens. This creates a decentralized marketplace for fee payment.",
    
    useCases: [
      "New users without ERG can transact",
      "Stablecoin-only wallets",
      "Gaming tokens for in-game fees",
      "Simplified DeFi onboarding",
    ],
    
    relatedTags: ["Babel fees", "fees", "tokens", "user experience", "gas", "onboarding"],
    
    faq: [
      {
        question: "What are Babel Fees?",
        answer: "Babel Fees let you pay Ergo transaction fees using tokens instead of ERG. Fee providers accept your tokens and pay the ERG fee on your behalf.",
      },
      {
        question: "How do Babel Fees work?",
        answer: "You create a transaction offering tokens as payment. Fee providers monitor for these offers and, if profitable, submit your transaction while paying the ERG fee and collecting your tokens.",
      },
      {
        question: "Why are Babel Fees useful?",
        answer: "New users can transact without first acquiring ERG. This is especially useful for stablecoin users, gaming applications, and improving overall onboarding experience.",
      },
    ],
    
    category: "economics",
    difficulty: "intermediate",
    docsUrl: "/use/babel-fees",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // DeFi
  // ============================================
  {
    slug: "defi",
    term: "DeFi",
    
    shortDefinition: "Decentralized Finance - financial services built on blockchain without traditional intermediaries like banks.",
    
    definition: "DeFi (Decentralized Finance) refers to financial applications built on blockchain that operate without centralized intermediaries. On Ergo, DeFi leverages the eUTXO model for secure, deterministic smart contracts. Applications include DEXs, lending protocols, stablecoins, and more - all permissionless and censorship-resistant.",
    
    keywords: [
      "defi",
      "decentralized finance",
      "dex",
      "lending",
      "stablecoin",
      "yield farming",
    ],
    
    keyPoints: [
      "Financial services without banks",
      "Permissionless and open to all",
      "Smart contract-powered automation",
      "Ergo's eUTXO provides security advantages",
      "No KYC or geographical restrictions",
      "24/7 availability",
    ],
    
    technicalDetails: "Ergo DeFi benefits from eUTXO's deterministic execution (no failed transactions with lost fees), native multi-asset support (efficient token swaps), and Sigma Protocols (privacy-preserving DeFi). Popular protocols include Spectrum DEX, SigmaUSD stablecoin, and various lending platforms.",
    
    useCases: [
      "Trading on decentralized exchanges (DEXs)",
      "Earning yield through liquidity provision",
      "Borrowing and lending without banks",
      "Stablecoin usage for stable value",
      "Derivatives and synthetic assets",
    ],
    
    relatedTags: ["DeFi", "DEX", "lending", "stablecoin", "yield", "liquidity", "trading"],
    
    faq: [
      {
        question: "What is DeFi?",
        answer: "DeFi (Decentralized Finance) is financial services on blockchain - trading, lending, borrowing, earning yield - all without banks, KYC, or centralized control.",
      },
      {
        question: "How is Ergo DeFi different?",
        answer: "Ergo DeFi uses the eUTXO model for deterministic execution (no surprise failed transactions), native multi-asset support, and Sigma Protocols for optional privacy.",
      },
      {
        question: "What DeFi apps exist on Ergo?",
        answer: "Popular Ergo DeFi includes Spectrum DEX for trading, SigmaUSD stablecoin, various lending protocols, and yield farming opportunities through liquidity provision.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    docsUrl: "/use/defi",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Bridges
  // ============================================
  {
    slug: "bridges",
    term: "Bridges",
    
    shortDefinition: "Cross-chain protocols that enable transferring assets between Ergo and other blockchains like Ethereum and Cardano.",
    
    definition: "Blockchain bridges are protocols that connect different blockchains, enabling asset transfers between them. Ergo bridges allow moving ERG and Ergo tokens to other chains (and vice versa), expanding liquidity and use cases. Ergo's NiPoPoWs technology enables more trustless bridge designs than typical solutions.",
    
    keywords: [
      "bridges",
      "cross-chain",
      "interoperability",
      "wrapped tokens",
      "rosen bridge",
      "multi-chain",
    ],
    
    keyPoints: [
      "Transfer assets between blockchains",
      "Expand liquidity and use cases",
      "NiPoPoWs enable trustless verification",
      "Rosen Bridge for Ergo interoperability",
      "Wrapped tokens represent cross-chain assets",
      "Access DeFi on multiple chains",
    ],
    
    technicalDetails: "Ergo bridges typically use a lock-and-mint mechanism: assets are locked on one chain while equivalent wrapped tokens are minted on another. Ergo's NiPoPoWs can provide cryptographic proofs of the source chain's state, reducing trust requirements compared to multisig bridges.",
    
    useCases: [
      "Moving ERG to Ethereum DeFi",
      "Bringing stablecoins to Ergo",
      "Cross-chain arbitrage",
      "Accessing liquidity on multiple chains",
    ],
    
    relatedTags: ["bridges", "cross-chain", "interoperability", "Rosen", "wrapped tokens", "NiPoPoW"],
    
    faq: [
      {
        question: "What are blockchain bridges?",
        answer: "Bridges connect different blockchains, allowing you to move assets between them. For example, you can bridge ERG to Ethereum to use it in Ethereum DeFi.",
      },
      {
        question: "How do Ergo bridges work?",
        answer: "Typically, you lock assets on Ergo and receive wrapped tokens on the destination chain (or vice versa). Ergo's NiPoPoWs can make bridges more trustless than typical multisig solutions.",
      },
      {
        question: "What bridges exist for Ergo?",
        answer: "Rosen Bridge is a major Ergo bridge project enabling cross-chain transfers. Check the ecosystem page for current bridge options and supported chains.",
      },
    ],
    
    category: "scalability",
    difficulty: "intermediate",
    docsUrl: "/use/bridges",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // DAOs
  // ============================================
  {
    slug: "daos",
    term: "DAOs",
    
    shortDefinition: "Decentralized Autonomous Organizations - community-governed entities with rules encoded in smart contracts.",
    
    definition: "DAOs (Decentralized Autonomous Organizations) are organizations governed by smart contracts and token holder votes rather than traditional hierarchies. On Ergo, DAOs can leverage eUTXO's deterministic execution and Sigma Protocols for private voting. DAOs manage treasuries, make decisions, and coordinate communities without centralized leadership.",
    
    keywords: [
      "dao",
      "decentralized organization",
      "governance",
      "voting",
      "treasury",
      "community",
    ],
    
    keyPoints: [
      "Community-governed organizations",
      "Rules encoded in smart contracts",
      "Token-based voting rights",
      "Transparent treasury management",
      "No centralized leadership",
      "Sigma Protocols enable private voting",
    ],
    
    technicalDetails: "Ergo DAOs use smart contracts to define governance rules, voting mechanisms, and treasury controls. The eUTXO model ensures deterministic proposal execution. Sigma Protocols can enable anonymous voting while still proving vote validity - a unique Ergo advantage.",
    
    useCases: [
      "Protocol governance",
      "Community treasury management",
      "Collective investment decisions",
      "Grant allocation",
      "Project coordination",
    ],
    
    relatedTags: ["DAO", "governance", "voting", "treasury", "community", "decentralization"],
    
    faq: [
      {
        question: "What is a DAO?",
        answer: "A DAO (Decentralized Autonomous Organization) is a community-governed entity where rules and decisions are encoded in smart contracts. Token holders vote on proposals.",
      },
      {
        question: "How do DAOs work on Ergo?",
        answer: "Ergo DAOs use smart contracts for governance rules and treasury. The eUTXO model ensures predictable execution, and Sigma Protocols can enable private voting.",
      },
      {
        question: "What can DAOs do?",
        answer: "DAOs can manage treasuries, allocate grants, govern protocols, make collective investment decisions, and coordinate communities - all without traditional corporate structures.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    docsUrl: "/use/daos",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // CBDC
  // ============================================
  {
    slug: "cbdc",
    term: "CBDC",
    
    shortDefinition: "Central Bank Digital Currency - government-issued digital money that Ergo provides a privacy-preserving, censorship-resistant alternative to.",
    
    definition: "CBDCs (Central Bank Digital Currencies) are digital versions of fiat currency issued by central banks. Unlike decentralized cryptocurrencies, CBDCs are fully controlled by governments, enabling surveillance, programmable restrictions, and account freezing. Ergo represents the opposite: censorship-resistant, privacy-preserving digital money.",
    
    keywords: [
      "cbdc",
      "central bank digital currency",
      "digital currency",
      "surveillance",
      "financial freedom",
      "privacy",
    ],
    
    keyPoints: [
      "Government-issued digital currency",
      "Full transaction surveillance",
      "Programmable spending restrictions",
      "Accounts can be frozen instantly",
      "Ergo is the privacy-preserving alternative",
      "Censorship-resistant vs. censorable",
    ],
    
    technicalDetails: "CBDCs are typically built on permissioned blockchains or centralized databases controlled by central banks. They enable programmable money (expiring currency, spending restrictions) and complete surveillance. Ergo's Sigma Protocols and decentralized PoW provide the opposite: privacy and censorship resistance.",
    
    useCases: [
      "Understanding the threat to financial privacy",
      "Comparing centralized vs decentralized money",
      "Ergo as CBDC alternative",
      "Financial freedom preservation",
    ],
    
    relatedTags: ["CBDC", "privacy", "surveillance", "financial freedom", "censorship", "central bank"],
    
    faq: [
      {
        question: "What is a CBDC?",
        answer: "A CBDC (Central Bank Digital Currency) is government-issued digital money. Unlike crypto, CBDCs are fully controlled by central banks, enabling surveillance and programmable restrictions.",
      },
      {
        question: "Why are CBDCs concerning?",
        answer: "CBDCs enable complete financial surveillance, programmable spending restrictions (what you can buy, when money expires), and instant account freezing - all controlled by governments.",
      },
      {
        question: "How is Ergo different from CBDCs?",
        answer: "Ergo is the opposite: decentralized (no central control), privacy-preserving (Sigma Protocols), and censorship-resistant (PoW consensus). No one can freeze your ERG or track your transactions.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    learnMoreUrl: "/infographics/what-we-are-fighting-against-financial-repression-stack",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // VC Chain
  // ============================================
  {
    slug: "vc-chain",
    term: "VC Chain",
    
    shortDefinition: "Venture Capital-funded blockchains with insider token allocations, contrasted with Ergo's fair launch model.",
    
    definition: "VC chains are blockchain projects funded by venture capital with significant token allocations to insiders (founders, investors, advisors). Typically 40-60% of tokens go to insiders before public launch. Ergo represents the opposite: a fair launch with no ICO, no premine, and all ERG distributed through mining.",
    
    keywords: [
      "vc chain",
      "venture capital",
      "token allocation",
      "fair launch",
      "premine",
      "ico",
    ],
    
    keyPoints: [
      "40-60% tokens to insiders typical",
      "Private sales before public launch",
      "VC influence on project direction",
      "Ergo: 0% insider allocation",
      "Fair launch = no premine, no ICO",
      "All ERG earned through mining",
    ],
    
    technicalDetails: "VC chains typically have vesting schedules that release insider tokens over time, but the initial distribution is fundamentally unequal. Ergo's emission schedule started at 0 with all ERG mined through Autolykos PoW. The treasury (7.5% of rewards) is transparent and community-governed.",
    
    useCases: [
      "Understanding token distribution models",
      "Evaluating project decentralization",
      "Comparing launch fairness",
      "Assessing long-term incentive alignment",
    ],
    
    relatedTags: ["VC chain", "fair launch", "ICO", "premine", "token distribution", "venture capital"],
    
    faq: [
      {
        question: "What is a VC chain?",
        answer: "A VC chain is a blockchain funded by venture capital with large token allocations to insiders - typically 40-60% to founders, investors, and advisors before public launch.",
      },
      {
        question: "Why does token distribution matter?",
        answer: "Insider allocations mean insiders got tokens cheaper than you. They can dump on retail, influence governance, and the project may prioritize VC returns over user interests.",
      },
      {
        question: "How is Ergo different?",
        answer: "Ergo had a fair launch: no ICO, no premine, no insider allocation. All ERG is mined through PoW. The transparent treasury (7.5% of rewards) is community-governed.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    learnMoreUrl: "/infographics/how-it-starts-vc-chain-vs-ergo",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Proof-of-Work (PoW)
  // ============================================
  {
    slug: "proof-of-work",
    term: "Proof-of-Work",
    
    shortDefinition: "A consensus mechanism where miners expend computational energy to secure the network and validate transactions.",
    
    definition: "Proof-of-Work (PoW) is a consensus mechanism where miners compete to solve cryptographic puzzles, expending real-world energy to secure the blockchain. Ergo uses Autolykos PoW, which is memory-hard and GPU-friendly. PoW provides strong censorship resistance because anyone can mine without permission.",
    
    keywords: [
      "proof of work",
      "pow",
      "mining",
      "consensus",
      "censorship resistance",
      "security",
    ],
    
    keyPoints: [
      "Miners expend energy to secure network",
      "Strongest censorship resistance",
      "Permissionless participation",
      "Ergo uses Autolykos (GPU-friendly)",
      "No staking requirements or lockups",
      "Proven security model (Bitcoin)",
    ],
    
    technicalDetails: "In PoW, miners hash block headers until finding a value below the difficulty target. This requires significant computation but verification is instant. Ergo's Autolykos adds memory-hardness (~2.5GB), making ASICs uneconomical while remaining efficient on consumer GPUs.",
    
    useCases: [
      "Securing the Ergo blockchain",
      "Fair coin distribution through mining",
      "Censorship-resistant transaction processing",
      "Decentralized network consensus",
    ],
    
    relatedTags: ["Proof-of-Work", "PoW", "mining", "Autolykos", "consensus", "security", "censorship resistance"],
    
    faq: [
      {
        question: "What is Proof-of-Work?",
        answer: "Proof-of-Work is a consensus mechanism where miners expend computational energy to secure the blockchain. It's the same model Bitcoin uses, providing strong security and censorship resistance.",
      },
      {
        question: "Why does Ergo use PoW instead of PoS?",
        answer: "PoW provides stronger censorship resistance (anyone can mine without permission), fairer distribution (coins are earned, not bought), and no rich-get-richer dynamics of staking.",
      },
      {
        question: "Is Proof-of-Work wasteful?",
        answer: "PoW converts energy into security. The energy expenditure makes attacks expensive and provides censorship resistance. Ergo's Autolykos is also more energy-efficient than Bitcoin's SHA-256.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    docsUrl: "/technology/secure-pow",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Proof-of-Stake (PoS)
  // ============================================
  {
    slug: "proof-of-stake",
    term: "Proof-of-Stake",
    
    shortDefinition: "A consensus mechanism where validators stake tokens to secure the network, contrasted with Ergo's Proof-of-Work approach.",
    
    definition: "Proof-of-Stake (PoS) is a consensus mechanism where validators lock up tokens as collateral to participate in block production. While more energy-efficient than PoW, PoS has centralization concerns (rich get richer), weaker censorship resistance (validators can be identified and pressured), and often involves insider token allocations.",
    
    keywords: [
      "proof of stake",
      "pos",
      "staking",
      "validators",
      "consensus",
      "ethereum",
    ],
    
    keyPoints: [
      "Validators stake tokens as collateral",
      "More energy-efficient than PoW",
      "Rich-get-richer dynamics",
      "Validators can be identified and pressured",
      "Often combined with VC allocations",
      "Ergo chose PoW for stronger decentralization",
    ],
    
    technicalDetails: "In PoS, validators are selected to produce blocks based on their stake. Slashing mechanisms punish misbehavior. However, large stakers earn more rewards, increasing their stake over time. Validators are identifiable, making them targets for regulation or coercion.",
    
    useCases: [
      "Understanding consensus tradeoffs",
      "Comparing PoW vs PoS security",
      "Evaluating chain decentralization",
      "Assessing censorship resistance",
    ],
    
    relatedTags: ["Proof-of-Stake", "PoS", "staking", "validators", "Ethereum", "consensus"],
    
    faq: [
      {
        question: "What is Proof-of-Stake?",
        answer: "Proof-of-Stake is a consensus mechanism where validators lock tokens as collateral to produce blocks. It's more energy-efficient but has centralization and censorship concerns.",
      },
      {
        question: "Why doesn't Ergo use PoS?",
        answer: "PoS has rich-get-richer dynamics, identifiable validators (censorable), and often involves insider allocations. Ergo's PoW provides fairer distribution and stronger censorship resistance.",
      },
      {
        question: "Is PoS more secure than PoW?",
        answer: "PoS and PoW have different security models. PoW requires ongoing energy expenditure; PoS requires capital lockup. PoW is generally considered more censorship-resistant.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    learnMoreUrl: "/infographics/pow-vs-pos-censorship-and-attack-surface",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Privacy Features
  // ============================================
  {
    slug: "privacy-features",
    term: "Privacy Features",
    
    shortDefinition: "Ergo's built-in privacy capabilities including Sigma Protocols, ErgoMixer, and stealth addresses for optional transaction privacy.",
    
    definition: "Ergo's privacy features provide optional transaction privacy at the protocol level. Sigma Protocols enable zero-knowledge proofs without trusted setup. ErgoMixer allows non-custodial coin mixing. Stealth addresses enable receiving funds privately. Unlike mandatory privacy coins, Ergo offers selective disclosure - prove what you need without revealing everything.",
    
    keywords: [
      "privacy",
      "sigma protocols",
      "ergomixer",
      "stealth addresses",
      "zero knowledge",
      "selective disclosure",
    ],
    
    keyPoints: [
      "Sigma Protocols for ZK proofs",
      "ErgoMixer for non-custodial mixing",
      "Stealth addresses for private receiving",
      "Optional privacy (not mandatory)",
      "Selective disclosure capabilities",
      "No trusted setup required",
    ],
    
    technicalDetails: "Sigma Protocols are composable ZK proofs built into ErgoScript. ErgoMixer uses ring signatures and Sigma Protocols for non-custodial mixing. Stealth addresses use Diffie-Hellman key exchange so senders can create one-time addresses only the recipient can spend from.",
    
    useCases: [
      "Private transactions when needed",
      "Mixing coins for unlinkability",
      "Receiving donations privately",
      "Proving credentials without revealing data",
      "Compliant privacy (selective disclosure)",
    ],
    
    relatedTags: ["privacy", "Sigma Protocols", "ErgoMixer", "stealth addresses", "zero knowledge", "mixing"],
    
    faq: [
      {
        question: "Is Ergo a privacy coin?",
        answer: "Ergo has optional privacy features, not mandatory privacy. You can use Sigma Protocols, ErgoMixer, and stealth addresses when needed, but transactions can also be transparent.",
      },
      {
        question: "What is ErgoMixer?",
        answer: "ErgoMixer is a non-custodial mixing service that uses Sigma Protocols to break transaction links. You never give up custody of your funds during mixing.",
      },
      {
        question: "What is selective disclosure?",
        answer: "Selective disclosure means proving specific facts (like 'I'm over 18') without revealing everything (your exact birthdate). Sigma Protocols enable this on Ergo.",
      },
    ],
    
    category: "privacy",
    difficulty: "intermediate",
    docsUrl: "/technology/privacy-features",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Stablecoins
  // ============================================
  {
    slug: "stablecoins",
    term: "Stablecoins",
    
    shortDefinition: "Cryptocurrencies designed to maintain a stable value, typically pegged to fiat currencies like USD.",
    
    definition: "Stablecoins are cryptocurrencies designed to maintain a stable value, usually pegged to fiat currencies like USD. On Ergo, SigmaUSD is an algorithmic stablecoin backed by ERG reserves. Stablecoins enable DeFi, payments, and value storage without volatility, while remaining censorship-resistant unlike bank deposits.",
    
    keywords: [
      "stablecoins",
      "sigmausd",
      "stable value",
      "usd peg",
      "algorithmic stablecoin",
      "defi",
    ],
    
    keyPoints: [
      "Stable value (usually $1 USD)",
      "SigmaUSD is Ergo's native stablecoin",
      "Algorithmic (no centralized reserves)",
      "Over-collateralized with ERG",
      "Essential for DeFi trading pairs",
      "Censorship-resistant unlike bank USD",
    ],
    
    technicalDetails: "SigmaUSD uses the AgeUSD protocol with ERG as collateral. Users mint SigmaUSD by locking ERG, or mint SigmaRSV to provide reserve backing. The reserve ratio (typically 400-800%) ensures stability. Oracle pools provide the ERG/USD price feed.",
    
    useCases: [
      "Stable value storage on Ergo",
      "Trading pairs on DEXs",
      "Payments without volatility",
      "Hedging ERG price movements",
      "DeFi collateral",
    ],
    
    relatedTags: ["stablecoins", "SigmaUSD", "stable value", "DeFi", "AgeUSD", "payments"],
    
    faq: [
      {
        question: "What are stablecoins?",
        answer: "Stablecoins are cryptocurrencies designed to maintain a stable value, typically $1 USD. They enable payments and DeFi without crypto volatility.",
      },
      {
        question: "What stablecoins exist on Ergo?",
        answer: "SigmaUSD is Ergo's native algorithmic stablecoin, backed by ERG reserves. It uses the AgeUSD protocol and is typically over-collateralized by 400-800%.",
      },
      {
        question: "Are stablecoins safe?",
        answer: "Different stablecoins have different risks. SigmaUSD is algorithmic and over-collateralized, avoiding centralized reserve risks. However, extreme ERG price drops could affect the peg.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    docsUrl: "/use/stablecoins",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // NFTs
  // ============================================
  {
    slug: "nfts",
    term: "NFTs",
    
    shortDefinition: "Non-Fungible Tokens - unique digital assets on Ergo representing art, collectibles, or any unique item.",
    
    definition: "NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of specific items - art, collectibles, in-game items, or any unique asset. On Ergo, NFTs are native tokens with quantity 1, making them more efficient than Ethereum's ERC-721. NFT metadata can be stored on-chain in box registers.",
    
    keywords: [
      "nft",
      "non-fungible token",
      "digital art",
      "collectibles",
      "native tokens",
      "unique assets",
    ],
    
    keyPoints: [
      "Unique digital assets (quantity = 1)",
      "Native tokens on Ergo (not contracts)",
      "More efficient than ERC-721",
      "Metadata stored in box registers",
      "Art, collectibles, game items",
      "Proof of ownership on-chain",
    ],
    
    technicalDetails: "Ergo NFTs are native tokens with quantity 1 and optional metadata in registers R4-R9. The token ID (derived from minting transaction) ensures uniqueness. NFT collections can use consistent metadata schemas. Royalties can be enforced through smart contracts.",
    
    useCases: [
      "Digital art and collectibles",
      "Gaming items and assets",
      "Proof of authenticity",
      "Membership and access tokens",
      "Real-world asset tokenization",
    ],
    
    relatedTags: ["NFT", "native tokens", "digital art", "collectibles", "tokenization", "unique assets"],
    
    faq: [
      {
        question: "What are NFTs?",
        answer: "NFTs (Non-Fungible Tokens) are unique digital assets. Unlike fungible tokens (where each unit is identical), each NFT is unique and represents ownership of a specific item.",
      },
      {
        question: "How are Ergo NFTs different?",
        answer: "Ergo NFTs are native tokens (not smart contracts), making them more efficient. They're simply tokens with quantity 1, and metadata can be stored directly in box registers.",
      },
      {
        question: "Where can I buy/sell Ergo NFTs?",
        answer: "Ergo has several NFT marketplaces including SkyHarbor. You can also trade NFTs on DEXs or directly peer-to-peer using atomic swaps.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    docsUrl: "/use/nfts",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // ErgoMixer
  // ============================================
  {
    slug: "ergomixer",
    term: "ErgoMixer",
    
    shortDefinition: "A non-custodial mixing service on Ergo that uses Sigma Protocols to break transaction links for privacy.",
    
    definition: "ErgoMixer is a non-custodial coin mixing application that uses Sigma Protocols to provide transaction privacy. Unlike centralized mixers, you never give up custody of your funds. ErgoMixer breaks the link between sending and receiving addresses, making transaction history difficult to trace while remaining compliant-friendly through selective disclosure.",
    
    keywords: [
      "ergomixer",
      "mixing",
      "privacy",
      "non-custodial",
      "sigma protocols",
      "unlinkability",
    ],
    
    keyPoints: [
      "Non-custodial (you keep your keys)",
      "Uses Sigma Protocols for ZK proofs",
      "Breaks transaction link chains",
      "Token mixing supported",
      "No trusted third party",
      "Selective disclosure possible",
    ],
    
    technicalDetails: "ErgoMixer uses ring signatures and Sigma Protocols. Users join mixing pools where outputs are indistinguishable. The ZK proofs ensure you can only withdraw what you deposited without revealing which input was yours. Multiple rounds increase privacy.",
    
    useCases: [
      "Breaking transaction history links",
      "Privacy for large transactions",
      "Receiving payments privately",
      "Protecting financial privacy",
    ],
    
    relatedTags: ["ErgoMixer", "mixing", "privacy", "Sigma Protocols", "non-custodial", "unlinkability"],
    
    faq: [
      {
        question: "What is ErgoMixer?",
        answer: "ErgoMixer is a non-custodial mixing service that breaks the link between your sending and receiving addresses using Sigma Protocols. You never give up custody of your funds.",
      },
      {
        question: "Is ErgoMixer legal?",
        answer: "Mixing itself is a privacy tool. Ergo's selective disclosure means you can prove the source of funds if required, unlike fully anonymous systems. Check your local regulations.",
      },
      {
        question: "How does ErgoMixer work?",
        answer: "You join a mixing pool with others. Sigma Protocols prove you can only withdraw what you deposited without revealing which input was yours. Multiple rounds increase privacy.",
      },
    ],
    
    category: "privacy",
    difficulty: "intermediate",
    learnMoreUrl: "/use/privacy",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Emission Schedule
  // ============================================
  {
    slug: "emission-schedule",
    term: "Emission Schedule",
    
    shortDefinition: "The predetermined rate at which new ERG is created through mining, designed for fair distribution and long-term sustainability.",
    
    definition: "Ergo's emission schedule defines how new ERG enters circulation through mining rewards. Starting at 75 ERG per block, rewards decrease over time following a predetermined curve. Combined with storage rent, this creates a sustainable economic model where miners have long-term incentives even after primary emission ends.",
    
    keywords: [
      "emission schedule",
      "block rewards",
      "token supply",
      "mining rewards",
      "inflation",
      "sustainability",
    ],
    
    keyPoints: [
      "Started at 75 ERG per block",
      "Decreases over predetermined schedule",
      "~97.74 million ERG maximum supply",
      "8 years primary emission period",
      "Storage rent provides ongoing rewards",
      "No sudden halving shocks",
    ],
    
    technicalDetails: "Ergo's emission started at 75 ERG/block, decreasing by 3 ERG every 3 months after the first 2 years. Treasury receives 7.5% of block rewards (decreasing over time). After primary emission ends (~8 years), storage rent provides ongoing miner revenue from dormant UTXOs.",
    
    useCases: [
      "Understanding ERG supply dynamics",
      "Mining profitability planning",
      "Long-term value assessment",
      "Comparing to Bitcoin halving model",
    ],
    
    relatedTags: ["emission", "block rewards", "supply", "mining", "storage rent", "sustainability"],
    
    faq: [
      {
        question: "What is Ergo's emission schedule?",
        answer: "Ergo started at 75 ERG per block, decreasing gradually over ~8 years. Maximum supply is ~97.74 million ERG. Storage rent provides ongoing miner rewards after primary emission.",
      },
      {
        question: "How is this different from Bitcoin?",
        answer: "Bitcoin has sudden halvings every 4 years. Ergo's emission decreases smoothly. Bitcoin has no mechanism for ongoing miner revenue; Ergo has storage rent.",
      },
      {
        question: "What happens when emission ends?",
        answer: "After primary emission, miners earn from transaction fees plus storage rent (fees from dormant UTXOs). This provides sustainable long-term security budget.",
      },
    ],
    
    category: "economics",
    difficulty: "intermediate",
    docsUrl: "/technology/adaptive-emission",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },
  
  // ============================================
  // Light Clients
  // ============================================
  {
    slug: "light-clients",
    term: "Light Clients",
    
    shortDefinition: "Wallet software that verifies blockchain state without downloading the full chain, enabled by NiPoPoWs on Ergo.",
    
    definition: "Light clients are wallet applications that can verify blockchain state without downloading and storing the entire blockchain. Ergo's NiPoPoWs enable truly trustless light clients - they can cryptographically verify the chain's work using ~1MB proofs instead of trusting a server or downloading gigabytes of data.",
    
    keywords: [
      "light clients",
      "mobile wallets",
      "nipopows",
      "spv",
      "verification",
      "trustless",
    ],
    
    keyPoints: [
      "Verify without full blockchain",
      "NiPoPoWs enable ~1MB proofs",
      "Trustless (no server trust needed)",
      "Perfect for mobile devices",
      "Better than SPV (Bitcoin's model)",
      "Maintains decentralization",
    ],
    
    technicalDetails: "Traditional SPV clients trust that the longest chain is valid. NiPoPoW light clients can verify the chain's cumulative work cryptographically using superblock sampling. Proofs are ~1MB regardless of chain length, enabling truly trustless mobile wallets.",
    
    useCases: [
      "Mobile wallet verification",
      "IoT device integration",
      "Browser-based wallets",
      "Resource-constrained environments",
    ],
    
    relatedTags: ["light clients", "NiPoPoW", "mobile wallets", "SPV", "verification", "trustless"],
    
    faq: [
      {
        question: "What is a light client?",
        answer: "A light client is wallet software that verifies blockchain state without downloading the full chain. It's essential for mobile devices with limited storage.",
      },
      {
        question: "How are Ergo light clients different?",
        answer: "Ergo uses NiPoPoWs for trustless verification. Unlike Bitcoin's SPV (which trusts the longest chain), NiPoPoW clients can cryptographically verify the chain's work.",
      },
      {
        question: "Are light clients secure?",
        answer: "NiPoPoW light clients are as secure as full nodes for verification purposes. They can prove the chain's cumulative work without trusting any third party.",
      },
    ],
    
    category: "scalability",
    difficulty: "intermediate",
    docsUrl: "/technology/nipopows",
    publishDate: "2025-01-01",
    updatedDate: "2025-11-26",
  },

  // ============================================
  // NEW TERMS - Batch 1: Core Blockchain Concepts
  // ============================================
  {
    slug: "smart-contracts",
    term: "Smart Contracts",
    shortDefinition: "Self-executing programs stored on blockchain that automatically enforce agreement terms when conditions are met.",
    definition: "Smart contracts are programmable agreements that execute automatically when predefined conditions are satisfied. On Ergo, smart contracts are written in ErgoScript and stored in eUTXO boxes. Unlike Ethereum's Turing-complete contracts, ErgoScript is deliberately limited to ensure predictable execution, lower gas costs, and easier formal verification.",
    keywords: ["smart contracts", "ergo smart contracts", "ergoscript contracts", "blockchain contracts", "self-executing contracts", "programmable money"],
    keyPoints: [
      "Self-executing when conditions are met",
      "Stored on-chain, immutable once deployed",
      "ErgoScript ensures predictable gas costs",
      "No reentrancy attacks possible on eUTXO",
      "Supports multi-stage protocols",
      "Can interact with Sigma protocols for privacy",
    ],
    technicalDetails: "ErgoScript compiles to ErgoTree, a typed language that evaluates to true/false. Contracts guard boxes and define spending conditions. The eUTXO model means contracts see only their inputs/outputs, not global state, eliminating many attack vectors.",
    useCases: [
      "Decentralized exchanges (DEXs)",
      "Lending and borrowing protocols",
      "Token issuance and management",
      "Multi-signature wallets",
      "Time-locked payments",
      "Oracle-based derivatives",
    ],
    relatedTags: ["smart contracts", "ErgoScript", "eUTXO", "DeFi", "programmable money"],
    faq: [
      { question: "What language are Ergo smart contracts written in?", answer: "Ergo smart contracts are written in ErgoScript, a Scala-based language that compiles to ErgoTree for on-chain execution." },
      { question: "Are Ergo smart contracts Turing-complete?", answer: "No, ErgoScript is deliberately not Turing-complete. This ensures predictable execution costs and makes contracts easier to verify and audit." },
      { question: "Can Ergo smart contracts be upgraded?", answer: "Deployed contracts are immutable, but developers can design upgradeable patterns using proxy contracts or multi-stage protocols." },
    ],
    category: "smart-contracts",
    difficulty: "beginner",
    docsUrl: "/technology/ergoscript",
    publishDate: "2025-01-01",
  },

  {
    slug: "blockchain",
    term: "Blockchain",
    shortDefinition: "A distributed, immutable ledger that records transactions across a network of computers without central authority.",
    definition: "A blockchain is a decentralized database shared across network nodes. Transactions are grouped into blocks, cryptographically linked in chronological order. Once recorded, data cannot be altered without changing all subsequent blocks, making blockchains tamper-resistant. Ergo is a PoW blockchain optimized for smart contracts and long-term sustainability.",
    keywords: ["blockchain", "distributed ledger", "decentralized database", "ergo blockchain", "cryptocurrency", "immutable ledger"],
    keyPoints: [
      "Decentralized - no single point of control",
      "Immutable - transactions cannot be reversed",
      "Transparent - anyone can verify the ledger",
      "Secure - cryptographically protected",
      "Consensus-driven - network agrees on state",
      "Permissionless - anyone can participate",
    ],
    relatedTags: ["blockchain", "distributed ledger", "decentralization", "cryptocurrency"],
    faq: [
      { question: "What makes Ergo blockchain different?", answer: "Ergo combines Bitcoin's PoW security with advanced smart contracts via eUTXO, adds storage rent for sustainability, and uses NiPoPoWs for light clients." },
      { question: "Is blockchain the same as cryptocurrency?", answer: "No. Blockchain is the technology; cryptocurrency is one application. Blockchains can also store contracts, NFTs, and arbitrary data." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "decentralization",
    term: "Decentralization",
    shortDefinition: "Distribution of control across many participants rather than concentration in a single authority.",
    definition: "Decentralization means no single entity controls the network. In blockchain, this is achieved through distributed nodes, open participation, and consensus mechanisms. Ergo prioritizes decentralization via ASIC-resistant mining (Autolykos), fair launch (no pre-mine), and accessible full nodes (NiPoPoWs, storage rent).",
    keywords: ["decentralization", "distributed network", "no central authority", "censorship resistance", "permissionless", "ergo decentralization"],
    keyPoints: [
      "No single point of failure",
      "Censorship-resistant by design",
      "Fair launch ensures no insider control",
      "ASIC-resistance keeps mining accessible",
      "Storage rent prevents state bloat",
      "NiPoPoWs enable light node participation",
    ],
    relatedTags: ["decentralization", "censorship resistance", "fair launch", "ASIC resistance"],
    faq: [
      { question: "Why does decentralization matter?", answer: "Decentralization prevents censorship, ensures no single party can change rules, and makes the network resilient to attacks or shutdowns." },
      { question: "How decentralized is Ergo?", answer: "Very. Fair launch (no pre-mine/ICO), ASIC-resistant mining, no VC control, and community governance make Ergo one of the most decentralized smart contract platforms." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "consensus-mechanism",
    term: "Consensus Mechanism",
    shortDefinition: "The method by which blockchain nodes agree on the current state of the ledger.",
    definition: "Consensus mechanisms allow distributed nodes to agree on which transactions are valid and in what order. Ergo uses Autolykos, a memory-hard Proof-of-Work consensus that requires miners to solve computational puzzles. This ensures security through energy expenditure while remaining ASIC-resistant for fair participation.",
    keywords: ["consensus mechanism", "proof of work", "proof of stake", "autolykos", "blockchain consensus", "distributed agreement"],
    keyPoints: [
      "Ensures all nodes agree on ledger state",
      "PoW (Ergo) vs PoS (Ethereum) approaches",
      "Autolykos is memory-hard, ASIC-resistant",
      "Security comes from computational cost",
      "Prevents double-spending attacks",
      "Enables trustless operation",
    ],
    relatedTags: ["consensus", "Proof-of-Work", "Autolykos", "mining", "security"],
    faq: [
      { question: "What consensus does Ergo use?", answer: "Ergo uses Autolykos, a memory-hard Proof-of-Work algorithm designed to be ASIC-resistant and GPU-friendly." },
      { question: "Is PoW better than PoS?", answer: "Each has tradeoffs. PoW provides stronger censorship resistance and fairer distribution; PoS is more energy-efficient but can centralize around large stakers." },
    ],
    category: "consensus",
    difficulty: "beginner",
    docsUrl: "/technology/secure-pow",
    publishDate: "2025-01-01",
  },

  {
    slug: "hash-rate",
    term: "Hash Rate",
    shortDefinition: "The total computational power securing a Proof-of-Work blockchain, measured in hashes per second.",
    definition: "Hash rate measures how many hash calculations miners perform per second to find valid blocks. Higher hash rate means more security, as attackers would need more computational power to attempt a 51% attack. Ergo's hash rate comes from GPU miners running the Autolykos algorithm.",
    keywords: ["hash rate", "hashrate", "mining power", "network security", "th/s", "ergo hashrate"],
    keyPoints: [
      "Measured in H/s, TH/s, PH/s",
      "Higher = more secure network",
      "Reflects mining participation",
      "Ergo uses GPU mining (Autolykos)",
      "Fluctuates with profitability",
      "Key security metric for PoW chains",
    ],
    relatedTags: ["hash rate", "mining", "security", "Proof-of-Work", "Autolykos"],
    faq: [
      { question: "What is Ergo's current hash rate?", answer: "Ergo's hash rate varies with market conditions. Check ergo.watch or mining pools for current statistics." },
      { question: "Does higher hash rate mean higher price?", answer: "Not directly. Hash rate reflects miner confidence and security level, but price depends on many market factors." },
    ],
    category: "mining",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "block-reward",
    term: "Block Reward",
    shortDefinition: "The amount of cryptocurrency awarded to miners for successfully adding a new block to the blockchain.",
    definition: "Block rewards incentivize miners to secure the network. On Ergo, miners receive newly minted ERG plus transaction fees for each block they mine. Ergo's emission schedule started at 75 ERG per block and decreases over time, with all ERG to be mined by approximately 2045.",
    keywords: ["block reward", "mining reward", "ergo emission", "miner incentive", "block subsidy"],
    keyPoints: [
      "Primary miner incentive",
      "Ergo started at 75 ERG/block",
      "Decreases according to emission schedule",
      "Transaction fees supplement rewards",
      "Storage rent adds additional income",
      "All ERG mined by ~2045",
    ],
    relatedTags: ["block reward", "mining", "emission", "miner incentives"],
    faq: [
      { question: "What is the current Ergo block reward?", answer: "The block reward decreases over time according to Ergo's emission schedule. Check ergo.watch for current values." },
      { question: "What happens when all ERG is mined?", answer: "Miners will still earn transaction fees and storage rent, ensuring long-term network security even after emission ends." },
    ],
    category: "mining",
    difficulty: "beginner",
    docsUrl: "/technology/adaptive-emission",
    publishDate: "2025-01-01",
  },

  {
    slug: "transaction-fees",
    term: "Transaction Fees",
    shortDefinition: "Small payments to miners for processing and including transactions in blocks.",
    definition: "Transaction fees compensate miners for computational resources and block space. Ergo fees are predictable and low (typically ~0.001 ERG), calculated based on transaction size rather than gas auctions. This prevents fee spikes and MEV extraction common on account-based chains.",
    keywords: ["transaction fees", "ergo fees", "gas fees", "mining fees", "network fees", "low fees"],
    keyPoints: [
      "Typically ~$0.01 or less",
      "Based on transaction size, not auctions",
      "No gas price bidding wars",
      "Predictable before sending",
      "Go to miners as reward",
      "Babel fees allow paying in tokens",
    ],
    relatedTags: ["transaction fees", "low fees", "Babel fees", "mining"],
    faq: [
      { question: "How much are Ergo transaction fees?", answer: "Typically around 0.001-0.01 ERG (a few cents), depending on transaction complexity. Much lower than Ethereum gas fees." },
      { question: "Can I pay fees in tokens instead of ERG?", answer: "Yes! Babel fees allow paying transaction fees in tokens. Miners can choose to accept token payments." },
    ],
    category: "economics",
    difficulty: "beginner",
    docsUrl: "/technology/babel-fees",
    publishDate: "2025-01-01",
  },

  {
    slug: "wallet",
    term: "Wallet",
    shortDefinition: "Software or hardware that stores private keys and enables sending/receiving cryptocurrency.",
    definition: "A cryptocurrency wallet manages your private keys and lets you interact with the blockchain. Wallets don't actually 'store' coins - they store the keys that prove ownership. Ergo supports various wallets including Nautilus (browser), SAFEW (desktop), Terminus (mobile), and hardware wallets like Ledger.",
    keywords: ["wallet", "crypto wallet", "ergo wallet", "nautilus", "safew", "private keys", "seed phrase"],
    keyPoints: [
      "Stores private keys, not coins",
      "Seed phrase = backup (keep offline!)",
      "Hot wallets (online) vs cold (offline)",
      "Nautilus is popular browser wallet",
      "Hardware wallets for max security",
      "Never share private keys or seed",
    ],
    useCases: [
      "Storing ERG and tokens",
      "Sending/receiving payments",
      "Interacting with dApps",
      "Signing transactions",
      "Managing NFTs",
    ],
    relatedTags: ["wallet", "Nautilus", "SAFEW", "private keys", "seed phrase", "security"],
    faq: [
      { question: "What's the best Ergo wallet?", answer: "Nautilus (browser extension) is most popular for daily use. For maximum security, use a hardware wallet like Ledger with Nautilus." },
      { question: "What if I lose my seed phrase?", answer: "Your funds are permanently lost. Always backup your seed phrase offline in multiple secure locations." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "seed-phrase",
    term: "Seed Phrase",
    shortDefinition: "A 12-24 word recovery phrase that can restore your entire wallet and all its funds.",
    definition: "A seed phrase (mnemonic) is a human-readable backup of your wallet's master private key. These 12-24 words can regenerate all your addresses and keys. Anyone with your seed phrase has full control of your funds - never share it, never store it digitally, and keep multiple physical backups.",
    keywords: ["seed phrase", "mnemonic", "recovery phrase", "wallet backup", "12 words", "24 words", "private key backup"],
    keyPoints: [
      "12-24 words generated when creating wallet",
      "Can restore entire wallet on any device",
      "NEVER share with anyone",
      "NEVER store digitally (no photos, cloud)",
      "Write on paper, store in multiple locations",
      "Consider metal backup for fire/water protection",
    ],
    relatedTags: ["seed phrase", "wallet", "security", "private keys", "backup"],
    faq: [
      { question: "What if someone gets my seed phrase?", answer: "They have complete control of your funds. Immediately transfer everything to a new wallet with a new seed phrase." },
      { question: "Can I change my seed phrase?", answer: "No. To get a new seed phrase, create a new wallet and transfer your funds to it." },
      { question: "Is 12 words enough or should I use 24?", answer: "Both are secure. 24 words provides more entropy but 12 is sufficient for most users. The important thing is proper storage." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "dex",
    term: "DEX (Decentralized Exchange)",
    shortDefinition: "A peer-to-peer exchange that allows trading cryptocurrencies without intermediaries or custody.",
    definition: "Decentralized exchanges enable trustless trading directly from your wallet using smart contracts. On Ergo, DEXs like Spectrum Finance use the eUTXO model for atomic swaps - trades either complete fully or not at all. This eliminates front-running and MEV extraction common on Ethereum DEXs.",
    keywords: ["dex", "decentralized exchange", "spectrum finance", "atomic swaps", "amm", "liquidity pool", "ergo dex"],
    keyPoints: [
      "Trade directly from your wallet",
      "No KYC or account required",
      "Atomic swaps ensure fair execution",
      "No front-running on eUTXO",
      "Liquidity pools enable trading",
      "Spectrum Finance is main Ergo DEX",
    ],
    useCases: [
      "Swapping ERG for tokens",
      "Providing liquidity for fees",
      "Trading without centralized risk",
      "Accessing DeFi ecosystem",
    ],
    relatedTags: ["DEX", "Spectrum Finance", "atomic swaps", "AMM", "DeFi", "liquidity"],
    faq: [
      { question: "What DEXs are on Ergo?", answer: "Spectrum Finance is the main DEX. It uses an AMM model with liquidity pools for trustless, MEV-resistant trading." },
      { question: "Is DEX trading safe?", answer: "DEXs eliminate custodial risk (you control your keys), but smart contract risk exists. Use audited, established protocols." },
    ],
    category: "smart-contracts",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "amm",
    term: "AMM (Automated Market Maker)",
    shortDefinition: "A DEX mechanism using liquidity pools and algorithms instead of order books for trading.",
    definition: "AMMs replace traditional order books with liquidity pools and mathematical formulas (like x*y=k) to determine prices. Liquidity providers deposit token pairs and earn fees from trades. On Ergo, AMMs benefit from eUTXO's atomic execution - no partial fills or sandwich attacks.",
    keywords: ["amm", "automated market maker", "liquidity pool", "constant product", "dex mechanism", "spectrum amm"],
    keyPoints: [
      "No order book needed",
      "Prices set by algorithm (x*y=k)",
      "Liquidity providers earn fees",
      "Anyone can provide liquidity",
      "Slippage depends on pool depth",
      "eUTXO prevents MEV attacks",
    ],
    relatedTags: ["AMM", "DEX", "liquidity pool", "DeFi", "Spectrum Finance"],
    faq: [
      { question: "What is impermanent loss?", answer: "When token prices change after you provide liquidity, you may have less value than if you'd just held. It's 'impermanent' because it reverses if prices return." },
      { question: "How do AMM prices stay accurate?", answer: "Arbitrageurs profit by correcting price differences between AMMs and other markets, keeping prices aligned." },
    ],
    category: "smart-contracts",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "liquidity-pool",
    term: "Liquidity Pool",
    shortDefinition: "Smart contract holding paired tokens that enables decentralized trading on AMM exchanges.",
    definition: "Liquidity pools are smart contracts containing reserves of two or more tokens. Traders swap against the pool rather than matching with counterparties. Liquidity providers deposit tokens and receive LP tokens representing their share, earning a portion of trading fees.",
    keywords: ["liquidity pool", "lp tokens", "liquidity provider", "defi liquidity", "pool tokens", "yield farming"],
    keyPoints: [
      "Contains paired tokens (e.g., ERG/SigUSD)",
      "Enables instant trades at any size",
      "LPs earn share of trading fees",
      "LP tokens represent pool share",
      "Deeper pools = less slippage",
      "Risk: impermanent loss if prices diverge",
    ],
    relatedTags: ["liquidity pool", "AMM", "DeFi", "LP tokens", "yield"],
    faq: [
      { question: "How do I earn from liquidity pools?", answer: "Deposit token pairs, receive LP tokens. You earn a share of all trading fees proportional to your pool share." },
      { question: "Can I lose money providing liquidity?", answer: "Yes, through impermanent loss if token prices change significantly. However, fee earnings can offset this." },
    ],
    category: "smart-contracts",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "atomic-swap",
    term: "Atomic Swap",
    shortDefinition: "A trustless exchange of cryptocurrencies that either completes entirely or not at all.",
    definition: "Atomic swaps use cryptographic techniques (hash time-locked contracts) to enable trustless trading between parties. The 'atomic' property means the swap either executes completely for both parties or fails entirely - no partial execution. Ergo's eUTXO model makes atomic swaps natural and secure.",
    keywords: ["atomic swap", "trustless exchange", "htlc", "cross-chain swap", "peer-to-peer trade"],
    keyPoints: [
      "All-or-nothing execution",
      "No trusted third party needed",
      "Uses hash time-locked contracts",
      "Natural fit for eUTXO model",
      "Enables cross-chain trading",
      "No counterparty risk",
    ],
    relatedTags: ["atomic swap", "DEX", "trustless", "HTLC", "cross-chain"],
    faq: [
      { question: "How do atomic swaps work?", answer: "Both parties lock funds with a hash lock. When one reveals the secret to claim, the other can use that secret to claim their side. If time expires, both get refunds." },
      { question: "Can atomic swaps work cross-chain?", answer: "Yes, if both chains support the required scripting. Ergo's Rosen Bridge uses similar principles for cross-chain transfers." },
    ],
    category: "smart-contracts",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "oracle",
    term: "Oracle",
    shortDefinition: "A service that brings external real-world data onto the blockchain for smart contracts to use.",
    definition: "Oracles bridge the gap between blockchains and the outside world. Since smart contracts can't access external data directly, oracles fetch and verify off-chain information (prices, weather, events) and post it on-chain. Ergo's Oracle Pools use decentralized consensus among oracle operators for reliable data.",
    keywords: ["oracle", "oracle pools", "price feed", "external data", "chainlink alternative", "ergo oracles"],
    keyPoints: [
      "Brings off-chain data on-chain",
      "Essential for DeFi (price feeds)",
      "Oracle Pools = decentralized oracles",
      "Multiple operators reach consensus",
      "Resistant to manipulation",
      "Powers SigmaUSD and other protocols",
    ],
    useCases: [
      "Price feeds for DeFi",
      "Sports results for betting",
      "Weather data for insurance",
      "Random number generation",
    ],
    relatedTags: ["oracle", "Oracle Pools", "price feed", "DeFi", "external data"],
    faq: [
      { question: "What are Oracle Pools?", answer: "Ergo's decentralized oracle solution where multiple independent operators post data and reach consensus, making manipulation very difficult." },
      { question: "Why are oracles important?", answer: "DeFi protocols need accurate external data (like prices) to function. Bad oracle data can lead to exploits and losses." },
    ],
    category: "smart-contracts",
    difficulty: "intermediate",
    docsUrl: "/technology/oracle-pools",
    publishDate: "2025-01-01",
  },

  {
    slug: "stablecoin",
    term: "Stablecoin",
    shortDefinition: "A cryptocurrency designed to maintain a stable value, usually pegged to fiat currency like USD.",
    definition: "Stablecoins provide price stability in the volatile crypto market. They can be fiat-backed (USDT, USDC), crypto-collateralized (SigmaUSD), or algorithmic. Ergo's SigmaUSD is an algorithmic stablecoin backed by ERG reserves, using the AgeUSD protocol for decentralized stability.",
    keywords: ["stablecoin", "sigmausd", "stable coin", "usd peg", "ageusd", "crypto dollar"],
    keyPoints: [
      "Maintains ~$1 value",
      "SigmaUSD is Ergo's native stablecoin",
      "Crypto-collateralized (backed by ERG)",
      "No centralized issuer",
      "AgeUSD protocol ensures stability",
      "SigRSV absorbs volatility",
    ],
    relatedTags: ["stablecoin", "SigmaUSD", "SigRSV", "AgeUSD", "DeFi"],
    faq: [
      { question: "How does SigmaUSD maintain its peg?", answer: "SigmaUSD is overcollateralized by ERG reserves. SigRSV holders absorb ERG price volatility in exchange for potential profits when reserves grow." },
      { question: "Is SigmaUSD safe?", answer: "It's decentralized and transparent, but like all crypto-collateralized stablecoins, extreme market conditions could stress the peg." },
    ],
    category: "economics",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "sigrsv",
    term: "SigRSV",
    shortDefinition: "The reserve token in the SigmaUSD protocol that absorbs ERG price volatility for potential profits.",
    definition: "SigRSV (Sigma Reserve) is the volatile counterpart to SigmaUSD. Holders of SigRSV take on ERG price risk in exchange for potential profits when the reserve ratio is healthy. When ERG price rises, SigRSV gains value; when it falls, SigRSV absorbs the loss to protect SigmaUSD's peg.",
    keywords: ["sigrsv", "sigma reserve", "reserve token", "sigmausd reserve", "ageusd reserve"],
    keyPoints: [
      "Absorbs ERG volatility",
      "Profits when ERG rises",
      "Loses when ERG falls",
      "Maintains SigmaUSD stability",
      "Can only mint/redeem in certain ranges",
      "Higher risk, higher potential reward",
    ],
    relatedTags: ["SigRSV", "SigmaUSD", "AgeUSD", "stablecoin", "reserve"],
    faq: [
      { question: "Should I hold SigRSV or SigmaUSD?", answer: "SigmaUSD for stability, SigRSV if you're bullish on ERG and want leveraged exposure. SigRSV is riskier but has more upside." },
      { question: "Why can't I always mint SigRSV?", answer: "Minting is restricted based on reserve ratio to protect the system. When reserves are low, SigRSV minting may be disabled." },
    ],
    category: "economics",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "rosen-bridge",
    term: "Rosen Bridge",
    shortDefinition: "Ergo's decentralized bridge for transferring assets between Ergo and other blockchains.",
    definition: "Rosen Bridge enables trustless cross-chain transfers using a network of watchers and guards. Unlike centralized bridges, Rosen uses multi-signature security and economic incentives to ensure honest operation. It currently supports transfers between Ergo, Cardano, Bitcoin, and Ethereum.",
    keywords: ["rosen bridge", "cross-chain bridge", "ergo bridge", "cardano bridge", "interoperability", "wrapped tokens"],
    keyPoints: [
      "Decentralized bridge architecture",
      "Watchers monitor source chain",
      "Guards sign destination transactions",
      "Multi-sig security model",
      "Supports multiple chains",
      "Enables wrapped asset transfers",
    ],
    useCases: [
      "Moving ERG to Cardano DeFi",
      "Bringing BTC/ETH to Ergo",
      "Cross-chain arbitrage",
      "Accessing liquidity across chains",
    ],
    relatedTags: ["Rosen Bridge", "cross-chain", "bridge", "interoperability", "wrapped tokens"],
    faq: [
      { question: "Is Rosen Bridge safe?", answer: "It uses decentralized watchers/guards with multi-sig security. While no bridge is risk-free, Rosen's design minimizes trust assumptions." },
      { question: "What chains does Rosen support?", answer: "Currently Ergo, Cardano, Bitcoin, and Ethereum, with more chains planned." },
    ],
    category: "scalability",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "sidechain",
    term: "Sidechain",
    shortDefinition: "A separate blockchain connected to a main chain, enabling specialized functionality while inheriting security.",
    definition: "Sidechains are independent blockchains that can transfer assets to/from a main chain via a two-way peg. They enable experimentation and scaling without changing the main chain. Ergo's NiPoPoWs enable efficient sidechain verification without requiring full chain downloads.",
    keywords: ["sidechain", "layer 2", "two-way peg", "scaling solution", "ergo sidechain"],
    keyPoints: [
      "Separate chain linked to main chain",
      "Two-way peg for asset transfers",
      "Can have different rules/features",
      "NiPoPoWs enable light verification",
      "Enables scaling and experimentation",
      "Inherits security from main chain",
    ],
    relatedTags: ["sidechain", "layer 2", "scaling", "NiPoPoW", "interoperability"],
    faq: [
      { question: "How are sidechains different from bridges?", answer: "Sidechains are full blockchains with their own consensus, connected via two-way pegs. Bridges connect independent chains without requiring a new chain." },
      { question: "Does Ergo have sidechains?", answer: "Ergo's architecture supports sidechains via NiPoPoWs. Projects can build specialized sidechains that verify Ergo state efficiently." },
    ],
    category: "scalability",
    difficulty: "advanced",
    publishDate: "2025-01-01",
  },

  {
    slug: "layer-2",
    term: "Layer 2",
    shortDefinition: "Scaling solutions built on top of a base blockchain (Layer 1) to increase throughput and reduce fees.",
    definition: "Layer 2 (L2) solutions process transactions off the main chain while inheriting its security. They reduce congestion and fees by batching or channeling transactions. Ergo's eUTXO model and NiPoPoWs make it well-suited for various L2 approaches including state channels and rollups.",
    keywords: ["layer 2", "l2", "scaling", "rollups", "state channels", "off-chain"],
    keyPoints: [
      "Built on top of Layer 1",
      "Processes transactions off-chain",
      "Settles periodically on main chain",
      "Reduces fees and increases throughput",
      "Inherits L1 security guarantees",
      "Multiple approaches: channels, rollups",
    ],
    relatedTags: ["Layer 2", "scaling", "rollups", "state channels", "throughput"],
    faq: [
      { question: "Does Ergo need Layer 2?", answer: "Ergo's base layer is already efficient, but L2 solutions can further increase throughput for high-volume applications." },
      { question: "What L2 solutions work with Ergo?", answer: "Ergo's eUTXO model supports state channels and potentially rollups. Subblocks also provide L1 scaling improvements." },
    ],
    category: "scalability",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "merkle-tree",
    term: "Merkle Tree",
    shortDefinition: "A data structure that efficiently summarizes and verifies large datasets using cryptographic hashes.",
    definition: "Merkle trees organize data into a binary tree where each leaf is a hash of data, and each node is a hash of its children. The root hash summarizes all data, enabling efficient proofs that specific data exists without revealing everything. Ergo uses Merkle trees for transaction verification and AVL+ trees for authenticated state.",
    keywords: ["merkle tree", "hash tree", "merkle root", "merkle proof", "data verification"],
    keyPoints: [
      "Binary tree of hashes",
      "Root summarizes all data",
      "Efficient inclusion proofs",
      "Changes propagate to root",
      "Used in block headers",
      "Enables light client verification",
    ],
    relatedTags: ["Merkle tree", "cryptography", "verification", "data structure"],
    faq: [
      { question: "What is a Merkle proof?", answer: "A Merkle proof shows that specific data is included in a tree by providing the path of hashes from the leaf to the root." },
      { question: "How does Ergo use Merkle trees?", answer: "Block headers contain Merkle roots of transactions and state. This enables efficient verification without downloading full blocks." },
    ],
    category: "general",
    difficulty: "advanced",
    publishDate: "2025-01-01",
  },

  {
    slug: "avl-tree",
    term: "AVL+ Tree",
    shortDefinition: "Ergo's authenticated data structure for efficient state storage and verification.",
    definition: "AVL+ trees are self-balancing binary search trees with cryptographic authentication. Ergo uses them to store the UTXO set, enabling efficient proofs of inclusion/exclusion. This allows light clients to verify state without trusting full nodes, supporting Ergo's goal of accessible verification.",
    keywords: ["avl tree", "authenticated data structure", "state storage", "ergo state", "utxo set"],
    keyPoints: [
      "Self-balancing for efficiency",
      "Cryptographically authenticated",
      "Stores Ergo's UTXO set",
      "Enables state proofs",
      "Supports light client verification",
      "Logarithmic proof sizes",
    ],
    relatedTags: ["AVL tree", "data structure", "state", "verification", "UTXO"],
    faq: [
      { question: "Why AVL+ instead of regular Merkle trees?", answer: "AVL+ trees support efficient updates and proofs of non-inclusion, important for UTXO-based systems where you need to prove boxes don't exist." },
    ],
    category: "general",
    difficulty: "advanced",
    publishDate: "2025-01-01",
  },

  {
    slug: "difficulty-adjustment",
    term: "Difficulty Adjustment",
    shortDefinition: "Automatic adjustment of mining difficulty to maintain consistent block times despite hash rate changes.",
    definition: "Difficulty adjustment ensures blocks are found at a target rate regardless of total mining power. Ergo adjusts difficulty every block using an epoch-based algorithm, targeting ~2 minute blocks. This prevents both too-fast blocks (during hash rate surges) and too-slow blocks (during drops).",
    keywords: ["difficulty adjustment", "mining difficulty", "block time", "epoch", "retarget"],
    keyPoints: [
      "Maintains ~2 minute block target",
      "Adjusts every block on Ergo",
      "Responds to hash rate changes",
      "Prevents gaming/manipulation",
      "Ensures consistent block production",
      "Uses epoch-based calculation",
    ],
    relatedTags: ["difficulty", "mining", "block time", "Autolykos"],
    faq: [
      { question: "How often does Ergo adjust difficulty?", answer: "Every block, using a weighted average of recent block times. This provides smooth adjustment to hash rate changes." },
      { question: "What happens if many miners leave?", answer: "Difficulty decreases, making mining easier until block times return to target. The network self-adjusts." },
    ],
    category: "mining",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "mining-pool",
    term: "Mining Pool",
    shortDefinition: "A group of miners combining hash power to find blocks more consistently and share rewards.",
    definition: "Mining pools aggregate hash power from many miners to reduce reward variance. Instead of waiting months for a solo block, pool miners receive frequent smaller payments proportional to their contribution. Popular Ergo pools include Getblok, Herominers, and 2miners.",
    keywords: ["mining pool", "pool mining", "getblok", "herominers", "shared mining", "pplns"],
    keyPoints: [
      "Combines hash power of many miners",
      "More consistent rewards",
      "Pool takes small fee (1-2%)",
      "Various payout schemes (PPLNS, PPS)",
      "Reduces solo mining variance",
      "Multiple pools = healthier network",
    ],
    relatedTags: ["mining pool", "mining", "Getblok", "pool mining"],
    faq: [
      { question: "Which Ergo mining pool should I use?", answer: "Choose based on fees, payout method, server location, and pool size. Smaller pools help decentralization but have more variance." },
      { question: "Is pool mining better than solo?", answer: "For most miners, yes. Solo mining only makes sense with significant hash power or if you're okay with very irregular rewards." },
    ],
    category: "mining",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "gpu-mining",
    term: "GPU Mining",
    shortDefinition: "Using graphics cards (GPUs) to mine cryptocurrency, as opposed to specialized ASIC hardware.",
    definition: "GPU mining uses consumer graphics cards to perform mining calculations. Ergo's Autolykos algorithm is designed to be GPU-friendly and ASIC-resistant, keeping mining accessible to regular users. This promotes decentralization by preventing mining concentration in ASIC farms.",
    keywords: ["gpu mining", "graphics card mining", "asic resistant", "ergo mining", "nvidia mining", "amd mining"],
    keyPoints: [
      "Uses consumer graphics cards",
      "Autolykos is memory-hard (favors GPUs)",
      "More accessible than ASIC mining",
      "Promotes decentralization",
      "Can mine other coins too",
      "Lower barrier to entry",
    ],
    relatedTags: ["GPU mining", "Autolykos", "ASIC resistance", "mining"],
    faq: [
      { question: "What GPUs work best for Ergo?", answer: "GPUs with 4GB+ VRAM. Both NVIDIA and AMD cards work well. Higher memory bandwidth generally means better performance." },
      { question: "Is Ergo mining profitable?", answer: "Depends on electricity costs, hardware, and ERG price. Use mining calculators to estimate based on your specific situation." },
    ],
    category: "mining",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "mempool",
    term: "Mempool",
    shortDefinition: "The waiting area for unconfirmed transactions before they're included in a block.",
    definition: "The mempool (memory pool) holds valid transactions waiting for block inclusion. Miners select transactions from the mempool, typically prioritizing higher fees. On Ergo, the eUTXO model means transactions reference specific boxes, reducing mempool complexity and preventing certain MEV attacks.",
    keywords: ["mempool", "transaction pool", "unconfirmed transactions", "pending transactions"],
    keyPoints: [
      "Holds pending transactions",
      "Miners select from mempool",
      "Higher fees = faster inclusion",
      "Each node has its own mempool",
      "Transactions expire if not mined",
      "eUTXO reduces mempool conflicts",
    ],
    relatedTags: ["mempool", "transactions", "mining", "fees"],
    faq: [
      { question: "Why is my transaction stuck?", answer: "Low fee or network congestion. On Ergo, fees are predictable so stuck transactions are rare. Wait or resubmit with higher fee." },
      { question: "How long do transactions stay in mempool?", answer: "Typically until mined or expired. Ergo transactions have a limited validity period based on block height." },
    ],
    category: "general",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "confirmation",
    term: "Confirmation",
    shortDefinition: "The number of blocks added after a transaction, indicating how secure/final it is.",
    definition: "Each block added after your transaction is a confirmation. More confirmations mean higher security - an attacker would need to rewrite more blocks to reverse your transaction. For Ergo, 10+ confirmations (~20 minutes) is considered highly secure for large amounts.",
    keywords: ["confirmation", "block confirmation", "transaction finality", "confirmations needed"],
    keyPoints: [
      "1 confirmation = included in a block",
      "More confirmations = more secure",
      "Ergo: ~2 minutes per confirmation",
      "Small amounts: 1-3 confirmations okay",
      "Large amounts: wait for 10+",
      "Exchanges often require 20-50",
    ],
    relatedTags: ["confirmation", "finality", "security", "transactions"],
    faq: [
      { question: "How many confirmations do I need?", answer: "Depends on amount. For small transactions, 1-3 is fine. For large amounts or exchanges, wait for 10-20+ confirmations." },
      { question: "Can confirmed transactions be reversed?", answer: "Theoretically possible with enough hash power (51% attack), but practically impossible after many confirmations. Ergo has never had a successful attack." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "finality",
    term: "Finality",
    shortDefinition: "The guarantee that a transaction cannot be reversed or altered once confirmed.",
    definition: "Finality is when a transaction becomes irreversible. In PoW chains like Ergo, finality is probabilistic - each confirmation makes reversal exponentially harder. After enough confirmations, reversal is practically impossible. This differs from some PoS chains that claim instant finality but may have other tradeoffs.",
    keywords: ["finality", "transaction finality", "irreversible", "settlement finality"],
    keyPoints: [
      "PoW finality is probabilistic",
      "Each confirmation increases security",
      "Practically final after 10+ blocks",
      "Different from instant finality claims",
      "Trade-off: slower but more secure",
      "No trusted finality gadget needed",
    ],
    relatedTags: ["finality", "confirmation", "security", "settlement"],
    faq: [
      { question: "Does Ergo have instant finality?", answer: "No, Ergo uses probabilistic finality like Bitcoin. Transactions become exponentially harder to reverse with each confirmation." },
      { question: "Is probabilistic finality a problem?", answer: "No. After sufficient confirmations, reversal is practically impossible. Instant finality often requires trusting a committee." },
    ],
    category: "consensus",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "51-percent-attack",
    term: "51% Attack",
    shortDefinition: "An attack where someone controls majority hash power to potentially reverse transactions or double-spend.",
    definition: "A 51% attack occurs when an entity controls more than half the network's mining power, potentially enabling double-spends or transaction censorship. On Ergo, the cost of such an attack is prohibitive due to the distributed hash rate, ASIC-resistance, and the need to sustain the attack.",
    keywords: ["51 percent attack", "majority attack", "double spend", "hash power attack", "network attack"],
    keyPoints: [
      "Requires >50% of hash power",
      "Could enable double-spending",
      "Very expensive to execute",
      "ASIC-resistance helps prevent",
      "Attack must be sustained",
      "Never successfully done on Ergo",
    ],
    relatedTags: ["51% attack", "security", "hash rate", "double spend"],
    faq: [
      { question: "Has Ergo ever been 51% attacked?", answer: "No. The distributed mining community and ASIC-resistance make attacks economically unfeasible." },
      { question: "How does Ergo prevent 51% attacks?", answer: "ASIC-resistance distributes mining, making it hard to accumulate majority hash power. The attack cost far exceeds potential gains." },
    ],
    category: "consensus",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "double-spend",
    term: "Double Spend",
    shortDefinition: "Fraudulently spending the same cryptocurrency twice, which blockchain consensus prevents.",
    definition: "Double spending is the fundamental problem digital currencies must solve - preventing someone from spending the same coins twice. Blockchain consensus (like Ergo's PoW) solves this by having the network agree on a single transaction history. The eUTXO model makes double-spends even harder as each box can only be spent once.",
    keywords: ["double spend", "double spending", "fraud prevention", "consensus problem"],
    keyPoints: [
      "Core problem blockchains solve",
      "Consensus prevents double-spends",
      "eUTXO: each box spent only once",
      "Wait for confirmations for safety",
      "Would require 51% attack",
      "Never happened on Ergo",
    ],
    relatedTags: ["double spend", "security", "consensus", "UTXO"],
    faq: [
      { question: "Can I double-spend on Ergo?", answer: "No. The network rejects transactions spending already-spent boxes. Only one transaction can consume each box." },
      { question: "How many confirmations prevent double-spend?", answer: "Even 1 confirmation makes double-spend very difficult. For large amounts, wait for 10+ to be completely safe." },
    ],
    category: "consensus",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "front-running",
    term: "Front-Running",
    shortDefinition: "Exploiting advance knowledge of pending transactions to profit, common in DeFi on account-based chains.",
    definition: "Front-running occurs when someone sees your pending transaction and submits their own with higher fees to execute first, profiting at your expense. This is rampant on Ethereum DeFi. Ergo's eUTXO model largely prevents front-running because transactions reference specific boxes - there's nothing to front-run.",
    keywords: ["front-running", "mev", "sandwich attack", "transaction ordering", "defi exploit"],
    keyPoints: [
      "Exploits pending transaction visibility",
      "Common MEV extraction method",
      "Costs DeFi users billions yearly",
      "eUTXO makes front-running impractical",
      "Transactions reference specific boxes",
      "No global state to exploit",
    ],
    relatedTags: ["front-running", "MEV", "DeFi", "eUTXO", "security"],
    faq: [
      { question: "Can I be front-run on Ergo?", answer: "Largely no. eUTXO transactions reference specific boxes, so there's no shared state for attackers to exploit like on Ethereum." },
      { question: "What about sandwich attacks?", answer: "Also very difficult on Ergo. The eUTXO model's local state prevents the global state manipulation needed for sandwiching." },
    ],
    category: "smart-contracts",
    difficulty: "intermediate",
    learnMoreUrl: "/questions/what-is-mev-resistance",
    publishDate: "2025-01-01",
  },

  {
    slug: "sandwich-attack",
    term: "Sandwich Attack",
    shortDefinition: "A MEV attack that places transactions before and after a victim's trade to extract profit.",
    definition: "In a sandwich attack, an attacker sees your pending DEX trade, buys before you (raising the price), lets your trade execute at the worse price, then sells after (profiting from the price impact). This is a major problem on Ethereum. Ergo's eUTXO model makes sandwiching impractical.",
    keywords: ["sandwich attack", "mev attack", "defi exploit", "front-running", "dex attack"],
    keyPoints: [
      "Buy before victim, sell after",
      "Extracts value from traders",
      "Requires seeing pending transactions",
      "Very common on Ethereum",
      "eUTXO prevents this attack",
      "Part of 'dark forest' problem",
    ],
    relatedTags: ["sandwich attack", "MEV", "front-running", "DeFi", "security"],
    faq: [
      { question: "How much do sandwich attacks cost users?", answer: "On Ethereum, billions of dollars yearly. Ergo users don't face this problem due to eUTXO architecture." },
      { question: "Why can't sandwiches happen on Ergo?", answer: "eUTXO transactions consume specific boxes. An attacker can't insert transactions that affect your specific boxes." },
    ],
    category: "smart-contracts",
    difficulty: "intermediate",
    learnMoreUrl: "/infographics/mev-resistance-vs-dark-forest",
    publishDate: "2025-01-01",
  },

  {
    slug: "token",
    term: "Token",
    shortDefinition: "A digital asset created on a blockchain, representing value, utility, or ownership.",
    definition: "Tokens are digital assets issued on existing blockchains. On Ergo, tokens are first-class citizens - native to the protocol without needing wrapper contracts like ERC-20. Any Ergo box can hold multiple tokens alongside ERG, enabling efficient multi-asset transactions.",
    keywords: ["token", "crypto token", "ergo token", "native tokens", "digital asset"],
    keyPoints: [
      "Native on Ergo (no wrapper contracts)",
      "Any box can hold multiple tokens",
      "Efficient multi-token transactions",
      "Used for NFTs, governance, utility",
      "Minting costs minimal ERG",
      "Inherits Ergo's security",
    ],
    useCases: [
      "Project tokens",
      "NFTs and collectibles",
      "Stablecoins (SigmaUSD)",
      "Governance tokens",
      "Wrapped assets",
    ],
    relatedTags: ["token", "native tokens", "NFT", "digital assets"],
    faq: [
      { question: "How do I create a token on Ergo?", answer: "Tokens can be minted in any transaction. Tools like Ergo Token Minter make it easy. Cost is minimal (transaction fee only)." },
      { question: "Are Ergo tokens like ERC-20?", answer: "Better - they're native to the protocol. No wrapper contracts needed, more efficient, and inherit full Ergo security." },
    ],
    category: "smart-contracts",
    difficulty: "beginner",
    docsUrl: "/technology/native-tokens",
    publishDate: "2025-01-01",
  },

  {
    slug: "nft",
    term: "NFT (Non-Fungible Token)",
    shortDefinition: "A unique digital token representing ownership of a specific asset, artwork, or item.",
    definition: "NFTs are tokens with quantity of 1, making each unique and non-interchangeable. On Ergo, NFTs are native tokens with special properties. They're used for digital art, collectibles, gaming items, and proof of ownership. Ergo NFTs benefit from low fees and native multi-asset support.",
    keywords: ["nft", "non-fungible token", "digital art", "ergo nft", "collectibles", "unique token"],
    keyPoints: [
      "Unique tokens (quantity = 1)",
      "Native on Ergo protocol",
      "Low minting/transfer fees",
      "Can include metadata",
      "Used for art, gaming, ownership",
      "Marketplaces: SkyHarbor, etc.",
    ],
    useCases: [
      "Digital art and collectibles",
      "Gaming items",
      "Event tickets",
      "Membership tokens",
      "Real-world asset representation",
    ],
    relatedTags: ["NFT", "tokens", "digital art", "collectibles"],
    faq: [
      { question: "Where can I buy Ergo NFTs?", answer: "SkyHarbor is the main Ergo NFT marketplace. You can browse, buy, and sell NFTs directly from your wallet." },
      { question: "How much does it cost to mint an NFT?", answer: "Just the transaction fee (~0.001 ERG). Much cheaper than Ethereum NFT minting." },
    ],
    category: "smart-contracts",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "governance",
    term: "Governance",
    shortDefinition: "The system by which blockchain protocol changes and community decisions are made.",
    definition: "Governance determines how a blockchain evolves - who can propose changes and how decisions are made. Ergo uses on-chain governance where miners vote on protocol parameters. The community also participates through discussion, proposals, and ecosystem development. No single entity controls Ergo's direction.",
    keywords: ["governance", "on-chain governance", "voting", "protocol changes", "decentralized governance"],
    keyPoints: [
      "Miners vote on protocol parameters",
      "Community-driven development",
      "No central authority",
      "Proposals discussed openly",
      "Ergo Foundation facilitates (doesn't control)",
      "Fair launch = no controlling stakeholders",
    ],
    relatedTags: ["governance", "voting", "decentralization", "community"],
    faq: [
      { question: "Who controls Ergo?", answer: "No one entity. Miners vote on parameters, developers propose changes, and the community discusses direction. Ergo Foundation facilitates but doesn't control." },
      { question: "How can I participate in governance?", answer: "Join community discussions, contribute to development, run a node, or mine. Governance is open to all participants." },
    ],
    category: "general",
    difficulty: "intermediate",
    publishDate: "2025-01-01",
  },

  {
    slug: "ergo-foundation",
    term: "Ergo Foundation",
    shortDefinition: "A non-profit entity that supports Ergo ecosystem development without controlling the protocol.",
    definition: "The Ergo Foundation is a community-organized entity that supports ecosystem growth through grants, partnerships, and development coordination. Unlike VC-backed foundations, it doesn't control the protocol or hold majority tokens. It facilitates development but Ergo remains truly decentralized.",
    keywords: ["ergo foundation", "foundation", "ecosystem support", "grants", "development"],
    keyPoints: [
      "Non-profit supporting ecosystem",
      "Provides grants to developers",
      "Facilitates partnerships",
      "Does NOT control protocol",
      "Funded by small treasury allocation",
      "Community-accountable",
    ],
    relatedTags: ["Ergo Foundation", "ecosystem", "grants", "development"],
    faq: [
      { question: "Does the Ergo Foundation control Ergo?", answer: "No. The Foundation supports development but doesn't control the protocol. Miners and community govern Ergo." },
      { question: "How is the Foundation funded?", answer: "A small portion of block rewards went to treasury during emission. The Foundation manages these funds transparently." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "cypherpunk",
    term: "Cypherpunk",
    shortDefinition: "A movement advocating privacy-enhancing technologies and cryptography for social change.",
    definition: "Cypherpunks believe in using cryptography to protect privacy and individual freedom from surveillance and control. The movement, starting in the 1990s, inspired Bitcoin and cryptocurrencies. Ergo embraces cypherpunk values: privacy by design, open source, fair launch, and tools for financial freedom.",
    keywords: ["cypherpunk", "privacy", "cryptography", "financial freedom", "ergo philosophy"],
    keyPoints: [
      "Privacy through cryptography",
      "Individual sovereignty",
      "Open-source ethos",
      "Distrust of central authority",
      "Inspired Bitcoin and crypto",
      "Core to Ergo's philosophy",
    ],
    relatedTags: ["cypherpunk", "privacy", "philosophy", "financial freedom"],
    faq: [
      { question: "Is Ergo a cypherpunk project?", answer: "Yes. Ergo embodies cypherpunk values: privacy tools (Sigma protocols), fair launch, open source, and focus on individual financial freedom." },
      { question: "What's the cypherpunk manifesto?", answer: "A 1993 document by Eric Hughes stating 'Privacy is necessary for an open society' and advocating cryptographic tools for privacy." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },

  {
    slug: "financial-freedom",
    term: "Financial Freedom",
    shortDefinition: "The ability to control your own money without permission from banks or governments.",
    definition: "Financial freedom means having full control over your assets - the ability to save, spend, and transact without requiring permission from intermediaries. Ergo enables this through self-custody, censorship-resistant transactions, and privacy tools. No bank can freeze your ERG; no government can block your transaction.",
    keywords: ["financial freedom", "self custody", "censorship resistance", "financial sovereignty", "unbanked"],
    keyPoints: [
      "Self-custody of assets",
      "No permission needed to transact",
      "Censorship-resistant transfers",
      "Privacy when you need it",
      "No account freezes possible",
      "Accessible to the unbanked",
    ],
    useCases: [
      "Escaping capital controls",
      "Protecting savings from inflation",
      "Transacting without surveillance",
      "Financial access for unbanked",
      "Preserving wealth across borders",
    ],
    relatedTags: ["financial freedom", "self-custody", "censorship resistance", "privacy"],
    faq: [
      { question: "How does Ergo enable financial freedom?", answer: "Self-custody (you hold your keys), censorship-resistant transactions, privacy tools, and no central authority that can freeze or seize funds." },
      { question: "Is this only for criminals?", answer: "No. Financial freedom is a human right. It protects savings, enables commerce, and provides access to the 2 billion unbanked people worldwide." },
    ],
    category: "general",
    difficulty: "beginner",
    publishDate: "2025-01-01",
  },
];

// Helper functions
export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(t => t.slug === slug);
}

export function getAllTermSlugs(): string[] {
  return glossaryTerms.map(t => t.slug);
}

export function getTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return glossaryTerms.filter(t => t.category === category);
}

export function getTermsByDifficulty(difficulty: GlossaryTerm['difficulty']): GlossaryTerm[] {
  return glossaryTerms.filter(t => t.difficulty === difficulty);
}

export function searchTerms(query: string): GlossaryTerm[] {
  const q = query.toLowerCase();
  return glossaryTerms.filter(t => 
    t.term.toLowerCase().includes(q) ||
    t.shortDefinition.toLowerCase().includes(q) ||
    t.keywords.some(k => k.toLowerCase().includes(q))
  );
}

// Category metadata
export const glossaryCategories = {
  'consensus': { name: 'Consensus & Mining', icon: 'Cpu', color: 'orange' },
  'smart-contracts': { name: 'Smart Contracts', icon: 'Code', color: 'blue' },
  'privacy': { name: 'Privacy', icon: 'Eye', color: 'purple' },
  'scalability': { name: 'Scalability', icon: 'Zap', color: 'green' },
  'economics': { name: 'Economics', icon: 'Coins', color: 'yellow' },
  'mining': { name: 'Mining', icon: 'Pickaxe', color: 'orange' },
  'general': { name: 'General', icon: 'BookOpen', color: 'gray' },
} as const;

