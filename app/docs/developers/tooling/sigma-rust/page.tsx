"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SigmaRustPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Sigma Rust</h1>
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/docs/developers/tooling/programming-languages/rust"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
        <Link
          href="/docs/developers/tooling/pathways/sigma-rust/constrained"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          Constrained Environments
        </Link>
      </div>
      <p className="text-gray-300 mb-4">Rust implementation of <a href="/docs/developers/tooling/pathways/sigmastate-interpreter" className="text-cyan-400 hover:underline">ErgoScript (sigmastate-interpreter)</a> cryptocurrency scripting language.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Crates</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergo-lib" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib</a> – <a href="https://crates.io/crates/ergo-lib" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/ergo-lib" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a><br/>Overarching crate exposing wallet-related features: chain types (transactions, boxes, etc.), JSON serialization, box selection for tx inputs, tx builder and signing. Exports other crates API, probably the only crate you'd need to import.</li>
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergotree-interpreter" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergotree-interpreter</a> – <a href="https://crates.io/crates/ergotree-interpreter" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/ergotree-interpreter" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a><br/>ErgoTree interpreter</li>
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergotree-ir" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergotree-ir</a> – <a href="https://crates.io/crates/ergotree-ir" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/ergotree-ir" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a><br/>ErgoTree IR and serialization.</li>
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergoscript-compiler" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergoscript-compiler</a> – <a href="https://crates.io/crates/ergoscript-compiler" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/ergoscript-compiler" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a><br/>ErgoScript compiler.</li>
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/sigma-ser" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">sigma-ser</a> – <a href="https://crates.io/crates/sigma-ser" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/sigma-ser" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a><br/>Ergo binary serialization primitives.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Bindings</h2>
      <p className="text-gray-300 mb-4">This section lists available language bindings for <code>sigma-rust</code>, allowing developers to interact with the Ergo blockchain using various programming languages.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li><b>Wasm:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-wasm</a> – <a href="https://crates.io/crates/ergo-lib-wasm" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/ergo-lib-wasm" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a></li>
        <li><b>JavaScript / TypeScript:</b> <a href="https://www.npmjs.com/package/ergo-lib-wasm-browser" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-wasm-browser</a> (browser), <a href="https://www.npmjs.com/package/ergo-lib-wasm-nodejs" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-wasm-nodejs</a> (Node.js)</li>
        <li><b>Swift (iOS):</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-ios" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-ios</a></li>
        <li><b>Java / JVM:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-jni" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-jni</a> – <a href="https://crates.io/crates/ergo-lib-jni" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/ergo-lib-jni" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a></li>
        <li><b>C:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-c" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-c</a> – <a href="https://crates.io/crates/ergo-lib-c" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">crates.io</a> | <a href="https://docs.rs/crate/ergo-lib-c" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a></li>
        <li><b>Go:</b> <a href="https://github.com/ergoplatform/ergo-lib-go" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-go</a> – <a href="https://pkg.go.dev/github.com/ergoplatform/ergo-lib-go" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Go Reference</a> <span className="text-gray-400">(Community maintained)</span></li>
        <li><b>Ruby:</b> <a href="https://github.com/thedlop/sigma_rb" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">sigma_rb</a> – <a href="https://badge.fury.io/rb/sigma_rb" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Gem Version</a> <span className="text-gray-400">(Community maintained)</span></li>
        <li><b>Python:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-python" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-python</a> – <a href="https://badge.fury.io/py/ergo-lib" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">PyPI</a> | <a href="https://docs.rs/crate/ergo-lib" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">docs</a> <span className="text-gray-400">(Uses ergo-lib crate docs)</span></li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Usage Examples</h2>
      <p className="text-gray-300 mb-4">To get better understanding on how to use it in your project check out how its being used in the following projects:</p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Rust</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="https://github.com/ergoplatform/oracle-core" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracle Core</a></li>
        <li><a href="https://github.com/Emurgo/ergo-headless-dapp-framework" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Headless dApp Framework</a></li>
        <li><a href="https://github.com/Emurgo/ergo-node-interface" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Node Interface Library</a></li>
        <li><a href="https://github.com/spectrum-finance/spectrum-offchain-ergo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Spectrum Off-Chain Services for Ergo</a></li>
        <li><a href="https://github.com/Emurgo/age-usd" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">AgeUSD Stablecoin Protocol</a></li>
        <li><a href="https://github.com/ergonames/sdk/tree/master/rust" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoNames SDKs</a></li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">TS/JS</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="https://github.com/ergolabs/ergo-sdk-js" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo SDK</a> (Wasm bindings)</li>
        <li><a href="https://github.com/Emurgo/yoroi-frontend" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Yoroi wallet</a> (Wasm bindings)</li>
        <li><a href="https://github.com/ErgoWallet/ergowallet-desktop" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Desktop Wallet</a> (Wasm bindings)</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Examples</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/create-transaction-demo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Create transaction demo</a> (TS)</li>
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/address-generation-demo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Address generation demo</a> (TS)</li>
      </ul>
      <p className="text-gray-300 mb-4">Also take a look at tests where various usage scenarios were implemented.</p>
    </>
  );
} 