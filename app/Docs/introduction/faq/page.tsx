"use client";

import React, { useState, useRef, useEffect } from "react";

// Категории FAQ из /learn/faq
const categories = [
  {
    id: "general",
    title: "General Questions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "technology",
    title: "Technology",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "economics",
    title: "Economics",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "wallets",
    title: "Wallets & User Practicalities",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    color: "from-red-500 to-orange-500",
  },
];

// Вопросы и ответы из /learn/faq (faqData)
const faqData = [
  // General
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
  {
    id: "where-analytics",
    question: "Where can I see analytics on use?",
    answer: 'Analytics provides an overview of various metrics available.',
    category: "general",
  },
  {
    id: "what-is-efyt",
    question: "What is EFYT?",
    answer: `Ergo-First-Year-Token (EFYT) was airdropped and distributed on Waves DEX starting in May 2017. EFYT helped build an early community and raise funds for Ergo before mainnet launch. EFYT is not the same as ERG; the mainnet native token is mined after launch. The max supply of EFYT is 1,970,945.0, which is 10% of the first year of Ergo token emission and the same number of Ergs that the Treasury will receive during year 1, sufficient to swap the max supply of EFYT for Erg.`,
    category: "general",
  },
  {
    id: "how-different-from-btc",
    question: "How does Ergo differ from Bitcoin?",
    answer: `Ergo builds upon the same UTXO model as Bitcoin but extends its functionality with additional features. Ergo allows for more complex programmability by providing access to the entire spending transaction and the block solution in the execution context. This enables the creation of Turing-complete contracts and the implementation of contractual money, where digital coins can be explicitly bound to a contract in the form of executable code.`,
    category: "technology",
  },
  {
    id: "what-is-contractual-money",
    question: "What is contractual money?",
    answer: `Contractual money is digital money that is bound to a contract in the form of executable code, which enforces specific rules and conditions for its usage. This allows for more precise control over how the money is spent and can be used to implement various use cases, such as microcredit systems or local exchange trading systems.`,
    category: "technology",
  },
  {
    id: "energy-consumption",
    question: "What about energy consumption?",
    answer: `Proof of Work, Energy & Ergo: Ergo uses Proof of Work, which is energy-intensive compared to Proof of Stake. However, Ergo's design is conservative, focusing on well-known and tested Sigma protocols for privacy. The network is designed to be upgradeable, allowing for the adoption of newer, resilient cryptographic frameworks in the future.`,
    category: "economics",
  },
  {
    id: "fiftyone-attack",
    question: "What about 51% Attacks?",
    answer: `Mining pools offer a buffer against network attacks as the hash rate is distributed across thousands of individual miners. The memory hardened aspect of Ergo also makes this attack vector more expensive as there is no ASIC support to rent. Usually, this attack is made for profit, and massive dumping occurs on an exchange as it is occurring. The current exchange situation doesn't provide the liquidity for a viable offramp, and the rentable ASIC support isn't an option.`,
    category: "technology",
  },
  {
    id: "miners-after-emission",
    question: "How will miners be supported after emissions?",
    answer: `After the scheduled emissions conclude in 2045, miners on Ergo will continue to be incentivized through transaction fees, Miner Extracted Value (MEV), storage rent, and custom emission contracts as part of a Fair Initial Mining Offering (FIMO).`,
    category: "economics",
  },
  {
    id: "proof-of-useful-work",
    question: "Is Proof of Useful Work being considered?",
    answer: `While Proof of Useful Work (PoUW) is an interesting concept, it is still in the research phase. Ergo is open to exploring PoUW, but a radical change to the consensus mechanism would likely be beyond the scope and resources of the current team.`,
    category: "technology",
  },
  {
    id: "staking-erg",
    question: "How can I stake my Erg?",
    answer: `Ergo is a PoW coin, not PoS, so you can't stake Erg directly. However, you can earn yield from your ERG in liquidity pools, tokenisation of dApps, trading bots, lending platforms, and other mechanisms.`,
    category: "economics",
  },
  {
    id: "how-fast",
    question: "How fast is Ergo?",
    answer: `TPS (Transactions Per Second) is not a useful metric. On Ergo Reference Node v.5, TPS is estimated to be a minimum of 47.5 tx/s. However, transactions can happen in three scaling layers or levels: L0 (Reference Nodes), L1 (scaling solutions), L2 (off-chain). Many transactions can be bundled and settled on the L0 layer.`,
    category: "technology",
  },
  {
    id: "why-scala",
    question: "Why Scala?",
    answer: `Ergo's primary language is Scala. The scripting language used by Ergo, ErgoScript, is also based on Scala, but the off-chain code can be written in any language. Scala is cross-platform, concise, efficient, and multi-paradigm, making it suitable for a wide range of domains.`,
    category: "technology",
  },
  // --- ДОБАВЛЯЮ НОВЫЕ ВОПРОСЫ ---
  {
    id: "future-plans-ecosystem-growth",
    question: "What are Ergo's future plans, especially in terms of how you grow your ecosystem?",
    answer: `Position Ergo as a basis for unstoppable, grassroots economies, serving as a decentralized central bank digital currency (CBDC) for the people. Continue to solve pain points in development, especially UX. Hardware wallets, more courses, tutorials, guides, and resources are appearing daily. Bulk of our issue is lack of T1 exchanges and professional marketing. Rosen is helping here by connecting extensive liquidity to our DeFi stack. DAOs are now live and the community can help to grow the ecosystem in a more structured and decentralised way. Sigmanauts Program: Dozens of volunteers drive Ergo forward already. We're not reliant on a centralised entity or group pushing things forward. This kind of growth is a slow-burn but cumulative.`,
    category: "ecosystem",
  },
  {
    id: "privacy-focus",
    question: "How important is privacy for Ergo currently, and how do you plan to avoid the issues that some privacy-focused projects have faced, like legal challenges?",
    answer: `Privacy is a core principle for Ergo, considered a fundamental human right, and is implemented through opt-in protocols and robust cryptographic methods within its eUTXO model, ensuring strong protection while maintaining necessary transparency. To sidestep legal challenges, Ergo operates as a fully open-source platform with clear documentation and transparent development practices. Innovations like ErgoMixer—the first non-custodial, programmable, non-interactive mixer—demonstrate this commitment. More advanced ideas like SigmaJoin and Mixicles are also proposed. Contracts can't be shut down. We avoid legal challenges by pushing for completely unstoppable designs, educating the community on Knowing Their Assumptions and best practices.`,
    category: "technology",
  },
  {
    id: "mining-energy",
    question: "What about energy consumption?",
    answer: `Proof of Work, Energy & Ergo: Ergo uses Proof of Work, which is energy-intensive compared to Proof of Stake. However, Ergo's design is conservative, focusing on well-known and tested Sigma protocols for privacy. The network is designed to be upgradeable, allowing for the adoption of newer, resilient cryptographic frameworks in the future.`,
    category: "economics",
  },
  {
    id: "mining-51-attack",
    question: "What about 51% Attacks?",
    answer: `Mining pools offer a buffer against network attacks as the hash rate is distributed across thousands of individual miners. The memory hardened aspect of Ergo also makes this attack vector more expensive as there is no ASIC support to rent. Usually, this attack is made for profit, and massive dumping occurs on an exchange as it is occurring. The current exchange situation doesn't provide the liquidity for a viable offramp, and the rentable ASIC support isn't an option.`,
    category: "technology",
  },
  {
    id: "mining-support-after-emission",
    question: "How will miners be supported after emissions?",
    answer: `After the scheduled emissions conclude in 2045, miners on Ergo will continue to be incentivized through transaction fees, Miner Extracted Value (MEV), storage rent, and custom emission contracts as part of a Fair Initial Mining Offering (FIMO).`,
    category: "economics",
  },
  {
    id: "mining-proof-of-useful-work",
    question: "Is Proof of Useful Work being considered?",
    answer: `While Proof of Useful Work (PoUW) is an interesting concept, it is still in the research phase. Ergo is open to exploring PoUW, but a radical change to the consensus mechanism would likely be beyond the scope and resources of the current team.`,
    category: "technology",
  },
  {
    id: "mining-stake-erg",
    question: "How can I stake my Erg?",
    answer: `Ergo is a PoW coin, not PoS, so you can't stake Erg directly. However, you can earn yield from your ERG in liquidity pools, tokenisation of dApps, trading bots, lending platforms, and other mechanisms.`,
    category: "economics",
  },
  {
    id: "mining-quantum",
    question: "Is Ergo quantum resistant?",
    answer: `Ergo employs an efficient class of zero-knowledge proofs known as sigma-protocols, but the known post-quantum alternatives are still considered exotic and impractical for widespread use. In the event of a crypto-disaster—such as the development of an efficient quantum computer, number-theoretical attacks on elliptic curves, or other unforeseen vulnerabilities—transitioning to a blockchain with robust post-quantum security measures would be the best course of action.`,
    category: "technology",
  },
  {
    id: "mining-non-outsourceability",
    question: "Why was non-outsourceability turned off?",
    answer: `Autolykos v1 originally had non-outsourceability built-in to prevent mining pools on Ergo. However, it became apparent that it's only possible to avoid pools with smart contracts. So, they (the miners) turned it off so that not only larger players could take advantage of the loophole. Ergo is now focusing on memory hardness to keep mining as fair as possible, which should help prevent ASICs mining at least. There are also some improvements for pooling, e.g. Stratum 2 protocol. Mining pools have certain benefits just now being exposed by Ergo, like more equitable token distribution for dApps/ projects. This is now available to miners on GETBLOK.io, using the world's first working SmartPools/subpooling system.`,
    category: "technology",
  },
  {
    id: "mining-tps",
    question: "How fast is Ergo?",
    answer: `TPS (Transactions Per Second) is not a useful metric. On Ergo Reference Node v.5, TPS is estimated to be a minimum of 47.5 tx/s. However, transactions can happen in three scaling layers or levels: L0 (Reference Nodes), L1 (scaling solutions), L2 (off-chain). Many transactions can be bundled and settled on the L0 layer.`,
    category: "technology",
  },
  {
    id: "mining-why-scala",
    question: "Why Scala?",
    answer: `Ergo's primary language is Scala. The scripting language used by Ergo, ErgoScript, is also based on Scala, but the off-chain code can be written in any language. Scala is cross-platform, concise, efficient, and multi-paradigm, making it suitable for a wide range of domains.`,
    category: "technology",
  },
  // ... остальные вопросы из faqData ...
  // --- ДОБАВЛЯЮ ОТСУТСТВУЮЩИЕ ВОПРОСЫ ИЗ /learn/faq ---
  {
    id: "consensus-mechanism",
    question: "What consensus mechanism does Ergo use?",
    answer: 'Ergo employs a Proof-of-Work (PoW) consensus mechanism using the Autolykos algorithm. PoW was chosen for its "truly fair start" for token distribution, "highest degree of decentralisation," being "widely studied" and well-understood, providing "very high-security guarantees," and being "friendly to light clients."',
    category: "technology",
  },
  {
    id: "autolykos-algorithm",
    question: "What is Autolykos and how is it different?",
    answer: "Autolykos is Ergo's bespoke PoW algorithm. Version 1 was 'pool-resistant' with non-outsourceable puzzles. Version 2 (current) allows mining pools but maintains ASIC resistance and GPU-friendliness. It's memory-hard (initially ~2GB, growing over time), energy-efficient compared to SHA-256, and based on the k-sum problem. It requires GPUs with at least 4GB VRAM.",
    category: "technology",
  },
  {
    id: "eutxo-model",
    question: "What is the eUTXO model and how does it differ from Bitcoin's UTXO or Ethereum's account model?",
    answer: 'The Extended UTXO (eUTXO) model builds on Bitcoin\'s UTXO system but adds rich data and logic capabilities. Unlike Bitcoin\'s limited scripts or Ethereum\'s mutable account balances, eUTXO uses "boxes" that can contain values, complex scripts, and arbitrary data in "registers." This enables sophisticated smart contracts while maintaining UTXO benefits like parallel processing and predictable costs.',
    category: "technology",
  },
  {
    id: "eutxo-advantages",
    question: "What are the advantages of eUTXO for Ergo?",
    answer: "eUTXO provides: Enhanced Privacy (one-time objects), Scalability and Parallel Processing, better Interoperability with off-chain protocols, Transaction Cost Predictability (stable fees around 0.0011 ERG), Security and Determinism (isolated contract execution), Local Reasoning and Off-Chain Validation, and Expressive Smart Contracts on a secure foundation.",
    category: "technology",
  },
  {
    id: "smart-contracts-ergo",
    question: "What are smart contracts on Ergo?",
    answer: 'Smart contracts on Ergo are self-executing code that automatically enforce predefined terms. Every "coin" (UTXO/box) is protected by an ErgoScript program specifying spending conditions. This "contractual money" paradigm means logic is tied directly to digital assets, enabling complex financial instruments like asset-backed tokens, derivatives, escrow services, and decentralized microcredit.',
    category: "technology",
  },
  {
    id: "ergoscript-features",
    question: "What is ErgoScript and what are its key features?",
    answer: "ErgoScript is Ergo's smart contract language based on Scala. Key features: Security and Expressiveness for complex financial contracts, Safety by Design (intentionally not Turing-complete by default to prevent vulnerabilities), deep integration with Sigma Protocols for zero-knowledge proofs, Contextual Awareness (access to transaction and block data), and Functional Programming paradigm for more verifiable code.",
    category: "technology",
  },
  {
    id: "ergoscript-vs-solidity",
    question: "How does ErgoScript compare to Solidity?",
    answer: "ErgoScript (Ergo/eUTXO) vs Solidity (Ethereum/Account): ErgoScript emphasizes security and expressiveness with built-in cryptographic primitives, while Solidity focuses on ease of use. ErgoScript is Scala-based and functional, Solidity is JavaScript-like. ErgoScript offers more predictable costs and native privacy features, while Solidity has a larger ecosystem and more development tools currently available.",
    category: "technology",
  },
  {
    id: "boxes-ergoscript",
    question: 'What are "boxes" in ErgoScript?',
    answer: "Boxes are Ergo's enhanced UTXOs. Each box holds: a value (ERG or tokens), a guarding script (spending conditions), and data registers (R0-R9) for arbitrary data storage. This allows boxes to carry state and participate in complex dApp logic. Smart contracts read data from input boxes and create new output boxes with updated data, forming the basis of state transitions.",
    category: "technology",
  },
  {
    id: "sigma-protocols",
    question: "What are Sigma Protocols and how do they enhance privacy?",
    answer: "Sigma Protocols are efficient, composable zero-knowledge proofs that allow proving knowledge of secrets without revealing them. They enable: multi-signature wallets, ring signatures (for anonymity), threshold signatures, atomic swaps, and power ErgoMixer. They're deeply integrated into ErgoScript, making powerful cryptographic tools directly accessible to developers.",
    category: "technology",
  },
  {
    id: "zero-knowledge-proofs",
    question: "Does Ergo offer Zero-Knowledge Proofs?",
    answer: 'Yes, Ergo provides robust support for discrete log-based zero-knowledge proofs through Sigma Protocols. These are actively used for privacy-preserving features, complex authentication schemes, and applications like ErgoMixer. ErgoScript is described as being "based on Σ-protocols," meaning ZKP capabilities are woven into the fabric of smart contract execution.',
    category: "technology",
  },
  {
    id: "ergomixer",
    question: "What is ErgoMixer and how does it work?",
    answer: "ErgoMixer is a non-custodial, non-interactive token mixing service that enhances transaction privacy by obscuring links between sender and receiver addresses. It uses Sigma Protocols (ring signatures) to combine user transactions with others or decoys. Being non-custodial means users retain control of private keys, and non-interactive means no real-time coordination with other users is required.",
    category: "technology",
  },
  {
    id: "privacy-optional",
    question: "Is privacy on Ergo optional or mandatory?",
    answer: "Privacy on Ergo is optional, not mandatory. This allows flexibility for diverse use cases - some applications need transparency (like charities), while others require privacy. Optional privacy enables rich smart contract functionality, broader adoption, regulatory navigation, and user autonomy. Users can choose privacy tools like ErgoMixer when needed.",
    category: "technology",
  },
  {
    id: "storage-rent",
    question: 'What is "storage rent" and why does it exist?',
    answer: 'Storage rent is a fee levied on UTXOs inactive for 4+ years (approximately 0.14 ERG per typical box every 4 years). It exists to: prevent blockchain bloat by recycling "dust" and lost coins, provide long-term miner compensation beyond block rewards, and maintain network efficiency. Users can avoid it by simply moving funds before the 4-year period, resetting the timer.',
    category: "technology",
  },
  {
    id: "long-term-survivability",
    question: "How does Ergo aim for long-term survivability and self-amendability?",
    answer: "Ergo ensures survivability through: researched solutions to minimize security risks, sustainable economic model (storage rent + emission schedule), robust PoW consensus, and self-amendable protocol design. Changes require approval from miners, users, and projects through the EIP (Ergo Improvement Proposal) process, promoting organic, non-breaking development.",
    category: "technology",
  },
  {
    id: "erg-token-uses",
    question: "What is ERG and what are its uses?",
    answer: "ERG is Ergo's native cryptocurrency used for: transaction fees, smart contract execution, storage rent payments, DeFi applications (collateral, liquidity, SigmaUSD minting), potential governance participation, medium of exchange within the ecosystem, and store of value given its limited supply and PoW security.",
    category: "economics",
  },
  {
    id: "erg-tokenomics",
    question: "What are the tokenomics of ERG?",
    answer: "ERG has a fixed maximum supply of 97,739,924.5 ERG. Current circulating supply is approximately 81 million ERG (mid-2024). The Ergo Foundation received 4.43% allocation. Original block rewards were 75 ERG, now following EIP-27 schedule. Storage rent can remove small amounts from circulation, making it potentially deflationary post-emission.",
    category: "economics",
  },
  {
    id: "emission-schedule",
    question: "What is Ergo's emission schedule and how has EIP-27 changed it?",
    answer: 'Originally, emission was to complete in ~8 years (by 2027) with 75 ERG/block initially, reducing by 3 ERG every 3 months. EIP-27 (activated June 2022) extended this by redirecting rewards to a "remission contract" for gradual payout until ~2045. Current rules: if scheduled reward ≥15 ERG, 12 ERG goes to remission contract; if <15 ERG, then R-3 ERG goes to remission, miners get 3 ERG.',
    category: "economics",
  },
  {
    id: "mining-ergo",
    question: "How does mining work on Ergo? Can anyone mine ERG?",
    answer: "Yes, anyone with suitable GPU hardware can mine ERG. Ergo uses Autolykos v2 (ASIC-resistant, GPU-friendly, requires 4GB+ VRAM). Miners solve cryptographic puzzles to create blocks and earn rewards (currently following EIP-27 schedule) plus transaction fees. Mining pools are supported, and the Ergo team recommends supporting smaller pools for decentralization.",
    category: "economics",
  },
  {
    id: "notable-dapps",
    question: "What are some notable dApps and projects in the Ergo ecosystem?",
    answer: "Key projects include: ErgoMixer (privacy mixer), SigmaUSD (algorithmic stablecoin), Spectrum Finance (DEX), Oracle Pools (decentralized oracles), Rosen Bridge (cross-chain interoperability), Duckpools (lending), SigmaFi (P2P bonds), ErgoRaffle (crowdfunding), Ergo Auctions (NFT marketplace), Paideia (DAO framework), Nautilus Wallet (browser extension), and various gaming/utility projects.",
    category: "ecosystem",
  },
  {
    id: "ergo-cardano-relationship",
    question: "What is the relationship between Ergo and Cardano?",
    answer: "Ergo and Cardano share a close collaborative relationship: both use eUTXO model, reciprocal research exchange (DJED stablecoin was first implemented as SigmaUSD on Ergo), philosophical alignment on research-driven development, personnel connections (Alex Chepurnoy worked at IOHK), and complementary strengths (Ergo's PoW + privacy, Cardano's PoS + governance).",
    category: "ecosystem",
  },
  {
    id: "rosen-bridge",
    question: "What is the Rosen Bridge?",
    answer: "Rosen Bridge is a cross-chain interoperability solution connecting Ergo with Cardano, Bitcoin, Ethereum, and BSC. It utilizes Ergo's security as foundation, aims for decentralized design with guards/watchers, minimizes smart contract risk, and enables non-custodial asset transfers. It allows moving assets like ERG to other chains and vice versa for cross-chain DeFi participation.",
    category: "ecosystem",
  },
  {
    id: "ergo-vs-other-blockchains",
    question: "How does Ergo compare to Bitcoin and Ethereum?",
    answer: "vs Bitcoin: Ergo extends UTXO with smart contracts, uses ASIC-resistant mining, has advanced privacy features, and focuses on financial contracts beyond simple payments. vs Ethereum: Ergo uses eUTXO vs accounts, PoW vs PoS, ErgoScript vs Solidity, more predictable costs, native privacy tools, and research-driven development approach. Ergo targets secure financial contracts specifically.",
    category: "ecosystem",
  },
  {
    id: "buy-erg",
    question: "How can I buy Ergo (ERG)?",
    answer: "You can buy ERG through: 1) Centralized Exchanges (KuCoin, Gate.io, HTX) - register, complete KYC, buy directly with fiat or swap from USDT/BTC/ETH; 2) Crypto Wallets with built-in purchase (if supported); 3) Decentralized Exchanges like Spectrum Finance (requires existing crypto). Always use official platforms and consider transferring to self-custodial wallets for security.",
    category: "wallets",
  },
  {
    id: "recommended-wallets",
    question: "What are the recommended Ergo wallets?",
    answer: "Mobile: Ergo Mobile Wallet/Terminus (user-friendly, supports offline mode), Minotaur (multi-sig). Browser: Nautilus (most popular for dApps, privacy mode). Desktop: Satergo (full node GUI), Node Wallet (CLI). Web: SAFEW (advanced features, ErgoMixer access). Hardware: Ledger support, Paper Wallets for cold storage. Choose based on your security needs and usage patterns.",
    category: "wallets",
  },
  {
    id: "common-issues",
    question: "What are common user complaints or issues with Ergo?",
    answer: "Common issues include: transaction speeds feeling slow sometimes, wallet UX improvements needed (transaction history, in-wallet swaps), historical lack of major exchange listings, perceived marketing challenges, storage rent confusion, and some centralization concerns in early dApp versions. The community actively works on addressing these through development and education.",
    category: "troubleshooting",
  },
  {
    id: "wallet-access-issues",
    question: "What are common wallet access issues and solutions?",
    answer: 'Common issues: 1) Zero balance after restore - check derivation paths, BIP32 bug (pre-Oct 2022), verify seed phrase; 2) "User not authenticated" on iOS - often device credential changes, need seed phrase; 3) Lost seed phrase - generally unrecoverable, prevention is key; 4) Trezor errors - update software, check passphrase. Always securely backup seed phrases!',
    category: "troubleshooting",
  },
  // --- ДОБАВЛЯЮ вопросы из Background ---
  {
    id: "where-wallets-exchanges",
    question: "Where can I use Ergo? (wallets and exchanges)",
    answer: "Ergo is currently available on the following wallets and exchanges.",
    category: "general",
  },
  {
    id: "where-roadmap",
    question: "Where can I see the development roadmap?",
    answer: "The development roadmap can be seen here.",
    category: "general",
  },
  {
    id: "where-dapps",
    question: "Where can I see the list of Ergo dApps?",
    answer: 'To see the applications currently running on Ergo, check out <a href="https://sigmaverse.io" class="text-cyan-300 underline hover:text-orange-300" target="_blank" rel="noopener noreferrer">sigmaverse.io</a>.',
    category: "general",
  },
  {
    id: "where-ergonaut",
    question: "Where can I read about Ergo in simple terms?",
    answer: 'To read about Ergo from a less technical perspective, visit <a href="https://ergonaut.space" class="text-cyan-300 underline hover:text-orange-300" target="_blank" rel="noopener noreferrer">ergonaut.space</a>.',
    category: "general",
  },
  {
    id: "where-mining-info",
    question: "Where can I find mining info?",
    answer: "If you want to mine, see the Miners Handbook.",
    category: "general",
  },
  // --- Why Ergo ---
  {
    id: "why-ergo-name",
    question: "Why is it called 'Ergo'?",
    answer: '"Ergo" is a versatile term with deep roots in both Latin and Greek. In Latin, "ergo" means "therefore" or "consequently," reflecting logical consistency and efficient operation. In Greek, "ἔργον" (ergon) means "work," acknowledging the Proof-of-Work consensus mechanism. It also evokes ergonomics, emphasizing user-friendly design. The ticker ERG connects to "erg," a unit of work/energy in physics.',
    category: "general",
  },
  // --- Emission ---
  {
    id: "why-97739924",
    question: "Why 97,739,924?",
    answer: 'A pre-agreed smart contract controls emission in Ergo, so we tried to have a simple enough emission curve with the total limited supply being close to 100M (and emission to be done in 8-10 years). The max supply is simply the amount needed to create the initial genesis state: a box with proof-of-no-premine (1 ERG), Foundation treasury (4,330,791.5 ERG), Miner Reward Box with the required ERG for 2,080,800 Blocks according to the emission schedule until rewards equal 0 and storage rent and EIP-27-reemission-box takes over (93,409,132 ERG). The treasury box is protected by a vesting smart contract that ensures an initial unlocked amount and then only releases an amount of ERG that provides funds for 2.5 years (never exceeding 10% of the circulating supply). All of this results in these specific amounts. In total, this happens to be 97,739,924.5 ERG.',
    category: "economics",
  },
  // --- Foundation ---
  {
    id: "what-is-ergo-foundation",
    question: "What is the Ergo Foundation?",
    answer: 'The Ergo Foundation is a community-driven entity focused on: Promoting non-breaking development of Ergo Platform protocol; Promoting the widespread adoption and use of Ergo Platform and its native token (ERG); Developing the ecosystem around Ergo; Promoting the use of Ergo Platform and blockchain technology for social good; Supporting truly decentralised infrastructure and; Supporting privacy as a basic human right. To fund development, promotion, events, and any other activities which may advance the platform, Ergo has in place a Treasury, which will receive 4.43% of the Ergs released during emission. During the first two years post‐mainnet launch, the Treasury received 7.5 Ergs per block.',
    category: "ecosystem",
  },
  // --- Emission Schedule ---
  {
    id: "emission-schedule-simple",
    question: "What is the emission schedule?",
    answer: 'Ergo has a maximum supply of 97,739,925 Ergs, to be completed by 2045. The block reward lowers to 3ERG in 2026. You can see this emission schedule on ergo.watch',
    category: "economics",
  },
  // --- Future Plans ---
  {
    id: "future-plans-ecosystem-growth-block",
    question: "What are Ergo's future plans, especially in terms of how you grow your ecosystem?",
    answer: 'Position Ergo as a basis for unstoppable, grassroots economies, serving as a decentralized central bank digital currency (CBDC) for the people. See the roadmap. Continue to solve pain points in development. UX is a big one which will be helped hugely by sub-blocks. Hardware wallets, more courses, tutorials, guides, resources, etc appearing daily making it easier to onboard developers. Bulk of our issue is lack of T1 exchanges and professional marketing. Rosen is helping here by connecting extensive liquidity to our DeFi stack. DAOs are now live and the community can help to grow the ecosystem in a more structured and decentralised way. Sigmanauts Program: Dozens of volunteers drive Ergo forward already. We are not reliant on a centralised entity or group pushing things forward. This kind of growth is a slow-burn but cumulative.',
    category: "ecosystem",
  },
  // ... Аналогично для остальных справочных секций ...
  // ... остальные вопросы ...
];

