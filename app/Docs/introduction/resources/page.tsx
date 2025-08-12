import type { Metadata } from 'next'
import React from "react";
import Link from "next/link";
import {
  Shield, FileText, CheckCircle, AlertTriangle, EyeOff, Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Ergo Resources - Essential Information & Documentation',
  description: 'Essential Ergo resources including social contract, security audit, privacy guide, and common misconceptions. Learn about Ergo\'s governance and security.',
  keywords: ['ergo resources', 'social contract', 'security audit', 'privacy guide', 'howey test', 'ergo governance', 'blockchain security'],
  alternates: {
    canonical: 'https://ergoblockchain.org/Docs/introduction/resources'
  },
  openGraph: {
    title: 'Ergo Resources - Documentation',
    description: 'Essential information about Ergo including governance, security, and privacy resources.',
    url: 'https://ergoblockchain.org/Docs/introduction/resources',
    siteName: 'Ergo Platform',
    images: [{
      url: 'https://ergoblockchain.org/og/docs-resources.png',
      width: 1200,
      height: 630,
      alt: 'Ergo Resources Documentation'
    }],
    type: 'article',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Resources & Documentation',
    description: 'Essential resources for understanding Ergo governance, security, and privacy.',
    images: ['https://ergoblockchain.org/og/docs-resources.png'],
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

const resources = [
  {
    title: "Social Contract",
    href: "/Docs/introduction/social-contract",
    icon: <Shield className="w-6 h-6 text-orange-400" />,
    description:
      "The main principles and values that define the Ergo protocol and its community governance.",
  },
  {
    title: "Security Audit",
    href: "/Docs/introduction/audit",
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    description:
      "Summary and results of the independent security audit of Ergo's core components.",
  },
  {
    title: "The Howey Test",
    href: "/Docs/introduction/howey-test",
    icon: <FileText className="w-6 h-6 text-cyan-400" />,
    description:
      "Analysis of the Howey Test and its application to ERG tokens and the Ergo platform.",
  },
  {
    title: "Privacy Guide",
    href: "/Docs/introduction/privacy-guide",
    icon: <EyeOff className="w-6 h-6 text-orange-400" />,
    description:
      "A practical guide to privacy and security for blockchain users, with tips and best practices.",
  },
  {
    title: "Common Misconceptions",
    href: "/Docs/introduction/misconceptions",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
    description:
      "Clarifications and facts addressing frequent myths and misunderstandings about Ergo.",
  },
  {
    title: "A CBDC For All",
    href: "/Docs/introduction/cbdc",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    description:
      "How Ergo can serve as a decentralized, programmable, and privacy-focused digital currency for everyone.",
  },
];

export default function ResourcesPage() {
  // Schema.org structured data
  const resourcesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ergo Resources & Documentation',
    description: 'Essential resources for understanding Ergo governance, security, and privacy.',
    author: {
      '@type': 'Organization',
      name: 'Ergo Platform'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ergoblockchain.org/logo.png'
      }
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ergoblockchain.org/Docs/introduction/resources'
    }
  }

  const breadcrumbSchema = {
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
        name: 'Documentation',
        item: 'https://ergoblockchain.org/Docs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Introduction',
        item: 'https://ergoblockchain.org/Docs/introduction'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Resources',
        item: 'https://ergoblockchain.org/Docs/introduction/resources'
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
            Ergo Resources
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Essential information and documentation about Ergo's governance, security, and community resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              className="group relative bg-neutral-900/30 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 hover:bg-neutral-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-neutral-800/50 rounded-lg group-hover:bg-neutral-800/70 transition-colors">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
