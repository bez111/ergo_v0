'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Code, GitBranch, Rocket, Users, Wrench } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { RelatedContent } from '@/components/seo/related-content'

const resources = [
  {
    title: 'Getting Started',
    description: 'Begin your journey with Ergo development',
    icon: Rocket,
    href: '/Docs/developers/tutorials',
    items: [
      'Quick start guide',
      'Development environment setup',
      'Your first smart contract',
      'Testing and deployment'
    ]
  },
  {
    title: 'ErgoScript & Languages',
    description: 'Master smart contract development',
    icon: Code,
    href: '/Docs/developers/ergoscript-languages',
    items: [
      'ErgoScript fundamentals',
      'Sigma protocols',
      'Advanced patterns',
      'Language bindings'
    ]
  },
  {
    title: 'APIs & Data Models',
    description: 'Integrate with Ergo blockchain',
    icon: GitBranch,
    href: '/Docs/developers/data-model-apis',
    items: [
      'Node API reference',
      'Explorer API',
      'Data structures',
      'Transaction format'
    ]
  },
  {
    title: 'Developer Tools',
    description: 'Essential tools for building on Ergo',
    icon: Wrench,
    href: '/Docs/developers/tooling',
    items: [
      'SDKs and libraries',
      'Development frameworks',
      'Testing tools',
      'IDE extensions'
    ]
  },
  {
    title: 'Infrastructure',
    description: 'Deploy and scale your applications',
    icon: BookOpen,
    href: '/Docs/developers/infrastructure',
    items: [
      'Node operation',
      'Oracle pools',
      'DEX integration',
      'Scaling solutions'
    ]
  },
  {
    title: 'Community & Support',
    description: 'Get help and contribute',
    icon: Users,
    href: '/Docs/developers/community-support',
    items: [
      'Discord community',
      'GitHub repositories',
      'Stack Exchange',
      'Developer calls'
    ]
  }
]

const relatedContent = [
  {
    title: 'Bounties & Grants',
    description: 'Get funding for your Ergo project',
    href: '/Docs/developers/bounties-grants',
    type: 'article' as const,
    readTime: 5
  },
  {
    title: 'Student Resources',
    description: 'Academic resources and research opportunities',
    href: '/Docs/developers/students',
    type: 'guide' as const,
    readTime: 10
  },
  {
    title: 'Cryptographic Primitives',
    description: 'Deep dive into Ergo\'s cryptography',
    href: '/Docs/developers/cryptographic-primitives',
    type: 'technology' as const,
    readTime: 15
  }
]

export default function DeveloperResourcesHub() {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Developer Resources
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Everything you need to build powerful applications on Ergo blockchain.
              From tutorials to advanced tools, we've got you covered.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link href="/Docs/developers/tutorials">
                Quick Start <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/Docs/developers/ergoscript-languages">
                Learn ErgoScript
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link key={resource.href} href={resource.href}>
                  <Card className="h-full hover:border-brand-primary-500/50 transition-all duration-300">
                    <CardHeader>
                      <Icon className="w-8 h-8 text-brand-primary-400 mb-4" />
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-neutral-400">
                        {resource.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-brand-primary-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 text-brand-primary-400 text-sm font-medium flex items-center">
                        Explore <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 bg-neutral-900/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/Docs/developers/tutorials/quick-start" 
              className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="font-medium">Quick Start Guide</div>
              <div className="text-sm text-neutral-400 mt-1">Get started in 5 minutes</div>
            </Link>
            <Link href="/Docs/developers/ergoscript-languages/basics" 
              className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="font-medium">ErgoScript Basics</div>
              <div className="text-sm text-neutral-400 mt-1">Learn the fundamentals</div>
            </Link>
            <Link href="/Docs/developers/data-model-apis/node-api" 
              className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="font-medium">API Reference</div>
              <div className="text-sm text-neutral-400 mt-1">Complete API documentation</div>
            </Link>
            <Link href="/Docs/developers/tooling/sdks" 
              className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="font-medium">SDKs & Libraries</div>
              <div className="text-sm text-neutral-400 mt-1">Tools for every language</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent items={relatedContent} title="Additional Resources" />
    </div>
  )
} 