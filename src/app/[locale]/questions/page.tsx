import { Metadata } from 'next';
import { QuestionsHubClient } from './QuestionsHubClient';
import { questions, questionCategories, questionPersonas } from '@/data/questions';
import { siteConfig } from '@/config/site-config';

export const metadata: Metadata = {
  title: 'Ergo Q&A Hub: Answers to Your Blockchain Questions',
  description: 'Find answers to common questions about Ergo blockchain: DeFi, privacy, mining, technology, and getting started. Expert answers with deep-dive resources.',
  keywords: 'Ergo FAQ, Ergo questions, eUTXO explained, Ergo DeFi, Ergo mining, Ergo privacy, blockchain questions',
  openGraph: {
    title: 'Ergo Q&A Hub: Your Questions Answered',
    description: 'Expert answers to questions about Ergo blockchain. DeFi, privacy, mining, technology - with links to deep-dive resources.',
    url: `${siteConfig.siteUrl}/questions`,
    siteName: 'Ergo Blockchain',
    type: 'website',
    images: [{
      url: `${siteConfig.siteUrl}/og/questions-hub.png`,
      width: 1200,
      height: 630,
      alt: 'Ergo Q&A Hub'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Q&A Hub',
    description: 'Expert answers to your Ergo blockchain questions.',
    images: [`${siteConfig.siteUrl}/og/questions-hub.png`]
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/questions`
  }
};

export default function QuestionsPage() {
  // Group questions by category for structured display
  const questionsByCategory = questionCategories
    .filter(cat => cat.id !== 'all')
    .map(category => ({
      category: category,
      questions: questions.filter(q => q.category === category.id)
    }))
    .filter(group => group.questions.length > 0);

  // Get featured questions (priority 1)
  const featuredQuestions = questions.filter(q => q.priority === 1);

  // ItemList schema for Q&A directory
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.siteUrl}/questions#list`,
    name: "Ergo Q&A Directory",
    description: "Comprehensive answers to common Ergo blockchain questions",
    numberOfItems: questions.length,
    itemListElement: questions.slice(0, 20).map((q, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Question",
        name: q.query,
        url: `${siteConfig.siteUrl}/questions/${q.slug}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.shortAnswer
        }
      }
    }))
  }

  // FAQPage schema for featured questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.siteUrl}/questions#faq`,
    mainEntity: featuredQuestions.slice(0, 10).map(q => ({
      "@type": "Question",
      name: q.query,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.shortAnswer
      }
    }))
  }

  // CollectionPage schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.siteUrl}/questions#collection`,
    name: "Ergo Q&A Hub",
    url: `${siteConfig.siteUrl}/questions`,
    description: "Expert answers to questions about Ergo blockchain",
    isPartOf: { "@type": "WebSite", "@id": `${siteConfig.siteUrl}#website` }
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Q&A Hub", item: `${siteConfig.siteUrl}/questions` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <QuestionsHubClient 
        questions={questions}
        questionsByCategory={questionsByCategory}
        featuredQuestions={featuredQuestions}
        categories={questionCategories}
        personas={questionPersonas}
      />
    </>
  );
}

