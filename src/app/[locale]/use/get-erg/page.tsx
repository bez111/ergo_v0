import type { Metadata } from "next"
import GetErgClient from "./GetErgClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"
import {
  createItemListSchema,
  createFAQSchema,
  createHowToSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use.getErg.seo' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "https://ergoblockchain.org/use/get-erg"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
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
      title: t('twitterTitle'),
      description: t('twitterDescription'),
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
}

export default function GetErgPage() {
  // Centralized SEO schemas
  const exchangeListSchema = createItemListSchema({
    name: "ERG Exchange Directory",
    description: "Complete list of exchanges where you can buy ERG tokens",
    items: [
      { name: "KuCoin", url: "https://www.kucoin.com", description: "Major exchange with high ERG liquidity" },
      { name: "Gate.io", url: "https://www.gate.io", description: "Popular exchange supporting ERG" },
      { name: "CoinEx", url: "https://www.coinex.com", description: "Exchange with ERG trading pairs" },
    ],
  })

  const faqSchema = createFAQSchema([
    {
      question: "Where can I buy ERG?",
      answer: "ERG is available on major exchanges like KuCoin, Gate.io, CoinEx, and Huobi, as well as DEXs like Spectrum Finance. Choose based on your region and preferred payment method.",
    },
    {
      question: "What is the best exchange to buy ERG?",
      answer: "KuCoin typically has the highest liquidity and volume for ERG trading, but the best exchange depends on your location, verification requirements, and preferred trading pairs.",
    },
    {
      question: "Can I buy ERG with fiat currency?",
      answer: "Yes, some exchanges like KuCoin allow you to buy ERG directly with credit card or bank transfer. Alternatively, you can buy USDT/BTC first and trade for ERG.",
    },
    {
      question: "How do I store ERG after buying?",
      answer: "Store ERG in official wallets like Nautilus (browser), Satergo (desktop), or SAFEW (mobile). Never leave large amounts on exchanges long-term.",
    },
  ])

  const howToSchema = createHowToSchema({
    name: "How to Buy ERG Tokens",
    description: "Step-by-step guide to purchasing Ergo cryptocurrency",
    estimatedCost: { value: "10", currency: "USD" },
    steps: [
      { name: "Choose an exchange", text: "Select a reputable exchange that lists ERG" },
      { name: "Create account", text: "Sign up and complete KYC verification if required" },
      { name: "Deposit funds", text: "Add fiat or cryptocurrency to your exchange account" },
      { name: "Buy ERG", text: "Trade your funds for ERG tokens" },
      { name: "Withdraw to wallet", text: "Transfer ERG to your personal wallet for security" },
    ],
  })

  const knowledgeGraph = generateKnowledgeGraph("exchanges")

  return (
    <>
      {renderSchemaScripts([exchangeListSchema, faqSchema, howToSchema, knowledgeGraph])}
      <GetErgClient />
    </>
  )
} 