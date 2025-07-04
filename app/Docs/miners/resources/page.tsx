import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BookOpen,
  Cpu,
  Coins,
  Repeat,
  Code,
  FileText,
} from "lucide-react";

export default function MinersResourcesPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="cpu-gpu" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> CPU vs GPU
        </TabsTrigger>
        <TabsTrigger value="emission" className="flex items-center gap-2 justify-center">
          <Coins className="w-4 h-4" /> Emission Update
        </TabsTrigger>
        <TabsTrigger value="difficulty" className="flex items-center gap-2 justify-center">
          <Repeat className="w-4 h-4" /> Adaptive Difficulty
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Mining Resources
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            This page provides a collection of resources related to Ergo mining. It includes academic papers, code repositories, test vectors, and discussion threads.
          </p>
        </div>

        {/* Academic Papers Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-400" /> Academic Papers
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <a href="https://ergoplatform.org/docs/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline font-semibold">Ergo White Paper</a>: This paper provides a comprehensive overview of Ergo, including its design principles, consensus algorithm, and economic model.
            </li>
            <li>
              <a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline font-semibold">Ergo Yellow Paper</a>: The Yellow Paper offers a more technical perspective on Ergo, detailing the platform's underlying algorithms and data structures.
            </li>
            <li>
              <a href="https://eprint.iacr.org/2020/352.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline font-semibold">Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts</a>: This paper discusses a novel approach to bypassing non-outsourceable proof-of-work schemes using smart contracts.
            </li>
          </ul>
        </div>

        {/* Code Section */}
        <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" /> Code
          </h2>
          <p className="text-gray-300 mb-2">
            The <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">Ergo GitHub repository</a> contains the Scala files related to Ergo's mining algorithm. This is a great resource if you're interested in understanding the technical details of Ergo mining.
          </p>
        </div>

        {/* Test Vectors Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-green-400" /> Test Vectors
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <a href="https://www.ergoforum.org/t/test-vectors-for-increased-n-values/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline font-semibold">Test vectors for increased N values</a>: This forum post provides test vectors for Ergo's proof-of-work algorithm with increased N values.
            </li>
          </ul>
        </div>

        {/* EIPs Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" /> EIPs
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <a href="https://github.com/ergoplatform/eips/pull/27" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">EIP27</a>
            </li>
            <li>
              <a href="https://github.com/ergoplatform/eips/pull/37" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">EIP37</a>
            </li>
          </ul>
        </div>
      </TabsContent>

      {/* CPU vs GPU Tab */}
      <TabsContent value="cpu-gpu">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> CPU vs GPU
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>

      {/* Emission Update Tab */}
      <TabsContent value="emission">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-green-400" /> Emission Update
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>

      {/* Adaptive Difficulty Tab */}
      <TabsContent value="difficulty">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-blue-400" /> Adaptive Difficulty
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>
    </Tabs>
  );
} 