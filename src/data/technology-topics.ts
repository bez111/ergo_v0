/**
 * Technology Topics Data
 * 
 * Centralized data source for all /technology pages.
 * Used for:
 * - Hub page (/technology) cards and ItemList schema
 * - Related content sections on individual pages
 * - Internal linking across the site
 * - Search indexing
 */

import {
  Layers,
  Code,
  Cpu,
  Database,
  Lock,
  Infinity as InfinityIcon,
  Rocket,
  Box,
  Eye,
  Settings,
  CircleDollarSign,
  ArrowRightLeft,
  Shield,
  Zap,
  Users,
  RefreshCw,
  Timer,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Globe,
  Coins,
  BarChart3,
  TrendingUp,
  LinkIcon,
  type LucideIcon,
} from "lucide-react"

export type TechnologyCategory = 
  | "core"           // Core protocol features
  | "scaling"        // Scalability solutions
  | "privacy"        // Privacy features
  | "economics"      // Tokenomics & economics
  | "interop"        // Interoperability

export type TechnologyStatus = 
  | "live"           // Fully operational
  | "research"       // In research/development

export interface TechnologyDetail {
  icon: LucideIcon
  title: string
  description: string
}

export interface TechnologyTopic {
  // Core identifiers
  slug: string
  title: string
  shortTitle?: string  // For compact displays
  
  // Descriptions
  description: string
  shortDescription?: string  // For cards
  
  // Metadata
  category: TechnologyCategory
  status: TechnologyStatus
  icon: LucideIcon
  
  // Content
  details: TechnologyDetail[]
  
  // SEO
  keywords: string[]
  
  // Relations
  relatedTopics: string[]      // slugs of related technology topics
  relatedPatterns?: string[]   // slugs of related dev patterns
  relatedPlaybooks?: string[]  // slugs of related playbooks
  relatedGlossary?: string[]   // slugs of related glossary terms
  
  // External resources
  docsUrl?: string
  githubUrl?: string
  whitepaperSection?: string
}

