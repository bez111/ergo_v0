
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';

// Critical above-the-fold components (loaded immediately)
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { HeroFinal } from "@/components/home/hero-final"
import { WhyErgo } from "@/components/home/why-ergo-new"
import { FAQSchema } from "@/components/seo/faq-schema"
import { PerformanceOptimizations } from "@/components/seo/performance-optimizations"
import { siteConfig } from '@/config/site-config';

// Lazy-load below-the-fold components for better LCP
const BuildForScale = dynamic(() => import("@/components/home/build-for-scale").then(mod => mod.BuildForScale), {
  loading: () => <div className="h-96 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

const AgentEconomySection = dynamic(() => import("@/components/home/agent-economy-section").then(mod => mod.AgentEconomySection), {
  loading: () => <div className="h-64 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

const MadeForMassAdoption = dynamic(() => import("@/components/home/made-for-mass-adoption").then(mod => mod.MadeForMassAdoption), {
  loading: () => <div className="h-96 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

const PoweredByErgo = dynamic(() => import("@/components/home/powered-by-ergo").then(mod => mod.PoweredByErgo), {
  loading: () => <div className="h-64 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

const BlogSectionHome = dynamic(() => import("@/components/home/blog-section-home").then(mod => mod.BlogSectionHome), {
  loading: () => <div className="h-64 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

const JoinCommunity = dynamic(() => import("@/components/home/join-community").then(mod => mod.JoinCommunity), {
  loading: () => <div className="h-48 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

const FAQSimple = dynamic(() => import("@/components/home/faq-simple").then(mod => mod.FAQSimple), {
  loading: () => <div className="h-64 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

const FinalCTASimple = dynamic(() => import("@/components/home/final-cta-simple").then(mod => mod.FinalCTASimple), {
  loading: () => <div className="h-32 bg-neutral-900/30 animate-pulse" />,
  ssr: true
});

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.home.meta' });
  
  const canonicalUrl = locale === 'en' ? siteConfig.siteUrl : `${siteConfig.siteUrl}/${locale}`;
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': siteConfig.siteUrl,
        'ru': `${siteConfig.siteUrl}/ru`,
        'x-default': siteConfig.siteUrl
      }
    },
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
      url: canonicalUrl,
      siteName: t('og.siteName'),
      type: "website",
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      images: [{
        url: "https://ergoblockchain.org/og/homepage.png",
        width: 1200,
        height: 630,
        alt: t('og.imageAlt')
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: ["https://ergoblockchain.org/og/homepage.png"],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle
    }
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.home' });
  
  console.debug(`Locale: ${locale}`);

  // FAQ data for schema - commercially important questions (localized)
  const faqData = [
    { question: t('faq.items.0.question'), answer: t('faq.items.0.answer') },
    { question: t('faq.items.1.question'), answer: t('faq.items.1.answer') },
    { question: t('faq.items.2.question'), answer: t('faq.items.2.answer') },
    { question: t('faq.items.3.question'), answer: t('faq.items.3.answer') },
    { question: t('faq.items.4.question'), answer: t('faq.items.4.answer') },
    { question: t('faq.items.5.question'), answer: t('faq.items.5.answer') },
  ]

  return (
    <>
      {/* Performance Optimizations */}
      <PerformanceOptimizations 
        heroImage={{
          src: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t('meta.heroImageAlt'),
          format: "png"
        }}
      />
      
      {/* FAQ Schema */}
      <FAQSchema 
        faqs={faqData}
        pageUrl={siteConfig.siteUrl}
      />

      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* 
          SOLANA-INSPIRED STRUCTURE + ERGO CYPHERPUNK STYLE
          
          Inspired by: solana.com homepage structure
          Adapted for: Ergo Blockchain values & cypherpunk aesthetic
          
          Key differences from Solana:
          - No VC/funding emphasis → Fair launch, no pre-mine
          - No speed focus → Security, MEV-resistance focus
          - No ecosystem size → Quality over quantity
          
          Structure (8 sections):
          1. HERO — "Build unstoppable decentralized applications"
          2. BUILD FOR SCALE — Grid features with metrics
          3. MASS ADOPTION — 4 audience paths
          4. POWERED BY — Ecosystem applications
          5. BLOG — Latest 3 articles from blog
          6. COMMUNITY — Join channels
          7. FAQ — Common questions
          8. FINAL CTA — Simple, focused
          
          Visual:
          - Rounded-full buttons (Solana style)
          - Gradient orbs, cards
          - Large typography (text-8xl)
          - Orange/black palette (vs Solana's purple/black)
        */}
        
        <BackgroundWrapper>
          <HeroFinal />
          <WhyErgo />
          <BuildForScale />
          <AgentEconomySection />
          <MadeForMassAdoption />
          <PoweredByErgo />
          <BlogSectionHome />
          <JoinCommunity />
          <FAQSimple />
          <FinalCTASimple />
        </BackgroundWrapper>
        
      </main>
    </>
  );
}