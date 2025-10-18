"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ScalaPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Scala Development with Ergo</h1>
      <div className="mb-6">
        <Link href="/docs/developers/tooling/programming-languages/jvm" className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105">
          <ArrowLeft className="w-5 h-5 mr-2" />Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-8">Ergo's primary language is Scala. Similarly, the scripting language used by Ergo, <a href="ergoscript.md" className="text-cyan-400 hover:underline">ErgoScript</a>, is also based on Scala.</p>
      <p className="text-gray-300 mb-6">If you're new to Scala development with Ergo, the <a href="https://github.com/dav009/ergo-scala-skeleton-app" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Scala Skeleton App</a> is a great place to start.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Scala?</h2>
      <p className="text-gray-300 mb-4">Ergo's primary language is Scala. Similarly, the scripting language used by Ergo, <a href="ergoscript.md" className="text-cyan-400 hover:underline">ErgoScript</a>, is also based on Scala, but the <a href="off-chain-overview.md" className="text-cyan-400 hover:underline">off-chain code</a> can be written in any language. Developers have access to a growing selection of <a href="get-started.md" className="text-cyan-400 hover:underline">tools</a> and <a href="frameworks.md" className="text-cyan-400 hover:underline">Software Development Kits (SDKs)</a> for <a href="jvm.md" className="text-cyan-400 hover:underline">JVM</a>, <a href="rust.md" className="text-cyan-400 hover:underline">Rust</a> and <a href="js.md" className="text-cyan-400 hover:underline">JS/TS</a>.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>Truly cross-platform: the same code can run on <a href="jvm.md" className="text-cyan-400 hover:underline">JVM</a> and <a href="js.md" className="text-cyan-400 hover:underline">JavaScript</a> natively.</li>
        <li>Key ecosystem libraries for Scala support all platforms, and the popularity of Scala.js and Scala-native is increasing.</li>
        <li>Conciseness in both <a href="syntax.md" className="text-cyan-400 hover:underline">syntax</a> and conceptual level.</li>
        <li>Can be more efficient than similar <a href="java.md" className="text-cyan-400 hover:underline">Java</a> code due to primitive unboxed types and code specialization.</li>
        <li>Multi-paradigm: combines OOP, FP, and LP, suitable for a wide range of domains.</li>
        <li>Scala 3 brings powerful features such as metaprogramming and tools for zero-cost abstractions.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Scala Versioning (Scala 3)</h2>
      <p className="text-gray-300 mb-4">Ergo's core components, including the <a href="install.md" className="text-cyan-400 hover:underline">reference node</a> and <a href="sigmastate-interpreter.md" className="text-cyan-400 hover:underline">sigmastate-interpreter</a>, have undergone migration to <b>Scala 3</b>. This migration leverages the newer language features, improved type system, and tooling enhancements offered by Scala 3.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Rationale & Implications:</b> For a detailed understanding of the motivations behind the Scala 3 migration and its potential impact on the ecosystem (including Long-Term Support plans), refer to the official Scala blog post: <a href="https://www.scala-lang.org/blog/next-scala-lts.html" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Next Steps for Scala 3 and Scala 2 Long-Term Support</a>.</li>
        <li><b>Developer Impact:</b> Developers contributing to or building upon these core libraries need to ensure their development environment and build tools (like SBT) are compatible with Scala 3. While Scala 3 offers significant improvements, developers should be aware of potential syntax changes or library compatibility adjustments compared to Scala 2.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Learning Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="ergoscript.md" className="text-cyan-400 hover:underline">ErgoScript</a>: Learn about ErgoScript, Ergo's scripting language.</li>
        <li><a href="appkit.md" className="text-cyan-400 hover:underline">AppKit</a>: Discover how to use Ergo's AppKit to develop <a href="use-cases-overview.md" className="text-cyan-400 hover:underline">applications</a>.</li>
        <li><a href="https://github.com/zackbalbin/ErgoTutorials" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Tutorials by Zackbalbin</a>: A collection of tutorials for Ergo development.</li>
        <li><a href="https://blog.cryptostars.is/learning-ergo-101-development-workflow-aa17dd63ef6" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Learning Ergo 101: Development Workflow</a>: A guide to the <a href="get-started.md" className="text-cyan-400 hover:underline">development workflow</a> for Ergo.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Development Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="sigmastate-interpreter.md" className="text-cyan-400 hover:underline">sigmastate-interpreter</a>: This is an <a href="compiler.md" className="text-cyan-400 hover:underline">ErgoScript compiler</a> and <a href="ergotree.md" className="text-cyan-400 hover:underline">ErgoTree Interpreter</a> implementation for Ergo blockchain's <i>Sigma Language</i>. For the development of Ergo applications using <a href="jvm.md" className="text-cyan-400 hover:underline">JVM</a> languages, consider using <a href="appkit.md" className="text-cyan-400 hover:underline">Appkit</a>.</li>
        <li><a href="https://github.com/scorexfoundation/scorex" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ScoreX</a>: An open-source, modular blockchain & cryptocurrency framework.</li>
        <li><a href="scrypto.md" className="text-cyan-400 hover:underline">Scrypto</a>: An open-source cryptographic toolkit designed to make it easier and safer for developers to use <a href="crypto.md" className="text-cyan-400 hover:underline">cryptography</a> in their applications. It's based on Scorex and used internally in <a href="install.md" className="text-cyan-400 hover:underline">Ergo Node</a> and <a href="wallet.md" className="text-cyan-400 hover:underline">ergo-wallet</a>.</li>
        <li><a href="https://github.com/ergoplatform/ergo-scala-style-guide" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Scala Style Guide</a>: Follow this guide to maintain consistency and readability in your Scala code.</li>
      </ul>
      <blockquote className="border-l-4 border-orange-400 pl-4 text-gray-400 italic mt-6">Note: The public interfaces of these libraries are subject to change.</blockquote>
    </>
  );
} 