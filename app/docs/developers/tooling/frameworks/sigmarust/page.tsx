"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function SigmaRustPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Sigma Rust</h1>
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/Docs/developers/tooling/frameworks"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
        <Link
          href="/Docs/developers/tooling/frameworks/sigmarust/constrained-environments"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          Constrained Environments
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        Rust implementation of <a href="https://github.com/ergoplatform/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript (sigmastate-interpreter)</a> cryptocurrency scripting language.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Crates</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        <li>
          <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergo-lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib</a> – Overarching crate exposing wallet-related features: chain types (transactions, boxes, etc.), JSON serialization, box selection for tx inputs, tx builder and signing. Exports other crates API, probably the only crate you'd need to import. [<a href="https://crates.io/crates/ergo-lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/ergo-lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]
        </li>
        <li>
          <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergotree-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergotree-interpreter</a> – ErgoTree interpreter [<a href="https://crates.io/crates/ergotree-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/ergotree-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]
        </li>
        <li>
          <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergotree-ir" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergotree-ir</a> – ErgoTree IR and serialization. [<a href="https://crates.io/crates/ergotree-ir" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/ergotree-ir" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]
        </li>
        <li>
          <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergoscript-compiler</a> – ErgoScript compiler. [<a href="https://crates.io/crates/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]
        </li>
        <li>
          <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/sigma-ser" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigma-ser</a> – Ergo binary serialization primitives. [<a href="https://crates.io/crates/sigma-ser" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/sigma-ser" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Bindings</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        <li><b>Wasm:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-wasm</a> [<a href="https://crates.io/crates/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]</li>
        <li><b>JavaScript / TypeScript:</b> <a href="https://www.npmjs.com/package/ergo-lib-wasm-browser" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-wasm-browser</a> (browser), <a href="https://www.npmjs.com/package/ergo-lib-wasm-nodejs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-wasm-nodejs</a> (Node.js)</li>
        <li><b>Swift (iOS):</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-ios" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-ios</a></li>
        <li><b>Java / JVM:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-jni" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-jni</a> [<a href="https://crates.io/crates/ergo-lib-jni" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/ergo-lib-jni" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]</li>
        <li><b>C:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-c" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-c</a> [<a href="https://crates.io/crates/ergo-lib-c" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Crates.io</a>] [<a href="https://docs.rs/crate/ergo-lib-c" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>]</li>
        <li><b>Go:</b> <a href="https://github.com/ergoplatform/ergo-lib-go" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-go</a> [<a href="https://pkg.go.dev/github.com/ergoplatform/ergo-lib-go" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Go Reference</a>] <span className="text-gray-400">(Community maintained)</span></li>
        <li><b>Ruby:</b> <a href="https://github.com/thedlop/sigma_rb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigma_rb</a> [<a href="https://badge.fury.io/rb/sigma_rb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Gem</a>] <span className="text-gray-400">(Community maintained)</span></li>
        <li><b>Python:</b> <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-python" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-python</a> [<a href="https://badge.fury.io/py/ergo-lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PyPI</a>] [<a href="https://docs.rs/crate/ergo-lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a>] <span className="text-gray-400">(Uses ergo-lib crate docs)</span> | <Link href="/Docs/developers/tooling/sigma-rust/ergo-lib-python" className="text-cyan-400 hover:underline">ergo-lib-python docs</Link></li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Usage Examples</h2>
      <p className="text-gray-300 mb-2">To get better understanding on how to use it in your project check out how its being used in the following projects:</p>
      <div className="mb-4">
        <b className="text-cyan-400">Rust:</b>
        <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
          <li><a href="https://github.com/ergoplatform/oracle-core" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Oracle Core</a></li>
          <li><a href="https://github.com/Emurgo/ergo-headless-dapp-framework" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Headless dApp Framework</a></li>
          <li><a href="https://github.com/Emurgo/ergo-node-interface" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Node Interface Library</a></li>
          <li><a href="https://github.com/spectrum-finance/spectrum-offchain-ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Spectrum Off-Chain Services for Ergo</a></li>
          <li><a href="https://github.com/Emurgo/age-usd" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">AgeUSD Stablecoin Protocol</a></li>
          <li><a href="https://github.com/ergonames/sdk/tree/master/rust" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoNames SDKs</a></li>
        </ul>
        <b className="text-cyan-400">TS/JS:</b>
        <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
          <li><a href="https://github.com/ergolabs/ergo-sdk-js" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo SDK</a> (Wasm bindings)</li>
          <li><a href="https://github.com/Emurgo/yoroi-frontend" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Yoroi wallet</a> (Wasm bindings)</li>
          <li><a href="https://github.com/ErgoWallet/ergowallet-desktop" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Desktop Wallet</a> (Wasm bindings)</li>
        </ul>
        <b className="text-cyan-400">Examples:</b>
        <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
          <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/create-transaction-demo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Create transaction demo</a> (TS)</li>
          <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/address-generation-demo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Address generation demo</a> (TS)</li>
        </ul>
      </div>
      <p className="text-gray-400 text-sm">Also take a look at tests in the sigma-rust repo where various usage scenarios were implemented.</p>
    </>
  );
} 