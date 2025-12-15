"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Link } from "@/i18n/navigation";
import { Layers, Cpu, Usb, ChevronRight } from "lucide-react";

const tutorialSections = [
  {
    title: "Fleet SDK Recipes",
    description:
      "Practical code examples and guides for using the Fleet SDK to build Ergo dApps and integrations.",
    icon: Layers,
    color: "text-cyan-400",
    link: "/docs/developers/tutorials/fleet-sdk-recipes"
  },
  {
    title: "Hardware Wallet Integration",
    description:
      "Step-by-step guides for integrating hardware wallets with Ergo dApps and services, ensuring secure key management.",
    icon: Usb,
    color: "text-red-400",
    link: "/docs/developers/tutorials/hardware-wallet-integration"
  },
];

export default function TutorialsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Tutorials
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore practical guides and recipes for Ergo development: SDK usage, blockchain indexing, and secure hardware wallet integration.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {tutorialSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link
              key={index}
              href={section.link}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <IconComponent className={`w-6 h-6 ${section.color}`} />
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.description}
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
