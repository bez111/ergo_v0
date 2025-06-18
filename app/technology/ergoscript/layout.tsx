import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ErgoScript - Secure Smart Contract Language | Ergo Platform",
  description: "Explore ErgoScript, a powerful smart contract language built for the eUTXO model. Features formal verification, re-entrancy protection, and advanced cryptographic primitives.",
  keywords: [
    "ErgoScript",
    "smart contract language",
    "eUTXO",
    "formal verification",
    "cryptography",
    "DeFi",
    "blockchain development",
    "sigma protocols",
    "blockchain programming",
    "secure contracts",
    "re-entrancy protection",
    "Ergo blockchain",
    "cryptocurrency development"
  ],
  openGraph: {
    title: "ErgoScript - Secure Smart Contract Language",
    description: "Explore ErgoScript, a powerful smart contract language built for the eUTXO model. Features formal verification, re-entrancy protection, and advanced cryptographic primitives.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ErgoScript - Secure Smart Contract Language",
    description: "Build secure, verifiable smart contracts. Eliminates re-entrancy attacks and enables formal verification.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ergoplatform.org/technology/ergoscript",
  },
}

export default function ErgoScriptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 