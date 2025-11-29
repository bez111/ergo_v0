import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlaybookBySlug, getAllPlaybookSlugs, Playbook } from "@/data/playbooks";
import { PlaybookPageClient } from "./PlaybookPageClient";
import { SchemaOrg } from "@/components/seo/schema-org";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPlaybookSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);

  if (!playbook) {
    return {
      title: "Playbook Not Found",
    };
  }

  return {
    title: playbook.seoTitle,
    description: playbook.seoDescription,
    keywords: playbook.keywords,
    openGraph: {
      title: playbook.seoTitle,
      description: playbook.seoDescription,
      type: "article",
      url: `https://ergoblockchain.org/playbooks/${playbook.slug}`,
      publishedTime: playbook.publishDate,
      modifiedTime: playbook.updatedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: playbook.seoTitle,
      description: playbook.seoDescription,
    },
    alternates: {
      canonical: `https://ergoblockchain.org/playbooks/${playbook.slug}`,
    },
  };
}

// Generate HowTo schema for rich snippets
function generateHowToSchema(playbook: Playbook) {
  return {
    "@type": "HowTo",
    name: playbook.title,
    description: playbook.heroDescription,
    totalTime: playbook.timeToComplete,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: playbook.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      ...(step.duration && {
        timeRequired: step.duration,
      }),
      ...(step.resources && step.resources.length > 0 && {
        url: step.resources[0].href.startsWith("http")
          ? step.resources[0].href
          : `https://ergoblockchain.org${step.resources[0].href}`,
      }),
    })),
    tool: [
      {
        "@type": "HowToTool",
        name: "Ergo Wallet (Nautilus or SAFEW)",
      },
    ],
  };
}

// Generate Article schema
function generateArticleSchema(playbook: Playbook) {
  return {
    "@type": "TechArticle",
    "@id": `https://ergoblockchain.org/playbooks/${playbook.slug}#article`,
    headline: playbook.title,
    description: playbook.seoDescription,
    datePublished: playbook.publishDate,
    dateModified: playbook.updatedDate || playbook.publishDate,
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org",
      logo: {
        "@type": "ImageObject",
        url: "https://ergoblockchain.org/favicon.ico",
      },
    },
    mainEntityOfPage: `https://ergoblockchain.org/playbooks/${playbook.slug}`,
    keywords: playbook.keywords.join(", "),
  };
}

// Generate BreadcrumbList schema
function generateBreadcrumbSchema(playbook: Playbook) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Playbooks",
        item: "https://ergoblockchain.org/playbooks",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: playbook.title,
        item: `https://ergoblockchain.org/playbooks/${playbook.slug}`,
      },
    ],
  };
}

export default async function PlaybookPage({ params }: Props) {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);

  if (!playbook) {
    notFound();
  }

  return (
    <>
      {/* HowTo Schema for rich snippets */}
      <SchemaOrg type="HowTo" data={generateHowToSchema(playbook)} />

      {/* Article Schema */}
      <SchemaOrg type="TechArticle" data={generateArticleSchema(playbook)} />

      {/* Breadcrumb Schema */}
      <SchemaOrg type="BreadcrumbList" data={generateBreadcrumbSchema(playbook)} />

      <PlaybookPageClient playbook={playbook} />
    </>
  );
}

