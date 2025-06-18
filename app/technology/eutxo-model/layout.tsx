import { Metadata } from "next"

export const metadata: Metadata = {
  title: "eUTXO Model - Extended UTXO for Smart Contracts | Ergo Platform",
  description: "Discover the eUTXO model, a secure and scalable approach to smart contracts. Learn how Ergo's extended UTXO model prevents re-entrancy attacks and enables complex DeFi applications.",
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
    title: "eUTXO Model - Extended UTXO for Smart Contracts",
    description: "Discover the eUTXO model, a secure and scalable approach to smart contracts. Learn how Ergo's extended UTXO model prevents re-entrancy attacks and enables complex DeFi applications.",
    type: "website",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "eUTXO Model - Secure Smart Contracts",
    description: "Parallel, secure smart contracts without re-entrancy attacks. The future of DeFi.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://ergoplatform.org/technology/eutxo-model",
  },
}

export default function EUTXOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 