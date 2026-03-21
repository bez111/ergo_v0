import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import ErgoScriptClient from "./ErgoScriptClient"
import { createBreadcrumbSchema, createFAQSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'learnErgoscript' })

  const title = `${t('title')} | Ergo`
  const description = t('description')

  return {
    title,
    description,
    keywords: ["ergoscript tutorial", "smart contract programming", "blockchain development", "ergo coding", "defi development", "sigma protocols", "zero knowledge", "contract language"],
    alternates: getAlternates('/learn/ergoscript', locale),
    openGraph: {
      title,
      description,
      url: getCanonicalUrl('/learn/ergoscript', locale),
      siteName: "Ergo Platform",
      images: [{ url: "https://www.ergoblockchain.org/og/ergoscript.png", width: 1200, height: 630, alt: "ErgoScript Programming Course" }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.ergoblockchain.org/og/ergoscript.png"]
    }
  }
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "What is ErgoScript?", answer: "ErgoScript is a powerful, protocol-friendly smart contract language based on Sigma protocols, enabling complex DeFi applications with built-in zero-knowledge proofs." },
  { question: "Is ErgoScript difficult to learn?", answer: "ErgoScript has a learning curve but offers powerful features. Developers familiar with functional programming will find it intuitive." },
  { question: "What can I build with ErgoScript?", answer: "DEXs, lending protocols, NFT marketplaces, DAOs, oracle pools, privacy tools, and any complex financial contract." }
]

export default function ErgoScriptPage() {
  // Course schema (special type, kept structured)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://www.ergoblockchain.org/learn/ergoscript",
    name: "ErgoScript Programming Course",
    description: "Learn to build smart contracts with ErgoScript",
    provider: { "@type": "Organization", name: "Ergo Platform" },
    educationalLevel: "Intermediate",
    teaches: ["Smart Contracts", "Blockchain Programming", "ErgoScript", "DeFi Development"],
    timeRequired: "PT40H",
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", courseWorkload: "PT5H" }
  }
  
  const schemas = [
    courseSchema,
    createBreadcrumbSchema([
      { name: "Learn", href: "/learn" },
      { name: "ErgoScript", href: "/learn/ergoscript" },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]
  
  return (
    <>
      {renderSchemaScripts(schemas)}
      <ErgoScriptClient />
    </>
  )
}
