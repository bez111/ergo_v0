import type { Metadata } from "next"
import { Suspense } from "react"
import { InfographicsClient } from "./InfographicsClient"
import { siteConfig } from "@/config/site-config"
import { infographics } from "@/data/infographics"
import {
  createBreadcrumbSchema,
  createCollectionSchema,
  getAlternates,
  getCanonicalUrl,
  getOgLocale,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const origin = siteConfig.siteUrl
const PATH = "/infographics"

// SEO Configuration
const SEO = {
  title: 'Ergo Blockchain Infographics – Visual Guides to PoW, DeFi, Storage Rent & Privacy',
  description: 'Discover visual explainers of the Ergo blockchain: PoW consensus, eUTXO smart contracts, storage rent, privacy with Sigma protocols, NiPoPoWs and more. Save, share and reuse with attribution.',
  keywords: [
    'Ergo infographics', 'blockchain visual guides', 'Ergo PoW explained', 'eUTXO diagrams',
    'storage rent visualization', 'Sigma protocols infographic', 'NiPoPoWs explained',
    'Ergo vs VC chains', 'Autolykos mining', 'ErgoScript tutorial', 'oracle pools diagram',
    'blockchain education', 'visual learning', 'Ergo ecosystem'
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const url = getCanonicalUrl(PATH, locale)
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: getAlternates(PATH, locale),
    openGraph: {
      type: 'website',
      url,
      siteName: "Ergo Platform",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}/og/infographics-hub.svg`, width: 1200, height: 630, alt: SEO.title }],
      locale: getOgLocale(locale)
    },
    twitter: {
      card: 'summary_large_image',
      title: SEO.title,
      description: SEO.description,
      images: [`${origin}/og/infographics-hub.svg`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: SEO.keywords,
  }
}

export default function InfographicsPage() {
  // Custom ItemList for infographics (complex, kept structured)
  const infographicsItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${origin}${PATH}#itemlist`,
    name: "Ergo Blockchain Infographics Collection",
    description: "Visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and global settlement.",
    numberOfItems: infographics.length,
    itemListElement: infographics.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ImageObject",
        "@id": `${origin}/infographics/${item.slug}`,
        name: item.title,
        description: item.shortDescription,
        url: `${origin}/infographics/${item.slug}`,
        contentUrl: `${origin}${item.fullImageUrl}`,
        thumbnailUrl: `${origin}${item.previewImageUrl}`,
        datePublished: item.publishDate,
        author: { "@type": "Organization", name: "Ergo Platform" }
      }
    }))
  }

  const schemas = [
    createCollectionSchema({
      name: "Ergo Blockchain Infographics",
      description: "Visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and global settlement. Save, share, and reuse them with attribution to ergoblockchain.org.",
      url: "/infographics",
    }),
    createBreadcrumbSchema([{ name: "Infographics", href: "/infographics" }]),
    infographicsItemList,
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <Suspense>
        <InfographicsClient />
      </Suspense>

      {/* Server-rendered fallback: every infographic appears in the static HTML
          so crawlers, screen readers, and no-JS users always see the catalog
          even before the interactive client UI hydrates. */}
      <section
        id="all-infographics"
        aria-label="All infographics"
        className="container max-w-5xl mx-auto px-4 py-16 border-t border-neutral-800"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          All Infographics
        </h2>
        <p className="text-sm text-neutral-400 mb-8">
          {infographics.length} visual explainers, fully indexed for search
          engines and screen readers. Use the filter UI above for an
          interactive view.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
          {infographics.map((item) => (
            <li key={item.slug} className="border border-neutral-800 rounded-xl bg-neutral-900/40 overflow-hidden">
              <a
                href={`/infographics/${item.slug}`}
                className="block group focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                <div className="relative aspect-[16/10] bg-neutral-950">
                  {/* Native lazy-loaded image keeps the SSR markup simple and
                      indexable without depending on the JS gallery. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.previewImageUrl}
                    alt={item.imageAlt || item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white group-hover:text-orange-300 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
