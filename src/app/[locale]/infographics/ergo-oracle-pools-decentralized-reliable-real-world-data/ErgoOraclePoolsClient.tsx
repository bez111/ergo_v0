'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Shield,
  Layers,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface ErgoOraclePoolsClientProps {
  infographic: InfographicMeta;
}

export function ErgoOraclePoolsClient({ infographic }: ErgoOraclePoolsClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Smart contracts require reliable real-world data, but cannot access off-chain information directly.',
    'Relying on a single oracle introduces a centralized point of failure and trust.',
    'Ergo solves this with decentralized oracle pools, where multiple independent oracles submit data.',
    'Data from different oracles is aggregated, for example via a median, into a single trusted value.',
    'The aggregated result is posted on-chain inside a dedicated “Data Box”.',
    'Ergo’s eUTXO model and Sigma Protocols enable efficient, secure oracle aggregation.',
    'Oracle pools provide trustless data feeds whose integrity is mathematically verifiable.',
    'The system is robust against individual oracle failures or malicious actors.',
    'Efficient aggregation keeps oracle updates cost-effective on-chain.',
    'Ergo’s oracle pools are designed for decentralized, reliable data feeds for DeFi and other applications.',
  ];

  const readingOrder = [
    'Main title: Ergo’s Oracle Pools: Decentralized & Reliable Real-World Data.',
    'Top-left heading: The Challenge: Reliable Off-Chain Data. Text: Smart contracts need real-world data (e.g., prices, weather) but can’t access it directly. Single oracles are centralized points of failure.',
    'Top-right heading: The Solution: Decentralized Oracle Pools. Text: A group of independent oracles collectively provide and validate data. No single point of failure.',
    'Bottom-left heading: How It Works (Ergo’s Unique Approach). Flow text: Multiple oracles submit data points → Data points are aggregated (e.g., median) → Aggregated data is posted on-chain in a “Data Box”. Additional line: Utilizes Ergo’s eUTXO and Sigma Protocols for efficient, secure aggregation.',
    'Bottom-right heading: Benefits: Trustless & Robust Data Feeds. Bullets: Trustless: Data integrity is mathematically verifiable. Robust: Resilient to individual oracle failures or attacks. Cost-Effective: Efficient aggregation reduces on-chain costs.',
    'Footer text: Source: ergoblockchain.org/technology/oracle-pools.',
  ];

  const panels = [
    {
      title: 'The Challenge: Reliable Off-Chain Data',
      summary: 'Smart contracts can’t read the real world directly.',
      details:
        'Contracts need prices, weather, and other data but cannot access off-chain sources themselves. A single oracle becomes a central point of trust and failure.',
    },
    {
      title: 'The Solution: Decentralized Oracle Pools',
      summary: 'Many oracles, one robust feed.',
      details:
        'A group of independent oracles collectively submit and validate data, so no single party controls the feed or can silently corrupt it.',
    },
    {
      title: 'How It Works (Ergo’s Unique Approach)',
      summary: 'From many submissions to one Data Box.',
      details:
        'Multiple oracles submit data points; an on-chain contract aggregates them (e.g., via a median); the aggregated value is stored in a dedicated Data Box using Ergo’s eUTXO model and Sigma Protocols for secure, auditable aggregation.',
    },
    {
      title: 'Benefits: Trustless & Robust Data Feeds',
      summary: 'Verifiable, resilient and cost-effective.',
      details:
        'Integrity is mathematically verifiable, the system tolerates individual oracle failures or attacks, and efficient aggregation keeps on-chain costs manageable for frequent updates.',
    },
  ];

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button variant="ghost" className="text-neutral-400 hover:text-white" asChild>
              <a href="/infographics">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Infographics
              </a>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {infographic.title}
            </h1>
            <p className="text-xl text-neutral-300 mb-6 max-w-3xl mx-auto">
              How decentralized oracle pools give Ergo trustless, robust on-chain data feeds.
            </p>

            {/* Meta information */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(infographic.publishDate)}</span>
              </div>
              {infographic.readingTimeMinutes && (
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{infographic.readingTimeMinutes} min read</span>
                </div>
              )}
              <Badge
                className="bg-orange-500/20 text-orange-400 border-orange-500/30"
                variant="secondary"
              >
                <Tag className="h-3 w-3 mr-1" />
                {CATEGORY_LABELS[infographic.category] || infographic.category}
              </Badge>
              <Badge variant="outline" className="border-neutral-600 text-neutral-300">
                {LEVEL_LABELS[infographic.level] || infographic.level}
              </Badge>
            </div>
          </motion.header>

          {/* Main infographic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={infographic.fullImageUrl}
                  alt={infographic.imageAlt}
                  className="w-full h-auto"
                  loading="eager"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* About section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Shield className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled{' '}
                  <strong>“Ergo’s Oracle Pools: Decentralized & Reliable Real-World Data”</strong>, explains
                  how Ergo addresses the oracle problem for smart contracts. The top-left panel,
                  <strong> “The Challenge: Reliable Off-Chain Data”</strong>, describes how contracts need
                  real-world inputs but cannot fetch them directly, and how single oracles become centralized
                  points of failure.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The top-right panel, <strong>“The Solution: Decentralized Oracle Pools”</strong>, introduces
                  Ergo’s approach: a group of independent oracles collectively provide and validate data, so
                  there is no single party that must be trusted. The bottom-left panel,
                  <strong> “How It Works (Ergo’s Unique Approach)”</strong>, shows multiple oracles submitting
                  data, aggregation via a function like the median, and the aggregated value being written
                  into a dedicated on-chain Data Box using Ergo’s eUTXO model and Sigma Protocols.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The bottom-right panel, <strong>“Benefits: Trustless & Robust Data Feeds”</strong>, lists
                  the advantages: mathematically verifiable integrity, resilience to individual oracle
                  failures or attacks and cost-effective updates. A footer credits{' '}
                  <span className="text-orange-400 font-semibold">
                    ergoblockchain.org/technology/oracle-pools
                  </span>{' '}
                  and frames oracle pools as a core part of Ergo’s DeFi infrastructure.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Panels */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Layers className="w-6 h-6 text-orange-400" />
                  From Problem to Oracle Pools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {panels.map((panel) => (
                    <div
                      key={panel.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <h3 className="text-white font-semibold">{panel.title}</h3>
                      <p className="text-xs text-neutral-400">{panel.summary}</p>
                      <p className="text-sm text-neutral-200 leading-relaxed">{panel.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key Points */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-400" />
                  Key Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 shrink-0" />
                      <p className="text-neutral-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Reading order */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Eye className="w-6 h-6 text-orange-400" />
                  How to Read This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {readingOrder.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-orange-400 font-mono text-sm mt-1 shrink-0">
                        {(index + 1).toString().padStart(2, '0')}.
                      </span>
                      <p className="text-neutral-300 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Related topics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Target className="w-6 h-6 text-orange-400" />
                  Related Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Ergo oracle pools overview',
                    'Oracles and real-world data on Ergo',
                    'eUTXO and data boxes',
                    'Sigma Protocols for secure aggregation',
                    'DeFi infrastructure on Ergo',
                  ].map((topic) => (
                    <Badge key={topic} variant="outline" className="border-neutral-600 text-neutral-300">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Embed code */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-12"
          >
            <EmbedCode infographic={infographic} />
          </motion.section>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {infographic.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-neutral-600 text-neutral-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}


