import type { Metadata } from "next"
import { Suspense } from "react"
import { siteConfig } from "@/config/site-config"
import { faqData, getFAQByLevel, beginnerCategories, technicalCategories } from "@/data/faq"
import FAQPageClient from "./FAQPageClient"
import { createBreadcrumbSchema, createFAQSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export const revalidate = 86400

const PATH = "/faq"

// Helper to create URL-safe slugs from strings
// const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")
const firstSentence = (s: string) => {
  const m = s.replace(/\s+/g, " ").match(/(.+?[.!?])\s/)
  return (m?.[1] || s).slice(0, 500)
}

// SEO Configuration
const SEO = {
  title: "Ergo FAQ — Answers to 50+ Common Questions | Ergo",
  description: "50+ answered questions about Ergo blockchain. Wallets, mining, DeFi, privacy, eUTXO, ErgoScript — find what you need in seconds.",
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const url = getCanonicalUrl(PATH, locale)
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: getAlternates(PATH, locale),
    openGraph: {
      type: "website",
      url,
      siteName: "Ergo",
      title: "Ergo FAQ — Answers to 50+ Common Questions",
      description: "50+ answered questions about Ergo blockchain. Wallets, mining, DeFi, privacy — find what you need in seconds.",
      images: [{ url: `${siteConfig.siteUrl}/og/faq.png`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo FAQ — Answers to 50+ Common Questions",
      description: "50+ answered questions about Ergo. Wallets, mining, DeFi, privacy — find answers in seconds.",
      images: [`${siteConfig.siteUrl}/og/faq.png`],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle
    },
    robots: { index: true, follow: true },
    other: { "og:locale": "en_US" },
  }
}

export default function FAQPage() {
  const beginnerFAQ = getFAQByLevel('beginner')
  const technicalFAQ = getFAQByLevel('technical')
  
  const totalQuestions = faqData.length
  const beginnerCount = beginnerFAQ.length
  const technicalCount = technicalFAQ.length

  // Convert faqData to FAQ items format
  const faqItems = faqData.map(q => ({
    question: q.question,
    answer: firstSentence(q.answer)
  }))

  const schemas = [
    createFAQSchema(faqItems),
    createBreadcrumbSchema([{ name: "FAQ", href: "/faq" }]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <Suspense>
        <FAQPageClient
          beginnerFAQ={beginnerFAQ}
          technicalFAQ={technicalFAQ}
          beginnerCategories={beginnerCategories}
          technicalCategories={technicalCategories}
          stats={{ total: totalQuestions, beginner: beginnerCount, technical: technicalCount }}
        />
      </Suspense>
    </>
  )
}
