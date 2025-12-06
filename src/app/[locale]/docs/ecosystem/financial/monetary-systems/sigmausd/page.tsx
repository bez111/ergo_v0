
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { 
  Coins, 
  Shield, 
  Code, 
  ExternalLink,
  ChevronRight,
  Lock,
  Cpu,
  Database,
  CheckCircle,
  Zap,
  Users,
  Globe,
  GitBranch,
  Brain
} from 'lucide-react';
import Link from 'next/link';

export default function SigmaUSDPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          SigmaUSD
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The first eUTxO-based stablecoin, implementing the AgeUSD protocol on Ergo. SigmaUSD provides a decentralized, stable, and simple stablecoin solution with conservative collateral reserves, eliminating the need for liquidations.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/monetary-systems"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Monetary Systems
          </Link>
          <a
            href="https://sigmausd.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit SigmaUSD
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is SigmaUSD?
        </h2>
        <p className="text-gray-300">
          SigmaUSD is a decentralized stablecoin co-designed by IOHK, Ergo, and Emurgo. It implements the AgeUSD protocol with conservative collateral reserve settings (4:1–8:1 ERG:USD ratio), eliminating the need for liquidations while supporting a fully decentralized stablecoin emission setup.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Security & Stability
          </h3>
          <p className="text-gray-300 mb-4">
            SigmaUSD operates with conservative collateral reserves, ensuring stability without forced liquidations. The protocol uses reserve ratio locking to maintain stability during market volatility.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              4:1–8:1 ERG:USD reserve ratio
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No forced liquidations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Reserve ratio locking mechanism
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-400" /> Decentralized & Accessible
          </h3>
          <p className="text-gray-300 mb-4">
            SigmaUSD provides a fully decentralized stablecoin emission setup, allowing anyone with ERG to participate in minting and redeeming stablecoins through a simple, transparent process.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Fully decentralized emission
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Simple minting/redeeming process
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent oracle-based pricing
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Developer Friendly
          </h3>
          <p className="text-gray-300 mb-4">
            Built on Ergo's eUTxO model, SigmaUSD integrates seamlessly with ErgoScript and provides comprehensive developer tools for building DeFi applications.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              ErgoScript integration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              AppKit and Mosaik support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Off-chain bot implementation
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> Fee Structure
          </h3>
          <p className="text-gray-300 mb-4">
            SigmaUSD maintains a competitive fee structure with 2.25% total fees, where 2% goes directly to reserves and 0.25% supports frontend implementers.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              2% fee to reserves
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              0.25% to frontend implementers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              SigmaRSV holders get fee rebates
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> How SigmaUSD Works
        </h2>
        <p className="text-gray-300 mb-4">
          Reserve providers deposit ERG to mint reserve coins (SigmaRSV), while users mint SigmaUSD by depositing ERG. Both can redeem for ERG at the current oracle rate. The protocol maintains a floating reserve ratio to ensure stability.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Reserve Providers</h4>
            <p className="text-gray-300 text-sm">Deposit ERG to mint SigmaRSV, profit from price appreciation and protocol fees.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">SigmaUSD Users</h4>
            <p className="text-gray-300 text-sm">Mint stablecoins with ERG, redeem for ERG at oracle rate when needed.</p>
          </div>
        </div>
      </div>

      {/* Developer Access Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Accessing SigmaUSD as a Developer
        </h2>
        <p className="text-gray-300 mb-4">
          Interact with SigmaUSD using Ergo's AppKit or Mosaik for frontend dApps. The SigmaUSD Bot provides off-chain automation capabilities for advanced use cases.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-orange-400 mb-2">Example: Minting SigmaUSD</h4>
          <pre className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`// Example: Minting SigmaUSD (pseudo-code)
const tx = appkit.newTx()
  .from(reserveProvider)
  .to(sigmaUSDContract)
  .withAmount(ERG_AMOUNT)
  .mintSigmaUSD()
  .send();`}
          </pre>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://github.com/ergoplatform/eips/blob/master/eip-0015.md" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">EIP-15 Protocol</h4>
            <p className="text-gray-300 text-sm">Official Ergo Improvement Proposal detailing the SigmaUSD protocol.</p>
          </a>
          <a href="https://github.com/anon-real/sigmausd-bot" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">SigmaUSD Bot</h4>
            <p className="text-gray-300 text-sm">Off-chain bot implementation for protocol automation.</p>
          </a>
          <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Ergo AppKit</h4>
            <p className="text-gray-300 text-sm">Official SDK for building Ergo applications.</p>
          </a>
        </div>
      </div>

             {/* FAQ Section */}
       <div className="mb-8">
         <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
         <div className="space-y-4">
           <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
               <Zap className="w-5 h-5 text-yellow-400" /> What is a stablecoin?
             </h3>
             <p className="text-gray-300 mb-4">
               A derivative product designed to minimize volatility, enabling stable value for DeFi and long-term financial modeling. SigmaUSD allows anyone who owns ERG to collateralize their ERG and create liquid value with a 2.5% fee.
             </p>
             <p className="text-gray-300 text-sm">
               Price stability is critical for finance; without it, creating long-term financial product modeling becomes difficult. The crypto space is highly volatile by nature, and SigmaUSD provides mechanisms to create stable value - the foundation for a prosperous economy.
             </p>
           </div>

           <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
               <Database className="w-5 h-5 text-blue-400" /> How does the reserve work?
             </h3>
             <p className="text-gray-300 mb-4">
               SigmaUSD operates on larger margin requirements than traditional crypto-backed stablecoins. It's backed by ERG within a floating reserve ratio between 4:1 and 8:1.
             </p>
             <ul className="space-y-2 text-gray-400 text-sm">
               <li className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-green-400" />
                 Minimum threshold (4:1) protects SigmaUSD holders
               </li>
               <li className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-green-400" />
                 Maximum threshold (8:1) protects SigmaRSV holders
               </li>
               <li className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-green-400" />
                 Locking mechanisms prevent forced liquidations
               </li>
             </ul>
           </div>

           <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
               <Coins className="w-5 h-5 text-yellow-400" /> Understanding Fees
             </h3>
             <p className="text-gray-300 mb-4">
               Fees are set at 2.25%: 2% goes directly back to the reserves, and 0.25% goes to frontend implementers.
             </p>
             <ul className="space-y-2 text-gray-400 text-sm">
               <li className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-green-400" />
                 SigmaRSV holders get fee rebates (1% back)
               </li>
               <li className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-green-400" />
                 More SigmaRSV = lower effective fees
               </li>
               <li className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-green-400" />
                 Potential for large returns as price appreciates
               </li>
             </ul>
           </div>

           <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
               <Globe className="w-5 h-5 text-green-400" /> Where can I buy SigmaUSD?
             </h3>
             <div className="grid md:grid-cols-2 gap-4 mt-4">
               <div className="space-y-2">
                 <a href="https://tokenjay.app" target="_blank" rel="noopener noreferrer" className="block text-orange-400 hover:text-orange-300">TokenJay</a>
                 <a href="https://sigmausd.io" target="_blank" rel="noopener noreferrer" className="block text-orange-400 hover:text-orange-300">SigmaUSD.io</a>
                 <a href="https://ergomixer.com" target="_blank" rel="noopener noreferrer" className="block text-orange-400 hover:text-orange-300">ErgoMixer</a>
               </div>
               <div className="space-y-2">
                 <a href="https://minotaurwallet.com" target="_blank" rel="noopener noreferrer" className="block text-orange-400 hover:text-orange-300">Minotaur Wallet</a>
                 <a href="https://spectrum.fi" target="_blank" rel="noopener noreferrer" className="block text-orange-400 hover:text-orange-300">Spectrum.fi</a>
               </div>
             </div>
           </div>

           <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
               <Cpu className="w-5 h-5 text-purple-400" /> Why might transactions fail?
             </h3>
             <p className="text-gray-300 mb-4">
               There is currently significant demand. With Ergo being in the UTXO model and all dApp design patterns being quite young, we have throughput limitations.
             </p>
             <p className="text-gray-300 text-sm">
               Future improvements with asynchronous eUTxO protocols are being researched, but it was decided to provide something in the near term rather than waiting another year for research to solidify.
             </p>
           </div>

           <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
               <Shield className="w-5 h-5 text-green-400" /> Why SigmaUSD?
             </h3>
             <p className="text-gray-300 mb-4">
               When Dapps and use/utility are in place that supersedes the 2.5% fee, magic happens. Users can take their ERG, create SigmaUSD, and use that to create returns greater than the 2.5% cost of stability.
             </p>
             <p className="text-gray-300 text-sm">
               SigmaUSD is not just an opportunity to take a short position on ERG. Rather it's a way to use your reserve value to generate yield through DeFi on Ergo - decentralized exchanges, liquidity pools, and additional gateways.
             </p>
           </div>

           <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
               <Lock className="w-5 h-5 text-blue-400" /> What is SigmaUSD based on?
             </h3>
             <p className="text-gray-300">
               The design was inspired by StatiCoin. SigmaUSD implements the AgeUSD protocol, co-designed by IOHK, Ergo, and Emurgo, focusing on conservative collateral reserve settings.
             </p>
           </div>
         </div>
       </div>

             {/* Resources Section */}
       <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <Users className="w-6 h-6 text-blue-400" /> Resources & Documentation
         </h2>
         
         <div className="grid md:grid-cols-3 gap-6">
           <div>
             <h3 className="text-xl font-bold mb-3">Key Resources</h3>
             <ul className="space-y-2 text-gray-300">
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://sigmausd.io" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">SigmaUSD Website</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://github.com/ergoplatform/eips/blob/master/eip-0015.md" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">EIP-15: SigmaUSD Protocol</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://github.com/anon-real/sigmausd-bot" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">SigmaUSD Bot</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Ergo AppKit</a>
               </li>
             </ul>
           </div>
           
           <div>
             <h3 className="text-xl font-bold mb-3">Useful Links</h3>
             <ul className="space-y-2 text-gray-300">
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://ergo.watch" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ERG/USD Explorer</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://ergo.watch" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ergo.watch</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Bank Wallet</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">SigmaUSD Calculator</a>
               </li>
             </ul>
           </div>

           <div>
             <h3 className="text-xl font-bold mb-3">Related Articles</h3>
             <ul className="space-y-2 text-gray-300">
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://ergoplatform.org/en/blog/2021-03-18-ageusd/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Building Ergo: How the AgeUSD stablecoin works</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://ergoplatform.org/en/blog/2021-03-18-ageusd/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">AgeUSD Protocol: SigRSV and SigUSD</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://ergoplatform.org/en/blog/2021-03-18-ageusd/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">SigmaUSD vs the competition</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="https://ergoplatform.org/en/blog/2021-03-18-ageusd/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Risk and reward mechanism</a>
               </li>
             </ul>
           </div>
         </div>
       </div>

       {/* Additional Resources Section */}
       <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <Code className="w-6 h-6 text-green-400" /> Additional Resources
         </h2>
         
         <div className="grid md:grid-cols-2 gap-6">
           <div>
             <h3 className="text-xl font-bold mb-3">Explainer Threads</h3>
             <ul className="space-y-2 text-gray-300">
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Noob tries to explain SigmaUSD/RSV (ELI5)</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">PSA: sigRSV is not a simple long position</a>
               </li>
             </ul>
           </div>
           
           <div>
             <h3 className="text-xl font-bold mb-3">SigmaUSD Videos</h3>
             <ul className="space-y-2 text-gray-300">
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Ergo Summit 2021 - The IOHK Perspective</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Overview Video (with diagrams)</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">YouTube Playlist</a>
               </li>
               <li className="flex items-center gap-2">
                 <ExternalLink className="w-4 h-4 text-orange-400" />
                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Buying Guide</a>
               </li>
             </ul>
           </div>
         </div>
       </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "SigmaUSD allows anyone who owns ERG to collateralize their ERG and create liquid value. When Dapps and use/utility are in place that supersedes the 2.5% fee, magic happens."
        </blockquote>
      </div>
    </>
  );
} 