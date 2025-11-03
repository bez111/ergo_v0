export type EcosystemProject = {
  id: number
  name: string
  category: string
  status: "OPERATIONAL" | "TESTING" | "PROTOTYPE"
  description: string
  url: string
  icon?: string
}

export const projects: EcosystemProject[] = [
  { id: 1, name: "Spectrum Finance", category: "DEFI", status: "OPERATIONAL", description: "A cutting-edge open-source decentralized exchange (DEX) operating on the Ergo and Cardano blockchains. It offers liquidity provision (LP), yield farming, and supports Babel Fees.", url: "https://spectrum.fi" },
  { id: 2, name: "SigmaUSD", category: "DEFI", status: "OPERATIONAL", description: "The first eUTXO-based stablecoin, implementing the AgeUSD protocol. It is pegged to the US dollar and backed by ERG with a floating reserve ratio (400%-800%).", icon: "💵", url: "https://sigmausd.io" },
  { id: 3, name: "Rosen Bridge", category: "INFRASTRUCTURE", status: "OPERATIONAL", description: "An open-source protocol for cross-chain asset transfers between Ergo and other blockchains like Cardano, Bitcoin Runes, and Dogecoin.", icon: "🌉", url: "https://rosen.tech" },
  { id: 4, name: "ErgoMixer", category: "PRIVACY", status: "OPERATIONAL", description: "The first non-interactive, non-custodial mixer in the crypto industry. It allows users to privately send tokens using Σ-protocols for enhanced privacy.", icon: "🔀", url: "https://ergomixer.io" },
  { id: 6, name: "Nautilus Wallet", category: "WALLETS", status: "OPERATIONAL", description: "A browser extension and mobile wallet for Ergo, focused on privacy, security, and user experience. It supports Ledger, multiple wallets, and a dApp connector.", icon: "🔒", url: "https://nautilus-wallet.io" },
  { id: 7, name: "DuckPools", category: "DEFI", status: "TESTING", description: "A collateralized lending platform with algorithmic lending pools. Users provide ERG or native assets to earn income or borrow assets against ERG collateral.", icon: "🦆", url: "https://duckpools.io" },
  { id: 8, name: "Paideia", category: "DAO", status: "OPERATIONAL", description: "A suite of tools for creating and managing Decentralized Autonomous Organizations (DAOs) on Ergo and Cardano with governance and treasury management.", icon: "🏛️", url: "https://paideia.im" },
  { id: 9, name: "Oracle Pools", category: "ORACLES", status: "OPERATIONAL", description: "A decentralized oracle system on Ergo that connects smart contracts with external data without needing to trust centralized sources.", icon: "🔮", url: "https://explorer.ergoplatform.com/en/oracle-pools-list" },
  { id: 10, name: "Ergo Explorer", category: "TOOLS", status: "OPERATIONAL", description: "The main official block explorer for Ergo. It allows users to track transactions, blocks, addresses, tokens, and view general network statistics.", icon: "🔍", url: "https://explorer.ergoplatform.com" },
  { id: 11, name: "ErgoPad", category: "DEFI", status: "TESTING", description: "A token launch (IDO) and fundraising platform on the Ergo blockchain. It gives token holders the opportunity to participate in IDOs.", icon: "🚀", url: "https://ergopad.io" },
  { id: 13, name: "Mew Finance", category: "DEFI", status: "OPERATIONAL", description: "A decentralized finance (DeFi) platform offering a suite of financial applications including DEX, NFT marketplace, and various financial tools.", icon: "💎", url: "#" },
  { id: 14, name: "SatErgo", category: "WALLETS", status: "OPERATIONAL", description: "A comprehensive desktop wallet for Ergo with the option to integrate a full node to support network decentralization. Privacy-focused with offline vault.", icon: "💼", url: "https://satergo.com" },
  { id: 15, name: "SAFEW", category: "WALLETS", status: "OPERATIONAL", description: "A browser extension wallet for Ergo that integrates with ErgoMixer for enhanced transaction privacy.", icon: "🛡️", url: "https://safew.org" },
  { id: 16, name: "ErgoWatch", category: "TOOLS", status: "OPERATIONAL", description: "An analytical block explorer providing Ergo network metrics, DeFi statistics (e.g., TVL), charts, and dashboards for monitoring blockchain activity.", icon: "🔍", url: "https://ergo.watch" },
  { id: 17, name: "CyberPixels", category: "GAMING", status: "TESTING", description: "A gaming project featuring an open-world pixel-style game with blockchain integration (NFTs, custom tokens, in-game marketplace).", icon: "🎮", url: "#" },
  { id: 18, name: "SigmaFi", category: "DEFI", status: "PROTOTYPE", description: "A suite of decentralized P2P financial contracts on Ergo, including SigmaBonds for creating P2P debt obligations.", icon: "🏦", url: "#" },
  { id: 19, name: "ErgoRaffle", category: "DEFI", status: "OPERATIONAL", description: "A crowdfunding service with lottery elements, allowing fundraising for projects where participants can win rewards.", icon: "🎟️", url: "https://ergoraffle.com" },
  { id: 20, name: "Minotaur Wallet", category: "WALLETS", status: "TESTING", description: "A mobile wallet for Ergo with advanced features like multi-signatures, enhancing fund management security.", icon: "📱", url: "https://github.com/minotaur-ergo/minotaur-wallet" },
  { id: 21, name: "GuapSwap", category: "TOOLS", status: "OPERATIONAL", description: "A decentralized smart contract-based service for swapping miner profits on Ergo, allowing automatic exchange of mining rewards.", icon: "⛏️", url: "#" },
  { id: 22, name: "DexyGold", category: "DEFI", status: "PROTOTYPE", description: "An algorithmic stablecoin pegged to the price of gold (XAU/USD), utilizing seigniorage, price oracles, and excess ERG collateral.", icon: "🥇", url: "#" },
  { id: 23, name: "SigmaO", category: "DEFI", status: "PROTOTYPE", description: "A platform for trading options (Call/Put, American/European) on Ergo EIP-4 tokens using an order book style.", icon: "📈", url: "#" },
  { id: 24, name: "Blitz TCG", category: "GAMING", status: "TESTING", description: "A collectible trading card game (TCG) on the Ergo blockchain.", icon: "🃏", url: "#" },
  { id: 25, name: "Sigmaverse", category: "TOOLS", status: "OPERATIONAL", description: "A centralized portal and directory for the Ergo dApp ecosystem, allowing developers to list applications and users to find services.", icon: "🌐", url: "https://sigmaverse.io" },
  { id: 26, name: "ErgOne", category: "TOOLS", status: "OPERATIONAL", description: "A decentralized, community-driven marketing platform for promoting Ergo and its projects using the ERGONE token and Proof-of-Commitment Protocol.", icon: "📢", url: "#" },
  { id: 27, name: "Hodlbox", category: "DEFI", status: "OPERATIONAL", description: "A platform encouraging long-term holding of ERG with treasure chests and various fund-locking options, rewarding users with NFTs.", icon: "📦", url: "#" },
  { id: 29, name: "TokenJay", category: "DEFI", status: "OPERATIONAL", description: "A platform for P2P (peer-to-peer) token trading within the Ergo ecosystem.", icon: "🔄", url: "#" },
  { id: 30, name: "Single Tx Swap", category: "TOOLS", status: "OPERATIONAL", description: "A tool for executing P2P (peer-to-peer) token swaps within a single transaction.", icon: "⚡", url: "#" },
  { id: 31, name: "Crux Finance", category: "TOOLS", status: "OPERATIONAL", description: "A tool for managing crypto portfolios within the Ergo ecosystem, allowing tracking of P&L, investments, and generating tax reports.", icon: "📊", url: "#" },
  { id: 32, name: "Fleet SDK", category: "TOOLS", status: "OPERATIONAL", description: "A JavaScript library designed to simplify the creation and signing of transactions on the Ergo blockchain in web applications and Node.js.", icon: "⚙️", url: "https://github.com/fleet-sdk/fleet" },
  { id: 33, name: "AppKit", category: "TOOLS", status: "OPERATIONAL", description: "The primary Software Development Kit (SDK) for developing applications on Ergo using JVM-based programming languages.", icon: "🔧", url: "https://github.com/ergoplatform/ergo-appkit" },
  { id: 34, name: "SigmaRust", category: "TOOLS", status: "OPERATIONAL", description: "An implementation of the ErgoTree interpreter in Rust, providing tools for working with transactions and bindings for various languages.", icon: "🦀", url: "https://github.com/ergoplatform/sigma-rust" },
  { id: 35, name: "Gluon", category: "DEFI", status: "PROTOTYPE", description: "A protocol developed to strengthen (harden) existing stablecoins in the Ergo ecosystem, such as SigmaUSD.", icon: "🔬", url: "#" },
  { id: 36, name: "ChainCash", category: "TOOLS", status: "PROTOTYPE", description: "A framework for creating decentralized P2P monetary systems on Ergo, allowing users to issue their own currencies backed by trust or collateral.", icon: "💰", url: "#" },
  { id: 37, name: "SigRSV", category: "DEFI", status: "OPERATIONAL", description: "The reserve coin for the SigmaUSD stablecoin protocol. Users mint SigRSV by depositing ERG into reserves and can profit from ERG price increases.", icon: "🏛️", url: "#" },
  { id: 38, name: "EXLE", category: "DEFI", status: "TESTING", description: "A lending/borrowing protocol within the Ergo ecosystem, integrated with Crux Finance.", icon: "🏪", url: "#" },
]

