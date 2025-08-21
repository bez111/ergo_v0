import React from "react";
import { BookOpen, FileText, Video, Star, Quote, Users } from "lucide-react";
import Link from "next/link";

const overviews = [
  { title: "Whitepaper I: Ergo: The Resilient Platform For Contractual Money", url: "https://storage.googleapis.com/ergo-cms-media/docs/whitepaper.pdf" },
  { title: "Whitepaper II: ErgoScript, a Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs", url: "https://storage.googleapis.com/ergo-cms-media/docs/ErgoScript.pdf" },
  { title: "Teaser: The Ergo Platform Project Overview", url: "https://storage.googleapis.com/ergo-cms-media/docs/teaser.pdf" },
  { title: "Whitepaper III: Advanced ErgoScript Tutorial", url: "https://storage.googleapis.com/ergo-cms-media/docs/AdvancedErgoScriptTutorial.pdf" },
];
const foundational = [
  { title: "On Contractual Money", url: "https://pdfs.semanticscholar.org/d51b/51fd136b1b74ece7caa6a7cb9c8f74b1b829.pdf" },
  { title: "Improving authenticated dynamic dictionaries, with applications to cryptocurrencies", url: "https://eprint.iacr.org/2016/994.pdf" },
  { title: "Self-reproducing Coins as Universal Turing Machine", url: "https://arxiv.org/pdf/1806.10116" },
  { title: "Multi-mode Cryptocurrency Systems", url: "https://eprint.iacr.org/2018/129.pdf" },
  { title: "Multi-stage Contracts in the UTXO Model", url: "https://ergoplatform.org/docs/paper_26.pdf" },
  { title: "EDRAX: A Cryptocurrency with Stateless Transaction Validation", url: "https://eprint.iacr.org/2018/968.pdf" },
  { title: "Revisiting Difficulty Control for Blockchain Systems", url: "https://eprint.iacr.org/2017/731.pdf" },
  { title: "Storage Rent: A Systematic Approach To Cryptocurrency Fees", url: "/docs/introduction/storage-rent" },
  { title: "ZeroJoin: Combining ZeroCoin and CoinJoin", url: "https://eprint.iacr.org/2020/560.pdf" },
  { title: "Soft Power: Upgrading Chain Macroeconomic Policy Through Soft Forks", url: "https://eprint.iacr.org/2021/577.pdf" },
];
const postMainnet = [
  { title: "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts", url: "https://eprint.iacr.org/2020/044.pdf" },
  { title: "Ergo Hackathon: Crowdfunded Smart Contract Pools Research and Conceptualization", url: "https://eprint.iacr.org/2021/846" },
  { title: "Succinct, Non-Interactive Share Proofs (See Lithos Protocol)", url: "/docs/miners/Miner-Tooling/lithos" },
  { title: "Dexy (See Dexy)", url: "/docs/ecosystem/financial/monetary-systems/dexygold" },
  { title: "Sigmajoin", url: "https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/mixer/doc/main.pdf" },
  { title: "ChainCash", url: "https://github.com/kushti/chaincash/blob/master/paper/chaincash.pdf" },
  { title: "KYA - A Treatise On Assumptions in Cryptocurrencies and Defi", url: "https://github.com/kushti/kya/blob/master/kya.pdf" },
];
const videos = [
  { title: "Blockchain at Berkeley CESC2017 - Dmitry Meshkov - On Space-Scare Economy - October 17, 2017.", url: "https://youtu.be/gBy-pu1kzdQ" },
  { title: "Master Workshop at Amsterdam - Vasily Kharin - Autolykos: Practical Non-Outsourceable Proof-of-Work Protocol - November 17, 2018.", url: "https://youtu.be/rApDlDbXy84" },
  { title: "Binary District Journal - Alexander Chepurnoy - Blockchain Research and Adoption – Interview - November 10, 2017.", url: "https://youtu.be/fY2yTItDgsU" },
  { title: "IOHK Research - Alexander Chepurnoy - Future technology - July 22, 2016.", url: "https://youtu.be/Pxu4gpuVnQE" },
  { title: "IOHK & Shanghai Jiao Tong University – Alexander Chepurnoy - Interview - March 6, 2017.", url: "https://youtu.be/B7BdOfzURiI" },
  { title: "IOHK Interview on Scorex – Charles Hoskinson, Alexander Chepurnoy - A Modular Toolbox for Cryptocurrency Research & Blockchain Technologies - August 15, 2016.", url: "https://youtu.be/YqvMUY4XAKs" },
  { title: "CTCrypt 2017 – Alexander Chepurnoy - Challenges in Blockchain Research - August 15, 2016.", url: "https://youtu.be/w6K3k-s7Oow" },
  { title: "SF Scala – Dmitry Meshkov, Interview - October 4, 2017.", url: "https://youtu.be/GehIWZrulKo" },
  { title: "NXT Cryptocurrency Explained - By Alexander Chepurnoy & Bas Wisselink at Bitcoin Wednesday Amsterdam - January 7, 2015.", url: "https://youtu.be/QMSA5W7jx1E?t=610" },
];
const meetups = [
  { title: "Ergo Platform Presentation, Seoul - September 2019.", url: "https://www.youtube.com/watch?v=R4ieaI6pn7M" },
  { title: "Ergo Platform Presentation, Hong Kong (at Genesis Block) - September 2019.", url: "https://www.youtube.com/watch?v=nK2ZBsLCGIU&t" },
  { title: "Ergo Platform Presentation, Ho Chi Minh - September 2019.", url: "https://www.youtube.com/watch?v=1SrzybpblMM&t" },
  { title: "Ergo Platform Presentation, Shanghai - September 2019.", url: "https://www.yizhibo.com/l/gvz0R4fXK6aOgMOy.html" },
  { title: "Ergo Platform Presentation, Hong Kong (at Genesis Block) - January 2019.", url: "https://www.youtube.com/watch?v=nrF-r_sylsU&t" },
  { title: "Ergo Platform Presentation, Sanya, Hainan - January 2019. 2019年区块链技术大会 / 2019 International Blockchain Technology Conference (IBTC2019).", url: "https://www.youtube.com/watch?v=Ae8VDOo1YfM" },
];

function ResourceCards({ items }: { items: { title: string; url: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {items.map((item) => (
        item.url.startsWith("/docs") ? (
          <Link
            key={item.title}
            href={item.url}
            className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-700 rounded-xl p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <span className="font-semibold text-orange-300 hover:underline text-base">{item.title}</span>
          </Link>
        ) : (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-700 rounded-xl p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <span className="font-semibold text-orange-300 hover:underline text-base">{item.title}</span>
          </a>
        )
      ))}
    </div>
  );
}

export default function ResearchWhitepapersPage() {
  return (
    <div className="px-4 w-full">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Research & White Papers
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
        <ResourceCards items={overviews} />
      </div>
      {/* Foundational Papers Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-orange-400" /> Foundational Papers
        </h2>
        <ResourceCards items={foundational} />
      </div>
      {/* Post-Mainnet Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-orange-400" /> Post-Mainnet
        </h2>
        <ResourceCards items={postMainnet} />
      </div>
      {/* Video Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-orange-400" /> Notable Youtube Appearances
        </h2>
        <ResourceCards items={videos} />
      </div>
      {/* Meetups Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-400" /> Meetups and Presentations
        </h2>
        <ResourceCards items={meetups} />
      </div>
    </div>
  );
}
