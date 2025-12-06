"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Shield, Users, BookOpen, Clock, Globe } from "lucide-react";

export default function SocialContractPage() {
  return (
    <div className="px-4 max-w-3xl mx-auto pb-24">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo's Social Contract
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Ergo protocol is very flexible and may be changed in the future by the community. In this section, we define the main principles that should be followed in Ergo which might be referred to as Ergo's Social Contract.
        </p>
        <p className="text-lg text-gray-300 mb-2">
          In case of intentional violation of any of these principles, the resulting protocol should not be called Ergo.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Decentralization First */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-400" /> Decentralization First
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Ergo should be as decentralized as possible: any parties (social leaders, software developers, hardware manufacturers, miners, funds and so on) whose absence or malicious behavior may affect the security of the network should be avoided.</li>
            <li>If any of these parties do appear during Ergo's lifetime, the community should consider ways to decrease their impact level.</li>
          </ul>
        </div>
        {/* Created for Regular People */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" /> Created for Regular People
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Ergo is a platform for ordinary people, and their interests should not be infringed upon in favor of big parties.</li>
            <li>Centralization of mining should be prevented and regular people should be able to participate in the protocol by running a full node and mining blocks (albeit with a small probability).</li>
          </ul>
        </div>
        {/* Platform for Contractual Money */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-400" /> Platform for Contractual Money
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Ergo is the base layer to applications that will be built on top of it.</li>
            <li>It is suitable for several applications but its main focus is to provide an efficient, secure and easy way to implement financial contracts.</li>
          </ul>
        </div>
        {/* Long-term Focus */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-400" /> Long-term Focus
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>All aspects of Ergo development should be focused on a long term perspective.</li>
            <li>At any point of time, Ergo should be able to survive for centuries without expected hard forks, software or hardware improvements or some other unpredictable changes.</li>
            <li>Since Ergo is designed as a platform, applications built on top of Ergo should also be able to survive in the long term.</li>
            <li>This resiliency and long term survivability may also enable Ergo to be a good store of value.</li>
          </ul>
        </div>
        {/* Permissionless and Open */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-orange-400" /> Permissionless and Open
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Ergo protocol does not restrict or limit any categories of usage.</li>
            <li>It should allow anyone to join the network and participate in the protocol without any preliminary actions.</li>
            <li>Unlike the traditional financial system, no bailouts, blacklists or other forms of discrimination should be possible on the core level of Ergo protocol.</li>
            <li>On the other hand application developers are free to implement any logic they want, taking responsibility for the ethics and legality of their application.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 