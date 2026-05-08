/**
 * Single source of truth for Ergo wallet metadata.
 *
 * Used by:
 *   - /wallet (full registry, all 7 wallets)
 *   - /start (3 featured wallets selected by id)
 *   - Anywhere else that displays wallet info — pull by id, never duplicate
 *
 * UX/E-E-A-T fields:
 *   - lastVerified: ISO date the entry was last manually checked against the
 *     project's source. Display this on each card so users can judge freshness.
 *   - status: "Mainnet" / "Beta" / "Prototype" — explicit, not implied.
 *
 * To add or update a wallet: edit this file. Never inline wallet data
 * into a component or messages JSON again.
 */

export type WalletCategory = "Desktop" | "Mobile" | "Browser" | "Hardware" | "Paper"
export type WalletType = "Hot" | "Cold" | "Hybrid"
export type WalletSecurity = "High" | "Very High" | "Maximum"
export type WalletStatus = "Mainnet" | "Beta" | "Prototype"
/** Icon name from lucide-react. Component maps this to a real component. */
export type WalletIconName =
  | "Chrome"
  | "Monitor"
  | "Smartphone"
  | "Apple"
  | "Zap"
  | "HardDrive"
  | "Lock"

export interface WalletEntry {
  id: string
  name: string
  /** Short, user-facing description. Match across pages. */
  description: string
  /** Platforms / channels — Chrome, iOS, Linux, etc. */
  platforms: string[]
  /** Bullet-list features for the card body. */
  features: string[]
  category: WalletCategory
  /** Hot = online, Cold = offline-only, Hybrid = both modes. */
  type: WalletType
  /** Authoritative claim, not a star rating. */
  securityLevel: WalletSecurity
  /** Maturity status — match the same labels as /audits page. */
  status: WalletStatus
  /** Project home (often GitHub for open-source wallets). */
  websiteUrl: string
  /** Direct download / install URL (optional — Paper has no download). */
  downloadUrl?: string
  /** Lucide icon name — component picks the actual icon. */
  iconName: WalletIconName
  /** Display indicator. */
  isRecommended?: boolean
  /** Self-reported install base — order of magnitude only. */
  users?: string
  /** Star rating used by /wallet card UI. Treat as community signal. */
  rating?: number
  /** Tailwind gradient classes for /wallet card accent. */
  color?: string
  /** YYYY-MM-DD — date this entry was last manually verified. */
  lastVerified: string
  /** Optional risk note shown inline on the card (e.g. phishing for web wallets). */
  warning?: string
}

const VERIFIED = "2026-05-08"

