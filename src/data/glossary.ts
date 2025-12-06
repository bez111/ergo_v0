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

  // === MIGRATED FROM DOCS GLOSSARY ===

  {
    slug: "airdrop",
    term: "Airdrop",
    
    shortDefinition: "Free distribution of cryptocurrency tokens to wallet addresses, often used for marketing, community building, or rewarding early adopters.",
    
    definition: "An airdrop is a distribution method where cryptocurrency tokens are sent for free to eligible wallet addresses. Projects use airdrops to bootstrap their community, reward early supporters, distribute governance tokens fairly, or create awareness for new tokens. Unlike ICOs or token sales, airdrops don't require payment - eligibility is typically based on holding specific tokens, participating in the ecosystem, or completing certain tasks. In the Ergo ecosystem, various projects have conducted airdrops to reward active community members and ERG holders.",
    
    keywords: ["airdrop", "token distribution", "free tokens", "crypto airdrop", "token giveaway", "community rewards", "fair distribution"],
    
    keyPoints: [
      "Free tokens distributed to eligible wallet addresses",
      "Common eligibility: holding specific tokens, ecosystem participation, or social tasks",
      "Used for fair token distribution and community building",
      "No payment required unlike ICOs or token sales",
      "Ergo ecosystem projects sometimes airdrop to ERG holders",
      "Always verify airdrop legitimacy to avoid scams",
    ],
    
    technicalDetails: "Airdrops on Ergo leverage native token support - projects can create tokens and distribute them to addresses in batch transactions. Smart contracts can automate distribution based on criteria like ERG holdings at a specific block height (snapshot). The eUTXO model makes airdrops efficient as tokens can be sent to many addresses in fewer transactions compared to account-based chains.",
    
    useCases: [
      "Rewarding early community members and ERG holders",
      "Distributing governance tokens for DAOs",
      "Marketing new projects and creating awareness",
      "Fair launch token distribution without pre-sales",
      "Incentivizing participation in testnets or beta programs",
    ],
    
    relatedTags: ["Airdrop", "tokens", "distribution", "community", "fair launch", "governance tokens"],
    
    faq: [
      {
        question: "What is a crypto airdrop?",
        answer: "A crypto airdrop is a free distribution of tokens to wallet addresses. Projects use airdrops to reward early supporters, distribute governance tokens fairly, or build community awareness without requiring payment.",
      },
      {
        question: "How do I receive airdrops on Ergo?",
        answer: "To receive airdrops on Ergo, you typically need to hold ERG in a non-custodial wallet (like Nautilus or SAFEW), participate in ecosystem activities, or meet specific criteria set by the project. Always verify airdrops through official channels to avoid scams.",
      },
      {
        question: "Are airdrops safe?",
        answer: "Legitimate airdrops are safe, but scammers often create fake airdrops to steal funds. Never share your seed phrase, never pay to receive an airdrop, and always verify through official project channels. If it seems too good to be true, it probably is.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "algorithm",
    term: "Algorithm",
    
    shortDefinition: "A precise set of instructions for solving a problem or performing a computation. In crypto, refers to mining algorithms (like Autolykos) or cryptographic algorithms.",
    
    definition: "An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. In cryptocurrency, algorithms are fundamental to everything from mining (Proof-of-Work algorithms like Autolykos), to cryptographic security (hashing algorithms like Blake2b), to consensus mechanisms. Ergo uses the Autolykos 2 algorithm for mining - a memory-hard, ASIC-resistant algorithm that enables fair GPU mining. The choice of algorithm significantly impacts a blockchain's security, decentralization, and energy efficiency.",
    
    keywords: ["algorithm", "autolykos", "mining algorithm", "cryptographic algorithm", "hashing", "proof of work", "blake2b"],
    
    keyPoints: [
      "Step-by-step instructions for computation",
      "Mining algorithms determine how blocks are created",
      "Ergo uses Autolykos 2 - memory-hard, ASIC-resistant",
      "Cryptographic algorithms secure transactions and wallets",
      "Algorithm choice affects decentralization and security",
      "Different algorithms suit different hardware (GPU vs ASIC)",
    ],
    
    technicalDetails: "Ergo's Autolykos 2 algorithm requires miners to solve memory-hard puzzles using GPU VRAM (minimum 4GB). It uses Blake2b256 for hashing and requires significant memory bandwidth, making ASIC development economically impractical. The algorithm adjusts difficulty every epoch to maintain ~2 minute block times. For cryptographic operations, Ergo uses Sigma protocols built on discrete logarithm assumptions.",
    
    useCases: [
      "Understanding how Ergo mining works",
      "Comparing mining algorithms across blockchains",
      "Evaluating ASIC-resistance claims",
      "Understanding cryptographic security foundations",
    ],
    
    relatedTags: ["Algorithm", "Autolykos", "mining", "cryptography", "Proof of Work", "Blake2b"],
    
    faq: [
      {
        question: "What algorithm does Ergo use for mining?",
        answer: "Ergo uses Autolykos 2, a memory-hard Proof-of-Work algorithm designed for GPU mining. It requires 4GB+ VRAM and is resistant to ASIC mining, promoting decentralization by allowing anyone with a consumer GPU to participate.",
      },
      {
        question: "Why does the mining algorithm matter?",
        answer: "The mining algorithm determines who can mine and how. ASIC-friendly algorithms (like Bitcoin's SHA-256) favor specialized hardware and large operations. ASIC-resistant algorithms (like Autolykos) allow GPU mining, promoting decentralization and fair distribution.",
      },
      {
        question: "What cryptographic algorithms does Ergo use?",
        answer: "Ergo uses Blake2b256 for hashing, Sigma protocols for zero-knowledge proofs, and secp256k1 for digital signatures. These algorithms provide the cryptographic foundation for transaction security, privacy features, and smart contract execution.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    learnMoreUrl: "/miners",
    docsUrl: "/docs/mining/autolykos",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "ambassador",
    term: "Ambassador",
    
    shortDefinition: "Community members who represent and promote Ergo in their regions or areas of expertise, part of the Sigmanaut grassroots movement.",
    
    definition: "Ergo Ambassadors are community members who actively represent and promote the Ergo ecosystem. They're part of the broader Sigmanaut movement focused on grassroots, decentralized growth. Ambassadors may focus on specific regions (building local communities), languages (translating content), or expertise areas (development, trading, mining). Unlike paid marketing roles, ambassadors are volunteers driven by belief in Ergo's mission, though they may receive community funding for specific initiatives.",
    
    keywords: ["ambassador", "community", "sigmanauts", "promotion", "grassroots", "regional", "volunteer"],
    
    keyPoints: [
      "Community representatives for Ergo",
      "Part of Sigmanaut grassroots movement",
      "Regional, language, or expertise focus",
      "Volunteer-driven with community support",
      "Create content, events, translations",
      "Help onboard new users",
    ],
    
    technicalDetails: "Ambassadors coordinate through Discord and community channels. They may receive funding through Ergo Foundation grants or community treasury proposals for specific projects. Activities include: creating educational content, organizing meetups, translating documentation, answering questions in local communities, and representing Ergo at events.",
    
    useCases: [
      "Building regional Ergo communities",
      "Translating content to local languages",
      "Organizing local meetups and events",
      "Creating educational content",
      "Onboarding new users",
    ],
    
    relatedTags: ["Ambassador", "Sigmanauts", "community", "grassroots", "promotion"],
    
    faq: [
      {
        question: "What is an Ergo Ambassador?",
        answer: "An Ergo Ambassador is a community member who represents and promotes Ergo, often focusing on a specific region, language, or expertise area. They're part of the Sigmanaut grassroots movement for decentralized community growth.",
      },
      {
        question: "How can I become an Ambassador?",
        answer: "Start contributing! Join Discord, help answer questions, create content, or organize local activities. There's no formal application - ambassadors emerge through consistent contribution. The community recognizes and supports active contributors.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/ecosystem/community",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "aml",
    term: "AML (Anti-Money Laundering)",
    
    shortDefinition: "Regulatory framework requiring financial institutions to detect and prevent money laundering. Ergo's optional privacy allows compliance while preserving user choice.",
    
    definition: "Anti-Money Laundering (AML) refers to laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income. In cryptocurrency, AML typically involves exchanges implementing Know Your Customer (KYC) procedures and transaction monitoring. Ergo's approach to privacy is AML-compatible: it offers optional privacy features (Sigma protocols, ErgoMixer) rather than privacy-by-default, allowing users to prove transaction legitimacy when required while maintaining privacy for everyday transactions.",
    
    keywords: ["aml", "anti-money laundering", "kyc", "compliance", "regulation", "privacy", "exchanges"],
    
    keyPoints: [
      "Regulations to prevent laundering criminal proceeds",
      "Requires KYC on centralized exchanges",
      "Ergo offers optional, not mandatory, privacy",
      "Sigma protocols enable selective disclosure",
      "Can prove transaction legitimacy when needed",
      "Balances privacy with regulatory compliance",
    ],
    
    technicalDetails: "Ergo's Sigma protocols enable 'compliant privacy' - users can create zero-knowledge proofs about their transactions without revealing all details. For example, proving funds came from a legitimate source without revealing the exact source. This contrasts with privacy-by-default coins where proving legitimacy is difficult. Exchanges listing ERG implement standard AML/KYC procedures.",
    
    useCases: [
      "Understanding exchange requirements",
      "Evaluating Ergo's regulatory positioning",
      "Proving transaction legitimacy when required",
      "Selective disclosure for compliance",
    ],
    
    relatedTags: ["AML", "KYC", "compliance", "privacy", "regulation", "exchanges"],
    
    faq: [
      {
        question: "What is AML in crypto?",
        answer: "Anti-Money Laundering (AML) refers to regulations requiring crypto exchanges to verify user identities (KYC) and monitor transactions to prevent money laundering. Most centralized exchanges implement AML procedures.",
      },
      {
        question: "Is Ergo AML compliant?",
        answer: "Ergo offers optional privacy, not privacy-by-default, making it more compatible with AML requirements. Users can prove transaction legitimacy using Sigma protocols when needed, while maintaining privacy for everyday transactions.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "analytics",
    term: "Analytics",
    
    shortDefinition: "Tools and methods for analyzing blockchain data - transaction patterns, network metrics, DeFi stats, and market data. Essential for research and informed decisions.",
    
    definition: "Blockchain analytics involves collecting, processing, and analyzing on-chain data to derive insights about network activity, user behavior, market trends, and protocol health. For Ergo, analytics tools track metrics like hash rate, transaction volume, DeFi TVL (Total Value Locked), token distributions, and wallet activity. Platforms like Ergo Watch, Spectrum Finance analytics, and block explorers provide this data. Analytics help users make informed decisions, researchers study network behavior, and developers optimize applications.",
    
    keywords: ["analytics", "blockchain analytics", "on-chain data", "metrics", "ergo watch", "tvl", "hash rate", "transaction volume"],
    
    keyPoints: [
      "Analysis of on-chain blockchain data",
      "Tracks network metrics (hash rate, TPS, fees)",
      "DeFi analytics (TVL, trading volume, yields)",
      "Market data (price, volume, liquidity)",
      "Tools: Ergo Watch, explorers, Spectrum stats",
      "Essential for research and decision-making",
    ],
    
    technicalDetails: "Blockchain analytics tools index blockchain data into queryable databases. They track: block production and mining stats, transaction counts and fees, UTXO set size, token movements, smart contract interactions, and derived metrics like TVL. Ergo's transparent blockchain makes all this data publicly available, though analyzing it requires specialized tools and expertise.",
    
    useCases: [
      "Monitoring network health and adoption",
      "Researching DeFi opportunities and risks",
      "Tracking portfolio and transaction history",
      "Analyzing market trends and sentiment",
      "Auditing protocol activity",
    ],
    
    relatedTags: ["Analytics", "on-chain data", "metrics", "Ergo Watch", "DeFi", "research"],
    
    faq: [
      {
        question: "What is blockchain analytics?",
        answer: "Blockchain analytics is the analysis of on-chain data to understand network activity, user behavior, and market trends. Tools process blockchain data into readable metrics like transaction volume, hash rate, and DeFi TVL.",
      },
      {
        question: "Where can I find Ergo analytics?",
        answer: "Ergo Watch provides network metrics, Spectrum Finance shows DeFi analytics, block explorers (explorer.ergoplatform.com) show transaction data, and various community dashboards track specific metrics.",
      },
      {
        question: "Why is blockchain analytics useful?",
        answer: "Analytics help you make informed decisions - understanding network adoption trends, evaluating DeFi opportunities, tracking your own activity, and researching before investing. The transparency of blockchain data enables this analysis.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "api",
    term: "API (Application Programming Interface)",
    
    shortDefinition: "A programming interface that allows applications to interact with the Ergo blockchain, query data, submit transactions, and build dApps.",
    
    definition: "An API (Application Programming Interface) is a set of protocols, routines, and tools that enable different software applications to communicate with each other. In the context of Ergo, APIs allow developers to interact with the blockchain without needing to run a full node or understand the low-level protocol details. Ergo provides several APIs including the Node API for blockchain operations, Explorer API for querying historical data, and various dApp-specific APIs for interacting with ecosystem applications like DEXs and oracles.",
    
    keywords: ["api", "application programming interface", "ergo api", "node api", "explorer api", "rest api", "blockchain api", "developer tools", "dapp development"],
    
    keyPoints: [
      "Ergo Node API provides full blockchain interaction capabilities",
      "Explorer API enables querying transactions, addresses, and tokens",
      "REST APIs use standard HTTP methods (GET, POST, PUT, DELETE)",
      "APIs abstract complex blockchain operations into simple function calls",
      "Essential for building wallets, dApps, and blockchain integrations",
      "Most Ergo APIs return data in JSON format",
    ],
    
    technicalDetails: "The Ergo Node API runs on port 9053 (mainnet) or 9052 (testnet) and provides endpoints for wallet operations, transaction submission, blockchain queries, and mining. The Explorer API (api.ergoplatform.com) offers read-only access to indexed blockchain data including address balances, transaction history, and token information. For dApp development, libraries like Fleet SDK and ergo-lib-wasm provide high-level API wrappers.",
    
    useCases: [
      "Building cryptocurrency wallets and portfolio trackers",
      "Creating trading bots and DEX interfaces",
      "Developing blockchain explorers and analytics tools",
      "Integrating Ergo payments into e-commerce platforms",
      "Building oracle data feeds and price aggregators",
    ],
    
    relatedTags: ["API", "Node API", "Explorer API", "REST", "JSON", "dApp development", "blockchain"],
    
    faq: [
      {
        question: "What is the Ergo Node API?",
        answer: "The Ergo Node API is a RESTful interface provided by Ergo nodes that allows developers to interact with the blockchain, submit transactions, query wallet balances, and perform mining operations. It runs on port 9053 for mainnet.",
      },
      {
        question: "How do I query Ergo blockchain data via API?",
        answer: "You can use the Ergo Explorer API (api.ergoplatform.com) for read-only queries like address balances, transaction history, and token information. For write operations like submitting transactions, use the Ergo Node API with a running node.",
      },
      {
        question: "What programming languages can I use with Ergo APIs?",
        answer: "Ergo APIs are language-agnostic REST APIs that work with any language supporting HTTP requests. Popular choices include JavaScript/TypeScript (with Fleet SDK), Scala (ergo-appkit), Rust (ergo-lib), and Python (ergpy).",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/docs/developers",
    docsUrl: "https://docs.ergoplatform.com/node/api/",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "ape",
    term: "Ape",
    
    shortDefinition: "Crypto slang for buying into a project impulsively without thorough research. 'Aping in' means investing quickly based on hype or FOMO.",
    
    definition: "'Ape' or 'aping in' is crypto slang for investing in a token or project impulsively, often without thorough research (DYOR - Do Your Own Research). The term comes from the idea of acting on instinct like an ape rather than rational analysis. While sometimes used humorously, aping into projects carries significant risk - many tokens promoted on social media are scams or fail quickly. The Ergo community generally encourages careful research and understanding the technology before investing.",
    
    keywords: ["ape", "aping", "fomo", "dyor", "crypto slang", "impulsive investing", "risk"],
    
    keyPoints: [
      "Slang for impulsive, unresearched investing",
      "Often driven by FOMO or social media hype",
      "High risk - many promoted tokens fail",
      "Opposite of DYOR (Do Your Own Research)",
      "Common in meme coin and NFT culture",
      "Ergo community values research over hype",
    ],
    
    technicalDetails: "The term originated from crypto Twitter and Discord culture, particularly during the 2021 bull market when many invested in projects based solely on social media promotion. 'Ape' can be used as verb ('I aped into that token') or noun ('The apes are buying'). Related terms include 'degen' (degenerate gambler) and 'YOLO' (You Only Live Once).",
    
    useCases: [
      "Understanding crypto community slang",
      "Recognizing risky investment behavior",
      "Identifying hype-driven market movements",
    ],
    
    relatedTags: ["Ape", "FOMO", "DYOR", "crypto slang", "risk", "speculation"],
    
    faq: [
      {
        question: "What does 'ape' mean in crypto?",
        answer: "'Aping' means buying into a project impulsively without research, often due to FOMO or social media hype. It's risky behavior that can lead to losses when projects fail or turn out to be scams.",
      },
      {
        question: "Should I 'ape' into Ergo?",
        answer: "The Ergo community encourages DYOR (Do Your Own Research) rather than impulsive investing. Learn about Ergo's technology, use cases, and team before investing. Understanding what you're buying leads to better decisions and stronger hands.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "asic",
    term: "ASIC (Application-Specific Integrated Circuit)",
    
    shortDefinition: "A specialized hardware chip designed exclusively for cryptocurrency mining, offering high efficiency but often leading to mining centralization.",
    
    definition: "An ASIC (Application-Specific Integrated Circuit) is a microchip designed for a specific purpose rather than general computing. In cryptocurrency, ASICs are built exclusively to mine particular algorithms (like SHA-256 for Bitcoin), offering 100-1000x more efficiency than GPUs. While ASICs maximize mining profitability, they tend to centralize mining power among wealthy entities who can afford expensive specialized hardware. Ergo uses the Autolykos algorithm which is designed to be ASIC-resistant, allowing GPU miners to compete fairly.",
    
    keywords: ["asic", "asic mining", "asic resistance", "mining hardware", "specialized mining", "gpu vs asic", "mining centralization", "autolykos"],
    
    keyPoints: [
      "ASICs are 100-1000x more efficient than GPUs for specific algorithms",
      "High cost ($2,000-$15,000+) creates barriers to entry",
      "Lead to mining centralization and manufacturer dependency",
      "Cannot be repurposed for other algorithms or tasks",
      "Ergo's Autolykos is designed to resist ASIC development",
      "GPU mining promotes decentralization and accessibility",
    ],
    
    technicalDetails: "ASICs achieve high efficiency by implementing mining algorithms directly in silicon, eliminating the overhead of general-purpose computing. However, this specialization means ASICs become worthless if the algorithm changes or the coin becomes unprofitable. Ergo's Autolykos 2 algorithm uses memory-hard computations requiring 2.5GB+ VRAM, making ASIC development economically impractical while remaining efficient on consumer GPUs.",
    
    useCases: [
      "Bitcoin mining (SHA-256 ASICs dominate)",
      "Litecoin mining (Scrypt ASICs)",
      "Understanding why Ergo chose ASIC-resistance",
      "Evaluating mining profitability and hardware choices",
    ],
    
    relatedTags: ["ASIC", "ASIC resistance", "GPU mining", "Autolykos", "mining", "decentralization", "Proof of Work"],
    
    faq: [
      {
        question: "What is an ASIC miner?",
        answer: "An ASIC miner is specialized hardware designed exclusively to mine a specific cryptocurrency algorithm. While extremely efficient, ASICs are expensive, cannot be repurposed, and tend to centralize mining power among wealthy operators.",
      },
      {
        question: "Why is Ergo ASIC-resistant?",
        answer: "Ergo uses the Autolykos algorithm which requires significant memory (2.5GB+ VRAM), making ASIC development economically impractical. This allows anyone with a consumer GPU to mine profitably, promoting decentralization and fair distribution.",
      },
      {
        question: "Can I mine Ergo with an ASIC?",
        answer: "No, Ergo cannot be efficiently mined with ASICs. The Autolykos algorithm is memory-hard and designed to run optimally on consumer GPUs. This is intentional to keep mining accessible and decentralized.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    learnMoreUrl: "/miners",
    docsUrl: "/docs/mining",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "asic-resistance",
    term: "ASIC Resistance",
    
    shortDefinition: "The property of an algorithm that makes it difficult for ASIC devices to mine efficiently (important for Ergo).",
    
    definition: "The property of an algorithm that makes it difficult for ASIC devices to mine efficiently (important for Ergo).",
    
    keywords: ["asic-resistance","asic resistance","ergo"],
    
    relatedTags: ["ASIC Resistance","Ergo"],
    
    faq: [
      {
        question: "What is ASIC Resistance?",
        answer: "The property of an algorithm that makes it difficult for ASIC devices to mine efficiently (important for Ergo).",
      },
    ],
    
    category: "mining",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "bitcoin",
    term: "Bitcoin (BTC)",
    
    shortDefinition: "The first and most well-known cryptocurrency, a decentralized digital currency that operates on a blockchain and enables peer-to-peer transactions.",
    
    definition: "The first and most well-known cryptocurrency, a decentralized digital currency that operates on a blockchain and enables peer-to-peer transactions.",
    
    keywords: ["bitcoin","bitcoin (btc)","transactions","blockchain"],
    
    relatedTags: ["Bitcoin (BTC)","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Bitcoin (BTC)?",
        answer: "The first and most well-known cryptocurrency, a decentralized digital currency that operates on a blockchain and enables peer-to-peer transactions.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "block",
    term: "Block",
    
    shortDefinition: "A collection of transactions bundled together and added to the blockchain as a permanent record.",
    
    definition: "A collection of transactions bundled together and added to the blockchain as a permanent record. Blocks are created by miners and linked together to form the blockchain. Each block contains a reference to the previous block, ensuring the integrity of the chain.",
    
    keywords: ["block","transactions","blockchain"],
    
    relatedTags: ["Block","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Block?",
        answer: "A collection of transactions bundled together and added to the blockchain as a permanent record.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "blockchain-pruning",
    term: "Blockchain Pruning",
    
    shortDefinition: "Technique to reduce node storage by discarding old blockchain data while keeping cryptographic proofs. Ergo's NiPoPoWs enable efficient pruned nodes.",
    
    definition: "Blockchain pruning is a technique that allows nodes to discard historical transaction data while retaining the ability to verify the chain's validity. Instead of storing the entire blockchain history (which can be hundreds of gigabytes), pruned nodes keep only recent data and cryptographic proofs of older blocks. Ergo's NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) enable particularly efficient pruning - nodes can verify the entire chain history using proofs of just a few kilobytes, making it practical to run nodes on resource-constrained devices.",
    
    keywords: ["blockchain pruning", "pruned node", "storage", "nipopows", "light node", "state management", "scalability"],
    
    keyPoints: [
      "Reduces node storage requirements significantly",
      "Keeps cryptographic proofs of discarded data",
      "Ergo's NiPoPoWs enable efficient verification",
      "Allows nodes on limited hardware",
      "Maintains security through cryptographic proofs",
      "Different from light clients (still validates)",
    ],
    
    technicalDetails: "Ergo nodes can prune historical UTXO data while keeping block headers and NiPoPoW proofs. The UTXO set (current spendable outputs) is always maintained. Pruned nodes can still validate new blocks and transactions but cannot serve historical data to other nodes. NiPoPoWs compress proof of the entire chain into logarithmic size, enabling verification without full history.",
    
    useCases: [
      "Running nodes on limited storage devices",
      "Reducing infrastructure costs",
      "Enabling more decentralized node operation",
      "Mobile or embedded node implementations",
    ],
    
    relatedTags: ["Blockchain Pruning", "NiPoPoWs", "storage", "nodes", "scalability"],
    
    faq: [
      {
        question: "What is blockchain pruning?",
        answer: "Pruning allows nodes to discard old blockchain data while keeping cryptographic proofs of validity. This reduces storage from hundreds of GB to much smaller sizes while maintaining security.",
      },
      {
        question: "Can Ergo nodes be pruned?",
        answer: "Yes, Ergo supports pruning enhanced by NiPoPoWs. Pruned nodes can verify the chain using compact proofs without storing full history, making it practical to run nodes on limited hardware.",
      },
      {
        question: "Is a pruned node less secure?",
        answer: "No, pruned nodes maintain full security through cryptographic proofs. They can validate all new transactions and blocks. The only limitation is they cannot serve historical data to other nodes syncing from scratch.",
      },
    ],
    
    category: "scalability",
    difficulty: "intermediate",
    
    learnMoreUrl: "/technology",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "blockchain-resilience",
    term: "Blockchain Resilience",
    
    shortDefinition: "A blockchain's ability to survive attacks, network partitions, and economic pressures. Ergo achieves resilience through PoW, decentralization, and sustainable economics.",
    
    definition: "Blockchain resilience refers to a network's ability to continue operating correctly under adverse conditions - including attacks, network partitions, regulatory pressure, and economic stress. Ergo is designed for long-term resilience through multiple mechanisms: Proof-of-Work provides objective consensus that survives network splits, ASIC-resistance promotes mining decentralization, Storage Rent ensures economic sustainability beyond emission, and the eUTXO model prevents certain attack vectors. A resilient blockchain can survive and recover from challenges that would compromise less robust systems.",
    
    keywords: ["blockchain resilience", "security", "decentralization", "sustainability", "proof of work", "storage rent", "attack resistance"],
    
    keyPoints: [
      "Ability to survive attacks and adverse conditions",
      "PoW provides objective, partition-tolerant consensus",
      "ASIC-resistance maintains mining decentralization",
      "Storage Rent ensures long-term economic viability",
      "eUTXO prevents MEV and reentrancy attacks",
      "Designed for decades of operation",
    ],
    
    technicalDetails: "Ergo's resilience comes from: 1) Autolykos PoW - objective consensus that resolves network splits without coordination, 2) Memory-hard mining - prevents ASIC centralization, 3) Storage Rent - sustainable fee model after emission ends, 4) eUTXO - deterministic execution preventing exploitation, 5) NiPoPoWs - enables light clients and cross-chain verification, 6) Open source - community can fork if needed.",
    
    useCases: [
      "Evaluating blockchain long-term viability",
      "Understanding security design principles",
      "Comparing consensus mechanism tradeoffs",
      "Assessing investment risk factors",
    ],
    
    relatedTags: ["Blockchain Resilience", "security", "Proof of Work", "Storage Rent", "decentralization"],
    
    faq: [
      {
        question: "What makes a blockchain resilient?",
        answer: "Resilience comes from decentralization (no single points of failure), robust consensus (survives attacks and partitions), sustainable economics (continues after initial rewards), and secure design (resistant to exploitation).",
      },
      {
        question: "How is Ergo designed for resilience?",
        answer: "Ergo uses Proof-of-Work for objective consensus, ASIC-resistant mining for decentralization, Storage Rent for long-term sustainability, and eUTXO for secure smart contracts. These combine to create a system designed to operate for decades.",
      },
      {
        question: "Why does resilience matter?",
        answer: "Blockchains are meant to be permanent, censorship-resistant infrastructure. Resilience ensures the network survives attacks, regulatory pressure, and economic changes - protecting users' assets and applications long-term.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    learnMoreUrl: "/technology",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "blockchain-security",
    term: "Blockchain Security",
    
    shortDefinition: "Measures and protocols put in place to protect a blockchain from various threats and vulnerabilities.",
    
    definition: "Measures and protocols put in place to protect a blockchain from various threats and vulnerabilities.",
    
    keywords: ["blockchain-security","blockchain security","blockchain","security"],
    
    relatedTags: ["Blockchain Security","blockchain","security"],
    
    faq: [
      {
        question: "What is Blockchain Security?",
        answer: "Measures and protocols put in place to protect a blockchain from various threats and vulnerabilities.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "block-size",
    term: "Block Size",
    
    shortDefinition: "The maximum data capacity of a blockchain block. Ergo has adjustable block size through miner voting, balancing throughput with decentralization.",
    
    definition: "Block size determines how much transaction data can fit in each block, directly affecting network throughput and decentralization. Larger blocks allow more transactions per second but require more bandwidth and storage, potentially centralizing the network to well-resourced nodes. Ergo takes a unique approach with miner-adjustable parameters - miners can vote to change block size limits based on network conditions. This allows the network to scale organically while maintaining decentralization through community consensus.",
    
    keywords: ["block size", "block limit", "throughput", "scalability", "miner voting", "decentralization", "transactions per second"],
    
    keyPoints: [
      "Determines maximum transaction data per block",
      "Larger blocks = more TPS but centralization risk",
      "Ergo has miner-adjustable block size",
      "Changes through miner voting, not hard forks",
      "Balances throughput with decentralization",
      "Current limit allows practical everyday use",
    ],
    
    technicalDetails: "Ergo's block size is controlled by protocol parameters that miners can adjust through voting. The current maximum is sufficient for typical DeFi usage. Block size affects: 1) Transactions per second capacity, 2) Block propagation time, 3) Node storage requirements, 4) Network bandwidth needs. Unlike Bitcoin's contentious block size debates, Ergo's approach allows gradual adjustment based on actual network conditions.",
    
    useCases: [
      "Understanding network capacity and scalability",
      "Evaluating decentralization tradeoffs",
      "Comparing blockchain throughput",
      "Understanding miner governance",
    ],
    
    relatedTags: ["Block Size", "scalability", "throughput", "miner voting", "decentralization"],
    
    faq: [
      {
        question: "What is block size in blockchain?",
        answer: "Block size is the maximum amount of transaction data that can fit in each block. It determines network throughput (transactions per second) but larger blocks require more resources, potentially centralizing the network.",
      },
      {
        question: "Can Ergo's block size change?",
        answer: "Yes, Ergo has miner-adjustable parameters including block size. Miners can vote to increase or decrease limits based on network needs, allowing organic scaling without contentious hard forks.",
      },
      {
        question: "How does block size affect decentralization?",
        answer: "Larger blocks require more bandwidth and storage, making it harder for regular users to run full nodes. This can centralize the network to well-resourced operators. Ergo balances throughput with accessibility through adjustable limits.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "bounties",
    term: "Bounties",
    
    shortDefinition: "Specific tasks or projects listed by the Ergo community that developers can work on for rewards.",
    
    definition: "Specific tasks or projects listed by the Ergo community that developers can work on for rewards. Bounties are a way to encourage contributions to the platform.",
    
    keywords: ["bounties","ergo"],
    
    relatedTags: ["Bounties","Ergo"],
    
    faq: [
      {
        question: "What is Bounties?",
        answer: "Specific tasks or projects listed by the Ergo community that developers can work on for rewards.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "bridge",
    term: "Bridge",
    
    shortDefinition: "A protocol or platform that enables the transfer of digital assets between different blockchain networks.",
    
    definition: "A protocol or platform that enables the transfer of digital assets between different blockchain networks. Bridges connect separate blockchains, allowing users to move tokens or data across ecosystems. They are essential for interoperability and cross-chain DeFi.",
    
    keywords: ["bridge","blockchain"],
    
    relatedTags: ["Bridge","blockchain"],
    
    faq: [
      {
        question: "What is Bridge?",
        answer: "A protocol or platform that enables the transfer of digital assets between different blockchain networks.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "burn",
    term: "Burn",
    
    shortDefinition: "The process of permanently removing cryptocurrency tokens from circulation, usually by sending them to an unspendable address.",
    
    definition: "The process of permanently removing cryptocurrency tokens from circulation, usually by sending them to an unspendable address. Burning tokens reduces supply and can be used to increase scarcity, manage inflation, or as part of a protocol's mechanism.",
    
    keywords: ["burn","tokens"],
    
    relatedTags: ["Burn","tokens"],
    
    faq: [
      {
        question: "What is Burn?",
        answer: "The process of permanently removing cryptocurrency tokens from circulation, usually by sending them to an unspendable address.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "censorship-resistance",
    term: "Censorship Resistance",
    
    shortDefinition: "The ability of a blockchain to process any valid transaction without discrimination, preventing governments, corporations, or other entities from blocking or reversing transactions.",
    
    definition: "Censorship resistance is a fundamental property of decentralized blockchains that ensures no single entity can prevent valid transactions from being processed or reverse confirmed transactions. This is achieved through decentralization of miners/validators, permissionless participation, and cryptographic security. Ergo prioritizes censorship resistance through its Proof-of-Work consensus, ASIC-resistant mining (enabling geographic distribution), and privacy features (Sigma protocols, ErgoMixer) that make transaction censorship technically difficult even if attempted.",
    
    keywords: ["censorship resistance", "decentralization", "permissionless", "financial freedom", "proof of work", "privacy", "transaction finality"],
    
    keyPoints: [
      "No single entity can block valid transactions",
      "Achieved through decentralized mining and validation",
      "Ergo's PoW and ASIC-resistance promote miner diversity",
      "Privacy features make targeted censorship difficult",
      "Permissionless - anyone can send transactions",
      "Core principle of cryptocurrency and financial freedom",
    ],
    
    technicalDetails: "Ergo achieves censorship resistance through multiple layers: 1) ASIC-resistant Autolykos enables diverse, global mining preventing geographic concentration. 2) Any valid transaction paying sufficient fees will eventually be included. 3) Sigma protocols enable private transactions that can't be easily identified for censorship. 4) Decentralized network topology prevents single points of control. 5) Open-source code prevents hidden censorship mechanisms.",
    
    useCases: [
      "Sending funds without bank or government approval",
      "Protecting against financial deplatforming",
      "Enabling commerce in restrictive jurisdictions",
      "Preserving financial privacy and autonomy",
      "Ensuring transaction finality without reversals",
    ],
    
    relatedTags: ["Censorship Resistance", "decentralization", "Proof of Work", "privacy", "financial freedom", "permissionless"],
    
    faq: [
      {
        question: "What is censorship resistance in blockchain?",
        answer: "Censorship resistance means no single entity (government, corporation, or individual) can prevent valid transactions from being processed or reverse confirmed transactions. It's achieved through decentralization, cryptography, and permissionless participation.",
      },
      {
        question: "How does Ergo achieve censorship resistance?",
        answer: "Ergo achieves censorship resistance through ASIC-resistant Proof-of-Work (enabling diverse global mining), permissionless transaction submission, privacy features (Sigma protocols, ErgoMixer), and decentralized network architecture. No single party can control transaction inclusion.",
      },
      {
        question: "Why is censorship resistance important?",
        answer: "Censorship resistance ensures financial freedom - the ability to transact without requiring permission from banks, governments, or corporations. It protects against deplatforming, account freezes, and financial discrimination, which is especially important in authoritarian regimes or for marginalized groups.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/start/introduction",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "cex",
    term: "CEX (Centralized Exchange)",
    
    shortDefinition: "A cryptocurrency exchange operated by a centralized company or authority, which holds custody of users' funds.",
    
    definition: "A cryptocurrency exchange operated by a centralized company or authority, which holds custody of users' funds. CEXs are popular for their liquidity and ease of use, but require users to trust the operator. Examples: Binance, KuCoin, Gate.io.",
    
    keywords: ["cex","cex (centralized exchange)"],
    
    relatedTags: ["CEX (Centralized Exchange)"],
    
    faq: [
      {
        question: "What is CEX (Centralized Exchange)?",
        answer: "A cryptocurrency exchange operated by a centralized company or authority, which holds custody of users' funds.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "clone-repository",
    term: "Clone the Repository",
    
    shortDefinition: "Git command to create a local copy of a remote repository. First step for contributing to Ergo open-source projects on GitHub.",
    
    definition: "Cloning a repository means creating a local copy of a remote Git repository (like those on GitHub) on your computer. This is the first step for contributing to Ergo's open-source projects - you clone the repo, make changes locally, then submit a pull request. Ergo's core node, SDKs, documentation, and many ecosystem projects are on GitHub and welcome contributions. The command 'git clone [url]' downloads the entire repository including its history, allowing you to work offline and sync changes later.",
    
    keywords: ["clone repository", "git", "github", "open source", "contribution", "development", "pull request"],
    
    keyPoints: [
      "Creates local copy of remote repository",
      "First step for open-source contribution",
      "Uses 'git clone [url]' command",
      "Downloads full history and branches",
      "Ergo projects hosted on GitHub",
      "Enables offline development",
    ],
    
    technicalDetails: "To clone an Ergo repository: 1) Find the repo on github.com/ergoplatform, 2) Copy the clone URL (HTTPS or SSH), 3) Run 'git clone [url]' in terminal, 4) Navigate to the cloned directory, 5) Create a branch for your changes, 6) Make changes and commit, 7) Push and create a pull request.",
    
    useCases: [
      "Contributing to Ergo core development",
      "Improving documentation",
      "Building on ecosystem projects",
      "Learning from open-source code",
      "Running local development environments",
    ],
    
    relatedTags: ["Clone Repository", "Git", "GitHub", "open source", "development", "contribution"],
    
    faq: [
      {
        question: "How do I clone an Ergo repository?",
        answer: "Find the repo on github.com/ergoplatform, copy the clone URL, and run 'git clone [url]' in your terminal. This creates a local copy you can work with.",
      },
      {
        question: "Do I need to clone to contribute?",
        answer: "For code contributions, yes - you clone, make changes, and submit a pull request. For simple documentation fixes, GitHub's web interface allows direct editing without cloning.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    docsUrl: "https://github.com/ergoplatform",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "codebase",
    term: "Codebase",
    
    shortDefinition: "The collective source code of a software project.",
    
    definition: "The collective source code of a software project. Developers can contribute to Ergo's codebase by making improvements or adding new features.",
    
    keywords: ["codebase","ergo"],
    
    relatedTags: ["Codebase","Ergo"],
    
    faq: [
      {
        question: "What is Codebase?",
        answer: "The collective source code of a software project.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "coins",
    term: "Coins",
    
    shortDefinition: "Native cryptocurrencies that operate on their own blockchain (like ERG on Ergo, BTC on Bitcoin), as opposed to tokens which run on another blockchain.",
    
    definition: "In cryptocurrency terminology, 'coins' specifically refers to native cryptocurrencies that operate on their own independent blockchain. ERG is the native coin of the Ergo blockchain, just as BTC is Bitcoin's native coin and ETH is Ethereum's. Coins are used to pay transaction fees, reward miners/validators, and serve as the primary medium of exchange on their network. This distinguishes them from 'tokens' which are created on top of existing blockchains (like ERC-20 tokens on Ethereum or native tokens on Ergo).",
    
    keywords: ["coins", "cryptocurrency", "native currency", "erg", "btc", "blockchain", "tokens vs coins"],
    
    keyPoints: [
      "Native currency of a blockchain (ERG, BTC, ETH)",
      "Operates on its own independent blockchain",
      "Used to pay transaction fees",
      "Rewards miners/validators",
      "Different from tokens (which run on other chains)",
      "ERG is Ergo's native coin",
    ],
    
    technicalDetails: "On Ergo, ERG is the native coin stored in register R0 of every box. It's required for transaction fees and is the only asset that can pay miner fees directly (though Babel fees allow token fee payment through intermediaries). Native tokens on Ergo are stored in register R2 and require ERG for the box minimum value. The distinction matters for understanding fee structures and asset types.",
    
    useCases: [
      "Understanding cryptocurrency terminology",
      "Distinguishing coins from tokens",
      "Knowing what pays transaction fees",
      "Evaluating blockchain native assets",
    ],
    
    relatedTags: ["Coins", "ERG", "cryptocurrency", "tokens", "native currency"],
    
    faq: [
      {
        question: "What is the difference between coins and tokens?",
        answer: "Coins are native cryptocurrencies with their own blockchain (ERG, BTC, ETH). Tokens are created on top of existing blockchains (like native tokens on Ergo or ERC-20 on Ethereum). Coins typically pay transaction fees on their network.",
      },
      {
        question: "Is ERG a coin or token?",
        answer: "ERG is a coin - it's the native cryptocurrency of the Ergo blockchain. Other assets on Ergo (like SigUSD, SigRSV, NFTs) are tokens that exist on the Ergo blockchain alongside ERG.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "coin-mixer",
    term: "Coin Mixer (Mixer)",
    
    shortDefinition: "A service that combines and mixes cryptocurrency transactions to enhance privacy and make tracing transactions difficult.",
    
    definition: "A service that combines and mixes cryptocurrency transactions to enhance privacy and make tracing transactions difficult.",
    
    keywords: ["coin-mixer","coin mixer (mixer)","transactions","privacy"],
    
    relatedTags: ["Coin Mixer (Mixer)","transactions","privacy"],
    
    faq: [
      {
        question: "What is Coin Mixer (Mixer)?",
        answer: "A service that combines and mixes cryptocurrency transactions to enhance privacy and make tracing transactions difficult.",
      },
    ],
    
    category: "privacy",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "cold-wallet",
    term: "Cold Wallet",
    
    shortDefinition: "A cryptocurrency wallet that is not connected to the internet, providing enhanced security for storing funds offline.",
    
    definition: "A cryptocurrency wallet that is not connected to the internet, providing enhanced security for storing funds offline. Cold wallets include hardware wallets, paper wallets, and other offline storage methods. They are less vulnerable to hacks compared to hot wallets.",
    
    keywords: ["cold-wallet","cold wallet","wallet","security"],
    
    relatedTags: ["Cold Wallet","wallet","security"],
    
    faq: [
      {
        question: "What is Cold Wallet?",
        answer: "A cryptocurrency wallet that is not connected to the internet, providing enhanced security for storing funds offline.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "collective-growth",
    term: "Collective Growth",
    
    shortDefinition: "The idea that the Ergo community, through collaborative efforts and contributions, can collectively advance the platform's development and success.",
    
    definition: "The idea that the Ergo community, through collaborative efforts and contributions, can collectively advance the platform's development and success.",
    
    keywords: ["collective-growth","collective growth","ergo"],
    
    relatedTags: ["Collective Growth","Ergo"],
    
    faq: [
      {
        question: "What is Collective Growth?",
        answer: "The idea that the Ergo community, through collaborative efforts and contributions, can collectively advance the platform's development and success.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "community-wiki",
    term: "Community-curated Wiki",
    
    shortDefinition: "A comprehensive resource hub available in multiple languages where community members contribute information and resources to make Ergo more accessible globally.",
    
    definition: "A comprehensive resource hub available in multiple languages where community members contribute information and resources to make Ergo more accessible globally.",
    
    keywords: ["community-wiki","community-curated wiki","ergo"],
    
    relatedTags: ["Community-curated Wiki","Ergo"],
    
    faq: [
      {
        question: "What is Community-curated Wiki?",
        answer: "A comprehensive resource hub available in multiple languages where community members contribute information and resources to make Ergo more accessible globally.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "community-marketing",
    term: "Community Marketing",
    
    shortDefinition: "The practice of promoting and raising awareness of Ergo within the community, often through collaborative efforts, discussions, and content creation.",
    
    definition: "The practice of promoting and raising awareness of Ergo within the community, often through collaborative efforts, discussions, and content creation.",
    
    keywords: ["community-marketing","community marketing","ergo"],
    
    relatedTags: ["Community Marketing","Ergo"],
    
    faq: [
      {
        question: "What is Community Marketing?",
        answer: "The practice of promoting and raising awareness of Ergo within the community, often through collaborative efforts, discussions, and content creation.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "core-developer",
    term: "Core Developer",
    
    shortDefinition: "A developer working on Ergo's fundamental protocol, node software, or core libraries. Core devs maintain the blockchain's foundation and implement protocol upgrades.",
    
    definition: "Core developers are programmers who work on the fundamental components of the Ergo blockchain - the node software, consensus mechanism, cryptographic libraries, and protocol specifications. They maintain and improve the core codebase, implement EIPs (Ergo Improvement Proposals), fix critical bugs, and ensure network security. Ergo's core development is led by experienced cryptographers and blockchain engineers, with the codebase being open source for community review and contribution. Core developers are distinct from dApp developers who build applications on top of Ergo.",
    
    keywords: ["core developer", "protocol developer", "ergo node", "blockchain development", "open source", "github"],
    
    keyPoints: [
      "Works on Ergo node and protocol code",
      "Implements protocol upgrades and EIPs",
      "Maintains network security and stability",
      "Open source - code publicly reviewable",
      "Different from dApp developers",
      "Includes cryptographers and engineers",
    ],
    
    technicalDetails: "Ergo's core is primarily written in Scala, with the reference node implementation on GitHub. Core developers work on: consensus (Autolykos), networking (P2P protocol), transaction validation, ErgoScript interpreter, wallet functionality, and API endpoints. Changes go through code review and testing before release. Major protocol changes require miner voting for activation.",
    
    useCases: [
      "Understanding Ergo's development structure",
      "Contributing to core development",
      "Reviewing protocol changes",
      "Following Ergo's technical roadmap",
    ],
    
    relatedTags: ["Core Developer", "development", "Ergo", "open source", "protocol", "GitHub"],
    
    faq: [
      {
        question: "What do Ergo core developers do?",
        answer: "Core developers maintain and improve Ergo's node software, implement protocol upgrades, fix bugs, and ensure network security. They work on the fundamental blockchain infrastructure, not applications built on top.",
      },
      {
        question: "Is Ergo development open source?",
        answer: "Yes, Ergo's core code is open source on GitHub. Anyone can review the code, report issues, or contribute improvements. This transparency is essential for trustless, decentralized infrastructure.",
      },
      {
        question: "How can I contribute to Ergo core?",
        answer: "Start by exploring the ergoplatform GitHub repositories, join the developer Discord channels, and look for 'good first issue' labels. Contributions can include code, documentation, testing, or bug reports.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    docsUrl: "https://github.com/ergoplatform",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "counter-centralization",
    term: "Counter to Centralization",
    
    shortDefinition: "Ergo's stance against the centralization of banking and the misuse of money, aiming to provide individuals with more control over their financial interactions.",
    
    definition: "Ergo's stance against the centralization of banking and the misuse of money, aiming to provide individuals with more control over their financial interactions.",
    
    keywords: ["counter-centralization","counter to centralization","ergo"],
    
    relatedTags: ["Counter to Centralization","Ergo"],
    
    faq: [
      {
        question: "What is Counter to Centralization?",
        answer: "Ergo's stance against the centralization of banking and the misuse of money, aiming to provide individuals with more control over their financial interactions.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "created-regular-people",
    term: "Created for Regular People",
    
    shortDefinition: "An ideology stating that Ergo is designed to serve ordinary individuals and protect their interests rather than favoring large entities.",
    
    definition: "An ideology stating that Ergo is designed to serve ordinary individuals and protect their interests rather than favoring large entities. This includes preventing centralization in mining and enabling regular people to participate in the network through running full nodes and mining with a small probability.",
    
    keywords: ["created-regular-people","created for regular people","ergo","mining"],
    
    relatedTags: ["Created for Regular People","Ergo","mining"],
    
    faq: [
      {
        question: "What is Created for Regular People?",
        answer: "An ideology stating that Ergo is designed to serve ordinary individuals and protect their interests rather than favoring large entities.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "cli",
    term: "CLI (Command-Line Interface)",
    
    shortDefinition: "A text-based interface that allows users to interact with software or a blockchain node by typing commands.",
    
    definition: "A text-based interface that allows users to interact with software or a blockchain node by typing commands. CLI tools are popular among developers and advanced users for automation, scripting, and direct access to blockchain functions.",
    
    keywords: ["cli","cli (command-line interface)","blockchain"],
    
    relatedTags: ["CLI (Command-Line Interface)","blockchain"],
    
    faq: [
      {
        question: "What is CLI (Command-Line Interface)?",
        answer: "A text-based interface that allows users to interact with software or a blockchain node by typing commands.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "community-fund",
    term: "Community Fund",
    
    shortDefinition: "A pool of resources or tokens set aside to support community initiatives, development, and ecosystem growth.",
    
    definition: "A pool of resources or tokens set aside to support community initiatives, development, and ecosystem growth. Community funds are managed by the community or foundation and used for grants, bounties, events, and other activities that benefit the ecosystem.",
    
    keywords: ["community-fund","community fund","tokens"],
    
    relatedTags: ["Community Fund","tokens"],
    
    faq: [
      {
        question: "What is Community Fund?",
        answer: "A pool of resources or tokens set aside to support community initiatives, development, and ecosystem growth.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "consensus",
    term: "Consensus",
    
    shortDefinition: "The process by which a blockchain network agrees on the state of the ledger and validates transactions.",
    
    definition: "The process by which a blockchain network agrees on the state of the ledger and validates transactions. Consensus mechanisms include Proof-of-Work (PoW), Proof-of-Stake (PoS), and others. They ensure security, decentralization, and trustlessness.",
    
    keywords: ["consensus","transactions","blockchain"],
    
    relatedTags: ["Consensus","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Consensus?",
        answer: "The process by which a blockchain network agrees on the state of the ledger and validates transactions.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "cross-chain",
    term: "Cross-chain",
    
    shortDefinition: "The ability to transfer assets or data between different blockchain networks.",
    
    definition: "The ability to transfer assets or data between different blockchain networks. Cross-chain technology enables interoperability, allowing users and dApps to interact across multiple blockchains. Bridges are a common cross-chain solution.",
    
    keywords: ["cross-chain","blockchain"],
    
    relatedTags: ["Cross-chain","blockchain"],
    
    faq: [
      {
        question: "What is Cross-chain?",
        answer: "The ability to transfer assets or data between different blockchain networks.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "custodial",
    term: "Custodial",
    
    shortDefinition: "A service or wallet where a third party holds and manages users' funds on their behalf.",
    
    definition: "A service or wallet where a third party holds and manages users' funds on their behalf. Custodial solutions are common on centralized exchanges (CEXs) and some wallet providers. Users must trust the custodian for security and access.",
    
    keywords: ["custodial","wallet"],
    
    relatedTags: ["Custodial","wallet"],
    
    faq: [
      {
        question: "What is Custodial?",
        answer: "A service or wallet where a third party holds and manages users' funds on their behalf.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "dao",
    term: "DAO (Decentralized Autonomous Organization)",
    
    shortDefinition: "An organization governed by rules encoded as smart contracts, with decisions made by token holders or community members.",
    
    definition: "An organization governed by rules encoded as smart contracts, with decisions made by token holders or community members. DAOs operate transparently on the blockchain, enabling decentralized governance and collective decision-making without a central authority.",
    
    keywords: ["dao","dao (decentralized autonomous organization)","smart contracts","tokens"],
    
    relatedTags: ["DAO (Decentralized Autonomous Organization)","smart contracts","tokens"],
    
    faq: [
      {
        question: "What is DAO (Decentralized Autonomous Organization)?",
        answer: "An organization governed by rules encoded as smart contracts, with decisions made by token holders or community members.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "darkfund0",
    term: "DarkFund0",
    
    shortDefinition: "Community fund supporting privacy-focused development on Ergo, including ErgoMixer improvements, Sigma protocol research, and privacy dApps.",
    
    definition: "DarkFund0 is a community-initiated fund dedicated to supporting privacy-focused development within the Ergo ecosystem. It funds projects that enhance Ergo's privacy capabilities, including ErgoMixer improvements, Sigma protocol research, privacy-preserving dApps, and educational content about optional privacy features. The fund represents Ergo's commitment to financial privacy as a fundamental right while maintaining the optional nature of privacy features. Contributions come from community members who value privacy technology development.",
    
    keywords: ["darkfund0", "privacy fund", "ergomixer", "sigma protocols", "privacy development", "community fund"],
    
    keyPoints: [
      "Community fund for privacy development",
      "Supports ErgoMixer and Sigma research",
      "Funds privacy-preserving dApps",
      "Community-contributed resources",
      "Promotes optional privacy features",
      "Educational content development",
    ],
    
    technicalDetails: "DarkFund0 has supported: ErgoMixer UI improvements, research into advanced Sigma protocol applications, privacy-focused wallet features, documentation and tutorials for privacy tools, and integration of privacy features into ecosystem dApps.",
    
    useCases: [
      "Funding privacy tool development",
      "Supporting Sigma protocol research",
      "Improving ErgoMixer",
      "Creating privacy education content",
    ],
    
    relatedTags: ["DarkFund0", "privacy", "ErgoMixer", "Sigma Protocols", "community fund"],
    
    faq: [
      {
        question: "What is DarkFund0?",
        answer: "DarkFund0 is a community fund supporting privacy-focused development on Ergo, including ErgoMixer improvements, Sigma protocol research, and privacy dApps. It's funded by community contributions.",
      },
      {
        question: "How can I contribute to DarkFund0?",
        answer: "Check the Ergo Forum and community channels for current DarkFund0 initiatives. Contributions can be made to fund addresses or by directly contributing development work to privacy projects.",
      },
    ],
    
    category: "privacy",
    difficulty: "beginner",
    
    learnMoreUrl: "/use/privacy",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "decentralized-governance",
    term: "Decentralized Governance",
    
    shortDefinition: "Ergo's approach to making decisions about changes to the blockchain, ensuring community-driven leadership.",
    
    definition: "Ergo's approach to making decisions about changes to the blockchain, ensuring community-driven leadership.",
    
    keywords: ["decentralized-governance","decentralized governance","ergo","blockchain"],
    
    relatedTags: ["Decentralized Governance","Ergo","blockchain"],
    
    faq: [
      {
        question: "What is Decentralized Governance?",
        answer: "Ergo's approach to making decisions about changes to the blockchain, ensuring community-driven leadership.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "development-environment",
    term: "Development Environment",
    
    shortDefinition: "The setup on your local system that allows you to build and test documentation changes before contributing.",
    
    definition: "The setup on your local system that allows you to build and test documentation changes before contributing.",
    
    keywords: ["development-environment","development environment"],
    
    relatedTags: ["Development Environment"],
    
    faq: [
      {
        question: "What is Development Environment?",
        answer: "The setup on your local system that allows you to build and test documentation changes before contributing.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "development-reward-program",
    term: "Development Reward Program",
    
    shortDefinition: "A program that recognizes and rewards significant contributions made to the development and improvement of Ergo's repositories, including its codebase and technical infrastructure.",
    
    definition: "A program that recognizes and rewards significant contributions made to the development and improvement of Ergo's repositories, including its codebase and technical infrastructure.",
    
    keywords: ["development-reward-program","development reward program","ergo"],
    
    relatedTags: ["Development Reward Program","Ergo"],
    
    faq: [
      {
        question: "What is Development Reward Program?",
        answer: "A program that recognizes and rewards significant contributions made to the development and improvement of Ergo's repositories, including its codebase and technical infrastructure.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "development-server",
    term: "Development Server",
    
    shortDefinition: "Local server for testing code changes before deployment. Essential for dApp development, showing real-time updates as you code.",
    
    definition: "A development server is a local server that runs on your computer for testing code changes before deploying to production. When building Ergo dApps or contributing to ecosystem projects, you run a dev server to see changes in real-time, test functionality, and debug issues. Modern frameworks like Next.js (used by many Ergo projects) provide hot-reloading dev servers that update instantly when you save files. This is distinct from the Ergo node itself - the dev server runs your application code while connecting to testnet or mainnet nodes.",
    
    keywords: ["development server", "dev server", "local development", "testing", "hot reload", "dapp development"],
    
    keyPoints: [
      "Local server for testing code",
      "Real-time updates on file changes",
      "Essential for dApp development",
      "Hot-reloading for fast iteration",
      "Separate from Ergo node",
      "Connects to testnet for testing",
    ],
    
    technicalDetails: "Common dev server commands: 'npm run dev' or 'yarn dev' for JavaScript projects. The server typically runs on localhost:3000 or similar. For Ergo dApp development, configure your dev environment to connect to testnet (testnet.ergoplatform.com) for safe testing before mainnet deployment.",
    
    useCases: [
      "Building Ergo dApps",
      "Testing smart contract integrations",
      "Contributing to documentation",
      "Developing wallet features",
      "Iterating on UI/UX",
    ],
    
    relatedTags: ["Development Server", "development", "testing", "dApp", "local"],
    
    faq: [
      {
        question: "What is a development server?",
        answer: "A local server on your computer for testing code changes. It shows real-time updates as you code, essential for dApp development before deploying to production.",
      },
      {
        question: "How do I start a dev server for Ergo projects?",
        answer: "Most projects use 'npm run dev' or 'yarn dev'. Check the project's README for specific instructions. The server usually runs on localhost:3000.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "difficulty-adjustment-algorithm",
    term: "Difficulty Adjustment Algorithm (DAA)",
    
    shortDefinition: "The mechanism that adjusts mining difficulty to maintain consistent block times. Ergo adjusts difficulty every epoch to target ~2 minute blocks.",
    
    definition: "The Difficulty Adjustment Algorithm (DAA) automatically adjusts how hard it is to mine blocks based on network hash rate changes. When more miners join, difficulty increases to maintain target block times; when miners leave, difficulty decreases. Ergo uses a sophisticated DAA that adjusts every epoch (1024 blocks) to maintain approximately 2-minute block intervals. This ensures consistent transaction throughput and predictable confirmation times regardless of how much mining power is on the network.",
    
    keywords: ["difficulty adjustment", "daa", "mining difficulty", "block time", "hash rate", "epoch", "autolykos"],
    
    keyPoints: [
      "Automatically adjusts mining difficulty",
      "Maintains consistent ~2 minute block times",
      "Adjusts every epoch (1024 blocks)",
      "Responds to hash rate changes",
      "Ensures predictable confirmation times",
      "Prevents blocks from being too fast or slow",
    ],
    
    technicalDetails: "Ergo's DAA calculates the average block time over the previous epoch and adjusts difficulty proportionally. If blocks were mined faster than 2 minutes on average, difficulty increases; if slower, it decreases. The algorithm smooths adjustments to prevent oscillation. This differs from Bitcoin's 2-week adjustment period, making Ergo more responsive to hash rate changes while avoiding instability.",
    
    useCases: [
      "Understanding mining profitability dynamics",
      "Predicting block confirmation times",
      "Analyzing network hash rate trends",
      "Comparing DAA designs across blockchains",
    ],
    
    relatedTags: ["Difficulty Adjustment", "mining", "block time", "hash rate", "Autolykos", "epoch"],
    
    faq: [
      {
        question: "What is the Difficulty Adjustment Algorithm?",
        answer: "The DAA automatically adjusts how hard it is to mine blocks to maintain consistent block times. When hash rate increases, difficulty goes up; when it decreases, difficulty goes down. Ergo targets ~2 minute blocks.",
      },
      {
        question: "How often does Ergo adjust difficulty?",
        answer: "Ergo adjusts difficulty every epoch (1024 blocks, roughly 1.4 days). This is more responsive than Bitcoin's 2-week adjustment, allowing faster adaptation to hash rate changes.",
      },
      {
        question: "Why does difficulty adjustment matter?",
        answer: "Without difficulty adjustment, block times would vary wildly with hash rate changes - too fast when many miners join, too slow when they leave. The DAA ensures consistent, predictable confirmation times for users.",
      },
    ],
    
    category: "mining",
    difficulty: "intermediate",
    
    learnMoreUrl: "/miners",
    docsUrl: "/docs/mining",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "directory-structure",
    term: "Directory Structure",
    
    shortDefinition: "The organization of files and folders in a project. Understanding structure helps navigate Ergo codebases and contribute effectively.",
    
    definition: "Directory structure refers to how files and folders are organized within a software project. Understanding a project's directory structure is essential for navigating codebases, finding relevant files, and contributing effectively. Ergo projects follow common conventions: source code in 'src/', tests in 'tests/' or '__tests__/', documentation in 'docs/', and configuration files in the root. Familiarity with structure helps developers quickly understand where to find and place code when contributing to Ergo's open-source ecosystem.",
    
    keywords: ["directory structure", "file organization", "project structure", "codebase", "folders", "development"],
    
    keyPoints: [
      "Organization of files and folders",
      "Follows common conventions",
      "Source code typically in 'src/'",
      "Tests in 'tests/' directory",
      "Documentation in 'docs/'",
      "Essential for contribution",
    ],
    
    technicalDetails: "Common Ergo project structure: /src (source code), /tests (test files), /docs (documentation), /scripts (utility scripts), /public (static assets), package.json or build.sbt (dependencies), README.md (project info). The Ergo node uses Scala project structure with /src/main/scala for source and /src/test/scala for tests.",
    
    useCases: [
      "Navigating Ergo codebases",
      "Contributing to open-source projects",
      "Understanding project organization",
      "Finding specific functionality",
    ],
    
    relatedTags: ["Directory Structure", "development", "codebase", "project", "contribution"],
    
    faq: [
      {
        question: "What is directory structure?",
        answer: "Directory structure is how files and folders are organized in a project. Understanding it helps you navigate code, find relevant files, and contribute effectively to Ergo projects.",
      },
      {
        question: "Where is source code typically located?",
        answer: "Most Ergo projects keep source code in 'src/' directory. Tests are in 'tests/' or 'src/test/', documentation in 'docs/', and configuration files in the project root.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "discord-server",
    term: "Discord Server",
    
    shortDefinition: "An online platform where developers and community members can engage in discussions and collaborate on Ergo-related projects and/or channels.",
    
    definition: "An online platform where developers and community members can engage in discussions and collaborate on Ergo-related projects and/or channels.",
    
    keywords: ["discord-server","discord server","ergo"],
    
    relatedTags: ["Discord Server","Ergo"],
    
    faq: [
      {
        question: "What is Discord Server?",
        answer: "An online platform where developers and community members can engage in discussions and collaborate on Ergo-related projects and/or channels.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "documentation-repository",
    term: "Documentation Repository",
    
    shortDefinition: "A centralized location, often hosted on platforms like GitHub, where educational content and documentation related to Ergo are stored and managed.",
    
    definition: "A centralized location, often hosted on platforms like GitHub, where educational content and documentation related to Ergo are stored and managed.",
    
    keywords: ["documentation-repository","documentation repository","ergo"],
    
    relatedTags: ["Documentation Repository","Ergo"],
    
    faq: [
      {
        question: "What is Documentation Repository?",
        answer: "A centralized location, often hosted on platforms like GitHub, where educational content and documentation related to Ergo are stored and managed.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "dust",
    term: "Dust",
    
    shortDefinition: "Tiny, negligible amounts of cryptocurrency that are not practical to spend due to transaction fees.",
    
    definition: "Tiny, negligible amounts of cryptocurrency that are not practical to spend due to transaction fees. Dust can accumulate in wallets over time and may be consolidated or swept to reduce clutter.",
    
    keywords: ["dust","transactions"],
    
    relatedTags: ["Dust","transactions"],
    
    faq: [
      {
        question: "What is Dust?",
        answer: "Tiny, negligible amounts of cryptocurrency that are not practical to spend due to transaction fees.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "dyor",
    term: "DYOR (Do Your Own Research)",
    
    shortDefinition: "A common phrase in crypto encouraging users to research projects and risks before investing.",
    
    definition: "A common phrase in crypto encouraging users to research projects and risks before investing. DYOR is a reminder to verify information, check sources, and avoid blindly following hype or influencers.",
    
    keywords: ["dyor","dyor (do your own research)"],
    
    relatedTags: ["DYOR (Do Your Own Research)"],
    
    faq: [
      {
        question: "What is DYOR (Do Your Own Research)?",
        answer: "A common phrase in crypto encouraging users to research projects and risks before investing.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "emission",
    term: "Emission",
    
    shortDefinition: "The process and schedule by which new coins or tokens are released into circulation on a blockchain.",
    
    definition: "The process and schedule by which new coins or tokens are released into circulation on a blockchain. Emission determines the rate at which new ERG are created and distributed to miners. Ergo's emission schedule is designed for long-term sustainability and fair distribution.",
    
    keywords: ["emission","tokens","blockchain"],
    
    relatedTags: ["Emission","tokens","blockchain"],
    
    faq: [
      {
        question: "What is Emission?",
        answer: "The process and schedule by which new coins or tokens are released into circulation on a blockchain.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "empowerment",
    term: "Empowerment",
    
    shortDefinition: "The act of enabling and supporting community members to take an active role in the growth and innovation of the Ergo ecosystem.",
    
    definition: "The act of enabling and supporting community members to take an active role in the growth and innovation of the Ergo ecosystem.",
    
    keywords: ["empowerment","ergo"],
    
    relatedTags: ["Empowerment","Ergo"],
    
    faq: [
      {
        question: "What is Empowerment?",
        answer: "The act of enabling and supporting community members to take an active role in the growth and innovation of the Ergo ecosystem.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "eips",
    term: "Ergo Improvement Proposals (EIPs)",
    
    shortDefinition: "A set of guidelines and standards used for proposing and implementing continuous improvements to Ergo.",
    
    definition: "A set of guidelines and standards used for proposing and implementing continuous improvements to Ergo.",
    
    keywords: ["eips","ergo improvement proposals (eips)","ergo"],
    
    relatedTags: ["Ergo Improvement Proposals (EIPs)","Ergo"],
    
    faq: [
      {
        question: "What is Ergo Improvement Proposals (EIPs)?",
        answer: "A set of guidelines and standards used for proposing and implementing continuous improvements to Ergo.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "ergo-forum",
    term: "Ergo Forum",
    
    shortDefinition: "The official community forum for in-depth Ergo discussions, proposals, and long-form content. Complements Discord for more permanent, searchable conversations.",
    
    definition: "The Ergo Forum is the official community platform for in-depth discussions about Ergo development, proposals, research, and ecosystem topics. Unlike Discord's real-time chat, the forum provides a space for long-form content, structured debates, and searchable archives. It's used for EIP (Ergo Improvement Proposal) discussions, project announcements, technical questions, and community governance. The forum complements other channels like Discord and Reddit, offering a more permanent record of important community discussions.",
    
    keywords: ["ergo forum", "community", "discussion", "proposals", "governance", "eip", "research"],
    
    keyPoints: [
      "Official platform for in-depth discussions",
      "Long-form content and structured debates",
      "EIP discussions and governance",
      "Searchable archives of decisions",
      "Complements Discord and Reddit",
      "Technical questions and research",
    ],
    
    technicalDetails: "The Ergo Forum runs on Discourse, a modern forum platform. Categories include Development, Mining, Trading, Ecosystem, and Governance. Important discussions like protocol changes, funding proposals, and major decisions are often documented here for transparency and future reference.",
    
    useCases: [
      "Participating in governance discussions",
      "Proposing and debating EIPs",
      "Asking detailed technical questions",
      "Researching past community decisions",
      "Announcing and discussing projects",
    ],
    
    relatedTags: ["Ergo Forum", "community", "governance", "EIP", "discussion"],
    
    faq: [
      {
        question: "What is the Ergo Forum?",
        answer: "The Ergo Forum is the official community platform for in-depth discussions, proposals, and governance. It provides searchable, permanent records of important community conversations and decisions.",
      },
      {
        question: "When should I use Forum vs Discord?",
        answer: "Use Discord for quick questions and real-time chat. Use the Forum for detailed proposals, long-form discussions, and topics that benefit from permanent, searchable records. Major decisions are often documented on the Forum.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    docsUrl: "https://www.ergoforum.org",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "ergo-social-contract",
    term: "Ergo's Social Contract",
    
    shortDefinition: "The set of main principles that should be followed in the Ergo protocol, defining its core values and guiding philosophy.",
    
    definition: "The set of main principles that should be followed in the Ergo protocol, defining its core values and guiding philosophy.",
    
    keywords: ["ergo-social-contract","ergo's social contract","ergo","defi"],
    
    relatedTags: ["Ergo's Social Contract","Ergo","DeFi"],
    
    faq: [
      {
        question: "What is Ergo's Social Contract?",
        answer: "The set of main principles that should be followed in the Ergo protocol, defining its core values and guiding philosophy.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "ergo-summit",
    term: "Ergo Summit",
    
    shortDefinition: "Annual community conference featuring talks on Ergo technology, ecosystem projects, and roadmap. Usually held virtually with global participation.",
    
    definition: "ErgoSummit is the annual community conference for the Ergo ecosystem, featuring presentations from core developers, ecosystem projects, and community members. Topics include technology updates, new dApps, research developments, and roadmap discussions. The summit is typically held virtually to enable global participation, with recordings available afterward. It's an opportunity for the community to come together, learn about progress, and discuss the future direction of Ergo. Past summits have announced major developments and fostered collaboration between projects.",
    
    keywords: ["ergo summit", "conference", "event", "community", "presentations", "roadmap", "virtual"],
    
    keyPoints: [
      "Annual Ergo community conference",
      "Features core devs and ecosystem projects",
      "Technology updates and roadmap",
      "Usually virtual for global access",
      "Recordings available afterward",
      "Networking and collaboration opportunity",
    ],
    
    technicalDetails: "ErgoSummit typically includes: keynotes from core developers on protocol progress, presentations from dApp teams, research talks on cryptography and blockchain technology, community discussions, and Q&A sessions. The virtual format uses streaming platforms with live chat for interaction.",
    
    useCases: [
      "Learning about Ergo development progress",
      "Discovering new ecosystem projects",
      "Understanding roadmap and vision",
      "Connecting with community members",
      "Staying updated on research",
    ],
    
    relatedTags: ["Ergo Summit", "conference", "community", "event", "roadmap"],
    
    faq: [
      {
        question: "What is ErgoSummit?",
        answer: "ErgoSummit is the annual community conference featuring talks from core developers, ecosystem projects, and researchers. It covers technology updates, new dApps, and roadmap discussions, usually held virtually.",
      },
      {
        question: "How can I participate in ErgoSummit?",
        answer: "ErgoSummit is typically free and virtual, announced through official channels (Discord, Twitter, Forum). You can watch live streams and participate in chat. Recordings are usually available afterward on YouTube.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "ergs",
    term: "ERGs",
    
    shortDefinition: "The native token of the Ergo blockchain, used as a unit of value and for various purposes within the Ergo ecosystem.",
    
    definition: "The native token of the Ergo blockchain, used as a unit of value and for various purposes within the Ergo ecosystem.",
    
    keywords: ["ergs","ergo","tokens","blockchain"],
    
    relatedTags: ["ERGs","Ergo","tokens","blockchain"],
    
    faq: [
      {
        question: "What is ERGs?",
        answer: "The native token of the Ergo blockchain, used as a unit of value and for various purposes within the Ergo ecosystem.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "enthusiast",
    term: "Enthusiast",
    
    shortDefinition: "An individual who has a strong interest in Ergo and its technology but may not necessarily be a developer or marketer.",
    
    definition: "An individual who has a strong interest in Ergo and its technology but may not necessarily be a developer or marketer.",
    
    keywords: ["enthusiast","ergo"],
    
    relatedTags: ["Enthusiast","Ergo"],
    
    faq: [
      {
        question: "What is Enthusiast?",
        answer: "An individual who has a strong interest in Ergo and its technology but may not necessarily be a developer or marketer.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "eip",
    term: "EIP (Ergo Improvement Proposal)",
    
    shortDefinition: "A formal specification document for proposing changes to Ergo's protocol, standards, or ecosystem. Similar to Bitcoin's BIPs or Ethereum's EIPs.",
    
    definition: "An Ergo Improvement Proposal (EIP) is a design document providing information to the Ergo community about proposed changes to the protocol, new standards, or ecosystem improvements. EIPs follow a structured format including motivation, specification, rationale, and backwards compatibility considerations. They enable transparent, community-driven development where anyone can propose improvements. Notable EIPs include token standards, wallet formats, and protocol upgrades. The process ensures changes are well-documented and reviewed before implementation.",
    
    keywords: ["eip", "ergo improvement proposal", "protocol upgrade", "standards", "governance", "development", "bip"],
    
    keyPoints: [
      "Formal specification for protocol changes",
      "Community-driven proposal process",
      "Includes motivation, spec, and rationale",
      "Similar to Bitcoin BIPs, Ethereum EIPs",
      "Covers protocol, standards, and ecosystem",
      "Ensures transparent development process",
    ],
    
    technicalDetails: "EIPs are hosted on GitHub and follow a template including: Abstract, Motivation, Specification, Rationale, Backwards Compatibility, and Reference Implementation. They go through Draft, Review, and Final stages. Examples include EIP-4 (asset standard), EIP-24 (token verification), and various wallet and dApp standards. Protocol EIPs may require soft forks activated through miner voting.",
    
    useCases: [
      "Proposing protocol improvements",
      "Standardizing token and NFT formats",
      "Defining wallet interoperability standards",
      "Documenting best practices",
      "Community governance participation",
    ],
    
    relatedTags: ["EIP", "governance", "protocol", "standards", "development", "soft fork"],
    
    faq: [
      {
        question: "What is an EIP?",
        answer: "An Ergo Improvement Proposal (EIP) is a formal document proposing changes to Ergo's protocol, standards, or ecosystem. It follows a structured format and enables community-driven, transparent development.",
      },
      {
        question: "How can I submit an EIP?",
        answer: "EIPs are submitted as pull requests to the Ergo GitHub repository. Follow the EIP template, including motivation, specification, and rationale. The community reviews and discusses proposals before they're accepted.",
      },
      {
        question: "What's the difference between EIP and soft fork?",
        answer: "An EIP is a proposal document; a soft fork is an actual protocol change. Some EIPs propose soft forks, which then require miner voting for activation. Not all EIPs require protocol changes - many define standards or best practices.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    docsUrl: "https://github.com/ergoplatform/eips",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "evm",
    term: "EVM (Ethereum Virtual Machine)",
    
    shortDefinition: "The runtime environment for Ethereum smart contracts - a global computer that executes Solidity code. Ergo uses a different model (ErgoScript on eUTXO) with distinct advantages.",
    
    definition: "The Ethereum Virtual Machine (EVM) is a Turing-complete, stack-based execution environment that runs smart contracts on Ethereum and EVM-compatible chains. It processes Solidity bytecode in a global state machine where all nodes execute the same computations. While EVM has a large ecosystem, it has limitations: reentrancy vulnerabilities, MEV exploitation, and unpredictable gas costs. Ergo chose a different path with ErgoScript on the eUTXO model, offering deterministic execution, MEV-resistance, and enhanced security by design.",
    
    keywords: ["evm", "ethereum virtual machine", "solidity", "smart contracts", "ergo vs ethereum", "ergoscript", "eutxo vs evm"],
    
    keyPoints: [
      "Turing-complete execution environment for Solidity contracts",
      "Account-based model with global shared state",
      "Vulnerable to reentrancy attacks and MEV exploitation",
      "Gas costs can be unpredictable during network congestion",
      "Ergo uses ErgoScript on eUTXO instead - different paradigm",
      "EVM ecosystem is larger but has inherent design tradeoffs",
    ],
    
    technicalDetails: "The EVM uses a stack-based architecture with 256-bit words, executing opcodes from compiled Solidity. State changes are atomic within transactions but the global state introduces concurrency issues. Ergo's ErgoScript runs on the eUTXO model where each 'box' is independent - no shared state means no reentrancy, deterministic gas costs, and natural parallelization. ErgoScript is not Turing-complete by design, avoiding infinite loops while still enabling complex DeFi.",
    
    useCases: [
      "Understanding Ethereum smart contract execution",
      "Comparing Ergo's approach vs EVM chains",
      "Evaluating security tradeoffs between models",
      "Cross-chain development considerations",
    ],
    
    relatedTags: ["EVM", "Ethereum", "Solidity", "ErgoScript", "eUTXO", "smart contracts"],
    
    faq: [
      {
        question: "What is the EVM?",
        answer: "The Ethereum Virtual Machine (EVM) is the runtime environment that executes smart contracts on Ethereum. It's a global computer where all nodes process the same Solidity bytecode, maintaining a shared state across the network.",
      },
      {
        question: "Does Ergo use the EVM?",
        answer: "No, Ergo uses ErgoScript on the eUTXO model instead of EVM. This provides MEV-resistance, eliminates reentrancy attacks, and offers deterministic execution. While different from EVM, ErgoScript enables powerful DeFi applications with enhanced security.",
      },
      {
        question: "Can I run Solidity contracts on Ergo?",
        answer: "Not directly. Ergo uses ErgoScript, not Solidity. However, the logic of most DeFi applications can be implemented in ErgoScript with better security properties. Bridges like Rosen Bridge enable interoperability with EVM chains.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    
    learnMoreUrl: "/compare/ergo-vs-ethereum",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "faucet",
    term: "Faucet",
    
    shortDefinition: "A service that dispenses small amounts of cryptocurrency for free, usually for testing or onboarding new users.",
    
    definition: "A service that dispenses small amounts of cryptocurrency for free, usually for testing or onboarding new users.",
    
    keywords: ["faucet"],
    
    relatedTags: ["Faucet"],
    
    faq: [
      {
        question: "What is Faucet?",
        answer: "A service that dispenses small amounts of cryptocurrency for free, usually for testing or onboarding new users.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "flip",
    term: "Flip",
    
    shortDefinition: "Buying and quickly selling an asset for profit. Common with NFTs and new token launches. Contrasts with 'hodling' for long-term gains.",
    
    definition: "Flipping in crypto refers to buying an asset with the intention of selling it quickly for a profit, rather than holding long-term. It's common with NFTs (buying at mint and selling immediately at higher prices) and new token launches. Successful flipping requires timing, market knowledge, and accepting higher risk. The opposite approach is 'hodling' - holding assets long-term regardless of short-term price movements. Ergo's community tends toward hodling philosophy, valuing the technology's long-term potential over short-term trading.",
    
    keywords: ["flip", "flipping", "trading", "nft", "short-term", "profit", "hodl"],
    
    keyPoints: [
      "Quick buy-and-sell for short-term profit",
      "Common with NFTs and new launches",
      "Requires good timing and market knowledge",
      "Higher risk than long-term holding",
      "Opposite of hodling philosophy",
      "Active trading vs passive holding",
    ],
    
    technicalDetails: "Flipping strategies often target: NFT mints (buying at mint price, selling at floor price premium), new token launches (buying early, selling the initial pump), and arbitrage opportunities between exchanges. Success depends on speed, information access, and market conditions. Transaction fees and slippage can eat into profits on smaller flips.",
    
    useCases: [
      "Understanding trading terminology",
      "Comparing trading vs holding strategies",
      "NFT market participation",
      "Short-term trading approaches",
    ],
    
    relatedTags: ["Flip", "trading", "NFT", "HODL", "profit", "speculation"],
    
    faq: [
      {
        question: "What does 'flip' mean in crypto?",
        answer: "Flipping means buying an asset and quickly selling it for profit, rather than holding long-term. It's common with NFTs and new token launches where early buyers can sell at higher prices.",
      },
      {
        question: "Is flipping or hodling better?",
        answer: "It depends on your goals and skills. Flipping can generate quick profits but requires active management, good timing, and accepts higher risk. Hodling is simpler and relies on long-term value appreciation. Many successful investors combine both approaches.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "flippening",
    term: "Flippening",
    
    shortDefinition: "A hypothetical event where one cryptocurrency overtakes another in market capitalization or importance.",
    
    definition: "A hypothetical event where one cryptocurrency overtakes another in market capitalization or importance.",
    
    keywords: ["flippening"],
    
    relatedTags: ["Flippening"],
    
    faq: [
      {
        question: "What is Flippening?",
        answer: "A hypothetical event where one cryptocurrency overtakes another in market capitalization or importance.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "fomo",
    term: "FOMO (Fear of Missing Out)",
    
    shortDefinition: "A psychological phenomenon where people feel anxious about missing potential gains, leading to impulsive buying.",
    
    definition: "A psychological phenomenon where people feel anxious about missing potential gains, leading to impulsive buying.",
    
    keywords: ["fomo","fomo (fear of missing out)"],
    
    relatedTags: ["FOMO (Fear of Missing Out)"],
    
    faq: [
      {
        question: "What is FOMO (Fear of Missing Out)?",
        answer: "A psychological phenomenon where people feel anxious about missing potential gains, leading to impulsive buying.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "fork",
    term: "Fork",
    
    shortDefinition: "A change to a blockchain's protocol that creates a new version of the chain, which can be either backward-compatible (soft fork) or not (hard fork).",
    
    definition: "A change to a blockchain's protocol that creates a new version of the chain, which can be either backward-compatible (soft fork) or not (hard fork).",
    
    keywords: ["fork","blockchain"],
    
    relatedTags: ["Fork","blockchain"],
    
    faq: [
      {
        question: "What is Fork?",
        answer: "A change to a blockchain's protocol that creates a new version of the chain, which can be either backward-compatible (soft fork) or not (hard fork).",
      },
    ],
    
    category: "consensus",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "fair-competition",
    term: "Fair Competition",
    
    shortDefinition: "Equal opportunity for all participants without insider advantages. Ergo's fair launch, ASIC-resistance, and MEV-resistance embody this principle.",
    
    definition: "Fair competition in blockchain means creating equal opportunity for all participants without privileged access or insider advantages. Ergo exemplifies this through: fair launch (no pre-mine, no ICO, no VC allocation), ASIC-resistant mining (anyone with a GPU can participate), MEV-resistance (transactions can't be front-run), and open-source development (anyone can contribute). This contrasts with blockchains that had large pre-mines, private sales to VCs, or mining algorithms that favor specialized hardware manufacturers.",
    
    keywords: ["fair competition", "fair launch", "no premine", "asic resistance", "mev resistance", "decentralization", "equal opportunity"],
    
    keyPoints: [
      "No pre-mine or insider token allocation",
      "No VC or private sale advantages",
      "ASIC-resistant GPU mining for all",
      "MEV-resistance prevents front-running",
      "Open source - anyone can contribute",
      "Level playing field from day one",
    ],
    
    technicalDetails: "Ergo's fair competition mechanisms: 1) Genesis block had no pre-mined coins - all ERG comes from mining, 2) Autolykos algorithm prevents ASIC advantages, 3) eUTXO model prevents MEV extraction that plagues Ethereum, 4) Permissionless - anyone can mine, build, or participate, 5) Transparent development on GitHub.",
    
    useCases: [
      "Evaluating blockchain fairness and decentralization",
      "Understanding tokenomics and distribution",
      "Comparing project launch models",
      "Assessing long-term value distribution",
    ],
    
    relatedTags: ["Fair Competition", "fair launch", "ASIC resistance", "MEV resistance", "decentralization"],
    
    faq: [
      {
        question: "What is a fair launch?",
        answer: "A fair launch means no pre-mine, no ICO, no private sales to VCs - everyone has equal opportunity to acquire tokens through mining or purchase. Ergo had a fair launch with all ERG distributed through mining.",
      },
      {
        question: "Why does fair competition matter?",
        answer: "Unfair launches concentrate tokens with insiders who can dump on retail. ASIC-dominated mining centralizes to manufacturers. MEV extracts value from regular users. Fair competition ensures the network serves all participants equally.",
      },
      {
        question: "How does Ergo ensure fair mining?",
        answer: "Ergo's Autolykos algorithm is memory-hard and ASIC-resistant, meaning consumer GPUs can mine competitively. This prevents the centralization seen in Bitcoin where ASIC manufacturers and large farms dominate.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/miners",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "farming",
    term: "Farming",
    
    shortDefinition: "A process in which cryptocurrency holders provide liquidity to DeFi protocols and receive rewards in return.",
    
    definition: "A process in which cryptocurrency holders provide liquidity to DeFi protocols and receive rewards in return.",
    
    keywords: ["farming","defi"],
    
    relatedTags: ["Farming","DeFi"],
    
    faq: [
      {
        question: "What is Farming?",
        answer: "A process in which cryptocurrency holders provide liquidity to DeFi protocols and receive rewards in return.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "fiat",
    term: "Fiat",
    
    shortDefinition: "Government-issued currency, such as the US Dollar or Euro, that is not backed by a physical commodity like gold or silver.",
    
    definition: "Government-issued currency, such as the US Dollar or Euro, that is not backed by a physical commodity like gold or silver.",
    
    keywords: ["fiat"],
    
    relatedTags: ["Fiat"],
    
    faq: [
      {
        question: "What is Fiat?",
        answer: "Government-issued currency, such as the US Dollar or Euro, that is not backed by a physical commodity like gold or silver.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "financial-activities",
    term: "Financial Activities",
    
    shortDefinition: "The various financial transactions and operations conducted by the Ergo Foundation to support the ecosystem's development.",
    
    definition: "The various financial transactions and operations conducted by the Ergo Foundation to support the ecosystem's development.",
    
    keywords: ["financial-activities","financial activities","ergo","transactions"],
    
    relatedTags: ["Financial Activities","Ergo","transactions"],
    
    faq: [
      {
        question: "What is Financial Activities?",
        answer: "The various financial transactions and operations conducted by the Ergo Foundation to support the ecosystem's development.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "fud",
    term: "FUD (Fear, Uncertainty, Doubt)",
    
    shortDefinition: "A tactic used to spread negative or misleading information to create fear and uncertainty among cryptocurrency users or investors.",
    
    definition: "A tactic used to spread negative or misleading information to create fear and uncertainty among cryptocurrency users or investors.",
    
    keywords: ["fud","fud (fear, uncertainty, doubt)"],
    
    relatedTags: ["FUD (Fear, Uncertainty, Doubt)"],
    
    faq: [
      {
        question: "What is FUD (Fear, Uncertainty, Doubt)?",
        answer: "A tactic used to spread negative or misleading information to create fear and uncertainty among cryptocurrency users or investors.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "future-finance",
    term: "Future of Finance",
    
    shortDefinition: "The vision of Ergo as a blockchain platform that plays a pivotal role in the future of decentralized finance (DeFi).",
    
    definition: "The vision of Ergo as a blockchain platform that plays a pivotal role in the future of decentralized finance (DeFi).",
    
    keywords: ["future-finance","future of finance","ergo","defi","blockchain"],
    
    relatedTags: ["Future of Finance","Ergo","DeFi","blockchain"],
    
    faq: [
      {
        question: "What is Future of Finance?",
        answer: "The vision of Ergo as a blockchain platform that plays a pivotal role in the future of decentralized finance (DeFi).",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "foundation",
    term: "Foundation",
    
    shortDefinition: "A non-profit organization that supports the development, promotion, and governance of a blockchain ecosystem.",
    
    definition: "A non-profit organization that supports the development, promotion, and governance of a blockchain ecosystem.",
    
    keywords: ["foundation","blockchain"],
    
    relatedTags: ["Foundation","blockchain"],
    
    faq: [
      {
        question: "What is Foundation?",
        answer: "A non-profit organization that supports the development, promotion, and governance of a blockchain ecosystem.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "gas",
    term: "Gas",
    
    shortDefinition: "A unit of measurement for the computational effort required to execute transactions and smart contracts on a blockchain.",
    
    definition: "A unit of measurement for the computational effort required to execute transactions and smart contracts on a blockchain.",
    
    keywords: ["gas","transactions","smart contracts","blockchain"],
    
    relatedTags: ["Gas","transactions","smart contracts","blockchain"],
    
    faq: [
      {
        question: "What is Gas?",
        answer: "A unit of measurement for the computational effort required to execute transactions and smart contracts on a blockchain.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "genesis-block",
    term: "Genesis Block",
    
    shortDefinition: "The very first block of a blockchain (block 0), which establishes the initial state and from which all subsequent blocks are derived.",
    
    definition: "The genesis block is the foundational first block (block 0 or block 1) of any blockchain, hardcoded into the node software. It establishes the initial state of the network, including any pre-allocated coins, initial parameters, and often contains symbolic messages. Unlike subsequent blocks, the genesis block has no parent block reference. Ergo's genesis block was mined on July 1, 2019, marking the launch of mainnet with a fair distribution model - no pre-mine, no ICO, and all ERG created through mining emissions.",
    
    keywords: ["genesis block", "block 0", "first block", "blockchain origin", "ergo mainnet launch", "fair launch", "initial block"],
    
    keyPoints: [
      "Block 0 (or 1) - the first block with no parent reference",
      "Hardcoded into node software, cannot be changed",
      "Establishes initial blockchain state and parameters",
      "Ergo genesis: July 1, 2019 - fair launch, no pre-mine",
      "Often contains symbolic messages (Bitcoin's famous headline)",
      "All subsequent blocks trace their ancestry to genesis",
    ],
    
    technicalDetails: "Ergo's genesis block (height 0) was created on July 1, 2019 at 12:00:00 UTC. Unlike Bitcoin's genesis block which had 50 BTC, Ergo's genesis contained no coins - all ERG entered circulation through mining. The block established initial difficulty, protocol parameters, and the emission schedule. The genesis block hash serves as a unique identifier for the Ergo mainnet, distinguishing it from testnet.",
    
    useCases: [
      "Verifying you're connected to the correct network (mainnet vs testnet)",
      "Understanding blockchain history and fair launch principles",
      "Calculating total blockchain age and block height",
      "Historical reference for emission schedule calculations",
    ],
    
    relatedTags: ["Genesis Block", "blockchain", "block 0", "fair launch", "mainnet", "Ergo history"],
    
    faq: [
      {
        question: "What is a genesis block?",
        answer: "The genesis block is the very first block of a blockchain (block 0), hardcoded into the software. It has no parent block and establishes the initial state of the network. All subsequent blocks trace their ancestry back to the genesis block.",
      },
      {
        question: "When was Ergo's genesis block created?",
        answer: "Ergo's genesis block was created on July 1, 2019 at 12:00:00 UTC, marking the launch of the Ergo mainnet. Unlike many projects, Ergo had a fair launch with no pre-mine - all ERG entered circulation through mining.",
      },
      {
        question: "Did Ergo have a pre-mine in the genesis block?",
        answer: "No, Ergo had no pre-mine. The genesis block contained 0 ERG. All coins enter circulation through the emission schedule via mining rewards, ensuring fair distribution from day one.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/start/introduction",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "good-whale-fund",
    term: "Good Whale Fund",
    
    shortDefinition: "Community treasury for funding Ergo ecosystem development, marketing, and community initiatives through transparent proposal and voting processes.",
    
    definition: "The Good Whale Fund is a community-managed treasury that supports Ergo ecosystem development, marketing initiatives, and community projects. It represents the idea that large holders ('whales') can be positive forces by contributing to ecosystem growth rather than just accumulating. The fund operates through transparent proposal and voting processes, allowing the community to decide which initiatives receive support. Projects funded include development grants, marketing campaigns, educational content, and community events.",
    
    keywords: ["good whale fund", "community treasury", "funding", "grants", "ecosystem development", "governance"],
    
    keyPoints: [
      "Community-managed ecosystem treasury",
      "Funds development, marketing, education",
      "Transparent proposal process",
      "Community voting on initiatives",
      "Positive 'whale' contribution model",
      "Supports ecosystem growth",
    ],
    
    technicalDetails: "The Good Whale Fund operates through community governance mechanisms. Proposals are submitted on the Ergo Forum, discussed by the community, and voted upon. Funded initiatives include: developer grants for ecosystem tools, marketing campaigns, conference sponsorships, educational content creation, and community event support.",
    
    useCases: [
      "Funding ecosystem development",
      "Supporting marketing initiatives",
      "Sponsoring community events",
      "Providing developer grants",
      "Creating educational content",
    ],
    
    relatedTags: ["Good Whale Fund", "community", "treasury", "funding", "governance", "ecosystem"],
    
    faq: [
      {
        question: "What is the Good Whale Fund?",
        answer: "The Good Whale Fund is a community treasury that funds Ergo ecosystem development, marketing, and community initiatives. It operates through transparent proposals and community voting.",
      },
      {
        question: "How can I get funding from Good Whale Fund?",
        answer: "Submit a proposal on the Ergo Forum detailing your project, budget, and expected outcomes. The community discusses and votes on proposals. Check the Forum for current guidelines and active proposals.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "grassroots-finance",
    term: "Grassroots Finance",
    
    shortDefinition: "A financial system that prioritizes the inclusion of everyday individuals and small businesses, aligning with Ergo's vision.",
    
    definition: "A financial system that prioritizes the inclusion of everyday individuals and small businesses, aligning with Ergo's vision.",
    
    keywords: ["grassroots-finance","grassroots finance","ergo"],
    
    relatedTags: ["Grassroots Finance","Ergo"],
    
    faq: [
      {
        question: "What is Grassroots Finance?",
        answer: "A financial system that prioritizes the inclusion of everyday individuals and small businesses, aligning with Ergo's vision.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "gm",
    term: "GM (Good Morning)",
    
    shortDefinition: "Crypto community greeting meaning 'Good Morning.' Used globally regardless of timezone to build community spirit. Often paired with 'GN' (Good Night).",
    
    definition: "'GM' (Good Morning) is a friendly greeting used throughout crypto communities on Twitter, Discord, and other platforms. It's used regardless of actual time zone as a way to acknowledge fellow community members and build social bonds. The Ergo community uses GM in Discord channels and on social media. Related greetings include 'GN' (Good Night) and 'WAGMI' (We're All Gonna Make It). These simple greetings help create a sense of belonging in global, decentralized communities.",
    
    keywords: ["gm", "good morning", "crypto slang", "community", "greeting", "wagmi", "gn"],
    
    keyPoints: [
      "Friendly crypto community greeting",
      "Used regardless of timezone",
      "Builds community spirit and belonging",
      "Common on Twitter, Discord, Telegram",
      "Paired with GN (Good Night)",
      "Part of crypto culture and identity",
    ],
    
    technicalDetails: "GM became popular during the 2021 NFT boom as a way to signal community membership and positive vibes. It spread from NFT Twitter to broader crypto communities. Some projects even created 'GM' NFTs or tokens. The greeting represents the optimistic, community-focused culture that many crypto projects cultivate.",
    
    useCases: [
      "Greeting community members",
      "Building social connections in crypto",
      "Signaling community membership",
      "Starting positive conversations",
    ],
    
    relatedTags: ["GM", "community", "crypto culture", "WAGMI", "social"],
    
    faq: [
      {
        question: "What does GM mean in crypto?",
        answer: "'GM' means 'Good Morning' and is used as a friendly greeting in crypto communities. It's used regardless of actual time zone as a way to build community spirit and acknowledge fellow members.",
      },
      {
        question: "Why do crypto people say GM?",
        answer: "GM is a simple way to build community bonds in global, decentralized spaces. It signals positivity, belonging, and shared identity. It became popular during the 2021 NFT boom and spread throughout crypto culture.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "gui",
    term: "GUI (Graphical User Interface)",
    
    shortDefinition: "A visual interface that allows users to interact with software using graphical elements like buttons and menus, rather than text commands.",
    
    definition: "A visual interface that allows users to interact with software using graphical elements like buttons and menus, rather than text commands.",
    
    keywords: ["gui","gui (graphical user interface)"],
    
    relatedTags: ["GUI (Graphical User Interface)"],
    
    faq: [
      {
        question: "What is GUI (Graphical User Interface)?",
        answer: "A visual interface that allows users to interact with software using graphical elements like buttons and menus, rather than text commands.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "gwei",
    term: "Gwei",
    
    shortDefinition: "A denomination of Ether (ETH), equal to one billion (1,000,000,000) wei.",
    
    definition: "A denomination of Ether (ETH), equal to one billion (1,000,000,000) wei. Used to price gas fees on Ethereum.",
    
    keywords: ["gwei"],
    
    relatedTags: ["Gwei"],
    
    faq: [
      {
        question: "What is Gwei?",
        answer: "A denomination of Ether (ETH), equal to one billion (1,000,000,000) wei.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "hall-fame",
    term: "Hall of Fame",
    
    shortDefinition: "Recognition of outstanding Ergo contributors - developers, community builders, researchers, and educators who significantly advanced the ecosystem.",
    
    definition: "The Ergo Hall of Fame recognizes individuals who have made significant contributions to the Ergo ecosystem. This includes core developers who built fundamental infrastructure, community members who drove adoption, researchers who advanced Ergo's technology, educators who created valuable learning resources, and project founders who built successful dApps. Recognition celebrates the grassroots, volunteer-driven nature of Ergo's growth and inspires continued contribution to the ecosystem.",
    
    keywords: ["hall of fame", "contributors", "recognition", "community", "developers", "builders"],
    
    keyPoints: [
      "Recognizes outstanding contributors",
      "Includes developers, builders, educators",
      "Celebrates grassroots growth",
      "Inspires community contribution",
      "Documents ecosystem history",
      "Honors volunteer efforts",
    ],
    
    technicalDetails: "Hall of Fame recognition may include: core protocol developers, major dApp creators, prolific community educators, significant open-source contributors, and community organizers. Recognition is typically informal, emerging from community acknowledgment rather than formal processes.",
    
    useCases: [
      "Recognizing community contributions",
      "Documenting ecosystem history",
      "Inspiring new contributors",
      "Celebrating achievements",
    ],
    
    relatedTags: ["Hall of Fame", "community", "contributors", "recognition", "developers"],
    
    faq: [
      {
        question: "What is the Ergo Hall of Fame?",
        answer: "The Hall of Fame recognizes individuals who significantly contributed to Ergo - developers, community builders, researchers, and educators who helped grow the ecosystem.",
      },
      {
        question: "How do people get recognized?",
        answer: "Recognition emerges organically from community acknowledgment of significant contributions. There's no formal nomination process - consistent, valuable contribution to the ecosystem is what matters.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "hard-fork",
    term: "Hard Fork",
    
    shortDefinition: "A type of blockchain fork that is not backward-compatible, resulting in a split and the creation of a new chain.",
    
    definition: "A type of blockchain fork that is not backward-compatible, resulting in a split and the creation of a new chain.",
    
    keywords: ["hard-fork","hard fork","blockchain"],
    
    relatedTags: ["Hard Fork","blockchain"],
    
    faq: [
      {
        question: "What is Hard Fork?",
        answer: "A type of blockchain fork that is not backward-compatible, resulting in a split and the creation of a new chain.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "hardware-wallet",
    term: "Hardware Wallet",
    
    shortDefinition: "A physical device that stores cryptocurrency private keys offline, providing the highest level of security against hacks and malware.",
    
    definition: "A hardware wallet is a specialized physical device designed to securely store cryptocurrency private keys in an isolated, offline environment. Unlike software wallets that store keys on internet-connected devices, hardware wallets keep keys in a secure chip that never exposes them to potentially compromised computers. Transactions are signed within the device itself, meaning private keys never leave the hardware. Ergo is supported on Ledger hardware wallets, allowing users to secure their ERG and native tokens with the highest level of protection available.",
    
    keywords: ["hardware wallet", "cold storage", "ledger", "trezor", "offline wallet", "secure storage", "private keys", "ergo ledger"],
    
    keyPoints: [
      "Private keys never leave the device or touch the internet",
      "Transactions signed inside the secure chip",
      "Protected against malware, keyloggers, and remote hacks",
      "Ergo supported on Ledger devices via Ergo Ledger app",
      "Requires physical access and PIN to use",
      "Recovery possible with seed phrase if device is lost",
    ],
    
    technicalDetails: "Hardware wallets use secure elements (tamper-resistant chips) to store private keys and perform cryptographic operations. When signing a transaction, the wallet displays transaction details on its screen for user verification, then signs internally without exposing the key. Ergo's Ledger integration uses the Ergo Ledger app which supports ERG and native tokens. The device connects via USB and works with compatible wallet software like Nautilus.",
    
    useCases: [
      "Long-term storage of significant ERG holdings",
      "Securing large cryptocurrency portfolios",
      "Protection against computer compromise or malware",
      "Inheritance planning with secure seed phrase backup",
      "Business treasury management",
    ],
    
    relatedTags: ["Hardware Wallet", "Ledger", "cold storage", "security", "private keys", "wallet"],
    
    faq: [
      {
        question: "What is a hardware wallet?",
        answer: "A hardware wallet is a physical device that stores your cryptocurrency private keys offline in a secure chip. It provides the highest security level by keeping keys isolated from internet-connected devices, protecting against hacks and malware.",
      },
      {
        question: "Does Ergo support hardware wallets?",
        answer: "Yes, Ergo is supported on Ledger hardware wallets. You can install the Ergo Ledger app and use it with compatible software like Nautilus to securely store and manage your ERG and native tokens.",
      },
      {
        question: "Is a hardware wallet worth it for Ergo?",
        answer: "If you hold significant amounts of ERG or plan long-term storage, a hardware wallet is highly recommended. It provides the best protection against hacks, malware, and theft. For small amounts or active trading, a software wallet may be more convenient.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/wallet",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "hash",
    term: "Hash",
    
    shortDefinition: "A mathematical function that converts input data into a fixed-size string of characters, used to ensure data integrity and secure transactions.",
    
    definition: "A mathematical function that converts input data into a fixed-size string of characters, used to ensure data integrity and secure transactions.",
    
    keywords: ["hash","transactions"],
    
    relatedTags: ["Hash","transactions"],
    
    faq: [
      {
        question: "What is Hash?",
        answer: "A mathematical function that converts input data into a fixed-size string of characters, used to ensure data integrity and secure transactions.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "hodl",
    term: "HODL",
    
    shortDefinition: "Crypto slang for 'Hold On for Dear Life' - a long-term investment strategy of holding cryptocurrency through market volatility rather than selling.",
    
    definition: "HODL originated from a famous 2013 Bitcoin forum post where a user misspelled 'hold' while explaining why they wouldn't sell during a price crash. It has since become a rallying cry and investment philosophy in crypto, often interpreted as 'Hold On for Dear Life.' HODLers believe in the long-term value of their cryptocurrency and refuse to panic sell during downturns. For Ergo, HODLing aligns with the project's sound money principles - fixed supply, fair launch, and focus on long-term utility rather than short-term speculation.",
    
    keywords: ["hodl", "hold", "long-term investing", "crypto slang", "diamond hands", "investment strategy", "ergo hodler"],
    
    keyPoints: [
      "Originated from a 2013 Bitcoin forum typo",
      "Philosophy: hold through volatility, don't panic sell",
      "Often interpreted as 'Hold On for Dear Life'",
      "Aligns with Ergo's sound money principles",
      "Opposite of day trading or speculation",
      "Related terms: diamond hands, paper hands, weak hands",
    ],
    
    technicalDetails: "From a technical perspective, HODLing on Ergo means keeping ERG in a secure wallet (ideally hardware wallet for large amounts) for extended periods. Ergo's Storage Rent mechanism has minimal impact on HODLers with active wallets. The fixed 97.7M ERG supply and decreasing emission schedule make HODLing attractive for those who believe in long-term value appreciation.",
    
    useCases: [
      "Long-term investment strategy for ERG believers",
      "Avoiding emotional trading during market volatility",
      "Building position over time through dollar-cost averaging",
      "Supporting network security by reducing circulating supply",
    ],
    
    relatedTags: ["HODL", "investing", "long-term", "tokenomics", "hodlers"],
    
    faq: [
      {
        question: "What does HODL mean?",
        answer: "HODL is crypto slang meaning to hold your cryptocurrency long-term rather than selling. It originated from a 2013 Bitcoin forum typo and is often interpreted as 'Hold On for Dear Life' - a strategy of weathering market volatility.",
      },
      {
        question: "Why do people HODL Ergo?",
        answer: "People HODL ERG because of its sound money fundamentals: fixed 97.7M supply, fair launch with no pre-mine, Proof-of-Work security, and growing ecosystem. HODLers believe these qualities will drive long-term value appreciation.",
      },
      {
        question: "Is HODLing better than trading?",
        answer: "For most people, yes. Studies show most day traders lose money, while long-term holders of quality assets tend to profit. HODLing removes emotional decision-making and timing risk. However, it requires conviction and patience through market cycles.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/hodlers",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "hot-wallet",
    term: "Hot Wallet",
    
    shortDefinition: "A cryptocurrency wallet connected to the internet, providing convenient access for daily transactions but with higher security risks than cold storage.",
    
    definition: "A hot wallet is any cryptocurrency wallet that maintains an active connection to the internet, whether through a browser extension, mobile app, or desktop application. Hot wallets prioritize convenience and accessibility, making them ideal for frequent transactions, DeFi interactions, and everyday use. However, because private keys are stored on internet-connected devices, hot wallets are more vulnerable to hacking, malware, and phishing attacks. Popular Ergo hot wallets include Nautilus (browser extension), SAFEW (web wallet), and Ergo Mobile Wallet (iOS/Android).",
    
    keywords: ["hot wallet", "software wallet", "online wallet", "nautilus", "safew", "ergo wallet", "browser wallet", "mobile wallet"],
    
    keyPoints: [
      "Always connected to the internet for quick access",
      "Ideal for daily transactions and DeFi interactions",
      "Higher security risk than hardware/cold wallets",
      "Ergo options: Nautilus, SAFEW, Ergo Mobile Wallet",
      "Should only hold funds needed for regular use",
      "Vulnerable to malware, phishing, and device compromise",
    ],
    
    technicalDetails: "Hot wallets store encrypted private keys on the device (browser storage, app data, or local files). When signing transactions, keys are decrypted in memory. Security depends on device security, password strength, and user vigilance against phishing. Nautilus uses browser extension security model, SAFEW stores encrypted keys in browser storage, and mobile wallets use device secure storage APIs.",
    
    useCases: [
      "Daily cryptocurrency transactions and payments",
      "Interacting with DeFi protocols (DEXs, lending, etc.)",
      "Quick access to funds for trading",
      "Receiving payments and airdrops",
      "Testing and development with small amounts",
    ],
    
    relatedTags: ["Hot Wallet", "Nautilus", "SAFEW", "Ergo Mobile Wallet", "software wallet", "security"],
    
    faq: [
      {
        question: "What is a hot wallet?",
        answer: "A hot wallet is a cryptocurrency wallet connected to the internet, like browser extensions (Nautilus), web wallets (SAFEW), or mobile apps. They offer convenience for daily use but are less secure than hardware wallets for large holdings.",
      },
      {
        question: "Which hot wallet is best for Ergo?",
        answer: "Popular Ergo hot wallets include Nautilus (browser extension with dApp support), SAFEW (feature-rich web wallet), and Ergo Mobile Wallet (official iOS/Android app). Choice depends on your needs - Nautilus is best for DeFi, mobile wallet for on-the-go access.",
      },
      {
        question: "How much should I keep in a hot wallet?",
        answer: "Only keep funds you need for regular transactions in hot wallets. For significant holdings or long-term storage, use a hardware wallet (Ledger) or cold storage. Think of hot wallets like a physical wallet - convenient but not for your life savings.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/wallet",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "howey-test",
    term: "Howey Test",
    
    shortDefinition: "A legal framework used to determine whether a financial instrument qualifies as an 'investment contract' under US securities law.",
    
    definition: "A legal framework used to determine whether a financial instrument qualifies as an 'investment contract' under US securities law.",
    
    keywords: ["howey-test","howey test"],
    
    relatedTags: ["Howey Test"],
    
    faq: [
      {
        question: "What is Howey Test?",
        answer: "A legal framework used to determine whether a financial instrument qualifies as an 'investment contract' under US securities law.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "incentives",
    term: "Incentives",
    
    shortDefinition: "Mechanisms designed to encourage specific behaviors, such as mining or developing on the Ergo network.",
    
    definition: "Mechanisms designed to encourage specific behaviors, such as mining or developing on the Ergo network.",
    
    keywords: ["incentives","ergo","mining"],
    
    relatedTags: ["Incentives","Ergo","mining"],
    
    faq: [
      {
        question: "What is Incentives?",
        answer: "Mechanisms designed to encourage specific behaviors, such as mining or developing on the Ergo network.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "infographic",
    term: "Infographic",
    
    shortDefinition: "A visual representation of information or data designed to make complex concepts more understandable.",
    
    definition: "A visual representation of information or data designed to make complex concepts more understandable.",
    
    keywords: ["infographic"],
    
    relatedTags: ["Infographic"],
    
    faq: [
      {
        question: "What is Infographic?",
        answer: "A visual representation of information or data designed to make complex concepts more understandable.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "interface",
    term: "Interface",
    
    shortDefinition: "The user-facing layer of blockchain applications - wallets, DEX frontends, and dApp UIs that make complex protocols accessible to regular users.",
    
    definition: "In blockchain, an interface is the user-facing layer that allows people to interact with underlying protocols without understanding the technical complexity. Wallets like Nautilus provide interfaces for managing ERG and tokens. DEX frontends like Spectrum Finance's website interface with AMM smart contracts. Block explorers interface with node data. Good interfaces abstract away complexity while maintaining security. Since protocols are permissionless, anyone can build alternative interfaces, promoting competition and user choice.",
    
    keywords: ["interface", "ui", "ux", "frontend", "wallet", "dapp", "user experience", "nautilus"],
    
    keyPoints: [
      "User-facing layer for blockchain interaction",
      "Abstracts technical complexity",
      "Wallets, DEX frontends, explorers are interfaces",
      "Permissionless - anyone can build alternatives",
      "Quality varies - choose trusted interfaces",
      "Separate from underlying protocols",
    ],
    
    technicalDetails: "Interfaces communicate with blockchain through APIs (node RPC, explorer APIs) and sign transactions using wallet integration. Web interfaces often use wallet connectors (like EIP-12 for Ergo) to request transaction signing. The interface constructs transactions but the wallet controls keys. This separation means compromised interfaces can't directly steal funds, though they could trick users into signing malicious transactions.",
    
    useCases: [
      "Interacting with Ergo blockchain via Nautilus",
      "Trading on Spectrum Finance frontend",
      "Viewing transactions on explorers",
      "Building custom dApp interfaces",
    ],
    
    relatedTags: ["Interface", "UI", "UX", "wallet", "dApp", "frontend", "Nautilus"],
    
    faq: [
      {
        question: "What is a blockchain interface?",
        answer: "An interface is the user-facing layer that lets you interact with blockchain protocols - wallets for managing funds, DEX websites for trading, explorers for viewing data. They make complex technology accessible.",
      },
      {
        question: "Are interfaces safe to use?",
        answer: "Interfaces from trusted sources are generally safe. They can't access your private keys directly. However, malicious interfaces could trick you into signing bad transactions, so always verify transaction details in your wallet before signing.",
      },
      {
        question: "Can I use different interfaces for the same protocol?",
        answer: "Yes! Since protocols are permissionless smart contracts, anyone can build interfaces. You might use different DEX frontends or wallet apps - they all interact with the same underlying blockchain.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "interoperability",
    term: "Interoperability",
    
    shortDefinition: "UTXOs are well-suited for off-chain and sidechain protocols, enabling seamless integration with various solutions beyond the main blockchain, promoting interoperability.",
    
    definition: "UTXOs are well-suited for off-chain and sidechain protocols, enabling seamless integration with various solutions beyond the main blockchain, promoting interoperability.",
    
    keywords: ["interoperability","blockchain"],
    
    relatedTags: ["Interoperability","blockchain"],
    
    faq: [
      {
        question: "What is Interoperability?",
        answer: "UTXOs are well-suited for off-chain and sidechain protocols, enabling seamless integration with various solutions beyond the main blockchain, promoting interoperability.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "internal-promotions",
    term: "Internal Promotions",
    
    shortDefinition: "The process of filling roles, such as paid community manager positions, from within the existing Ergo community based on demonstrated skills and contributions.",
    
    definition: "The process of filling roles, such as paid community manager positions, from within the existing Ergo community based on demonstrated skills and contributions.",
    
    keywords: ["internal-promotions","internal promotions","ergo"],
    
    relatedTags: ["Internal Promotions","Ergo"],
    
    faq: [
      {
        question: "What is Internal Promotions?",
        answer: "The process of filling roles, such as paid community manager positions, from within the existing Ergo community based on demonstrated skills and contributions.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "jitc",
    term: "Just in Time Costing (JITC)",
    
    shortDefinition: "A specific update introduced in Ergo's Node V5, designed to enhance block capacity and transaction processing speed.",
    
    definition: "A specific update introduced in Ergo's Node V5, designed to enhance block capacity and transaction processing speed.",
    
    keywords: ["jitc","just in time costing (jitc)","ergo","transactions"],
    
    relatedTags: ["Just in Time Costing (JITC)","Ergo","transactions"],
    
    faq: [
      {
        question: "What is Just in Time Costing (JITC)?",
        answer: "A specific update introduced in Ergo's Node V5, designed to enhance block capacity and transaction processing speed.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "json",
    term: "JSON (JavaScript Object Notation)",
    
    shortDefinition: "A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.",
    
    definition: "A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is widely used in blockchain APIs, smart contracts, and configuration files for its simplicity and compatibility.",
    
    keywords: ["json","json (javascript object notation)"],
    
    relatedTags: ["JSON (JavaScript Object Notation)"],
    
    faq: [
      {
        question: "What is JSON (JavaScript Object Notation)?",
        answer: "A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "kya",
    term: "KYA (Know Your Assumptions)",
    
    shortDefinition: "It emphasizes the importance of understanding the underlying assumptions and principles in various contexts, such as cryptocurrencies, decentralized finance (DeFi), and decision-making processes, t...",
    
    definition: "It emphasizes the importance of understanding the underlying assumptions and principles in various contexts, such as cryptocurrencies, decentralized finance (DeFi), and decision-making processes, to make informed choices and decisions",
    
    keywords: ["kya","kya (know your assumptions)","defi"],
    
    relatedTags: ["KYA (Know Your Assumptions)","DeFi"],
    
    faq: [
      {
        question: "What is KYA (Know Your Assumptions)?",
        answer: "It emphasizes the importance of understanding the underlying assumptions and principles in various contexts, such as cryptocurrencies, decentralized finance (DeFi), and decision-making processes, t...",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "kyc",
    term: "KYC (Know Your Customer)",
    
    shortDefinition: "A process used by businesses and financial institutions to verify the identities of their customers.",
    
    definition: "A process used by businesses and financial institutions to verify the identities of their customers. KYC is required by law in many countries to prevent money laundering and fraud. It often involves submitting identification documents.",
    
    keywords: ["kyc","kyc (know your customer)"],
    
    relatedTags: ["KYC (Know Your Customer)"],
    
    faq: [
      {
        question: "What is KYC (Know Your Customer)?",
        answer: "A process used by businesses and financial institutions to verify the identities of their customers.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "layer-0",
    term: "Layer 0 (Network or Peer-to-Peer Layer)",
    
    shortDefinition: "The base layer of Ergo's scalability model, responsible for network communication and peer-to-peer interactions.",
    
    definition: "The base layer of Ergo's scalability model, responsible for network communication and peer-to-peer interactions.",
    
    keywords: ["layer-0","layer 0 (network or peer-to-peer layer)","ergo"],
    
    relatedTags: ["Layer 0 (Network or Peer-to-Peer Layer)","Ergo"],
    
    faq: [
      {
        question: "What is Layer 0 (Network or Peer-to-Peer Layer)?",
        answer: "The base layer of Ergo's scalability model, responsible for network communication and peer-to-peer interactions.",
      },
    ],
    
    category: "scalability",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "layer-1",
    term: "Layer 1 (Core Blockchain Layer)",
    
    shortDefinition: "The core blockchain layer of Ergo's scalability model, where the main blockchain transactions and consensus mechanisms operate.",
    
    definition: "The core blockchain layer of Ergo's scalability model, where the main blockchain transactions and consensus mechanisms operate.",
    
    keywords: ["layer-1","layer 1 (core blockchain layer)","ergo","transactions","blockchain"],
    
    relatedTags: ["Layer 1 (Core Blockchain Layer)","Ergo","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Layer 1 (Core Blockchain Layer)?",
        answer: "The core blockchain layer of Ergo's scalability model, where the main blockchain transactions and consensus mechanisms operate.",
      },
    ],
    
    category: "consensus",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "light-nodes",
    term: "Light Nodes",
    
    shortDefinition: "Nodes in the Ergo network that support light clients and allow for trustless contract execution on common devices.",
    
    definition: "Nodes in the Ergo network that support light clients and allow for trustless contract execution on common devices.",
    
    keywords: ["light-nodes","light nodes","ergo"],
    
    relatedTags: ["Light Nodes","Ergo"],
    
    faq: [
      {
        question: "What is Light Nodes?",
        answer: "Nodes in the Ergo network that support light clients and allow for trustless contract execution on common devices.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "lightweight-clients",
    term: "Lightweight Clients",
    
    shortDefinition: "Wallet software that verifies blockchain data without downloading the full chain. Ergo's NiPoPoWs enable truly trustless light clients with cryptographic proofs.",
    
    definition: "Lightweight clients (light clients) are wallet applications that interact with the blockchain without downloading and verifying the entire chain history. They rely on compact proofs or trusted servers to validate transactions. Ergo's NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) enable a superior form of light client that can verify blockchain state with cryptographic certainty using only a few kilobytes of data. This allows mobile wallets and browser extensions to achieve security close to full nodes while remaining practical for everyday devices.",
    
    keywords: ["lightweight clients", "light clients", "spv", "nipopows", "mobile wallet", "browser wallet", "nautilus", "verification"],
    
    keyPoints: [
      "Verify blockchain without full chain download",
      "Essential for mobile and browser wallets",
      "Ergo uses NiPoPoWs for trustless verification",
      "Only kilobytes of data needed, not gigabytes",
      "Security between SPV and full nodes",
      "Enables wallets like Nautilus and mobile apps",
    ],
    
    technicalDetails: "Traditional SPV clients trust miners and are vulnerable to certain attacks. Ergo's NiPoPoWs provide cryptographic proofs that the chain is valid using logarithmic-sized proof data (a few KB vs hundreds of GB). Light clients download block headers and NiPoPoW proofs, then verify specific transactions using Merkle proofs. This enables Nautilus browser extension and mobile wallets to verify transactions without trusting external servers.",
    
    useCases: [
      "Mobile wallet applications (Ergo Mobile Wallet)",
      "Browser extension wallets (Nautilus)",
      "IoT and embedded devices",
      "Cross-chain bridge verification",
      "Resource-constrained environments",
    ],
    
    relatedTags: ["Lightweight Clients", "NiPoPoWs", "SPV", "Nautilus", "mobile wallet", "verification"],
    
    faq: [
      {
        question: "What is a lightweight client?",
        answer: "A lightweight client is wallet software that verifies blockchain transactions without downloading the entire chain (hundreds of GB). It uses compact proofs to validate data, making it practical for phones and browsers.",
      },
      {
        question: "How do Ergo light clients differ from Bitcoin SPV?",
        answer: "Ergo uses NiPoPoWs which provide cryptographic proof of chain validity, not just header verification like Bitcoin SPV. This means Ergo light clients can detect invalid chains that SPV clients would accept, offering security closer to full nodes.",
      },
      {
        question: "Is Nautilus a light client?",
        answer: "Yes, Nautilus is a lightweight client that doesn't require downloading the full blockchain. It connects to Ergo nodes and uses efficient verification methods to validate transactions while remaining practical as a browser extension.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    learnMoreUrl: "/technology",
    docsUrl: "/docs/nipopows",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "liquidity",
    term: "Liquidity",
    
    shortDefinition: "The ease with which an asset can be bought or sold without significantly affecting its price - high liquidity means easy trading with minimal slippage.",
    
    definition: "Liquidity refers to how easily an asset can be converted to cash or traded for another asset without causing significant price movement. In cryptocurrency, high liquidity means you can buy or sell large amounts quickly at stable prices, while low liquidity leads to price slippage and difficulty executing trades. On Ergo, liquidity is provided through decentralized exchanges like Spectrum Finance, where users can trade ERG and native tokens. Liquidity providers (LPs) deposit assets into pools and earn trading fees in return.",
    
    keywords: ["liquidity", "trading", "slippage", "liquidity pool", "DEX", "spectrum finance", "market depth", "trading volume"],
    
    keyPoints: [
      "High liquidity = easy trading with minimal price impact",
      "Low liquidity = price slippage on larger trades",
      "DEXs like Spectrum Finance provide on-chain liquidity",
      "Liquidity providers earn fees for depositing assets",
      "Total Value Locked (TVL) indicates ecosystem liquidity",
      "More liquidity attracts more traders and users",
    ],
    
    technicalDetails: "On Ergo DEXs, liquidity exists in Automated Market Maker (AMM) pools using formulas like x*y=k. When you trade, the pool rebalances and the price adjusts based on the ratio change. Larger pools have less slippage. Ergo's eUTXO model enables unique AMM designs with features like concentrated liquidity. Trading fees (typically 0.3%) are distributed to liquidity providers proportional to their share.",
    
    useCases: [
      "Trading ERG and native tokens on DEXs",
      "Earning passive income as a liquidity provider",
      "Evaluating token tradability before investing",
      "Understanding market health and trading conditions",
      "Arbitrage opportunities between venues",
    ],
    
    relatedTags: ["Liquidity", "DEX", "AMM", "Spectrum Finance", "liquidity pool", "trading", "DeFi"],
    
    faq: [
      {
        question: "What is liquidity in crypto?",
        answer: "Liquidity is how easily you can buy or sell a cryptocurrency without significantly moving its price. High liquidity means you can trade large amounts quickly at stable prices. Low liquidity leads to slippage where your trade moves the price against you.",
      },
      {
        question: "Where can I find liquidity for Ergo tokens?",
        answer: "The main liquidity source for ERG and Ergo native tokens is Spectrum Finance, a decentralized exchange with AMM pools. Centralized exchanges like KuCoin and Gate.io also provide ERG liquidity for fiat/crypto pairs.",
      },
      {
        question: "How can I provide liquidity on Ergo?",
        answer: "You can provide liquidity on Spectrum Finance by depositing equal values of two tokens into a pool (e.g., ERG/SigUSD). You'll receive LP tokens representing your share and earn a portion of trading fees. Be aware of impermanent loss risks.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    learnMoreUrl: "/use/defi",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "liquidity-provider",
    term: "Liquidity Provider",
    
    shortDefinition: "A liquidity provider is someone who deposits tokens into a liquidity pool.",
    
    definition: "A liquidity provider is someone who deposits tokens into a liquidity pool. Liquidity providers take on price risk and are compensated with trading fees.",
    
    keywords: ["liquidity-provider","liquidity provider","tokens"],
    
    relatedTags: ["Liquidity Provider","tokens"],
    
    faq: [
      {
        question: "What is Liquidity Provider?",
        answer: "A liquidity provider is someone who deposits tokens into a liquidity pool.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "logarithmic-space-mining",
    term: "Logarithmic Space Mining",
    
    shortDefinition: "A feature allowing the existence of light miners who can bootstrap using block headers without downloading the entire blockchain, enhancing network scalability.",
    
    definition: "A feature allowing the existence of light miners who can bootstrap using block headers without downloading the entire blockchain, enhancing network scalability.",
    
    keywords: ["logarithmic-space-mining","logarithmic space mining","mining","blockchain"],
    
    relatedTags: ["Logarithmic Space Mining","mining","blockchain"],
    
    faq: [
      {
        question: "What is Logarithmic Space Mining?",
        answer: "A feature allowing the existence of light miners who can bootstrap using block headers without downloading the entire blockchain, enhancing network scalability.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "long-term-collaboration",
    term: "Long-term Collaboration",
    
    shortDefinition: "The potential for individuals who actively engage with the Ergo community to establish ongoing partnerships and collaborations with the Ergo Foundation.",
    
    definition: "The potential for individuals who actively engage with the Ergo community to establish ongoing partnerships and collaborations with the Ergo Foundation.",
    
    keywords: ["long-term-collaboration","long-term collaboration","ergo"],
    
    relatedTags: ["Long-term Collaboration","Ergo"],
    
    faq: [
      {
        question: "What is Long-term Collaboration?",
        answer: "The potential for individuals who actively engage with the Ergo community to establish ongoing partnerships and collaborations with the Ergo Foundation.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "layer-0-network",
    term: "Layer 0",
    
    shortDefinition: "The base network or peer-to-peer layer in a blockchain, responsible for communication and data propagation.",
    
    definition: "The base network or peer-to-peer layer in a blockchain, responsible for communication and data propagation.",
    
    keywords: ["layer-0-network","layer 0","blockchain"],
    
    relatedTags: ["Layer 0","blockchain"],
    
    faq: [
      {
        question: "What is Layer 0?",
        answer: "The base network or peer-to-peer layer in a blockchain, responsible for communication and data propagation.",
      },
    ],
    
    category: "scalability",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "layer-1-blockchain",
    term: "Layer 1",
    
    shortDefinition: "The base blockchain protocol that handles consensus, security, and transaction finality. Ergo is a Layer 1 blockchain with native smart contract capabilities.",
    
    definition: "Layer 1 (L1) refers to the base blockchain protocol - the foundational layer that provides consensus, security, data availability, and transaction finality. Examples include Bitcoin, Ethereum, and Ergo. Layer 1 blockchains are self-contained and don't rely on other networks for security. Ergo is a Layer 1 blockchain featuring Proof-of-Work consensus (Autolykos), the eUTXO model for smart contracts, and native token support. Layer 2 solutions (like Lightning Network or rollups) build on top of Layer 1 for additional scalability.",
    
    keywords: ["layer 1", "l1", "base layer", "blockchain", "consensus", "ergo", "proof of work", "eutxo"],
    
    keyPoints: [
      "Base blockchain providing consensus and security",
      "Self-contained - doesn't rely on other networks",
      "Ergo is a Layer 1 with PoW and eUTXO",
      "Handles transaction finality and data availability",
      "Layer 2 solutions build on top for scaling",
      "Examples: Bitcoin, Ethereum, Ergo, Cardano",
    ],
    
    technicalDetails: "Ergo's Layer 1 provides: 1) Autolykos PoW consensus for security, 2) eUTXO model for state management, 3) ErgoScript for smart contracts, 4) Native multi-asset support, 5) ~2 minute block times, 6) Adjustable parameters through miner voting. Layer 2 solutions on Ergo could include Plasma chains, state channels, or rollups, though the efficient L1 handles most use cases directly.",
    
    useCases: [
      "Understanding blockchain architecture",
      "Comparing Ergo to other L1 blockchains",
      "Evaluating Layer 1 vs Layer 2 tradeoffs",
      "Understanding where transactions are finalized",
    ],
    
    relatedTags: ["Layer 1", "blockchain", "consensus", "Proof of Work", "eUTXO", "Layer 2"],
    
    faq: [
      {
        question: "What is a Layer 1 blockchain?",
        answer: "Layer 1 is the base blockchain protocol that provides consensus, security, and transaction finality. It's self-contained and doesn't rely on other networks. Bitcoin, Ethereum, and Ergo are all Layer 1 blockchains.",
      },
      {
        question: "Is Ergo a Layer 1 or Layer 2?",
        answer: "Ergo is a Layer 1 blockchain with its own Proof-of-Work consensus (Autolykos), native smart contracts (ErgoScript), and the eUTXO model. It doesn't depend on any other blockchain for security.",
      },
      {
        question: "What's the difference between Layer 1 and Layer 2?",
        answer: "Layer 1 is the base blockchain handling consensus and security. Layer 2 solutions build on top of L1 for additional scalability (like Lightning Network on Bitcoin). L2 inherits security from L1 but can process transactions faster or cheaper.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    learnMoreUrl: "/technology",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "layer-2-offchain",
    term: "Layer 2",
    
    shortDefinition: "An off-chain or secondary protocol built on top of a Layer 1 blockchain to improve scalability and reduce costs.",
    
    definition: "An off-chain or secondary protocol built on top of a Layer 1 blockchain to improve scalability and reduce costs.",
    
    keywords: ["layer-2-offchain","layer 2","blockchain"],
    
    relatedTags: ["Layer 2","blockchain"],
    
    faq: [
      {
        question: "What is Layer 2?",
        answer: "An off-chain or secondary protocol built on top of a Layer 1 blockchain to improve scalability and reduce costs.",
      },
    ],
    
    category: "scalability",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "lightning-network",
    term: "Lightning Network",
    
    shortDefinition: "A Layer 2 payment protocol on Bitcoin enabling instant, low-cost transactions through payment channels. Ergo has its own scaling solutions better suited to its eUTXO model.",
    
    definition: "The Lightning Network is a Layer 2 scaling solution for Bitcoin that enables near-instant, low-fee transactions by creating payment channels between users. Transactions occur off-chain and are only settled on Bitcoin's main chain when channels are opened or closed. While Lightning solves Bitcoin's scalability issues, Ergo takes different approaches: the eUTXO model already enables parallel transaction processing, and solutions like NiPoPoWs, subblocks, and potential Plasma implementations are better suited to Ergo's architecture than Lightning-style channels.",
    
    keywords: ["lightning network", "layer 2", "payment channels", "bitcoin scaling", "off-chain", "ergo scaling", "nipopows"],
    
    keyPoints: [
      "Layer 2 solution for Bitcoin scalability",
      "Uses payment channels for off-chain transactions",
      "Near-instant transactions with minimal fees",
      "Requires channel management and liquidity",
      "Ergo uses different scaling approaches (NiPoPoWs, subblocks)",
      "eUTXO already enables parallel processing",
    ],
    
    technicalDetails: "Lightning works by locking Bitcoin in 2-of-2 multisig addresses (channels). Users exchange signed transactions off-chain, updating balances without broadcasting. Only opening/closing transactions hit the blockchain. Ergo's eUTXO model handles many Lightning use cases natively - atomic swaps, payment splitting, and parallel validation. For additional scaling, Ergo explores NiPoPoWs for light clients, subblocks for faster confirmations, and potential Plasma-style solutions.",
    
    useCases: [
      "Understanding Bitcoin's scaling approach",
      "Comparing Layer 2 solutions across blockchains",
      "Evaluating Ergo's scaling alternatives",
      "Understanding payment channel technology",
    ],
    
    relatedTags: ["Lightning Network", "Layer 2", "Bitcoin", "scaling", "NiPoPoWs", "payment channels"],
    
    faq: [
      {
        question: "What is the Lightning Network?",
        answer: "The Lightning Network is a Layer 2 protocol for Bitcoin that enables instant, low-cost transactions through payment channels. Users lock Bitcoin in channels and transact off-chain, only settling on the main blockchain when channels open or close.",
      },
      {
        question: "Does Ergo have a Lightning Network?",
        answer: "Ergo doesn't use Lightning-style payment channels. Its eUTXO model already enables parallel transaction processing. For additional scaling, Ergo uses NiPoPoWs for light clients and is exploring subblocks and Plasma-style solutions better suited to its architecture.",
      },
      {
        question: "How does Ergo scale without Lightning?",
        answer: "Ergo scales through: 1) eUTXO parallel processing, 2) NiPoPoWs for efficient light clients, 3) Subblocks for faster confirmations, 4) Potential Plasma implementations. These approaches leverage Ergo's unique architecture rather than adapting Bitcoin solutions.",
      },
    ],
    
    category: "scalability",
    difficulty: "intermediate",
    
    learnMoreUrl: "/technology",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "logarithmic-mining",
    term: "Logarithmic Mining",
    
    shortDefinition: "A mining approach that allows light miners to bootstrap using block headers without downloading the entire blockchain.",
    
    definition: "A mining approach that allows light miners to bootstrap using block headers without downloading the entire blockchain.",
    
    keywords: ["logarithmic-mining","logarithmic mining","mining","blockchain"],
    
    relatedTags: ["Logarithmic Mining","mining","blockchain"],
    
    faq: [
      {
        question: "What is Logarithmic Mining?",
        answer: "A mining approach that allows light miners to bootstrap using block headers without downloading the entire blockchain.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "major-changes",
    term: "Major Changes",
    
    shortDefinition: "Indicates substantial updates or additions that require setting up a local development environment for documentation changes.",
    
    definition: "Indicates substantial updates or additions that require setting up a local development environment for documentation changes.",
    
    keywords: ["major-changes","major changes"],
    
    relatedTags: ["Major Changes"],
    
    faq: [
      {
        question: "What is Major Changes?",
        answer: "Indicates substantial updates or additions that require setting up a local development environment for documentation changes.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "malware",
    term: "Malware",
    
    shortDefinition: "Malicious software that can steal crypto by replacing wallet addresses, logging keystrokes, or compromising seed phrases. Always verify downloads from official sources.",
    
    definition: "Malware (malicious software) in the cryptocurrency context includes programs designed to steal funds or credentials. Common types include clipboard hijackers (replacing copied wallet addresses with attacker addresses), keyloggers (capturing seed phrases and passwords), fake wallet apps, and cryptojacking software (using your computer to mine for attackers). Protecting against malware is crucial for crypto security - always download wallets from official sources, verify checksums, use hardware wallets for large holdings, and never enter seed phrases on websites.",
    
    keywords: ["malware", "security", "clipboard hijacker", "keylogger", "phishing", "crypto security", "wallet security"],
    
    keyPoints: [
      "Clipboard hijackers replace copied addresses",
      "Keyloggers capture seed phrases and passwords",
      "Fake wallet apps steal funds directly",
      "Always download from official sources",
      "Verify software checksums when possible",
      "Hardware wallets protect against most malware",
    ],
    
    technicalDetails: "Crypto-targeting malware often operates by: 1) Monitoring clipboard for wallet address patterns and replacing them, 2) Keylogging to capture seed phrases during wallet setup, 3) Screen capture during sensitive operations, 4) Browser extensions that modify transaction details, 5) Fake wallet software that sends funds to attackers. Defense includes using hardware wallets, verifying addresses on device screens, and running security software.",
    
    useCases: [
      "Understanding crypto security threats",
      "Protecting wallet credentials",
      "Verifying software authenticity",
      "Choosing security practices",
    ],
    
    relatedTags: ["Malware", "security", "wallet", "phishing", "hardware wallet"],
    
    faq: [
      {
        question: "How does crypto malware steal funds?",
        answer: "Common methods include clipboard hijacking (replacing copied addresses), keyloggers (capturing seed phrases), fake wallet apps, and browser extensions that modify transactions. Always verify addresses and download software from official sources.",
      },
      {
        question: "How can I protect my ERG from malware?",
        answer: "Use hardware wallets for significant holdings, download wallets only from official sources (ergoplatform.org links), verify addresses on hardware wallet screens, never enter seed phrases on websites, and keep your system updated with security software.",
      },
      {
        question: "What are official Ergo wallet sources?",
        answer: "Download Nautilus from the Chrome Web Store or official GitHub. Ergo Mobile Wallet from official app stores. SAFEW from its official domain. Always verify URLs and check community channels if unsure.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/wallet",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "market-maker",
    term: "Market Maker ('MM')",
    
    shortDefinition: "An entity that provides liquidity by continuously quoting buy and sell prices, profiting from the spread while enabling smooth trading for others.",
    
    definition: "A market maker is a participant who provides liquidity to a market by continuously offering to buy and sell an asset, profiting from the bid-ask spread. In traditional finance, these are typically large institutions. In DeFi, Automated Market Makers (AMMs) like those on Spectrum Finance replace human market makers with smart contracts and liquidity pools. Anyone can become a liquidity provider on Ergo DEXs, earning trading fees in exchange for depositing assets into pools.",
    
    keywords: ["market maker", "mm", "liquidity provider", "amm", "automated market maker", "bid-ask spread", "spectrum finance", "defi"],
    
    keyPoints: [
      "Provides liquidity by quoting buy and sell prices",
      "Profits from the spread between bid and ask",
      "In DeFi, replaced by Automated Market Makers (AMMs)",
      "Anyone can be a liquidity provider on Ergo DEXs",
      "Enables trading without waiting for counterparties",
      "Essential for healthy, liquid markets",
    ],
    
    technicalDetails: "Traditional market makers manage order books with limit orders. DeFi AMMs use mathematical formulas (like x*y=k) to determine prices based on pool ratios. On Ergo's Spectrum Finance, liquidity providers deposit token pairs into pools and receive LP tokens. When trades occur, the pool rebalances and fees (typically 0.3%) are distributed to LPs. Ergo's eUTXO model enables unique AMM designs with features like concentrated liquidity.",
    
    useCases: [
      "Providing liquidity on Spectrum Finance",
      "Understanding DEX mechanics and trading",
      "Earning passive income from trading fees",
      "Evaluating market health and liquidity depth",
    ],
    
    relatedTags: ["Market Maker", "AMM", "liquidity", "DEX", "Spectrum Finance", "DeFi", "trading"],
    
    faq: [
      {
        question: "What is a market maker?",
        answer: "A market maker provides liquidity by continuously offering to buy and sell an asset. They profit from the spread between buy and sell prices. In DeFi, smart contract-based Automated Market Makers (AMMs) serve this function.",
      },
      {
        question: "How do AMMs work on Ergo?",
        answer: "Ergo's Spectrum Finance uses AMM pools where liquidity providers deposit token pairs. Prices are determined by pool ratios using formulas like x*y=k. Traders swap against pools, and LPs earn a share of trading fees proportional to their contribution.",
      },
      {
        question: "Can I be a market maker on Ergo?",
        answer: "Yes! Anyone can provide liquidity on Spectrum Finance by depositing tokens into pools. You'll receive LP tokens and earn trading fees. Be aware of impermanent loss risk when pool ratios change significantly.",
      },
    ],
    
    category: "economics",
    difficulty: "intermediate",
    
    learnMoreUrl: "/use/defi",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "memory-hard-mining",
    term: "Memory-Hard Mining Proof of Work",
    
    shortDefinition: "A mining algorithm that requires significant memory (RAM/VRAM) to solve, making ASIC development economically impractical and promoting GPU mining decentralization.",
    
    definition: "Memory-hard Proof of Work algorithms are designed to require substantial memory bandwidth and capacity to solve mining puzzles, rather than just raw computational power. This makes developing specialized ASIC hardware economically impractical because memory chips are expensive and don't benefit from the same efficiency gains as logic circuits. Ergo's Autolykos 2 is a memory-hard algorithm requiring 4GB+ GPU VRAM, ensuring that consumer graphics cards can mine competitively and preventing the centralization seen in ASIC-dominated networks like Bitcoin.",
    
    keywords: ["memory-hard", "memory-hard mining", "asic resistance", "autolykos", "gpu mining", "vram", "decentralization", "proof of work"],
    
    keyPoints: [
      "Requires significant memory (VRAM) to mine",
      "Makes ASIC development economically impractical",
      "Ergo's Autolykos 2 requires 4GB+ GPU VRAM",
      "Promotes decentralization through GPU mining",
      "Memory bandwidth is the bottleneck, not compute",
      "Prevents mining centralization by large ASIC farms",
    ],
    
    technicalDetails: "Memory-hard algorithms force miners to store and access large datasets in memory during puzzle solving. Autolykos 2 uses a table of ~2GB that must be stored in GPU VRAM and accessed randomly during mining. Since memory bandwidth doesn't scale as efficiently as compute in ASICs, the cost advantage of specialized hardware is eliminated. The algorithm also uses Blake2b hashing and requires solving equations that depend on the memory table contents.",
    
    useCases: [
      "Understanding why Ergo is ASIC-resistant",
      "Evaluating GPU requirements for mining",
      "Comparing mining decentralization across blockchains",
      "Assessing long-term mining accessibility",
    ],
    
    relatedTags: ["Memory-Hard", "ASIC Resistance", "Autolykos", "GPU Mining", "Proof of Work", "decentralization"],
    
    faq: [
      {
        question: "What is memory-hard mining?",
        answer: "Memory-hard mining algorithms require significant memory (RAM/VRAM) to solve puzzles, not just computational power. This makes ASIC development impractical since memory chips are expensive and don't offer the same efficiency gains as specialized compute hardware.",
      },
      {
        question: "Why is memory-hard mining important for decentralization?",
        answer: "Memory-hard algorithms allow consumer GPUs to mine competitively since memory technology is widely available. This prevents the centralization seen in ASIC-dominated networks where only wealthy entities with specialized hardware can profit.",
      },
      {
        question: "How much VRAM do I need to mine Ergo?",
        answer: "Ergo's Autolykos 2 algorithm requires a minimum of 4GB GPU VRAM. GPUs with 6GB or more are recommended for optimal performance. Both AMD and NVIDIA GPUs work well.",
      },
    ],
    
    category: "mining",
    difficulty: "intermediate",
    
    learnMoreUrl: "/miners",
    docsUrl: "/docs/mining/autolykos",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "miner-adjustable-parameters",
    term: "Miner-Adjustable Parameters",
    
    shortDefinition: "Parameters that miners can modify to influence the network's scalability, including block size and transaction size, affecting throughput and computational load.",
    
    definition: "Parameters that miners can modify to influence the network's scalability, including block size and transaction size, affecting throughput and computational load.",
    
    keywords: ["miner-adjustable-parameters","miner-adjustable parameters","transactions"],
    
    relatedTags: ["Miner-Adjustable Parameters","transactions"],
    
    faq: [
      {
        question: "What is Miner-Adjustable Parameters?",
        answer: "Parameters that miners can modify to influence the network's scalability, including block size and transaction size, affecting throughput and computational load.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "minor-changes",
    term: "Minor Changes",
    
    shortDefinition: "Refers to small edits or updates that can be made directly through the GitHub interface, typically for minor corrections or improvements.",
    
    definition: "Refers to small edits or updates that can be made directly through the GitHub interface, typically for minor corrections or improvements.",
    
    keywords: ["minor-changes","minor changes"],
    
    relatedTags: ["Minor Changes"],
    
    faq: [
      {
        question: "What is Minor Changes?",
        answer: "Refers to small edits or updates that can be made directly through the GitHub interface, typically for minor corrections or improvements.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "mining",
    term: "Mining",
    
    shortDefinition: "The process of obtaining ERG tokens by solving computational problems using hardware and electricity.",
    
    definition: "The process of obtaining ERG tokens by solving computational problems using hardware and electricity.",
    
    keywords: ["mining","tokens"],
    
    relatedTags: ["Mining","mining","tokens"],
    
    faq: [
      {
        question: "What is Mining?",
        answer: "The process of obtaining ERG tokens by solving computational problems using hardware and electricity.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "miners",
    term: "Miners",
    
    shortDefinition: "Individuals or entities who use computing power to validate transactions, secure the Ergo network, and earn ERG rewards through the Autolykos Proof-of-Work algorithm.",
    
    definition: "Miners are participants who contribute computational power to the Ergo network, competing to solve cryptographic puzzles and create new blocks. When a miner successfully finds a valid block, they receive block rewards (newly minted ERG) plus transaction fees from included transactions. Ergo uses the Autolykos 2 algorithm which is ASIC-resistant and memory-hard, allowing anyone with a consumer GPU (4GB+ VRAM) to mine profitably. Miners play a crucial role in network security, transaction validation, and maintaining decentralization.",
    
    keywords: ["miners", "ergo mining", "gpu mining", "autolykos", "block rewards", "proof of work", "network security", "transaction validation"],
    
    keyPoints: [
      "Secure the network by contributing hash power",
      "Earn ERG through block rewards and transaction fees",
      "GPU mining with 4GB+ VRAM (ASIC-resistant)",
      "Can mine solo or join mining pools",
      "Current block reward: ~27 ERG (decreasing over time)",
      "Play a key role in Ergo's decentralization",
    ],
    
    technicalDetails: "Ergo miners run the Autolykos 2 algorithm which requires solving memory-hard puzzles using GPU VRAM. Popular mining software includes lolMiner, T-Rex, and Nanominer. Miners can join pools (Herominers, 2miners, Woolypooly) for consistent rewards or mine solo for full block rewards. The difficulty adjusts every epoch to maintain ~2 minute block times. Storage rent also provides miners with additional income from dormant boxes.",
    
    useCases: [
      "Earning passive income through ERG mining",
      "Supporting network security and decentralization",
      "Participating in Ergo's fair distribution model",
      "Utilizing idle GPU hardware productively",
      "Contributing to the ecosystem while earning rewards",
    ],
    
    relatedTags: ["Miners", "mining", "Autolykos", "GPU mining", "Proof of Work", "block rewards", "mining pools"],
    
    faq: [
      {
        question: "Who are Ergo miners?",
        answer: "Ergo miners are individuals or organizations who use GPU computing power to validate transactions, create new blocks, and secure the network. In return, they earn ERG through block rewards and transaction fees.",
      },
      {
        question: "What do I need to mine Ergo?",
        answer: "You need a GPU with 4GB+ VRAM (AMD or NVIDIA), mining software (lolMiner, T-Rex, or Nanominer), an Ergo wallet address, and optionally a mining pool. The Autolykos algorithm is ASIC-resistant, so consumer GPUs can mine profitably.",
      },
      {
        question: "How much can Ergo miners earn?",
        answer: "Mining profitability depends on your GPU hashrate, electricity costs, and ERG price. Use mining calculators to estimate earnings. Current block reward is ~27 ERG, decreasing over time according to the emission schedule.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    learnMoreUrl: "/miners",
    docsUrl: "/docs/mining",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "mev",
    term: "Miner Extracted Value (MEV)",
    
    shortDefinition: "The total value that miners (or validators) can extract from block production, often by reordering, including, or excluding transactions.",
    
    definition: "The total value that miners (or validators) can extract from block production, often by reordering, including, or excluding transactions. MEV can include front-running, sandwich attacks, and other strategies that take advantage of transaction ordering. It is a topic of research and debate in DeFi.",
    
    keywords: ["mev","miner extracted value (mev)","transactions"],
    
    relatedTags: ["Miner Extracted Value (MEV)","transactions"],
    
    faq: [
      {
        question: "What is Miner Extracted Value (MEV)?",
        answer: "The total value that miners (or validators) can extract from block production, often by reordering, including, or excluding transactions.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "miner-fee",
    term: "Miner Fee",
    
    shortDefinition: "Transaction fees paid to miners for including transactions in blocks. Ergo fees are predictably low (~$0.01) and based on transaction size, not network congestion.",
    
    definition: "Miner fees (transaction fees) are payments made to miners for processing and including transactions in blocks. On Ergo, fees are calculated based on transaction size in bytes, not network demand, making them predictably low (typically 0.001-0.002 ERG, around $0.01). This contrasts with Ethereum where fees spike during congestion. Miners receive both block rewards (newly minted ERG) and accumulated transaction fees. Ergo's fee model, combined with Storage Rent, ensures long-term miner incentives even after emission ends.",
    
    keywords: ["miner fee", "transaction fee", "gas", "ergo fees", "low fees", "predictable fees", "mining rewards"],
    
    keyPoints: [
      "Paid to miners for transaction processing",
      "Ergo fees based on transaction size, not congestion",
      "Typically 0.001-0.002 ERG (~$0.01)",
      "Predictable unlike Ethereum gas fees",
      "Combined with block rewards for miner income",
      "Storage Rent provides additional miner revenue",
    ],
    
    technicalDetails: "Ergo transaction fees are calculated as: baseFee + (txSizeInBytes * feePerByte). The minimum fee is 0.001 ERG. Complex transactions (multiple inputs/outputs, scripts) cost more due to larger size. Unlike Ethereum's auction-based gas model, Ergo fees don't spike during high demand. Miners prioritize transactions by fee-per-byte ratio. Babel fees allow paying fees in tokens instead of ERG.",
    
    useCases: [
      "Estimating transaction costs",
      "Understanding miner incentives",
      "Comparing Ergo vs Ethereum fee models",
      "Planning DeFi transactions",
      "Using Babel fees for token-only payments",
    ],
    
    relatedTags: ["Miner Fee", "transaction fee", "mining", "Babel fees", "low fees"],
    
    faq: [
      {
        question: "How much are Ergo transaction fees?",
        answer: "Ergo transaction fees are typically 0.001-0.002 ERG (around $0.01). Fees are based on transaction size in bytes, not network congestion, making them predictably low compared to Ethereum's variable gas fees.",
      },
      {
        question: "Why are Ergo fees so low?",
        answer: "Ergo fees are based on transaction size, not demand-based auctions like Ethereum. The eUTXO model is efficient, and there's no competition for block space that drives up prices. This makes Ergo suitable for everyday transactions.",
      },
      {
        question: "Can I pay fees in tokens instead of ERG?",
        answer: "Yes! Ergo supports Babel fees, allowing you to pay transaction fees in supported tokens instead of ERG. Liquidity providers accept your tokens and pay the ERG fee on your behalf, taking a small spread.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    learnMoreUrl: "/start",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "mixing",
    term: "Mixing",
    
    shortDefinition: "A process that obscures the origin and destination of cryptocurrency transactions for increased privacy.",
    
    definition: "A process that obscures the origin and destination of cryptocurrency transactions for increased privacy.",
    
    keywords: ["mixing","transactions","privacy"],
    
    relatedTags: ["Mixing","transactions","privacy"],
    
    faq: [
      {
        question: "What is Mixing?",
        answer: "A process that obscures the origin and destination of cryptocurrency transactions for increased privacy.",
      },
    ],
    
    category: "privacy",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "multi-stage-utxo",
    term: "Multi-Stage UTXO Model",
    
    shortDefinition: "Ergo's extended UTXO model, detailed in a peer-reviewed paper, enables the implementation of Turing-complete smart contracts, offering advanced scripting capabilities.",
    
    definition: "Ergo's extended UTXO model, detailed in a peer-reviewed paper, enables the implementation of Turing-complete smart contracts, offering advanced scripting capabilities.",
    
    keywords: ["multi-stage-utxo","multi-stage utxo model","ergo","smart contracts"],
    
    relatedTags: ["Multi-Stage UTXO Model","Ergo","smart contracts"],
    
    faq: [
      {
        question: "What is Multi-Stage UTXO Model?",
        answer: "Ergo's extended UTXO model, detailed in a peer-reviewed paper, enables the implementation of Turing-complete smart contracts, offering advanced scripting capabilities.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "mainnet",
    term: "Mainnet",
    
    shortDefinition: "The primary, live blockchain network where real transactions take place and have real value.",
    
    definition: "The primary, live blockchain network where real transactions take place and have real value. Mainnet is the opposite of testnet. It is the production environment for a blockchain, where tokens and assets have actual economic value.",
    
    keywords: ["mainnet","transactions","blockchain"],
    
    relatedTags: ["Mainnet","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Mainnet?",
        answer: "The primary, live blockchain network where real transactions take place and have real value.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "mixer",
    term: "Mixer",
    
    shortDefinition: "A privacy tool that combines multiple cryptocurrency transactions to obscure their origin and destination.",
    
    definition: "A privacy tool that combines multiple cryptocurrency transactions to obscure their origin and destination. Mixers enhance privacy by making it difficult to trace the flow of funds. ErgoMixer is a non-custodial, programmable mixer on Ergo.",
    
    keywords: ["mixer","transactions","privacy"],
    
    relatedTags: ["Mixer","transactions","privacy"],
    
    faq: [
      {
        question: "What is Mixer?",
        answer: "A privacy tool that combines multiple cryptocurrency transactions to obscure their origin and destination.",
      },
    ],
    
    category: "privacy",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "moon",
    term: "Moon",
    
    shortDefinition: "A slang term for a cryptocurrency's price rising dramatically, often used with the phrase 'to the moon!",
    
    definition: "A slang term for a cryptocurrency's price rising dramatically, often used with the phrase 'to the moon!'.",
    
    keywords: ["moon"],
    
    relatedTags: ["Moon"],
    
    faq: [
      {
        question: "What is Moon?",
        answer: "A slang term for a cryptocurrency's price rising dramatically, often used with the phrase 'to the moon!",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "ngmi",
    term: "NGMI (Not Gonna Make It)",
    
    shortDefinition: "Crypto slang for poor decisions likely to fail. Opposite of WAGMI (We're All Gonna Make It). Used humorously or critically about bad trades or weak hands.",
    
    definition: "'NGMI' (Not Gonna Make It) is crypto slang used to describe someone making poor decisions that will likely lead to failure - selling too early, falling for scams, or panic selling during dips. It's the opposite of 'WAGMI' (We're All Gonna Make It). The term can be used self-deprecatingly ('I sold my ERG at the bottom, NGMI'), critically about others, or to describe projects with poor fundamentals. While often humorous, it reflects the crypto community's culture of learning from mistakes and maintaining conviction.",
    
    keywords: ["ngmi", "not gonna make it", "wagmi", "crypto slang", "weak hands", "paper hands", "meme"],
    
    keyPoints: [
      "Slang for poor decisions likely to fail",
      "Opposite of WAGMI (We're All Gonna Make It)",
      "Used for panic sellers and bad trades",
      "Can be humorous or critical",
      "Related to 'paper hands' concept",
      "Part of crypto meme culture",
    ],
    
    technicalDetails: "NGMI emerged from crypto Twitter and Discord culture. Common NGMI behaviors include: selling during dips (paper hands), falling for obvious scams, not doing research (no DYOR), and FOMOing into tops. The term creates social pressure to hold through volatility and make informed decisions.",
    
    useCases: [
      "Understanding crypto community slang",
      "Recognizing risky behaviors to avoid",
      "Participating in crypto culture",
    ],
    
    relatedTags: ["NGMI", "WAGMI", "crypto slang", "paper hands", "HODL"],
    
    faq: [
      {
        question: "What does NGMI mean?",
        answer: "'NGMI' means 'Not Gonna Make It' - slang for someone making poor crypto decisions like panic selling, falling for scams, or not doing research. It's the opposite of WAGMI (We're All Gonna Make It).",
      },
      {
        question: "Is NGMI always negative?",
        answer: "It can be humorous self-deprecation ('I paper handed, NGMI'), friendly teasing, or genuine criticism. Context matters. The Ergo community generally focuses on education rather than shaming newcomers.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "nascent-project",
    term: "Nascent Project",
    
    shortDefinition: "Early-stage projects in the Ergo ecosystem still in development. Higher risk but potential for growth. DYOR before participating.",
    
    definition: "A nascent project in the Ergo ecosystem is one in its early development stages - perhaps just launched, in beta, or still building core features. The Ergo ecosystem has many nascent projects as developers build on the platform. While these projects offer potential for early participation and growth, they also carry higher risks: smart contracts may not be fully audited, teams may be small, and features may change. Users should DYOR (Do Your Own Research), start with small amounts, and understand that early-stage projects may fail or pivot significantly.",
    
    keywords: ["nascent project", "early stage", "startup", "beta", "development", "risk", "dyor"],
    
    keyPoints: [
      "Early-stage, still in development",
      "May be in beta or pre-launch",
      "Higher risk, higher potential reward",
      "Smart contracts may not be audited",
      "DYOR before participating",
      "Common in growing ecosystems like Ergo",
    ],
    
    technicalDetails: "Nascent projects may have: unaudited smart contracts, limited documentation, small teams, evolving tokenomics, and incomplete features. Due diligence should include: checking team background, reviewing available code, understanding the roadmap, assessing community activity, and only risking funds you can afford to lose.",
    
    useCases: [
      "Evaluating new Ergo ecosystem projects",
      "Understanding early-stage investment risk",
      "Identifying growth opportunities",
      "Due diligence on new dApps",
    ],
    
    relatedTags: ["Nascent Project", "early stage", "DYOR", "risk", "ecosystem"],
    
    faq: [
      {
        question: "What is a nascent project?",
        answer: "A nascent project is in early development stages - new, possibly in beta, still building features. In the Ergo ecosystem, many projects are nascent as developers build on the platform.",
      },
      {
        question: "Are nascent projects safe to use?",
        answer: "Nascent projects carry higher risk than established ones. Smart contracts may be unaudited, teams small, and features incomplete. DYOR, start with small amounts, and only risk what you can afford to lose.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/ecosystem",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "native-asset",
    term: "Native Asset",
    
    shortDefinition: "Tokens built directly into a blockchain's protocol (like ERG on Ergo), as opposed to smart contract tokens. Native assets have first-class support without wrapper contracts.",
    
    definition: "Native assets are tokens that exist at the protocol level of a blockchain, not as smart contract abstractions. On Ergo, all tokens (including NFTs) are native assets stored directly in boxes alongside ERG, with first-class support for creation, transfer, and burning. This contrasts with Ethereum where tokens (ERC-20, ERC-721) are smart contracts that must be interacted with through additional code. Native assets on Ergo are more efficient, secure, and can be handled uniformly by wallets and dApps without needing to understand individual token contracts.",
    
    keywords: ["native asset", "native tokens", "ergo tokens", "first-class tokens", "erc-20 vs native", "protocol-level tokens", "nft"],
    
    keyPoints: [
      "Built into the blockchain protocol, not smart contracts",
      "Ergo has native multi-asset support in every box",
      "More efficient than contract-based tokens (ERC-20)",
      "Uniform handling by wallets and applications",
      "ERG is Ergo's native currency, other tokens are native assets",
      "Includes NFTs - all stored the same way",
    ],
    
    technicalDetails: "On Ergo, native assets are stored in box register R2 as a collection of (tokenId, amount) pairs. Token creation requires a special transaction that generates a unique tokenId from the box ID. Unlike ERC-20 tokens which require contract calls for transfers, Ergo native tokens can be transferred in the same transaction as ERG with no additional overhead. This enables atomic multi-asset swaps and simplifies wallet implementations.",
    
    useCases: [
      "Creating tokens without deploying smart contracts",
      "Building multi-asset applications efficiently",
      "NFT creation and management",
      "Understanding Ergo's token model vs Ethereum",
      "Atomic swaps between multiple tokens",
    ],
    
    relatedTags: ["Native Asset", "tokens", "ERG", "NFT", "eUTXO", "multi-asset"],
    
    faq: [
      {
        question: "What is a native asset?",
        answer: "A native asset is a token built directly into a blockchain's protocol, not as a smart contract. On Ergo, all tokens are native assets stored in boxes alongside ERG, making them more efficient and secure than contract-based tokens like ERC-20.",
      },
      {
        question: "How do Ergo native tokens differ from ERC-20?",
        answer: "Ergo native tokens exist at the protocol level and are stored directly in boxes. ERC-20 tokens are smart contracts that must be called separately. Native tokens are more efficient, don't require understanding individual contracts, and enable atomic multi-asset transactions.",
      },
      {
        question: "How do I create a native token on Ergo?",
        answer: "You can create native tokens on Ergo using wallet features (Nautilus supports token minting) or through the node API. Token creation requires a small ERG fee and generates a unique tokenId. No smart contract deployment is needed.",
      },
    ],
    
    category: "economics",
    difficulty: "intermediate",
    
    learnMoreUrl: "/technology",
    docsUrl: "/docs/tokens",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "network-fee",
    term: "Network Fee",
    
    shortDefinition: "A fee paid by users to include their transactions in a blockchain network and incentivize miners or validators.",
    
    definition: "A fee paid by users to include their transactions in a blockchain network and incentivize miners or validators.",
    
    keywords: ["network-fee","network fee","transactions","blockchain"],
    
    relatedTags: ["Network Fee","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Network Fee?",
        answer: "A fee paid by users to include their transactions in a blockchain network and incentivize miners or validators.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "non-custodial-wallet",
    term: "Non-Custodial Wallet",
    
    shortDefinition: "A cryptocurrency wallet where the user has full control (ownership) over their private keys and funds without relying on a third party.",
    
    definition: "A cryptocurrency wallet where the user has full control (ownership) over their private keys and funds without relying on a third party.",
    
    keywords: ["non-custodial-wallet","non-custodial wallet","wallet"],
    
    relatedTags: ["Non-Custodial Wallet","wallet"],
    
    faq: [
      {
        question: "What is Non-Custodial Wallet?",
        answer: "A cryptocurrency wallet where the user has full control (ownership) over their private keys and funds without relying on a third party.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "open-model",
    term: "Open Model",
    
    shortDefinition: "Ergo operates on an open model where contributions from the community are encouraged and highly regarded.",
    
    definition: "Ergo operates on an open model where contributions from the community are encouraged and highly regarded. This model emphasizes inclusivity and collaboration.",
    
    keywords: ["open-model","open model","ergo"],
    
    relatedTags: ["Open Model","Ergo"],
    
    faq: [
      {
        question: "What is Open Model?",
        answer: "Ergo operates on an open model where contributions from the community are encouraged and highly regarded.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "open-source",
    term: "Open Source",
    
    shortDefinition: "Software or technology that is publicly accessible and can be freely examined, modified, and distributed.",
    
    definition: "Software or technology that is publicly accessible and can be freely examined, modified, and distributed.",
    
    keywords: ["open-source","open source"],
    
    relatedTags: ["Open Source"],
    
    faq: [
      {
        question: "What is Open Source?",
        answer: "Software or technology that is publicly accessible and can be freely examined, modified, and distributed.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "order",
    term: "Order",
    
    shortDefinition: "An instruction to buy or sell an asset at specified conditions. On Ergo DEXs like Spectrum Finance, orders interact with AMM pools or can be limit orders.",
    
    definition: "An order in DeFi is an instruction to exchange one asset for another under specified conditions. On Ergo's decentralized exchanges like Spectrum Finance, orders typically interact with AMM (Automated Market Maker) pools for instant swaps, or can be limit orders that execute when price conditions are met. Unlike centralized exchanges with order books, AMM-based DEXs execute orders against liquidity pools. Ergo's eUTXO model enables unique order types including partial fills and composable multi-step orders.",
    
    keywords: ["order", "swap", "trade", "dex", "amm", "limit order", "spectrum finance", "defi"],
    
    keyPoints: [
      "Instruction to buy or sell assets",
      "AMM orders execute against liquidity pools",
      "Limit orders wait for price conditions",
      "Spectrum Finance is Ergo's main DEX",
      "eUTXO enables partial fills and composability",
      "Orders are transactions on the blockchain",
    ],
    
    technicalDetails: "On Ergo DEXs, market orders swap immediately against AMM pools at current prices (with slippage tolerance). Limit orders create boxes with conditions that can be spent when price reaches the target. The eUTXO model allows orders to be partially filled across multiple transactions. Order execution is MEV-resistant due to the UTXO model - the order specifies exact outputs, preventing front-running.",
    
    useCases: [
      "Swapping tokens on Spectrum Finance",
      "Setting limit orders for better prices",
      "Understanding DEX trading mechanics",
      "Comparing CEX vs DEX order execution",
    ],
    
    relatedTags: ["Order", "DEX", "AMM", "Spectrum Finance", "swap", "trading"],
    
    faq: [
      {
        question: "How do orders work on Ergo DEXs?",
        answer: "On Spectrum Finance, market orders swap instantly against AMM liquidity pools. You specify input/output tokens and slippage tolerance. Limit orders can also be set to execute when prices reach your target.",
      },
      {
        question: "What is slippage in an order?",
        answer: "Slippage is the difference between expected and actual execution price. On AMMs, large orders can move the price. Setting slippage tolerance protects against unexpected price changes during order execution.",
      },
      {
        question: "Are Ergo DEX orders MEV-resistant?",
        answer: "Yes, Ergo's eUTXO model makes orders MEV-resistant. Orders specify exact expected outputs, so miners cannot front-run or sandwich attack trades like on Ethereum's account model.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    learnMoreUrl: "/use/defi",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "orderbook",
    term: "Orderbook",
    
    shortDefinition: "An order book system is similar to what you will see on traditional centralized exchanges.",
    
    definition: "An order book system is similar to what you will see on traditional centralized exchanges. It shows buyers and sellers with amounts and the value of bids on one table.",
    
    keywords: ["orderbook"],
    
    relatedTags: ["Orderbook"],
    
    faq: [
      {
        question: "What is Orderbook?",
        answer: "An order book system is similar to what you will see on traditional centralized exchanges.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "output",
    term: "Output",
    
    shortDefinition: "When performing a swap, this is the range of expected output you will receive depending on slippage.",
    
    definition: "When performing a swap, this is the range of expected output you will receive depending on slippage.",
    
    keywords: ["output"],
    
    relatedTags: ["Output"],
    
    faq: [
      {
        question: "What is Output?",
        answer: "When performing a swap, this is the range of expected output you will receive depending on slippage.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "payment-request",
    term: "Payment Request",
    
    shortDefinition: "A formal request submitted by a developer who has completed a task or project, requesting payment for their work.",
    
    definition: "A formal request submitted by a developer who has completed a task or project, requesting payment for their work.",
    
    keywords: ["payment-request","payment request"],
    
    relatedTags: ["Payment Request"],
    
    faq: [
      {
        question: "What is Payment Request?",
        answer: "A formal request submitted by a developer who has completed a task or project, requesting payment for their work.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "permissionless",
    term: "Permissionless",
    
    shortDefinition: "Refers to the philosophy that the Ergo protocol should be open and inclusive, allowing anyone to join the network and participate in the protocol without requiring preliminary actions",
    
    definition: "Refers to the philosophy that the Ergo protocol should be open and inclusive, allowing anyone to join the network and participate in the protocol without requiring preliminary actions",
    
    keywords: ["permissionless","ergo"],
    
    relatedTags: ["Permissionless","Ergo"],
    
    faq: [
      {
        question: "What is Permissionless?",
        answer: "Refers to the philosophy that the Ergo protocol should be open and inclusive, allowing anyone to join the network and participate in the protocol without requiring preliminary actions",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "phishing-scam",
    term: "Phishing Scam",
    
    shortDefinition: "A fraudulent attempt to obtain sensitive information like usernames, passwords, and financial details by posing as a trustworthy entity.",
    
    definition: "A fraudulent attempt to obtain sensitive information like usernames, passwords, and financial details by posing as a trustworthy entity.",
    
    keywords: ["phishing-scam","phishing scam"],
    
    relatedTags: ["Phishing Scam"],
    
    faq: [
      {
        question: "What is Phishing Scam?",
        answer: "A fraudulent attempt to obtain sensitive information like usernames, passwords, and financial details by posing as a trustworthy entity.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "privacy",
    term: "Privacy",
    
    shortDefinition: "Refers to the right to keep personal information and activities confidential and secure from unauthorized access or disclosure.",
    
    definition: "Refers to the right to keep personal information and activities confidential and secure from unauthorized access or disclosure. In blockchain, privacy technologies protect user data and transaction details.",
    
    keywords: ["privacy","transactions","blockchain"],
    
    relatedTags: ["Privacy","transactions","blockchain","privacy"],
    
    faq: [
      {
        question: "What is Privacy?",
        answer: "Refers to the right to keep personal information and activities confidential and secure from unauthorized access or disclosure.",
      },
    ],
    
    category: "privacy",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "plasma",
    term: "Plasma",
    
    shortDefinition: "A scaling solution for blockchain networks that creates child chains connected to a main blockchain, enabling faster and cheaper transactions while maintaining security.",
    
    definition: "A scaling solution for blockchain networks that creates child chains connected to a main blockchain, enabling faster and cheaper transactions while maintaining security.",
    
    keywords: ["plasma","transactions","blockchain","security"],
    
    relatedTags: ["Plasma","transactions","blockchain","security"],
    
    faq: [
      {
        question: "What is Plasma?",
        answer: "A scaling solution for blockchain networks that creates child chains connected to a main blockchain, enabling faster and cheaper transactions while maintaining security.",
      },
    ],
    
    category: "scalability",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "privacy-tools",
    term: "Privacy Tools",
    
    shortDefinition: "Ergo's suite of privacy-enhancing technologies including Sigma protocols for zero-knowledge proofs and ErgoMixer for transaction mixing, enabling optional privacy for users.",
    
    definition: "Privacy tools on Ergo encompass a range of technologies that allow users to enhance their financial privacy while maintaining regulatory compliance options. The foundation is Sigma protocols - composable zero-knowledge proofs that enable proving statements without revealing underlying data. ErgoMixer provides non-interactive, non-custodial coin mixing to break transaction linkability. Unlike privacy-by-default coins, Ergo offers optional privacy - users choose when and how much privacy they need, making it suitable for both private transactions and transparent business use.",
    
    keywords: ["privacy tools", "sigma protocols", "ergomixer", "zero knowledge", "coin mixing", "optional privacy", "financial privacy", "zk proofs"],
    
    keyPoints: [
      "Sigma protocols: composable zero-knowledge proofs",
      "ErgoMixer: non-custodial, non-interactive mixing",
      "Optional privacy - user chooses level of privacy",
      "Ring signatures and stealth addresses possible",
      "Compliant privacy - can prove things without revealing data",
      "Foundation for private DeFi applications",
    ],
    
    technicalDetails: "Sigma protocols in ErgoScript enable proving knowledge of secrets (like private keys) without revealing them. They're composable using AND, OR, and THRESHOLD operations. ErgoMixer uses Sigma protocols to implement a mixing scheme where users can swap boxes without revealing which output belongs to whom. The mixer is non-custodial (you never lose control of funds) and non-interactive (no coordination needed with other users).",
    
    useCases: [
      "Private transactions using ErgoMixer",
      "Multi-signature schemes with hidden signers",
      "Anonymous voting and governance",
      "Private DeFi participation",
      "Proving solvency without revealing holdings",
      "Selective disclosure for compliance",
    ],
    
    relatedTags: ["Privacy Tools", "Sigma Protocols", "ErgoMixer", "zero-knowledge", "privacy", "mixing"],
    
    faq: [
      {
        question: "What privacy tools does Ergo offer?",
        answer: "Ergo offers Sigma protocols (composable zero-knowledge proofs built into ErgoScript) and ErgoMixer (non-custodial coin mixing). These enable optional privacy - users choose when to use privacy features while maintaining the option for transparent transactions.",
      },
      {
        question: "How does ErgoMixer work?",
        answer: "ErgoMixer uses Sigma protocols to mix coins between users, breaking the link between transaction inputs and outputs. It's non-custodial (you always control your funds) and non-interactive (no coordination with other users needed). You can mix ERG and native tokens.",
      },
      {
        question: "Is Ergo a privacy coin?",
        answer: "Ergo offers optional privacy, not privacy-by-default like Monero. Users can choose when to use privacy features (ErgoMixer, Sigma protocols) and when to transact transparently. This provides flexibility for both private users and businesses requiring transparency.",
      },
    ],
    
    category: "privacy",
    difficulty: "intermediate",
    
    learnMoreUrl: "/use/privacy",
    docsUrl: "/docs/privacy",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "pos",
    term: "Proof-of-stake (PoS)",
    
    shortDefinition: "A consensus mechanism in which validators are chosen to create new blocks and secure a blockchain network based on the number of tokens they hold and 'stake.",
    
    definition: "A consensus mechanism in which validators are chosen to create new blocks and secure a blockchain network based on the number of tokens they hold and 'stake.'",
    
    keywords: ["pos","proof-of-stake (pos)","tokens","blockchain"],
    
    relatedTags: ["Proof-of-stake (PoS)","tokens","blockchain"],
    
    faq: [
      {
        question: "What is Proof-of-stake (PoS)?",
        answer: "A consensus mechanism in which validators are chosen to create new blocks and secure a blockchain network based on the number of tokens they hold and 'stake.",
      },
    ],
    
    category: "consensus",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "pow",
    term: "Proof of Work (PoW)",
    
    shortDefinition: "A consensus algorithm used by Ergo and many other blockchains, where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks.",
    
    definition: "A consensus algorithm used by Ergo and many other blockchains, where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks.",
    
    keywords: ["pow","proof of work (pow)","ergo","transactions","blockchain"],
    
    relatedTags: ["Proof of Work (PoW)","Ergo","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Proof of Work (PoW)?",
        answer: "A consensus algorithm used by Ergo and many other blockchains, where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks.",
      },
    ],
    
    category: "mining",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "proprietary-ip",
    term: "Proprietary IP",
    
    shortDefinition: "Closed-source intellectual property owned by specific entities. Ergo is fully open-source with no proprietary components, ensuring transparency and community ownership.",
    
    definition: "Proprietary IP (Intellectual Property) refers to technology, code, or designs owned by a specific entity and not freely available. Unlike proprietary systems, Ergo is fully open-source - all core code, protocols, and fundamental tools are publicly available under permissive licenses. This means anyone can audit the code, fork the project, or build upon it without permission. The absence of proprietary IP in Ergo's core ensures true decentralization, prevents vendor lock-in, and allows the community to maintain the project independently if needed.",
    
    keywords: ["proprietary ip", "intellectual property", "open source", "closed source", "licensing", "transparency"],
    
    keyPoints: [
      "Ergo has no proprietary core components",
      "All code is open-source and auditable",
      "Prevents vendor lock-in",
      "Community can fork if needed",
      "Ensures true decentralization",
      "Contrast to closed-source projects",
    ],
    
    technicalDetails: "Ergo's core components are licensed under permissive open-source licenses (typically MIT or Apache 2.0). This includes the node software, SDKs, and core libraries. Some ecosystem projects may have their own licensing, but the fundamental infrastructure is open. This contrasts with some blockchain projects that have proprietary components or restrictive licenses.",
    
    useCases: [
      "Understanding Ergo's open-source nature",
      "Evaluating project transparency",
      "Assessing decentralization claims",
      "Comparing licensing models",
    ],
    
    relatedTags: ["Proprietary IP", "open source", "licensing", "transparency", "decentralization"],
    
    faq: [
      {
        question: "Does Ergo have proprietary components?",
        answer: "No, Ergo is fully open-source with no proprietary core components. All code is publicly available, auditable, and can be forked by anyone. This ensures true decentralization and transparency.",
      },
      {
        question: "Why does open-source matter for blockchain?",
        answer: "Open-source ensures transparency (anyone can audit), prevents vendor lock-in, enables community maintenance, and supports true decentralization. Proprietary components could introduce hidden risks or dependencies.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    docsUrl: "https://github.com/ergoplatform",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "raffle",
    term: "Raffle",
    
    shortDefinition: "ErgoRaffle is a decentralized crowdfunding and lottery platform on Ergo with provably fair randomness and transparent, automated prize distribution.",
    
    definition: "ErgoRaffle is a decentralized raffle and crowdfunding platform built on Ergo that enables provably fair lotteries and community fundraising. Unlike traditional raffles, ErgoRaffle uses blockchain-based randomness that can be verified by anyone, ensuring fairness. Smart contracts automatically distribute prizes when conditions are met, eliminating the need to trust organizers. The platform is used for community fundraising, charity events, and entertainment, demonstrating Ergo's capability for transparent, trustless applications.",
    
    keywords: ["raffle", "ergoraffle", "lottery", "crowdfunding", "provable fairness", "randomness", "dapp"],
    
    keyPoints: [
      "Decentralized raffle/lottery platform on Ergo",
      "Provably fair randomness on blockchain",
      "Automatic prize distribution via smart contracts",
      "Used for fundraising and community events",
      "Transparent - anyone can verify fairness",
      "No trust in organizers required",
    ],
    
    technicalDetails: "ErgoRaffle uses blockchain-based randomness derived from block headers, making outcomes unpredictable but verifiable after the fact. Smart contracts hold ticket sales and automatically distribute winnings when the raffle concludes. The contract logic ensures organizers cannot manipulate outcomes or withhold prizes. Tickets are purchased with ERG, and the platform takes a small fee for operation.",
    
    useCases: [
      "Community fundraising campaigns",
      "Charity and donation drives",
      "Fair lottery and prize drawings",
      "Demonstrating trustless application design",
    ],
    
    relatedTags: ["Raffle", "ErgoRaffle", "lottery", "crowdfunding", "dApp", "randomness"],
    
    faq: [
      {
        question: "What is ErgoRaffle?",
        answer: "ErgoRaffle is a decentralized raffle platform on Ergo where anyone can create or participate in provably fair lotteries. Smart contracts ensure automatic, transparent prize distribution with verifiable randomness.",
      },
      {
        question: "How is ErgoRaffle fair?",
        answer: "Randomness is derived from blockchain data (block headers) that cannot be predicted or manipulated. Anyone can verify the outcome by checking the on-chain data. Smart contracts automatically distribute prizes - organizers cannot cheat.",
      },
      {
        question: "What can ErgoRaffle be used for?",
        answer: "Community fundraising, charity events, prize giveaways, and entertainment. Any situation where you need a fair, transparent lottery or crowdfunding mechanism without trusting a central organizer.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/ecosystem",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "resource",
    term: "Resource",
    
    shortDefinition: "Additional reading materials, articles, documentation, and videos related to Ergo's eUTXO model and its advantages.",
    
    definition: "Additional reading materials, articles, documentation, and videos related to Ergo's eUTXO model and its advantages.",
    
    keywords: ["resource","ergo"],
    
    relatedTags: ["Resource","Ergo"],
    
    faq: [
      {
        question: "What is Resource?",
        answer: "Additional reading materials, articles, documentation, and videos related to Ergo's eUTXO model and its advantages.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "review",
    term: "Review",
    
    shortDefinition: "The process in which the Ergo team evaluates the work submitted by a developer to ensure it meets the specified criteria and quality standards.",
    
    definition: "The process in which the Ergo team evaluates the work submitted by a developer to ensure it meets the specified criteria and quality standards.",
    
    keywords: ["review","ergo"],
    
    relatedTags: ["Review","Ergo"],
    
    faq: [
      {
        question: "What is Review?",
        answer: "The process in which the Ergo team evaluates the work submitted by a developer to ensure it meets the specified criteria and quality standards.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "reward-allocation",
    term: "Reward Allocation",
    
    shortDefinition: "The process of assigning bounties or rewards to contributors based on the quality and impact of their contributions.",
    
    definition: "The process of assigning bounties or rewards to contributors based on the quality and impact of their contributions.",
    
    keywords: ["reward-allocation","reward allocation"],
    
    relatedTags: ["Reward Allocation"],
    
    faq: [
      {
        question: "What is Reward Allocation?",
        answer: "The process of assigning bounties or rewards to contributors based on the quality and impact of their contributions.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "scalability",
    term: "Scalability",
    
    shortDefinition: "Another advantage of the UTXO model is its inherent support for parallel transaction processing, simplifying network scalability.",
    
    definition: "Another advantage of the UTXO model is its inherent support for parallel transaction processing, simplifying network scalability. It is also more compatible with stateless client solutions.",
    
    keywords: ["scalability","transactions"],
    
    relatedTags: ["Scalability","transactions"],
    
    faq: [
      {
        question: "What is Scalability?",
        answer: "Another advantage of the UTXO model is its inherent support for parallel transaction processing, simplifying network scalability.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "scripting-language",
    term: "Scripting Language",
    
    shortDefinition: "A programming language used to specify the rules for spending cryptocurrency.",
    
    definition: "A programming language used to specify the rules for spending cryptocurrency. ErgoScript is designed to support various features like ring signatures, atomic swaps, and more.",
    
    keywords: ["scripting-language","scripting language","ergo"],
    
    relatedTags: ["Scripting Language","Ergo"],
    
    faq: [
      {
        question: "What is Scripting Language?",
        answer: "A programming language used to specify the rules for spending cryptocurrency.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "security-audit",
    term: "Security Audit",
    
    shortDefinition: "A comprehensive assessment conducted to evaluate the security of certain components or aspects of Ergo.",
    
    definition: "A comprehensive assessment conducted to evaluate the security of certain components or aspects of Ergo. The goal is to identify vulnerabilities, weaknesses, and potential risks in the system.",
    
    keywords: ["security-audit","security audit","ergo","security"],
    
    relatedTags: ["Security Audit","Ergo","security"],
    
    faq: [
      {
        question: "What is Security Audit?",
        answer: "A comprehensive assessment conducted to evaluate the security of certain components or aspects of Ergo.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "sharding",
    term: "Sharding",
    
    shortDefinition: "A scaling technique that divides the blockchain into smaller, parallel chains to increase throughput while maintaining security.",
    
    definition: "A scaling technique that divides the blockchain into smaller, parallel chains to increase throughput while maintaining security.",
    
    keywords: ["sharding","blockchain","security"],
    
    relatedTags: ["Sharding","blockchain","security"],
    
    faq: [
      {
        question: "What is Sharding?",
        answer: "A scaling technique that divides the blockchain into smaller, parallel chains to increase throughput while maintaining security.",
      },
    ],
    
    category: "scalability",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "shared-figma",
    term: "Shared Figma Graphic Space",
    
    shortDefinition: "A collaborative platform where community members can work together on visual content and design projects related to Ergo.",
    
    definition: "A collaborative platform where community members can work together on visual content and design projects related to Ergo.",
    
    keywords: ["shared-figma","shared figma graphic space","ergo"],
    
    relatedTags: ["Shared Figma Graphic Space","Ergo"],
    
    faq: [
      {
        question: "What is Shared Figma Graphic Space?",
        answer: "A collaborative platform where community members can work together on visual content and design projects related to Ergo.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "state-channel",
    term: "State Channel",
    
    shortDefinition: "A scaling solution that allows parties to conduct off-chain transactions while maintaining the security guarantees of the main blockchain.",
    
    definition: "A scaling solution that allows parties to conduct off-chain transactions while maintaining the security guarantees of the main blockchain.",
    
    keywords: ["state-channel","state channel","transactions","blockchain","security"],
    
    relatedTags: ["State Channel","transactions","blockchain","security"],
    
    faq: [
      {
        question: "What is State Channel?",
        answer: "A scaling solution that allows parties to conduct off-chain transactions while maintaining the security guarantees of the main blockchain.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "sigcan",
    term: "SigCAN (Sigmanaut Candidate)",
    
    shortDefinition: "An individual who has applied to the Sigmanauts Program and is in the initial stage of becoming a Sigmanaut, where they can showcase their skills and contributions.",
    
    definition: "An individual who has applied to the Sigmanauts Program and is in the initial stage of becoming a Sigmanaut, where they can showcase their skills and contributions.",
    
    keywords: ["sigcan","sigcan (sigmanaut candidate)"],
    
    relatedTags: ["SigCAN (Sigmanaut Candidate)"],
    
    faq: [
      {
        question: "What is SigCAN (Sigmanaut Candidate)?",
        answer: "An individual who has applied to the Sigmanauts Program and is in the initial stage of becoming a Sigmanaut, where they can showcase their skills and contributions.",
      },
    ],
    
    category: "privacy",
    difficulty: "advanced",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "sigma-protocols-alt",
    term: "Sigma-Protocols",
    
    shortDefinition: "Composable zero-knowledge proof system built into ErgoScript, enabling privacy features, multi-signatures, and complex authentication without revealing secrets.",
    
    definition: "Sigma protocols are a class of zero-knowledge proofs that allow proving knowledge of a secret without revealing it. In Ergo, Sigma protocols are built directly into ErgoScript, the smart contract language, making them first-class citizens of the platform. They can be composed using AND, OR, and THRESHOLD operations to create complex spending conditions. This enables features like ring signatures (proving you're one of a group without revealing which), multi-signatures, time-locked transactions, and the privacy mixing in ErgoMixer - all without trusted setup or heavy computation.",
    
    keywords: ["sigma protocols", "zero knowledge", "zk proofs", "privacy", "ergoscript", "ring signatures", "multi-sig", "ergomixer"],
    
    keyPoints: [
      "Zero-knowledge proofs built into ErgoScript",
      "Prove knowledge without revealing secrets",
      "Composable with AND, OR, THRESHOLD",
      "Enable ring signatures and multi-sig",
      "Power ErgoMixer privacy features",
      "No trusted setup required",
    ],
    
    technicalDetails: "Sigma protocols in Ergo are based on discrete logarithm assumptions (Schnorr signatures). ErgoScript supports proveDlog (prove knowledge of discrete log) and proveDHTuple (Diffie-Hellman tuple proofs). These primitives combine with logical operators: SigmaAnd, SigmaOr, and atLeast(k, [sigs]) for threshold signatures. The resulting proofs are efficient and can be verified quickly by nodes.",
    
    useCases: [
      "Privacy mixing with ErgoMixer",
      "Multi-signature wallets and DAOs",
      "Ring signatures for anonymous group membership",
      "Time-locked transactions",
      "Atomic swaps with privacy",
      "Selective disclosure for compliance",
    ],
    
    relatedTags: ["Sigma Protocols", "zero-knowledge", "privacy", "ErgoScript", "ErgoMixer", "ring signatures"],
    
    faq: [
      {
        question: "What are Sigma protocols?",
        answer: "Sigma protocols are zero-knowledge proofs that let you prove you know a secret without revealing it. In Ergo, they're built into ErgoScript and can be combined to create complex conditions like multi-sig, ring signatures, and privacy features.",
      },
      {
        question: "How do Sigma protocols enable privacy?",
        answer: "Sigma protocols allow proving statements (like 'I can spend this') without revealing which specific key was used. ErgoMixer uses this to mix coins - proving ownership without linking inputs to outputs, breaking transaction traceability.",
      },
      {
        question: "Are Sigma protocols like zkSNARKs?",
        answer: "Both are zero-knowledge proofs, but Sigma protocols are simpler and don't require trusted setup. They're more limited in what they can prove but are efficient and well-suited for authentication and privacy in financial transactions.",
      },
    ],
    
    category: "privacy",
    difficulty: "intermediate",
    
    learnMoreUrl: "/use/privacy",
    docsUrl: "/docs/sigma-protocols",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "sigmanaut-programme",
    term: "Sigmanaut Programme",
    
    shortDefinition: "Ergo's community-driven initiative to decentralize governance and operations, transitioning responsibilities from the Ergo Foundation to community members (Sigmanauts).",
    
    definition: "The Sigmanaut Programme is Ergo's grassroots initiative to progressively decentralize the ecosystem by empowering community members to take on roles traditionally handled by the Ergo Foundation. Sigmanauts are active community contributors who help with marketing, development, education, community management, and ecosystem growth. The program embodies Ergo's philosophy of true decentralization - not just in technology but in governance and operations. Sigmanauts operate through various working groups and receive support from community funds.",
    
    keywords: ["sigmanaut programme", "sigmanauts", "community governance", "decentralization", "ergo community", "grassroots", "dao"],
    
    keyPoints: [
      "Community-driven decentralization initiative",
      "Transitions responsibilities from Foundation to community",
      "Sigmanauts contribute to marketing, dev, education",
      "Working groups for different focus areas",
      "Funded through community treasury proposals",
      "Embodies Ergo's grassroots philosophy",
    ],
    
    technicalDetails: "The Sigmanaut Programme operates through Discord-based coordination, with working groups for different initiatives (marketing, development, regional communities). Proposals for funding go through community governance processes. Sigmanauts use various tools for collaboration including GitHub, Figma, and community forums. The program aims to make Ergo Foundation increasingly unnecessary over time.",
    
    useCases: [
      "Contributing to Ergo ecosystem growth",
      "Participating in community governance",
      "Building regional Ergo communities",
      "Creating educational content and resources",
      "Representing Ergo at events and online",
    ],
    
    relatedTags: ["Sigmanaut Programme", "Sigmanauts", "community", "governance", "decentralization", "Ergo Foundation"],
    
    faq: [
      {
        question: "What is the Sigmanaut Programme?",
        answer: "The Sigmanaut Programme is Ergo's community initiative to decentralize ecosystem operations. Sigmanauts are active community members who contribute to marketing, development, education, and growth, progressively taking over responsibilities from the Ergo Foundation.",
      },
      {
        question: "How can I become a Sigmanaut?",
        answer: "Join the Ergo Discord and start contributing! Sigmanauts are community members who actively help the ecosystem through marketing, development, education, or community building. There's no formal application - participation and contribution are what matter.",
      },
      {
        question: "What do Sigmanauts do?",
        answer: "Sigmanauts contribute in many ways: creating content, managing social media, developing tools, organizing events, building regional communities, answering questions, and more. Working groups focus on specific areas like marketing, development, and regional outreach.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    learnMoreUrl: "/ecosystem/community",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "sigmanauts",
    term: "Sigmanauts",
    
    shortDefinition: "Members of the Ergo community who actively participate and contribute to the platform's growth and development.",
    
    definition: "Members of the Ergo community who actively participate and contribute to the platform's growth and development.",
    
    keywords: ["sigmanauts","ergo"],
    
    relatedTags: ["Sigmanauts","Ergo"],
    
    faq: [
      {
        question: "What is Sigmanauts?",
        answer: "Members of the Ergo community who actively participate and contribute to the platform's growth and development.",
      },
    ],
    
    category: "privacy",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "soft-fork",
    term: "Soft-Fork",
    
    shortDefinition: "A backward-compatible blockchain upgrade where old nodes can still validate new blocks, but may not understand all new features.",
    
    definition: "A soft fork is a type of blockchain upgrade that tightens or adds rules while remaining backward-compatible with older software. Unlike hard forks which require all nodes to upgrade, soft forks allow non-upgraded nodes to continue participating in the network - they can still validate blocks but may not understand new transaction types or features. Ergo has a sophisticated soft-fork mechanism that allows protocol improvements through miner voting without requiring contentious network splits. This enables smooth upgrades while maintaining network stability.",
    
    keywords: ["soft fork", "blockchain upgrade", "backward compatible", "protocol upgrade", "miner voting", "network upgrade", "consensus rules"],
    
    keyPoints: [
      "Backward-compatible: old nodes can still validate new blocks",
      "Tightens rules or adds new features within existing framework",
      "Less disruptive than hard forks - no network split",
      "Ergo uses miner voting for soft fork activation",
      "Requires majority miner support (typically 90%+)",
      "Enables gradual protocol improvements",
    ],
    
    technicalDetails: "Ergo's soft fork mechanism uses miner voting in block headers. When a protocol change is proposed, miners signal support by setting specific bits. Once threshold is reached (typically 90% over voting period), the change activates. Examples include changes to transaction validation rules, new script operations, or parameter adjustments. The eUTXO model facilitates soft forks since transaction validity is self-contained.",
    
    useCases: [
      "Adding new ErgoScript operations without breaking old contracts",
      "Adjusting protocol parameters (block size, fees)",
      "Enabling new privacy features or optimizations",
      "Fixing bugs or security issues without network split",
      "Gradual protocol evolution with community consensus",
    ],
    
    relatedTags: ["Soft Fork", "hard fork", "protocol upgrade", "miner voting", "consensus", "blockchain governance"],
    
    faq: [
      {
        question: "What is a soft fork?",
        answer: "A soft fork is a backward-compatible blockchain upgrade. Old nodes can still validate new blocks, but may not understand all new features. It's less disruptive than a hard fork since the network doesn't split.",
      },
      {
        question: "How does Ergo handle soft forks?",
        answer: "Ergo uses miner voting for soft fork activation. Miners signal support in block headers, and once a threshold (typically 90%) is reached over a voting period, the upgrade activates. This ensures community consensus without contentious splits.",
      },
      {
        question: "What's the difference between soft fork and hard fork?",
        answer: "A soft fork is backward-compatible - old nodes can still participate. A hard fork is not backward-compatible and requires all nodes to upgrade, potentially splitting the network if some refuse. Soft forks are generally preferred for smoother upgrades.",
      },
    ],
    
    category: "consensus",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "staking",
    term: "Staking",
    
    shortDefinition: "The act of holding and locking up cryptocurrency tokens in a wallet to support network operations and earn rewards.",
    
    definition: "The act of holding and locking up cryptocurrency tokens in a wallet to support network operations and earn rewards.",
    
    keywords: ["staking","wallet","tokens"],
    
    relatedTags: ["Staking","wallet","tokens"],
    
    faq: [
      {
        question: "What is Staking?",
        answer: "The act of holding and locking up cryptocurrency tokens in a wallet to support network operations and earn rewards.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "state-bloat-management",
    term: "State Bloat Management",
    
    shortDefinition: "Strategies to address the growth of blockchain state size (state bloat), which can impact scalability, including persistent updatable storage and a Storage Rent Fee to reduce network pollution.",
    
    definition: "Strategies to address the growth of blockchain state size (state bloat), which can impact scalability, including persistent updatable storage and a Storage Rent Fee to reduce network pollution.",
    
    keywords: ["state-bloat-management","state bloat management","blockchain"],
    
    relatedTags: ["State Bloat Management","blockchain"],
    
    faq: [
      {
        question: "What is State Bloat Management?",
        answer: "Strategies to address the growth of blockchain state size (state bloat), which can impact scalability, including persistent updatable storage and a Storage Rent Fee to reduce network pollution.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "submit-pr",
    term: "Submit a Pull Request",
    
    shortDefinition: "The process of proposing and sharing your documentation changes with the maintainers by creating a pull request on GitHub.",
    
    definition: "The process of proposing and sharing your documentation changes with the maintainers by creating a pull request on GitHub.",
    
    keywords: ["submit-pr","submit a pull request"],
    
    relatedTags: ["Submit a Pull Request"],
    
    faq: [
      {
        question: "What is Submit a Pull Request?",
        answer: "The process of proposing and sharing your documentation changes with the maintainers by creating a pull request on GitHub.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "technical-infrastructure",
    term: "Technical Infrastructure",
    
    shortDefinition: "The foundational technology stack supporting Ergo: nodes, APIs, explorers, indexers, SDKs, and tooling that enable the ecosystem to function.",
    
    definition: "Technical infrastructure refers to the foundational technology components that support the Ergo blockchain and ecosystem. This includes: node software (reference implementation in Scala), APIs (node REST API, explorer API), block explorers, transaction indexers, SDKs for various languages (JavaScript, Rust, Java), wallet libraries, and developer tooling. Robust infrastructure is essential for dApp development, wallet functionality, and ecosystem growth. The Ergo community maintains and improves this infrastructure through open-source contribution.",
    
    keywords: ["technical infrastructure", "nodes", "api", "explorer", "sdk", "tooling", "developer tools"],
    
    keyPoints: [
      "Foundational technology stack",
      "Nodes, APIs, explorers, indexers",
      "SDKs for multiple languages",
      "Developer tooling and libraries",
      "Open-source and community-maintained",
      "Essential for ecosystem functionality",
    ],
    
    technicalDetails: "Ergo's technical infrastructure includes: Ergo Node (Scala reference implementation), Explorer API and UI, Ergo AppKit (Java/Scala SDK), sigma-rust (Rust SDK), ergo-ts (TypeScript SDK), Fleet SDK (JavaScript), Nautilus connector, and various community tools. Infrastructure is hosted by the Ergo Foundation, community members, and third parties.",
    
    useCases: [
      "Running Ergo nodes",
      "Building dApps with SDKs",
      "Querying blockchain data",
      "Integrating Ergo into applications",
      "Developing wallets and tools",
    ],
    
    relatedTags: ["Technical Infrastructure", "nodes", "API", "SDK", "developer tools", "explorer"],
    
    faq: [
      {
        question: "What is Ergo's technical infrastructure?",
        answer: "The foundational technology supporting Ergo: node software, APIs, explorers, SDKs for various languages, wallet libraries, and developer tools. This enables dApps, wallets, and ecosystem services to function.",
      },
      {
        question: "What SDKs are available for Ergo?",
        answer: "Ergo has SDKs for multiple languages: AppKit (Java/Scala), sigma-rust (Rust), ergo-ts (TypeScript), Fleet SDK (JavaScript), and community libraries for Python and other languages.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    docsUrl: "https://github.com/ergoplatform",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "telegram",
    term: "Telegram",
    
    shortDefinition: "A messaging service where community members engage in discussions and collaborate on various aspects of Ergo and projects on Ergo",
    
    definition: "A messaging service where community members engage in discussions and collaborate on various aspects of Ergo and projects on Ergo",
    
    keywords: ["telegram","ergo"],
    
    relatedTags: ["Telegram","Ergo"],
    
    faq: [
      {
        question: "What is Telegram?",
        answer: "A messaging service where community members engage in discussions and collaborate on various aspects of Ergo and projects on Ergo",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "tokens",
    term: "Tokens",
    
    shortDefinition: "Digital assets that exist and function within the frameworks of an existing blockchain network rather than having their own separate blockchain.",
    
    definition: "Digital assets that exist and function within the frameworks of an existing blockchain network rather than having their own separate blockchain.",
    
    keywords: ["tokens","blockchain"],
    
    relatedTags: ["Tokens","tokens","blockchain"],
    
    faq: [
      {
        question: "What is Tokens?",
        answer: "Digital assets that exist and function within the frameworks of an existing blockchain network rather than having their own separate blockchain.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "tokenomics",
    term: "Tokenomics",
    
    shortDefinition: "The study of the economic aspects of cryptocurrency tokens, including their distribution, circulation, and usage.",
    
    definition: "The study of the economic aspects of cryptocurrency tokens, including their distribution, circulation, and usage.",
    
    keywords: ["tokenomics","tokens"],
    
    relatedTags: ["Tokenomics","tokens"],
    
    faq: [
      {
        question: "What is Tokenomics?",
        answer: "The study of the economic aspects of cryptocurrency tokens, including their distribution, circulation, and usage.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "tor",
    term: "Tor (The Onion Router)",
    
    shortDefinition: "A network that enables anonymous communication and web browsing by routing internet traffic through a series of servers and relays.",
    
    definition: "A network that enables anonymous communication and web browsing by routing internet traffic through a series of servers and relays.",
    
    keywords: ["tor","tor (the onion router)"],
    
    relatedTags: ["Tor (The Onion Router)"],
    
    faq: [
      {
        question: "What is Tor (The Onion Router)?",
        answer: "A network that enables anonymous communication and web browsing by routing internet traffic through a series of servers and relays.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "transaction",
    term: "Transaction",
    
    shortDefinition: "An exchange of data or value between participants on a blockchain network, typically involves the transfer of cryptocurrency.",
    
    definition: "An exchange of data or value between participants on a blockchain network, typically involves the transfer of cryptocurrency.",
    
    keywords: ["transaction","transactions","blockchain"],
    
    relatedTags: ["Transaction","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Transaction?",
        answer: "An exchange of data or value between participants on a blockchain network, typically involves the transfer of cryptocurrency.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "transaction-size",
    term: "Transaction Size",
    
    shortDefinition: "The size limit for transactions in the mempool, which miners can adjust to balance transaction processing capacity and the computational load on nodes.",
    
    definition: "The size limit for transactions in the mempool, which miners can adjust to balance transaction processing capacity and the computational load on nodes.",
    
    keywords: ["transaction-size","transaction size","transactions"],
    
    relatedTags: ["Transaction Size","transactions"],
    
    faq: [
      {
        question: "What is Transaction Size?",
        answer: "The size limit for transactions in the mempool, which miners can adjust to balance transaction processing capacity and the computational load on nodes.",
      },
    ],
    
    category: "mining",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "transparency-report",
    term: "Transparency Report",
    
    shortDefinition: "A document that provides a comprehensive overview of financial activities and expenditures, ensuring openness and accountability.",
    
    definition: "A document that provides a comprehensive overview of financial activities and expenditures, ensuring openness and accountability.",
    
    keywords: ["transparency-report","transparency report"],
    
    relatedTags: ["Transparency Report"],
    
    faq: [
      {
        question: "What is Transparency Report?",
        answer: "A document that provides a comprehensive overview of financial activities and expenditures, ensuring openness and accountability.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "treasury",
    term: "Treasury",
    
    shortDefinition: "The funds set aside by the Ergo Foundation to support the growth and development of the Ergo ecosystem.",
    
    definition: "The funds set aside by the Ergo Foundation to support the growth and development of the Ergo ecosystem.",
    
    keywords: ["treasury","ergo"],
    
    relatedTags: ["Treasury","Ergo"],
    
    faq: [
      {
        question: "What is Treasury?",
        answer: "The funds set aside by the Ergo Foundation to support the growth and development of the Ergo ecosystem.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "turing-complete",
    term: "Turing-Complete",
    
    shortDefinition: "A property of a computational system that can simulate a Turing machine, indicating that it can perform any computation that a Turing machine can, given enough resources.",
    
    definition: "A property of a computational system that can simulate a Turing machine, indicating that it can perform any computation that a Turing machine can, given enough resources.",
    
    keywords: ["turing-complete"],
    
    relatedTags: ["Turing-Complete"],
    
    faq: [
      {
        question: "What is Turing-Complete?",
        answer: "A property of a computational system that can simulate a Turing machine, indicating that it can perform any computation that a Turing machine can, given enough resources.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "tvl",
    term: "TVL (Total Value Locked)",
    
    shortDefinition: "A measure of the total funds (cryptocurrency) locked in a specific protocol or smart contract in the DeFi ecosystem.",
    
    definition: "A measure of the total funds (cryptocurrency) locked in a specific protocol or smart contract in the DeFi ecosystem.",
    
    keywords: ["tvl","tvl (total value locked)","smart contracts","defi"],
    
    relatedTags: ["TVL (Total Value Locked)","smart contracts","DeFi"],
    
    faq: [
      {
        question: "What is TVL (Total Value Locked)?",
        answer: "A measure of the total funds (cryptocurrency) locked in a specific protocol or smart contract in the DeFi ecosystem.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "two-categories-participation",
    term: "Two Categories of Participation",
    
    shortDefinition: "The Growth and Creative categories within the Sigmanauts Program, each catering to different strengths and skills of community members.",
    
    definition: "The Growth and Creative categories within the Sigmanauts Program, each catering to different strengths and skills of community members.",
    
    keywords: ["two-categories-participation","two categories of participation"],
    
    relatedTags: ["Two Categories of Participation"],
    
    faq: [
      {
        question: "What is Two Categories of Participation?",
        answer: "The Growth and Creative categories within the Sigmanauts Program, each catering to different strengths and skills of community members.",
      },
    ],
    
    category: "privacy",
    difficulty: "advanced",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "ui-fee",
    term: "UI Fee",
    
    shortDefinition: "Optional fees charged by frontend interfaces for DeFi protocols, rewarding developers who build user-friendly access to decentralized applications.",
    
    definition: "UI fees are optional charges that frontend interface providers can add when users interact with DeFi protocols through their interface. Since DeFi protocols are permissionless smart contracts, anyone can build a frontend to access them. UI fees incentivize developers to create and maintain quality user interfaces by allowing them to earn revenue from usage. On Ergo, protocols like Spectrum Finance may have UI fees that go to the team maintaining the interface, separate from the protocol fees that go to liquidity providers.",
    
    keywords: ["ui fee", "frontend fee", "interface fee", "defi", "dapp", "spectrum finance", "developer incentives"],
    
    keyPoints: [
      "Fees charged by frontend interfaces, not protocols",
      "Incentivizes quality UI development",
      "Separate from protocol/liquidity provider fees",
      "Usually optional - can use different frontends",
      "Supports sustainable dApp development",
      "Common in DeFi ecosystem",
    ],
    
    technicalDetails: "UI fees are typically added to transactions by the frontend before submission. They're separate from miner fees and protocol fees. Users can often avoid UI fees by using alternative frontends or interacting directly with smart contracts, though this requires technical knowledge. The fee structure is usually transparent and disclosed in the interface.",
    
    useCases: [
      "Understanding DeFi fee structures",
      "Evaluating total transaction costs",
      "Supporting dApp development sustainably",
      "Comparing different frontend options",
    ],
    
    relatedTags: ["UI Fee", "DeFi", "frontend", "fees", "dApp", "Spectrum Finance"],
    
    faq: [
      {
        question: "What is a UI fee?",
        answer: "A UI fee is charged by the frontend interface you use to access a DeFi protocol, not by the protocol itself. It rewards developers who build and maintain user-friendly interfaces for decentralized applications.",
      },
      {
        question: "Can I avoid UI fees?",
        answer: "Often yes - since protocols are permissionless, you can use alternative frontends or interact directly with smart contracts. However, this requires technical knowledge, and UI fees support the developers making DeFi accessible.",
      },
      {
        question: "Are UI fees the same as gas fees?",
        answer: "No, UI fees go to interface developers, while gas/miner fees go to miners for processing transactions. Protocol fees may also exist, going to liquidity providers or protocol treasuries. These are all separate.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "utxo-model",
    term: "UTXO (Unspent Transaction Output) Model",
    
    shortDefinition: "A foundational concept in blockchain technology where transactions create outputs, which can later be used as inputs in new transactions.",
    
    definition: "A foundational concept in blockchain technology where transactions create outputs, which can later be used as inputs in new transactions. UTXOs represent ownership of cryptocurrency and are spent entirely in each transaction.",
    
    keywords: ["utxo-model","utxo (unspent transaction output) model","transactions","blockchain"],
    
    relatedTags: ["UTXO (Unspent Transaction Output) Model","transactions","blockchain"],
    
    faq: [
      {
        question: "What is UTXO (Unspent Transaction Output) Model?",
        answer: "A foundational concept in blockchain technology where transactions create outputs, which can later be used as inputs in new transactions.",
      },
    ],
    
    category: "smart-contracts",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "validator",
    term: "Validator",
    
    shortDefinition: "A participant in a blockchain network responsible for validating transactions and maintaining the integrity of the network.",
    
    definition: "A participant in a blockchain network responsible for validating transactions and maintaining the integrity of the network.",
    
    keywords: ["validator","transactions","blockchain"],
    
    relatedTags: ["Validator","transactions","blockchain"],
    
    faq: [
      {
        question: "What is Validator?",
        answer: "A participant in a blockchain network responsible for validating transactions and maintaining the integrity of the network.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "vc",
    term: "Venture Capitalist (VC)",
    
    shortDefinition: "An investor or firm that provides capital to startups and small businesses, usually in exchange for an allocation of the project's tokens at a significantly lower price.",
    
    definition: "An investor or firm that provides capital to startups and small businesses, usually in exchange for an allocation of the project's tokens at a significantly lower price.",
    
    keywords: ["vc","venture capitalist (vc)","tokens"],
    
    relatedTags: ["Venture Capitalist (VC)","tokens"],
    
    faq: [
      {
        question: "What is Venture Capitalist (VC)?",
        answer: "An investor or firm that provides capital to startups and small businesses, usually in exchange for an allocation of the project's tokens at a significantly lower price.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "velvet-fork",
    term: "Velvet Fork",
    
    shortDefinition: "A blockchain upgrade mechanism that introduces new features without requiring all nodes to upgrade, maintaining backward compatibility while enabling new functionality.",
    
    definition: "A blockchain upgrade mechanism that introduces new features without requiring all nodes to upgrade, maintaining backward compatibility while enabling new functionality.",
    
    keywords: ["velvet-fork","velvet fork","blockchain"],
    
    relatedTags: ["Velvet Fork","blockchain"],
    
    faq: [
      {
        question: "What is Velvet Fork?",
        answer: "A blockchain upgrade mechanism that introduces new features without requiring all nodes to upgrade, maintaining backward compatibility while enabling new functionality.",
      },
    ],
    
    category: "consensus",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "vpn",
    term: "VPN (Virtual Private Network)",
    
    shortDefinition: "A service that masks your IP address and encrypts internet connections to enhance online privacy and security.",
    
    definition: "A service that masks your IP address and encrypts internet connections to enhance online privacy and security.",
    
    keywords: ["vpn","vpn (virtual private network)","privacy","security"],
    
    relatedTags: ["VPN (Virtual Private Network)","privacy","security"],
    
    faq: [
      {
        question: "What is VPN (Virtual Private Network)?",
        answer: "A service that masks your IP address and encrypts internet connections to enhance online privacy and security.",
      },
    ],
    
    category: "privacy",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "weak-blocks",
    term: "Weak Blocks",
    
    shortDefinition: "Block candidates with lower proof-of-work difficulty that serve as temporary placeholders, enabling faster transaction confirmations and optimizing network bandwidth, improving scalability.",
    
    definition: "Block candidates with lower proof-of-work difficulty that serve as temporary placeholders, enabling faster transaction confirmations and optimizing network bandwidth, improving scalability.",
    
    keywords: ["weak-blocks","weak blocks","transactions"],
    
    relatedTags: ["Weak Blocks","transactions"],
    
    faq: [
      {
        question: "What is Weak Blocks?",
        answer: "Block candidates with lower proof-of-work difficulty that serve as temporary placeholders, enabling faster transaction confirmations and optimizing network bandwidth, improving scalability.",
      },
    ],
    
    category: "scalability",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "web3",
    term: "Web3",
    
    shortDefinition: "The next generation of the internet, aiming to create a more decentralized and user-centric web experience using blockchain technology.",
    
    definition: "The next generation of the internet, aiming to create a more decentralized and user-centric web experience using blockchain technology.",
    
    keywords: ["web3","blockchain"],
    
    relatedTags: ["Web3","blockchain"],
    
    faq: [
      {
        question: "What is Web3?",
        answer: "The next generation of the internet, aiming to create a more decentralized and user-centric web experience using blockchain technology.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "white-paper",
    term: "White paper",
    
    shortDefinition: "A document that explains the concept, technology, and implementation details of a cryptocurrency or blockchain project.",
    
    definition: "A document that explains the concept, technology, and implementation details of a cryptocurrency or blockchain project.",
    
    keywords: ["white-paper","white paper","blockchain"],
    
    relatedTags: ["White paper","blockchain"],
    
    faq: [
      {
        question: "What is White paper?",
        answer: "A document that explains the concept, technology, and implementation details of a cryptocurrency or blockchain project.",
      },
    ],
    
    category: "general",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "yield",
    term: "Yield",
    
    shortDefinition: "Returns earned on cryptocurrency holdings through activities like liquidity provision, lending, or other DeFi strategies - expressed as APY (Annual Percentage Yield).",
    
    definition: "Yield in cryptocurrency refers to the returns earned on holdings through various DeFi activities. Unlike traditional savings accounts, crypto yield comes from providing liquidity to DEXs (earning trading fees), lending assets (earning interest), or participating in other protocol incentives. On Ergo, yield opportunities exist through Spectrum Finance liquidity pools, SigmaFi lending, and other DeFi protocols. Yields are typically expressed as APY (Annual Percentage Yield) and can range from a few percent to much higher for riskier strategies.",
    
    keywords: ["yield", "apy", "defi yield", "liquidity mining", "yield farming", "passive income", "spectrum finance", "sigmafi"],
    
    keyPoints: [
      "Returns earned on crypto holdings through DeFi",
      "Expressed as APY (Annual Percentage Yield)",
      "Sources: liquidity provision, lending, protocol rewards",
      "Ergo yield: Spectrum Finance pools, SigmaFi lending",
      "Higher yields often mean higher risks",
      "Not the same as staking (Ergo is Proof of Work)",
    ],
    
    technicalDetails: "Yield on Ergo primarily comes from: 1) Liquidity provision on Spectrum Finance - earning ~0.3% of trading fees proportional to pool share. 2) Lending on SigmaFi - earning interest from borrowers. 3) Protocol incentives - some projects distribute tokens to participants. APY calculations assume compounding; APR does not. Real yields fluctuate based on trading volume, utilization rates, and token prices.",
    
    useCases: [
      "Earning passive income on ERG holdings",
      "Providing liquidity on Spectrum Finance",
      "Lending assets on SigmaFi",
      "Comparing DeFi opportunities",
      "Understanding risk/reward tradeoffs",
    ],
    
    relatedTags: ["Yield", "APY", "DeFi", "liquidity provision", "Spectrum Finance", "SigmaFi", "passive income"],
    
    faq: [
      {
        question: "What is yield in crypto?",
        answer: "Yield is the return earned on cryptocurrency holdings through DeFi activities like providing liquidity (earning trading fees), lending (earning interest), or protocol incentives. It's expressed as APY (Annual Percentage Yield).",
      },
      {
        question: "How can I earn yield on Ergo?",
        answer: "On Ergo, you can earn yield by: 1) Providing liquidity on Spectrum Finance DEX and earning trading fees. 2) Lending assets on SigmaFi and earning interest. 3) Participating in various protocol incentive programs.",
      },
      {
        question: "Is yield farming safe?",
        answer: "Yield farming carries risks including smart contract bugs, impermanent loss (for liquidity provision), and market volatility. Higher yields often indicate higher risks. Always research protocols, start with small amounts, and understand the risks before committing funds.",
      },
    ],
    
    category: "economics",
    difficulty: "beginner",
    
    learnMoreUrl: "/use/defi",
    
    publishDate: "2024-01-01",
    updatedDate: "2025-01-15",
  },

  {
    slug: "yield-farming",
    term: "Yield Farming",
    
    shortDefinition: "A process in which cryptocurrency holders provide liquidity to DeFi protocols and receive rewards in return.",
    
    definition: "A process in which cryptocurrency holders provide liquidity to DeFi protocols and receive rewards in return.",
    
    keywords: ["yield-farming","yield farming","defi"],
    
    relatedTags: ["Yield Farming","DeFi"],
    
    faq: [
      {
        question: "What is Yield Farming?",
        answer: "A process in which cryptocurrency holders provide liquidity to DeFi protocols and receive rewards in return.",
      },
    ],
    
    category: "general",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "zero-knowledge-proofs",
    term: "Zero-Knowledge Proofs",
    
    shortDefinition: "Cryptographic methods that allow one party to prove the truth of a statement to another party without revealing any additional information.",
    
    definition: "Cryptographic methods that allow one party to prove the truth of a statement to another party without revealing any additional information. Ergo uses zero-knowledge proofs for privacy and security.",
    
    keywords: ["zero-knowledge-proofs","zero-knowledge proofs","ergo","privacy","security"],
    
    relatedTags: ["Zero-Knowledge Proofs","Ergo","privacy","security"],
    
    faq: [
      {
        question: "What is Zero-Knowledge Proofs?",
        answer: "Cryptographic methods that allow one party to prove the truth of a statement to another party without revealing any additional information.",
      },
    ],
    
    category: "privacy",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "zk-snark",
    term: "zk-SNARK",
    
    shortDefinition: "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge - a cryptographic proof system that allows one party to prove they know a secret without revealing the secret itself.",
    
    definition: "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge - a cryptographic proof system that allows one party to prove they know a secret without revealing the secret itself.",
    
    keywords: ["zk-snark"],
    
    relatedTags: ["zk-SNARK"],
    
    faq: [
      {
        question: "What is zk-SNARK?",
        answer: "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge - a cryptographic proof system that allows one party to prove they know a secret without revealing the secret itself.",
      },
    ],
    
    category: "privacy",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "zk-stark",
    term: "zk-STARK",
    
    shortDefinition: "Zero-Knowledge Scalable Transparent Argument of Knowledge - a cryptographic proof system that provides transparency and quantum resistance without requiring a trusted setup.",
    
    definition: "Zero-Knowledge Scalable Transparent Argument of Knowledge - a cryptographic proof system that provides transparency and quantum resistance without requiring a trusted setup.",
    
    keywords: ["zk-stark"],
    
    relatedTags: ["zk-STARK"],
    
    faq: [
      {
        question: "What is zk-STARK?",
        answer: "Zero-Knowledge Scalable Transparent Argument of Knowledge - a cryptographic proof system that provides transparency and quantum resistance without requiring a trusted setup.",
      },
    ],
    
    category: "privacy",
    difficulty: "intermediate",
    
    publishDate: "2024-01-01",
  },

  {
    slug: "zk-rollup",
    term: "ZK-rollup",
    
    shortDefinition: "A layer 2 scaling solution that aggregates multiple transactions into a single proof, enabling faster and more scalable blockchain transactions while maintaining security and decentralization.",
    
    definition: "A layer 2 scaling solution that aggregates multiple transactions into a single proof, enabling faster and more scalable blockchain transactions while maintaining security and decentralization.",
    
    keywords: ["zk-rollup","transactions","blockchain","security"],
    
    relatedTags: ["ZK-rollup","transactions","blockchain","security"],
    
    faq: [
      {
        question: "What is ZK-rollup?",
        answer: "A layer 2 scaling solution that aggregates multiple transactions into a single proof, enabling faster and more scalable blockchain transactions while maintaining security and decentralization.",
      },
    ],
    
    category: "scalability",
    difficulty: "beginner",
    
    publishDate: "2024-01-01",
  }

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

