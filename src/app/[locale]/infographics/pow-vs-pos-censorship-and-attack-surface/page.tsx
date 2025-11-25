import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";
import { PowVsPosCensorshipAttackSurfaceClient } from "./PowVsPosCensorshipAttackSurfaceClient";

const SLUG = "pow-vs-pos-censorship-and-attack-surface";

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
    ("PoW vs PoS: Censorship Resistance & Attack Surface Compared" as string);
  const seoDescription =
    infographic.seoDescription ??
    ("See how Proof-of-Work, classic Proof-of-Stake, and validator-committee systems differ in who can censor transactions, how easy cartels form, their regulatory exposure, and what resistance tools users really have." as string);

  const ogTitle =
    infographic.seoTitle ??
    ("PoW vs PoS: Who Can Block Your Transactions?" as string);
  const ogDescription =
    infographic.seoDescription ??
    ("Infographic comparing PoW, PoS and validator-committee designs on censorship power, cartel risk, regulatory pressure and user resistance, showing why broad PoW hashpower is harder to capture." as string);

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
      "Proof-of-Work vs Proof-of-Stake security",
      "Censorship resistance in blockchain",
      "Regulatory pressure on validators and miners",
      "DPoS and BFT validator committee risks",
      "Ergo’s PoW design and decentralization",
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
      <PowVsPosCensorshipAttackSurfaceClient infographic={infographic} />
    </>
  );
}


