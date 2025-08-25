import React from "react";

export default function AnalyticsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Analytics</h1>
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">On-chain Analytics</h2>
      <p className="mb-4 text-gray-300">
        For on-chain metrics such as P2PK count, you can refer to {" "}
        <a href="https://ergo.watch/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">ergo.watch</a>.
      </p>
      <h3 className="text-xl font-semibold text-orange-300 mb-2 mt-6">DeFiLlama Integration</h3>
      <p className="mb-4 text-gray-300">
        If you wish to be included on {" "}
        <a href="https://defillama.com/chain/Ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">defillama.com/chain/Ergo</a>, it is necessary to create an adaptor.
      </p>
      <h3 className="text-xl font-semibold text-orange-300 mb-2 mt-6">Developer Contributions</h3>
      <p className="mb-4 text-gray-300">
        To have your contributions recognized in the yearly report by {" "}
        <a href="https://www.developerreport.com/ecosystems/ergo/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">developerreport.com</a> and the weekly-updated {" "}
        <a href="https://app.artemis.xyz/developer-activity?ecosystemValue=Ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Artemis</a> dashboard, please add your GitHub organization or repositories to {" "}
        <a href="https://github.com/electric-capital/crypto-ecosystems/blob/master/data/ecosystems/e/ergo.toml" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">this repository</a>.
      </p>
      <h3 className="text-xl font-semibold text-orange-300 mb-2 mt-6">Developer Statistics</h3>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li>Total community developers: <b>350</b></li>
        <li>Active contributors: <b>100</b></li>
        <li>Monthly Active Developers: <b>58+</b></li>
      </ul>
      <h3 className="text-xl font-semibold text-orange-300 mb-2 mt-6">dApps/Projects Statistics</h3>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li>Sub-ecosystems: <b>~40+</b></li>
        <li>Tradable tokens: Information can be found {" "}
          <a href="https://sigmaverse.io/all-projects" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">here</a>
        </li>
        <li>dApps in development: A dozen. A community roadmap is available {" "}
          <a href="https://docs.google.com/spreadsheets/d/1d8bzPkZ__Ta5aFc388C7xkLiEaI-95IQcbgSRg8_wkw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">here</a>.
        </li>
      </ul>
    </>
  );
} 