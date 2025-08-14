import React from "react";
import { ArrowLeft, Zap, ExternalLink, Settings, TrendingUp, Thermometer, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function OverclockingPage() {
  const overclockingResources = [
    {
      title: "Community Overclocking Settings",
      description: "Google Form that collects overclocking settings from the Ergo mining community. View responses to see what settings others are using.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfvRg_I5QumCBmMCwOHzel6bt5OOAA0uvJl_PBdKEtlpbRnVQ/viewform",
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      type: "Community Database"
    },
    {
      title: "Hashrate.no",
      description: "Provides comprehensive information about different cryptocurrencies, including Ergo, with a dedicated section on overclocking settings.",
      url: "https://hashrate.no/coins/ERG",
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      type: "Information Portal"
    },
    {
      title: "Kryptex Overclocking Database",
      description: "Database of overclocking settings for different GPUs and algorithms, including Autolykos2 used by Ergo.",
      url: "https://www.kryptex.com/en/overclocking?device=all&algo=autolykos2&order=rating",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      type: "Professional Database"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Zap className="w-8 h-8 text-brand-primary-400" />
          Overclocking for Ergo Mining
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Overclocking your GPU can help maximize your mining performance. However, it's important to proceed with caution as overclocking can increase power consumption and potentially shorten the lifespan of your hardware.
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

      {/* Warning Section */}
      <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">Important Safety Notice</h3>
            <p className="text-yellow-100 mb-2">
              Remember, every GPU is unique, and what works for others might not work for you. Always monitor your hardware's temperature and stability after applying new overclocking settings.
            </p>
            <ul className="text-yellow-100 text-sm space-y-1">
              <li>• Start with conservative settings and gradually increase</li>
              <li>• Monitor temperatures to avoid overheating</li>
              <li>• Test stability before extended mining sessions</li>
              <li>• Keep power consumption within safe limits</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Community Resources</h2>
        <p className="text-gray-300 mb-6">
          Here are some resources that provide overclocking settings shared by the mining community:
        </p>
        
        <div className="grid gap-6">
          {overclockingResources.map((resource, index) => (
            <div key={index} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                    <span className="text-xs px-2 py-1 bg-neutral-700 text-gray-300 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Link 
                    href={resource.url}
                    className="text-brand-primary-400 hover:text-brand-primary-300 underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Resource <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Thermometer className="w-6 h-6 text-red-400" />
          Best Practices
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Before Overclocking</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Update GPU drivers to the latest version</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Install temperature monitoring software</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Ensure adequate cooling and airflow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Note down default/stock settings</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">While Overclocking</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Make small incremental changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Test stability after each change</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Keep GPU temperature under 80°C</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary-400 mt-1">•</span>
                <span>Monitor power consumption levels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 