export const featuredProjects: EcosystemProject[] = [
  { id: 3, name: "Rosen Bridge", category: "INFRASTRUCTURE", status: "OPERATIONAL", description: "An open-source protocol for cross-chain asset transfers between Ergo and other blockchains like Cardano, Bitcoin Runes, and Dogecoin.", icon: "🌉", url: "https://rosen.tech" },
  { id: 13, name: "Mew Finance", category: "DEFI", status: "OPERATIONAL", description: "A decentralized finance (DeFi) platform offering a suite of financial applications including DEX, NFT marketplace, and various financial tools.", icon: "💎", url: "#" },
  { id: 7, name: "DuckPools", category: "DEFI", status: "TESTING", description: "A collateralized lending platform with algorithmic lending pools. Users provide ERG or native assets to earn income or borrow assets against ERG collateral.", icon: "🦆", url: "https://duckpools.io" },
  { id: 2, name: "SigmaUSD", category: "DEFI", status: "OPERATIONAL", description: "The first eUTXO-based stablecoin, implementing the AgeUSD protocol. It is pegged to the US dollar and backed by ERG with a floating reserve ratio (400%-800%).", icon: "💵", url: "https://sigmausd.io" },
  { id: 8, name: "Paideia", category: "DAO", status: "OPERATIONAL", description: "A suite of tools for creating and managing Decentralized Autonomous Organizations (DAOs) on Ergo and Cardano with governance and treasury management.", icon: "🏛️", url: "https://paideia.im" },
]

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

export const statusOrder: Array<EcosystemProject["status"]> = ["OPERATIONAL", "TESTING", "PROTOTYPE"]

export const categoryNameOrder: Record<string, string[]> = {
  DEFI: [
    "Spectrum Finance",
    "SigmaUSD",
    "DuckPools",
    "ErgoPad",
    "Mew Finance",
    "SigmaFi",
    "TokenJay",
    "ErgoRaffle",
    "Hodlbox",
    "SigRSV",
    "DexyGold",
    "EXLE",
    "Gluon",
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

export function sortProjectsForListing(input: EcosystemProject[]): EcosystemProject[] {
  const sorted = [...input].sort((a, b) => {
    const catA = categoryOrder.indexOf(a.category)
    const catB = categoryOrder.indexOf(b.category)
    if (catA !== catB) return catA - catB

    const statA = statusOrder.indexOf(a.status)
    const statB = statusOrder.indexOf(b.status)
    if (statA !== statB) return statA - statB

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