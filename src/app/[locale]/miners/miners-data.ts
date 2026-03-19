import {
  Cpu,
  Shield,
  TrendingUp,
  Coins,
  Calculator,
  HardDrive,
  BarChart3,
  Settings,
  Wrench,
  Play,
} from 'lucide-react'

export const coreValues = [
  {
    icon: Cpu,
    title: "ASIC-Resistant",
    description: "GPU-only mining. No ASICs. No industrial farms squeezing you out. Your gaming rig stays competitive.",
    highlight: "Level playing field"
  },
  {
    icon: Shield,
    title: "Fair Launch",
    description: "Zero pre-mine. Zero dev tax. Zero VC allocation. Every ERG mined fairly since day one.",
    highlight: "No insider dumps"
  },
  {
    icon: TrendingUp,
    title: "Real Use Cases",
    description: "DeFi, DEXs, privacy features create actual demand. Not just speculation - real utility driving value.",
    highlight: "Sustainable demand"
  },
  {
    icon: Coins,
    title: "Long-term Economics",
    description: "Storage rent pays miners forever. When emissions end, you still earn. Built for decades, not pump & dump.",
    highlight: "Earn after emissions"
  }
]

export const comparison = [
  {
    criterion: "Mining Hardware",
    bitcoin: { status: "bad", text: "ASIC-only" },
    ethereum: { status: "warning", text: "Proof-of-Stake" },
    monero: { status: "good", text: "CPU/GPU friendly" },
    ergo: { status: "good", text: "GPU-optimized" }
  },
  {
    criterion: "Block Reward",
    bitcoin: { status: "warning", text: "Halving every 4y" },
    ethereum: { status: "bad", text: "No mining" },
    monero: { status: "good", text: "Tail emission" },
    ergo: { status: "good", text: "9 ERG + fees" }
  },
  {
    criterion: "Future Incentives",
    bitcoin: { status: "warning", text: "Fees only" },
    ethereum: { status: "bad", text: "No mining" },
    monero: { status: "good", text: "Perpetual rewards" },
    ergo: { status: "good", text: "Storage rent" }
  },
  {
    criterion: "Network Utility",
    bitcoin: { status: "good", text: "Store of value" },
    ethereum: { status: "good", text: "Smart contracts" },
    monero: { status: "good", text: "Privacy payments" },
    ergo: { status: "good", text: "DeFi + Privacy" }
  },
  {
    criterion: "Mining Accessibility",
    bitcoin: { status: "bad", text: "Industrial scale" },
    ethereum: { status: "bad", text: "No mining" },
    monero: { status: "good", text: "Home mining" },
    ergo: { status: "good", text: "GPU rigs viable" }
  }
]

export const miningPools = [
  {
    name: "GetBlok",
    url: "https://ergo.getblok.io",
    fee: "1%",
    paymentSystem: "PPLNS",
    minPayout: "0.5 ERG",
    hashrate: "3.2 TH/s",
    miners: 2543,
    features: ["Auto-exchange", "Mobile app", "API access"],
    servers: ["EU", "US", "Asia"],
    tags: ["beginner", "popular"]
  },
  {
    name: "2Miners",
    url: "https://2miners.com/erg-mining-pool",
    fee: "1%",
    paymentSystem: "PPLNS",
    minPayout: "0.1 ERG",
    hashrate: "2.7 TH/s",
    miners: 3218,
    features: ["24/7 Support", "Telegram bot", "Email alerts"],
    servers: ["EU", "US", "Asia", "RU"],
    tags: ["beginner", "support"]
  },
  {
    name: "HeroMiners",
    url: "https://ergo.herominers.com",
    fee: "0.9%",
    paymentSystem: "PROP",
    minPayout: "0.5 ERG",
    hashrate: "2.0 TH/s",
    miners: 1847,
    features: ["SSL support", "Worker stats", "Discord bot"],
    servers: ["EU", "US", "Asia"],
    tags: ["low-fee", "decentralized"]
  },
  {
    name: "WoolyPooly",
    url: "https://woolypooly.com/en/coin/erg",
    fee: "0.9%",
    paymentSystem: "PPLNS",
    minPayout: "0.5 ERG",
    hashrate: "1.5 TH/s",
    miners: 1234,
    features: ["Solo mining", "Telegram bot", "MEV rewards"],
    servers: ["EU", "US"],
    tags: ["low-fee", "decentralized"]
  },
  {
    name: "F2Pool",
    url: "https://www.f2pool.com",
    fee: "2%",
    paymentSystem: "PPS+",
    minPayout: "1 ERG",
    hashrate: "1.3 TH/s",
    miners: 892,
    features: ["Mobile app", "Multi-coin", "Instant payments"],
    servers: ["Asia", "US", "EU"],
    tags: ["decentralized"]
  },
  {
    name: "Nanopool",
    url: "https://ergo.nanopool.org",
    fee: "1%",
    paymentSystem: "PPLNS",
    minPayout: "1 ERG",
    hashrate: "1.1 TH/s",
    miners: 1456,
    features: ["Email notifications", "API", "Multi-language"],
    servers: ["EU", "US", "Asia", "AU"],
    tags: ["decentralized"]
  }
]

