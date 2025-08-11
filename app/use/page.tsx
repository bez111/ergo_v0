import type { Metadata } from "next"
import UseClient from "./UseClient"
import { useCases } from "./_data"

export const revalidate = 600

export function generateMetadata(): Metadata {
  const title = "Ergo Use Cases — DeFi, NFTs, Privacy, Bridges"
  const description = "Explore real use cases on Ergo: DeFi, algorithmic stablecoins, NFTs, privacy apps, DAOs, cross-chain bridges and more."
  const url = "https://ergoblockchain.org/use"
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "ergoblockchain.org",
      title,
      description,
      images: [{ url: "/og/use-cases.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  }
}

export default function UsePage() {
  const base = "https://ergoblockchain.org/use"

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}#list`,
    itemListOrder: "Ascending",
    numberOfItems: useCases.length,
    itemListElement: useCases.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        "@id": `${base}/use-cases/${u.id}`,
        name: u.title,
        url: `${base}/use-cases/${u.id}`,
        about: u.tags,
      },
    })),
  }

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}#collection`,
    name: "Ergo Use Cases",
    url: base,
    isPartOf: { "@type": "WebSite", "@id": "https://ergoblockchain.org#website" },
    inLanguage: "en",
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${base}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ergoblockchain.org/" },
      { "@type": "ListItem", position: 2, name: "Use Cases", item: base },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <UseClient />
    </>
  )
} 
