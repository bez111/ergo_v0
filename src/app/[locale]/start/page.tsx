
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ShoppingCart, Send, Shield, CheckCircle, Smartphone, Globe } from 'lucide-react'
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { FAQSchema } from '@/components/seo/faq-schema'
import { siteConfig } from '@/config/site-config'
import { getTranslations } from 'next-intl/server'
import { getMetadata } from './metadata'
import { howToSchema, knowledgeGraph } from './json-ld'

// FAQ data for start page
const startFAQ = [
  {
    question: "How to get started with Ergo?",
    answer: "Getting started with Ergo is easy: 1) Download a wallet like Nautilus (browser) or Ergo Mobile Wallet (phone). 2) Securely back up your 15-word seed phrase. 3) Buy ERG from exchanges (KuCoin, Gate.io) or DEXs (Spectrum Finance). 4) Send a small test transaction. 5) Explore DeFi apps in the ecosystem."
  },
  {
    question: "What is the best Ergo wallet?",
    answer: "The best Ergo wallet depends on your needs: Nautilus (browser extension) is best for DeFi and dApp interactions. Ergo Mobile Wallet is great for everyday use on phone. SAFEW offers advanced features for power users. For maximum security, use Ledger hardware wallet with Nautilus integration."
  },
  {
    question: "How to buy ERG?",
    answer: "You can buy ERG on centralized exchanges like KuCoin, Gate.io, Bitpanda, or on decentralized exchanges like Spectrum Finance (no KYC). Create an account, deposit funds, buy ERG, then withdraw to your personal Ergo wallet for self-custody."
  },
  {
    question: "What are Ergo transaction fees?",
    answer: "Ergo transaction fees are very low, typically around 0.001-0.002 ERG (approximately $0.01 USD). Fees are predictable and shown before you confirm. Unlike Ethereum, there's no gas price volatility or MEV extraction."
  },
  {
    question: "Is Ergo safe for beginners?",
    answer: "Yes, Ergo is safe for beginners when following best practices: use official wallets, never share your seed phrase, start with small amounts, double-check addresses before sending. Ergo's eUTXO model prevents many common smart contract exploits that affect other chains."
  }
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.seo' });
  return getMetadata()
}

const steps = [
  {
    number: "01",
    title: "Download a Wallet",
    description: "Choose a secure wallet to store your ERG tokens",
    icon: Download,
    color: "from-blue-500 to-cyan-500",
    wallets: [
      {
        name: "Nautilus",
        type: "Browser Extension",
        description: "Most popular Ergo wallet with dApp support and advanced features",
        link: "https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai",
        recommended: true,
        buttonText: "Download Nautilus",
        icon: Download
      },
      {
        name: "Ergo Mobile",
        type: "iOS & Android",
        description: "Official mobile wallet with secure storage and easy transactions",
        link: "https://apps.apple.com/us/app/terminus-wallet-ergo/id1643137927",
        recommended: false,
        buttonText: "Get Ergo Mobile",
        icon: Smartphone
      },
      {
        name: "SAFEW",
        type: "Web Wallet",
        description: "Simple web-based wallet for quick access and beginners",
        link: "https://github.com/ThierryM1212/SAFEW",
        recommended: false,
        buttonText: "Open SAFEW",
        icon: Globe
      }
    ]
  },
  {
    number: "02",
    title: "Buy ERG Tokens",
    description: "Purchase ERG from exchanges or DEXs",
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
    exchanges: [
      {
        name: "KuCoin",
        type: "Spot · ~0.1% fees",
        description: "Large centralized exchange with high liquidity and ERG/USDT pair",
        link: "https://www.kucoin.com/trade/ERG-USDT?utm_source=ergo_start",
        fees: "~0.1%",
        buttonText: "Trade ERG on KuCoin",
        recommended: false
      },
      {
        name: "Gate.io",
        type: "Spot · ~0.2% fees",
        description: "Global exchange with multiple ERG trading pairs and good volume",
        link: "https://www.gate.io/trade/ERG_USDT?utm_source=ergo_start",
        fees: "~0.2%",
        buttonText: "Trade ERG on Gate.io",
        recommended: false
      },
      {
        name: "ErgoDEX",
        type: "No KYC · ~0.3% fees",
        description: "Native Ergo DEX with full decentralization and privacy",
        link: "https://app.ergodex.io/?utm_source=ergo_start",
        fees: "~0.3%",
        buttonText: "Open ErgoDEX",
        recommended: false
      }
    ]
  },
  {
    number: "03",
    title: "Send Your First Transaction",
    description: "Test your wallet by sending ERG",
    icon: Send,
    color: "from-green-500 to-emerald-500",
    tips: [
      "Start with a small test amount (0.1 ERG)",
      "Transaction fees are typically ~0.001-0.002 ERG ($0.01)",
      "Transactions confirm in ~2 minutes",
      "Always double-check the recipient address"
    ]
  }
]

