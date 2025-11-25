import { InfographicMeta } from '@/types/infographic';

// Helper function to generate placeholder SVG images
function generatePlaceholderImage(title: string): string {
  const shortTitle = title.split(':')[0].trim(); // Take first part before colon
  const encodedTitle = encodeURIComponent(shortTitle);
  
  const svg = `<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#111111"/>
    <rect x="20" y="20" width="360" height="260" fill="#1a1a1a" stroke="#333333" stroke-width="2"/>
    <text x="200" y="140" text-anchor="middle" fill="#FF9500" font-family="Arial" font-size="18" font-weight="bold">${shortTitle}</text>
    <text x="200" y="170" text-anchor="middle" fill="#CCCCCC" font-family="Arial" font-size="14">Infographic</text>
    <circle cx="50" cy="50" r="8" fill="#FF9500" opacity="0.6"/>
    <circle cx="350" cy="50" r="8" fill="#FF9500" opacity="0.6"/>
    <circle cx="50" cy="250" r="8" fill="#FF9500" opacity="0.6"/>
    <circle cx="350" cy="250" r="8" fill="#FF9500" opacity="0.6"/>
  </svg>`;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export const infographics: InfographicMeta[] = [
  {
    slug: "what-we-are-fighting-against-financial-repression-stack",
    title: "What We’re Fighting Against",
    shortDescription:
      "Layered view of the financial repression stack and how Ergo answers with censorship-resistant settlement, open programmability and privacy on demand.",
    category: "ergo-overview",
    level: "intermediate",
    tags: [
      "Ergo",
      "financial repression",
      "CBDC",
      "KYC overreach",
      "sanctions",
      "freezing accounts",
      "capital controls",
      "censorship-resistant settlement",
      "programmable privacy",
    ],
    previewImageUrl:
      "/infographics/what-we-are-fighting-against-financial-repression-stack.jpg",
    fullImageUrl:
      "/infographics/what-we-are-fighting-against-financial-repression-stack.jpg",
    imageAlt:
      "Infographic titled “What We’re Fighting Against” showing a stacked tower of financial repression tools like CBDCs, KYC overreach, sanctions, freezing accounts and capital controls, contrasted with Ergo’s censorship-resistant settlement, programmability without gatekeepers and privacy on demand.",
    publishDate: "2025-03-27T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle:
      "What We’re Fighting Against: The Financial Repression Stack (and How Ergo Responds)",
    seoDescription:
      "Visual breakdown of the financial repression stack—capital controls, freezing accounts, sanctions, KYC overreach and programmable CBDCs—contrasted with Ergo’s censorship-resistant settlement, permissionless programmability and privacy on demand.",
  },
  {
    slug: "powered-by-builders-designed-for-freedom",
    title: "Powered by Builders. Designed for Freedom.",
    shortDescription:
      "Three-layer Ergo pyramid showing miners securing the base layer, builders shipping tools and dApps, and freedom seekers owning their finance.",
    category: "ergo-overview",
    level: "beginner",
    tags: [
      "Ergo",
      "miners",
      "builders",
      "freedom seekers",
      "cypherpunks",
      "Proof-of-Work",
      "no VC",
      "no ICO",
      "decentralization",
      "money without masters",
    ],
    previewImageUrl:
      "/infographics/powered-by-builders-designed-for-freedom.jpg",
    fullImageUrl:
      "/infographics/powered-by-builders-designed-for-freedom.jpg",
    imageAlt:
      "Infographic with a glowing three-layer pyramid labeled miners at the base, builders in the middle, and freedom seekers at the top, explaining how Ergo is powered by builders and designed for financial freedom.",
    publishDate: "2025-03-26T00:00:00.000Z",
    readingTimeMinutes: 6,
    seoTitle:
      "Powered by Builders, Designed for Freedom: Ergo’s Pyramid of Miners, Builders and Users",
    seoDescription:
      "Discover how Ergo’s ecosystem stacks together: miners secure the base layer with fair-launch PoW, builders ship open-source tools and dApps on eUTXO + Sigma, and freedom seekers use it all to own their finance without VC, ICO or premine.",
  },
  {
    slug: "mev-resistance-vs-dark-forest",
    title: "MEV-Resistance vs the “Dark Forest”",
    shortDescription:
      "How global DeFi “dark forest” mempools compare to Ergo’s MEV-aware eUTXO local ordering for front-running, value capture, UX and mitigation.",
    category: "scalability-settlement",
    level: "intermediate",
    tags: [
      "Ergo",
      "MEV",
      "maximal extractable value",
      "transaction ordering",
      "DeFi",
      "mempool",
      "Ethereum",
      "eUTXO",
      "local ordering",
      "front-running",
    ],
    previewImageUrl: "/infographics/mev-resistance-vs-dark-forest.png",
    fullImageUrl: "/infographics/mev-resistance-vs-dark-forest.png",
    imageAlt:
      "Infographic titled “MEV-Resistance vs the ‘Dark Forest’” comparing global DeFi-style mempools on Ethereum with Ergo’s MEV-aware local ordering and eUTXO design.",
    publishDate: "2025-03-12T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle:
      "MEV-Resistance vs the Dark Forest: Ergo’s Local Ordering vs Global DeFi Mempools",
    seoDescription:
      "See how Ethereum-style ‘Dark Forest’ MEV markets with global mempools compare to Ergo’s MEV-aware, eUTXO-based local ordering design, including where front-running happens, who captures value, user experience and L1 mitigation.",
  },
  {
    slug: "smart-contract-l1-tree",
    title: "Smart-Contract L1 Tree",
    shortDescription:
      "How Bitcoin, Ethereum, Cardano and Ergo differ in smart-contract state models, determinism, audit complexity, expressiveness and hidden global state risk.",
    category: "eutxo-smart-contracts",
    level: "intermediate",
    tags: [
      "Ergo",
      "smart contracts",
      "L1 blockchains",
      "Bitcoin",
      "Ethereum",
      "Cardano",
      "eUTXO",
      "ErgoScript",
      "Sigma Protocols",
      "state models",
    ],
    previewImageUrl: "/infographics/smart-contract-l1-tree.png",
    fullImageUrl: "/infographics/smart-contract-l1-tree.png",
    imageAlt:
      "Infographic titled “Smart-Contract L1 Tree” showing Bitcoin at the root branching into Ethereum, Cardano and Ergo, with a table comparing determinism, audit complexity, expressiveness and hidden global state risk.",
    publishDate: "2025-03-11T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle:
      "Smart-Contract L1 Tree: Bitcoin, Ethereum, Cardano and Ergo Compared",
    seoDescription:
      "Explore how smart-contract layer-1s evolved from Bitcoin’s basic scripting to Ethereum’s account model and the eUTXO family (Cardano and Ergo), with a side-by-side comparison of determinism, audit complexity, expressiveness and hidden state risk.",
  },
  {
    slug: "ergo-vs-privacy-coins",
    title: "Ergo vs Privacy Coins",
    shortDescription:
      "How Ergo, Monero, Zcash and L2 mixers differ in privacy models, programmability, selective disclosure, auditability and fair-launch tokenomics.",
    category: "privacy-sigma",
    level: "intermediate",
    tags: [
      "Ergo",
      "privacy coins",
      "Monero",
      "Zcash",
      "L2 mixers",
      "Sigma Protocols",
      "zero-knowledge proofs",
      "smart contracts",
      "auditability",
      "fair launch",
    ],
    previewImageUrl: "/infographics/ergo-vs-privacy-coins.png",
    fullImageUrl: "/infographics/ergo-vs-privacy-coins.png",
    imageAlt:
      "Infographic titled “Ergo vs Privacy Coins” comparing Ergo, Monero, Zcash and L2 mixers across privacy model, programmability, selective disclosure, auditability and fair-launch tokenomics.",
    publishDate: "2025-03-15T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle:
      "Ergo vs Privacy Coins: Monero, Zcash, and L2 Mixers Compared",
    seoDescription:
      "Compare Ergo, Monero, Zcash and L2 mixers across privacy models, smart-contract programmability, selective disclosure, auditability and tokenomics to see how Ergo combines optional Sigma-based privacy with fair-launch PoW.",
  },
  {
    slug: "pow-vs-pos-censorship-and-attack-surface",
    title: "PoW vs PoS: Censorship & Attack Surface",
    shortDescription:
      "How PoW, classic PoS and validator committees differ in censorship power, cartel risk, regulatory pressure and user resistance tools.",
    category: "consensus-mining",
    level: "intermediate",
    tags: [
      "Ergo",
      "Proof-of-Work",
      "Proof-of-Stake",
      "DPoS",
      "BFT",
      "censorship resistance",
      "attack surface",
      "validators",
      "mining",
      "regulation",
    ],
    previewImageUrl:
      "/infographics/pow-vs-pos-censorship-and-attack-surface.png",
    fullImageUrl:
      "/infographics/pow-vs-pos-censorship-and-attack-surface.png",
    imageAlt:
      "Infographic titled “PoW vs PoS: Censorship & Attack Surface” comparing Proof-of-Work, classic Proof-of-Stake, and validator-committee models on who can censor, cartel risk, regulatory pressure, and resistance tools.",
    publishDate: "2025-03-20T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "PoW vs PoS: Censorship Resistance & Attack Surface Compared",
    seoDescription:
      "See how Proof-of-Work, classic Proof-of-Stake, and validator-committee systems differ in who can censor transactions, how easy cartels form, their regulatory exposure, and what resistance tools users really have.",
  },
  {
    slug: "eutxo-vs-accounts-vs-classic-utxo",
    title: "eUTXO vs Accounts vs Classic UTXO",
    shortDescription:
      "How classic UTXO, global accounts and Ergo’s eUTXO differ in parallelism, logic transparency, smart-contract design and fee predictability.",
    category: "eutxo-smart-contracts",
    level: "intermediate",
    tags: [
      "Ergo",
      "eUTXO",
      "UTXO",
      "account model",
      "smart contracts",
      "parallelism",
      "fees",
      "Bitcoin",
      "Ethereum",
      "state model comparison",
    ],
    previewImageUrl: "/infographics/eutxo-vs-accounts-vs-classic-utxo.png",
    fullImageUrl: "/infographics/eutxo-vs-accounts-vs-classic-utxo.png",
    imageAlt:
      "Infographic titled “eUTXO vs Accounts vs Classic UTXO” comparing Bitcoin’s classic UTXO model, the account model, and Ergo-style eUTXO in terms of parallelism, logic transparency, smart-contract friendliness, and fee predictability.",
    publishDate: "2025-03-09T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "eUTXO vs Accounts vs Classic UTXO: State Model Comparison",
    seoDescription:
      "Compare Bitcoin’s classic UTXO, the global account model and Ergo’s eUTXO to see how each impacts parallelism, logic transparency, smart-contract design and fee predictability.",
  },
  {
    slug: "privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins",
    title: "Privacy, But Auditable",
    shortDescription:
      "How mixers, classic privacy coins and Ergo’s Sigma Protocols differ in privacy mode, auditability, UX and regulatory signal.",
    category: "privacy-sigma",
    level: "intermediate",
    tags: [
      "Ergo",
      "Sigma Protocols",
      "on-chain privacy",
      "zero-knowledge proofs",
      "mixers",
      "tumblers",
      "privacy coins",
      "auditability",
      "selective disclosure",
      "regulation",
    ],
    previewImageUrl:
      "/infographics/privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins.png",
    fullImageUrl:
      "/infographics/privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins.png",
    imageAlt:
      "Infographic titled “Privacy, But Auditable” comparing mixers & tumblers, classic privacy coins, and Ergo + Sigma Protocols across privacy mode, auditability, user experience, and regulatory signal.",
    publishDate: "2025-03-14T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "Privacy, But Auditable: Why Ergo Chooses Sigma Protocols",
    seoDescription:
      "Compare mixers, classic privacy coins and Ergo’s Sigma Protocols to see how Ergo combines on-chain privacy with programmable auditability, integrated UX and a more balanced regulatory profile.",
  },
  {
    slug: "autolykos-mining-without-masters",
    title: "Autolykos: Mining Without Masters",
    shortDescription:
      "How Ergo’s Autolykos PoW keeps mining open to consumer GPUs, limits pool dominance and funds long-term security with block rewards plus storage rent.",
    category: "consensus-mining",
    level: "beginner",
    tags: [
      "Ergo",
      "Autolykos",
      "mining",
      "Proof-of-Work",
      "GPU mining",
      "ASIC resistance",
      "decentralization",
      "storage rent",
      "security budget",
      "51% attack",
    ],
    previewImageUrl: "/infographics/autolykos-mining-without-masters.png",
    fullImageUrl: "/infographics/autolykos-mining-without-masters.png",
    imageAlt:
      "Infographic titled “Autolykos: Mining Without Masters” showing a GPU mining farm on consumer hardware and bullet points explaining how Ergo’s Autolykos Proof-of-Work keeps mining open and decentralized.",
    publishDate: "2025-03-16T00:00:00.000Z",
    readingTimeMinutes: 5,
    seoTitle: "Autolykos: Mining Without Masters on Ergo",
    seoDescription:
      "Learn how Ergo’s Autolykos memory-hard Proof-of-Work keeps mining open to consumer GPUs, limits pool dominance, funds long-term security with block rewards plus storage rent, and makes 51% attacks expensive.",
  },
  {
    slug: "who-starts-with-the-coins-vc-allocation-vs-ergo-supply",
    title: "Who Starts With the Coins?",
    shortDescription:
      "How typical VC chains reserve large token chunks for insiders while Ergo’s supply is earned over time via PoW block rewards.",
    category: "vc-chains-narratives",
    level: "beginner",
    tags: [
      "Ergo",
      "token distribution",
      "VC chains",
      "ICO",
      "premine",
      "fair launch",
      "Proof-of-Work",
      "supply schedule",
      "tokenomics",
      "miners",
    ],
    previewImageUrl:
      "/infographics/who-starts-with-the-coins-vc-allocation-vs-ergo-supply.png",
    fullImageUrl:
      "/infographics/who-starts-with-the-coins-vc-allocation-vs-ergo-supply.png",
    imageAlt:
      "Infographic titled “Who Starts With the Coins?” comparing a typical VC chain token allocation pie chart with Ergo’s PoW-only supply over time.",
    publishDate: "2025-03-18T00:00:00.000Z",
    readingTimeMinutes: 5,
    seoTitle: "Who Starts With the Coins? VC Token Allocation vs Ergo PoW Supply",
    seoDescription:
      "See how typical VC chains reserve large token chunks for insiders while Ergo has no ICO, no premine and no VC allocation—only PoW block rewards earned by miners and users over time.",
  },
  {
    slug: "how-is-security-maintained-pos-vs-ergo-autolykos",
    title: "How Is Security Maintained?",
    shortDescription:
      "How network security and rewards differ between typical Proof-of-Stake staking and Ergo’s ASIC-resistant Autolykos GPU mining.",
    category: "consensus-mining",
    level: "beginner",
    tags: [
      "Ergo",
      "Autolykos",
      "mining",
      "Proof-of-Work",
      "Proof-of-Stake",
      "staking",
      "network security",
      "ASIC resistance",
      "decentralization",
      "GPU mining",
    ],
    previewImageUrl:
      "/infographics/how-is-security-maintained-pos-vs-ergo-autolykos.png",
    fullImageUrl:
      "/infographics/how-is-security-maintained-pos-vs-ergo-autolykos.png",
    imageAlt:
      "Infographic titled “How Is Security Maintained?” comparing typical Proof-of-Stake staking, where validators and large stakers secure the network, with Ergo’s Autolykos GPU mining model.",
    publishDate: "2025-03-17T00:00:00.000Z",
    readingTimeMinutes: 5,
    seoTitle:
      "How Is Security Maintained? Proof-of-Stake vs Ergo Autolykos Mining",
    seoDescription:
      "See how network security differs between typical Proof-of-Stake staking, which concentrates rewards with large stakers, and Ergo’s ASIC-resistant Autolykos GPU mining designed for broader participation.",
  },
  {
    slug: "how-it-starts-vc-chain-vs-ergo",
    title: "How It Starts: VC Chain vs Ergo",
    shortDescription:
      "How a typical VC-backed blockchain launch contrasts with Ergo’s fair-launched PoW path from research to long-term security.",
    category: "vc-chains-narratives",
    level: "beginner",
    tags: [
      "Ergo",
      "VC chain",
      "fair launch",
      "ICO",
      "token distribution",
      "Proof-of-Work",
      "eUTXO",
      "Sigma Protocols",
      "storage rent",
      "tail emission",
    ],
    previewImageUrl: "/infographics/how-it-starts-vc-chain-vs-ergo.png",
    fullImageUrl: "/infographics/how-it-starts-vc-chain-vs-ergo.png",
    imageAlt:
      "Infographic titled “How It Starts: VC Chain vs Ergo” comparing the typical VC chain launch funnel with Ergo’s fair-launched PoW path, from private sales versus open mining to long-term security.",
    publishDate: "2025-03-19T00:00:00.000Z",
    readingTimeMinutes: 6,
    seoTitle: "How It Starts: VC Chain vs Ergo Fair-Launched PoW",
    seoDescription:
      "Visual comparison of a typical VC-backed blockchain launch—private sales, seed rounds, ICOs and insider exits—against Ergo’s research-driven, fair-launched Proof-of-Work model with open mining and long-term security.",
  },
  {
    slug: "engineered-for-global-settlement-ergo",
    title: "Engineered for Global Settlement",
    shortDescription:
      "How Ergo’s PoW L1 with ~2-minute blocks, low predictable fees and an MEV-aware eUTXO model is engineered for global settlement.",
    category: "scalability-settlement",
    level: "intermediate",
    tags: [
      "Ergo",
      "global settlement",
      "MEV resistance",
      "fees",
      "throughput",
      "Proof-of-Work",
      "eUTXO",
      "L1 vs L2",
      "Bitcoin",
      "Ethereum",
    ],
    previewImageUrl:
      "/infographics/engineered-for-global-settlement-ergo.png",
    fullImageUrl:
      "/infographics/engineered-for-global-settlement-ergo.png",
    imageAlt:
      "Infographic titled “Engineered for Global Settlement” comparing Ergo L1 settlement with Bitcoin, Ethereum and typical L2 rollups in terms of block time, fees, MEV and state model.",
    publishDate: "2025-03-05T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "Engineered for Global Settlement: Ergo vs Bitcoin, Ethereum & L2s",
    seoDescription:
      "See how Ergo’s PoW L1 offers ~2-minute blocks, low predictable fees, an MEV-aware eUTXO design and accessible full nodes compared with Bitcoin, Ethereum and typical L2 rollups.",
  },
  {
    slug: "ergo-blockchain-research-driven-cypherpunk-aligned",
    title: "Ergo Blockchain: Research-Driven & Cypherpunk-Aligned",
    shortDescription:
      "Fair-launched Proof-of-Work blockchain with eUTXO smart contracts, Sigma Protocols privacy and a sustainability stack built for cypherpunks.",
    category: "ergo-overview",
    level: "intermediate",
    tags: [
      "Ergo",
      "research-driven",
      "cypherpunk",
      "fair launch",
      "Proof-of-Work",
      "eUTXO",
      "Sigma Protocols",
      "Autolykos",
      "NiPoPoWs",
      "storage rent",
      "sustainability",
    ],
    previewImageUrl:
      "/infographics/ergo-blockchain-research-driven-cypherpunk-aligned.png",
    fullImageUrl:
      "/infographics/ergo-blockchain-research-driven-cypherpunk-aligned.png",
    imageAlt:
      "Infographic titled “Ergo Blockchain: Research-Driven & Cypherpunk-Aligned” summarizing Ergo’s origins and fair launch, core technologies like eUTXO and Sigma Protocols, and long-term sustainability features such as Autolykos, NiPoPoWs and storage rent.",
    publishDate: "2025-03-21T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle:
      "Ergo Blockchain: Research-Driven, Cypherpunk-Aligned & Fair-Launched PoW",
    seoDescription:
      "Discover how Ergo combines a fair-launched Proof-of-Work, eUTXO smart contracts, Sigma Protocols privacy and long-term sustainability features like Autolykos, NiPoPoWs and storage rent.",
  },
  {
    slug: "blockchain-matrix-where-ergo-actually-fits",
    title: "Blockchain Matrix: Where Ergo Actually Fits",
    shortDescription:
      "Matrix comparing Bitcoin, Ethereum, Monero, Zcash, Cardano, Solana, a typical VC chain and Ergo across consensus, launch, privacy, MEV resistance, storage rent and fees.",
    category: "comparisons-matrices",
    level: "intermediate",
    tags: [
      "Ergo",
      "blockchain comparison",
      "Bitcoin",
      "Ethereum",
      "Monero",
      "Zcash",
      "Cardano",
      "Solana",
      "VC chains",
      "fair launch",
      "eUTXO",
      "MEV resistance",
      "storage rent",
      "Sigma Protocols",
    ],
    previewImageUrl:
      "/infographics/blockchain-matrix-where-ergo-actually-fits.png",
    fullImageUrl:
      "/infographics/blockchain-matrix-where-ergo-actually-fits.png",
    imageAlt:
      "Infographic titled “Blockchain Matrix: Where Ergo Actually Fits”, showing a comparison table of major chains like Bitcoin, Ethereum, Monero, Zcash, Cardano, Solana, a typical VC chain, and Ergo across consensus, launch, privacy, MEV and fees.",
    publishDate: "2025-03-24T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "Blockchain Matrix: Where Ergo Fits vs Bitcoin, Ethereum & VC Chains",
    seoDescription:
      "See how Ergo compares to Bitcoin, Ethereum, Monero, Zcash, Cardano, Solana and typical VC chains across consensus, launch model, privacy, MEV resistance, storage rent and fees.",
  },
  {
    slug: "money-without-masters-ergo-vs-banks-and-vc-crypto",
    title: "Money Without Masters",
    shortDescription:
      "How Ergo’s fair-launched PoW, eUTXO and cypherpunk design aim to create “money without masters” versus banks and VC/ICO crypto.",
    category: "vc-chains-narratives",
    level: "beginner",
    tags: [
      "Ergo",
      "money without masters",
      "traditional banking",
      "VC crypto",
      "fair launch",
      "Proof-of-Work",
      "eUTXO",
      "Sigma Protocols",
      "financial sovereignty",
      "cypherpunk ethos",
    ],
    previewImageUrl:
      "/infographics/money-without-masters-ergo-vs-banks-and-vc-crypto.png",
    fullImageUrl:
      "/infographics/money-without-masters-ergo-vs-banks-and-vc-crypto.png",
    imageAlt:
      "Infographic titled “Money Without Masters” comparing traditional banking and VC/ICO crypto to the Ergo blockchain in terms of control, censorship and who really owns your money.",
    publishDate: "2025-03-25T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "Money Without Masters: Ergo vs Traditional Banking & VC Crypto",
    seoDescription:
      "Compare traditional banking and VC/ICO crypto to the Ergo blockchain and see how fair-launched PoW, eUTXO and cypherpunk design aim to create truly sovereign, censorship-resistant money.",
  },
  {
    slug: "ergo-subblock-technology-boosting-throughput-with-parallelism",
    title: "Ergo’s Subblock Technology: Boosting Throughput with Parallelism",
    shortDescription:
      "How key blocks and subblocks let Ergo increase transaction capacity and confirmation speed without sacrificing security.",
    category: "scalability-performance",
    level: "intermediate",
    tags: [
      "Ergo",
      "subblocks",
      "throughput",
      "scalability",
      "parallelism",
      "key blocks",
      "block production",
      "user experience",
      "blockchain performance",
    ],
    previewImageUrl:
      "/infographics/ergo-subblock-technology-boosting-throughput-with-parallelism.png",
    fullImageUrl:
      "/infographics/ergo-subblock-technology-boosting-throughput-with-parallelism.png",
    imageAlt:
      "Infographic titled “Ergo’s Subblock Technology: Boosting Throughput with Parallelism” comparing traditional sequential blockchains with Ergo’s key blocks and subblocks, and showing how this improves throughput and UX.",
    publishDate: "2025-03-06T00:00:00.000Z",
    readingTimeMinutes: 6,
    seoTitle: "Ergo Subblock Technology: Higher Throughput with Parallel Blocks",
    seoDescription:
      "Learn how Ergo’s subblock technology separates key blocks from transaction subblocks, enabling parallel production, faster confirmations and higher throughput without sacrificing security.",
  },
  {
    slug: "ergo-oracle-pools-decentralized-reliable-real-world-data",
    title: "Ergo’s Oracle Pools: Decentralized & Reliable Real-World Data",
    shortDescription:
      "How decentralized oracle pools aggregate multiple sources into on-chain data boxes for robust, trustless feeds.",
    category: "eutxo-smart-contracts",
    level: "intermediate",
    tags: [
      "Ergo",
      "oracle pools",
      "oracles",
      "real-world data",
      "off-chain data",
      "data feeds",
      "DeFi",
      "eUTXO",
      "Sigma Protocols",
      "decentralization",
    ],
    previewImageUrl:
      "/infographics/ergo-oracle-pools-decentralized-reliable-real-world-data.png",
    fullImageUrl:
      "/infographics/ergo-oracle-pools-decentralized-reliable-real-world-data.png",
    imageAlt:
      "Infographic titled “Ergo’s Oracle Pools: Decentralized & Reliable Real-World Data” explaining the off-chain data challenge, decentralized oracle pools solution, how it works, and the benefits.",
    publishDate: "2025-03-07T00:00:00.000Z",
    readingTimeMinutes: 6,
    seoTitle: "Ergo Oracle Pools: Decentralized & Reliable Real-World Data",
    seoDescription:
      "Learn how Ergo’s decentralized oracle pools aggregate data from multiple oracles into on-chain data boxes, delivering trustless, robust and cost-effective real-world data feeds for DeFi.",
  },
  {
    slug: "ergo-nipopows-scalable-trustless-light-clients",
    title: "Ergo NiPoPoWs: The Key to Scalable, Trustless Light Clients",
    shortDescription:
      "How NiPoPoWs let light clients verify PoW security with tiny superblock proofs for mobile, sidechains and bridges.",
    category: "nipopows-light-clients",
    level: "advanced",
    tags: [
      "Ergo",
      "NiPoPoWs",
      "light clients",
      "Proof-of-Work",
      "superblocks",
      "mobile wallets",
      "decentralization",
      "cross-chain",
      "sidechains",
      "bridges",
    ],
    previewImageUrl:
      "/infographics/ergo-nipopows-scalable-trustless-light-clients.png",
    fullImageUrl:
      "/infographics/ergo-nipopows-scalable-trustless-light-clients.png",
    imageAlt:
      "Infographic titled “Ergo NiPoPoWs: The Key to Scalable, Trustless Light Clients” comparing heavy full nodes with NiPoPoW proofs and listing benefits like trustless light wallets, ultra-lightweight sync and cross-chain interoperability.",
    publishDate: "2025-03-08T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "Ergo NiPoPoWs: Scalable, Trustless Light Clients Explained",
    seoDescription:
      "See how Ergo’s NiPoPoWs let light clients verify PoW security with tiny superblock proofs, enabling trustless mobile wallets, ultra-fast sync and cross-chain interoperability.",
  },
  {
    slug: "ergo-privacy-non-interactive-efficient",
    title: "Ergo Privacy: Non-Interactive & Efficient",
    shortDescription:
      "How Sigma Protocols, eUTXO, ErgoMixer and NiPoPoWs provide built-in privacy on Ergo without trusted third parties.",
    category: "privacy-sigma",
    level: "intermediate",
    tags: [
      "Ergo",
      "privacy",
      "Sigma Protocols",
      "zero-knowledge",
      "eUTXO",
      "ErgoMixer",
      "NiPoPoWs",
      "non-interactive proofs",
      "light clients",
      "decentralization",
    ],
    previewImageUrl: "/infographics/ergo-privacy-non-interactive-efficient.png",
    fullImageUrl: "/infographics/ergo-privacy-non-interactive-efficient.png",
    imageAlt:
      "Infographic titled “Ergo Privacy: Non-Interactive & Efficient” explaining how Sigma Protocols, the eUTXO model, ErgoMixer and NiPoPoWs together provide built-in privacy on Ergo.",
    publishDate: "2025-03-13T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "Ergo Privacy: Sigma Protocols, eUTXO, ErgoMixer & NiPoPoWs",
    seoDescription:
      "Discover how Ergo delivers non-interactive, efficient privacy using Sigma Protocols, the eUTXO model, ErgoMixer and NiPoPoWs light-client proofs—without trusted third parties.",
  },
  {
    slug: "ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners",
    title: "Ergo Storage Rent: Preventing Blockchain Bloat & Rewarding Miners",
    shortDescription:
      "How storage rent cleans up state bloat, keeps Ergo nodes lean and rewards miners beyond block rewards.",
    category: "storage-rent-economics",
    level: "intermediate",
    tags: [
      "Ergo",
      "storage rent",
      "state bloat",
      "blockchain sustainability",
      "miners",
      "full nodes",
      "eUTXO",
      "long-term viability",
    ],
    previewImageUrl:
      "/infographics/ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners.png",
    fullImageUrl:
      "/infographics/ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners.png",
    imageAlt:
      "Infographic titled “Ergo Storage Rent: Preventing Blockchain Bloat & Rewarding Miners” explaining the state bloat problem, the storage rent mechanism and its sustainability benefits.",
    publishDate: "2025-03-04T00:00:00.000Z",
    readingTimeMinutes: 6,
    seoTitle: "Ergo Storage Rent: Fixing Blockchain State Bloat & Rewarding Miners",
    seoDescription:
      "Learn how Ergo’s storage rent makes inactive UTXOs pay a small fee after ~4 years, cleaning up state bloat, keeping nodes lean and giving miners sustainable income beyond block rewards.",
  },
  {
    slug: "ergo-eutxo-model-bitcoin-security-smart-contract-flexibility",
    title: "Ergo’s eUTXO Model: Bitcoin’s Security Meets Smart Contract Flexibility",
    shortDescription:
      "How Ergo’s extended UTXO design combines Bitcoin-grade security with powerful smart contracts.",
    category: "eutxo-smart-contracts",
    level: "intermediate",
    tags: [
      "Ergo",
      "eUTXO",
      "UTXO",
      "smart contracts",
      "Bitcoin",
      "Ethereum",
      "account model",
      "Sigma Protocols",
      "formal verification",
      "scalability",
    ],
    previewImageUrl:
      "/infographics/ergo-eutxo-model-bitcoin-security-smart-contract-flexibility.png",
    fullImageUrl:
      "/infographics/ergo-eutxo-model-bitcoin-security-smart-contract-flexibility.png",
    imageAlt:
      "Infographic titled “Ergo’s eUTXO Model: Bitcoin’s Security Meets Smart Contract Flexibility” comparing Bitcoin’s UTXO foundation, Ergo’s extended UTXO upgrade, its benefits, and eUTXO vs the account model.",
    publishDate: "2025-03-10T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "Ergo eUTXO Model: Bitcoin Security with Smart Contract Flexibility",
    seoDescription:
      "Learn how Ergo’s eUTXO model builds on Bitcoin’s UTXO security while adding smart contract flexibility, parallelism, privacy and stronger assurances than the account model.",
  },
  {
    slug: "ergoscript-cypherpunk-code-of-freedom",
    title: "ErgoScript: The Cypherpunk Code of Freedom",
    shortDescription:
      "How eUTXO, strict design principles and Sigma Protocols turn ErgoScript into a weapon of decentralization.",
    category: "dev-tooling",
    level: "intermediate",
    tags: [
      "Ergo",
      "ErgoScript",
      "smart contracts",
      "eUTXO",
      "Sigma Protocols",
      "zero-knowledge",
      "zk privacy",
      "DEX",
      "stablecoins",
      "DAO",
      "decentralization",
      "cypherpunk",
    ],
    previewImageUrl: "/infographics/ergoscript-cypherpunk-code-of-freedom.png",
    fullImageUrl: "/infographics/ergoscript-cypherpunk-code-of-freedom.png",
    imageAlt:
      "Cyberpunk-style infographic titled “ErgoScript: The Cypherpunk Code of Freedom” explaining eUTXO foundation, design principles, Sigma Protocols zk-privacy, and decentralization use cases like DEX, stablecoins and DAOs.",
    publishDate: "2025-03-22T00:00:00.000Z",
    readingTimeMinutes: 7,
    seoTitle: "ErgoScript: Cypherpunk Smart Contracts, eUTXO & ZK Privacy",
    seoDescription:
      "Explore how ErgoScript combines the eUTXO model, strict design principles and Sigma Protocols to deliver cypherpunk smart contracts, zk privacy and decentralized apps on Ergo.",
  },
  {
    slug: "ergo-blockchain-introduction-fundamentals",
    title: "Ergo Blockchain: Introduction & Fundamentals",
    shortDescription:
      "High-level introduction to the Ergo blockchain: PoW smart contracts, eUTXO, Autolykos and Sigma Protocols.",
    category: "ergo-overview",
    level: "beginner",
    tags: [
      "Ergo",
      "blockchain",
      "introduction",
      "fundamentals",
      "eUTXO",
      "Autolykos",
      "Sigma Protocols",
      "Proof-of-Work",
      "smart contracts",
      "DeFi",
    ],
    previewImageUrl: "/infographics/ergo-blockchain-introduction-fundamentals.png",
    fullImageUrl: "/infographics/ergo-blockchain-introduction-fundamentals.png",
    imageAlt:
      "Infographic titled “Ergo Blockchain: Introduction & Fundamentals” summarizing what Ergo is, the eUTXO model, Autolykos PoW, Sigma Protocols, and its mission and principles.",
    publishDate: "2025-03-23T00:00:00.000Z",
    readingTimeMinutes: 6,
    seoTitle: "Ergo Blockchain: Introduction, eUTXO, Autolykos & Sigma",
    seoDescription:
      "High-level introduction to the Ergo blockchain: PoW smart contracts, the eUTXO model, Autolykos mining, Sigma Protocols, and the project’s grassroots, fair-launch mission.",
  },
  {
    slug: "three-pillars-ergos-sustainability",
    title: "The Three Pillars of Ergo’s Sustainability",
    shortDescription:
      "How Autolykos mining, NiPoPoWs light clients and storage rent form Ergo’s protocol-level pillars for long-term sustainability.",
    category: "storage-rent-economics",
    level: "intermediate",
    tags: [
      "Ergo",
      "sustainability",
      "Autolykos",
      "NiPoPoWs",
      "storage rent",
      "full nodes",
      "scalability",
      "Proof-of-Work",
      "light clients",
    ],
    previewImageUrl: "/infographics/three-pillars-ergos-sustainability.png",
    fullImageUrl: "/infographics/three-pillars-ergos-sustainability.png",
    imageAlt:
      "Infographic titled “The Three Pillars of Ergo’s Sustainability” showing Autolykos mining, NiPoPoWs nodes and storage rent as protocol-level mechanisms for long-term viability.",
    publishDate: "2025-02-02T00:00:00.000Z",
    readingTimeMinutes: 5,
    seoTitle: "The Three Pillars of Ergo’s Sustainability",
    seoDescription:
      "See how Autolykos mining, NiPoPoWs light clients and storage rent form Ergo’s protocol-level pillars for long-term sustainability and accessible full nodes.",
  },
  {
    slug: "who-actually-needs-ergo",
    title: "Who Actually Needs Ergo?",
    shortDescription:
      "Who actually needs Ergo today: builders, miners, privacy-focused users and cypherpunk OGs.",
    category: "vc-chains-narratives",
    level: "beginner",
    tags: [
      "Ergo",
      "audience",
      "use cases",
      "builders",
      "developers",
      "miners",
      "Proof-of-Work",
      "privacy",
      "cypherpunks",
      "crypto ethos",
    ],
    previewImageUrl: "/infographics/who-actually-needs-ergo.png",
    fullImageUrl: "/infographics/who-actually-needs-ergo.png",
    imageAlt:
      "Infographic titled “Who Actually Needs Ergo?” showing four personas around the Ergo Σ symbol: builder/dev, miner/PoW maxi, privacy-focused user and cypherpunk OG.",
    publishDate: "2025-02-01T00:00:00.000Z",
    readingTimeMinutes: 5,
    seoTitle:
      "Who Actually Needs Ergo? Builders, Miners, Privacy Users & Cypherpunks",
    seoDescription:
      "Discover who Ergo is really built for: builders, miners, privacy-focused users and cypherpunk OGs who care about honest PoW, eUTXO, ZK and real crypto ethos.",
  },
  {
    slug: "vc-chain-vs-ergo-fair-launch",
    title: "Fair & Secure: VC Chain vs Ergo at a Glance",
    shortDescription: "How Ergo's fair PoW launch and Autolykos design differ from typical VC chains.",
    category: "vc-chains-narratives",
    level: "beginner",
    tags: ["Ergo", "fair launch", "VC chain", "tokenomics", "Autolykos", "Proof-of-Work", "decentralization", "security"],
    previewImageUrl: "/infographics/vc-chain-vs-ergo-fair-launch.png",
    fullImageUrl: "/infographics/vc-chain-vs-ergo-fair-launch.png",
    imageAlt: "Infographic comparing a typical VC-funded chain with Ergo across launch, ownership, mining, security and governance.",
    publishDate: "2025-01-20T00:00:00.000Z",
    readingTimeMinutes: 5
  },
];

// Helper functions for filtering and sorting
export function filterInfographics(
  infographics: InfographicMeta[],
  filters: {
    category?: string;
    level?: string;
    search?: string;
    sort?: string;
  }
): InfographicMeta[] {
  let filtered = [...infographics];

  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(item => item.category === filters.category);
  }

  // Filter by level
  if (filters.level && filters.level !== 'all') {
    filtered = filtered.filter(item => item.level === filters.level);
  }

  // Filter by search
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(searchLower) ||
      item.shortDescription.toLowerCase().includes(searchLower) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Sort
  switch (filters.sort) {
    case 'alphabetical':
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'popular':
      // For now, sort by reading time as a proxy for complexity/popularity
      filtered.sort((a, b) => (b.readingTimeMinutes || 0) - (a.readingTimeMinutes || 0));
      break;
    case 'newest':
    default:
      filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
      break;
  }

  return filtered;
}

export function getInfographicBySlug(slug: string): InfographicMeta | undefined {
  return infographics.find(item => item.slug === slug);
}

export function getRelatedInfographics(current: InfographicMeta, limit: number = 3): InfographicMeta[] {
  return infographics
    .filter(item => item.slug !== current.slug && item.category === current.category)
    .slice(0, limit);
}
