import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";
import { MevResistanceVsDarkForestClient } from "./MevResistanceVsDarkForestClient";

const SLUG = "mev-resistance-vs-dark-forest";

type Params = {
  locale: string;
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const infographic = infographics.find((item) => item.slug === SLUG);

  if (!infographic) {
    return {
      title: "Infographic not found",
      description: "The requested infographic could not be found.",
    };
  }

  const seoTitle =
    infographic.seoTitle ??
    ("MEV-Resistance vs the Dark Forest: Ergo’s Local Ordering vs Global DeFi Mempools" as string);
  const seoDescription =
    infographic.seoDescription ??
    ("See how Ethereum-style ‘Dark Forest’ MEV markets with global mempools compare to Ergo’s MEV-aware, eUTXO-based local ordering design, including where front-running happens, who captures value, user experience and L1 mitigation." as string);

  const ogTitle =
    "MEV-Resistance vs the “Dark Forest”";
  const ogDescription =
    "Infographic comparing global DeFi MEV environments to Ergo’s MEV-aware local ordering, explaining how eUTXO and local mempools shrink the ‘dark forest’ instead of relying on one giant casino mempool.";

  const url = `${siteConfig.url}/${resolved.locale}/infographics/${SLUG}`;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "article",
      url,
      images: [
        {
          url: infographic.fullImageUrl,
          alt: infographic.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [infographic.fullImageUrl],
    },
  };
}

export default async function InfographicPage({ params }: Props) {
  const resolved = await params;
  const infographic = infographics.find((item) => item.slug === SLUG);

  if (!infographic) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: infographic.title,
    description: infographic.seoDescription,
    contentUrl: infographic.fullImageUrl,
    thumbnailUrl: infographic.previewImageUrl,
    inLanguage: "en",
    about: [
      "MEV on Ethereum and DeFi chains",
      "Ergo’s MEV-aware local ordering design",
      "eUTXO and shared-state MEV",
      "Private mempools and order-flow auctions",
      "Front-running and sandwich attacks in DeFi",
    ],
    datePublished: infographic.publishDate,
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MevResistanceVsDarkForestClient infographic={infographic} />
    </>
  );
}


