"use client";

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function SigmaRustConstrainedPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Using Sigma-Rust in Resource-Constrained Environments</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/pathways/sigma-rust"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-gray-300 mb-4">The standard <a href="/docs/developers/tooling/pathways/sigma-rust" className="text-cyan-400 hover:underline">sigma-rust</a> library provides comprehensive tools for working with Ergo protocols and data structures in Rust. However, environments like hardware wallets or embedded systems often have strict limitations on code size, memory usage, and available libraries (especially the standard library, <code>std</code>).</p>
      <p className="text-gray-300 mb-4">This guide outlines strategies and considerations for adapting <code>sigma-rust</code> for such resource-constrained environments.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Challenges</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Code Size:</b> The full <code>sigma-rust</code> library can be relatively large due to its extensive features and dependencies.</li>
        <li><b>Memory Usage:</b> Dynamic memory allocation (<code>alloc</code>) might be limited or unavailable.</li>
        <li><b>Standard Library (<code>std</code>):</b> Many embedded environments do not support the full Rust standard library (<code>std</code>), requiring <code>no_std</code> compatible code.</li>
        <li><b>Crypto Dependencies:</b> The default cryptographic backend (<code>k256</code> crate for secp256k1 operations) might be too large or have dependencies unsuitable for the target environment.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Solutions & Approaches</h2>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">1. sigma-rust-mini Fork</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Concept:</b> A community-maintained fork specifically designed for <code>no_std</code> environments and reduced footprint.</li>
        <li><b>Repository:</b> <a href="https://github.com/Alesfatalis/sigma-rust-mini/tree/no_std" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Alesfatalis/sigma-rust-mini/tree/no_std</a></li>
        <li><b>Benefits:</b> Pre-configured for <code>no_std</code>, likely includes necessary feature flag adjustments, and may already incorporate backend swaps.</li>
        <li><b>Considerations:</b> Might lag behind the main <code>sigma-rust</code> repository in terms of features or updates. Verify its maintenance status and compatibility with your required <code>sigma-rust</code> version.</li>
        <li><b>When to Use:</b> Often the easiest starting point for hardware wallet integration or <code>no_std</code> projects.</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">2. no_std Builds (Manual Configuration)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Concept:</b> Attempt to compile the main <code>sigma-rust</code> library (or a specific subset) with the <code>no_std</code> feature flag enabled, potentially requiring manual adjustments to dependencies and features.</li>
        <li><b>How:</b> This typically involves modifying the <code>Cargo.toml</code> file:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Setting <code>default-features = false</code>.</li>
            <li>Selectively enabling only the necessary features compatible with <code>no_std</code>.</li>
            <li>Ensuring all dependencies also support <code>no_std</code>.</li>
          </ul>
        </li>
        <li><b>Challenges:</b> Can be complex, as not all features or dependencies of the main <code>sigma-rust</code> library might be <code>no_std</code> compatible. Requires careful dependency management.</li>
        <li><b>When to Use:</b> If <code>sigma-rust-mini</code> is unsuitable or outdated, or if you need fine-grained control over included features.</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">3. Replacing the Cryptographic Backend (k256 -&gt; secp256k1)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Problem:</b> The default <code>k256</code> crate used by <code>sigma-rust</code> for elliptic curve operations can be large or have <code>std</code>-dependent features. Hardware wallets often use the more lightweight, C-based <code>secp256k1</code> library (via the <code>secp256k1</code> Rust crate).</li>
        <li><b>Solution:</b> Modify <code>sigma-rust</code> (or <code>sigma-rust-mini</code>) to use the <code>secp256k1</code> crate as the backend for cryptographic operations instead of <code>k256</code>.</li>
        <li><b>Implementation Steps (High-Level):</b>
          <ol className="list-decimal pl-6 mt-1 space-y-1">
            <li><b>Dependency Change:</b> Replace <code>k256</code> with <code>secp256k1</code> in <code>Cargo.toml</code>, ensuring <code>no_std</code> compatibility if needed (the <code>secp256k1</code> crate often requires specific feature flags for <code>no_std</code>).</li>
            <li><b>Code Adaptation:</b> Search the codebase for usages of <code>k256</code> types and functions and replace them with their <code>secp256k1</code> equivalents. Key areas include:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li><b>Secret Key / Private Key:</b> <code>k256::SecretKey</code> -&gt; <code>secp256k1::SecretKey</code>.</li>
                <li><b>Public Key:</b> <code>k256::PublicKey</code> -&gt; <code>secp256k1::PublicKey</code>.</li>
                <li><b>Signature:</b> <code>k256::ecdsa::Signature</code> -&gt; <code>secp256k1::ecdsa::Signature</code>.</li>
                <li><b>Key Generation:</b> Random key generation might need adaptation.</li>
                <li><b>Signing/Verification:</b> Use the signing/verification methods from the <code>secp256k1</code> crate.</li>
                <li><b>Point Operations:</b> Operations like point multiplication (<code>mul_tweak</code>) or addition (<code>combine</code>) needed for Diffie-Hellman proofs or signature aggregation must use the <code>secp256k1</code> crate's functions. (Refer to the <a href="https://docs.rs/secp256k1/latest/secp256k1/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">secp256k1 crate documentation</a> for specific methods).</li>
              </ul>
            </li>
            <li><b>Feature Flags:</b> Ensure appropriate feature flags are enabled for both <code>sigma-rust</code> and <code>secp256k1</code> to support the required operations in a <code>no_std</code> context.</li>
          </ol>
        </li>
        <li><b>Community Hints (from Keystone Integration):</b> Developers integrating with Keystone hardware wallets successfully used this approach, specifically mentioning the need to map types like <code>SecretKey</code>, <code>PublicKey</code> and use methods like <code>mul_tweak</code> and <code>combine</code> from the <code>secp256k1</code> crate.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Potential Pitfalls</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>global_allocator:</b> In <code>no_std</code> environments that still require dynamic allocation (<code>alloc</code>), you need to define a global allocator. Issues can arise if multiple dependencies try to define conflicting allocators.</li>
        <li><b>Dependency Hell:</b> Ensuring all transitive dependencies are <code>no_std</code> compatible can be challenging. Use tools like <code>cargo tree</code> to inspect dependencies.</li>
        <li><b>Feature Creep:</b> Be mindful of enabling features in <code>sigma-rust</code> or its dependencies that might pull in <code>std</code> unexpectedly. Start with minimal features and add only what is necessary.</li>
        <li><b>API Differences:</b> The <code>k256</code> and <code>secp256k1</code> crates have different APIs. The replacement requires careful code changes, not just type renaming.</li>
        <li><b>Testing:</b> Thoroughly test the modified library on the target hardware or emulator, paying close attention to cryptographic operations and memory usage.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Conclusion</h2>
      <p className="text-gray-300 mb-4">Adapting <code>sigma-rust</code> for resource-constrained environments is feasible but requires careful planning. Starting with <code>sigma-rust-mini</code> is often the recommended approach. If modifications are needed, replacing the cryptographic backend with the <code>secp256k1</code> crate is a common and necessary step, particularly for hardware wallet integration. Always prioritize thorough testing on the target platform.</p>
    </>
  );
} 