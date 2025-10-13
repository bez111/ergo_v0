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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("title"),
    description: t("subtitle"),
    url: `https://ergoblockchain.org/${locale}/technology/map`,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: "Ergo Blockchain",
      url: "https://ergoblockchain.org",
    },
    mainEntity: {
      "@type": "TechArticle",
      headline: t("title"),
      description: t("subtitle"),
      author: {
        "@type": "Organization",
        name: "Ergo Foundation",
      },
      keywords: [
        "Ergo technology",
        "blockchain architecture",
        "ErgoScript",
        "Autolykos",
        "eUTXO",
        "Sigma Protocols",
        "NIPoPoWs",
        "technology map",
        "interactive visualization"
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechnologyMapClient />
    </>
  );
}
