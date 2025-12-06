"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";
import { ArrowLeft, GitBranch } from "lucide-react";

export default function MultiStageTransactionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <GitBranch className="w-10 h-10 text-amber-400" />
        Multi-Stage Transactions
      </h1>

      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/multi-stage-protocol"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Multi-Stage Protocols
        </Link>
      </div>

      <div className="space-y-6">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="text-gray-300 space-y-4">
            <p>
              A simple transaction (tx) is the foundation of all transactions, representing a direct exchange between two parties. The advent of Smart Contracts enables the creation of autonomous systems that can handle complex real-world scenarios on the blockchain.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">What Are Multi-Stage Transactions?</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Multi-stage transactions involve multiple steps, where each step is a separate transaction that must be successfully executed to complete a larger objective. Unlike simple one-to-one transfers, these transactions require coordination across various stages, often governed by intricate smart contract logic.
            </p>
            <p>
              For example, multi-stage transactions may be required in scenarios involving complex conditions or timed events, such as escrow services, staged payments, or multi-party agreements. Each stage relies on the execution of a preceding step, making the entire process more secure and robust.
            </p>
            <p>
              A classic illustration of a multi-stage transaction is the <strong>pin-lock contract</strong>, where multiple layers of validation or condition checks must be met before the final transaction can occur. The complexity of multi-stage transactions can vary, but their key feature is the chaining of multiple transactions to complete a scenario.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Real-World Lending as a Multi-Stage Transaction</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Let's use a traditional lending process as an example. While in the real world, lending may seem like a single transaction, when mapped onto a blockchain, it can be broken down into a <strong>multi-stage transaction</strong> process:
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-bold text-orange-400 mb-4">Stages of a Lending Process in Blockchain</h3>
          <div className="text-gray-300 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">1. Loan Request Stage:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Real World</strong>: A borrower requests a loan from a lender with agreed terms, such as the loan amount and interest rate.</li>
                <li><strong>Blockchain</strong>: The borrower creates a smart contract (or box) requesting funds. This smart contract includes conditions, such as the repayment terms and the interest rate.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">2. Loan Approval and Funding Stage:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Real World</strong>: The lender approves the request and disburses the loan.</li>
                <li><strong>Blockchain</strong>: The lender funds the borrower's smart contract, which triggers the transfer of funds to the borrower upon satisfying the conditions set in the contract.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">3. Loan Utilization Stage:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Real World</strong>: The borrower uses the loan for business purposes.</li>
                <li><strong>Blockchain</strong>: The borrower accesses the funded box, transferring the loaned amount into their own account for use.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">4. Repayment Stage (This is where the multi-stage aspect becomes evident):</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Real World</strong>: The borrower repays the loan with interest in agreed-upon installments.</li>
                <li><strong>Blockchain</strong>: The borrower initiates a series of transactions, where each monthly repayment is a separate transaction executed on the blockchain. These repayments continue until the full amount (plus interest) has been transferred back to the lender.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">5. Completion Stage:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Real World</strong>: The loan agreement concludes when the borrower pays off the debt.</li>
                <li><strong>Blockchain</strong>: The smart contract governing the loan automatically closes once the final repayment transaction is executed, concluding the multi-stage process.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-bold text-orange-400 mb-4">Why is This a Multi-Stage Transaction?</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              Each step in the lending process on the blockchain is <strong>linked</strong> to the success of the previous one. The loan cannot be funded until the borrower's smart contract is created, and repayments cannot occur until the funds are utilized. The entire process involves <strong>multiple transactions</strong> (loan request, funding, repayments, and final closure), making it a perfect example of a multi-stage transaction.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Translating Real-World Scenarios to Blockchain: A Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-4 text-orange-400 font-semibold">Real-World Lending Scenario</th>
                  <th className="text-left p-4 text-orange-400 font-semibold">Equivalent Blockchain Transaction</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-neutral-700">
                  <td className="p-4">1. Borrower requests a loan with specified terms.</td>
                  <td className="p-4">Borrower creates a smart contract requesting the loan amount, specifying the conditions for release.</td>
                </tr>
                <tr className="border-b border-neutral-700 bg-neutral-800/30">
                  <td className="p-4">2. Lender approves and sends the loan.</td>
                  <td className="p-4">Lender funds the borrower's smart contract.</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4">3. Borrower utilizes the loan.</td>
                  <td className="p-4">Borrower accesses the funds.</td>
                </tr>
                <tr className="border-b border-neutral-700 bg-neutral-800/30">
                  <td className="p-4">4. Borrower repays the loan in installments.</td>
                  <td className="p-4">Borrower makes multiple transactions over time to repay the loan with interest.</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4">5. Loan transaction concludes.</td>
                  <td className="p-4">Smart contract closes once all repayments are made, completing the multi-stage transaction.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
} 