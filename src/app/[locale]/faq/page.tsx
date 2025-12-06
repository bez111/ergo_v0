import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { faqData, getFAQByLevel, beginnerCategories, technicalCategories } from "@/data/faq"
import FAQPageClient from "./FAQPageClient"

export const revalidate = 86400

const url = `${siteConfig.siteUrl}/faq`

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")
const firstSentence = (s: string) => {
  const m = s.replace(/\s+/g, " ").match(/(.+?[.!?])\s/)
  return (m?.[1] || s).slice(0, 500)
}

export function generateMetadata(): Metadata {
  const title = "Ergo FAQ — Answers to 50+ Common Questions | Ergo"
  const description =
    "50+ answered questions about Ergo blockchain. Wallets, mining, DeFi, privacy, eUTXO, ErgoScript — find what you need in seconds."
  return {
    title,
    description,
    alternates: { canonical: url },
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

  // FAQPage schema for all questions
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((q) => ({
      "@type": "Question",
      "@id": `${url}#${slug(q.question)}`,
      name: q.question,
      url: `${url}#${slug(q.question)}`,
      acceptedAnswer: { "@type": "Answer", text: firstSentence(q.answer) },
      inLanguage: "en",
    })),
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "FAQ", item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />

      <FAQPageClient 
        beginnerFAQ={beginnerFAQ}
        technicalFAQ={technicalFAQ}
        beginnerCategories={beginnerCategories}
        technicalCategories={technicalCategories}
        stats={{
          total: totalQuestions,
          beginner: beginnerCount,
          technical: technicalCount
        }}
      />
    </>
  )
}

