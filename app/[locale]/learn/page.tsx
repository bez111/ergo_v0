import type { Metadata } from 'next'
import LearnClient from './LearnClient'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Learn Ergo - Tutorials, Guides & Educational Resources',
  description: 'Master Ergo blockchain: ErgoScript tutorials, comprehensive FAQ, research papers, technical guides, and step-by-step learning paths for all skill levels.',
  keywords: ['learn ergo', 'ergoscript tutorial', 'blockchain education', 'crypto learning', 'ergo guides', 'blockchain tutorials', 'smart contract tutorial', 'ergo documentation'],
  alternates: {
    canonical: 'https://ergoblockchain.org/learn'
  },
  openGraph: {
    title: 'Learn Ergo - Complete Educational Hub',
    description: 'Comprehensive learning resources for Ergo blockchain. From beginner guides to advanced ErgoScript development.',
    url: 'https://ergoblockchain.org/learn',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/learn.png',
      width: 1200,
      height: 630,
      alt: 'Learn Ergo - Educational Resources'
    }],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Ergo - Master Blockchain Development',
    description: 'ErgoScript tutorials, FAQ, research papers, and comprehensive guides for all levels.',
    images: ['https://ergoblockchain.org/og/learn.png'],
    creator: '@ergoplatform',
    site: '@ergoplatform'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function LearnPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': 'https://ergoblockchain.org/learn#course',
    name: 'Ergo Blockchain Learning Path',
    description: 'Comprehensive education on Ergo blockchain technology, from basics to advanced development',
    provider: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: 'https://ergoblockchain.org'
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Developers, Crypto Enthusiasts, Blockchain Students'
    },
    educationalLevel: 'Beginner to Expert',
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'ErgoScript Tutorial Series',
        description: 'Master ErgoScript: Your path to building secure and powerful smart contracts',
        courseMode: 'online',
        duration: 'PT20H'
      },
      {
        '@type': 'CourseInstance',
        name: 'Comprehensive FAQ',
        description: 'Everything you need to know about Ergo blockchain, technology, and ecosystem',
        courseMode: 'online'
      },
      {
        '@type': 'CourseInstance',
        name: 'Research Papers',
        description: 'Deep dive into the academic research and technical papers behind Ergo',
        courseMode: 'online'
      }
    ]
  }

  const learningResourcesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ergo Learning Resources',
    description: 'Complete list of educational resources for learning Ergo blockchain',
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'LearningResource',
          name: 'ErgoScript Tutorial Series',
          description: 'Master ErgoScript: Your path to building secure and powerful smart contracts on Ergo, step by step',
          learningResourceType: 'Tutorial',
          timeRequired: 'PT20H',
          url: 'https://ergoblockchain.org/learn/ergoscript',
          educationalLevel: 'Beginner to Expert',
          teaches: 'ErgoScript smart contract development'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'LearningResource',
          name: 'Comprehensive FAQ',
          description: 'Everything you need to know about Ergo blockchain, technology, and ecosystem in one place',
          learningResourceType: 'Reference',
          url: 'https://ergoblockchain.org/learn/faq',
          educationalLevel: 'All Levels',
          teaches: 'Ergo blockchain fundamentals and advanced concepts'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'LearningResource',
          name: 'Research Papers',
          description: 'Deep dive into the academic research and technical papers behind Ergo\'s innovations',
          learningResourceType: 'Academic Publication',
          url: 'https://ergoblockchain.org/learn/research',
          educationalLevel: 'Advanced',
          teaches: 'Blockchain research and cryptographic protocols'
        }
      }
    ]
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ergoblockchain.org'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Learn',
        item: 'https://ergoblockchain.org/learn'
      }
    ]
  }
  
  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('learn')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "How do I learn ErgoScript?",
      answer: "Start with the ErgoScript tutorial series that covers basics to advanced concepts. Practice with examples, use the playground, and reference the documentation for comprehensive learning."
    },
    {
      question: "What resources are available for learning Ergo?",
      answer: "Ergo offers tutorials, comprehensive FAQ, research papers, video courses, developer documentation, community guides, and hands-on playgrounds for all skill levels."
    },
    {
      question: "How long does it take to learn ErgoScript?",
      answer: "Basic ErgoScript understanding takes 2-3 days. Proficiency requires 2-3 weeks of practice. Expert level development skills develop over months with real project experience."
    },
    {
      question: "Is programming experience required?",
      answer: "Basic programming knowledge helps but isn't required for understanding concepts. For ErgoScript development, familiarity with functional programming and cryptography is beneficial."
    }
  ])
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Learn Ergo Blockchain",
    summary: "Complete educational hub with ErgoScript tutorials, FAQ, research papers, and comprehensive guides for all skill levels",
    url: "https://ergoblockchain.org/learn"
  })

  return (
    <>
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourcesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      {/* Новые продвинутые схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      
      <LearnClient />
    </>
  )
} 