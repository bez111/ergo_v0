import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site-config"
import { glossaryTerms } from "@/data/glossary"
import { GlossaryHubClient } from "./GlossaryHubClient"
import { createBreadcrumbSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'glossary.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: getAlternates('/learn/glossary', locale),
    openGraph: {
      type: "website",
      url: getCanonicalUrl('/learn/glossary', locale),
      siteName: "Ergo Platform",
      title: t('title'),
      description: t('description'),
      images: [{ url: `${siteConfig.siteUrl}/og/glossary.png`, width: 1200, height: 630, alt: "Ergo Blockchain Glossary" }],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: [`${siteConfig.siteUrl}/og/glossary.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  }
}

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params
  const origin = siteConfig.siteUrl
  const glossaryUrl = `${origin}/learn/glossary`

  // DefinedTermSet Schema (complex, kept structured)
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${glossaryUrl}#glossary`,
    name: "Ergo Blockchain Glossary",
    description: "Comprehensive glossary of Ergo blockchain terminology and concepts.",
    url: glossaryUrl,
    hasDefinedTerm: glossaryTerms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${origin}/learn/glossary/${term.slug}#term`,
      name: term.term,
      description: term.shortDefinition,
      url: `${origin}/learn/glossary/${term.slug}`,
    })),
  }

  // ItemList for SEO (complex, kept structured)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ergo Blockchain Terms",
    description: "List of key terms and concepts in the Ergo blockchain ecosystem.",
    numberOfItems: glossaryTerms.length,
    itemListElement: glossaryTerms.map((term, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: term.term,
      url: `${origin}/learn/glossary/${term.slug}`,
    })),
  }

  const schemas = [
    glossarySchema,
    itemListSchema,
    createBreadcrumbSchema([
      { name: "Learn", href: "/learn" },
      { name: "Glossary", href: "/learn/glossary" },
    ]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <GlossaryHubClient locale={locale} />
    </>
  )
}
