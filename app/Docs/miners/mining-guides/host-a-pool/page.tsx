import React from "react";
import { ArrowLeft, Network, Server, Code, AlertTriangle, ExternalLink, HelpCircle, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HostAPoolPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Hosting a Pool on Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Hosting a pool on Ergo involves setting up a local instance of the Ergo node and configuring it to point to your pool software. 
          This guide will walk you through the process step by step.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/miners/mining-guides"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Mining Guides
          </Link>
          <a
            href="https://discord.gg/kxbrHVwnm5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <HelpCircle className="w-5 h-5 mr-2" /> Community Support
          </a>
        </div>
      </div>

      {/* Step 1: Set Up the Ergo Node */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 text-black rounded-full flex items-center justify-center font-bold">1</div>
          <h2 className="text-2xl font-bold">Set Up the Ergo Node</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Server className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300 mb-4">
                First, you need to set up a local instance of the Ergo node. You can find detailed instructions on how to do this in the solo mining guide.
              </p>
              <Link
                href="/Docs/miners/mining-guides/solo-mining"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline"
              >
                <ExternalLink className="w-4 h-4" />
                Solo Mining Setup Guide
              </Link>
            </div>
          </div>

          {/* EIP-27 Warning */}
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4 mt-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Remember EIP-27!</h3>
                <p className="text-gray-300">
                  You will need to include the EIP27 rules mentioned in the solo mining guide to be able to spend your ERG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Choose Your Pool Software */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 text-black rounded-full flex items-center justify-center font-bold">2</div>
          <h2 className="text-2xl font-bold">Choose Your Pool Software</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-6">
            <Settings className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300 mb-6">
                Next, you need to choose your pool software. Ergo supports two options. Choose the one that best suits your needs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* MiningCore Option */}
            <Link 
              href="/Docs/miners/mining-guides/solo-mining/miningcore"
              className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-green-400/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">MiningCore</h3>
                  <p className="text-sm text-gray-400">Professional mining pool software</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Comprehensive mining pool solution with advanced features and monitoring capabilities.
              </p>
            </Link>

            {/* Ergo Stratum Server Option */}
            <Link 
              href="/Docs/miners/mining-guides/solo-mining/stratum"
              className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-green-400/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">Ergo Stratum Server</h3>
                  <p className="text-sm text-gray-400">Native Ergo stratum implementation</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Lightweight stratum server specifically designed for Ergo mining operations.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Step 3: Configure Your Miner */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 text-black rounded-full flex items-center justify-center font-bold">3</div>
          <h2 className="text-2xl font-bold">Configure Your Miner</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-6">
            <Code className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300 mb-6">
                Finally, you need to configure your miner to point to your pool software. Depending on your hardware, you can use either the NV or AMD miner.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* NV Miner */}
            <a 
              href="https://github.com/mhssamadani/Autolykos2_NV_Miner"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-purple-400/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors flex items-center gap-2">
                    NV Miner <ExternalLink className="w-4 h-4" />
                  </h3>
                  <p className="text-sm text-gray-400">For NVIDIA GPUs</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Optimized Autolykos2 miner for NVIDIA graphics cards.
              </p>
            </a>

            {/* AMD Miner */}
            <a 
              href="https://github.com/mhssamadani/Autolykos2_AMD_Miner"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-purple-400/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors flex items-center gap-2">
                    AMD Miner <ExternalLink className="w-4 h-4" />
                  </h3>
                  <p className="text-sm text-gray-400">For AMD GPUs</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Optimized Autolykos2 miner for AMD graphics cards.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Community Support Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <HelpCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">Need Help?</h3>
            <p className="text-gray-300 mb-4">
              Community support is available on Discord. Join our mining community for assistance, tips, and discussions.
            </p>
            <a
              href="https://discord.gg/kxbrHVwnm5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline"
            >
              <ExternalLink className="w-4 h-4" />
              Join Discord Community
            </a>
          </div>
        </div>
      </div>

      {/* Success Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Congratulations!</h3>
            <p className="text-gray-300">
              You have now set up your own Ergo mining pool. Happy mining!
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 