import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NIPoPoWs - Non-Interactive Proofs of Proof-of-Work | Ergo Platform",
  description: "Learn about NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) - lightweight, trustless proofs for blockchain interoperability. Enable mobile wallets, cross-chain bridges, and efficient verification.",
  keywords: [
    "NIPoPoWs",
    "Non-Interactive Proofs of Proof-of-Work", 
    "blockchain interoperability",
    "lightweight verification",
    "mobile wallets",
    "cross-chain bridges",
    "cryptographic proofs",
    "Ergo blockchain",
    "blockchain technology"
  ],
  openGraph: {
    title: "NIPoPoWs - Lightweight Blockchain Verification | Ergo Platform",
    description: "Discover how NIPoPoWs enable trustless blockchain verification without downloading full chains. Perfect for mobile wallets and cross-chain applications.",
    type: "article",
    images: ["/og-nipopows.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "NIPoPoWs - Lightweight Blockchain Verification",
    description: "Trustless blockchain verification in seconds, not hours. Learn about NIPoPoWs technology."
  }
}

export default function NIPoPoWsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 