import React from "react";
import { ArrowLeft, Monitor, ExternalLink, Terminal, HardDrive, Smartphone } from "lucide-react";
import Link from "next/link";

export default function OperatingSystemsPage() {
  const operatingSystems = [
    {
      name: "Hive OS",
      url: "https://hiveos.farm/",
      description: "Popular mining operating system with web-based management",
      guides: [
        {
          title: "Mining Ergo on HiveOS",
          url: "https://ergoplatform.org/en/blog/2022-03-22-mining-ergo-on-hiveos/"
        },
        {
          title: "Mining Ergo on Windows", 
          url: "https://ergoplatform.org/en/blog/2022-03-17-mining-ergo-on-windows/"
        }
      ],
      icon: <HardDrive className="w-6 h-6 text-orange-400" />
    },
    {
      name: "Minerstat",
      url: "https://minerstat.com/",
      description: "Professional mining OS with advanced monitoring and management",
      guides: [],
      icon: <Terminal className="w-6 h-6 text-blue-400" />
    },
    {
      name: "Rave OS",
      url: "https://raveos.com/",
      description: "Linux-based mining operating system with easy setup",
      guides: [],
      icon: <Monitor className="w-6 h-6 text-purple-400" />
    },
    {
      name: "Simple Mining OS",
      url: "https://simplemining.net/",
      description: "Simplified mining OS for easy deployment and management",
      guides: [],
      icon: <Smartphone className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Monitor className="w-8 h-8 text-brand-primary-400" />
          Operating Systems for Mining
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Different operating systems can be used for mining Ergo. Here are some popular options along with guides on how to set up Ergo mining on them.
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/Docs/miners/mining-guides" 
          className="inline-flex items-center gap-2 text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Mining Guides
        </Link>
      </div>

      {/* Operating Systems Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {operatingSystems.map((os, index) => (
          <div key={index} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              {os.icon}
              <h3 className="text-xl font-bold text-white">{os.name}</h3>
            </div>
            
            <p className="text-gray-300 mb-4">{os.description}</p>
            
            <div className="flex items-center gap-2 mb-4">
              <Link 
                href={os.url}
                className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {os.name} <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {os.guides.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Guides:</h4>
                <ul className="space-y-2">
                  {os.guides.map((guide, guideIndex) => (
                    <li key={guideIndex}>
                      <Link 
                        href={guide.url}
                        className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {guide.title} <ExternalLink className="w-3 h-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Choosing the Right OS</h2>
        <p className="text-gray-300 mb-4">
          Each of these operating systems has its own features and benefits. Choose the one that best fits your mining setup and preferences.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-brand-primary-400 mt-1">•</span>
            <span><strong>Ease of Use:</strong> Consider your technical expertise and preference for GUI vs command line</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-primary-400 mt-1">•</span>
            <span><strong>Remote Management:</strong> Some OS options offer better remote monitoring and control</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-primary-400 mt-1">•</span>
            <span><strong>Hardware Support:</strong> Ensure your mining hardware is compatible with the chosen OS</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-primary-400 mt-1">•</span>
            <span><strong>Community Support:</strong> Active communities can help with troubleshooting and optimization</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 