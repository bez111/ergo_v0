/**
 * Unified FAQ Data
 * Combines beginner and technical FAQ into one source
 */

export type FAQLevel = 'beginner' | 'technical';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  level: FAQLevel;
}

// Categories for filtering
export const faqCategories = {
  beginner: ['Basics', 'Technology', 'Getting Started', 'Ecosystem', 'Community'],
  technical: ['general', 'technology', 'economics', 'ecosystem', 'wallets', 'mining']
};

// Beginner FAQ (from /start/faq)
const beginnerFAQ: FAQItem[] = [
  // Basics
  {
    id: "beginner-what-is-ergo",
    question: "What is Ergo in simple terms?",
    answer: 'Ergo is a secure Proof-of-Work blockchain for powerful smart contracts, enabling decentralized financial applications. Think of it as digital money (ERG) with programmable rules.',
    category: "Basics",
    level: "beginner"
  },
  {
    id: "beginner-is-ergo-company",
    question: "Is Ergo a company?",
    answer: "No, Ergo is a decentralized, open-source protocol. The Ergo Foundation is a non-profit community body that supports development but does not control the network.",
    category: "Basics",
    level: "beginner"
  },
  {
    id: "beginner-fair-launch",
    question: 'What does a "fair launch" mean?',
    answer: 'Ergo had no Initial Coin Offering (ICO) or pre-mined tokens for founders. This ensures a more equitable distribution, as everyone had an equal opportunity to acquire ERG through mining from day one.',
    category: "Basics",
    level: "beginner"
  },

  // Technology (Beginner)
  {
    id: "beginner-ergo-vs-btc-eth",
    question: "How is Ergo different from Bitcoin or Ethereum?",
    answer: "vs. Bitcoin: Ergo supports advanced smart contracts, not just currency. \n vs. Ethereum: Ergo uses the eUTXO model for enhanced security and predictable fees, and remains Proof-of-Work.",
    category: "Technology",
    level: "beginner"
  },
  {
    id: "beginner-eutxo",
    question: "What is eUTXO?",
    answer: 'The Extended UTXO model attaches data and logic directly to "boxes" of money. This enhances smart contract security, fee predictability, and allows for better scalability compared to the account model.',
    category: "Technology",
    level: "beginner"
  },
  {
    id: "beginner-ergoscript",
    question: "What is ErgoScript?",
    answer: "ErgoScript is the powerful and secure programming language for writing smart contracts on Ergo. You do not need to know code to use Ergo; it's a tool for developers.",
    category: "Technology",
    level: "beginner"
  },
  {
    id: "beginner-sigma-protocols",
    question: "What are Sigma Protocols?",
    answer: "These are advanced zero-knowledge proofs built into Ergo's core, enabling privacy features like ErgoMixer, complex multi-party contracts, and secure multi-signature schemes.",
    category: "Technology",
    level: "beginner"
  },

  // Getting Started
  {
    id: "beginner-erg-use",
    question: "What is the ERG coin used for?",
    answer: "ERG is used for transaction fees, collateral for stablecoins (SigmaUSD), participating in DeFi applications, powering dApps (NFTs, gaming), and incentivizing miners.",
    category: "Getting Started",
    level: "beginner"
  },
  {
    id: "beginner-get-erg",
    question: "How can I get ERG?",
    answer: "You can acquire ERG on various cryptocurrency exchanges, through peer-to-peer trades, or by mining. Always do your own research before investing.",
    category: "Getting Started",
    level: "beginner"
  },
  {
    id: "beginner-wallet",
    question: "Which wallet is best for beginners?",
    answer: "The official mobile wallets (Android/iOS) or the Nautilus Wallet (browser extension) are excellent, user-friendly starting points.",
    category: "Getting Started",
    level: "beginner"
  },
  
  // Ecosystem (Beginner)
  {
    id: "beginner-dapps",
    question: "What kinds of dApps are on Ergo?",
    answer: "Ergo's ecosystem includes DeFi platforms (Spectrum, Duckpools), privacy tools (ErgoMixer), NFT marketplaces (SkyHarbor), cross-chain bridges (Rosen), and more.",
    category: "Ecosystem",
    level: "beginner"
  },
  {
    id: "beginner-ergomixer",
    question: "What is ErgoMixer?",
    answer: "ErgoMixer is a non-custodial service that increases your transaction privacy by mixing your ERG with others, making it difficult to trace your transaction history.",
    category: "Ecosystem",
    level: "beginner"
  },

  // Community (Beginner)
  {
    id: "beginner-governance",
    question: "Who governs Ergo?",
    answer: "Ergo is decentralized and community-driven. Protocol changes are discussed and formalized through Ergo Improvement Proposals (EIPs), with miners signaling support.",
    category: "Community",
    level: "beginner"
  },
  {
    id: "beginner-contribute",
    question: "How can I contribute if I'm not a developer?",
    answer: "You can help with community support, content creation (articles, videos), translation, testing dApps, or simply spreading awareness about Ergo.",
    category: "Community",
    level: "beginner"
  },
];

