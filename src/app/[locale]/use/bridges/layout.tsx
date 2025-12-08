import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "bridges",
  ogImage: "/og-bridges.png",
  canonicalPath: "/use/cross-chain-bridges",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.bridges.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [SEO.ogImage],
      type: "website",
      url: `https://ergoblockchain.org${SEO.canonicalPath}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [SEO.ogImage],
    },
    alternates: {
      canonical: `https://ergoblockchain.org${SEO.canonicalPath}`,
    },
  }
}

// Layout with Schemas
export default function BridgesLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "Cross-Chain Bridges on Ergo",
      description: "Connect Ergo to other blockchains with trustless bridges powered by NIPoPoWs. Transfer assets securely across chains.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["Rosen Bridge", "cross-chain", "NIPoPoWs", "interoperability"],
      about: [
        { name: "Cross-chain bridges" },
        { name: "NIPoPoWs" },
        { name: "Blockchain interoperability" },
      ],
    }),
    createFAQSchema([
      {
        question: "What is the Rosen Bridge?",
        answer: "Rosen Bridge is a trustless cross-chain bridge connecting Ergo to other blockchains like Cardano and Ethereum, enabled by NIPoPoW technology."
      },
      {
        question: "How secure are Ergo bridges?",
        answer: "Ergo bridges use NIPoPoWs for trustless verification, meaning you don't need to trust third parties. The cryptographic proofs ensure security."
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
