'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
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
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface ErgoSubblocksClientProps {
  infographic: InfographicMeta;
}

export function ErgoSubblocksClient({ infographic }: ErgoSubblocksClientProps) {
  const router = useRouter();
  
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const returnUrl = sessionStorage.getItem('infographics-return-url');
      if (returnUrl && returnUrl.includes('/infographics')) {
        sessionStorage.removeItem('infographics-return-url');
        window.location.href = returnUrl;
      } else {
        router.push('/infographics');
      }
    } else {
      router.push('/infographics');
    }
  };
  
  const keyPoints = [
    'Traditional blockchains rely on single, large blocks produced sequentially, forcing transactions to wait and limiting throughput.',
    'Ergo introduces a separation between key blocks, which handle security and consensus, and subblocks, which carry transactions and data.',
    'This architecture decouples security from transaction processing, letting key blocks provide finality while subblocks optimize throughput.',
    'Miners can produce multiple subblocks between key blocks, filling them with transactions in parallel.',
    'Subblock production increases the effective transaction capacity of the network.',
    'Users benefit from faster confirmations because transactions can be included in subblocks more frequently.',
    'The design aims to improve user experience without weakening security guarantees.',
    'Ergo’s subblock technology is part of its broader scalability and performance strategy.',
  ];

  const readingOrder = [
    'Main title: Ergo’s Subblock Technology: Boosting Throughput with Parallelism.',
    'First panel heading: Traditional Blockchain (Sequential & Slow). Text: Single, large blocks. Transactions wait for the next block. Limited throughput.',
    'Second panel heading: Ergo’s Approach: Key Blocks & Subblocks. Text: Key Block (Security & consensus). Subblocks (Transactions & data). Decouples security from transaction processing. Key blocks provide finality.',
    'Third panel heading: How It Works (Parallel Production). Text: Timeline with miner producing a key block, then multiple subblocks filled with transactions, followed by the next key block. Caption: Miners can produce multiple subblocks between key blocks, filling them with txs.',
    'Fourth panel heading: Benefits: Higher Throughput & UX. Bullets/icons: Faster Confirmations. Increased Transaction Capacity. Smoother User Experience. Text: More transactions per second, quicker confirmations for users without compromising security.',
    'Footer text: Source: ergoblockchain.org/technology/subblocks.',
  ];

  const panels = [
    {
      title: 'Traditional Blockchain (Sequential & Slow)',
      summary: 'Single, monolithic blocks limit throughput.',
      details:
        'In classic designs, large blocks are produced one after another. Transactions must wait for the next block, which caps throughput and slows confirmations.',
    },
    {
      title: 'Ergo’s Approach: Key Blocks & Subblocks',
      summary: 'Security and throughput separated.',
      details:
        'Key blocks handle security and consensus, while subblocks carry transactions and data. This decouples finality from transaction packing so that each can be tuned independently.',
    },
    {
      title: 'How It Works (Parallel Production)',
      summary: 'Multiple subblocks between key blocks.',
      details:
        'Miners produce a key block, then can create several subblocks before the next key block. These subblocks are filled with transactions, effectively increasing how often transactions can be included.',
    },
    {
      title: 'Benefits: Higher Throughput & UX',
      summary: 'Faster confirmations and more capacity.',
      details:
        'More transactions per second and quicker confirmations improve user experience, while key blocks continue to anchor security at the Proof-of-Work layer.',
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
            <Button variant="ghost" className="text-neutral-400 hover:text-white" onClick={handleBackClick}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Infographics
            </Button>
          </motion.div>

          {/* Header */}
          <InfographicHero
            infographic={infographic}
            subtitle="How key blocks and subblocks let Ergo increase transaction capacity without sacrificing security."
          />

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
                  <strong>“Ergo’s Subblock Technology: Boosting Throughput with Parallelism”</strong>, explains
                  how Ergo increases throughput while maintaining security. The first panel,
                  <strong> “Traditional Blockchain (Sequential & Slow)”</strong>, shows a single chain of
                  large blocks where transactions wait for the next block, highlighting the inherent throughput
                  bottleneck.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The second panel, <strong>“Ergo’s Approach: Key Blocks & Subblocks”</strong>, introduces a
                  design where key blocks handle security and consensus, while subblocks carry transactions and
                  data. This decouples security from transaction processing: key blocks provide finality; subblocks
                  focus on packing transactions efficiently.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The third panel, <strong>“How It Works (Parallel Production)”</strong>, shows miners producing
                  a key block and then multiple subblocks between key blocks, filling them with transactions
                  before the next key block is mined. The final panel,{' '}
                  <strong>“Benefits: Higher Throughput & UX”</strong>, underlines faster confirmations, greater
                  transaction capacity and smoother user experience — more transactions per second and quicker
                  confirmations without compromising PoW security.
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
                  From Monolithic Blocks to Subblocks
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
                    'Ergo scalability features',
                    'Subblocks and key blocks',
                    'Ergo throughput and performance',
                    'Consensus and finality on Ergo',
                    'User experience improvements on Ergo',
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


