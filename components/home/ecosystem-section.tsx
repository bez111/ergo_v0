import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function EcosystemSection() {
  const projects = [
    {
      name: "ErgoDEX",
      description: "Decentralized exchange for Ergo and Cardano ecosystems",
      category: "DeFi",
      url: "/ecosystem/projects/ergodex",
    },
    {
      name: "Spectrum",
      description: "Liquidity and yield farming protocol",
      category: "DeFi",
      url: "/ecosystem/projects/spectrum",
    },
    {
      name: "SigmaUSD",
      description: "Algorithmic stablecoin protocol",
      category: "Stablecoin",
      url: "/ecosystem/projects/sigmausd",
    },
    {
      name: "Ergo Mixer",
      description: "Non-custodial mixing service for privacy",
      category: "Privacy",
      url: "/ecosystem/projects/ergomixer",
    },
  ]

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ecosystem</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover the growing ecosystem of projects and applications built on Ergo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="group flex flex-col gap-4 rounded-lg border p-6 hover:border-primary hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">E</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-xs text-muted-foreground">{project.category}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/ecosystem/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <div className="text-3xl font-bold text-primary">150+</div>
            <h3 className="font-medium">Projects</h3>
            <p className="text-sm text-muted-foreground">Active projects building on Ergo</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <div className="text-3xl font-bold text-primary">$50M+</div>
            <h3 className="font-medium">TVL</h3>
            <p className="text-sm text-muted-foreground">Total value locked in Ergo DeFi</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <h3 className="font-medium">Developers</h3>
            <p className="text-sm text-muted-foreground">Active developers in the ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  )
}
