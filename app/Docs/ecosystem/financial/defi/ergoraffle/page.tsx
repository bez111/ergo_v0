"use client";

import React from "react";
import { ExternalLink, Info, Gift, CheckCircle, Zap, Users, Gavel, BookOpen } from "lucide-react";

export default function ErgoRafflePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        ErgoRaffle: Decentralized Crowdfunding & Raffles on Ergo
      </h1>
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          We have live crowdfunding on the Ergo blockchain via <a href="https://ergoraffle.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergoraffle.com</a>; this allows projects to host 'Raffles' with a percentage of the total allocated to one lucky donor as a prize.
        </p>
        <p className="text-gray-300 mb-2">
          More information and the source code is available on <a href="https://github.com/anon-real/ergoraffle" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>.
        </p>
      </div>

      {/* About ErgoRaffle */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Gift className="w-5 h-5" /> About ErgoRaffle
        </h2>
        <p className="text-gray-300 mb-4">
          ErgoRaffle is a crowdfunding service built on Ergo Platform that enables anyone to raise money for a project. This project can range from a direct donation to a charity, an academic or business plan, or anything you can convince people to part with their hard-earned ERG for! As an added bonus, after finishing the Raffle, a lottery takes place, and one lucky participant wins a set percent of the Raffle as a 'raffle reward'.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>Each Raffle has a deadline and a set fundraising goal; if the Raffle reaches this goal within its deadline, the Raffle is successful, and the project, winner, and service will be paid accordingly.</li>
          <li>Otherwise, the Raffle is unsuccessful, and all collected funds will be returned to the raffle participants.</li>
          <li>If the Raffle achieves its goal before the deadline, it will continue operating till the deadline and can be overfunded.</li>
        </ul>
        <p className="text-gray-300 mb-2">
          The Raffle is managed by smart contracts built on Ergo Platform. This means that no middlemen are involved, and no one can alter or disrupt the Raffle, including the raffle service operator. This website simply acts as an interface for the smart contract and was created to provide a better user experience by caching some information.
        </p>
        <p className="text-gray-300 mb-2">
          The system is designed in a way that anyone can create new raffles or donate to existing raffles using the raw scripts, and the raffle service functionality is disjoint from the raffle service backend. Although the service backend and frontend are designed in such a way that anyone with any amount of knowledge can use the service.
        </p>
      </div>

      {/* v2 Features */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Zap className="w-5 h-5" /> v2 Features
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Enable raising funds in any token (v1: only ERG is possible)</li>
          <li>Allow multiple winners with different shares (v1: only one winner)</li>
          <li>Reward winners in any token, including NFTs (v1: Erg only)</li>
          <li>Implement community upvoting/downvoting of raffles to indicate potential scams</li>
          <li>Enhance the user interface</li>
          <li>Integrate dApp connectors and ErgoPay support</li>
          <li>Introduce a refundable raffle creation fee to prevent scams and DoS attacks</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://ergoraffle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Visit ErgoRaffle <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/anon-real/ergoraffle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            GitHub Repository <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 