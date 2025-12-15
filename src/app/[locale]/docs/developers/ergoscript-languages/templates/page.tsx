"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, FileText, Database, Zap } from "lucide-react";

export default function ErgoTreeTemplatesPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <FileText className="w-8 h-8 text-teal-400" /> Templatized ErgoTree
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Understanding how constants are segregated from ErgoTree scripts to enable efficient caching and optimization.
        </p>
        <Link 
          href="/docs/developers/ergoscript-languages" 
          className="inline-flex items-center px-6 py-3 bg-teal-500 rounded-xl font-semibold text-black hover:bg-teal-600 transition-transform hover:scale-105 gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to ErgoScript Languages
        </Link>
      </div>

      {/* Problem Statement */}
      <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-teal-400" /> Constant Segregation
        </h2>
        <p className="text-gray-300 mb-4">
          One issue with embedding constants directly in contracts is that it prevents effective optimization through caching. To address this, each constant in the body of an ErgoTree can be replaced with an indexed placeholder node (<code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">ConstantPlaceholder</code>, OpCode 63). Each placeholder has an index referring to the constant in a separate constants collection associated with the ErgoTree. This transformation is part of the compilation process and is performed ahead of time, meaning each ErgoTree will have an array containing all the constants extracted from its body. Each placeholder refers to a constant by its index in this array.
        </p>
      </div>

      {/* Serialization Format */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-400" /> Serialization Format
        </h2>
        <p className="text-gray-300 mb-4">
          Therefore, the format of the serialized ErgoTree contains:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>The bytes representing a collection of segregated constants.</li>
          <li>The bytes representing the script expression with placeholders instead of constants.</li>
        </ul>
      </div>

      {/* Optimization Benefits */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-400" /> Template Caching
        </h2>
        <p className="text-gray-300">
          This separation means that we can use the script expression bytes (the template without constants) as a key in a cache. After the constants are segregated, what remains is the template. Hence, instead of applying evaluation steps 1-2 (reduction and cost estimation) from section D.2.1 to constant-full scripts, we can apply them to these constant-less templates. Before applying the final steps 3-5 (signature verification), we need to bind the placeholders with the actual values taken from the constants collection and then evaluate both the cost graph and the ErgoTree.
        </p>
      </div>
    </div>
  );
} 