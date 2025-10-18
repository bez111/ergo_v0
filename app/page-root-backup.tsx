import { HeroSection } from "@/components/home/hero-section"
import { Manifesto } from "@/components/home/manifesto"
import { CorePillars } from "@/components/home/core-pillars"
import { 
  LazyEcosystemShowcase, 
  LazyAudiencePaths, 
  LazyBlogSection, 
  LazySubscribeSection 
} from "@/components/home/lazy-sections"

export default function Home() {
  return (
    <main className="flex flex-col bg-black text-white">
      <HeroSection />
      <Manifesto />
      <CorePillars />
      <LazyEcosystemShowcase />
      <LazyAudiencePaths />
      <LazyBlogSection />
      <LazySubscribeSection />
    </main>
  )
}
