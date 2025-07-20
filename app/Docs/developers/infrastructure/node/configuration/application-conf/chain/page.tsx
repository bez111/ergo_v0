"use client";

export default function ChainConfigPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Chain Configuration</h1>
        <p className="text-gray-300 text-lg">
          Blockchain parameters and chain synchronization settings including block intervals and difficulty recalculation.
        </p>
      </div>
      
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Chain Configuration</h2>
        <p className="text-gray-300 mb-6">
          Chain settings control blockchain parameters, synchronization, and consensus mechanisms.
        </p>
        
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Content for Chain configuration will be added here.</p>
        </div>
      </div>
    </div>
  );
} 