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
  Zap,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface ErgoPrivacyClientProps {
  infographic: InfographicMeta;
}

export function ErgoPrivacyClient({ infographic }: ErgoPrivacyClientProps) {
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
    'Sigma Protocols provide zero-knowledge proofs that enable private transactions and complex spending conditions.',
    'Ergo’s eUTXO model is a privacy-enhancing transaction model with discrete, one-time use outputs.',
    'The eUTXO design improves the anonymity set relative to account-based models.',
    'ErgoMixer is a decentralized, non-custodial and trustless mixer that breaks links between sender and receiver.',
    'ErgoMixer leverages Sigma Protocols to provide secure, on-chain mixing.',
    'NiPoPoWs are non-interactive proofs that let light clients verify state without downloading the full blockchain.',
    'Using NiPoPoWs reduces data leakage and strengthens privacy for mobile and low-power users.',
    'All of Ergo’s privacy features are integrated at the protocol and application layers, not bolted on through trusted custodians.',
    'The stack is designed to be efficient, non-interactive and compatible with decentralized usage.',
    'Ergo’s privacy approach avoids reliance on trusted third parties while maintaining strong cryptographic guarantees.',
  ];

  const readingOrder = [
    'Main title: Ergo Privacy: Non-Interactive & Efficient.',
    'Top-left panel heading: Sigma Protocols (Zero-Knowledge Proofs). Text: Core cryptographic building blocks. Prove knowledge of a secret without revealing the secret itself. Enables private transactions and complex conditions.',
    'Top-right panel heading: eUTXO Model (Extended UTXO). Text: Privacy-enhancing transaction model. Discrete, one-time use outputs. Improved anonymity set compared to account-based models.',
    'Bottom-left panel heading: ErgoMixer (Decentralized Mixer). Text: Non-custodial, trustless mixing service. Breaks links between sender and receiver. Leverages Sigma Protocols for secure mixing.',
    'Bottom-right panel heading: NiPoPoWs (Non-Interactive Proofs). Text: Light clients verify state without full chain download. Reduces data leakage and enhances privacy for mobile users.',
    'Footer text: Ergo’s privacy features are built-in, efficient, and don’t require trusted third parties.',
    'Bottom line: Based on ergoblockchain.org/technology/privacy-features.',
  ];

  const topPanels = [
    {
      title: 'Sigma Protocols (Zero-Knowledge Proofs)',
      icon: Shield,
      summary: 'Core cryptographic building blocks for privacy.',
      details:
        'Let users prove knowledge of a secret without revealing it, enabling private transactions and complex spending conditions that still verify on-chain.',
    },
    {
      title: 'eUTXO Model (Extended UTXO)',
      icon: Layers,
      summary: 'Privacy-enhancing transaction model.',
      details:
        'Uses discrete, one-time use outputs with clear boundaries between spends, improving anonymity sets compared to account-based balances.',
    },
  ];

  const bottomPanels = [
    {
      title: 'ErgoMixer (Decentralized Mixer)',
      icon: Zap,
      summary: 'Non-custodial, trustless mixing.',
      details:
        'Breaks links between sender and receiver while keeping funds under user control. Built on Sigma Protocols to provide secure, on-chain mixing without custodians.',
    },
    {
      title: 'NiPoPoWs (Non-Interactive Proofs)',
      icon: Target,
      summary: 'Light clients with strong privacy.',
      details:
        'Allow mobile and low-power users to verify state using compact proofs instead of full-chain downloads, reducing data leakage and improving privacy for everyday usage.',
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
            subtitle="How Sigma Protocols, eUTXO, ErgoMixer and NiPoPoWs deliver built-in privacy without trusted third parties."
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
                  This infographic, titled <strong>“Ergo Privacy: Non-Interactive & Efficient”</strong>,
                  outlines the main components of Ergo’s privacy design. The Sigma Protocols panel describes
                  zero-knowledge proofs as core cryptographic building blocks that let users prove knowledge
                  of a secret without revealing it, enabling private transactions and complex conditions.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The eUTXO Model panel explains how Ergo’s extended UTXO model offers a privacy-enhancing
                  transaction structure with discrete, one-time use outputs and a stronger anonymity set than
                  typical account-based models. On the lower row, the ErgoMixer panel introduces a
                  decentralized, non-custodial mixing service that breaks links between sender and receiver
                  while leveraging Sigma Protocols for secure, on-chain mixing.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The NiPoPoWs panel highlights non-interactive proofs that let light clients verify state
                  without downloading the full chain, reducing data leakage and strengthening privacy for
                  mobile users. A footer summarises the message: Ergo’s privacy features are built-in,
                  efficient and do not require trusted third parties, with a reference to{' '}
                  <span className="text-orange-400 font-semibold">
                    ergoblockchain.org/technology/privacy-features
                  </span>
                  .
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Top panels */}
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
                  Cryptographic & Model Foundations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {topPanels.map((panel) => (
                    <div
                      key={panel.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
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

          {/* Bottom panels */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Shield className="w-6 h-6 text-orange-400" />
                  Tools Built on Top
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {bottomPanels.map((panel) => (
                    <div
                      key={panel.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
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

          {/* Key Points */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
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
            transition={{ duration: 0.6, delay: 0.5 }}
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
            transition={{ duration: 0.6, delay: 0.55 }}
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
                    'Ergo privacy features',
                    'Sigma Protocols and zero-knowledge',
                    'ErgoMixer overview',
                    'eUTXO and anonymity sets',
                    'NiPoPoWs and light clients',
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <EmbedCode infographic={infographic} />
          </motion.section>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
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


