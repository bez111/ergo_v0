"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SigmaRustPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigma Rust
      </h1>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <Link
          href="/Docs/developers/tooling/compilers"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compilers
        </Link>
        <Link
          href="/Docs/developers/tooling/compilers/constrained-environments"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          Constrained Environments
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300">
          <p className="mb-6">
            Rust implementation of{' '}
            <Link href="/Docs/developers/tooling/compilers/sigmastate-interpreter" className="text-cyan-400 hover:underline">
              ErgoScript (sigmastate-interpreter)
            </Link>{' '}
            cryptocurrency scripting language.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Crates</h2>
        <div className="text-gray-300 mb-6">
          <div className="space-y-6">
            <div>
              <p className="mb-2">
                <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergo-lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">
                  ergo-lib
                </a>{' '}
                <a href="https://crates.io/crates/ergo-lib" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/crates/v/ergo-lib.svg" alt="Latest Version" className="inline" />
                </a>{' '}
                <a href="https://docs.rs/crate/ergo-lib" target="_blank" rel="noopener noreferrer">
                  <img src="https://docs.rs/ergo-lib/badge.svg" alt="Documentation" className="inline" />
                </a>
              </p>
              <p>
                Overarching crate exposing wallet-related features: chain types (transactions, boxes, etc.), JSON serialization, box selection for tx inputs, tx builder and signing. Exports other crates API, probably the only crate you'd need to import.
              </p>
            </div>

            <div>
              <p className="mb-2">
                <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergotree-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">
                  ergotree-interpreter
                </a>{' '}
                <a href="https://crates.io/crates/ergotree-interpreter" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/crates/v/ergotree-interpreter.svg" alt="Latest Version" className="inline" />
                </a>{' '}
                <a href="https://docs.rs/crate/ergotree-interpreter" target="_blank" rel="noopener noreferrer">
                  <img src="https://docs.rs/ergotree-interpreter/badge.svg" alt="Documentation" className="inline" />
                </a>
              </p>
              <p>ErgoTree interpreter</p>
            </div>

            <div>
              <p className="mb-2">
                <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergotree-ir" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">
                  ergotree-ir
                </a>{' '}
                <a href="https://crates.io/crates/ergotree-ir" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/crates/v/ergotree-ir.svg" alt="Latest Version" className="inline" />
                </a>{' '}
                <a href="https://docs.rs/crate/ergotree-ir" target="_blank" rel="noopener noreferrer">
                  <img src="https://docs.rs/ergotree-ir/badge.svg" alt="Documentation" className="inline" />
                </a>
              </p>
              <p>ErgoTree IR and serialization.</p>
            </div>

            <div>
              <p className="mb-2">
                <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">
                  ergoscript-compiler
                </a>{' '}
                <a href="https://crates.io/crates/ergoscript-compiler" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/crates/v/ergoscript-compiler.svg" alt="Latest Version" className="inline" />
                </a>{' '}
                <a href="https://docs.rs/crate/ergoscript-compiler" target="_blank" rel="noopener noreferrer">
                  <img src="https://docs.rs/ergoscript-compiler/badge.svg" alt="Documentation" className="inline" />
                </a>
              </p>
              <p>ErgoScript compiler.</p>
            </div>

            <div>
              <p className="mb-2">
                <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/sigma-ser" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">
                  sigma-ser
                </a>{' '}
                <a href="https://crates.io/crates/sigma-ser" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/crates/v/sigma-ser.svg" alt="Latest Version" className="inline" />
                </a>{' '}
                <a href="https://docs.rs/crate/sigma-ser" target="_blank" rel="noopener noreferrer">
                  <img src="https://docs.rs/sigma-ser/badge.svg" alt="Documentation" className="inline" />
                </a>
              </p>
              <p>Ergo binary serialization primitives.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Bindings</h3>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            This section lists available language bindings for <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code>, allowing developers to interact with the Ergo blockchain using various programming languages.
          </p>
          
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Wasm:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Crate:{' '}
                  <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-wasm</code>
                  </a>{' '}
                  <a href="https://crates.io/crates/ergo-lib-wasm" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/crates/v/ergo-lib-wasm.svg" alt="Latest Version" className="inline" />
                  </a>{' '}
                  <a href="https://docs.rs/crate/ergo-lib-wasm" target="_blank" rel="noopener noreferrer">
                    <img src="https://docs.rs/ergo-lib-wasm/badge.svg" alt="Documentation" className="inline" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>JavaScript / TypeScript:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Browser:{' '}
                  <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-wasm-browser</code>
                  </a>{' '}
                  <a href="https://www.npmjs.com/package/ergo-lib-wasm-browser" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/npm/v/ergo-lib-wasm-browser" alt="Latest version" className="inline" />
                  </a>
                </li>
                <li>
                  Node.js:{' '}
                  <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-wasm-nodejs</code>
                  </a>{' '}
                  <a href="https://www.npmjs.com/package/ergo-lib-wasm-nodejs" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/npm/v/ergo-lib-wasm-nodejs" alt="Latest version" className="inline" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Swift (iOS):</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Repo:{' '}
                  <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-ios" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-ios</code>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Java / JVM:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Repo:{' '}
                  <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-jni" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-jni</code>
                  </a>{' '}
                  <a href="https://crates.io/crates/ergo-lib-jni" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/crates/v/ergo-lib-jni.svg" alt="Latest Version" className="inline" />
                  </a>{' '}
                  <a href="https://docs.rs/crate/ergo-lib-jni" target="_blank" rel="noopener noreferrer">
                    <img src="https://docs.rs/ergo-lib-jni/badge.svg" alt="Documentation" className="inline" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>C:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Repo:{' '}
                  <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-c" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-c</code>
                  </a>{' '}
                  <a href="https://crates.io/crates/ergo-lib-c" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/crates/v/ergo-lib-c.svg" alt="Latest Version" className="inline" />
                  </a>{' '}
                  <a href="https://docs.rs/crate/ergo-lib-c" target="_blank" rel="noopener noreferrer">
                    <img src="https://docs.rs/ergo-lib-c/badge.svg" alt="Documentation" className="inline" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Go:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Repo:{' '}
                  <a href="https://github.com/ergoplatform/ergo-lib-go" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-go</code>
                  </a>{' '}
                  <a href="https://pkg.go.dev/github.com/ergoplatform/ergo-lib-go" target="_blank" rel="noopener noreferrer">
                    <img src="https://pkg.go.dev/badge/github.com/ergoplatform/ergo-lib-go.svg" alt="Go Reference" className="inline" />
                  </a>{' '}
                  <em>(Note: Community maintained)</em>
                </li>
              </ul>
            </li>
            <li>
              <strong>Ruby:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Repo:{' '}
                  <a href="https://github.com/thedlop/sigma_rb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>sigma_rb</code>
                  </a>{' '}
                  <a href="https://badge.fury.io/rb/sigma_rb" target="_blank" rel="noopener noreferrer">
                    <img src="https://badge.fury.io/rb/sigma_rb.svg" alt="Gem Version" className="inline" />
                  </a>{' '}
                  <em>(Note: Community maintained)</em>
                </li>
              </ul>
            </li>
            <li>
              <strong>Python:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Package:{' '}
                  <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-python" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code>ergo-lib-python</code>
                  </a>{' '}
                  <a href="https://badge.fury.io/py/ergo-lib" target="_blank" rel="noopener noreferrer">
                    <img src="https://badge.fury.io/py/ergo-lib.svg" alt="PyPI version" className="inline" />
                  </a>{' '}
                  <a href="https://docs.rs/crate/ergo-lib" target="_blank" rel="noopener noreferrer">
                    <img src="https://docs.rs/ergo-lib/badge.svg" alt="Documentation" className="inline" />
                  </a>{' '}
                  <em>(Note: Uses ergo-lib crate docs)</em>
                </li>
                <li>
                  See also:{' '}
                  <Link href="/Docs/developers/tooling/programming-languages/others/python/ergo-lib-python" className="text-cyan-400 hover:underline">
                    ergo-lib-python docs
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Usage Examples</h2>
        <div className="text-gray-300">
          <p className="mb-4">
            To get better understanding on how to use it in your project check out how its being used in the following projects:
          </p>
          
          <p className="font-bold mb-2">Rust:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>
              <a href="https://github.com/ergoplatform/oracle-core" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Oracle Core
              </a>;
            </li>
            <li>
              <a href="https://github.com/Emurgo/ergo-headless-dapp-framework" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Ergo Headless dApp Framework
              </a>;
            </li>
            <li>
              <a href="https://github.com/Emurgo/ergo-node-interface" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Ergo Node Interface Library
              </a>;
            </li>
            <li>
              <a href="https://github.com/spectrum-finance/spectrum-offchain-ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Spectrum Off-Chain Services for Ergo
              </a>;
            </li>
            <li>
              <a href="https://github.com/Emurgo/age-usd" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                AgeUSD Stablecoin Protocol
              </a>;
            </li>
            <li>
              <a href="https://github.com/ergonames/sdk/tree/master/rust" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                ErgoNames SDKs
              </a>
            </li>
          </ul>

          <p className="font-bold mb-2">TS/JS:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>
              <a href="https://github.com/ergolabs/ergo-sdk-js" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Ergo SDK
              </a>{' '}
              (Wasm bindings);
            </li>
            <li>
              <a href="https://github.com/Emurgo/yoroi-frontend" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Yoroi wallet
              </a>{' '}
              (Wasm bindings);
            </li>
            <li>
              <a href="https://github.com/ErgoWallet/ergowallet-desktop" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Ergo Desktop Wallet
              </a>{' '}
              (Wasm bindings);
            </li>
          </ul>

          <p className="font-bold mb-2">Examples:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>
              <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/create-transaction-demo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Create transaction demo
              </a>{' '}
              (TS)
            </li>
            <li>
              <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/address-generation-demo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Address generation demo
              </a>{' '}
              (TS)
            </li>
          </ul>

          <p>Also take a look at tests where various usage scenarios were implemented.</p>
        </div>
      </div>
    </>
  );
} 