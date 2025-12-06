
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PatternPageClient } from "./PatternPageClient";
import { devPatterns, getPatternBySlug, categoryLabels } from "@/data/dev-patterns";
import { siteConfig } from "@/config/site-config";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return devPatterns.map((pattern) => ({
    slug: pattern.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pattern = getPatternBySlug(slug);
  
  if (!pattern) {
    return { title: "Pattern Not Found" };
  }

  return {
    title: pattern.seoTitle,
    description: pattern.seoDescription,
    keywords: pattern.keywords,
    openGraph: {
      title: pattern.seoTitle,
      description: pattern.seoDescription,
      url: `${siteConfig.siteUrl}/patterns/${slug}`,
      type: "article",
      images: [{ url: `${siteConfig.siteUrl}/og/patterns/${slug}.png`, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: pattern.seoTitle,
      description: pattern.seoDescription
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/patterns/${slug}`
    }
  };
}

export default async function PatternPage({ params }: Props) {
  const { slug } = await params;
  const pattern = getPatternBySlug(slug);
  
  if (!pattern) {
    notFound();
  }

  const relatedPatterns = pattern.relatedPatterns
    .map(slug => getPatternBySlug(slug))
    .filter(Boolean);

  const categoryLabel = categoryLabels[pattern.category];

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": pattern.title,
    "description": pattern.seoDescription,
    "keywords": pattern.keywords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Ergo Platform"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "url": siteConfig.siteUrl
    },
    "datePublished": pattern.publishDate,
    "dateModified": pattern.updatedDate || pattern.publishDate,
    "mainEntityOfPage": `${siteConfig.siteUrl}/patterns/${slug}`,
    "proficiencyLevel": pattern.difficulty,
    "dependencies": "ErgoScript, Ergo Blockchain"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PatternPageClient 
        pattern={pattern} 
        relatedPatterns={relatedPatterns as any[]}
        categoryLabel={categoryLabel}
      />
    </>
  );
}

