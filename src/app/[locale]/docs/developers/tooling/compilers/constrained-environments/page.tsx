"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ConstrainedEnvironmentsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Using Sigma-Rust in Resource-Constrained Environments
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/compilers/sigma-rust"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compilers
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300">
          <p className="mb-6">
            The standard{' '}
            <Link href="/docs/developers/tooling/compilers/sigma-rust" className="text-cyan-400 hover:underline">
              <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code>
            </Link>{' '}
            library provides comprehensive tools for working with Ergo protocols and data structures in Rust. However, environments like hardware wallets or embedded systems often have strict limitations on code size, memory usage, and available libraries (especially the standard library, <code className="bg-neutral-800 px-2 py-1 rounded">std</code>).
          </p>
          <p className="mb-6">
            This guide outlines strategies and considerations for adapting <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> for such resource-constrained environments.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Challenges</h2>
        <div className="text-gray-300 mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Code Size:</strong> The full <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> library can be relatively large due to its extensive features and dependencies.
            </li>
            <li>
              <strong>Memory Usage:</strong> Dynamic memory allocation (<code className="bg-neutral-800 px-2 py-1 rounded">alloc</code>) might be limited or unavailable.
            </li>
            <li>
              <strong>Standard Library (<code className="bg-neutral-800 px-2 py-1 rounded">std</code>):</strong> Many embedded environments do not support the full Rust standard library (<code className="bg-neutral-800 px-2 py-1 rounded">std</code>), requiring <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> compatible code.
            </li>
            <li>
              <strong>Crypto Dependencies:</strong> The default cryptographic backend (<code className="bg-neutral-800 px-2 py-1 rounded">k256</code> crate for secp256k1 operations) might be too large or have dependencies unsuitable for the target environment.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Solutions {`&`} Approaches</h2>

        <h3 className="text-xl font-bold text-orange-400 mb-4">1. <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust-mini</code> Fork</h3>
        <div className="text-gray-300 mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Concept:</strong> A community-maintained fork specifically designed for <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> environments and reduced footprint.
            </li>
            <li>
              <strong>Repository:</strong>{' '}
              <a href="https://github.com/Alesfatalis/sigma-rust-mini/tree/no_std" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                github.com/Alesfatalis/sigma-rust-mini/tree/no_std
              </a>{' '}
              (Note: Check for the latest official or community-accepted fork if available).
            </li>
            <li>
              <strong>Benefits:</strong> Pre-configured for <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code>, likely includes necessary feature flag adjustments, and may already incorporate backend swaps.
            </li>
            <li>
              <strong>Considerations:</strong> Might lag behind the main <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> repository in terms of features or updates. Verify its maintenance status and compatibility with your required <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> version.
            </li>
            <li>
              <strong>When to Use:</strong> Often the easiest starting point for hardware wallet integration or <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> projects.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">2. <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> Builds (Manual Configuration)</h3>
        <div className="text-gray-300 mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Concept:</strong> Attempt to compile the main <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> library (or a specific subset) with the <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> feature flag enabled, potentially requiring manual adjustments to dependencies and features.
            </li>
            <li>
              <strong>How:</strong> This typically involves modifying the <code className="bg-neutral-800 px-2 py-1 rounded">Cargo.toml</code> file:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Setting <code className="bg-neutral-800 px-2 py-1 rounded">default-features = false</code>.</li>
                <li>Selectively enabling only the necessary features compatible with <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code>.</li>
                <li>Ensuring all dependencies also support <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code>.</li>
              </ul>
            </li>
            <li>
              <strong>Challenges:</strong> Can be complex, as not all features or dependencies of the main <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> library might be <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> compatible. Requires careful dependency management.
            </li>
            <li>
              <strong>When to Use:</strong> If <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust-mini</code> is unsuitable or outdated, or if you need fine-grained control over included features.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">3. Replacing the Cryptographic Backend (<code className="bg-neutral-800 px-2 py-1 rounded">k256</code> {'->'} <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code>)</h3>
        <div className="text-gray-300 mb-6">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Problem:</strong> The default <code className="bg-neutral-800 px-2 py-1 rounded">k256</code> crate used by <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> for elliptic curve operations can be large or have <code className="bg-neutral-800 px-2 py-1 rounded">std</code>-dependent features. Hardware wallets often use the more lightweight, C-based <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> library (via the <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> Rust crate).
            </li>
            <li>
              <strong>Solution:</strong> Modify <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> (or <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust-mini</code>) to use the <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crate as the backend for cryptographic operations instead of <code className="bg-neutral-800 px-2 py-1 rounded">k256</code>.
            </li>
            <li>
              <strong>Implementation Steps (High-Level):</strong>
              <ol className="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <strong>Dependency Change:</strong> Replace <code className="bg-neutral-800 px-2 py-1 rounded">k256</code> with <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> in <code className="bg-neutral-800 px-2 py-1 rounded">Cargo.toml</code>, ensuring <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> compatibility if needed (the <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crate often requires specific feature flags for <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code>).
                </li>
                <li>
                  <strong>Code Adaptation:</strong> Search the codebase for usages of <code className="bg-neutral-800 px-2 py-1 rounded">k256</code> types and functions and replace them with their <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> equivalents. Key areas include:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Secret Key / Private Key:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">k256::SecretKey</code> {'->'} <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1::SecretKey</code>.</li>
                    <li><strong>Public Key:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">k256::PublicKey</code> {'->'} <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1::PublicKey</code>.</li>
                    <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">k256::ecdsa::Signature</code> {'->'} <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1::ecdsa::Signature</code>.</li>
                    <li><strong>Key Generation:</strong> Random key generation might need adaptation.</li>
                    <li><strong>Signing/Verification:</strong> Use the signing/verification methods from the <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crate.</li>
                    <li><strong>Point Operations:</strong> Operations like point multiplication (<code className="bg-neutral-800 px-2 py-1 rounded">mul_tweak</code>) or addition (<code className="bg-neutral-800 px-2 py-1 rounded">combine</code>) needed for Diffie-Hellman proofs or signature aggregation must use the <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crate's functions. (Refer to the <a href="https://docs.rs/secp256k1/latest/secp256k1/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crate documentation</a> for specific methods).</li>
                  </ul>
                </li>
                <li>
                  <strong>Feature Flags:</strong> Ensure appropriate feature flags are enabled for both <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> and <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> to support the required operations in a <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> context.
                </li>
              </ol>
            </li>
            <li>
              <strong>Community Hints (from Keystone Integration):</strong> Developers integrating with Keystone hardware wallets successfully used this approach, specifically mentioning the need to map types like <code className="bg-neutral-800 px-2 py-1 rounded">SecretKey</code>, <code className="bg-neutral-800 px-2 py-1 rounded">PublicKey</code> and use methods like <code className="bg-neutral-800 px-2 py-1 rounded">mul_tweak</code> and <code className="bg-neutral-800 px-2 py-1 rounded">combine</code> from the <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crate.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Potential Pitfalls</h2>
        <div className="text-gray-300 mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong><code className="bg-neutral-800 px-2 py-1 rounded">global_allocator</code>:</strong> In <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> environments that still require dynamic allocation (<code className="bg-neutral-800 px-2 py-1 rounded">alloc</code>), you need to define a global allocator. Issues can arise if multiple dependencies try to define conflicting allocators.
            </li>
            <li>
              <strong>Dependency Hell:</strong> Ensuring all transitive dependencies are <code className="bg-neutral-800 px-2 py-1 rounded">no_std</code> compatible can be challenging. Use tools like <code className="bg-neutral-800 px-2 py-1 rounded">cargo tree</code> to inspect dependencies.
            </li>
            <li>
              <strong>Feature Creep:</strong> Be mindful of enabling features in <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> or its dependencies that might pull in <code className="bg-neutral-800 px-2 py-1 rounded">std</code> unexpectedly. Start with minimal features and add only what is necessary.
            </li>
            <li>
              <strong>API Differences:</strong> The <code className="bg-neutral-800 px-2 py-1 rounded">k256</code> and <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crates have different APIs. The replacement requires careful code changes, not just type renaming.
            </li>
            <li>
              <strong>Testing:</strong> Thoroughly test the modified library on the target hardware or emulator, paying close attention to cryptographic operations and memory usage.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Conclusion</h2>
        <div className="text-gray-300">
          <p>
            Adapting <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code> for resource-constrained environments is feasible but requires careful planning. Starting with <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust-mini</code> is often the recommended approach. If modifications are needed, replacing the cryptographic backend with the <code className="bg-neutral-800 px-2 py-1 rounded">secp256k1</code> crate is a common and necessary step, particularly for hardware wallet integration. Always prioritize thorough testing on the target platform.
          </p>
        </div>
      </div>
    </>
  );
} 