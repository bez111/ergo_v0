
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next"
import { HoldersClient } from "./HoldersClient"
import { FAQSchema } from '@/components/seo/faq-schema'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { siteConfig } from '@/config/site-config'

interface HodlersPageProps {
  params: Promise<{ locale: string }>
}

const hodlersUrl = "https://ergoblockchain.org/hodlers"

// FAQ data for hodlers page
const hodlersFAQ = [
  {
    question: "Where to store ERG?",
    answer: "Store ERG in a non-custodial wallet where you control the private keys. Popular options: Nautilus (browser extension), SAFEW (web wallet), Ergo Mobile Wallet (iOS/Android), or Terminus (mobile). For large amounts, use Ledger hardware wallet integration for maximum security."
  },
  {
    question: "What wallets support Ergo?",
    answer: "Ergo is supported by: Nautilus (Chrome/Firefox extension), SAFEW (full-featured web wallet), Ergo Mobile Wallet (official mobile app), Terminus (mobile), Satergo (desktop), and Ledger hardware wallets. Each offers different features - Nautilus is best for DeFi, SAFEW for advanced features."
  },
  {
    question: "Is Ergo deflationary?",
    answer: "Ergo has a fixed maximum supply of 97.7 million ERG with no inflation after emission ends. Additionally, Storage Rent recycles lost/abandoned coins back to miners, effectively reducing circulating supply over time. This makes ERG increasingly scarce."
  },
  {
    question: "What is Ergo's tokenomics?",
    answer: "Ergo launched fairly in 2019 with no pre-mine, no ICO, and no VC allocation. Total supply is capped at 97.7M ERG. Block rewards decrease over time (emission schedule). Storage Rent provides sustainable miner income. Treasury receives 10% of block rewards for ecosystem development."
  },
  {
    question: "Why hold ERG long-term?",
    answer: "ERG combines Bitcoin's proven security (PoW, fixed supply) with smart contract capabilities, optional privacy (Sigma Protocols), and sustainable economics (Storage Rent). Fair launch means no insider dumping. Active development and growing DeFi ecosystem add utility."
  }
]

export async function generateMetadata({ params }: HodlersPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Hold ERG — Sound Money with No Pre-mine | Ergo",
    description: "Why hold ERG? 97.7M fixed supply, fair launch, no VC control. Bitcoin security + smart contracts + optional privacy. Wallets, tokenomics & more.",
    keywords: "hold ERG, Ergo investment, sound money, cryptocurrency holders, Bitcoin alternative, fair launch, no pre-mine, store of value, financial sovereignty, ERG tokenomics",
    alternates: {
      canonical: hodlersUrl,
    },
    openGraph: {
      title: "Hold ERG — Sound Money with No Pre-mine",
      description: "Why hold ERG? 97.7M fixed supply, fair launch, no VC control. Bitcoin security + smart contracts + optional privacy.",
      url: hodlersUrl,
      siteName: "Ergo Platform",
      images: [
        {
          url: "https://ergoblockchain.org/og/holders.png",
          width: 1200,
          height: 630,
          alt: "Hold ERG - Sound Money with Smart Contracts",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hold ERG — Sound Money with No Pre-mine",
      description: "Why hold ERG? 97.7M fixed supply, fair launch, no VC control. Bitcoin security + smart contracts + privacy.",
      images: ["https://ergoblockchain.org/og/holders.png"],
    },
  }
}

export default async function HodlersPage({ params }: HodlersPageProps) {
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
        name: "Holders",
        item: hodlersUrl
      }
    ]
  }

  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Hold ERG - Sound Money with No Pre-mine",
    summary: "Why hold ERG? 97.7M fixed supply, fair launch, no VC control. Bitcoin security + smart contracts + optional privacy.",
    url: hodlersUrl
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <FAQSchema 
        faqs={hodlersFAQ}
        pageUrl={hodlersUrl}
      />
      <HoldersClient />
    </>
  )
}

