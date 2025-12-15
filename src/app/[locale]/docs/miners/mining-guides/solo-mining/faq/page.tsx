
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ArrowLeft, HelpCircle, MessageCircle, Info, CheckCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-brand-primary-400" />
          Solo Mining FAQ
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Frequently asked questions about solo mining Ergo. Common issues and solutions.
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/docs/miners/mining-guides" 
          className="inline-flex items-center gap-2 text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Mining Guides
        </Link>
      </div>

      {/* Content Placeholder */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 text-center">
        <MessageCircle className="w-16 h-16 text-brand-primary-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Content Coming Soon</h2>
        <p className="text-gray-400">
          Frequently asked questions and troubleshooting guides will be added here.
        </p>
      </div>
    </div>
  );
} 