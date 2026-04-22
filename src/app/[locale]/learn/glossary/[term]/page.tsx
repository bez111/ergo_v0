import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getMessages } from 'next-intl/server'
import { siteConfig } from "@/config/site-config"
import { glossaryTerms, getTermBySlug } from "@/data/glossary"
import { getLocalizedGlossaryTerm, type GlossaryTermsTranslations } from "@/data/glossary-i18n"
import { GlossaryTermClient } from "./GlossaryTermClient"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ term: string; locale: string }>
}

// Generate static params for all glossary terms
export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({ term: term.slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const baseTerm = getTermBySlug(params.term)

  if (!baseTerm) {
    return { title: "Term Not Found", description: "The requested glossary term could not be found." }
  }

  // Get translations for non-English locales
  let term = baseTerm
  if (params.locale !== 'en') {
    try {
      const messages = await getMessages({ locale: params.locale }) as { glossaryTerms?: GlossaryTermsTranslations }
      term = getLocalizedGlossaryTerm(baseTerm, messages?.glossaryTerms)
    } catch {
      // Fallback to English
    }
  }

  const origin = siteConfig.siteUrl
  const path = `/learn/glossary/${term.slug}`
  const url = getCanonicalUrl(path, params.locale)
  const title = term.seoTitle || `What is ${term.term}? | Ergo Glossary`
  const description = term.seoDescription || term.shortDefinition

  return {
    title,
    description,
    keywords: term.keywords,
    alternates: getAlternates(path, params.locale),
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title,
      description,
      images: [{ url: `${origin}/og/glossary-${term.slug}.png`, width: 1200, height: 630, alt: `${term.term} - Ergo Glossary` }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/glossary-${term.slug}.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  }
}

export default async function GlossaryTermPage(props: Props) {
  const params = await props.params
  const baseTerm = getTermBySlug(params.term)

  if (!baseTerm) {
    notFound()
  }

  // Get translations for non-English locales
  let term = baseTerm
  if (params.locale !== 'en') {
    try {
      const messages = await getMessages({ locale: params.locale }) as { glossaryTerms?: GlossaryTermsTranslations }
      term = getLocalizedGlossaryTerm(baseTerm, messages?.glossaryTerms)
    } catch {
      // Fallback to English
    }
  }

  const origin = siteConfig.siteUrl
  const url = `/learn/glossary/${term.slug}`

  // DefinedTerm schema (special type, kept structured)
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${origin}${url}#term`,
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${origin}/learn/glossary#glossary`,
      name: "Ergo Blockchain Glossary",
    },
  }

  // FAQ items
  const faqItems = term.faq.map(item => ({
    question: item.question,
    answer: item.answer
  }))

  const schemas = [
    definedTermSchema,
    createTechArticleSchema(url, {
      headline: `What is ${term.term}?`,
      description: term.shortDefinition,
      datePublished: term.publishDate,
      dateModified: term.updatedDate || term.publishDate,
      keywords: term.keywords,
      proficiencyLevel: term.difficulty === 'beginner' ? 'Beginner' : 
                        term.difficulty === 'intermediate' ? 'Intermediate' : 'Advanced',
    }),
    createBreadcrumbSchema([
      { name: "Learn", href: "/learn" },
      { name: "Glossary", href: "/learn/glossary" },
      { name: term.term, href: url },
    ]),
    createFAQSchema(faqItems),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <GlossaryTermClient term={term} />
    </>
  )
}
