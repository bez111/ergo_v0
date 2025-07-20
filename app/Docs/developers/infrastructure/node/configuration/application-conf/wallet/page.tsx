"use client";

export default function WalletConfigPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Wallet Configuration</h1>
        <p className="text-gray-300 text-lg">
          Built-in wallet configuration and security settings for key management and transaction scanning.
        </p>
      </div>
      
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Wallet Configuration</h2>
        <p className="text-gray-300 mb-6">
          Wallet settings control the built-in wallet functionality, key management, and security features.
        </p>
        
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Content for Wallet configuration will be added here.</p>
        </div>
      </div>
    </div>
  );
} 