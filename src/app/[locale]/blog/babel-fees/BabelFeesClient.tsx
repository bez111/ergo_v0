 "use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */

import { useState } from "react"
import { motion } from "framer-motion"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ShareCTA } from "@/components/blog/share-cta"
import { ShareInline } from "@/components/blog/share-inline"
import { ExpandableInfographic } from "@/components/blog/expandable-infographic"
import {
  Coins,
  Network,
  Database,
  CheckCircle,
  ChevronDown,
  Code,
  Eye,
  Wallet,
} from "lucide-react"

export default function BabelFeesArticleClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // TL;DR cards adapted to Babel Fees
  const tldrItems = [
    {
      icon: Coins,
      title: "Native Gas UX Problem",
      description:
        "Most blockchains force users to keep the native coin just to pay fees, even when they only want to use stablecoins or app-specific tokens.",
    },
    {
      icon: Wallet,
      title: "Pay Fees In Any Token",
      description:
        "On Ergo, users can pay transaction fees in any token they already hold – SigmaUSD, governance tokens, even NFTs – without owning ERG.",
    },
    {
      icon: Database,
      title: "Babel Boxes On-Chain Market",
      description:
        "Babel boxes are on-chain liquidity boxes that swap user tokens for ERG at a predefined rate, enforced by ErgoScript.",
    },
    {
      icon: CheckCircle,
      title: "Miner Incentives Preserved",
      description:
        "Miners still receive ERG, choose only profitable swaps, and never have to hold the user’s token – no extra risk or complexity.",
    },
    {
      icon: Code,
      title: "Gas Abstraction For dApps",
      description:
        "dApps can abstract gas completely, letting users pay in protocol tokens and building smoother UX for DeFi and on-chain apps.",
    },
  ]

  const faqItems = [
    {
      question: "Do I need ERG in my wallet to use Babel Fees?",
      answer:
        "No. That’s the whole point. As long as there is a Babel box for the token you’re holding, you can submit a transaction paying fees in that token. The miner will use the Babel box to swap it for ERG on-chain.",
    },
    {
      question: "Who decides the exchange rate in a Babel box?",
      answer:
        "The Babel box creator sets the rate (X tokens per ERG). Miners are rational and will only use boxes where the swap is profitable compared to the standard ERG fee, so bad rates are simply ignored by the market.",
    },
    {
      question: "Is an external oracle or DEX needed for Babel Fees?",
      answer:
        "No. Babel fees work entirely inside the eUTXO model. The conversion rate is encoded in the smart contract for the Babel box; no third-party DEX, oracle, or global price feed is required.",
    },
    {
      question: "Can dApps use their own token for gas?",
      answer:
        "Yes. Protocols like DEXes or lending platforms can maintain Babel boxes for their governance/utility token, so users can pay all interaction fees in that token while miners still receive ERG.",
    },
    {
      question: "Does this change network security or consensus?",
      answer:
        "No. Consensus and the fee market are still denominated in ERG. Babel fees only change how the ERG fee is sourced, not how blocks are produced or validated.",
    },
  ]

  const articleContents = [
    { label: "Introduction", href: "#introduction" },
    { label: "What Are Babel Fees?", href: "#what-are-babel-fees" },
    { label: "Why Babel Fees Matter", href: "#why-babel-fees-matter" },
    { label: "How Babel Fees Work", href: "#how-babel-fees-work" },
    { label: "Who Provides Babel Boxes?", href: "#who-provides-babel-boxes" },
    { label: "Advantages Of Babel Fees", href: "#advantages" },
    { label: "Conclusion", href: "#conclusion" },
    { label: "Frequently Asked Questions", href: "#faq" },
    { label: "Essential Documents", href: "#documents" },
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              {
                name: "Ergo's Babel Fees: Pay Transaction Fees In Any Token",
                href: "/blog/babel-fees",
              },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Ergo’s Babel Fees Explained: Pay Crypto Transaction Fees In Any Token
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
              Most blockchains force users to keep the native coin just to pay gas. Ergo’s Babel Fees turn
              transaction fees into an on-chain market, so users can pay with almost any token while miners
              still receive ERG.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="Ergo’s Babel Fees Explained: Pay Crypto Transaction Fees In Any Token"
                url="https://ergoblockchain.org/blog/babel-fees"
                utm="?utm_source=share_hero"
              />
            </div>
          </motion.header>

          {/* TL;DR Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">TL;DR</h2>
            <div className="grid gap-3">
              {tldrItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Card className="bg-black border border-white/10 rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Article Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <Card className="bg-black/80 border border-orange-500/20 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-orange-400" />
                  Article Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {articleContents.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors py-1"
                    >
                      → {item.label}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </motion.section>

          {/* Article Body */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {/* Introduction */}
            <section
              id="introduction"
              className="bg-black border border-white/20 rounded-3xl p-8 mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Coins className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Introduction</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Every blockchain transaction has to pay a fee to miners or validators – usually called “gas”
                or simply the transaction fee. On most networks, that fee must be paid in the native asset:
                BTC on Bitcoin, ETH on Ethereum, ADA on Cardano, and so on.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                This creates a constant UX problem. If someone wants to send USDC to a merchant on Ethereum,
                they have to keep a balance of ETH for gas. If they want to swap USDC for BAT or AAVE, they
                still have to pay in ETH. New users are forced to hold a volatile token they do not actually
                want, just to move the assets they care about.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Ergo's Babel Fees are a different approach. Powered by Ergo's eUTXO transaction model, they
                enable users to pay network fees in almost any token they hold – while miners still receive
                ERG, the native coin, as usual.
              </p>
            </section>

            {/* Babel Fees Infographic */}
            <section className="mb-12">
              <ExpandableInfographic
                src="/og/infographics/babel-fees-infographics.png"
                alt="Ergo Babel Fees: The Universal Token Converter for Gas"
              />
            </section>

            {/* What Are Babel Fees */}
            <section id="what-are-babel-fees" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">What Are Babel Fees?</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ergo’s Babel Fees allow a user to submit a transaction without owning any ERG at all. Instead,
                  they can pay the fee in another asset they already hold in the same address.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  The fee token is swapped to ERG via an on-chain mechanism inside a special eUTXO called a
                  “Babel box”. From the miner’s point of view, they still receive ERG like any other
                  transaction. From the user’s point of view, they paid the fee in the token they actually use.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  For example, a user might want to live entirely in SigmaUSD, Ergo’s primary stablecoin. With
                  Babel Fees, they can send SigmaUSD to another user and pay the transaction fee in SigmaUSD
                  too – no need to top up ERG balances or touch centralized exchanges.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  This design keeps miner incentives intact while giving both end users and miners more
                  flexibility in how they interact with the network.
                </p>
              </div>
            </section>

            {/* Why Babel Fees Matter */}
            <section id="why-babel-fees-matter" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Why Babel Fees Matter</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Babel Fees are a simple idea with big implications for user experience and adoption. Letting
                  users pay fees with any token:
                </p>

                <ul className="text-gray-300 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    Removes the need to maintain tiny ERG balances and constantly top-up wallets with a
                    volatile asset – reducing centralized exchange touchpoints and simplifying accounting,
                    especially for businesses.
                  </li>
                  <li>
                    Lowers onboarding friction. “Cold wallets” that hold tokens but no ERG can still be used
                    immediately, as long as a suitable Babel box exists.
                  </li>
                  <li>
                    Enables gas abstraction for dApps: applications can hide the ERG fee complexity behind
                    their own token, making DeFi feel more like using a regular app than managing a collection
                    of gas coins.
                  </li>
                </ul>
              </div>
            </section>

            {/* How Babel Fees Work */}
            <section id="how-babel-fees-work" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">How Babel Fees Work</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Babel Fees are powered by Babel boxes: public on-chain liquidity resources that offer to swap
                  a specific token for ERG at a predefined rate. Anyone can create a Babel box, including
                  miners who will later use them.
                </p>

                <ol className="text-gray-300 leading-relaxed list-decimal pl-6 space-y-2">
                  <li>
                    The user builds a transaction and attaches the token they want to use as the fee asset. It
                    can be SigmaUSD, a governance token, or even an NFT.
                  </li>
                  <li>
                    A miner evaluating the transaction looks up a relevant Babel box and checks the swap rate
                    (X tokens per ERG), which is enforced by ErgoScript.
                  </li>
                  <li>
                    If including the transaction yields slightly more ERG than the normal fee, the miner
                    accepts it. They receive ERG immediately and never need to hold the user’s token.
                  </li>
                  <li>
                    The token-for-ERG exchange happens automatically, on-chain, directly inside the eUTXO
                    model – no DEX, no oracle, no trusted third party.
                  </li>
                </ol>

                <p className="text-gray-300 leading-relaxed">
                  Miners are rational actors. If the exchange rate in a Babel box is too low, they simply
                  ignore that box and the associated transactions will sit in the mempool until someone offers
                  a better rate.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Because the mechanism is fully scripted and limited by the liquidity inside each Babel box,
                  there are no new trust assumptions and no impact on consensus security.
                </p>
              </div>
            </section>

            {/* Who Provides Babel Boxes */}
            <section id="who-provides-babel-boxes" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Who Provides Babel Boxes?</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Any user can lock ERG in a Babel box and quote an exchange rate for a specific token. This is
                  similar to market making, but fully non-custodial and trustless: everything is enforced by
                  ErgoScript.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Two kinds of actors have especially strong reasons to maintain Babel boxes:
                </p>

                <ul className="text-gray-300 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Miners:</span> they can run their own Babel boxes,
                    offering custom rates and capturing additional yield from fee flows.
                  </li>
                  <li>
                    <span className="font-semibold">dApps and protocols:</span> DEXes, lending platforms and
                    other apps can create Babel boxes for their own tokens. This both improves UX and creates
                    an extra revenue stream from spreads.
                  </li>
                </ul>

                <p className="text-gray-300 leading-relaxed">
                  Babel box operators typically set rates with reference to the underlying market price of the
                  token, but they do not have to mirror it perfectly. The free market of miners selecting
                  transactions filters out uncompetitive offers.
                </p>
              </div>
            </section>

            {/* Advantages */}
            <section id="advantages" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Advantages Of Babel Fees</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Babel Fees deliver benefits to different parts of the Ergo ecosystem:
                </p>

                <ul className="text-gray-300 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Better UX:</span> users don’t need ERG balances to get
                    started. Holding a single token can be enough for everyday usage.
                  </li>
                  <li>
                    <span className="font-semibold">dApp flexibility:</span> developers can abstract gas and
                    let users pay purely in protocol tokens, directly aligning incentives between the app and
                    its users.
                  </li>
                  <li>
                    <span className="font-semibold">Scalability:</span> the mechanism does not add extra load
                    on consensus or miners; it simply changes how the same ERG fee is sourced.
                  </li>
                  <li>
                    <span className="font-semibold">Security:</span> miners always receive ERG and never risk
                    being stuck with illiquid tokens. They only include profitable swaps.
                  </li>
                  <li>
                    <span className="font-semibold">Predictable economics:</span> the fee market remains
                    denominated in ERG and is not exposed to the volatility of every other token on the
                    platform.
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Conclusion</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ergo’s Babel Fees are a practical, market-driven alternative to the default assumption that
                  users must always pay gas in the native token. They turn fees into an on-chain exchange
                  mechanism, not a hard UX constraint.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Thanks to the flexibility of the eUTXO model, anyone can pay fees in any supported token
                  while miners still receive ERG quickly and securely. It’s a small change in fee plumbing
                  that makes blockchains feel far more usable for real people and real applications.
                </p>
              </div>
            </section>
          </motion.article>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
            id="faq"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index} className="bg-black border border-white/10 rounded-2xl">
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                  >
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                          <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${
                              openFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </CardContent>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Essential Documents - Babel Fees specific */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
            id="documents"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">📚 Essential Babel Fees Documents</h2>
            <p className="text-gray-300 mb-8">
              Dive deeper into Ergo’s Babel Fees, eUTXO design, and gas abstraction for dApps.
            </p>

            <div className="grid gap-4">
              <a href="/doc/ergoscript/babel-fees" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-blue-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Code className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">Babel Fees Technical Spec</h3>
                          <p className="text-gray-400 text-sm">
                            Smart contract structure, Babel box format, and on-chain validation rules.
                          </p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors shrink-0">
                        →
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/doc/introduction/eutxo" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-green-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                          <Eye className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">
                            eUTXO & Advanced Fee Design
                          </h3>
                          <p className="text-gray-400 text-sm">
                            How Ergo’s extended UTXO model enables features like Babel Fees and composable
                            contracts.
                          </p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors shrink-0">
                        →
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

          {/* Share CTA */}
          <ShareCTA
            title="Ergo’s Babel Fees Explained: Pay Crypto Transaction Fees In Any Token"
            url="https://ergoblockchain.org/blog/babel-fees"
            description="Learn how Ergo’s Babel Fees turn gas payments into an on-chain market, letting users pay in any token while miners still receive ERG."
            subtitle="If this was useful, share it with other builders exploring better UX for DeFi and PoW smart contracts."
          />

          {/* Continue learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Continue Learning
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/blog/eutxo-vs-accounts" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Code className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Two Blockchain Models</h3>
                        <p className="text-gray-400 text-sm mb-2">
                          Why Ergo chose eUTXO and how it unlocks features like Babel Fees and advanced DeFi.
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs"
                        >
                          Technology
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/blog/storage-rent" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <Eye className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          How Storage Rent Keeps Ergo Sustainable
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          Another example of Ergo’s market-based design for long-term sustainability and
                          decentralization.
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-purple-500/10 border-purple-500/30 text-purple-400 text-xs"
                        >
                          Sustainability
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

          {/* Email capture */}
          <FinalCTASimple
            title="Join the resistance"
            description="Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen."
          />
        </div>
      </div>
    </BackgroundWrapper>
  )
}



