
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { BuildersClient } from './BuildersClient'
import { FAQSchema } from '@/components/seo/faq-schema'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { siteConfig } from '@/config/site-config'

interface BuildersPageProps {
  params: Promise<{ locale: string }>
}

const buildersUrl = "https://ergoblockchain.org/builders"

// FAQ data for builders page
const buildersFAQ = [
  {
    question: "How do I start building on Ergo?",
    answer: "Start by learning ErgoScript fundamentals, set up the Ergo development environment (Scala/JavaScript SDKs), explore example contracts on GitHub, and join the developer Discord for support. The /learn section has structured paths for new developers."
  },
  {
    question: "What programming languages can I use for Ergo?",
    answer: "ErgoScript is the native smart contract language. For app development, use: Scala/Java (Appkit SDK), JavaScript/TypeScript (Fleet SDK, sigma-rust), Rust (sigma-rust), or Python (ergpy). Most developers start with Fleet SDK for web apps."
  },
  {
    question: "Is ErgoScript hard to learn?",
    answer: "ErgoScript has a learning curve different from Solidity. It's functional and declarative rather than imperative. If you know Scala or functional programming, it's easier. The eUTXO model requires new thinking but prevents entire classes of bugs (no reentrancy)."
  },
  {
    question: "What makes Ergo different for developers?",
    answer: "Ergo offers: eUTXO model (no reentrancy attacks, predictable costs), Sigma Protocols (built-in privacy primitives), NiPoPoWs (light clients), and predictable ~$0.01 fees. Smart contracts are safer by design - you can't lose more than what's in a box."
  },
  {
    question: "Are there grants for Ergo developers?",
    answer: "Yes! The Ergo Foundation offers grants for open-source projects, dApps, tooling, and research. Apply via GitHub or join the developer community to discuss your project. Many successful projects started with community grants."
  }
]

export async function generateMetadata({ params }: BuildersPageProps): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Build on Ergo — ErgoScript, SDKs & Patterns | Ergo",
    description: "Build secure dApps with ErgoScript. eUTXO model, no reentrancy attacks, predictable costs. SDKs, patterns, grants & active dev community.",
    keywords: "build on Ergo, ErgoScript, Ergo developers, eUTXO, smart contracts, dApps, DeFi development, Sigma protocols, blockchain SDK, Ergo grants",
    alternates: {
      canonical: buildersUrl
    },
    openGraph: {
      title: "Build on Ergo — ErgoScript, SDKs & Patterns",
      description: "Build secure dApps with ErgoScript. eUTXO model, no reentrancy attacks, predictable costs. SDKs, patterns & grants.",
      url: buildersUrl,
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/builders.png",
        width: 1200,
        height: 630,
        alt: "Build on Ergo - ErgoScript Smart Contract Development"
      }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Build on Ergo — ErgoScript, SDKs & Patterns",
      description: "Build secure dApps with ErgoScript. eUTXO model, no reentrancy attacks, predictable costs. SDKs & grants.",
      images: ["https://ergoblockchain.org/og/builders.png"]
    }
  }
}

export default async function BuildersPage({ params }: BuildersPageProps) {
  const { locale } = await params

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Builders",
        item: buildersUrl
      }
    ]
  }

  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Build on Ergo Blockchain",
    summary: "Build secure dApps with ErgoScript. eUTXO model, no reentrancy attacks, predictable costs. SDKs, patterns, grants & active dev community.",
    url: buildersUrl
  })
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <FAQSchema faqs={buildersFAQ} pageUrl={buildersUrl} />
      <BuildersClient />
    </>
  )
}
