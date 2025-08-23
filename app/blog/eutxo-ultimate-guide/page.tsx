import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://ergoblockchain.org'
  
  return {
    title: 'eUTXO Ultimate Guide: Architecture for Builders | Ergo Platform',
    description: 'A clear, factual deep dive into boxes, registers, datums, and read-without-spend patterns—using Ergo and Cardano as concrete eUTXO implementations.',
    keywords: 'eUTXO, Extended UTXO, Ergo, Cardano, smart contracts, blockchain architecture, registers, datums, data inputs, reference inputs',
    authors: [{ name: 'Ergo Research Team' }],
    creator: 'Ergo Research Team',
    publisher: 'Ergo Platform',
    openGraph: {
      title: 'eUTXO Ultimate Guide: Architecture for Builders',
      description: 'Deep dive into Extended UTXO model implementations on Ergo and Cardano blockchains.',
      type: 'article',
      publishedTime: '2025-08-22',
      authors: ['Ergo Research Team'],
      tags: ['eUTXO', 'Smart Contracts', 'Architecture', 'DeFi', 'Blockchain'],
      images: [
        {
          url: '/blog/eutxo-ultimate-guide.jpg',
          width: 1200,
          height: 630,
          alt: 'eUTXO Ultimate Guide',
        }
      ],
      url: `${baseUrl}/blog/eutxo-ultimate-guide`,
      siteName: 'Ergo Platform',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'eUTXO Ultimate Guide: Architecture for Builders',
      description: 'Deep dive into Extended UTXO model implementations on Ergo and Cardano blockchains.',
      images: ['/blog/eutxo-ultimate-guide.jpg'],
      creator: '@ergoplatform',
    },
    alternates: {
      canonical: `${baseUrl}/blog/eutxo-ultimate-guide`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-snippet': -1,
      },
    },
  }
}

