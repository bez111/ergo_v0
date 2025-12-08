import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createHowToSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "privacy",
  ogImage: "/og-privacy.png",
  canonicalPath: "/use/privacy-confidentiality",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.privacy.seo' })
  
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
export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "Privacy & Confidentiality on Ergo",
      description: "Optional privacy features with ErgoMixer, Sigma protocols, and zero-knowledge proofs. Protect your financial data.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["ErgoMixer", "privacy", "Sigma protocols", "zero-knowledge proofs"],
      about: [
        { name: "Privacy" },
        { name: "ErgoMixer" },
        { name: "Zero-knowledge proofs" },
      ],
    }),
    createHowToSchema({
      name: "How to Use ErgoMixer for Privacy",
      description: "Step-by-step guide to mixing ERG for enhanced privacy",
      steps: [
        { name: "Set up Wallet", text: "Download and configure an Ergo wallet" },
        { name: "Access ErgoMixer", text: "Visit the ErgoMixer application" },
        { name: "Configure Mixing", text: "Select mixing parameters and amounts" },
        { name: "Mix Coins", text: "Execute the mixing transaction and wait for completion" },
      ],
    }),
    createFAQSchema([
      {
        question: "What is ErgoMixer?",
        answer: "ErgoMixer is a non-custodial mixing service that uses Sigma protocols to break the link between sender and receiver addresses."
      },
      {
        question: "Is privacy on Ergo optional?",
        answer: "Yes, privacy on Ergo is optional. Users can choose when to use privacy features like ErgoMixer for specific transactions."
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
