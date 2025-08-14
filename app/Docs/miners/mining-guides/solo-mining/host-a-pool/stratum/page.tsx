import React from "react";
import { CopyButton } from "@/components/ui/copy-button";
import { ArrowLeft, Network, Server, Code, Activity, Settings, Youtube, ExternalLink, AlertTriangle, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function HostAPoolPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Network className="w-8 h-8 text-orange-400" />
          ErgoStratum
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Stratum mining server for Ergo. Complete setup guide for hosting your own mining pool.
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/Docs/miners/mining-guides/solo-mining" 
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Solo Mining
        </Link>
      </div>

      <div className="space-y-8">
        {/* Setup Steps */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-400" />
            Setup Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Setup Ergo Node</h3>
                  <p className="text-gray-300">
                    Setup a <Link href="/Docs/miners/mining-guides/solo-mining" className="text-orange-400 hover:text-orange-300 underline">Ergo Node for solo mining</Link>, making sure to include the EIP27 rules.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">ErgoStratumServer</h3>
                  <p className="text-gray-300 mb-2">
                    Setup <a href="https://github.com/mhssamadani/ErgoStratumServer" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline inline-flex items-center gap-1">
                      ErgoStratumServer <ExternalLink className="w-3 h-3" />
                    </a> (the pool server)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/70 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Optional: NOMP Portal</h3>
                  <p className="text-gray-300">
                    Point <a href="https://github.com/btclinux/ergo-nomp" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline inline-flex items-center gap-1">
                      ergo-nomp <ExternalLink className="w-3 h-3" />
                    </a>, a node open mining portal configured for ergo to both.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
            <p className="text-blue-300 text-sm">
              <strong>Note:</strong> For Miner Connection and Work Management, <a href="https://github.com/mhssamadani/ErgoStratumProxy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
                ErgoStratumProxy <ExternalLink className="w-3 h-3" />
              </a> is also available and is used when you want to mine with open source miner (client side app).
            </p>
          </div>
        </div>

        {/* Configuration Files */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-orange-400" />
            Configuration
          </h2>
          
          {/* start.js - Daemons */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">start.js - Daemon Configuration</h3>
            <div className="relative bg-black/50 rounded-lg p-4 border border-neutral-600">
              <CopyButton 
                text={`"daemons": [
        {   //Main daemon instance
            "host": "NODE IP ADDRESS",
            "port": 9053,
            "user": "",
            "password": ""
        }
    ],`}
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`"daemons": [
        {   //Main daemon instance
            "host": "NODE IP ADDRESS",
            "port": 9053,
            "user": "",
            "password": ""
        }
    ],`}
              </pre>
            </div>
          </div>

          {/* start.js - Ports */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-3">start.js - Port Configuration</h3>
            <p className="text-gray-300 mb-3">
              Make sure to update <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">varDiff</code> depending on your hardware.
            </p>
            <div className="relative bg-black/50 rounded-lg p-4 border border-neutral-600">
              <CopyButton 
                text={`/* Each pool can have as many ports for your miners to connect to as you wish. Each port can
       be configured to use its own pool difficulty and variable difficulty settings. varDiff is
       optional and will only be used for the ports you configure it for. */
"ports": {
        "3032": { //A port for your miners to connect to
            "diff": 240000,//the pool difficulty for this port
            /*
            * use this parameter to multiply difficulty to b for each request.
            * some miner like NBMiner does not support difficulty method of stratum.
            * if you want your pool work with these miners set this parameters.
            *
            */
            "multiplyDifficulty": true,
            /* Variable difficulty is a feature that will automatically adjust difficulty for
               individual miners based on their hashrate in order to lower networking overhead */
            "varDiff": {
                "minDiff": 240000,//Minimum difficulty
                "maxDiff":  16431986528747520,//Network difficulty will be used if it is lower than this
                "targetTime": 15, //Try to get 1 share per this many seconds
                "retargetTime": 10, //Check to see if we should retarget every this many seconds
                "variancePercent": 30, //Allow time to very this % from target without retargeting
            }
        },
        "3256": { //Another port for your miners to connect to, this port does not use varDiff
            "diff":  240000,//The pool difficulty`}
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`/* Each pool can have as many ports for your miners to connect to as you wish. Each port can
       be configured to use its own pool difficulty and variable difficulty settings. varDiff is
       optional and will only be used for the ports you configure it for. */
"ports": {
        "3032": { //A port for your miners to connect to
            "diff": 240000,//the pool difficulty for this port
            /*
            * use this parameter to multiply difficulty to b for each request.
            * some miner like NBMiner does not support difficulty method of stratum.
            * if you want your pool work with these miners set this parameters.
            *
            */
            "multiplyDifficulty": true,
            /* Variable difficulty is a feature that will automatically adjust difficulty for
               individual miners based on their hashrate in order to lower networking overhead */
            "varDiff": {
                "minDiff": 240000,//Minimum difficulty
                "maxDiff":  16431986528747520,//Network difficulty will be used if it is lower than this
                "targetTime": 15, //Try to get 1 share per this many seconds
                "retargetTime": 10, //Check to see if we should retarget every this many seconds
                "variancePercent": 30, //Allow time to very this % from target without retargeting
            }
        },
        "3256": { //Another port for your miners to connect to, this port does not use varDiff
            "diff":  240000,//The pool difficulty`}
              </pre>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-orange-400" />
            Troubleshooting
          </h2>
          
          <div className="space-y-4">
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Common Issues</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Have you tried turning it off and on again?</li>
                    <li>• Is your <Link href="/Docs/miners/mining-guides/solo-mining" className="text-orange-400 hover:text-orange-300 underline">ergo.conf</Link> configured correctly?</li>
                    <li>• You can rescan from swagger</li>
                    <li>• The Node needs to be fully synchronized. Make sure your wallet is also unlocked.</li>
                    <li>• Try adjusting difficulty in start.js if you're getting <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">No new blocks</code> debug errors.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Git Configuration Fix</h3>
              <p className="text-gray-300 mb-3">If you get <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">fatal:unable to connect to github.com</code>, run:</p>
              <div className="relative bg-black/50 rounded-lg p-3 border border-neutral-600">
                <CopyButton 
                  text="git config --global url.https://github.com/.insteadOf git://github.com/"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <code className="text-green-400 font-mono text-sm">
                  git config --global url.https://github.com/.insteadOf git://github.com/
                </code>
              </div>
            </div>
            
            <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Community Support</h3>
              <p className="text-gray-300">
                Join the <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">🃏│solo-mining</a> channel on our Discord for community support.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-orange-400" />
            Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* YouTube Videos */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-400" />
                YouTube Tutorials
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://www.youtube.com/watch?v=_1M8dGpfKjU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-orange-500/50 hover:bg-neutral-700/50 transition-all group"
                >
                  <h4 className="text-white group-hover:text-orange-400 transition-colors">Ergo Node + Stratum Server Tutorial</h4>
                  <p className="text-gray-400 text-sm">Complete setup guide for Ergo node and stratum server</p>
                </a>
                
                <a 
                  href="https://www.youtube.com/watch?v=ubov4oweA20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-orange-500/50 hover:bg-neutral-700/50 transition-all group"
                >
                  <h4 className="text-white group-hover:text-orange-400 transition-colors">Mine Ergo from your own Node</h4>
                  <p className="text-gray-400 text-sm">Learn how to mine directly from your Ergo node</p>
                </a>
              </div>
            </div>
            
            {/* Misc Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Additional Resources</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/Satergo/stratum4ergo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-orange-500/50 hover:bg-neutral-700/50 transition-all group"
                >
                  <h4 className="text-white group-hover:text-orange-400 transition-colors flex items-center gap-2">
                    stratum4ergo <ExternalLink className="w-3 h-3" />
                  </h4>
                  <p className="text-gray-400 text-sm">Java library for creating Stratum mining pool servers for Ergo</p>
                </a>
                
                <a 
                  href="https://www.ergoforum.org/t/q-a-on-mining-for-pool-operators-and-solo-miners/587" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-orange-500/50 hover:bg-neutral-700/50 transition-all group"
                >
                  <h4 className="text-white group-hover:text-orange-400 transition-colors flex items-center gap-2">
                    ErgoForum: Q&A on Mining <ExternalLink className="w-3 h-3" />
                  </h4>
                  <p className="text-gray-400 text-sm">Community Q&A for pool operators and solo miners</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 