const quickFacts = [
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Non-custodial wallets give you full control of your funds"
  },
  {
    icon: CheckCircle,
    title: "Low Fees",
    description: "Predictable fees around $0.01 per transaction"
  },
  {
    icon: Send,
    title: "Fast Confirmation",
    description: "Transactions confirm in approximately 2 minutes"
  }
]

export default async function StartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'start.schema' });


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema(t)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <FAQSchema 
        faqs={startFAQ}
        pageUrl={`${siteConfig.siteUrl}/start`}
      />

      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundWrapper>

          {/* Hero Section */}
          <section className="pt-28 pb-10 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    Start Using <span className="text-orange-400">Ergo</span>
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                    Get started with Ergo blockchain in 3 simple steps
                  </p>
                  <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Download a wallet, buy ERG tokens, and send your first transaction. 
                    Join the decentralized finance revolution with predictable fees and enhanced security.
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                      Quick Facts
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {quickFacts.map((fact, index) => (
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
                  {steps.map((step, index) => (
                    <div key={index} className="relative">

                      {/* Step Header */}
                      <div className="flex items-center gap-6 mb-12">
                        <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-xl font-bold text-black">
                          {step.number}
                        </div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {step.title}
                          </h2>
                          <p className="text-lg text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="ml-18">
                        {/* Wallets */}
                        {step.wallets && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {step.wallets.map((wallet, walletIndex) => (
                              <div key={walletIndex} className={`group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 ${wallet.recommended ? 'ring-2 ring-orange-500/20' : ''
                                }`}>
                                {wallet.recommended && (
                                  <div className="absolute -top-3 left-6 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                                    Recommended
                                  </div>
                                )}
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
                                <div className="space-y-3">
                                  <EnhancedButton
                                    href={wallet.link}
                                    external={true}
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    icon={<wallet.icon className="h-5 w-5" />}
                                    ariaLabel={`Download ${wallet.name} wallet`}
                                  >
                                    {wallet.buttonText}
                                  </EnhancedButton>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Exchanges */}
                        {step.exchanges && (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {step.exchanges.map((exchange, exchangeIndex) => (
                                <div key={exchangeIndex} className={`group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 ${exchange.recommended ? 'ring-2 ring-orange-500/20' : ''
                                  }`}>
                                  {exchange.recommended && (
                                    <div className="absolute -top-3 left-6 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                                      Recommended
                                    </div>
                                  )}
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
                                  <div className="space-y-3">
                                    <EnhancedButton
                                      href={exchange.link}
                                      external={true}
                                      variant={exchange.recommended ? "primary" : "secondary"}
                                      size="lg"
                                      className="w-full"
                                      icon={<ShoppingCart className="h-5 w-5" />}
                                      ariaLabel={`Trade ERG on ${exchange.name}`}
                                    >
                                      {exchange.buttonText}
                                    </EnhancedButton>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-6 p-4 bg-neutral-900/50 border border-neutral-700/50 rounded-lg">
                              <p className="text-xs text-gray-500 text-center">
                                <strong>Disclaimer:</strong> Links are informational. Do your own research. Trading involves risk.
                              </p>
                            </div>
                          </>
                        )}

                        {/* Tips */}
                        {step.tips && (
                          <div className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5">
                            <div className="flex items-start gap-4 mb-6">
                              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                                <Send className="h-6 w-6 text-orange-400" />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-xl mb-1">Pro Tips</h3>
                                <p className="text-orange-400/80 text-sm font-medium">Best practices for success</p>
                              </div>
                            </div>
                            <ul className="space-y-4">
                              {step.tips.map((tip, tipIndex) => (
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

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What's <span className="text-orange-400">Next</span>?
                </h2>
                <p className="text-lg text-gray-400 mb-12">
                  Now that you have ERG, explore the Ergo ecosystem
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link
                    href="/ecosystem"
                    className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl mb-1">Explore dApps</h3>
                        <p className="text-orange-400/80 text-sm font-medium">Ecosystem Applications</p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">Discover decentralized applications built on Ergo</p>
                  </Link>

                  <Link
                    href="/docs"
                    className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl mb-1">Learn More</h3>
                        <p className="text-orange-400/80 text-sm font-medium">Technical Documentation</p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">Deep dive into Ergo's technology and features</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Email Capture Form */}
          <FinalCTASimple 
            title="Get Started with Ergo"
            description="Get the latest updates, beginner guides, and step-by-step tutorials delivered to your inbox"
          />

        </BackgroundWrapper>
      </main>
    </>
  )
}
