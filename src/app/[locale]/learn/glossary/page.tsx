import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { glossaryTerms } from "@/data/glossary";
import { GlossaryHubClient } from "./GlossaryHubClient";

const glossaryUrl = `${siteConfig.siteUrl}/learn/glossary`;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ergo Glossary — 250+ Blockchain Terms Explained | Ergo";
  const description = "250+ blockchain terms explained simply. From eUTXO to Sigma Protocols — your complete Ergo & crypto glossary. Search, filter, learn.";

  return {
    title,
    description,
    keywords: [
      "Ergo glossary",
      "blockchain terminology",
      "eUTXO explained",
      "NiPoPoWs meaning",
      "Sigma Protocols definition",
      "ErgoScript tutorial",
      "storage rent explained",
      "cryptocurrency terms",
      "blockchain definitions",
    ],
    alternates: { canonical: glossaryUrl },
    openGraph: {
      type: "website",
      url: glossaryUrl,
      siteName: "Ergo Platform",
      title,
      description,
      images: [
        {
          url: `${siteConfig.siteUrl}/og/glossary.png`,
          width: 1200,
          height: 630,
          alt: "Ergo Blockchain Glossary",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.siteUrl}/og/glossary.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export default function GlossaryPage() {
  const origin = siteConfig.siteUrl;

  // DefinedTermSet Schema
  const glossarySchemaJsonLd = {
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
  };

  // Breadcrumbs
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${origin}/learn` },
      { "@type": "ListItem", position: 3, name: "Glossary", item: glossaryUrl },
    ],
  };

  // ItemList for SEO
  const itemListJsonLd = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchemaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <GlossaryHubClient />
    </>
  );
}

