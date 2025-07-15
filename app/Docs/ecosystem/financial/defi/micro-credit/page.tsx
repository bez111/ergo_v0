"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Users, Coins, ExternalLink, Info, Copy, Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function CopyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="relative mb-4 group">
      <button
        onClick={handleCopy}
        aria-label={copied ? "Copied!" : "Copy code"}
        type="button"
        className="absolute top-2 right-2 z-10 p-1 rounded-md bg-neutral-800/80 hover:bg-yellow-400/10 transition-colors border border-transparent hover:border-yellow-400 text-yellow-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        <span className="sr-only">{copied ? "Copied!" : "Copy code"}</span>
      </button>
      <pre className="bg-neutral-900/80 border border-neutral-700 rounded-lg p-4 text-sm text-yellow-200 overflow-x-auto"><code>{code}</code></pre>
    </div>
  );
}

export default function MicroCreditPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Micro Credit
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Decentralized microcredit and cooperative lending with programmable, transparent contracts on Ergo.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 rounded-xl font-semibold text-black hover:bg-yellow-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          {/* Если появится внешний сайт, раскомментировать и добавить ссылку */}
          {/*
          <a
            href="https://microcredit.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Micro Credit
          </a>
          */}
        </div>
      </div>
      {/* Vision/Intro */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
          <Info className="w-6 h-6" /> Why Microcredit on Blockchain?
        </h2>
        <p className="text-gray-300 mb-2">
          Microcredit on Ergo aims to empower small businesses and cooperatives globally, enabling access to capital without reliance on large financial institutions. Smart contracts allow for transparent, programmable, and borderless lending.
        </p>
      </div>
      {/* Real-world scenario */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Real-World Example: Radical Routes
        </h2>
        <p className="text-gray-300 mb-2">
          Imagine a federation of cooperatives (like <a href="https://www.radicalroutes.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Radical Routes <ExternalLink className="inline w-4 h-4" /></a>) pooling funds to support an entrepreneur in another country. They collectively lock funds in a contract, vote to approve a loan, and enforce spending conditions—all without banks or borders.
        </p>
      </div>
      {/* Step-by-step logic */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" /> How It Works
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-4">
          <li>Cooperatives lock funds in a contract with voting and withdrawal logic.</li>
          <li>Entrepreneur receives funds if 3 of 4 co-ops approve (threshold signature).</li>
          <li>Funds must be spent on equipment and construction, enforced by contract hashes and recognized sellers/builders.</li>
          <li>If deadlines are missed, co-ops can withdraw their share.</li>
        </ol>
      </div>
      {/* ErgoScript Contracts */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" /> Main Voting Contract (ErgoScript)
        </h2>
        <CopyBlock code={`val votingSuccess  = atLeast(3, Array(pubkeyA, pubkeyB, pubkeyC, pubkeyD))
val properSpending = OUTPUTS(0).value >= 5000L &&
                     blake2b256(OUTPUTS(0).propositionBytes) == spendingContract1Hash &&
                     OUTPUTS(1).value >= 2000L &&
                     blake2b256(OUTPUTS(1).propositionBytes) == spendingContract2Hash

val withdrawCondition = HEIGHT >= 1000L &&
                        OUTPUTS(0).value >= 2500L && OUTPUTS(0).propositionBytes == pubkeyA.propBytes &&
                        OUTPUTS(1).value >= 2500L && OUTPUTS(1).propositionBytes == pubkeyB.propBytes &&
                        OUTPUTS(2).value >= 2500L && OUTPUTS(2).propositionBytes == pubkeyC.propBytes &&
                        OUTPUTS(3).value >= 2500L && OUTPUTS(3).propositionBytes == pubkeyD.propBytes 

(votingSuccess && properSpending) || withdrawCondition
`} />
        <p className="text-gray-400 text-sm mb-4">This contract enforces threshold voting, spending conditions, and a withdrawal fallback for the cooperatives.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" /> Equipment Spending Contract (ErgoScript)
        </h2>
        <CopyBlock code={`val spendingSuccess = (pubkeyTool1 || pubkeyTool2 || pubkeyTool3 || pubkeyTool4) && businessKey

val withdrawCondition = HEIGHT > 5000L &&
                        OUTPUTS(0).value >= 1250L && OUTPUTS(0).propositionBytes == pubkeyA.propBytes &&
                        OUTPUTS(1).value >= 1250L && OUTPUTS(1).propositionBytes == pubkeyB.propBytes &&
                        OUTPUTS(2).value >= 1250L && OUTPUTS(2).propositionBytes == pubkeyC.propBytes &&
                        OUTPUTS(3).value >= 1250L && OUTPUTS(3).propositionBytes == pubkeyD.propBytes 

spendingSuccess || withdrawCondition
`} />
        <p className="text-gray-400 text-sm mb-4">This contract ensures equipment funds are spent with recognized sellers or returned to the co-ops if not used in time.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" /> Construction Spending Contract (ErgoScript)
        </h2>
        <CopyBlock code={`val spendingSuccess = (pubkeyConstr1 || pubkeyConstr2 || pubkeyConstr3) && businessKey

val withdrawCondition = HEIGHT > 5000L &&
                        OUTPUTS(0).value >= 500L && OUTPUTS(0).propositionBytes == pubkeyA.propBytes &&
                        OUTPUTS(1).value >= 500L && OUTPUTS(1).propositionBytes == pubkeyB.propBytes &&
                        OUTPUTS(2).value >= 500L && OUTPUTS(2).propositionBytes == pubkeyC.propBytes &&
                        OUTPUTS(3).value >= 500L && OUTPUTS(3).propositionBytes == pubkeyD.propBytes 

spendingSuccess || withdrawCondition
`} />
        <p className="text-gray-400 text-sm mb-4">This contract ensures construction funds are spent with recognized builders or returned to the co-ops if not used in time.</p>
      </div>
      {/* Process explanation */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Process Summary
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Co-ops pool funds and vote to approve a microloan.</li>
          <li>Funds are released only if the threshold is met and must be spent on specific goals.</li>
          <li>Unspent or misallocated funds can be withdrawn by the co-ops after deadlines.</li>
          <li>All logic is enforced by smart contracts—no banks or intermediaries required.</li>
        </ul>
      </div>
      {/* References */}
      <div className="mt-10 text-gray-400 text-sm">
        <b>References:</b>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Radical Routes: <a href="https://www.radicalroutes.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">radicalroutes.org.uk <ExternalLink className="inline w-4 h-4" /></a>
          </li>
          <li>
            ErgoScript documentation: <a href="https://docs.ergoplatform.com/ergo-script/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">docs.ergoplatform.com/ergo-script <ExternalLink className="inline w-4 h-4" /></a>
          </li>
        </ul>
      </div>
    </>
  );
} 