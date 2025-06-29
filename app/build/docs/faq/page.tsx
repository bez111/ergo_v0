"use client"

import {
  Info,
  HelpCircle,
  BookOpen,
  Cpu,
  Lock,
  Wallet,
  Users,
  BarChart2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Coins,
  Globe,
  Code,
  TrendingUp,
  GraduationCap,
  Building2,
  Search,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const colorMap: Record<string, string> = {
  "orange-400": "text-orange-400",
  "green-400": "text-green-400",
  "blue-400": "text-blue-400",
  "purple-400": "text-purple-400",
  "cyan-400": "text-cyan-400",
  "yellow-400": "text-yellow-400",
  "pink-400": "text-pink-400",
  "indigo-400": "text-indigo-400",
  "emerald-400": "text-emerald-400",
  "violet-400": "text-violet-400",
  "rose-400": "text-rose-400",
  "amber-400": "text-amber-400",
}

const faqSections = [
  {
    title: "General Questions About Ergo",
    color: "orange-400",
    icon: Info,
    questions: [
      {
        q: "What is Ergo?",        a: <>Ergo is a programmable blockchain protocol engineered for the development of decentralized applications (dApps) and secure financial contracts. Launched in 2019, it uniquely combines the security of Bitcoin's UTXO model with advanced cryptographic features and a powerful smart contract language called ErgoScript. Ergo aims to provide economic freedom for ordinary individuals through secure, accessible, and decentralized financial instruments. For a deeper dive, see our <Link href="/technology" className="text-orange-400 hover:underline">Technology Overview</Link>.</>,
      },
      {
        q: "What is the main goal or vision of Ergo?",
        a: "The overarching vision of Ergo is to furnish tools that promote economic freedom for ordinary individuals by offering secure, accessible, and decentralized financial instruments. This mission is supported by a commitment to creating a resilient platform engineered for long-term viability, capable of adapting to new challenges and incorporating novel ideas through its self-amendable protocol. This ensures Ergo can evolve without hard forks, maintaining stability and security.",
      },
      {
        q: "What are the core principles of the Ergo Platform?",
        a: "Ergo operates under several core principles: **Organic and Non-Breaking Development** (protocol modifications undergo approval by miners, users, and projects, ensuring stability), **Open-Source and Permissive Licensing**, **Privacy and Trustless Environments** (empowering users with control over their data and assets), **Community-Driven Governance** (Ergo Treasury benefits the community through decentralized decision-making), and **Focus on Long-Term Survivability** through researched solutions and a self-amendable protocol design.",
      },
      {
        q: "What is the Ergo Manifesto and its key ideas on privacy?",        a: <>The Ergo Manifesto, authored by co-founder Alex Chepurnoy, articulates that financial privacy is a fundamental human right. Key ideas include: privacy as a tool for survival and protection against authoritarian control, defense against financial asset seizure, recognition that regulation stability isn't guaranteed, and advocacy for non-custodial, decentralized privacy mechanisms through tools like ErgoMixer and Sigma protocols. For more details, see our <Link href="/technology/privacy-features" className="text-orange-400 hover:underline">Privacy Features</Link> guide.</>,
      },
      {
        q: "Why is it named 'Ergo'?",
        a: "The name 'Ergo' has multifaceted meanings: In Latin, 'ergo' means 'therefore' or 'consequently,' reflecting logical consistency and efficient operation. In Greek, 'ἔργον' (ergon) means 'work,' acknowledging the Proof-of-Work consensus mechanism. It also evokes ergonomics, emphasizing user-friendly design and accessibility. The ticker ERG connects to 'erg,' a unit of work/energy in physics, symbolizing the computational work involved in mining.",
      },
      {
        q: "When was Ergo launched? Was there an ICO?",
        a: "Ergo's mainnet launched on July 1st, 2019, with initial concepts starting in 2016. Significantly, Ergo had NO ICO, pre-mine, or private sales - it was a 'fair launch' where ERG tokens were primarily obtainable through mining. The Ergo Foundation was allocated 4.43% of the total monetary base, distributed over the emission period for ecosystem development. This fair distribution model is a core tenet of Ergo's philosophy.",
      },
    ],
  },
  {
    title: "Ergo's Technology Explained",
    color: "blue-400",
    icon: Cpu,
    questions: [
      {
        q: "What consensus mechanism does Ergo use?",        a: <>Ergo employs a Proof-of-Work (PoW) consensus mechanism using the Autolykos algorithm. PoW was chosen for its 'truly fair start' for token distribution, 'highest degree of decentralisation,' being 'widely studied' and well-understood, providing 'very high-security guarantees,' and being 'friendly to light clients.' This ensures robust security and resistance to centralization. For more details, see our <Link href="/technology/secure-pow" className="text-orange-400 hover:underline">Secure Proof-of-Work</Link> guide.</>,
      },
      {
        q: "What is Autolykos and how is it different?",        a: <>Autolykos is Ergo's bespoke PoW algorithm. Version 1 was 'pool-resistant' with non-outsourceable puzzles. Version 2 (current) allows mining pools but maintains ASIC resistance and GPU-friendliness. It's memory-hard (initially ~2GB, growing over time), energy-efficient compared to SHA-256, and based on the k-sum problem. It requires GPUs with at least 4GB VRAM. This design promotes decentralized mining and prevents the dominance of large mining farms. For more details, see our <Link href="/build/docs/mining" className="text-orange-400 hover:underline">Mining Guide</Link>.</>,
      },
      {
        q: "What is the eUTXO model and how does it differ from Bitcoin's UTXO or Ethereum's account model?",        a: <>The Extended UTXO (eUTXO) model builds on Bitcoin's UTXO system but adds rich data and logic capabilities. Unlike Bitcoin's limited scripts or Ethereum's mutable account balances, eUTXO uses 'boxes' that can contain values, complex scripts, and arbitrary data in 'registers.' This enables sophisticated smart contracts while maintaining UTXO benefits like parallel processing and predictable costs. For a detailed comparison, see our <Link href="/build/docs/eutxo" className="text-orange-400 hover:underline">eUTXO Model Guide</Link>.</>,
      },
      {
        q: "What are the advantages of eUTXO for Ergo?",
        a: "eUTXO provides: **Enhanced Privacy** (one-time objects, no global account state), **Scalability and Parallel Processing** (independent transactions can be processed concurrently), **better Interoperability** with off-chain protocols, **Transaction Cost Predictability** (stable fees around 0.0011 ERG), **Security and Determinism** (isolated contract execution, no reentrancy), **Local Reasoning and Off-Chain Validation**, and **Expressive Smart Contracts** on a secure foundation. These advantages make Ergo a robust platform for financial applications.",
      },
      {
        q: "What are smart contracts on Ergo?",        a: <>Smart contracts on Ergo are self-executing code that automatically enforce predefined terms. Every 'coin' (UTXO/box) is protected by an ErgoScript program specifying spending conditions. This 'contractual money' paradigm means logic is tied directly to digital assets, enabling complex financial instruments like asset-backed tokens, derivatives, escrow services, and decentralized microcredit. For more details, see our <Link href="/build/docs/contracts" className="text-orange-400 hover:underline">Smart Contracts Guide</Link>.</>,
      },
      {
        q: "What is ErgoScript and what are its key features?",        a: <>ErgoScript is Ergo's smart contract language based on Scala. Key features: **Security and Expressiveness** for complex financial contracts, **Safety by Design** (intentionally not Turing-complete by default to prevent vulnerabilities), deep integration with **Sigma Protocols** for zero-knowledge proofs, **Contextual Awareness** (access to transaction and block data), and **Functional Programming** paradigm for more verifiable code. For a comprehensive reference, see our <Link href="/build/docs/references/ergoscript-language" className="text-orange-400 hover:underline">ErgoScript Language Reference</Link>.</>,
      },
      {
        q: "How does ErgoScript compare to Solidity?",
        a: "**ErgoScript (Ergo/eUTXO) vs Solidity (Ethereum/Account):** ErgoScript emphasizes security and expressiveness with built-in cryptographic primitives, while Solidity focuses on ease of use. ErgoScript is Scala-based and functional, Solidity is JavaScript-like. ErgoScript offers more predictable costs and native privacy features, while Solidity has a larger ecosystem and more development tools currently available. The choice depends on the specific needs of the dApp and developer preference.",
      },
      {
        q: "What are 'boxes' in ErgoScript?",        a: <>Boxes are Ergo's enhanced UTXOs. Each box holds: a value (ERG or tokens), a guarding script (spending conditions), and data registers (R0-R9) for arbitrary data storage. This allows boxes to carry state and participate in complex dApp logic. Smart contracts read data from input boxes and create new output boxes with updated data, forming the basis of state transitions. For a detailed explanation, see our <Link href="/build/docs/eutxo" className="text-orange-400 hover:underline">eUTXO Model Guide</Link>.</>,
      },
      {
        q: "What are Sigma Protocols and how do they enhance privacy?",        a: <>Sigma Protocols are efficient, composable zero-knowledge proofs that allow proving knowledge of secrets without revealing them. They enable: multi-signature wallets, ring signatures (for anonymity), threshold signatures, atomic swaps, and power ErgoMixer. They're deeply integrated into ErgoScript, making powerful cryptographic tools directly accessible to developers. For a deeper dive, see our <Link href="/build/docs/contracts" className="text-orange-400 hover:underline">Smart Contracts Guide</Link> and <Link href="/technology/privacy-features" className="text-orange-400 hover:underline">Privacy Features</Link>.</>,
      },
      {
        q: "Does Ergo offer Zero-Knowledge Proofs?",
        a: "Yes, Ergo provides robust support for discrete log-based zero-knowledge proofs through Sigma Protocols. These are actively used for privacy-preserving features, complex authentication schemes, and applications like ErgoMixer. ErgoScript is described as being 'based on Σ-protocols,' meaning ZKP capabilities are woven into the fabric of smart contract execution. This allows for verifiable computation without revealing sensitive data.",
      },
      {
        q: "What is ErgoMixer and how does it work?",
        a: "ErgoMixer is a non-custodial, non-interactive token mixing service that enhances transaction privacy by obscuring links between sender and receiver addresses. It uses Sigma Protocols (ring signatures) to combine user transactions with others or decoys. Being non-custodial means users retain control of private keys, and non-interactive means no real-time coordination with other users is required. This provides a high degree of privacy without relying on trusted third parties.",
      },
      {
        q: "Is privacy on Ergo optional or mandatory?",
        a: "Privacy on Ergo is optional, not mandatory. This allows flexibility for diverse use cases - some applications need transparency (like charities), while others require privacy. Optional privacy enables rich smart contract functionality, broader adoption, regulatory navigation, and user autonomy. Users can choose privacy tools like ErgoMixer when needed, making it a versatile platform for various privacy requirements.",
      },
      {
        q: "What is 'storage rent' and why does it exist?",        a: <>Storage rent is a fee levied on UTXOs inactive for 4+ years (approximately 0.14 ERG per typical box every 4 years). It exists to: prevent blockchain bloat by recycling 'dust' and lost coins, provide long-term miner compensation beyond block rewards, and maintain network efficiency. Users can avoid it by simply moving funds before the 4-year period, resetting the timer. For more details, see our <Link href="/build/docs/fees" className="text-orange-400 hover:underline">Fees & Mining Guide</Link>.</>,
      },
      {
        q: "How does Ergo aim for long-term survivability and self-amendability?",
        a: "Ergo ensures survivability through: researched solutions to minimize security risks, sustainable economic model (storage rent + emission schedule), robust PoW consensus, and self-amendable protocol design. Changes are proposed via EIPs (Ergo Improvement Proposals), discussed openly, and only adopted with broad miner and user consensus, not by a foundation decree. This promotes organic, non-breaking development and long-term resilience.",
      },
    ],
  },
  {
    title: "ERG Token and Economics",
    color: "yellow-400",
    icon: Coins,
    questions: [
      {
        q: "What is ERG and what are its uses?",        a: <>ERG is Ergo's native cryptocurrency used for: transaction fees, smart contract execution, storage rent payments, DeFi applications (collateral, liquidity, SigmaUSD minting), potential governance participation, medium of exchange within the ecosystem, and store of value given its limited supply and PoW security. It's the fundamental asset powering the entire Ergo ecosystem. For more details, see our <Link href="/technology/ergoscript" className="text-orange-400 hover:underline">ErgoScript Guide</Link> and <Link href="/use/defi" className="text-orange-400 hover:underline">DeFi Guide</Link>.</>,
      },
      {
        q: "What are the tokenomics of ERG?",
        a: "ERG has a fixed maximum supply of 97,739,924.5 ERG. Current circulating supply is approximately 81 million ERG (mid-2024). The Ergo Foundation received 4.43% allocation. Original block rewards were 75 ERG, now following EIP-27 schedule. Storage rent can remove small amounts from circulation, making it potentially deflationary post-emission. This carefully designed tokenomics aims for long-term sustainability and value preservation.",
      },
      {
        q: "What is Ergo's emission schedule and how has EIP-27 changed it?",        a: <>Originally, emission was to complete in ~8 years (by 2027) with 75 ERG/block initially, reducing by 3 ERG every 3 months. EIP-27 (activated June 2022) extended this by redirecting rewards to a 'remission contract' for gradual payout until ~2045. Current rules: if scheduled reward &gt; 15 ERG, 12 ERG goes to remission contract; if &lt;15 ERG, then R-3 ERG goes to remission, miners get 3 ERG. This adjustment ensures a smoother transition to a fee-based security model. For more details, see our <Link href="/build/docs/fees" className="text-orange-400 hover:underline">Fees & Mining Guide</Link>.</>,
      },
      {
        q: "How does mining work on Ergo? Can anyone mine ERG?",        a: <>Yes, anyone with suitable GPU hardware can mine ERG. Ergo uses Autolykos v2 (ASIC-resistant, GPU-friendly, requires 4GB+ VRAM). Miners solve cryptographic puzzles to create blocks and earn rewards (currently following EIP-27 schedule) plus transaction fees. Mining pools are supported, and the Ergo team recommends supporting smaller pools for decentralization. For a comprehensive guide, see our <Link href="/build/docs/mining" className="text-orange-400 hover:underline">Mining Guide</Link>.</>,
      },
    ],
  },
  {
    title: "The Ergo Ecosystem",
    color: "green-400",
    icon: Globe,
    questions: [
      {
        q: "What is the Ergo Foundation and its role?",        a: <>The Ergo Foundation is a community-driven, non-profit entity supporting Ergo's development and adoption. Key roles: fostering organic development, promoting open-source licensing, supporting privacy and trustless environments, community empowerment through treasury distribution, infrastructure support, education/outreach, development facilitation, grants, and exchange listings. The Foundation acts as a steward for the protocol, not a central authority. For more information, see our <Link href="/ecosystem" className="text-orange-400 hover:underline">Ecosystem Overview</Link>.</>,
      },
      {
        q: "What are some notable dApps and projects in the Ergo ecosystem?",        a: <>Key projects include: **ErgoMixer** (privacy mixer), **SigmaUSD** (algorithmic stablecoin), **Spectrum Finance** (DEX), **Oracle Pools** (decentralized oracles), **Rosen Bridge** (cross-chain interoperability), **Duckpools** (lending), **SigmaFi** (P2P bonds), **ErgoRaffle** (crowdfunding), **Ergo Auctions** (NFT marketplace), **Paideia** (DAO framework), **Nautilus Wallet** (browser extension), and various gaming/utility projects. The ecosystem is constantly growing. For a comprehensive list, visit our <Link href="/ecosystem" className="text-orange-400 hover:underline">Ecosystem Directory</Link>.</>,
      },
      {
        q: "What is the relationship between Ergo and Cardano?",
        a: "Ergo and Cardano share a close collaborative relationship: both use the **eUTXO model**, engage in **reciprocal research exchange** (DJED stablecoin was first implemented as SigmaUSD on Ergo), align philosophically on **research-driven development**, have **personnel connections** (Alex Chepurnoy worked at IOHK), and possess **complementary strengths** (Ergo's PoW + privacy, Cardano's PoS + governance). This synergy aims to foster a robust multi-chain ecosystem.",
      },
      {
        q: "What is the Rosen Bridge?",
        a: "Rosen Bridge is a cross-chain interoperability solution connecting Ergo with Cardano, Bitcoin, Ethereum, and BSC. It utilizes Ergo's security as foundation, aims for decentralized design with guards/watchers, minimizes smart contract risk, and enables non-custodial asset transfers. It allows moving assets like ERG to other chains and vice versa for cross-chain DeFi participation. This is crucial for expanding Ergo's reach and liquidity.",
      },
      {
        q: "How does Ergo compare to Bitcoin and Ethereum?",
        a: "**vs Bitcoin:** Ergo extends UTXO with smart contracts, uses ASIC-resistant mining, has advanced privacy features, and focuses on financial contracts beyond simple payments. **vs Ethereum:** Ergo uses eUTXO vs accounts, PoW vs PoS, ErgoScript vs Solidity, more predictable costs, native privacy tools, and a research-driven development approach. Ergo targets secure financial contracts specifically, offering a distinct alternative in the blockchain landscape.",
      },
    ],
  },
  {
    title: "Wallets and User Practicalities",
    color: "purple-400",
    icon: Wallet,
    questions: [
      {
        q: "How can I buy Ergo (ERG)?",        a: <>You can buy ERG through: 1) Centralized Exchanges (KuCoin, Gate.io, HTX, Coinex) - register, complete KYC (or no KYC for Coinex), buy directly with fiat or swap from USDT/BTC/ETH; 2) Crypto Wallets with built-in purchase (if supported); 3) Decentralized Exchanges like Spectrum Finance (requires existing crypto). Always use official platforms and consider transferring to self-custodial wallets for security. For a comprehensive guide, see our <Link href="/use/get-erg" className="text-orange-400 hover:underline">How to Get ERG</Link> guide.</>,
      },
      {
        q: "What are the recommended Ergo wallets?",        a: <>Ergo offers a variety of secure wallets to suit different needs: **Mobile:** Ergo Mobile Wallet/Terminus (user-friendly, supports offline mode), Minotaur (multi-sig). **Browser:** Nautilus (most popular for dApps, privacy mode). **Desktop:** Satergo (full node GUI), Node Wallet (CLI). **Web:** SAFEW (advanced features, ErgoMixer access). **Hardware:** Ledger support, Paper Wallets for cold storage. Choose based on your security needs and usage patterns. For a comprehensive overview, see our <Link href="/wallet" className="text-orange-400 hover:underline">Wallet Guide</Link>.</>,
      },
    ],
  },
  {
    title: "Troubleshooting and Common Issues",
    color: "rose-400",
    icon: AlertTriangle,
    questions: [
      {
        q: "What are common user complaints or issues with Ergo?",        a: <>Common issues include: transaction speeds feeling slow sometimes (often due to network congestion or wallet sync), wallet UX improvements needed (transaction history, in-wallet swaps), historical lack of major exchange listings, perceived marketing challenges, storage rent confusion, and some centralization concerns in early dApp versions. The community actively works on addressing these through development and education. For specific troubleshooting, see our <Link href="/build/docs/setup" className="text-orange-400 hover:underline">Setup Guide</Link> or <Link href="/build/docs/node" className="text-orange-400 hover:underline">Node Guide</Link>.</>,
      },
      {
        q: "What are common wallet access issues and solutions?",
        a: "Common issues: 1) **Zero balance after restore** - check derivation paths, BIP32 bug (pre-Oct 2022), verify seed phrase; 2) **'User not authenticated' on iOS** - often device credential changes, need seed phrase; 3) **Lost seed phrase** - generally unrecoverable, prevention is key; 4) **Trezor errors** - update software, check passphrase. Always securely backup seed phrases! For detailed troubleshooting, refer to specific wallet documentation or community support channels.",
      },
    ],
  },
  {
    title: "For Developers",
    color: "cyan-400",
    icon: Code,
    questions: [
      {
        q: "Is Ergo truly decentralized or does the Foundation control it?",        a: <>Ergo is architected for maximal decentralization. The Foundation supports development and grants but does not control the protocol. Major upgrades require public proposals (EIPs) and broad miner/community support, ensuring that no single entity dictates the network's evolution. This commitment to decentralization is a core principle. For more, see our <Link href="/ecosystem" className="text-orange-400 hover:underline">Ecosystem Overview</Link>.</>,
      },
      {
        q: "What makes Ergo's DeFi different from Ethereum?",        a: <>Ergo's eUTXO model enables true parallelism, predictable fees, and built-in privacy. Sigma protocols enable advanced cryptography natively. DeFi apps like SigmaUSD and Spectrum leverage these unique strengths, offering a more secure and predictable environment for financial applications compared to Ethereum's account-based model. For more details, see our <Link href="/use/defi" className="text-orange-400 hover:underline">DeFi Guide</Link>.</>,
      },
      {
        q: "How do smart contracts access real-world data (oracles) on Ergo?",        a: <>Ergo supports decentralized oracle pools, which feed external data (like prices, events) into smart contracts securely and reliably. These oracle pools are themselves built on Ergo's eUTXO model and ErgoScript, ensuring their decentralization and security. This allows dApps to interact with real-world information without compromising trust. For more, see our <Link href="/technology/oracles" className="text-orange-400 hover:underline">Oracles Guide</Link>.</>,
      },
      {
        q: "Can I create and trade NFTs on Ergo?",        a: <>Yes. Ergo supports native tokens and NFTs at the protocol level. You can mint, trade, and collect NFTs with low fees and zero risk of contract exploits, thanks to the eUTXO model. Various NFT marketplaces and minting platforms exist within the Ergo ecosystem. For more details, see our <Link href="/build/docs/tokens" className="text-orange-400 hover:underline">Tokens & Assets Guide</Link>.</>,
      },
      {
        q: "How are protocol upgrades handled?",
        a: "Changes are proposed via EIPs (Ergo Improvement Proposals), discussed openly, and only adopted with broad miner and user consensus, not by a foundation decree. This self-amendable protocol design ensures that upgrades are organic, non-breaking, and reflect the will of the community, promoting long-term stability and decentralization.",
      },
      {
        q: "Can I build privacy apps and mixers on Ergo?",        a: <>Yes. ErgoScript directly supports zero-knowledge proofs, ring signatures, and non-custodial mixers. Advanced privacy is native to the protocol, allowing developers to build highly private applications without relying on trusted third parties. ErgoMixer is a prime example of such an application. For more details, see our <Link href="/technology/privacy-features" className="text-orange-400 hover:underline">Privacy Features</Link> guide.</>,
      },
      {
        q: "How do I safely test contracts and dApps?",        a: <>Use Ergo Playground for quick experimentation, run a local node for integration testing, and deploy to the testnet for real-world simulation. Always test thoroughly before deploying to mainnet. For detailed guidance, see our <Link href="/build/docs/testing" className="text-orange-400 hover:underline">Testing Guide</Link>.</>,
      },
      {
        q: "What programming environments does Ergo support?",        a: <>You can write contracts in ErgoScript. For building dApps, Ergo supports various SDKs: TypeScript/JavaScript (Fleet SDK) for web and frontend, JVM languages (AppKit) for backend services, and Rust (Sigma-Rust) for low-level and performance-critical components. This offers flexibility for developers with different backgrounds. For more details, see our <Link href="/build/docs/sdks" className="text-orange-400 hover:underline">Ergo SDKs Guide</Link>.</>,
      },
      {
        q: "Does Ergo enable off-chain computation or Layer 2 solutions?",
        a: "Yes. The eUTXO model, stateless validation, and native oracles allow for efficient off-chain protocols and Layer 2 scaling solutions. Ergo's design facilitates the creation of scalable dApps that can handle high transaction volumes without compromising decentralization or security.",
      },
      {
        q: "Where can I find developer resources and support?",        a: <>Official documentation (<Link href="/build/docs" className="text-orange-400 hover:underline">/build/docs</Link>), GitHub repositories, Discord, community forums, and regular core team office hours are all available. The Ergo community is very supportive of new developers. For a comprehensive list of community channels, see our <Link href="/build/docs/forums" className="text-orange-400 hover:underline">Community & Support Resources</Link>.</>,
      },
    ],
  },
  {
    title: "For Investors",
    color: "emerald-400",
    icon: TrendingUp,
    questions: [
      {
        q: "What makes ERG different from other cryptocurrencies?",        a: <>ERG is a scarce, fair-launched, proof-of-work coin with optional privacy, advanced DeFi, and zero pre-mine or ICO. The ecosystem is research-driven and open-source, focusing on long-term sustainability and real-world utility rather than hype. Its unique eUTXO model and native Sigma-protocols set it apart. For more details, see our <Link href="/technology" className="text-orange-400 hover:underline">Technology Overview</Link>.</>,
      },
      {
        q: "Is the Ergo Foundation in control of the project?",        a: <>No. The Foundation is a non-profit entity that funds development, promotes adoption, and supports the community, but it does not control the protocol. Major upgrades require public proposals (EIPs) and broad miner and user approval, ensuring decentralization and preventing single points of control. For more, see our <Link href="/ecosystem" className="text-orange-400 hover:underline">Ecosystem Overview</Link>.</>,
      },
      {
        q: "What is ERG's maximum supply?",        a: <>ERG has a fixed maximum supply of 97.7 million. The emission schedule is designed to be slow and deflationary features (like storage rent and lost coins) may further reduce the circulating supply over time, contributing to its long-term value proposition. For more details, see our <Link href="/build/docs/fees" className="text-orange-400 hover:underline">Fees & Mining Guide</Link>.</>,
      },
      {
        q: "How can I buy and store ERG securely?",        a: <>You can buy ERG on various exchanges (e.g., KuCoin, Gate.io, HTX, Coinex). After purchasing, it's highly recommended to store your ERG in self-custody wallets like Nautilus (browser extension), Ergo Mobile (iOS/Android), Satergo (desktop), or hardware wallets (Ledger, Trezor). Always remember: 'Not your keys, not your crypto.' For a comprehensive guide, see our <Link href="/use/get-erg" className="text-orange-400 hover:underline">How to Get ERG</Link> and <Link href="/wallet" className="text-orange-400 hover:underline">Wallet Guide</Link>.</>,
      },
      {
        q: "Can I mine ERG?",        a: <>Yes. Anyone with a 4GB+ GPU can mine using the Autolykos v2 algorithm. There are multiple pools for decentralization, and solo mining is also an option for those with significant hashrate. Mining contributes to the network's security and decentralization. For a comprehensive guide, see our <Link href="/build/docs/mining" className="text-orange-400 hover:underline">Mining Guide</Link>.</>,
      },
      {
        q: "What gives ERG its value?",
        a: "ERG derives its value from its utility within the Ergo ecosystem. It's used for transaction fees, DeFi applications, smart contracts, NFTs, storage rent, and as a store of value. Its scarce supply, innovative technology (eUTXO, Sigma-protocols), and strong community support contribute to its long-term potential and value proposition.",
      },
      {
        q: "Is Ergo a privacy coin?",        a: <>Privacy on Ergo is optional. By default, transactions are transparent, but users can opt for enhanced privacy using built-in tools like ErgoMixer, which leverages Sigma-protocols for non-custodial mixing. This flexibility enables broad adoption while catering to users who prioritize financial privacy. For more details, see our <Link href="/technology/privacy-features" className="text-orange-400 hover:underline">Privacy Features</Link> guide.</>,
      },
      {
        q: "What are the investment risks?",
        a: "Like all cryptocurrencies, ERG is subject to market volatility and is not immune to price swings. While Ergo has strong fundamentals, factors such as broader market trends, regulatory changes, and adoption rates can influence its value. Not all major exchanges list ERG, and its growth is primarily community-driven. Investors should conduct their own research and understand the inherent risks of cryptocurrency investments.",
      },
      {
        q: "What is storage rent and does it affect investors?",        a: <>Storage rent is a small fee charged on UTXOs (boxes) that remain inactive for over 4 years. It incentivizes active usage of the blockchain and helps prevent state bloat, making the network more efficient and decentralized. For investors, it primarily affects very old, dormant UTXOs. Active users who move their funds periodically will not be affected. It also contributes to ERG's deflationary mechanism. For more details, see our <Link href="/build/docs/fees" className="text-orange-400 hover:underline">Fees & Mining Guide</Link>.</>,
      },
      {
        q: "Is Ergo protected from 51% attacks?",        a: <>Ergo's Autolykos v2 algorithm is designed to be ASIC-resistant and memory-hard, making it economically unfeasible for a single entity to accumulate enough mining power for a 51% attack. Additionally, the distribution of mining pools is encouraged to be decentralized, further enhancing network security against such attacks. For more details, see our <Link href="/technology/secure-pow" className="text-orange-400 hover:underline">Secure Proof-of-Work</Link> guide.</>,
      },
    ],
  },
  {
    title: "For Beginners",
    color: "amber-400",
    icon: GraduationCap,
    questions: [
      {
        q: "What is Ergo, in simple words?",        a: <>Ergo is a next-generation blockchain—like Bitcoin, but with powerful smart contracts, optional privacy, and low fees. It's designed to be a secure and accessible platform for everyone to use decentralized finance and build their own applications. For a quick start, see our <Link href="/build/docs/quickstart" className="text-orange-400 hover:underline">Quickstart Guide</Link>.</>,
      },
      {
        q: "How do I get started with Ergo?",
        a: <>The easiest way to get started is to download a user-friendly wallet like Nautilus (browser extension) or Ergo Mobile (iOS/Android), acquire some ERG from an exchange, and then try a simple transaction or explore a dApp. Our community guides make it easy to navigate your first steps. See our <Link href="/build/docs/quickstart" className="text-orange-400 hover:underline">Quickstart Guide</Link> and <Link href="/use/get-erg" className="text-orange-400 hover:underline">How to Get ERG</Link>.</>,
      },
      {
        q: "Is it easy to send and receive ERG?",        a: <>Yes! Sending and receiving ERG is straightforward using any compatible Ergo wallet. Simply enter the recipient's address, the amount, and confirm the transaction. Fees are very low, making micro-transactions practical. For more details on wallets, see our <Link href="/wallet" className="text-orange-400 hover:underline">Wallet Guide</Link>.</>,
      },
      {
        q: "Can I use DeFi or mint NFTs as a beginner?",        a: <>Absolutely! Many dApps on Ergo are designed to be user-friendly and accessible to newcomers. There are one-click NFT minting tools and simple DeFi platforms that don't require coding skills. The community is also very helpful and active in guiding new users. For more, see our <Link href="/use/defi" className="text-orange-400 hover:underline">DeFi Guide</Link> and <Link href="/build/docs/tokens" className="text-orange-400 hover:underline">Tokens & Assets Guide</Link>.</>,
      },
      {
        q: "Are my transactions private?",        a: <>By default, transactions on Ergo are transparent, similar to Bitcoin. However, Ergo offers optional privacy features through tools like ErgoMixer, which leverages Sigma-protocols for non-custodial mixing. This flexibility enables broad adoption while catering to users who prioritize financial privacy. For more details, see our <Link href="/technology/privacy-features" className="text-orange-400 hover:underline">Privacy Features</Link> guide.</>,
      },
      {
        q: "What happens if I lose my wallet or password?",
        a: "If you lose your seed phrase (mnemonic), your funds are generally unrecoverable. It is crucial to write down your seed phrase and keep it in a secure, offline location. Never share it with anyone. Losing a password to an encrypted wallet file (if you have one) can also lead to loss of funds if you don't have your seed phrase. Always prioritize secure backup of your seed phrase!",
      },
      {
        q: "Can I earn or mine ERG?",
        a: <>Yes. You can mine ERG with a GPU, contributing to the network's security and earning block rewards and transaction fees. You can also earn ERG through bounties, jobs within the ecosystem, or by participating in community events and initiatives. For more details on mining, see our <Link href="/build/docs/mining" className="text-orange-400 hover:underline">Mining Guide</Link>.</>,
      },
      {
        q: "What wallets are best for beginners?",        a: <>For beginners, user-friendly options include: **Nautilus** (browser extension, great for dApp interaction), **Ergo Mobile Wallet** (iOS/Android, convenient for on-the-go use), and **Satergo** (desktop, full node GUI). Hardware wallets like Ledger offer the highest security for larger amounts. For a comprehensive overview, see our <Link href="/wallet" className="text-orange-400 hover:underline">Wallet Guide</Link>.</>,
      },
      {
        q: "Where can I get help?",        a: <>The Ergo community is very active and supportive! You can get help by joining our official Discord, forums, or Telegram groups. There are guides for all levels, and friendly people ready to assist with your questions. For a comprehensive list of community channels, see our <Link href="/build/docs/forums" className="text-orange-400 hover:underline">Community & Support Resources</Link>.</>,
      },
      {
        q: "Can I create NFTs or participate in DeFi without coding?",        a: <>Absolutely! Ergo's ecosystem includes user-friendly platforms that allow you to create NFTs and participate in DeFi without writing any code. There are one-click NFT minting tools and intuitive decentralized exchanges (DEXs) available. For more details, see our <Link href="/use/defi" className="text-orange-400 hover:underline">DeFi Guide</Link> and <Link href="/build/docs/tokens" className="text-orange-400 hover:underline">Tokens & Assets Guide</Link>.</>,
      },
    ],
  },
]

function FaqAccordion({ q, a, color }: { q: string; a: React.ReactNode; color: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-4 border-b border-neutral-700">
      <button
        className={`w-full flex justify-between items-center py-3 text-left text-lg font-semibold transition-colors ${colorMap[color]} hover:text-orange-300 focus:outline-none`}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {open && <div className="pb-4 text-gray-300 text-base whitespace-pre-line animate-fade-in">{a}</div>}
    </div>
  )
}

export default function FaqPage() {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        Ergo FAQ
      </h1>
      <p className="text-xl text-gray-400 mb-10">
        Frequently asked questions about Ergo, its technology, ecosystem, wallets, and more.
      </p>
      {faqSections.map((section) => {
        const Icon = section.icon
        return (
          <section key={section.title} className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${colorMap[section.color]}`}>
              <Icon className="w-6 h-6" /> {section.title}
            </h2>
            <div className="bg-neutral-900/60 border rounded-xl p-6 border-orange-500/20">
              {section.questions.map((item, idx) => (
                <FaqAccordion key={idx} q={item.q} a={item.a} color={section.color} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}