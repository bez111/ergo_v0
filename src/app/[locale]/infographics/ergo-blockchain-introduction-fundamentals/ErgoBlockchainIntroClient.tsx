'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Shield,
  Zap,
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

interface ErgoBlockchainIntroClientProps {
  infographic: InfographicMeta;
}

export function ErgoBlockchainIntroClient({ infographic }: ErgoBlockchainIntroClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Ergo is a next-generation Proof-of-Work smart contract platform focused on long-term sustainability and useful DeFi applications.',
    'The network emphasizes resilient, censorship-resistant financial contracts.',
    'Ergo uses an Extended UTXO (eUTXO) model that combines Bitcoin’s security with Ethereum’s flexibility.',
    'The eUTXO design enables complex, parallelizable smart contracts on Ergo.',
    'Autolykos is Ergo’s memory-hard, ASIC-resistant PoW consensus, promoting fair mining and decentralization.',
    'Autolykos is designed to remain accessible to ordinary users, not just large ASIC operators.',
    'Sigma Protocols provide efficient Zero-Knowledge Proofs that underlie Ergo’s privacy-preserving applications and secure non-interactive proofs.',
    'Ergo is a grassroots, community-driven project with a fair launch and no pre-mine or ICO.',
    'The project is committed to open-source development and financial inclusion.',
    'Readers are directed to ergoblockchain.org/start/introduction for a deeper introduction to Ergo.',
  ];

  const readingOrder = [
    'Top line: Based on ergoblockchain.org.',
    'Main title: Ergo Blockchain: Introduction & Fundamentals.',
    'Sub-heading above the central panels: Key Innovations.',
    'First panel on the left: What is Ergo? Text: A next-generation Proof-of-Work (PoW) smart contract platform. Built for long-term sustainability and useful DeFi applications. Focuses on resilient, censorship-resistant financial contracts.',
    "Second panel: eUTXO Model. Text: Extended Unspent Transaction Output. Combines Bitcoin's security with Ethereum's flexibility. Enables complex, parallelizable smart contracts.",
    'Third panel: Autolykos PoW. Text: Memory-hard, ASIC-resistant consensus. Promotes fair mining and decentralization. Accessible to ordinary users.',
    'Fourth panel: Sigma Protocols. Text: Efficient Zero-Knowledge Proofs. Allows for privacy-preserving applications and secure, non-interactive proofs.',
    'Fifth panel: Mission & Principles. Text: Grassroots, community-driven project. Fair launch with no pre-mine or ICO. Committed to open-source development and financial inclusion.',
    'Footer bar: Explore more at ergoblockchain.org/start/introduction.',
  ];

  const panels = [
    {
      title: 'What is Ergo?',
      icon: Shield,
      summary: 'Next-generation PoW smart contract platform.',
      details:
        'Built for long-term sustainability and useful DeFi, focusing on resilient, censorship-resistant financial contracts rather than short-term hype.',
    },
    {
      title: 'eUTXO Model',
      icon: Layers,
      summary: 'Extended Unspent Transaction Output.',
      details:
        'Combines Bitcoin’s security with Ethereum’s flexibility, enabling complex, parallelizable smart contracts with clear, analyzable semantics.',
    },
    {
      title: 'Autolykos PoW',
      icon: Zap,
      summary: 'Memory-hard, ASIC-resistant consensus.',
      details:
        'Promotes fair mining and decentralization by keeping participation open to GPU miners and ordinary users, not just large ASIC operators.',
    },
    {
      title: 'Sigma Protocols',
      icon: Shield,
      summary: 'Efficient Zero-Knowledge Proofs.',
      details:
        'Power privacy-preserving applications and secure non-interactive proofs, giving Ergo programmable privacy at the script level.',
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
            <p className="text-xs tracking-wide text-neutral-500 uppercase mb-2">
              Based on ergoblockchain.org
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {infographic.title}
            </h1>
            <p className="text-xl text-neutral-300 mb-6 max-w-3xl mx-auto">
              A quick overview of Ergo’s architecture, innovations and mission.
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
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30" variant="secondary">
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
                  This infographic gives a high-level introduction to the Ergo blockchain and its core
                  fundamentals. The first panel, <strong>“What is Ergo?”</strong>, presents Ergo as a
                  next-generation Proof-of-Work smart contract platform built for long-term sustainability and
                  useful DeFi applications, with a focus on resilient, censorship-resistant financial contracts.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Under the <strong>“Key Innovations”</strong> heading, three panels outline Ergo’s major
                  technical pillars. The eUTXO Model panel explains how Ergo combines Bitcoin’s security with
                  Ethereum’s flexibility to support complex, parallelizable smart contracts. The Autolykos PoW
                  panel highlights Ergo’s memory-hard, ASIC-resistant consensus mechanism that promotes fair
                  mining and decentralization. The Sigma Protocols panel introduces efficient Zero-Knowledge
                  Proofs that power privacy-preserving applications and secure, non-interactive proofs.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  A final panel on <strong>“Mission & Principles”</strong> stresses that Ergo is a grassroots,
                  community-driven project with a fair launch and no pre-mine or ICO, committed to open-source
                  development and financial inclusion. A footer invites readers to explore more at{' '}
                  <span className="text-orange-400 font-semibold">
                    ergoblockchain.org/start/introduction
                  </span>
                  , while the top line credits the content as based on ergoblockchain.org.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key innovations panels */}
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
                  Key Innovations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {panels.map((panel) => (
                    <div key={panel.title} className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/40">
                          <panel.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{panel.title}</h3>
                          <p className="text-xs text-neutral-400">{panel.summary}</p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-200 leading-relaxed">{panel.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key points */}
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
                    'What is Ergo?',
                    'Ergo eUTXO model',
                    'Autolykos consensus',
                    'Sigma Protocols on Ergo',
                    'Ergo mission and principles',
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


