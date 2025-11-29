import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site-config";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";
import { ComparePageClient } from "./ComparePageClient";

interface Props {
  params: Promise<{ competitor: string; locale: string }>;
}

// Generate static params for all comparison pages
export async function generateStaticParams() {
  return comparisons.map((comparison) => ({
    competitor: `ergo-vs-${comparison.slug}`,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  
  // Extract slug from "ergo-vs-{slug}" format
  const slug = params.competitor.replace("ergo-vs-", "");
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return {
      title: "Comparison Not Found",
      description: "The requested comparison could not be found.",
    };
  }

  const origin = siteConfig.siteUrl;
  const url = `${origin}/compare/ergo-vs-${comparison.slug}`;

  return {
    title: comparison.seoTitle,
    description: comparison.seoDescription,
    keywords: comparison.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title: comparison.seoTitle,
      description: comparison.seoDescription,
      images: [
        {
          url: comparison.ogImage || `${origin}/og/compare-${comparison.slug}.png`,
          width: 1200,
          height: 630,
          alt: `Ergo vs ${comparison.name} Comparison`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.seoTitle,
      description: comparison.seoDescription,
      images: [comparison.ogImage || `${origin}/og/compare-${comparison.slug}.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export default async function CompareDetailPage(props: Props) {
  const params = await props.params;
  
  // Extract slug from "ergo-vs-{slug}" format
  const slug = params.competitor.replace("ergo-vs-", "");
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  const origin = siteConfig.siteUrl;
  const url = `${origin}/compare/ergo-vs-${comparison.slug}`;

  // Structured Data
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${origin}/compare` },
      {
        "@type": "ListItem",
        position: 3,
        name: `Ergo vs ${comparison.name}`,
        item: url,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: comparison.seoTitle,
    description: comparison.seoDescription,
    url,
    datePublished: comparison.publishDate,
    dateModified: comparison.updatedDate || comparison.publishDate,
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: origin,
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`,
      },
    },
    about: [
      { "@type": "Thing", name: "Ergo", sameAs: "https://ergoplatform.org" },
      { "@type": "Thing", name: comparison.name },
    ],
    keywords: comparison.keywords.join(", "),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const comparisonTableJsonLd = {
    "@context": "https://schema.org",
    "@type": "Table",
    about: `Comparison of Ergo and ${comparison.name}`,
    name: `Ergo vs ${comparison.name} Feature Comparison`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonTableJsonLd) }}
      />
      <ComparePageClient comparison={comparison} />
    </>
  );
}

