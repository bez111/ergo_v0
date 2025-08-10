import { HeroSection } from "@/components/home/hero-section"
import { QuickActions } from "@/components/home/quick-actions"
import { CorePillars } from "@/components/home/core-pillars"
import { EcosystemShowcase } from "@/components/home/ecosystem-showcase"
import { Differentiation } from "@/components/home/differentiation"
import { AudiencePaths } from "@/components/home/audience-paths"
import { BlogSection } from "@/components/home/blog-section"
import { SubscribeSection } from "@/components/home/subscribe-section"
import { Manifesto } from "@/components/home/manifesto"
import { Metadata } from 'next'
import { blogPosts } from "@/app/blog/_lib/blog-data"

export const metadata: Metadata = {
  title: 'Ergo Platform - Advanced Blockchain Technology',
  description: 'Ergo is a next-generation blockchain platform designed for creating financial contracts that are secure, accessible, and efficient.',
  keywords: 'Ergo, blockchain, cryptocurrency, DeFi, smart contracts, UTXO',
  openGraph: {
    title: 'Ergo Platform - Advanced Blockchain Technology',
    description: 'Ergo is a next-generation blockchain platform designed for creating financial contracts that are secure, accessible, and efficient.',
    url: '/',
    siteName: 'Ergo Platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo Platform - Advanced Blockchain Technology',
    description: 'Ergo is a next-generation blockchain platform designed for creating financial contracts that are secure, accessible, and efficient.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.slice(0, 3).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ergoblockchain.org/blog/${post.slug}`,
      name: post.title,
    })),
  }

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      
      <main id="main-content" className="flex flex-col bg-black text-white relative">
        <header role="banner">
          <HeroSection />
        </header>
        
        <section id="quick-actions" aria-labelledby="quick-actions-heading">
          <h2 id="quick-actions-heading" className="sr-only">Quick Actions</h2>
          <QuickActions />
        </section>
        
        <section id="manifesto" aria-labelledby="manifesto-heading">
          <h2 id="manifesto-heading" className="sr-only">Ergo Manifesto</h2>
          <Manifesto />
        </section>
        
        <section id="core-pillars" aria-labelledby="core-pillars-heading">
          <h2 id="core-pillars-heading" className="sr-only">Core Pillars</h2>
          <CorePillars />
        </section>
        
        <section id="differentiation" aria-labelledby="differentiation-heading">
          <h2 id="differentiation-heading" className="sr-only">What Makes Ergo Different</h2>
          <Differentiation />
        </section>
        
        <section id="ecosystem" aria-labelledby="ecosystem-heading">
          <h2 id="ecosystem-heading" className="sr-only">Ecosystem Showcase</h2>
          <EcosystemShowcase />
        </section>
        
        <section id="audience-paths" aria-labelledby="audience-paths-heading">
          <h2 id="audience-paths-heading" className="sr-only">Get Started</h2>
          <AudiencePaths />
        </section>
        
        <section id="blog" aria-labelledby="blog-heading">
          <h2 id="blog-heading" className="sr-only">Latest from Blog</h2>
          <BlogSection />
        </section>
        
        <section id="subscribe" aria-labelledby="subscribe-heading">
          <h2 id="subscribe-heading" className="sr-only">Subscribe to Updates</h2>
          <SubscribeSection />
        </section>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  )
}
