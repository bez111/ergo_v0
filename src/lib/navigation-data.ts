export const mainNavItems = [
  {
    title: "Proof",
    href: "/agent-economy/proofs",
    description: "Receipts, live status, signed evidence, and audit gates",
    children: [
      {
        title: "Agents",
        href: "/agents",
        description: "Machine-native entrypoint: llms.txt, capability manifest, discovery API, OpenAPI, MCP, receipts, and mainnet gate.",
      },
      {
        title: "Publish Service",
        href: "/agents/publish",
        description: "Validate a provider manifest before operator review and registry inclusion.",
      },
      {
        title: "Live Proof Hub",
        href: "/agent-economy/live",
        description: "Operational dashboard for Sage, receipts, MCP, widget, policy, and mainnet gate.",
      },
      {
        title: "Proof Explorer",
        href: "/agent-economy/proofs",
        description: "Inspect receipt bundles, conformance evidence, MCP health, widget state, and audit gates.",
      },
      {
        title: "First Receipt",
        href: "/agent-economy/first-receipt",
        description: "One developer path from live status to a full receipt bundle, wallet policy, MCP, and mainnet gate.",
      },
      {
        title: "Latest Receipt",
        href: "/r/sage/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
        description: "Open the latest full Sage receipt: Agreement, Verification Receipt, Settlement Receipt, and chain proof.",
      },
      {
        title: "Mainnet Gate",
        href: "/agent-economy/trust",
        description: "See what is live on testnet and what remains blocked before any mainnet readiness claim.",
      },
      {
        title: "Review Pack",
        href: "/agent-economy/review-pack",
        description: "External review scope, evidence checklist, allowed language, and forbidden claims.",
      },
      {
        title: "Launch Kit",
        href: "/agent-economy/launch-kit",
        description: "One developer path from live status to receipt bundle, wallet policy, MCP, and widget integration.",
      },
    ],
  },
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
        title: "Clearing",
        href: "/agent-economy/clearing",
        description: "The category thesis: autonomous work needs credit, predicates, receipts, and settlement.",
      },
      {
        title: "Interop",
        href: "/agent-economy/interop",
        description: "How x402, AP2, Stripe, marketplaces, and Ergo fit into the agent-payment stack.",
      },
      {
        title: "Agent Payments",
        href: "/build/agent-payments",
        description: "Technical architecture: Reserve · Note · Tracker · Predicate. With Fleet SDK code examples.",
      },
      {
        title: "First Receipt Flow",
        href: "/agent-economy/first-receipt",
        description: "The fastest build path: inspect one settled testnet receipt, run policy, read OpenAPI, check MCP, and stop at the gate.",
      },
      {
        title: "ErgoConnect",
        href: "/build/ergo-connect",
        description: "Wallet boundary for agents: CAIP IDs, ErgoAuth proof, ErgoPay handoff, policy verdicts, and receipt expectations.",
      },
      {
        title: "Publish Service",
        href: "/agents/publish",
        description: "Provider path for capability, pricing, payment rails, predicates, receipts, and evidence validation.",
      },
      {
        title: "Sage Widget",
        href: "/agent-economy/sage-widget",
        description: "Embed paid Sage flows: chat, quote, Note verification, receipt links, and tenant config.",
      },
      {
        title: "Playground",
        href: "/build/playground",
        description: "Compile ErgoScript in the browser with Monaco, Fleet compiler, and sigma-rust WASM.",
      },
      {
        title: "Developer Services",
        href: "/build/services",
        description: "Faucet surface, address inspector, tx/box lookup, receipt verifier, hasher, and service status.",
      },
      {
        title: "Demos",
        href: "/demos",
        description: "Three working flows on Ergo testnet: API call payment, credit system, community reserve.",
      },
      {
        title: "Ergo Watch",
        href: "/ergo-watch",
        description: "Runtime-safe Ergo network metrics, mining distribution, emission progress, and agent-economy analytics.",
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
      {
        title: "Ecosystem",
        href: "/ecosystem",
        description: "One comprehensive directory of wallets, bridges, tools, and community projects.",
      },
      {
        title: "Ecosystem Map",
        href: "/ecosystem/map",
        description: "Interactive visual map of projects, teams, and infrastructure building on Ergo.",
      },
      {
        title: "Ergo Watch",
        href: "/ergo-watch",
        description: "Runtime-safe Ergo network metrics, mining distribution, emission progress, and agent-economy analytics.",
      },
      {
        title: "Ecosystem Grants & Funding",
        href: "/ecosystem/grants",
        description: "Grants, bounties, and funding opportunities for ecosystem builders.",
      },
    ],
  },
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
      {
        title: "FAQ",
        href: "/faq",
        description: "Answers to common questions about Ergo for beginners and advanced users.",
      },
    ],
  },
]

export type NavigationItem = (typeof mainNavItems)[0]