// Technical FAQ (from /learn/faq)
const technicalFAQ: FAQItem[] = [
  // General
  {
    id: "tech-what-is-ergo",
    question: "What is Ergo?",
    answer: "Ergo is a programmable blockchain protocol engineered for the development of decentralized applications (dApps), with a pronounced emphasis on creating an efficient, secure, and accessible environment for implementing financial contracts. Launched in 2019, the platform distinctively merges the security advantages of Bitcoin's Unspent Transaction Output (UTXO) model with sophisticated cryptographic features and a potent smart contract language known as ErgoScript.",
    category: "general",
    level: "technical"
  },
  {
    id: "tech-ergo-vision",
    question: "What is the main goal or vision of Ergo?",
    answer: "The overarching vision of Ergo is to furnish tools that promote economic freedom for ordinary individuals by offering secure, accessible, and decentralized financial instruments. This mission is supported by a commitment to creating a resilient platform engineered for long-term viability, capable of adapting to new challenges and incorporating novel ideas through its self-amendable protocol.",
    category: "general",
    level: "technical"
  },
  {
    id: "tech-ergo-principles",
    question: "What are the core principles of the Ergo Platform?",
    answer: "Ergo operates under several core principles: Organic and Non-Breaking Development (protocol modifications undergo approval by miners, users, and projects), Open-Source and Permissive Licensing, Privacy and Trustless Environments, Community-Driven governance (Ergo Treasury benefits the community), and Focus on Long-Term Survivability through researched solutions and self-amendable protocol design.",
    category: "general",
    level: "technical"
  },
  {
    id: "tech-ergo-manifesto",
    question: "What is the Ergo Manifesto and its key ideas on privacy?",
    answer: "The Ergo Manifesto, authored by co-founder Alex Chepurnoy, articulates that financial privacy is a fundamental human right. Key ideas include: privacy as a tool for survival and protection against authoritarian control, defense against financial asset seizure, recognition that regulation stability isn't guaranteed, and advocacy for non-custodial, decentralized privacy mechanisms through tools like ErgoMixer and Sigma protocols.",
    category: "general",
    level: "technical"
  },
  {
    id: "tech-why-named-ergo",
    question: 'Why is it named "Ergo"?',
    answer: 'The name "Ergo" has multifaceted meanings: In Latin, "ergo" means "therefore" or "consequently," reflecting logical consistency and efficient operation. In Greek, "ἔργον" (ergon) means "work," acknowledging the Proof-of-Work consensus mechanism. It also evokes ergonomics, emphasizing user-friendly design. The ticker ERG connects to "erg," a unit of work/energy in physics.',
    category: "general",
    level: "technical"
  },
  {
    id: "tech-ergo-launch",
    question: "When was Ergo launched? Was there an ICO?",
    answer: 'Ergo\'s mainnet launched on July 1st, 2019, with initial concepts starting in 2016. Significantly, Ergo had NO ICO, pre-mine, or private sales - it was a "fair launch" where ERG tokens were primarily obtainable through mining. The Ergo Foundation was allocated 4.43% of the total monetary base, distributed over the emission period for ecosystem development.',
    category: "general",
    level: "technical"
  },

  // Technology
  {
    id: "tech-consensus-mechanism",
    question: "What consensus mechanism does Ergo use?",
    answer: 'Ergo employs a Proof-of-Work (PoW) consensus mechanism using the Autolykos algorithm. PoW was chosen for its "truly fair start" for token distribution, "highest degree of decentralisation," being "widely studied" and well-understood, providing "very high-security guarantees," and being "friendly to light clients."',
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-autolykos-algorithm",
    question: "What is Autolykos and how is it different?",
    answer: "Autolykos is Ergo's bespoke PoW algorithm. Version 1 was \"pool-resistant\" with non-outsourceable puzzles. Version 2 (current) allows mining pools but maintains ASIC resistance and GPU-friendliness. It's memory-hard (initially ~2GB, growing over time), energy-efficient compared to SHA-256, and based on the k-sum problem. It requires GPUs with at least 4GB VRAM.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-eutxo-model",
    question: "What is the eUTXO model and how does it differ from Bitcoin's UTXO or Ethereum's account model?",
    answer: 'The Extended UTXO (eUTXO) model builds on Bitcoin\'s UTXO system but adds rich data and logic capabilities. Unlike Bitcoin\'s limited scripts or Ethereum\'s mutable account balances, eUTXO uses "boxes" that can contain values, complex scripts, and arbitrary data in "registers." This enables sophisticated smart contracts while maintaining UTXO benefits like parallel processing and predictable costs.',
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-eutxo-advantages",
    question: "What are the advantages of eUTXO for Ergo?",
    answer: "eUTXO provides: Enhanced Privacy (one-time objects), Scalability and Parallel Processing, better Interoperability with off-chain protocols, Transaction Cost Predictability (stable fees around 0.0011 ERG), Security and Determinism (isolated contract execution), Local Reasoning and Off-Chain Validation, and Expressive Smart Contracts on a secure foundation.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-smart-contracts-ergo",
    question: "What are smart contracts on Ergo?",
    answer: 'Smart contracts on Ergo are self-executing code that automatically enforce predefined terms. Every "coin" (UTXO/box) is protected by an ErgoScript program specifying spending conditions. This "contractual money" paradigm means logic is tied directly to digital assets, enabling complex financial instruments like asset-backed tokens, derivatives, escrow services, and decentralized microcredit.',
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-ergoscript-features",
    question: "What is ErgoScript and what are its key features?",
    answer: "ErgoScript is Ergo's smart contract language based on Scala. Key features: Security and Expressiveness for complex financial contracts, Safety by Design (intentionally not Turing-complete by default to prevent vulnerabilities), deep integration with Sigma Protocols for zero-knowledge proofs, Contextual Awareness (access to transaction and block data), and Functional Programming paradigm for more verifiable code.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-ergoscript-vs-solidity",
    question: "How does ErgoScript compare to Solidity?",
    answer: "ErgoScript (Ergo/eUTXO) vs Solidity (Ethereum/Account): ErgoScript emphasizes security and expressiveness with built-in cryptographic primitives, while Solidity focuses on ease of use. ErgoScript is Scala-based and functional, Solidity is JavaScript-like. ErgoScript offers more predictable costs and native privacy features, while Solidity has a larger ecosystem and more development tools currently available.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-boxes-ergoscript",
    question: 'What are "boxes" in ErgoScript?',
    answer: "Boxes are Ergo's enhanced UTXOs. Each box holds: a value (ERG or tokens), a guarding script (spending conditions), and data registers (R0-R9) for arbitrary data storage. This allows boxes to carry state and participate in complex dApp logic. Smart contracts read data from input boxes and create new output boxes with updated data, forming the basis of state transitions.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-sigma-protocols",
    question: "What are Sigma Protocols and how do they enhance privacy?",
    answer: "Sigma Protocols are efficient, composable zero-knowledge proofs that allow proving knowledge of secrets without revealing them. They enable: multi-signature wallets, ring signatures (for anonymity), threshold signatures, atomic swaps, and power ErgoMixer. They're deeply integrated into ErgoScript, making powerful cryptographic tools directly accessible to developers.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-zero-knowledge-proofs",
    question: "Does Ergo offer Zero-Knowledge Proofs?",
    answer: 'Yes, Ergo provides robust support for discrete log-based zero-knowledge proofs through Sigma Protocols. These are actively used for privacy-preserving features, complex authentication schemes, and applications like ErgoMixer. ErgoScript is described as being "based on Σ-protocols," meaning ZKP capabilities are woven into the fabric of smart contract execution.',
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-ergomixer",
    question: "What is ErgoMixer and how does it work?",
    answer: "ErgoMixer is a non-custodial, non-interactive token mixing service that enhances transaction privacy by obscuring links between sender and receiver addresses. It uses Sigma Protocols (ring signatures) to combine user transactions with others or decoys. Being non-custodial means users retain control of private keys, and non-interactive means no real-time coordination with other users is required.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-privacy-optional",
    question: "Is privacy on Ergo optional or mandatory?",
    answer: "Privacy on Ergo is optional, not mandatory. This allows flexibility for diverse use cases - some applications need transparency (like charities), while others require privacy. Optional privacy enables rich smart contract functionality, broader adoption, regulatory navigation, and user autonomy. Users can choose privacy tools like ErgoMixer when needed.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-storage-rent",
    question: 'What is "storage rent" and why does it exist?',
    answer: 'Storage rent is a fee levied on UTXOs inactive for 4+ years (approximately 0.14 ERG per typical box every 4 years). It exists to: prevent blockchain bloat by recycling "dust" and lost coins, provide long-term miner compensation beyond block rewards, and maintain network efficiency. Users can avoid it by simply moving funds before the 4-year period, resetting the timer.',
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-long-term-survivability",
    question: "How does Ergo aim for long-term survivability and self-amendability?",
    answer: "Ergo ensures survivability through: researched solutions to minimize security risks, sustainable economic model (storage rent + emission schedule), robust PoW consensus, and self-amendable protocol design. Changes require approval from miners, users, and projects through the EIP (Ergo Improvement Proposal) process, promoting organic, non-breaking development.",
    category: "technology",
    level: "technical"
  },
  {
    id: "tech-nipopows",
    question: "What are NIPoPoWs and how does Ergo use them?",
    answer: "Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) allow efficient verification of blockchain events without downloading the full chain. Ergo uses them for: ultra-light clients (mobile wallets), trustless cross-chain bridges, and efficient sidechains. They enable logarithmic-size proofs instead of linear, making verification much faster and lighter.",
    category: "technology",
    level: "technical"
  },

  // Economics
  {
    id: "tech-tokenomics",
    question: "What is Ergo's tokenomics?",
    answer: "ERG has a fixed supply cap of ~97.7 million coins. Emission started at 75 ERG/block, decreasing over time. No ICO or pre-mine occurred. The Ergo Foundation receives 4.43% of total supply over the emission period. Storage rent provides sustainable long-term miner rewards after emission ends.",
    category: "economics",
    level: "technical"
  },
  {
    id: "tech-sigmausd",
    question: "What is SigmaUSD?",
    answer: "SigmaUSD is Ergo's algorithmic stablecoin pegged to USD. It uses the AgeUSD protocol with ERG as collateral. SigmaRSV tokens absorb volatility. The system maintains over-collateralization without relying on external oracles for liquidations, making it more decentralized than many alternatives.",
    category: "economics",
    level: "technical"
  },

  // Ecosystem
  {
    id: "tech-oracle-pools",
    question: "What are Oracle Pools?",
    answer: "Oracle Pools are Ergo's decentralized oracle solution. Multiple data providers post data on-chain, and the system aggregates them to produce reliable price feeds. They're used by DeFi protocols like SigmaUSD and Spectrum. The design minimizes single points of failure and manipulation risks.",
    category: "ecosystem",
    level: "technical"
  },
  {
    id: "tech-spectrum-dex",
    question: "What is Spectrum DEX?",
    answer: "Spectrum (formerly ErgoDEX) is a decentralized exchange on Ergo using AMM (Automated Market Maker) pools. It supports token swaps, liquidity provision, and yield farming. The eUTXO model enables features like partial order filling and better MEV resistance compared to account-based DEXs.",
    category: "ecosystem",
    level: "technical"
  },
  {
    id: "tech-rosen-bridge",
    question: "What is Rosen Bridge?",
    answer: "Rosen Bridge is a trustless cross-chain bridge connecting Ergo to other blockchains (Cardano, Bitcoin, Ethereum). It uses a federated model with watchers and guards to ensure security. NIPoPoWs enable efficient verification of cross-chain transactions.",
    category: "ecosystem",
    level: "technical"
  },

  // Mining
  {
    id: "tech-mining-requirements",
    question: "What hardware do I need to mine Ergo?",
    answer: "Ergo mining requires a GPU with at least 4GB VRAM (6GB+ recommended). Popular choices include NVIDIA RTX 3060 Ti, RTX 3070, or AMD RX 6600 XT. The Autolykos algorithm is memory-hard and ASIC-resistant, keeping mining accessible to regular GPU owners.",
    category: "mining",
    level: "technical"
  },
  {
    id: "tech-mining-pools",
    question: "Which mining pools support Ergo?",
    answer: "Popular Ergo mining pools include: GetBlok, 2Miners, HeroMiners, WoolyPooly, F2Pool, and Nanopool. Each has different fee structures (typically 1-2%), payout methods (PPLNS, PPS+), and server locations. Solo mining is also viable for larger operations.",
    category: "mining",
    level: "technical"
  },
];

// Combined FAQ data
export const faqData: FAQItem[] = [...beginnerFAQ, ...technicalFAQ];

// Helper functions
export function getFAQByLevel(level: FAQLevel): FAQItem[] {
  return faqData.filter(item => item.level === level);
}

export function getFAQByCategory(category: string): FAQItem[] {
  return faqData.filter(item => item.category.toLowerCase() === category.toLowerCase());
}

export function searchFAQ(query: string): FAQItem[] {
  const q = query.toLowerCase();
  return faqData.filter(item => 
    item.question.toLowerCase().includes(q) || 
    item.answer.toLowerCase().includes(q)
  );
}

export const beginnerCategories = ['Basics', 'Technology', 'Getting Started', 'Ecosystem', 'Community'];
export const technicalCategories = ['general', 'technology', 'economics', 'ecosystem', 'wallets', 'mining'];

