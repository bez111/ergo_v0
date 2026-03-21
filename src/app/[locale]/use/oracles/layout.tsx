import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "oracles",
  ogImage: "/og-oracles.png",
  canonicalPath: "/use/oracles-data-feeds",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.oracles.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [SEO.ogImage],
      type: "website",
      url: `https://www.ergoblockchain.org${SEO.canonicalPath}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [SEO.ogImage],
    },
    alternates: {
      canonical: `https://www.ergoblockchain.org${SEO.canonicalPath}`,
    },
  }
}

// Layout with Schemas
export default function OraclesLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "Oracle Pools on Ergo: Decentralized Data Feeds",
      description: "Reliable, decentralized price feeds for DeFi. Ergo's native oracle pools provide manipulation-resistant data.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["oracle pools", "price feeds", "DeFi oracles", "decentralized data"],
      about: [
        { name: "Oracle pools" },
        { name: "Price feeds" },
        { name: "DeFi infrastructure" },
      ],
    }),
    createFAQSchema([
      {
        question: "What are Ergo Oracle Pools?",
        answer: "Oracle Pools are decentralized data providers that aggregate information from multiple sources to provide reliable price feeds for DeFi applications."
      },
      {
        question: "How do Oracle Pools prevent manipulation?",
        answer: "Multiple independent data providers stake collateral and submit data. Outliers are filtered, and the median value is used, making manipulation economically infeasible."
      }
    ]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
