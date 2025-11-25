import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";
import { PoweredByBuildersDesignedForFreedomClient } from "./PoweredByBuildersDesignedForFreedomClient";

const SLUG = "powered-by-builders-designed-for-freedom";

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
    ("Powered by Builders, Designed for Freedom: Ergo’s Pyramid of Miners, Builders and Users" as string);
  const seoDescription =
    infographic.seoDescription ??
    ("Discover how Ergo’s ecosystem stacks together: miners secure the base layer with fair-launch PoW, builders ship open-source tools and dApps on eUTXO + Sigma, and freedom seekers use it all to own their finance without VC, ICO or premine." as string);

  const ogTitle =
    "Powered by Builders. Designed for Freedom.";
  const ogDescription =
    "Three-layer Ergo pyramid showing miners securing the base layer, builders composing tools and dApps, and freedom seekers using the system as money without masters — with no VC, no ICO and no premine.";

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
      "Ergo ecosystem roles",
      "Proof-of-Work and fair launch",
      "eUTXO and Sigma contracts for builders",
      "Cypherpunk financial freedom",
      "Money without masters philosophy",
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
      <PoweredByBuildersDesignedForFreedomClient infographic={infographic} />
    </>
  );
}


