export interface UseCase {
  id: string
  title: string
  problemStatement: string
  solution: string
  category: string
  tags: string[]
  supportedProjects: {
    name: string
    url: string
  }[]
  icon: string
  featured?: boolean
  story?: {
    title: string
    description: string
  }
}

export interface Category {
  id: string
  name: string
  description: string
  count: number
}

export const categories: Category[] = [
  {
    id: "all",
    name: "All",
    description: "All use cases",
    count: 6,
  },
  {
    id: "defi",
    name: "DeFi & Finance",
    description: "Financial protocols and services",
    count: 2,
  },
  {
    id: "privacy",
    name: "Privacy & Security",
    description: "Anonymous and confidential transactions",
    count: 1,
  },
  {
    id: "nfts",
    name: "NFTs & Digital Assets",
    description: "Digital ownership and collectibles",
    count: 1,
  },
  {
    id: "daos",
    name: "DAOs & Alternative Economies",
    description: "Decentralized governance and communities",
    count: 1,
  },
  {
    id: "crosschain",
    name: "Cross-chain & Infrastructure",
    description: "Interoperability and infrastructure",
    count: 1,
  },
]

export const useCases: UseCase[] = [
  {
    id: "defi",
    title: "Decentralized Finance",
    problemStatement: "Access to global, permissionless financial markets",
    solution: "Programmable DEXs, stablecoins, and lending — built on secure eUTXO",
    category: "defi",
    tags: ["DEX", "Stablecoin", "Lending"],
    icon: "coins",
    featured: true,
    supportedProjects: [
      {
        name: "Spectrum Finance",
        url: "https://spectrum.fi",
      },
      {
        name: "SigmaUSD",
        url: "https://sigmausd.io",
      },
      {
        name: "Duckpools",
        url: "https://duckpools.io",
      },
    ],
    story: {
      title: "Cross-Border Remittance Without Banks",
      description:
        "See how Maria sends money from the US to her family in Mexico using Ergo's DeFi infrastructure, avoiding high fees and delays.",
    },
  },
  {
    id: "privacy",
    title: "Privacy & Confidentiality",
    problemStatement: "Financial privacy in an increasingly surveilled world",
    solution: "Non-custodial mixers, stealth addresses, and zero-knowledge proofs for complete transaction privacy",
    category: "privacy",
    tags: ["Mixer", "Stealth", "Zero-Knowledge"],
    icon: "shield",
    featured: true,
    supportedProjects: [
      {
        name: "ErgoMixer",
        url: "https://ergomixer.io",
      },
    ],
    story: {
      title: "Protecting Activist Funding",
      description:
        "Learn how human rights organizations use Ergo's privacy tools to protect donors and recipients from authoritarian surveillance.",
    },
  },
  {
    id: "stablecoins",
    title: "Algorithmic Stablecoins",
    problemStatement: "Stable value storage without centralized control or forced liquidations",
    solution: "Over-collateralized stablecoins with innovative AgeUSD protocol that prevents bank runs",
    category: "defi",
    tags: ["Stablecoin", "Algorithmic", "Collateral"],
    icon: "trending-up",
    supportedProjects: [
      {
        name: "SigmaUSD",
        url: "https://sigmausd.io",
      },
      {
        name: "SigmaRSV",
        url: "https://sigmausd.io",
      },
    ],
  },
  {
    id: "crosschain",
    title: "Cross-Chain Bridges",
    problemStatement: "Secure, trustless value transfer between different blockchains",
    solution: "Decentralized bridges with multi-signature security and no central custody of funds",
    category: "crosschain",
    tags: ["Bridge", "Interoperability", "Multi-chain"],
    icon: "link",
    supportedProjects: [
      {
        name: "Rosen Bridge",
        url: "https://rosen.tech",
      },
    ],
  },
  {
    id: "daos",
    title: "DAOs & Alternative Economies",
    problemStatement: "Community governance and alternative economic systems",
    solution: "Composable DAO infrastructure with treasury management, voting, and profit-sharing mechanisms",
    category: "daos",
    tags: ["DAO", "Governance", "Community"],
    icon: "users",
    featured: true,
    supportedProjects: [
      {
        name: "Paideia",
        url: "https://paideia.im",
      },
    ],
    story: {
      title: "Community-Owned Renewable Energy",
      description:
        "Discover how a village in Kenya uses Ergo DAOs to collectively own and manage solar infrastructure, sharing profits transparently.",
    },
  },
  {
    id: "nfts",
    title: "NFTs & Digital Assets",
    problemStatement: "True digital ownership with creator royalties and dynamic properties",
    solution: "On-chain metadata, protocol-level royalties, and programmable NFTs that evolve over time",
    category: "nfts",
    tags: ["NFT", "Royalties", "Dynamic"],
    icon: "palette",
    supportedProjects: [
      {
        name: "SkyHarbor",
        url: "https://skyharbor.io",
      },
      {
        name: "Auction House",
        url: "https://ergoauctions.org",
      },
      {
        name: "Lilium",
        url: "https://lilium.fi",
      },
    ],
  },
] 