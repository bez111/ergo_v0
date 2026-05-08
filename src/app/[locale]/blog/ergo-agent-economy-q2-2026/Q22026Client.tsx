"use client"

/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Github,
  Package,
  Code2,
  CheckCircle,
  ArrowRight,
  Bot,
  Network,
  Zap,
  Shield,
  Coins,
  Rocket,
  Terminal,
  Layers,
  GitBranch,
  Eye,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BlogHeroImage } from "@/components/blog/blog-hero-image"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { ShareInline } from "@/components/blog/share-inline"
import { ShareCTA } from "@/components/blog/share-cta"
import { Byline } from "@/components/blog/byline"

// As of 2026-05-08 the repo migrated to bez111/accord-protocol; the old URL
// 301-redirects, but new links point at the canonical repo directly.
const REPO = "https://github.com/bez111/accord-protocol"
const REPO_LEGACY_NAME = "ergo-agent-economy"

const articleContents = [
  { label: "TL;DR", href: "#tldr" },
  { label: "What Shipped Since Launch", href: "#whats-shipped" },
  { label: "Three Packages, One Repo", href: "#packages" },
  { label: "10 Working Examples", href: "#examples" },
  { label: "Agent Framework Adapters", href: "#adapters" },
  { label: "Full Note Lifecycle", href: "#note-lifecycle" },
  { label: "Basis: Off-Chain Credit", href: "#basis" },
  { label: "What's Next", href: "#whats-next" },
  { label: "Try It in 5 Minutes", href: "#try-it" },
  { label: "FAQ", href: "#faq" },
]

const TLDR = [
  {
    icon: Package,
    title: "v0.2 — Full Note Lifecycle",
    body: "Reserve creation, Note redemption, Tracker deployment, batch settlement. The full Reserve → Note → Tracker → Acceptance Predicate pipeline ships in one SDK.",
  },
  {
    icon: Bot,
    title: "Four AI Framework Adapters",
    body: "LangChain, OpenAI function calling, CrewAI, AutoGen. Working examples in the repo. MCP server for Claude Desktop / Cursor / any MCP-compatible client.",
  },
  {
    icon: Code2,
    title: "Three Languages — One Stack",
    body: "ergo-agent-pay (TypeScript), ergo-agent-py (Python), ergo-agent-mcp (MCP server). Same primitives, different runtimes.",
  },
  {
    icon: Layers,
    title: "Basis Layer Documented",
    body: "Off-chain IOUs + on-chain settlement. Combines low-cost rapid payments with on-chain finality when trust isn't enough.",
  },
]

const PACKAGES = [
  {
    name: "ergo-agent-pay",
    runtime: "TypeScript / Node.js",
    description: "Primary SDK. ErgoAgentPay class, policy engine, LangChain + OpenAI adapters, full Note lifecycle methods. NPM-installable.",
    install: "npm install ergo-agent-pay",
    icon: Code2,
    color: "orange",
  },
  {
    name: "ergo-agent-py",
    runtime: "Python",
    description: "Python equivalent for non-Node agents. Works with LangChain Python, CrewAI, AutoGen, and any Python-native AI agent framework.",
    install: "pip install ergo-agent-py",
    icon: Terminal,
    color: "yellow",
  },
  {
    name: "ergo-agent-mcp",
    runtime: "MCP Server",
    description: "Model Context Protocol server. Plug into Claude Desktop, Cursor, or any MCP client — your AI assistant can now pay for things on Ergo testnet.",
    install: "npx ergo-agent-mcp",
    icon: Network,
    color: "cyan",
  },
]

