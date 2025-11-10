import React from "react";
import { Shield, FileText, Lock, Cpu, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";

export default function AuditPage() {
  return (
    <div className="px-4 max-w-3xl mx-auto pb-24">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Security Audit
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo has successfully passed a security audit of its most critical code components. The audit was performed by Jean-Philippe Aumasson (<a href="https://aumasson.jp/" target="_blank" rel="noopener noreferrer" className="underline text-orange-300 hover:text-orange-200">veorq</a>), a renowned cryptographer.
        </p>
        <p className="text-lg text-gray-300 mb-2">
          The detailed report is below. No critical issues were found. Key comments and recommendations are summarized for transparency.
        </p>
      </div>

      {/* Summary Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-400" /> Summary
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>The audit covered: Sigma protocol proofs, wallet secret storage, and Proof-of-Work validation.</li>
          <li>No critical vulnerabilities were found.</li>
          <li>Recommendations were made for password policies and parameter validation.</li>
        </ul>
        <div className="text-sm text-gray-400 mt-4">
          <span className="italic">Ergo security assessment by Jean-Philippe Aumasson on 07/Dec/19</span>
        </div>
      </div>

      {/* Sigma Protocol Proofs Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" /> Sigma Protocol Proofs
        </h2>
        <p className="text-gray-300 mb-4">
          The Ergo protocol relies on ErgoScript, a scripting language supporting sigma-statements, which can be proven and verified through non-interactive proofs of knowledge. The audit reviewed the implementation for safe encoding, serialization, and correct verification logic.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Reviewed code from <span className="text-orange-300">SigSerializer</span>, <span className="text-orange-300">Interpreter</span>, and <span className="text-orange-300">ProverInterpreter</span>.</li>
          <li>No security issues identified in proof creation or verification.</li>
          <li>Scala eliminates certain bug classes, but care is still needed for unhandled errors.</li>
        </ul>
      </div>

      {/* Wallet Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-orange-400" /> Wallet
        </h2>
        <p className="text-gray-300 mb-4">
          The audit reviewed wallet secret storage and recovery, focusing on entropy generation, BIP39 mnemonic, and AES-GCM encryption. Two main risks were identified:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><span className="text-orange-300">Password length:</span> No enforced minimum. Recommendation: require at least 16 characters for strong security.</li>
          <li><span className="text-orange-300">Memory safety:</span> Secret values may remain in memory after execution due to garbage collection. This is a limitation of Scala and most modern languages.</li>
        </ul>
        <div className="text-sm text-gray-400 mt-2">
          <AlertTriangle className="inline w-4 h-4 text-yellow-400 mr-1" />
          <span>Protect your wallet machine from malware and viruses. Side-channel attacks are not mitigated at the software level.</span>
        </div>
      </div>

      {/* PoW Validation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" /> Proof-of-Work Validation
        </h2>
        <p className="text-gray-300 mb-4">
          The audit reviewed the latest Autolykos PoW verification logic, ensuring it matches the protocol specification and is properly integrated into block header validation.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Stricter validation of <span className="text-orange-300">k</span> and <span className="text-orange-300">n</span> parameters recommended.</li>
          <li>Assert that <span className="text-orange-300">k</span> and <span className="text-orange-300">n</span> are positive values.</li>
          <li>Changing these parameters requires a new network or protocol fork.</li>
        </ul>
      </div>

      {/* Report Link */}
      <div className="flex items-center gap-2 mt-8">
        <ExternalLink className="w-5 h-5 text-cyan-400" />
        <a
          href="https://github.com/ergoplatform/ergo/blob/master/docs/security/security_audit_2019.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline hover:text-cyan-200 font-semibold"
        >
          View Full Audit Report (PDF)
        </a>
      </div>
    </div>
  );
} 