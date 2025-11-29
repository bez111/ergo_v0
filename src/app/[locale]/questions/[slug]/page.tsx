import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { QuestionPageClient } from './QuestionPageClient';
import { questions, getQuestionBySlug, getRelatedQuestions, getAllQuestionSlugs } from '@/data/questions';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllQuestionSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);

  if (!question) {
    return {
      title: 'Question Not Found',
      description: 'The requested question could not be found.'
    };
  }

  const title = question.seoTitle || question.query;
  const description = question.seoDescription || question.shortAnswer;

  return {
    title: `${title} | Ergo Q&A`,
    description,
    keywords: [question.category, question.persona, ...question.keyPoints?.slice(0, 3) || []].join(', '),
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/questions/${slug}`,
      siteName: 'Ergo Blockchain',
      type: 'article',
      images: [{
        url: `${siteConfig.siteUrl}/og/questions/${slug}.png`,
        width: 1200,
        height: 630,
        alt: question.query
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.siteUrl}/og/questions/${slug}.png`]
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/questions/${slug}`
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

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);

  if (!question) {
    notFound();
  }

  // Get related questions
  const relatedQuestions = question.relatedQuestions 
    ? getRelatedQuestions(question.relatedQuestions)
    : [];

  // Build JSON-LD based on question type
  const baseUrl = siteConfig.siteUrl;
  
  // QAPage / FAQPage Schema
  const qaSchema = question.jsonLdType === 'FAQPage' || question.jsonLdType === 'QAPage' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": question.query,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.shortAnswer + (question.keyPoints ? ' ' + question.keyPoints.join(' ') : '')
      }
    }]
  } : null;

  // HowTo Schema for how_to intent
  const howToSchema = question.jsonLdType === 'HowTo' ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": question.query,
    "description": question.shortAnswer,
    "step": question.keyPoints?.map((point, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": point,
      "text": point
    })) || [],
    "supply": [],
    "tool": question.bestResources.map(r => ({
      "@type": "HowToTool",
      "name": r.title
    }))
  } : null;

  // TechArticle Schema
  const techArticleSchema = question.jsonLdType === 'TechArticle' ? {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": question.query,
    "description": question.shortAnswer,
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
    "datePublished": question.publishDate,
    "dateModified": question.updatedDate || question.publishDate,
    "mainEntityOfPage": `${baseUrl}/questions/${slug}`,
    "about": {
      "@type": "Thing",
      "name": question.category
    }
  } : null;

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
        "name": "Q&A",
        "item": `${baseUrl}/questions`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": question.query,
        "item": `${baseUrl}/questions/${slug}`
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {qaSchema && (
        <Script
          id="qa-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }}
        />
      )}
      {howToSchema && (
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      {techArticleSchema && (
        <Script
          id="tech-article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
        />
      )}
      
      <QuestionPageClient 
        question={question} 
        relatedQuestions={relatedQuestions}
      />
    </>
  );
}

