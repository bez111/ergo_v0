import { Metadata } from "next"

export const metadata: Metadata = {
  title: "eUTXO Model - Extended UTXO for Smart Contracts | Ergo Platform",
  description: "Learn about Ergo's eUTXO model - an extended UTXO system that enables secure, parallel smart contracts with no re-entrancy attacks. Perfect for DeFi and complex financial applications.",
  keywords: [
    "eUTXO",
    "Extended UTXO",
    "smart contracts",
    "blockchain technology",
    "DeFi",
    "parallel processing",
    "re-entrancy protection",
    "Ergo blockchain",
    "UTXO model",
    "cryptocurrency"
  ],
  openGraph: {
    title: "eUTXO Model - Secure Smart Contracts | Ergo Platform",
    description: "Discover how eUTXO enables parallel, secure smart contracts without re-entrancy attacks. The foundation of Ergo's DeFi ecosystem.",
    type: "article",
    images: ["/og-eutxo-model.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "eUTXO Model - Secure Smart Contracts",
    description: "Parallel, secure smart contracts without re-entrancy attacks. The future of DeFi."
  }
}

export default function EUTXOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 