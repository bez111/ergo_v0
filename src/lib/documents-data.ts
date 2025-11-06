// All PDF documents available on the site
export interface Document {
  title: string
  description: string
  filename: string
  category: 'whitepaper' | 'research' | 'technical' | 'guide'
  author?: string
  year?: number
  pages?: number
  size?: string
  tags?: string[]
}

export const documents: Document[] = [
  {
    title: "Ergo: A Resilient Platform For Contractual Money",
    description: "The foundational whitepaper describing Ergo's architecture, eUTXO model, and key innovations.",
    filename: "Ergo- A Resilient Platform For Contractual Money.pdf",
    category: "whitepaper",
    author: "Alexander Chepurnoy, Dmitry Meshkov",
    year: 2019,
    tags: ["eUTXO", "ErgoScript", "Sigma protocols", "Storage rent"]
  },
  {
    title: "ErgoScript: A Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs",
    description: "Technical paper on ErgoScript language design and Sigma protocol integration.",
    filename: "ErgoScript, a Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs.pdf",
    category: "research",
    author: "Alexander Chepurnoy, Dmitry Meshkov",
    year: 2020,
    tags: ["ErgoScript", "Zero-knowledge proofs", "Sigma protocols"]
  },
  {
    title: "Advanced ErgoScript Tutorial",
    description: "Comprehensive guide to advanced ErgoScript programming patterns and best practices.",
    filename: "Advanced ErgoScript Tutorial.pdf",
    category: "guide",
    tags: ["ErgoScript", "Tutorial", "Smart contracts", "Programming"]
  },
  {
    title: "Multi-Stage Contracts in the UTXO Model",
    description: "Research on implementing complex multi-stage contracts using the UTXO model.",
    filename: "Multi-Stage Contracts in the UTXO Model.pdf",
    category: "research",
    tags: ["UTXO", "Smart contracts", "Multi-stage protocols"]
  },
  {
    title: "Improving Authenticated Dynamic Dictionaries",
    description: "Technical paper on authenticated data structures and their applications in blockchain.",
    filename: "Improving Authenticated Dynamic Dictionaries.pdf",
    category: "research",
    tags: ["Data structures", "Authentication", "Cryptography"]
  },
  {
    title: "Zerojoin: Combining Zerocoin and CoinJoin",
    description: "Research on privacy-preserving transaction mixing protocols.",
    filename: "Zerojoin- Combining Zerocoin and CoinJoin.pdf",
    category: "research",
    tags: ["Privacy", "Mixing", "Zero-knowledge proofs"]
  },
  {
    title: "Know Your Assumptions",
    description: "Analysis of assumptions in cryptocurrency and blockchain systems.",
    filename: "Know Your Assumptions .pdf",
    category: "research",
    tags: ["Security", "Assumptions", "Analysis"]
  },
  {
    title: "Dexy: A Stablecoin Based On Algorithmic Central Bank",
    description: "Design and implementation of algorithmic stablecoin mechanisms.",
    filename: "Dexy - A Stablecoin Based On Algorithmic Central Bank.pdf",
    category: "research",
    tags: ["Stablecoin", "DeFi", "Algorithmic"]
  },
  {
    title: "Revisiting Difficulty Control for Blockchain Systems",
    description: "Research on difficulty adjustment algorithms and their optimization.",
    filename: "Revisiting Difficulty Control for Blockchain Systems.pdf",
    category: "research",
    tags: ["Mining", "Difficulty", "Consensus"]
  },
  {
    title: "The Ergo Platform Project Overview",
    description: "High-level overview of the Ergo platform and its ecosystem.",
    filename: "The Ergo Platform Project Overview.pdf",
    category: "whitepaper",
    tags: ["Overview", "Platform", "Ecosystem"]
  },
  {
    title: "Succinct, Non-Interactive Share Proofs",
    description: "Cryptographic research on efficient proof systems.",
    filename: "Succinct, Non-Interactive Share Proofs.pdf",
    category: "research",
    tags: ["Cryptography", "Proofs", "Zero-knowledge"]
  },
  {
    title: "Multi-mode Cryptocurrency Systems",
    description: "Research on cryptocurrency systems with multiple operational modes.",
    filename: "Multi-mode Cryptocurrency Systems.pdf",
    category: "research",
    tags: ["Cryptocurrency", "Systems", "Architecture"]
  },
  {
    title: "EDRAX: A Cryptocurrency with Stateless Transaction Validation",
    description: "Research on stateless transaction validation mechanisms.",
    filename: "EDRAX- A Cryptocurrency with Stateless Transaction Validation.pdf",
    category: "research",
    tags: ["Stateless", "Validation", "Transactions"]
  },
  {
    title: "Ergo Hackathon: Crowdfunded Smart Contract Pools Research",
    description: "Research and conceptualization of crowdfunded smart contract pools.",
    filename: "Ergo Hackathon- Crowdfunded Smart Contract Pools Research and Conceptualization.pdf",
    category: "research",
    tags: ["Hackathon", "Smart contracts", "Crowdfunding"]
  },
  {
    title: "Soft Power: Upgrading Chain Macroeconomic Policy Through Soft Forks",
    description: "Research on blockchain governance and economic policy upgrades.",
    filename: "Soft Power- Upgrading Chain Macroeconomic Policy Through Soft Forks.pdf",
    category: "research",
    tags: ["Governance", "Economics", "Soft forks"]
  },
  {
    title: "Bypassing Non-Outsourceable Proof-of-Work Schemes",
    description: "Research on proof-of-work schemes and mining centralization.",
    filename: "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts.pdf",
    category: "research",
    tags: ["Proof-of-work", "Mining", "Decentralization"]
  },
  {
    title: "Chaincash",
    description: "Research on chain-based cash systems and their properties.",
    filename: "Сhaincash.pdf",
    category: "research",
    tags: ["Cash systems", "Blockchain"]
  },
  {
    title: "Self-Reproducing Coins as Universal Turing Machine",
    description: "Theoretical research on computational completeness in cryptocurrency systems.",
    filename: "Self-Reproducing Coins as Universal Turing Machine.pdf",
    category: "research",
    tags: ["Theory", "Turing completeness", "Computation"]
  },
  {
    title: "A Systematic Approach To Cryptocurrency Fees",
    description: "Analysis of fee structures and economic models in cryptocurrency systems.",
    filename: "A Systematic Approach To Cryptocurrency Fees.pdf",
    category: "research",
    tags: ["Fees", "Economics", "Analysis"]
  }
]

// Helper functions
export function getDocumentsByCategory(category: Document['category']): Document[] {
  return documents.filter(doc => doc.category === category)
}

export function getDocumentUrl(filename: string): string {
  return `/api/pdf/documents/${encodeURIComponent(filename)}`
}

export function getWhitepapers(): Document[] {
  return getDocumentsByCategory('whitepaper')
}

export function getResearchPapers(): Document[] {
  return getDocumentsByCategory('research')
}

export function getTechnicalDocs(): Document[] {
  return getDocumentsByCategory('technical')
}

export function getGuides(): Document[] {
  return getDocumentsByCategory('guide')
}
