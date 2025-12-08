import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "daos",
  ogImage: "/og-daos.png",
  canonicalPath: "/use/daos-alternative-economies",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.daos.seo' })
  
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
export default function DAOsLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "DAOs on Ergo: Decentralized Governance",
      description: "Build and participate in DAOs on Ergo with on-chain voting, treasury management, and transparent governance.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["DAO", "decentralized governance", "on-chain voting", "treasury management"],
      about: [
        { name: "Decentralized governance" },
        { name: "Smart contracts" },
        { name: "Treasury management" },
      ],
    }),
    createFAQSchema([
      {
        question: "What is a DAO on Ergo?",
        answer: "A DAO on Ergo is a decentralized autonomous organization using ErgoScript smart contracts for transparent, on-chain governance and treasury management."
      },
      {
        question: "How do I participate in Ergo DAOs?",
        answer: "Connect your Ergo wallet, acquire governance tokens, and participate in proposals and voting through the DAO interface."
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
