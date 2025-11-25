import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";
import { ErgoVsPrivacyCoinsClient } from "./ErgoVsPrivacyCoinsClient";

const SLUG = "ergo-vs-privacy-coins";

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
    ("Ergo vs Privacy Coins: Monero, Zcash, and L2 Mixers Compared" as string);
  const seoDescription =
    infographic.seoDescription ??
    ("Compare Ergo, Monero, Zcash and L2 mixers across privacy models, smart-contract programmability, selective disclosure, auditability and tokenomics to see how Ergo combines optional Sigma-based privacy with fair-launch PoW." as string);

  const ogTitle =
    infographic.ogImageUrl ??
    ("Ergo vs Privacy Coins" as string);
  const ogDescription =
    infographic.seoDescription ??
    ("Infographic comparing Ergo with Monero, Zcash and L2 mixers, highlighting how Ergo offers optional Sigma-based privacy, real smart contracts, programmable selective disclosure and fair-launched PoW." as string);

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
      "Ergo privacy with Sigma Protocols",
      "Monero and default L1 privacy",
      "Zcash shielded transactions and viewing keys",
      "L2 mixers on Ethereum and other L1s",
      "Fair-launch tokenomics vs founders’ rewards",
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
      <ErgoVsPrivacyCoinsClient infographic={infographic} />
    </>
  );
}


