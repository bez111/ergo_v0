export const mainNavItems = [
  {
    title: "Start",
    href: "/start",
    description: "Begin your journey with Ergo",
    children: [
      {
        title: "Start Here",
        href: "/start",
        description: "Get started with Ergo blockchain in 3 simple steps. Download a wallet, buy ERG tokens, and send your first transaction.",
      },
      {
        title: "Quick Introduction",
        href: "/start/introduction",
        description: "A brief overview of Ergo and its core purpose.",
      },
      {
        title: "Platform Comparison",
        href: "/start/comparison",
        description: "How Ergo compares to Bitcoin, Ethereum, Solana and other blockchains.",
      },
      {
        title: "Onboarding Quiz",
        href: "/start/quiz",
        description: "Find your personalized path—investor, developer, miner, NFT enthusiast, and more.",
      },
      {
        title: "Join the Community",
        href: "/start/community",
        description: "Connect via Discord, Telegram, Reddit, and the official forum.",
      },
      {
        title: "FAQ for Beginners",
        href: "/start/faq",
        description: "Answers to the most common questions for newcomers.",
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
        description: "Explore different ways to leverage Ergo's capabilities across various domains.",
      },
      {
        title: "Get ERG",
        href: "/use/get-erg",
        description: "Learn how to buy, exchange, or earn ERG (markets, P2P, exchanges, guides).",
      },
      {
        title: "Mine ERG",
        href: "/use/mining",
        description: "Learn how to start mining, find mining pools, requirements, and beginner tips.",
      },
      {
        title: "Earn with DeFi",
        href: "/use/defi",
        description: "Discover where and how to earn through staking, farming, lending, lotteries.",
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
        description: "One-stop catalog of dApps, services, and community projects with advanced search and filters.",
      },
      {
        title: "Ecosystem Map",
        href: "/ecosystem/map",
        description: "Visual map of projects, tools, and teams with interactive clusters and filters.",
      },
      {
        title: "Mining Pools & Resources",
        href: "/ecosystem/mining",
        description: "List of mining pools and useful tools for miners.",
      },
      {
        title: "Ecosystem Grants & Funding",
        href: "/ecosystem/grants",
        description: "Opportunities for project grants and ecosystem funding.",
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
        description: "Overview of Ergo's core technology and innovations."
      },
      {
        title: "eUTXO Model",
        href: "/technology/eutxo-model",
        description: "An extended UTXO model delivering security and expressiveness for advanced smart contracts.",
      },
      {
        title: "ErgoScript",
        href: "/technology/ergoscript",
        description:
          "A powerful and secure scripting language designed for developing complex and reliable financial contracts.",
      },
      {
        title: "Secure PoW (Autolykos v2)",
        href: "/technology/secure-pow",
        description:
          "An ASIC-resistant Proof-of-Work algorithm promoting decentralization and long-term network security.",
      },
      {
        title: "Storage Rent",
        href: "/technology/storage-rent",
        description: "A mechanism to prevent blockchain bloat and ensure its long-term economic sustainability.",
      },
      {
        title: "NIPOPOWs",
        href: "/technology/nipopows",
        description: "Innovative technology enabling ultra-secure and efficient light client operation.",
      },
      {
        title: "Privacy Features (Σ-protocols)",
        href: "/technology/privacy-features",
        description:
          "Advanced cryptographic capabilities for optionally enhancing the privacy of transactions and data.",
      },
    ],
  },
  {
    title: "Learn",
    href: "/learn",
    description: "Educational resources and learning materials",
    children: [
      {
        title: "Learn ErgoScript",
        href: "/learn/ergoscript",
        description: "Comprehensive ErgoScript tutorial series from beginner to expert level",
      },
      {
        title: "Research & Papers",
        href: "/learn/research",
        description: "Academic research, whitepapers, and foundational studies.",
      },
      {
        title: "User & Developer Guides",
        href: "/learn/guides",
        description: "All guides and how-tos for users and developers in one place.",
      },
      {
        title: "FAQ",
        href: "/learn/faq",
        description: "Answers to frequently asked questions and common issues.",
      },
    ],
  },
]

export type NavigationItem = (typeof mainNavItems)[0]
