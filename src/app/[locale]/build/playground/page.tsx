import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createTechArticleSchema, getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { ErgoScriptPlaygroundClient } from "./ErgoScriptPlaygroundClient"

const PATH = "/build/playground"
const TITLE = "ErgoScript Playground — Monaco + sigma-rust WASM"
const DESCRIPTION =
  "Compile ErgoScript in the browser, inspect ErgoTree output, derive P2S addresses, and validate serialization with sigma-rust WASM."
const KEYWORDS = [
  "ErgoScript playground",
  "ErgoScript compiler",
  "sigma-rust wasm",
  "ErgoTree",
  "P2S address",
  "Monaco editor ErgoScript",
  "Fleet SDK compiler",
  "Ergo smart contract playground",
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: getAlternates(PATH, locale),
    keywords: KEYWORDS,
    openGraph: {
      type: "website",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Platform",
      title: TITLE,
      description: DESCRIPTION,
      images: [{ url: `${siteConfig.siteUrl}/og/agent-economy.png`, width: 1200, height: 630, alt: TITLE }],
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [`${siteConfig.siteUrl}/og/agent-economy.png`],
      site: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    other: {
      "ai-content-type": "developer-tool-ergoscript-playground",
      "ai-topic": "ErgoScript, sigma-rust WASM, ErgoTree, P2S address, Fleet compiler",
    },
  }
}

export default function ErgoScriptPlaygroundPage() {
  const schemas = [
    createTechArticleSchema(PATH, {
      headline: TITLE,
      description: DESCRIPTION,
      image: "/og/agent-economy.png",
      datePublished: "2026-05-15",
      dateModified: "2026-05-15",
      keywords: KEYWORDS,
      proficiencyLevel: "Intermediate",
    }),
    createBreadcrumbSchema(
      [
        { name: "Build", href: "/build/agent-payments" },
        { name: "ErgoScript Playground", href: PATH },
      ],
      false,
    ),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ErgoScriptPlaygroundClient />
    </>
  )
}

