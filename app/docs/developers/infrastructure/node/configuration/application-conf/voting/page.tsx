"use client";

import React from "react";
import { 
  Vote, 
  Settings, 
  ChevronRight, 
  ExternalLink,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Database,
  FileText,
  Code
} from "lucide-react";
import Link from "next/link";

export default function VotingConfigPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Voting Configuration Settings
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Configure network voting mechanisms for soft-forks and rule changes in the Ergo blockchain.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/developers/infrastructure/node/configuration/application-conf?tab=ergo-node"
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
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">voting</code> configuration is an important part of the system, allowing a node to propose changes to the network or vote on existing proposals. This can include soft-forks or the deactivation of specific rules.
          </p>
        </section>

        {/* Rules to Disable Section */}
        <section className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-400" /> Rules to Disable
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mb-4">
              <code className="text-blue-400 font-mono">"rulesToDisable" = []</code>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              This configuration allows specifying an array of rule identifiers that you would like to propose for deactivation with a soft-fork. If you are not proposing any rules for deactivation, this can be left as an empty array.
            </p>
            <p className="text-gray-300 text-sm">
              For example, if you want to propose the deactivation of the storage fee factor, you would list its ID here.
            </p>
          </div>
        </section>

        {/* Voting on Soft-Fork Section */}
        <section className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Vote className="w-6 h-6 text-green-400" /> Voting on Soft-Fork
          </h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-green-400" /> Protocol Version Requirement
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                To propose or vote on a soft-fork, the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">protocolVersion</code> must be increased by one in a block header. Once this is done, the node will automatically propose a soft-fork (at the beginning of an epoch) or vote for it.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Voting For Changes
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                As an example, suppose you want to vote on changing the target value for storage fee factor (ID: 1) to 1000000, you would use the following configuration:
              </p>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
                <code className="text-green-400 font-mono">1 = 1000000</code>
              </div>
              <p className="text-gray-300 text-sm">
                Setting any non-zero value will vote for the soft-fork, while setting it to zero votes against it.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" /> Voting Against Changes
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                For instance, to vote against a proposed change with ID 120, you would set:
              </p>
              <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mb-4">
                <code className="text-red-400 font-mono">120 = 0</code>
              </div>
              <p className="text-gray-300 text-sm">
                This configuration votes against the proposed change by setting the value to zero.
              </p>
            </div>
          </div>
        </section>

        {/* Network Adaptability Section */}
        <section className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-purple-400" /> Network Adaptability
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-purple-400">voting</code> configurations allow for flexible network changes, promoting adaptability in the blockchain's operation as conditions or requirements change over time.
            </p>
          </div>
        </section>

        {/* Configuration Examples Section */}
        <section className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-cyan-400" /> Configuration Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Propose Rule Deactivation
              </h3>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
                <code className="text-green-400 font-mono block mb-2">"rulesToDisable" = [1, 5, 10]</code>
              </div>
              <p className="text-gray-300 text-sm">
                This configuration proposes the deactivation of rules with IDs 1, 5, and 10 through a soft-fork.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Vote className="w-5 h-5 text-blue-400" /> Vote for Parameter Change
              </h3>
              <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mb-4">
                <code className="text-blue-400 font-mono block mb-2">2 = 500000</code>
              </div>
              <p className="text-gray-300 text-sm">
                This votes for changing parameter with ID 2 to the value 500000.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" /> Vote Against Change
              </h3>
              <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mb-4">
                <code className="text-red-400 font-mono block mb-2">15 = 0</code>
              </div>
              <p className="text-gray-300 text-sm">
                This votes against the proposed change for parameter with ID 15.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-yellow-400" /> No Proposals
              </h3>
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
                <code className="text-yellow-400 font-mono block mb-2">"rulesToDisable" = []</code>
              </div>
              <p className="text-gray-300 text-sm">
                This configuration indicates no rules are proposed for deactivation.
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-indigo-400" /> Best Practices
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  <strong>Understand the Impact:</strong> Before voting on any changes, thoroughly understand the implications for the network and your node's operation.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  <strong>Monitor Network Consensus:</strong> Keep track of voting patterns across the network to understand community sentiment.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  <strong>Test Changes:</strong> Consider testing proposed changes on testnet before voting on mainnet.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  <strong>Stay Informed:</strong> Follow community discussions and technical proposals to make informed voting decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Configuration Summary
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The voting configuration provides a democratic mechanism for network governance, allowing nodes to participate in important decisions about protocol changes. This system ensures that the Ergo blockchain can evolve and adapt while maintaining consensus among network participants.
          </p>
        </section>
      </div>
    </>
  );
} 