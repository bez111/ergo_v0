import { Metadata } from "next"
import { SchemaOrg } from "@/components/seo/schema-org"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.daos.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-daos.png"],
      type: "website",
      url: "https://ergoblockchain.org/use/daos-alternative-economies",
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-daos.png"],
    },
    alternates: {
      canonical: "https://ergoblockchain.org/use/daos-alternative-economies",
    },
  }
}

export default function DAOsLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/use/daos",
    headline: "DAOs on Ergo: Decentralized Governance",
    description: "Build and participate in DAOs on Ergo with on-chain voting, treasury management, and transparent governance.",
    author: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    publisher: { "@type": "Organization", name: "Ergo Platform", url: "https://ergoblockchain.org" },
    image: "https://ergoblockchain.org/og-daos.png",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    keywords: "DAO, decentralized governance, Ergo DAO, on-chain voting, treasury management"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a DAO on Ergo?",
        acceptedAnswer: { "@type": "Answer", text: "A DAO on Ergo is a decentralized autonomous organization using ErgoScript smart contracts for transparent, on-chain governance and treasury management." }
      },
      {
        "@type": "Question",
        name: "How do I participate in Ergo DAOs?",
        acceptedAnswer: { "@type": "Answer", text: "Connect your Ergo wallet, acquire governance tokens, and participate in proposals and voting through the DAO interface." }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
} 