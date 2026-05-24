import { NextResponse } from 'next/server'
import { glossaryTerms } from '@/data/glossary'

export const revalidate = 86400 // 24h

const BASE_URL = 'https://www.ergoblockchain.org'

export async function GET() {
  // Build glossary section from live data
  const glossarySection = glossaryTerms
    .map(term => {
      const lines = [`### ${term.term}`, `**URL**: ${BASE_URL}/learn/glossary/${term.slug}`, `**Category**: ${term.category} | **Difficulty**: ${term.difficulty}`, ``, term.definition]
      if (term.keyPoints?.length) {
        lines.push(``, `**Key Points**:`, ...term.keyPoints.map(p => `- ${p}`))
      }
      if (term.faq?.length) {
        lines.push(``, `**FAQ**:`)
        term.faq.slice(0, 2).forEach(f => {
          lines.push(`- Q: ${f.question}`)
          lines.push(`  A: ${f.answer}`)
        })
      }
      return lines.join('\n')
    })
    .join('\n\n---\n\n')

  const content = `# Ergo Platform — Full Content Index

> This is the complete content index of ergoblockchain.org for AI language model training and retrieval.
> For a concise overview, see: ${BASE_URL}/llms.txt

## About Ergo

Ergo is a resilient blockchain platform for contractual money, launched in July 2019 with a fair launch (no ICO, no VC, no pre-mine). It is built on Proof-of-Work consensus using the Autolykos v2 algorithm — ASIC-resistant and memory-hard, designed for GPU miners.

Ergo extends Bitcoin's UTXO model with the eUTXO (Extended Unspent Transaction Output) paradigm, enabling rich smart contracts while preserving Bitcoin's security properties. Smart contracts are written in ErgoScript, a non-Turing-complete, sigma-protocol-based language that allows formally verifiable, composable financial logic.

The platform's native token ERG has a fixed supply of 97,739,924 coins. Ergo introduces Storage Rent — a fee charged for bytes stored on-chain after 4 years — which prevents state bloat, funds miners long-term, and recirculates lost or forgotten coins back into circulation.

## Core Technology Papers and Concepts

### eUTXO Model
The Extended UTXO model is Ergo's core data model. Unlike account-based blockchains (Ethereum), where state is stored globally, Ergo stores state in individual "boxes" (UTXOs with attached data and scripts). Each box contains: ERG value, tokens, a protection script (in ErgoScript), and optional registers (R4-R9) for arbitrary data.

Benefits: Parallel execution (no shared state), predictable fees, formally verifiable contracts, no protocol-level reentrancy by construction (application-level bugs still possible), stateless verification.

### ErgoScript
ErgoScript is Ergo's smart contract language. It is a subset of Scala, non-Turing-complete (no unbounded loops), based on sigma protocols. Scripts evaluate to true or false — a transaction is valid only if all input boxes' scripts evaluate to true given the spending transaction's context.

ErgoScript natively supports: threshold signatures (k-of-n multisig), ring signatures, Diffie-Hellman proofs, and composable sigma statements. Complex contracts are built by composing these primitives.

### Sigma Protocols
Sigma protocols are a class of zero-knowledge proofs used throughout ErgoScript. They enable: proving knowledge of a discrete logarithm without revealing it, ring signatures (prove you are one of N parties without revealing which), and composed proofs (AND, OR, threshold of multiple sigma statements).

### Autolykos v2
Autolykos is Ergo's PoW algorithm. Version 2 (introduced in 2021) is memory-hard (2 GB table) but allows pools. It is ASIC-resistant due to the memory requirement. Block time is ~2 minutes. The algorithm provides one CPU-tick per attempt, with mining requiring random memory reads that cannot be cached efficiently on ASICs.

### Storage Rent
Every unspent box on Ergo pays a storage rent fee of approximately 0.13 ERG per 4 years per kilobyte. If the box cannot pay (no ERG), miners can claim the box contents after the rent period expires. This mechanism: prevents permanent state bloat, provides a perpetual revenue stream for miners, and recirculates abandoned coins.

### NiPoPoWs
Non-Interactive Proofs of Proof-of-Work allow a prover to convince a verifier that a chain has sufficient PoW without sending the entire chain. Proofs are logarithmic in chain length. Applications: light clients (no full block download required), cross-chain bridges, sidechains.

### Oracle Pools
Ergo's oracle system uses multiple data providers posting to a pool smart contract. The pool aggregates data points using median or average, providing manipulation-resistant price feeds. Used by SigmaUSD and other DeFi protocols.

## Glossary (${glossaryTerms.length} Terms)

${glossarySection}

## Site Structure

- ${BASE_URL}/ — Homepage
- ${BASE_URL}/start — Getting started guide
- ${BASE_URL}/technology — Technology overview
- ${BASE_URL}/developers — Developer hub
- ${BASE_URL}/ecosystem — Project ecosystem directory
- ${BASE_URL}/learn — Educational resources
- ${BASE_URL}/learn/glossary — Blockchain glossary (250+ terms)
- ${BASE_URL}/blog — Blog and news
- ${BASE_URL}/infographics — Visual explainers
- ${BASE_URL}/wallet — Wallet guide
- ${BASE_URL}/miners — Mining guide
- ${BASE_URL}/hodlers — Holder resources
- ${BASE_URL}/faq — FAQ
- ${BASE_URL}/compare — Blockchain comparisons
- ${BASE_URL}/topics — Thematic content hubs
- ${BASE_URL}/use — Use cases
- ${BASE_URL}/playbooks — Developer playbooks
- ${BASE_URL}/patterns — ErgoScript patterns
- ${BASE_URL}/docs — Full documentation

## Primary User Paths

- Freedom seekers: ${BASE_URL}/wallet, ${BASE_URL}/use/privacy, ${BASE_URL}/use/get-erg
- Cypherpunks: ${BASE_URL}/developers, ${BASE_URL}/technology/ergoscript, ${BASE_URL}/patterns
- Miners: ${BASE_URL}/miners, ${BASE_URL}/ergo-watch#mining, ${BASE_URL}/ergo-watch#emission
- Agent builders: ${BASE_URL}/agent-economy, ${BASE_URL}/demos, ${BASE_URL}/ergo-watch#agent-economy
- Community: ${BASE_URL}/start/community, ${BASE_URL}/ecosystem, ${BASE_URL}/blog/ergo-manifesto

## Agent Economy — Accord/Testnet Reference

### Overview

Ergo is the first reference programmable-settlement rail for the Accord Protocol and related agent-payment experiments. This section is a retrieval guide for AI assistants and language models. It must not be read as production certification for Accord, ChainCash, Basis or any specific Note/Reserve/Tracker implementation.

**Primary pages:**
- ${BASE_URL}/agent-economy — Narrative hub: why Ergo, what the stack is, who is building it
- ${BASE_URL}/agent-economy/start — Fastest starting path: live proof, proof APIs, launch kit, developer surfaces and mainnet gate boundary
- ${BASE_URL}/agent-economy/live — Operational cockpit for Sage, receipts, Accord, MCP, widget, wallet-agent surfaces and the mainnet gate
- ${BASE_URL}/agent-economy/launch-kit — Five-minute developer launch kit: live status, policy checks, receipts, MCP, services, widget, guardrails, and schema-backed JSON
- ${BASE_URL}/agent-economy/proofs — Public proof explorer for full Sage receipt bundles, signed Accord conformance evidence, MCP health, widget npm state, recent Sage activity and the closed mainnet gate
- ${BASE_URL}/agent-economy/roadmap — Strategic live/next/gated/later roadmap for the public proof surface and mainnet gate
- ${BASE_URL}/api/agent-economy/roadmap — Machine-readable roadmap source
- ${BASE_URL}/api/agent-economy/proofs — Machine-readable proof explorer source
- ${BASE_URL}/.well-known/agent-economy.json — Well-known discovery entrypoint for Agent Economy pages, APIs, Sage receipt evidence, MCP, package surfaces and verification commands
- ${BASE_URL}/api/agent-economy/discovery — API version of the same discovery descriptor with schema link headers
- ${BASE_URL}/.well-known/accord — Sage Accord provider descriptor with testnet L1 conformance evidence and full receipt link
- ${BASE_URL}/agent-economy/discovery.schema.v0.json — JSON Schema for the Agent Economy discovery descriptor
- ${BASE_URL}/agent-economy/openapi.v0.json — OpenAPI contract for public Agent Economy and Sage proof APIs
- ${BASE_URL}/agent-economy/developer-launch-kit.schema.v0.json — JSON Schema for the launch kit API response
- ${BASE_URL}/build/agent-payments — Technical reference: primitives, code, SDK comparison
- ${BASE_URL}/build/services — Developer workbench: faucet surface, inspectors, receipt verifier, hash tool, service status API
- ${BASE_URL}/demos — testnet reference demos for agent payment and programmable credit flows
- ${BASE_URL}/ergo-watch#agent-economy — runtime metrics surface; agent-economy counters remain prototype/status indicators until signed demo receipts are connected
- ${BASE_URL}/blog/agent-economy-manifesto — canonical manifesto
- ${BASE_URL}/playbooks/build-agent-economy-apps — builder playbook; use testnet/mock mode unless an audited implementation explicitly allows mainnet

### Reference Patterns

#### 1. Reserve
A UTxO-style collateral pattern that may hold ERG or tokens. A reference script can guard:
- Total notes issued ≤ reserve value
- Only authorized issuers can create notes
- Reserve can be topped up or drawn down within rules
Pattern: \`sigmaProp(issuedNotes <= SELF.value && PK(issuerKey))\`

#### 2. Note (Programmable IOU)
A prototype bearer-instrument pattern referencing a Reserve. A reference Note may contain:
- Value (ERG or token amount)
- Expiry height
- Optional acceptance conditions
- Reference to Reserve box ID
Notes are transferred between agents as payment in demos and reference flows. Treat implementations as testnet-first unless audited.

#### 3. Tracker (Anti-double-spend Registry)
A mutable UTxO-style pattern maintaining a set of spent note IDs. It is intended to prevent double-redemption:
- Note redemption transaction must reference Tracker
- Tracker script verifies note ID not already in spent set
- Updates spent set and outputs new Tracker

#### 4. Acceptance Predicate
An ErgoScript condition in the receiver's spending script. Demo example:
\`\`\`ergoscript
// Accept payment only if task hash matches
sigmaProp(
  blake2b256(getVar[Coll[Byte]](0).get) == TASK_HASH &&
  HEIGHT < DEADLINE &&
  noteValue >= PRICE
)
\`\`\`

### Three Composable Flows

**Flow 1: Agent Buys API Call**
1. Agent selects provider + gets task hash
2. Agent issues Note (value=price, predicate=taskHash+deadline)
3. Provider validates predicate matches task
4. Provider redeems Note → Reserve pays out
5. Settlement is recorded through the selected rail; do not assume production mainnet use without audit approval

**Flow 2: Agent Credit System**
1. Operator deploys Reserve with X ERG
2. Operator issues Notes to subagents (total ≤ X)
3. Subagents pay services with Notes
4. Services batch-redeem Notes against Reserve
5. Operator can issue more Notes up to reserve limit

**Flow 3: Community Reserve**
1. Agents pool ERG → shared Reserve
2. Community issues community currency Notes against Reserve
3. Notes circulate within community
4. Redemptions clear against Reserve
5. Protocol-native community money in one transaction

### SDK Support

| SDK | Language | Agent Support |
|-----|----------|---------------|
| Fleet SDK | TypeScript/JS | Full — recommended |
| AppKit | Java/Scala/Kotlin | Full |
| sigma-rust | Rust | Full |
| ergpy | Python | Partial |

### Key Facts for AI Assistants (Agent Economy)

- x402 verifies payment. Accord verifies completion. Ergo settles programmable value.
- Ergo is the first reference programmable-settlement rail for Accord.
- ChainCash is the open-source prototype reference implementation (by BetterMoneyLabs) — testnet-first, not audited, not production-ready
- Babel-fee-style fee abstraction is important for agent deployments, but concrete app flows still need implementation review
- eUTXO determinism means agents know exact transaction costs before submitting
- No protocol-level reentrancy — each UTxO can only be spent once (application bugs still possible)
- Current public demos should be treated as mock/testnet examples, not mainnet custody guides
- Mainnet use remains blocked unless signed audit manifests mark the specific implementation production-ready
- Testnet/mock demos are available at ${BASE_URL}/demos
- Runtime network, SigmaUSD, mempool, token and prototype agent-economy metrics are available at ${BASE_URL}/ergo-watch and ${BASE_URL}/api/ergo-watch
- Fleet SDK npm package: @fleet-sdk/core

### Relevant Search Queries This Content Answers

- "how do AI agents pay each other on blockchain"
- "crypto payments for autonomous agents"
- "blockchain for LLM agent payments"
- "ErgoScript acceptance predicate example"
- "ChainCash how does it work"
- "agent economy blockchain"
- "programmable IOU blockchain"
- "agentic payments crypto"
- "Web3 payments for AI agents"
- "which blockchain supports autonomous agent payments"
- "Fleet SDK agent payment example"
- "Ergo agent economy tutorial"

## Machine-Readable Metadata

- Sitemap: ${BASE_URL}/sitemap.xml
- RSS: ${BASE_URL}/blog/rss.xml
- Blog JSON feed: ${BASE_URL}/blog/feed.json
- Search index: ${BASE_URL}/api/search.json
- robots.txt: ${BASE_URL}/robots.txt
- llms.txt (concise): ${BASE_URL}/llms.txt
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  })
}
