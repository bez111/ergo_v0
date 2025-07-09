"use client";

import React from "react";
import { Globe, Target, TrendingUp, Users, Shield, FileText, ExternalLink, MessageCircle, Mail } from "lucide-react";

export default function PalmyraPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Palmyra ComDEX
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Palmyra ComDEX, the flagship product of zenGate, is an innovative ecosystem that enables the tokenization and listing of certified commodities for spot and futures trading on a global scale.
      </p>

      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-cyan-300">
          <Globe className="w-5 h-5 text-cyan-300" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          This groundbreaking platform is designed to cater to businesses across the globe, with a special emphasis on emerging and underserved markets. The platform brings together all stakeholders across the value chain, offering a cost-effective, transparent, and user-friendly enterprise-grade solution.
        </p>
        <p className="text-gray-400 text-sm">
          Currently, the product is being piloted in two jurisdictions in the Asian market.
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-300">
          <Target className="w-5 h-5 text-orange-300" /> Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
              <Shield className="w-4 h-4 text-cyan-300" /> Physically Settled Tokenized Commodity Marketplace
            </h3>
            <p className="text-gray-300 text-sm">
              Powered by blockchain technology, Palmyra ComDEX ensures secure and efficient transactions.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
              <TrendingUp className="w-4 h-4 text-orange-300" /> Target Market
            </h3>
            <p className="text-gray-300 text-sm">
              The platform is designed to cater to markets with a collective size exceeding 1 trillion US Dollars by export value.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
              <Users className="w-4 h-4 text-green-300" /> Value Addition
            </h3>
            <p className="text-gray-300 text-sm">
              Palmyra ComDEX aims to enhance existing commodity markets by building infrastructure that ensures access and connectivity between stakeholders across global supply chains.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
              <Target className="w-4 h-4 text-purple-300" /> Focus Market
            </h3>
            <p className="text-gray-300 text-sm">
              The initial focus of the platform is a 423 billion US dollar market that includes agricultural commodities and precious metals or gemstones.
            </p>
          </div>
        </div>
      </div>

      {/* Innovative Functionalities */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-cyan-300">
          <Shield className="w-5 h-5 text-cyan-300" /> Innovative Functionalities
        </h2>
        <ul className="list-disc pl-6 text-gray-300 text-base space-y-2">
          <li>Supply chain traceability features</li>
          <li>Support for verified credentials and certifications</li>
          <li>Tools for improved business planning and growth</li>
        </ul>
      </div>

      {/* Revenue Streams */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-orange-300">
          <TrendingUp className="w-5 h-5 text-orange-300" /> Revenue Streams
        </h2>
        <ul className="list-disc pl-6 text-gray-300 text-base space-y-2">
          <li>Small commission from each transaction on Palmyra ComDEX from both the buy and sell side</li>
          <li>Membership fees from users</li>
        </ul>
      </div>

      {/* Expansion Plans */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-green-300">
          <Globe className="w-5 h-5 text-green-300" /> Expansion Plans
        </h2>
        <p className="text-gray-300 text-base">
          Once the product and business model are validated, the primary focus will be to expand the user base.
        </p>
      </div>

      {/* Communication */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-cyan-300">
          <MessageCircle className="w-5 h-5 text-cyan-300" /> Communication
        </h2>
        <p className="text-gray-300 mb-4">
          Open communication with the community is highly valued by the Palmyra team. They are available through:
        </p>
        <ul className="list-disc pl-6 text-gray-300 text-base space-y-2">
          <li>Personal emails</li>
          <li>Official website</li>
          <li>Discord channel</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-orange-300">
          <FileText className="w-5 h-5 text-orange-300" /> Resources
        </h2>
        <a 
          href="#" 
          className="inline-flex items-center text-cyan-300 hover:underline gap-2 text-base"
          target="_blank" 
          rel="noopener noreferrer"
        >
          PalmyraComDex Litepaper Overview <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </>
  );
} 