export default function EutxoUltimateGuidePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "eUTXO Ultimate Guide: Architecture for Builders",
            "description": "A clear, factual deep dive into boxes, registers, datums, and read-without-spend patterns—using Ergo and Cardano as concrete eUTXO implementations.",
            "image": "https://ergoblockchain.org/blog/eutxo-ultimate-guide.jpg",
            "datePublished": "2025-08-22",
            "dateModified": "2025-08-22",
            "author": {
              "@type": "Organization",
              "name": "Ergo Research Team",
              "url": "https://ergoblockchain.org"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ergo Platform",
              "url": "https://ergoblockchain.org",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ergoblockchain.org/favicon.ico"
              }
            },
            "mainEntityOfPage": "https://ergoblockchain.org/blog/eutxo-ultimate-guide",
            "keywords": "eUTXO, Extended UTXO, Ergo, Cardano, smart contracts, blockchain architecture"
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is eUTXO more scalable than accounts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It can be—when you design sharded state across many UTXOs. eUTXO gives you the tools (explicit inputs, read-only references); scalability depends on your architecture."
                }
              },
              {
                "@type": "Question", 
                "name": "When did Cardano's reference inputs/scripts go live?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Created Nov 29, 2021 (CIPs) and delivered in Vasil on Sep 22, 2022. Check node/SDK targets for Plutus v2 features."
                }
              },
              {
                "@type": "Question",
                "name": "How do Ergo registers compare to Cardano datums?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Both carry on-box data. Ergo uses registers R4–R9; Cardano uses datums (inline or hashed)."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              eUTXO Ultimate Guide: Architecture for Builders
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              A clear, factual deep dive into boxes, registers, datums, and read-without-spend patterns—using Ergo and Cardano as concrete eUTXO implementations.
            </p>
            <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mb-8">
              <p className="text-orange-200">
                <strong>Disclaimer:</strong> Architecture guidance only. No investment advice.
              </p>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#tldr" className="hover:text-orange-400 transition-colors">TL;DR</a></li>
              <li><a href="#definition" className="hover:text-orange-400 transition-colors">What "eUTXO" means</a></li>
              <li><a href="#ergo-flavor" className="hover:text-orange-400 transition-colors">Ergo's flavor of eUTXO</a></li>
              <li><a href="#cardano-flavor" className="hover:text-orange-400 transition-colors">Cardano's flavor of eUTXO</a></li>
              <li><a href="#comparison" className="hover:text-orange-400 transition-colors">eUTXO vs Account model</a></li>
              <li><a href="#mapping" className="hover:text-orange-400 transition-colors">Ergo ↔ Cardano mapping</a></li>
              <li><a href="#patterns" className="hover:text-orange-400 transition-colors">Patterns that ship</a></li>
              <li><a href="#multi-asset" className="hover:text-orange-400 transition-colors">Native multi-asset</a></li>
              <li><a href="#risks" className="hover:text-orange-400 transition-colors">Risks & limitations</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a></li>
              <li><a href="#build-further" className="hover:text-orange-400 transition-colors">Build further</a></li>
            </ul>
          </nav>

          <article className="prose prose-invert prose-orange max-w-none">
            
            {/* TL;DR */}
            <section id="tldr" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">TL;DR</h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong>Extended UTXO (eUTXO)</strong> = Bitcoin's UTXO model <strong>plus typed on-output data checked by a validator</strong>. You get explicit reads/writes, deterministic validation, and safe state-machine patterns. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>, <a href="https://fc20.ifca.ai/wtsc/WTSC2020/WTSC20_paper_25.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">fc20.ifca.ai</a>)
                </li>
                <li>
                  <strong>Ergo</strong> stores app data in <strong>registers (R4–R9)</strong> on each box and supports <strong>data inputs</strong> to <strong>read</strong> external boxes without spending them—a clean fit for oracles and config reads. (<a href="https://docs.ergoplatform.com/dev/data-model/box/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">docs.ergoplatform.com</a>)
                </li>
                <li>
                  <strong>Cardano</strong> uses <strong>datums</strong> for on-box data; <strong>CIP-31 reference inputs</strong> (created <strong>Nov 29, 2021</strong>) read without spending; <strong>CIP-33 reference scripts</strong> (created <strong>Nov 29, 2021</strong>) reuse on-chain code. Both shipped in the <strong>Vasil</strong> era (mainnet <strong>Sep 22, 2022</strong>). (<a href="https://cips.cardano.org/cip/CIP-31" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Improvement Proposals</a>, <a href="https://docs.cardano.org/about-cardano/evolution/upgrades/vasil" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Docs</a>)
                </li>
                <li>
                  Trade-off: strong predictability and parallelism <strong>if</strong> you design state sharding and off-chain coordination well. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)
                </li>
              </ul>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Definition */}
            <section id="definition" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What "eUTXO" means (and why builders care)</h2>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
                <p className="text-gray-300 mb-4">
                  <strong>Definition (inline):</strong> In eUTXO, each spendable output (UTXO) carries value <strong>and</strong> typed data (e.g., integers, bytes, token bundles). A <strong>validator</strong> script authorizes spending by checking that data and the transaction's inputs/outputs. Because all consumed/read boxes are listed <strong>explicitly</strong> in a transaction, resource use and effects are local and predictable. The formal model shows how such outputs implement <strong>general state machines</strong> while retaining UTXO safety properties. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>, <a href="https://dl.acm.org/doi/10.1007/978-3-030-54455-3_37" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">ACM Digital Library</a>)
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Why it matters:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong>Determinism:</strong> The validator sees exactly the inputs/reads the transaction declares. Fee and failure modes are easier to reason about than global-state mutations. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)
                </li>
                <li>
                  <strong>Parallelism by design:</strong> Independent UTXOs can be spent in the same block; contention only appears if you centralize state into a single hot UTXO. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)
                </li>
              </ul>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Ergo's flavor */}
            <section id="ergo-flavor" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Ergo's flavor of eUTXO: boxes, registers, data inputs</h2>
              
              <h3 className="text-xl font-semibold mb-4">Boxes & Registers (R4–R9)</h3>
              <p className="text-gray-300 mb-4">
                Ergo calls a UTXO a <strong>box</strong>. Beyond value and a guarding script, a box can hold up to <strong>six optional registers (R4–R9)</strong> with typed data (e.g., numbers, bytes, tuples, sigma props, AVL trees). Contracts read these registers during validation. (<a href="https://docs.ergoplatform.com/dev/data-model/box/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">docs.ergoplatform.com</a>)
              </p>

              <p className="text-gray-400 mb-2"><em>Tiny ErgoScript sketch (conceptual)</em>:</p>
              <pre className="bg-neutral-900/80 border border-neutral-700 rounded-lg p-4 overflow-x-auto mb-4">
                <code className="text-green-400">{`val oracle = INPUTS(0)
val price  = oracle.R4[Long].get
sigmaProp(price > 0) // spend permitted only if a positive price is reported`}</code>
              </pre>

              <p className="text-gray-300 mb-6">
                This <strong>co-location of state with the spend</strong> is the everyday superpower of eUTXO on Ergo. Docs detail register types and access. (<a href="https://docs.ergoplatform.com/dev/data-model/box/registers/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">docs.ergoplatform.com</a>)
              </p>

              <h3 className="text-xl font-semibold mb-4">Data inputs: read without consuming</h3>
              <p className="text-gray-300 mb-4">
                Ergo transactions may include <strong>data inputs</strong>—<strong>read-only</strong> references to boxes. Contracts can inspect those boxes' registers during validation <strong>without</strong> spending them. Typical use: read an <strong>oracle price box</strong> or a <strong>parameters box</strong> alongside your normal inputs. That keeps reference state stable and reduces accidental contention. (<a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">GitHub</a>)
              </p>

              <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4">
                <p className="text-blue-200">
                  <strong>Version note:</strong> The Ergo reference client <strong>6.0.x</strong> (release notes <strong>June 24, 2025</strong> and later) includes support for the <strong>EIP-50</strong> soft-fork process. Pin node versions when relying on new opcodes/semantics. (<a href="https://github.com/ergoplatform/ergo/releases" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>)
                </p>
              </div>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Cardano's flavor */}
            <section id="cardano-flavor" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Cardano's flavor of eUTXO: datums, reference inputs, reference scripts</h2>
              
              <p className="text-gray-300 mb-4">
                Cardano attaches on-box data as <strong>datums</strong> (hash or inline). The <strong>Vasil</strong> era added two features that mirror Ergo's read pattern and improve code reuse:
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li>
                  <strong>CIP-31: Reference inputs</strong> — mark some inputs as <strong>reference</strong> so the validator can <strong>read</strong> a UTXO <strong>without</strong> spending it. Created <strong>Nov 29, 2021</strong>; documented in the CIPs site and Cardano Docs. (<a href="https://cips.cardano.org/cip/CIP-31" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Improvement Proposals</a>, <a href="https://docs.cardano.org/about-cardano/evolution/upgrades/vasil" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Docs</a>)
                </li>
                <li>
                  <strong>CIP-33: Reference scripts</strong> — store a validator once on chain, then <strong>reference</strong> it from transactions to avoid reshipping full script bytes, shrinking tx size and fees. Created <strong>Nov 29, 2021</strong>. (<a href="https://cips.cardano.org/cip/CIP-33" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Improvement Proposals</a>)
                </li>
              </ul>

              <p className="text-gray-300 mb-4">
                <strong>Activation:</strong> Vasil mainnet hard fork <strong>September 22, 2022</strong> (features include Plutus v2, reference inputs/scripts). (<a href="https://docs.cardano.org/about-cardano/evolution/upgrades/vasil" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Docs</a>)
              </p>

              <p className="text-gray-400 mb-2"><em>Pseudo-tx (conceptual)</em>:</p>
              <pre className="bg-neutral-900/80 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">{`Tx:
  inputs: [ userInput ]
  referenceInputs: [ oracleBox ]        -- CIP-31 read-only
  referenceScripts: [ ammValidatorRef ] -- CIP-33 code reuse
  outputs: [ swapOut, change ]`}</code>
              </pre>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Comparison Table */}
            <section id="comparison" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">eUTXO vs Account model (design-time realities)</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl">
                  <thead className="bg-neutral-800/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Criterion</th>
                      <th className="px-4 py-3 text-left text-purple-400 font-semibold">Account model (e.g., EVM)</th>
                      <th className="px-4 py-3 text-left text-gray-400 font-semibold">Plain UTXO</th>
                      <th className="px-4 py-3 text-left text-orange-400 font-semibold">eUTXO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-neutral-700">
                      <td className="px-4 py-3 font-medium text-white">Where state lives</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Contract storage (global)</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">N/A</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">On outputs (registers/datums)</td>
                    </tr>
                    <tr className="border-t border-neutral-700 bg-neutral-800/20">
                      <td className="px-4 py-3 font-medium text-white">Reads</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Arbitrary storage reads</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">N/A</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Explicit: normal inputs + read-only refs</td>
                    </tr>
                    <tr className="border-t border-neutral-700">
                      <td className="px-4 py-3 font-medium text-white">Parallelism</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Contention on shared state</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">High (independent spends)</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">High if you shard state across UTXOs</td>
                    </tr>
                    <tr className="border-t border-neutral-700 bg-neutral-800/20">
                      <td className="px-4 py-3 font-medium text-white">Fee predictability</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Affected by global state growth</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Per-tx</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Per-tx; inputs declared</td>
                    </tr>
                    <tr className="border-t border-neutral-700">
                      <td className="px-4 py-3 font-medium text-white">Concurrency UX</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Tooling hides nonces/locks</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">N/A</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Architectural: avoid hot-spot UTXOs</td>
                    </tr>
                    <tr className="border-t border-neutral-700 bg-neutral-800/20">
                      <td className="px-4 py-3 font-medium text-white">Code size</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Varies per VM</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Script per output</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Reference scripts reduce tx size (Cardano)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-300 mt-6">
                Right takeaway: eUTXO <strong>rewards forethought</strong>. Design <strong>how many</strong> state UTXOs you maintain, <strong>who writes</strong> them, and <strong>who only reads</strong> them (via data/reference inputs). The model's guarantees come from <strong>explicit inputs</strong> and the formal state-machine view. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)
              </p>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Mapping Table */}
            <section id="mapping" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Ergo ↔ Cardano: concept mapping for migrating builders</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl">
                  <thead className="bg-neutral-800/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Concept</th>
                      <th className="px-4 py-3 text-left text-orange-400 font-semibold">Ergo</th>
                      <th className="px-4 py-3 text-left text-purple-400 font-semibold">Cardano</th>
                      <th className="px-4 py-3 text-left text-green-400 font-semibold">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-neutral-700">
                      <td className="px-4 py-3 font-medium text-white">On-box data</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Registers R4–R9</td>
                      <td className="px-4 py-3 text-purple-300 text-sm font-medium">Datums (hash or inline)</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">App state stored with the output. (<a href="https://docs.ergoplatform.com/dev/data-model/box/registers/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">docs.ergoplatform.com</a>)</td>
                    </tr>
                    <tr className="border-t border-neutral-700 bg-neutral-800/20">
                      <td className="px-4 py-3 font-medium text-white">Read without spend</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Data inputs</td>
                      <td className="px-4 py-3 text-purple-300 text-sm font-medium">Reference inputs (CIP-31)</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Many readers, one writer (oracles/config). (<a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">GitHub</a>, <a href="https://cips.cardano.org/cip/CIP-31" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Cardano Improvement Proposals</a>)</td>
                    </tr>
                    <tr className="border-t border-neutral-700">
                      <td className="px-4 py-3 font-medium text-white">Script reuse</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Script bytes on outputs</td>
                      <td className="px-4 py-3 text-purple-300 text-sm font-medium">Reference scripts (CIP-33)</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">Smaller txs; shared code. (<a href="https://cips.cardano.org/cip/CIP-33" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Cardano Improvement Proposals</a>)</td>
                    </tr>
                    <tr className="border-t border-neutral-700 bg-neutral-800/20">
                      <td className="px-4 py-3 font-medium text-white">Multi-asset</td>
                      <td className="px-4 py-3 text-orange-300 text-sm font-medium">Tokens on boxes</td>
                      <td className="px-4 py-3 text-purple-300 text-sm font-medium">Token bundles on outputs</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">First-class assets on both. (<a href="https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">IOHK</a>)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Patterns */}
            <section id="patterns" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Patterns that ship (mini playbooks)</h2>
              
              <div className="space-y-8">
                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">1) Oracle-read (many readers, one writer)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Goal:</strong> Use a single oracle or parameters UTXO as a <strong>read-only reference</strong> in many user transactions.</li>
                    <li><strong>Ergo:</strong> Include the oracle as a <strong>data input</strong>; validators read <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">R4..R9</code> without consuming it. (<a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">GitHub</a>)</li>
                    <li><strong>Cardano:</strong> Include the oracle as a <strong>reference input (CIP-31)</strong>; read its inline datum. (<a href="https://cips.cardano.org/cip/CIP-31" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Improvement Proposals</a>)</li>
                    <li><strong>Payoff:</strong> Readers don't serialize on a shared state; they just reference and validate.</li>
                  </ul>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">2) AMM concurrency via sharded state</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Goal:</strong> Avoid a single "pool" UTXO bottleneck.</li>
                    <li><strong>How:</strong> Partition pool state across <strong>multiple UTXOs</strong> (by tick range, asset pair, or role). Swaps consume only the relevant shard; config is referenced read-only.</li>
                    <li><strong>Payoff:</strong> Independent swaps proceed in parallel because different UTXOs are touched—this is the model's native path to throughput. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)</li>
                  </ul>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">3) Auctions as explicit state machines</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Goal:</strong> Express bidding as state transitions.</li>
                    <li><strong>How:</strong> Each bid <strong>consumes</strong> the current auction UTXO and <strong>creates</strong> the next one with updated leader/price/timeout in the datum/registers.</li>
                    <li><strong>Payoff:</strong> The chain itself enforces valid transitions; the pattern is exactly what the eUTXO paper models. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Multi-asset */}
            <section id="multi-asset" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Native multi-asset (EUTxOma)</h2>
              <p className="text-gray-300">
                The <strong>EUTxOma</strong> extension generalizes outputs to carry <strong>token bundles</strong> and defines <strong>policy scripts</strong> that control forging, keeping assets first-class in the ledger (no ad-hoc contract standards). For builders that means uniform accounting—value + bundles on outputs—and policy-driven mint/burn flows. (<a href="https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>, <a href="https://plutus.cardano.intersectmbo.org/resources/eutxoma-paper.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Plutus</a>)
              </p>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Risks */}
            <section id="risks" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Risks & limitations (no magic promises)</h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong>Off-chain orchestration & box selection:</strong> You still need an indexer/relayer to pick inputs and prevent fragmentation or races. The node API exposes both <strong>inputs</strong> and <strong>dataInputs</strong> as first-class fields—use them deliberately. (<a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">GitHub</a>)
                </li>
                <li>
                  <strong>Hot-spot UTXOs:</strong> If you collapse all state into one output, concurrency collapses, too. The model enables parallelism; it doesn't invent it for you. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)
                </li>
                <li>
                  <strong>Version drift:</strong> Features like <strong>reference inputs/scripts</strong> depend on specific ledger eras (<strong>Vasil</strong> on Cardano). Ergo's <strong>6.0.x</strong> introduces <strong>EIP-50</strong> soft-fork support; pin binary/library versions in CI. (<a href="https://docs.cardano.org/about-cardano/evolution/upgrades/vasil" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Docs</a>, <a href="https://github.com/ergoplatform/ergo/releases" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">GitHub</a>)
                </li>
              </ul>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Is eUTXO "more scalable" than accounts?</h3>
                  <p className="text-gray-300">
                    It <strong>can</strong> be—when you design <strong>sharded state</strong> across many UTXOs. eUTXO gives you the tools (explicit inputs, read-only references); scalability depends on your architecture. (<a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)
                  </p>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">When did Cardano's reference inputs/scripts go live?</h3>
                  <p className="text-gray-300">
                    Created <strong>Nov 29, 2021</strong> (CIPs) and delivered in <strong>Vasil</strong> on <strong>Sep 22, 2022</strong>. Check node/SDK targets for Plutus v2 features. (<a href="https://cips.cardano.org/cip/CIP-31" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Improvement Proposals</a>, <a href="https://docs.cardano.org/about-cardano/evolution/upgrades/vasil" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Docs</a>)
                  </p>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">How do Ergo "registers" compare to Cardano "datums"?</h3>
                  <p className="text-gray-300">
                    Both carry on-box data. Ergo uses <strong>registers R4–R9</strong>; Cardano uses <strong>datums</strong> (inline or hashed). (<a href="https://docs.ergoplatform.com/dev/data-model/box/registers/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">docs.ergoplatform.com</a>)
                  </p>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Does eUTXO support native tokens?</h3>
                  <p className="text-gray-300">
                    Yes. <strong>EUTxOma</strong> formalizes native custom tokens as bundles on outputs with policy scripts for mint/burn. (<a href="https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IOHK</a>)
                  </p>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Do I need a full node?</h3>
                  <p className="text-gray-300">
                    For production dApps you'll at least run a node or indexer to drive input selection and monitor UTXOs. Both ecosystems provide official node repos/docs. (<a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">GitHub</a>)
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-neutral-700 my-12" />

            {/* Build further */}
            <section id="build-further" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Build further (CTA)</h2>
              
              <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to start building?</h3>
                <ul className="space-y-3 text-gray-300 mb-6 text-left max-w-2xl mx-auto">
                  <li>• Start with the eUTXO model and <strong>Oracle-read</strong> demo, then extend to <strong>AMM sharding</strong> and <strong>auction state machines</strong>.</li>
                  <li>• Internal links: <Link href="/technology/eutxo-model" className="text-orange-400 hover:underline">eUTXO Model</Link>, <Link href="/technology/ergoscript" className="text-orange-400 hover:underline">ErgoScript</Link>, <Link href="/docs/developers" className="text-orange-400 hover:underline">Developer Docs</Link>, <Link href="/blog" className="text-orange-400 hover:underline">Blog</Link> case studies.</li>
                  <li>• Keep versions explicit: <strong>CIP-31/33</strong>, <strong>Vasil (Sep 22, 2022)</strong>; <strong>Ergo Node 6.0.x / EIP-50</strong>. (<a href="https://cips.cardano.org/cip/CIP-31" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Improvement Proposals</a>, <a href="https://docs.cardano.org/about-cardano/evolution/upgrades/vasil" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Cardano Docs</a>, <a href="https://github.com/ergoplatform/ergo/releases" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">GitHub</a>)</li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/docs/developers" 
                    className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition-colors"
                  >
                    Start Building
                  </Link>
                  <Link 
                    href="/technology/eutxo-model" 
                    className="inline-flex items-center px-6 py-3 border border-neutral-700 text-neutral-300 hover:bg-neutral-800 rounded-xl transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>

            {/* Applied checklist */}
            <footer className="text-center text-gray-400 text-sm border-t border-neutral-700 pt-8">
              <p><strong>Applied checklist:</strong> facts with dates/versions; plain definitions; examples & tables; risks/limits stated; short paragraphs; descriptive anchors.</p>
            </footer>

          </article>

          {/* Back to top */}
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 rounded-lg transition-colors"
            >
              Back to top ↑
            </a>
          </div>

        </div>
      </div>
    </>
  )
} 