"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { 
  GitBranch, Shield, Lock, CheckCircle, Layers, RefreshCw, Settings, Users, TrendingUp, ChevronDown, Terminal, BookOpen
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function VelvetForksPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const features = [
    {
      title: "Backward Compatibility",
      description: "No breaking changes for existing applications and infrastructure",
      icon: RefreshCw,
    },
    {
      title: "Gradual Adoption", 
      description: "New features can be adopted incrementally by the network",
      icon: TrendingUp,
    },
    {
      title: "Flexible Updates",
      description: "Protocol parameters can be adjusted without hard forks", 
      icon: Settings,
    },
    {
      title: "Community Consensus",
      description: "Changes require broad community agreement and miner support",
      icon: Users,
    },
    {
      title: "Security Preservation",
      description: "Maintains network security while enabling protocol evolution",
      icon: Shield,
    },
    {
      title: "Reduced Risk",
      description: "Lower risk of network splits and ecosystem fragmentation",
      icon: CheckCircle,
    },
  ]

  const useCases = [
    {
      title: "Light Client Upgrades",
      description: "Enable new features for light clients without breaking existing implementations",
      icon: Layers,
    },
    {
      title: "Privacy Enhancements", 
      description: "Gradually introduce new privacy features while maintaining backward compatibility",
      icon: Lock,
    },
    {
      title: "Smart Contract Evolution",
      description: "Upgrade ErgoScript capabilities without requiring ecosystem-wide changes",
      icon: Terminal,
    },
  ]

  const faqs = [
    {
      question: "What exactly is a velvet fork?",
      answer: "A velvet fork is Ergo's approach to protocol upgrades that maintains complete backward compatibility while enabling new features. Unlike hard or soft forks, velvet forks never break existing functionality.",
    },
    {
      question: "How do velvet forks differ from soft forks?",
      answer: "While soft forks tighten existing rules, velvet forks can add entirely new features without affecting nodes that don't upgrade. This allows for more flexible protocol evolution.",
    },
    {
      question: "Are velvet forks secure?",
      answer: "Yes, velvet forks maintain the same security guarantees as the base protocol. New features are designed to be optional and don't compromise the security of existing functionality.",
    },
    {
      question: "Do I need to upgrade my node for velvet forks?",
      answer: "No, upgrades are optional. Your node will continue to work normally, though you won't have access to new features until you choose to upgrade.",
    },
  ]

  return (
    <>
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Velvet Forks",
          description: "Backward-compatible protocol upgrades that enable evolution without breaking changes",
          keywords: "velvet forks, protocol upgrades, backward compatibility, blockchain evolution",
          datePublished: "2023-11-10",
          dateModified: "2025-08-10",
          author: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
          },
        }}
      />

      <BackgroundWrapper>
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: "Velvet Forks", href: "/technology/velvet-forks" },
            ]}
            className="mb-8"
          />
        </div>

        <FadeIn>
          <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  Velvet Forks
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                  Backward-compatible protocol upgrades
                </p>
                <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  Enable protocol evolution without breaking changes or forced upgrades. Velvet forks allow gradual feature adoption while preserving ecosystem stability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/docs/protocol/velvet-forks">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Read Documentation
                    </Button>
                  </Link>
                  <Link href="/technology">
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                    >
                      Explore Other Technologies
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white">Quick Start</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        number: "01",
                        title: "Learn Concepts",
                        description: "Understand velvet fork principles",
                      },
                      {
                        number: "02", 
                        title: "View Examples",
                        description: "See velvet forks in action",
                      },
                      {
                        number: "03",
                        title: "Join Discussion",
                        description: "Participate in governance",
                      },
                    ].map((item) => (
                      <div key={item.number} className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 font-bold text-sm">
                          {item.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                          <p className="text-sm text-neutral-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Key Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Why velvet forks are the future of blockchain protocol upgrades
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  How It Works
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  The velvet fork process ensures smooth protocol evolution
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Proposal Phase",
                    description: "Community proposes protocol improvements through EIPs",
                    icon: GitBranch,
                  },
                  {
                    title: "Discussion & Review",
                    description: "Technical review and community discussion",
                    icon: Users,
                  },
                  {
                    title: "Implementation",
                    description: "Developers implement backward-compatible changes",
                    icon: CheckCircle,
                  },
                  {
                    title: "Gradual Activation",
                    description: "Network adopts features without forced upgrades",
                    icon: TrendingUp,
                  },
                ].map((step, index) => (
                  <div key={step.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 mt-2">
                      <step.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Fork Comparison
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Understanding different approaches to blockchain protocol upgrades
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Hard Fork</h3>
                  <p className="text-neutral-400 text-sm mb-6">Breaking changes that require all nodes to upgrade</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Complete protocol redesign possible
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Can fix fundamental issues
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Risk of network split
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Requires coordinated upgrade
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Soft Fork</h3>
                  <p className="text-neutral-400 text-sm mb-6">Backward-compatible changes that tighten rules</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Maintains backward compatibility
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          No forced upgrades required
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Limited to rule tightening
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Cannot add new features easily
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm border-orange-400/40">
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">Velvet Fork</h3>
                  <p className="text-neutral-400 text-sm mb-6">Ergo's approach: gradual feature introduction with full compatibility</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          No breaking changes ever
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Gradual feature adoption
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Preserves ecosystem stability
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-yellow-400 font-semibold mb-2">Trade-offs</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-yellow-400" />
                          Slower feature rollout
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-yellow-400" />
                          Requires careful design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.8}>
          <section className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Use Cases
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Real-world applications of velvet fork technology
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase) => (
                  <div key={useCase.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.0}>
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-neutral-400">
                  Common questions about velvet forks and their implementation
                </p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm">
                        <CollapsibleTrigger asChild>
                          <div className="cursor-pointer hover:bg-neutral-800/30 transition-colors p-8">
                            <div className="flex items-center justify-between">
                              <h3 className="text-white text-left font-semibold">{faq.question}</h3>
                              <ChevronDown 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-8 pb-8">
                            <p className="text-neutral-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.2}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What's <span className="text-orange-400">Next?</span>
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Ready to explore velvet forks? Dive deeper into the technology and implementation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Link href="/docs/protocol/velvet-forks" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Read Documentation</h3>
                        <p className="text-orange-400 font-medium">Learn More</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Explore comprehensive guides and technical details about velvet fork implementation.
                    </p>
                  </div>
                </Link>
                
                <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Terminal className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">View Source Code</h3>
                        <p className="text-orange-400 font-medium">GitHub</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Explore the Ergo protocol source code and see velvet fork implementations.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </BackgroundWrapper>
    </>
  )
}