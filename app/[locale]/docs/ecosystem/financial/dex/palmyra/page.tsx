"use client";

import React from "react";
import { 
  Globe, 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  FileText, 
  ExternalLink, 
  MessageCircle, 
  Mail,
  ChevronRight,
  GitBranch,
  Coins,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function PalmyraPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Palmyra ComDEX
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Palmyra ComDEX, the flagship product of zenGate, is an innovative ecosystem that enables the tokenization and listing of certified commodities for spot and futures trading on a global scale.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://palmyradex.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <Globe className="w-5 h-5 mr-2" /> Palmyra Website
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-orange-400" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          This groundbreaking platform is designed to cater to businesses across the globe, with a special emphasis on emerging and underserved markets. The platform brings together all stakeholders across the value chain, offering a cost-effective, transparent, and user-friendly enterprise-grade solution.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Global Reach:</b> Designed for businesses across the globe with focus on emerging markets</li>
          <li><b>Enterprise-Grade:</b> Cost-effective, transparent, and user-friendly solution</li>
          <li><b>Pilot Phase:</b> Currently being piloted in two jurisdictions in the Asian market</li>
          <li><b>Market Size:</b> Target market exceeding 1 trillion US Dollars by export value</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" /> Physically Settled Tokenized Commodity Marketplace
          </h3>
          <p className="text-gray-300 mb-2">Powered by blockchain technology, Palmyra ComDEX ensures secure and efficient transactions for certified commodities trading.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" /> Focus Market
          </h3>
          <p className="text-gray-300 mb-2">Initial focus on a 423 billion US dollar market that includes agricultural commodities and precious metals or gemstones.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <FileText className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Detailed Features & Business Model</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
                    <TrendingUp className="w-4 h-4 text-cyan-300" /> Target Market
                  </h5>
                  <p className="text-gray-300 text-sm">
                    The platform is designed to cater to markets with a collective size exceeding 1 trillion US Dollars by export value.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
                    <Users className="w-4 h-4 text-orange-300" /> Value Addition
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Palmyra ComDEX aims to enhance existing commodity markets by building infrastructure that ensures access and connectivity between stakeholders across global supply chains.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">Innovative Functionalities</h4>
              <ul className="list-disc pl-6 text-gray-300 text-base space-y-2 mb-4">
                <li>Supply chain traceability features</li>
                <li>Support for verified credentials and certifications</li>
                <li>Tools for improved business planning and growth</li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Revenue Streams</h4>
              <ul className="list-disc pl-6 text-gray-300 text-base space-y-2 mb-4">
                <li>Small commission from each transaction on Palmyra ComDEX from both the buy and sell side</li>
                <li>Membership fees from users</li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Expansion Plans</h4>
              <p className="text-gray-300 text-base mb-4">
                Once the product and business model are validated, the primary focus will be to expand the user base.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Communication</h4>
              <p className="text-gray-300 mb-4">
                Open communication with the community is highly valued by the Palmyra team. They are available through:
              </p>
              <ul className="list-disc pl-6 text-gray-300 text-base space-y-2 mb-4">
                <li>Personal emails</li>
                <li>Official website</li>
                <li>Discord channel</li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Resources</h4>
              <a 
                href="#" 
                className="inline-flex items-center text-cyan-300 hover:underline gap-2 text-base"
                target="_blank" 
                rel="noopener noreferrer"
              >
                PalmyraComDex Litepaper Overview <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Palmyra ComDEX represents a revolutionary approach to commodity trading, leveraging blockchain technology to create a physically settled tokenized marketplace. With its focus on emerging markets and comprehensive supply chain solutions, Palmyra is positioned to transform how commodities are traded globally.</p>
      </div>
    </>
  );
} 