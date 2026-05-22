#!/usr/bin/env node
/**
 * Sage RAG index builder.
 *
 * Reads canonical site sources (blog posts + curated key-page snippets)
 * and writes a flat JSON corpus to src/lib/sage/index.json. The runtime
 * (src/lib/sage/retrieve.ts) does BM25 over this file at request time.
 *
 * Run with:  node scripts/build-sage-index.mjs
 * Or via:    npm run sage:index   (added to package.json scripts)
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join, resolve } from "node:path"
import matter from "gray-matter"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, "..")
const BLOG_DIR = join(ROOT, "src/content/blog")
const OUT_DIR = join(ROOT, "src/lib/sage")
const OUT_FILE = join(OUT_DIR, "index.json")

const MAX_WORDS_PER_CHUNK = 450
const CHUNK_OVERLAP_WORDS = 60

function chunkText(text, maxWords = MAX_WORDS_PER_CHUNK, overlap = CHUNK_OVERLAP_WORDS) {
  const words = text.split(/\s+/).filter(Boolean)
  if (words.length <= maxWords) return [words.join(" ")]
  const chunks = []
  const step = maxWords - overlap
  for (let i = 0; i < words.length; i += step) {
    const slice = words.slice(i, i + maxWords)
    if (slice.length < 30) break
    chunks.push(slice.join(" "))
    if (i + maxWords >= words.length) break
  }
  return chunks
}

function stripMarkdown(md) {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/[*_~]+/g, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim()
}

function stripAuthoringMeta(md) {
  const cuts = ["## Article JSON-LD draft", "## Source notes"]
  let out = md
  for (const heading of cuts) {
    const idx = out.indexOf(heading)
    if (idx >= 0) out = out.slice(0, idx).trimEnd()
  }
  return out
}

const docs = []

// ---------------------------------------------------------------- blog posts
for (const file of readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))) {
  const raw = readFileSync(join(BLOG_DIR, file), "utf8")
  const { data, content } = matter(raw)
  const slug = file.replace(/\.md$/, "")
  const url = `/blog/${slug}`
  const title = data.title || data.seo_title || slug
  const tags = Array.isArray(data.tags) ? data.tags.join(", ") : ""

  const cleanText = stripMarkdown(stripAuthoringMeta(content))
  const chunks = chunkText(cleanText)

  for (const [i, chunk] of chunks.entries()) {
    docs.push({
      id: `blog:${slug}:${i}`,
      type: "blog",
      url,
      title,
      tags,
      content: chunk,
    })
  }
}

// ---------------------------------------------------------- curated snippets
//
// Hand-picked text from the most-referenced pages so Sage can answer
// "what is the agent economy?" / "how do Notes work?" without us having
// to crawl JSX. We keep this list small and intentional — anything that
// belongs in a long blog post should be a blog post.
const CURATED = [
  {
    id: "page:agent-economy",
    type: "page",
    url: "/agent-economy",
    title: "Agent Economy on Ergo",
    tags: "agent economy, autonomous agents, programmable money",
    content:
      "The agent economy is the network of economic interactions between software agents, humans, services and markets. Autonomous AI agents will need to pay for compute, data, APIs, and other agents' work. They will also need to receive payment for their own services. Ergo is positioned as the base layer for this because of four primitives that compose: Reserves (collateral that backs credit), Notes (programmable bearer instruments that carry claims), Trackers (state machines preventing double-redemption), and Acceptance Predicates (ErgoScript rules embedded in payments that release funds only when work is verified). Together these turn a payment instrument into a small contract for work.",
  },
  {
    id: "page:build-agent-payments",
    type: "page",
    url: "/build/agent-payments",
    title: "Agent Payments Architecture",
    tags: "architecture, ErgoScript, Fleet SDK, Notes, Reserves, Trackers, Acceptance Predicates",
    content:
      "The agent payments architecture on Ergo composes four primitives. A Reserve is an on-chain box that holds collateral and defines issuance rules; it is the source of trust when an orchestrator agent issues credit to a sub-agent. A Note is a programmable bearer instrument issued against a Reserve, carrying value, expiry, and task-specific conditions. A Tracker is a singleton box that prevents double-redemption and records state changes. An Acceptance Predicate is the ErgoScript spending condition embedded in the Note: it can require a task hash, a verifier signature, a deadline, or any composition of these. The Fleet SDK provides TypeScript bindings for building these transactions; sigma-rust is the Rust port for high-performance services.",
  },
  {
    id: "page:why-ergo-for-agents",
    type: "page",
    url: "/agent-economy",
    title: "Why Ergo fits autonomous agents",
    tags: "Ergo, eUTXO, ErgoScript, Babel Fees, PoW",
    content:
      "Ergo is unusually well-suited to programmable agent payments for five reasons. First, eUTXO makes state explicit: every box has value, registers and a spending rule, so agents can reason about state transitions before submitting. Second, ErgoScript puts logic in the payment itself — the spending condition encodes the acceptance rule, enforced by miners, not by a server. Third, Babel Fees let agents pay transaction fees in any token, removing the gas-bootstrapping problem (no need for a pre-funded native wallet). Fourth, native tokens and Notes compose in a single transaction without bridging or wrapping. Fifth, Ergo is PoW with no foundation kill-switch — there is no committee that can pause agent infrastructure.",
  },
  {
    id: "page:babel-fees",
    type: "page",
    url: "/technology/babel-fees",
    title: "Babel Fees explained",
    tags: "Babel Fees, gas, fee abstraction",
    content:
      "Babel Fees are Ergo's native solution to the gas-bootstrapping problem. Normally a new wallet must hold the chain's native token (ERG) to pay miner fees. With Babel Fees, an agent can pay fees in any token by spending a 'Babel box' that converts the agent's token into ERG at a market rate set by the box owner. The agent never has to pre-fund an ERG balance. This matters for autonomous agents because fresh agents otherwise need an out-of-band funding step before they can transact at all.",
  },
  {
    id: "page:eutxo-vs-account",
    type: "page",
    url: "/technology/eutxo-model",
    title: "eUTXO vs account model",
    tags: "eUTXO, Ethereum, Bitcoin, state model",
    content:
      "Ergo uses an extended UTXO (eUTXO) state model. In contrast with Ethereum's account model — where every transaction mutates a shared global state — eUTXO transactions consume specific input boxes and create new output boxes. This eliminates entire classes of bugs: reentrancy is impossible because there is no shared state to re-enter, fees are deterministic because the cost depends only on the script and inputs (not on global contention), and parallelization is straightforward because non-overlapping transactions don't conflict. For agents, the upshot is: an agent can compute the exact transaction outcome before submitting, so there are no failed transactions due to MEV or unpredictable gas.",
  },
  {
    id: "page:accord-protocol",
    type: "page",
    url: "/agent-economy",
    title: "Accord Protocol overview",
    tags: "Accord, ChainCash, programmable credit, open source",
    content:
      "Accord Protocol is the open-source reference implementation of the agent-payment primitives on Ergo. It provides ErgoScript contracts for Reserves, Notes, Trackers, and Acceptance Predicates, plus TypeScript and Python SDKs (Fleet SDK bindings) for building transactions. There are also LangChain tools and an MCP server so LLM agents (Claude, etc.) can call Accord directly. The 'rails' in Accord refer to settlement adapters: accord-rails-ergo for native Ergo settlement, accord-rails-rosen for Rosen Bridge cross-chain, accord-rails-x402 for Coinbase x402 compatibility. Accord is in active development; reference implementations are open-source prototypes — not yet audited.",
  },
  {
    id: "page:demos-overview",
    type: "page",
    url: "/demos",
    title: "Live testnet demos",
    tags: "demos, testnet, agent API payment, MCP, x402",
    content:
      "Three live demos run on Ergo testnet showing agent-economy patterns end-to-end. (1) Agent API Payment: an agent pays per-call for an external API using a Note redeemed only when the API returns a valid response. (2) Agent Credit Note: an orchestrator issues a budget Note to a sub-agent; the sub-agent spends within the limit; unused funds expire back to the orchestrator. (3) MCP Paid Tool: a Claude/MCP-compatible tool that charges a small fee per invocation, settled on Ergo. (4) x402 Accord Gateway: an HTTP 402 payment-required flow where the server asks for an Accord Note instead of a Stripe charge. All demos are reproducible from the accord-protocol repo.",
  },
  {
    id: "page:sage-widget",
    type: "page",
    url: "/agent-economy/sage-widget",
    title: "Sage Widget embed surface",
    tags: "Sage widget, npm, React, vanilla, receipts, agent payments",
    content:
      "The Sage widget is the embeddable surface for Ergo agent-payment proof flows. The published @ergoblockchain/sage-widget v0.3.0 package was released through npm Trusted Publishing via GitHub Actions, so releases do not depend on local OTP prompts or long-lived npm tokens. v0.3.0 adds portable SagePaymentIntent JSON, wallet launcher hooks for host-owned wallet flows, a React SagePaymentWidget component, a vanilla mountSagePaymentWidget function, typed clients for quote, verify, chat stream, receipt bundle, and activity feed, tenant metadata, receipt callbacks, and status snapshots. The site exposes a live host-side demo for quote, Note box verification, receipt linking, and optional paid answer streaming. The canonical Sage host is testnet live proof: it can produce full_receipt_bundle receipts with Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON. The widget does not sign wallet transactions; it shows quote fields, emits intent JSON, accepts a Note box id, verifies through Sage, streams the answer, and links the public receipt API.",
  },
  {
    id: "page:agent-payment-quickstart",
    type: "page",
    url: "/build/agent-payments/quickstart",
    title: "Build your first paid agent flow on Ergo",
    tags: "Sage widget, quickstart, agent payments, payment intent, Ergo testnet, receipt bundle",
    content:
      "The agent payment quickstart shows the shortest path for developers: install @ergoblockchain/sage-widget, request a Sage quote, emit a portable payment intent for a host-owned wallet flow, create an Ergo testnet Note, verify the Note box id, stream the paid Sage answer, and fetch the full receipt bundle. It emphasizes testnet-only posture, no widget-side signing, and /api/sage/receipt/<id> as the source of truth for Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON.",
  },
  {
    id: "page:agent-economy-review-pack",
    type: "page",
    url: "/agent-economy/review-pack",
    title: "Agent Economy external review pack",
    tags: "audit, external review, mainnet gate, evidence pack, Sage, Accord",
    content:
      "The Agent Economy Review Pack is the reviewer handoff for the hosted Sage and Accord testnet proof. It exposes a human page and /api/agent-economy/review-pack as the machine-readable source for review scope, evidence, repositories, local commands, allowed language, forbidden claims, and mainnet gate rules. The pack is not an audit report and does not open mainnet readiness. It tells reviewers to inspect the full Sage receipt bundle, signed Accord L1 conformance evidence, provider signing key, observed testnet script identity, signer operations evidence, MCP endpoint, @ergoblockchain/sage-widget v0.3.0, and mainnet gate API. Completed external artifacts should satisfy /agent-economy/external-audit-review.schema.v0.json and /agent-economy/mainnet-script-identity.schema.v0.json, and reviewers should follow docs/agent-economy-reviewer-handoff.md. It keeps real-funds mainnet custody, third-party wallet internals, tenant deployments, exchange integrations, and unpublished production signer setup out of scope until separate review.",
  },
  {
    id: "page:wallet-agent-safety-spec",
    type: "page",
    url: "/agent-economy/wallet-agent",
    title: "Wallet-agent safety spec",
    tags: "wallet agent, local signing, policy, simulation, agent payments, receipts",
    content:
      "The Wallet-Agent Safety Spec defines how a local Ergo wallet agent should operate before any autonomous payment flow. It is a testnet-first safety boundary, not custody software and not mainnet readiness evidence. A wallet agent should parse user intent, apply local policy caps and allowlists, treat remote quotes as untrusted input, simulate the exact transaction, require human confirmation when policy says so, sign only locally inside the user wallet or local process, broadcast only the simulated transaction, and store or link a receipt bundle. The machine-readable source is /api/agent-economy/wallet-agent. The policy profile schema is /agent-economy/wallet-agent-policy.schema.v0.json and the profile template is /agent-economy/wallet-agent-policy.profile.template.json. The policy-check API at /api/agent-economy/wallet-agent/policy-check returns a deterministic allow or deny verdict for a proposed testnet action before a wallet is asked to sign. The spec forbids exposing seed phrases or private keys to remote pages, granting unbounded LLM signing authority, letting prompt text override local policy, treating a remote quote as proof of safety, or making mainnet readiness claims before external review and audit-bound script identity exist.",
  },
  {
    id: "page:wallet-agent-reference-runner",
    type: "page",
    url: "/build/agent-payments/wallet-agent-runner",
    title: "Wallet-agent reference runner",
    tags: "wallet agent, reference runner, local policy, host-owned wallet, Sage payment intent, receipt retention",
    content:
      "The Wallet-Agent Reference Runner is the practical developer path for host-owned local wallet agents on Ergo testnet. It shows how to load a wallet-agent policy profile, receive a Sage payment intent, normalize the intent into a proposed action, call /api/agent-economy/wallet-agent/policy-check, stop immediately after a denied verdict, simulate one exact transaction, ask the host-owned wallet to sign only that transaction, broadcast it, verify the Note or receipt, and retain the receipt bundle. The machine-readable reference flow is /api/agent-economy/wallet-agent/reference-flow and the public manifest is /agent-economy/wallet-agent-reference-flow.v0.json. The runner is not wallet software, not a remote signer, not custody infrastructure, and not mainnet readiness evidence.",
  },
  {
    id: "page:wallet-agent-policy-playground",
    type: "page",
    url: "/build/agent-payments/policy-playground",
    title: "Wallet-agent policy playground",
    tags: "wallet agent, policy-check, playground, developer tool, allow deny verdict",
    content:
      "The Wallet-Agent Policy Playground lets developers test the wallet-agent policy-check API interactively. A developer can change amount, spent_today, fee, recipient allowlist state, reserve allowlist state, expiry height delta, task hash, human confirmation, and receipt expectation, then inspect the live allow or deny verdict returned by /api/agent-economy/wallet-agent/policy-check. The playground demonstrates both allowed and blocked verdicts, including wrong recipient, wrong reserve, over cap amount, fee limit, stale expiry, short task hash, missing receipt, and human confirmation requirements. It is not a wallet connection, not a signer, not a broadcaster, and not custody infrastructure.",
  },
  {
    id: "page:no-stripe-comparison",
    type: "page",
    url: "/blog/agents-cant-use-stripe",
    title: "Why agents can't use Stripe",
    tags: "Stripe, payment rails, agent commerce",
    content:
      "Traditional payment rails (Stripe, card networks, ACH) are built around persistent human identities, merchant accounts, chargebacks, and legal recourse. They work well when a human authorizes each transaction. Autonomous agents are different: they may be ephemeral processes acting under delegated authority, transacting hundreds of times per minute, paying counterparties that are themselves agents (not registered merchants). For agent-to-agent settlement, you need three things existing rails don't provide: machine-readable terms (price, deadline, verifier signature embedded in the payment), bounded delegated authority (an agent should hold the smallest possible spending power for the task), and trustless work verification (settlement only when the work is done, without a shared dispute server).",
  },
]

docs.push(...CURATED)

// --------------------------------------------------------- write the corpus
mkdirSync(OUT_DIR, { recursive: true })
const generatedAt = getStableGeneratedAt(docs)
const payload = {
  generatedAt,
  documentCount: docs.length,
  docs,
}
writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2))

console.log(
  `[sage:index] ${docs.length} chunks (${docs.filter((d) => d.type === "blog").length} blog, ${docs.filter((d) => d.type === "page").length} curated) → ${OUT_FILE}`,
)

function getStableGeneratedAt(nextDocs) {
  if (!existsSync(OUT_FILE)) return new Date().toISOString()

  try {
    const previous = JSON.parse(readFileSync(OUT_FILE, "utf8"))
    if (
      previous?.generatedAt &&
      previous?.documentCount === nextDocs.length &&
      JSON.stringify(previous.docs) === JSON.stringify(nextDocs)
    ) {
      return previous.generatedAt
    }
  } catch {
    // Fall through and stamp a new index when the previous file is unreadable.
  }

  return new Date().toISOString()
}
