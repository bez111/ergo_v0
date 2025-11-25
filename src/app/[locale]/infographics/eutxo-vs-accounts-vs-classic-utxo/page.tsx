import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { infographics } from "@/data/infographics";
import { EutxoVsAccountsVsClassicUtxoClient } from "./EutxoVsAccountsVsClassicUtxoClient";

const SLUG = "eutxo-vs-accounts-vs-classic-utxo";

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

  const {
    seoTitle,
    seoDescription,
    fullImageUrl,
    imageAlt,
    ogTitle,
    ogDescription,
  } = {
    seoTitle:
      "eUTXO vs Accounts vs Classic UTXO: State Model Comparison" as string,
    seoDescription:
      "Compare Bitcoin’s classic UTXO, the global account model and Ergo’s eUTXO to see how each impacts parallelism, logic transparency, smart-contract design and fee predictability." as string,
    fullImageUrl:
      "/infographics/eutxo-vs-accounts-vs-classic-utxo.png" as string,
    imageAlt:
      "Infographic titled “eUTXO vs Accounts vs Classic UTXO” comparing Bitcoin’s classic UTXO model, the account model, and Ergo-style eUTXO in terms of parallelism, logic transparency, smart-contract friendliness, and fee predictability." as string,
    ogTitle: "eUTXO vs Accounts vs Classic UTXO" as string,
    ogDescription:
      "Infographic showing how classic UTXO, account-based state and Ergo-style eUTXO differ in conflicts, clarity, expressiveness and fee predictability, and why eUTXO offers UTXO safety with smart-contract power." as string,
  };

  const url = `${siteConfig.url}/${resolved.locale}/infographics/${SLUG}`;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: ogTitle ?? seoTitle,
      description: ogDescription ?? seoDescription,
      type: "article",
      url,
      images: [
        {
          url: fullImageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? seoTitle,
      description: ogDescription ?? seoDescription,
      images: [fullImageUrl],
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
      "Ergo eUTXO model",
      "UTXO vs account-based blockchains",
      "Smart-contract design patterns",
      "Parallelism and conflicts in DeFi",
      "Fee predictability and user experience",
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
      <EutxoVsAccountsVsClassicUtxoClient infographic={infographic} />
    </>
  );
}


