import type { Metadata } from "next"
import UseClient from "./UseClient"
import { useCases } from "./_data"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createCollectionSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export const revalidate = 600

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use' })
  const title = t('title') + " — DeFi, NFTs, Privacy, Bridges"
  const description = t('description')
  const url = getCanonicalUrl('/use', locale)
  const twitterHandle = siteConfig.twitterHandle
  return {
    title,
    description,
    alternates: getAlternates('/use', locale),
    openGraph: {
      type: "website",
      url,
      siteName: "ergoblockchain.org",
      title,
      description,
      images: [{ url: "https://www.ergoblockchain.org/og/use/use.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://www.ergoblockchain.org/og/use/use.png"],
      ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  }
}

export default async function UsePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use' })
  const base = "https://www.ergoblockchain.org/use"

  // FAQ items — read from `use.faq.items[]` so the SSR fallback below and
  // the FAQPage schema match exactly what UseClient renders. Previously
  // the SSR fallback used a different key tree (whatCanDo / defiProtocols /
  // createNfts / privacyWork) and the visible questions in the client UI
  // didn't line up with the answers in the fallback section.
  const rawItems = (t.raw('faq.items') as Array<{ question: string; answer: string }>) ?? []
  const faqItems = rawItems.map((it) => ({ question: it.question, answer: it.answer }))

  // Use cases ItemList (complex, kept structured)
  const useCasesItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}#list`,
    itemListOrder: "Ascending",
    numberOfItems: useCases.length,
    itemListElement: useCases.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebPage",
        "@id": `${base}/${u.id}`,
        name: u.title,
        url: `${base}/${u.id}`,
        description: u.description,
        inLanguage: "en",
        keywords: (u.tags || []).join(", "),
      },
    })),
  }

  const schemas = [
    useCasesItemList,
    createCollectionSchema({
      name: t('title'),
      description: t('description'),
      url: "/use",
    }),
    createBreadcrumbSchema([{ name: t('title'), href: "/use" }]),
    createFAQSchema(faqItems),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <UseClient />

      {/* Server-rendered FAQ — UseClient renders questions inside a
          collapsible, so answers are hidden from crawlers and screen readers
          until interaction. This block keeps every Q&A in static HTML and
          matches the FAQPage schema above. */}
      <section
        id="use-faq-answers"
        aria-label="Use cases FAQ — full answers"
        className="container max-w-4xl mx-auto px-4 py-16 border-t border-neutral-800"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Use cases FAQ — full answers
        </h2>
        <p className="text-sm text-neutral-400 mb-8">
          Every question on this page, fully expanded for search engines and
          screen readers.
        </p>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/40"
            >
              <dt className="font-semibold text-white mb-2">{item.question}</dt>
              <dd className="text-neutral-300 leading-relaxed whitespace-pre-line">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
