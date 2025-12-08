import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { glossaryTerms } from "@/data/glossary"
import { GlossaryHubClient } from "./GlossaryHubClient"
import { createBreadcrumbSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const glossaryUrl = `${siteConfig.siteUrl}/learn/glossary`

// SEO Configuration
const SEO = {
  title: "Ergo Glossary — 250+ Blockchain Terms Explained | Ergo",
  description: "250+ blockchain terms explained simply. From eUTXO to Sigma Protocols — your complete Ergo & crypto glossary. Search, filter, learn.",
  keywords: [
    "Ergo glossary", "blockchain terminology", "eUTXO explained",
    "NiPoPoWs meaning", "Sigma Protocols definition", "ErgoScript tutorial",
    "storage rent explained", "cryptocurrency terms", "blockchain definitions"
  ],
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SEO.title,
    description: SEO.description,
    keywords: SEO.keywords,
    alternates: { canonical: glossaryUrl },
    openGraph: {
      type: "website",
      url: glossaryUrl,
      siteName: "Ergo Platform",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${siteConfig.siteUrl}/og/glossary.png`, width: 1200, height: 630, alt: "Ergo Blockchain Glossary" }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [`${siteConfig.siteUrl}/og/glossary.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  }
}

export default function GlossaryPage() {
  const origin = siteConfig.siteUrl

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
      <GlossaryHubClient />
    </>
  )
}
