"use client"
import { BookOpen, Code, Pickaxe, Users, HelpCircle, Wallet, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <main>
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-orange-400 prose-a:underline">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 flex items-center gap-3 leading-tight pb-1">
          <BookOpen className="w-8 h-8 text-orange-400" />
          Welcome to Ergo!
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          New to cryptocurrency or looking to understand what makes Ergo special? You're in the right place! Ergo is a secure and powerful platform designed to be a fair financial system for everyone. Think of it as a next-generation digital money system built with privacy and everyday people in mind.
        </p>
        <p className="mb-8">This guide helps you find what you need, whether you want to learn the basics, use Ergo for transactions, build applications, or help secure the network.</p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-orange-400 font-semibold"><BookOpen className="w-5 h-5" /> Learn</span>
            <p className="text-gray-300">Get a high-level overview of how Ergo works.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-cyan-400 font-semibold"><Code className="w-5 h-5" /> Start Developing</span>
            <p className="text-gray-300">Get started on your development journey.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-yellow-400 font-semibold"><Pickaxe className="w-5 h-5" /> Start Mining</span>
            <p className="text-gray-300">Start mining ERG today or explore unique mining features available on Ergo.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-green-400 font-semibold"><Users className="w-5 h-5" /> Contribute</span>
            <p className="text-gray-300">'Lets create grassroots finance'</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-purple-400 font-semibold"><Wallet className="w-5 h-5" /> Wallets</span>
            <p className="text-gray-300">Storing your ERG safely & securely.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-pink-400 font-semibold"><HelpCircle className="w-5 h-5" /> FAQ</span>
            <p className="text-gray-300">View some of the most frequently asked questions.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Why Choose Ergo?</h2>
        <ul className="list-disc ml-6 text-gray-300 mb-8">
          <li><b>Built for Everyone:</b> Designed to be accessible and useful for regular people, not just tech experts.</li>
          <li><b>Secure & Private:</b> Uses advanced cryptography to keep your funds safe and transactions private.</li>
          <li><b>Fair Launch:</b> No pre-mine or initial coin offerings (ICOs) mean a fairer distribution from the start.</li>
          <li><b>Powerful Tools:</b> Supports advanced features like smart contracts for building useful applications (dApps).</li>
          <li><b>Sustainable:</b> Features like Storage Rent help keep the network efficient and long-lasting.</li>
        </ul>
        <p className="mb-8">Learn more about Ergo's Vision and Key Features</p>
        <h2 className="text-2xl font-bold mb-4">Getting Started with Ergo</h2>
        <ul className="list-disc ml-6 text-gray-300 mb-8">
          <li><b>Understand the Basics:</b> What is blockchain? What is ERG? Check out the Glossary for simple explanations of common terms.</li>
          <li><b>Get a Wallet:</b> A digital wallet is needed to store your ERG securely. Learn about different Wallet Options and how to set one up safely.</li>
          <li><b>Get ERG & Stay Safe:</b> Learn how to acquire and securely store ERG with this Security Guide.</li>
          <li><b>Explore What You Can Do:</b> Discover simple ways to use Ergo, like sending ERG or exploring applications built on Ergo (dApps). See the Ecosystem Overview.</li>
          <li><b>Common Questions:</b> Find answers to frequently asked questions in the FAQ and Common Misconceptions.</li>
          <li><b>Join the Community:</b> Connect with other users! See the community links below, or learn how to Contribute to Marketing or join the Sigmanauts Program.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Using Ergo (Intermediate)</h2>
        <ul className="list-disc ml-6 text-gray-300 mb-8">
          <li><b>Explore Decentralized Exchanges (DEXs):</b> Learn how to trade tokens directly on Ergo (DEX Overview), engage in Peer-to-Peer Trading, explore Arbitrage Opportunities, or dive into Options Trading.</li>
          <li><b>Earn Yield:</b> Discover ways to earn passive income through Yield Farming & Staking.</li>
          <li><b>Understand Stablecoins:</b> Discover SigmaUSD, Ergo's native stablecoin (SigmaUSD).</li>
          <li><b>Explore DegFi:</b> Navigate high-risk, high-reward opportunities with Degenerate Finance.</li>
          <li><b>Engage with the Ecosystem:</b> Learn about Airdrops & Token Sales or explore Gaming on Ergo.</li>
          <li><b>Run Your Own Node:</b> Contribute to the network's decentralization (Running a Node).</li>
          <li><b>Use Off-Chain Services:</b> Understand and utilize off-chain bots and services (Off-Chain Overview).</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Building on Ergo (Developers)</h2>
        <ul className="list-disc ml-6 text-gray-300 mb-8">
          <li><b>Developer Quickstart:</b> Get set up and start building. See Start Developing.</li>
          <li><b>Learn ErgoScript:</b> Dive into Ergo's powerful smart contract language. See ErgoScript.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Securing the Network (Miners)</h2>
        <ul className="list-disc ml-6 text-gray-300 mb-8">
          <li><b>Start Mining:</b> Find pools, software, and guides. See Start Mining.</li>
          <li><b>Learn about Autolykos:</b> Understand Ergo's unique mining algorithm. See Autolykos.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Engage with the Ergo Community</h2>
        <p className="mb-8">Ergo's community is vibrant and continuously evolving. Keep updated with the latest developments, participate in community discussions, and find support through forums and social platforms.</p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-orange-400 font-semibold">Key Features</span>
            <p className="text-gray-300">Discover Ergo's key features</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-cyan-400 font-semibold">Anatomy</span>
            <p className="text-gray-300">Dive into boxes, registers and more in the anatomy of Ergo.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-green-400 font-semibold">🔗 Sigmaverse</span>
            <p className="text-gray-300">Your portal to the Ergo dApp universe.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-pink-400 font-semibold">🔗 Come chat!</span>
            <p className="text-gray-300">Join the action on Discord</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-yellow-400 font-semibold">Testnet</span>
            <p className="text-gray-300">An alternative blockchain you can use for experimentation</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-blue-400 font-semibold">Bookmarks</span>
            <p className="text-gray-300">An overview of Ergo resources</p>
          </div>
        </div>
      </div>
    </main>
  )
} 