"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { PageTransition } from "@/components/animations/page-transition";
import { ArrowRight, Scale, Shield, Zap, Eye, Users, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Scale,
  Zap,
  Eye,
  Users,
  TrendingUp,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function CompareHubClient() {
  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <PageTransition>
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.section
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Ergo vs <span className="text-orange-400">The World</span>
                </h1>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
                  Understand how Ergo compares to other blockchain platforms.
                  Honest, technical comparisons with no marketing fluff.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
              >
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">PoW</div>
                  <div className="text-sm text-neutral-400">Consensus</div>
                </div>
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">eUTXO</div>
                  <div className="text-sm text-neutral-400">State Model</div>
                </div>
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">Fair</div>
                  <div className="text-sm text-neutral-400">Launch</div>
                </div>
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">Sigma</div>
                  <div className="text-sm text-neutral-400">Privacy</div>
                </div>
              </motion.div>
            </motion.section>

            {/* Comparison Cards Grid */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
              >
                Choose a Comparison
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comparisons.map((comparison) => (
                  <motion.div key={comparison.slug} variants={itemVariants} className="h-full">
                    <Link
                      href={`/compare/ergo-vs-${comparison.slug}`}
                      className="block group h-full"
                    >
                      <div
                        className="bg-black/70 border border-white/10 rounded-2xl p-6 h-full 
                                   hover:border-orange-400/50 hover:bg-black/80 
                                   transition-all duration-300 hover:scale-[1.02] flex flex-col"
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                              style={{
                                backgroundColor: `${comparison.color}20`,
                                color: comparison.color,
                              }}
                            >
                              {comparison.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                                Ergo vs {comparison.name}
                              </h3>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                        </div>

                        {/* Summary */}
                        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                          {comparison.summary.subheadline}
                        </p>

                        {/* Key Points Preview */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {comparison.summary.points.slice(0, 2).map((point, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/5 text-neutral-300 px-2 py-1 rounded-full"
                            >
                              {point.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why Compare Section */}
            <motion.section
              className="mt-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Why These Comparisons <span className="text-orange-400">Matter</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  Every blockchain makes tradeoffs. Understanding these tradeoffs helps you
                  choose the right tool for your needs.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  variants={itemVariants}
                  className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-orange-400/40 transition-colors"
                >
                  <Shield className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Security First</h3>
                  <p className="text-neutral-400 text-sm">
                    Ergo's eUTXO model eliminates entire classes of vulnerabilities that
                    affect account-based chains.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-orange-400/40 transition-colors"
                >
                  <Scale className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Fair Launch</h3>
                  <p className="text-neutral-400 text-sm">
                    No ICO, no premine, no VC allocation. All ERG is earned through mining,
                    like Bitcoin.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-orange-400/40 transition-colors"
                >
                  <Eye className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Programmable Privacy</h3>
                  <p className="text-neutral-400 text-sm">
                    Sigma Protocols enable zero-knowledge proofs without trusted setup,
                    built into the core protocol.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              className="mt-20 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="bg-black border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Build on Ergo?
                </h2>
                <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                  Join a community of builders creating the future of decentralized finance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs/developers"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Start Building
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/ecosystem"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-colors"
                  >
                    Explore Ecosystem
                  </Link>
                </div>
              </motion.div>
            </motion.section>
          </div>
        </PageTransition>
      </div>
    </BackgroundWrapper>
  );
}