export const miningSoftware = [
  {
    name: "NBMiner",
    gpus: ["NVIDIA", "AMD"],
    fee: "2%",
    recommended: "Best for mixed rigs",
    download: "https://github.com/NebuTech/NBMiner/releases"
  },
  {
    name: "T-Rex",
    gpus: ["NVIDIA"],
    fee: "1%",
    recommended: "Best for NVIDIA cards",
    download: "https://github.com/trexminer/T-Rex/releases"
  },
  {
    name: "TeamRedMiner",
    gpus: ["AMD"],
    fee: "2%",
    recommended: "Best for AMD cards",
    download: "https://github.com/todxx/teamredminer/releases"
  },
  {
    name: "lolMiner",
    gpus: ["NVIDIA", "AMD"],
    fee: "1%",
    recommended: "Advanced users",
    download: "https://github.com/Lolliedieb/lolMiner-releases/releases"
  }
]

export const miningSteps = [
  {
    step: "01",
    title: "Check Your Hardware",
    description: "Verify GPU compatibility and power requirements for optimal mining performance.",
    details: [
      "NVIDIA GTX 1060 6GB+ or AMD RX 580 8GB+",
      "Minimum 4GB VRAM required",
      "Stable power supply (80+ Gold recommended)",
      "Adequate cooling and ventilation"
    ],
    icon: Cpu,
    duration: "5 min"
  },
  {
    step: "02",
    title: "Choose Mining Setup",
    description: "Decide between solo mining or joining a pool based on your hashrate and preferences.",
    details: [
      "Solo mining: Full block rewards but irregular payouts",
      "Pool mining: Regular payouts but shared rewards",
      "Recommended pools: Herominers, Woolypooly, 2Miners",
      "Consider pool fees (typically 1-2%)"
    ],
    icon: Settings,
    duration: "10 min"
  },
  {
    step: "03",
    title: "Install Mining Software",
    description: "Download and configure mining software compatible with Autolykos algorithm.",
    details: [
      "T-Rex Miner (NVIDIA) or TeamRedMiner (AMD)",
      "NBMiner (cross-platform alternative)",
      "Configure with pool address and wallet",
      "Optimize GPU settings for efficiency"
    ],
    icon: Wrench,
    duration: "15 min"
  },
  {
    step: "04",
    title: "Set Up Wallet & Start",
    description: "Create an Ergo wallet, configure payout address, and begin mining operations.",
    details: [
      "Download Nautilus or Yoroi wallet",
      "Generate new wallet and backup seed phrase",
      "Copy wallet address for mining payouts",
      "Start mining and monitor performance"
    ],
    icon: Play,
    duration: "10 min"
  }
]

export const miningTools = [
  {
    name: "Mining Profitability Calculator",
    description: "Calculate potential earnings based on your hardware and electricity costs.",
    icon: Calculator,
    url: "https://minerstat.com/coin/ERG",
    type: "external"
  },
  {
    name: "Official Mining Guide",
    description: "Comprehensive setup guide for beginners and advanced miners.",
    icon: HardDrive,
    url: "/docs/miners/mining-guides",
    type: "internal"
  },
  {
    name: "Autolykos Algorithm",
    description: "Learn about Ergo's ASIC-resistant Proof-of-Work algorithm.",
    icon: BarChart3,
    url: "/technology/secure-pow",
    type: "internal"
  },
  {
    name: "Storage Rent Economics",
    description: "How storage rent ensures long-term miner incentives.",
    icon: Cpu,
    url: "/technology/storage-rent",
    type: "internal"
  }
]