// Удаляю вопросы, дублирующие Background:
const filteredFaqData = faqData.filter(q => ![
  "where-wallets-exchanges",
  "where-roadmap",
  "where-dapps",
  "where-ergonaut",
  "where-mining-info"
].includes(q.id));

function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="max-w-xl mx-auto mb-8 relative">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search questions or info..."
        className="w-full rounded-xl px-5 py-3 bg-neutral-900/80 text-lg text-gray-100 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-400 shadow"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">🔍</span>
    </div>
  );
}

function SectionAccordion({ sections, search }: { sections: {id: string, title: string, color?: string, questions?: any[], content?: any}[], search: string }) {
  const [open, setOpen] = useState<string | null>(sections[0]?.id || null);
  // Фильтрация по поиску: ищем по вопросам и по справочному тексту
  const filtered = sections.map(sec => {
    if (sec.questions) {
      const filteredQuestions = search.trim()
        ? sec.questions.filter(q =>
            q.question.toLowerCase().includes(search.toLowerCase()) ||
            q.answer.toLowerCase().includes(search.toLowerCase())
          )
        : sec.questions;
      return { ...sec, questions: filteredQuestions };
    } else if (sec.content) {
      const text = typeof sec.content === 'string' ? sec.content : '';
      if (!search.trim() || (text && text.toLowerCase().includes(search.toLowerCase()))) {
        return sec;
      }
      return null;
    }
    return sec;
  }).filter(Boolean);
  // Если поиск — раскрываем все секции с результатами
  const isSearching = !!search.trim();
  return (
    <div className="space-y-6">
      {filtered.map((sec, i) => {
        if (!sec) return null;
        return (
          <div key={sec.id} className={`rounded-2xl shadow-lg border border-neutral-700 bg-neutral-900/80`}> 
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center font-bold text-xl sm:text-2xl text-white focus:outline-none focus:ring`}
              onClick={() => setOpen(open === sec.id ? null : sec.id)}
              aria-expanded={open === sec.id || isSearching}
            >
              {sec.title}
              <span className={`ml-2 text-gray-400 transition-transform ${open === sec.id || isSearching ? 'rotate-90' : ''}`}>▶</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open === sec.id || isSearching ? 'py-2 px-6' : 'max-h-0 px-6'}`}
              style={{lineHeight:'1.7'}}>
              {sec.questions ? (
                sec.questions.length > 0 ? (
                  <div className="space-y-3">
                    {sec.questions.map((q: any) => (
                      <div key={q.id} className="rounded-xl bg-neutral-800/80 shadow">
                        <div className="px-5 py-4 font-semibold text-lg text-cyan-200">{q.question}</div>
                        <div className="px-5 pb-4 text-gray-200 text-base whitespace-pre-line" dangerouslySetInnerHTML={{__html: q.answer}} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 italic">No questions in this section.</div>
                )
              ) : (
                <div className="text-gray-200 text-base space-y-2 leading-relaxed" dangerouslySetInnerHTML={{__html: sec.content}} />
              )}
            </div>
          </div>
        );
      })}
      {filtered.length === 0 && (
        <div className="text-center text-gray-400 italic">No results found.</div>
      )}
    </div>
  );
}

function ScrollTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return show ? (
    <button
      onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-400 to-cyan-400 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      aria-label="Scroll to top"
    >↑</button>
  ) : null;
}

function BackgroundBlock() {
  return (
    <div className="mb-10 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-700 shadow text-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-white">Background</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Ergo is currently available on the following <span className="text-red-400">wallets</span> and <span className="text-red-400">exchanges</span>.</li>
        <li>The development roadmap can be seen <span className="text-red-400">here</span>.</li>
        <li>To see the applications currently running on Ergo, check out <span className="text-red-400">sigmaverse.io</span>.</li>
        <li>To read about Ergo from a less technical perspective, visit <span className="text-red-400">ergonaut.space</span>.</li>
        <li>If you want to mine, see the <span className="text-blue-400">Miners Handbook</span>.</li>
      </ul>
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");
  // Готовим секции: категории с вопросами + extraSections
  const allSections = [
    ...categories.map(cat => ({
      ...cat,
      questions: filteredFaqData.filter(q => q.category === cat.id),
    })),
  ];
  return (
    <div className="px-4">
      {/* Вводная секция */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Ergo FAQ</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">Find answers to the most common questions about Ergo, its technology, ecosystem, wallets, and more. Use the search or browse the sections below.</p>
      </div>
      <BackgroundBlock />
      <SearchBar value={search} onChange={setSearch} />
      <SectionAccordion sections={allSections} search={search} />
      <ScrollTopButton />
      <style>{`
        html { scroll-behavior: smooth; }
        .animate-fadein { animation: fadein 0.7s; }
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
} 