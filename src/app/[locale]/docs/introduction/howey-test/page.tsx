"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { AlertTriangle, FileText, CheckCircle, Users, Lock } from "lucide-react";

export default function HoweyTestPage() {
  return (
    <div className="px-4 max-w-3xl mx-auto pb-24">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          The Howey Test and Ergo
        </h1>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-yellow-400/10 border border-yellow-500 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          <span className="font-bold text-yellow-500">Disclaimer</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Please note, this page is solely an opinion to answer some questions within the community based on the established framework of the Howey Test and does not constitute investment or legal advice.
        </p>
      </div>

      {/* What is the Howey Test */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" /> What is the Howey Test?
        </h2>
        <p className="text-gray-300 mb-4">
          The Howey Test is a legal framework used to determine whether a financial instrument, such as the ERG token, qualifies as an "investment contract" under US securities law. The test, named after the Supreme Court case SEC v. Howey, establishes the criteria for determining whether a transaction constitutes an investment contract.
        </p>
        <p className="text-gray-300 mb-2">
          The Howey Test has four criteria that must all be met for an instrument to be considered an investment contract:
        </p>
        <ul className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Investment of money</li>
          <li>Common enterprise</li>
          <li>Reasonable expectation of profits</li>
          <li>Entrepreneurial or managerial efforts of others</li>
        </ul>
      </div>

      {/* Application to ERG Tokens */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-400" /> Application to ERG Tokens
        </h2>
        <p className="text-gray-300 mb-4">
          ERG tokens are regularly traded on cryptocurrency exchanges and can be mined by purchasing hardware and paying for electricity. This suggests that the first and second criteria of the Howey Test may be met.
        </p>
        <p className="text-gray-300 mb-4">
          However, the promotion of ERG tokens within Ergo is focused on improving security and functionality through proof-of-work mining and the advancement of the eUTXO system, rather than as an investment with a reasonable expectation of profits. Furthermore, the original Platform and Foundation developers have not taken steps to increase the market value of ERG tokens or sell them to investors as an investment. Therefore, it is likely that the third criterion of the Howey Test is not met.
        </p>
        <p className="text-gray-300 mb-4">
          The fourth criterion, entrepreneurial or managerial efforts of others, requires that the efforts of those outside the investor are essential to the success or failure of the enterprise. While the Ergo Foundation plays a significant role in the development and functionality of the Platform, the ERG tokens ecosystem is becoming more decentralized and independent of the Foundation or any other centralized entity. Ergo is an open-source and permissionless economy, allowing anyone to build applications or launch tokens without the permission or assistance of the Foundation.
        </p>
        <p className="text-gray-300 mb-4">
          This decentralization will increase over time as more third-party developers bring value to the Platform. The Foundation is community-led and has made great efforts to inform and encourage discussion with the community. If the foundation were to vanish, the development would not need to stop, and miners could extract and spend all of the Foundation's funds through storage rent. Therefore, it is difficult to argue that the success of the Platform and the value of ERG tokens necessarily rely on the Foundation or its members. Overall, the value of ERG tokens is becoming more market-driven and independent of the Foundation, which suggests that the fourth criterion of the Howey Test is not met.
        </p>
      </div>

      {/* Conclusion Section */}
      <div className="bg-green-400/10 border border-green-500 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="font-bold text-green-500">Conclusion</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          As a result, ERG tokens should not be considered securities for federal securities law purposes.
        </p>
      </div>
    </div>
  );
} 