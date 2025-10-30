import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Solana-inspired structure with Ergo cypherpunk style
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { HeroFinal } from "@/components/home/hero-final"
import { WhyErgo } from "@/components/home/why-ergo-new"
import { BuildForScale } from "@/components/home/build-for-scale"
import { MadeForMassAdoption } from "@/components/home/made-for-mass-adoption"
import { PoweredByErgo } from "@/components/home/powered-by-ergo"
import { BlogSectionHome } from "@/components/home/blog-section-home"
import { JoinCommunity } from "@/components/home/join-community"
import { FAQSimple } from "@/components/home/faq-simple"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  return {
    title: "Ergo Blockchain — Decentralized Money Without Masters | MEV-Resistant PoW",
    description: "Open-source blockchain for programmable, censorship-resistant finance. eUTXO smart contracts, predictable $0.01 fees, ASIC-resistant mining. No pre-mine, no VC control. Built by cypherpunks for financial freedom.",
    keywords: "ergo blockchain, decentralized finance, MEV resistant blockchain, eUTXO model, censorship resistant money, ASIC resistant mining, fair launch cryptocurrency, programmable money, financial sovereignty, cypherpunk blockchain",
    openGraph: {
      title: "Ergo Blockchain — Money Without Masters",
      description: "Decentralized, programmable, censorship-resistant finance. Built by cypherpunks for freedom seekers. No MEV, no VC control, no compromises.",
      url: "https://ergoblockchain.org",
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
      description: "Decentralized, programmable, censorship-resistant finance. Built by cypherpunks for freedom.",
      images: ["https://ergoblockchain.org/og/homepage.png"],
      creator: "@ergoplatform",
      site: "@ergoplatform"
    }
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  console.debug(`Locale: ${locale}`);

  return (
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
  );
}