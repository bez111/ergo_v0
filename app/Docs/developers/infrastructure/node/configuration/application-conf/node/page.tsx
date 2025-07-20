"use client";

export default function NodeConfigPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Node Configuration</h1>
        <p className="text-gray-300 text-lg">
          Core node configuration including state type, mining settings, transaction verification, and memory pool management.
        </p>
      </div>
      
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Node Configuration</h2>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">node{}</code> configuration section specifies general settings for the node view holder regime. It includes parameters for state type, extra index, block and transaction verification, mining configuration, memory pool management, and more.
        </p>
        
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Content for Node configuration will be added here.</p>
        </div>
      </div>
    </div>
  );
} 