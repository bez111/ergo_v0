"use client";

import React from "react";
import { 
  Zap, 
  Store, 
  ShoppingBag, 
  Building2, 
  Wrench, 
  Gift, 
  Users, 
  TrendingUp, 
  Star, 
  ExternalLink, 
  Globe, 
  MessageCircle,
  ChevronRight,
  GitBranch,
  Coins,
  Heart
} from "lucide-react";
import Link from "next/link";

export default function MewPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Mew Finance
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Mew Finance is a decentralized finance (DeFi) platform operating on the Ergo Blockchain. Launched in October 2024, it aims to provide a suite of innovative, accessible, secure, and user-centric financial applications. The platform is known for its distinctive visual theme and focus on community engagement.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://www.mewfinance.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <Globe className="w-5 h-5 mr-2" /> Mew Finance Platform
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-purple-400" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          Mew Finance launched with six core products in Q4 2024, providing a comprehensive DeFi ecosystem on the Ergo blockchain. The platform features a distinctive visual theme and strong focus on community engagement through its tier system and partnerships.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Six Core Products:</b> DEX, Mart, Store, Fund, Tools, and Fun services</li>
          <li><b>Tier System:</b> Revenue sharing and benefits for active community members</li>
          <li><b>High Liquidity:</b> MEW token ranked 3rd most liquid on Ergo blockchain</li>
          <li><b>Community-Driven:</b> Strong focus on user engagement and partnerships</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" /> Mew DEX
          </h3>
          <p className="text-gray-300 mb-2">A decentralized exchange designed for simple and fast token trading on Ergo, with zero fees for Tier 6 members and revenue sharing for eligible tiers.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-pink-400" /> Tier System
          </h3>
          <p className="text-gray-300 mb-2">Six-tier system offering revenue sharing, zero DEX fees for top tiers, and MEW Kitty NFTs providing additional benefits and recognition.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <Heart className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Products, Services & Community Features</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Products and Services</h4>
              <p className="text-gray-300 mb-4">Mew Finance launched with six core products in Q4 2024:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
                    <TrendingUp className="w-4 h-4 text-purple-300" /> Mew DEX
                  </h5>
                  <p className="text-gray-300 text-sm">
                    A decentralized exchange designed for simple and fast token trading on Ergo.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-pink-300">
                    <Store className="w-4 h-4 text-pink-300" /> Mew Mart
                  </h5>
                  <p className="text-gray-300 text-sm">
                    A marketplace for trading various tokens and NFTs within the Ergo ecosystem.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
                    <ShoppingBag className="w-4 h-4 text-green-300" /> Mew Store
                  </h5>
                  <p className="text-gray-300 text-sm">
                    A marketplace focused on physical assets, including collaborations like the Sigma Shop.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
                    <Building2 className="w-4 h-4 text-orange-300" /> Mew Fund
                  </h5>
                  <p className="text-gray-300 text-sm">
                    A platform facilitating community-driven investments.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
                    <Wrench className="w-4 h-4 text-cyan-300" /> Mew Tools
                  </h5>
                  <p className="text-gray-300 text-sm">
                    A collection of utilities to assist users with blockchain transactions.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-yellow-300">
                    <Gift className="w-4 h-4 text-yellow-300" /> Mew Fun
                  </h5>
                  <p className="text-gray-300 text-sm">
                    A lottery service developed in collaboration with ErgOne, aimed at improving liquidity for both projects.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">MEW Tier System</h4>
              <p className="text-gray-300 mb-4">
                Mew Finance utilizes a tiered system to reward user engagement and investment in the platform. Higher tiers offer greater benefits.
              </p>
              
              <h5 className="font-semibold text-base mb-2 text-pink-300">Benefits:</h5>
              <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1 mb-4">
                <li>Revenue Sharing: Tier 4, 5, and 6 members share 5% of the service fee revenue (from Mart, Store, Tools, Fund).</li>
                <li>DEX Fee Revenue Sharing: Tier 6 members exclusively share 5% of the DEX fee revenue.</li>
                <li>Zero DEX Fees: Tier 6 members enjoy zero fees on transactions made through Mew DEX.</li>
              </ul>
              
              <p className="text-gray-300 text-sm mb-4">
                MEW Kitty NFTs: Associated with the tier system, these NFTs provide additional benefits or recognition. As of Q4 2024, 25 out of 50 had been claimed.
              </p>

              <h5 className="font-semibold text-base mb-3 text-purple-300">Q4 2024 Snapshot:</h5>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm mb-4">
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
              <p className="text-gray-300 text-sm mb-4">
                Revenue Share Distributed (Q4 2024): 93.48 ERG (equivalent to 8,113.08 MEW) was distributed to eligible Tier ⅘/6 members.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Liquidity</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 text-green-300">MEW Token</h5>
                  <p className="text-gray-300 text-sm">
                    As of the end of Q4 2024, the MEW token was reported as the 3rd most liquid asset on the Ergo Blockchain (after RSN and SigUSD), with approximately $200,000 in DEX liquidity.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 text-orange-300">Liquidity Boosting</h5>
                  <p className="text-gray-300 text-sm">
                    A "Mew Christmas Sale" in Q4 2024 successfully sold 20,000 ERG worth of MEW tokens. All ERG proceeds were used to increase the liquidity of the MEW token.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">Partnerships</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 text-purple-300">Sigmanauts</h5>
                  <p className="text-gray-300 text-sm">
                    Partnered to launch the "Sigma Shop" on the Mew Store, offering Ergo-based merchandise.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 text-pink-300">ErgOne</h5>
                  <p className="text-gray-300 text-sm">
                    Collaborated to integrate the Mew Fun lottery, aiming to boost liquidity for both Mew Finance and ErgOne.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 text-green-300">Ergosanta</h5>
                  <p className="text-gray-300 text-sm">
                    Partnership details and collaboration benefits within the Ergo ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Mew Finance represents a comprehensive DeFi ecosystem on the Ergo blockchain, combining innovative financial products with strong community engagement through its tier system. With high liquidity, strategic partnerships, and a focus on user-centric design, Mew Finance is building a sustainable and engaging DeFi platform for the Ergo community.</p>
      </div>
    </>
  );
} 