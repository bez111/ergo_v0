import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TechnologyMapClient from "./TechnologyMapClient";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({
    locale,
    namespace: "technology.map.seo",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      images: [
        {
          url: "/og-image-technology-map.png",
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/og-image-technology-map.png"],
    },
  };
}

export default async function TechnologyMapPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({
    locale,
    namespace: "technology.map",
  });

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/map",
    "headline": t("title"),
    "description": t("subtitle"),
    "image": "https://ergoblockchain.org/og/technology-map.png",
    "datePublished": "2024-12-15",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "@id": "https://ergoblockchain.org#organization",
      "name": "Ergo Platform",
      "url": "https://ergoblockchain.org"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://ergoblockchain.org#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ergoblockchain.org/technology/map"
    },
    "articleSection": "Technology",
    "keywords": [
      "Ergo blockchain architecture",
      "eUTXO model",
      "ErgoScript smart contracts",
      "Autolykos proof of work",
      "Sigma protocols",
      "NIPoPoWs light clients",
      "Storage rent mechanism",
      "Native tokens"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "eUTXO Model",
        "description": "Extended UTXO model enabling smart contracts with UTXO security"
      },
      {
        "@type": "Thing",
        "name": "ErgoScript", 
        "description": "Functional smart contract language with built-in cryptographic primitives"
      }
    ],
    "isAccessibleForFree": true,
    "inLanguage": locale,
    "educationalLevel": "Intermediate",
    "learningResourceType": "Technical Guide",
    "timeRequired": "PT7M"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Technology",
        "item": "https://ergoblockchain.org/technology"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t("title"),
        "item": "https://ergoblockchain.org/technology/map"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ergoblockchain.org/technology/map#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does eUTXO differ from Bitcoin's UTXO model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "eUTXO extends Bitcoin's UTXO with registers (R0-R9) for data storage and ErgoTree guard scripts for programmable spending conditions. This enables smart contracts while maintaining UTXO's security and parallelism benefits."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Sigma protocols special for blockchain?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Sigma protocols provide zero-knowledge proofs without trusted setup, enabling privacy features like ring signatures and confidential transactions. They're built directly into ErgoScript, making advanced cryptography accessible to developers."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TechnologyMapClient />
    </>
  );
}
