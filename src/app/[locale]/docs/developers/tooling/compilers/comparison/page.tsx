"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function ComparisonPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigma-Rust vs SigmaState Interpreter
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/compilers"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compilers
        </Link>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. **Origin and Completeness**</h2>

        <div className="text-gray-300 mb-6">
          <h3 className="text-xl font-bold text-orange-400 mb-4">
            <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>:
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Original Implementation</strong>: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> is the original implementation of the ErgoTree interpreter and other core components in the ErgoScript ecosystem. It was designed from the ground up within the Scala ecosystem and serves as the reference implementation for ErgoScript evaluation, compilation, and execution.
            </li>
            <li>
              <strong>Feature Completeness</strong>: As the original and most mature implementation, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> is more feature-complete. It includes all the necessary components for fully interpreting ErgoScripts, handling advanced cryptographic protocols, and providing comprehensive support for all ErgoTree features.
            </li>
            <li>
              <strong>Maturity</strong>: Being the original, it has undergone extensive testing, optimizations, and integration within the larger Ergo ecosystem, making it the go-to implementation for many production-level Ergo applications.
            </li>
          </ul>
        </div>

        <div className="text-gray-300 mb-6">
          <h3 className="text-xl font-bold text-orange-400 mb-4">
            <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code>:
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Ported Implementation</strong>: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> is a port of the <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> into Rust. It was created to bring the benefits of Rust, such as performance and memory safety, to the Ergo ecosystem, especially for environments where Rust's strengths (like WASM compilation and low-level system programming) are advantageous.
            </li>
            <li>
              <strong>Feature Completeness</strong>: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> is still in the process of achieving feature parity with <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>. While it covers most of the core functionalities required for ErgoTree interpretation and basic ErgoScript execution, some of the more advanced features and optimizations available in <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> may not yet be fully implemented in <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code>.
            </li>
            <li>
              <strong>Development Focus</strong>: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> is actively developed, with a focus on gradually reaching full parity with <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>. However, due to the complexities of the ErgoScript language and the ErgoTree interpreter, this process takes time, and there may be gaps in coverage compared to the original Scala implementation.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. **Use Case Differentiation**</h2>

        <div className="text-gray-300 mb-6">
          <h3 className="text-xl font-bold text-orange-400 mb-4">
            <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>:
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Primary Use Case</strong>: Given its completeness, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> is typically used in scenarios where full ErgoScript support is required, such as in Ergo full nodes, complex smart contract deployments, and other environments where the comprehensive feature set of the ErgoTree interpreter is necessary.
            </li>
            <li>
              <strong>Integration</strong>: It's deeply integrated into the broader Scala and JVM-based Ergo ecosystem, making it ideal for use in backend services, large-scale distributed systems, and enterprise applications.
            </li>
          </ul>
        </div>

        <div className="text-gray-300 mb-6">
          <h3 className="text-xl font-bold text-orange-400 mb-4">
            <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code>:
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Primary Use Case</strong>: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> is often chosen for environments where Rust's performance and safety are critical, such as in lightweight clients, mobile applications, browser-based dApps (through WASM), or systems where direct Rust integration is preferred. However, developers may need to consider the current state of feature parity with <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> before relying on <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> for advanced ErgoScript functionalities.
            </li>
            <li>
              <strong>Incremental Adoption</strong>: Developers may start with <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> for simpler use cases and gradually adopt it as more features are implemented, particularly in environments where Rust's strengths are a significant advantage.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. **Development Status and Roadmap**</h2>

        <div className="text-gray-300 mb-6">
          <h3 className="text-xl font-bold text-orange-400 mb-4">
            <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>:
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Stability</strong>: As the original and more mature implementation, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> has reached a high level of stability and is considered the benchmark for ErgoScript execution.
            </li>
            <li>
              <strong>Ongoing Development</strong>: While <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> continues to be developed and optimized, much of the core functionality is well-established, with ongoing efforts focused on performance improvements, optimizations, and supporting new features as the Ergo blockchain evolves.
            </li>
          </ul>
        </div>

        <div className="text-gray-300 mb-6">
          <h3 className="text-xl font-bold text-orange-400 mb-4">
            <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code>:
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Active Development</strong>: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> is actively being developed to catch up with the features and capabilities of <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>. The roadmap typically involves implementing missing features, optimizing performance, and expanding support for more complex ErgoScripts.
            </li>
            <li>
              <strong>Community Contributions</strong>: Given the open-source nature of both projects, contributions from the community help drive <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> towards full feature parity. Developers familiar with both Rust and Scala can contribute to aligning the two implementations.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Summary</h2>

        <div className="text-gray-300 mb-6">
          In summary, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> is the original, feature-complete implementation of the ErgoTree interpreter and associated tools, developed in Scala and deeply integrated into the Ergo ecosystem. <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigma-rust</code> is a port to Rust, offering many of the same core functionalities but still working towards full parity with <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>. The choice between the two often depends on the specific requirements of the project, including the need for Rust's performance and memory safety features versus the completeness and maturity of the Scala-based <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>.
        </div>
      </div>
    </>
  );
} 