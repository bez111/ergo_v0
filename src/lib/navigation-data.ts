export const mainNavItems = [
  {
    title: "Build",
    href: "/agent-economy",
    description: "Build on the agent economy stack",
    children: [
      {
        title: "Agent Economy",
        href: "/agent-economy",
        description: "Why Ergo is the base layer for autonomous economic agents: credit, notes, programmable trust.",
      },
      {
        title: "Agent Payments",
        href: "/build/agent-payments",
        description: "Technical architecture: Reserve · Note · Tracker · Predicate. With Fleet SDK code examples.",
      },
      {
        title: "Demos",
        href: "/demos",
        description: "Three working flows on Ergo testnet: API call payment, credit system, community reserve.",
      },
      {
        title: "Developers",
        href: "/developers",
        description: "ErgoScript, SDKs (Fleet, AppKit, sigma-rust), patterns, playbooks, and grants.",
      },
      {
        title: "Dev Patterns",
        href: "/patterns",
        description: "Copy-paste smart contract blueprints for common Ergo development patterns.",
      },
    ],
  },
  {
    title: "Start",
    href: "/start",
    description: "Begin your journey with Ergo",
    children: [
      {
        title: "Start Here",
        href: "/start",
        description: "Get started with Ergo blockchain in 3 simple steps: download a wallet, get ERG tokens, and make your first transaction.",
      },
      {
        title: "Quick Introduction",
        href: "/start/introduction",
        description: "A brief overview of Ergo's purpose, design principles, and core advantages over other blockchains.",
      },
      {
        title: "Platform Comparison",
        href: "/start/comparison",
        description: "Compare Ergo to Bitcoin, Ethereum, Solana and other blockchains across key technical features.",
      },
      {
        title: "Onboarding Quiz",
        href: "/start/quiz",
        description: "Find your personalized path on Ergo: investor, developer, miner, NFT creator, or everyday user.",
      },
      {
        title: "Join the Community",
        href: "/start/community",
        description: "Connect with the Ergo community on Discord, Telegram, Reddit, X, and the official forum.",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Answers to common questions about Ergo for beginners and advanced users.",
      },
    ],
  },
  {
    title: "Use",
    href: "/use",
    description: "Practical guides and user how-tos",
    children: [
      {
        title: "Use Cases",
        href: "/use",
        description: "Practical use cases and patterns for payments, DeFi, NFTs, escrow, and micropayments.",
      },
      {
        title: "Get ERG",
        href: "/use/get-erg",
        description: "Buy or swap ERG tokens via exchanges, DEX platforms, and peer-to-peer options in your region.",
      },
      {
        title: "Mine ERG",
        href: "/miners",
        description: "Start mining ERG: hardware requirements, mining pools, presets, profitability, and setup guides.",
      },
      {
        title: "Earn with DeFi",
        href: "/use/defi",
        description: "Where to earn yield on Ergo: staking, farming, lending, and liquidity provider fees.",
      },
    ],
  },
  {
    title: "Ecosystem",
    href: "/ecosystem",
    description: "Projects, dashboards, and partners",
    children: [
      {
        title: "Explore dApps & Services",
        href: "/ecosystem",
        description: "One comprehensive directory of wallets, bridges, tools, and community projects.",
      },
      {
        title: "Ecosystem Map",
        href: "/ecosystem/map",
        description: "Interactive visual map of projects, teams, and infrastructure building on Ergo.",
      },
      {
        title: "Ecosystem Grants & Funding",
        href: "/ecosystem/grants",
        description: "Grants, bounties, and funding opportunities for ecosystem builders.",
      },
    ],
  },
  // Removed Build section to reduce top-level items and avoid duplication with DOCS
  {
    title: "Technology",
    href: "/technology",
    description: "Core technical concepts and innovations of Ergo",
    children: [
      {
        title: "Overview",
        href: "/technology",
        description: "The Ergo technology stack at a glance: architecture, security, and longevity."
      },
      {
        title: "eUTXO Model",
        href: "/technology/eutxo-model",
        description: "Extended UTXO model enabling deterministic, composable smart contracts without global state.",
      },
      {
        title: "ErgoScript",
        href: "/technology/ergoscript",
        description: "Expressive smart contract language with auditable spending conditions (AND/OR, ring, threshold).",
      },
      {
        title: "Secure PoW (Autolykos v2)",
        href: "/technology/secure-pow",
        description: "ASIC-resistant, GPU-friendly Proof-of-Work algorithm ensuring fair distribution.",
      },
      {
        title: "Storage Rent",
        href: "/technology/storage-rent",
        description: "Recycles forgotten blockchain state and funds miners with predictable long-term costs.",
      },
      {
        title: "NiPoPoWs",
        href: "/technology/nipopows",
        description: "Efficient light-client proofs enabling ultra-secure mobile wallet verification.",
      },
      {
        title: "Privacy Features (Σ-protocols)",
        href: "/technology/privacy-features",
        description: "Sigma protocols enabling selective disclosure with auditable, optional privacy features.",
      },
    ],
  },
  {
    title: "Learn",
    href: "/learn",
    description: "Educational resources and learning materials",
    children: [
      {
        title: "Learning Hub",
        href: "/learn",
        description: "Your starting point for mastering Ergo: guides, glossary, Q&A, playbooks, and more.",
      },
      {
        title: "Glossary",
        href: "/learn/glossary",
        description: "Definitions of key Ergo and blockchain terminology in one searchable reference.",
      },
      {
        title: "Topics",
        href: "/topics",
        description: "Curated topic hubs grouping guides, FAQs, and resources by theme.",
      },
      {
        title: "Q&A Hub",
        href: "/questions",
        description: "Community-driven questions and answers about Ergo blockchain.",
      },
      {
        title: "Playbooks",
        href: "/playbooks",
        description: "Step-by-step paths for DeFi, privacy, mining, and more.",
      },
      {
        title: "Dev Patterns",
        href: "/patterns",
        description: "Smart-contract patterns and reusable blueprints for developers.",
      },
    ],
  },
]

export type NavigationItem = (typeof mainNavItems)[0]
