"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, RotateCcw, ExternalLink, ArrowRight, CheckCircle, Target, Brain, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { QuizPageWrapper } from "@/components/quiz/quiz-page-wrapper"

interface QuizQuestion {
  id: string
  question: string
  options: {
    text: string
    profiles: string[]
  }[]
}

interface Profile {
  id: string
  name: string
  title: string
  description: string
  icon: string
  color: string
  tools: {
    category: string
    items: { name: string; description: string; link: string }[]
  }[]
  nextSteps: { text: string; link: string }[]
  communityChannels: { name: string; link: string }[]
}

export default function QuizClient() {
  const t = useTranslations("start.quiz")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedProfiles, setSelectedProfiles] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const quizQuestions: QuizQuestion[] = [
    {
      id: "q1",
      question: t("questions.0.question"),
      options: [
        {
          text: t("questions.0.options.0.text"),
          profiles: ["investor", "defi"],
        },
        {
          text: t("questions.0.options.1.text"),
          profiles: ["developer"],
        },
        {
          text: t("questions.0.options.2.text"),
          profiles: ["miner"],
        },
        {
          text: t("questions.0.options.3.text"),
          profiles: ["nft"],
        },
        {
          text: t("questions.0.options.4.text"),
          profiles: ["defi"],
        },
        {
          text: t("questions.0.options.5.text"),
          profiles: ["privacy"],
        },
        {
          text: t("questions.0.options.6.text"),
          profiles: ["learner"],
        },
      ],
    },
    {
      id: "q2",
      question: t("questions.1.question"),
      options: [
        {
          text: t("questions.1.options.0.text"),
          profiles: ["developer", "miner", "privacy"],
        },
        {
          text: t("questions.1.options.1.text"),
          profiles: ["defi", "nft", "miner"],
        },
        {
          text: t("questions.1.options.2.text"),
          profiles: ["investor", "learner", "nft"],
        },
      ],
    },
    {
      id: "q3",
      question: t("questions.2.question"),
      options: [
        {
          text: t("questions.2.options.0.text"),
          profiles: ["investor", "defi"],
        },
        {
          text: t("questions.2.options.1.text"),
          profiles: ["developer"],
        },
        {
          text: t("questions.2.options.2.text"),
          profiles: ["miner"],
        },
        {
          text: t("questions.2.options.3.text"),
          profiles: ["nft"],
        },
        {
          text: t("questions.2.options.4.text"),
          profiles: ["privacy"],
        },
        {
          text: t("questions.2.options.5.text"),
          profiles: ["learner"],
        },
      ],
    },
  ]

  const profiles: Record<string, Profile> = {
    developer: {
      id: "developer",
      name: t("profiles.developer.name"),
      title: t("profiles.developer.title"),
      description: t("profiles.developer.description"),
      icon: "Brain",
      color: "from-purple-500 to-indigo-500",
      tools: [
        {
          category: t("profiles.developer.tools.0.category"),
          items: [
            {
              name: t("profiles.developer.tools.0.items.0.name"),
              description: t("profiles.developer.tools.0.items.0.description"),
              link: t("profiles.developer.tools.0.items.0.link"),
            },
            {
              name: t("profiles.developer.tools.0.items.1.name"),
              description: t("profiles.developer.tools.0.items.1.description"),
              link: t("profiles.developer.tools.0.items.1.link"),
            },
            {
              name: t("profiles.developer.tools.0.items.2.name"),
              description: t("profiles.developer.tools.0.items.2.description"),
              link: t("profiles.developer.tools.0.items.2.link"),
            },
          ],
        },
        {
          category: t("profiles.developer.tools.1.category"),
          items: [
            {
              name: t("profiles.developer.tools.1.items.0.name"),
              description: t("profiles.developer.tools.1.items.0.description"),
              link: t("profiles.developer.tools.1.items.0.link"),
            },
            {
              name: t("profiles.developer.tools.1.items.1.name"),
              description: t("profiles.developer.tools.1.items.1.description"),
              link: t("profiles.developer.tools.1.items.1.link"),
            },
          ],
        },
      ],
      nextSteps: [
        {
          text: t("profiles.developer.nextSteps.0.text"),
          link: t("profiles.developer.nextSteps.0.link"),
        },
        {
          text: t("profiles.developer.nextSteps.1.text"),
          link: t("profiles.developer.nextSteps.1.link"),
        },
        {
          text: t("profiles.developer.nextSteps.2.text"),
          link: t("profiles.developer.nextSteps.2.link"),
        },
      ],
      communityChannels: [
        {
          name: t("profiles.developer.communityChannels.0.name"),
          link: t("profiles.developer.communityChannels.0.link"),
        },
        {
          name: t("profiles.developer.communityChannels.1.name"),
          link: t("profiles.developer.communityChannels.1.link"),
        },
      ],
    },
    investor: {
      id: "investor",
      name: t("profiles.investor.name"),
      title: t("profiles.investor.title"),
      description: t("profiles.investor.description"),
      icon: "Target",
      color: "from-green-500 to-emerald-500",
      tools: [
        {
          category: t("profiles.investor.tools.0.category"),
          items: [
            {
              name: t("profiles.investor.tools.0.items.0.name"),
              description: t("profiles.investor.tools.0.items.0.description"),
              link: t("profiles.investor.tools.0.items.0.link"),
            },
            {
              name: t("profiles.investor.tools.0.items.1.name"),
              description: t("profiles.investor.tools.0.items.1.description"),
              link: t("profiles.investor.tools.0.items.1.link"),
            },
          ],
        },
        {
          category: t("profiles.investor.tools.1.category"),
          items: [
            {
              name: t("profiles.investor.tools.1.items.0.name"),
              description: t("profiles.investor.tools.1.items.0.description"),
              link: t("profiles.investor.tools.1.items.0.link"),
            },
            {
              name: t("profiles.investor.tools.1.items.1.name"),
              description: t("profiles.investor.tools.1.items.1.description"),
              link: t("profiles.investor.tools.1.items.1.link"),
            },
          ],
        },
      ],
      nextSteps: [
        {
          text: t("profiles.investor.nextSteps.0.text"),
          link: t("profiles.investor.nextSteps.0.link"),
        },
        {
          text: t("profiles.investor.nextSteps.1.text"),
          link: t("profiles.investor.nextSteps.1.link"),
        },
      ],
      communityChannels: [
        {
          name: t("profiles.investor.communityChannels.0.name"),
          link: t("profiles.investor.communityChannels.0.link"),
        },
        {
          name: t("profiles.investor.communityChannels.1.name"),
          link: t("profiles.investor.communityChannels.1.link"),
        },
      ],
    },
    defi: {
      id: "defi",
      name: t("profiles.defi.name"),
      title: t("profiles.defi.title"),
      description: t("profiles.defi.description"),
      icon: "Rocket",
      color: "from-orange-500 to-amber-500",
      tools: [
        {
          category: t("profiles.defi.tools.0.category"),
          items: [
            {
              name: t("profiles.defi.tools.0.items.0.name"),
              description: t("profiles.defi.tools.0.items.0.description"),
              link: t("profiles.defi.tools.0.items.0.link"),
            },
            {
              name: t("profiles.defi.tools.0.items.1.name"),
              description: t("profiles.defi.tools.0.items.1.description"),
              link: t("profiles.defi.tools.0.items.1.link"),
            },
          ],
        },
        {
          category: t("profiles.defi.tools.1.category"),
          items: [
            {
              name: t("profiles.defi.tools.1.items.0.name"),
              description: t("profiles.defi.tools.1.items.0.description"),
              link: t("profiles.defi.tools.1.items.0.link"),
            },
            {
              name: t("profiles.defi.tools.1.items.1.name"),
              description: t("profiles.defi.tools.1.items.1.description"),
              link: t("profiles.defi.tools.1.items.1.link"),
            },
          ],
        },
      ],
      nextSteps: [
        {
          text: t("profiles.defi.nextSteps.0.text"),
          link: t("profiles.defi.nextSteps.0.link"),
        },
        {
          text: t("profiles.defi.nextSteps.1.text"),
          link: t("profiles.defi.nextSteps.1.link"),
        },
      ],
      communityChannels: [
        {
          name: t("profiles.defi.communityChannels.0.name"),
          link: t("profiles.defi.communityChannels.0.link"),
        },
        {
          name: t("profiles.defi.communityChannels.1.name"),
          link: t("profiles.defi.communityChannels.1.link"),
        },
      ],
    },
    miner: {
      id: "miner",
      name: t("profiles.miner.name"),
      title: t("profiles.miner.title"),
      description: t("profiles.miner.description"),
      icon: "Rocket",
      color: "from-amber-600 to-red-500",
      tools: [
        {
          category: t("profiles.miner.tools.0.category"),
          items: [
            {
              name: t("profiles.miner.tools.0.items.0.name"),
              description: t("profiles.miner.tools.0.items.0.description"),
              link: t("profiles.miner.tools.0.items.0.link"),
            },
            {
              name: t("profiles.miner.tools.0.items.1.name"),
              description: t("profiles.miner.tools.0.items.1.description"),
              link: t("profiles.miner.tools.0.items.1.link"),
            },
          ],
        },
        {
          category: t("profiles.miner.tools.1.category"),
          items: [
            {
              name: t("profiles.miner.tools.1.items.0.name"),
              description: t("profiles.miner.tools.1.items.0.description"),
              link: t("profiles.miner.tools.1.items.0.link"),
            },
            {
              name: t("profiles.miner.tools.1.items.1.name"),
              description: t("profiles.miner.tools.1.items.1.description"),
              link: t("profiles.miner.tools.1.items.1.link"),
            },
          ],
        },
      ],
      nextSteps: [
        {
          text: t("profiles.miner.nextSteps.0.text"),
          link: t("profiles.miner.nextSteps.0.link"),
        },
        {
          text: t("profiles.miner.nextSteps.1.text"),
          link: t("profiles.miner.nextSteps.1.link"),
        },
      ],
      communityChannels: [
        {
          name: t("profiles.miner.communityChannels.0.name"),
          link: t("profiles.miner.communityChannels.0.link"),
        },
        {
          name: t("profiles.miner.communityChannels.1.name"),
          link: t("profiles.miner.communityChannels.1.link"),
        },
      ],
    },
    nft: {
      id: "nft",
      name: t("profiles.nft.name"),
      title: t("profiles.nft.title"),
      description: t("profiles.nft.description"),
      icon: "Brain",
      color: "from-blue-500 to-indigo-500",
      tools: [
        {
          category: t("profiles.nft.tools.0.category"),
          items: [
            {
              name: t("profiles.nft.tools.0.items.0.name"),
              description: t("profiles.nft.tools.0.items.0.description"),
              link: t("profiles.nft.tools.0.items.0.link"),
            },
            {
              name: t("profiles.nft.tools.0.items.1.name"),
              description: t("profiles.nft.tools.0.items.1.description"),
              link: t("profiles.nft.tools.0.items.1.link"),
            },
          ],
        },
        {
          category: t("profiles.nft.tools.1.category"),
          items: [
            {
              name: t("profiles.nft.tools.1.items.0.name"),
              description: t("profiles.nft.tools.1.items.0.description"),
              link: t("profiles.nft.tools.1.items.0.link"),
            },
            {
              name: t("profiles.nft.tools.1.items.1.name"),
              description: t("profiles.nft.tools.1.items.1.description"),
              link: t("profiles.nft.tools.1.items.1.link"),
            },
          ],
        },
      ],
      nextSteps: [
        {
          text: t("profiles.nft.nextSteps.0.text"),
          link: t("profiles.nft.nextSteps.0.link"),
        },
        {
          text: t("profiles.nft.nextSteps.1.text"),
          link: t("profiles.nft.nextSteps.1.link"),
        },
      ],
      communityChannels: [
        {
          name: t("profiles.nft.communityChannels.0.name"),
          link: t("profiles.nft.communityChannels.0.link"),
        },
        {
          name: t("profiles.nft.communityChannels.1.name"),
          link: t("profiles.nft.communityChannels.1.link"),
        },
      ],
    },
    privacy: {
      id: "privacy",
      name: t("profiles.privacy.name"),
      title: t("profiles.privacy.title"),
      description: t("profiles.privacy.description"),
      icon: "Brain",
      color: "from-purple-500 to-indigo-500",
      tools: [
        {
          category: t("profiles.privacy.tools.0.category"),
          items: [
            {
              name: t("profiles.privacy.tools.0.items.0.name"),
              description: t("profiles.privacy.tools.0.items.0.description"),
              link: t("profiles.privacy.tools.0.items.0.link"),
            },
            {
              name: t("profiles.privacy.tools.0.items.1.name"),
              description: t("profiles.privacy.tools.0.items.1.description"),
              link: t("profiles.privacy.tools.0.items.1.link"),
            },
          ],
        },
        {
          category: t("profiles.privacy.tools.1.category"),
          items: [
            {
              name: t("profiles.privacy.tools.1.items.0.name"),
              description: t("profiles.privacy.tools.1.items.0.description"),
              link: t("profiles.privacy.tools.1.items.0.link"),
            },
            {
              name: t("profiles.privacy.tools.1.items.1.name"),
              description: t("profiles.privacy.tools.1.items.1.description"),
              link: t("profiles.privacy.tools.1.items.1.link"),
            },
          ],
        },
      ],
      nextSteps: [
        {
          text: t("profiles.privacy.nextSteps.0.text"),
          link: t("profiles.privacy.nextSteps.0.link"),
        },
        {
          text: t("profiles.privacy.nextSteps.1.text"),
          link: t("profiles.privacy.nextSteps.1.link"),
        },
      ],
      communityChannels: [
        {
          name: t("profiles.privacy.communityChannels.0.name"),
          link: t("profiles.privacy.communityChannels.0.link"),
        },
        {
          name: t("profiles.privacy.communityChannels.1.name"),
          link: t("profiles.privacy.communityChannels.1.link"),
        },
      ],
    },
    learner: {
      id: "learner",
      name: t("profiles.learner.name"),
      title: t("profiles.learner.title"),
      description: t("profiles.learner.description"),
      icon: "Brain",
      color: "from-blue-500 to-indigo-500",
      tools: [
        {
          category: t("profiles.learner.tools.0.category"),
          items: [
            {
              name: t("profiles.learner.tools.0.items.0.name"),
              description: t("profiles.learner.tools.0.items.0.description"),
              link: t("profiles.learner.tools.0.items.0.link"),
            },
            {
              name: t("profiles.learner.tools.0.items.1.name"),
              description: t("profiles.learner.tools.0.items.1.description"),
              link: t("profiles.learner.tools.0.items.1.link"),
            },
          ],
        },
        {
          category: t("profiles.learner.tools.1.category"),
          items: [
            {
              name: t("profiles.learner.tools.1.items.0.name"),
              description: t("profiles.learner.tools.1.items.0.description"),
              link: t("profiles.learner.tools.1.items.0.link"),
            },
            {
              name: t("profiles.learner.tools.1.items.1.name"),
              description: t("profiles.learner.tools.1.items.1.description"),
              link: t("profiles.learner.tools.1.items.1.link"),
            },
          ],
        },
      ],
      nextSteps: [
        {
          text: t("profiles.learner.nextSteps.0.text"),
          link: t("profiles.learner.nextSteps.0.link"),
        },
        {
          text: t("profiles.learner.nextSteps.1.text"),
          link: t("profiles.learner.nextSteps.1.link"),
        },
      ],
      communityChannels: [
        {
          name: t("profiles.learner.communityChannels.0.name"),
          link: t("profiles.learner.communityChannels.0.link"),
        },
        {
          name: t("profiles.learner.communityChannels.1.name"),
          link: t("profiles.learner.communityChannels.1.link"),
        },
      ],
    },
  }

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
    const selectedProfilesForOption = quizQuestions[currentQuestion].options[optionIndex].profiles

    const updatedProfiles = { ...selectedProfiles }
    selectedProfilesForOption.forEach((profile) => {
      updatedProfiles[profile] = (updatedProfiles[profile] || 0) + 1
    })
    setSelectedProfiles(updatedProfiles)

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      }, 500)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedProfiles({})
    setShowResults(false)
    setSelectedOption(null)
  }

  const getTopProfile = (): Profile => {
    const sortedProfiles = Object.entries(selectedProfiles).sort((a, b) => b[1] - a[1])
    return profiles[sortedProfiles[0][0]]
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <QuizPageWrapper>
      <div className="min-h-screen bg-black text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between mt-2 text-sm text-neutral-400">
                      <span>
                        {t("progress", {
                          current: currentQuestion + 1,
                          total: quizQuestions.length,
                        })}
                      </span>
                      <button onClick={resetQuiz} className="flex items-center hover:text-white transition-colors">
                        <RotateCcw className="w-4 h-4 mr-1" />
                        {t("resetQuiz")}
                      </button>
                    </div>
                  </div>

                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">{quizQuestions[currentQuestion].question}</h2>
                      <div className="space-y-4">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionSelect(index)}
                            className={`w-full text-left p-4 rounded-lg transition-colors ${
                              selectedOption === index
                                ? "bg-orange-500 text-white"
                                : "bg-neutral-800/50 hover:bg-neutral-800"
                            }`}
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setCurrentQuestion(Math.max(0, currentQuestion - 1))
                        setSelectedOption(null)
                      }}
                      disabled={currentQuestion === 0}
                      className="border-neutral-700 text-neutral-300"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      {t("previousQuestion")}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (currentQuestion < quizQuestions.length - 1) {
                          setCurrentQuestion(currentQuestion + 1)
                          setSelectedOption(null)
                        } else {
                          setShowResults(true)
                        }
                      }}
                      disabled={selectedOption === null}
                      className="border-neutral-700 text-neutral-300"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? t("showResults") : t("nextQuestion")}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">{t("results.title")}</h2>
                  <p className="text-xl text-neutral-400">{t("results.subtitle")}</p>
                </div>

                <FadeIn>
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm mb-8">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        {getTopProfile().icon === "Brain" && <Brain className="w-12 h-12 text-purple-400" />}
                        {getTopProfile().icon === "Target" && <Target className="w-12 h-12 text-green-400" />}
                        {getTopProfile().icon === "Rocket" && <Rocket className="w-12 h-12 text-orange-400" />}
                        <div>
                          <h3 className="text-2xl font-bold">{getTopProfile().title}</h3>
                          <p className="text-neutral-400">{getTopProfile().name}</p>
                        </div>
                      </div>
                      <p className="text-lg text-neutral-300 mb-8">{getTopProfile().description}</p>

                      {getTopProfile().tools.map((toolCategory, index) => (
                        <div key={index} className="mb-8">
                          <h4 className="text-lg font-semibold mb-4">{toolCategory.category}</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {toolCategory.items.map((tool, toolIndex) => (
                              <a
                                key={toolIndex}
                                href={tool.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
                              >
                                <h5 className="font-semibold mb-2 flex items-center">
                                  {tool.name}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </h5>
                                <p className="text-sm text-neutral-400">{tool.description}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">{t("results.nextSteps")}</h4>
                        <div className="space-y-4">
                          {getTopProfile().nextSteps.map((step, index) => (
                            <Link
                              key={index}
                              href={step.link}
                              className="flex items-start gap-3 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-300">{step.text}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">{t("results.communityChannels")}</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {getTopProfile().communityChannels.map((channel, index) => (
                            <a
                              key={index}
                              href={channel.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
                            >
                              <span>{channel.name}</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <div className="flex justify-center gap-4">
                  <Button onClick={resetQuiz} className="bg-orange-500 hover:bg-orange-600">
                    {t("retakeQuiz")}
                    <RotateCcw className="w-4 h-4 ml-2" />
                  </Button>
                  <Link href="/start">
                    <Button variant="outline" className="border-neutral-700 text-neutral-300">
                      {t("exploreMore")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </QuizPageWrapper>
  )
}
