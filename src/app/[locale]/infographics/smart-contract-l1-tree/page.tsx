import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";
import { SmartContractL1TreeClient } from "./SmartContractL1TreeClient";

const SLUG = "smart-contract-l1-tree";

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
    ("Smart-Contract L1 Tree: Bitcoin, Ethereum, Cardano and Ergo Compared" as string);
  const seoDescription =
    infographic.seoDescription ??
    ("Explore how smart-contract layer-1s evolved from Bitcoin’s basic scripting to Ethereum’s account model and the eUTXO family (Cardano and Ergo), with a side-by-side comparison of determinism, audit complexity, expressiveness and hidden state risk." as string);

  const ogTitle =
    infographic.ogImageUrl ??
    ("Smart-Contract L1 Tree: From Bitcoin to eUTXO + Sigma Protocols" as string);
  const ogDescription =
    infographic.seoDescription ??
    ("Infographic showing Bitcoin as the root of smart-contract L1s and branching into Ethereum, Cardano and Ergo, plus a table comparing determinism, audit complexity, expressiveness and hidden global state risk." as string);

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
      "eUTXO vs account model",
      "ErgoScript and Sigma protocols",
      "Ethereum EVM design",
      "Cardano Plutus and eUTXO",
      "Smart-contract security and auditability",
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
      <SmartContractL1TreeClient infographic={infographic} />
    </>
  );
}


