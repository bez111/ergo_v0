'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Cpu,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface AutolykosMiningWithoutMastersClientProps {
  infographic: InfographicMeta;
}

export function AutolykosMiningWithoutMastersClient({
  infographic,
}: AutolykosMiningWithoutMastersClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Autolykos is a memory-hard Proof-of-Work algorithm designed to favor GPUs and consumer hardware over specialized ASICs.',
    'By reducing the advantage of industrial ASIC farms, Autolykos keeps mining more accessible to ordinary users.',
    'The design lowers incentives for huge industrial mining pools, aiming to prevent any single pool from dominating hashpower.',
    'A broader participation surface means more independent miners can contribute to network security.',
    'Ergo’s security budget comes from both block rewards and storage rent, providing long-term incentives for miners.',
    'The combined incentives make it costly to mount a 51% attack without mobilizing large amounts of public hashpower.',
    'The tagline connects launch fairness and ongoing security: fair launch starts decentralization, Autolykos helps sustain it.',
  ];

  const readingOrder = [
    'Main title: Autolykos: Mining Without Masters.',
    'Subtitle: Ergo’s Autolykos Proof-of-Work is engineered to keep mining open instead of concentrating it in a few industrial hands.',
    'Left-side caption under illustration: GPU Mining Farm (Consumer Hardware).',
    'Right-side heading and bullets:',
    'Memory-hard PoW: Favors GPUs and consumer hardware, not specialized ASIC farms.',
    'No Pool Dominance by Design: Lower incentives for huge industrial pools. Wider participation surface.',
    'Fair Incentives: Block rewards + storage rent create long-term security budget.',
    'Security Outcome: Hard to capture; expensive to 51% without massive public hashpower.',
    'Bottom banner text: Fair launch is how you start. Autolykos is how you stay secure.',
    'Edge/footer text: Based on ergoblockchain.org.',
  ];

  const properties = [
    {
      title: 'Memory-hard PoW',
      description:
        'Autolykos is designed to favor GPUs and consumer hardware, reducing the edge of specialized ASIC farms.',
    },
    {
      title: 'No Pool Dominance by Design',
      description:
        'Lower incentives for huge industrial pools and a wider participation surface help prevent any single pool from dominating hashpower.',
    },
    {
      title: 'Fair Incentives',
      description:
        'Block rewards plus storage rent form a long-term security budget, sustaining miner incentives beyond simple emission.',
    },
    {
      title: 'Security Outcome',
      description:
        'A network that is hard to capture and expensive to 51% attack without mobilizing massive amounts of public hashpower.',
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
              Ergo’s Autolykos Proof-of-Work is engineered to keep mining open instead of
              concentrating it in a few industrial hands.
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

          {/* Main infographic image */}
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
                  <Cpu className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled <strong>“Autolykos: Mining Without Masters”</strong>,
                  explains how Ergo’s Autolykos Proof-of-Work is designed to keep mining{' '}
                  <strong>open and decentralized</strong>. A large illustration on the left depicts
                  a GPU mining farm built from consumer hardware with a caption{' '}
                  <span className="text-orange-400 font-semibold">
                    “GPU Mining Farm (Consumer Hardware)”
                  </span>
                  , emphasizing that you do not need industrial ASIC farms to participate.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  On the right, four key properties are listed: a{' '}
                  <strong>memory-hard PoW</strong> that favors GPUs,{' '}
                  <strong>no pool dominance by design</strong>,{' '}
                  <strong>fair incentives</strong> via block rewards plus storage rent and a{' '}
                  <strong>strong security outcome</strong> that makes 51% attacks expensive. Each
                  property focuses on keeping hashpower distributed and incentives aligned with
                  long-term security rather than short-term extraction.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  A bottom banner summarizes the philosophy:{' '}
                  <span className="text-orange-400 font-semibold">
                    “Fair launch is how you start. Autolykos is how you stay secure.”
                  </span>{' '}
                  A small edge credit notes that the content is based on{' '}
                  <strong>ergoblockchain.org</strong>, inviting technically minded miners to dig
                  into the details of Autolykos and Ergo’s broader security budget design.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Autolykos properties */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-orange-400" />
                  Why Autolykos Mining Stays Open
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {properties.map((prop) => (
                    <div
                      key={prop.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <h3 className="text-white font-semibold">{prop.title}</h3>
                      <p className="text-sm text-neutral-200 leading-relaxed">
                        {prop.description}
                      </p>
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
                    'Ergo Autolykos mining',
                    'ASIC-resistant Proof-of-Work',
                    'Storage rent and miner incentives',
                    'Mining decentralization on Ergo',
                    'Security against 51% attacks',
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



