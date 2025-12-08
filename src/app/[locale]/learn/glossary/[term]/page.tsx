import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { siteConfig } from "@/config/site-config"
import { glossaryTerms, getTermBySlug } from "@/data/glossary"
import { GlossaryTermClient } from "./GlossaryTermClient"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema } from "@/lib/seo"
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
  const term = getTermBySlug(params.term)

  if (!term) {
    return { title: "Term Not Found", description: "The requested glossary term could not be found." }
  }

  const origin = siteConfig.siteUrl
  const url = `${origin}/learn/glossary/${term.slug}`
  const title = term.seoTitle || `What is ${term.term}? | Ergo Glossary`
  const description = term.seoDescription || term.shortDefinition

  return {
    title,
    description,
    keywords: term.keywords,
    alternates: { canonical: url },
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
  const term = getTermBySlug(params.term)

  if (!term) {
    notFound()
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
