import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { comparisons } from "@/data/comparisons";
import { CompareHubClient } from "./CompareHubClient";

const origin = siteConfig.siteUrl;
const url = `${origin}/compare`;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ergo vs Other Blockchains: Complete Comparison Guide 2025";
  const description =
    "Compare Ergo with Bitcoin, Ethereum, Cardano, Monero, Solana, Zcash, CBDCs and VC-funded chains. Understand the technical differences, tradeoffs, and why Ergo stands out.";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Ergo Platform",
      title,
      description,
      images: [
        {
          url: `${origin}/og/compare-hub.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/compare-hub.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: [
      "ergo comparison",
      "ergo vs bitcoin",
      "ergo vs ethereum",
      "blockchain comparison",
      "ergo vs cardano",
      "ergo vs monero",
      "cryptocurrency comparison",
      "best blockchain 2025",
    ],
  };
}

export default function ComparePage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Compare", item: url },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: "Ergo Blockchain Comparisons",
    description:
      "Comprehensive comparisons of Ergo with other major blockchain platforms including Bitcoin, Ethereum, Cardano, Monero, and more.",
    url,
    inLanguage: "en",
    numberOfItems: comparisons.length,
    hasPart: comparisons.map((c) => ({
      "@type": "WebPage",
      name: `Ergo vs ${c.name}`,
      url: `${origin}/compare/ergo-vs-${c.slug}`,
    })),
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <CompareHubClient />
    </>
  );
}

