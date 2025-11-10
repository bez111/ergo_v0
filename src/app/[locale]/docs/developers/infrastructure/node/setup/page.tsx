import React from "react";
import Link from "next/link";
import { BookOpen, Hammer, Camera, Package, LifeBuoy, HelpCircle, Cpu, Smartphone, Dock, ChevronRight, ChevronLeft } from "lucide-react";

const installSections = [
  {
    title: "Manual",
    description: "Step-by-step manual installation guide for the Ergo Node.",
    icon: BookOpen,
    color: "text-orange-400",
    link: "/docs/developers/infrastructure/node/setup/manual"
  },
  {
    title: "Build from Source",
    description: "Instructions to build the Ergo Node from source code.",
    icon: Hammer,
    color: "text-cyan-400",
    link: "/docs/developers/infrastructure/node/setup/build"
  },
  {
    title: "SNAPSHOT Dependencies",
    description: "List of required dependencies for running the Ergo Node.",
    icon: Package,
    color: "text-orange-300",
    link: "/docs/developers/infrastructure/node/setup/dependencies"
  },
  {
    title: "Docker",
    description: "How to deploy Ergo Node using Docker.",
    icon: Dock,
    color: "text-blue-400",
    link: "/docs/developers/infrastructure/node/setup/docker"
  }
];

const platformSections = [
  {
    title: "Pi",
    description: "Guide for running Ergo Node on Raspberry Pi.",
    icon: Cpu,
    color: "text-green-400",
    link: "/docs/developers/infrastructure/node/setup/pi"
  },
  {
    title: "Android",
    description: "Instructions for running Ergo Node on Android devices.",
    icon: Smartphone,
    color: "text-cyan-400",
    link: "/docs/developers/infrastructure/node/setup/android"
  }
];

const supportSections = [
  {
    title: "Troubleshooting",
    description: "Common issues and solutions for Ergo Node setup.",
    icon: LifeBuoy,
    color: "text-cyan-300",
    link: "/docs/developers/infrastructure/node/setup/troubleshooting"
  },
  {
    title: "FAQ",
    description: "Frequently asked questions about node setup.",
    icon: HelpCircle,
    color: "text-orange-400",
    link: "/docs/developers/infrastructure/node/setup/faq"
  }
];

type Section = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  link: string;
};

function SectionGrid({ sections }: { sections: Section[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      {sections.map((section, index) => {
        const IconComponent = section.icon;
        return (
          <div
            key={index}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between min-h-[160px] group relative"
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
            <Link
              href={section.link}
              className="pointer-events-auto absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center text-cyan-400 font-semibold hover:underline"
              tabIndex={-1}
            >
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default function NodeSetupPage() {
  return (
    <>
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Node Setup
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Choose your preferred method to install, configure, or troubleshoot your Ergo Node. Guides for all platforms and scenarios.
      </p>
      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Node
        </Link>
      </div>
      {/* Install Section */}
      <h2 className="text-2xl font-semibold text-orange-300 mb-2 mt-8">Install</h2>
      <SectionGrid sections={installSections} />

      {/* Platforms Section */}
      <h2 className="text-2xl font-semibold text-cyan-300 mb-2 mt-8">Platforms</h2>
      <SectionGrid sections={platformSections} />

      {/* Support Section */}
      <h2 className="text-2xl font-semibold text-green-300 mb-2 mt-8">Support</h2>
      <SectionGrid sections={supportSections} />
    </>
  );
} 