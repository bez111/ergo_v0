"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { comparisons } from "@/data/comparisons";
import { infographics, filterInfographics } from "@/data/infographics";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { PageTransition } from "@/components/animations/page-transition";
import { FinalCTASimple } from "@/components/home/final-cta-simple";
import { Badge } from "@/components/ui/badge";
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
  const t = useTranslations("compare.hub");
  const comparisonInfographics = filterInfographics(infographics, {
    category: "comparisons-matrices",
    sort: "popular",
  }).slice(0, 6);

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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  {t("title")}
                </h1>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
                  {t("subtitle")}
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
              >
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">PoW</div>
                  <div className="text-sm text-neutral-400">{t("quickStats.consensus")}</div>
                </div>
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">eUTXO</div>
                  <div className="text-sm text-neutral-400">{t("quickStats.stateModel")}</div>
                </div>
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">Fair</div>
                  <div className="text-sm text-neutral-400">{t("quickStats.launch")}</div>
                </div>
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 hover:border-orange-400/40 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">Sigma</div>
                  <div className="text-sm text-neutral-400">{t("quickStats.privacy")}</div>
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
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {t("chooseComparison")}
                </h2>
                <Link
                  href="/start/comparison"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 transition-colors"
                >
                  {t("seeFullComparisonTable")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label={t("aria.comparisonsList")}>
                {comparisons.map((comparison) => (
                  <motion.div key={comparison.slug} variants={itemVariants} className="h-full" role="listitem">
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
                                {t("card.title", { name: comparison.name })}
                              </h3>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
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
                  {t("whyMatters")}
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  {t("whyMattersSubtitle")}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  variants={itemVariants}
                  className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-orange-400/40 transition-colors"
                >
                  <Shield className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{t("securityFirst")}</h3>
                  <p className="text-neutral-400 text-sm">
                    {t("securityFirstDesc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-orange-400/40 transition-colors"
                >
                  <Scale className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{t("fairLaunch")}</h3>
                  <p className="text-neutral-400 text-sm">
                    {t("fairLaunchDesc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-orange-400/40 transition-colors"
                >
                  <Eye className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{t("programmablePrivacy")}</h3>
                  <p className="text-neutral-400 text-sm">
                    {t("programmablePrivacyDesc")}
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* Visual Comparisons & Matrices */}
            {comparisonInfographics.length > 0 && (
              <motion.section
                className="mt-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {t("visualSection.title")}
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
                      {t("visualSection.subtitle")}
                    </p>
                  </div>
                  <Link
                    href="/infographics?category=comparisons-matrices&sort=popular"
                    className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 transition-colors"
                  >
                    {t("visualSection.viewAll")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  role="list"
                  aria-label={t("aria.visualComparisonsList")}
                >
                  {comparisonInfographics.map((info, index) => (
                    <motion.div
                      key={info.slug}
                      variants={itemVariants}
                      role="listitem"
                      className="h-full"
                    >
                      <Link
                        href={`/infographics/${info.slug}`}
                        className="block group h-full"
                      >
                        <div
                          className="bg-black/70 border border-white/10 rounded-2xl p-6 h-full 
                                     hover:border-orange-400/50 hover:bg-black/80 
                                     transition-all duration-300 hover:scale-[1.02] flex flex-col"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant="outline"
                              className="border-orange-500/40 bg-orange-500/5 text-[10px] font-semibold uppercase tracking-wide text-orange-300"
                            >
                              {t("visualSection.badge")}
                            </Badge>
                            {info.readingTimeMinutes && (
                              <span className="text-[11px] text-neutral-400">
                                {info.readingTimeMinutes} {t("min")}
                              </span>
                            )}
                          </div>

                          <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                            {info.title}
                          </h3>
                          <p className="text-sm text-neutral-400 mb-4 line-clamp-3">
                            {info.shortDescription}
                          </p>

                          <div className="mt-auto flex items-center justify-between text-xs text-neutral-500">
                            <span className="truncate max-w-[60%]">
                              {info.tags.slice(0, 2).join(" • ")}
                            </span>
                            <span className="inline-flex items-center gap-1 text-orange-400">
                              <span>Open infographic</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

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
                  {t("readyToBuild")}
                </h2>
                <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                  {t("readyToBuildDesc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs/developers"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    {t("startBuilding")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/ecosystem"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-colors"
                  >
                    {t("exploreEcosystem")}
                  </Link>
                </div>
              </motion.div>
            </motion.section>
          </div>
        </PageTransition>
      </div>

      <FinalCTASimple />
    </BackgroundWrapper>
  );
}

