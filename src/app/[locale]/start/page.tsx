/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ShoppingCart, Send, Shield, CheckCircle, Smartphone, Globe } from 'lucide-react'
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { getTranslations } from 'next-intl/server'
import { getMetadata } from './metadata'
import { howToSchema, knowledgeGraph } from './json-ld'
import {
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// Links (not translated)
const WALLET_LINKS = {
  nautilus: "https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai",
  ergoMobile: "https://apps.apple.com/us/app/terminus-wallet-ergo/id1643137927",
  safew: "https://github.com/ThierryM1212/SAFEW"
}

const EXCHANGE_LINKS = {
  kucoin: "https://www.kucoin.com/trade/ERG-USDT?utm_source=ergo_start",
  gateio: "https://www.gate.io/trade/ERG_USDT?utm_source=ergo_start",
  ergodex: "https://app.ergodex.io/?utm_source=ergo_start"
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  await params; // Required for Next.js dynamic params
  return getMetadata()
}

export default async function StartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start' });

  // Get localized quick facts
  const localizedQuickFacts = [
    { icon: Shield, title: t('page.quickFacts.items.0.title'), description: t('page.quickFacts.items.0.description') },
    { icon: CheckCircle, title: t('page.quickFacts.items.1.title'), description: t('page.quickFacts.items.1.description') },
    { icon: Send, title: t('page.quickFacts.items.2.title'), description: t('page.quickFacts.items.2.description') }
  ]

  // Get localized steps
  const localizedSteps = [
    {
      number: t('page.steps.0.number'),
      title: t('page.steps.0.title'),
      description: t('page.steps.0.description'),
      wallets: [
        { 
          name: "Nautilus", 
          type: t('page.steps.0.wallets.0.type'), 
          description: t('page.steps.0.wallets.0.description'), 
          link: WALLET_LINKS.nautilus, 
          recommended: true, 
          buttonText: t('page.steps.0.wallets.0.buttonText'), 
          icon: Download 
        },
        { 
          name: "Ergo Mobile", 
          type: t('page.steps.0.wallets.1.type'), 
          description: t('page.steps.0.wallets.1.description'), 
          link: WALLET_LINKS.ergoMobile, 
          recommended: false, 
          buttonText: t('page.steps.0.wallets.1.buttonText'), 
          icon: Smartphone 
        },
        { 
          name: "SAFEW", 
          type: t('page.steps.0.wallets.2.type'), 
          description: t('page.steps.0.wallets.2.description'), 
          link: WALLET_LINKS.safew, 
          recommended: false, 
          buttonText: t('page.steps.0.wallets.2.buttonText'), 
          icon: Globe 
        }
      ]
    },
    {
      number: t('page.steps.1.number'),
      title: t('page.steps.1.title'),
      description: t('page.steps.1.description'),
      disclaimer: t('page.steps.1.disclaimer'),
      exchanges: [
        { 
          name: "KuCoin", 
          type: t('page.steps.1.exchanges.0.type'), 
          description: t('page.steps.1.exchanges.0.description'), 
          link: EXCHANGE_LINKS.kucoin, 
          buttonText: t('page.steps.1.exchanges.0.buttonText'), 
          recommended: false 
        },
        { 
          name: "Gate.io", 
          type: t('page.steps.1.exchanges.1.type'), 
          description: t('page.steps.1.exchanges.1.description'), 
          link: EXCHANGE_LINKS.gateio, 
          buttonText: t('page.steps.1.exchanges.1.buttonText'), 
          recommended: false 
        },
        { 
          name: "ErgoDEX", 
          type: t('page.steps.1.exchanges.2.type'), 
          description: t('page.steps.1.exchanges.2.description'), 
          link: EXCHANGE_LINKS.ergodex, 
          buttonText: t('page.steps.1.exchanges.2.buttonText'), 
          recommended: false 
        }
      ]
    },
    {
      number: t('page.steps.2.number'),
      title: t('page.steps.2.title'),
      description: t('page.steps.2.description'),
      proTips: {
        title: t('page.steps.2.proTips.title'),
        subtitle: t('page.steps.2.proTips.subtitle'),
        items: [
          t('page.steps.2.tips.0'),
          t('page.steps.2.tips.1'),
          t('page.steps.2.tips.2'),
          t('page.steps.2.tips.3')
        ]
      }
    }
  ]

  // Localized next steps (using whatsNext key)
  const nextSteps = {
    title: t('page.whatsNext.title'),
    titleHighlight: "",
    subtitle: t('page.whatsNext.description'),
    items: [
      {
        title: t('page.whatsNext.dapps.title'),
        subtitle: t('page.whatsNext.dapps.subtitle'),
        description: t('page.whatsNext.dapps.description'),
        href: "/ecosystem"
      },
      {
        title: t('page.whatsNext.docs.title'),
        subtitle: t('page.whatsNext.docs.subtitle'),
        description: t('page.whatsNext.docs.description'),
        href: "/docs"
      }
    ]
  }

  // Localized CTA (using finalCta key)
  const ctaTitle = t('page.finalCta.title')
  const ctaDescription = t('page.finalCta.description')

  // FAQ Items for schema (using localized content)
  const faqItems = [
    { question: t('schema.faq.items.0.question'), answer: t('schema.faq.items.0.answer') },
    { question: t('schema.faq.items.1.question'), answer: t('schema.faq.items.1.answer') },
    { question: t('schema.faq.items.2.question'), answer: t('schema.faq.items.2.answer') },
    { question: t('schema.faq.items.3.question'), answer: t('schema.faq.items.3.answer') }
  ]

  // Combine custom schemas with standardized ones
  const schemas = [
    howToSchema(),
    knowledgeGraph,
    createBreadcrumbSchema([{ name: t('page.breadcrumbs.start'), href: "/start" }]),
    createFAQSchema(faqItems),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundWrapper>
          {/* Hero Section */}
          <section className="pt-28 pb-10 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    {t('page.hero.title')} <span className="text-orange-400">{t('page.hero.titleHighlight')}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                    {t('page.hero.subtitle')}
                  </p>
                  <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t('page.hero.description')}
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">{t('page.quickFacts.title')}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {localizedQuickFacts.map((fact, index) => (
                        <div key={index} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                              <fact.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-lg">{fact.title}</h4>
                              <p className="text-gray-400 text-sm">{fact.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section className="py-16">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-6xl mx-auto">
                <div className="space-y-20">
                  {localizedSteps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center gap-6 mb-12">
                        <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-xl font-bold text-black">{step.number}</div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{step.title}</h2>
                          <p className="text-lg text-gray-400">{step.description}</p>
                        </div>
                      </div>
                      <div className="ml-18">
                        {step.wallets && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {step.wallets.map((wallet, walletIndex) => (
                              <div key={walletIndex} className={`group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 ${wallet.recommended ? 'ring-2 ring-orange-500/20' : ''}`}>
                                {wallet.recommended && <div className="absolute -top-3 left-6 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">{t('page.badges.recommended')}</div>}
                                <div className="flex items-start gap-4 mb-4">
                                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                                    <wallet.icon className="h-6 w-6 text-orange-400" />
                                  </div>
                                  <div>
                                    <h3 className="text-white font-bold text-xl mb-1">{wallet.name}</h3>
                                    <p className="text-orange-400/80 text-sm font-medium">{wallet.type}</p>
                                  </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-6">{wallet.description}</p>
                                <EnhancedButton href={wallet.link} external={true} variant="primary" size="lg" className="w-full" icon={<wallet.icon className="h-5 w-5" />} ariaLabel={`Download ${wallet.name} wallet`}>{wallet.buttonText}</EnhancedButton>
                              </div>
                            ))}
                          </div>
                        )}
                        {step.exchanges && (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {step.exchanges.map((exchange, exchangeIndex) => (
                                <div key={exchangeIndex} className={`group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 ${exchange.recommended ? 'ring-2 ring-orange-500/20' : ''}`}>
                                  {exchange.recommended && <div className="absolute -top-3 left-6 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">{t('page.badges.recommended')}</div>}
                                  <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                                      <ShoppingCart className="h-6 w-6 text-orange-400" />
                                    </div>
                                    <div>
                                      <h3 className="text-white font-bold text-xl mb-1">{exchange.name}</h3>
                                      <p className="text-orange-400/80 text-sm font-medium">{exchange.type}</p>
                                    </div>
                                  </div>
                                  <p className="text-gray-400 leading-relaxed mb-6">{exchange.description}</p>
                                  <EnhancedButton href={exchange.link} external={true} variant="secondary" size="lg" className="w-full" icon={<ShoppingCart className="h-5 w-5" />} ariaLabel={`Trade ERG on ${exchange.name}`}>{exchange.buttonText}</EnhancedButton>
                                </div>
                              ))}
                            </div>
                            {step.disclaimer && (
                              <div className="mt-6 p-4 bg-neutral-900/50 border border-neutral-700/50 rounded-lg">
                                <p className="text-xs text-gray-500 text-center"><strong>{t('page.disclaimer.title')}:</strong> {step.disclaimer}</p>
                              </div>
                            )}
                          </>
                        )}
                        {step.proTips && (
                          <div className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5">
                            <div className="flex items-start gap-4 mb-6">
                              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                                <Send className="h-6 w-6 text-orange-400" />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-xl mb-1">{step.proTips.title}</h3>
                                <p className="text-orange-400/80 text-sm font-medium">{step.proTips.subtitle}</p>
                              </div>
                            </div>
                            <ul className="space-y-4">
                              {step.proTips.items.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                  <span className="text-gray-400 leading-relaxed">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps Section */}
          <section className="py-16">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{nextSteps.title}</h2>
                <p className="text-lg text-gray-400 mb-12">{nextSteps.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nextSteps.items.map((item, index) => (
                    <Link key={index} href={item.href} className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                          <Shield className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                          <p className="text-orange-400/80 text-sm font-medium">{item.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <FinalCTASimple title={ctaTitle} description={ctaDescription} />
        </BackgroundWrapper>
      </main>
    </>
  )
}
