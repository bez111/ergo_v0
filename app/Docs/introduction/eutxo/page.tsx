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
    <div className="max-w-4xl mx-auto py-10 px-2 sm:px-4">
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
    </div>
  );
} 