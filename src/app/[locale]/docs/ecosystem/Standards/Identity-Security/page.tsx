import React from "react";

export default function IdentitySecurityPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Identity & Security Standards</h1>
      <p className="mb-4 text-gray-300">Protect your project, your users, and yourself — by design.</p>
      <hr className="border-neutral-700 mb-6" />
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Minimum Requirements</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-8">
        <li><b>Strong Passwords:</b><br />All admin and service accounts must use passwords at least 12 characters long.</li>
        <li><b>Multi-Factor Authentication (2FA):</b><br />Enable 2FA on Telegram, Discord, GitHub, email, and any other accounts with admin access.</li>
        <li><b>No Secrets in Code:</b><br />Never commit private keys, API secrets, or passwords to your codebase. Use a secrets scanner in your CI/CD pipeline.</li>
        <li><b>Open-Source & Audits:</b><br />Preferably open-source your code. Seek a community or third-party audit for all mainnet launches.</li>
        <li><b>KYA Prompts:</b><br />Clearly state assumptions, risks, and user responsibilities in your app (see <a href="./KYA" className="text-cyan-400 underline">KYA Standard</a>).</li>
      </ul>
      <hr className="border-neutral-700 mb-6" />
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Recommended Tools</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-8">
        <li><a href="https://bitwarden.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Bitwarden</a> or <a href="https://1password.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">1Password</a> — Password managers</li>
        <li><a href="https://authy.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Authy</a> or <a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Google Authenticator</a> — 2FA apps</li>
        <li><a href="https://semgrep.dev/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Semgrep</a> — Secrets scanning</li>
        <li><a href="https://snyk.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Snyk</a> or <a href="https://owasp.org/www-project-dependency-check/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">OWASP DependencyCheck</a> — Dependency audits</li>
      </ul>
      <hr className="border-neutral-700 mb-6" />
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
        <li><a href="./KYA" className="text-cyan-400 underline">KYA Standard</a></li>
        <li><a href="#" className="text-cyan-400 underline">Security Audit Checklist</a></li>
        <li><a href="./Development" className="text-cyan-400 underline">Development Standards & Best Practices</a></li>
      </ul>
    </>
  );
} 