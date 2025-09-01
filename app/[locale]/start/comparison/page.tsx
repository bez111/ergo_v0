import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import ComparisonClient from "./ComparisonClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.comparison.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "https://ergoblockchain.org/start/comparison"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/start/comparison",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/comparison.png",
        width: 1200,
        height: 630,
        alt: t('ogAlt')
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/comparison.png"]
    }
  }
}

export default function ComparisonPage() {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ergoblockchain.org/start/comparison",
    name: "Blockchain Platform Comparison",
    description: "Technical comparison of Ergo with other blockchain platforms"
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "How is Ergo different from Bitcoin?",
      answer: "While sharing Bitcoin's UTXO model and PoW consensus, Ergo adds smart contracts, storage rent, and NIPoPoWs for advanced functionality."
    },
    {
      question: "What advantages does Ergo have over Ethereum?",
      answer: "Ergo offers predictable fees, no reentrancy attacks, parallel transaction processing, and energy-efficient PoW mining."
    },
    {
      question: "How does Ergo compare to Cardano?",
      answer: "Both use eUTXO, but Ergo has PoW consensus, storage rent, and no VC funding, making it more decentralized and sustainable."
    }
  ])
  
  const knowledgeGraph = generateKnowledgeGraph('comparison')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <ComparisonClient />
    </>
  )
} 