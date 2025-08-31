import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Identity & Reputation on Ergo | Self-Sovereign Identity",
  description: "Build decentralized identity and reputation systems on Ergo. DIDs, verifiable credentials, Sybil resistance, and non-transferable reputation tokens.",
  keywords: "identity, reputation, DID, self-sovereign identity, verifiable credentials, Sybil resistance, Web3 identity",
  openGraph: {
    title: "Identity & Reputation on Ergo",
    description: "Self-sovereign identity and Web3 reputation systems.",
    images: ["/og-identity.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/identity-reputation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Identity on Ergo",
    description: "Decentralized identity and reputation systems",
    images: ["/og-identity.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/identity-reputation",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 