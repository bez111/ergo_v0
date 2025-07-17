import React from "react";
import { BookOpen } from "lucide-react";

export default function IntegrationGuidePage() {
  return (
    <div className="prose prose-invert max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-cyan-400" /> Integration Guide
      </h1>
      <p className="text-gray-300 mb-2">
        Step-by-step guides and best practices for integrating Ergo into your applications and services. Get started quickly and build robust blockchain solutions.
      </p>
    </div>
  );
} 