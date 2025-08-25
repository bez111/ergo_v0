import React from "react";

export default function DevelopmentStandardsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Development Standards & Best Practices</h1>
      <p className="mb-4 text-gray-300">Build projects that last — robust, open, and maintainable.</p>
      <hr className="border-neutral-700 mb-6" />
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Key Standards</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-8">
        <li><b>Harden Server & App Configurations:</b><br />Always follow secure defaults for your stack (disable unused ports, set secure headers, use HTTPS, enable rate limiting, avoid default passwords).</li>
        <li><b>Dependency Management:</b><br />Keep all dependencies up to date. Use automated tools to check for known vulnerabilities during builds (<a href="https://snyk.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Snyk</a>, <a href="https://owasp.org/www-project-dependency-check/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">DependencyCheck</a>).</li>
        <li><b>No Secrets in Code:</b><br />Never commit private keys, API secrets, or passwords to your repositories. Use a secrets scanner in CI/CD (e.g., <a href="https://semgrep.dev/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Semgrep</a>).</li>
        <li><b>Analytics Integration:</b><br />Integrate with <a href="https://defillama.com/chain/Ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">DeFiLlama</a>, <a href="https://ergo.watch" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">ergo.watch</a>, or <a href="https://artemis.xyz" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Artemis</a> to monitor your on-chain metrics and show your project's impact.</li>
        <li><b>Open Source:</b><br />Publish your code in public repositories with a clear README, license, and contribution guidelines.</li>
        <li><b>Ecosystem Integration:</b><br />Register your project with Ergo ecosystem aggregators such as Ergcube, Sigmaverse, and in the main ecosystem documentation for discoverability.</li>
      </ul>
      <hr className="border-neutral-700 mb-6" />
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Recommended Tools</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-8">
        <li><a href="https://snyk.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Snyk</a> or <a href="https://owasp.org/www-project-dependency-check/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">OWASP DependencyCheck</a> — Dependency audits</li>
        <li><a href="https://semgrep.dev/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Semgrep</a> — Secrets scanning</li>
        <li><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">GitHub Actions</a> / CI for automated checks</li>
        <li><a href="https://bitwarden.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Bitwarden</a> or <a href="https://1password.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">1Password</a> — Password managers</li>
      </ul>
      <hr className="border-neutral-700 mb-6" />
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
        <li><a href="./Analytics" className="text-cyan-400 underline">Analytics Integration Guide</a></li>
        <li><a href="#" className="text-cyan-400 underline">Add your project to the ecosystem</a></li>
        <li><a href="./Identity-Security" className="text-cyan-400 underline">Security & Identity Standards</a></li>
      </ul>
    </>
  );
} 