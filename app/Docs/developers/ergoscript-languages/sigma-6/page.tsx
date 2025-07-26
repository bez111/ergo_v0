"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Sigma6Page() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigma 6.0
      </h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        Latest version features and improvements in Sigma language for enhanced smart contract development.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sigma 6.0 Overview</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma 6.0 represents a significant evolution of the Sigma language, introducing new features and improvements that enhance the developer experience and expand the capabilities of smart contracts on Ergo.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">New Features</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma 6.0 introduces several new features and improvements:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><b>Enhanced cryptographic primitives:</b> New proof systems and signature schemes</li>
        <li><b>Improved performance:</b> Optimized evaluation and reduced gas costs</li>
        <li><b>Better developer experience:</b> Enhanced error messages and debugging tools</li>
        <li><b>Extended functionality:</b> Additional built-in functions and operations</li>
        <li><b>Backward compatibility:</b> Existing contracts continue to work</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Performance Improvements</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma 6.0 includes significant performance optimizations that reduce transaction costs and improve execution speed:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li>Faster proposition evaluation</li>
        <li>Reduced memory usage</li>
        <li>Optimized cryptographic operations</li>
        <li>Improved compilation times</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Migration Guide</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        For developers using previous versions of Sigma, the migration to 6.0 is designed to be smooth with backward compatibility maintained.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">
            Core Concepts
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/global-functions" className="text-cyan-400 hover:underline">
            Global Functions
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/examples" className="text-cyan-400 hover:underline">
            Examples
          </Link>
        </li>
        <li>
          <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Sigmastate Interpreter Repository
          </a>
        </li>
      </ul>
    </>
  );
} 