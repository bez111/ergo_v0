import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  createTechArticleSchema,
  createFAQSchema,
  createSoftwareAppSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

const SEO = {
  slug: "ergoscript",
  ogImage: "/og/technology/ergoscript-introduction.png",
  keywords: [
    "ErgoScript", "smart contract language", "eUTXO", "formal verification",
    "cryptography", "DeFi", "blockchain development", "sigma protocols",
    "blockchain programming", "secure contracts", "re-entrancy protection",
    "Ergo blockchain", "cryptocurrency development"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.ergoscript' })

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    keywords: SEO.keywords,
    alternates: {
      canonical: `https://ergoblockchain.org/technology/${SEO.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://ergoblockchain.org/technology/${SEO.slug}`,
      title,
      description,
      images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
  }
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What is ErgoScript?",
    answer: "ErgoScript is Ergo's smart contract language based on Sigma protocols. It enables powerful, flexible, and secure smart contracts while maintaining the benefits of the UTXO model."
  },
  {
    question: "Is ErgoScript similar to other smart contract languages?",
    answer: "ErgoScript is unique, combining functional programming with cryptographic protocols. It's more secure than Solidity, preventing reentrancy attacks by design."
  },
  {
    question: "How do I learn ErgoScript?",
    answer: "Start with the official tutorials, use the ErgoScript playground for practice, and reference the documentation. Basic Scala knowledge helps but isn't required."
  }
]

export default function ErgoScriptLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "ErgoScript: Smart Contract Programming Language",
      description: "Comprehensive guide to building secure smart contracts on Ergo with ErgoScript",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Smart contract developers and blockchain programmers",
      about: [
        { name: "Smart contracts" },
        { name: "Functional programming" },
        { name: "Cryptographic protocols" },
      ],
    }),
    createFAQSchema(FAQ_ITEMS),
    createSoftwareAppSchema({
      name: "ErgoScript",
      description: "Secure smart contract language for Ergo blockchain with Sigma protocols",
      applicationCategory: "Programming Language",
    }),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
