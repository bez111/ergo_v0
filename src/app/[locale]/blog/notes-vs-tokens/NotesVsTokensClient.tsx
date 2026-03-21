"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Coins,
  FileText,
  CheckCircle,
  XCircle,
  Bot,
  ChevronDown,
  Zap,
  Shield,
  Eye,
  Network,
  Code2,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { ShareInline } from "@/components/blog/share-inline"
import { ShareCTA } from "@/components/blog/share-cta"

const articleContents = [
  { label: "Tokens: What They Are", href: "#tokens" },
  { label: "Notes: What They Are", href: "#notes" },
  { label: "The Key Differences", href: "#differences" },
  { label: "When Agents Need Notes, Not Tokens", href: "#when-notes" },
  { label: "When Tokens Are the Right Tool", href: "#when-tokens" },
  { label: "The Composability Argument", href: "#composability" },
  { label: "FAQ", href: "#faq" },
]

const tldrItems = [
  {
    icon: Coins,
    title: "Tokens: Fungible Ownership Assets",
    description: "Native Ergo tokens are first-class citizens in the eUTXO model. No ERC-20 wrapper needed. Transferred by including in a transaction output — but no expiry, no acceptance conditions.",
  },
  {
    icon: FileText,
    title: "Notes: Programmable Bearer Instruments",
    description: "Notes are UTxOs with a spending script (acceptance predicate) and registers encoding a credit claim against a specific Reserve. They carry expiry and programmable conditions.",
  },
  {
    icon: Bot,
    title: "Notes Are Right for Agent Pipelines",
    description: "Task-conditional payments, multi-step budgets, deferred settlement, and issuer-controlled credit systems require Notes. Tokens can't encode acceptance conditions or expiry.",
  },
  {
    icon: Network,
    title: "Notes and Tokens Compose",
    description: "Notes and tokens don't compete — they work together in the same transaction. Notes handle the payment layer. Tokens handle the ownership layer. ErgoScript makes them interoperable.",
  },
]

const COMPARISON_ROWS = [
  { label: "What it represents", token: "Ownership of a fungible asset", note: "A credit claim against a specific Reserve" },
  { label: "Settlement model", token: "Transfer of ownership on-chain", note: "Deferred redemption against Reserve" },
  { label: "Acceptance conditions", token: "None — transfer is unconditional", note: "Programmable — any ErgoScript condition" },
  { label: "Expiry", token: "None — exists until spent or burned", note: "Yes — HEIGHT < expiry enforced in script" },
  { label: "Reserve backing", token: "None (or separate stablecoin mechanism)", note: "Always — Note references specific Reserve" },
  { label: "Double-spend protection", token: "eUTXO model (UTxO spent once)", note: "eUTXO model + Tracker registry" },
  { label: "Micropayment suitability", token: "Yes (same tx cost)", note: "Yes (same tx cost)" },
  { label: "Multi-agent pipelines", token: "Works but no expiry/conditions", note: "Native — conditions + expiry built in" },
  { label: "Privacy via ZK", token: "Possible with Sigma Protocols", note: "Possible with Sigma Protocols" },
  { label: "Gas payment (Babel Fees)", token: "Yes — any token", note: "Yes — any token" },
]

const WHEN_NOTES = [
  { title: "Task-conditional payments", body: "You want to pay Agent B only if they produce a specific output. Tokens can't encode 'accept only if blake2b256(output) == X.' Notes can." },
  { title: "Multi-step pipelines with budgets", body: "Orchestrator issues a budget to sub-agents. Each sub-agent has a spending limit and a deadline. Notes carry these constraints natively — tokens don't." },
  { title: "Deferred settlement", body: "Agent B accumulates Notes from multiple payers throughout the day, then redeems them in a single batch transaction against the Reserve. Tokens would require individual transfers." },
  { title: "Credit systems with issuer control", body: "The issuer (orchestrator) needs to be able to limit total outstanding credit. The Reserve contract enforces total issued Notes ≤ reserve value. No equivalent for tokens." },
]

const WHEN_TOKENS = [
  { title: "Simple unconditional payments", body: "Pay Agent B 10 units of token X — no conditions, no expiry. Just transfer. Tokens are simpler and more efficient for this." },
  { title: "Governance and staking", body: "Voting rights, staking positions, protocol ownership — these are ownership claims that don't expire and don't need acceptance conditions. Use tokens." },
  { title: "NFTs and unique assets", body: "Non-fungible items are tokens with quantity 1. Notes are always fungible bearer instruments. For unique digital assets, use tokens." },
  { title: "Long-lived liquidity positions", body: "LP tokens in a DEX represent a share of a liquidity pool indefinitely. Notes expire. Wrong tool for long-lived positions." },
]

const COMPOSABILITY_STEPS = [
  "Orchestrator holds ERG in a Reserve → issues Notes to sub-agents",
  "Sub-agents hold Notes as spendable credit → pay services with Notes",
  "Service providers accumulate Notes → redeem for ERG from Reserve",
  "Service providers receive governance tokens as bonus → hold or trade",
  "Governance token holders → vote on Reserve parameters with token weight",
]