const EXAMPLES = [
  { num: "01", name: "Basic Payment", description: "Send ERG, agent → agent. The hello-world of on-chain agent payments.", path: "examples/01-basic-payment" },
  { num: "02", name: "Note Payment", description: "Issue a programmable Note instead of raw ERG. Redeem it later.", path: "examples/02-note-payment" },
  { num: "03", name: "Acceptance Predicate", description: "Embed a task-completion condition in the Note. Receiver only redeems if condition holds.", path: "examples/03-acceptance-predicate" },
  { num: "04", name: "Orchestrator Budget", description: "Parent agent issues budgeted Notes to 3 sub-agents with per-agent acceptance predicates.", path: "examples/04-orchestrator-budget" },
  { num: "05", name: "API Payment Server", description: "Express server verifies Note on-chain before serving the response. Includes client demo.", path: "examples/05-api-payment-server" },
  { num: "06", name: "Python Agent", description: "Python/LangChain agent that pays for API calls using Ergo Notes.", path: "examples/06-python-agent" },
  { num: "07", name: "Streaming Pay", description: "Continuous micropayments for streaming services (per-token billing for LLM inference).", path: "examples/07-streaming-pay" },
  { num: "08", name: "Treasury Multisig", description: "Multi-agent treasury controlled by m-of-n signatures. Spending policy enforced on-chain.", path: "examples/08-treasury-multisig" },
  { num: "09", name: "CrewAI Agents", description: "Multi-agent crew where each agent has its own wallet and pays peers for sub-tasks.", path: "examples/09-crewai-agents" },
  { num: "10", name: "AutoGen Agent", description: "Microsoft AutoGen agent with Ergo payment tool registered for autonomous transactions.", path: "examples/10-autogen-agent" },
]

const ADAPTERS = [
  {
    name: "LangChain",
    snippet: "const tool = agent.asLangChainTool()\n// Add to LangChain agent's toolkit",
    description: "Drop-in tool that exposes pay(), issueNote(), checkNote() to any LangChain agent. Works with both JS and Python LangChain.",
  },
  {
    name: "OpenAI Function Calling",
    snippet: 'const fn = agent.asOpenAIFunction()\n// Register with chat.completions.create({ tools: [fn] })',
    description: "Returns a function definition compatible with OpenAI's tool-use API. Your GPT-4-class model can call pay() directly.",
  },
  {
    name: "CrewAI",
    snippet: "# example 09-crewai-agents\nfrom ergo_agent_py import ErgoAgent\nagent = ErgoAgent(...)",
    description: "Each CrewAI agent gets its own wallet and policy. Agents pay each other for sub-task delivery.",
  },
  {
    name: "AutoGen",
    snippet: "# example 10-autogen-agent\nautogen_agent.register_tool(ergo_pay_tool)",
    description: "Microsoft AutoGen agent with Ergo payment registered as a callable tool. End-to-end agent-to-agent settlement.",
  },
  {
    name: "MCP (Claude / Cursor / etc.)",
    snippet: "# Add to MCP config:\n{ \"ergo\": { \"command\": \"npx ergo-agent-mcp\" } }",
    description: "Model Context Protocol server. Any MCP-compatible client (Claude Desktop, Cursor, Zed, etc.) can pay on Ergo.",
  },
]

const LIFECYCLE_METHODS = [
  { name: "createReserve()", description: "Deploy a Reserve collateral box (P2PK for dev, custom ErgoScript for production)." },
  { name: "issueNote()", description: "Mint a programmable Note from an existing Reserve. Encodes value, expiry, and acceptance predicate." },
  { name: "checkNote()", description: "Fetch Note from blockchain, decode R4-R7 registers, return NoteInfo with isExpired flag." },
  { name: "redeemNote()", description: "Spend a Note, release ERG to receiver. Injects context variable 0 for predicate verification." },
  { name: "settleBatch()", description: "Redeem multiple Notes in a single transaction with per-input context variables." },
  { name: "deployTracker()", description: "Deploy an anti-double-spend Tracker box with empty spent set." },
]

const WHATS_NEXT = [
  { title: "Production audit of ergo-agent-pay", description: "Get the SDK reviewed by an external security firm before recommending it for mainnet credit issuance." },
  { title: "Standardize agent payment discovery", description: "An EIP/RFC-style spec for how agents advertise payment requirements (think: well-known endpoint or 402 response header)." },
  { title: "Reference dApp on testnet", description: "Hosted demo agent that anyone can pay; full source code published; serves as the canonical 'this is what an agentic dApp looks like.'" },
  { title: "More framework integrations", description: "DSPy, LangGraph, Vercel AI SDK, LlamaIndex — wherever AI agents are being built, ergo-agent-pay should be one npm/pip command away." },
]

