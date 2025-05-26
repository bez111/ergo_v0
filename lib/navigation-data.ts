export const mainNavItems = [
  {
    title: "Start",
    href: "/start",
    description: "Personalized onboarding for your journey with Ergo",
    children: [
      {
        title: "Onboarding Quiz",
        href: "/start/quiz",
        description: "Find your path based on your interests and goals",
      },
      {
        title: "Quick Start",
        href: "/start/quick-start",
        description: "Get up and running with Ergo in minutes",
      },
      {
        title: "User Guides",
        href: "/start/guides",
        description: "Step-by-step instructions for common tasks",
      },
    ],
  },
  {
    title: "Use",
    href: "/use",
    description: "Practical guides and user how-tos",
    children: [
      {
        title: "dApp Catalog",
        href: "/use/dapps",
        description: "Explore the ecosystem of decentralized applications",
      },
      {
        title: "How to Buy ERG",
        href: "/use/buy",
        description: "Learn how to purchase and trade ERG tokens",
      },
      {
        title: "How to Use dApps",
        href: "/use/how-to-use",
        description: "Guides for using decentralized applications",
      },
      {
        title: "Mining & Staking",
        href: "/use/mining",
        description: "Participate in securing the network",
      },
    ],
  },
  {
    title: "Ecosystem",
    href: "/ecosystem",
    description: "Projects, dashboards, and partners",
    children: [
      {
        title: "Projects",
        href: "/ecosystem/projects",
        description: "Explore projects built on Ergo",
      },
      {
        title: "Ecosystem Stats",
        href: "/ecosystem/stats",
        description: "Network activity and ecosystem metrics",
      },
      {
        title: "Grants & Support",
        href: "/ecosystem/grants",
        description: "Funding opportunities for builders",
      },
    ],
  },
  {
    title: "Build",
    href: "/build",
    description: "Developer resources and documentation",
    children: [
      {
        title: "Developer Dashboard",
        href: "/build/dashboard",
        description: "Your central hub for development resources",
      },
      {
        title: "Documentation",
        href: "/build/docs",
        description: "Technical documentation and API references",
      },
      {
        title: "Tutorials",
        href: "/build/tutorials",
        description: "Step-by-step guides for developers",
      },
      {
        title: "Playground",
        href: "/build/playground",
        description: "Test and experiment with ErgoScript",
      },
    ],
  },
  {
    title: "Technology",
    href: "/technology",
    description: "Core technical concepts and innovations of Ergo",
    children: [
      {
        title: "eUTXO Model",
        href: "/technology/eutxo-model",
        description: "Extended UTXO model that combines Bitcoin's security with Ethereum's programmability",
      },
      {
        title: "Storage Rent",
        href: "/technology/storage-rent",
        description: "Mechanism to prevent blockchain bloat and ensure long-term sustainability",
      },
      {
        title: "Oracle Pools",
        href: "/technology/oracle-pools",
        description: "Decentralized oracle solution for reliable off-chain data",
      },
      {
        title: "Privacy Features",
        href: "/technology/privacy-features",
        description: "Advanced cryptographic features enabling optional privacy",
      },
      {
        title: "Tokenomics",
        href: "/technology/tokenomics",
        description: "Economic model and token distribution of the Ergo platform",
      },
      {
        title: "Secure PoW",
        href: "/technology/secure-pow",
        description: "ASIC-resistant Proof of Work consensus mechanism",
      },
    ],
  },
  {
    title: "Learn",
    href: "/learn",
    description: "Educational resources and learning materials",
    children: [
      {
        title: "Learning Portal",
        href: "/learn/portal",
        description: "Resources for beginners and pros: articles, videos, FAQs",
      },
      {
        title: "Community Wiki",
        href: "/learn/wiki",
        description: "Open knowledge base maintained by the community",
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    description: "Connect with the Ergo community and ecosystem",
    children: [
      {
        title: "Forum & Social",
        href: "/community/social",
        description: "Connect with the Ergo community",
      },
      {
        title: "Ambassadors & Advocacy",
        href: "/community/ambassadors",
        description: "Join the movement, become an advocate",
      },
      {
        title: "Meetups & IRL",
        href: "/community/meetups",
        description: "Local and global meetups",
      },
    ],
  },
]

export type NavigationItem = (typeof mainNavItems)[0]
