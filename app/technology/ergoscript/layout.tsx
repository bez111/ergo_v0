import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ErgoScript - Secure Smart Contract Language | Ergo Platform",
  description: "Learn about ErgoScript - a secure, logic-first smart contract language built for the eUTXO model. Eliminates re-entrancy attacks and enables formal verification.",
  keywords: [
    "ErgoScript",
    "smart contract language",
    "eUTXO",
    "formal verification",
    "sigma protocols",
    "blockchain programming",
    "secure contracts",
    "re-entrancy protection",
    "Ergo blockchain",
    "cryptocurrency development"
  ],
  openGraph: {
    title: "ErgoScript - Secure Smart Contract Language | Ergo Platform",
    description: "Build secure, verifiable smart contracts with ErgoScript. Eliminates common vulnerabilities and enables formal verification.",
    type: "article",
    images: ["/og-ergoscript.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "ErgoScript - Secure Smart Contract Language",
    description: "Build secure, verifiable smart contracts. Eliminates re-entrancy attacks and enables formal verification."
  }
}

export default function ErgoScriptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 