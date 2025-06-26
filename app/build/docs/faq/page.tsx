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
        q: "What is Ergo?",
        a: "Ergo is a programmable blockchain protocol engineered for the development of decentralized applications (dApps), with a pronounced emphasis on creating an efficient, secure, and accessible environment for implementing financial contracts. Launched in 2019, the platform distinctively merges the security advantages of Bitcoin's Unspent Transaction Output (UTXO) model with sophisticated cryptographic features and a potent smart contract language known as ErgoScript.",
      },
      {
        q: "What is the main goal or vision of Ergo?",
        a: "The overarching vision of Ergo is to furnish tools that promote economic freedom for ordinary individuals by offering secure, accessible, and decentralized financial instruments. This mission is supported by a commitment to creating a resilient platform engineered for long-term viability, capable of adapting to new challenges and incorporating novel ideas through its self-amendable protocol.",
      },
      {
        q: "What are the core principles of the Ergo Platform?",
        a: "Ergo operates under several core principles: Organic and Non-Breaking Development (protocol modifications undergo approval by miners, users, and projects), Open-Source and Permissive Licensing, Privacy and Trustless Environments, Community-Driven governance (Ergo Treasury benefits the community), and Focus on Long-Term Survivability through researched solutions and self-amendable protocol design.",
      },
      {
        q: "What is the Ergo Manifesto and its key ideas on privacy?",
        a: "The Ergo Manifesto, authored by co-founder Alex Chepurnoy, articulates that financial privacy is a fundamental human right. Key ideas include: privacy as a tool for survival and protection against authoritarian control, defense against financial asset seizure, recognition that regulation stability isn't guaranteed, and advocacy for non-custodial, decentralized privacy mechanisms through tools like ErgoMixer and Sigma protocols.",
      },
      {
        q: "Why is it named 'Ergo'?",
        a: "The name 'Ergo' has multifaceted meanings: In Latin, 'ergo' means 'therefore' or 'consequently,' reflecting logical consistency and efficient operation. In Greek, 'ἔργον' (ergon) means 'work,' acknowledging the Proof-of-Work consensus mechanism. It also evokes ergonomics, emphasizing user-friendly design. The ticker ERG connects to 'erg,' a unit of work/energy in physics.",
      },
      {
        q: "When was Ergo launched? Was there an ICO?",
        a: "Ergo's mainnet launched on July 1st, 2019, with initial concepts starting in 2016. Significantly, Ergo had NO ICO, pre-mine, or private sales - it was a 'fair launch' where ERG tokens were primarily obtainable through mining. The Ergo Foundation was allocated 4.43% of the total monetary base, distributed over the emission period for ecosystem development.",
      },
    ],
  },
  {
    title: "Ergo's Technology Explained",
    color: "blue-400",
    icon: Cpu,
    questions: [
      {
        q: "What consensus mechanism does Ergo use?",
        a: "Ergo employs a Proof-of-Work (PoW) consensus mechanism using the Autolykos algorithm. PoW was chosen for its 'truly fair start' for token distribution, 'highest degree of decentralisation,' being 'widely studied' and well-understood, providing 'very high-security guarantees,' and being 'friendly to light clients.'",
      },
      {
        q: "What is Autolykos and how is it different?",
        a: "Autolykos is Ergo's bespoke PoW algorithm. Version 1 was 'pool-resistant' with non-outsourceable puzzles. Version 2 (current) allows mining pools but maintains ASIC resistance and GPU-friendliness. It's memory-hard (initially ~2GB, growing over time), energy-efficient compared to SHA-256, and based on the k-sum problem. It requires GPUs with at least 4GB VRAM.",
      },
      {
        q: "What is the eUTXO model and how does it differ from Bitcoin's UTXO or Ethereum's account model?",
        a: "The Extended UTXO (eUTXO) model builds on Bitcoin's UTXO system but adds rich data and logic capabilities. Unlike Bitcoin's limited scripts or Ethereum's mutable account balances, eUTXO uses 'boxes' that can contain values, complex scripts, and arbitrary data in 'registers.' This enables sophisticated smart contracts while maintaining UTXO benefits like parallel processing and predictable costs.",
      },
      {
        q: "What are the advantages of eUTXO for Ergo?",
        a: "eUTXO provides: Enhanced Privacy (one-time objects), Scalability and Parallel Processing, better Interoperability with off-chain protocols, Transaction Cost Predictability (stable fees around 0.0011 ERG), Security and Determinism (isolated contract execution), Local Reasoning and Off-Chain Validation, and Expressive Smart Contracts on a secure foundation.",
      },
      {
        q: "What are smart contracts on Ergo?",
        a: "Smart contracts on Ergo are self-executing code that automatically enforce predefined terms. Every 'coin' (UTXO/box) is protected by an ErgoScript program specifying spending conditions. This 'contractual money' paradigm means logic is tied directly to digital assets, enabling complex financial instruments like asset-backed tokens, derivatives, escrow services, and decentralized microcredit.",
      },
      {
        q: "What is ErgoScript and what are its key features?",
        a: "ErgoScript is Ergo's smart contract language based on Scala. Key features: Security and Expressiveness for complex financial contracts, Safety by Design (intentionally not Turing-complete by default to prevent vulnerabilities), deep integration with Sigma Protocols for zero-knowledge proofs, Contextual Awareness (access to transaction and block data), and Functional Programming paradigm for more verifiable code.",
      },
      {
        q: "How does ErgoScript compare to Solidity?",
        a: "ErgoScript (Ergo/eUTXO) vs Solidity (Ethereum/Account): ErgoScript emphasizes security and expressiveness with built-in cryptographic primitives, while Solidity focuses on ease of use. ErgoScript is Scala-based and functional, Solidity is JavaScript-like. ErgoScript offers more predictable costs and native privacy features, while Solidity has a larger ecosystem and more development tools currently available.",
      },
      {
        q: "What are 'boxes' in ErgoScript?",
        a: "Boxes are Ergo's enhanced UTXOs. Each box holds: a value (ERG or tokens), a guarding script (spending conditions), and data registers (R0-R9) for arbitrary data storage. This allows boxes to carry state and participate in complex dApp logic. Smart contracts read data from input boxes and create new output boxes with updated data, forming the basis of state transitions.",
      },
      {
        q: "What are Sigma Protocols and how do they enhance privacy?",
        a: "Sigma Protocols are efficient, composable zero-knowledge proofs that allow proving knowledge of secrets without revealing them. They enable: multi-signature wallets, ring signatures (for anonymity), threshold signatures, atomic swaps, and power ErgoMixer. They're deeply integrated into ErgoScript, making powerful cryptographic tools directly accessible to developers.",
      },
      {
        q: "Does Ergo offer Zero-Knowledge Proofs?",
        a: "Yes, Ergo provides robust support for discrete log-based zero-knowledge proofs through Sigma Protocols. These are actively used for privacy-preserving features, complex authentication schemes, and applications like ErgoMixer. ErgoScript is described as being 'based on Σ-protocols,' meaning ZKP capabilities are woven into the fabric of smart contract execution.",
      },
      {
        q: "What is ErgoMixer and how does it work?",
        a: "ErgoMixer is a non-custodial, non-interactive token mixing service that enhances transaction privacy by obscuring links between sender and receiver addresses. It uses Sigma Protocols (ring signatures) to combine user transactions with others or decoys. Being non-custodial means users retain control of private keys, and non-interactive means no real-time coordination with other users is required.",
      },
      {
        q: "Is privacy on Ergo optional or mandatory?",
        a: "Privacy on Ergo is optional, not mandatory. This allows flexibility for diverse use cases - some applications need transparency (like charities), while others require privacy. Optional privacy enables rich smart contract functionality, broader adoption, regulatory navigation, and user autonomy. Users can choose privacy tools like ErgoMixer when needed.",
      },
      {
        q: "What is 'storage rent' and why does it exist?",
        a: "Storage rent is a fee levied on UTXOs inactive for 4+ years (approximately 0.14 ERG per typical box every 4 years). It exists to: prevent blockchain bloat by recycling 'dust' and lost coins, provide long-term miner compensation beyond block rewards, and maintain network efficiency. Users can avoid it by simply moving funds before the 4-year period, resetting the timer.",
      },
      {
        q: "How does Ergo aim for long-term survivability and self-amendability?",
        a: "Ergo ensures survivability through: researched solutions to minimize security risks, sustainable economic model (storage rent + emission schedule), robust PoW consensus, and self-amendable protocol design. Changes require approval from miners, users, and projects through the EIP (Ergo Improvement Proposal) process, promoting organic, non-breaking development.",
      },
    ],
  },
  {
    title: "ERG Token and Economics",
    color: "yellow-400",
    icon: Coins,
    questions: [
      {
        q: "What is ERG and what are its uses?",
        a: "ERG is Ergo's native cryptocurrency used for: transaction fees, smart contract execution, storage rent payments, DeFi applications (collateral, liquidity, SigmaUSD minting), potential governance participation, medium of exchange within the ecosystem, and store of value given its limited supply and PoW security.",
      },
      {
        q: "What are the tokenomics of ERG?",
        a: "ERG has a fixed maximum supply of 97,739,924.5 ERG. Current circulating supply is approximately 81 million ERG (mid-2024). The Ergo Foundation received 4.43% allocation. Original block rewards were 75 ERG, now following EIP-27 schedule. Storage rent can remove small amounts from circulation, making it potentially deflationary post-emission.",
      },
      {
        q: "What is Ergo's emission schedule and how has EIP-27 changed it?",
        a: "Originally, emission was to complete in ~8 years (by 2027) with 75 ERG/block initially, reducing by 3 ERG every 3 months. EIP-27 (activated June 2022) extended this by redirecting rewards to a 'remission contract' for gradual payout until ~2045. Current rules: if scheduled reward ≥15 ERG, 12 ERG goes to remission contract; if <15 ERG, then R-3 ERG goes to remission, miners get 3 ERG.",
      },
      {
        q: "How does mining work on Ergo? Can anyone mine ERG?",
        a: "Yes, anyone with suitable GPU hardware can mine ERG. Ergo uses Autolykos v2 (ASIC-resistant, GPU-friendly, requires 4GB+ VRAM). Miners solve cryptographic puzzles to create blocks and earn rewards (currently following EIP-27 schedule) plus transaction fees. Mining pools are supported, and the Ergo team recommends supporting smaller pools for decentralization.",
      },
    ],
  },
  {
    title: "The Ergo Ecosystem",
    color: "green-400",
    icon: Globe,
    questions: [
      {
        q: "What is the Ergo Foundation and its role?",
        a: "The Ergo Foundation is a community-driven, non-profit entity supporting Ergo's development and adoption. Key roles: fostering organic development, promoting open-source licensing, supporting privacy and trustless environments, community empowerment through treasury distribution, infrastructure support, education/outreach, development facilitation, grants, and exchange listings.",
      },
      {
        q: "What are some notable dApps and projects in the Ergo ecosystem?",
        a: "Key projects include: ErgoMixer (privacy mixer), SigmaUSD (algorithmic stablecoin), Spectrum Finance (DEX), Oracle Pools (decentralized oracles), Rosen Bridge (cross-chain interoperability), Duckpools (lending), SigmaFi (P2P bonds), ErgoRaffle (crowdfunding), Ergo Auctions (NFT marketplace), Paideia (DAO framework), Nautilus Wallet (browser extension), and various gaming/utility projects.",
      },
      {
        q: "What is the relationship between Ergo and Cardano?",
        a: "Ergo and Cardano share a close collaborative relationship: both use eUTXO model, reciprocal research exchange (DJED stablecoin was first implemented as SigmaUSD on Ergo), philosophical alignment on research-driven development, personnel connections (Alex Chepurnoy worked at IOHK), and complementary strengths (Ergo's PoW + privacy, Cardano's PoS + governance).",
      },
      {
        q: "What is the Rosen Bridge?",
        a: "Rosen Bridge is a cross-chain interoperability solution connecting Ergo with Cardano, Bitcoin, Ethereum, and BSC. It utilizes Ergo's security as foundation, aims for decentralized design with guards/watchers, minimizes smart contract risk, and enables non-custodial asset transfers. It allows moving assets like ERG to other chains and vice versa for cross-chain DeFi participation.",
      },
      {
        q: "How does Ergo compare to Bitcoin and Ethereum?",
        a: "vs Bitcoin: Ergo extends UTXO with smart contracts, uses ASIC-resistant mining, has advanced privacy features, and focuses on financial contracts beyond simple payments. vs Ethereum: Ergo uses eUTXO vs accounts, PoW vs PoS, ErgoScript vs Solidity, more predictable costs, native privacy tools, and research-driven development approach. Ergo targets secure financial contracts specifically.",
      },
    ],
  },
  {
    title: "Wallets and User Practicalities",
    color: "purple-400",
    icon: Wallet,
    questions: [
      {
        q: "How can I buy Ergo (ERG)?",
        a: "You can buy ERG through: 1) Centralized Exchanges (KuCoin, Gate.io, HTX) - register, complete KYC, buy directly with fiat or swap from USDT/BTC/ETH; 2) Crypto Wallets with built-in purchase (if supported); 3) Decentralized Exchanges like Spectrum Finance (requires existing crypto). Always use official platforms and consider transferring to self-custodial wallets for security.",
      },
      {
        q: "What are the recommended Ergo wallets?",
        a: "Mobile: Ergo Mobile Wallet/Terminus (user-friendly, supports offline mode), Minotaur (multi-sig). Browser: Nautilus (most popular for dApps, privacy mode). Desktop: Satergo (full node GUI), Node Wallet (CLI). Web: SAFEW (advanced features, ErgoMixer access). Hardware: Ledger support, Paper Wallets for cold storage. Choose based on your security needs and usage patterns.",
      },
    ],
  },
  {
    title: "Troubleshooting and Common Issues",
    color: "rose-400",
    icon: AlertTriangle,
    questions: [
      {
        q: "What are common user complaints or issues with Ergo?",
        a: "Common issues include: transaction speeds feeling slow sometimes, wallet UX improvements needed (transaction history, in-wallet swaps), historical lack of major exchange listings, perceived marketing challenges, storage rent confusion, and some centralization concerns in early dApp versions. The community actively works on addressing these through development and education.",
      },
      {
        q: "What are common wallet access issues and solutions?",
        a: "Common issues: 1) Zero balance after restore - check derivation paths, BIP32 bug (pre-Oct 2022), verify seed phrase; 2) 'User not authenticated' on iOS - often device credential changes, need seed phrase; 3) Lost seed phrase - generally unrecoverable, prevention is key; 4) Trezor errors - update software, check passphrase. Always securely backup seed phrases!",
      },
    ],
  },
  {
    title: "For Developers",
    color: "cyan-400",
    icon: Code,
    questions: [
      {
        q: "Is Ergo truly decentralized or does the Foundation control it?",
        a: "Ergo is architected for maximal decentralization. The Foundation supports development and grants but does not control the protocol. Major upgrades require public proposals and broad miner/community support.",
      },
      {
        q: "What makes Ergo's DeFi different from Ethereum?",
        a: "Ergo's eUTXO model enables true parallelism, predictable fees, and built-in privacy. Sigma protocols enable advanced cryptography natively. DeFi apps like SigmaUSD and Spectrum leverage these unique strengths.",
      },
      {
        q: "How do smart contracts access real-world data (oracles) on Ergo?",
        a: "Ergo supports decentralized oracle pools, which feed external data (like prices, events) into smart contracts securely and reliably.",
      },
      {
        q: "Can I create and trade NFTs on Ergo?",
        a: "Yes. Ergo supports native tokens and NFTs at the protocol level. You can mint, trade, and collect NFTs with low fees and zero risk of contract exploits.",
      },
      {
        q: "How are protocol upgrades handled?",
        a: "Changes are proposed via EIPs (Ergo Improvement Proposals), discussed openly, and only adopted with broad miner and user consensus, not by a foundation decree.",
      },
      {
        q: "Can I build privacy apps and mixers on Ergo?",
        a: "Yes. ErgoScript directly supports zero-knowledge proofs, ring signatures, and non-custodial mixers. Advanced privacy is native.",
      },
      {
        q: "How do I safely test contracts and dApps?",
        a: "Use Ergo Playground for quick experimentation, run a local node for integration testing, and deploy to the testnet for real-world simulation.",
      },
      {
        q: "What programming environments does Ergo support?",
        a: "Write contracts in ErgoScript, build dApps using TypeScript/JavaScript (Fleet SDK), JVM languages (AppKit), or Rust (Sigma-Rust).",
      },
      {
        q: "Does Ergo enable off-chain computation or Layer 2 solutions?",
        a: "Yes. The eUTXO model, stateless validation, and native oracles allow for efficient off-chain protocols and Layer 2 scaling.",
      },
      {
        q: "Where can I find developer resources and support?",
        a: "Official docs, GitHub, Discord, community forums, and regular core team office hours are all available.",
      },
    ],
  },
  {
    title: "For Investors",
    color: "emerald-400",
    icon: TrendingUp,
    questions: [
      {
        q: "What makes ERG different from other cryptocurrencies?",
        a: "ERG is a scarce, fair-launched, proof-of-work coin with optional privacy, advanced DeFi, and zero pre-mine or ICO. The ecosystem is research-driven and open-source.",
      },
      {
        q: "Is the Ergo Foundation in control of the project?",
        a: "No. The Foundation is a non-profit that funds development, but protocol changes require community and miner approval, not Foundation edict.",
      },
      {
        q: "What is ERG's maximum supply?",
        a: "Capped at 97.7 million. Emission is slow and deflationary features (storage rent, lost coins) may further reduce circulating supply over time.",
      },
      {
        q: "How can I buy and store ERG securely?",
        a: "Buy ERG on exchanges (e.g., KuCoin, Gate.io), then store in self-custody wallets like Nautilus, Ergo Mobile, or hardware wallets (Ledger, Trezor).",
      },
      {
        q: "Can I mine ERG?",
        a: "Yes. Anyone with a 4GB+ GPU can mine using the Autolykos v2 algorithm. There are multiple pools for decentralization.",
      },
      {
        q: "What gives ERG its value?",
        a: "It's used for fees, DeFi, smart contracts, NFTs, storage rent, and as a store of value. Scarce supply and innovative tech support long-term potential.",
      },
      {
        q: "Is Ergo a privacy coin?",
        a: "Privacy is optional. Use ErgoMixer for private transactions, or keep full transparency if desired. This flexibility enables broad adoption.",
      },
      {
        q: "What are the investment risks?",
        a: "Like all crypto, ERG is volatile and not immune to market swings. Not all major exchanges list ERG, and adoption is community-driven.",
      },
      {
        q: "What is storage rent and does it affect investors?",
        a: "Storage rent is a small fee charged on UTXOs inactive for over 4 years, incentivizing active usage and making ERG more deflationary.",
      },
      {
        q: "Is Ergo protected from 51% attacks?",
        a: "Autolykos is ASIC-resistant, memory-hard, and mining pools are well-distributed, making large-scale attacks highly impractical.",
      },
    ],
  },
  {
    title: "For Beginners",
    color: "amber-400",
    icon: GraduationCap,
    questions: [
      {
        q: "What is Ergo, in simple words?",
        a: "Ergo is a next-generation blockchain—like Bitcoin, but with powerful smart contracts, optional privacy, and low fees.",
      },
      {
        q: "How do I get started with Ergo?",
        a: "Download a wallet (Nautilus, Ergo Mobile), buy ERG on an exchange, and try a simple transaction. Community guides make it easy.",
      },
      {
        q: "Is it easy to send and receive ERG?",
        a: "Yes! Just use your wallet, enter the recipient address, and confirm. Fees are very low.",
      },
      {
        q: "Can I use DeFi or mint NFTs as a beginner?",
        a: "Yes. Many dApps are user-friendly and designed for newcomers. The community is helpful and active.",
      },
      {
        q: "Are my transactions private?",
        a: "By default, they are public, but you can use privacy tools like ErgoMixer for extra privacy when needed.",
      },
      {
        q: "What happens if I lose my wallet or password?",
        a: "If you lose your seed phrase, your funds are gone forever. Write it down and keep it somewhere safe.",
      },
      {
        q: "Can I earn or mine ERG?",
        a: "Yes. You can mine ERG with a GPU, or earn it through bounties, jobs, or community events.",
      },
      {
        q: "What wallets are best for beginners?",
        a: "Nautilus (browser), Ergo Mobile (iOS/Android), Satergo (desktop), or Ledger (hardware wallet).",
      },
      {
        q: "Where can I get help?",
        a: "Join the Discord, forums, or Telegram. There are guides for all levels and friendly people ready to assist.",
      },
      {
        q: "Can I create NFTs or participate in DeFi without coding?",
        a: "Absolutely. There are one-click NFT minting tools and simple DeFi platforms that don't require coding skills.",
      },
    ],
  },
  {
    title: "For Businesses",
    color: "indigo-400",
    icon: Building2,
    questions: [
      {
        q: "How can my business benefit from using Ergo?",
        a: "Ergo offers secure, low-fee transactions, programmable finance (DeFi), private settlements, and native support for NFTs and custom tokens.",
      },
      {
        q: "Can I issue my own token or stablecoin on Ergo?",
        a: "Yes. Creating custom tokens and algorithmic stablecoins (like SigmaUSD) is straightforward, with strong security and compliance features.",
      },
      {
        q: "Is there support for regulatory compliance?",
        a: "Ergo provides optional transparency and privacy, allowing you to choose the right level of compliance for your jurisdiction and business model.",
      },
      {
        q: "How scalable is Ergo for enterprise or fintech applications?",
        a: "Ergo's eUTXO model supports high throughput and parallelism, and off-chain protocols allow further scaling.",
      },
      {
        q: "Can I use Ergo for confidential data or payments?",
        a: "Yes. Sigma protocols and mixers allow for confidential settlements and data privacy, making Ergo attractive for B2B and institutional use.",
      },
      {
        q: "Is business/enterprise support available?",
        a: "The Ergo community, core developers, and service providers offer support for business integrations, audits, and custom solutions.",
      },
      {
        q: "Are there turnkey solutions for dApps or integrations?",
        a: "Yes. SDKs, API gateways, and integration partners are available for fast, robust business onboarding.",
      },
      {
        q: "Can my business participate in governance or influence roadmap?",
        a: "Yes. Any stakeholder can submit EIPs, join governance discussions, and vote through miners/community—no privileged actors.",
      },
      {
        q: "Is cross-chain interoperability supported?",
        a: "Yes. With solutions like Rosen Bridge, Ergo can interact with Cardano, Ethereum, Bitcoin, and BSC.",
      },
    ],
  },
  {
    title: "For Researchers",
    color: "violet-400",
    icon: Search,
    questions: [
      {
        q: "What are the most innovative technical features of Ergo?",
        a: "Native sigma protocols (zero-knowledge proofs), the eUTXO model, stateless validation, and fair launch economics distinguish Ergo in blockchain research.",
      },
      {
        q: "How does eUTXO compare to Bitcoin and Ethereum's models?",
        a: "eUTXO extends Bitcoin's UTXO with arbitrary data and contracts, supporting complex dApps with better parallelism and privacy than Ethereum's account model.",
      },
      {
        q: "Is there published research behind Ergo's design?",
        a: "Yes. Many design elements are based on peer-reviewed papers by Ergo's founders and contributors. Research is ongoing and open.",
      },
      {
        q: "What are Sigma protocols, and how are they used in Ergo?",
        a: "Sigma protocols are efficient zero-knowledge proofs that power private payments, ring signatures, mixers, and complex authentication, natively in the contract layer.",
      },
      {
        q: "What new directions does Ergo enable in cryptography?",
        a: "Researchers can experiment with advanced privacy, composable ZK proofs, and multi-party computation directly in production networks.",
      },
      {
        q: "Can I test new blockchain primitives on Ergo?",
        a: "Yes. Open-source, accessible dev tools and live testnets make it easy to deploy and evaluate new primitives and protocols.",
      },
      {
        q: "Where can I find data, analytics, and documentation for research?",
        a: "Explore the official docs, API endpoints, chain explorers, GitHub repos, and open research archives.",
      },
      {
        q: "Is it possible to publish or collaborate with the Ergo community?",
        a: "Absolutely. The community encourages research collaborations and regularly hosts hackathons, grant programs, and peer review.",
      },
      {
        q: "Does Ergo support oracles for research/data integration?",
        a: "Yes. You can deploy custom oracles, aggregate external data, and study incentive mechanisms for reliable data delivery.",
      },
      {
        q: "Are there unique economic experiments or DeFi protocols live on Ergo?",
        a: "Yes—algostables (SigmaUSD), non-interactive mixers, and flexible token models are all actively researched and deployed.",
      },
    ],
  },
]

function FaqAccordion({ q, a, color }: { q: string; a: string; color: string }) {
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