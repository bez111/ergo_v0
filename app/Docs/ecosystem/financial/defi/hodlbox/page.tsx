"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, Gift, TrendingUp, Users, Award } from "lucide-react";

export default function HodlboxPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Hodlbox: Incentivizing Long-Term Holding in the Ergo Ecosystem
      </h1>
      
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          Hodlbox is a unique platform designed to encourage long-term holding of Ergo (ERG) by offering users the opportunity to purchase "treasure chests" with varying locking options. The locked amount can range from 10 to 10,000 ERG, and these funds remain locked for a specified duration, either two years or until the value of ERG reaches $20. This mechanism provides an incentive for users to resist impulsive selling and promotes the practice of long-term holding in the Ergo ecosystem.
        </p>
      </div>

      {/* NFT Rewards */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Gift className="w-5 h-5" /> NFT Rewards
        </h2>
        <p className="text-gray-300 mb-4">
          As an added bonus, users receive NFTs corresponding to the amount they lock, allowing them to showcase their commitment on their profile pictures. These NFTs serve as a visual representation of the user's dedication to the Ergo ecosystem and their belief in the long-term potential of the project.
        </p>
        <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
          <h3 className="font-semibold text-purple-400 mb-2">Visual Commitment</h3>
          <p className="text-gray-300 text-sm">
            NFTs serve as badges of honor, representing your commitment to the Ergo ecosystem and your belief in its long-term potential.
          </p>
        </div>
      </div>

      {/* Potential Returns */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <TrendingUp className="w-5 h-5" /> Potential Returns on Investment (ROI)
        </h2>
        <p className="text-gray-300 mb-4">
          When ERG reaches an all-time high (ATH) of $20, the potential returns on investment (ROI) can be significant. Here's a simple breakdown:
        </p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">100 ERG locked could yield <span className="text-green-400 font-semibold">$2,000.00</span></span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">1,000 ERG locked could yield <span className="text-green-400 font-semibold">$20,000.00</span></span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">10,000 ERG locked could yield <span className="text-green-400 font-semibold">$200,000.00</span></span>
          </div>
        </div>
        <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
          <h3 className="font-semibold text-green-400 mb-2">Long-Term Vision</h3>
          <p className="text-gray-300 text-sm">
            These potential returns highlight the potential rewards for those who are willing to hold their ERG for an extended period, demonstrating their commitment to the project.
          </p>
        </div>
      </div>

      {/* Community Engagement */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Users className="w-5 h-5" /> Community Engagement and Collaboration
        </h2>
        <p className="text-gray-300 mb-4">
          Tim Ur, one of the project's contributors, encourages active community engagement and collaboration within the Ergo ecosystem. He highlights the educational value and potential advantages that such initiatives can offer to the community, fostering a sense of unity and shared purpose among Ergo enthusiasts.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Educational Value</h3>
            <p className="text-gray-300 text-sm">
              Learn about long-term investment strategies and the importance of holding in volatile markets.
            </p>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Community Unity</h3>
            <p className="text-gray-300 text-sm">
              Foster a sense of shared purpose and commitment to the Ergo ecosystem's long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Zap className="w-5 h-5" /> How Hodlbox Works
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Purchase Treasure Chests</h3>
                <p className="text-gray-300 text-sm">
                  Users can purchase "treasure chests" with varying locking options, ranging from 10 to 10,000 ERG.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Lock Duration</h3>
                <p className="text-gray-300 text-sm">
                  Funds remain locked for either two years or until the value of ERG reaches $20, whichever comes first.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Receive NFT Rewards</h3>
                <p className="text-gray-300 text-sm">
                  Users receive NFTs corresponding to the amount they lock, showcasing their commitment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Potential Returns</h3>
                <p className="text-gray-300 text-sm">
                  When ERG reaches $20, significant returns are unlocked, rewarding long-term holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Additional Resources
        </h2>
        <p className="text-gray-300 mb-4">
          For more information about Hodlbox and to stay updated on the latest developments, check out the following resources:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://hodlbox.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Hodlbox Website <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://hodlbox.io/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Project Demo <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=hodlbox-interview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Interview on YouTube <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/hodlbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            GitHub Repository <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 