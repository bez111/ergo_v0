import type { Metadata } from "next";
import { PatternsHubClient } from "./PatternsHubClient";
import { devPatterns, categoryLabels, categoryDescriptions, getAllCategories } from "@/data/dev-patterns";
import { siteConfig } from "@/config/site-config";

const origin = siteConfig.siteUrl;
const url = `${origin}/patterns`;

export const metadata: Metadata = {
  title: "ErgoScript Patterns — 18 Copy-Paste Smart Contracts | Ergo",
  description: "18 ready-to-use ErgoScript patterns. Time-locks, multi-sig, AMM, oracles & more. Copy, paste, deploy. Production-ready code examples.",
  keywords: [
    "ErgoScript patterns",
    "Ergo smart contracts",
    "ErgoScript examples",
    "eUTXO patterns",
    "Ergo developer",
    "blockchain patterns",
    "DeFi patterns",
    "copy paste smart contracts"
  ],
  openGraph: {
    title: "ErgoScript Patterns — 18 Copy-Paste Smart Contracts",
    description: "18 ready-to-use ErgoScript patterns. Time-locks, multi-sig, AMM, oracles & more. Copy, paste, deploy.",
    url: `${siteConfig.siteUrl}/patterns`,
    type: "website",
    images: [{ url: `${siteConfig.siteUrl}/og/patterns.png`, width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "ErgoScript Patterns — 18 Copy-Paste Smart Contracts",
    description: "18 ready-to-use ErgoScript patterns. Time-locks, multi-sig, AMM, oracles. Copy, paste, deploy."
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/patterns`
  }
};

export default function PatternsPage() {
  const categories = getAllCategories().map(cat => ({
    id: cat,
    label: categoryLabels[cat],
    description: categoryDescriptions[cat],
    count: devPatterns.filter(p => p.category === cat).length
  }));

  // ItemList schema for patterns collection
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: "ErgoScript Smart Contract Patterns",
    description: "Collection of ready-to-use ErgoScript patterns for building secure smart contracts on Ergo blockchain.",
    numberOfItems: devPatterns.length,
    itemListElement: devPatterns.map((pattern, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        "@id": `${origin}/patterns/${pattern.slug}`,
        name: pattern.title,
        description: pattern.shortDescription,
        url: `${origin}/patterns/${pattern.slug}`,
        programmingLanguage: {
          "@type": "ComputerLanguage",
          name: "ErgoScript"
        },
        codeRepository: "https://github.com/ergoplatform",
        author: {
          "@type": "Organization",
          name: "Ergo Platform"
        }
      }
    }))
  };

  // Breadcrumbs schema
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Patterns", item: url }
    ]
  };

  // CollectionPage schema
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: "ErgoScript Developer Patterns",
    description: "18 ready-to-use ErgoScript patterns for time-locks, multi-sig, AMM, oracles and more. Copy, paste, deploy.",
    url,
    inLanguage: "en",
    numberOfItems: devPatterns.length,
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <PatternsHubClient 
        patterns={devPatterns} 
        categories={categories}
      />
    </>
  );
}