export function Q22026Client() {
  return (
    <BackgroundWrapper>
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Q2 2026: Ergo Agent Economy Update", href: "/blog/ergo-agent-economy-q2-2026" },
            ]}
            className="mb-8"
          />
          <BlogHeroImage
            src="/og/blog/ergo-agent-economy-q2-2026.png"
            alt="Ergo Agent Economy Q2-2026: Quarterly progress report"
          />


          {/* Updated banner — repo migrated post-publish */}
          <div className="mb-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 px-5 py-4 text-sm text-yellow-100/90 leading-relaxed">
            <strong className="text-yellow-300 font-semibold">Updated 2026-05-08:</strong>{" "}
            The {REPO_LEGACY_NAME} repository has been migrated to{" "}
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 underline underline-offset-2 hover:text-yellow-200"
            >
              bez111/accord-protocol
            </a>{" "}
            — the new umbrella for the agreement protocol used to verify and settle autonomous agent
            work across Ergo, Rosen, Base/EVM and x402-compatible rails. Old GitHub links 301-redirect
            to the new repo. Status: <strong>testnet beta</strong> — mainnet use is blocked until signed
            audit manifests are published.
          </div>

          {/* Naming / migration map — what to import depending on which layer
              you are working at. */}
          <div className="mb-10 rounded-2xl border border-neutral-700 bg-neutral-900/60 p-5">
            <h3 className="text-base font-semibold text-white mb-2">Naming &amp; migration</h3>
            <p className="text-sm text-neutral-400 mb-4">
              The package names below didn&apos;t change during the rebrand — the post-Q2
              install commands are still valid. What changed is the umbrella: Accord
              Protocol is now the canonical name for the agreement layer, and Accord
              specs / canonical packages publish under <code className="px-1 py-0.5 bg-neutral-800 rounded text-xs">@accord-protocol/*</code>. The
              {" "}<code className="px-1 py-0.5 bg-neutral-800 rounded text-xs">ergo-agent-*</code> packages remain as the Ergo reference rail SDKs.
            </p>
            <div className="overflow-x-auto scroll-shadow-x">
              <table className="w-full min-w-[520px] text-sm border border-neutral-700 rounded-lg">
                <thead className="bg-neutral-800/60 text-neutral-300">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold">Layer</th>
                    <th className="text-left px-3 py-2 font-semibold">Canonical name</th>
                    <th className="text-left px-3 py-2 font-semibold">Use it for</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-300">
                  <tr className="border-t border-neutral-700">
                    <td className="px-3 py-2">Umbrella project</td>
                    <td className="px-3 py-2"><strong className="text-white">Accord Protocol</strong> (testnet beta)</td>
                    <td className="px-3 py-2">Specs, MCP, Accord/402, verification &amp; settlement receipts.</td>
                  </tr>
                  <tr className="border-t border-neutral-700">
                    <td className="px-3 py-2">Accord canonical packages</td>
                    <td className="px-3 py-2"><code className="text-orange-300">@accord-protocol/*</code></td>
                    <td className="px-3 py-2">Cross-rail Accord specs and shared types. Treat as not-yet-audited.</td>
                  </tr>
                  <tr className="border-t border-neutral-700">
                    <td className="px-3 py-2">Ergo reference rail (TS)</td>
                    <td className="px-3 py-2"><code className="text-orange-300">ergo-agent-pay</code></td>
                    <td className="px-3 py-2">Issue / pay Notes against a Reserve from a TypeScript agent.</td>
                  </tr>
                  <tr className="border-t border-neutral-700">
                    <td className="px-3 py-2">Ergo reference rail (Python)</td>
                    <td className="px-3 py-2"><code className="text-orange-300">ergo-agent-py</code></td>
                    <td className="px-3 py-2">Same primitives from a Python agent (LangChain, CrewAI, etc.).</td>
                  </tr>
                  <tr className="border-t border-neutral-700">
                    <td className="px-3 py-2">MCP server</td>
                    <td className="px-3 py-2"><code className="text-orange-300">ergo-agent-mcp</code></td>
                    <td className="px-3 py-2">Expose Ergo agent payments to any MCP-compatible host (e.g. Claude Desktop).</td>
                  </tr>
                  <tr className="border-t border-neutral-700">
                    <td className="px-3 py-2">Reference contracts</td>
                    <td className="px-3 py-2"><strong className="text-white">ChainCash</strong></td>
                    <td className="px-3 py-2">Open-source prototype of Note + Reserve + Tracker. Not audited, not production-ready.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-500 mt-4">
              Rule of thumb: if you&apos;re reading the cross-rail spec, look under
              {" "}<code className="px-1 py-0.5 bg-neutral-800 rounded text-[11px]">@accord-protocol/*</code>; if you&apos;re writing an Ergo agent today,
              the <code className="px-1 py-0.5 bg-neutral-800 rounded text-[11px]">ergo-agent-*</code> packages are the entry point. None of the
              above are audited yet.
            </p>
          </div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge className="bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs px-3 py-1">
                Q2 2026 · Quarterly Update
              </Badge>
              <Badge className="bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-xs px-3 py-1">
                ergo-agent-pay v0.2
              </Badge>
              <Badge className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 font-mono text-xs px-3 py-1">
                now Accord Protocol
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Q2 2026 Update: What Shipped in Ergo's Agent Economy Stack
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-2">
              Two months after the first release. Three SDK packages, ten working examples, four AI framework adapters, an MCP server, and the full Note lifecycle. Here's what changed — and what we'd like to ship next.
            </p>
            <Byline
              authorName="Ergo Developer Relations"
              authorRole="Developer Advocate · Ergo Platform"
              authorTwitter="BuildOnErgo"
              publishedDate="2026-05-06"
              modifiedDate="2026-05-06"
              readMinutes={8}
            />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="Q2 2026: What Shipped in Ergo's Agent Economy Stack"
                url="https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026"
              />
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Repo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* TL;DR */}
          <motion.section
            id="tldr"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">TL;DR</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {TLDR.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="h-full bg-black/80 border border-white/8 rounded-3xl">
                      <CardContent className="p-6">
                        <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                          <Icon className="w-4 h-4 text-orange-400" />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-base">{item.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* What's Shipped */}
          <motion.section
            id="whats-shipped"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What Shipped Since Launch</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The <code className="px-1.5 py-0.5 bg-orange-500/10 text-orange-300 rounded text-sm">ergo-agent-pay</code> SDK launched on 2026-03-18 with three examples and the basic <code className="px-1.5 py-0.5 bg-orange-500/10 text-orange-300 rounded text-sm">pay()</code> / <code className="px-1.5 py-0.5 bg-orange-500/10 text-orange-300 rounded text-sm">issueNote()</code> API. Three days later, v0.2 added the full Note lifecycle. Since then:
            </p>
            <div className="grid gap-4">
              {[
                { date: "2026-03-18", label: "v0.1.0", body: "Initial release: ErgoAgentPay class, policy engine, LangChain + OpenAI adapters, acceptance predicate helpers, NetworkClient. Examples 01-03." },
                { date: "2026-03-21", label: "v0.2.0", body: "Full Note lifecycle: createReserve(), redeemNote(), settleBatch(), deployTracker(). Examples 04-06 (orchestrator, API server, Python agent). Register decode helpers. New error codes." },
                { date: "2026-04 — early May", label: "Ecosystem build-out", body: "ergo-agent-py (Python SDK). ergo-agent-mcp (MCP server). Examples 07-10 covering streaming pay, treasury multisig, CrewAI, AutoGen. Basis off-chain credit layer documented." },
              ].map((item, i) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                >
                  <Card className="bg-black/80 border-l-4 border-l-orange-500 border-r border-y border-white/8 rounded-2xl">
                    <CardContent className="p-5">
                      <div className="flex items-baseline gap-3 mb-1.5">
                        <code className="font-mono text-xs text-orange-400">{item.date}</code>
                        <span className="font-bold text-white text-sm">{item.label}</span>
                      </div>
                      <p className="text-neutral-300 text-sm leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Packages */}
          <motion.section
            id="packages"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Three Packages, One Repo</h2>
            <p className="text-gray-400 text-sm mb-6">
              Same primitives — Reserve, Note, Tracker, Acceptance Predicate — exposed in TypeScript, Python, and over the Model Context Protocol.
            </p>
            <div className="grid gap-4">
              {PACKAGES.map((pkg) => {
                const Icon = pkg.icon
                return (
                  <Card key={pkg.name} className="bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <div>
                            <code className="font-mono font-bold text-white text-base">{pkg.name}</code>
                            <div className="text-neutral-500 text-xs mt-0.5">{pkg.runtime}</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-300 text-sm leading-relaxed mb-4">{pkg.description}</p>
                      <div className="font-mono text-xs bg-black border border-white/10 rounded-xl px-4 py-2.5 text-orange-300 overflow-x-auto">
                        <span className="text-neutral-600 select-none">$ </span>{pkg.install}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.section>

          {/* 10 Examples */}
          <motion.section
            id="examples"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">10 Working Examples</h2>
            <p className="text-gray-400 text-sm mb-6">
              Each example is self-contained and runs against Ergo testnet. No mainnet ERG required — the testnet faucet covers everything.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {EXAMPLES.map((ex) => (
                <a
                  key={ex.num}
                  href={`${REPO}/tree/main/${ex.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="h-full bg-black/80 border border-white/8 rounded-2xl hover:border-orange-500/30 hover:-translate-y-0.5 transition-all">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="font-mono text-xs text-orange-500/60 group-hover:text-orange-400 transition-colors mt-0.5 shrink-0">
                          {ex.num}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <h3 className="font-bold text-white text-sm group-hover:text-orange-100 transition-colors">{ex.name}</h3>
                            <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-orange-400 transition-colors" />
                          </div>
                          <p className="text-neutral-400 text-xs leading-relaxed">{ex.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </motion.section>

          {/* Adapters */}
          <motion.section
            id="adapters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Agent Framework Adapters</h2>
            <p className="text-gray-400 text-sm mb-6">
              Drop-in integrations for the most common AI agent frameworks. Each one is one import + one line of registration.
            </p>
            <div className="grid gap-4">
              {ADAPTERS.map((adapter) => (
                <Card key={adapter.name} className="bg-black/80 border border-white/8 rounded-2xl">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Bot className="w-4 h-4 text-orange-400" />
                      <h3 className="font-bold text-white text-base">{adapter.name}</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed mb-3">{adapter.description}</p>
                    <pre className="font-mono text-xs bg-black border border-white/10 rounded-xl px-4 py-3 text-orange-300/90 overflow-x-auto whitespace-pre"><code>{adapter.snippet}</code></pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Note Lifecycle */}
          <motion.section
            id="note-lifecycle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Full Note Lifecycle</h2>
            <p className="text-gray-400 text-sm mb-6">
              v0.2 covers the complete Reserve → Note → Tracker → Acceptance Predicate pipeline. These are the methods you call to issue, redeem, and settle programmable bearer instruments.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {LIFECYCLE_METHODS.map((m) => (
                <Card key={m.name} className="bg-black/80 border border-white/8 rounded-2xl">
                  <CardContent className="p-5">
                    <code className="font-mono text-orange-400 text-sm font-bold">{m.name}</code>
                    <p className="text-neutral-300 text-sm mt-2 leading-relaxed">{m.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-sm text-neutral-400">
              Full API reference: <a href={`${REPO}/blob/main/docs/api-reference.md`} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">docs/api-reference.md</a>
            </div>
          </motion.section>

          {/* Basis */}
          <motion.section
            id="basis"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Basis: Off-Chain Credit, On-Chain Settlement</h2>
            <Card className="bg-gradient-to-br from-orange-500/5 via-black/80 to-black/80 border border-orange-500/20 rounded-3xl">
              <CardContent className="p-6">
                <p className="text-neutral-300 leading-relaxed mb-4">
                  On-chain payments cost ERG and take seconds to confirm. For high-frequency agent commerce that's not always the right tradeoff. <strong className="text-white">Basis</strong> is the off-chain credit layer documented in the repo:
                </p>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Off-chain IOUs</strong> — payments happen between trusted parties, low fees, instant.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Credit creation</strong> — issuers can create unbacked notes within a trust relationship.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Optional reserves</strong> — when trust isn't enough, on-chain Reserves back the credit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Global settlement</strong> — redeem against on-chain reserves whenever needed.</span>
                  </li>
                </ul>
                <div className="mt-5 text-sm">
                  <a href={`${REPO}/tree/main/docs/basis`} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 inline-flex items-center gap-1.5 transition-colors">
                    <span>Read Basis docs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* What's Next */}
          <motion.section
            id="whats-next"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">What's Next</h2>
            <p className="text-gray-400 text-sm mb-6">
              Roadmap for the rest of 2026. PRs welcome — this is open source.
            </p>
            <div className="grid gap-4">
              {WHATS_NEXT.map((item, i) => (
                <Card key={item.title} className="bg-black/80 border border-white/8 rounded-2xl">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Try It */}
          <motion.section
            id="try-it"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mb-14"
          >
            <Card className="bg-gradient-to-br from-orange-500/10 via-black/80 to-black/80 border border-orange-500/30 rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-orange-400">Try It Now</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Clone, install, run — under 5 minutes.</h2>
                <pre className="font-mono text-xs sm:text-sm bg-black border border-white/10 rounded-2xl px-5 py-4 text-orange-300 overflow-x-auto whitespace-pre mb-5"><code>{`git clone ${REPO}
cd accord-protocol/examples/01-basic-payment
npm install
npm run start`}</code></pre>
                <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                  The first example sends a testnet ERG payment between two agents and prints the transaction ID. From there, walk through 02 (Notes), 03 (acceptance predicates), and 04 (orchestrator) to see the full agent payment stack.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={REPO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Clone the Repo</span>
                  </a>
                  <Link
                    href="/build/quickstart"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                  >
                    <span>Quickstart Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-neutral-300 font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl border-2 border-white/15 hover:border-white/30 transition-all text-sm"
                  >
                    <span>Architecture</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">FAQ</h2>
            <div className="grid gap-4">
              {[
                { q: "What changed in Ergo's agent economy stack since the March 2026 launch?", a: "The ergo-agent-pay SDK shipped v0.2 with the full Note lifecycle. Three packages now exist (TypeScript, Python, MCP server). Ten working examples ship with the repo, including LangChain, OpenAI, CrewAI, and AutoGen integrations." },
                { q: "Which AI agent frameworks now have native Ergo payment support?", a: "LangChain, OpenAI function calling, CrewAI, and AutoGen all have working examples. Plus an MCP server so any MCP-compatible client (Claude Desktop, Cursor) can pay on Ergo testnet." },
                { q: "Is the agent payment stack production-ready?", a: "Ergo protocol primitives are live on mainnet since 2019. The ergo-agent-pay SDK and ChainCash reference implementation are open-source prototypes — no security audits or production releases yet. Treat them as pre-production code, suitable for testnet development." },
                { q: "Where can I clone and run the examples?", a: "github.com/bez111/accord-protocol. Each example is self-contained with a README and runs against Ergo testnet — no mainnet ERG required." },
                { q: "What is the Basis layer?", a: "Off-chain credit and IOU layer built on top of Ergo's on-chain primitives. Off-chain Notes circulate cheaply between trusted parties; on-chain Reserves act as collateral and global settlement when trust isn't enough." },
              ].map((item, i) => (
                <Card key={i} className="bg-black/80 border border-white/8 rounded-2xl">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-white text-sm mb-2 flex items-start gap-2">
                      <Eye className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                      {item.q}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed pl-6">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Share CTA */}
          <ShareCTA
            title="Q2 2026: What Shipped in Ergo's Agent Economy Stack"
            url="https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026"
            description="Two months after launch — full Note lifecycle, 4 AI framework adapters, 10 working examples. Share this update with builders working on autonomous agents."
          />

          {/* Final CTA */}
          <FinalCTASimple
            title="Stay in the loop"
            description="Quarterly updates on the Ergo agent economy stack: new packages, new framework adapters, what changed in the SDK."
          />
        </div>
      </div>
    </BackgroundWrapper>
  )
}
