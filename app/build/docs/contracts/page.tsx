"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, BookOpen, Layers, Shield, CheckCircle, AlertTriangle, ChevronRight } from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/ui"

export default function ErgoScriptLanguageReferencePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          ErgoScript Language Reference
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A comprehensive reference guide to ErgoScript, the powerful and secure scripting language for smart contracts on the Ergo blockchain. Understand its syntax, data types, built-in functions, and cryptographic primitives.
        </p>
      </div>

      {/* Syntax Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-orange-400" /> Syntax Overview
        </h2>
        <p className="text-gray-300 mb-6">
          ErgoScript's syntax is concise and functional, drawing inspiration from Scala. It operates on expressions that evaluate to a boolean value, determining the spendability of an Ergo box.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-orange-400">Basic Structure:</h3>
          <CodeBlock language="typescript"
            code={`{
  // ErgoScript code goes here
  // The last expression evaluated is the spending condition
  sigmaProp(true) // Example: always true
}`}
          />
          <h3 className="font-semibold mt-6 mb-3 text-orange-400">Comments:</h3>
          <CodeBlock language="typescript"
            code={`// Single-line comment
/*
  Multi-line
  comment
*/`}
          />
        </div>
      </section>

      {/* Data Types Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Layers className="w-6 h-6 text-cyan-400" /> Data Types
        </h2>
        <p className="text-gray-300 mb-6">
          ErgoScript supports a rich set of data types, enabling complex data structures and operations within smart contracts.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-cyan-400">Primitive Types:</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Boolean:</strong> `true`, `false`</li>
                <li><strong>Byte:</strong> 8-bit unsigned integer</li>
                <li><strong>Short:</strong> 16-bit signed integer</li>
                <li><strong>Int:</strong> 32-bit signed integer</li>
                <li><strong>Long:</strong> 64-bit signed integer (used for ERG amounts, timestamps)</li>
                <li><strong>BigInt:</strong> Arbitrary-precision integers</li>
                <li><strong>GroupElement:</strong> Point on an elliptic curve (for cryptography)</li>
                <li><strong>SigmaProp:</strong> Cryptographic proposition (public keys, multi-signatures, etc.)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-cyan-400">Collection & Special Types:</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Coll[T]:</strong> Collection (array) of elements of type `T`. E.g., `Coll[Byte]` for byte arrays.</li>
                <li><strong>Option[T]:</strong> Represents an optional value. Can be `Some(value)` or `None`.</li>
                <li><strong>Box:</strong> Represents an Ergo UTXO. Provides access to its properties (`value`, `assets`, `ergoTree`, `registers`, `creationHeight`).</li>
                <li><strong>Context:</strong> Provides access to the transaction context and blockchain state.</li>
                <li><strong>Header:</strong> Represents a block header.</li>
                <li><strong>PreHeader:</strong> Represents a block header before it's fully formed.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Functions & Operators Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-purple-400" /> Built-in Functions & Operators
        </h2>
        <p className="text-gray-300 mb-6">
          ErgoScript provides a rich set of built-in functions and operators for arithmetic, logical operations, cryptographic checks, and data manipulation.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-purple-400">Common Operators:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Arithmetic:</strong> `+`, `-`, `*`, `/`, `%`</li>
            <li><strong>Logical:</strong> `&&` (AND), `||` (OR), `!` (NOT)</li>
            <li><strong>Comparison:</strong> `==`, `!=`, `&gt;`, `&lt;`, `&gt;=`, `&lt;=`</li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-purple-400">Key Built-in Functions:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>`SELF`:</strong> Refers to the current input box being spent.</li>
            <li><strong>`INPUTS`:</strong> Collection of all input boxes in the transaction.</li>
            <li><strong>`OUTPUTS`:</strong> Collection of all output boxes created by the transaction.</li>
            <li><strong>`DATA_INPUTS`:</strong> Collection of all data input boxes (read-only).</li>
            <li><strong>`CONTEXT`:</strong> Provides access to blockchain context (e.g., `CONTEXT.HEIGHT`).</li>
            <li><strong>`blake2b256(Coll[Byte])`:</strong> Computes the Blake2b hash of a byte array.</li>
            <li><strong>`sigmaProp(Boolean)`:</strong> Converts a boolean expression into a Sigma-protocol proposition.</li>
            <li><strong>`atLeast(Int, Coll[SigmaProp])`:</strong> Requires at least `Int` number of proofs from the collection of Sigma-protocols.</li>
            <li><strong>`getVar[T](Byte)`:</strong> Retrieves a variable from the context by its ID.</li>
          </ul>
        </div>
      </section>

      {/* Sigma-Protocols Reference Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Shield className="w-6 h-6 text-green-400" /> Sigma-Protocols: Advanced Cryptography in ErgoScript
        </h2>
        <p className="text-gray-300 mb-6">
          ErgoScript's true power lies in its native support for Sigma-protocols. These are a class of zero-knowledge interactive proof systems that allow one party to prove knowledge of a secret to another party without revealing the secret itself. Ergo extends these to be non-interactive, making them suitable for blockchain use.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-green-400">Common Sigma-Protocol Functions:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>`proveDlog(GroupElement)`:</strong> Proves knowledge of a discrete logarithm (private key) corresponding to a public key.</li>
            <li><strong>`proveDHTuple(GroupElement, GroupElement, GroupElement, GroupElement)`:</strong> Proves knowledge of a Diffie-Hellman tuple.</li>
            <li><strong>`OR(Coll[SigmaProp])`:</strong> Logical OR of multiple Sigma-protocol propositions.</li>
            <li><strong>`AND(Coll[SigmaProp])`:</strong> Logical AND of multiple Sigma-protocol propositions.</li>
            <li><strong>`atLeast(Int, Coll[SigmaProp])`:</strong> Threshold signature, requiring `Int` proofs from the collection.</li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Continue Your Ergo Journey</h3>
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
