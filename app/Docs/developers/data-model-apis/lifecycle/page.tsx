import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, Box, Zap, Key, Clock, Trash2 } from 'lucide-react';

export default function BoxLifecyclePage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <RefreshCw className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Box Lifecycle
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding the journey of a box from creation to destruction in the Ergo blockchain
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Data Model APIs
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8 mb-8">
        <p className="text-gray-300 mb-6">
          This page describes the journey of a box from creation to spending and destruction in the Ergo blockchain.
        </p>

        {/* Stages of a Box */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
            <Box className="w-6 h-6" />
            Stages of a Box
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-green-400">1. Creation</h3>
              </div>
              <p className="text-gray-300 text-sm">
                A box is generated as an output of a transaction
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-blue-400">2. Existence</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The box remains in the UTXO set, available to be spent
              </p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Key className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-purple-400">3. Spending</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The box is used as an input in a new transaction
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-400">4. Destruction</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The box is removed from the UTXO set after being spent
              </p>
            </div>
          </div>
        </div>

        {/* Key Characteristics */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Box className="w-6 h-6" />
            Key Characteristics
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-cyan-500/20 rounded-lg flex items-center justify-center mt-0.5">
                <Box className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Immutability</h3>
                <p className="text-gray-300">
                  Once created, a box cannot be modified. It can only be spent and destroyed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-cyan-500/20 rounded-lg flex items-center justify-center mt-0.5">
                <Key className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Unique Identification</h3>
                <p className="text-gray-300">
                  Each box has a unique identifier based on its content and creation transaction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-cyan-500/20 rounded-lg flex items-center justify-center mt-0.5">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Programmable Conditions</h3>
                <p className="text-gray-300">
                  Boxes contain smart contract logic that determines when and how they can be spent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 