"use client";

import React from "react";
import { 
  Database, 
  ChevronRight, 
  ExternalLink,
  CheckCircle,
  FileText,
  Clock,
  Network,
  History,
  Filter,
  HardDrive,
  Settings,
  Shield,
  Link as LinkIcon,
  AlertTriangle,
  Info
} from "lucide-react";
import Link from "next/link";

export default function ChainConfigPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Chain Configuration Settings
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Chain-specific settings for blockchain protocol configuration and network parameters with advanced emission controls.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/configuration/application-conf?tab=ergo-node"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-neutral-800 border border-neutral-700 rounded-lg font-semibold text-white hover:bg-neutral-700 transition hover:scale-[1.02]"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-400" /> Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            This section pertains to chain-specific settings, which should typically be left untouched unless you are planning to launch a new blockchain.
          </p>
        </section>

        {/* Protocol Version Section */}
        <section className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-400" /> Protocol Configuration
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" /> Protocol Version
              </h3>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
                <code className="text-green-400 font-mono">protocolVersion = 3</code>
              </div>
              <p className="text-gray-300 text-sm">
                The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">protocolVersion</code> parameter represents the version of the blockchain protocol that the client supports. Please refrain from manually adjusting this value; it should be managed by client developers.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Network className="w-5 h-5 text-purple-400" /> Address Prefix
              </h3>
              <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4 mb-4">
                <code className="text-purple-400 font-mono">addressPrefix = 16</code>
              </div>
              <p className="text-gray-300 text-sm">
                This parameter denotes the network address prefix. Currently, the reserved values are <strong>0</strong> for Ergo mainnet and <strong>16</strong> for Ergo testnet.
              </p>
            </div>
          </div>
        </section>

        {/* Monetary Configuration Section */}
        <section className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-green-400" /> Monetary Configuration
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" /> Fixed Rate Period
              </h3>
              <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mb-4">
                <code className="text-blue-400 font-mono">fixedRatePeriod = 525600</code>
              </div>
              <p className="text-gray-300 text-sm">
                This parameter specifies the number of blocks during which the reward amount does not change. In this case, it is set to remain constant for approximately <strong>two years</strong>.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-cyan-400" /> Fixed Rate
              </h3>
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4 mb-4">
                <code className="text-cyan-400 font-mono">fixedRate = 75000000000</code>
              </div>
              <p className="text-gray-300 text-sm">
                This sets the number of coins (<strong>75 Ergo</strong>) to be issued every block during the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">fixedRatePeriod</code>.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-400" /> Founders Initial Reward
              </h3>
              <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mb-4">
                <code className="text-orange-400 font-mono">foundersInitialReward = 7500000000</code>
              </div>
              <p className="text-gray-300 text-sm">
                This parameter denotes the fraction of coins issued, that goes to the foundation during <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">fixedRatePeriod</code> (<strong>7.5 Ergo</strong>).
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <History className="w-5 h-5 text-purple-400" /> Epoch Length
              </h3>
              <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4 mb-4">
                <code className="text-purple-400 font-mono">epochLength = 64800</code>
              </div>
              <p className="text-gray-300 text-sm">
                This represents the number of blocks between each reward reduction, set to occur every <strong>90 days</strong>.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Filter className="w-5 h-5 text-red-400" /> One Epoch Reduction
              </h3>
              <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mb-4">
                <code className="text-red-400 font-mono">oneEpochReduction = 3000000000</code>
              </div>
              <p className="text-gray-300 text-sm">
                This indicates the amount by which the reward decreases after each epoch (<strong>3 Ergo</strong>).
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400" /> Miner Reward Delay
              </h3>
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
                <code className="text-yellow-400 font-mono">minerRewardDelay = 720</code>
              </div>
              <p className="text-gray-300 text-sm">
                This represents the delay (about <strong>1 day</strong>) between the block being mined and the miner being able to spend the reward.
              </p>
            </div>
          </div>
        </section>

        {/* Reemission Configuration Section */}
        <section className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <LinkIcon className="w-6 h-6 text-purple-400" /> Reemission Configuration
          </h2>
          <p className="text-gray-300 mb-6">
            The parameters below are related to reemission settings of the protocol:
          </p>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="space-y-4">
              <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4">
                <code className="text-purple-400 font-mono block mb-2">checkReemissionRules = false</code>
                <code className="text-purple-400 font-mono block mb-2">emissionNftId = ""</code>
                <code className="text-purple-400 font-mono block mb-2">reemissionTokenId = ""</code>
                <code className="text-purple-400 font-mono block mb-2">reemissionNftId = ""</code>
                <code className="text-purple-400 font-mono block mb-2">activationHeight = 777217</code>
                <code className="text-purple-400 font-mono block mb-2">reemissionStartHeight = 2080800</code>
                <code className="text-purple-400 font-mono block">injectionBoxBytesEncoded = ""</code>
              </div>
              <p className="text-gray-300 text-sm">
                The exact roles and potential values of these parameters are not clarified in this document and would need further specification.
              </p>
            </div>
          </div>
        </section>

        {/* No Premine Proof Section */}
        <section className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-400" /> No Premine Proof
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
              <code className="text-yellow-400 font-mono block mb-2">noPremineProof = [</code>
              <code className="text-yellow-400 font-mono block ml-4 mb-2">"'Chaos reigns': what the papers say about the no-deal Brexit vote",</code>
              <code className="text-yellow-400 font-mono block ml-4 mb-2">"习近平的两会时间|这里有份习近平两会日历，请查收！",</code>
              <code className="text-yellow-400 font-mono block ml-4 mb-2">"ТАСС сообщил об обнаружении нескольких майнинговых ферм на столичных рынках",</code>
              <code className="text-yellow-400 font-mono block ml-4 mb-2">"000000000000000000139a3e61bd5721827b51a5309a8bfeca0b8c4b5c060931",</code>
              <code className="text-yellow-400 font-mono block ml-4">"0xef1d584d77e74e3c509de625dc17893b22b73d040b5d5302bbf832065f928d03"</code>
              <code className="text-yellow-400 font-mono block">]</code>
            </div>
            <p className="text-gray-300 text-sm">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">noPremineProof</code> parameter includes the latest news from media outlets (the Guardian, Xinhua, Vedomosti) and existing cryptocurrency block IDs (Bitcoin, Ethereum) as evidence of no premine.
            </p>
          </div>
        </section>

        {/* Founders Public Keys Section */}
        <section className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-indigo-400" /> Founders Public Keys
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-lg p-4 mb-4">
              <code className="text-indigo-400 font-mono block mb-2">foundersPubkeys = [</code>
              <code className="text-indigo-400 font-mono block ml-4 mb-2">"039bb5fe52359a64c99a60fd944fc5e388cbdc4d37ff091cc841c3ee79060b8647",</code>
              <code className="text-indigo-400 font-mono block ml-4 mb-2">"031fb52cf6e805f80d97cde289f4f757d49accf0c83fb864b27d2cf982c37f9a8b",</code>
              <code className="text-indigo-400 font-mono block ml-4">"0352ac2a471339b0d23b3d2c5ce0db0e81c969f77891b9edf0bda7fd39a78184e7"</code>
              <code className="text-indigo-400 font-mono block">]</code>
            </div>
            <p className="text-gray-300 text-sm">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-indigo-400">foundersPubkeys</code> parameter represents the public keys of the founders, expressed as group elements.
            </p>
          </div>
        </section>

        {/* Summary Section */}
        <section className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Configuration Summary
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Chain configuration settings control the fundamental blockchain parameters including protocol version, monetary policy, emission schedule, and network-specific identifiers. These settings should be carefully managed as they affect the core functionality of the Ergo blockchain.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-green-300 mb-2">⚠️ Important Note</h4>
              <p className="text-gray-300 text-sm">These settings should typically be left untouched unless you are planning to launch a new blockchain.</p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-blue-300 mb-2">🔧 Development</h4>
              <p className="text-gray-300 text-sm">Protocol version should be managed by client developers, not manually adjusted.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 