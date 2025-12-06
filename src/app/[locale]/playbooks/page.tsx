import { Metadata } from "next";
import { playbooks, playbookClusters } from "@/data/playbooks";
import { PlaybooksHubClient } from "./PlaybooksHubClient";
import { siteConfig } from "@/config/site-config";

const origin = siteConfig.siteUrl;
const url = `${origin}/playbooks`;

export const metadata: Metadata = {
  title: "Ergo Playbooks — Step-by-Step Guides for DeFi, Privacy & Mining | Ergo",
  description:
    "Step-by-step guides for building on Ergo. DeFi, privacy, mining, NFTs — choose your path and start shipping. Curated resources & tutorials.",
  keywords: [
    "Ergo playbooks",
    "Ergo guides",
    "Ergo tutorials",
    "DeFi guide",
    "crypto privacy guide",
    "GPU mining guide",
    "Ergo development",
    "blockchain tutorials",
  ],
  openGraph: {
    title: "Ergo Playbooks — Step-by-Step Guides for DeFi, Privacy & Mining",
    description:
      "Step-by-step guides for building on Ergo. DeFi, privacy, mining, NFTs — choose your path and start shipping.",
    type: "website",
    url: "https://ergoblockchain.org/playbooks",
    siteName: "Ergo Blockchain",
    images: [{
      url: "https://ergoblockchain.org/og/playbooks-hub.png",
      width: 1200,
      height: 630,
      alt: "Ergo Playbooks - Step-by-Step Guides"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Playbooks — Step-by-Step Guides",
    description:
      "Step-by-step guides for building on Ergo. DeFi, privacy, mining — choose your path and start shipping.",
    images: ["https://ergoblockchain.org/og/playbooks-hub.png"]
  },
  alternates: {
    canonical: "https://ergoblockchain.org/playbooks",
  },
};

export default function PlaybooksPage() {
  // ItemList schema for playbooks collection
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: "Ergo Development Playbooks",
    description: "Step-by-step guides for building on Ergo blockchain. DeFi, privacy, mining, NFTs and more.",
    numberOfItems: playbooks.length,
    itemListElement: playbooks.map((playbook, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        "@id": `${origin}/playbooks/${playbook.slug}`,
        name: playbook.title,
        description: playbook.heroDescription,
        url: `${origin}/playbooks/${playbook.slug}`,
        provider: {
          "@type": "Organization",
          name: "Ergo Platform",
          url: origin
        },
        educationalLevel: playbook.difficulty === "beginner" ? "Beginner" : 
                          playbook.difficulty === "intermediate" ? "Intermediate" : "Advanced",
        timeRequired: playbook.timeToComplete,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: playbook.timeToComplete
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
      { "@type": "ListItem", position: 2, name: "Playbooks", item: url }
    ]
  };

  // CollectionPage schema
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: "Ergo Playbooks",
    description: "Step-by-step guides for building on Ergo. DeFi, privacy, mining, NFTs — choose your path and start shipping.",
    url,
    inLanguage: "en",
    numberOfItems: playbooks.length,
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
      <PlaybooksHubClient playbooks={playbooks} clusters={playbookClusters} />
    </>
  );
}

