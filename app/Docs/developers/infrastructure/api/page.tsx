import React from "react";
import Link from "next/link";
import { Code } from "lucide-react";

export default function APIPage() {
  return (
    <div className="prose prose-invert max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-green-400" /> Ergo APIs
      </h1>
      <p className="text-gray-300 mb-2">
        Ergo provides several APIs that offer different functionalities and services for developers and users. These APIs allow interaction with the Ergo blockchain, access to network data, and integration of Ergo into various applications.
      </p>
      <p className="text-gray-400">
        For mirrors, dev tooling and more information please see {" "}
        <Link href="/Docs/developers/infrastructure/api" className="text-cyan-400 hover:underline">this page</Link>.
      </p>
    </div>
  );
} 