const FAQ_ITEMS = [
  { q: "Can you use Ergo native tokens for agent payments?", a: "Yes — native tokens work for simple transfers. The limitation is no acceptance predicates and no expiry. For 'pay me when I complete task X by block Y' you need a Note, not a token." },
  { q: "What is a bearer instrument in the context of Ergo?", a: "A bearer instrument is a payment that is valid to whoever holds it — like cash. Ergo Notes are bearer instruments: any agent holding the Note UTxO can attempt to redeem it (subject to the acceptance predicate). No registry of 'who owns this Note' exists." },
  { q: "Can Notes be used as tokens in a DeFi protocol?", a: "Notes and tokens can coexist in the same transaction and reference each other. A DEX could accept Notes as payment. An escrow could hold tokens and release against a Note. The primitives compose." },
  { q: "Why doesn't Ethereum have bearer instruments?", a: "Ethereum's account model tracks balances in contract state — ownership is recorded in a mapping, not in a UTxO. A true bearer instrument requires the payment itself to carry its spending conditions, which requires the eUTXO model." },
  { q: "What's the difference between a Note and a cheque?", a: "A cheque is a bearer instrument backed by a bank account, with no programmable acceptance conditions, requiring a trusted bank intermediary. A Note is backed by an on-chain Reserve, has programmable conditions enforced by miners, and requires no intermediary. Same economic concept, trustless execution." },
]

export function NotesVsTokensClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Notes vs Tokens: Why Bearer Instruments Matter for Agents", href: "/blog/notes-vs-tokens" },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Notes vs Tokens: Why Bearer Instruments Matter for Agents
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              Ergo has native tokens — fungible assets you can mint, transfer, and burn. It also has Notes — programmable bearer instruments backed by a Reserve with acceptance conditions and expiry. For most uses, tokens are fine. For agent payment pipelines, Notes are the right tool. This post explains exactly why — and when to use each.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="Notes vs Tokens: Why Bearer Instruments Matter for Agents"
                url="https://www.ergoblockchain.org/blog/notes-vs-tokens"
              />
            </div>
          </motion.div>

          {/* TL;DR */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">TL;DR</h2>
            <div className="grid gap-2">
              {tldrItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="bg-black border border-white/10 rounded-xl">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <item.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">{item.title}</h3>
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 2xl:hidden"
          >
            <Card className="bg-black/80 border border-orange-500/20 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-400" />
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

          {/* Tokens: What They Are */}
          <motion.section
            id="tokens"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Tokens: What They Are</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ergo native tokens are first-class citizens in the eUTXO model. No ERC-20 wrapper, no separate contract — they live directly in UTxOs alongside ERG.
              </p>
              <div className="space-y-3">
                {[
                  "Minted in any transaction — just declare a new token ID",
                  "Fungible: 1 unit of token X = 1 unit of token X, always",
                  "Transferred by including in a transaction output",
                  "Spent exactly once per UTxO — eUTXO model handles double-spend",
                  "Can pay transaction fees via Babel Fees",
                  "No expiry, no acceptance conditions, no reserve backing by default",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Notes: What They Are */}
          <motion.section
            id="notes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Notes: What They Are</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Notes are a higher-level concept built on top of eUTXO. They're UTxOs with a specific structure — a spending script (acceptance predicate) and registers encoding credit claim data.
              </p>
              <div className="space-y-3">
                {[
                  "Reference a Reserve box by ID (R4) — the backing collateral",
                  "Carry an expiry block height (R5) — void after deadline",
                  "Optionally carry an acceptance predicate (R6+) — task hash, credential, etc.",
                  "Transferred between agents as payment instruments",
                  "Redeemed against Reserve at settlement — Reserve pays out ERG",
                  "Tracker prevents double-redemption of the same Note",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Key insight:</strong> a Note is not a token. It's a credit claim — a promise backed by a specific Reserve, with conditions. The economic analogy is a cheque (bearer instrument) rather than cash (token).
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Key Differences */}
          <motion.section
            id="differences"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Key Differences</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Property</th>
                    <th className="text-left px-4 py-3 text-orange-400 font-medium">Note</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">Token</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                      <td className="px-4 py-3 text-gray-400">{row.label}</td>
                      <td className="px-4 py-3 text-gray-200">{row.note}</td>
                      <td className="px-4 py-3 text-gray-500">{row.token}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* When Agents Need Notes */}
          <motion.section
            id="when-notes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">When Agents Need Notes, Not Tokens</h2>
            <div className="grid gap-6">
              {WHEN_NOTES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                          <FileText className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* When Tokens Are the Right Tool */}
          <motion.section
            id="when-tokens"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">When Tokens Are the Right Tool</h2>
            <div className="grid gap-6">
              {WHEN_TOKENS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-blue-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Coins className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Composability */}
          <motion.section
            id="composability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Composability Argument</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Notes and tokens don't compete — they compose. A real agent economy application uses both.
              </p>
              <div className="space-y-3">
                {COMPOSABILITY_STEPS.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-orange-400 font-mono text-sm font-bold shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                The primitives are orthogonal and composable. Notes handle the payment layer. Tokens handle the ownership layer. ErgoScript makes them interoperable in the same transaction.
              </p>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                >
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <Card className="bg-black border border-white/10 rounded-xl hover:border-orange-400/40 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold text-left">{item.q}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-orange-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-black/50 border border-white/5 rounded-xl">
                        <p className="text-gray-300 leading-relaxed">{item.a}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <ShareCTA
            title="Notes vs Tokens: Why Bearer Instruments Matter for Agents"
            description="Notes and tokens are different tools for different jobs. Understanding which to use is the key to building correct agent payment systems on Ergo."
            url="https://www.ergoblockchain.org/blog/notes-vs-tokens"
          />

          {/* Continue Learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/agent-economy-manifesto" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <Bot className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">The Agent Economy Manifesto</h3>
                        <p className="text-gray-400 text-sm mb-2">Why every AI system will need to pay and be paid — and the Ergo primitive stack</p>
                        <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 text-xs">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/ergoscript-acceptance-predicates" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Code2 className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">ErgoScript Acceptance Predicates</h3>
                        <p className="text-gray-400 text-sm mb-2">How task completion logic lives inside the Note — enforced by miners</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Development
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.section>

          <FinalCTASimple />
        </div>
      </div>
    </BackgroundWrapper>
  )
}
