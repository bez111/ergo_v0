import { HeroSection } from "@/components/home/hero-section"
import { QuickActions } from "@/components/home/quick-actions"
import { CorePillars } from "@/components/home/core-pillars"
import { EcosystemShowcase } from "@/components/home/ecosystem-showcase"
import { Differentiation } from "@/components/home/differentiation"
import { AudiencePaths } from "@/components/home/audience-paths"
import { SubscribeSection } from "@/components/home/subscribe-section"
import { Manifesto } from "@/components/home/manifesto"
import { DigitalRain } from "@/components/digital-rain"

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white relative">
      <DigitalRain />
      <HeroSection />
      <Manifesto />
      <QuickActions />
      <CorePillars />
      <EcosystemShowcase />
      <Differentiation />
      <AudiencePaths />
      <SubscribeSection />
    </div>
  )
}
