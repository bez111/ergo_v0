import type { Metadata } from "next"
import GetErgClient from "./GetErgClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "How to Get ERG | Buy Ergo on Exchanges & DEXs",
  description: "Complete guide to buying ERG tokens. Compare 20+ exchanges, find the best rates, and start trading Ergo. Includes CEX and DEX options with step-by-step instructions.",
  keywords: ["buy erg", "get ergo", "erg exchanges", "where to buy ergo", "erg trading", "ergo cryptocurrency", "erg token", "buy ergo coin"],
  alternates: {
    canonical: "https://ergoblockchain.org/use/get-erg"
  },
  openGraph: {
    title: "Buy ERG - Complete Exchange Guide",
    description: "Find the best exchanges to buy ERG. Compare rates, fees, and get started with Ergo.",
    url: "https://ergoblockchain.org/use/get-erg",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/get-erg.png",
      width: 1200,
      height: 630,
      alt: "Buy ERG Guide"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy ERG | Exchange Guide",
    description: "Compare 20+ exchanges to buy ERG. Find the best rates and start trading.",
    images: ["https://ergoblockchain.org/og/get-erg.png"],
    creator: "@ergoplatform",
    site: "@ergoplatform"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function GetErgPage() {
  // SEO схемы для Get ERG
  const exchangeListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://ergoblockchain.org/use/get-erg",
    name: "ERG Exchange Directory",
    description: "Complete list of exchanges where you can buy ERG tokens",
    numberOfItems: 20,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "ExchangeRateSpecification",
          name: "KuCoin",
          url: "https://www.kucoin.com",
          currency: "ERG",
          currentExchangeRate: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "USD"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "ExchangeRateSpecification",
          name: "Gate.io",
          url: "https://www.gate.io",
          currency: "ERG"
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "ExchangeRateSpecification",
          name: "CoinEx",
          url: "https://www.coinex.com",
          currency: "ERG"
        }
      }
    ]
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "Where can I buy ERG?",
      answer: "ERG is available on major exchanges like KuCoin, Gate.io, CoinEx, and Huobi, as well as DEXs like Spectrum Finance. Choose based on your region and preferred payment method."
    },
    {
      question: "What is the best exchange to buy ERG?",
      answer: "KuCoin typically has the highest liquidity and volume for ERG trading, but the best exchange depends on your location, verification requirements, and preferred trading pairs."
    },
    {
      question: "Can I buy ERG with fiat currency?",
      answer: "Yes, some exchanges like KuCoin allow you to buy ERG directly with credit card or bank transfer. Alternatively, you can buy USDT/BTC first and trade for ERG."
    },
    {
      question: "How do I store ERG after buying?",
      answer: "Store ERG in official wallets like Nautilus (browser), Satergo (desktop), or SAFEW (mobile). Never leave large amounts on exchanges long-term."
    }
  ])
  
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Buy ERG Tokens",
    description: "Step-by-step guide to purchasing Ergo cryptocurrency",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      minValue: "10"
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Choose an exchange",
        text: "Select a reputable exchange that lists ERG"
      },
      {
        "@type": "HowToStep",
        name: "Create account",
        text: "Sign up and complete KYC verification if required"
      },
      {
        "@type": "HowToStep",
        name: "Deposit funds",
        text: "Add fiat or cryptocurrency to your exchange account"
      },
      {
        "@type": "HowToStep",
        name: "Buy ERG",
        text: "Trade your funds for ERG tokens"
      },
      {
        "@type": "HowToStep",
        name: "Withdraw to wallet",
        text: "Transfer ERG to your personal wallet for security"
      }
    ]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('exchanges')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(exchangeListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <GetErgClient />
    </>
  )
} 