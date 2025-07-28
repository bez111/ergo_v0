"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Clock, Zap, CheckCircle, ListOrdered } from "lucide-react";

export default function ErgoTreeScriptValidationPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Shield className="w-8 h-8 text-emerald-400" /> Efficient Script Validation
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Understanding the process and performance requirements for validating ErgoTree scripts in blockchain transactions.
        </p>
        <Link 
          href="/Docs/developers/ergoscript-languages" 
          className="inline-flex items-center px-6 py-3 bg-emerald-500 rounded-xl font-semibold text-black hover:bg-emerald-600 transition-transform hover:scale-105 gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to ErgoScript Languages
        </Link>
      </div>

      {/* Transaction Context */}
      <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-emerald-400" /> Transaction Validation Context
        </h2>
        <p className="text-gray-300 mb-4">
          For a transaction that has an <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">INPUTS</code> collection of boxes to spend, each input box can have a script (termed as the <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">propositionBytes</code> property) that protects it. This script needs to be executed within the context of the current transaction. To maintain steady block validation of <span className="font-bold text-white">1000</span> transactions per second, a simple transaction with a single input box requires validation of 1000 scripts per second.
        </p>
      </div>

      {/* Performance Requirements */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-blue-400" /> Mining Optimization
        </h2>
        <p className="text-gray-300 mb-4">
          To increase the probability of successful mining, the block validation time should be minimized. This allows a miner to start solving the PoW puzzle as soon as possible.
        </p>
      </div>

      {/* Validation Process */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ListOrdered className="w-6 h-6 text-purple-400" /> Validation Steps
        </h2>
        <p className="text-gray-300 mb-4">
          To validate every script (of an input box), the following steps are performed:
        </p>
        <ol className="list-decimal pl-6 text-gray-300 space-y-3">
          <li>
            A Context object is created with <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">SELF = box</code>.
          </li>
          <li>
            ErgoTree is traversed to build a cost graph for cost estimation.
          </li>
          <li>
            The cost estimation is computed by evaluating the cost graph with the current context.
          </li>
          <li>
            If the cost is within the limit, the ErgoTree is evaluated using the context to obtain a sigma proposition (see <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">SigmaProp</code>).
          </li>
          <li>
            The Sigma protocol verification procedure is executed.
          </li>
        </ol>
      </div>
    </div>
  );
} 