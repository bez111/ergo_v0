"use client";

import React from "react";
import Link from "next/link";
import {
  Shield, FileText, CheckCircle, AlertTriangle, EyeOff, Globe
} from "lucide-react";

const resources = [
  {
    title: "Social Contract",
    href: "/Docs/introduction/social-contract",
    icon: <Shield className="w-6 h-6 text-orange-400" />,
    description:
      "The main principles and values that define the Ergo protocol and its community governance.",
  },
  {
    title: "Security Audit",
    href: "/Docs/introduction/audit",
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    description:
      "Summary and results of the independent security audit of Ergo's core components.",
  },
  {
    title: "The Howey Test",
    href: "/Docs/introduction/howey-test",
    icon: <FileText className="w-6 h-6 text-cyan-400" />,
    description:
      "Analysis of the Howey Test and its application to ERG tokens and the Ergo platform.",
  },
  {
    title: "Privacy Guide",
    href: "/Docs/introduction/privacy-guide",
    icon: <EyeOff className="w-6 h-6 text-orange-400" />,
    description:
      "A practical guide to privacy and security for blockchain users, with tips and best practices.",
  },
  {
    title: "Common Misconceptions",
    href: "/Docs/introduction/misconceptions",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
    description:
      "Clarifications and facts addressing frequent myths and misunderstandings about Ergo.",
  },
  {
    title: "A CBDC For All",
    href: "/Docs/introduction/cbdc",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    description:
      "How Ergo can serve as a decentralized, programmable, and privacy-focused digital currency for everyone.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-8 leading-tight pb-1">
        Resources
      </h1>
      <p className="text-lg text-gray-400 mb-10">
        Explore key resources and reference materials for understanding Ergo’s philosophy, security, legal status, privacy, and more.
      </p>
      <div className="grid gap-6">
        {resources.map((res) => (
          <Link
            key={res.title}
            href={res.href}
            className="block bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 transition hover:border-orange-400 hover:shadow-lg group"
          >
            <div className="flex items-center gap-4 mb-2">
              {res.icon}
              <span className="text-xl font-semibold text-gray-100 group-hover:text-orange-400 transition-colors">
                {res.title}
              </span>
            </div>
            <p className="text-gray-300 text-base mb-1">
              {res.description}
            </p>
            <span className="text-sm text-orange-400 group-hover:underline">Learn more →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
