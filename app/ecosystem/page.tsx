import type { Metadata } from "next"
import EcosystemClient from "./EcosystemClient"
import { projects as allProjects, sortProjectsForListing } from "./_data"

export const revalidate = 600

export async function generateMetadata({ searchParams }: { searchParams: Promise<Record<string, string | string[]>> }): Promise<Metadata> {
  const sp = await searchParams
  const hasQueries = !!sp && Object.keys(sp).length > 0
  const canonical = "https://ergoblockchain.org/ecosystem"
  return {
    title: "Ergo Ecosystem — dApps, wallets, tools, DeFi",
    description:
      "Explore the Ergo ecosystem: decentralized apps, wallets, privacy tools, DeFi protocols, SDKs and infrastructure.",
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: "Ergo Ecosystem",
      description:
        "Directory of Ergo dApps, wallets, infrastructure and tools.",
      images: [{ url: "/og/ecosystem.png", width: 1200, height: 630 }],
      siteName: "Ergo",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", site: "@ergoplatform", creator: "@ergoplatform" },
    robots: hasQueries ? { index: false, follow: true } : { index: true, follow: true },
  }
}

export default function EcosystemPage() {
  const sorted = sortProjectsForListing(allProjects)

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://ergoblockchain.org/ecosystem#list",
    itemListOrder: "Ascending",
    numberOfItems: sorted.length,
    itemListElement: sorted.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebSite",
        name: p.name,
        url: p.url,
      },
    })),
  }

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ergoblockchain.org/ecosystem#collection",
    name: "Ergo Ecosystem",
    url: "https://ergoblockchain.org/ecosystem",
    isPartOf: { "@type": "WebSite", "@id": "https://ergoblockchain.org#website" },
    inLanguage: "en",
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ergoblockchain.org/ecosystem#breadcrumbs",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ergoblockchain.org/" },
      { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://ergoblockchain.org/ecosystem" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <EcosystemClient />
    </>
  )
}