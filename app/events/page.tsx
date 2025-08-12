import type { Metadata } from 'next'
import { Calendar } from "lucide-react"
import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

export const metadata: Metadata = {
  title: 'Ergo Events - Hackathons, Meetups & Conferences',
  description: 'Join Ergo community events: hackathons, meetups, ErgoSummit, and developer workshops. Connect with the global Ergo ecosystem.',
  keywords: ['ergo events', 'blockchain hackathon', 'ergo meetup', 'ergosummit', 'developer workshop', 'crypto conference'],
  alternates: {
    canonical: 'https://ergoblockchain.org/events'
  },
  openGraph: {
    title: 'Ergo Community Events',
    description: 'Join hackathons, meetups, and conferences in the Ergo ecosystem.',
    url: 'https://ergoblockchain.org/events',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/events.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Events'
    }],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Events - Join the Community',
    description: 'Hackathons, meetups, and conferences in the Ergo ecosystem.',
    images: ['https://ergoblockchain.org/og/events.png'],
    creator: '@ergoplatform',
    site: '@ergoplatform'
  },
  robots: {
    index: false, // Временно скрываем от индексации пока страница в разработке
    follow: true
  }
}

export default function EventsPage() {
  // SEO схемы для будущих событий
  const eventsSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'Ergo Community Events',
    description: 'Regular events for the Ergo blockchain community',
    organizer: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: 'https://ergoblockchain.org'
    }
  }
  
  const knowledgeGraph = generateKnowledgeGraph('events')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What events does Ergo organize?",
      answer: "Ergo hosts hackathons, developer workshops, ErgoSummit conferences, community meetups, and online educational webinars throughout the year."
    },
    {
      question: "How can I participate in Ergo events?",
      answer: "Follow @ergoplatform on Twitter, join the Discord community, and check this page regularly for upcoming events and registration information."
    }
  ])
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Calendar className="w-24 h-24 mx-auto text-orange-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Events</h1>
        <p className="text-xl text-gray-400 mb-8">
          This section is currently under construction.
        </p>
        <p className="text-lg text-gray-500">
          Information about hackathons, meetups, and other community events is coming soon.
        </p>
      </div>
    </div>
    </>
  )
} 