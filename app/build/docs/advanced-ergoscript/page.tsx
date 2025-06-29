"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Shield, KeyRound, Layers, CheckCircle, AlertTriangle, ChevronRight, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AdvancedErgoScriptPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Advanced ErgoScript
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Dive deeper into ErgoScript, exploring advanced patterns, cryptographic primitives, and best practices for writing robust and secure smart contracts.
        </p>
      </div>

      {/* Sigma-Protocols Deep Dive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Shield className="w-6 h-6 text-blue-400" /> Sigma-Protocols: Beyond the Basics
        </h2>
        <p className="text-gray-300 mb-6">
          ErgoScript's native support for Sigma-protocols is a cornerstone of its advanced capabilities. These allow for powerful cryptographic proofs without revealing underlying secrets.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-blue-400">Key Concepts Revisited:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Zero-Knowledge Proofs (ZKPs):** Prove knowledge of a secret (e.g., a private key, a value) without revealing the secret itself. Essential for privacy-preserving applications.
            </li>
            <li>
              **Non-Interactive Proofs:** Proofs can be generated once and verified by anyone, anytime, without further interaction from the prover. This is critical for blockchain scalability and efficiency.
            </li>
            <li>
              **Boolean Algebra of Proofs:** Sigma-protocols can be combined using logical AND (`&&`), OR (`||`), and threshold (`atLeast`) operations, allowing for highly complex and flexible spending conditions.
            </li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-blue-400">Practical Applications:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Ring Signatures:** A form of multi-signature where the signer is part of a group, but their specific identity remains hidden within the group.
            </li>
            <li>
              **Confidential Transactions:** While not fully implemented, Sigma-protocols lay the groundwork for future confidential transactions on Ergo.
            </li>
            <li>
              **Complex Access Control:** Create sophisticated access rules for funds or assets based on multiple conditions and proofs.
            </li>
          </ul>
        </div>
      </section>

      {/* Advanced ErgoScript Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-orange-400" /> Advanced ErgoScript Patterns
        </h2>
        <p className="text-gray-300 mb-6">
          Beyond basic conditions, ErgoScript allows for the implementation of sophisticated smart contract patterns. Understanding these patterns is key to building powerful dApps.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-orange-400">Common Patterns:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Time-Locked Contracts:** Funds or assets become spendable only after a certain block height or timestamp.
            </li>
            <li>
              **Multi-Signature Wallets:** Require multiple parties to authorize a transaction.
            </li>
            <li>
              **Atomic Swaps:** Trustless exchange of assets between two parties, often across different blockchains.
            </li>
            <li>
              **Oracle Integration:** Contracts that rely on external data feeds (oracles) to execute their logic.
            </li>
            <li>
              **Stateful Contracts:** Using registers (R4-R9) to store and update contract state across transactions.
            </li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-orange-400">Example: Time-Locked Multi-Sig</h3>
          <pre className="bg-black text-orange-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">{`{
  // Requires 2 of 3 signatures OR
  // 1 signature after a certain block height
  atLeast(2, Coll(pk1, pk2, pk3)) ||
  (HEIGHT > 1234567 && pk1.isValid)
}`}</pre>
          <p className="text-gray-400 text-xs mt-2">
            This contract demonstrates combining a multi-signature condition with a time-lock fallback, showcasing the expressiveness of ErgoScript.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> ErgoScript Best Practices
        </h2>
        <p className="text-gray-300 mb-6">
          Writing secure and efficient ErgoScript is crucial. Adhering to best practices can help prevent common pitfalls and ensure the reliability of your smart contracts.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Keep Scripts Concise:** Shorter scripts are easier to audit and less prone to errors.
            </li>
            <li>
              **Thorough Testing:** Always test your ErgoScript contracts extensively on testnet before deploying to mainnet.
            </li>
            <li>
              **Understand Context:** Fully grasp how `SELF`, `INPUTS`, `OUTPUTS`, `DATA_INPUTS`, and `CONTEXT` variables behave.
            </li>
            <li>
              **Handle Edge Cases:** Consider all possible scenarios, including unexpected inputs or conditions.
            </li>
            <li>
              **Security Audits:** For critical contracts, consider professional security audits.
            </li>
            <li>
              **Use Registers Wisely:** Leverage registers (R4-R9) for storing dynamic data, but be mindful of their size limits.
            </li>
          </ul>
        </div>
      </section>

      {/* Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <BookOpen className="w-6 h-6 text-purple-400" /> Further Resources
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <Link href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">
                ErgoScript Whitepaper <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ergoplatform/ergo-script-cookbook" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">
                ErgoScript Cookbook (GitHub) <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link href="/build/docs/transactions" className="text-orange-400 hover:underline">
                Transactions & ErgoScript Guide
              </Link>
            </li>
            <li>
              <Link href="/build/docs/eutxo" className="text-orange-400 hover:underline">
                eUTXO Model Guide
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Apply Your Knowledge</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Build Your First dApp</h4>
            <p className="text-gray-400 text-sm mb-3">
              Put your ErgoScript skills to practice by building a complete decentralized application.
            </p>
            <Link
              href="/build/docs/first-dapp"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              First dApp Tutorial <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Explore Ergo's Ecosystem</h4>
            <p className="text-gray-400 text-sm mb-3">
              Discover the wide range of applications and services built on the Ergo blockchain.
            </p>
            <Link
              href="/ecosystem"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              Ergo Ecosystem Overview <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}