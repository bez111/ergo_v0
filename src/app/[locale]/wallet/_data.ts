/**
 * Wallet page data - English source of truth
 * Translations are merged via wallet-i18n.ts
 */

export interface WalletData {
  id: string;
  name: string;
  description: string;
  platforms: string[];
  features: string[];
  category: "Desktop" | "Mobile" | "Browser" | "Hardware" | "Paper";
  websiteUrl: string;
  downloadUrl?: string;
  rating: number;
  users: string;
  icon: string;
  isRecommended?: boolean;
  securityLevel: "High" | "Very High" | "Maximum";
  type: "Hot" | "Cold" | "Hybrid";
  color: string;
}

// All wallets
export const wallets: WalletData[] = [
  {
    id: "nautilus",
    name: "",
    description: "",
    platforms: ["Chrome", "Firefox", "Edge"],
    features: [],
    category: "Browser",
    isRecommended: true,
    websiteUrl: "https://github.com/capt-nemo429/nautilus-wallet",
    downloadUrl: "https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai",
    rating: 4.8,
    users: "50K+",
    icon: "Chrome",
    securityLevel: "High",
    type: "Hot",
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    id: "satergo",
    name: "",
    description: "",
    platforms: ["Windows", "macOS", "Linux"],
    features: [],
    category: "Desktop",
    websiteUrl: "https://satergo.com",
    downloadUrl: "https://github.com/Satergo/Satergo/releases",
    rating: 4.9,
    users: "15K+",
    icon: "Monitor",
    securityLevel: "Very High",
    type: "Hybrid",
    color: "from-cyan-500/20 to-cyan-500/5"
  },
  {
    id: "ergo-wallet-android",
    name: "",
    description: "",
    platforms: ["Android"],
    features: [],
    category: "Mobile",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    downloadUrl: "https://play.google.com/store/apps/details?id=org.ergoplatform.android",
    rating: 4.6,
    users: "25K+",
    icon: "Smartphone",
    securityLevel: "High",
    type: "Hot",
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    id: "ergo-wallet-ios",
    name: "",
    description: "",
    platforms: ["iOS"],
    features: [],
    category: "Mobile",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    downloadUrl: "https://apps.apple.com/app/ergo-wallet/id1542086230",
    rating: 4.7,
    users: "20K+",
    icon: "Apple",
    securityLevel: "High",
    type: "Hot",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    id: "safew",
    name: "",
    description: "",
    platforms: ["Windows", "macOS", "Linux"],
    features: [],
    category: "Desktop",
    websiteUrl: "https://github.com/ThierryM1212/SAFEW",
    downloadUrl: "https://github.com/ThierryM1212/SAFEW/releases",
    rating: 4.5,
    users: "8K+",
    icon: "Zap",
    securityLevel: "High",
    type: "Hot",
    color: "from-green-500/20 to-green-500/5"
  },
  {
    id: "ledger",
    name: "",
    description: "",
    platforms: ["Hardware"],
    features: [],
    category: "Hardware",
    isRecommended: true,
    websiteUrl: "https://www.ledger.com",
    rating: 4.9,
    users: "5M+",
    icon: "HardDrive",
    securityLevel: "Maximum",
    type: "Cold",
    color: "from-red-500/20 to-red-500/5"
  },
  {
    id: "ergo-paper-wallet",
    name: "",
    description: "",
    platforms: ["Web"],
    features: [],
    category: "Paper",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    rating: 4.8,
    users: "Used by thousands",
    icon: "Lock",
    securityLevel: "Maximum",
    type: "Cold",
    color: "from-indigo-500/20 to-indigo-500/5"
  }
];

