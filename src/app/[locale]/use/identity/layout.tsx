import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "identity",
  ogImage: "/og-identity.png",
  canonicalPath: "/use/identity-reputation",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.identity.seo' })
  
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
export default function IdentityLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "Digital Identity on Ergo",
      description: "Privacy-preserving digital identity solutions with Sigma protocols and zero-knowledge proofs on Ergo.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["digital identity", "self-sovereign identity", "zero-knowledge proofs", "verifiable credentials"],
      about: [
        { name: "Digital identity" },
        { name: "Zero-knowledge proofs" },
        { name: "Self-sovereign identity" },
      ],
    }),
    createFAQSchema([
      {
        question: "What is self-sovereign identity on Ergo?",
        answer: "Self-sovereign identity on Ergo allows users to control their digital identity using cryptographic proofs without relying on centralized authorities."
      },
      {
        question: "How do Sigma protocols enable privacy?",
        answer: "Sigma protocols allow proving statements about your identity (like being over 18) without revealing the underlying data."
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
