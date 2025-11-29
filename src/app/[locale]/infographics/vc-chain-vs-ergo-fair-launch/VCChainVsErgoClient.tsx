'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Coins, Users, Zap, Target, CheckCircle, Tag, Shield, Eye } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta } from '@/types/infographic';

interface VCChainVsErgoClientProps {
  infographic: InfographicMeta;
}

export function VCChainVsErgoClient({ infographic }: VCChainVsErgoClientProps) {
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
    "Typical VC chains launch with private sales, ICOs and large insider allocations.",
    "In VC chains, teams, funds and foundations are first in line; the public is last.",
    "Supply and decision-making in VC chains are often concentrated in a few entities.",
    "Many VC chains rely on PoS or ASIC-friendly PoW where capital can buy control.",
    "Ergo launched with a fair PoW distribution: no ICO, no premine, no VC allocation.",
    "On Ergo, miners and users earn coins over time through open, permissionless mining.",
    "Ergo's Autolykos algorithm is memory-hard and GPU-friendly, making centralization harder.",
    "Ergo's long-term security is driven by block rewards and storage rent at the protocol level.",
    "Consensus rules, miners and community governance set the direction of Ergo, not foundations or VCs.",
    "Fair launch plus open PoW provide 'security without masters'."
  ];

  const readingOrder = [
    "Title: Fair & Secure: VC Chain vs Ergo at a Glance.",
    "Left column header: Typical VC Chain.",
    "Middle column header: Aspect.",
    "Right column header: Ergo (PoW + Autolykos).",
    "Row 1 — Aspect: Launch. VC: Private sales, ICO, large insider allocations. Ergo: Fair PoW launch. No ICO, no premine, no VC.",
    "Row 2 — Aspect: Initial Owners. VC: Teams, funds, foundations, public in last in line. Ergo: Miners and users earning coins over time.",
    "Row 3 — Aspect: Monetary Power. VC: A few entities control large chunks of supply. Ergo: Supply widely distributed via open mining.",
    "Row 4 — Aspect: Mining/Sybil Resistance. VC: Often PoS or ASIC-friendly PoW. Capital buys control. Ergo: Memory-hard Autolykos – GPU-friendly, harder to centralize.",
    "Row 5 — Aspect: Long-Term Security. VC: Relies on token price and narrative to keep validators around. Ergo: Block rewards plus storage rent provide protocol-level incentives.",
    "Row 6 — Aspect: Who's in Charge? VC: Foundations, teams, boards and large funds. Ergo: Consensus rules plus miners and community governance.",
    "Footer text: Fair launch + open PoW = security without masters."
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
            <Button
              variant="ghost"
              className="text-neutral-400 hover:text-white"
              onClick={handleBackClick}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Infographics
            </Button>
          </motion.div>

          {/* Header (shared hero layout) */}
          <InfographicHero
            infographic={infographic}
            subtitle="How Ergo's fair PoW launch and Autolykos design differ from typical VC chains."
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

          {/* Description */}
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
                  This infographic contrasts a typical VC chain with Ergo at a glance. On the left side, it shows how VC chains usually launch via private sales, ICOs and large insider allocations, putting teams, funds and foundations first and the public last. A few entities tend to control big chunks of the supply, and networks are often based on PoS or ASIC-friendly PoW where capital can simply buy control.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  On the right side, the Ergo column explains how a fair Proof-of-Work launch with no ICO, no premine and no VC created a different dynamic. Miners and users earn coins over time through open mining, which drives wide supply distribution. Ergo's memory-hard Autolykos algorithm is GPU-friendly and harder to centralize.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Long-term security is anchored in block rewards and storage rent as protocol-level incentives. Governance emerges from consensus rules, miners and community participation instead of corporate control. The bottom line of the infographic reads: <strong className="text-orange-400">"Fair launch + open PoW = security without masters."</strong>
                </p>
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

          {/* Reading Order */}
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

          {/* Comparison Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              VC Chains vs Ergo: The Fundamental Differences
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* VC Chains */}
              <Card className="bg-red-500/10 border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-xl text-red-400 flex items-center gap-3">
                    <Coins className="w-5 h-5" />
                    Typical VC Chain
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Launch Method</h4>
                    <p className="text-neutral-300 text-sm">Private sales, ICOs, large insider allocations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Initial Distribution</h4>
                    <p className="text-neutral-300 text-sm">Teams, funds, foundations first; public last</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Control Structure</h4>
                    <p className="text-neutral-300 text-sm">Few entities control large supply chunks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Consensus</h4>
                    <p className="text-neutral-300 text-sm">Often PoS or ASIC-friendly PoW; capital buys control</p>
                  </div>
                </CardContent>
              </Card>

              {/* Ergo */}
              <Card className="bg-orange-500/10 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400 flex items-center gap-3">
                    <Shield className="w-5 h-5" />
                    Ergo (PoW + Autolykos)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Launch Method</h4>
                    <p className="text-neutral-300 text-sm">Fair PoW launch: no ICO, no premine, no VC</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Initial Distribution</h4>
                    <p className="text-neutral-300 text-sm">Miners and users earning coins over time</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Control Structure</h4>
                    <p className="text-neutral-300 text-sm">Supply widely distributed via open mining</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Consensus</h4>
                    <p className="text-neutral-300 text-sm">Memory-hard Autolykos; GPU-friendly, harder to centralize</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Related Topics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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
                  {["Ergo fair launch", "Autolykos mining", "Ergo monetary policy", "Ergo vs VC chains"].map((topic) => (
                    <Badge key={topic} variant="outline" className="border-neutral-600 text-neutral-300">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Embed Code */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <EmbedCode infographic={infographic} />
          </motion.section>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
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
