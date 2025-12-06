'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { QuestionEntry } from '@/data/questions';

interface RelatedQuestionsProps {
  questions: QuestionEntry[];
  title?: string;
  className?: string;
  /** Compact mode shows fewer details */
  compact?: boolean;
}

const intentColors: Record<string, string> = {
  how_to: 'bg-green-500/10 text-green-400 border-green-500/20',
  what_is: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  compare: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  problem: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  philosophy: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const intentLabels: Record<string, string> = {
  how_to: 'How-to',
  what_is: 'Explainer',
  compare: 'Comparison',
  problem: 'Solution',
  philosophy: 'Philosophy',
};

export function RelatedQuestions({
  questions,
  title = 'Related Questions',
  className = '',
  compact = false,
}: RelatedQuestionsProps) {
  if (!questions.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-neutral-400">
            Common questions about this topic
          </p>
        </div>
      </div>

      <div className={compact ? 'space-y-2' : 'space-y-3'}>
        {questions.map((question) => (
          <Link
            key={question.slug}
            href={`/questions/${question.slug}`}
            className="group block"
          >
            <Card
              className={`
                bg-black border border-white/10 rounded-xl
                hover:border-blue-500/40 hover:bg-blue-500/5
                transition-all duration-300
              `}
            >
              <CardContent className={compact ? 'p-4' : 'p-5'}>
                <div className="flex items-start gap-4">
                  {/* Question icon */}
                  <div
                    className={`
                      flex-shrink-0 w-8 h-8 rounded-lg
                      bg-blue-500/10 border border-blue-500/20
                      flex items-center justify-center
                      group-hover:bg-blue-500/20 group-hover:border-blue-500/30
                      transition-colors
                    `}
                  >
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4
                        className={`
                          font-medium text-white
                          group-hover:text-blue-400 transition-colors
                          ${compact ? 'text-sm line-clamp-1' : 'text-base line-clamp-2'}
                        `}
                      >
                        {question.query}
                      </h4>
                      <ArrowRight
                        className={`
                          flex-shrink-0 text-neutral-500
                          group-hover:text-blue-400 group-hover:translate-x-1
                          transition-all
                          ${compact ? 'w-4 h-4' : 'w-5 h-5'}
                        `}
                      />
                    </div>

                    {!compact && (
                      <>
                        <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
                          {question.shortAnswer}
                        </p>

                        <div className="flex items-center gap-2 mt-3">
                          <Badge
                            variant="outline"
                            className={`text-[10px] ${intentColors[question.intent]}`}
                          >
                            {intentLabels[question.intent]}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-[10px] border-white/10 text-neutral-400"
                          >
                            {question.category}
                          </Badge>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-4 text-center">
        <Link
          href="/questions"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-blue-400 transition-colors"
        >
          View all questions
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.section>
  );
}

export default RelatedQuestions;

