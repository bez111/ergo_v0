"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, AlertTriangle, History, Shield, Users } from "lucide-react";

export default function HodlCoinPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        HodlCoin: A High-Risk, High-Reward Game
      </h1>
      
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          Hodlcoin, a high-risk, high-reward game, was originally a concept conceived by one of the designers of Djed (SigmaUSD). The game encourages players to "HODL" their ERGs. The rules are straightforward: players can deposit their ERGs into a common reserve (HODLing) or withdraw ERGs from the reserve by burning their HODL ERGs (un-HODLing). While there are no fees for HODLing, un-HODLing incurs a penalty fee (e.g., 3% or 10%) that is added to the common reserve. This structure creates an incentive for players to hold their ERGs for longer periods, as they benefit from the fees paid by those who un-HODL.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5" /> How HodlCoin Works
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">HODLing (Depositing)</h3>
                <p className="text-gray-300 text-sm">
                  Players can deposit their ERGs into a common reserve. No fees are charged for HODLing.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Un-HODLing (Withdrawing)</h3>
                <p className="text-gray-300 text-sm">
                  Players can withdraw ERGs by burning their HODL ERGs, but this incurs a penalty fee (3% or 10%).
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Fee Distribution</h3>
                <p className="text-gray-300 text-sm">
                  Penalty fees from un-HODLing are added to the common reserve, benefiting long-term holders.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Incentive Structure</h3>
                <p className="text-gray-300 text-sm">
                  The system creates an incentive for players to hold their ERGs for longer periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Front-end Interfaces */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Users className="w-5 h-5" /> Front-end Interfaces
        </h2>
        <p className="text-gray-300 mb-4">
          Front-end interfaces are available at Hodlcoin and PhoenixFi.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://hodlcoin.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-purple-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Hodlcoin Interface <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://phoenixfi.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-purple-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            PhoenixFi Interface <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      {/* History */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <History className="w-5 h-5" /> History
        </h2>
        <p className="text-gray-300 mb-4">
          The idea for Hodlcoin dates back to 2020 when the goal was to simplify the design of Djed/SigmaUSD and create a stablecoin protocol that wouldn't require a reserve coin or an oracle. Although initially dismissed as a wild idea (especially if the goal was to create a stablecoin, given that the price of hodlERG only increases), the concept was revisited in 2022 and shared with @kushti_ru.
        </p>
        <p className="text-gray-300 mb-4">
          By Spring of 2023, it was agreed that Hodlcoin could be an intriguing DegenFi product. The collaboration with @pulsarzz began shortly after, and the rapid progression of the project is a testament to Ergo's capacity for innovation.
        </p>
      </div>

      {/* Security Incident */}
      <div className="bg-neutral-900/50 border border-red-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
          <AlertTriangle className="w-5 h-5" /> Security Incident
        </h2>
        <p className="text-gray-300 mb-4">
          Regrettably, a vulnerability was introduced during the development process that allowed the bank box to be drained. Krasavice Blasen, the developer behind Duckpools and SkyHarbor, identified this error and swiftly drained the funds to prevent a malicious actor from doing so. A more detailed technical description of the flaw can be found in this Reddit post. The funds are currently being returned to the users.
        </p>
        <div className="bg-red-800/20 border border-red-600 rounded-lg p-4">
          <h3 className="font-semibold text-red-400 mb-2">Important Note</h3>
          <p className="text-gray-300 text-sm">
            This incident highlights the importance of thorough security audits and testing in DeFi protocols. The community's quick response prevented potential malicious exploitation.
          </p>
        </div>
      </div>

      {/* Revamp and Relaunch */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Shield className="w-5 h-5" /> Revamp and Relaunch
        </h2>
        <p className="text-gray-300 mb-4">
          In response to this, a second version of Hodlcoin has been developed and launched by PhoenixErgo. This new version is being worked on by community developers MGpai and lgd, who are revising the contract and using a proxy contract to enhance security.
        </p>
        <p className="text-gray-300 mb-4">
          The relaunched Hodlcoin now operates with two frontends using the same bank, one is available at Hodlcoin, and the other at PhoenixFi.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Enhanced Security</h3>
            <p className="text-gray-300 text-sm">
              Revised contracts with proxy contracts to enhance security measures.
            </p>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Community Development</h3>
            <p className="text-gray-300 text-sm">
              Active development by community developers MGpai and lgd.
            </p>
          </div>
        </div>
      </div>

      {/* Risk Management */}
      <div className="bg-neutral-900/50 border border-yellow-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
          <AlertTriangle className="w-5 h-5" /> Risk Management
        </h2>
        <p className="text-gray-300 mb-4">
          It's important to reiterate the significance of knowing your assumptions when participating in experimental decentralized finance. There are no guarantees, and the reliability of a protocol is best measured over time. Always manage your risks and trade wisely.
        </p>
        <div className="bg-yellow-800/20 border border-yellow-600 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-400 mb-2">Key Risk Factors</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Experimental DeFi protocol with inherent risks</li>
            <li>• No guarantees on returns or protocol reliability</li>
            <li>• Security vulnerabilities may exist</li>
            <li>• Always conduct thorough research before participating</li>
          </ul>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://hodlcoin.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Hodlcoin Website <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://phoenixfi.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            PhoenixFi Interface <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 