export const wallets: WalletEntry[] = [
  {
    id: "nautilus",
    name: "Nautilus Wallet",
    description: "Feature-rich browser extension wallet with dApp connectivity and advanced DeFi features.",
    platforms: ["Chrome", "Firefox", "Edge"],
    features: ["dApp Integration", "Hardware Wallet Support", "Multi-signature", "Token Management", "DeFi Ready"],
    category: "Browser",
    type: "Hot",
    securityLevel: "High",
    status: "Mainnet",
    websiteUrl: "https://github.com/capt-nemo429/nautilus-wallet",
    downloadUrl: "https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai",
    iconName: "Chrome",
    isRecommended: true,
    users: "50K+",
    rating: 4.8,
    color: "from-orange-500/20 to-orange-500/5",
    lastVerified: VERIFIED,
    warning: "Verify the URL before connecting (browser wallets carry phishing risk).",
  },
  {
    id: "satergo",
    name: "Satergo Wallet",
    description: "Desktop wallet with full node integration and advanced privacy features.",
    platforms: ["Windows", "macOS", "Linux"],
    features: ["Full Node", "ErgoMixer Integration", "Advanced Privacy", "Multi-Account", "Cold Storage"],
    category: "Desktop",
    type: "Hybrid",
    securityLevel: "Very High",
    status: "Mainnet",
    websiteUrl: "https://satergo.com",
    downloadUrl: "https://github.com/Satergo/Satergo/releases",
    iconName: "Monitor",
    users: "15K+",
    rating: 4.9,
    color: "from-cyan-500/20 to-cyan-500/5",
    lastVerified: VERIFIED,
  },
  {
    id: "ergo-wallet-android",
    name: "Ergo Wallet (Android)",
    description: "Official mobile wallet for Android with QR scanning and a simple interface.",
    platforms: ["Android"],
    features: ["QR Scanning", "Simple Interface", "Backup & Restore", "Multi-language", "Offline Signing"],
    category: "Mobile",
    type: "Hot",
    securityLevel: "High",
    status: "Mainnet",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    downloadUrl: "https://play.google.com/store/apps/details?id=org.ergoplatform.android",
    iconName: "Smartphone",
    users: "25K+",
    rating: 4.6,
    color: "from-purple-500/20 to-purple-500/5",
    lastVerified: VERIFIED,
  },
  {
    id: "ergo-wallet-ios",
    name: "Ergo Wallet (iOS)",
    description: "Official mobile wallet for iOS with intuitive design and secure storage.",
    platforms: ["iOS"],
    features: ["Touch ID", "Face ID", "iCloud Backup", "Simple Interface", "Secure Enclave"],
    category: "Mobile",
    type: "Hot",
    securityLevel: "High",
    status: "Mainnet",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    downloadUrl: "https://apps.apple.com/app/ergo-wallet/id1542086230",
    iconName: "Apple",
    users: "20K+",
    rating: 4.7,
    color: "from-blue-500/20 to-blue-500/5",
    lastVerified: VERIFIED,
  },
  {
    id: "safew",
    name: "SAFEW",
    description: "Simple And Fast Ergo Wallet — browser extension (with optional desktop build). Verify the source URL before installing — web wallets carry phishing risk.",
    platforms: ["Chrome", "Brave", "Desktop (Electron)"],
    features: ["dApp Connector", "Multiple Accounts", "Token Support", "Lightweight", "Open Source"],
    category: "Browser",
    type: "Hot",
    securityLevel: "High",
    status: "Mainnet",
    websiteUrl: "https://github.com/ThierryM1212/SAFEW",
    downloadUrl: "https://github.com/ThierryM1212/SAFEW/releases",
    iconName: "Zap",
    users: "8K+",
    rating: 4.5,
    color: "from-green-500/20 to-green-500/5",
    lastVerified: VERIFIED,
    warning: "Browser wallet — verify source URL before installing to avoid phishing.",
  },
  {
    id: "ledger",
    name: "Ledger Hardware Wallet",
    description: "Cold storage solution with Ergo support for maximum security.",
    platforms: ["Hardware"],
    features: ["Cold Storage", "Hardware Security", "PIN Protection", "Recovery Phrase", "Offline Signing"],
    category: "Hardware",
    type: "Cold",
    securityLevel: "Maximum",
    status: "Mainnet",
    websiteUrl: "https://www.ledger.com",
    iconName: "HardDrive",
    isRecommended: true,
    users: "5M+",
    rating: 4.9,
    color: "from-red-500/20 to-red-500/5",
    lastVerified: VERIFIED,
  },
  {
    id: "ergo-paper-wallet",
    name: "Ergo Paper Wallet",
    description: "Generate secure paper wallets for cold storage of ERG.",
    platforms: ["Web"],
    features: ["Offline Generation", "Cold Storage", "No Registration", "Open Source", "Maximum Security"],
    category: "Paper",
    type: "Cold",
    securityLevel: "Maximum",
    status: "Mainnet",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    iconName: "Lock",
    users: "Used by thousands",
    rating: 4.8,
    color: "from-indigo-500/20 to-indigo-500/5",
    lastVerified: VERIFIED,
  },
]

/** Lookup helper. Throws if id is not found — use it eagerly so missing
 *  references break the build, not silently render empty cards. */
export function getWalletById(id: string): WalletEntry {
  const w = wallets.find((x) => x.id === id)
  if (!w) throw new Error(`Unknown wallet id: ${id}`)
  return w
}

/** Subset used by /start "Recommended for newcomers". Order matters. */
export const featuredWalletIds = ["nautilus", "ergo-wallet-android", "safew"] as const
