import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Velvet Forks: Seamless Protocol Upgrades | Ergo",
  description: "Upgrade Ergo protocol without hard forks. Backward-compatible changes, gradual adoption, no network splits or ecosystem fragmentation.",
  keywords: [
    "velvet forks",
    "protocol upgrades",
    "backward compatibility",
    "soft forks",
    "blockchain evolution",
    "seamless upgrades",
    "no hard forks",
    "network consensus",
    "Ergo upgrades",
    "protocol evolution"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/velvet-forks"
  },
  openGraph: {
    title: "Velvet Forks - Seamless Protocol Upgrades on Ergo",
    description: "Backward-compatible protocol evolution. No hard forks, no network splits, gradual adoption.",
    url: "https://ergoblockchain.org/technology/velvet-forks",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/technology-1200x630.png",
      width: 1200,
      height: 630,
      alt: "Ergo Velvet Forks"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Velvet Forks - Seamless Upgrades | Ergo",
    description: "Protocol evolution without hard forks. Backward-compatible, gradual adoption.",
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

export default function VelvetForksLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/velvet-forks",
    headline: "Velvet Forks: Seamless Protocol Upgrades",
    description: "How Ergo enables backward-compatible protocol upgrades without hard forks",
    image: "https://ergoblockchain.org/og/technology-1200x630.png",
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
    mainEntityOfPage: "https://ergoblockchain.org/technology/velvet-forks",
    about: [
      { "@type": "Thing", name: "Protocol upgrades" },
      { "@type": "Thing", name: "Blockchain governance" },
      { "@type": "Thing", name: "Soft forks" }
    ],
    proficiencyLevel: "Advanced",
    technicalAudience: "Protocol developers and researchers"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
