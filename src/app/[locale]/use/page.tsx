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

  // FAQ items from translations
  const faqItems = [
    { question: t('faq.whatCanDo.question'), answer: t('faq.whatCanDo.answer') },
    { question: t('faq.defiProtocols.question'), answer: t('faq.defiProtocols.answer') },
    { question: t('faq.createNfts.question'), answer: t('faq.createNfts.answer') },
    { question: t('faq.privacyWork.question'), answer: t('faq.privacyWork.answer') },
  ]

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
    </>
  )
}
