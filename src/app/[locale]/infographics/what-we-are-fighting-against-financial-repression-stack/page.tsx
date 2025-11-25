import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";
import { WhatWeAreFightingAgainstClient } from "./WhatWeAreFightingAgainstClient";

const SLUG = "what-we-are-fighting-against-financial-repression-stack";

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
    ("What We’re Fighting Against: The Financial Repression Stack (and How Ergo Responds)" as string);
  const seoDescription =
    infographic.seoDescription ??
    ("Visual breakdown of the financial repression stack—capital controls, freezing accounts, sanctions, KYC overreach and programmable CBDCs—contrasted with Ergo’s censorship-resistant settlement, permissionless programmability and privacy on demand." as string);

  const ogTitle =
    "What We’re Fighting Against: The Financial Repression Stack";
  const ogDescription =
    "Infographic showing how capital controls, frozen accounts, sanctions, KYC overreach and CBDCs reduce control over your money, and how Ergo offers censorship-resistant settlement, gatekeeper-free programmability and opt-in privacy instead.";

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
      "CBDCs and financial control",
      "Capital controls and sanctions",
      "Censorship-resistant settlement on Ergo",
      "Sigma-based privacy tools",
      "Cypherpunk approaches to financial freedom",
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
      <WhatWeAreFightingAgainstClient infographic={infographic} />
    </>
  );
}