export const technologyTopics: TechnologyTopic[] = [
  {
    slug: "eutxo-model",
    title: "Extended UTXO Model",
    shortTitle: "eUTXO",
    description: "Smart contracts with parallel execution, composability, and enhanced security through the Extended UTXO model",
    shortDescription: "Parallel smart contracts with enhanced security",
    category: "core",
    status: "live",
    icon: Layers,
    details: [
      { icon: Layers, title: "Parallel Execution", description: "Process multiple transactions simultaneously without state conflicts" },
      { icon: LinkIcon, title: "Native Composability", description: "Build complex DeFi from simple, reusable contract pieces" },
      { icon: Shield, title: "MEV Resistance", description: "Deterministic transactions prevent front-running attacks" },
    ],
    keywords: ["eutxo", "eUTXO", "utxo", "smart contracts", "parallel execution", "composability", "mev resistance", "ethereum comparison", "technical"],
    relatedTopics: ["ergoscript", "native-tokens"],
    relatedPatterns: ["ergo-fungible-token-minting-eip4", "ergo-nft-minting-guide"],
    relatedGlossary: ["eutxo", "utxo", "box"],
    docsUrl: "/docs/protocol/eutxo",
    githubUrl: "https://github.com/ergoplatform/ergo",
  },
  {
    slug: "ergoscript",
    title: "ErgoScript",
    description: "Powerful yet safe smart contract language with formal verification and built-in cryptographic primitives",
    shortDescription: "Safe smart contracts with formal verification",
    category: "core",
    status: "live",
    icon: Code,
    details: [
      { icon: ShieldCheck, title: "Formal Verification", description: "Mathematically provable contract correctness" },
      { icon: Lock, title: "Built-in Privacy", description: "Native Sigma protocols for zero-knowledge proofs" },
      { icon: Code, title: "Type Safety", description: "Strong typing prevents common vulnerabilities" },
    ],
    keywords: ["ergoscript", "ErgoScript", "smart contracts", "formal verification", "sigma protocols", "type safety", "ergo developers", "functional programming"],
    relatedTopics: ["eutxo-model", "privacy-features"],
    relatedPatterns: ["ergo-fungible-token-minting-eip4"],
    relatedGlossary: ["ergoscript", "sigma-protocols", "smart-contract"],
    docsUrl: "/docs/developers/ergoscript",
    githubUrl: "https://github.com/ergoplatform/ergo",
  },
  {
    slug: "secure-pow",
    title: "Autolykos Proof-of-Work",
    shortTitle: "Autolykos PoW",
    description: "Memory-hard, ASIC-resistant mining algorithm that promotes decentralization and energy efficiency",
    shortDescription: "ASIC-resistant GPU mining for decentralization",
    category: "core",
    status: "live",
    icon: Cpu,
    details: [
      { icon: Zap, title: "Energy Efficient", description: "Optimized for consumer GPUs with lower power consumption" },
      { icon: Users, title: "Solo Mining Friendly", description: "Algorithm design reduces pool centralization pressure" },
      { icon: Shield, title: "ASIC Resistant", description: "Memory-hard design keeps mining accessible to everyone" },
    ],
    keywords: ["autolykos", "Autolykos", "proof of work", "Proof-of-Work", "pow", "mining", "asic resistant", "ASIC resistance", "gpu mining", "GPU mining Ergo", "sustainable pow", "decentralization"],
    relatedTopics: ["storage-rent", "adaptive-emission"],
    relatedGlossary: ["autolykos", "proof-of-work", "mining"],
    docsUrl: "/docs/mining",
    githubUrl: "https://github.com/ergoplatform/ergo",
    whitepaperSection: "autolykos",
  },
  {
    slug: "storage-rent",
    title: "Storage Rent",
    description: "Sustainable blockchain economics through state recycling - dormant coins pay small fees to keep the network secure",
    shortDescription: "Long-term sustainability through state recycling",
    category: "economics",
    status: "live",
    icon: Database,
    details: [
      { icon: RefreshCw, title: "State Sustainability", description: "Prevents unlimited blockchain growth and state bloat" },
      { icon: Timer, title: "Miner Revenue", description: "Ensures mining rewards continue after emission ends" },
      { icon: Box, title: "Lost Coin Recovery", description: "Recirculates dormant coins back into the economy" },
    ],
    keywords: ["storage rent", "Storage Rent", "sustainability", "state bloat", "State Bloat", "miner revenue", "tokenomics", "demurrage", "Demurrage", "scalability", "decentralization"],
    relatedTopics: ["secure-pow", "adaptive-emission"],
    relatedGlossary: ["storage-rent", "state-bloat"],
    docsUrl: "/docs/protocol/storage-rent",
  },
  {
    slug: "privacy-features",
    title: "Sigma Protocols",
    shortTitle: "Privacy",
    description: "Native zero-knowledge proofs, ring signatures, and advanced privacy features without external dependencies",
    shortDescription: "Optional privacy with zero-knowledge proofs",
    category: "privacy",
    status: "live",
    icon: Lock,
    details: [
      { icon: Eye, title: "Optional Privacy", description: "Choose when and how much privacy you need" },
      { icon: ShieldCheck, title: "Zero-Knowledge Proofs", description: "Prove statements without revealing underlying data" },
      { icon: Sparkles, title: "Ring Signatures", description: "Hide transaction origins among multiple signers" },
    ],
    keywords: ["sigma protocols", "Sigma Protocols", "privacy", "Privacy", "zero knowledge proofs", "Zero Knowledge", "zkp", "ring signatures", "ergomixer", "cryptography", "defi privacy", "DeFi Privacy", "privacy tutorial"],
    relatedTopics: ["ergoscript", "eutxo-model"],
    relatedPlaybooks: ["privacy-first-setup"],
    relatedGlossary: ["sigma-protocols", "zero-knowledge-proof", "ring-signature"],
    docsUrl: "/docs/protocol/sigma-protocols",
  },
  {
    slug: "nipopows",
    title: "NIPoPoWs",
    description: "Non-Interactive Proofs of Proof-of-Work enable instant mobile sync and trustless cross-chain bridges",
    shortDescription: "Light clients and trustless bridges",
    category: "interop",
    status: "live",
    icon: InfinityIcon,
    details: [
      { icon: Smartphone, title: "Instant Mobile Sync", description: "Verify blockchain in seconds, not hours" },
      { icon: LinkIcon, title: "Trustless Bridges", description: "Cross-chain communication without trusted intermediaries" },
      { icon: ShieldCheck, title: "Cryptographic Security", description: "Mathematical proofs, not trust assumptions" },
    ],
    keywords: ["nipopows", "NiPoPoW", "NiPoPoWs", "light clients", "Light Clients", "mobile wallet", "cross chain", "Cross-Chain Bridges", "bridges", "sidechains", "blockchain scalability", "trustless bridges", "superblocks", "succinct proofs"],
    relatedTopics: ["velvet-forks", "subblocks"],
    relatedGlossary: ["nipopows", "light-client", "sidechain"],
    docsUrl: "/docs/protocol/nipopows",
  },
  {
    slug: "subblocks",
    title: "Subblocks",
    description: "Layer-1 scaling solution achieving sub-second transaction confirmations while maintaining full security",
    shortDescription: "Sub-second confirmations on Layer 1",
    category: "scaling",
    status: "research",
    icon: Rocket,
    details: [
      { icon: Timer, title: "Sub-Second Confirmations", description: "Near-instant transaction feedback for better UX" },
      { icon: Lock, title: "Layer-1 Security", description: "No trusted sequencers or additional trust assumptions" },
      { icon: Globe, title: "Seamless Integration", description: "Works with existing contracts and infrastructure" },
    ],
    keywords: ["subblocks", "scaling", "fast confirmations", "layer 1", "throughput"],
    relatedTopics: ["nipopows", "eutxo-model"],
    relatedGlossary: ["subblocks", "transaction-confirmation"],
    docsUrl: "/docs/protocol/subblocks",
  },
  {
    slug: "native-tokens",
    title: "Native Tokens & NFTs",
    shortTitle: "Native Tokens",
    description: "First-class token support at the protocol level - create tokens and NFTs in a single transaction without smart contracts",
    shortDescription: "One-click token and NFT creation",
    category: "core",
    status: "live",
    icon: Box,
    details: [
      { icon: Coins, title: "One-Click Creation", description: "Issue tokens in a single transaction, no contract needed" },
      { icon: Layers, title: "DeFi Ready", description: "Instantly compatible with all Ergo DeFi protocols" },
      { icon: Zap, title: "True Native Assets", description: "Protocol-level support, not smart contract workarounds" },
    ],
    keywords: ["native tokens", "nft", "eip4", "token creation", "digital assets"],
    relatedTopics: ["eutxo-model", "ergoscript"],
    relatedPatterns: ["ergo-fungible-token-minting-eip4", "ergo-nft-minting-guide"],
    relatedGlossary: ["native-token", "nft", "eip4"],
    docsUrl: "/docs/protocol/tokens",
  },
  {
    slug: "oracle-pools",
    title: "Oracle Pools",
    description: "Decentralized data feeds built into the protocol - reliable price data without centralized operators",
    shortDescription: "Decentralized on-chain data feeds",
    category: "core",
    status: "live",
    icon: Eye,
    details: [
      { icon: BarChart3, title: "Reliable Price Feeds", description: "Aggregated data from multiple independent sources" },
      { icon: Layers, title: "Protocol Native", description: "Built into Ergo, not a third-party add-on" },
      { icon: ShieldCheck, title: "Fully Decentralized", description: "No single point of failure or manipulation" },
    ],
    keywords: ["oracle pools", "Oracle Pools", "oracles", "Decentralized Oracles", "price feeds", "data feeds", "defi infrastructure", "On-Chain Aggregation", "Permissionless Oracles", "eUTXO Oracles", "DeFi Oracles", "oracle security"],
    relatedTopics: ["ergoscript", "eutxo-model"],
    relatedGlossary: ["oracle", "oracle-pool"],
    docsUrl: "/docs/protocol/oracle-pools",
    githubUrl: "https://github.com/ergoplatform/oracle-core",
  },
  {
    slug: "velvet-forks",
    title: "Velvet Forks",
    description: "Upgrade the protocol without hard forks - add new features while maintaining backward compatibility",
    shortDescription: "Seamless protocol upgrades",
    category: "interop",
    status: "live",
    icon: Settings,
    details: [
      { icon: RefreshCw, title: "Backward Compatible", description: "Old nodes continue working during upgrades" },
      { icon: TrendingUp, title: "Future Proof", description: "Add new consensus rules without disruption" },
      { icon: Timer, title: "Gradual Adoption", description: "Network upgrades happen organically over time" },
    ],
    keywords: ["velvet forks", "soft forks", "protocol upgrades", "backward compatibility"],
    relatedTopics: ["nipopows", "subblocks"],
    relatedGlossary: ["velvet-fork", "soft-fork", "hard-fork"],
    docsUrl: "/docs/protocol/velvet-forks",
  },
  {
    slug: "adaptive-emission",
    title: "Adaptive Emission",
    description: "Dynamic monetary policy that can be adjusted through community governance for long-term economic stability",
    shortDescription: "Community-governed monetary policy",
    category: "economics",
    status: "live",
    icon: CircleDollarSign,
    details: [
      { icon: CircleDollarSign, title: "Parameter Tuning", description: "Adjust emission and economic parameters over time" },
      { icon: TrendingUp, title: "Economic Flexibility", description: "Respond to changing market conditions" },
      { icon: Users, title: "Community Input", description: "Governance-driven monetary policy decisions" },
    ],
    keywords: ["adaptive emission", "tokenomics", "monetary policy", "governance", "emission schedule"],
    relatedTopics: ["storage-rent", "secure-pow"],
    relatedGlossary: ["emission", "tokenomics"],
    docsUrl: "/docs/protocol/emission",
  },
  {
    slug: "babel-fees",
    title: "Babel Fees",
    description: "Pay transaction fees with any token instead of ERG through automated intermediaries",
    shortDescription: "Pay fees with any token",
    category: "core",
    status: "live",
    icon: ArrowRightLeft,
    details: [
      { icon: Coins, title: "Token Flexibility", description: "Use any token to pay transaction fees" },
      { icon: Users, title: "Automated Exchange", description: "Intermediaries handle ERG conversion automatically" },
      { icon: Zap, title: "Seamless UX", description: "No need to hold ERG for transactions" },
    ],
    keywords: ["babel fees", "Babel Fees", "transaction fees", "ux", "token payments", "gas abstraction", "Gas Abstraction", "DeFi UX", "on-chain markets"],
    relatedTopics: ["native-tokens", "eutxo-model"],
    relatedGlossary: ["babel-fees", "transaction-fee"],
    docsUrl: "/docs/protocol/babel-fees",
  },
]

