import { HeroSection } from "@/components/home/hero-section"
import { QuickActions } from "@/components/home/quick-actions"
import { CorePillars } from "@/components/home/core-pillars"
import { EcosystemShowcase } from "@/components/home/ecosystem-showcase"
import { Differentiation } from "@/components/home/differentiation"
import { AudiencePaths } from "@/components/home/audience-paths"
import { BlogSection } from "@/components/home/blog-section"
import { SubscribeSection } from "@/components/home/subscribe-section"
import { Manifesto } from "@/components/home/manifesto"

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white relative">
      <HeroSection />
      <QuickActions />
      <Manifesto />
      <CorePillars />
      <Differentiation />
      <EcosystemShowcase />
      <AudiencePaths />
      <BlogSection />
      <SubscribeSection />
    </div>
  )
}
