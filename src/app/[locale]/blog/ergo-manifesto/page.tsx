import type { Metadata } from "next"
import { ErgoManifestoClient } from "./ErgoManifestoClient"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export const revalidate = 86400

const origin = siteConfig.siteUrl
const url = `${origin}/blog/ergo-manifesto`

// SEO Configuration
const SEO = {
  title: "The Ergo Manifesto: Ergonomic Money for Everyone",
  description: "The foundational vision of Ergo Platform by Kushti - creating decentralized financial tools that empower ordinary people. A manifesto for true peer-to-peer economic freedom.",
  image: "/og/ergo-manifesto.png",
  keywords: [
    "ergo manifesto", "ergonomic money", "decentralized finance",
    "financial freedom", "cryptocurrency philosophy", "peer to peer",
    "blockchain manifesto", "kushti", "alexander chepurnoy",
    "crypto vision", "grassroots crypto"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  { question: "What is the Ergo Manifesto?", answer: "The Ergo Manifesto is a foundational document written by Kushti (Alexander Chepurnoy) outlining Ergo's vision: building 'ergonomic money' — financial tools designed for ordinary people, not corporations or surveillance states." },
  { question: "Who wrote the Ergo Manifesto?", answer: "The manifesto was written by Alexander Chepurnoy (known as Kushti), Ergo's founder and lead developer. Kushti is a veteran blockchain researcher who previously worked at IOHK on Cardano and has been in crypto since 2011." },
  { question: "What does 'ergonomic money' mean?", answer: "Ergonomic money refers to cryptocurrency designed with human usability in mind — tools that work for regular people's needs, not just speculators or institutions. It emphasizes privacy, accessibility, and genuine utility." },
  { question: "How does the Ergo Manifesto differ from Bitcoin's whitepaper?", answer: "While Bitcoin's whitepaper is technical, the Ergo Manifesto is philosophical. It addresses why decentralized money matters, the threats of surveillance capitalism, and how blockchain should serve ordinary people's financial sovereignty." },
  { question: "What are the core principles of the Ergo Manifesto?", answer: "Key principles include: privacy as a human right, decentralization over efficiency, tools for the people (not corporations), resistance to surveillance, and long-term sustainability through fair tokenomics and storage rent." }
]

export function generateMetadata(): Metadata {
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Blockchain",
      title: SEO.title,
      description: SEO.description,
      images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630, alt: SEO.title }],
      locale: "en_US",
      publishedTime: "2021-04-26T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Alexander Chepurnoy (Kushti)"],
      tags: ["Manifesto", "Philosophy", "Decentralization", "Financial Freedom"]
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [`${origin}${SEO.image}`],
      site: "@BuildOnErgo",
      creator: "@BuildOnErgo",
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    keywords: SEO.keywords,
  }
}

export default function ErgoManifestoPage() {
  // Article schema (complex, kept structured)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: SEO.title,
    description: SEO.description,
    image: `${origin}${SEO.image}`,
    datePublished: "2021-04-26T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: { "@type": "Person", name: "Alexander Chepurnoy (Kushti)", url: `${origin}/about/kushti` },
    publisher: { "@type": "Organization", name: "Ergo Platform", logo: { "@type": "ImageObject", url: `${origin}/logo-ergo.svg` } },
    mainEntityOfPage: url,
    wordCount: 2500,
    timeRequired: "PT10M",
    inLanguage: "en",
    genre: "Manifesto",
  }

  const schemas = [
    articleSchema,
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "The Ergo Manifesto", href: "/blog/ergo-manifesto" },
    ], false),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ErgoManifestoClient />
    </>
  )
}
