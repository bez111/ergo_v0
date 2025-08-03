"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Wrench, Database, CreditCard, FileText } from "lucide-react";

export default function DataModelApisResourcesPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Data Model & APIs Resources
      </h1>

      {/* Back Button */}
      <Link href="/Docs/developers/data-model-apis" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Data Model & APIs</span>
        </button>
      </Link>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ErgoTool Card */}
        <Link href="/Docs/developers/data-model-apis/resources/ergotool" className="group">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">ErgoTool</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Comprehensive development toolkit for building and testing Ergo applications with transaction construction, script validation, and blockchain interaction tools.
            </p>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        {/* Model Transaction Card */}
        <Link href="/Docs/developers/data-model-apis/resources/model-transaction" className="group">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-400">Model Transaction</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Learn how to model and construct transactions in Ergo's eUTXO model with advanced patterns and transaction components.
            </p>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        {/* Payments Card */}
        <Link href="/Docs/developers/data-model-apis/resources/payments" className="group">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-purple-400">Payments</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Explore Ergo's payment protocols and standards for building interoperable payment solutions with multi-asset support.
            </p>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        {/* Standards Card */}
        <Link href="/Docs/developers/data-model-apis/resources/standards" className="group">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-orange-400">Standards</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Ergo Improvement Proposals (EIPs) and technical standards that define the protocol's capabilities and ensure interoperability.
            </p>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
} 