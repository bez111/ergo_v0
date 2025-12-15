"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { 
  Database, 
  ChevronRight, 
  ExternalLink,
  CheckCircle,
  FileText,
  Clock,
  Network,
  History,
  Filter,
  HardDrive
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function CacheConfigPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Cache Configuration
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Cache configuration for optimizing node performance and memory usage with extra indexing and state snapshots.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/configuration/application-conf?tab=ergo-node"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-orange-400" /> Cache Configuration Overview
        </h2>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">cache</code> configuration specifies what data to keep in memory to optimize the performance of the system.
        </p>
      </div>

      {/* History Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <History className="w-6 h-6 text-blue-400" /> History
        </h2>
        
        {/* Block Sections Cache Size */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-400" /> Block Sections Cache Size
          </h3>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <code className="text-orange-400">blockSectionsCacheSize = 12</code>
          </div>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">blockSectionsCacheSize</code> setting determines the number of recently used block sections that will be kept in memory. In this configuration, the last 12 block sections are stored.
          </p>
        </div>

        {/* Headers Cache Size */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" /> Headers Cache Size
          </h3>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <code className="text-orange-400">headersCacheSize = 1000</code>
          </div>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">headersCacheSize</code> setting specifies the number of recently used headers that will be kept in memory. Here, the last 1000 headers are stored.
          </p>
        </div>

        {/* Indexes Cache Size */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" /> Indexes Cache Size
          </h3>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <code className="text-orange-400">indexesCacheSize = 10000</code>
          </div>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">indexesCacheSize</code> setting determines the number of recently used indexes that will be kept in memory. In this configuration, the last 10000 indexes are stored.
          </p>
        </div>
      </div>

      {/* Network Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Network className="w-6 h-6 text-green-400" /> Network
        </h2>
        
        {/* Invalid Modifiers Bloom Filter Capacity */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5 text-orange-400" /> Invalid Modifiers Bloom Filter Capacity
          </h3>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <code className="text-orange-400">invalidModifiersBloomFilterCapacity = 10000000</code>
          </div>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">invalidModifiersBloomFilterCapacity</code> setting specifies the maximum number of invalid modifiers that the DeliveryTracker will keep.
          </p>
        </div>

        {/* Invalid Modifiers Bloom Filter Expiration Rate */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" /> Invalid Modifiers Bloom Filter Expiration Rate
          </h3>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <code className="text-orange-400">invalidModifiersBloomFilterExpirationRate = 0.1</code>
          </div>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">invalidModifiersBloomFilterExpirationRate</code> setting defines the rate of element expiration when the capacity is full. It's represented as a non-zero fraction of 1. The lower the number, the more gradual the expiration. In this configuration, a rate of 0.1 is represented as 10 bloom filters expiring one by one.
          </p>
        </div>

        {/* Invalid Modifiers Cache Size */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-blue-400" /> Invalid Modifiers Cache Size
          </h3>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <code className="text-orange-400">invalidModifiersCacheSize = 10000</code>
          </div>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">invalidModifiersCacheSize</code> setting determines the maximum number of invalid modifiers kept in the cache. Any modifiers beyond this number are kept in bloom filters.
          </p>
        </div>

        {/* Invalid Modifiers Cache Expiration */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-400" /> Invalid Modifiers Cache Expiration
          </h3>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <code className="text-orange-400">invalidModifiersCacheExpiration = 6h</code>
          </div>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">invalidModifiersCacheExpiration</code> setting defines how long invalid modifiers are kept in the cache. In this configuration, they are kept for 6 hours.
          </p>
        </div>
      </div>

      {/* Mempool Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-purple-400" /> Mempool
        </h2>
        
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <p className="text-gray-300">
            The mempool section has the same configuration options as the network section, with the same parameters, but they apply to the mempool rather than the network. In particular, these settings control how many invalid modifiers are kept in memory and how long they are kept before being removed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Bloom Filter Capacity</h4>
            <p className="text-gray-300 text-sm">Maximum number of invalid modifiers in mempool bloom filter.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Expiration Rate</h4>
            <p className="text-gray-300 text-sm">Rate of element expiration when capacity is full.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Cache Size</h4>
            <p className="text-gray-300 text-sm">Maximum number of invalid modifiers in mempool cache.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Cache Expiration</h4>
            <p className="text-gray-300 text-sm">How long invalid modifiers are kept in mempool cache.</p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Performance Optimization
        </h2>
        <p className="text-gray-300">
          Overall, the cache configuration allows you to manage your memory usage and performance effectively, helping to keep your system running smoothly even under heavy load.
        </p>
      </div>
    </>
  );
} 