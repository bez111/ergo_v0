"use client";

import React from "react";
import { 
  Zap, 
  Code, 
  Lock, 
  ArrowRight, 
  ExternalLink, 
  Users,
  ChevronRight,
  GitBranch,
  Globe,
  Shield,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function AnalogErgoPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Analog Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Analog Ergo is a cross-chain peer-to-peer marketplace project using cryptographic primitives as the basis for private, fungible, and decentralized trading—without intermediaries.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://github.com/dzyphr/ScalaSigmaParticle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <GitBranch className="w-5 h-5 mr-2" /> Analog Ergo GitHub
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> Project Overview
        </h2>
        <p className="text-gray-300 mb-4">
          This project aims to use cryptographic primitives (well established, low level algorithms) as the basis for a cross-chain peer-to-peer marketplace. It will enable users to set and agree to listing prices and other parameters in a private and fungible manner, without the involvement of intermediaries.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Cross-Chain:</b> Peer-to-peer marketplace operating across multiple blockchains</li>
          <li><b>Cryptographic Primitives:</b> Uses established, low-level algorithms for security</li>
          <li><b>Private Trading:</b> Enables private and fungible trading without intermediaries</li>
          <li><b>Decentralized:</b> No central authority or trusted third parties required</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> ScalarLock
          </h3>
          <p className="text-gray-300 mb-2">Successfully tested Scalar Lock contract allowing funds to be locked to a scalar value with elliptic curve multiplication verification for atomic swaps.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-400" /> 2-Party Atomic Swap
          </h3>
          <p className="text-gray-300 mb-2">Working Python example of 2-party atomic swap simulation demonstrating cryptographic secret sharing and cross-chain protocol steps.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <Code className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Technical Implementation & Code Examples</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">ScalarLock Implementation</h4>
              <p className="text-gray-300 mb-4">
                Successfully tested a Scalar Lock contract. This allows you to lock funds to a scalar value (e.g., a random 256bit number) that you can test by comparing it with an Elliptic curve multiplication operation against the Secp256k1 Generator. This is a key component for atomic swaps and cryptographic signature verification.
              </p>
              
              <div className="bg-neutral-800 text-gray-200 rounded p-4 text-xs overflow-x-auto mb-4">
                <pre className="whitespace-pre-wrap">{`val scalarLockScript: String = {
  s"""
    {
    val xBYTES = OUTPUTS(0).R4[Coll[Byte]].get
    val x = byteArrayToBigInt(xBYTES)
    val G = decodePoint(generator)
      sigmaProp(
        receiver &&
        G.exp(x) == xG
      )
    }
  """.stripMargin
}`}</pre>
              </div>
              
              <p className="text-gray-400 text-xs mb-2">This script compares a given scalar value (x) to an elliptic curve multiplication operation of Secp256k1 generator (G) and checks if they are equal.</p>
              <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1 mb-4">
                <li>Decodes the generator point and extracts a scalar value from the transaction output.</li>
                <li>Checks if the point computed from the scalar multiplication of the generator point and the extracted scalar value is equal to a predefined point.</li>
                <li>If the two points are equal, the transaction is valid.</li>
              </ul>

              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href="https://github.com/dzyphr/ScalaSigmaParticle/blob/main/ScalarLock/src/main/scala/ScalarLock.scala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 text-gray-300 rounded px-3 py-1 text-xs hover:bg-blue-900 hover:text-blue-200 transition-colors"
                >
                  Scala Implementation
                </a>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">2-Party Atomic Swap</h4>
              <p className="text-gray-300 mb-4">
                A working python example of a 2-party atomic swap that you can simulate from 2 shell/terminal windows is available at <a href="#" className="text-cyan-300 hover:underline">2pAtomicSwapExample</a>. This might help people reason about the way in which secrets are shared through this protocol and at what steps what data transfer or blockchain interaction is supposed to occur.
              </p>
              <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1 mb-4">
                <li>Simulate atomic swaps between two parties using cryptographic secrets.</li>
                <li>Understand the protocol steps and data flow for secure cross-chain swaps.</li>
              </ul>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Analog Ergo represents a cutting-edge approach to cross-chain trading, leveraging cryptographic primitives to create a truly decentralized and private marketplace. With its ScalarLock implementation and atomic swap capabilities, it demonstrates the potential for trustless, intermediary-free trading across blockchain networks.</p>
      </div>
    </>
  );
} 