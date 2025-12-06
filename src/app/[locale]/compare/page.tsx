import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { comparisons } from "@/data/comparisons";
import { CompareHubClient } from "./CompareHubClient";
import { FAQSchema } from "@/components/seo/faq-schema";

const origin = siteConfig.siteUrl;
const url = `${origin}/compare`;

// FAQ data for compare page
const compareFAQ = [
  {
    question: "Is Ergo better than Ethereum?",
    answer: "Ergo and Ethereum serve different purposes. Ergo uses eUTXO model which is MEV-resistant (no front-running), has predictable fees (~$0.01), and is more secure for DeFi. Ethereum has larger ecosystem and more developers. Ergo is better for users who want fair, predictable transactions without MEV extraction."
  },
  {
    question: "How is Ergo different from Cardano?",
    answer: "Both use eUTXO model, but Ergo is Proof-of-Work (like Bitcoin) while Cardano is Proof-of-Stake. Ergo had fair launch (no ICO, no pre-mine) vs Cardano's ICO. Ergo has Sigma Protocols for privacy, Storage Rent for sustainability, and is more focused on financial applications and cypherpunk values."
  },
  {
    question: "Is Ergo better than Bitcoin?",
    answer: "Ergo extends Bitcoin's proven PoW security with smart contracts via ErgoScript. Both have fair launch and fixed supply. Ergo adds: programmable money (smart contracts), optional privacy (Sigma Protocols), Storage Rent (sustainability), and NiPoPoWs (light clients). Bitcoin has larger network effect and liquidity."
  },
  {
    question: "What makes Ergo unique compared to other blockchains?",
    answer: "Ergo uniquely combines: eUTXO model (Bitcoin security + smart contracts), Sigma Protocols (optional privacy), Storage Rent (long-term sustainability), Autolykos (ASIC-resistant mining), fair launch (no pre-mine, no VC), and MEV-resistance. No other chain has this exact combination."
  },
  {
    question: "Is Ergo more private than Monero?",
    answer: "Ergo offers optional privacy through Sigma Protocols and ErgoMixer, while Monero has mandatory privacy. Ergo's approach allows compliance when needed while still enabling strong privacy. Monero is better for maximum anonymity, Ergo is better for flexible privacy with smart contract capabilities."
  }
];

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ergo vs Bitcoin, Ethereum, Cardano — Full Comparison | Ergo";
  const description =
    "Compare Ergo to Bitcoin, Ethereum, Cardano, Monero & more. Side-by-side analysis of consensus, smart contracts, privacy & tokenomics.";

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
      <FAQSchema 
        faqs={compareFAQ}
        pageUrl={url}
      />
      <CompareHubClient />
    </>
  );
}

