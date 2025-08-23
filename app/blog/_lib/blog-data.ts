export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  slug: string
  image?: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar?: string
    bio: string
    role: string
    social: {
      twitter?: string
      github?: string
      linkedin?: string
    }
  }
  publishedAt: string
  updatedAt?: string
  readTime: number
  views: number
  likes: number
  featured?: boolean
  trending?: boolean
}

export const categories = [
  {
    id: "defi",
    name: "DeFi",
    count: 12,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "tech",
    name: "Technology",
    count: 8,
    color: "from-orange-400 to-amber-500",
  },
  {
    id: "guides",
    name: "Guides",
    count: 15,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "development",
    name: "Development",
    count: 6,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "mining",
    name: "Mining",
    count: 4,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "news",
    name: "News",
    count: 10,
    color: "from-orange-600 to-red-600",
  },
]

export const blogStats = {
  totalArticles: 128,
  totalAuthors: 24,
  totalViews: 45672,
  totalLikes: 3421,
}

export const blogPosts: BlogPost[] = [
  {
    id: "eutxo-ultimate-guide",
    title: "eUTXO Ultimate Guide: Architecture for Builders",
    description: "A clear, factual deep dive into boxes, registers, datums, and read-without-spend patterns—using Ergo and Cardano as concrete eUTXO implementations.",
    content: `# eUTXO Ultimate Guide: Architecture for Builders

**Subhead:** A clear, factual deep dive into boxes, registers, datums, and read-without-spend patterns—using Ergo and Cardano as concrete eUTXO implementations.

> **Disclaimer:** Architecture guidance only. No investment advice.

---

## TL;DR

* **Extended UTXO (eUTXO)** = Bitcoin's UTXO model **plus typed on-output data checked by a validator**. You get explicit reads/writes, deterministic validation, and safe state-machine patterns. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/), [FC'20 Paper](https://fc20.ifca.ai/wtsc/WTSC2020/WTSC20_paper_25.pdf))
* **Ergo** stores app data in **registers (R4–R9)** on each box and supports **data inputs** to **read** external boxes without spending them—a clean fit for oracles and config reads. ([Ergo Docs](https://docs.ergoplatform.com/dev/data-model/box/))
* **Cardano** uses **datums** for on-box data; **CIP-31 reference inputs** (created **Nov 29, 2021**) read without spending; **CIP-33 reference scripts** (created **Nov 29, 2021**) reuse on-chain code. Both shipped in the **Vasil** era (mainnet **Sep 22, 2022**). ([Cardano CIPs](https://cips.cardano.org/cip/CIP-31), [Cardano Docs](https://docs.cardano.org/about-cardano/evolution/upgrades/vasil))
* Trade-off: strong predictability and parallelism **if** you design state sharding and off-chain coordination well. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))

---

## What "eUTXO" means (and why builders care)

**Definition (inline):** In eUTXO, each spendable output (UTXO) carries value **and** typed data (e.g., integers, bytes, token bundles). A **validator** script authorizes spending by checking that data and the transaction's inputs/outputs. Because all consumed/read boxes are listed **explicitly** in a transaction, resource use and effects are local and predictable. The formal model shows how such outputs implement **general state machines** while retaining UTXO safety properties. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/), [ACM Digital Library](https://dl.acm.org/doi/10.1007/978-3-030-54455-3_37))

**Why it matters:**

* **Determinism:** The validator sees exactly the inputs/reads the transaction declares. Fee and failure modes are easier to reason about than global-state mutations. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))
* **Parallelism by design:** Independent UTXOs can be spent in the same block; contention only appears if you centralize state into a single hot UTXO. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))

---

## Ergo's flavor of eUTXO: boxes, registers, data inputs

### Boxes & Registers (R4–R9)

Ergo calls a UTXO a **box**. Beyond value and a guarding script, a box can hold up to **six optional registers (R4–R9)** with typed data (e.g., numbers, bytes, tuples, sigma props, AVL trees). Contracts read these registers during validation. ([Ergo Docs](https://docs.ergoplatform.com/dev/data-model/box/))

*Tiny ErgoScript sketch (conceptual)*:

\`\`\`scala
val oracle = INPUTS(0)
val price  = oracle.R4[Long].get
sigmaProp(price > 0) // spend permitted only if a positive price is reported
\`\`\`

This **co-location of state with the spend** is the everyday superpower of eUTXO on Ergo. Docs detail register types and access. ([Ergo Registers](https://docs.ergoplatform.com/dev/data-model/box/registers/))

### Data inputs: read without consuming

Ergo transactions may include **data inputs**—**read-only** references to boxes. Contracts can inspect those boxes' registers during validation **without** spending them. Typical use: read an **oracle price box** or a **parameters box** alongside your normal inputs. That keeps reference state stable and reduces accidental contention. ([Ergo API](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml))

> **Version note:** The Ergo reference client **6.0.x** (release notes **June 24, 2025** and later) includes support for the **EIP-50** soft-fork process. Pin node versions when relying on new opcodes/semantics. ([Ergo Releases](https://github.com/ergoplatform/ergo/releases))

---

## Cardano's flavor of eUTXO: datums, reference inputs, reference scripts

Cardano attaches on-box data as **datums** (hash or inline). The **Vasil** era added two features that mirror Ergo's read pattern and improve code reuse:

* **CIP-31: Reference inputs** — mark some inputs as **reference** so the validator can **read** a UTXO **without** spending it. Created **Nov 29, 2021**; documented in the CIPs site and Cardano Docs. ([CIP-31](https://cips.cardano.org/cip/CIP-31), [Cardano Docs](https://docs.cardano.org/about-cardano/evolution/upgrades/vasil))
* **CIP-33: Reference scripts** — store a validator once on chain, then **reference** it from transactions to avoid reshipping full script bytes, shrinking tx size and fees. Created **Nov 29, 2021**. ([CIP-33](https://cips.cardano.org/cip/CIP-33))

**Activation:** Vasil mainnet hard fork **September 22, 2022** (features include Plutus v2, reference inputs/scripts). ([Cardano Docs](https://docs.cardano.org/about-cardano/evolution/upgrades/vasil))

*Pseudo-tx (conceptual)*:

\`\`\`
Tx:
  inputs: [ userInput ]
  referenceInputs: [ oracleBox ]        -- CIP-31 read-only
  referenceScripts: [ ammValidatorRef ] -- CIP-33 code reuse
  outputs: [ swapOut, change ]
\`\`\`

---

## eUTXO vs Account model (design-time realities)

| Criterion          | Account model (e.g., EVM)       | Plain UTXO                | **eUTXO**                                      |
| ------------------ | ------------------------------- | ------------------------- | ---------------------------------------------- |
| Where state lives  | Contract storage (global)       | N/A                       | **On outputs** (registers/datums)              |
| Reads              | Arbitrary storage reads         | N/A                       | **Explicit**: normal inputs + read-only refs   |
| Parallelism        | Contention on shared state      | High (independent spends) | **High if you shard state across UTXOs**       |
| Fee predictability | Affected by global state growth | Per-tx                    | **Per-tx; inputs declared**                    |
| Concurrency UX     | Tooling hides nonces/locks      | N/A                       | **Architectural**: avoid hot-spot UTXOs        |
| Code size          | Varies per VM                   | Script per output         | **Reference scripts** reduce tx size (Cardano) |

Right takeaway: eUTXO **rewards forethought**. Design **how many** state UTXOs you maintain, **who writes** them, and **who only reads** them (via data/reference inputs). The model's guarantees come from **explicit inputs** and the formal state-machine view. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))

---

## Ergo ↔ Cardano: concept mapping for migrating builders

| Concept            | **Ergo**                | **Cardano**                    | Why it matters                                                                               |
| ------------------ | ----------------------- | ------------------------------ | -------------------------------------------------------------------------------------------- |
| On-box data        | Registers **R4–R9**     | **Datums** (hash or inline)    | App state stored with the output. ([Ergo Registers](https://docs.ergoplatform.com/dev/data-model/box/registers/))                               |
| Read without spend | **Data inputs**         | **Reference inputs (CIP-31)**  | Many readers, one writer (oracles/config). ([Ergo API](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml), [CIP-31](https://cips.cardano.org/cip/CIP-31)) |
| Script reuse       | Script bytes on outputs | **Reference scripts (CIP-33)** | Smaller txs; shared code. ([CIP-33](https://cips.cardano.org/cip/CIP-33))                              |
| Multi-asset        | Tokens on boxes         | Token bundles on outputs       | First-class assets on both. ([EUTxOma](https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/))                                                     |

---

## Patterns that ship (mini playbooks)

### 1) Oracle-read (many readers, one writer)

* **Goal:** Use a single oracle or parameters UTXO as a **read-only reference** in many user transactions.
* **Ergo:** Include the oracle as a **data input**; validators read \`R4..R9\` without consuming it. ([Ergo API](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml))
* **Cardano:** Include the oracle as a **reference input (CIP-31)**; read its inline datum. ([CIP-31](https://cips.cardano.org/cip/CIP-31))
  **Payoff:** Readers don't serialize on a shared state; they just reference and validate.

### 2) AMM concurrency via sharded state

* **Goal:** Avoid a single "pool" UTXO bottleneck.
* **How:** Partition pool state across **multiple UTXOs** (by tick range, asset pair, or role). Swaps consume only the relevant shard; config is referenced read-only.
  **Payoff:** Independent swaps proceed in parallel because different UTXOs are touched—this is the model's native path to throughput. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))

### 3) Auctions as explicit state machines

* **Goal:** Express bidding as state transitions.
* **How:** Each bid **consumes** the current auction UTXO and **creates** the next one with updated leader/price/timeout in the datum/registers.
  **Payoff:** The chain itself enforces valid transitions; the pattern is exactly what the eUTXO paper models. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))

---

## Native multi-asset (EUTxOma)

The **EUTxOma** extension generalizes outputs to carry **token bundles** and defines **policy scripts** that control forging, keeping assets first-class in the ledger (no ad-hoc contract standards). For builders that means uniform accounting—value + bundles on outputs—and policy-driven mint/burn flows. ([EUTxOma Paper](https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/), [Plutus EUTxOma](https://plutus.cardano.intersectmbo.org/resources/eutxoma-paper.pdf))

---

## Risks & limitations (no magic promises)

* **Off-chain orchestration & box selection:** You still need an indexer/relayer to pick inputs and prevent fragmentation or races. The node API exposes both **inputs** and **dataInputs** as first-class fields—use them deliberately. ([Ergo API](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml))
* **Hot-spot UTXOs:** If you collapse all state into one output, concurrency collapses, too. The model enables parallelism; it doesn't invent it for you. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))
* **Version drift:** Features like **reference inputs/scripts** depend on specific ledger eras (**Vasil** on Cardano). Ergo's **6.0.x** introduces **EIP-50** soft-fork support; pin binary/library versions in CI. ([Cardano Docs](https://docs.cardano.org/about-cardano/evolution/upgrades/vasil), [Ergo Releases](https://github.com/ergoplatform/ergo/releases))

---

## FAQ

**Is eUTXO "more scalable" than accounts?**
It **can** be—when you design **sharded state** across many UTXOs. eUTXO gives you the tools (explicit inputs, read-only references); scalability depends on your architecture. ([IOHK](https://iohk.io/en/research/library/papers/the-extended-utxo-model/))

**When did Cardano's reference inputs/scripts go live?**
Created **Nov 29, 2021** (CIPs) and delivered in **Vasil** on **Sep 22, 2022**. Check node/SDK targets for Plutus v2 features. ([CIP-31](https://cips.cardano.org/cip/CIP-31), [Cardano Docs](https://docs.cardano.org/about-cardano/evolution/upgrades/vasil))

**How do Ergo "registers" compare to Cardano "datums"?**
Both carry on-box data. Ergo uses **registers R4–R9**; Cardano uses **datums** (inline or hashed). ([Ergo Registers](https://docs.ergoplatform.com/dev/data-model/box/registers/))

**Does eUTXO support native tokens?**
Yes. **EUTxOma** formalizes native custom tokens as bundles on outputs with policy scripts for mint/burn. ([EUTxOma Paper](https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/))

**Do I need a full node?**
For production dApps you'll at least run a node or indexer to drive input selection and monitor UTXOs. Both ecosystems provide official node repos/docs. ([Ergo GitHub](https://github.com/ergoplatform/ergo))

---

## Build further (CTA)

* Start with the eUTXO model and **Oracle-read** demo, then extend to **AMM sharding** and **auction state machines**.
* Internal links: [eUTXO Model](/technology/eutxo-model), [ErgoScript](/technology/ergoscript), [Developer Start](/docs/developers), [Blog](/blog/) case studies.
* Keep versions explicit: **CIP-31/33**, **Vasil (Sep 22, 2022)**; **Ergo Node 6.0.x / EIP-50**. ([CIP-31](https://cips.cardano.org/cip/CIP-31), [Cardano Docs](https://docs.cardano.org/about-cardano/evolution/upgrades/vasil), [Ergo Releases](https://github.com/ergoplatform/ergo/releases))

---

**Applied checklist:** facts with dates/versions; plain definitions; examples & tables; risks/limits stated; short paragraphs; descriptive anchors.`,
    slug: "eutxo-ultimate-guide",
    category: "technology",
    tags: ["eUTXO", "smart-contracts", "architecture", "defi", "blockchain", "technology", "research"],
    author: {
      name: "Ergo Research Team",
      bio: "Blockchain researchers and core developers working on advancing Ergo's technical capabilities and ecosystem growth.",
      role: "Research Team",
      social: {
        twitter: "@ergoplatform",
        github: "ergoplatform",
      },
    },
    publishedAt: "Aug 22, 2025",
    readTime: 15,
    views: 0,
    likes: 0,
    featured: true,
    trending: true,
  },
  {
    id: "1",
    title: "The Future of Ergo: Ecosystem Growth and Innovation",
    description:
      "Explore the latest developments and trending narratives in the Ergo ecosystem, from DeFi protocols to mining innovations.",
    content: "Full article content would go here...",
    slug: "future-of-ergo-ecosystem-growth",
    category: "defi",
    tags: ["ecosystem", "defi", "innovation", "blockchain"],
    author: {
      name: "Alex Chen",
      bio: "Blockchain researcher and DeFi analyst with 5+ years experience in the cryptocurrency space.",
      role: "Lead Researcher",
      social: {
        twitter: "@alexchen_crypto",
        github: "alexchen",
        linkedin: "alexchen-crypto",
      },
    },
    publishedAt: "Dec 15, 2024",
    updatedAt: "Dec 20, 2024",
    readTime: 8,
    views: 2341,
    likes: 89,
    featured: true,
    trending: true,
  },
  {
    id: "2",
    title: "ErgoScript Deep Dive: Smart Contracts Made Simple",
    description: "A comprehensive guide to ErgoScript programming and smart contract development on the Ergo platform.",
    content: "Full article content would go here...",
    slug: "ergoscript-deep-dive-smart-contracts",
    category: "development",
    tags: ["ergoscript", "smart-contracts", "programming", "tutorial"],
    author: {
      name: "Sarah Johnson",
      bio: "Senior blockchain developer and ErgoScript expert, contributing to core Ergo development.",
      role: "Core Developer",
      social: {
        twitter: "@sarah_ergo",
        github: "sarahjohnson",
      },
    },
    publishedAt: "Dec 12, 2024",
    readTime: 12,
    views: 1876,
    likes: 67,
    trending: true,
  },
  {
    id: "3",
    title: "Mining Ergo: Complete Setup Guide for 2024",
    description:
      "Everything you need to know about mining Ergo, from hardware requirements to pool selection and optimization tips.",
    content: "Full article content would go here...",
    slug: "mining-ergo-complete-setup-guide-2024",
    category: "mining",
    tags: ["mining", "hardware", "setup", "guide"],
    author: {
      name: "Mike Rodriguez",
      bio: "Mining specialist with extensive experience in GPU mining and pool operations.",
      role: "Mining Expert",
      social: {
        twitter: "@mike_mines",
        github: "mikerodriguez",
      },
    },
    publishedAt: "Dec 10, 2024",
    readTime: 15,
    views: 3245,
    likes: 124,
    trending: true,
  },
  {
    id: "4",
    title: "Understanding UTXO Model vs Account Model",
    description: "A detailed comparison of blockchain architectures and why Ergo chose the extended UTXO model.",
    content: "Full article content would go here...",
    slug: "understanding-utxo-vs-account-model",
    category: "tech",
    tags: ["utxo", "blockchain", "architecture", "comparison"],
    author: {
      name: "Dr. Emily Watson",
      bio: "PhD in Computer Science, specializing in distributed systems and blockchain technology.",
      role: "Research Director",
      social: {
        twitter: "@emily_blockchain",
        linkedin: "emily-watson-phd",
      },
    },
    publishedAt: "Dec 8, 2024",
    readTime: 10,
    views: 1654,
    likes: 78,
  },
  {
    id: "5",
    title: "SigmaUSD: Algorithmic Stablecoin on Ergo",
    description:
      "Learn how SigmaUSD works as a decentralized, algorithmic stablecoin built on Ergo's robust foundation.",
    content: "Full article content would go here...",
    slug: "sigmausd-algorithmic-stablecoin-ergo",
    category: "defi",
    tags: ["sigmausd", "stablecoin", "defi", "algorithmic"],
    author: {
      name: "James Park",
      bio: "DeFi protocol designer and economist, focusing on stablecoin mechanisms and monetary policy.",
      role: "DeFi Architect",
      social: {
        twitter: "@james_defi",
        github: "jamespark",
      },
    },
    publishedAt: "Dec 5, 2024",
    readTime: 9,
    views: 2187,
    likes: 95,
  },
  {
    id: "6",
    title: "Ergo Wallet Security Best Practices",
    description:
      "Essential security tips and best practices for keeping your ERG and tokens safe in various wallet types.",
    content: "Full article content would go here...",
    slug: "ergo-wallet-security-best-practices",
    category: "guides",
    tags: ["security", "wallet", "best-practices", "safety"],
    author: {
      name: "Lisa Chang",
      bio: "Cybersecurity specialist with focus on cryptocurrency security and user education.",
      role: "Security Consultant",
      social: {
        twitter: "@lisa_security",
        linkedin: "lisa-chang-security",
      },
    },
    publishedAt: "Dec 3, 2024",
    readTime: 7,
    views: 1432,
    likes: 56,
  },
]
