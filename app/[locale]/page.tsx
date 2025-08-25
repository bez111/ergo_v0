import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from "@/components/home/hero-section"
import { Manifesto } from "@/components/home/manifesto"
import { WhyErgo } from "@/components/home/why-ergo"
import { 
  LazyEcosystemShowcase, 
  LazyAudiencePaths, 
  LazyBlogSection, 
  LazySubscribeSection 
} from "@/components/home/lazy-sections"

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  return {
    title: t('defaultTitle'),
    description: t('defaultDescription'),
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  return (
    <main className="flex flex-col bg-black text-white">
      <HeroSection />
      <Manifesto />
      <WhyErgo />
      <LazyAudiencePaths />
      <LazyEcosystemShowcase />
      <LazyBlogSection />
      <LazySubscribeSection />
    </main>
  );
} 