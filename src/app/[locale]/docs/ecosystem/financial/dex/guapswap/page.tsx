"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { 
  Zap, 
  Shield, 
  Users, 
  Target, 
  Globe, 
  Code, 
  TrendingUp, 
  ExternalLink, 
  Mail, 
  Building2, 
  ArrowRight, 
  CheckCircle, 
  XCircle,
  ChevronRight,
  GitBranch,
  Coins,
  Cpu
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function GuapSwapPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          GuapSwap
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          GuapSwap is a fully decentralized smart contract profit swapping service on the Ergo blockchain. GuapSwap allows any miner to get paid out in any token of their choice instead of ERG, this in turn reduces the total taxable events for the user.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://github.com/guapswap" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <GitBranch className="w-5 h-5 mr-2" /> GuapSwap GitHub
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-400" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          To use GuapSwap, the user runs the CLI on their personal computer to generate a proxy address, which can then be used with most mining pools to receive payouts, instead of their public-key wallet. After a pool sends the mining rewards to the proxy contract address, the GuapSwap CLI will automatically swap for the chosen token and make the deposit to their wallet.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Decentralized:</b> Fully decentralized smart contract profit swapping service</li>
          <li><b>Miner-Friendly:</b> Allows miners to get paid in any token of their choice</li>
          <li><b>Tax Efficiency:</b> Reduces total taxable events for users</li>
          <li><b>Fast Processing:</b> Takes as low as 1 block for swaps to complete</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" /> Transparency & Trust
          </h3>
          <p className="text-gray-300 mb-2">Open source code and decentralized operation through Ergo's blockchain ensures complete transparency and eliminates trust issues that plague centralized competitors.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-green-400" /> Mining Integration
          </h3>
          <p className="text-gray-300 mb-2">Works with any Ergo mining pool or smart pool, providing proxy addresses for direct mining reward collection and automatic token swapping.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <Code className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Detailed Features & Market Analysis</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Why Is GuapSwap Needed?</h4>
              <p className="text-gray-300 mb-4">
                Other crypto mining exchange systems (Unminable, 2Miners BTC, NiceHash) all have a common problem, they all use a centralized exchange to swap your mining rewards before you get a payout. Not only do none of these services provide any information on what exchange they use, making them lack transparency, but they are also very slow.
              </p>
              <p className="text-gray-300 mb-4">
                GuapSwap endeavors to not only be the first platform that runs this type of mining exchange on the Ergo blockchain but we also endeavor to be completely transparent and bring fast exchange times. Due to lack of transparency with the mentioned competitor platforms, they have had bad rumors of missing mining rewards and a lack of trust in the mining communities, something like this happening with Guapswap would be impossible due to its open source code and operating through Ergo's blockchain in a decentralized manner.
              </p>
              <p className="text-gray-300 mb-4">
                Ergo's block time averages 2 minutes and that is how fast GuapSwap works after your reward lands in the protocol, it takes as low as 1 block for the GuapSwap Protocol to then send mining reward to a DEX and get it swapped for the user, leaving the total time for a swap at 4 minutes or 2 blocks before a given token is in the miners wallet.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">GuapSwap Ethics</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-blue-300">
                    <Users className="w-4 h-4 text-blue-300" /> Giving Back
                  </h5>
                  <p className="text-gray-300 text-sm">
                    GuapSwap aims to give back to the community, this is literally what we are built on. The original idea for GuapSwap was so that the community could reduce additional unneeded taxable events and to help miners participate in DeFi.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
                    <Code className="w-4 h-4 text-green-300" /> Open Source
                  </h5>
                  <p className="text-gray-300 text-sm">
                    We feel like transparency is very important to build and keep the community's trust. For this reason we keep our code open source so that anyone with or without technical knowledge can read our code and see that everything is legitimately in the best interest of the user.
                  </p>
                </div>
              </div>

              <h5 className="font-semibold text-base mb-3 text-purple-300">The Power of Community</h5>
              <p className="text-gray-300 mb-4">
                In the future, we intend to let the miners and community vote through the DAO to make decisions on how the protocol should evolve in certain ways. This would require us to create a GUAP token, and although we have discussed this extensively, we currently have no plans to launch one yet.
              </p>
              
              <h5 className="font-semibold text-base mb-3 text-orange-300">Inspiration</h5>
              <p className="text-gray-300 mb-4">
                As founders we feel a compulsion to make mining on Ergo as attractive to miners as possible. There are things beyond profitability that make a blockchain attractive to miners. Ability to participate in DeFi is definitely one of them.
              </p>
              <p className="text-gray-300 mb-4">
                The latter has a number of positive effects for the Ergo project:
              </p>
              <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1 mb-4">
                <li>It incentivises miners to provide security.</li>
                <li>It incentivises miners to provide liquidity to DEXs on ergo.</li>
                <li>Less taxable events for miners, again incentivising them to stay and participate.</li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Long-Term Vision</h4>
              <p className="text-gray-300 mb-4">
                The long-term vision is for GuapSwap to be the premiere miner tool across all PoW blockchains. We hope to take advantage of SpectrumLabs' Spectrum.Network to bring native cross-chain mining opportunities for our users.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Market Analysis</h4>
              <p className="text-gray-300 mb-4">
                When looking at comparable products we have to keep in mind that GuapSwap is the first product to offer any mining payout swapping service on the Ergo Blockchain. With that in mind we can look at three other products that have similar functions and provide swapping for mining payouts:
              </p>
              <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1 mb-4">
                <li>unMineable</li>
                <li>2Miners.com</li>
                <li>NiceHash</li>
              </ul>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-3 text-orange-300">unMineable</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Easy to understand and use for beginners</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Fully centralized using CEX for payouts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Lack of transparency in regards to payouts</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-3 text-cyan-300">2Miners.com</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Alleviates high gas fees from receiving a payout</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Fully centralized using CEX for payouts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Only able to use one mining pool for service</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-3 text-purple-300">NiceHash</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Reduces taxable events for clients</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Lack of transparency in regards to CEX used</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Spotty history of hacks</span>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">Why GuapSwap?</h4>
              <p className="text-gray-300 mb-4">
                After looking at the competitor analysis we decided to build GuapSwap keeping some key features in mind: decentralization, and full transparency for clients.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-semibold text-sm mb-2 text-green-300">Pros:</h5>
                  <ul className="list-disc pl-4 text-gray-300 text-sm space-y-1">
                    <li>Fully decentralized, does not interact with any CEX</li>
                    <li>Much faster clearance of swaps by using a dex</li>
                    <li>Fully transparent swapping method</li>
                    <li>First smart contract miner profit swapping expediter</li>
                    <li>Interacts with any Ergo mining pool or smart pool</li>
                    <li>Free refunds (i.e. only pay miner fee to get out of proxy contract)</li>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">GuapSwap represents a revolutionary approach to mining reward management, providing miners with decentralized, transparent, and tax-efficient token swapping capabilities. By eliminating centralized exchanges and offering fast, trustless swaps, GuapSwap is setting new standards for mining profitability and DeFi integration on the Ergo blockchain.</p>
      </div>
    </>
  );
} 