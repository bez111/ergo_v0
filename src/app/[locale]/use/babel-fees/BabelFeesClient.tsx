"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/navigation"
import {
  Coins,
  ArrowRightLeft,
  Shield,
  Users,
  Zap,
  CheckCircle,
  Info,
  TrendingUp,
  Wallet,
  Network,
  ExternalLink,
  ArrowDown,
  ArrowRight,
} from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function BabelFeesClient() {
  const t = useTranslations('use.babelFees')
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-28 pb-10 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t('title')}</h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                {t('subtitle')}
              </p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                {t('description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                  <Link href="#how-it-works">{t('buttons.howItWorks')}</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-neutral-900/40 px-6 py-3 rounded-xl">
                  <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" target="_blank">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('buttons.eip0019')}
                  </Link>
                </Button>
              </div>
            </div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">{t('feeOptions.title')}</h3>
                  <div className="space-y-4">
                    {[
                      { name: t('feeOptions.options.erg.name'), icon: Coins, desc: t('feeOptions.options.erg.description') },
                      { name: t('feeOptions.options.anyToken.name'), icon: ArrowRightLeft, desc: t('feeOptions.options.anyToken.description') },
                      { name: t('feeOptions.options.autoExchange.name'), icon: Zap, desc: t('feeOptions.options.autoExchange.description') },
                    ].map((option) => (
                      <div key={option.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400">
                            <option.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{option.name}</h4>
                            <p className="text-sm text-neutral-400">{option.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
            
            {/* Why Fees Are Necessary */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Shield className="w-6 h-6 text-orange-400" />
                    {t('whyFees.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {t('whyFees.description')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Users className="w-8 h-8 text-orange-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-orange-400">{t('whyFees.reasons.miners.title')}</h4>
                      <p className="text-sm text-neutral-300">
                        {t('whyFees.reasons.miners.description')}
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Shield className="w-8 h-8 text-orange-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-orange-400">{t('whyFees.reasons.spam.title')}</h4>
                      <p className="text-sm text-neutral-300">
                        {t('whyFees.reasons.spam.description')}
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Network className="w-8 h-8 text-orange-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-orange-400">{t('whyFees.reasons.network.title')}</h4>
                      <p className="text-sm text-neutral-300">
                        {t('whyFees.reasons.network.description')}
                      </p>
                    </div>
                  </div>
                  <Alert className="border-orange-500/30 bg-orange-500/10">
                    <Info className="h-4 w-4 text-orange-400" />
                    <AlertDescription className="text-neutral-300">
                      <strong className="text-white">{t('whyFees.standardPayment.title')}:</strong> {t('whyFees.standardPayment.description')}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </motion.div>

            {/* What Are Babel Fees */}
            <motion.div variants={itemVariants} id="how-it-works">
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Coins className="w-6 h-6 text-orange-400" />
                    {t('introduction.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-orange-400">{t('introduction.whatAre.title')}</h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {t('introduction.whatAre.description')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-400">
                      {t('introduction.whyCreated.title')}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-orange-400">{t('introduction.whyCreated.reasons.ux.title')}:</strong>
                          <p className="text-neutral-300 mt-1">
                            {t('introduction.whyCreated.reasons.ux.description')}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-orange-400">{t('introduction.whyCreated.reasons.utility.title')}:</strong>
                          <p className="text-neutral-300 mt-1">
                            {t('introduction.whyCreated.reasons.utility.description')}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-orange-400">{t('introduction.whyCreated.reasons.accessibility.title')}:</strong>
                          <p className="text-neutral-300 mt-1">
                            {t('introduction.whyCreated.reasons.accessibility.description')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* How Babel Fees Work */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <ArrowRightLeft className="w-6 h-6 text-orange-400" />
                    {t('howItWorks.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {t('howItWorks.description')}
                  </p>
                  
                  {/* Process Flow */}
                  <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-center text-orange-400">{t('howItWorks.processFlow.title')}</h4>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Wallet className="w-8 h-8 text-orange-400" />
                        </div>
                        <p className="text-sm text-neutral-300">{t('howItWorks.processFlow.steps.userOffer')}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-orange-400 hidden md:block" />
                      <ArrowDown className="w-6 h-6 text-orange-400 md:hidden" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Network className="w-8 h-8 text-orange-400" />
                        </div>
                        <p className="text-sm text-neutral-300">{t('howItWorks.processFlow.steps.intermediaryDetects')}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-orange-400 hidden md:block" />
                      <ArrowDown className="w-6 h-6 text-orange-400 md:hidden" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Coins className="w-8 h-8 text-orange-400" />
                        </div>
                        <p className="text-sm text-neutral-300">{t('howItWorks.processFlow.steps.ergFeePaid')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="text-lg font-semibold mb-2 text-orange-400">{t('howItWorks.details.userOffer.title')}</h4>
                      <p className="text-neutral-300">
                        {t('howItWorks.details.userOffer.description')}
                      </p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="text-lg font-semibold mb-3 text-orange-400">
                        {t('howItWorks.details.intermediaries.title')}
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                          <strong className="text-orange-400">{t('howItWorks.details.intermediaries.steps.detecting.title')}:</strong>
                          <p className="text-neutral-300 mt-1">
                            {t('howItWorks.details.intermediaries.steps.detecting.description')}
                          </p>
                        </div>
                        <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                          <strong className="text-orange-400">{t('howItWorks.details.intermediaries.steps.executing.title')}:</strong>
                          <p className="text-neutral-300 mt-1">
                            {t('howItWorks.details.intermediaries.steps.executing.description')}
                          </p>
                        </div>
                        <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                          <strong className="text-orange-400">{t('howItWorks.details.intermediaries.steps.paying.title')}:</strong>
                          <p className="text-neutral-300 mt-1">
                            {t('howItWorks.details.intermediaries.steps.paying.description')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="text-lg font-semibold mb-2 text-orange-400">{t('howItWorks.details.market.title')}</h4>
                      <p className="text-neutral-300">
                        {t('howItWorks.details.market.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants} id="benefits">
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                    {t('benefits.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        {t('benefits.categories.users.title')}
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">{t('benefits.categories.users.benefits.convenience.title')}:</strong> {t('benefits.categories.users.benefits.convenience.description')}
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">{t('benefits.categories.users.benefits.friction.title')}:</strong> {t('benefits.categories.users.benefits.friction.description')}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        {t('benefits.categories.developers.title')}
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">{t('benefits.categories.developers.benefits.utility.title')}:</strong> {t('benefits.categories.developers.benefits.utility.description')}
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">{t('benefits.categories.developers.benefits.ux.title')}:</strong> {t('benefits.categories.developers.benefits.ux.description')}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                        <Network className="w-5 h-5" />
                        {t('benefits.categories.ecosystem.title')}
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <div>{t('benefits.categories.ecosystem.benefits.userFriendly')}</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <div>{t('benefits.categories.ecosystem.benefits.tokenEconomy')}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Practical Considerations */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Wallet className="w-6 h-6 text-orange-400" />
                    {t('practicalConsiderations.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        {t('practicalConsiderations.considerations.walletSupport.title')}
                      </h4>
                      <p className="text-sm text-neutral-300">
                        {t('practicalConsiderations.considerations.walletSupport.description')}
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <Coins className="w-4 h-4" />
                        {t('practicalConsiderations.considerations.tokenAcceptance.title')}
                      </h4>
                      <p className="text-sm text-neutral-300">
                        {t('practicalConsiderations.considerations.tokenAcceptance.description')}
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {t('practicalConsiderations.considerations.exchangeRates.title')}
                      </h4>
                      <p className="text-sm text-neutral-300">
                        {t('practicalConsiderations.considerations.exchangeRates.description')}
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        {t('practicalConsiderations.considerations.howToUse.title')}
                      </h4>
                      <p className="text-sm text-neutral-300">
                        {t('practicalConsiderations.considerations.howToUse.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Current Status */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Zap className="w-6 h-6 text-orange-400" />
                    {t('currentStatus.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-yellow-500/30 bg-yellow-500/10">
                    <Info className="h-4 w-4 text-yellow-400" />
                    <AlertDescription className="text-neutral-300">
                      <strong className="text-white">{t('currentStatus.alert.title')}:</strong> {t('currentStatus.alert.description')}
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-4">
                    <p className="text-neutral-300">Key questions about current adoption:</p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-300">
                          {t('currentStatus.questions.adoption')}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-300">
                          {t('currentStatus.questions.markets')}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-300">
                          {t('currentStatus.questions.development')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="border-orange-500/50 hover:bg-orange-500/10 text-orange-400">
                    <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('currentStatus.checkUpdates')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Comparison */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{t('comparison.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 text-orange-400 flex items-center gap-2">
                        <Coins className="w-5 h-5" />
                        {t('comparison.ergFees.title')}
                      </h4>
                      <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ✓
                          </Badge>
                          <span>{t('comparison.ergFees.features.accepted')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ✓
                          </Badge>
                          <span>{t('comparison.ergFees.features.reliable')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ✓
                          </Badge>
                          <span>{t('comparison.ergFees.features.stable')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ✓
                          </Badge>
                          <span>{t('comparison.ergFees.features.supported')}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 text-orange-400 flex items-center gap-2">
                        <ArrowRightLeft className="w-5 h-5" />
                        {t('comparison.babelFees.title')}
                      </h4>
                      <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ⚡
                          </Badge>
                          <span>{t('comparison.babelFees.features.flexibility')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ⚡
                          </Badge>
                          <span>{t('comparison.babelFees.features.availability')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ⚡
                          </Badge>
                          <span>{t('comparison.babelFees.features.intermediary')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ⚡
                          </Badge>
                          <span>{t('comparison.babelFees.features.rates')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Conclusion */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-white">{t('conclusion.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    {t('conclusion.description')}
                  </p>
                  <p className="text-neutral-400">
                    {t('conclusion.note')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-white">{t('cta.title')}</h2>
            <p className="text-xl text-neutral-300 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                <Link href="/use/get-erg">
                  <Wallet className="w-5 h-5 mr-2" />
                  {t('cta.buttons.exploreWallets')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60">
                <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" target="_blank">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {t('cta.buttons.learnMore')}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
