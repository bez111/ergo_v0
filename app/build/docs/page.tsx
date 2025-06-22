"use client"

import { BookOpen, Code, Rocket, Shield, Cpu, GitBranch, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

const sidebarLinks = [
  { id: "quickstart", label: "Quickstart" },
  { id: "sdks", label: "SDKs & Libraries" },
  { id: "api", label: "API Reference" },
  { id: "node", label: "Node Installation" },
  { id: "protocol", label: "Protocol Deep Dive" },
  { id: "security", label: "Security Best Practices" },
  { id: "changelog", label: "Changelog" },
]

const sdks = [
  {
    title: "AppKit (JVM)",
    description:
      "Java/Kotlin/Scala SDK for backend and service-layer Ergo dApps. Fastest way to interact with the Ergo blockchain from JVM languages.",
    icon: Rocket,
    href: "https://docs.ergoplatform.com/dev/quick-start/",
    github: "https://github.com/ergoplatform/ergo-appkit",
  },
  {
    title: "Fleet (TS/JS)",
    description:
      "TypeScript SDK for building modern web, Node, and browser-based Ergo dApps. Fully supports wallets and contracts.",
    icon: Code,
    href: "https://docs.ergoplatform.com/dev/fleet/",
    github: "https://github.com/ergoplatform/fleet",
  },
  {
    title: "Sigma-Rust",
    description:
      "Core protocol library and cryptographic primitives written in Rust. Use for advanced integrations and building Rust-based tools.",
    icon: Cpu,
    href: "https://docs.ergoplatform.com/dev/sigma-rust/",
    github: "https://github.com/ergoplatform/sigma-rust",
  },
]

const protocol = [
  {
    title: "eUTXO Model",
    description:
      "The next-gen smart contract model — extended UTXO, secure and scalable. Foundation for all Ergo dApps.",
    icon: BookOpen,
    href: "https://docs.ergoplatform.com/dev/protocol/eutxo/",
  },
  {
    title: "Sigma Protocols",
    description:
      "Zero-knowledge proofs for privacy, security, and composability. Unique to Ergo's smart contract engine.",
    icon: Shield,
    href: "https://docs.ergoplatform.com/dev/protocol/sigma/",
  },
  {
    title: "NIPoPoWs",
    description: "Non-interactive proofs of proof-of-work. Enables lightweight cross-chain verification.",
    icon: GitBranch,
    href: "https://docs.ergoplatform.com/dev/protocol/nipopow/",
  },
]

export default function BuildDocsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 top-0 -z-10 h-1/3 w-full bg-[radial-gradient(circle_500px_at_50%_0px,#27272a,transparent)]" />

      <div className="container mx-auto px-4 py-24">
        {/* Hero */}
        <div className="text-center mb-20">
          <BookOpen className="w-16 h-16 mx-auto text-orange-400 mb-4" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-4">
            Developer Documentation
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to build on Ergo. From SDKs to protocol deep dives.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-x-12">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <nav className="sticky top-24">
              <h3 className="font-semibold text-lg mb-4 text-white">On this page</h3>
              <ul className="space-y-2">
                {sidebarLinks.map(link => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="block text-gray-300 hover:text-white hover:bg-orange-500/10 font-medium transition rounded-lg py-2 px-3"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3">
            {/* Quickstart */}
            <section id="quickstart" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Quickstart
              </h2>
              <p className="mb-6 text-lg text-gray-300 max-w-2xl">
                Ready to build on Ergo? Follow our quickstart guide and launch your first contract or
                dApp in minutes.
              </p>
              <Link
                href="/build/getting-started"
                className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" /> Quickstart Guide
              </Link>
            </section>

            {/* SDKs & Libraries */}
            <section id="sdks" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">SDKs & Libraries</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {sdks.map(sdk => (
                  <div
                    key={sdk.title}
                    className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <sdk.icon className="w-6 h-6 text-orange-400" />
                      <h3 className="text-xl font-bold">{sdk.title}</h3>
                    </div>
                    <p className="text-gray-400">{sdk.description}</p>
                    <div className="flex gap-3 mt-2">
                      <Link
                        href={sdk.href}
                        target="_blank"
                        className="text-cyan-400 underline flex items-center"
                      >
                        <LinkIcon className="w-4 h-4 mr-1" /> Docs
                      </Link>
                      <Link
                        href={sdk.github}
                        target="_blank"
                        className="text-gray-400 underline flex items-center"
                      >
                        <Code className="w-4 h-4 mr-1" /> GitHub
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* API Reference */}
            <section id="api" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">API Reference</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-1">Node REST API</h4>
                  <p className="text-gray-400 mb-2">
                    Direct low-level access to the Ergo blockchain: blocks, wallets, transactions,
                    UTXOs, contracts.
                  </p>
                  <Link
                    href="https://api.ergoplatform.com/docs/"
                    target="_blank"
                    className="text-cyan-400 underline"
                  >
                    Read REST API Docs
                  </Link>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Explorer API</h4>
                  <p className="text-gray-400 mb-2">
                    Search and analyze blocks, transactions, addresses, and tokens.
                  </p>
                  <Link
                    href="https://api.ergoplatform.com/"
                    target="_blank"
                    className="text-cyan-400 underline"
                  >
                    Open Explorer API
                  </Link>
                </div>
              </div>
            </section>

            {/* Node Installation */}
            <section id="node" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Node Installation</h2>
              <p className="text-gray-400 mb-2">
                Run your own Ergo full node to interact with the blockchain, mine, validate, or build
                advanced dApps.
              </p>
              <Link
                href="https://docs.ergoplatform.com/node/"
                target="_blank"
                className="text-cyan-400 underline"
              >
                Node Installation Guide
              </Link>
            </section>

            {/* Protocol Deep Dive */}
            <section id="protocol" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Protocol Deep Dive</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {protocol.map(section => (
                  <div
                    key={section.title}
                    className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-2">
                      <section.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-bold">{section.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-2">{section.description}</p>
                    <Link
                      href={section.href}
                      target="_blank"
                      className="text-cyan-400 underline flex items-center"
                    >
                      <BookOpen className="w-4 h-4 mr-1" /> Read More
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section id="security" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Security Best Practices</h2>
              <p className="text-gray-400 mb-2">
                Learn how to build and audit secure dApps, avoid common pitfalls, and follow industry
                standards.
              </p>
              <Link href="/build/security" className="text-cyan-400 underline">
                View Security Guide
              </Link>
            </section>

            {/* Changelog */}
            <section id="changelog" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Changelog</h2>
              <p className="text-gray-400 mb-2">
                Stay up to date with all the major releases, fixes and protocol upgrades in the Ergo
                developer ecosystem.
              </p>
              <Link
                href="https://github.com/ergoplatform/ergo/releases"
                target="_blank"
                className="text-cyan-400 underline"
              >
                Open Changelog on GitHub
              </Link>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
