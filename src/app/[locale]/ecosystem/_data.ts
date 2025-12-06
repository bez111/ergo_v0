export type EcosystemProject = {
  id: number
  slug: string
  name: string
  category: string
  status: "OPERATIONAL" | "TESTING" | "PROTOTYPE" | "NOT_OPERATING"
  description: string
  longDescription?: string // Extended SEO-optimized description (150-300 words)
  url: string
  icon?: string
  github?: string
  twitter?: string
  discord?: string
  docs?: string
  features?: string[]
  technologies?: string[]
  faq?: Array<{ question: string; answer: string }> // FAQ for key projects
  relatedTags?: string[] // Tags to match with blog posts
}

export const projects: EcosystemProject[] = [
  { 
    id: 1, 
    slug: "spectrum-finance",
    name: "Spectrum Finance", 
    category: "DEFI", 
    status: "NOT_OPERATING", 
    description: "A cutting-edge open-source decentralized exchange (DEX) operating on the Ergo and Cardano blockchains. It offers liquidity provision (LP), yield farming, and supports Babel Fees.", 
    longDescription: `Spectrum Finance was one of the first cross-chain decentralized exchanges built on the eUTXO model, operating across both Ergo and Cardano blockchains. The platform pioneered several innovations including native Babel Fees support, which allowed users to pay transaction fees in tokens other than ERG.

The DEX utilized automated market maker (AMM) pools for trustless token swaps, with liquidity providers earning fees from all trades. Yield farming features enabled additional token rewards for liquidity providers, creating incentives for deep liquidity across trading pairs.

As an open-source project, Spectrum Finance contributed significant code and research to the eUTXO DeFi ecosystem, demonstrating how complex financial applications could be built securely on this model. The protocol's smart contracts and architecture continue to serve as reference implementations for new DeFi projects.`,
    url: "https://spectrum.fi",
    github: "https://github.com/spectrum-finance",
    features: ["Decentralized Exchange", "Liquidity Pools", "Yield Farming", "Babel Fees Support", "Cross-chain Trading"],
    technologies: ["eUTXO", "ErgoScript", "Babel Fees"],
    relatedTags: ["Babel Fees", "DeFi", "eUTXO"]
  },
  { 
    id: 39,
    slug: "ergodex",
    name: "ErgoDex",
    category: "DEFI",
    status: "OPERATIONAL",
    description: "A non-custodial decentralized exchange (DEX) for Ergo and Cardano, enabling AMM and order-book trading across both ecosystems.",
    longDescription: `ErgoDex is a pioneering non-custodial decentralized exchange built on the eUTXO model, providing seamless trading between Ergo and Cardano ecosystems. Unlike traditional DEXs that rely on centralized order matching, ErgoDex leverages the unique properties of the extended UTXO model to enable trustless, atomic swaps without intermediaries.

The platform supports both Automated Market Maker (AMM) pools for passive liquidity provision and traditional order-book trading for precise price execution. This hybrid approach gives traders flexibility while maintaining the security guarantees of on-chain settlement. All trades execute directly on the blockchain, ensuring transparency and eliminating counterparty risk.

ErgoDex represents a significant advancement in cross-chain DeFi infrastructure. By building on eUTXO rather than account-based models, the exchange achieves deterministic transaction outcomes, predictable fees, and enhanced security against common smart contract vulnerabilities. Liquidity providers can earn fees from both ERG and ADA trading pairs, making it an attractive option for yield generation across multiple blockchain ecosystems.`,
    url: "https://www.ergodex.io/",
    features: [
      "Cross-chain DEX for Ergo & Cardano",
      "Non-custodial trading",
      "AMM and order-book models",
      "Liquidity provision for ERG and ADA ecosystems"
    ],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["eUTXO", "DeFi", "Smart Contracts"]
  },
  { 
    id: 2, 
    slug: "sigmausd",
    name: "SigmaUSD", 
    category: "DEFI", 
    status: "OPERATIONAL", 
    description: "The first eUTXO-based stablecoin, implementing the AgeUSD protocol. It is pegged to the US dollar and backed by ERG with a floating reserve ratio (400%-800%).", 
    longDescription: `SigmaUSD is a groundbreaking algorithmic stablecoin that pioneered the AgeUSD protocol on the Ergo blockchain. As the first stablecoin built on the extended UTXO model, it demonstrates how decentralized finance can achieve price stability without relying on centralized reserves or trusted third parties.

The protocol maintains its dollar peg through a unique dual-token mechanism: SigmaUSD (the stablecoin) and SigRSV (the reserve coin). Users mint SigmaUSD by depositing ERG as collateral, while reserve providers mint SigRSV to absorb price volatility. The system maintains a floating reserve ratio between 400% and 800%, ensuring robust overcollateralization even during market stress.

What sets SigmaUSD apart from other stablecoins is its completely decentralized design with no liquidation risk for individual users. Price data comes from Ergo's trustless Oracle Pools, eliminating dependence on centralized oracles. The entire protocol runs on smart contracts verified on-chain, with transparent reserve ratios visible to anyone. This makes SigmaUSD an ideal stable unit of account for the Ergo DeFi ecosystem, enabling predictable value storage and transactions without counterparty risk.`,
    icon: "💵", 
    url: "https://sigmausd.io/#/",
    docs: "https://docs.ergoplatform.com/uses/sigmausd/",
    features: ["Algorithmic Stablecoin", "ERG Collateralized", "Decentralized", "No Liquidation Risk"],
    technologies: ["eUTXO", "ErgoScript", "Oracle Pools"],
    relatedTags: ["Oracle Pools", "DeFi", "eUTXO", "Smart Contracts"],
    faq: [
      { question: "What is SigmaUSD?", answer: "SigmaUSD is a decentralized algorithmic stablecoin on Ergo, pegged to the US dollar and backed by ERG cryptocurrency with a reserve ratio of 400-800%." },
      { question: "How is SigmaUSD different from other stablecoins?", answer: "Unlike centralized stablecoins like USDT, SigmaUSD is fully decentralized with no single point of failure. It uses the AgeUSD protocol with overcollateralization and has no liquidation risk for users." },
      { question: "What is SigRSV?", answer: "SigRSV is the reserve coin that backs SigmaUSD. Reserve providers mint SigRSV to earn from ERG price appreciation while providing stability to the system." }
    ]
  },
  { 
    id: 3, 
    slug: "rosen-bridge",
    name: "Rosen Bridge", 
    category: "INFRASTRUCTURE", 
    status: "OPERATIONAL", 
    description: "An open-source protocol for cross-chain asset transfers between Ergo and other blockchains like Cardano, Bitcoin Runes, and Dogecoin.", 
    longDescription: `Rosen Bridge is a decentralized cross-chain protocol that enables trustless asset transfers between Ergo and multiple blockchain networks including Cardano, Bitcoin, Dogecoin, and Ethereum. Built on cutting-edge cryptographic techniques like NiPoPoWs (Non-Interactive Proofs of Proof-of-Work), Rosen Bridge eliminates the need for centralized custodians or federated multisigs.

The bridge operates through a network of independent Watchers who monitor transactions across connected chains. These Watchers use cryptographic proofs to verify cross-chain transfers without requiring trust in any single party. The protocol's security model is designed to remain robust even if a majority of Watchers are compromised, thanks to economic incentives and cryptographic guarantees built into the smart contracts.

Rosen Bridge supports wrapped assets in both directions, allowing users to bring Bitcoin, ADA, and other tokens to Ergo's DeFi ecosystem, while also enabling ERG and Ergo-native tokens to be used on other chains. The bridge's open-source architecture means anyone can run a Watcher node, contributing to network security and earning fees. This decentralized approach to cross-chain interoperability positions Rosen Bridge as critical infrastructure for the multi-chain future of DeFi.`,
    icon: "🌉", 
    url: "https://rosen.tech",
    github: "https://github.com/rosen-bridge",
    twitter: "https://x.com/RosenBridge_erg",
    docs: "https://docs.rosen.tech",
    features: ["Cross-chain Transfers", "Multi-blockchain Support", "Decentralized Watchers", "Trustless Bridge"],
    technologies: ["eUTXO", "ErgoScript", "NiPoPoWs"],
    relatedTags: ["NiPoPoW", "Cross-Chain", "Light Clients"],
    faq: [
      { question: "What is Rosen Bridge?", answer: "Rosen Bridge is a decentralized protocol for transferring assets between Ergo and other blockchains like Cardano, Bitcoin, and Ethereum without relying on centralized custodians." },
      { question: "How does Rosen Bridge work?", answer: "Rosen Bridge uses a network of Watchers who cryptographically verify cross-chain transactions. NiPoPoWs technology enables trustless verification without requiring full blockchain data." },
      { question: "What blockchains does Rosen Bridge support?", answer: "Rosen Bridge currently supports Ergo, Cardano, Bitcoin (including Runes), Dogecoin, and is expanding to additional chains." }
    ]
  },
  { 
    id: 4, 
    slug: "ergomixer",
    name: "ErgoMixer", 
    category: "PRIVACY", 
    status: "OPERATIONAL", 
    description: "The first non-interactive, non-custodial mixer in the crypto industry. It allows users to privately send tokens using Sigma-protocols for enhanced privacy.", 
    longDescription: `ErgoMixer is a pioneering privacy tool that introduced the world's first non-interactive, non-custodial token mixer. Unlike traditional mixers that require coordinated participation or trusted operators, ErgoMixer leverages Sigma Protocols to enable completely trustless transaction obfuscation.

The mixer works by pooling user transactions in a way that breaks the on-chain link between sender and recipient addresses. Users deposit tokens into mixing contracts, and after a configurable number of mixing rounds, withdraw to fresh addresses. The entire process is secured by zero-knowledge proofs built on Sigma Protocols, meaning neither the mixer operators nor blockchain observers can trace the connection between deposits and withdrawals.

ErgoMixer supports not just ERG but also native tokens issued on the Ergo blockchain, making it a comprehensive privacy solution for the entire ecosystem. The non-interactive design means users don't need to be online simultaneously with other participants. This represents a significant advancement over previous mixing implementations and demonstrates the power of Ergo's cryptographic primitives for building practical privacy applications that respect user sovereignty while remaining compliant with transparent blockchain architecture.`,
    icon: "🔀", 
    url: "https://ergomixer.io",
    github: "https://github.com/ergoMixer/ergoMixBack",
    features: ["Non-custodial Mixing", "Token Privacy", "Sigma Protocols", "Zero-knowledge Proofs"],
    technologies: ["Sigma Protocols", "ErgoScript", "Privacy Features"],
    relatedTags: ["Sigma Protocols", "Privacy", "Zero Knowledge"],
    faq: [
      { question: "What is ErgoMixer?", answer: "ErgoMixer is a decentralized, non-custodial token mixer that uses Sigma Protocols to break transaction links, providing financial privacy on the Ergo blockchain." },
      { question: "Is ErgoMixer safe to use?", answer: "Yes, ErgoMixer is non-custodial, meaning you always control your funds. The mixing process uses cryptographic proofs that mathematically guarantee privacy without trusting any third party." },
      { question: "What tokens can I mix?", answer: "ErgoMixer supports ERG and all native tokens on the Ergo blockchain, making it a comprehensive privacy solution for the ecosystem." }
    ]
  },
  { 
    id: 6, 
    slug: "nautilus-wallet",
    name: "Nautilus Wallet", 
    category: "WALLETS", 
    status: "OPERATIONAL", 
    description: "A browser extension and mobile wallet for Ergo, focused on privacy, security, and user experience. It supports Ledger, multiple wallets, and a dApp connector.", 
    longDescription: `Nautilus Wallet is the most popular wallet for the Ergo ecosystem, offering a seamless experience across browser extensions and mobile devices. Designed with privacy and security as core principles, Nautilus provides users with complete control over their ERG and native tokens while maintaining an intuitive interface suitable for both newcomers and experienced users.

The wallet integrates Ledger hardware wallet support for maximum security, allowing users to store their private keys on dedicated hardware while still enjoying the convenience of a modern wallet interface. Multiple wallet management enables easy organization of different accounts, while the built-in dApp connector provides one-click access to DeFi protocols, NFT marketplaces, and other applications in the Ergo ecosystem.

Nautilus also integrates with ErgoMixer for optional transaction privacy, demonstrating how wallets can enhance user sovereignty without compromising usability. The wallet supports all Ergo native tokens, displays NFTs, and provides real-time portfolio tracking. With its open-source codebase and active development, Nautilus Wallet represents the gold standard for cryptocurrency wallets that prioritize user control and privacy.`,
    icon: "🔒", 
    url: "https://nautilus-wallet.io",
    github: "https://github.com/capt-nemo429/nautilus-wallet",
    twitter: "https://twitter.com/ArmeanioMing",
    features: ["Browser Extension", "Mobile App", "Ledger Support", "dApp Connector", "Multi-wallet"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["Wallet", "Privacy", "DeFi"],
    faq: [
      { question: "What is Nautilus Wallet?", answer: "Nautilus is a browser extension and mobile wallet for Ergo, supporting ERG, native tokens, NFTs, Ledger hardware wallets, and connections to Ergo dApps." },
      { question: "Is Nautilus Wallet safe?", answer: "Yes, Nautilus is non-custodial and open-source. Your private keys are encrypted locally and never leave your device. Hardware wallet support adds an extra layer of security." },
      { question: "Can I use Nautilus with DeFi apps?", answer: "Yes, Nautilus has a built-in dApp connector that works with all major Ergo DeFi protocols including DEXs, lending platforms, and NFT marketplaces." }
    ]
  },
  { 
    id: 7, 
    slug: "duckpools",
    name: "DuckPools", 
    category: "DEFI", 
    status: "TESTING", 
    description: "A collateralized lending platform with algorithmic lending pools. Users provide ERG or native assets to earn income or borrow assets against ERG collateral.", 
    longDescription: `DuckPools is a decentralized lending protocol bringing traditional lending mechanics to the Ergo blockchain. The platform enables users to deposit ERG and other native assets into algorithmic lending pools to earn yield, while borrowers can access liquidity by providing overcollateralized positions.

The protocol uses Ergo's Oracle Pools for accurate, trust-minimized price feeds, ensuring that collateral ratios and liquidation thresholds remain fair and transparent. Interest rates adjust algorithmically based on pool utilization, balancing supply and demand without manual intervention. All lending logic executes through audited ErgoScript smart contracts, providing deterministic outcomes and eliminating the possibility of reentrancy attacks common in account-based systems.

DuckPools demonstrates how the eUTXO model can support complex DeFi primitives with enhanced security guarantees. Each loan is represented as a discrete UTXO with explicit state, making positions easy to audit and verify. The platform supports multiple collateral types and is designed to integrate with other Ergo DeFi protocols, enabling composable yield strategies across the ecosystem.`,
    icon: "🦆", 
    url: "https://duckpools.io",
    twitter: "https://twitter.com/DuckPools",
    features: ["Lending Pools", "Collateralized Loans", "Yield Generation", "Native Asset Support"],
    technologies: ["eUTXO", "ErgoScript", "Oracle Pools"],
    relatedTags: ["DeFi", "Oracle Pools", "eUTXO", "Smart Contracts"]
  },
  { 
    id: 8, 
    slug: "paideia",
    name: "Paideia", 
    category: "DAO", 
    status: "OPERATIONAL", 
    description: "A suite of tools for creating and managing Decentralized Autonomous Organizations (DAOs) on Ergo and Cardano with governance and treasury management.", 
    longDescription: `Paideia is a comprehensive DAO infrastructure platform that empowers communities to create and manage decentralized organizations on both Ergo and Cardano blockchains. The platform provides all essential tools for decentralized governance: proposal creation, token-weighted voting, treasury management, and staking mechanisms.

Unlike centralized governance tools, Paideia leverages smart contracts to enforce voting outcomes automatically. When a proposal passes, treasury transactions execute according to the vote without requiring trusted administrators. This eliminates the risk of governance capture or fund misappropriation that plagues many cryptocurrency projects.

The platform supports flexible governance configurations including quorum requirements, voting periods, and delegation mechanisms. DAOs can issue governance tokens, distribute them through airdrops or vesting schedules, and implement sophisticated voting schemes like quadratic voting. Paideia's multi-chain support means organizations can govern assets and activities across both Ergo and Cardano ecosystems from a unified interface.`,
    icon: "🏛️", 
    url: "https://paideia.im",
    github: "https://github.com/paideiadao",
    twitter: "https://twitter.com/PaideiaDAO",
    docs: "https://docs.paideia.im",
    features: ["DAO Creation", "Governance Tools", "Treasury Management", "Proposal Voting", "Multi-chain"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DAO", "Governance", "Smart Contracts"],
    faq: [
      { question: "What is Paideia?", answer: "Paideia is a DAO creation and management platform for Ergo and Cardano, providing tools for governance, voting, treasury management, and community coordination." },
      { question: "Can anyone create a DAO on Paideia?", answer: "Yes, Paideia is permissionless. Anyone can create a DAO, configure governance rules, issue tokens, and start managing community decisions on-chain." }
    ]
  },
  { 
    id: 9, 
    slug: "oracle-pools",
    name: "Oracle Pools", 
    category: "ORACLES", 
    status: "OPERATIONAL", 
    description: "A decentralized oracle system on Ergo that connects smart contracts with external data without needing to trust centralized sources.", 
    longDescription: `Oracle Pools is Ergo's native solution for bringing external data on-chain in a trust-minimized way. Unlike centralized oracle services, Ergo's Oracle Pools use on-chain aggregation and permissionless participation to create reliable data feeds for DeFi protocols, stablecoins, and other smart contract applications.

The system works by allowing multiple independent oracle operators to submit data points, which are then aggregated on-chain using the median or other statistical methods. This aggregation happens in transparent UTXOs, meaning anyone can verify how the final value was computed. Bad actors who submit manipulated data can be identified and their stakes slashed, creating strong economic incentives for honest behavior.

Oracle Pools power critical infrastructure across the Ergo ecosystem, including SigmaUSD's price feeds and various DeFi protocols. The permissionless design means new operators can join by staking collateral, increasing decentralization over time. Each oracle pool stores its data history on-chain in eUTXOs, providing a transparent, auditable record of price movements that applications can reference for time-weighted calculations or historical analysis.`,
    icon: "🔮", 
    url: "https://explorer.ergoplatform.com/en/oracle-pools-list",
    github: "https://github.com/ergoplatform/oracle-core",
    docs: "https://docs.ergoplatform.com/uses/oracles/",
    features: ["Decentralized Oracles", "Price Feeds", "External Data", "Trustless Design"],
    technologies: ["eUTXO", "ErgoScript", "Oracle Pools"],
    relatedTags: ["Oracle Pools", "DeFi", "Smart Contracts"],
    faq: [
      { question: "What are Oracle Pools?", answer: "Oracle Pools are Ergo's decentralized oracle solution, providing trust-minimized external data (like price feeds) to smart contracts through on-chain aggregation of multiple independent data sources." },
      { question: "How do Oracle Pools differ from Chainlink?", answer: "Oracle Pools perform aggregation on-chain rather than off-chain, making the process fully transparent and auditable. Data is stored in eUTXOs, and anyone can verify how values are computed." },
      { question: "Can I run an oracle node?", answer: "Yes, Oracle Pools are permissionless. Anyone can stake collateral and become an oracle operator, earning rewards for providing accurate data." }
    ]
  },
  { 
    id: 10, 
    slug: "ergo-explorer",
    name: "Ergo Explorer", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "The main official block explorer for Ergo. It allows users to track transactions, blocks, addresses, tokens, and view general network statistics.", 
    longDescription: `Ergo Explorer is the official blockchain explorer for the Ergo network, providing comprehensive visibility into all on-chain activity. Users can search for transactions, blocks, addresses, and tokens, with detailed views of each component of the eUTXO model.

The explorer displays real-time network statistics including hashrate, difficulty, and block times, giving users insight into network health and mining activity. Token explorers show all native assets issued on Ergo, including their distribution and transaction history. For developers, the explorer provides API access to query blockchain data programmatically.

Advanced features include mempool monitoring, rich address analytics, and the ability to decode ErgoScript contracts. The explorer integrates with Oracle Pools to display current data feeds and their history. As an open-source project, Ergo Explorer sets the standard for transparency in the ecosystem.`,
    icon: "🔍", 
    url: "https://explorer.ergoplatform.com",
    github: "https://github.com/ergoplatform/explorer-frontend",
    features: ["Block Explorer", "Transaction Tracking", "Token Info", "Network Statistics", "Address Lookup"],
    technologies: ["eUTXO"],
    relatedTags: ["eUTXO", "Tools", "Analytics"]
  },
  { 
    id: 11, 
    slug: "ergopad",
    name: "ErgoPad", 
    category: "DEFI", 
    status: "NOT_OPERATING", 
    description: "A token launch (IDO) and fundraising platform on the Ergo blockchain. It gives token holders the opportunity to participate in IDOs.", 
    longDescription: `ErgoPad was a pioneering token launch platform that facilitated Initial DEX Offerings (IDOs) for projects building on the Ergo blockchain. The platform enabled projects to raise funds from the community while giving token holders early access to promising ecosystem initiatives.

The platform operated through a staking model where users could stake ErgoPad tokens to gain allocation tiers for upcoming IDOs. Higher staking tiers provided larger allocations, creating incentives for long-term platform engagement. Multiple successful projects launched through ErgoPad, contributing to the growth of the Ergo ecosystem.

While ErgoPad is currently not operating, its infrastructure and smart contracts remain as open-source contributions to the ecosystem. The platform demonstrated how decentralized fundraising could work on Ergo, providing a template for future launchpad projects and contributing valuable code to the community.`,
    icon: "🚀", 
    url: "https://ergopad.io",
    github: "https://github.com/ergopad",
    twitter: "https://twitter.com/ErgoPad",
    features: ["Token Launch", "IDO Platform", "Staking", "Community Projects"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "Launchpad", "IDO"]
  },
  { 
    id: 13, 
    slug: "mew-finance",
    name: "Mew Finance", 
    category: "DEFI", 
    status: "OPERATIONAL", 
    description: "A decentralized finance (DeFi) platform offering a suite of financial applications including DEX, NFT marketplace, and various financial tools.", 
    longDescription: `Mew Finance is an all-in-one DeFi platform on Ergo, combining a decentralized exchange with an NFT marketplace and advanced financial tools. The platform aims to provide a comprehensive DeFi experience where users can swap tokens, provide liquidity, trade NFTs, and access various yield opportunities in a single interface.

The DEX component supports token swaps with competitive fees and slippage protection. Liquidity providers can stake assets in pools to earn trading fees and additional token rewards. The integrated NFT marketplace allows creators to mint, list, and trade digital collectibles directly on the platform.

Mew Finance demonstrates the composability possible on Ergo's eUTXO model, integrating multiple DeFi primitives into a cohesive platform while maintaining the security guarantees of deterministic smart contract execution.`,
    icon: "💎", 
    url: "https://www.mewfinance.com",
    twitter: "https://twitter.com/MewFinance",
    features: ["DEX", "NFT Marketplace", "DeFi Suite", "Token Swaps"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "NFT", "eUTXO"]
  },
  { 
    id: 14, 
    slug: "satergo",
    name: "SatErgo", 
    category: "WALLETS", 
    status: "OPERATIONAL", 
    description: "A comprehensive desktop wallet for Ergo with the option to integrate a full node to support network decentralization. Privacy-focused with offline vault.", 
    longDescription: `SatErgo is a feature-rich desktop wallet designed for power users who want maximum control over their Ergo experience. Unlike browser-based wallets, SatErgo runs as a native application on Windows, macOS, and Linux, providing enhanced security and the option to run a full Ergo node directly within the wallet.

Running a full node contributes to network decentralization by independently validating all transactions and blocks. This trustless verification means users don't rely on third-party servers to confirm their balances or broadcast transactions. The wallet's offline vault feature enables cold storage by creating and signing transactions on an air-gapped computer.

SatErgo supports all Ergo native tokens and provides detailed transaction history with UTXO-level visibility. The privacy-focused design includes options for coin selection and address management that help users maintain financial privacy. With its Java-based architecture, SatErgo offers cross-platform consistency while maintaining the security standards expected from a self-custody solution.`,
    icon: "💼", 
    url: "https://satergo.com",
    github: "https://github.com/Satergo/Satergo",
    features: ["Desktop Wallet", "Full Node Integration", "Offline Vault", "Privacy Focus"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["Wallet", "Privacy", "Full Node"]
  },
  { 
    id: 15, 
    slug: "safew",
    name: "SAFEW", 
    category: "WALLETS", 
    status: "OPERATIONAL", 
    description: "A browser extension wallet for Ergo that integrates with ErgoMixer for enhanced transaction privacy.", 
    longDescription: `SAFEW (Simple And Fast Ergo Wallet) is a privacy-focused browser extension wallet that stands out through its native integration with ErgoMixer. This integration enables users to mix their tokens directly from the wallet interface, breaking the on-chain link between transactions for enhanced financial privacy.

The wallet provides all standard features expected from a modern cryptocurrency wallet: sending and receiving ERG and native tokens, viewing transaction history, and connecting to decentralized applications through the EIP-12 dApp connector. What sets SAFEW apart is its commitment to user privacy as a first-class feature rather than an afterthought.

SAFEW's interface is designed for simplicity without sacrificing functionality. Users can manage multiple addresses, view their token balances, and initiate mixing operations with just a few clicks. The open-source codebase allows security-conscious users to verify the wallet's behavior, while the browser extension format provides convenient access to Ergo DeFi directly from the browser.`,
    icon: "🛡️", 
    url: "https://safew.org",
    github: "https://github.com/AgeUSE/SAFEW",
    features: ["Browser Extension", "ErgoMixer Integration", "Privacy Enhanced", "dApp Support"],
    technologies: ["eUTXO", "ErgoScript", "Privacy Features"],
    relatedTags: ["Wallet", "Privacy", "Sigma Protocols"]
  },
  { 
    id: 16, 
    slug: "ergowatch",
    name: "ErgoWatch", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "An analytical block explorer providing Ergo network metrics, DeFi statistics (e.g., TVL), charts, and dashboards for monitoring blockchain activity.", 
    longDescription: `ErgoWatch is a comprehensive analytics platform that provides deep insights into the Ergo blockchain ecosystem. While the official Ergo Explorer focuses on transaction and block data, ErgoWatch specializes in aggregated metrics, historical trends, and DeFi analytics that help users understand ecosystem health and growth.

The platform tracks Total Value Locked (TVL) across Ergo DeFi protocols, providing historical charts and breakdowns by protocol. Network metrics include active addresses, transaction volumes, token statistics, and mining data. Custom dashboards visualize trends over time, helping researchers and investors make data-driven decisions.

ErgoWatch's open-source architecture means the community can verify how metrics are calculated and contribute improvements. The platform indexes blockchain data into queryable databases, enabling complex analytical queries that would be impractical to run directly on-chain. For developers and analysts, ErgoWatch provides an essential window into the quantitative health of the Ergo ecosystem.`,
    icon: "🔍", 
    url: "https://ergo.watch",
    github: "https://github.com/abchrisxyz/ergowatch",
    features: ["Analytics", "DeFi Metrics", "TVL Tracking", "Network Dashboards", "Charts"],
    technologies: ["eUTXO"],
    relatedTags: ["Analytics", "DeFi", "Tools"]
  },
  { 
    id: 17, 
    slug: "cyberpixels",
    name: "CyberPixels", 
    category: "GAMING", 
    status: "TESTING", 
    description: "A gaming project featuring an open-world pixel-style game with blockchain integration (NFTs, custom tokens, in-game marketplace).", 
    longDescription: `CyberPixels (CyberVerse) is an ambitious blockchain gaming project building an open-world pixel-art game with deep Ergo integration. The game features NFT-based assets, custom tokens, and an in-game marketplace where players can trade items and resources using Ergo blockchain infrastructure.

The project leverages Ergo's native token capabilities for in-game currencies and item ownership. Each unique item exists as an NFT on the Ergo blockchain, providing true ownership and enabling players to trade assets outside the game. The eUTXO model's deterministic transactions ensure that marketplace trades execute atomically without risk of fraud.

CyberPixels represents an exploration of how blockchain technology can enhance gaming through verifiable ownership, player-driven economies, and interoperability. The pixel-art aesthetic combined with blockchain mechanics aims to create engaging gameplay while demonstrating practical applications of Ergo technology in entertainment.`,
    icon: "🎮", 
    url: "https://www.cyberversegame.io/",
    twitter: "https://twitter.com/CyberVerseGame",
    features: ["Blockchain Gaming", "NFT Integration", "In-game Marketplace", "Play-to-Earn"],
    technologies: ["eUTXO", "ErgoScript", "Native Tokens"],
    relatedTags: ["Gaming", "NFT", "Native Tokens"]
  },
  { 
    id: 18, 
    slug: "sigmafi",
    name: "SigmaFi", 
    category: "DEFI", 
    status: "PROTOTYPE", 
    description: "A suite of decentralized P2P financial contracts on Ergo, including SigmaBonds for creating P2P debt obligations.", 
    longDescription: `SigmaFi is a suite of peer-to-peer financial contracts that enable direct lending and borrowing between Ergo users without intermediary pools. The flagship product, SigmaBonds, allows users to create custom debt obligations with flexible terms negotiated directly between lender and borrower.

Unlike pooled lending protocols, SigmaFi's P2P model gives participants full control over loan terms including interest rates, duration, and collateral requirements. Lenders can specify exactly what returns they require, while borrowers can find terms that match their needs. Smart contracts enforce repayment schedules and handle collateral liquidation if necessary.

The protocol demonstrates advanced ErgoScript capabilities for implementing complex financial logic. Each bond is represented as a UTXO with embedded contract terms, creating transparent and verifiable debt instruments. SigmaFi explores how traditional finance concepts like bonds and notes can be reimagined in a trustless, decentralized context.`,
    icon: "🏦", 
    url: "https://sigmafi.app",
    github: "https://github.com/SigmaFi",
    features: ["P2P Lending", "Bond Issuance", "Decentralized Finance", "Smart Contracts"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "Smart Contracts", "eUTXO"]
  },
  { 
    id: 19, 
    slug: "ergoraffle",
    name: "ErgoRaffle", 
    category: "DEFI", 
    status: "OPERATIONAL", 
    description: "A crowdfunding service with lottery elements, allowing fundraising for projects where participants can win rewards.", 
    longDescription: `ErgoRaffle is a decentralized crowdfunding platform that combines fundraising with lottery mechanics. Projects can raise funds by selling raffle tickets, with participants receiving a chance to win prizes while supporting initiatives they believe in. The entire process runs on ErgoScript smart contracts, ensuring provable fairness and transparent fund distribution.

The platform uses Ergo's native randomness capabilities to select winners in a verifiable way. Unlike traditional lotteries where users must trust the operator, ErgoRaffle's on-chain execution means anyone can verify that winners were selected fairly. This trustless design eliminates the possibility of manipulation while reducing operational overhead.

ErgoRaffle serves as infrastructure for community fundraising, charity events, and project bootstrapping within the Ergo ecosystem. Projects can configure ticket prices, prize structures, and funding goals. When a raffle completes, smart contracts automatically distribute funds to the project and prizes to winners, creating a self-executing crowdfunding mechanism that requires no intermediaries.`,
    icon: "🎟️", 
    url: "https://ergoraffle.com",
    github: "https://github.com/ErgoRaffle",
    features: ["Crowdfunding", "Lottery System", "Provable Fairness", "Project Funding"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "Smart Contracts", "Crowdfunding"]
  },
  { 
    id: 20, 
    slug: "minotaur-wallet",
    name: "Minotaur Wallet", 
    category: "WALLETS", 
    status: "TESTING", 
    description: "A mobile wallet for Ergo with advanced features like multi-signatures, enhancing fund management security.", 
    longDescription: `Minotaur Wallet is a mobile wallet for Ergo that focuses on advanced security features, particularly multi-signature support. Multi-sig wallets require multiple parties to approve transactions, making them ideal for shared funds, organizational treasuries, and users who want additional security layers.

The wallet implements Ergo's native multi-signature capabilities through Sigma Protocols, enabling flexible signing schemes. Users can configure M-of-N signatures where any M keys from N total signers can authorize a transaction. This provides both security redundancy and collaborative fund management without trusting a single party with complete control.

Minotaur is designed for mobile use with a focus on usability. The interface guides users through creating and participating in multi-sig setups without requiring deep technical knowledge. For teams and organizations managing shared funds on Ergo, Minotaur provides essential infrastructure for secure, collaborative asset management.`,
    icon: "📱", 
    url: "https://github.com/minotaur-ergo/minotaur-wallet",
    github: "https://github.com/minotaur-ergo/minotaur-wallet",
    features: ["Mobile Wallet", "Multi-signature", "Enhanced Security", "Fund Management"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["Wallet", "Sigma Protocols", "Security"]
  },
  { 
    id: 21, 
    slug: "guapswap",
    name: "GuapSwap", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "A decentralized smart contract-based service for swapping miner profits on Ergo, allowing automatic exchange of mining rewards.", 
    longDescription: `GuapSwap is a specialized tool for Ergo miners that enables automatic conversion of mining rewards. When miners earn block rewards in ERG, GuapSwap can automatically swap a portion into other tokens according to configured preferences, helping miners manage their income without manual intervention.

The service runs through smart contracts that execute swaps based on predefined rules. Miners can configure what percentage of rewards to swap and which tokens to receive, creating automated dollar-cost averaging or diversification strategies. This reduces the friction of actively managing mining income.

GuapSwap demonstrates practical utility of smart contracts for the mining community. By automating common operations, it saves time and enables consistent execution of swap strategies regardless of market conditions. The tool complements Ergo's Autolykos mining algorithm by making reward management more accessible.`,
    icon: "⛏️", 
    url: "#",
    github: "https://github.com/GuapSwap/guapswap",
    features: ["Mining Rewards", "Auto-swap", "Profit Management", "Miner Tools"],
    technologies: ["eUTXO", "ErgoScript", "Autolykos"],
    relatedTags: ["Mining", "Autolykos", "Tools"]
  },
  { 
    id: 22, 
    slug: "dexygold",
    name: "DexyGold", 
    category: "DEFI", 
    status: "PROTOTYPE", 
    description: "An algorithmic stablecoin pegged to the price of gold (XAU/USD), utilizing seigniorage, price oracles, and excess ERG collateral.", 
    longDescription: `DexyGold is an experimental algorithmic stablecoin designed to track the price of gold (XAU/USD) using Ergo's Oracle Pools for price data. The protocol uses seigniorage mechanisms and overcollateralization to maintain its gold peg, creating a decentralized digital representation of gold value.

The design builds on lessons from SigmaUSD and other algorithmic stablecoins, adapting the approach for commodity-pegged assets. ERG serves as collateral, with the protocol minting and burning tokens to maintain price stability. Oracle Pools provide trustless gold price feeds that the smart contracts use to adjust supply.

DexyGold explores how blockchain technology can create accessible exposure to gold prices without requiring physical custody or trust in centralized issuers. The prototype demonstrates Ergo's capability for implementing sophisticated financial instruments while maintaining decentralization and transparency.`,
    icon: "🥇", 
    url: "#",
    features: ["Gold-pegged Stablecoin", "Algorithmic Design", "Oracle Integration", "ERG Collateral"],
    technologies: ["eUTXO", "ErgoScript", "Oracle Pools"],
    relatedTags: ["DeFi", "Oracle Pools", "Stablecoin"]
  },
  { 
    id: 23, 
    slug: "sigmao",
    name: "SigmaO", 
    category: "DEFI", 
    status: "PROTOTYPE", 
    description: "A platform for trading options (Call/Put, American/European) on Ergo EIP-4 tokens using an order book style.", 
    longDescription: `SigmaO is a decentralized options trading platform that brings derivatives markets to the Ergo blockchain. The protocol supports both Call and Put options with American and European exercise styles, enabling sophisticated hedging and speculation strategies for Ergo-native tokens.

Options are represented as EIP-4 tokens, making them tradeable on any Ergo marketplace. The order book model allows option writers to set their own premiums and strike prices, while buyers can select contracts that match their market views. Smart contracts handle option exercise automatically at expiration or when exercised early (for American options).

SigmaO demonstrates how complex financial derivatives can be implemented on the eUTXO model. Each option contract encodes its parameters (underlying asset, strike price, expiration, option type) directly in the token, creating self-describing financial instruments. This brings institutional-grade trading tools to the decentralized ecosystem.`,
    icon: "📈", 
    url: "https://sigmao.cc/",
    features: ["Options Trading", "Call/Put Options", "Order Book", "EIP-4 Tokens"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "Derivatives", "Trading"]
  },
  { 
    id: 24, 
    slug: "blitz-tcg",
    name: "Blitz TCG", 
    category: "GAMING", 
    status: "TESTING", 
    description: "A collectible trading card game (TCG) on the Ergo blockchain.", 
    longDescription: `Blitz TCG is a blockchain-based trading card game that combines competitive gameplay with true digital ownership through Ergo NFTs. Each card exists as a unique token on the Ergo blockchain, enabling players to truly own, trade, and collect their cards outside of any centralized platform.

The game leverages Ergo's native token standard for card issuance, with different rarity tiers and limited editions creating collectible value. Players can trade cards peer-to-peer on Ergo marketplaces, and the provable scarcity of blockchain-based cards creates genuine digital collectibles rather than revocable licenses.

Blitz TCG demonstrates how blockchain technology can enhance traditional gaming genres. The competitive trading card format benefits from verifiable ownership and scarcity, while the Ergo blockchain provides low fees and fast transactions for active trading. The project explores sustainable blockchain gaming models that respect player ownership.`,
    icon: "🃏", 
    url: "https://blitztcg.com/home",
    twitter: "https://twitter.com/BlitzTCG",
    features: ["Trading Card Game", "NFT Cards", "Competitive Play", "Collectibles"],
    technologies: ["eUTXO", "ErgoScript", "Native Tokens"],
    relatedTags: ["Gaming", "NFT", "Native Tokens"]
  },
  { 
    id: 25, 
    slug: "sigmaverse",
    name: "Sigmaverse", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "A centralized portal and directory for the Ergo dApp ecosystem, allowing developers to list applications and users to find services.", 
    longDescription: `Sigmaverse is the primary discovery platform for the Ergo ecosystem, serving as a curated directory of decentralized applications, tools, and services built on Ergo. The platform helps users navigate the growing ecosystem by categorizing projects and providing essential information about each application.

For newcomers to Ergo, Sigmaverse offers a starting point to explore available DeFi protocols, wallets, NFT platforms, and developer tools. Each listing includes descriptions, links, and categorization that helps users find relevant applications for their needs. The directory covers the full spectrum of Ergo projects from established protocols to emerging experiments.

Developers benefit from Sigmaverse as a promotional channel for their projects. Submitting a project to the directory increases visibility within the community and helps attract users and contributors. The platform serves as living documentation of Ergo's ecosystem growth, tracking the evolution from early infrastructure to a diverse application landscape.`,
    icon: "🌐", 
    url: "https://sigmaverse.io",
    features: ["dApp Directory", "Project Listings", "Ecosystem Portal", "Discovery Platform"],
    technologies: ["eUTXO"],
    relatedTags: ["Tools", "Ecosystem", "Discovery"]
  },
  { 
    id: 26, 
    slug: "ergone",
    name: "ErgOne", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "A decentralized, community-driven marketing platform for promoting Ergo and its projects using the ERGONE token and Proof-of-Commitment Protocol.", 
    longDescription: `ErgOne is a decentralized marketing platform that incentivizes community members to promote Ergo and ecosystem projects. The platform uses the ERGONE token and a novel Proof-of-Commitment Protocol to reward genuine promotional efforts while filtering out low-quality engagement.

Community members can earn ERGONE tokens by completing marketing tasks, creating content, and spreading awareness about Ergo projects. The token-based incentive system aligns individual efforts with ecosystem growth, creating a distributed marketing force that doesn't rely on centralized marketing budgets.

ErgOne demonstrates how blockchain tokens can coordinate community efforts toward shared goals. By making marketing participatory and incentive-aligned, the platform harnesses the enthusiasm of the Ergo community while providing measurable contributions to ecosystem visibility and adoption.`,
    icon: "📢", 
    url: "#",
    features: ["Marketing Platform", "Community Driven", "Token Incentives", "Project Promotion"],
    technologies: ["eUTXO", "ErgoScript", "Native Tokens"],
    relatedTags: ["Community", "Marketing", "Native Tokens"]
  },
  { 
    id: 27, 
    slug: "hodlbox",
    name: "Hodlbox", 
    category: "DEFI", 
    status: "OPERATIONAL", 
    description: "A platform encouraging long-term holding of ERG with treasure chests and various fund-locking options, rewarding users with NFTs.", 
    longDescription: `Hodlbox is a gamified savings platform that encourages long-term holding of ERG through time-locked deposits and NFT rewards. Users can lock their ERG in "treasure chests" for specified periods, receiving unique NFT rewards upon completion of their holding commitment.

The platform implements time-locks through ErgoScript smart contracts that prevent early withdrawal. This creates credible commitment to long-term holding, which some users find helpful for maintaining investment discipline. Different lock periods offer varying rewards, incentivizing longer commitments.

Hodlbox adds an entertaining layer to the serious practice of long-term investing. The treasure chest metaphor and NFT collectibles create engagement beyond pure financial mechanics. The platform demonstrates how DeFi can incorporate gamification elements while maintaining trustless execution through smart contracts.`,
    icon: "📦", 
    url: "#",
    features: ["HODL Incentives", "Fund Locking", "NFT Rewards", "Long-term Savings"],
    technologies: ["eUTXO", "ErgoScript", "Native Tokens"],
    relatedTags: ["DeFi", "NFT", "Savings"]
  },
  { 
    id: 29, 
    slug: "tokenjay",
    name: "TokenJay", 
    category: "DEFI", 
    status: "OPERATIONAL", 
    description: "A platform for P2P (peer-to-peer) token trading within the Ergo ecosystem.", 
    longDescription: `TokenJay is a peer-to-peer token trading platform that enables direct trades between Ergo users without relying on automated market makers or liquidity pools. The platform facilitates trustless exchanges where users can create and accept trade offers for ERG and any native tokens on the Ergo blockchain.

Unlike AMM-based DEXs where prices are determined by pool ratios, TokenJay allows traders to set their own prices and find counterparties willing to accept those terms. This order-book style trading can be more capital efficient for large trades and provides better price discovery for less liquid tokens that might suffer from high slippage on AMMs.

The platform leverages Ergo's eUTXO model to enable atomic swaps where both sides of a trade execute in a single transaction. This eliminates counterparty risk since trades either complete fully or not at all. TokenJay serves as essential infrastructure for Ergo's token economy, enabling price discovery and liquidity for the growing ecosystem of native assets.`,
    icon: "🔄", 
    url: "https://tokenjay.app/",
    features: ["P2P Trading", "Token Swaps", "Decentralized Exchange", "Direct Trading"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "eUTXO", "Trading"]
  },
  { 
    id: 30, 
    slug: "single-tx-swap",
    name: "Single Tx Swap", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "A tool for executing P2P (peer-to-peer) token swaps within a single transaction.", 
    longDescription: `Single Tx Swap is a utility that enables atomic token exchanges between two parties in a single Ergo transaction. This trustless mechanism ensures that either both sides of a trade execute completely or neither does, eliminating counterparty risk inherent in multi-step exchanges.

The tool leverages Ergo's eUTXO model where multiple inputs and outputs can be combined in a single transaction with complex spending conditions. Both parties' assets are consumed as inputs and redistributed as outputs according to agreed terms. The transaction only succeeds if all conditions are satisfied.

Single Tx Swap provides essential infrastructure for trustless peer-to-peer trading. Unlike escrow-based solutions that lock funds temporarily, atomic swaps complete instantly with no waiting period. This efficiency makes the tool ideal for OTC trades and direct exchanges where both parties are ready to transact.`,
    icon: "⚡", 
    url: "#",
    features: ["Atomic Swaps", "Single Transaction", "P2P Exchange", "Fast Execution"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["Trading", "eUTXO", "P2P"]
  },
  { 
    id: 31, 
    slug: "crux-finance",
    name: "Crux Finance", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "A tool for managing crypto portfolios within the Ergo ecosystem, allowing tracking of P&L, investments, and generating tax reports.", 
    longDescription: `Crux Finance is a portfolio management and analytics platform designed specifically for the Ergo ecosystem. The platform helps users track their holdings across wallets, calculate profit and loss, monitor investment performance, and generate reports for tax compliance.

By connecting wallet addresses, users can view aggregated portfolio values, historical performance charts, and detailed breakdowns by token. The platform tracks transactions automatically, calculating cost basis and realized gains for tax reporting purposes. This automation saves significant time compared to manual tracking, especially for active traders and DeFi participants.

Crux Finance integrates with Ergo DeFi protocols to provide comprehensive views of user positions including LP tokens, staking rewards, and lending positions. The platform's understanding of Ergo-specific protocols means it can accurately value complex DeFi positions. For users who need to report cryptocurrency gains, Crux Finance provides exportable reports compatible with common tax software formats.`,
    icon: "📊", 
    url: "https://cruxfinance.io/",
    twitter: "https://twitter.com/CruxFinance",
    features: ["Portfolio Tracking", "P&L Analysis", "Tax Reports", "Investment Management"],
    technologies: ["eUTXO"],
    relatedTags: ["Analytics", "DeFi", "Tools"]
  },
  { 
    id: 32, 
    slug: "fleet-sdk",
    name: "Fleet SDK", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "A JavaScript library designed to simplify the creation and signing of transactions on the Ergo blockchain in web applications and Node.js.", 
    longDescription: `Fleet SDK is the premier JavaScript/TypeScript library for building Ergo applications. Designed for both browser and Node.js environments, Fleet provides developers with intuitive APIs for constructing transactions, interacting with smart contracts, and integrating Ergo functionality into web applications.

The SDK abstracts the complexity of the eUTXO model, offering high-level builders for common transaction patterns while still exposing low-level primitives for advanced use cases. Developers can create multi-asset transactions, interact with dApps, and sign transactions using various wallet integrations. TypeScript support provides excellent IDE integration and compile-time type checking.

Fleet powers many Ergo web applications and dApps, serving as foundational infrastructure for frontend development. The library integrates seamlessly with popular wallet connectors like Nautilus and includes utilities for address validation, token handling, and box selection. Comprehensive documentation and active maintenance make Fleet the recommended choice for JavaScript developers building on Ergo.`,
    icon: "⚙️", 
    url: "https://github.com/fleet-sdk/fleet",
    github: "https://github.com/fleet-sdk/fleet",
    docs: "https://fleet-sdk.github.io/docs/",
    features: ["JavaScript SDK", "Transaction Building", "Web Integration", "Node.js Support"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["Developer Tools", "SDK", "Smart Contracts"]
  },
  { 
    id: 33, 
    slug: "appkit",
    name: "AppKit", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "The primary Software Development Kit (SDK) for developing applications on Ergo using JVM-based programming languages.", 
    longDescription: `AppKit is Ergo's official SDK for JVM-based development, providing Scala and Java developers with comprehensive tools for building Ergo applications. As the most mature Ergo development kit, AppKit offers direct access to core protocol functionality and serves as the reference implementation for Ergo development patterns.

The SDK enables developers to construct and sign transactions, compile ErgoScript contracts, interact with the Ergo node API, and work with cryptographic primitives. AppKit's Scala-first design provides elegant functional APIs that mirror the mathematical foundations of the eUTXO model, while Java compatibility ensures broad accessibility.

AppKit is particularly powerful for backend services, off-chain bots, and applications requiring deep integration with ErgoScript. The SDK includes tools for contract compilation, box selection algorithms, and transaction chaining. Many core Ergo infrastructure projects and DeFi protocols are built using AppKit, making it essential knowledge for serious Ergo developers.`,
    icon: "🔧", 
    url: "https://github.com/ergoplatform/ergo-appkit",
    github: "https://github.com/ergoplatform/ergo-appkit",
    docs: "https://docs.ergoplatform.com/dev/stack/appkit/",
    features: ["JVM SDK", "Scala/Java Support", "Smart Contract Development", "Official SDK"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["Developer Tools", "SDK", "ErgoScript"]
  },
  { 
    id: 34, 
    slug: "sigma-rust",
    name: "SigmaRust", 
    category: "TOOLS", 
    status: "OPERATIONAL", 
    description: "An implementation of the ErgoTree interpreter in Rust, providing tools for working with transactions and bindings for various languages.", 
    longDescription: `SigmaRust is a Rust implementation of the ErgoTree interpreter and Ergo protocol primitives. This high-performance library enables Ergo development in Rust while also providing bindings to other languages including JavaScript/WASM, Python, and C, making it foundational infrastructure for the multi-language Ergo development ecosystem.

The library implements ErgoTree evaluation, transaction validation, and Sigma protocol verification in pure Rust. Its WASM compilation target powers JavaScript applications that need to verify or construct Ergo transactions in the browser. This enables fully client-side transaction signing and contract interaction without server dependencies.

SigmaRust's language bindings mean developers can use familiar languages while benefiting from Rust's performance and safety guarantees. The Python bindings enable rapid prototyping and data analysis, while the C bindings allow integration with virtually any programming language. SigmaRust represents critical infrastructure that expands Ergo development beyond JVM languages to the broader developer ecosystem.`,
    icon: "🦀", 
    url: "https://github.com/ergoplatform/sigma-rust",
    github: "https://github.com/ergoplatform/sigma-rust",
    docs: "https://docs.rs/sigma-rust/",
    features: ["Rust Implementation", "ErgoTree Interpreter", "Multi-language Bindings", "WASM Support"],
    technologies: ["eUTXO", "ErgoScript", "Sigma Protocols"],
    relatedTags: ["Developer Tools", "SDK", "Sigma Protocols"]
  },
  { 
    id: 35, 
    slug: "gluon",
    name: "Gluon", 
    category: "DEFI", 
    status: "PROTOTYPE", 
    description: "A protocol developed to strengthen (harden) existing stablecoins in the Ergo ecosystem, such as SigmaUSD.", 
    longDescription: `Gluon is a protocol designed to enhance the stability and resilience of existing stablecoins like SigmaUSD. The project explores mechanisms for "hardening" algorithmic stablecoins against extreme market conditions and edge cases that can threaten peg stability.

The protocol investigates additional stability mechanisms that complement the AgeUSD design, potentially including enhanced liquidation processes, additional collateral types, or integration with other DeFi primitives. By strengthening the foundation of Ergo stablecoins, Gluon aims to increase user confidence and enable broader adoption.

Gluon represents ongoing research into sustainable stablecoin design on eUTXO blockchains. The project contributes to the ecosystem's understanding of decentralized monetary policy and helps identify improvements that can be incorporated into future versions of stablecoin protocols.`,
    icon: "🔬", 
    url: "https://gluon.gold/",
    features: ["Stablecoin Enhancement", "Protocol Hardening", "DeFi Infrastructure", "Stability Mechanism"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "Stablecoin", "Research"]
  },
  { 
    id: 36, 
    slug: "chaincash",
    name: "ChainCash", 
    category: "TOOLS", 
    status: "PROTOTYPE", 
    description: "A framework for creating decentralized P2P monetary systems on Ergo, allowing users to issue their own currencies backed by trust or collateral.", 
    longDescription: `ChainCash is an experimental framework for creating peer-to-peer monetary systems on Ergo. The project enables users to issue their own currencies backed by either trust relationships or collateral, exploring alternative approaches to money creation and value transfer.

The framework draws inspiration from historical monetary systems and modern concepts like local exchange trading systems (LETS). Users can create currencies backed by their reputation within a community or by depositing collateral. This enables experimentation with different monetary models including mutual credit, time banking, and community currencies.

Developed by Ergo core developer kushti, ChainCash represents cutting-edge research into programmable money. The project demonstrates how blockchain technology can support diverse monetary experiments while maintaining transparency and preventing fraud. It contributes to Ergo's broader mission of financial innovation and inclusion.`,
    icon: "💰", 
    url: "#",
    github: "https://github.com/kushti/chaincash",
    features: ["P2P Money", "Custom Currencies", "Trust-based Backing", "Monetary Framework"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["Research", "Smart Contracts", "Monetary Innovation"]
  },
  { 
    id: 37, 
    slug: "sigrsv",
    name: "SigRSV", 
    category: "DEFI", 
    status: "OPERATIONAL", 
    description: "The reserve coin for the SigmaUSD stablecoin protocol. Users mint SigRSV by depositing ERG into reserves and can profit from ERG price increases.", 
    longDescription: `SigRSV is the reserve token of the SigmaUSD stablecoin protocol, representing a leveraged long position on ERG. When users mint SigRSV, they deposit ERG into the reserve, absorbing price volatility to keep SigmaUSD stable while gaining exposure to ERG price appreciation.

The reserve coin mechanism is elegant: when ERG price rises, the reserve becomes overcollateralized and SigRSV holders can redeem more ERG than they deposited. Conversely, when ERG price falls, SigRSV absorbs losses to maintain SigmaUSD's peg. This creates a market-driven stability mechanism without requiring liquidations or complex oracle manipulation.

SigRSV is attractive for users who are bullish on ERG and want leveraged exposure while contributing to ecosystem stability. The protocol enforces reserve ratio limits (400-800%) that prevent both excessive leverage and under-collateralization. Minting and redemption occur through smart contracts using Oracle Pool price feeds, making the entire process transparent and trustless.`,
    icon: "🏛️", 
    url: "#",
    docs: "https://docs.ergoplatform.com/uses/sigmausd/",
    relatedTags: ["DeFi", "Oracle Pools", "eUTXO"],
    features: ["Reserve Coin", "ERG Exposure", "SigmaUSD Backing", "Yield Potential"],
    technologies: ["eUTXO", "ErgoScript", "Oracle Pools"]
  },
  { 
    id: 38, 
    slug: "exle",
    name: "EXLE", 
    category: "DEFI", 
    status: "TESTING", 
    description: "A lending/borrowing protocol within the Ergo ecosystem, integrated with Crux Finance.", 
    longDescription: `EXLE is a decentralized lending and borrowing protocol being developed for the Ergo ecosystem. The protocol aims to enable users to lend their assets to earn yield or borrow against collateral, expanding DeFi capabilities on the eUTXO model.

The project integrates with Crux Finance for portfolio tracking and analytics, allowing users to monitor their lending positions alongside other Ergo investments. This integration demonstrates the composability possible within the Ergo DeFi ecosystem, where multiple protocols can work together to provide comprehensive financial services.

EXLE represents ongoing innovation in Ergo DeFi, exploring how traditional lending primitives can be adapted to the eUTXO architecture. The protocol's development contributes to Ergo's goal of providing a full suite of decentralized financial tools while maintaining the security and predictability benefits of the extended UTXO model.`,
    icon: "🏪", 
    url: "#",
    features: ["Lending Protocol", "Borrowing", "DeFi Integration", "Crux Finance Integration"],
    technologies: ["eUTXO", "ErgoScript"],
    relatedTags: ["DeFi", "eUTXO", "Smart Contracts"]
  },
]

export const featuredProjects: EcosystemProject[] = [
  projects.find(p => p.slug === "rosen-bridge")!,
  projects.find(p => p.slug === "mew-finance")!,
  projects.find(p => p.slug === "duckpools")!,
  projects.find(p => p.slug === "sigmausd")!,
  projects.find(p => p.slug === "paideia")!,
  projects.find(p => p.slug === "ergoraffle")!,
].filter(Boolean)

export const categoryOrder: string[] = [
  "DEFI",
  "INFRASTRUCTURE",
  "ORACLES",
  "PRIVACY",
  "NFT",
  "WALLETS",
  "DAO",
  "GAMING",
  "TOOLS",
]

export const statusOrder: Array<EcosystemProject["status"]> = ["OPERATIONAL", "TESTING", "PROTOTYPE", "NOT_OPERATING"]

export const categoryNameOrder: Record<string, string[]> = {
  DEFI: [
    "ErgoDex",
    "SigmaUSD",
    "DuckPools",
    "Mew Finance",
    "SigmaFi",
    "TokenJay",
    "ErgoRaffle",
    "Hodlbox",
    "SigRSV",
    "DexyGold",
    "EXLE",
    "Gluon",
    "Spectrum Finance",
    "ErgoPad",
  ],
  INFRASTRUCTURE: ["Rosen Bridge"],
  ORACLES: ["Oracle Pools"],
  PRIVACY: ["ErgoMixer"],
  NFT: [],
  WALLETS: ["Nautilus Wallet", "SatErgo", "SAFEW", "Minotaur Wallet"],
  DAO: ["Paideia"],
  GAMING: ["CyberPixels", "Blitz TCG"],
  TOOLS: [
    "Ergo Explorer",
    "ErgoWatch",
    "GuapSwap",
    "Sigmaverse",
    "ErgOne",
    "Single Tx Swap",
    "Crux Finance",
    "Fleet SDK",
    "AppKit",
    "SigmaRust",
    "ChainCash",
  ],
}

export const categoryLabels: Record<string, string> = {
  DEFI: "DeFi",
  INFRASTRUCTURE: "Infrastructure",
  ORACLES: "Oracles",
  PRIVACY: "Privacy",
  NFT: "NFT",
  WALLETS: "Wallets",
  DAO: "DAO",
  GAMING: "Gaming",
  TOOLS: "Developer Tools",
}

export function getProjectBySlug(slug: string): EcosystemProject | undefined {
  return projects.find(p => p.slug === slug)
}

export function getRelatedProjects(project: EcosystemProject, limit = 4): EcosystemProject[] {
  return projects
    .filter(p => p.slug !== project.slug && p.category === project.category)
    .slice(0, limit)
}

export function sortProjectsForListing(input: EcosystemProject[]): EcosystemProject[] {
  const sorted = [...input].sort((a, b) => {
    // Pinned projects always go first in this exact order
    const pinnedSlugs = ["rosen-bridge", "ergodex"]
    const pinnedA = pinnedSlugs.indexOf(a.slug)
    const pinnedB = pinnedSlugs.indexOf(b.slug)
    if (pinnedA !== -1 || pinnedB !== -1) {
      if (pinnedA === -1) return 1
      if (pinnedB === -1) return -1
      if (pinnedA !== pinnedB) return pinnedA - pinnedB
    }

    // First, sort by status priority: OPERATIONAL -> TESTING -> PROTOTYPE -> NOT_OPERATING
    const statA = statusOrder.indexOf(a.status)
    const statB = statusOrder.indexOf(b.status)
    if (statA !== statB) return statA - statB

    // Within the same status, sort by category
    const catA = categoryOrder.indexOf(a.category)
    const catB = categoryOrder.indexOf(b.category)
    if (catA !== catB) return catA - catB

    // Within the same category, use manual name order if defined
    const orderForCat = categoryNameOrder[a.category] || []
    const idxA = orderForCat.indexOf(a.name)
    const idxB = orderForCat.indexOf(b.name)
    if (idxA !== -1 || idxB !== -1) {
      if (idxA === -1) return 1
      if (idxB === -1) return -1
      if (idxA !== idxB) return idxA - idxB
    }

    return a.name.localeCompare(b.name)
  })
  return sorted
}

// Technology to blog tag mapping for finding related articles
export const techToBlogTagMapping: Record<string, string[]> = {
  "eUTXO": ["eUTXO", "Smart Contracts"],
  "ErgoScript": ["ErgoScript", "Smart Contracts", "Ergo Developers"],
  "Sigma Protocols": ["Sigma Protocols", "Privacy", "Zero Knowledge"],
  "Oracle Pools": ["Oracle Pools", "Decentralized Oracles", "DeFi Oracles"],
  "Privacy Features": ["Privacy", "Zero Knowledge", "Sigma Protocols"],
  "Native Tokens": ["Native Tokens"],
  "NiPoPoWs": ["NiPoPoW", "Light Clients", "Cross-Chain Bridges"],
  "Babel Fees": ["Babel Fees", "Gas Abstraction"],
  "Autolykos": ["Autolykos", "Proof-of-Work", "GPU mining Ergo"],
}
