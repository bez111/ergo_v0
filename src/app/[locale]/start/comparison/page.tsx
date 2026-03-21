import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import ComparisonClient from "./ComparisonClient"
import { createBreadcrumbSchema, createFAQSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'start.comparison.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: getAlternates('/start/comparison', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: getCanonicalUrl('/start/comparison', locale),
      siteName: "Ergo Platform",
      images: [{ url: "https://www.ergoblockchain.org/og/comparison.png", width: 1200, height: 630, alt: t('ogAlt') }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://www.ergoblockchain.org/og/comparison.png"]
    }
  }
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "How is Ergo different from Bitcoin?", answer: "While sharing Bitcoin's UTXO model and PoW consensus, Ergo adds smart contracts, storage rent, and NIPoPoWs for advanced functionality." },
  { question: "What advantages does Ergo have over Ethereum?", answer: "Ergo offers predictable fees, no reentrancy attacks, parallel transaction processing, and energy-efficient PoW mining." },
  { question: "How does Ergo compare to Cardano?", answer: "Both use eUTXO, but Ergo has PoW consensus, storage rent, and no VC funding, making it more decentralized and sustainable." }
]

export default function ComparisonPage() {
  const schemas = [
    createBreadcrumbSchema([
      { name: "Start", href: "/start" },
      { name: "Comparison", href: "/start/comparison" },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]
  
  return (
    <>
      {renderSchemaScripts(schemas)}
      <ComparisonClient />
    </>
  )
}
