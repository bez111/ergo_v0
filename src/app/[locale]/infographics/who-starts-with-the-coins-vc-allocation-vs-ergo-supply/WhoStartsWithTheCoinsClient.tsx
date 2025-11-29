'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, PieChart, Target, CheckCircle, Eye, Tag } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta } from '@/types/infographic';

interface WhoStartsWithTheCoinsClientProps {
  infographic: InfographicMeta;
}

export function WhoStartsWithTheCoinsClient({
  infographic,
}: WhoStartsWithTheCoinsClientProps) {
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
    'Typical VC chains allocate a large portion of supply to insiders such as VCs, foundations, teams and advisors from day one.',
    'Public sales or airdrops usually represent only a small fraction of the total token supply on VC-style chains.',
    'These insider-heavy allocations mean retail participants arrive last and often at higher prices.',
    'Ergo’s supply schedule features no ICO, no premine and no dedicated VC allocation.',
    'All circulating ERG is earned through block rewards via Proof-of-Work mining rather than distributed through fundraising rounds.',
    'Distribution on Ergo is driven by miners and users who participate in securing the network.',
    'The comparison emphasizes that initial ownership and power structures differ radically between VC chains and Ergo.',
    'Ergo positions itself as fair-launched, with coins discovered over time instead of front-loaded to insiders.',
  ];

  const readingOrder = [
    'Main title: Who Starts With the Coins?',
    'Left panel heading: Typical VC Chain Token Allocation.',
    'Left panel pie chart labels: Public Sale / Airdrop; Team & Advisors; Ecosystem & Incentives; Foundation / Treasury; VC & Private Rounds.',
    'Left panel caption: Large insider chunks from day one. Retail arrives last.',
    'Right panel heading: Ergo Supply Over Time.',
    'Right panel checklist: No ICO. No premine. No VC allocation. Block rewards only – earned via PoW.',
    'Right panel caption: Distribution by miners and users, not by fundraising rounds.',
    'Footer URL: ergoblockchain.org.',
  ];

  const vcAllocation = [
    {
      label: 'VC & Private Rounds',
      description:
        'Large early allocations at discounted prices for funds and private investors.',
    },
    {
      label: 'Foundation / Treasury',
      description:
        'A central pool controlled by the project, often with broad discretion over usage.',
    },
    {
      label: 'Team & Advisors',
      description:
        'Significant slices reserved for founders and advisors with vesting schedules.',
    },
    {
      label: 'Ecosystem & Incentives',
      description:
        'Tokens earmarked for grants, liquidity mining and marketing — often still centrally controlled.',
    },
    {
      label: 'Public Sale / Airdrop',
      description:
        'A comparatively small slice reaching the public at a later, higher price.',
    },
  ];

  const ergoChecklist = [
    'No ICO.',
    'No premine.',
    'No VC allocation.',
    'Block rewards only – earned via PoW.',
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
            subtitle="VC chain token allocations vs Ergo’s fair PoW distribution."
          />

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
                  <PieChart className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled <strong>“Who Starts With the Coins?”</strong>, compares
                  who effectively owns a blockchain’s tokens at the beginning. On the left,{' '}
                  <strong>“Typical VC Chain Token Allocation”</strong> is visualized as a pie chart
                  dominated by slices for VCs, foundations, teams and ecosystem funds, with a much
                  smaller slice reserved for public sale or airdrop.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The caption —{' '}
                  <span className="text-orange-400 font-semibold">
                    “Large insider chunks from day one. Retail arrives last.”
                  </span>{' '}
                  — underlines how most supply is reserved for insiders long before ordinary users
                  can participate. By contrast, the right panel,{' '}
                  <strong>“Ergo Supply Over Time”</strong>, replaces static allocations with a
                  time-based PoW emission, accompanied by a checklist of{' '}
                  <strong>No ICO, No premine, No VC allocation</strong> and{' '}
                  <strong>“Block rewards only – earned via PoW.”</strong>
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  A final line explains that on Ergo,{' '}
                  <strong>“Distribution by miners and users, not by fundraising rounds.”</strong>{' '}
                  The message: although both may use the word “blockchain”, their starting ownership
                  and power structures are fundamentally different — VC chains begin with front-loaded
                  insider allocations, while Ergo’s coins are discovered over time by those who
                  secure the network.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Token allocation vs PoW supply */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <PieChart className="w-6 h-6 text-orange-400" />
                  Who Starts With the Coins, Really?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* VC allocation */}
                  <div className="rounded-2xl bg-white/5 border border-red-500/40 p-4">
                    <h3 className="text-white font-semibold mb-1">
                      Typical VC Chain Token Allocation
                    </h3>
                    <p className="text-xs text-red-300 uppercase tracking-wide mb-3">
                      Large Insider Chunks from Day One
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-200 leading-relaxed">
                      {vcAllocation.map((slice) => (
                        <li key={slice.label}>
                          <span className="font-semibold">{slice.label}:</span>{' '}
                          <span className="font-normal">{slice.description}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-neutral-400">
                      Retail participants usually arrive last and at higher prices, after insiders
                      and teams have secured large allocations.
                    </p>
                  </div>

                  {/* Ergo supply */}
                  <div className="rounded-2xl bg-white/5 border border-green-500/40 p-4">
                    <h3 className="text-white font-semibold mb-1">Ergo Supply Over Time</h3>
                    <p className="text-xs text-green-300 uppercase tracking-wide mb-3">
                      Earned via Proof-of-Work
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-200 leading-relaxed">
                      {ergoChecklist.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-neutral-400">
                      Distribution by miners and users, not by fundraising rounds. All circulating
                      ERG is discovered over time through block rewards on the network itself.
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
                    'Ergo fair launch and distribution',
                    'VC token allocation models',
                    'Proof-of-Work vs fundraising rounds',
                    'Ergo supply schedule',
                    'Cypherpunk approaches to tokenomics',
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



