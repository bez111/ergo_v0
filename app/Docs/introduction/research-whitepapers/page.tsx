import React from "react";
import { BookOpen, FileText, Video, Star, ExternalLink, Quote, Users } from "lucide-react";
import Link from "next/link";

const overviews = [
  { title: "Whitepaper I: Ergo: The Resilient Platform For Contractual Money", url: "#" },
  { title: "Whitepaper II: ErgoScript, a Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs", url: "#" },
  { title: "Teaser: The Ergo Platform Project Overview", url: "#" },
  { title: "Whitepaper III: Advanced ErgoScript Tutorial", url: "#" },
];
const foundational = [
  { title: "On Contractual Money", url: "#" },
  { title: "Improving authenticated dynamic dictionaries, with applications to cryptocurrencies", url: "#" },
  { title: "Self-reproducing Coins as Universal Turing Machine", url: "#" },
  { title: "Multi-mode Cryptocurrency Systems", url: "#" },
  { title: "Multi-stage Contracts in the UTXO Model", url: "#" },
  { title: "EDRAX: A Cryptocurrency with Stateless Transaction Validation", url: "#" },
  { title: "Revisiting Difficulty Control for Blockchain Systems", url: "#" },
  { title: "Storage Rent: A Systematic Approach To Cryptocurrency Fees", url: "#" },
  { title: "ZeroJoin: Combining ZeroCoin and CoinJoin", url: "#" },
  { title: "Soft Power: Upgrading Chain Macroeconomic Policy Through Soft Forks", url: "#" },
];
const postMainnet = [
  { title: "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts", url: "#" },
  { title: "Ergo Hackathon: Crowdfunded Smart Contract Pools Research and Conceptualization", url: "#" },
  { title: "Succinct, Non-Interactive Share Proofs (See Lithos Protocol)", url: "#" },
  { title: "Dexy (See Dexy)", url: "#" },
  { title: "Sigmajoin", url: "#" },
  { title: "ChainCash", url: "#" },
  { title: "KYA - A Treatise On Assumptions in Cryptocurrencies and Defi", url: "#" },
];
const videos = [
  { title: "Blockchain at Berkeley CESC2017 - Dmitry Meshkov - On Space-Scare Economy - October 17, 2017.", url: "#" },
  { title: "Master Workshop at Amsterdam - Vasily Kharin - Autolykos: Practical Non-Outsourceable Proof-of-Work Protocol - November 17, 2018.", url: "#" },
  { title: "Binary District Journal - Alexander Chepurnoy - Blockchain Research and Adoption – Interview - November 10, 2017.", url: "#" },
  { title: "IOHK Research - Alexander Chepurnoy - Future technology - July 22, 2016.", url: "#" },
  { title: "IOHK & Shanghai Jiao Tong University – Alexander Chepurnoy - Interview - March 6, 2017.", url: "#" },
  { title: "IOHK Interview on Scorex – Charles Hoskinson, Alexander Chepurnoy - A Modular Toolbox for Cryptocurrency Research & Blockchain Technologies - August 15, 2016.", url: "#" },
  { title: "CTCrypt 2017 – Alexander Chepurnoy - Challenges in Blockchain Research - August 15, 2016.", url: "#" },
  { title: "SF Scala – Dmitry Meshkov, Interview - October 4, 2017.", url: "#" },
  { title: "NXT Cryptocurrency Explained - By Alexander Chepurnoy & Bas Wisselink at Bitcoin Wednesday Amsterdam - January 7, 2015.", url: "#" },
];
const meetups = [
  { title: "Ergo Platform Presentation, Seoul - September 2019.", url: "#" },
  { title: "Ergo Platform Presentation, Hong Kong (at Genesis Block) - September 2019.", url: "#" },
  { title: "Ergo Platform Presentation, Ho Chi Minh - September 2019.", url: "#" },
  { title: "Ergo Platform Presentation, Shanghai - September 2019.", url: "#" },
  { title: "Ergo Platform Presentation, Hong Kong (at Genesis Block) - January 2019.", url: "#" },
  { title: "Ergo Platform Presentation, Sanya, Hainan - January 2019. 2019年区块链技术大会 / 2019 International Blockchain Technology Conference (IBTC2019).", url: "#" },
];

function ResourceCards({ items, icon }: { items: { title: string; url: string }[]; icon: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-700 rounded-xl p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
        >
          {icon}
          <span className="font-semibold text-orange-300 hover:underline text-base">{item.title}</span>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </a>
      ))}
    </div>
  );
}

export default function ResearchWhitepapersPage() {
  return (
    <div className="px-4 w-full">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-orange-400" /> Research & White Papers
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo's approach is grounded in peer-reviewed research and robust, well-tested solutions. Most innovations are formalized in papers and widely discussed in the community.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Explore the core documents and foundational research that underpin the Ergo protocol.
        </p>
      </div>
      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Ergo's protocol is built on a foundation of open research, formal methods, and real-world peer review."
        </blockquote>
      </div>
      {/* Overviews Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-orange-400" /> Overviews
        </h2>
        <ResourceCards items={overviews} icon={<FileText className="w-5 h-5 text-orange-400" />} />
      </div>
      {/* Foundational Papers Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-blue-400" /> Foundational Papers
        </h2>
        <ResourceCards items={foundational} icon={<Star className="w-5 h-5 text-blue-400" />} />
      </div>
      {/* Post-Mainnet Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" /> Post-Mainnet
        </h2>
        <ResourceCards items={postMainnet} icon={<FileText className="w-5 h-5 text-cyan-400" />} />
      </div>
      {/* Video Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-orange-400" /> Notable Youtube Appearances
        </h2>
        <ResourceCards items={videos} icon={<Video className="w-5 h-5 text-orange-400" />} />
      </div>
      {/* Meetups Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-400" /> Meetups and Presentations
        </h2>
        <ResourceCards items={meetups} icon={<Users className="w-5 h-5 text-blue-400" />} />
      </div>
    </div>
  );
}
