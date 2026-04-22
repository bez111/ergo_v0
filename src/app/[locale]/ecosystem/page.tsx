import type { Metadata } from "next"
import EcosystemClient from "./EcosystemClient"
import { projects as allProjects, sortProjectsForListing } from "./_data"
import { getTranslations } from "next-intl/server"
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createCollectionSchema,
  getAlternates,
  getCanonicalUrl,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { siteConfig } from "@/config/site-config"

export const revalidate = 600

export async function generateMetadata({ searchParams, params }: {
  searchParams: Promise<Record<string, string | string[]>>,
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const sp = await searchParams
  const { locale } = await params
  const hasQueries = !!sp && Object.keys(sp).length > 0
  const canonical = getCanonicalUrl('/ecosystem', locale)
  const t = await getTranslations({ locale, namespace: 'ecosystem.seo' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates('/ecosystem', locale),
    openGraph: {
      type: "website",
      url: canonical,
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [{ url: "/og/hubs/ecosystem.png", width: 1200, height: 630 }],
      siteName: "Ergo",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", site: "@ergoplatform", creator: "@ergoplatform" },
    robots: hasQueries ? { index: false, follow: true } : { index: true, follow: true },
  }
}

const sortedAllProjects = sortProjectsForListing(allProjects)

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What is the Ergo ecosystem?",
    answer: "The Ergo ecosystem consists of DeFi protocols, NFT marketplaces, developer tools, wallets, and community projects built on the Ergo blockchain."
  },
  {
    question: "What DeFi projects are on Ergo?",
    answer: "Key DeFi projects include SigmaUSD (algorithmic stablecoin), ErgoDEX (DEX), lending protocols, and oracle pools."
  },
  {
    question: "Which wallets support Ergo?",
    answer: "Popular Ergo wallets include Nautilus (browser extension), Satergo (desktop), SAFEW (mobile), and Ergo Wallet (mobile)."
  },
  {
    question: "Are there NFT marketplaces on Ergo?",
    answer: "Yes, Ergo has NFT marketplaces like SkyHarbor for minting and trading NFTs with low fees."
  }
]

export default function EcosystemPage() {
  const sorted = sortedAllProjects

  const schemas = [
    // ItemList schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${siteConfig.siteUrl}/ecosystem#list`,
      itemListOrder: "Ascending",
      numberOfItems: sorted.length,
      itemListElement: sorted.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          url: p.url,
          description: p.description,
          applicationCategory: p.category === "DEFI" ? "FinanceApplication" :
                               p.category === "WALLETS" ? "FinanceApplication" :
                               p.category === "GAMING" ? "GameApplication" :
                               p.category === "TOOLS" ? "DeveloperApplication" :
                               "WebApplication",
          operatingSystem: "Web, Windows, macOS, Linux, iOS, Android",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
        },
      })),
    },
    // CollectionPage schema
    createCollectionSchema({
      name: "Ergo Ecosystem",
      description: "Complete directory of dApps, wallets, and tools built on Ergo blockchain",
      url: "/ecosystem",
    }),
    // Breadcrumbs
    createBreadcrumbSchema([
      { name: "Ecosystem", href: "/ecosystem" },
    ]),
    // FAQ
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <EcosystemClient />
    </>
  )
}
