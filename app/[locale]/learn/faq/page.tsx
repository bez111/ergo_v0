import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import FAQClient from "./FAQClient"
import FAQListServer from "./FAQListServer"
import FAQBackground from "./FAQBackground"
import { faqData } from "./faqData"

export const revalidate = 86400

const origin = "https://ergoblockchain.org"
const url = `${origin}/learn/faq`

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")
const firstSentence = (s: string) => {
  const m = s.replace(/\s+/g, " ").match(/(.+?[.!?])\s/)
  return (m?.[1] || s).slice(0, 500)
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'learn.faq.seo' })
  const title = t('title')
  const description = t('description')
  const twitterHandle = process.env['NEXT_PUBLIC_TWITTER_HANDLE']
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Ergo",
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [{ url: `${origin}/og/faq.png`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${origin}/og/faq.png`],
      ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
    },
    robots: { index: true, follow: true },
    other: { "og:locale": "en_US" },
  }
}

export default async function LearnFAQPage({ params }: { params: { locale: string } }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'learn.faq' })
  
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
      { "@type": "ListItem", position: 1, name: "Learn", item: `${origin}/learn` },
      { "@type": "ListItem", position: 2, name: "FAQ", item: url },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle background in UI Kit style */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" aria-hidden />
      <FAQBackground />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <header className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-3">{t('title')}</h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl">{t('subtitle')}</p>
        </header>

        {/* Thin client controls over SSR content */}
        <FAQClient rootId="faq-root" />

        {/* Full SSR list with anchors and categories ToC */}
        <FAQListServer data={faqData} rootId="faq-root" locale={locale} />

        {/* No-JS fallback to ensure content is present if JS disabled */}
        <noscript>
          <div className="mt-8 space-y-6">
            {faqData.map((q) => (
              <section key={q.id} id={slug(q.question)}>
                <h3 className="text-xl font-semibold text-white">{q.question}</h3>
                <p className="text-neutral-300">{q.answer}</p>
        </section>
            ))}
          </div>
        </noscript>
      </div>
    </div>
  )
}
