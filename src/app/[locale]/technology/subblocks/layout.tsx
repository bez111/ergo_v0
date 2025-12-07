import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subblocks: Sub-Second Confirmations | Ergo",
  description: "Layer-1 scaling with sub-second transaction confirmations. No trusted sequencers, full security, seamless integration with existing contracts.",
  keywords: [
    "subblocks",
    "fast confirmations",
    "Layer 1 scaling",
    "transaction speed",
    "blockchain scalability",
    "sub-second finality",
    "Ergo scaling",
    "throughput",
    "instant confirmations",
    "research"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/subblocks"
  },
  openGraph: {
    title: "Subblocks - Sub-Second Confirmations on Ergo",
    description: "Layer-1 scaling for sub-second confirmations. No trusted sequencers, full security.",
    url: "https://ergoblockchain.org/technology/subblocks",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/technology-1200x630.png",
      width: 1200,
      height: 630,
      alt: "Ergo Subblocks Technology"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Subblocks - Sub-Second Confirmations | Ergo",
    description: "Layer-1 scaling with sub-second finality. No sequencers, full security.",
    images: ["https://ergoblockchain.org/og/technology-1200x630.png"],
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

export default function SubblocksLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/subblocks",
    headline: "Subblocks: Layer-1 Scaling for Sub-Second Confirmations",
    description: "Research into Ergo's subblock technology for rapid transaction confirmations",
    image: "https://ergoblockchain.org/og/technology-1200x630.png",
    datePublished: "2024-01-15",
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
    mainEntityOfPage: "https://ergoblockchain.org/technology/subblocks",
    about: [
      { "@type": "Thing", name: "Blockchain scalability" },
      { "@type": "Thing", name: "Transaction confirmation" },
      { "@type": "Thing", name: "Layer 1 scaling" }
    ],
    proficiencyLevel: "Advanced",
    technicalAudience: "Blockchain researchers and developers"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
