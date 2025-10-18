"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap, FileCode, Settings, ExternalLink } from "lucide-react";

export default function ErgoTreeScriptOptimisationPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-400" /> Potential Script Processing Optimization
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Techniques for optimizing ErgoScript compilation and reducing ErgoTree size through advanced processing methods.
        </p>
        <Link 
          href="/docs/developers/ergoscript-languages" 
          className="inline-flex items-center px-6 py-3 bg-yellow-500 rounded-xl font-semibold text-black hover:bg-yellow-600 transition-transform hover:scale-105 gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to ErgoScript Languages
        </Link>
      </div>

      {/* Compilation Process */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileCode className="w-6 h-6 text-yellow-400" /> Compilation and Optimization
        </h2>
        <p className="text-gray-300 mb-4">
          Before an ErgoScript contract can be stored in a blockchain, it must be compiled from its source code into ErgoTree and then serialized into a byte array. The ErgoTree compiler, due to its purely functional graph-based IR, can perform various optimizations to reduce the tree's size. This results in normalization/unification, where different original scripts may compile into identical ErgoTrees and, consequently, identical serialized bytes.
        </p>
      </div>

      {/* Constant Problem */}
      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-red-400" /> Constants Challenge
        </h2>
        <p className="text-gray-300 mb-4">
          The obstacle to this optimization is the constants embedded in contracts. A simple solution to this problem is to avoid embedding constants. Each constant in the body of ErgoTree can be replaced with an indexed placeholder node. Each placeholder has an index of the constant in the constants collection of ErgoTree.
        </p>
      </div>

      {/* Serialization Solution */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-400" /> Optimized Format
        </h2>
        <p className="text-gray-300 mb-4">
          The format of serialized ErgoTree thus contains the bytes of a collection with segregated constants and the bytes of script expression with placeholders.
        </p>
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mt-4">
          <p className="text-gray-300 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <a 
              href="https://github.com/ergoplatform/eips/blob/master/eip-0005.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              EIP5 is based on this ErgoTree feature
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 