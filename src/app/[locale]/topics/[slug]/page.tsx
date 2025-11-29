import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { TopicPageClient } from './TopicPageClient';
import { topics, getTopicBySlug, getAllTopicSlugs, getRelatedTopics } from '@/data/topics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllTopicSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return {
      title: 'Topic Not Found',
      description: 'The requested topic could not be found.'
    };
  }

  return {
    title: topic.seoTitle,
    description: topic.seoDescription,
    keywords: topic.keywords.join(', '),
    openGraph: {
      title: topic.seoTitle,
      description: topic.seoDescription,
      url: `${siteConfig.siteUrl}/topics/${slug}`,
      siteName: 'Ergo Blockchain',
      type: 'article',
      images: [{
        url: `${siteConfig.siteUrl}/og/topics/${slug}.png`,
        width: 1200,
        height: 630,
        alt: topic.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: topic.seoTitle,
      description: topic.seoDescription,
      images: [`${siteConfig.siteUrl}/og/topics/${slug}.png`]
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/topics/${slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large'
      }
    }
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  // Get related topics
  const relatedTopicsList = topic.relatedTopics 
    ? getRelatedTopics(topic.relatedTopics)
    : [];

  const baseUrl = siteConfig.siteUrl;

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Topics",
        "item": `${baseUrl}/topics`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": topic.title,
        "item": `${baseUrl}/topics/${slug}`
      }
    ]
  };

  // DefinedTermSet Schema for glossary terms
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": `${topic.title} Key Terms`,
    "description": `Essential terminology for understanding ${topic.title}`,
    "hasDefinedTerm": topic.keyTerms.map(term => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.shortDefinition,
      "url": `${baseUrl}/learn/glossary/${term.slug}`
    }))
  };

  // ItemList Schema for resources
  const allResources = [
    ...topic.startHere.map(r => ({ ...r, section: 'Start Here' })),
    ...topic.buildWithIt.map(r => ({ ...r, section: 'Build With It' })),
    ...topic.philosophy.map(r => ({ ...r, section: 'Philosophy' })),
    ...topic.visuals.map(r => ({ ...r, section: 'Visuals' }))
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${topic.title} Resources`,
    "description": `Comprehensive resources for ${topic.title}`,
    "numberOfItems": allResources.length,
    "itemListElement": allResources.map((resource, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": resource.title,
      "url": resource.url.startsWith('http') ? resource.url : `${baseUrl}${resource.url}`,
      "description": resource.description || ''
    }))
  };

  // TechArticle Schema for the page itself
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": topic.title,
    "alternativeHeadline": topic.subtitle,
    "description": topic.seoDescription,
    "author": {
      "@type": "Organization",
      "name": "Ergo Platform"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": topic.publishDate,
    "dateModified": topic.updatedDate || topic.publishDate,
    "mainEntityOfPage": `${baseUrl}/topics/${slug}`,
    "keywords": topic.keywords.join(', '),
    "about": {
      "@type": "Thing",
      "name": topic.title,
      "description": topic.introduction
    }
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="defined-term-set-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <Script
        id="item-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="tech-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      
      <TopicPageClient 
        topic={topic} 
        relatedTopics={relatedTopicsList}
      />
    </>
  );
}

