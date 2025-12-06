
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
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  return {
    title: "Ergo Blockchain — MEV-Resistant PoW Smart Contracts",
    description: "PoW eUTXO blockchain for DeFi, privacy and sound money. Predictable low fees, no pre-mine, no VC – built by a cypherpunk community for financial freedom.",
    keywords: "ergo blockchain, decentralized finance, MEV resistant blockchain, eUTXO model, censorship resistant money, ASIC resistant mining, fair launch cryptocurrency, programmable money, financial sovereignty, cypherpunk blockchain, DeFi, privacy, sound money",
    openGraph: {
      title: "Ergo Blockchain — Money Without Masters",
      description: "PoW eUTXO blockchain for DeFi, privacy and sound money. No MEV, no VC control – built by cypherpunks for financial freedom.",
      url: siteConfig.siteUrl,
      siteName: "Ergo Blockchain",
      type: "website",
      images: [{
        url: "https://ergoblockchain.org/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "Ergo Blockchain - Money Without Masters"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Blockchain — Money Without Masters",
      description: "PoW eUTXO blockchain for DeFi, privacy and sound money. No MEV, no VC – built by cypherpunks for freedom.",
      images: ["https://ergoblockchain.org/og/homepage.png"],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle
    }
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  console.debug(`Locale: ${locale}`);

  // FAQ data for schema - commercially important questions
  const faqData = [
    {
      question: "What is Ergo?",
      answer: "Ergo is a secure, open-source Proof-of-Work blockchain for programmable, censorship-resistant money. It uses the eUTXO model combining Bitcoin's security with smart contract capabilities, optional privacy, and predictable low fees (~$0.01)."
    },
    {
      question: "How to buy ERG?",
      answer: "You can buy ERG on exchanges like KuCoin, Gate.io, Bitpanda, or decentralized exchanges like Spectrum Finance. First get a wallet (Nautilus, SAFEW, or Ergo Mobile Wallet), then purchase ERG and withdraw to your wallet address."
    },
    {
      question: "Is Ergo a good investment?",
      answer: "Ergo has a fixed supply of 97.7M ERG with no pre-mine and fair launch. It's a Proof-of-Work blockchain with unique technology (eUTXO, Sigma Protocols). As with any cryptocurrency, do your own research and only invest what you can afford to lose."
    },
    {
      question: "What makes Ergo different from other blockchains?",
      answer: "Ergo uses the eUTXO model for MEV-resistant, predictable transactions. It features Sigma Protocols for optional privacy, Storage Rent for long-term sustainability, and Autolykos for ASIC-resistant GPU mining. Fair launch with no VC funding."
    },
    {
      question: "How to get started with Ergo?",
      answer: "1) Download a wallet (Nautilus for browser, Ergo Mobile Wallet for phone). 2) Back up your seed phrase securely. 3) Get ERG from an exchange or DEX. 4) Explore DeFi apps like Spectrum Finance, SigmaUSD, or ErgoMixer."
    },
    {
      question: "What wallets support Ergo?",
      answer: "Popular Ergo wallets include Nautilus (browser extension), SAFEW (full-featured web wallet), Ergo Mobile Wallet (iOS/Android), Terminus (mobile), and Satergo (desktop). Hardware wallet support is available through Ledger integration."
    }
  ]

  return (
    <>
      {/* Performance Optimizations */}
      <PerformanceOptimizations 
        heroImage={{
          src: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Ergo Platform - Resilient Blockchain for Contractual Money",
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