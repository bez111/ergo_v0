"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Package, Globe, Cpu, Zap, ExternalLink, CheckCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ErgoSDKsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Ergo SDKs & Client Development
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Explore the Software Development Kits (SDKs) available for Ergo, enabling you to build powerful decentralized applications and services in your preferred programming language.
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Package className="w-6 h-6 text-orange-400" /> Overview of Ergo SDKs
        </h2>
        <p className="text-gray-300 mb-6">
          Ergo's ecosystem provides several SDKs, each tailored to different development environments and use cases. These SDKs abstract away the complexities of direct blockchain interaction, allowing you to focus on your application's logic.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" /> Fleet SDK (TypeScript/JavaScript)
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              The primary SDK for web and frontend development. Ideal for building dApps that interact with browser-based wallets like Nautilus.
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
              <li>**Language:** TypeScript/JavaScript</li>
              <li>**Use Cases:** Web dApps, browser extensions, Node.js backend services.</li>
              <li>**Features:** Transaction building, wallet integration, ErgoScript compilation, UTXO management.</li>
            </ul>
            <Link
              href="https://github.com/fleet-sdk/fleet"
              target="_blank"
              className="inline-flex items-center text-orange-400 hover:underline mt-4"
            >
              GitHub Repository <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Ergo AppKit (Java/Kotlin/Scala)
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              A robust SDK for JVM-based applications. Perfect for backend services, desktop wallets, and complex dApp logic.
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
              <li>**Language:** Java, Kotlin, Scala</li>
              <li>**Use Cases:** Backend dApps, full node integration, custom wallet development, enterprise solutions.</li>
              <li>**Features:** Full node RPC client, transaction construction, ErgoScript evaluation, cryptographic operations.</li>
            </ul>
            <Link
              href="https://github.com/ergoplatform/ergo-appkit"
              target="_blank"
              className="inline-flex items-center text-orange-400 hover:underline mt-4"
            >
              GitHub Repository <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-400" /> Sigma-Rust (Rust)
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              A low-level, high-performance library for Rust developers. Ideal for performance-critical components and cryptographic implementations.
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
              <li>**Language:** Rust</li>
              <li>**Use Cases:** Core protocol development, high-performance dApp components, cryptographic research.</li>
              <li>**Features:** ErgoScript parsing/evaluation, cryptographic primitives, transaction serialization.</li>
            </ul>
            <Link
              href="https://github.com/ergoplatform/sigma-rust"
              target="_blank"
              className="inline-flex items-center text-orange-400 hover:underline mt-4"
            >
              GitHub Repository <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Choosing an SDK Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> Choosing the Right SDK
        </h2>
        <p className="text-gray-300 mb-6">
          The best SDK for your project depends on your programming language preference, the type of application you're building, and the level of control you need.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **For Web dApps & Frontend:** Fleet SDK is generally the recommended choice due to its JavaScript/TypeScript compatibility and browser wallet integration.
            </li>
            <li>
              **For Backend Services & Desktop Apps:** Ergo AppKit provides robust JVM-based solutions with full node interaction capabilities.
            </li>
            <li>
              **For Low-Level & Performance-Critical Development:** Sigma-Rust offers fine-grained control and high performance for specialized use cases.
            </li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Start Building!</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Set Up Your Environment</h4>
            <p className="text-gray-400 text-sm mb-3">
              Get your local development environment ready with the necessary tools and an Ergo node.
            </p>
            <Link
              href="/build/docs/setup"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Setup Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}