import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from "@/components/home/hero-section"
import { WhyErgo } from "@/components/home/why-ergo-localized"
import { GridBackground } from "@/components/animations/grid-background"
import { 
  LazyEcosystemShowcase, 
  LazyAudiencePaths, 
  LazyBlogSection
} from "@/components/home/lazy-sections"

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  return {
    title: t('defaultTitle'),
    description: t('defaultDescription'),
  };
}

// Rhythm divider component
const RhythmBeat = () => (
  <div className="py-8 md:py-12 flex justify-center">
    <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
  </div>
);

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  return (
    <main className="flex flex-col bg-black text-white relative overflow-hidden">
      {/* Cyberpunk grid background that spans all sections */}
      <div className="fixed inset-0 bg-[url('/cyberpunk-grid.png')] bg-cover bg-center opacity-20 z-0"></div>
      
      {/* Grid overlay */}
      <GridBackground />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Hero: Full viewport */}
        <HeroSection />
        
        {/* Beat 1: After hero */}
        <RhythmBeat />
        
        {/* Why Ergo: Major section */}
        <WhyErgo />
        
        {/* Beat 2: Transition to action */}
        <RhythmBeat />
        
        {/* Audience Paths: Interactive choice */}
        <LazyAudiencePaths />
        
        {/* Beat 3: Before ecosystem */}
        <RhythmBeat />
        
        {/* Ecosystem: Social proof */}
        <LazyEcosystemShowcase />
        
        {/* Beat 4: Before blog */}
        <RhythmBeat />
        
        {/* Blog: Fresh content */}
        <LazyBlogSection />
        
        {/* Subscribe: Final CTA - Removed */}
      </div>
    </main>
  );
} 