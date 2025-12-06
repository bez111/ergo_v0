
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

export default function HardwareWalletIntegrationPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
        Hardware Wallet Integration with sigma-rust
      </h1>
      <h2 className="text-2xl font-bold mt-10 mb-4">Introduction</h2>
      <p className="text-gray-300 mb-4">
        Integrating Ergo support into hardware wallets (like Ledger, Trezor, Keystone, etc.) presents unique challenges due to the resource-constrained nature of these devices (limited memory, processing power, and no standard library/OS). The standard <Link href="../sigma-rust" className="text-cyan-400 hover:underline">sigma-rust</Link> library, while comprehensive, relies on Rust's standard library (<code>std</code>) and certain dependencies that might be too heavy or unsuitable for embedded environments.
      </p>
      <p className="text-gray-300 mb-8">
        This guide provides developers with pointers and strategies for adapting <code>sigma-rust</code> functionality for hardware wallet integration, based on community discussions and efforts.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Key Challenges</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8">
        <li><b>No <code>std</code>:</b> Hardware wallets typically run bare-metal or on a minimal RTOS, lacking Rust's standard library (<code>std</code>). Code must be compatible with <code>no_std</code>.</li>
        <li><b>Limited Resources:</b> Memory (RAM and flash) and CPU cycles are scarce. Libraries and cryptographic operations must be efficient.</li>
        <li><b>Dependency Bloat:</b> Large dependencies can quickly exceed storage limits.</li>
        <li><b>Cryptographic Primitives:</b> Hardware wallets often have optimized, built-in implementations of core cryptographic primitives (like secp256k1) that should ideally be leveraged instead of pulling in separate library implementations.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Adapting <code>sigma-rust</code>: Strategies and Tools</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">1. Using <code>sigma-rust-mini</code> and <code>no_std</code></h3>
      <p className="text-gray-300 mb-4">
        A community fork/effort, often referred to as <code>sigma-rust-mini</code>, aims to provide a <code>no_std</code>-compatible subset of <code>sigma-rust</code>.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>
          <b>Repository (Example Fork):</b> <a href="https://github.com/Alesfatalis/sigma-rust-mini/tree/no_std" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">github.com/Alesfatalis/sigma-rust-mini/tree/no_std</a> (Note: Check for the latest official or community-maintained versions).
        </li>
        <li>
          <b><code>no_std</code> Feature Flag:</b> When using such forks or potentially future versions of <code>sigma-rust</code>, look for a <code>no_std</code> feature flag in <code>Cargo.toml</code> to enable compatibility. This typically excludes parts of the library relying on <code>std</code>.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Replacing Cryptographic Backends (k256 vs. secp256k1)</h3>
      <p className="text-gray-300 mb-4">
        <code>sigma-rust</code> often uses the <a href="https://crates.io/crates/k256" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">k256</a> crate for secp256k1 operations. Hardware wallets usually have their own optimized <code>secp256k1</code> implementations (often using the <a href="https://crates.io/crates/secp256k1" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">secp256k1</a> crate or a C library). To avoid duplicate code and leverage hardware optimizations, you'll likely need to:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>Fork <code>sigma-rust</code> (or <code>sigma-rust-mini</code>):</b> Modify the necessary parts of the library to use the hardware wallet's preferred <code>secp256k1</code> backend instead of <code>k256</code>.</li>
        <li><b>Focus Areas:</b> Pay close attention to areas involving key generation, signing, verification, and Diffie-Hellman operations.</li>
        <li><b>Key Types:</b> When working with the <code>secp256k1</code> crate, you'll typically use types like:
          <ul className="list-disc pl-6">
            <li><code>secp256k1::SecretKey</code></li>
            <li><code>secp256k1::PublicKey</code></li>
            <li><code>secp256k1::ecdsa::Signature</code></li>
          </ul>
        </li>
        <li><b>Relevant Methods (Hints from Dev Chat):</b> Community members have pointed towards needing methods like:
          <ul className="list-disc pl-6">
            <li><code>PublicKey::mul_tweak</code>: For operations related to key derivation or tweaking.</li>
            <li><code>PublicKey::combine</code>: For combining public keys (e.g., in multi-sig or aggregated signatures).</li>
            <li>Consult the <a href="https://docs.rs/secp256k1/latest/secp256k1/" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">secp256k1 crate documentation</a> for details on using its API.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Minimizing Dependencies</h3>
      <p className="text-gray-300 mb-4">
        Carefully review the dependency tree of the <code>sigma-rust</code> components you intend to use. Remove or replace dependencies that are too large or rely on <code>std</code>. This might involve:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-8">
        <li>Using feature flags to disable unused functionality.</li>
        <li>Replacing crates with lighter-weight or <code>no_std</code> alternatives where possible.</li>
        <li>Potentially re-implementing certain non-cryptographic helper functions if their dependencies are problematic.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Core Functionality to Port</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8">
        <li><b>Key Derivation:</b> Deriving child keys from a master seed according to <Link href="../eip3" className="text-cyan-400 hover:underline">EIP-3</Link>.</li>
        <li><b>Address Generation:</b> Generating Ergo addresses from public keys.</li>
        <li><b>Transaction Parsing:</b> Securely parsing transaction details for display and user confirmation.</li>
        <li><b>Transaction Signing:</b> Signing the transaction digest using the derived private key. This is the most critical part and must use the hardware wallet's secure key storage and signing mechanism.</li>
        <li><b>ErgoTree Serialization/Hashing:</b> Potentially needed for constructing parts of the transaction message to be signed.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
      <p className="text-gray-300 mb-8">
        Integrating Ergo with hardware wallets requires careful adaptation of existing libraries like <code>sigma-rust</code>. Leveraging <code>no_std</code> compatible forks/versions, replacing cryptographic backends to use the device's optimized implementations (like <code>secp256k1</code>), and minimizing dependencies are key strategies. This is a complex task often requiring deep knowledge of both the Ergo protocol and embedded Rust development. Collaboration within the developer community is crucial for advancing hardware wallet support.
      </p>
    </>
  );
} 