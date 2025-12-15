/**
 * Miners page data - English source of truth
 * Translations are merged via miners-i18n.ts
 */

export interface CoreValue {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ComparisonRow {
  criterion: string;
  bitcoin: { status: string; text: string };
  ethereum: { status: string; text: string };
  monero: { status: string; text: string };
  ergo: { status: string; text: string };
}

export interface MiningPool {
  id: string;
  name: string;
  url: string;
  fee: string;
  paymentSystem: string;
  minPayout: string;
  hashrate: string;
  miners: number;
  features: string[];
  servers: string[];
  tags: string[];
}

export interface MiningSoftware {
  id: string;
  name: string;
  gpus: string[];
  fee: string;
  recommended: string;
  download: string;
}

export interface MiningStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  duration: string;
}

export interface MiningTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  type: "external" | "internal";
}

export interface MinerFAQ {
  id: string;
  question: string;
  answer: string;
}

// Core values
export const coreValues: CoreValue[] = [
  {
    id: "asicResistant",
    icon: "Cpu",
    title: "",
    description: "",
    highlight: ""
  },
  {
    id: "fairLaunch",
    icon: "Shield",
    title: "",
    description: "",
    highlight: ""
  },
  {
    id: "realUseCases",
    icon: "TrendingUp",
    title: "",
    description: "",
    highlight: ""
  },
  {
    id: "storageRent",
    icon: "Coins",
    title: "",
    description: "",
    highlight: ""
  }
];

// Comparison data
export const comparisonRows: ComparisonRow[] = [
  {
    criterion: "",
    bitcoin: { status: "bad", text: "" },
    ethereum: { status: "warning", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "warning", text: "" },
    ethereum: { status: "bad", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "warning", text: "" },
    ethereum: { status: "bad", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "good", text: "" },
    ethereum: { status: "good", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "bad", text: "" },
    ethereum: { status: "bad", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  }
];

// Mining pools
export const miningPools: MiningPool[] = [
  {
    id: "getblok",
    name: "GetBlok",
    url: "https://ergo.getblok.io",
    fee: "1%",
    paymentSystem: "PPLNS",
    minPayout: "0.5 ERG",
    hashrate: "3.2 TH/s",
    miners: 2543,
    features: [],
    servers: ["EU", "US", "Asia"],
    tags: ["beginner", "popular"]
  },
  {
    id: "2miners",
    name: "2Miners",
    url: "https://2miners.com/erg-mining-pool",
    fee: "1%",
    paymentSystem: "PPLNS",
    minPayout: "0.1 ERG",
    hashrate: "2.7 TH/s",
    miners: 3218,
    features: [],
    servers: ["EU", "US", "Asia", "RU"],
    tags: ["beginner", "support"]
  },
  {
    id: "herominers",
    name: "HeroMiners",
    url: "https://ergo.herominers.com",
    fee: "0.9%",
    paymentSystem: "PROP",
    minPayout: "0.5 ERG",
    hashrate: "2.0 TH/s",
    miners: 1847,
    features: [],
    servers: ["EU", "US", "Asia"],
    tags: ["low-fee", "decentralized"]
  },
  {
    id: "woolypooly",
    name: "WoolyPooly",
    url: "https://woolypooly.com/en/coin/erg",
    fee: "0.9%",
    paymentSystem: "PPLNS",
    minPayout: "0.5 ERG",
    hashrate: "1.5 TH/s",
    miners: 1234,
    features: [],
    servers: ["EU", "US"],
    tags: ["low-fee", "decentralized"]
  },
  {
    id: "f2pool",
    name: "F2Pool",
    url: "https://www.f2pool.com",
    fee: "2%",
    paymentSystem: "PPS+",
    minPayout: "1 ERG",
    hashrate: "1.3 TH/s",
    miners: 892,
    features: [],
    servers: ["Asia", "US", "EU"],
    tags: ["decentralized"]
  },
  {
    id: "nanopool",
    name: "Nanopool",
    url: "https://ergo.nanopool.org",
    fee: "1%",
    paymentSystem: "PPLNS",
    minPayout: "1 ERG",
    hashrate: "1.1 TH/s",
    miners: 1456,
    features: [],
    servers: ["EU", "US", "Asia", "AU"],
    tags: ["decentralized"]
  }
];

// Mining software
export const miningSoftware: MiningSoftware[] = [
  {
    id: "nbminer",
    name: "NBMiner",
    gpus: ["NVIDIA", "AMD"],
    fee: "2%",
    recommended: "",
    download: "https://github.com/NebuTech/NBMiner/releases"
  },
  {
    id: "trex",
    name: "T-Rex",
    gpus: ["NVIDIA"],
    fee: "1%",
    recommended: "",
    download: "https://github.com/trexminer/T-Rex/releases"
  },
  {
    id: "teamredminer",
    name: "TeamRedMiner",
    gpus: ["AMD"],
    fee: "2%",
    recommended: "",
    download: "https://github.com/todxx/teamredminer/releases"
  },
  {
    id: "lolminer",
    name: "lolMiner",
    gpus: ["NVIDIA", "AMD"],
    fee: "1%",
    recommended: "",
    download: "https://github.com/Lolliedieb/lolMiner-releases/releases"
  }
];

// Mining steps
export const miningSteps: MiningStep[] = [
  {
    step: "01",
    title: "",
    description: "",
    details: [],
    icon: "Cpu",
    duration: "5 min"
  },
  {
    step: "02",
    title: "",
    description: "",
    details: [],
    icon: "Settings",
    duration: "10 min"
  },
  {
    step: "03",
    title: "",
    description: "",
    details: [],
    icon: "Wrench",
    duration: "15 min"
  },
  {
    step: "04",
    title: "",
    description: "",
    details: [],
    icon: "Play",
    duration: "10 min"
  }
];

// Mining tools
export const miningTools: MiningTool[] = [
  {
    id: "calculator",
    name: "",
    description: "",
    icon: "Calculator",
    url: "https://minerstat.com/coin/ERG",
    type: "external"
  },
  {
    id: "guide",
    name: "",
    description: "",
    icon: "HardDrive",
    url: "/docs/miners/mining-guides",
    type: "internal"
  },
  {
    id: "autolykos",
    name: "",
    description: "",
    icon: "BarChart3",
    url: "/technology/secure-pow",
    type: "internal"
  },
  {
    id: "storage-rent",
    name: "",
    description: "",
    icon: "Cpu",
    url: "/technology/storage-rent",
    type: "internal"
  }
];

// FAQs (HTML content for links)
export const minerFaqs: MinerFAQ[] = [
  { id: "0", question: "", answer: "" },
  { id: "1", question: "", answer: "" },
  { id: "2", question: "", answer: "" },
  { id: "3", question: "", answer: "" },
  { id: "4", question: "", answer: "" },
  { id: "5", question: "", answer: "" },
  { id: "6", question: "", answer: "" },
  { id: "7", question: "", answer: "" },
  { id: "8", question: "", answer: "" }
];

