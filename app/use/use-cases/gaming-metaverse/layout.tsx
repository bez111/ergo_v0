import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gaming & Metaverse on Ergo | Blockchain Gaming",
  description: "Build blockchain games and metaverse experiences on Ergo. In-game NFTs, play-to-earn mechanics, dynamic items, and decentralized game economies.",
  keywords: "gaming, metaverse, blockchain games, play-to-earn, game NFTs, virtual worlds, Web3 gaming",
  openGraph: {
    title: "Gaming & Metaverse on Ergo",
    description: "Next-gen gaming assets and digital worlds on Ergo blockchain.",
    images: ["/og-gaming.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/use-cases/gaming-metaverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming on Ergo",
    description: "Build blockchain games with NFTs and play-to-earn",
    images: ["/og-gaming.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/use-cases/gaming-metaverse",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 