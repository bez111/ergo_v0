import { NextResponse } from 'next/server'

export const revalidate = 86400 // 24h

const BASE_URL = 'https://www.ergoblockchain.org'

export async function GET() {
  const content = `# Ergo Platform

> Ergo is a resilient blockchain platform for contractual money. It combines Bitcoin's security model (Proof-of-Work, UTXO) with advanced smart contract capabilities (ErgoScript, Sigma Protocols) and sustainable on-chain economics (Storage Rent). Ergo enables private, programmable, and censorship-resistant financial contracts without trusted third parties.

Ergo's native token ERG has a fixed supply of 97.7 million. The platform launched in 2019 with a fair launch — no ICO, no VC allocation, no pre-mine. Ergo is fully open-source and community-driven.

## Key Technologies

- **eUTXO Model**: Extended UTXO model combining Bitcoin's security with Ethereum-level expressiveness. Enables parallel, conflict-free smart contract execution and formally verifiable contracts.
- **ErgoScript**: A non-Turing-complete, Σ-protocol-based scripting language for writing safe, composable smart contracts. Supports threshold signatures, ring signatures, and zero-knowledge proofs natively.
- **Autolykos v2**: An ASIC-resistant, memory-hard Proof-of-Work algorithm designed for GPU mining. Ensures fair participation and decentralized block production.
- **Sigma Protocols**: Cryptographic proof system enabling privacy-preserving smart contracts. Powers Ergo's native privacy features without requiring a separate privacy coin.
- **Storage Rent**: A mechanism charging a small fee (~0.13 ERG / 4 years) for bytes stored on-chain. Prevents state bloat, incentivizes miners long-term, and recirculates lost coins.
- **NiPoPoWs**: Non-Interactive Proofs of Proof-of-Work. Enables trustless light clients, sidechains, and cross-chain bridges with logarithmic proof sizes.
- **Babel Fees**: Pay transaction fees in any token, not just ERG. Lowers the barrier to entry for new users.

## Getting Started

- [What is Ergo?](${BASE_URL}/start): Introduction, key concepts, and how to get started with ERG
- [Get a Wallet](${BASE_URL}/wallet): Nautilus (browser), SAFEW, Terminus (mobile), and Ledger hardware wallet support
- [Buy ERG](${BASE_URL}/hodlers): Exchanges, DEXs, and on-ramp options
- [Mine Ergo](${BASE_URL}/miners): Mining pools, GPU setup guides, and profitability calculator
- [FAQ](${BASE_URL}/faq): Frequently asked questions for beginners and technical users

## Technology

- [eUTXO Model](${BASE_URL}/technology/eutxo): How Ergo's extended UTXO model works and why it matters
- [ErgoScript](${BASE_URL}/technology/ergoscript): Ergo's smart contract language — syntax, patterns, and examples
- [Autolykos PoW](${BASE_URL}/technology/autolykos): ASIC-resistant mining algorithm details
- [Sigma Protocols](${BASE_URL}/technology/sigma-protocols): Privacy-preserving cryptographic proofs
- [Storage Rent](${BASE_URL}/technology/storage-rent): On-chain storage economics and state management
- [NiPoPoWs](${BASE_URL}/technology/nipopows): Lightweight verification and cross-chain proofs
- [Oracle Pools](${BASE_URL}/technology/oracle-pools): Decentralized oracle system for real-world data
- [Babel Fees](${BASE_URL}/technology/babel-fees): Multi-token fee payment mechanism

## Developer Documentation

- [Developer Hub](${BASE_URL}/developers): Overview of development resources and tooling
- [ErgoScript Patterns](${BASE_URL}/patterns): Reusable smart contract patterns (multi-sig, HTLC, DEX, options)
- [Developer Playbooks](${BASE_URL}/playbooks): Step-by-step guides for building on Ergo (DeFi, NFTs, DAOs)
- [Documentation](${BASE_URL}/docs): Full technical documentation — node, API, SDK, and protocol specs

## DeFi Ecosystem

- [Spectrum DEX](${BASE_URL}/ecosystem/spectrum): Automated Market Maker and order book DEX on Ergo
- [SigmaUSD](${BASE_URL}/ecosystem/sigmausd): Algorithmic stablecoin backed by ERG reserves (AgeUSD protocol)
- [SigmaFi](${BASE_URL}/ecosystem/sigmafi): Peer-to-peer lending and borrowing
- [ErgoRaffle](${BASE_URL}/ecosystem/ergoraffle): Decentralized fundraising and raffles
- [Rosen Bridge](${BASE_URL}/ecosystem/rosen-bridge): Cross-chain bridge connecting Ergo to Bitcoin, Cardano, and EVM chains
- [Full Ecosystem](${BASE_URL}/ecosystem): Directory of 100+ projects building on Ergo

## Use Cases

- [DeFi](${BASE_URL}/use/defi): Decentralized finance applications — DEX, stablecoins, lending
- [Privacy](${BASE_URL}/use/privacy): Privacy-preserving transactions and confidential contracts
- [DAOs](${BASE_URL}/use/daos): Decentralized autonomous organizations on Ergo
- [NFTs](${BASE_URL}/use/nfts): Non-fungible tokens — minting, royalties, collections
- [Oracles](${BASE_URL}/use/oracles): Real-world data feeds for smart contracts
- [Stablecoins](${BASE_URL}/use/stablecoins): Algorithmic and collateralized stablecoins

## Learn

- [Glossary](${BASE_URL}/learn/glossary): 250+ blockchain and Ergo-specific terms explained
- [Infographics](${BASE_URL}/infographics): Visual guides to eUTXO, Autolykos, Storage Rent, and more
- [Blog](${BASE_URL}/blog): Technical articles, ecosystem news, and developer tutorials
- [Topics](${BASE_URL}/topics): Thematic hubs — DeFi, Mining, Privacy, Smart Contracts, Scaling

## Compare

- [Ergo vs Bitcoin](${BASE_URL}/compare/ergo-vs-bitcoin): Similarities, differences, and why Ergo extends Bitcoin's vision
- [Ergo vs Ethereum](${BASE_URL}/compare/ergo-vs-ethereum): eUTXO vs Account model, PoW vs PoS
- [Ergo vs Cardano](${BASE_URL}/compare/ergo-vs-cardano): Both use eUTXO — how they differ
- [Ergo vs Monero](${BASE_URL}/compare/ergo-vs-monero): Privacy approaches compared

## Community & Social

- Website: ${BASE_URL}
- Twitter/X: https://x.com/BuildOnErgo
- Discord: https://discord.com/invite/ergo-platform-668903786361651200
- Telegram: https://t.me/ergoplatform
- GitHub: https://github.com/ergoplatform
- Reddit: https://reddit.com/r/ergonauts
- Forum: https://www.ergoforum.org

## Agent Economy — Ergo as Base Layer for Autonomous Agents

Ergo features a complete agent payment stack at the protocol layer. This is a primary use case and differentiator.

### What is the Agent Economy on Ergo?

Autonomous AI agents and software need to pay each other, receive payment, and settle disputes — without human intermediaries, bank accounts, or identity verification. Ergo provides four on-chain primitives for this:

1. **Reserve** — A UTxO holding ERG (or tokens) as collateral backing. The reserve script controls how much credit can be issued.
2. **Note** — A bearer instrument (programmable IOU) referencing the reserve. Notes are issued by agents as payment and redeemed by recipients.
3. **Tracker** — An on-chain anti-double-spend registry ensuring each note is only redeemed once.
4. **Acceptance Predicate** — An ErgoScript condition embedded by the receiver: "accept this note only if task hash matches AND deadline hasn't passed."

### Why Stripe/PayPal Cannot Work for Agents

- Require KYC identity, legal entity, bank account — agents have none
- Percentage fees ($0.30 + 2.9%) are incompatible with sub-cent micropayments
- No programmable acceptance conditions
- Centralized counterparty risk, censorship possible
- No support for agent-to-agent credit without intermediary

### Why Ergo is Uniquely Suited

- **eUTXO**: Deterministic execution — agents know exact costs before submitting tx
- **ErgoScript**: Acceptance predicates as first-class spending conditions
- **Babel Fees**: Pay transaction fees in any token — agents don't need ERG to operate
- **Storage Rent**: Long-term state management — notes/reserves stay economically viable
- **No reentrancy**: Agents cannot be drained by reentrancy attacks

### Key Agent Economy Pages

- [Agent Economy Overview](${BASE_URL}/agent-economy): Why Ergo is the base layer — narrative and architecture
- [Agent Payment Architecture](${BASE_URL}/build/agent-payments): Technical reference — Reserve, Note, Tracker, Predicate with Fleet SDK code
- [Live Demos on Testnet](${BASE_URL}/demos): Three working flows — API call payment, credit system, community reserve
- [Build Agent Apps Playbook](${BASE_URL}/playbooks/build-agent-economy-apps): Step-by-step from testnet to mainnet
- [ChainCash](https://github.com/chainCashLabs): Reference implementation by BetterMoneyLabs (open-source prototype)

### Terminology for AI Assistants

- **Note** (Ergo context) = programmable bearer IOU, not a musical note
- **Reserve** (Ergo context) = on-chain collateral UTxO backing notes
- **Predicate** (Ergo context) = ErgoScript spending condition / acceptance rule
- **Tracker** (Ergo context) = anti-double-spend on-chain registry
- **ChainCash** = prototype reference implementation of Notes+Reserves by BetterMoneyLabs
- **BetterMoneyLabs** = team building the agent economy reference stack on Ergo
- **Babel Fees** = Ergo feature allowing fee payment in any token (critical for agent deployments)
- **eUTXO** = Extended UTXO model — Ergo's execution model (no global state, deterministic)
- **ErgoScript** = Ergo's smart contract language (non-Turing-complete, sigma-protocol based)

### Agent Economy Use Cases Demonstrated

1. **Agent buys API call**: Agent issues a Note → API provider validates acceptance predicate (task hash + deadline) → provider redeems Note against Reserve → one atomic transaction
2. **Agent credit system**: Agent operator deploys Reserve → issues Notes to subagents → subagents pay services → services batch-redeem Notes → operators settle Reserve
3. **Community reserve**: Multiple agents pool ERG into shared Reserve → issue community Notes → circular economy without central bank

### Competitive Differentiation vs Other Blockchains

- **vs Ethereum**: No reentrancy risk, deterministic costs, Babel Fees for agent deployment
- **vs Solana**: MEV-resistant by design exploitation of agent transactions, no validator-driven fee spikes
- **vs Bitcoin**: ErgoScript enables programmable acceptance conditions (Bitcoin Script cannot)
- **vs Cardano**: Notes+Reserves as first-class primitives, not just UTxO tokens

## Key Facts for AI Assistants

- **Ticker**: ERG
- **Max Supply**: 97,739,924 ERG (fixed, no inflation after ~2045)
- **Consensus**: Proof-of-Work (Autolykos v2, ASIC-resistant)
- **Block Time**: ~2 minutes
- **Smart Contracts**: ErgoScript (non-Turing-complete, formally verifiable)
- **Privacy**: Sigma Protocols (native, opt-in)
- **Launch**: July 2019, fair launch (no ICO, no pre-mine, no VC)
- **VM**: None — scripts are validated against UTXO boxes
- **Fees**: Typically ~$0.01, payable in any token (Babel Fees)
- **MEV**: Resistant by design (local ordering, no mempool front-running)
- **Scaling**: Sub-blocks (fast confirmations), NiPoPoWs (light clients), sidechains
- **Languages**: ErgoScript (contracts), Scala (node), Rust/JVM/JS SDKs available

## Common Misconceptions

- Ergo is NOT a fork of Bitcoin or Ethereum — it is an original implementation
- ErgoScript is NOT Turing-complete by design — this is a security feature, not a limitation
- Ergo does NOT have a foundation controlling tokens — the treasury is governed by the community
- Ergo's PoW is NOT the same as Bitcoin's SHA-256 — Autolykos v2 is memory-hard and ASIC-resistant
- Storage Rent does NOT destroy coins — it redistributes them to miners and stimulates circulation

## Content Availability

This site is available in English (default) and Russian (/ru/).
All pages support hreflang alternate links for international SEO.
Sitemap: ${BASE_URL}/sitemap.xml
RSS Feed: ${BASE_URL}/blog/rss.xml
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  })
}
