import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NFTs & Digital Assets on Ergo | True Digital Ownership",
  description: "Create and trade NFTs on Ergo. On-chain metadata, protocol royalties, dynamic NFTs, and programmable digital assets.",
  keywords: "NFTs, digital assets, SkyHarbor, on-chain metadata, protocol royalties, dynamic NFTs, Ergo NFT",
  openGraph: {
    title: "NFTs & Digital Assets on Ergo",
    description: "True digital ownership with on-chain metadata and protocol royalties.",
    images: ["/og-nfts.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/nfts-digital-assets",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFTs on Ergo",
    description: "Create programmable NFTs with on-chain metadata",
    images: ["/og-nfts.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/nfts-digital-assets",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 