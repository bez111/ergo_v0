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

interface ErgoStorageRentClientProps {
  infographic: InfographicMeta;
}

export function ErgoStorageRentClient({ infographic }: ErgoStorageRentClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'State bloat from dust and inactive boxes causes blockchain growth and higher node costs.',
    'Without a cleanup mechanism, full node size can grow indefinitely over time.',
    'Ergo introduces storage rent, where inactive UTXOs older than roughly four years pay a small per-byte fee in ERG.',
    'The storage rent fee is collected by miners, adding an extra revenue source beyond block rewards.',
    'Fees begin only after a long period of inactivity, minimizing impact on active users.',
    'Storage rent keeps the blockchain lean and reduces node operating costs.',
    'The mechanism encourages users to consolidate or move long-forgotten outputs, improving UX and efficiency.',
    'By rewarding miners with ongoing fees, storage rent supports long-term security and sustainability.',
    'Overall, storage rent is positioned as a novel solution for a sustainable, decentralized and efficient blockchain ecosystem on Ergo.',
  ];

  const readingOrder = [
    'Main title at the top: Ergo Storage Rent: Preventing Blockchain Bloat & Rewarding Miners.',
    'Left panel heading: The State Bloat Problem. Text: Dust & Inactive Boxes clog the network. Without cleanup, full node size grows indefinitely, increasing costs.',
    'Middle panel heading: Storage Rent Mechanism. Text: Inactive UTXOs (>~4 years) start paying a small, per-byte fee in ERG. The fee is collected by miners. Additional line: Fee starts only after a long period of inactivity.',
    'Right panel heading: Benefits & Sustainability. Text: Keeps blockchain lean. Lowers node operating costs. Provides sustainable income for miners beyond block rewards. Additional line: Encourages active participation and long-term health.',
    'Footer text above bar: Based on ergoblockchain.org.',
    'Bottom bar text: A novel solution for a sustainable, decentralized, and efficient blockchain ecosystem.',
  ];

  const panels = [
    {
      title: 'The State Bloat Problem',
      summary: 'Dust and inactive boxes clog the chain.',
      details:
        'Over time, tiny outputs and long-forgotten boxes accumulate. Without a cleanup mechanism, full node size grows indefinitely, raising hardware and operating costs for node operators.',
    },
    {
      title: 'Storage Rent Mechanism',
      summary: 'Inactive UTXOs pay a small per-byte fee.',
      details:
        'On Ergo, UTXOs that remain untouched for roughly four years begin paying a small storage rent fee in ERG. This fee is collected by miners and only starts after a long period of inactivity, so normal users are not constantly charged.',
    },
    {
      title: 'Benefits & Sustainability',
      summary: 'Lean state, lower costs, better miner incentives.',
      details:
        'Storage rent keeps the blockchain lean, reduces node costs, encourages users to consolidate dust and provides miners with a sustainable income stream beyond block rewards, supporting long-term security and viability.',
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
              How Ergo tackles state bloat while creating a sustainable incentive layer for miners.
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
                  This infographic presents <strong>“Ergo Storage Rent: Preventing Blockchain Bloat &
                  Rewarding Miners.”</strong> The first panel, <strong>“The State Bloat Problem”</strong>,
                  shows how dust and inactive boxes clog the network and cause full node size to grow
                  indefinitely, increasing hardware and operating costs for node operators.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The middle panel, <strong>“Storage Rent Mechanism”</strong>, describes Ergo’s solution:
                  inactive UTXOs that remain untouched for more than roughly four years start paying a small,
                  per-byte fee in ERG. This fee is collected by miners as part of their rewards, and it only
                  begins after a long period of inactivity so regular users are not constantly charged.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The third panel, <strong>“Benefits & Sustainability”</strong>, outlines how storage rent
                  keeps the blockchain lean, lowers node operating costs and provides miners with a
                  sustainable income stream beyond block subsidies. A footer notes that the design is based
                  on ergoblockchain.org and frames storage rent as{' '}
                  <span className="text-orange-400 font-semibold">
                    “a novel solution for a sustainable, decentralized, and efficient blockchain ecosystem.”
                  </span>
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
                  From Problem to Mechanism to Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
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
                    'Ergo storage rent overview',
                    'State bloat and scalability',
                    'Ergo sustainability mechanisms',
                    'Mining incentives on Ergo',
                    'Ergo full node requirements',
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