// Helper functions

export function getTechnologyBySlug(slug: string): TechnologyTopic | undefined {
  return technologyTopics.find(t => t.slug === slug)
}

export function getTechnologyByCategory(category: TechnologyCategory): TechnologyTopic[] {
  return technologyTopics.filter(t => t.category === category)
}

export function getRelatedTechnologies(slug: string): TechnologyTopic[] {
  const topic = getTechnologyBySlug(slug)
  if (!topic) return []
  return topic.relatedTopics
    .map(s => getTechnologyBySlug(s))
    .filter((t): t is TechnologyTopic => t !== undefined)
}

export function getLiveTechnologies(): TechnologyTopic[] {
  return technologyTopics.filter(t => t.status === "live")
}

export function getResearchTechnologies(): TechnologyTopic[] {
  return technologyTopics.filter(t => t.status === "research")
}

// Category labels for UI
export const categoryLabels: Record<TechnologyCategory, string> = {
  core: "Core Protocol",
  scaling: "Scalability",
  privacy: "Privacy",
  economics: "Economics",
  interop: "Interoperability",
}

// Category colors for UI
export const categoryColors: Record<TechnologyCategory, string> = {
  core: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  scaling: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  privacy: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  economics: "bg-green-500/20 text-green-400 border-green-500/30",
  interop: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
}

