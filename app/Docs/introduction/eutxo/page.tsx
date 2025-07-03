"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Database, Zap, GitBranch, Globe, BookOpen, FileText, Video, Shield, Coins, Lock, Cpu, Code } from "lucide-react";
import Link from "next/link";

const resourceLinks = {
  articles: [
    { title: "Learning Ergo 101 : eUTXO explained for human beings", url: "https://ergoplatform.org/en/blog/2021-11-10-learning-ergo-101-eutxo-explained-for-human-beings/" },
    { title: "Off-chain logic & eUTXO", url: "https://ergoplatform.org/en/blog/2022-01-10-off-chain-logic-and-eutxo/" },
    { title: "The UTXO Alliance Announcement", url: "https://iohk.io/en/blog/posts/2021/08/12/the-utxo-alliance-announcement/" },
  ],
  docs: [
    { title: "The Extended UTXO Model - IOHK Research", url: "https://iohk.io/en/research/library/papers/the-extended-utxo-model/" },
    { title: "Understanding the Extended UTXO model - docs.cardano", url: "https://docs.cardano.org/learn/understanding-the-extended-utxo-model/" },
  ],
  videos: [
    { title: "Ergo Blockchain Crash Course Part 1: eUTXO Model Review", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
    { title: "DeCo EU Layman Class - Basics of eUTxO", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
    { title: "Interesting explanation on the eUTXO model and dapps built in it", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
    { title: "Blockchain Basics & Transactions, UTXO and Script Code", url: "https://www.youtube.com/watch?v=QwI6U5QkB1A" },
  ],
};

function ResourceCards({ items, icon }: { items: { title: string; url: string }[]; icon: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {items.map((item: { title: string; url: string }) => (
        <a
          key={item.title}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-700 rounded-xl p-4 hover:bg-orange-500/10 transition"
        >
          {icon}
          <span className="font-semibold text-orange-300 hover:underline text-base">{item.title}</span>
        </a>
      ))}
    </div>
  );
}

export default function EutxoPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="utxo-account" className="flex items-center gap-2 justify-center">
          <Database className="w-4 h-4" /> UTxO vs Account
        </TabsTrigger>
        <TabsTrigger value="atomic-swaps" className="flex items-center gap-2 justify-center">
          <Zap className="w-4 h-4" /> Atomic Swaps
        </TabsTrigger>
        <TabsTrigger value="ergo-cardano" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Ergo vs Cardano
        </TabsTrigger>
        <TabsTrigger value="utxo-state" className="flex items-center gap-2 justify-center">
          <Globe className="w-4 h-4" /> UTXO State
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-10 p-8 rounded-2xl bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 shadow-lg">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Extended UTXO (eUTXO) Model
          </h1>
          <p className="text-xl text-gray-300 mb-2 max-w-2xl">
            Ergo utilizes the Extended UTXO (eUTXO) model, based on Bitcoin's original UTXO model but with enhanced capabilities that enable more expressive smart contracts.
          </p>
          <p className="text-lg text-gray-400 mb-2 max-w-2xl">
            This section explores the advantages and features of eUTXO that make Ergo a powerful platform for decentralized applications.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-7 h-7 text-orange-400" /> The Benefits of UTXO
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-green-400" /><span className="font-semibold">Privacy</span></div>
              <p className="text-gray-300">UTXOs being one-time objects allow for formalized privacy measures, enhancing user confidentiality.</p>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2"><Cpu className="w-5 h-5 text-blue-400" /><span className="font-semibold">Scalability</span></div>
              <p className="text-gray-300">UTXO's inherent design supports parallel transaction processing, making it simpler to scale the network. Additionally, UTXOs are more compatible with stateless client solutions like NIPoPoWs.</p>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-purple-400" /><span className="font-semibold">Interoperability</span></div>
              <p className="text-gray-300">UTXOs are well-suited for off-chain and sidechain protocols, enabling seamless integration with various solutions beyond the main chain.</p>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2"><Coins className="w-5 h-5 text-yellow-400" /><span className="font-semibold">Transaction Cost Predictability</span></div>
              <p className="text-gray-300">In Ergo, the on-chain action is primarily focused on validating smart contracts, resulting in significantly lower transaction costs. Moreover, the transaction costs are predictable, eliminating the need for gas-like mechanisms found in other platforms.</p>
            </div>
          </div>
        </div>

        {/* eUTXO and Smart Contracts Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-7 h-7 text-cyan-400" /> eUTXO and Smart Contracts
          </h2>
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-2">
              In the eUTXO model, Ergo allows smart contracts to utilize UTXOs as data inputs without modifying them. This means that nodes primarily verify transactions rather than balances. In comparison, Ethereum's Account model requires nodes to check all accounts to validate the system.
            </p>
            <p className="text-gray-300 mb-2">
              By leveraging eUTXO, Ergo enables parallel computation and facilitates non-custodial atomic swaps. This makes it easier to perform complex operations securely and efficiently.
            </p>
            <p className="text-gray-300 mb-2">
              Furthermore, Ergo's Multi-Stage UTXO model, as detailed in this peer-reviewed paper, enables the implementation of Turing-complete smart contracts. (Note: ErgoScript itself is not Turing-complete by design for security, but the model allows for Turing-complete computations via multi-stage protocols).
            </p>
            <p className="text-gray-300">
              You can see a comparison between Ergo's eUTXO model and the Account-Based model <Link href="/Docs/introduction/utxo-vs-account" className="text-orange-400 hover:text-orange-300 underline">here</Link>.
            </p>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-orange-400" /> Resources
          </h2>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><FileText className="w-5 h-5 text-green-400" /> Articles</h3>
          <ResourceCards items={resourceLinks.articles} icon={<FileText className="w-5 h-5 text-green-400" />} />
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-blue-400" /> Documentation</h3>
          <ResourceCards items={resourceLinks.docs} icon={<BookOpen className="w-5 h-5 text-blue-400" />} />
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Video className="w-5 h-5 text-purple-400" /> Video</h3>
          <ResourceCards items={resourceLinks.videos} icon={<Video className="w-5 h-5 text-purple-400" />} />
        </div>
      </TabsContent>
      <TabsContent value="utxo-account">
        <div className="mb-10 p-6 rounded-xl bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 shadow">
          <h2 className="text-2xl font-bold mb-4">Understanding Ergo's Transaction Model</h2>
          <p className="text-gray-300 mb-4">
            Ergo, similar to Bitcoin, employs the Unspent Transaction Outputs (UTXO) model instead of the Account model used in platforms like Ethereum. This documentation aims to provide a comprehensive understanding of the UTXO model, also known as the Box model, and highlight the advantages it brings.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 mt-8 flex items-center gap-2"><Database className="w-5 h-5 text-orange-400" /> Account Balance and UTXO</h3>
          <p className="text-gray-300 mb-4">
            In the Account model, a balance is represented as a simple numerical value that increases or decreases with transactions. This parallels real-world transactions where your bank balance changes when money is added or deducted. Transactions to and from an account directly affect the blockchain balance.
          </p>
          <p className="text-gray-300 mb-4">
            On the other hand, the UTXO model, introduced by Bitcoin, takes a different approach. It considers an individual's balance as a collection of unspent outputs, analogous to having multiple portions of bread dough. The total balance is the sum of these portions, or UTXOs. These UTXOs can be split or merged before being transferred to another address. Let's illustrate this with an example:
          </p>
          <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4 mb-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Alice has 100 units (100 ERG). She sends 75 units to Bob and keeps 25 units for herself.</li>
              <li>Charlie has 250 units. He transfers 150 units to Bob and retains 100 units.</li>
              <li>Bob splits 20 units from the 150 units received from Charlie and merges them with the 75 units received from Alice. He then sends a total of 205 units to Dave, keeping 20 units for himself.</li>
            </ul>
          </div>
          <p className="text-gray-300 mb-4">
            <span className="font-semibold text-orange-300">Dave now owns 205 units previously owned by Charlie, Alice, and Bob.</span> In the UTXO model, these units can be split and merged, but they retain their original identity, unlike bread dough. The transaction history of these units can be traced back to when they were initially created.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 mt-8 flex items-center gap-2"><Shield className="w-5 h-5 text-orange-400" /> Advantages of the eUTxO Model over Account-Based Blockchains</h3>
          <p className="text-gray-300 mb-4">
            The UTXO (Unspent Transaction Output) model used in Ergo offers several advantages over account-based blockchains like Ethereum. Let's compare the UTXO model to the account model to highlight these benefits:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Immutability and Security</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> Each UTXO is immutable and cannot be modified during a transaction. This enhances security and simplifies transaction verification.</li>
                <li><b>Account Model:</b> Account balances can be modified during a transaction, which introduces potential vulnerabilities and requires careful state management.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Simplicity and Developer-Friendliness</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> ErgoScript contracts in the UTXO model use a declarative programming paradigm. This simplifies development and reduces the likelihood of mistakes.</li>
                <li><b>Account Model:</b> The account model uses an imperative programming paradigm, which can be more challenging for developers and increase the risk of errors.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Support for Off-Chain Protocols</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> Ergo's UTXO model provides better support for off-chain protocols like sidechains and the Lightning Network. Off-chain transaction creation reduces on-chain operations, improving scalability and network efficiency.</li>
                <li><b>Account Model:</b> Account-based blockchains have limited support for off-chain protocols, making it more challenging to scale and utilize layer-2 solutions effectively.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Scalability and Optimization</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> The UTXO model allows for efficient off-chain transaction creation and verification. On-chain operations primarily focus on validation checks, reducing computational load and enhancing scalability.</li>
                <li><b>Account Model:</b> In account-based blockchains, most operations occur on-chain, leading to increased computational requirements and potentially limiting scalability.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Concurrent and Distributed Nature</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> Ergo's UTXO model aligns well with the concurrent and distributed nature of blockchains. The immutable transaction graph simplifies system design, reduces complexities, and enables light trustless clients.</li>
                <li><b>Account Model:</b> Account-based blockchains face challenges in handling concurrency and distributed environments due to mutable balances and more complex state management.</li>
              </ul>
            </div>
            <div className="bg-neutral-900/70 border border-neutral-700 rounded-xl p-4">
              <span className="font-semibold text-orange-300">Expressive Power with Turing Completeness</span>
              <ul className="list-disc pl-6 mt-2 text-gray-300 text-sm">
                <li><b>Ergo's eUTxO model:</b> Ergo extends the UTXO model to achieve Turing completeness through transaction trees and multi-stage protocols. It provides expressive power while mitigating issues such as blockchain bloat, bugs, and gas costs.</li>
                <li><b>Account Model:</b> Ethereum's Turing-complete execution model faces challenges related to scalability, security, and gas costs due to the complexities of executing a complete language on-chain.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-gray-300 mb-4">
            By leveraging the UTXO model, Ergo combines immutability, simplicity, scalability, and expressive power to address some of the limitations and challenges faced by account-based blockchains like Ethereum. It offers enhanced security, developer-friendliness, support for off-chain protocols, and improved scalability, making it a compelling choice for decentralized applications.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="atomic-swaps">
        {/* Hero Section */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orange-400/5 to-cyan-400/5 shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-3">
            <Zap className="w-9 h-9 text-cyan-400" /> Atomic Swaps
          </h2>
          <p className="text-xl text-gray-200 mb-2 max-w-2xl">
            Atomic Swaps are a revolutionary technology that enables direct interaction between different blockchain systems. They facilitate the transfer of digital assets across chains without the need for centralized exchanges.
          </p>
          <p className="text-gray-400 max-w-2xl">
            Blockchain technology is excellent at facilitating secure and efficient decentralized transfers within its network. However, transferring assets between different blockchain networks has traditionally involved third-party intermediaries like exchanges or OTC desks, which can introduce additional risks and inefficiencies.
          </p>
        </div>

        {/* Cross-chain Swaps Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GitBranch className="w-7 h-7 text-orange-400" /> Cross-chain Swaps
          </h3>
          <p className="text-gray-200 mb-6 text-lg">
            Atomic swaps offer a solution to this challenge, enabling a secure and efficient cross-blockchain trade of cryptocurrencies. This innovative approach facilitates a direct, trustless exchange of assets. Here's a simplified step-by-step overview of how they work:
          </p>
          <ol className="list-decimal pl-8 space-y-5 text-gray-300 text-base">
            <li>
              <span className="font-semibold text-orange-300">Alice and Bob agree to trade their cryptocurrencies.</span> Alice will send 1 BTC to Bob, and in return, Bob will send Alice 50,000 ERG. As neither party trusts the other completely, both are hesitant to send their assets first.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Alice creates a secret</span> — a unique, random number — and generates its hash. She then creates a transaction on the Bitcoin blockchain, attaching a script to lock her 1 BTC. This script specifies a condition: when the original secret (pre-image) of the generated hash is revealed, the locked BTC will be transferred to Bob's address.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Bob sets up a similar transaction</span> on the Ergo blockchain, locking 50,000 ERG with a script containing the same hash Alice used. However, without the original secret, he can't execute Alice's transaction.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Alice reveals the secret</span> and executes Bob's transaction. With the original secret now in the open, Bob can also execute the script to receive his BTC.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Time limits</span> can be set on the transactions to prevent coins from being locked indefinitely if the secret isn't revealed within the set time.
            </li>
          </ol>
        </div>

        {/* Ergo Advantage Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-7 h-7 text-orange-400" /> The Ergo Advantage in Atomic Swaps
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-orange-400/5 rounded-2xl p-6 shadow-sm flex flex-col gap-2">
              <span className="font-semibold text-orange-300 text-lg">Beyond Binary Swaps</span>
              <p className="text-gray-200">Traditional atomic swaps operate on a binary execution principle — the transactions are either completed in full or not executed at all. Ergo enhances this by leveraging its unique eUTXO model, allowing for partial order fulfillment and more flexible trading.</p>
            </div>
            <div className="bg-cyan-400/5 rounded-2xl p-6 shadow-sm flex flex-col gap-2">
              <span className="font-semibold text-cyan-300 text-lg">eUTXO Model Power</span>
              <p className="text-gray-200">The eUTXO model allows each UTXO to carry arbitrary data and be protected by complex spending conditions. This enables not just trustless swaps, but also advanced DEX features like partial fills and custom logic.</p>
            </div>
            <div className="bg-orange-400/5 rounded-2xl p-6 shadow-sm flex flex-col gap-2">
              <span className="font-semibold text-orange-300 text-lg">No Intermediaries</span>
              <p className="text-gray-200">Ergo-based DEX operates without intermediaries, eliminating the need for gateways or token wrapping. This reduces potential bottlenecks and points of failure, promoting a secure and seamless trading environment.</p>
            </div>
            <div className="bg-cyan-400/5 rounded-2xl p-6 shadow-sm flex flex-col gap-2">
              <span className="font-semibold text-cyan-300 text-lg">Smart Contract Flexibility</span>
              <p className="text-gray-200">ErgoScript enables smart contracts that can split UTXOs, maintain state, and implement complex swap logic, making cross-chain trading more powerful and user-friendly.</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4 text-base">
            By enabling this, Ergo provides the infrastructure for a fully decentralized exchange (DEX) supporting cross-chain trading, with flexibility and security beyond traditional atomic swaps.
          </p>
        </div>

        {/* Python Example Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-7 h-7 text-green-400" /> Python Example
          </h3>
          <p className="text-gray-200 mb-4 text-lg">
            Below is a Python-based illustration adapted from atomicswapexample showing an atomic swap scenario between two parties — Alice (p1) and Bob (p2), which uses the secp256k1 elliptic curve.
          </p>
          <div className="bg-neutral-900/60 rounded-2xl p-4 overflow-x-auto mb-4">
            <pre className="text-xs text-gray-200 whitespace-pre-wrap"><code>{`
import collections
import hashlib
import random
import binascii
import sys
import libnum
from ECC import *

EllipticCurve = collections.namedtuple('EllipticCurve', 'name p a b g n h')

curve = EllipticCurve(
    'secp256k1',
    p=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f,
    a=0,
    b=7,
    g=(0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798,
       0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8),
    n=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141,
    h=1,
)

p1SecretKey, p1PublicKey = gen_keypair()
p2SecretKey, p2PublicKey = gen_keypair()

rs = random.randrange(0, curve.n) # Alice's secret
rr = random.randrange(0, curve.n) # Bob's secret

rsG = scalar_mult(rs, curve.g)
rrG = scalar_mult(rr, curve.g)

# ... далее обмен значениями, вычисления, проверки ...

assert(check == sr_G)

if (vr1[0]==vr2[0]):
    print(vr1[0], "==", vr2[0])
    print ("Success!")
else:
    print ("Failure!")

print("Alice can now spend value locked to hash/public pair xG with x and their signature")
`}</code></pre>
          </div>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-orange-300">Note:</span> This is a simplified illustration. In a real-world scenario, additional security, error handling, and communication layers are required.
          </p>
          <p className="text-gray-300">
            For a more comprehensive understanding of Ergo's atomic swaps and the possibilities they offer for intra-chain and cross-chain token swaps, refer to the <a href="https://ergoplatform.org/en/documents/whitepaper_ergo_script.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">ErgoScript white paper</a>.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="ergo-cardano">
        <h2 className="text-2xl font-bold mb-4">Ergo vs Cardano</h2>
        <p className="text-gray-300 mb-4">
          Both Ergo and Cardano utilize the eUTXO model, but with different design philosophies and implementations. Ergo focuses on flexibility, composability, and advanced privacy features, while Cardano emphasizes formal verification and interoperability.
        </p>
        <ul className="list-disc pl-6 mb-2 space-y-2 text-gray-300">
          <li>Both use eUTXO for advanced smart contracts</li>
          <li>Ergo prioritizes privacy and composability</li>
          <li>Cardano emphasizes formal methods and academic research</li>
          <li>Interoperability and cross-chain features are a focus for both</li>
        </ul>

        <div className="prose prose-invert max-w-none mt-8">
          <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border-l-4 border-orange-400">
            <b>This document is a work in progress and may contain inaccuracies.</b>
          </div>
          <h3 className="text-2xl font-bold mb-4">Comparing Ergo and Cardano's eUTXO Models</h3>
          <p>Ergo and Cardano are two prominent blockchain platforms that have successfully implemented the extended UTXO (eUTXO) model. Despite their differences, both platforms leverage the eUTXO model to provide native asset support and distributed states for decentralized applications (dApps), among other features. This article aims to elucidate the key differences between Ergo and Cardano's eUTXO models.</p>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">History</h4>
            <p>Ergo was founded by Alex Chepurnoy (known as "kushti") and Dmitry Meshakov, two respected figures in the decentralized technology space. Alex's expertise, gained from working on projects like NXT and smart-contract.com, before his 'ScoreX' project caught the attention of IOG (Input Output Global), the company behind Cardano and he was hired as Research Fellow and Team Scorex Manager.</p>
            <p>However, driven by a shared vision to innovate, Alex and Dmitry decided to pursue an independent path, leaving IOG to create Ergo. They aimed to combine the strengths of the extended UTXO (eUTXO) model with the robustness of Proof-of-Work (PoW).</p>
            <p>Central to Ergo's ethos is a fair launch, ensuring a balanced token distribution and preventing wealth concentration. This commitment to fairness has resonated within the Ergo community.</p>
            <p>Leveraging their technical expertise, Alex and Dmitry have positioned Ergo at the forefront of innovation by integrating eUTXO with PoW as well as several other novel innovations. This unique framework enables the development of secure, scalable, and efficient decentralized applications.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">Programming Languages and Data Storage</h4>
            <p>Ergo employs a language known as ErgoScript, which draws inspiration from Scala. Conversely, Cardano uses a language named Plutus, which is inspired by Haskell. Ergo stores data in registers, while Cardano uses "datum" for data storage. Despite these differences, both platforms allocate a space within the UTXO to maintain the state of decentralised applications (dApps). Cardano employs a two-layer architecture, utilizing Plutus for smart contracts and Marlowe for financial contracts.</p>
            <p>ErgoScript, the scripting language of Ergo, facilitates the development of complex smart contracts and advanced features. Cardano's Plutus language is also robust and powerful, but in some cases, certain complex functionalities may necessitate the incorporation of supplementary components or alternative approaches to implementation.</p>
            <p className="font-semibold mt-4 mb-2">Here's a comparison of ErgoScript and Plutus (Cardano's smart contract language):</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-700 mb-4">
              <table className="table-auto w-full text-sm text-left">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="px-4 py-2">Feature</th>
                    <th className="px-4 py-2">ErgoScript (Ergo)</th>
                    <th className="px-4 py-2">Plutus (Cardano)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">Language design</td><td className="px-4 py-2">Based on Scorex framework, influenced by Scala</td><td className="px-4 py-2">Based on Haskell</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">Strongly typed</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">Yes</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">First-class functions</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">Yes</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">Higher-order functions</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">Yes</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">Rich data structures</td><td className="px-4 py-2">Registers, boxes</td><td className="px-4 py-2">Datum, UTXO</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">Zero-knowledge proofs</td><td className="px-4 py-2">Supported</td><td className="px-4 py-2">Planned for future development</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">Complex authentication schemes</td><td className="px-4 py-2">Supported</td><td className="px-4 py-2">Supported</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">Transaction Trees</td><td className="px-4 py-2">Supported</td><td className="px-4 py-2">Not Supported</td></tr>
                </tbody>
              </table>
            </div>
            <p>Both Ergo and Cardano's models support non-fungible assets and complex types of representation on the blockchain.</p>
            <p>After compilation, both ErgoScript and Plutus contracts output a JSON representation. For Ergo, this JSON could include the ErgoTree, compile-time constants, and compiler version. Having a standardized JSON output allows transactions to interact with the compiled contracts seamlessly.</p>
            <p>For a tangible example, please refer to this ErgoScript contract that has been ported to the Winter Cardano Contracts framework.</p>
            <p>In this example, the original ErgoScript contract has been adapted to work with the Cardano Contracts framework. The ported contract demonstrates how the logic and functionality of an ErgoScript contract can be translated to the Cardano ecosystem using the Winter framework. This allows developers to leverage their existing knowledge of ErgoScript and apply it to building smart contracts on Cardano.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">Token Minting Policies on Ergo and Cardano</h4>
            <p>Minting, the process of creating new tokens on a blockchain network, is a critical feature that enables the creation of native assets, such as NFTs. Both Ergo and Cardano offer native asset support through their respective eUTXO models, but their approach to minting and issuing tokens varies.</p>
            <h5 className="font-bold mt-4 mb-2">Native Tokens on Ergo</h5>
            <p>Ergo's token issuance is standardized through EIP4. In Ergo, tokens are stored in the R2 register of a box.</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-700 mb-4">
              <table className="table-auto w-full text-sm text-left">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="px-4 py-2">Register</th>
                    <th className="px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">R0</td><td className="px-4 py-2">Value (in nanoErgs as Base58)</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">R1</td><td className="px-4 py-2">Protection script (Smart Contract)</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">R2</td><td className="px-4 py-2">Assets (tokens)</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">R3</td><td className="px-4 py-2">Creation details</td></tr>
                  <tr className="border-t border-neutral-700"><td className="px-4 py-2">R4-R9</td><td className="px-4 py-2">Available for custom use</td></tr>
                </tbody>
              </table>
            </div>
            <p>Each box can hold multiple tokens, represented as pairs of tokenId and amount. A single box can hold up to 255 secondary tokens. However, there are some constraints to consider:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>The size of a box cannot exceed 4 kilobytes to ensure efficient storage and processing of token-related data.</li>
              <li>The presence of tokens increases the computational cost of a transaction due to additional calculations required for token-related operations.</li>
            </ul>
            <p>Ergo's NFT minting policy is defined by the Ergo Improvement Proposal (EIP) 0024, which offers two design versions for artwork issuance: V1 and V2.</p>
            <h5 className="font-bold mt-4 mb-2">Native Tokens on Cardano</h5>
            <p>Native tokens on Cardano allow for the transacting of multiple assets, including ada and custom tokens, without the need for smart contracts. This feature extends the accounting infrastructure to accommodate various assets. Native tokens are different from non-native tokens that require smart contracts.</p>
            <p>Assets on Cardano are uniquely identified by an asset ID, consisting of a policy ID and asset name. Tokens with the same asset ID are fungible. Ada is the principal currency for fees and rewards, while native tokens can be used for payments and transactions.</p>
            <p>Cardano's minting policy uniquely identifies each native asset with a permanent policy ID, which originates from the policy script. The policy script further defines other attributes, such as the asset's name and amount/value. Since asset names are not unique, Cardano NFTs must be identified by the policy ID, which can be publicly available to distinguish fraudulent/duplicate NFTs from the original tokens.</p>
            <p>A minimum ada value is required to transfer native tokens between addresses. Token bundles organize tokens and are the standard way to represent assets on Cardano.</p>
            <p>Minting policies specify the rules for creating and burning tokens, and each asset has a permanent association with a minting policy. The native token lifecycle involves minting, issuing, using, redeeming, and burning tokens, with various actors involved, such as asset controllers, token issuers, and token holders. Tokens can also be reissued by token holders acting as reissuers for trading or liquidity purposes.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">Global State Management</h4>
            <p>The management of global state in Ergo and Cardano is influenced by their respective scripting languages and transaction validation processes. Ergo utilizes ErgoScript, a call-by-value, higher-order functional language without recursion. ErgoScript defines a guarding proposition for a coin as a logical formula that combines predicates over a context and cryptographic statements provable via Σ-protocols with AND, OR, k-out-of-n connectives.</p>
            <p>Although ErgoScript is not inherently Turing complete, Turing completeness can be achieved in Ergo using transaction trees, as outlined in this peer reviewed paper. A transaction tree is a structure where transactions are organized into a tree, with each transaction referencing its parent transaction(s). This allows for complex, multi-step computations to be executed across multiple transactions, effectively making Ergo Turing complete.</p>
            <p>This organization of transactions enables developers to create more complex and flexible smart contracts on Ergo, similar to those written in Cardano's Plutus language. However, this method requires more manual construction of transaction structures and may not be as intuitive as using a Turing-complete language like Plutus.</p>
            <p>Ergo's transaction validation uses the ErgoLikeStateContext trait and ErgoLikeStateContext case class to represent the blockchain context. The sigmaLastHeaders method provides information about the previous blocks, while the previousStateDigest method provides the UTXO set digest from the last header. The sigmaPreHeader method provides information about the current block being validated.</p>
            <p>In contrast, Cardano uses Plutus, a Turing-complete, higher-order functional programming language subset of Haskell, designed specifically for smart contracts. While ErgoScript focuses on the transactional model and guarding propositions for coins, Plutus provides a more general-purpose language for writing smart contracts.</p>
            <p className="font-semibold mt-4 mb-2">For more information, refer to these foundational papers:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>Improving authenticated dynamic dictionaries, with applications to cryptocurrencies</li>
              <li>Self-reproducing Coins as Universal Turing Machine</li>
              <li>Multi-stage Contracts in the UTXO Model</li>
              <li>EDRAX: A Cryptocurrency with Stateless Transaction Validation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">Privacy Features</h4>
            <p>Ergo's cryptographic design incorporates Sigma protocols, providing extensive access to discrete log-based zero-knowledge proofs, offering potential advantages in privacy and security. Zero-knowledge proofs are cryptographic techniques that enable a prover to demonstrate the truth of a statement to a verifier without revealing any additional information. In the context of blockchain technology, zero-knowledge proofs can enhance privacy and security by allowing transactions and smart contracts to be executed without disclosing sensitive data.</p>
            <p>Discrete log-based zero-knowledge proofs refer to a class of zero-knowledge proofs that rely on the hardness of the discrete logarithm problem, a foundational concept in modern cryptography. ErgoScript, the scripting language used in Ergo, provides access to Σ-protocols, a subclass of cryptographic proof systems known as non-interactive Σ-protocols. These Σ-protocols include the Schnorr signature scheme and Diffie-Hellman tuple, which can be used to prove knowledge of discrete logarithms. This efficient and flexible implementation of zero-knowledge proofs can improve privacy-enhancing features and applications on Ergo.</p>
            <p>Ergo's Sigma Protocols enable the implementation of sophisticated tasks that would otherwise be impossible, risky, or expensive, allowing for self-sovereign application-level privacy. Trustless scripts can access mixers or other functionality without any third parties required. Using Ergo for such applications, users can achieve enhanced privacy and security compared to other platforms.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">Data Inputs</h4>
            <p>Spending UTXOs is at the core of the extended UTXO smart contract model, and all execution happens when a UTXO is spent. However, having to spend every single UTXO which you wish to read data from has several drawbacks:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>The smart contract of the UTXO with the data must execute, thereby increasing computation complexity/cost.</li>
              <li>The UTXO must be spent, meaning only one transaction can use the UTXO data per block/slot.</li>
              <li>Transaction fees increase due to needless excess execution & recreation of the output data UTXO.</li>
              <li>Every UTXO which wishes to allow read access through spending must encode the logic directly within their smart contract.</li>
              <li>It is liable to spam attacks by bad actors who wish to wreak havoc on a protocol.</li>
              <li>Increased off-chain complexity in transaction creation & finding the latest UTXO.</li>
            </ul>
            <p>To address these issues, the core Ergo developers, Alexander Slesarenko, Alex Chepurnoy, and Dmitry Meshkov, introduced the concept of "read-only inputs". These allow any transaction to reference any other box(UTXO) currently in the UTXO set and read the data without any problems listed in the previous section.</p>
            <h5 className="font-bold mt-4 mb-2">Ergo's Data Inputs</h5>
            <p>Ergo's eUTXO model supports data inputs, which allow transactions to read data from other boxes (UTXOs) without consuming them. This feature enables Ergo to access off-chain data and use oracles, facilitating various applications, such as decentralized finance (DeFi), prediction markets, and data-driven smart contracts. Data inputs can also help minimize transaction fees, as only the necessary boxes are consumed in the transaction process.</p>
            <h5 className="font-bold mt-4 mb-2">Cardano's Reference Inputs</h5>
            <p>Cardano introduced reference inputs in the Vasil Hardfork, enabling functionality similar to Ergo's data inputs. In Cardano's eUTXO model, reference inputs allow transactions to access data from other datums without consuming them. This facilitates the integration of off-chain data and oracles into Cardano's smart contracts, expanding the platform's possible applications and use cases.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">Collaboration</h4>
            <p>Ergo and Cardano are pioneers in implementing the extended UTXO (eUTXO) model and have collaborated to advance research and development in this area through the eUTXO Alliance. Cardano's implementation of data inputs is just one example of how we can work together.</p>
            <p>One notable development between the Ergo and Cardano communities is Rosen Bridge, which is currently live. This bridge enables the transfer of wrapped ADA tokens from Cardano to Ergo and vice versa, promoting interoperability and collaboration between the platforms and their communities. Cardano users can now access the DeFi ecosystem on Ergo with this bridge using wrapped ADA or native ADA tokens.</p>
            <p>Moreover, ErgoMixer, as the only token mixer in the space, enables users to mix wrapped ADA and other native tokens, such as wrapped HOSKY. After mixing the tokens in ErgoMixer, users can bridge them back to Cardano. These native tokens can be used in SigmaFi, SigmaO, or any budding dApps available on sigmaverse.io.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2 text-orange-300">Conclusion</h4>
            <p>Ergo and Cardano are both innovative blockchain platforms that have implemented the extended UTXO model, offering native asset support, distributed states for decentralized applications, and a range of other features. While ErgoScript and Plutus, their respective scripting languages, have different foundations and design principles, they both enable the creation of sophisticated smart contracts and blockchain applications.</p>
            <p>Ergo's approach to minting policies allows for more complex NFTs and token attributes, while Cardano's policy provides a simpler method for token issuance. Both platforms have implemented solutions to access off-chain data and oracles through data inputs, broadening their potential applications and use cases. Furthermore, their collaboration through the eUTXO Alliance and developments like Rosen and Reference Inputs demonstrate the potential for cross-platform cooperation and growth in the blockchain ecosystem.</p>
            <p>Both Ergo and Cardano offer unique strengths and capabilities, making them appealing choices for developers, users, and investors alike. As these platforms continue to evolve and collaborate, they will undoubtedly contribute significantly to the advancement of blockchain technology and the adoption of the eUTXO model.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-orange-300">Frequently Asked Questions</h4>
            <div className="space-y-4">
              <div><span className="font-bold">What are the similarities and differences between Ergo and Cardano's native assets?</span>
                <p>Ergo and Cardano both support native assets within their respective blockchain ecosystems. They both utilize the eUTXO model, but they employ different scripting languages (Ergo uses ErgoScript, while Cardano uses Plutus) and have distinct approaches to data storage, global state management, and minting policies.</p></div>
              <div><span className="font-bold">Can Ergo's multiasset ledger interact with Cardano's ledger?</span>
                <p>While Ergo and Cardano share similarities due to their use of the eUTXO model, their ledgers are not directly interoperable. This is primarily due to differences in their scripting languages, minting policies, and data handling mechanisms.</p></div>
              <div><span className="font-bold">Does Ergo have a feature similar to Cardano's CIP25?</span>
                <p>Ergo has a robust set of features and improvements, but as of now, there is no direct equivalent to Cardano's CIP25 in the Ergo ecosystem.</p></div>
              <div><span className="font-bold">Does Ergo offer a feature like Cardano's dbsync?</span>
                <p>Yes, Ergo provides a similar feature through its Explorer tool, which allows users to synchronize and interact with the Ergo blockchain.</p></div>
              <div><span className="font-bold">How do Mithril and NiPoPoWs compare in the context of Ergo?</span>
                <p>Both Mithril and NiPoPoWs are important concepts in the blockchain space. For a detailed comparison and understanding, you can refer to this video from PG: Blockchain & Deep Learning on YouTube.</p></div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="utxo-state">
        <h2 className="text-2xl font-bold mb-4">UTXO State</h2>
        <p className="text-gray-300 mb-4">
          The UTXO state in Ergo is a dynamic set of unspent outputs that can be used as inputs for new transactions. This model enables parallel transaction validation, efficient state management, and advanced scripting capabilities.
        </p>
        <ul className="list-disc pl-6 mb-2 space-y-2 text-gray-300">
          <li>Each UTXO can carry arbitrary data and scripts</li>
          <li>State is updated only by spending UTXOs</li>
          <li>Facilitates stateless clients and light nodes</li>
          <li>Enables advanced DeFi and dApp use cases</li>
        </ul>
      </TabsContent>
    </Tabs>
  );
} 