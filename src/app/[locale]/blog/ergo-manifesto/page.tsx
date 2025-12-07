import type { Metadata } from "next"
import { ErgoManifestoClient } from "./ErgoManifestoClient"
import { siteConfig } from "@/config/site-config"

export const revalidate = 86400 // 24 часа

const origin = siteConfig.siteUrl
const url = `${origin}/blog/ergo-manifesto`

export function generateMetadata(): Metadata {
  const title = "The Ergo Manifesto: Ergonomic Money for Everyone"
  const description = "The foundational vision of Ergo Platform by Kushti - creating decentralized financial tools that empower ordinary people. A manifesto for true peer-to-peer economic freedom."
  
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Blockchain",
      title,
      description,
      images: [{ url: `${origin}/og/ergo-manifesto.png`, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      publishedTime: "2021-04-26T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Alexander Chepurnoy (Kushti)"],
      tags: ["Manifesto", "Philosophy", "Decentralization", "Financial Freedom"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/ergo-manifesto.png`],
      site: "@BuildOnErgo",
      creator: "@BuildOnErgo",
    },
    robots: { 
      index: true, 
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    keywords: [
      "ergo manifesto",
      "ergonomic money",
      "decentralized finance",
      "financial freedom",
      "cryptocurrency philosophy",
      "peer to peer",
      "blockchain manifesto",
      "kushti",
      "alexander chepurnoy",
      "crypto vision",
      "grassroots crypto"
    ],
  }
}

export default function ErgoManifestoPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: "The Ergo Manifesto: Ergonomic Money for Everyone",
    description: "The foundational vision of Ergo Platform - creating decentralized financial tools that empower ordinary people, not corporations.",
    image: `${origin}/og/ergo-manifesto.png`,
    datePublished: "2021-04-26T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Alexander Chepurnoy (Kushti)",
      url: `${origin}/about/kushti`
    },
    publisher: {
      "@type": "Organization", 
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`
      }
    },
    mainEntityOfPage: url,
    wordCount: 2500,
    timeRequired: "PT10M",
    inLanguage: "en",
    genre: "Manifesto",
    about: [
      {
        "@type": "Thing",
        name: "Cryptocurrency Philosophy",
        sameAs: "https://en.wikipedia.org/wiki/Cryptocurrency"
      },
      {
        "@type": "Thing", 
        name: "Decentralized Finance",
        sameAs: "https://en.wikipedia.org/wiki/Decentralized_finance"
      },
      {
        "@type": "Thing",
        name: "Financial Privacy",
        sameAs: "https://en.wikipedia.org/wiki/Financial_privacy"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "The Ergo Manifesto", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Ergo Manifesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Ergo Manifesto is a foundational document written by Kushti (Alexander Chepurnoy) outlining Ergo's vision: building 'ergonomic money' — financial tools designed for ordinary people, not corporations or surveillance states."
        }
      },
      {
        "@type": "Question",
        name: "Who wrote the Ergo Manifesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The manifesto was written by Alexander Chepurnoy (known as Kushti), Ergo's founder and lead developer. Kushti is a veteran blockchain researcher who previously worked at IOHK on Cardano and has been in crypto since 2011."
        }
      },
      {
        "@type": "Question",
        name: "What does 'ergonomic money' mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergonomic money refers to cryptocurrency designed with human usability in mind — tools that work for regular people's needs, not just speculators or institutions. It emphasizes privacy, accessibility, and genuine utility."
        }
      },
      {
        "@type": "Question",
        name: "How does the Ergo Manifesto differ from Bitcoin's whitepaper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While Bitcoin's whitepaper is technical, the Ergo Manifesto is philosophical. It addresses why decentralized money matters, the threats of surveillance capitalism, and how blockchain should serve ordinary people's financial sovereignty."
        }
      },
      {
        "@type": "Question",
        name: "What are the core principles of the Ergo Manifesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key principles include: privacy as a human right, decentralization over efficiency, tools for the people (not corporations), resistance to surveillance, and long-term sustainability through fair tokenomics and storage rent."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <ErgoManifestoClient />
    </>
  )
}
