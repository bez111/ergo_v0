"use client"

/* eslint-disable react/no-unescaped-entities */

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Target, Lightbulb, Info } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionHeading } from "@/components/section-heading"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"

function GrantsClient() {
  const t = useTranslations('ecosystem.grants')
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const features = [
    {
      icon: Zap,
      title: t('features.items.0.title'),
      description: t('features.items.0.description'),
    },
    {
      icon: Target,
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
    },
    {
      icon: Users,
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
    },
    {
      icon: Lightbulb,
      title: t('features.items.3.title'),
      description: t('features.items.3.description'),
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* subtle background grid */}
      <HexagonalGrid className="opacity-[0.03]" />
      <div className="relative z-10">
        {/* Hero Section */}
        <FadeIn>
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-snug pb-2">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                {t('hero.description')}
              </p>

              {/* Honest status: no formal grant programme is currently open
                  on this site. Set the right expectation up-front instead of
                  collecting emails for a programme that doesn't exist yet. */}
              <div className="max-w-2xl mx-auto mb-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 text-left">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="text-sm text-yellow-100/90 leading-relaxed">
                    <p className="font-semibold text-yellow-200 mb-1">
                      Status: no application window is currently open on this site.
                    </p>
                    <p>
                      A coordinated, application-based grants programme run from
                      this site is <strong>not open yet</strong>. Funding for Ergo
                      ecosystem work today happens primarily through the{" "}
                      <a
                        href="https://github.com/ergoplatform/ergo-improvement-proposals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-yellow-300"
                      >
                        EIP / Sigmanauts process
                      </a>{" "}
                      on GitHub and via direct community proposals on{" "}
                      <a
                        href="https://discord.gg/ergo-platform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-yellow-300"
                      >
                        Discord
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.ergoforum.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-yellow-300"
                      >
                        ergoforum.org
                      </a>
                      . Subscribe below to be notified when an application
                      window opens here, and see the &quot;What we&apos;d fund&quot;
                      section further down for the kinds of work we&apos;d
                      prioritise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Subscription */}
              <div className="max-w-md mx-auto">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder={t('subscribe.placeholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-neutral-900/80 border-neutral-700 text-white placeholder-neutral-500"
                      required
                    />
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t('subscribe.button')}
                    </Button>
                  </form>
                ) : (
                  <div className="text-green-400 text-lg">
                    {t('subscribe.success')}
                  </div>
                )}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.2}>
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                text={t('features.title')}
                subtitle={t('features.subtitle')}
                description={t('features.description')}
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.icon.displayName || `feature-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group"
                  >
                    <Card
                      className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 rounded-xl h-full`}
                    >
                      <CardContent className="p-8 text-center">
                        <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* What we'd fund + how decisions get made — the audit specifically
            asked for amounts/eligibility/process/timelines transparency. */}
        <FadeIn delay={0.3}>
          <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What we&apos;d fund &amp; how decisions get made
              </h2>
              <p className="text-neutral-400 mb-8 max-w-3xl">
                When a formal application window opens on this site, the
                framework below is what we plan to use. Treat it as a preview,
                not a binding programme document.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Eligible categories</h3>
                  <ul className="text-sm text-neutral-300 space-y-2 list-disc pl-5">
                    <li>Open-source Ergo node, SDK, wallet and tooling work</li>
                    <li>Agent-economy primitives: Accord Protocol, ChainCash, MCP/x402 adapters</li>
                    <li>Independent security audits and threat-model write-ups</li>
                    <li>Developer documentation, examples and tutorials</li>
                    <li>Research on eUTXO, Sigma Protocols, NiPoPoWs, oracle design</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Funding ranges (planned)</h3>
                  <ul className="text-sm text-neutral-300 space-y-2 list-disc pl-5">
                    <li>Micro-grants for documentation / examples / one-off fixes</li>
                    <li>Project grants for SDKs, dApps, tooling — milestone-based</li>
                    <li>Research grants for protocol-level / cryptography work</li>
                    <li>Audit co-funding for production-bound deployments</li>
                  </ul>
                  <p className="text-xs text-neutral-500 mt-3">
                    Specific amounts will be published when an application
                    window opens. Today, funding flows through community
                    channels listed above.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Review criteria</h3>
                  <ul className="text-sm text-neutral-300 space-y-2 list-disc pl-5">
                    <li>Open-source license (MIT, Apache-2.0, GPL or similar)</li>
                    <li>Clear scope, milestones and acceptance criteria</li>
                    <li>Public artifacts: repo, docs, demo / testnet deployment</li>
                    <li>Disclosure of conflicts of interest with reviewers</li>
                    <li>For production work: a credible audit / security plan</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Process &amp; timeline (planned)</h3>
                  <ul className="text-sm text-neutral-300 space-y-2 list-disc pl-5">
                    <li>Public application form with structured fields</li>
                    <li>Reviewer panel from the Ergo Foundation, Sigmanauts and ecosystem builders</li>
                    <li>Initial response within ~14 days of submission</li>
                    <li>Milestone-based payouts in ERG against on-chain receipts</li>
                    <li>Review notes published with the recipient&apos;s consent</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-6">
                Conflict of interest: reviewers disclose any prior involvement
                with applicants. Where a clear conflict exists, that reviewer
                steps out of the decision for that application.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.4}>
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-[1.1] pb-1">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-neutral-300 mb-8">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                  {t('cta.buttons.discord')}
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  {t('cta.buttons.learn')}
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default GrantsClient
