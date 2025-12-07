import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Rent: Sustainable Blockchain | Ergo",
  description: "Discover how Ergo's storage rent prevents state bloat and ensures long-term sustainability. Lost coins are recycled, miners earn forever.",
  keywords: [
    "storage rent",
    "state bloat",
    "blockchain sustainability",
    "demurrage",
    "Ergo tokenomics",
    "lost coins recovery",
    "miner revenue",
    "UTXO maintenance",
    "blockchain economics",
    "long-term sustainability"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/storage-rent"
  },
  openGraph: {
    title: "Storage Rent - Sustainable Blockchain Economics",
    description: "Ergo's solution to state bloat. Lost coins are recycled, miners earn forever. True long-term sustainability.",
    url: "https://ergoblockchain.org/technology/storage-rent",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/storage-rent.png",
      width: 1200,
      height: 630,
      alt: "Ergo Storage Rent"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Storage Rent - Sustainable Blockchain | Ergo",
    description: "Prevent state bloat, recycle lost coins, ensure miner revenue forever.",
    images: ["https://ergoblockchain.org/og/storage-rent.png"],
    creator: "@ergoplatform",
    site: "@ergoplatform"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function StorageRentLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/storage-rent",
    headline: "Storage Rent: Ergo's Solution to State Bloat",
    description: "How storage rent ensures blockchain sustainability and prevents infinite state growth",
    image: "https://ergoblockchain.org/og/storage-rent.png",
    datePublished: "2023-01-15",
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org"
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org",
      logo: {
        "@type": "ImageObject",
        url: "https://ergoblockchain.org/favicon.ico"
      }
    },
    mainEntityOfPage: "https://ergoblockchain.org/technology/storage-rent",
    about: [
      { "@type": "Thing", name: "Blockchain economics" },
      { "@type": "Thing", name: "State management" },
      { "@type": "Thing", name: "Cryptocurrency sustainability" }
    ],
    proficiencyLevel: "Intermediate",
    technicalAudience: "Developers and economists"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
