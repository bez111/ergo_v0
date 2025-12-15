"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function DeCoPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        DeCo (Decentralised Collaboration)
      </h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/libraries"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        DeCo, or 'Decentralised Collaboration', is an organic grassroots initiative that arose to fill the gap in developer resources and education for the Ergo ecosystem. It aims to provide a comprehensive learning experience for newcomers to immerse themselves in the technical aspects of Ergo through a structured curriculum and community engagement.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Overview</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        DeCo operates courses in a semester format, similar to a university, to facilitate a structured learning experience. The courses cover various topics related to blockchain technology, the Ergo platform, and developing decentralized applications (dApps) on Ergo. DeCo is working on a comprehensive <a href="https://deco-education.github.io/deco-docs/docs/intro" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">workbook-format</a> to serve as an educational resource.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Courses and Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li>
          <b>Introduction, Layman, and ErgoScript Courses:</b> Available on the <a href="https://www.youtube.com/channel/UCyOIxD7YSHN5QwLIulOWrew/playlists" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">DeCo Education YouTube channel</a>.
        </li>
        <li>
          <b>The ErgoScript Developer Course:</b> A comprehensive course on developing with ErgoScript, available on <a href="https://github.com/DeCo-Education/ErgoScript-Developer-Course" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>.
        </li>
        <li>
          <b>Discord Server:</b> A hub for community engagement, support, and discussions, accessible via <a href="https://discord.gg/PQPyFbKZ9z" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">this link</a>.
        </li>
        <li>
          <b>Blog Post:</b> "DeCo and the Power of Community Initiatives on Ergo" provides insights into the initiative and its impact on the Ergo ecosystem (<a href="https://ergoplatform.org/en/blog/2022-04-21-deco-and-the-power-of-community-initiatives-on-ergo/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">link</a>).
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Course Curriculum</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        DeCo's course curriculum is designed to provide a comprehensive understanding of blockchain technology, the Ergo platform, and the development of decentralized applications. The curriculum is structured into the following modules:
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">1. Crash Course on Blockchain and Ergo</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        This module serves as an introduction to blockchain technology and the Ergo platform, covering the following topics:
        <ul className="list-disc pl-6 mt-2">
          <li><b>What is Blockchain?</b>: Understanding the concept of blockchain, its characteristics, and the types of data stored on different blockchains.</li>
          <li><b>Components of Blockchain:</b> Exploring the key components of a blockchain, including blocks, addresses, boxes, smart contracts, and transactions.</li>
          <li><b>Ergo Blockchain:</b> An overview of the Ergo blockchain, its unique features, and advantages, such as the advanced scripting language (ErgoScript), energy-efficient consensus algorithm (Autolykos), and support for non-fungible tokens (NFTs).</li>
          <li><b>Advantages of Ergo:</b> Highlighting Ergo's strengths, including its advanced scripting language, efficiency, flexibility, security focus, and active community.</li>
          <li><b>Use Cases of Ergo:</b> Exploring various use cases of Ergo, such as decentralized finance (DeFi), digital collectibles (NFTs), supply chain management, and gaming/gambling applications.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">2. Community and Engagement</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        This module focuses on understanding the DeCo community and how to engage and contribute effectively:
        <ul className="list-disc pl-6 mt-2">
          <li><b>Understanding the DeCo Community:</b> Exploring the different roles within the DeCo community, such as students, cabin leaders, contributors, and core members.</li>
          <li><b>Becoming a Cabin Leader:</b> Learning about the responsibilities, skills needed, and steps to become a successful cabin leader.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">3. Technical Guides and Practical Skills</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        This module delves into the technical aspects of developing on the Ergo platform:
        <ul className="list-disc pl-6 mt-2">
          <li><b>eUTXO Model and NFTs:</b> Understanding the extended UTXO (eUTXO) model, designing NFT boxes, and working with proxy contracts.</li>
          <li><b>ErgoScript and Smart Contract Development:</b> An introduction to ErgoScript, the process of writing and deploying smart contracts on Ergo.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">4. Advanced Topics</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        This module covers more advanced topics in Ergo development:
        <ul className="list-disc pl-6 mt-2">
          <li><b>Multi-Stage Transactions and Complex Contracts:</b> Designing multi-stage transactions, understanding off-chain and on-chain components, and working with complex contracts.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">5. Design Principles and Security</h3>
      <div className="text-gray-300 mb-8 max-w-2xl">
        This module focuses on best practices and security considerations in blockchain development:
        <ul className="list-disc pl-6 mt-2">
          <li><b>Blockchain Design Principles:</b> Exploring scalability, security basics, and modular guard scripts.</li>
        </ul>
        Throughout the curriculum, DeCo emphasizes practical assignments, projects, and community discussions to reinforce the learned concepts and foster a collaborative learning environment.
      </div>
    </>
  );
} 