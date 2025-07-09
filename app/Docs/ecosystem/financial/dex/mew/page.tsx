"use client";

import React from "react";
import { Zap, Store, ShoppingBag, Building2, Wrench, Gift, Users, TrendingUp, Star, ExternalLink, Globe, MessageCircle } from "lucide-react";

export default function MewPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Mew Finance
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Mew Finance is a decentralized finance (DeFi) platform operating on the Ergo Blockchain. Launched in October 2024, it aims to provide a suite of innovative, accessible, secure, and user-centric financial applications. The platform is known for its distinctive visual theme and focus on community engagement.
      </p>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-300">
          <Globe className="w-5 h-5 text-purple-300" /> Overview
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            Mew Finance is a decentralized finance (DeFi) platform operating on the Ergo Blockchain. Launched in October 2024, it aims to provide a suite of innovative, accessible, secure, and user-centric financial applications. The platform is known for its distinctive visual theme and focus on community engagement.
          </p>
          <a 
            href="https://mewfinance.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors gap-2"
          >
            Visit the official platform <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Products and Services */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-300">
          <Zap className="w-5 h-5 text-pink-300" /> Products and Services
        </h2>
        <p className="text-gray-300 mb-4">Mew Finance launched with six core products in Q4 2024:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
              <TrendingUp className="w-4 h-4 text-purple-300" /> Mew DEX
            </h3>
            <p className="text-gray-300 text-sm">
              A decentralized exchange designed for simple and fast token trading on Ergo.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-pink-300">
              <Store className="w-4 h-4 text-pink-300" /> Mew Mart
            </h3>
            <p className="text-gray-300 text-sm">
              A marketplace for trading various tokens and NFTs within the Ergo ecosystem.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
              <ShoppingBag className="w-4 h-4 text-green-300" /> Mew Store
            </h3>
            <p className="text-gray-300 text-sm">
              A marketplace focused on physical assets, including collaborations like the Sigma Shop.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
              <Building2 className="w-4 h-4 text-orange-300" /> Mew Fund
            </h3>
            <p className="text-gray-300 text-sm">
              A platform facilitating community-driven investments.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
              <Wrench className="w-4 h-4 text-cyan-300" /> Mew Tools
            </h3>
            <p className="text-gray-300 text-sm">
              A collection of utilities to assist users with blockchain transactions.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-yellow-300">
              <Gift className="w-4 h-4 text-yellow-300" /> Mew Fun
            </h3>
            <p className="text-gray-300 text-sm">
              A lottery service developed in collaboration with ErgOne, aimed at improving liquidity for both projects.
            </p>
          </div>
        </div>
      </div>

      {/* MEW Tier System */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-300">
          <Star className="w-5 h-5 text-purple-300" /> MEW Tier System
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
          <p className="text-gray-300 mb-4">
            Mew Finance utilizes a tiered system to reward user engagement and investment in the platform. Higher tiers offer greater benefits.
          </p>
          
          <h3 className="font-semibold text-base mb-2 text-pink-300">Benefits:</h3>
          <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1 mb-4">
            <li>Revenue Sharing: Tier 4, 5, and 6 members share 5% of the service fee revenue (from Mart, Store, Tools, Fund).</li>
            <li>DEX Fee Revenue Sharing: Tier 6 members exclusively share 5% of the DEX fee revenue.</li>
            <li>Zero DEX Fees: Tier 6 members enjoy zero fees on transactions made through Mew DEX.</li>
          </ul>
          
          <p className="text-gray-300 text-sm mb-4">
            MEW Kitty NFTs: Associated with the tier system, these NFTs provide additional benefits or recognition. As of Q4 2024, 25 out of 50 had been claimed.
          </p>
        </div>

        {/* Q4 2024 Snapshot */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-3 text-purple-300">Q4 2024 Snapshot:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-purple-300 font-bold">Tier 6</div>
              <div className="text-gray-300">20 members</div>
            </div>
            <div className="text-center">
              <div className="text-pink-300 font-bold">Tier 5</div>
              <div className="text-gray-300">3 members</div>
            </div>
            <div className="text-center">
              <div className="text-green-300 font-bold">Tier 4</div>
              <div className="text-gray-300">0 members</div>
            </div>
            <div className="text-center">
              <div className="text-orange-300 font-bold">Tier 3</div>
              <div className="text-gray-300">1 member</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-300 font-bold">Tier 2</div>
              <div className="text-gray-300">3 members</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-300 font-bold">Tier 1</div>
              <div className="text-gray-300">4 members</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            Revenue Share Distributed (Q4 2024): 93.48 ERG (equivalent to 8,113.08 MEW) was distributed to eligible Tier ⅘/6 members.
          </p>
        </div>
      </div>

      {/* Liquidity */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <TrendingUp className="w-5 h-5 text-green-300" /> Liquidity
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-green-300">MEW Token</h3>
            <p className="text-gray-300 text-sm">
              As of the end of Q4 2024, the MEW token was reported as the 3rd most liquid asset on the Ergo Blockchain (after RSN and SigUSD), with approximately $200,000 in DEX liquidity.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-orange-300">Liquidity Boosting</h3>
            <p className="text-gray-300 text-sm">
              A "Mew Christmas Sale" in Q4 2024 successfully sold 20,000 ERG worth of MEW tokens. All ERG proceeds were used to increase the liquidity of the MEW token.
            </p>
          </div>
        </div>
      </div>

      {/* Partnerships */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
          <Users className="w-5 h-5 text-cyan-300" /> Partnerships
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-purple-300">Sigmanauts</h3>
            <p className="text-gray-300 text-sm">
              Partnered to launch the "Sigma Shop" on the Mew Store, offering Ergo-based merchandise.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-pink-300">ErgOne</h3>
            <p className="text-gray-300 text-sm">
              Collaborated to integrate the Mew Fun lottery, aiming to boost liquidity for both Mew Finance and ErgOne.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-green-300">Ergosanta</h3>
            <p className="text-gray-300 text-sm">
              Mew Finance supported the 2024 Ergosanta community initiative, helping to collect and distribute over $2,000 worth of prizes.
            </p>
          </div>
        </div>
      </div>

      {/* Future Developments */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-300">
          <Zap className="w-5 h-5 text-orange-300" /> Future Developments (As of early 2025)
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-purple-300">Mew Lend</h3>
            <p className="text-gray-300 text-sm">
              A decentralized platform for borrowing and lending assets securely on the Ergo blockchain.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-pink-300">Offer Functionality in Mew Mart</h3>
            <p className="text-gray-300 text-sm">
              An upcoming feature allowing users to make offers on specific assets listed in the marketplace.
            </p>
          </div>
        </div>
      </div>

      {/* Financial Highlights */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <TrendingUp className="w-5 h-5 text-green-300" /> Financial Highlights (Q4 2024)
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-base mb-3 text-purple-300">Revenue Breakdown:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-300">Total Revenue:</span>
                  <span className="text-green-300 font-semibold">2,289.17 ERG ($3,662.67 USD)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">DEX Fees:</span>
                  <span className="text-purple-300">1,633.17 ERG ($2,613.07 USD) - 76.3%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Service Fees:</span>
                  <span className="text-pink-300">656 ERG ($1,049.60 USD) - 23.7%</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-3 text-orange-300">Operating Costs:</h3>
              <p className="text-gray-300 text-sm">
                Team Operating Costs: Reported as 1000 ERG per month during this period.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Note: Financial figures and tier counts are specific to Q4 2024 as per the source document.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Links */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
          <MessageCircle className="w-5 h-5 text-cyan-300" /> Community Links
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://mewfinance.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-purple-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-purple-300 group-hover:text-purple-200 transition-colors">Website</h3>
                <p className="text-gray-400 text-sm">Official platform</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://t.me/MewFinance" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-cyan-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-cyan-300 group-hover:text-cyan-200 transition-colors">Telegram</h3>
                <p className="text-gray-400 text-sm">Community chat</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://discord.gg/KQrCH5UE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-pink-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-pink-300 group-hover:text-pink-200 transition-colors">Discord</h3>
                <p className="text-gray-400 text-sm">Community server</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://x.com/Mew_finance" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-blue-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-blue-300 group-hover:text-blue-200 transition-colors">X (Twitter)</h3>
                <p className="text-gray-400 text-sm">Official updates</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
} 