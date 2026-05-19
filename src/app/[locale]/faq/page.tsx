import type { Metadata } from "next"
import { Suspense } from "react"
import { siteConfig } from "@/config/site-config"
import { faqData, getFAQByLevel, beginnerCategories, technicalCategories } from "@/data/faq"
import FAQPageClient from "./FAQPageClient"
import { createBreadcrumbSchema, createFAQSchema, getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export const revalidate = 86400

const PATH = "/faq"

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
      images: [{ url: `${siteConfig.siteUrl}/og/faq.jpg`, width: 1200, height: 630 }],
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo FAQ — Answers to 50+ Common Questions",
      description: "50+ answered questions about Ergo. Wallets, mining, DeFi, privacy — find answers in seconds.",
      images: [`${siteConfig.siteUrl}/og/faq.jpg`],
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

  // Convert faqData to FAQ items format. Use the full answer so the
  // FAQPage schema matches what's now rendered server-side below.
  const faqItems = faqData.map(q => ({
    question: q.question,
    answer: q.answer,
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

      {/* Server-rendered fallback: every question + answer is always in the
          HTML so crawlers, screen readers, and no-JS users never see an empty
          FAQ page. The interactive client UI above provides search/filter for
          users with JS. */}
      <section
        id="all-faq-answers"
        aria-label="All FAQ answers"
        className="container max-w-4xl mx-auto px-4 py-16 border-t border-neutral-800"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          All Questions &amp; Answers
        </h2>
        <p className="text-sm text-neutral-400 mb-8">
          {totalQuestions} questions, fully expanded for screen readers,
          search engines, and printing. Use the search bar above for an
          interactive filter.
        </p>

        {(["beginner", "technical"] as const).map((level) => {
          const items = level === "beginner" ? beginnerFAQ : technicalFAQ
          const heading = level === "beginner" ? "Beginner" : "Technical"
          const cats = level === "beginner" ? beginnerCategories : technicalCategories
          return (
            <div key={level} className="mb-12">
              <h3 className="text-xl font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                {heading} ({items.length})
              </h3>
              {cats.map((cat) => {
                const inCat = items.filter((q) => q.category === cat)
                if (inCat.length === 0) return null
                return (
                  <div key={cat} className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">{cat}</h4>
                    <dl className="space-y-4">
                      {inCat.map((q) => (
                        <div
                          key={q.id}
                          id={q.id}
                          className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/40"
                        >
                          <dt className="font-semibold text-white mb-2">{q.question}</dt>
                          <dd className="text-neutral-300 leading-relaxed whitespace-pre-line">
                            {q.answer}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
    </>
  )
}
