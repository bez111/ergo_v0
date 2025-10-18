export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export const faqData: FAQItem[] = [
  // General Questions
  {
    id: "what-is-ergo",
    question: "What is Ergo?",
    answer:
      "Ergo is a programmable blockchain protocol engineered for the development of decentralized applications (dApps), with a pronounced emphasis on creating an efficient, secure, and accessible environment for implementing financial contracts. Launched in 2019, the platform distinctively merges the security advantages of Bitcoin's Unspent Transaction Output (UTXO) model with sophisticated cryptographic features and a potent smart contract language known as ErgoScript.",
    category: "general",
  },
  {
    id: "ergo-vision",
    question: "What is the main goal or vision of Ergo?",
    answer:
      "The overarching vision of Ergo is to furnish tools that promote economic freedom for ordinary individuals by offering secure, accessible, and decentralized financial instruments. This mission is supported by a commitment to creating a resilient platform engineered for long-term viability, capable of adapting to new challenges and incorporating novel ideas through its self-amendable protocol.",
    category: "general",
  },
  {
    id: "ergo-principles",
    question: "What are the core principles of the Ergo Platform?",
    answer:
      "Ergo operates under several core principles: Organic and Non-Breaking Development (protocol modifications undergo approval by miners, users, and projects), Open-Source and Permissive Licensing, Privacy and Trustless Environments, Community-Driven governance (Ergo Treasury benefits the community), and Focus on Long-Term Survivability through researched solutions and self-amendable protocol design.",
    category: "general",
  },
  {
    id: "ergo-manifesto",
    question: "What is the Ergo Manifesto and its key ideas on privacy?",
    answer:
      "The Ergo Manifesto, authored by co-founder Alex Chepurnoy, articulates that financial privacy is a fundamental human right. Key ideas include: privacy as a tool for survival and protection against authoritarian control, defense against financial asset seizure, recognition that regulation stability isn't guaranteed, and advocacy for non-custodial, decentralized privacy mechanisms through tools like ErgoMixer and Sigma protocols.",
    category: "general",
  },
  {
    id: "why-named-ergo",
    question: 'Why is it named "Ergo"?',
    answer:
      'The name "Ergo" has multifaceted meanings: In Latin, "ergo" means "therefore" or "consequently," reflecting logical consistency and efficient operation. In Greek, "ἔργον" (ergon) means "work," acknowledging the Proof-of-Work consensus mechanism. It also evokes ergonomics, emphasizing user-friendly design. The ticker ERG connects to "erg," a unit of work/energy in physics.',
    category: "general",
  },
  {
    id: "ergo-launch",
    question: "When was Ergo launched? Was there an ICO?",
    answer:
      'Ergo\'s mainnet launched on July 1st, 2019, with initial concepts starting in 2016. Significantly, Ergo had NO ICO, pre-mine, or private sales - it was a "fair launch" where ERG tokens were primarily obtainable through mining. The Ergo Foundation was allocated 4.43% of the total monetary base, distributed over the emission period for ecosystem development.',
    category: "general",
  },

  // Technology Questions
  {
    id: "consensus-mechanism",
    question: "What consensus mechanism does Ergo use?",
    answer:
      'Ergo employs a Proof-of-Work (PoW) consensus mechanism using the Autolykos algorithm. PoW was chosen for its "truly fair start" for token distribution, "highest degree of decentralisation," being "widely studied" and well-understood, providing "very high-security guarantees," and being "friendly to light clients."',
    category: "technology",
  },
  {
    id: "autolykos-algorithm",
    question: "What is Autolykos and how is it different?",
    answer:
      "Autolykos is Ergo's bespoke PoW algorithm. Version 1 was \"pool-resistant\" with non-outsourceable puzzles. Version 2 (current) allows mining pools but maintains ASIC resistance and GPU-friendliness. It's memory-hard (initially ~2GB, growing over time), energy-efficient compared to SHA-256, and based on the k-sum problem. It requires GPUs with at least 4GB VRAM.",
    category: "technology",
  },
  {
    id: "eutxo-model",
    question: "What is the eUTXO model and how does it differ from Bitcoin's UTXO or Ethereum's account model?",
    answer:
      'The Extended UTXO (eUTXO) model builds on Bitcoin\'s UTXO system but adds rich data and logic capabilities. Unlike Bitcoin\'s limited scripts or Ethereum\'s mutable account balances, eUTXO uses "boxes" that can contain values, complex scripts, and arbitrary data in "registers." This enables sophisticated smart contracts while maintaining UTXO benefits like parallel processing and predictable costs.',
    category: "technology",
  },
  {
    id: "eutxo-advantages",
    question: "What are the advantages of eUTXO for Ergo?",
    answer:
      "eUTXO provides: Enhanced Privacy (one-time objects), Scalability and Parallel Processing, better Interoperability with off-chain protocols, Transaction Cost Predictability (stable fees around 0.0011 ERG), Security and Determinism (isolated contract execution), Local Reasoning and Off-Chain Validation, and Expressive Smart Contracts on a secure foundation.",
    category: "technology",
  },
  {
    id: "smart-contracts-ergo",
    question: "What are smart contracts on Ergo?",
    answer:
      'Smart contracts on Ergo are self-executing code that automatically enforce predefined terms. Every "coin" (UTXO/box) is protected by an ErgoScript program specifying spending conditions. This "contractual money" paradigm means logic is tied directly to digital assets, enabling complex financial instruments like asset-backed tokens, derivatives, escrow services, and decentralized microcredit.',
    category: "technology",
  },
  {
    id: "ergoscript-features",
    question: "What is ErgoScript and what are its key features?",
    answer:
      "ErgoScript is Ergo's smart contract language based on Scala. Key features: Security and Expressiveness for complex financial contracts, Safety by Design (intentionally not Turing-complete by default to prevent vulnerabilities), deep integration with Sigma Protocols for zero-knowledge proofs, Contextual Awareness (access to transaction and block data), and Functional Programming paradigm for more verifiable code.",
    category: "technology",
  },
  {
    id: "ergoscript-vs-solidity",
    question: "How does ErgoScript compare to Solidity?",
    answer:
      "ErgoScript (Ergo/eUTXO) vs Solidity (Ethereum/Account): ErgoScript emphasizes security and expressiveness with built-in cryptographic primitives, while Solidity focuses on ease of use. ErgoScript is Scala-based and functional, Solidity is JavaScript-like. ErgoScript offers more predictable costs and native privacy features, while Solidity has a larger ecosystem and more development tools currently available.",
    category: "technology",
  },
  {
    id: "boxes-ergoscript",
    question: 'What are "boxes" in ErgoScript?',
    answer:
      "Boxes are Ergo's enhanced UTXOs. Each box holds: a value (ERG or tokens), a guarding script (spending conditions), and data registers (R0-R9) for arbitrary data storage. This allows boxes to carry state and participate in complex dApp logic. Smart contracts read data from input boxes and create new output boxes with updated data, forming the basis of state transitions.",
    category: "technology",
  },
  {
    id: "sigma-protocols",
    question: "What are Sigma Protocols and how do they enhance privacy?",
    answer:
      "Sigma Protocols are efficient, composable zero-knowledge proofs that allow proving knowledge of secrets without revealing them. They enable: multi-signature wallets, ring signatures (for anonymity), threshold signatures, atomic swaps, and power ErgoMixer. They're deeply integrated into ErgoScript, making powerful cryptographic tools directly accessible to developers.",
    category: "technology",
  },
  {
    id: "zero-knowledge-proofs",
    question: "Does Ergo offer Zero-Knowledge Proofs?",
    answer:
      'Yes, Ergo provides robust support for discrete log-based zero-knowledge proofs through Sigma Protocols. These are actively used for privacy-preserving features, complex authentication schemes, and applications like ErgoMixer. ErgoScript is described as being "based on Σ-protocols," meaning ZKP capabilities are woven into the fabric of smart contract execution.',
    category: "technology",
  },
  {
    id: "ergomixer",
    question: "What is ErgoMixer and how does it work?",
    answer:
      "ErgoMixer is a non-custodial, non-interactive token mixing service that enhances transaction privacy by obscuring links between sender and receiver addresses. It uses Sigma Protocols (ring signatures) to combine user transactions with others or decoys. Being non-custodial means users retain control of private keys, and non-interactive means no real-time coordination with other users is required.",
    category: "technology",
  },
  {
    id: "privacy-optional",
    question: "Is privacy on Ergo optional or mandatory?",
    answer:
      "Privacy on Ergo is optional, not mandatory. This allows flexibility for diverse use cases - some applications need transparency (like charities), while others require privacy. Optional privacy enables rich smart contract functionality, broader adoption, regulatory navigation, and user autonomy. Users can choose privacy tools like ErgoMixer when needed.",
    category: "technology",
  },
  {
    id: "storage-rent",
    question: 'What is "storage rent" and why does it exist?',
    answer:
      'Storage rent is a fee levied on UTXOs inactive for 4+ years (approximately 0.14 ERG per typical box every 4 years). It exists to: prevent blockchain bloat by recycling "dust" and lost coins, provide long-term miner compensation beyond block rewards, and maintain network efficiency. Users can avoid it by simply moving funds before the 4-year period, resetting the timer.',
    category: "technology",
  },
  {
    id: "long-term-survivability",
    question: "How does Ergo aim for long-term survivability and self-amendability?",
    answer:
      "Ergo ensures survivability through: researched solutions to minimize security risks, sustainable economic model (storage rent + emission schedule), robust PoW consensus, and self-amendable protocol design. Changes require approval from miners, users, and projects through the EIP (Ergo Improvement Proposal) process, promoting organic, non-breaking development.",
    category: "technology",
  },

  // Economics Questions
  {
    id: "erg-token-uses",
    question: "What is ERG and what are its uses?",
    answer:
      "ERG is Ergo's native cryptocurrency used for: transaction fees, smart contract execution, storage rent payments, DeFi applications (collateral, liquidity, SigmaUSD minting), potential governance participation, medium of exchange within the ecosystem, and store of value given its limited supply and PoW security.",
    category: "economics",
  },
  {
    id: "erg-tokenomics",
    question: "What are the tokenomics of ERG?",
    answer:
      "ERG has a fixed maximum supply of 97,739,924.5 ERG. Current circulating supply is approximately 81 million ERG (mid-2024). The Ergo Foundation received 4.43% allocation. Original block rewards were 75 ERG, now following EIP-27 schedule. Storage rent can remove small amounts from circulation, making it potentially deflationary post-emission.",
    category: "economics",
  },
  {
    id: "emission-schedule",
    question: "What is Ergo's emission schedule and how has EIP-27 changed it?",
    answer:
      'Originally, emission was to complete in ~8 years (by 2027) with 75 ERG/block initially, reducing by 3 ERG every 3 months. EIP-27 (activated June 2022) extended this by redirecting rewards to a "remission contract" for gradual payout until ~2045. Current rules: if scheduled reward ≥15 ERG, 12 ERG goes to remission contract; if <15 ERG, then R-3 ERG goes to remission, miners get 3 ERG.',
    category: "economics",
  },
  {
    id: "mining-ergo",
    question: "How does mining work on Ergo? Can anyone mine ERG?",
    answer:
      "Yes, anyone with suitable GPU hardware can mine ERG. Ergo uses Autolykos v2 (ASIC-resistant, GPU-friendly, requires 4GB+ VRAM). Miners solve cryptographic puzzles to create blocks and earn rewards (currently following EIP-27 schedule) plus transaction fees. Mining pools are supported, and the Ergo team recommends supporting smaller pools for decentralization.",
    category: "economics",
  },

  // Ecosystem Questions
  {
    id: "ergo-foundation",
    question: "What is the Ergo Foundation and its role?",
    answer:
      "The Ergo Foundation is a community-driven, non-profit entity supporting Ergo's development and adoption. Key roles: fostering organic development, promoting open-source licensing, supporting privacy and trustless environments, community empowerment through treasury distribution, infrastructure support, education/outreach, development facilitation, grants, and exchange listings.",
    category: "ecosystem",
  },
  {
    id: "notable-dapps",
    question: "What are some notable dApps and projects in the Ergo ecosystem?",
    answer:
      "Key projects include: ErgoMixer (privacy mixer), SigmaUSD (algorithmic stablecoin), Spectrum Finance (DEX), Oracle Pools (decentralized oracles), Rosen Bridge (cross-chain interoperability), Duckpools (lending), SigmaFi (P2P bonds), ErgoRaffle (crowdfunding), Ergo Auctions (NFT marketplace), Paideia (DAO framework), Nautilus Wallet (browser extension), and various gaming/utility projects.",
    category: "ecosystem",
  },
  {
    id: "ergo-cardano-relationship",
    question: "What is the relationship between Ergo and Cardano?",
    answer:
      "Ergo and Cardano share a close collaborative relationship: both use eUTXO model, reciprocal research exchange (DJED stablecoin was first implemented as SigmaUSD on Ergo), philosophical alignment on research-driven development, personnel connections (Alex Chepurnoy worked at IOHK), and complementary strengths (Ergo's PoW + privacy, Cardano's PoS + governance).",
    category: "ecosystem",
  },
  {
    id: "rosen-bridge",
    question: "What is the Rosen Bridge?",
    answer:
      "Rosen Bridge is a cross-chain interoperability solution connecting Ergo with Cardano, Bitcoin, Ethereum, and BSC. It utilizes Ergo's security as foundation, aims for decentralized design with guards/watchers, minimizes smart contract risk, and enables non-custodial asset transfers. It allows moving assets like ERG to other chains and vice versa for cross-chain DeFi participation.",
    category: "ecosystem",
  },
  {
    id: "ergo-vs-other-blockchains",
    question: "How does Ergo compare to Bitcoin and Ethereum?",
    answer:
      "vs Bitcoin: Ergo extends UTXO with smart contracts, uses ASIC-resistant mining, has advanced privacy features, and focuses on financial contracts beyond simple payments. vs Ethereum: Ergo uses eUTXO vs accounts, PoW vs PoS, ErgoScript vs Solidity, more predictable costs, native privacy tools, and research-driven development approach. Ergo targets secure financial contracts specifically.",
    category: "ecosystem",
  },

  // Wallets Questions
  {
    id: "buy-erg",
    question: "How can I buy Ergo (ERG)?",
    answer:
      "You can buy ERG through: 1) Centralized Exchanges (KuCoin, Gate.io, HTX) - register, complete KYC, buy directly with fiat or swap from USDT/BTC/ETH; 2) Crypto Wallets with built-in purchase (if supported); 3) Decentralized Exchanges like Spectrum Finance (requires existing crypto). Always use official platforms and consider transferring to self-custodial wallets for security.",
    category: "wallets",
  },
  {
    id: "recommended-wallets",
    question: "What are the recommended Ergo wallets?",
    answer:
      "Mobile: Ergo Mobile Wallet/Terminus (user-friendly, supports offline mode), Minotaur (multi-sig). Browser: Nautilus (most popular for dApps, privacy mode). Desktop: Satergo (full node GUI), Node Wallet (CLI). Web: SAFEW (advanced features, ErgoMixer access). Hardware: Ledger support, Paper Wallets for cold storage. Choose based on your security needs and usage patterns.",
    category: "wallets",
  },

  // Troubleshooting Questions
  {
    id: "common-issues",
    question: "What are common user complaints or issues with Ergo?",
    answer:
      "Common issues include: transaction speeds feeling slow sometimes, wallet UX improvements needed (transaction history, in-wallet swaps), historical lack of major exchange listings, perceived marketing challenges, storage rent confusion, and some centralization concerns in early dApp versions. The community actively works on addressing these through development and education.",
    category: "troubleshooting",
  },
  {
    id: "wallet-access-issues",
    question: "What are common wallet access issues and solutions?",
    answer:
      'Common issues: 1) Zero balance after restore - check derivation paths, BIP32 bug (pre-Oct 2022), verify seed phrase; 2) "User not authenticated" on iOS - often device credential changes, need seed phrase; 3) Lost seed phrase - generally unrecoverable, prevention is key; 4) Trezor errors - update software, check passphrase. Always securely backup seed phrases!',
    category: "troubleshooting",
  },
] 