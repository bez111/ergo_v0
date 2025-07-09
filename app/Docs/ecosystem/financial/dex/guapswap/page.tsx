"use client";

import React from "react";
import { Zap, Shield, Users, Target, Globe, Code, TrendingUp, ExternalLink, Mail, Building2, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function GuapSwapPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        GuapSwap
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        GuapSwap is a fully decentralized smart contract profit swapping service on the Ergo blockchain. GuapSwap allows any miner to get paid out in any token of their choice instead of ERG, this in turn reduces the total taxable events for the user.
      </p>

      {/* What is GuapSwap */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <Zap className="w-5 h-5 text-green-300" /> What is GuapSwap?
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            GuapSwap is a fully decentralized smart contract profit swapping service on the Ergo blockchain. GuapSwap allows any miner to get paid out in any token of their choice instead of ERG, this in turn reduces the total taxable events for the user.
          </p>
          <p className="text-gray-300 text-base mb-4">
            To use GuapSwap, the user runs the CLI on their personal computer to generate a proxy address, which can then be used with most mining pools to receive payouts, instead of their public-key wallet. After a pool sends the mining rewards to the proxy contract address, the GuapSwap CLI will automatically swap for the chosen token and make the deposit to their wallet.
          </p>
        </div>
      </div>

      {/* Why Is GuapSwap Needed */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <Target className="w-5 h-5 text-blue-300" /> Why Is GuapSwap Needed?
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            Other crypto mining exchange systems (Unminable, 2Miners BTC, NiceHash) all have a common problem, they all use a centralized exchange to swap your mining rewards before you get a payout. Not only do none of these services provide any information on what exchange they use, making them lack transparency, but they are also very slow.
          </p>
          <p className="text-gray-300 text-base mb-4">
            GuapSwap endeavors to not only be the first platform that runs this type of mining exchange on the Ergo blockchain but we also endeavor to be completely transparent and bring fast exchange times. Due to lack of transparency with the mentioned competitor platforms, they have had bad rumors of missing mining rewards and a lack of trust in the mining communities, something like this happening with Guapswap would be impossible due to its open source code and operating through Ergo's blockchain in a decentralized manner.
          </p>
          <p className="text-gray-300 text-base">
            Ergo's block time averages 2 minutes and that is how fast GuapSwap works after your reward lands in the protocol, it takes as low as 1 block for the GuapSwap Protocol to then send mining reward to a DEX and get it swapped for the user, leaving the total time for a swap at 4 minutes or 2 blocks before a given token is in the miners wallet.
          </p>
        </div>
      </div>

      {/* GuapSwap Ethics */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <Shield className="w-5 h-5 text-green-300" /> GuapSwap Ethics
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-blue-300">
              <Users className="w-4 h-4 text-blue-300" /> Giving Back
            </h3>
            <p className="text-gray-300 text-sm">
              GuapSwap aims to give back to the community, this is literally what we are built on. The original idea for GuapSwap was so that the community could reduce additional unneeded taxable events and to help miners participate in DeFi.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
              <Code className="w-4 h-4 text-green-300" /> Open Source
            </h3>
            <p className="text-gray-300 text-sm">
              We feel like transparency is very important to build and keep the community's trust. For this reason we keep our code open source so that anyone with or without technical knowledge can read our code and see that everything is legitimately in the best interest of the user.
            </p>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-3 text-purple-300">The Power of Community</h3>
          <p className="text-gray-300 text-base mb-4">
            In the future, we intend to let the miners and community vote through the DAO to make decisions on how the protocol should evolve in certain ways. This would require us to create a GUAP token, and although we have discussed this extensively, we currently have no plans to launch one yet.
          </p>
          
          <h3 className="font-semibold text-base mb-3 text-orange-300">Inspiration</h3>
          <p className="text-gray-300 text-base mb-4">
            As founders we feel a compulsion to make mining on Ergo as attractive to miners as possible. There are things beyond profitability that make a blockchain attractive to miners. Ability to participate in DeFi is definitely one of them.
          </p>
          <p className="text-gray-300 text-base">
            The latter has a number of positive effects for the Ergo project:
          </p>
          <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1 mt-2">
            <li>It incentivises miners to provide security.</li>
            <li>It incentivises miners to provide liquidity to DEXs on ergo.</li>
            <li>Less taxable events for miners, again incentivising them to stay and participate.</li>
          </ul>
        </div>
      </div>

      {/* Long-Term Vision */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <Globe className="w-5 h-5 text-blue-300" /> Long-Term Vision
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base">
            The long-term vision is for GuapSwap to be the premiere miner tool across all PoW blockchains. We hope to take advantage of SpectrumLabs' Spectrum.Network to bring native cross-chain mining opportunities for our users.
          </p>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <TrendingUp className="w-5 h-5 text-green-300" /> Market Analysis
        </h2>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-base mb-3 text-blue-300">Competitor Comparison</h3>
          <p className="text-gray-300 text-base mb-4">
            When looking at comparable products we have to keep in mind that GuapSwap is the first product to offer any mining payout swapping service on the Ergo Blockchain. With that in mind we can look at three other products that have similar functions and provide swapping for mining payouts:
          </p>
          <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
            <li>unMineable</li>
            <li>2Miners.com</li>
            <li>NiceHash</li>
          </ul>
        </div>

        {/* Competitor Analysis */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-3 text-orange-300">unMineable</h3>
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
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-3 text-cyan-300">2Miners.com</h3>
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
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-3 text-purple-300">NiceHash</h3>
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

        {/* Why GuapSwap */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-3 text-green-300">Why GuapSwap?</h3>
          <p className="text-gray-300 text-base mb-4">
            After looking at the competitor analysis we decided to build GuapSwap keeping some key features in mind: decentralization, and full transparency for clients.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-green-300">Pros:</h4>
              <ul className="list-disc pl-4 text-gray-300 text-sm space-y-1">
                <li>Fully decentralized, does not interact with any CEX</li>
                <li>Much faster clearance of swaps by using a dex</li>
                <li>Fully transparent swapping method</li>
                <li>First smart contract miner profit swapping expediter</li>
                <li>Interacts with any Ergo mining pool or smart pool</li>
                <li>Free refunds (i.e. only pay miner fee to get out of proxy contract)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2 text-orange-300">Cons:</h4>
              <ul className="list-disc pl-4 text-gray-300 text-sm space-y-1">
                <li>Adds another step to the mining process by interacting with the proxy contract</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GuapSwap Protocol */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <Building2 className="w-5 h-5 text-blue-300" /> GuapSwap Protocol
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-3 text-green-300">Protocol Description</h3>
          <p className="text-gray-300 text-base mb-4">
            We outline each step involved in the protocol as follows:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 text-sm space-y-2">
            <li>A miner generates a proxy address.</li>
            <li>The proxy address is provided to the mining pool instead of the miner's normal wallet address. Any reward payouts will be sent to the proxy address instead.</li>
            <li>The user decided whether to perform a swap or a refund.</li>
            <li>If the user decides to swap, the settings from the config file will be used to decide which token on SpectrumDex to swap the mining rewards for. A DEX swap box will be created, representing the user's swap.</li>
          </ol>
          <p className="text-gray-300 text-base mt-4">
            GuapSwap enables what we like to call "mining portfolios," where a miner can effectively select a percentage of their rewards and directly swap it to any native asset on Ergo, simulating the effect of mining these assets.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <Users className="w-5 h-5 text-green-300" /> Team
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-300">Luca D'Angelo</h3>
            <p className="text-gray-300 text-sm">
              Luca is the lead developer.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-green-300">Jesper A.</h3>
            <p className="text-gray-300 text-sm">
              Jesper has been behind multiple startups in both the health and tech sectors. With experience in both marketing and video production, he is essential in the public facing outreach of GuapSwap.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-purple-300">George X.</h3>
            <p className="text-gray-300 text-sm">
              Experienced Ergo miner and business owner, providing critical feedback based on user perspective and helps to balance GuapSwaps sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <Mail className="w-5 h-5 text-blue-300" /> Contact Us
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            Please send any business inquiries to the following email address:
          </p>
          <a 
            href="mailto:contact@guapswap.org" 
            className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors gap-2"
          >
            contact@guapswap.org <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <ExternalLink className="w-5 h-5 text-green-300" /> Resources
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            All of our project and community channels can be found in the following LinkTree:
          </p>
          <a 
            href="https://linktr.ee/GuapSwap" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors gap-2"
          >
            https://linktr.ee/GuapSwap <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-orange-300">
            <Shield className="w-5 h-5 text-orange-300" /> Disclaimer
          </h2>
          <p className="text-gray-300 text-base">
            This is not financial or investment advice, do your own research. We take no responsibility for your problems.
          </p>
        </div>
      </div>
    </>
  );
} 