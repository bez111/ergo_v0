export type UseCase = {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  supportedProjects: string[]
}

export const useCases: UseCase[] = [
  {
    id: "stablecoins",
    icon: "trending-up",
    title: "Algorithmic Stablecoins",
    subtitle: "Stable value storage without centralized control",
    description: "Over-collateralized stablecoins with innovative AgeUSD protocol.",
    tags: ["Stablecoin", "Algorithmic", "Collateral"],
    supportedProjects: ["SigmaUSD", "SigmaRSV"],
  },
  {
    id: "privacy",
    icon: "shield",
    title: "Privacy & Confidentiality",
    subtitle: "Financial privacy in an increasingly surveilled world",
    description: "Non-custodial mixers, stealth addresses, zero-knowledge proofs for complete privacy.",
    tags: ["Mixer", "Stealth", "Zero-Knowledge"],
    supportedProjects: ["ErgoMixer"],
  },
  {
    id: "bridges",
    icon: "link",
    title: "Cross-Chain Bridges",
    subtitle: "Secure, trustless value transfer between blockchains",
    description: "Decentralized bridges with multi-signature security, no central custody.",
    tags: ["Bridge", "Interoperability", "Multi-chain"],
    supportedProjects: ["Rosen Bridge"],
  },
  {
    id: "daos",
    icon: "users",
    title: "DAOs & Alternative Economies",
    subtitle: "Community governance and alternative economic systems",
    description: "Composable DAO infrastructure: treasury, voting, profit-sharing.",
    tags: ["DAO", "Governance", "Community"],
    supportedProjects: ["Paideia"],
  },
  {
    id: "nfts",
    icon: "palette",
    title: "NFTs & Digital Assets",
    subtitle: "True digital ownership, dynamic properties",
    description: "On-chain metadata, protocol royalties, programmable NFTs.",
    tags: ["NFT", "Royalties", "Dynamic"],
    supportedProjects: ["SkyHarbor", "Auction House", "Lilium"],
  },
  {
    id: "oracles",
    icon: "eye",
    title: "Oracles & Data Feeds",
    subtitle: "Bringing real-world data on-chain",
    description: "Decentralized oracle pools provide external data for DeFi & prediction markets.",
    tags: ["Oracles", "Data Feeds", "Prediction"],
    supportedProjects: ["Oracle Pools", "Ergo Oracle Core"],
  },
  {
    id: "identity",
    icon: "brain",
    title: "Identity & Reputation",
    subtitle: "Self-sovereign identity & Web3 reputation",
    description: "Decentralized identifiers (DID), Sybil resistance, reputation systems.",
    tags: ["Identity", "Reputation", "DID"],
    supportedProjects: [],
  },
  {
    id: "gaming",
    icon: "gamepad",
    title: "Gaming & Metaverse",
    subtitle: "Next-gen gaming assets & digital worlds",
    description: "Programmable gaming tokens, NFT-powered economies, metaverse infrastructure.",
    tags: ["Gaming", "Metaverse", "NFT"],
    supportedProjects: [],
  },
] 