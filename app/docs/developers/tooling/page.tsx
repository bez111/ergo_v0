import React from "react";
import { Layers, Wrench, CreditCard, BookOpen, Code2 } from "lucide-react";
import Link from "next/link";

const pathwaysSections = [
  {
    title: "Development Stack",
    description: "Explore the recommended stack for Ergo dApp and infrastructure development.",
    icon: Layers,
    color: "text-cyan-400",
    link: "/Docs/developers/tooling/development-stack"
  },
  {
    title: "Programming Languages",
    description: "Supported languages and best practices for building on Ergo.",
    icon: Code2,
    color: "text-orange-400",
    link: "/Docs/developers/tooling/programming-languages"
  },
];
const toolingSections = [
  {
    title: "Frameworks",
    description: "SDKs and developer frameworks for dApps and integrations.",
    icon: Wrench,
    color: "text-orange-400",
    link: "/Docs/developers/tooling/frameworks"
  },
  {
    title: "Payments",
    description: "Payment modules, merchant tools, and invoicing solutions.",
    icon: CreditCard,
    color: "text-green-400",
    link: "/Docs/developers/tooling/payments"
  },
  {
    title: "Libraries",
    description: "Reusable libraries for Ergo scripting, cryptography, and APIs.",
    icon: BookOpen,
    color: "text-yellow-400",
    link: "/Docs/developers/tooling/libraries"
  },
];

export default function ToolingPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Tooling
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore frameworks, payment modules, libraries, and developer pathways for building on Ergo.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Pathways</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {pathwaysSections.map((section, index) => {
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
              <div className={`font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 ${section.color} hover:underline`}>Learn more</div>
            </Link>
          );
        })}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {toolingSections.map((section, index) => {
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
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
} 