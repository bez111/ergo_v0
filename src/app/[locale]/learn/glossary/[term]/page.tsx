import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site-config";
import { glossaryTerms, getTermBySlug } from "@/data/glossary";
import { GlossaryTermClient } from "./GlossaryTermClient";

interface Props {
  params: Promise<{ term: string; locale: string }>;
}

// Generate static params for all glossary terms
export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    term: term.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const term = getTermBySlug(params.term);

  if (!term) {
    return {
      title: "Term Not Found",
      description: "The requested glossary term could not be found.",
    };
  }

  const origin = siteConfig.siteUrl;
  const url = `${origin}/learn/glossary/${term.slug}`;
  const title = term.seoTitle || `What is ${term.term}? | Ergo Glossary`;
  const description = term.seoDescription || term.shortDefinition;

  return {
    title,
    description,
    keywords: term.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title,
      description,
      images: [
        {
          url: `${origin}/og/glossary-${term.slug}.png`,
          width: 1200,
          height: 630,
          alt: `${term.term} - Ergo Glossary`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/glossary-${term.slug}.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export default async function GlossaryTermPage(props: Props) {
  const params = await props.params;
  const term = getTermBySlug(params.term);

  if (!term) {
    notFound();
  }

  const origin = siteConfig.siteUrl;
  const url = `${origin}/learn/glossary/${term.slug}`;

  // Structured Data - DefinedTerm
  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${url}#term`,
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${origin}/learn/glossary#glossary`,
      name: "Ergo Blockchain Glossary",
    },
  };

  // Breadcrumbs
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${origin}/learn` },
      { "@type": "ListItem", position: 3, name: "Glossary", item: `${origin}/learn/glossary` },
      {
        "@type": "ListItem",
        position: 4,
        name: term.term,
        item: url,
      },
    ],
  };

  // FAQ Schema for rich snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: term.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // TechArticle for the explanation
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `What is ${term.term}?`,
    description: term.shortDefinition,
    url,
    datePublished: term.publishDate,
    dateModified: term.updatedDate || term.publishDate,
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
    about: {
      "@type": "Thing",
      name: term.term,
    },
    keywords: term.keywords.join(", "),
    proficiencyLevel: term.difficulty === 'beginner' ? 'Beginner' : 
                      term.difficulty === 'intermediate' ? 'Intermediate' : 'Advanced',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <GlossaryTermClient term={term} />
    </>
  );
}

