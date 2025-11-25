'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Shield,
  SplitSquareHorizontal,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface HowIsSecurityMaintainedClientProps {
  infographic: InfographicMeta;
}

export function HowIsSecurityMaintainedClient({
  infographic,
}: HowIsSecurityMaintainedClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Typical Proof-of-Stake systems concentrate power in validators and large stakers who earn the highest returns.',
    'Delegators in PoS receive medium returns by delegating their stake to large operators, reinforcing existing wealth concentrations.',
    'Over time, PoS reward dynamics can lead to larger stakeholders gaining more rewards and greater control over network security.',
    'Ergo uses Autolykos, a Proof-of-Work mining algorithm designed to be ASIC-resistant.',
    'Autolykos aims to stay accessible to consumer-grade GPUs rather than specialized hardware.',
    'Rewards in Ergo mining are intended to be more fairly distributed among many GPU miners.',
    'Network security on Ergo is provided by work, with many independent miners contributing hashpower.',
    'The infographic emphasizes that Ergo’s security model is meant to be accessible to many participants, not just the wealthy.',
    'Mining pools aggregate the work of GPU miners, turning their hashpower into network security.',
    'The call to action points viewers to ergoblockchain.org/mining for additional details on Autolykos and mining on Ergo.',
  ];

  const readingOrder = [
    'Main title at the top: How Is Security Maintained?',
    'Left panel heading: Typical Proof-of-Stake Staking.',
    'Left panel flow: Validators & Large Stakers (High Return) → Delegators (Medium Return) → Network Security.',
    'Left panel caption at bottom: Wealth concentrates. Larger stakeholders earn more rewards and control.',
    'Right panel heading: Ergo Autolykos Mining.',
    'Right panel flow: GPU Miners (Fair Return) → Mining Pool → Network Security.',
    'Right panel bullet points: ASIC-resistant algorithm. Accessible to consumer hardware. Fair distribution of rewards. Distributed security via work.',
    'Right panel caption at bottom: Security by work, accessible to many, not just the wealthy.',
    'Footer URL: ergoblockchain.org/mining.',
  ];

  const posFlow = [
    {
      title: 'Validators & Large Stakers',
      subtitle: 'High Return',
      description:
        'Those who already hold large stakes lock them to secure the chain and earn the highest rewards.',
    },
    {
      title: 'Delegators',
      subtitle: 'Medium Return',
      description:
        'Smaller holders delegate stake to large validators, earning medium returns while reinforcing their power.',
    },
    {
      title: 'Network Security',
      subtitle: '',
      description:
        'Security is provided by a relatively small set of large stakeholders whose influence can grow over time.',
    },
  ];

  const ergoFlow = [
    {
      title: 'GPU Miners',
      subtitle: 'Fair Return',
      description:
        'Many independent miners with consumer GPUs contribute work and earn rewards directly.',
    },
    {
      title: 'Mining Pool',
      subtitle: '',
      description:
        'Pools aggregate hashpower from miners, smoothing payouts while keeping entry accessible.',
    },
    {
      title: 'Network Security',
      subtitle: '',
      description:
        'Security comes from distributed work — hashpower spread across many participants, not only wealthy stakers.',
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
              Typical Proof-of-Stake staking vs Ergo Autolykos mining.
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
                  <Shield className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled <strong>“How Is Security Maintained?”</strong>, contrasts
                  a typical <strong>Proof-of-Stake (PoS) staking</strong> model with{' '}
                  <strong>Ergo’s Autolykos mining</strong>. The left panel shows validators and
                  large stakers at the top of the reward pyramid, with delegators feeding stake
                  into them and “network security” sitting beneath.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  A caption notes that in many PoS systems,{' '}
                  <strong>wealth tends to concentrate over time</strong>: those with more stake earn
                  higher returns and greater control, while smaller participants are pushed into
                  delegating to large operators. The right panel flips the framing to Ergo’s{' '}
                  <strong>Autolykos GPU mining</strong>, with many miners plugging into pools that
                  collectively provide network security.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Bullet points highlight that Autolykos is{' '}
                  <strong>ASIC-resistant and accessible to consumer hardware</strong>, aiming for
                  fairer distribution of rewards and security by work rather than stake size. The
                  closing line sums it up as{' '}
                  <span className="text-orange-400 font-semibold">
                    “Security by work, accessible to many, not just the wealthy.”
                  </span>{' '}
                  with a call to learn more at <strong>ergoblockchain.org/mining</strong>.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Two security models */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <SplitSquareHorizontal className="w-6 h-6 text-orange-400" />
                  Two Ways to Secure a Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white/5 border border-red-500/40 p-4">
                    <h3 className="text-white font-semibold mb-1">
                      Typical Proof-of-Stake Staking
                    </h3>
                    <p className="text-xs text-red-300 uppercase tracking-wide mb-3">
                      Stake & Wealth Concentration
                    </p>
                    <ol className="space-y-3 text-sm text-neutral-200 leading-relaxed list-decimal list-inside">
                      {posFlow.map((step) => (
                        <li key={step.title}>
                          <span className="font-semibold">
                            {step.title}
                            {step.subtitle ? ` (${step.subtitle})` : ''}:
                          </span>{' '}
                          <span className="font-normal">{step.description}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-3 text-xs text-neutral-400">
                      Wealth concentrates: larger stakeholders earn more rewards and gain more
                      influence over time.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-green-500/40 p-4">
                    <h3 className="text-white font-semibold mb-1">Ergo Autolykos Mining</h3>
                    <p className="text-xs text-green-300 uppercase tracking-wide mb-3">
                      Security by Work, Accessible to Many
                    </p>
                    <ol className="space-y-3 text-sm text-neutral-200 leading-relaxed list-decimal list-inside">
                      {ergoFlow.map((step) => (
                        <li key={step.title}>
                          <span className="font-semibold">
                            {step.title}
                            {step.subtitle ? ` (${step.subtitle})` : ''}:
                          </span>{' '}
                          <span className="font-normal">{step.description}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-3 text-xs text-neutral-400">
                      Security by work: ASIC-resistant PoW designed for GPU miners, not just
                      capital-heavy stakers.
                    </p>
                  </div>
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
                    'Ergo Autolykos mining overview',
                    'Proof-of-Work vs Proof-of-Stake',
                    'ASIC resistance and GPU mining',
                    'Decentralization and reward distribution',
                    'How Ergo secures its network',
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



