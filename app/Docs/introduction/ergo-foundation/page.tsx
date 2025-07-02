"use client";

import React, { useState } from "react";
import { Users, Book, Coins, Vote, Calendar, Star, Briefcase, Shield, UserCheck, UserCog, UserPlus, User, ArrowRight } from "lucide-react";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "scope", label: "Scope" },
  { key: "treasury", label: "Treasury" },
  { key: "votes", label: "Votes" },
  { key: "future", label: "Future" },
];

function OverviewContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-6">
        <Users className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            The Ergo Foundation
          </h1>
          <p className="text-xl text-gray-400">Comprehensive overview and transparency of the Ergo Foundation.</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Book className="w-7 h-7 text-orange-400" /> About</h2>
        <p className="text-gray-300 mb-2">This section provides a comprehensive overview of the Ergo Foundation, aiming to maintain transparency. For more detailed information, please refer to the respective sections:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Gain insights into the <b>Structure</b> of the Ergo Foundation and its operational mechanisms.</li>
          <li>Delve into the <b>Scope</b> of our work to understand our focus areas.</li>
          <li>Traverse the <b>Timeline</b> to witness the milestones achieved by the Ergo Foundation.</li>
          <li>Obtain a detailed understanding of the <b>Treasury</b> and its management.</li>
          <li>Uncover our <b>Future</b> plans and the strategic direction we are pursuing.</li>
        </ul>
      </div>

      {/* Mission Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Star className="w-7 h-7 text-cyan-400" /> Mission</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation is a community-led organization with a focus on the following areas:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Encouraging the non-breaking development of the Ergo Platform protocol</li>
          <li>Advocating for the widespread adoption and use of the Ergo Platform and its native token (ERG)</li>
          <li>Fostering the growth of the ecosystem around the Ergo Platform</li>
          <li>Promoting the use of the Ergo Platform and blockchain technology for societal benefit</li>
          <li>Supporting truly decentralized infrastructure</li>
          <li>Upholding privacy as a fundamental human right</li>
        </ul>
      </div>

      {/* Structure Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Briefcase className="w-7 h-7 text-orange-400" /> Structure</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation is composed of dedicated members who primarily function as multi-signature custodians. They vote on proposals to allocate treasury funds in alignment with the Foundation's mission. The Foundation also directly employs several Officers and Advisors which is outlined below.</p>
        <p className="text-gray-300 mb-2">The day-to-day responsibilities of Foundation members are primarily organizational. They engage with exchanges, market-makers, and manage internal accounting and budgeting. They also oversee a variety of activities, including:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Contracting and compensating developers</li>
          <li>Allocating 'bounties' on core repositories</li>
          <li>Guiding core protocol development</li>
          <li>Overseeing wallet development</li>
          <li>Coordinating exchange listings</li>
          <li>Managing payments to third parties for administrative and miscellaneous expenses</li>
          <li>Facilitating partnership-related expenses</li>
          <li>Organizing and funding hackathons and summits</li>
          <li>Directing marketing and promotional initiatives</li>
        </ul>
      </div>

      {/* Scope Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Shield className="w-7 h-7 text-cyan-400" /> Scope</h2>
        <p className="text-gray-300 mb-2">For more information about the scope of the Foundation's work, please refer to the <b>Scope</b> section.</p>
      </div>

      {/* Members Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><UserCheck className="w-7 h-7 text-orange-400" /> Ergo Foundation Members</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Justin Simpson */}
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Justin Simpson</h3>
            <p className="text-gray-300 mb-1">13+ years in Investment Banking, in crypto since 2013. Focused on open, permissionless, decentralized platforms.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> No official EF duties other than voting. Works behind the scenes (investor relations, Chinese marketing, banking, accounting). Unpaid.</p>
          </div>
          {/* Mark Glasgow */}
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Mark Glasgow</h3>
            <p className="text-gray-300 mb-1">Community management, developer education, Computing Science graduate, Technical Director for Disabled Students UK CIC.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Conveys community concerns to EF. Salaried for Community Management/Editorial/Documentation/etc.</p>
          </div>
          {/* Alexander Slesarenko */}
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Alexander Slesarenko (morphic)</h3>
            <p className="text-gray-300 mb-1">25+ years in software, focus on programming languages, JVM, high-performance computing. Ex-Huawei Research Lab.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> No EF duties other than voting. Salaried as Core Developer (Sigma), unpaid for EF participation.</p>
          </div>
          {/* Alison Robson */}
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Alison Robson (anon_br)</h3>
            <p className="text-gray-300 mb-1">Developer Relations, software engineer, passionate about crypto adoption and UX.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Director of Engineering/Developer Adoption. Works with community devs on frameworks, integration, tooling (Fleet, Nautilus, Ledger).</p>
          </div>
        </div>
      </div>

      {/* Honorary Members Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><UserPlus className="w-7 h-7 text-cyan-400" /> Honorary Members</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mohammad Hasan Samadani */}
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Mohammad Hasan Samadani (mhs_sam)</h3>
            <p className="text-gray-300 mb-1">PhD in computer science, 12+ years in security/software, developed mining infra, Stratum server, ergopool.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Voting, project incubation, developed Ergo Raffle, ErgoWell, Minotaur-wallet, Rosen Bridge.</p>
          </div>
          {/* Joseph Armeanio */}
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Joseph Armeanio</h3>
            <p className="text-gray-300 mb-1">Crypto investor since 2013, ex-partner CIO at Big Bear Investments, board member at Universal Education Foundation.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Business development, partnerships, co-founded Rosen, promotes Ergo tooling in public/non-profit sectors.</p>
          </div>
        </div>
      </div>

      {/* Officers Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><UserCog className="w-7 h-7 text-orange-400" /> Officers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Anastasiia Sidorova */}
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Anastasiia Sidorova</h3>
            <p className="text-gray-300 mb-1">Treasurer, degree in Mathematical methods in Economics, ex-banking analyst, passion for analytics/accounting.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Financial reports, internal accounting, payroll, secretarial services & compliance.</p>
          </div>
          {/* Angie Har */}
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Angie Har</h3>
            <p className="text-gray-300 mb-1">Masters in International Management, Head of Customer Service, Business Development, Marketing, crypto since 2017.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Editorial team management, events.</p>
          </div>
        </div>
      </div>

      {/* Advisors Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><User className="w-7 h-7 text-cyan-400" /> Advisors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Daniel Friedman */}
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-1">Daniel Friedman</h3>
            <p className="text-gray-300 mb-1">Strategic Advisor, ex-developer, CTO, business developer for IOHK, advisor to EF Board.</p>
            <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Supports EF business development, ambassador, community engagement.</p>
          </div>
        </div>
      </div>

      {/* Editorial/Marketing Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Book className="w-7 h-7 text-orange-400" /> Editorial/Marketing</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Andy Lowe: Video Editor</li>
          <li>Sean Rice: Editor</li>
          <li>Eva Qing: Chinese Community Management</li>
          <li>Marcelo Roncatti (Marcello): Designer, art director, co-founder of Estudio Colletivo</li>
        </ul>
      </div>

      {/* Diversity Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Users className="w-7 h-7 text-cyan-400" /> Diversity</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation is made up of a diverse group of individuals, including salaried employees, volunteers, bounty collectors, and independent project developers within the Ergo ecosystem. There is no designated 'core' development team. The Core Marketing team is a mix of dedicated community members and salaried professionals. Contributors to core repositories may be invited to participate in Core Development discussions, regardless of employment status.</p>
      </div>

      {/* DevDAO Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><UserCheck className="w-7 h-7 text-orange-400" /> DevDAO</h2>
        <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4 mb-2">
          <h3 className="text-xl font-semibold mb-1">Alexander Chepurnoy (kushti)</h3>
          <p className="text-gray-300 mb-1">Blockchain since 2011, 20+ academic papers, 15+ years in software, co-founder of Ergo, Chainlink, ex-IOHK, manages bounties and high-level development.</p>
          <p className="text-gray-400 text-sm mb-1"><b>Role:</b> Stepped back from EF in Jan 2024 to focus on development. Plans to launch DevelopmentDAO, manages dev communications.</p>
        </div>
      </div>

      {/* Outgoings Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-cyan-400" /> Outgoings</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Ergo Foundation: Two members receive a salary, two others are rewarded with ERG. Kushti and Justin are unpaid.</li>
          <li>Marketing: Four individuals are compensated. See marketing section for details.</li>
          <li>Development: Three salaried, others via bounties. See development section for more.</li>
        </ul>
      </div>

      {/* Spendings Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Coins className="w-7 h-7 text-orange-400" /> Spendings</h2>
        <p className="text-gray-300 mb-2">A detailed breakdown of our expenditure can be found in the <b>Treasury</b> section.</p>
      </div>
    </div>
  );
}

function ScopeContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-6">
        <Shield className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            The Scope of the Ergo Foundation
          </h1>
        </div>
      </div>
      {/* Non-profit & Mission */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Non-profit Mission</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation is a non-profit organization dedicated to advancing the adoption and development of the Ergo Platform. Its primary focus is to support the Ergo Platform in providing an efficient and secure way to implement financial contracts, the most widely used application of blockchain technology.</p>
      </div>
      {/* Mission and Principles */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Mission and Principles</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Organic and Non-Breaking Development:</b> The Foundation ensures that protocol changes are approved not only by miners - who express their will directly on the blockchain - but also by users and projects building on top of Ergo. This approach promotes a gradual and non-disruptive evolution of the Ergo Platform, fostering stability and continuity for the ecosystem.</li>
          <li><b>Open-Source and Permissive Licensing:</b> The Foundation is committed to maximizing the number of valuable ecosystem developments accomplished in open-source with the least permissive license possible. This philosophy encourages collaboration, transparency, and community-driven innovation, while minimizing barriers to entry and fostering a vibrant and inclusive ecosystem.</li>
          <li><b>Privacy and Trustless Environments:</b> The Foundation is dedicated to helping build trustless environments, smart contracts, and payment frameworks for the public with privacy in mind. Ergo's strong focus on privacy and decentralization aligns with the Foundation's mission to empower individuals and promote financial sovereignty.</li>
          <li><b>Community-Driven:</b> The Foundation believes that the Treasury should be distributed mainly to the community, including freelancers, hackers, experts, and enthusiasts. This approach recognizes the vital role of the community in driving innovation and growth, and aims to cultivate a thriving and self-sustaining ecosystem.</li>
        </ul>
        <p className="text-gray-300 mb-2">The Ergo Foundation's Future<br/>Please see this page for more information on the long-term goals of The Foundation.</p>
      </div>
      {/* Key Areas of Focus */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Key Areas of Focus</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation's efforts are focused on several key areas that are essential for the growth and success of the Ergo Platform.</p>
      </div>
      {/* Infrastructure */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Support for protocol research, development of the reference client, alternative clients (if needed), libraries, and developer tooling. The Foundation recognizes the importance of a robust and well-maintained infrastructure to support the Ergo ecosystem.</li>
          <li>Improving market access by getting Ergo listed on centralized exchanges, hardware wallets, bridges, or other means. Increasing the accessibility and liquidity of Ergo is crucial for its widespread adoption and integration into the broader cryptocurrency ecosystem.</li>
        </ul>
      </div>
      {/* Education */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Education</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Creating materials to educate developers and users directly or funding their creation through third parties from within the community. The Foundation understands the importance of knowledge-sharing and capacity-building to foster a thriving and knowledgeable community of developers and users.</li>
        </ul>
      </div>
      {/* Promotion and Outreach */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Promotion and Outreach</h3>
        <p className="text-gray-300 mb-2">The Foundation aims to promote the adoption of Ergo through various outreach and promotional efforts. While its operations in this area are conservative, it does fund a select few roles for areas not currently met by the community, such as:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Angie Har, Editorial & Events Manager (salaried)</li>
          <li>Andy Lowe, YouTube Manager (hourly)</li>
          <li>Sean Rice, Editor (hourly)</li>
          <li>Eva Qing, Chinese Outreach Manager (hourly)</li>
          <li>Marcelo Roncatti, Branding Advisor (hourly)</li>
          <li>Writers (via paid bounties)</li>
        </ul>
        <p className="text-gray-300 mb-2">Their efforts ensure ample information is available about ongoing developments on Ergo via blog posts and social media, as well as the promotion and operation of various events, such as Ergo Summit and ErgoHack. These initiatives aim to raise awareness, foster community engagement, and attract new users and developers to the Ergo ecosystem.</p>
      </div>
      {/* Wen 'Marketing?' */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Wen 'Marketing?'</h3>
        <p className="text-gray-300 mb-2">The Ergo Foundation takes a principled approach to marketing and promotion, focusing on empowering community-driven initiatives and fostering organic growth. For ethical and legal reasons, the Foundation does not directly control outward marketing efforts. Instead, it aims to support and enable community-driven innovation through initiatives like the Ecosystem Grant Framework and donations to community-led projects like the Sigmanauts.</p>
        <p className="text-gray-300 mb-2">Network effects have been a significant driver of value creation in the tech industry, accounting for approximately 70% of value creation over the past 23 years. For a grassroots, third-generation blockchain like Ergo, this figure is likely even higher. While the Ergo Foundation strives to lay the foundations and help ignite community outreach and compounding growth, the ultimate promotion and adoption of Ergo rests principally on the shoulders of the community. The Foundation's role is to empower and support the community's efforts, fostering a self-sustaining and vibrant ecosystem. (Get Involved!)</p>
        <p className="text-gray-300 mb-2">The EF does not commonly pay for influencers or ad campaigns and does its best to restrict frivolous spending, which is deemed not cost-effective (i.e., airdrops, giveaways). This approach reflects the Foundation's commitment to responsible and sustainable growth, focusing on building a strong foundation and fostering a vibrant community rather than relying on short-term marketing tactics.</p>
        <p className="text-gray-300 mb-2">The outreach department highlights projects building in the ecosystem. However, these initiatives do not constitute an endorsement from the Ergo Foundation. The Foundation will always use best practices to vet projects and ensure that there is no risk for potential users. Still, in the early stages of development, it is often unknowable if anything of substance will ultimately be produced. This cautious approach aims to protect users and maintain the integrity of the Ergo ecosystem.</p>
      </div>
      {/* Development */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Development</h3>
        <p className="text-gray-300 mb-2">The Ergo Foundation's relationship with development is primarily focused on areas where there is a demand not met by the community. This role is expected to diminish over time as the community grows and takes on more development responsibilities. The Foundation recognizes the importance of fostering a self-sustaining and community-driven ecosystem, where the community plays an increasingly prominent role in driving development efforts.</p>
        <p className="text-gray-300 mb-2">Some Ergo Foundation members also hold developer positions, although their development activities are separate from their foundation involvement. For transparency, these roles are listed below:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Morphic manages JVM-related developers (Wallet devs, Scala devs, etc.) and the sigmastate-interpreter. (salaried)</li>
          <li>Mark Glasgow manages this documentation and various other developer-adjacent tasks. (salaried)</li>
          <li>Mohammad Hasan Samadani (mhs_sam) manages a team of graduates and PhD students who have produced Ergo Raffle, ErgoWell, Minotaur-wallet, and Rosen Bridge. (rewarded until April 2024 - now working on a volunteer basis)</li>
          <li>Fleet-sdk is managed by Alison Robson (anon_br). (salaried)</li>
        </ul>
        <p className="text-gray-300 mb-2">Additionally, outwith the EF members, we fund a few roles in development.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Dmitry Usov manages the Ergo website and works on various other projects such as the DexyGold front-end. (salaried)</li>
          <li>The rest of the funds spent on development go towards bounties on the repositories given below</li>
        </ul>
        <p className="text-gray-300 mb-2">The Ergo Foundation also pays for the hosting and bandwidth costs for several pieces of infrastructure such as the website and explorer. This support ensures the availability and reliability of critical resources for the Ergo ecosystem.</p>
      </div>
      {/* Code Repositories Supported by the Ergo Foundation */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Code Repositories Supported by the Ergo Foundation</h3>
        <p className="text-gray-300 mb-2">This section is a draft and still open for discussion from the community.</p>
        <p className="text-gray-300 mb-2">The Ergo Foundation DAO LLC provides funding for the development, evolution, and maintenance of various software repositories. There are two levels of funding:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Development Funding:</b> Involves funding for research, development, maintenance, and bug fixing.</li>
          <li><b>Maintenance Funding:</b> Involves only bug fixing and minor issue resolution to support existing applications. Repositories in this category are considered deprecated. While being part of the core ecosystem, they will receive maintenance support for existing applications. Developers are encouraged to migrate and discouraged from relying on these software.</li>
        </ul>
      </div>
      {/* Development Funding */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Development Funding</h3>
        <p className="text-gray-300 mb-2">The repositories in this section are the main focus of funding support by the Ergo Foundation. They are part of the development roadmap for the core ecosystem. Developers are encouraged to rely on these software and join development efforts.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Ergo reference client</li>
          <li>Sigma</li>
          <li>Appkit</li>
          <li>Oracle Core</li>
          <li>Fleet</li>
          <li>Sigma-rust-mini</li>
          <li>ergoplatform.org</li>
          <li>docs.ergoplatform.org</li>
          <li>EIPs</li>
          <li>Nautilus</li>
        </ul>
      </div>
      {/* Maintenance Funding */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Maintenance Funding</h3>
        <p className="text-gray-300 mb-2">The repositories in this section are still part of the core ecosystem; however, they are no longer part of the Ergo Foundation's development roadmap. This means the Ergo Foundation will only support maintenance and critical fixes in these repositories. Funding is provided on an issue-by-issue basis, and each attached bounty is subject to approval by the Ergo Foundation (morphic, anon-br).</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Scrypto</li>
          <li>Scorex-util</li>
          <li>Debox</li>
          <li>Ergo Wallet App</li>
          <li>Explorer Frontend</li>
          <li>Explorer Backend</li>
          <li>Sigma-rust</li>
        </ul>
      </div>
      {/* Hosting */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Hosting</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>ergoplatform.org</li>
          <li>explorer.ergoplatform.com</li>
        </ul>
      </div>
      {/* Grants and Ecosystem Support */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Grants and Ecosystem Support</h3>
        <p className="text-gray-300 mb-2">The Ergo Foundation recognizes the importance of fostering a vibrant and diverse ecosystem. To support this goal, the Foundation provides grants to various projects that contribute to the growth and development of the Ergo ecosystem. These grants aim to fund innovative ideas, promote collaboration, and drive progress within the community.</p>
        <p className="text-gray-300 mb-2">Some notable grant recipients include:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Spectrum Labs:</b> Received $128,200 to support their work on developing ergodex for the Ergo ecosystem between June 2021 and January 2022.</li>
          <li><b>Rosen Bridge:</b> Awarded $272,400 for the period between May 2022 and April 2023 to fund the development of the Rosen Bridge, a cross-chain bridge connecting Ergo with other blockchain networks.</li>
        </ul>
        <p className="text-gray-300 mb-2">The Ergo Foundation remains committed to supporting promising projects and initiatives that align with its mission of fostering innovation, collaboration, and growth within the Ergo ecosystem. By providing financial assistance through grants, the Foundation aims to empower developers, researchers, and community members to explore new ideas and contribute to the overall advancement of the Ergo platform.</p>
      </div>
      {/* Code Audits */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Code Audits</h3>
        <p className="text-gray-300 mb-2">The Ergo Foundation does not review or endorse any code specifically. While code reviews are sometimes performed by Ergo Foundation members due to their expertise in this area, this does not constitute an endorsement. Users should be aware of their assumptions when interacting with experimental DeFi protocols. (See - Know Your Assumptions)</p>
        <p className="text-gray-300 mb-2">This approach reflects the Foundation's commitment to transparency and user education, acknowledging the inherent risks associated with experimental technologies and the importance of individual responsibility in the decentralized ecosystem.</p>
      </div>
      {/* Exchange Listings */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Exchange Listings</h3>
        <p className="text-gray-300 mb-2">For a detailed overview of current efforts, view the public grist.</p>
        <p className="text-gray-300 mb-2">The Ergo Foundation, as a legal entity, is primarily responsible for liaising with centralized exchanges. Ergo has been listed on several exchanges, including three Tier 1 exchanges (KuCoin, gate.io, Huobi). A Tier 1 exchange is defined as an exchange that appears in the top 10 of exchange ranking sites such as defillama.com/cexs.</p>
        <p className="text-gray-300 mb-2">Exchange discussions and details are typically confidential due to Non-Disclosure Agreements ('NDA'). However, we can share some general insights:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Listings are usually expensive.</li>
          <li>Exchanges generally do not buy liquidity or any of the native tokens or coins on the open market. Instead, a third-party Market Maker ('MM') is used, which has access to an API with a preallocated amount of ERG and USDT to create a liquid market. The MM can only buy/sell and lacks the credentials to withdraw assets.</li>
          <li>The Ergo Foundation has approached all major exchanges, and none have been rejected due to high costs.</li>
        </ul>
        <p className="text-gray-300 mb-2">If you're wondering why certain coins are listed and Ergo is not, it could be due to several reasons:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>They are a native asset on an already integrated chain (e.g., ERC20, Cosmos), which requires less effort to add and maintain.</li>
          <li>They may have venture-capitalist funding and connections, which can be leveraged for early listings.</li>
          <li>They may have a smaller public distribution than ERG and can negotiate with exchanges for a percentage of their total supply.</li>
          <li>They may be less complex than Ergo, with no native asset support, no need to worry about UTXO dust, etc.</li>
          <li>They may be older than Ergo and were listed during the last bear market.</li>
          <li>Even though they are a unique Layer-1, they may only have a wrapped asset (e.g., on BSC) listed.</li>
        </ul>
        <p className="text-gray-300 mb-2">The Ergo Foundation is committed to expanding Ergo's presence on exchanges. However, certain factors such as low volume or market cap can affect our eligibility for listing on some platforms. This is not due to a lack of effort or resources but rather the nature of the crypto market and the specific requirements of different exchanges.</p>
        <p className="text-gray-300 mb-2">We are also exploring the possibility of listing as wrapped tokens on exchanges, which could reduce barriers for high-quality tier ⅔ exchanges and help build up our access and volume. We are actively pursuing discussions with a global on-ramp to increase access for US users.</p>
        <p className="text-gray-300 mb-2">While Ergo's fundamentals are strong, the decision to list a coin often comes down to factors such as profitability and ease of integration for the exchange. However, we believe that as Ergo's DeFi ecosystem matures and volume builds up, more exchanges will recognize its value and list it.</p>
        <p className="text-gray-300 mb-2">In the meantime, we continue to prioritize development and community engagement over artificially inflating volume or engaging in questionable practices. We believe this approach will lead to sustainable growth and long-term success for Ergo.</p>
      </div>
      {/* The Ergo Foundation's Future */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">The Ergo Foundation's Future</h3>
        <p className="text-gray-300 mb-2">Please see this page for more information on the long-term goals of The Foundation.</p>
      </div>
    </div>
  );
}

function TreasuryContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-6">
        <Coins className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Ergo Foundation Treasury
          </h1>
        </div>
      </div>
      {/* Initial Allocation */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Initial Allocation</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation initially received an allocation of 4,330,776 ERG, which is equivalent to 4.43% of the total supply.</p>
        <p className="text-gray-300 mb-2">A significant portion of this Treasury has been expended for the benefit of the Ergo protocol and community. Even during periods of low ERG price, the Foundation continued to invest in order to foster and grow the Ergo ecosystem.</p>
        <p className="text-gray-300 mb-2">For more information on Ergo's emission schedule, tokenomics and allocation, visit the emission section.</p>
      </div>
      {/* Ergo First-Year Token */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Ergo First-Year Token</h2>
        <p className="text-gray-300 mb-2">Additionally, the Treasury exchanged 1,782,615 ERG for EFYT, a token issued on the Waves Platform in 2017 to build an early community through airdrops and raise funds before the Ergo mainnet launch.</p>
        <p className="text-gray-300 mb-2">After subtracting the 1,782,615 ERG exchanged for EFYT, the Ergo Foundation was left with 2,548,161 ERG, which is approximately 2.6% of the total supply.</p>
      </div>
      {/* Current Holdings */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Current Holdings (March 2025)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300 border border-orange-400/20 rounded-xl">
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
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Liquid vs Illiquid Funds</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation's treasury consists of both liquid and illiquid assets, providing a diverse portfolio to support the growth and development of the Ergo ecosystem. The liquid assets, such as ERG and BTC, can be readily utilized for various purposes, while the illiquid assets, like Gluon, SPF, and RSN tokens, are held strategically to avoid exerting downward pressure on these early-stage projects.</p>
        <p className="text-gray-300 mb-2">As these projects mature and their tokens become more liquid, the Ergo Foundation will have the opportunity to leverage these assets to further augment its expenditure capabilities and support the Ergo ecosystem more effectively.</p>
      </div>
      {/* Wallets */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Wallets</h2>
        <p className="text-gray-300 mb-2">You can find the Ergo Foundation treasury and current balance on-chain at the following locations:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>EF Multi-sig for ERG + Tokens<br /><span className="text-gray-400 text-sm">Hot Wallet managed by the Treasurer when sending payments.</span></li>
          <li>EF BTC Multi-sig</li>
        </ul>
      </div>
      {/* Historic Spending */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Historic Spending</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation has spent the majority of the Treasury for the benefit of the protocol and community. Funds were even spent when the ERG price was low, as it was necessary to bootstrap the thriving community Ergo now boasts.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300 border border-cyan-400/20 rounded-xl">
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
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Roles</h2>
        <p className="text-gray-300 mb-2">More information on each of these roles can be seen on this page.</p>
      </div>
      {/* The Ergo Foundation's Future */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">The Ergo Foundation's Future</h2>
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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-6">
        <Vote className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Votes
          </h1>
        </div>
      </div>
      {/* Votings */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Votings</h2>
        <p className="text-gray-300 mb-2">The Ergo Foundation members and officers discuss proposals before putting them to a formal vote on the ergoforum, passed with a majority of voting members.</p>
        <p className="text-gray-300 mb-2">Before voting on spending treasury funds, we will approach the Good Whale Fund, DarkFund0, or suggest creating a Raffle if appropriate.</p>
        <p className="text-gray-300 mb-2">Foundation votes this year are usually related to our internal structures, exchanges, market-makers, banks, and grant requests.</p>
      </div>
      {/* Accordion by year */}
      <div className="space-y-4">
        {years.map(({ year, color, rows }) => (
          <div key={year} className={`rounded-xl border ${color === 'orange' ? 'border-orange-400/20 bg-orange-400/10' : 'border-cyan-400/20 bg-cyan-400/10'}`}>
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-xl font-bold focus:outline-none"
              onClick={() => toggleYear(year)}
            >
              <span>{year}</span>
              <span className={`transition-transform ${openYears.includes(year) ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {openYears.includes(year) && (
              <div className="overflow-x-auto px-4 pb-4">
                <table className="min-w-full text-sm text-gray-300 border rounded-xl">
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
                          <td key={j} className="px-4 py-2">{cell}</td>
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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-6">
        <Calendar className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            The Ergo Foundation's Future
          </h1>
        </div>
      </div>
      {/* What's been done so far? */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">What's been done so far?</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>For an overview of what has been achieved since launch, please see this page</li>
          <li>For a comprehensive overview of the scope of the Ergo Foundation see this page</li>
        </ul>
      </div>
      {/* Initial Role of the Ergo Foundation */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Initial Role of the Ergo Foundation</h2>
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
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">The Future</h2>
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
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">The Sigmanauts Program</h2>
        <p className="text-gray-300 mb-2">The Sigmanauts Program is a grassroots initiative aimed at empowering individuals to take ownership of Ergo and shape its future. The program was launched to build the required structures to pass the baton to the community, enabling individuals to take ownership and contribute to Ergo's development.</p>
      </div>
    </div>
  );
}

export default function ErgoFoundationPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors border
              ${activeTab === tab.key
                ? "bg-orange-400 text-white border-orange-400"
                : "bg-neutral-900 text-gray-300 border-neutral-700 hover:bg-orange-300 hover:text-white"}`}
          >
            {tab.key === "overview" && <Users className="w-4 h-4" />}
            {tab.key === "scope" && <Shield className="w-4 h-4" />}
            {tab.key === "treasury" && <Coins className="w-4 h-4" />}
            {tab.key === "votes" && <Vote className="w-4 h-4" />}
            {tab.key === "future" && <Calendar className="w-4 h-4" />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "overview" && <OverviewContent />}
      {activeTab === "scope" && <ScopeContent />}
      {activeTab === "treasury" && <TreasuryContent />}
      {activeTab === "votes" && <VotesContent />}
      {activeTab === "future" && <FutureContent />}
    </>
  );
} 