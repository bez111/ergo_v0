import type { Metadata } from "next";
import { InfographicsClient } from "./InfographicsClient";
import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";

const origin = siteConfig.siteUrl;
const url = `${origin}/infographics`;

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Ergo Blockchain Infographics – Visual Guides to PoW, DeFi, Storage Rent & Privacy';
  const description = 'Discover visual explainers of the Ergo blockchain: PoW consensus, eUTXO smart contracts, storage rent, privacy with Sigma protocols, NiPoPoWs and more. Save, share and reuse with attribution.';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: "Ergo Platform",
      title,
      description,
      images: [{
        url: `${origin}/og/infographics-hub.svg`,
        width: 1200,
        height: 630,
        alt: title
      }],
      locale: "en_US"
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${origin}/og/infographics-hub.svg`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: [
      'Ergo infographics', 'blockchain visual guides', 'Ergo PoW explained', 'eUTXO diagrams',
      'storage rent visualization', 'Sigma protocols infographic', 'NiPoPoWs explained',
      'Ergo vs VC chains', 'Autolykos mining', 'ErgoScript tutorial', 'oracle pools diagram',
      'blockchain education', 'visual learning', 'Ergo ecosystem'
    ],
  };
}

export default function InfographicsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: "Ergo Blockchain Infographics",
    description: "Visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and global settlement. Save, share, and reuse them with attribution to ergoblockchain.org.",
    url,
    inLanguage: "en",
    about: [
      {
        "@type": "Thing",
        name: "Blockchain Technology",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain"
      },
      {
        "@type": "Thing", 
        name: "Proof of Work",
        sameAs: "https://en.wikipedia.org/wiki/Proof_of_work"
      },
      {
        "@type": "Thing",
        name: "Smart Contracts", 
        sameAs: "https://en.wikipedia.org/wiki/Smart_contract"
      }
    ],
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`
      }
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Infographics", item: url },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}#website`,
    url: origin,
    name: "Ergo Platform",
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I reuse these infographics commercially?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can reuse any infographic in presentations, blog posts or educational materials. Please credit ergoblockchain.org and link back to the original page."
        }
      },
      {
        "@type": "Question",
        name: "Will there be translations/localized versions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are working on providing infographics in multiple languages. Contact the Ergo community if you'd like to help with translations."
        }
      },
      {
        "@type": "Question",
        name: "Where can I request a new infographic topic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request new infographic topics through the Ergo community channels on Discord, Telegram, or by creating an issue on the official GitHub repository."
        }
      }
    ]
  };

  // ItemList JSON-LD for individual infographics
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: "Ergo Blockchain Infographics Collection",
    description: "Visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and global settlement.",
    numberOfItems: infographics.length,
    itemListElement: infographics.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ImageObject",
        "@id": `${origin}/infographics/${item.slug}`,
        name: item.title,
        description: item.shortDescription,
        url: `${origin}/infographics/${item.slug}`,
        contentUrl: `${origin}${item.fullImageUrl}`,
        thumbnailUrl: `${origin}${item.previewImageUrl}`,
        datePublished: item.publishDate,
        author: {
          "@type": "Organization",
          name: "Ergo Platform"
        }
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      
      <InfographicsClient />
    </>
  );
}
