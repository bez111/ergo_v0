"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  Brain,
  Target,
  TrendingUp,
  AlertCircle,
  BookOpen,
  Clock,
  Rocket,
  Wallet,
  DollarSign,
  Info,
  ListChecks,
  Handshake,
  CreditCard,
  Building2,
  BarChart3,
  Zap as ZapIcon,
  CheckSquare,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

export default function MultiStageProtocolsPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Info className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="concepts" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Core Concepts
        </TabsTrigger>
        <TabsTrigger value="examples" className="flex items-center gap-2 justify-center">
          <Target className="w-4 h-4" /> Real Examples
        </TabsTrigger>
        <TabsTrigger value="implementation" className="flex items-center gap-2 justify-center">
          <Code className="w-4 h-4" /> Implementation
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Multi-Stage Protocols
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Explore how complex real-world scenarios are translated into multi-stage blockchain transactions using Ergo's eUTXO model and smart contract capabilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/ecosystem/financial/defi"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
            </Link>
            <a
              href="https://docs.ergoplatform.com/dev/stack/ergoscript/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> ErgoScript Docs
            </a>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> What Are Multi-Stage Transactions?
          </h2>
          <p className="text-gray-300 mb-4">
            Multi-stage transactions involve multiple steps, where each step is a separate transaction that must be successfully executed to complete a larger objective. Unlike simple one-to-one transfers, these transactions require coordination across various stages, often governed by intricate smart contract logic.
          </p>
          <p className="text-gray-300">
            For example, multi-stage transactions may be required in scenarios involving complex conditions or timed events, such as escrow services, staged payments, or multi-party agreements. Each stage relies on the execution of a preceding step, making the entire process more secure and robust.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Sequential Execution
            </h3>
            <p className="text-gray-300 mb-4">
              Each stage must be completed before the next can begin, ensuring proper order and validation of all steps in the process.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Stage dependency validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Atomic transaction execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Rollback capabilities
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" /> Time-Based Triggers
            </h3>
            <p className="text-gray-300 mb-4">
              Stages can be triggered by time conditions, allowing for complex scheduling and automated execution of multi-step processes.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Deadline enforcement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated stage progression
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Time-locked conditions
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" /> Smart Contract Logic
            </h3>
            <p className="text-gray-300 mb-4">
              Complex business logic is encoded in smart contracts that govern the flow and conditions of each stage in the multi-stage process.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Conditional execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                State management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-party coordination
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" /> Security & Transparency
            </h3>
            <p className="text-gray-300 mb-4">
              All stages are visible on-chain, providing complete transparency while maintaining security through cryptographic validation.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                On-chain audit trail
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cryptographic proofs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Immutable execution
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="concepts">
        {/* Core Concepts Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-cyan-400" /> Core Concepts
          </h2>
          <p className="text-gray-300 mb-6">
            Understanding the fundamental principles behind multi-stage transactions and how they differ from simple blockchain transfers.
          </p>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Simple vs Multi-Stage Transactions</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">Simple Transaction</h5>
                  <p className="text-gray-300 text-sm mb-2">Direct exchange between two parties</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Single transfer</li>
                    <li>• Immediate execution</li>
                    <li>• No dependencies</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-400 mb-2">Multi-Stage Transaction</h5>
                  <p className="text-gray-300 text-sm mb-2">Complex process with multiple steps</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Multiple linked transactions</li>
                    <li>• Sequential execution</li>
                    <li>• Stage dependencies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Pin-Lock Contract Example</h4>
              <p className="text-gray-300 text-sm mb-3">
                A classic illustration of a multi-stage transaction is the pin-lock contract, where multiple layers of validation or condition checks must be met before the final transaction can occur.
              </p>
              <div className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`// Pin-lock contract stages
1. Initial deposit with conditions
2. Validation of pin/conditions
3. Time-based triggers
4. Final release or refund`}
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Key Characteristics</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Stage dependency validation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Time-based triggers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Conditional execution
                  </li>
                </ul>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Multi-party coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    State management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Rollback capabilities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="examples">
        {/* Real-World Examples Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-400" /> Real-World Lending as Multi-Stage Transaction
          </h2>
          <p className="text-gray-300 mb-6">
            Let's use a traditional lending process as an example. While in the real world, lending may seem like a single transaction, when mapped onto a blockchain, it can be broken down into a multi-stage transaction process.
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Stages of a Lending Process in Blockchain</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h5 className="font-semibold text-green-400 mb-1">1. Loan Request Stage</h5>
                  <p className="text-gray-300 text-sm mb-1">Real World: A borrower requests a loan from a lender with agreed terms</p>
                  <p className="text-gray-300 text-sm">Blockchain: The borrower creates a smart contract requesting funds with conditions</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h5 className="font-semibold text-blue-400 mb-1">2. Loan Approval and Funding Stage</h5>
                  <p className="text-gray-300 text-sm mb-1">Real World: The lender approves the request and disburses the loan</p>
                  <p className="text-gray-300 text-sm">Blockchain: The lender funds the borrower's smart contract</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h5 className="font-semibold text-yellow-400 mb-1">3. Loan Utilization Stage</h5>
                  <p className="text-gray-300 text-sm mb-1">Real World: The borrower uses the loan for business purposes</p>
                  <p className="text-gray-300 text-sm">Blockchain: The borrower accesses the funded box</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h5 className="font-semibold text-orange-400 mb-1">4. Repayment Stage</h5>
                  <p className="text-gray-300 text-sm mb-1">Real World: The borrower repays the loan with interest in installments</p>
                  <p className="text-gray-300 text-sm">Blockchain: Multiple transactions for each repayment</p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h5 className="font-semibold text-red-400 mb-1">5. Completion Stage</h5>
                  <p className="text-gray-300 text-sm mb-1">Real World: The loan agreement concludes when debt is paid</p>
                  <p className="text-gray-300 text-sm">Blockchain: Smart contract closes after final repayment</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Why is This a Multi-Stage Transaction?</h4>
              <p className="text-gray-300 text-sm mb-3">
                Each step in the lending process on the blockchain is linked to the success of the previous one. The loan cannot be funded until the borrower's smart contract is created, and repayments cannot occur until the funds are utilized.
              </p>
              <div className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`// Multi-stage lending process
1. Create loan request contract
2. Fund the contract (depends on step 1)
3. Access funds (depends on step 2)
4. Make repayments (depends on step 3)
5. Close contract (depends on step 4)

// Each stage is a separate transaction
// Each stage validates previous stage completion
// Entire process involves multiple transactions`}
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Translation Summary</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="text-left py-2 text-gray-300">Real-World Lending Scenario</th>
                      <th className="text-left py-2 text-gray-300">Equivalent Blockchain Transaction</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-neutral-800">
                      <td className="py-2">1. Borrower requests a loan with specified terms</td>
                      <td className="py-2">Borrower creates a smart contract requesting the loan amount, specifying the conditions for release</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2">2. Lender approves and sends the loan</td>
                      <td className="py-2">Lender funds the borrower's smart contract</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2">3. Borrower utilizes the loan</td>
                      <td className="py-2">Borrower accesses the funds</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2">4. Borrower repays the loan in installments</td>
                      <td className="py-2">Borrower makes multiple transactions over time to repay the loan with interest</td>
                    </tr>
                    <tr>
                      <td className="py-2">5. Loan transaction concludes</td>
                      <td className="py-2">Smart contract closes once all repayments are made, completing the multi-stage transaction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="implementation">
        {/* Implementation Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" /> Implementation on Ergo
          </h2>
          <p className="text-gray-300 mb-6">
            How multi-stage protocols are implemented using Ergo's eUTXO model, ErgoScript, and smart contract capabilities.
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">eUTXO Model Advantages</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">State Management</h5>
                  <p className="text-gray-300 text-sm">Each UTXO can carry state information, making it perfect for tracking multi-stage progress</p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-400 mb-2">Parallel Processing</h5>
                  <p className="text-gray-300 text-sm">Multiple stages can be processed in parallel when dependencies allow</p>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-400 mb-2">Atomic Transactions</h5>
                  <p className="text-gray-300 text-sm">Each stage is atomic - either fully executed or not at all</p>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-400 mb-2">Composability</h5>
                  <p className="text-gray-300 text-sm">Stages can be composed and reused across different protocols</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">ErgoScript Implementation</h4>
              <div className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300 mb-3">
{`// Example: Multi-stage contract structure
val stage1Box = SELF
val stage2Box = OUTPUTS(0)
val stage3Box = OUTPUTS(1)

// Stage 1: Initial deposit
val stage1Valid = stage1Box.value >= minDeposit &&
                  stage1Box.propositionBytes == stage1Script

// Stage 2: Processing
val stage2Valid = stage2Box.value == stage1Box.value &&
                  stage2Box.propositionBytes == stage2Script &&
                  stage2Box.tokens(0)._1 == processingTokenId

// Stage 3: Completion
val stage3Valid = stage3Box.value >= finalAmount &&
                  stage3Box.propositionBytes == completionScript`}
              </div>
              <p className="text-gray-300 text-sm">
                Each stage validates the previous stage's completion and enforces the conditions for the current stage.
              </p>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Common Multi-Stage Patterns</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 rounded p-3">
                  <h5 className="font-semibold text-green-400 mb-2">Escrow Pattern</h5>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Deposit funds</li>
                    <li>• Wait for conditions</li>
                    <li>• Release or refund</li>
                  </ul>
                </div>
                <div className="bg-neutral-900/50 rounded p-3">
                  <h5 className="font-semibold text-blue-400 mb-2">Vesting Pattern</h5>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Lock tokens</li>
                    <li>• Time-based releases</li>
                    <li>• Gradual unlocking</li>
                  </ul>
                </div>
                <div className="bg-neutral-900/50 rounded p-3">
                  <h5 className="font-semibold text-purple-400 mb-2">Auction Pattern</h5>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Place bids</li>
                    <li>• Time extension</li>
                    <li>• Final settlement</li>
                  </ul>
                </div>
                <div className="bg-neutral-900/50 rounded p-3">
                  <h5 className="font-semibold text-yellow-400 mb-2">Governance Pattern</h5>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Propose changes</li>
                    <li>• Vote period</li>
                    <li>• Execute if passed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">Development Resources</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://docs.ergoplatform.com/dev/stack/ergoscript/" target="_blank" rel="noopener noreferrer"
                  className="bg-neutral-900/50 rounded-lg p-3 hover:bg-neutral-800/50 transition">
                  <h5 className="font-semibold text-orange-400 mb-2">ErgoScript Documentation</h5>
                  <p className="text-gray-300 text-xs">Official documentation for writing smart contracts on Ergo</p>
                </a>
                <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer"
                  className="bg-neutral-900/50 rounded-lg p-3 hover:bg-neutral-800/50 transition">
                  <h5 className="font-semibold text-orange-400 mb-2">AppKit Examples</h5>
                  <p className="text-gray-300 text-xs">Java SDK with examples for building multi-stage protocols</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 