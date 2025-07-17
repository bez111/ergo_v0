import React from "react";
import Link from "next/link";
import {
  BookOpen, Code, Link2, Server, Search, Zap, ExternalLink, Flame, Globe, Wrench, Layers, Eye, FileText, Terminal, Info
} from "lucide-react";

export default function DevelopersResources() {
  return (
    <>
      {/* Hero/Intro Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Developer Resources
        </h1>
        <p className="text-lg text-gray-300 mb-2">
          This page outlines the resources available on Ergo. Also check out the{' '}
          <a href="https://sigmaverse.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">dev-tools section on sigmaverse <ExternalLink className="inline w-4 h-4 ml-1" /></a>
        </p>
      </div>

      {/* Libraries Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-cyan-400" /> Libraries
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Code className="w-5 h-5 text-orange-400" /> SDKs</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
              <li><Link href="appkit.md" className="text-cyan-400 hover:underline">Appkit</Link> (Java)</li>
              <li><Link href="rust.md" className="text-cyan-400 hover:underline">Sigma-Rust</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Layers className="w-5 h-5 text-green-400" /> Frameworks</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
              <li><Link href="headless.md" className="text-cyan-400 hover:underline">Headless dApp Framework</Link> (Rust)</li>
              <li><Link href="mosaik.md" className="text-cyan-400 hover:underline">Mosaik</Link> (Kotlin)</li>
              <li><Link href="jde.md" className="text-cyan-400 hover:underline">JDE</Link> (JSON)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Wrench className="w-5 h-5 text-yellow-400" /> Wrappers</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
              <li><a href="https://github.com/mgpai22/ergpy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgPy</a> (python-jvm)</li>
              <li><a href="https://github.com/ergo-pad/ergo-python-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-python-appkit</a></li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Wrench className="w-5 h-5 text-yellow-400" /> Toolkits</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li><a href="https://github.com/capt-nemo429/fleet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fleet (JS)</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-orange-400" /> Blockchain
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Globe className="w-5 h-5 text-cyan-400" /> Explorer</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
              <li><a href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mainnet explorer</a></li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-400" /> Testnet</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
              <li><a href="https://testnet.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testnet explorer</a></li>
              <li><a href="https://github.com/ergoplatform/ergo/wiki/Ergo-Testnet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Using Ergo-Testnet</a></li>
              <li><a href="https://testnet.ergofaucet.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testnet Faucet</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Server className="w-5 h-5 text-orange-400" /> API</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
              <li><a href="https://api.ergoplatform.com/api/v1/docs/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">API Docs</a></li>
              <li><a href="https://git.io/fjqwb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Node API</a></li>
              <li><a href="https://git.io/fjqwN" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Explorer API</a></li>
              <li><a href="https://api.ergo.watch/docs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo.Watch API</a></li>
              <li><a href="https://api.tokenjay.app/swagger-ui/index.html;jsessionid=59429AD4DF081E2E3450C2834095D427?attribute=redirectWithRedirectView" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">TokenJay API</a></li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><FileText className="w-5 h-5 text-pink-400" /> Test vectors</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li><a href="https://git.io/fjqwX" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo transaction serialization</a></li>
              <li><a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/test/scala/sigmastate/crypto/SigningSpecification.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Signature scheme</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Utilities Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wrench className="w-6 h-6 text-yellow-400" /> Utilities
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><a href="https://github.com/lorien/ergotools" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Miner rewards script</a> | Simple command-line tool to find miner rewards not spent and form withdrawing transaction requests for them</li>
          <li><a href="https://wallet.plutomonkey.com/p2s/?source=dHJ1ZQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo P2S Playground</a> | A web-based tool to quickly get the address corresponding to some script</li>
          <li><a href="https://github.com/SabaunT/ergo-monitoring" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-monitoring</a> | Debug service printing out useful for developers and managers information about ergo blockchain state.</li>
        </ul>
      </div>

      {/* On-Chain Analysis Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Eye className="w-6 h-6 text-cyan-400" /> On-Chain Analysis
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><a href="https://github.com/CryptoCream/ErgoVision" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Vision</a> | A wallet visualization tool to be used for investigating transactions and addresses</li>
          <li><a href="https://github.com/Eeysirhc/ergo_intelligence" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Intelligence</a></li>
          <li><a href="https://ergo.watch" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo.watch</a></li>
        </ul>
      </div>

      {/* Tools Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-orange-400" /> Tools
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <a href="https://thierrym1212.github.io/txbuilder/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Transaction builder</a> |  The application allows you to manipulate Ergo json transactions with a UI and to sign them with Yoroi, or to prepare the JSON for the Swagger API. It is also able to load the JSON of an unsigned transaction to edit it.  |
            <a href="https://github.com/ThierryM1212/transaction-builder/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline ml-2">GitHub</a> |
            <a href="https://youtu.be/0VhfY7osT2k" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline ml-2">Video</a>
          </li>
        </ul>
      </div>

      {/* Burning Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Flame className="w-6 h-6 text-pink-400" /> Burning
        </h2>
        <p className="text-gray-300 mb-2">
          <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">4MQyMKvMbnCJG3aJ</code> is a P2S (Pay-to-Script) representation of “false” condition, i.e. the box is unspendable. Hash is written into R4 register of the box, in the explorer
        </p>
        <blockquote className="text-gray-400 border-l-4 border-pink-400 pl-4 italic mb-2">
          It looks like <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">0e2047ee2cbd52be01e0876c3e0b989a0d4d5f8955200b1fab0e6eeb2b182555c2fb</code>, where <b>0e</b> is type descriptor (byte array), <b>20</b> is bytestring length (0x20 in hex = 32), <b>47ee2cbd52be01e0876c3e0b989a0d4d5f8955200b1fab0e6eeb2b182555c2fb</b> is the hash of the file.
        </blockquote>
      </div>

      {/* External Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Link2 className="w-6 h-6 text-cyan-400" /> External
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><a href="https://github.com/ergoplatform/awesome-ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">awesome-ergo</a></li>
          <li><a href="https://ergonaut.space/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergonaut.space</a></li>
          <li><a href="https://ergosites.github.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergosites.github</a></li>
          <li><a href="https://github.com/ergoplatform/ergo/wiki" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoWiki</a> | The official ergoplatform GitHub wiki</li>
          <li><a href="https://ergotutorials.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergotutorials.com</a></li>
        </ul>
      </div>
    </>
  );
} 