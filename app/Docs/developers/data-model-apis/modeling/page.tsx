import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Box } from 'lucide-react';

export default function ModelingPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <Box className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Ergo Box Design: A Comprehensive Guide
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding box modeling and design principles
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link 
            href="/docs/developers/data-model-apis"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Data Model APIs
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <section>
          <p className="text-gray-300 mb-6">
            The UTXO (Unspent Transaction Output) system is the backbone of many blockchain networks, and at its core are boxes. These boxes are not just containers for the value of a currency within a blockchain; they are also equipped with registers that are protected by a contract, enhancing their functionality on the Ergo blockchain.
          </p>
          <p className="text-gray-300 mb-6">
            Registers are essentially storage units for data and information at specific addresses in the blockchain. To visualize this, think of these boxes as advanced storage units or containers. For instance, consider a cup:
          </p>
          
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">A Cup:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Holds liquid primarily</li>
              <li>Can contain a certain quantity of liquid</li>
            </ul>
          </div>
          
          <p className="text-gray-300 mb-6">
            Now, let's translate this into a blockchain context:
          </p>
          
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">A Cup Box:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Stores only Ergs or a specific token</li>
              <li>Has a storage limit enforced by a guard script</li>
            </ul>
          </div>
          
          <p className="text-gray-300 mb-6">
            A guard script or smart contract sets restrictions on the box. Without it, a box is just a storage unit for information or a certain amount of currency. The introduction of guard scripts, which establish specific rules for the boxes, adds a level of control and functionality to the boxes, much like a remote control.
          </p>
          <p className="text-gray-300 mb-6">
            The focus here is not on the internal workings of a remote control (guard script) or the data it transmits (registers and storage), but on its functionality - pressing a button changes the TV channel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Box Modeling</h2>
          <p className="text-gray-300 mb-4">
            Box modeling is a framework that aids developers or box designers in creating a box to perform specific tasks. This structure promotes a clear and systematic understanding of a box's roles and operational mechanics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Key Principles in Box Design</h2>
          <p className="text-gray-300 mb-4">
            A blockchain serves as a financial canvas, allowing developers, engineers, and designers to build financial systems on top of it. However, design flaws can lead to security vulnerabilities, unscalable designs, and inefficient processes. Therefore, it's crucial to prioritize security, scalability, and efficiency in design.
          </p>
          <p className="text-gray-300 mb-6">
            The three pillars of box design are:
          </p>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Security</h3>
              <p className="text-gray-300">
                The box should be designed to prevent exploitation by unauthorized users. Its protection script must be robust.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Scalability</h3>
              <p className="text-gray-300">
                The system (involving potentially many boxes and transactions) should be designed to handle multiple concurrent requests smoothly without causing congestion or excessive fees.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Efficiency</h3>
              <p className="text-gray-300">
                A straightforward design makes it easier for engineers to understand, audit, and improve the design, reducing the chance of errors.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Box Modeling: A Step-by-Step Guide</h2>
          <p className="text-gray-300 mb-4">
            Before diving into the principles mentioned above, it's essential to understand the basics of box modeling.
          </p>
          <p className="text-gray-300 mb-4">
            When modeling a box, consider the following:
          </p>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">What is the box's purpose?</h3>
              <p className="text-gray-300">
                For instance, a lending box is designed to simplify the loan process within a DeFi application.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">What data should the box store?</h3>
              <p className="text-gray-300">
                The box's function determines the data stored in its registers. A lending box, for example, would store lending-related information (like loan amount, interest rate, collateral details, borrower/lender addresses) in its registers (R4-R9).
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">How will the box perform its function?</h3>
              <p className="text-gray-300">
                This step involves thinking about the overall transaction flow, not just the individual box. It requires scripting the guard script (using ErgoScript) to enforce the rules and perform its intended function using the data stored in the registers and potentially data from other input boxes or data inputs.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Register Data Types</h2>
          <p className="text-gray-300 mb-4">
            Registers can store data in various formats, which can be single or multiple entries. See the Registers page for a list of supported types like <code className="bg-neutral-800 px-2 py-1 rounded text-purple-300">Long</code>, <code className="bg-neutral-800 px-2 py-1 rounded text-purple-300">Coll[Byte]</code>, <code className="bg-neutral-800 px-2 py-1 rounded text-purple-300">GroupElement</code>, etc.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>This guide is based on the <a href="https://keitodot.medium.com/ergo-box-m-f58f444e00d5" className="text-purple-400 hover:text-purple-300 underline">article by Keith Lim</a></li>
            <li>For more technical details on how boxes are represented in transactions, see the Transaction Format page.</li>
          </ul>
        </section>
      </div>
    </>
  );
} 