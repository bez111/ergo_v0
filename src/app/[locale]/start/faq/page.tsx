import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import FAQClient from "./FAQClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.faq.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "https://ergoblockchain.org/start/faq"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/start/faq",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/faq.png",
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
      images: ["https://ergoblockchain.org/og/faq.png"]
    }
  }
}

export default function FAQPage() {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ergoblockchain.org/start/faq",
    name: "Ergo Frequently Asked Questions",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Ergo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo is a next-generation Proof-of-Work blockchain platform with smart contracts, designed for financial contracts and DeFi applications."
        }
      },
      {
        "@type": "Question",
        name: "How do I get an Ergo wallet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can use Nautilus (browser extension), Satergo (desktop), or SAFEW (mobile) wallets. All are free and open-source."
        }
      },
      {
        "@type": "Question",
        name: "Can I mine Ergo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Ergo uses the Autolykos v2 algorithm optimized for GPU mining. You need a GPU with at least 4GB VRAM."
        }
      }
    ]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('faq')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <FAQClient />
    </>
  )
} 