/**
 * Hodlers page data - English source of truth
 * Translations are merged via hodlers-i18n.ts
 */

export interface HeroComparison {
  id: string;
  icon: string;
  title: string;
  ergo: string;
  others: string;
}

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

export interface UseCaseLink {
  text: string;
  url: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  links: UseCaseLink[];
}

export interface HolderFAQ {
  id: string;
  question: string;
  answer: string;
}

// Hero comparisons
export const heroComparisons: HeroComparison[] = [
  {
    id: "mining-access",
    icon: "Zap",
    title: "",
    ergo: "",
    others: ""
  },
  {
    id: "fair-launch",
    icon: "Shield",
    title: "",
    ergo: "",
    others: ""
  },
  {
    id: "long-term-security",
    icon: "TrendingUp",
    title: "",
    ergo: "",
    others: ""
  }
];

// Core values
export const coreValues: CoreValue[] = [
  {
    id: "soundMoney",
    icon: "Shield",
    title: "",
    description: "",
    highlight: ""
  },
  {
    id: "smartContracts",
    icon: "Code",
    title: "",
    description: "",
    highlight: ""
  },
  {
    id: "programmablePrivacy",
    icon: "Lock",
    title: "",
    description: "",
    highlight: ""
  },
  {
    id: "fairAccessible",
    icon: "Users",
    title: "",
    description: "",
    highlight: ""
  }
];

// Comparison data
export const comparisonRows: ComparisonRow[] = [
  {
    criterion: "",
    bitcoin: { status: "good", text: "" },
    ethereum: { status: "warning", text: "" },
    monero: { status: "warning", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "good", text: "" },
    ethereum: { status: "warning", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "bad", text: "" },
    ethereum: { status: "bad", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "bad", text: "" },
    ethereum: { status: "good", text: "" },
    monero: { status: "bad", text: "" },
    ergo: { status: "good", text: "" }
  },
  {
    criterion: "",
    bitcoin: { status: "good", text: "" },
    ethereum: { status: "warning", text: "" },
    monero: { status: "good", text: "" },
    ergo: { status: "good", text: "" }
  }
];

// Use cases
export const useCases: UseCase[] = [
  {
    id: "store-value",
    title: "",
    description: "",
    icon: "Wallet",
    links: [
      { text: "", url: "https://github.com/capt-nemo429/nautilus-wallet" },
      { text: "", url: "/use/get-erg" }
    ]
  },
  {
    id: "use-defi",
    title: "",
    description: "",
    icon: "TrendingUp",
    links: [
      { text: "", url: "https://rosenbridge.io" },
      { text: "", url: "/ecosystem" }
    ]
  },
  {
    id: "private-transactions",
    title: "",
    description: "",
    icon: "Eye",
    links: [
      { text: "", url: "/technology/privacy-features" },
      { text: "", url: "/technology/privacy-features" }
    ]
  },
  {
    id: "support-network",
    title: "",
    description: "",
    icon: "Shield",
    links: [
      { text: "", url: "/miners" },
      { text: "", url: "/docs/miners" }
    ]
  }
];

// FAQs (HTML content for links)
export const holderFaqs: HolderFAQ[] = [
  { "id": "0", "question": "", "answer": "" },
  { "id": "1", "question": "", "answer": "" },
  { "id": "2", "question": "", "answer": "" },
  { "id": "3", "question": "", "answer": "" },
  { "id": "4", "question": "", "answer": "" },
  { "id": "5", "question": "", "answer": "" },
  { "id": "6", "question": "", "answer": "" },
  { "id": "7", "question": "", "answer": "" },
  { "id": "8", "question": "", "answer": "" }
];

