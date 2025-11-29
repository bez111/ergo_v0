'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Zap, Layers, Target, CheckCircle, Eye, Tag } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta } from '@/types/infographic';

interface ThreePillarsErgoClientProps {
  infographic: InfographicMeta;
}

export function ThreePillarsErgoClient({ infographic }: ThreePillarsErgoClientProps) {
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
    'Ergo’s sustainability is built into the protocol, not bolted on later.',
    'Autolykos is a memory-hard, ASIC-resistant PoW algorithm that supports a wider, more decentralized miner set.',
    'NiPoPoWs enable light clients with around 100 KB of proof data, allowing users to verify the chain on mobile and low-power devices.',
    'Storage rent charges inactive boxes after roughly four years, cleaning up the state and providing extra income for miners.',
    'These three mechanisms work together as pillars of long-term viability for the network.',
    'The ultimate goal is to keep running a full node accessible to more than just data centers even 10+ years from now.',
  ];

  const readingOrder = [
    'Top title: The Three Pillars of Ergo’s Sustainability.',
    'Central label: Protocol-level mechanisms for long-term viability.',
    'Top block: Autolykos (Mining). Bullet points: Memory-hard. ASIC-resistant. Wider set of miners.',
    'Bottom-left block: NiPoPoWs (Nodes). Bullet points: Light client around 100 KB of proof data (well under 1 MB). Don’t trust, verify — even on mobile and low-power devices.',
    'Bottom-right block: Storage Rent (State). Bullet points: Inactive boxes after approximately 4 years pay rent, leading to state cleanup and additional income for miners.',
    'Footer bar: Goal: To keep running a full node accessible to more than just data centers 10+ years from now.',
    'Small text at the bottom: Based on ergoblockchain.org.',
  ];

  const pillars = [
    {
      title: 'Autolykos (Mining)',
      icon: Zap,
      summary: 'Memory-hard, ASIC-resistant Proof-of-Work.',
      details:
        'Keeps mining accessible to GPU miners rather than a small ASIC cartel, supporting wider decentralization at the base layer.',
    },
    {
      title: 'NiPoPoWs (Nodes)',
      icon: Layers,
      summary: 'Light clients with ~100 KB of proof data.',
      details:
        'Let users verify the chain directly on mobile and low-power devices without trusting full-node middlemen.',
    },
    {
      title: 'Storage Rent (State)',
      icon: Shield,
      summary: 'State cleanup and miner incentives.',
      details:
        'Inactive boxes after ~4 years pay rent, shrinking the state and providing additional income for miners over time.',
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

          {/* Header (shared hero layout) */}
          <InfographicHero
            infographic={infographic}
            subtitle="Protocol-level mechanisms that keep Ergo viable and accessible for the long run."
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
                  This infographic presents <strong>“The Three Pillars of Ergo’s Sustainability.”</strong> At the
                  top, the Autolykos (Mining) block highlights Ergo’s memory-hard, ASIC-resistant mining algorithm
                  that keeps Proof-of-Work accessible to a wider set of miners instead of a small ASIC cartel.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  At the bottom left, the NiPoPoWs (Nodes) block shows how Non-Interactive Proofs of Proof-of-Work
                  enable light clients with around 100 KB of proof data — well under 1 MB — so users can verify the
                  chain without trusting third parties, even on mobile and low-power devices. At the bottom right,
                  the Storage Rent (State) block describes how inactive boxes after roughly four years pay rent,
                  triggering state cleanup and providing additional income for miners.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  In the center, a label ties everything together:{" "}
                  <span className="text-orange-400 font-semibold">
                    “Protocol-level mechanisms for long-term viability.”
                  </span>{" "}
                  The footer states the overarching goal:{" "}
                  <span className="text-orange-400 font-semibold">
                    “To keep running a full node accessible to more than just data centers 10+ years from now.”
                  </span>{" "}
                  The design emphasizes that Ergo thinks about sustainability at the protocol level, not as a
                  marketing afterthought.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Pillars */}
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
                  The Three Pillars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {pillars.map((pillar) => (
                    <div key={pillar.title} className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/40">
                          <pillar.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{pillar.title}</h3>
                          <p className="text-xs text-neutral-400">{pillar.summary}</p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-200 leading-relaxed">{pillar.details}</p>
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
                    'Autolykos mining',
                    'NiPoPoWs and light clients',
                    'Storage rent in Ergo',
                    'Ergo long-term sustainability',
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


