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

interface ErgoNipopowsClientProps {
  infographic: InfographicMeta;
}

export function ErgoNipopowsClient({ infographic }: ErgoNipopowsClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Full nodes require large storage and bandwidth, making them impractical for many mobile and IoT devices.',
    'Without a better approach, users often end up trusting centralized servers instead of verifying the chain themselves.',
    'NiPoPoWs are Non-Interactive Proofs of Proof-of-Work that let clients verify chain difficulty without downloading full history.',
    'Clients statistically sample a small set of superblocks to construct compact proofs that are only kilobytes in size.',
    'Trustless light wallets can run on mobile devices, allowing users to verify PoW security directly.',
    'Ultra-lightweight synchronization makes it possible to sync in seconds with minimal data usage.',
    'NiPoPoWs enable efficient sidechains and cross-chain bridges between PoW networks.',
    'By shrinking verification costs, NiPoPoWs push PoW security to the network edge rather than centralizing it in data centers.',
    'The overall goal is true decentralization: many independent verifiers instead of a few heavyweight full nodes.',
    'Ergo integrates NiPoPoWs as a core technology for scalable, trustless light clients.',
  ];

  const readingOrder = [
    'Main title: Ergo NiPoPoWs: The Key to Scalable, Trustless Light Clients.',
    'Left panel heading: The Challenge: Heavy Full Nodes. Text: High storage & bandwidth requirements. Impractical for mobile or IoT devices. Users often forced to trust centralized servers.',
    'Center panel heading: The Solution: NiPoPoWs Explained. Text: Non-Interactive Proofs of Proof-of-Work. Instead of downloading everything, clients statistically sample “superblocks” to verify total chain difficulty cryptographically.',
    'Right panel heading: Key Benefits: True Decentralization.',
    'Right panel bullet 1: Trustless Light Wallets: “Don’t trust, verify” on mobile without centralized reliance.',
    'Right panel bullet 2: Ultra-Lightweight Sync: Sync in seconds with minimal data usage.',
    'Right panel bullet 3: Cross-Chain Interoperability: Enables efficient sidechains and bridges between PoW networks.',
    'Footer text: Ergo brings the security of Proof-of-Work to the edge. Based on ergoblockchain.org/technology/nipopows.',
  ];

  const panels = [
    {
      title: 'The Challenge: Heavy Full Nodes',
      summary: 'High storage and bandwidth; bad fit for mobile.',
      details:
        'Running a full node requires gigabytes of storage and constant bandwidth, which is impractical for phones or IoT devices and often forces users to rely on centralized servers.',
    },
    {
      title: 'The Solution: NiPoPoWs Explained',
      summary: 'Non-Interactive Proofs of Proof-of-Work.',
      details:
        'Instead of downloading the full chain, clients sample a small sequence of “superblocks” and verify total chain difficulty cryptographically, producing kilobyte-scale proofs.',
    },
    {
      title: 'Key Benefits: True Decentralization',
      summary: 'Trustless wallets, ultra-light sync, cross-chain bridges.',
      details:
        'Light wallets can “don’t trust, verify” on mobile, sync in seconds with minimal data, and use NiPoPoWs as a primitive for efficient sidechains and trustless PoW bridges.',
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
              How Non-Interactive Proofs of Proof-of-Work bring PoW security to mobile and cross-chain
              use cases.
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
                  This infographic, titled <strong>“Ergo NiPoPoWs: The Key to Scalable, Trustless Light
                  Clients”</strong>, explains why Non-Interactive Proofs of Proof-of-Work matter for
                  decentralization. The left panel, <strong>“The Challenge: Heavy Full Nodes”</strong>, shows
                  how full nodes demand high storage and bandwidth, making them impractical for mobile or IoT
                  devices and pushing users toward centralized servers.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The centre panel, <strong>“The Solution: NiPoPoWs Explained”</strong>, introduces
                  Non-Interactive Proofs of Proof-of-Work: instead of downloading an entire blockchain,
                  clients statistically sample a small sequence of “superblocks” to verify total chain
                  difficulty cryptographically. A compact NiPoPoW proof is only kilobytes in size, compared to
                  gigabytes of history.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The right panel, <strong>“Key Benefits: True Decentralization”</strong>, lists advantages:
                  trustless light wallets that can “don’t trust, verify” on mobile; ultra-lightweight sync in
                  seconds; and cross-chain interoperability via efficient sidechains and bridges between PoW
                  networks. The footer concludes,{' '}
                  <span className="text-orange-400 font-semibold">
                    “Ergo brings the security of Proof-of-Work to the edge.”
                  </span>{' '}
                  and credits ergoblockchain.org/technology/nipopows as the source.
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
                  From Heavy Nodes to Edge Verification
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
                    'NiPoPoWs overview',
                    'Ergo light clients',
                    'Proof-of-Work security',
                    'Sidechains and bridges on Ergo',
                    'Decentralization and mobile wallets',
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


