"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

import React, { useState } from "react";
import { Users, Book, Coins, Vote, Calendar, Star, Briefcase, Shield, UserCheck, UserCog, UserPlus, User, ArrowRight, TrendingUp, Globe, CheckCircle, Zap, Layers, Brain, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "scope", label: "Scope" },
  { key: "treasury", label: "Treasury" },
  { key: "votes", label: "Votes" },
  { key: "future", label: "Future" },
];

function OverviewContent() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-12">
      {/* Hero Section */}
      <div className="mb-0">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
            The Ergo Foundation
          </h1>
        <p className="text-xl text-gray-400 mb-2">
          The Ergo Foundation is a community-led, non-profit organization stewarding the development, adoption, and sustainability of the Ergo blockchain ecosystem.
        </p>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-5 mt-4">
          <span className="text-lg text-center block text-orange-300 font-semibold">Transparent, open, and driven by the community — for the future of decentralized finance.</span>
        </div>
      </div>
      {/* At a Glance */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group bg-gradient-to-br from-orange-400/10 to-orange-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(255,140,0,0.08)]">
            <CheckCircle className="w-7 h-7 text-green-400 mb-1 drop-shadow-[0_0_6px_rgba(34,197,94,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(34,197,94,0.5)] transition" />
            <div className="text-lg font-semibold bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Decentralized</div>
            <div className="text-gray-400 text-sm leading-relaxed">Community-led, open governance</div>
          </div>
          <div className="group bg-gradient-to-br from-green-400/10 to-cyan-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(34,197,94,0.08)]">
            <Coins className="w-7 h-7 text-yellow-400 mb-1 drop-shadow-[0_0_6px_rgba(250,204,21,0.2)] group-hover:drop-shadow-[0_0_16px_rgba(250,204,21,0.4)] transition" />
            <div className="text-lg font-semibold bg-gradient-to-r from-green-300 to-cyan-100 bg-clip-text text-transparent">Multi-Signature Treasury</div>
            <div className="text-gray-400 text-sm leading-relaxed">Funds managed transparently by multiple signers</div>
          </div>
          <div className="group bg-gradient-to-br from-cyan-400/10 to-blue-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(34,211,238,0.08)]">
            <FileText className="w-7 h-7 text-cyan-400 mb-1 drop-shadow-[0_0_6px_rgba(34,211,238,0.2)] group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.4)] transition" />
            <div className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-100 bg-clip-text text-transparent">Transparent Reporting</div>
            <div className="text-gray-400 text-sm leading-relaxed">Open records & public accountability</div>
          </div>
          <div className="group bg-gradient-to-br from-yellow-400/10 to-orange-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(251,191,36,0.08)]">
            <Users className="w-7 h-7 text-orange-300 mb-1 drop-shadow-[0_0_6px_rgba(251,191,36,0.2)] group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.4)] transition" />
            <div className="text-lg font-semibold bg-gradient-to-r from-yellow-200 to-orange-100 bg-clip-text text-transparent">Open Contributions</div>
            <div className="text-gray-400 text-sm leading-relaxed">No \"core\" dev team — anyone can participate</div>
          </div>
        </div>
      </div>
      {/* Mission & Values */}
      <section id="mission">
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Star className="w-7 h-7 text-orange-400" /> Mission & Values</h2>
          <p className="text-lg text-gray-300 mb-4">
            The Ergo Foundation supports the sustainable, non-breaking development of the Ergo protocol, advocating for adoption, ecosystem growth, and privacy as a fundamental right.
          </p>
          <ul className="text-gray-400 grid md:grid-cols-2 gap-2 mb-2 list-inside list-disc">
            <li>Champion open-source, decentralized blockchain infrastructure</li>
            <li>Encourage the adoption and use of Ergo and ERG token</li>
            <li>Promote societal benefit and privacy by design</li>
            <li>Support ecosystem expansion and community initiatives</li>
            <li>Uphold transparent, non-profit treasury stewardship</li>
        </ul>
      </div>
      </section>
      {/* Structure */}
      <section id="structure">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Layers className="w-7 h-7 text-orange-400" /> Structure</h2>
        <p className="text-gray-300 mb-4">
          The Foundation is governed by dedicated multi-signature custodians who vote on treasury allocations in line with its mission. Members include salaried employees, volunteers, bounty contributors, and independent developers. There is no single "core" team — all key groups are open and merit-based.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2"><Vote className="w-5 h-5 text-orange-400" /> Members</h4>
            <ul className="text-gray-400 list-disc list-inside space-y-1">
              <li>Vote on treasury allocation and proposals</li>
              <li>Guide protocol and wallet development</li>
              <li>Oversee exchange listings, bounties, hackathons, marketing</li>
              <li>Manage partnerships and community outreach</li>
        </ul>
      </div>
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2"><UserCheck className="w-5 h-5 text-orange-400" /> Officers & Advisors</h4>
            <ul className="text-gray-400 list-disc list-inside space-y-1">
              <li>Officers support daily operations: accounting, reporting, events</li>
              <li>Advisors contribute strategic guidance and represent EF externally</li>
              <li>Editorial and marketing team promote community initiatives</li>
        </ul>
      </div>
      </div>
      </section>
      {/* Scope */}
      <section id="scope">
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Briefcase className="w-7 h-7 text-orange-400" /> Scope of Work</h2>
          <p className="text-gray-300 mb-4">
            The Foundation's work covers protocol development, community growth, ecosystem bounties, marketing, exchange integrations, developer relations, and much more.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="inline-flex items-center bg-neutral-800 px-3 py-1 rounded-full text-sm text-orange-300"><Zap className="w-4 h-4 mr-1 text-orange-400" /> Developer bounties</span>
            <span className="inline-flex items-center bg-neutral-800 px-3 py-1 rounded-full text-sm text-orange-300"><Coins className="w-4 h-4 mr-1 text-orange-400" /> Treasury management</span>
            <span className="inline-flex items-center bg-neutral-800 px-3 py-1 rounded-full text-sm text-orange-300"><Star className="w-4 h-4 mr-1 text-orange-400" /> Hackathons & Summits</span>
            <span className="inline-flex items-center bg-neutral-800 px-3 py-1 rounded-full text-sm text-orange-300"><Globe className="w-4 h-4 mr-1 text-orange-400" /> Exchange listings</span>
          </div>
          <p className="text-sm text-gray-500">See detailed breakdown in the <a href="#spendings" className="text-orange-400 hover:underline">Spendings</a> section.</p>
        </div>
      </section>
      {/* Members */}
      <section id="members">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Users className="w-7 h-7 text-orange-400" /> Foundation Members</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Justin Simpson */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><User className="w-5 h-5" /> Justin Simpson</h4>
            <p className="text-gray-300">13+ years in Investment Banking, in crypto since 2013. Focus: investor relations, Chinese strategy, banking, accounting. <br /><span className="text-gray-400 text-sm">No official EF duties except voting. Currently unpaid.</span></p>
          </div>
          {/* Mark Glasgow */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><User className="w-5 h-5" /> Mark Glasgow</h4>
            <p className="text-gray-300">Community management, dev education, Technical Director for Disabled Students UK CIC.<br /><span className="text-gray-400 text-sm">EF duties: Community advocacy, documentation. Salaried for editorial/community work.</span></p>
          </div>
          {/* Alexander Slesarenko */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><User className="w-5 h-5" /> Alexander Slesarenko (morphic)</h4>
            <p className="text-gray-300">25+ years in software, applied mathematics, JVM/Sigma developer.<br /><span className="text-gray-400 text-sm">EF: Voting only. Salaried for dev (Sigma), unpaid for EF duties.</span></p>
          </div>
          {/* Alison Robson */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><User className="w-5 h-5" /> Alison Robson (anon_br)</h4>
            <p className="text-gray-300">Director of Engineering, Developer Relations, integration & tooling.<br /><span className="text-gray-400 text-sm">Works with community developers (Fleet, Nautilus, Ledger).</span></p>
          </div>
        </div>
      </section>
      {/* Honorary Members */}
      <section id="honorary">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Star className="w-7 h-7 text-orange-400" /> Honorary Members</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mohammad Hasan Samadani */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><UserPlus className="w-5 h-5" /> Mohammad Hasan Samadani (mhs_sam)</h4>
            <p className="text-gray-300">PhD in CS, security and mining infra pioneer. Incubated multiple Ergo projects.<br /><span className="text-gray-400 text-sm">Voting EF member, incubates innovation (Ergo Raffle, Rosen Bridge).</span></p>
          </div>
          {/* Joseph Armeanio */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><UserPlus className="w-5 h-5" /> Joseph Armeanio</h4>
            <p className="text-gray-300">Crypto investor since 2013, business developer, public sector advocate.<br /><span className="text-gray-400 text-sm">Focus: business dev, partnerships, research, educational initiatives. Co-founded Rosen.</span></p>
          </div>
        </div>
      </section>
      {/* Officers & Advisors */}
      <section id="officers">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><UserCog className="w-7 h-7 text-orange-400" /> Officers & Advisors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Officers */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><UserCheck className="w-5 h-5" /> Anastasiia Sidorova</h4>
            <p className="text-gray-300">Treasurer: analytics, accounting, payroll, compliance.</p>
          </div>
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><UserCheck className="w-5 h-5" /> Angie Har</h4>
            <p className="text-gray-300">Editorial team lead, events, crypto marketing expert since 2017.</p>
          </div>
          {/* Advisors */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><UserCog className="w-5 h-5" /> Daniel Friedman</h4>
            <p className="text-gray-300">Strategic Advisor: business dev, community, IOHK ambassador.</p>
        </div>
          {/* Editorial / Marketing */}
          <div className="bg-neutral-900/50 rounded-xl p-5">
            <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><Star className="w-5 h-5" /> Editorial & Marketing</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>Andy Lowe — Video Editor</li>
              <li>Sean Rice — Editor</li>
              <li>Eva Qing — Chinese Community Management</li>
              <li>Marcelo Roncatti — Designer & Art Director, Estudio Colletivo</li>
        </ul>
      </div>
      </div>
      </section>
      {/* Diversity Meta Block */}
      <section>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-5 mb-6">
          <span className="text-lg text-orange-300 font-semibold block">
            The Ergo Foundation is a diverse collective — employees, volunteers, bounty hunters, project leaders. No fixed "core team": all groups are open, collaborative, and global.
          </span>
        </div>
      </section>
      {/* DevDAO */}
      <section id="devdao">
        <div className="bg-neutral-900/50 rounded-xl p-5">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Brain className="w-7 h-7 text-orange-400" /> DevDAO</h2>
          <h4 className="font-bold text-orange-400 text-lg flex items-center gap-2"><User className="w-5 h-5" /> Alexander Chepurnoy (kushti)</h4>
          <p className="text-gray-300">Blockchain since 2011: smartcontract.com (Chainlink), NXT, IOHK. Author of 20+ academic papers, 15+ years in dev. <br />Stepped back from EF in Jan 2024 to launch DevDAO and focus on dev. Still facilitates EF-dev communications.</p>
      </div>
      </section>
      {/* Outgoings */}
      <section id="outgoings">
        <div className="bg-neutral-900/50 rounded-xl p-5">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Coins className="w-7 h-7 text-orange-400" /> Outgoings</h2>
          <ul className="text-gray-300 space-y-2">
            <li>2 EF members receive a salary; 2 others get small ERG rewards. Kushti & Justin decline compensation.</li>
            <li>4 marketing team members compensated (see Officers & Marketing).</li>
            <li>3 core developers salaried; others via bounties (see DevDAO).</li>
        </ul>
      </div>
      </section>
      {/* Spendings */}
      <section id="spendings">
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><FileText className="w-7 h-7 text-orange-400" /> Spendings & Transparency</h2>
          <p className="text-gray-300 mb-2">
            Full, regularly updated breakdowns of Foundation expenditure are available in the <a href="/docs/introduction/foundation/treasury" className="text-orange-400 hover:underline">Treasury section</a>.
          </p>
      </div>
      </section>
    </div>
  );
}

function ScopeContent() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-10">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Scope of the Ergo Foundation
          </h1>
        <p className="text-xl text-gray-400 mb-2">
          The Ergo Foundation is a non-profit organization dedicated to advancing the adoption and development of the Ergo Platform. Its primary focus is to support the Ergo Platform in providing an efficient and secure way to implement financial contracts, the most widely used application of blockchain technology.
        </p>
      </div>
      {/* Mission and Principles */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 flex flex-col gap-4 mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2"><Star className="w-7 h-7 text-orange-400" /> Mission & Principles</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Organic and Non-Breaking Development:</b> Protocol changes are approved by both miners and users/projects, ensuring gradual, non-disruptive evolution and ecosystem stability.</li>
          <li><b>Open-Source and Permissive Licensing:</b> Maximizing open-source development with permissive licenses, fostering collaboration and minimizing barriers to entry.</li>
          <li><b>Privacy and Trustless Environments:</b> Building trustless, privacy-focused smart contracts and payment frameworks for the public.</li>
          <li><b>Community-Driven:</b> Treasury is distributed mainly to the community — freelancers, hackers, experts, and enthusiasts drive innovation and growth.</li>
        </ul>
        <p className="text-gray-400 text-sm">See the <span className="text-orange-400">Future</span> tab for long-term goals.</p>
      </div>
      {/* Key Areas of Focus Timeline */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Key Areas of Focus
        </h2>
        <div className="relative border-l-2 border-cyan-400/30 pl-8 space-y-10">
      {/* Infrastructure */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
        <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Support for protocol research, reference client, libraries, and developer tooling.</li>
              <li>Improving market access: exchange listings, hardware wallets, bridges, and more.</li>
        </ul>
      </div>
      {/* Education */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
        <h3 className="text-xl font-bold mb-2">Education</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Creating and funding educational materials for developers and users.</li>
        </ul>
      </div>
      {/* Promotion and Outreach */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">Promotion & Outreach</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Editorial, events, YouTube, Chinese outreach, branding, and writers (bounties).</li>
        </ul>
            <p className="text-gray-400 text-sm">Promoting Ergo via blog posts, social media, events (Ergo Summit, ErgoHack).</p>
      </div>
      {/* Development */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
        <h3 className="text-xl font-bold mb-2">Development</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Managing JVM/Scala devs, wallet devs, and core protocol development.</li>
              <li>Paying for hosting, infrastructure, and bounties.</li>
        </ul>
      </div>
      </div>
      </div>
      {/* Grants and Ecosystem Support */}
      <div className="bg-neutral-900/50 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Coins className="w-6 h-6 text-cyan-400" /> Grants & Ecosystem Support</h3>
        <p className="text-gray-300 mb-2">The Foundation provides grants to projects that contribute to the growth and development of the Ergo ecosystem:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Spectrum Labs:</b> $128,200 for ergodex (2021-2022)</li>
          <li><b>Rosen Bridge:</b> $272,400 for cross-chain bridge (2022-2023)</li>
        </ul>
        <p className="text-gray-400 text-sm">More grants and details in the <span className="text-orange-400">Treasury</span> tab.</p>
      </div>
      {/* Code Audits */}
      <div className="bg-neutral-900/50 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Shield className="w-6 h-6 text-orange-400" /> Code Audits</h3>
        <p className="text-gray-300 mb-2">The Foundation does not officially endorse or review code. Members may perform reviews, but users should always be aware of risks when interacting with experimental DeFi protocols.</p>
        <p className="text-gray-400 text-sm">Transparency and user education are key priorities.</p>
      </div>
      {/* Exchange Listings */}
      <div className="bg-neutral-900/50 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Coins className="w-6 h-6 text-cyan-400" /> Exchange Listings</h3>
        <p className="text-gray-300 mb-2">The Foundation liaises with centralized exchanges and pursues listings for Ergo. Listings depend on market cap, volume, and exchange requirements, not just effort or resources.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Tier 1 exchanges: KuCoin, gate.io, Huobi</li>
          <li>Other listings: Bitpanda, Bittrex, etc.</li>
        </ul>
        <p className="text-gray-400 text-sm">Wrapped tokens and new on-ramps are being explored to increase access.</p>
      </div>
      {/* The Foundation's Future */}
      <div className="mt-12">
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-2xl p-8 flex flex-col items-start gap-8 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-9 h-9 text-orange-400 drop-shadow-[0_0_10px_rgba(255,140,0,0.25)]" />
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              The Foundation's Future
            </h2>
          </div>
          <div className="text-lg text-gray-300 max-w-2xl">
            The Ergo Foundation's journey is a story of transition: from a small group bootstrapping the ecosystem, to a vibrant, decentralized community. The Foundation's ultimate goal is to empower contributors, foster innovation, and gradually step back as the ecosystem becomes self-sustaining and community-governed. This process is not just about technology, but about building trust, resilience, and a culture of open collaboration that can outlast any single organization.
          </div>
          <div className="w-full flex flex-col gap-10 mt-2">
            {/* Timeline/Steps */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-1 h-full bg-gradient-to-b from-orange-400/40 to-cyan-400/40 rounded-full" />
              <div className="flex items-start gap-4 mb-10">
                <div className="w-4 h-4 bg-orange-400 rounded-full border-2 border-white mt-1" />
                <div>
                  <div className="text-lg font-bold text-orange-200">Bootstrapping</div>
                  <div className="text-gray-400 text-base">In the early years, the Foundation focused on building the core infrastructure, funding protocol and wallet development, and supporting the first wave of projects. This phase was about laying a strong, resilient foundation for the entire ecosystem. The Foundation took on the risks and responsibilities that a young, decentralized network could not yet bear alone.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-10">
                <div className="w-4 h-4 bg-cyan-400 rounded-full border-2 border-white mt-1" />
                <div>
                  <div className="text-lg font-bold text-cyan-200">Empowering Community</div>
                  <div className="text-gray-400 text-base">As the ecosystem matured, the Foundation began shifting responsibility to community contributors, DAOs, and independent projects. This included supporting grassroots initiatives, open bounties, and encouraging new leadership to emerge from within the community. The Foundation's role became one of mentorship, guidance, and providing resources rather than direct control.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-10">
                <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-white mt-1" />
                <div>
                  <div className="text-lg font-bold text-green-200">Decentralization</div>
                  <div className="text-gray-400 text-base">The Foundation's role is designed to diminish over time, with governance, funding, and decision-making increasingly handled by the community. This ensures that no single entity can control the direction of Ergo, preserving its core values of openness and resilience. The Foundation actively encourages the creation of new DAOs, working groups, and independent initiatives to take on key responsibilities.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-white mt-1" />
                <div>
                  <div className="text-lg font-bold text-yellow-200">Sustainability</div>
                  <div className="text-gray-400 text-base">The long-term vision is a self-sustaining, decentralized ecosystem where innovation, funding, and stewardship are distributed among many hands. The Foundation will remain as a legal entity only as long as needed to support the community's growth and protect its interests. Ultimately, the success of Ergo will be measured by the strength and independence of its community, not by the Foundation's continued existence.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="bg-neutral-900/70 rounded-xl p-6 text-base text-gray-200">
              <span className="font-semibold text-orange-300">The Foundation's mission is to make itself obsolete:</span> to empower the community, foster a culture of open collaboration, and ensure that Ergo's future is shaped by its users, builders, and advocates — not by any central authority. This is the true test of decentralization and the legacy the Foundation aims to leave behind.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TreasuryContent() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-10">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-8">
        <Coins className="w-10 h-10 text-orange-400 drop-shadow-lg" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Ergo Foundation Treasury
          </h1>
      </div>
      {/* Initial Allocation */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-orange-400" /> Initial Allocation</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation initially received an allocation of 4,330,776 ERG, which is equivalent to 4.43% of the total supply.</p>
        <p className="text-gray-300 mb-2">A significant portion of this Treasury has been expended for the benefit of the Ergo protocol and community. Even during periods of low ERG price, the Foundation continued to invest in order to foster and grow the Ergo ecosystem.</p>
        <p className="text-gray-300 mb-2">For more information on Ergo's emission schedule, tokenomics and allocation, visit the emission section.</p>
      </div>
      {/* Ergo First-Year Token */}
      <div className="bg-neutral-900/60 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-cyan-400" /> Ergo First-Year Token</h2>
        <p className="text-gray-300 mb-2">Additionally, the Treasury exchanged 1,782,615 ERG for EFYT, a token issued on the Waves Platform in 2017 to build an early community through airdrops and raise funds before the Ergo mainnet launch.</p>
        <p className="text-gray-300 mb-2">After subtracting the 1,782,615 ERG exchanged for EFYT, the Ergo Foundation was left with 2,548,161 ERG, which is approximately 2.6% of the total supply.</p>
      </div>
      {/* Current Holdings */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-orange-400" /> Current Holdings (March 2025)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-orange-400/10">
                <th className="px-4 py-2 text-left">Asset</th>
                <th className="px-4 py-2 text-left">Indicator Amount</th>
                <th className="px-4 py-2 text-left">Indicative US$ Price</th>
                <th className="px-4 py-2 text-left">Indicative Total US$ Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td colSpan={4} className="font-semibold px-4 py-2">Liquid Assets in Self-Hosted Wallets</td>
              </tr>
              <tr>
                <td className="px-4 py-2">ERG</td>
                <td className="px-4 py-2">147,067</td>
                <td className="px-4 py-2">0.841</td>
                <td className="px-4 py-2">123,783</td>
              </tr>
              <tr>
                <td className="px-4 py-2">BTC</td>
                <td className="px-4 py-2">1.334264</td>
                <td className="px-4 py-2">87,125</td>
                <td className="px-4 py-2">116,248</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td colSpan={3} className="font-semibold px-4 py-2">Subtotal - Liquid Assets</td>
                <td className="px-4 py-2">$240,031</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td colSpan={4} className="font-semibold px-4 py-2">Illiquid Assets in Self-Hosted Wallets</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Gluon</td>
                <td className="px-4 py-2">335,000</td>
                <td className="px-4 py-2">1.00</td>
                <td className="px-4 py-2">335,000.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2">SPF</td>
                <td className="px-4 py-2">25,910,000</td>
                <td className="px-4 py-2">0.005911</td>
                <td className="px-4 py-2">153,154</td>
              </tr>
              <tr>
                <td className="px-4 py-2">RSN</td>
                <td className="px-4 py-2">30,000,000</td>
                <td className="px-4 py-2">0.047314</td>
                <td className="px-4 py-2">1,419,420</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td colSpan={3} className="font-semibold px-4 py-2">Subtotal - Illiquid Assets</td>
                <td className="px-4 py-2">$1,572,574</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td colSpan={4} className="font-semibold px-4 py-2">Assets in MM Accounts (Illiquid)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">ERG</td>
                <td className="px-4 py-2">56,209</td>
                <td className="px-4 py-2">0.841</td>
                <td className="px-4 py-2">47,356</td>
              </tr>
              <tr>
                <td className="px-4 py-2">USDT</td>
                <td className="px-4 py-2">43,631</td>
                <td className="px-4 py-2">1.00</td>
                <td className="px-4 py-2">43,631</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td colSpan={3} className="font-semibold px-4 py-2">Subtotal - Assets in MM Accounts</td>
                <td className="px-4 py-2">$89,300</td>
              </tr>
              <tr className="bg-orange-400/10">
                <td colSpan={3} className="font-bold px-4 py-2">Total Liquid Assets</td>
                <td className="px-4 py-2">$240,031</td>
              </tr>
              <tr className="bg-cyan-400/10">
                <td colSpan={3} className="font-bold px-4 py-2">Total Illiquid Assets</td>
                <td className="px-4 py-2">$1,572,574</td>
              </tr>
              <tr className="bg-orange-400/10">
                <td colSpan={3} className="font-bold px-4 py-2">Total Assets</td>
                <td className="px-4 py-2">$1,812,605</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Liquid vs Illiquid Funds */}
      <div className="bg-neutral-900/60 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-cyan-400" /> Liquid vs Illiquid Funds</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation's treasury consists of both liquid and illiquid assets, providing a diverse portfolio to support the growth and development of the Ergo ecosystem. The liquid assets, such as ERG and BTC, can be readily utilized for various purposes, while the illiquid assets, like Gluon, SPF, and RSN tokens, are held strategically to avoid exerting downward pressure on these early-stage projects.</p>
        <p className="text-gray-300 mb-2">As these projects mature and their tokens become more liquid, the Ergo Foundation will have the opportunity to leverage these assets to further augment its expenditure capabilities and support the Ergo ecosystem more effectively.</p>
      </div>
      {/* Wallets */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-orange-400" /> Wallets</h2>
        <p className="text-gray-300 mb-2">You can find the Ergo Foundation treasury and current balance on-chain at the following locations:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>EF Multi-sig for ERG + Tokens<br /><span className="text-gray-400 text-sm">Hot Wallet managed by the Treasurer when sending payments.</span></li>
          <li>EF BTC Multi-sig</li>
        </ul>
      </div>
      {/* Historic Spending */}
      <div className="bg-neutral-900/60 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-cyan-400" /> Historic Spending</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation has spent the majority of the Treasury for the benefit of the protocol and community. Funds were even spent when the ERG price was low, as it was necessary to bootstrap the thriving community Ergo now boasts.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-cyan-400/10">
                <th className="px-4 py-2 text-left">Spent</th>
                <th className="px-4 py-2 text-left">ERG</th>
                <th className="px-4 py-2 text-left">SPF</th>
                <th className="px-4 py-2 text-left">BTC</th>
                <th className="px-4 py-2 text-left">TOTAL VALUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2024</td>
                <td className="px-4 py-2">209,646</td>
                <td className="px-4 py-2">1,627,500</td>
                <td className="px-4 py-2">1.95</td>
                <td className="px-4 py-2">$372,217</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023</td>
                <td className="px-4 py-2">424,150</td>
                <td className="px-4 py-2">1,622,000</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">$589,777</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2022</td>
                <td className="px-4 py-2">723,000</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">$2,247,640</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2021</td>
                <td className="px-4 py-2">889,001</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">$3,793,485</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2020</td>
                <td className="px-4 py-2">1,080,000</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">$500,292</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2019</td>
                <td className="px-4 py-2">757,051</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">$590,239</td>
              </tr>
              <tr className="bg-orange-400/10 font-bold">
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">4,082,848</td>
                <td className="px-4 py-2">3,249,500</td>
                <td className="px-4 py-2">1.95</td>
                <td className="px-4 py-2">$8,093,650</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Roles */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-orange-400" /> Roles</h2>
        <p className="text-gray-300 mb-2">More information on each of these roles can be seen on this page.</p>
      </div>
      {/* The Foundation's Future */}
      <div className="bg-neutral-900/60 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><TrendingUp className="w-7 h-7 text-orange-400" /> The Foundation's Future</h2>
        <p className="text-gray-300 mb-2">Please see this page for more information on the long-term goals of The Foundation.</p>
      </div>
    </div>
  );
}

function VotesContent() {
  const years = [
    {
      year: "2024",
      color: "orange",
      rows: [
        ["(Dec 2024)", "Alt Social Media Manager Role", "Treasury Control", "Passed", "$20 per hour"],
        ["(Nov 2024)", "Ergo Mining Ecosystem Development and Community Expansion", "Treasury Control", "Passed", "$24k over 12mo"],
        ["(Oct 2024)", "Ledger UI implementation for Stax and Flex devices", "Treasury Control", "Passed", "6k USD in ERG"],
        ["(Oct 2024)", "ERGOHACK IX Funding", "Treasury Control", "Passed", "$9.5k"],
        ["(Oct 2024)", "Keystone bounty", "Treasury Control", "Passed", "3k ERG"],
        ["(Sep 2024)", "Sponsor sigmaspace.io", "Treasury Control", "Passed", "250 USD worth in ERG monthly"],
        ["(Sep 2024)", "DevOps Proposal", "Treasury Control", "Failed", "$1.5k/mo"],
        ["(Aug 2024)", "Marketing for Cyberverse Grant", "Treasury Control", "Passed", "12,000 USD"],
        ["(Jul 2024)", "Fund Gluon Gold Marketing Effort", "Treasury Control", "Passed", "9540 ERG"],
        ["(Jul 2024)", "Make MGpai EF member", "Ergo Foundation", "Passed", ""],
        ["(Jul 2024)", "Appoint Glasgow as Permanent Authorised Signatory / Confirm EF Members", "Ergo Foundation", "Passed", ""],
        ["(Jun 2024)", "Monthly budget reduction", "Treasury Control", "", ""],
        ["(May 2024)", "Appoint Justin Simpson as Authorised Signatory", "Ergo Foundation", "Passed", ""],
        ["(May 2024)", "Treasury transfer to BTC wallet", "Treasury Control", "Passed", ""],
        ["(Apr 2024)", "Treasury transfer to MultiSig", "Treasury Control", "Passed", ""],
        ["(Apr 2024)", "Cornell Blockchain Conference Sponsorship", "Treasury Control", "Passed", "$5,000"],
        ["(Apr 2024)", "ERGOHACK VIII Funding", "Treasury Control", "Passed", "$18,000"],
        ["(Apr 2024)", "Paying CLS/MEXC", "Treasury Control", "Passed", "$112,974"],
        ["(Mar 2024)", "Sigmanaut Market Making Proposal to Ergo Foundation", "Treasury Control", "Passed", ""],
        ["(Mar 2024)", "Donate MEXC Raffle listing to Sigmanauts", "Treasury Control", "Passed", "28,675 ERG"],
        ["(Mar 2024)", "Proposal to Form RMI DAO LLC", "Treasury Control", "Passed", "$13,000"],
        ["(Mar 2024)", "Covering MEXC USDT", "Treasury Control", "Passed", "$10,000"],
        ["(Feb 2024)", "MEXC Market Making", "Treasury Control", "Passed", ""],
        ["(Feb 2024)", "Request more SPF tokens", "Treasury Control", "Passed", ""],
        ["(Feb 2024)", "Repayment of Kushti & Justin MM Loans", "Treasury Control", "Passed", ""],
        ["(Jan 2024)", "CLS continuation 1 month", "Treasury Control", "Passed", ""],
        ["(Jan 2024)", "Biconomy Marketing", "Treasury Control", "Failed", ""]
      ]
    },
    {
      year: "2023",
      color: "cyan",
      rows: [
        ["(Dec 2023)", "Transfer of all or Part of Treasury to New Multi-sig", "Treasury Control", "Passed", ""],
        ["(Dec 2023)", "Using SPF in SigmaFi", "Treasury Control", "Failed", ""],
        ["(Dec 2023)", "Ledger additional funding", "Treasury Control", "Passed", "$9,500"],
        ["(Dec 2023)", "Repayment of US$52.5k Huobi Loan", "Treasury Control", "Failed", "$52,500"],
        ["(Nov 2023)", "Bez proposal 2023", "Ergo Foundation", "Passed", ""],
        ["(Oct 2023)", "Bounty for Ergo Explorer", "Ergo Foundation", "Passed", "1,500 ERG"],
        ["(Oct 2023)", "Withdraw $40K from Kucoin MM", "Treasury Control", "Passed", "$40,000"],
        ["(Oct 2023)", "Sponsorship of tickets to Dubai for Cardano Summit", "Ergo Foundation", "Passed", "$1,000"],
        ["(Oct 2023)", "Pay raise for anon-br", "Treasury Control", "Passed", ""],
        ["(Oct 2023)", "$10k in ERG to CoinLS to support depth on HTX", "Treasury Control", "Withdrawn", "$10,000"],
        ["(Oct 2023)", "SPF Salary Incentivisation", "Treasury Control", "Failed", ""],
        ["(Oct 2023)", "Additional ERGOHACK VII Funding: $5000 worth of SPF", "Treasury Control", "Failed", "$5,000"],
        ["(Sep 2023)", "Pay a bonus to Angie in SPF", "Treasury Control", "Passed", ""],
        ["(Sep 2023)", "Vote on salary subsidy to be paid in SPF starting month after SPF attained", "Treasury Control", "Failed", ""],
        ["(Sep 2023)", "Vote on SPF conversions", "Treasury Control", "Passed", ""],
        ["(Sep 2023)", "ERGOHACK VII Funding", "Treasury Control", "Failed", ""],
        ["(Aug 2023)", "Bitpanda Listing", "Treasury Control", "Passed", ""],
        ["(Aug 2023)", "Vote on taking down 2mm SPF into a minimum 4-person multi-sig", "Treasury Control", "Passed", "2,000,000 SPF"],
        ["(Aug 2023)", "SPF Tokens to Sigmanauts", "Treasury Control", "Passed", "160,000 SPF"],
        ["(Jul 2023)", "Sigmanauts Treasury Fundraiser", "Treasury Control", "Passed", ""],
        ["(Jul 2023)", "Dubai Entity Setup", "Treasury Control", "Passed", ""],
        ["(Jul 2023)", "Make Angie EF's Head of Marketing", "Ergo Foundation", "Passed", ""],
        ["(Jul 2023)", "Continued Cooperation with Jinse", "Treasury Control", "Failed", ""],
        ["(Jun 2023)", "Stop payments to 'advisor' Dan Friedman", "Treasury Control", "Failed", ""],
        ["(Jun 2023)", "Grant Request - Quidli - $3,000", "Treasury Control", "Failed", "$3,000"],
        ["(Jun 2023)", "Ergo Foundation Reorganization Proposal", "Ergo Foundation", "Failed", ""],
        ["(May 2023)", "Partial Payment of debt to morphic", "Treasury Control", "Passed", "$48,000 + 3314 ERG"],
        ["(May 2023)", "WeChat Public Account Purchase - 1,200 ERG", "Treasury Control", "Passed", "1,200 ERG"],
        ["(May 2023)", "Event participation", "Treasury Control", "Failed", ""],
        ["(May 2023)", "ERG liquidation – additional procedure", "Treasury Control", "Failed", ""],
        ["(Apr 2023)", "EF entity set up in Dubai", "Treasury Control", "Passed", ""]
      ]
    },
    {
      year: "2022",
      color: "orange",
      rows: [
        ["(May 2022)", "Guap Swap Funding Grant Request", "Treasury Control", "Failed", "$10,000 (Funded by Good Whale)"],
        ["(May 2022)", "Funding proposal for mhs_sam's team", "Treasury Control", "Passed", "$22,700 / month"],
        ["(Apr 2022)", "Trezor Build Grant", "Treasury Control", "Failed", "$100,000"],
        ["(Apr 2022)", "Themoonlab marketing proposal for Ergo Hackathon", "Treasury Control", "Passed", ""],
        ["(Apr 2022)", "Securing Funding for Deco Raffle", "Treasury Control", "Passed", ""],
        ["(Apr 2022)", "Huobi Funding", "Treasury Control", "Passed", "NDA"],
        ["(Mar 2022)", "Unbanked Debit Cards 60K", "Treasury Control", "Failed", "$60,000"],
        ["(Mar 2022)", "MEXC Latest Offer 28/2", "Treasury Control", "Failed", "$100,000"],
        ["(Mar 2022)", "Huobi Listing $ in ERG", "Treasury Control", "Passed", "NDA"],
        ["(Feb 2022)", "Sign Development Contract with Alex Slesarenko", "Treasury Control", "Passed", ""],
        ["(Feb 2022)", "Vote for Continued Cooperation with Jinse Finance - China", "Treasury Control", "Passed", ""],
        ["(Feb 2022)", "Dmitry Usov performance sheet (Pay Increase Request)", "Treasury Control", "Failed", ""],
        ["(Feb 2022)", "Marketing Partnership", "Treasury Control", "Failed", ""],
        ["(Jan 2022)", "ErgoDex Proposal", "Treasury Control", "Passed", "$113,200"],
        ["(Jan 2022)", "Funding for Website Visual Direction", "Treasury Control", "Passed", ""],
        ["(Jan 2022)", "Bank Account Opening with Equity Bank / Crypto Custody Account Opening with LionGate", "Treasury Control", "Passed", ""],
        ["(Jan 2022)", "ErgoLearn Grant", "Treasury Control", "Passed", "1,000 ERG"],
        ["(Jan 2022)", "Apple Developer Program Account Funding", "Treasury Control", "Failed", ""]
      ]
    },
    {
      year: "2021",
      color: "cyan",
      rows: [
        ["(Dec 2021)", "Matthew Salary Proposal (From Angie)", "Treasury Control", "Failed", ""],
        ["(Dec 2021)", "Bittrex Listing", "Treasury Control", "Failed", ""],
        ["(Dec 2021)", "Website Update Funding (Spending Proposal From Dmitry U)", "Treasury Control", "Failed", ""],
        ["(Dec 2021)", "Request for increasing the EF rewards for Rosen Team", "Treasury Control", "Passed", ""],
        ["(Dec 2021)", "Bounties for Bugs", "Treasury Control", "Passed", ""],
        ["(Dec 2021)", "Hire Monye David as a full-time Scala developer", "Treasury Control", "Passed", ""],
        ["(Dec 2021)", "Hire Josef Koval as a full-time Scala developer", "Treasury Control", "Passed", ""],
        ["(Dec 2021)", "EF Treasurer Proposal", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "US Based Legal Opinion", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "Matthew Hinton - Marketing/CM Assistant", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "Andy Lowe - Youtube/Video Manager", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "AMM Kairon Labs", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "Ergo Platform Strategic Marketing Planning Budget", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "Bounty Budget for Core Repositories", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "Dan Friedman IOG BD (EF Advisor Role)", "Treasury Control", "Passed", ""],
        ["(Nov 2021)", "MEXC Offer Update", "Treasury Control", "Failed", ""],
        ["(Nov 2021)", "Binance Initial Meeting", "Treasury Control", "Failed", ""],
        ["(Nov 2021)", "Proposal to hire MrStahlfelge as full-time engineer", "Treasury Control", "Passed", ""],
        ["(Oct 2021)", "Indodax Exchange", "Treasury Control", "Passed", ""],
        ["(Sep 2021)", "Make Mark Glasgow EF Board Member", "Ergo Foundation", "Passed", ""],
        ["(Sep 2021)", "Proposal to Pay Le Yu to Start Incorporation Process", "Treasury Control", "Passed", "$40,000"],
        ["(Sep 2021)", "Proposal to hire anon_br as part-time Yoroi developer", "Treasury Control", "Passed", ""],
        ["(Sep 2021)", "Bibox Exchange Listing Fee", "Treasury Control", "Failed", "$20,000"],
        ["(Sep 2021)", "Digifinex Exchange Listing Fee", "Treasury Control", "Failed", "$50,000"],
        ["(Sep 2021)", "BitForex List Fee", "Treasury Control", "Failed", "$20,000"],
        ["(Sep 2021)", "Redline Assistance with OKex, Houbi, Binance", "Treasury Control", "Failed", "$100,000"],
        ["(Sep 2021)", "Addition Token Pair on Kucoin", "Treasury Control", "Failed", "NDA"],
        ["(Sep 2021)", "AscendEX Listing Info", "Treasury Control", "Failed", "$50,000"],
        ["(Sep 2021)", "MEXC Listing Fee Info", "Treasury Control", "Failed", "$125,000"],
        ["(Sep 2021)", "ZB Exchange Fee", "Treasury Control", "Failed", "$300,000"],
        ["(Sep 2021)", "Funding Salary of Yoroi developer", "Treasury Control", "Passed", ""],
        ["(Aug 2021)", "Ergo x F2pools Proposal", "Treasury Control", "Failed", ""],
        ["(Aug 2021)", "Jinxi Partnership", "Treasury Control", "Failed", ""],
        ["(Jul 2021)", "Make Joseph Armeanio EF Board Member", "Ergo Foundation", "Passed", ""],
        ["(Jul 2021)", "One year deal with MrStahlfelge", "Treasury Control", "Passed", ""],
        ["(Jul 2021)", "Eva Compensation Boost", "Treasury Control", "Passed", ""],
        ["(Jul 2021)", "One-time reward for MrStahlfelge", "Treasury Control", "Passed", ""],
        ["(Jul 2021)", "Proposal to hire MrStahlfelge as part-time developer", "Treasury Control", "Passed", ""],
        ["(Jul 2021)", "Denton's Payment to Set up Legal Entity", "Treasury Control", "Passed", ""],
        ["(Jul 2021)", "Transfer of 5K ERG to morphic", "Treasury Control", "Passed", "5,000 ERG"],
        ["(Jun 2021)", "Fund Up to $7.5k for Ergoversary marketing", "Treasury Control", "Passed", "$7,500"],
        ["(Jun 2021)", "ErgoDEX funding", "Treasury Control", "Passed", "$15,000"],
        ["(Jun 2021)", "Special ops budget", "Treasury Control", "Passed", ""],
        ["(Jun 2021)", "Proposal to hire an Editor and a Product Manager to join the Content Team", "Treasury Control", "Passed", ""],
        ["(May 2021)", "Proposal to make Tango Ergo Ambassador in China", "Treasury Control", "Passed", ""],
        ["(May 2021)", "Regular spending of the fund V3", "Treasury Control", "Passed", ""],
        ["(Apr 2021)", "Hire Marketing Coordinator", "Treasury Control", "Passed", ""],
        ["(Apr 2021)", "Regular spending of the fund V2", "Treasury Control", "Passed", ""],
        ["(Mar 2021)", "Selling 250K ERG", "Treasury Control", "Passed", "250,000 ERG"],
        ["(Mar 2021)", "China Community - Eva Salary Increase", "Treasury Control", "Passed", ""],
        ["(Mar 2021)", "Marketing activities regarding BitMart listing", "Treasury Control", "Passed", ""],
        ["(Feb 2021)", "Rewards for external contributions to 4.0.3 core development", "Treasury Control", "Passed", ""],
        ["(Feb 2021)", "HotBit - MM on ERG/USDT pair", "Treasury Control", "Passed", ""],
        ["(Feb 2021)", "Anarchapulco Sponsorship", "Treasury Control", "Failed", ""],
        ["(Feb 2021)", "OTC Sales and Discounts", "Treasury Control", "Failed", ""],
        ["(Feb 2021)", "Request for Funding for AMM Code", "Treasury Control", "Failed", ""],
        ["(Feb 2021)", "BiKi Listing", "Treasury Control", "Passed", ""],
        ["(Jan 2021)", "One-time rewards", "Treasury Control", "Passed", ""],
        ["(Jan 2021)", "Ergs for 1 year partnership with Jinse", "Treasury Control", "Passed", ""],
        ["(Jan 2021)", "India Marketing Proposal", "Treasury Control", "Passed", ""],
        ["(Jan 2021)", "Out-Of-The-Box Ergo Node + Explorer Deployment With Metrics & Logs", "Treasury Control", "Passed", ""]
      ]
    },
    {
      year: "2020",
      color: "orange",
      rows: [
        ["(Nov 2020)", "Coinex Listing", "Treasury Control", "Passed", ""],
        ["(Nov 2020)", "Market-making and OTC deals", "Ergo Foundation", "", ""],
        ["(Nov 2020)", "China marketing proposal", "Treasury Control", "Passed", ""],
        ["(Oct 2020)", "Rewards for external contributions to core development", "Treasury Control", "Passed", ""],
        ["(Oct 2020)", "Put mhs into Ergo Foundation", "Ergo Foundation", "Passed", ""],
        ["(Sep 2020)", "Regular spendings of the Fund", "Treasury Control", "Passed", ""],
        ["(Sep 2020)", "Ergo Cast renewal", "Treasury Control", "Passed", ""],
        ["(Aug 2020)", "$50-100K airdrop in Ergs to Gate.io users", "Treasury Control", "Passed", "100,000"],
        ["(Aug 2020)", "Excluding member from the foundation or development fund board", "Treasury Control", "Passed", ""],
        ["(Aug 2020)", "New nominations to join Ergo Foundation", "Treasury Control", "Passed", ""],
        ["(Aug 2020)", "Including Robert into DevFund board", "Treasury Control", "Passed", ""],
        ["(Aug 2020)", "Sistemkoin giveaway", "Treasury Control", "Passed", ""],
        ["(Jun 2020)", "Emurgo Partnership China Press Release on 8btc.com", "Treasury Control", "Failed", ""],
        ["(Jun 2020)", "Emurgo Partnership", "Treasury Control", "Passed", ""],
        ["(May 2020)", "Grant - Ledger Support", "Treasury Control", "Passed", ""],
        ["(Mar 2020)", "Mining Pool by mhs_sam", "Treasury Control", "Failed", ""],
        ["(Jan 2020)", "Selling 80K Ergs @ 5K sats/erg", "Treasury Control", "Passed", "80,000 ERG"],
        ["(Jan 2020)", "Salaries - Jan-2020", "Treasury Control", "Passed", ""],
        ["(Jan 2020)", "Irregular Spendings and BTC accumulation - Jan-2019", "Treasury Control", "Passed", ""],
        ["(Jan 2020)", "Selling 5 BTC worth of Ergs @ $0.45/erg", "Treasury Control", "Passed", "5 BTC worth of ERG"],
        ["(Jan 2020)", "Ergo Faucet", "Treasury Control", "Failed", ""]
      ]
    },
    {
      year: "2019",
      color: "cyan",
      rows: [
        ["(Dec 2019)", "Salaries - Dec-2019", "Treasury Control", "Passed", ""],
        ["(Dec 2019)", "Irregular spendings & BTC accumulation - Dec-2019", "Treasury Control", "Passed", ""],
        ["(Dec 2019)", "Closing legal entity in Russia", "Treasury Control", "Passed", ""],
        ["(Dec 2019)", "Regular Spending - Marketing Budget", "Treasury Control", "Failed", ""],
        ["(Dec 2019)", "Selling 50K Ergs @ $0.5/erg", "Treasury Control", "Passed", "50,000 ERG"],
        ["(Dec 2019)", "Ergo Podcast", "Treasury Control", "Passed", ""],
        ["(Nov 2019)", "Catena's debt to be paid in Ergs", "Treasury Control", "Passed", ""],
        ["(Nov 2019)", "Development Fund debts", "Treasury Control", "Passed", ""],
        ["(Nov 2019)", "Development Fund Board", "Treasury Control", "Passed", ""]
      ]
    }
  ];

  const [openYears, setOpenYears] = useState([years[0].year]);

  const toggleYear = (year: string) => {
    setOpenYears((prev) =>
      prev.includes(year)
        ? prev.filter((y) => y !== year)
        : [...prev, year]
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-10">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-8">
        <Vote className="w-10 h-10 text-cyan-400 drop-shadow-lg" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Votes
          </h1>
      </div>
      {/* Votings */}
      <div className="bg-gradient-to-r from-cyan-400/10 to-orange-400/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Vote className="w-7 h-7 text-cyan-400" /> Votings</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation members and officers discuss proposals before putting them to a formal vote on the ergoforum, passed with a majority of voting members.</p>
        <p className="text-gray-300 mb-2">Before voting on spending treasury funds, we will approach the Good Whale Fund, DarkFund0, or suggest creating a Raffle if appropriate.</p>
        <p className="text-gray-300 mb-2">Foundation votes this year are usually related to our internal structures, exchanges, market-makers, banks, and grant requests.</p>
      </div>
      {/* Accordion by year */}
      <div className="space-y-4">
        {years.map(({ year, color, rows }) => (
          <div key={year} className={`rounded-2xl shadow-md border-0 ${color === 'orange' ? 'bg-gradient-to-r from-orange-400/10 to-orange-400/5' : 'bg-gradient-to-r from-cyan-400/10 to-cyan-400/5'}`}>
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-xl font-bold focus:outline-none text-gray-100"
              onClick={() => toggleYear(year)}
            >
              <span className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${color === 'orange' ? 'bg-orange-400' : 'bg-cyan-400'} shadow-md`} />
                {year}
              </span>
              <span className={`transition-transform ${openYears.includes(year) ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {openYears.includes(year) && (
              <div className="overflow-x-auto px-4 pb-4">
                <table className="min-w-full text-sm text-gray-300 rounded-xl overflow-hidden">
                  <thead>
                    <tr className={color === 'orange' ? 'bg-orange-400/10' : 'bg-cyan-400/10'}>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Description</th>
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-2 border-b border-neutral-800/40 last:border-b-0">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FutureContent() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            The Ergo Foundation's Future
          </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Ergo Foundation's role is evolving: from bootstrapping the ecosystem to empowering the community and supporting long-term decentralization and sustainability.
        </p>
        </div>

      {/* What's been done so far? Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-cyan-400" /> What's been done so far?
        </h2>
        <div className="relative border-l-2 border-orange-400/30 pl-8 space-y-10">
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-semibold mb-1">Achievements & Scope</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>For an overview of what has been achieved since launch, please see this page</li>
          <li>For a comprehensive overview of the scope of the Ergo Foundation see this page</li>
        </ul>
      </div>
        </div>
      </div>

      {/* Initial Role of the Ergo Foundation */}
      <div className="bg-neutral-900/50 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Book className="w-6 h-6 text-orange-400" /> Initial Role of the Ergo Foundation
        </h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation's initial role was to bootstrap the Ergo ecosystem in the early years and build the necessary infrastructure to facilitate adoption, addressing the 'hard side' of Ergo. This has led to the vibrant ecosystem we see today, with:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Over 300 community developers</li>
          <li>More than 100 active contributors in the weekly developer chat on Discord</li>
          <li>Hosting multiple events annually</li>
          <li>Over 140 projects developing on Ergo (see sigmaverse.io for an overview)</li>
          <li>Consistently ranked among the top 100 for development activity on artemis.xyz</li>
        </ul>
      </div>

      {/* The Future */}
      <div className="bg-neutral-900/50 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-cyan-400" /> The Future
        </h2>
        <p className="text-gray-300 mb-2">As time progresses, the Ergo Foundation's importance should diminish, and responsibility should transition towards the community. This shift is essential for the ecosystem's strength and decentralization.</p>
        <p className="text-gray-300 mb-2">The Ergo Foundation may continue to exist indefinitely as a legal entity, primarily serving to mitigate counterparty risk in interactions with centralized entities. In the interim, it will continue to foster the development of applications and protocols that align with its foundational objectives:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Promoting blockchain technology for societal benefit</li>
          <li>Advocating for truly decentralized infrastructure</li>
          <li>Upholding privacy as a fundamental human right</li>
        </ul>
        <p className="text-gray-300 mb-2">The optimal strategy involves diligent work and the development of robust infrastructure to accommodate potential liquidity shifts from existing systems. Emphasis should be placed on user security, privacy, and long-term resilience. While the timing and nature of these shifts cannot be precisely predicted or controlled, strategic positioning can prepare us for various outcomes.</p>
        <p className="text-gray-300 mb-2">The generous contributions from ecosystem projects to the Foundation's treasury ensure its sustainability, enabling it to fulfill this mission until it becomes redundant.</p>
      </div>

      {/* The Sigmanauts Program */}
      <div className="bg-neutral-900/50 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Users className="w-6 h-6 text-orange-400" /> The Sigmanauts Program
        </h2>
        <p className="text-gray-300 mb-2">The Sigmanauts Program is a grassroots initiative aimed at empowering individuals to take ownership of Ergo and shape its future. The program was launched to build the required structures to pass the baton to the community, enabling individuals to take ownership and contribute to Ergo's development.</p>
      </div>
    </div>
  );
}

export default function ErgoFoundationPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center"><Users className="w-4 h-4" /> Overview</TabsTrigger>
        <TabsTrigger value="scope" className="flex items-center gap-2 justify-center"><Shield className="w-4 h-4" /> Scope</TabsTrigger>
        <TabsTrigger value="treasury" className="flex items-center gap-2 justify-center"><Coins className="w-4 h-4" /> Treasury</TabsTrigger>
        <TabsTrigger value="votes" className="flex items-center gap-2 justify-center"><Vote className="w-4 h-4" /> Votes</TabsTrigger>
        <TabsTrigger value="future" className="flex items-center gap-2 justify-center"><Calendar className="w-4 h-4" /> Future</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><OverviewContent /></TabsContent>
      <TabsContent value="scope"><ScopeContent /></TabsContent>
      <TabsContent value="treasury"><TreasuryContent /></TabsContent>
      <TabsContent value="votes"><VotesContent /></TabsContent>
      <TabsContent value="future"><FutureContent /></TabsContent>
    </Tabs>
  );
} 