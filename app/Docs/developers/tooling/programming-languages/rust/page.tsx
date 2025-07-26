"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const frameworks = [
  {
    title: "sigma-rust",
    content: "Rust port of the sigmastate-interpreter",
    url: "/Docs/developers/tooling/sigma-rust"
  },
  {
    title: "HDF",
    content: "Headless dApp Framework",
    url: "/Docs/developers/tooling/frameworks/headless-dapp-framework"
  },
  {
    title: "RustKit",
    content: "(WIP), A SDK for building applications on the Ergo blockchain",
    url: "/Docs/developers/tooling/frameworks/rustkit"
  }
];

const utilities = [
  {
    title: "🔗 Ergo Utilities",
    content: "Simplify writing off-chain code in Rust.",
    url: "https://github.com/robkorn/ergo-utilities-rust/",
    external: true
  },
  {
    title: "🔗 ergo-monitoring",
    content: "Debug service printing out useful for developers and managers information about ergo blockchain state.",
    url: "https://github.com/SabaunT/ergo-monitoring",
    external: true
  },
  {
    title: "🔗 Rust AVL Tree",
    content: "Rust port of AVL tree from scrypto package.",
    url: "https://github.com/knizhnik/scorex_crypto_avltree/blob/main/crypto_avltree.md",
    external: true
  }
];

function CardGrid({ items }: { items: any[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.url}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              {item.title}
              {item.external && <ExternalLink className="w-4 h-4 text-cyan-400" />}
            </h3>
            {item.content && <p className="text-gray-300 leading-relaxed mb-2">{item.content}</p>}
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
            Learn more
          </div>
        </a>
      ))}
    </div>
  );
}

export default function RustPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Rust</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/programming-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        On-chain contracts are developed in ErgoScript, a simple language designed for writing <Link href="/Docs/developers/tooling/ergoscript" className="text-cyan-400 hover:underline">smart contracts</Link> on the Ergo blockchain. ErgoScript is a Turing-complete language that prioritizes <Link href="/Docs/technology/privacy-features" className="text-cyan-400 hover:underline">security</Link> and is well-suited for the <Link href="/Docs/developers/data-model/anatomy/eutxo" className="text-cyan-400 hover:underline">UTXO transactional model</Link> used by Ergo.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        For <Link href="/Docs/developers/tooling/offchain" className="text-cyan-400 hover:underline">off-chain components</Link>, such as interacting with the blockchain, creating <Link href="/Docs/developers/tooling/transactions" className="text-cyan-400 hover:underline">transactions</Link>, and building <Link href="/Docs/ecosystem/applications" className="text-cyan-400 hover:underline">applications</Link>, developers can use Rust along with frameworks like <Link href="/Docs/developers/tooling/sigma-rust" className="text-cyan-400 hover:underline">sigma-rust</Link>. Rust provides a powerful and efficient language for building off-chain components, while sigma-rust provides a Rust port of the <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">sigmastate-interpreter</Link>, allowing developers to interact with the Ergo blockchain from their Rust applications. Various <Link href="/Docs/developers/tooling/sigma-rust#bindings" className="text-cyan-400 hover:underline">language bindings for sigma-rust</Link> are available for other languages.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        One example of using Rust for off-chain components is the <Link href="/Docs/developers/tooling/oracles" className="text-cyan-400 hover:underline">Oracle Pools project</Link>, a federated protocol for delivering external data to the Ergo blockchain. The on-chain contracts and descriptions are available in the <Link href="/Docs/developers/Standards/eip" className="text-cyan-400 hover:underline">Ergo Improvement Proposals (EIPs)</Link>, while the off-chain part is implemented in Rust using the <a href="https://github.com/ergoplatform/oracle-core" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">oracle-core</a> repository.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        Understanding the <Link href="/Docs/developers/data-model/anatomy/eutxo" className="text-cyan-400 hover:underline">UTXO transactional model</Link> is crucial when developing off-chain components for Ergo, as it differs from the <Link href="/Docs/developers/data-model/anatomy/utxo-vs-account" className="text-cyan-400 hover:underline">account-based model</Link> used by other blockchains. Developers with experience in parallel computing may find the UTXO model more natural to work with.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Frameworks</h2>
      <CardGrid items={frameworks} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Utilities</h2>
      <CardGrid items={utilities} />
    </>
  );
} 