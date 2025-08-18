import React from "react";
import { ArrowLeft, Shield, Database, Link as LinkIcon, BookOpen, Clock, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AVLTreesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-orange-400" />
        AVL Trees in Ergo: An Overview
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/cryptographic-primitives"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Cryptographic Primitives
        </Link>
      </div>

      <div className="space-y-8">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <p className="text-gray-300 mb-6">
            AVL trees, a type of highly efficient authenticated <a href="/docs/developers/cryptographic-primitives/data-structures" className="text-blue-400 hover:text-blue-300 underline">data structure</a>, are natively supported in Ergo. They offer numerous advantages, such as the ability to authenticate data properties without the need to access the entire dataset. This document provides a comprehensive overview of AVL trees, their integration with Ergo, and their performance metrics.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" />
            The Role of AVL Trees in Ergo
          </h2>
          <p className="text-gray-300 mb-6">
            Ergo utilizes AVL trees to bolster the security and efficiency of a variety of applications. These authenticated dictionary data structures facilitate verification and updates without the need for trust in the prover. By curtailing the length of modification proofs and reducing storage requirements for verification, AVL trees provide a sturdy foundation for data integrity within the Ergo ecosystem.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <LinkIcon className="w-6 h-6 text-green-400" />
            Integrating AVL Trees with Ergo Using GetBlok Plasma
          </h2>
          <p className="text-gray-300 mb-6">
            Developers can effortlessly integrate AVL trees into their Ergo applications with the help of the <a href="/docs/developers/cryptographic-primitives/plasma" className="text-blue-400 hover:text-blue-300 underline">GetBlok Plasma</a> library, which is built on the <a href="/docs/developers/appkit" className="text-blue-400 hover:text-blue-300 underline">Ergo Appkit</a>. This library streamlines the integration process by offering an abstraction layer that aids in incorporating AVL trees (also referred to as Plasma) into <a href="/docs/developers/off-chain" className="text-blue-400 hover:text-blue-300 underline">off-chain code</a>. It provides developers with a convenient method to utilize AVL trees as a <a href="/docs/developers/layer2" className="text-blue-400 hover:text-blue-300 underline">Layer-2 scaling solution</a> in <a href="/docs/developers/ergoscript" className="text-blue-400 hover:text-blue-300 underline">smart contracts</a>, off-chain code, and distributed systems that manage the Plasma infrastructure.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-yellow-400" />
            Efficiency and Proof Size of AVL Trees
          </h2>
          <p className="text-gray-300 mb-6">
            The compact proof sizes of AVL trees significantly contribute to their efficiency. AVL trees in Ergo provide succinct and effective authentication proofs, ensuring streamlined storage and verification processes within the <a href="/docs/protocol-overview" className="text-blue-400 hover:text-blue-300 underline">Ergo blockchain</a>.
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">Proof Size Comparison</h3>
              <div className="mb-4">
                <Image
                  src="/assets/img/avl/proof_size_comparison.png"
                  alt="Proof Size Comparison - AVL+ tree vs Ethereum trie and AVL tree vs Treap/Skiplist"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                The left graph shows proof size per modification comparing our AVL+ tree with Ethereum trie. The right graph compares AVL tree with Treap and Skiplist data structures. AVL trees consistently demonstrate smaller proof sizes across all tree sizes.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">Proof Size with Compression</h3>
              <div className="mb-4">
                <Image
                  src="/assets/img/avl/proof_size_compression.png"
                  alt="Proof Size with Compression Methods"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                Comparison of proof size per modification using different compression methods: without compression, gzip compression, and our specialized compression. Our compression method shows significant improvements, especially for larger batch sizes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-400" />
            Validation and Verification Time
          </h2>
          <p className="text-gray-300 mb-6">
            AVL trees in Ergo showcase superior performance in validation and verification processes. The verification time is optimized to enable quick and efficient data authentication. This efficient validation process enhances the overall performance and scalability of Ergo applications.
          </p>

          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-3 text-green-400">Block Processing Time</h3>
            <div className="mb-4">
              <Image
                src="/assets/img/avl/block_processing_time.png"
                alt="Block Processing Time - Full verifier vs AVL+ verifier"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-300">
              Comparison of block processing time between full verifier and our AVL+ verifier. The AVL+ verifier maintains consistent, low processing time regardless of blockchain size, while the full verifier shows increasing processing time as the blockchain grows.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-400" />
            Conclusion
          </h2>
          <p className="text-gray-300 mb-6">
            By leveraging AVL trees, developers can significantly improve the security, efficiency, and scalability of their Ergo projects.
          </p>
          <p className="text-gray-300">
            For more in-depth information, please refer to the <a href="https://eprint.iacr.org/2016/994.pdf" className="text-blue-400 hover:text-blue-300 underline">Improving authenticated dynamic dictionaries, with applications to cryptocurrencies</a> paper.
          </p>
        </section>
      </div>
    </div>
  );
} 