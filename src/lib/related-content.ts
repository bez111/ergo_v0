/**
 * Utilities for finding related content across all programmatic content types
 * Supports: blog posts, infographics, glossary, questions, playbooks, comparisons
 */

import { blogPosts, BlogPost } from '@/app/[locale]/blog/_lib/blog-data';
import { infographics } from '@/data/infographics';
import { InfographicMeta } from '@/types/infographic';
import { glossaryTerms, GlossaryTerm } from '@/data/glossary';
import { questions, QuestionEntry } from '@/data/questions';
import { playbooks, Playbook } from '@/data/playbooks';
import { comparisons, ComparisonData } from '@/data/comparisons';

// ============================================
// BLOG POSTS
// ============================================

/**
 * Find blog posts that match any of the given tags
 */
export function getRelatedBlogPosts(tags: string[], limit: number = 4): BlogPost[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  const scoredPosts = blogPosts
    .map(post => {
      const postTags = (post.tags || []).map(t => t.toLowerCase());
      const matchCount = normalizedTags.filter(tag => 
        postTags.some(postTag => 
          postTag.includes(tag) || tag.includes(postTag)
        )
      ).length;
      return { post, score: matchCount };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });
  
  return scoredPosts.slice(0, limit).map(({ post }) => post);
}

// ============================================
// INFOGRAPHICS
// ============================================

/**
 * Find infographics that match any of the given tags
 */
export function getRelatedInfographics(tags: string[], limit: number = 4): InfographicMeta[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  const scoredInfographics = infographics
    .map(infographic => {
      const infographicTags = infographic.tags.map(t => t.toLowerCase());
      const matchCount = normalizedTags.filter(tag => 
        infographicTags.some(iTag => 
          iTag.includes(tag) || tag.includes(iTag)
        )
      ).length;
      return { infographic, score: matchCount };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.infographic.publishDate).getTime() - new Date(a.infographic.publishDate).getTime();
    });
  
  return scoredInfographics.slice(0, limit).map(({ infographic }) => infographic);
}

// ============================================
// GLOSSARY TERMS
// ============================================

/**
 * Find glossary terms that match any of the given tags/keywords
 */
export function getRelatedGlossaryTerms(tags: string[], limit: number = 4, excludeSlug?: string): GlossaryTerm[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  const scoredTerms = glossaryTerms
    .filter(term => term.slug !== excludeSlug)
    .map(term => {
      const termTags = [...term.relatedTags, ...term.keywords, term.term].map(t => t.toLowerCase());
      const matchCount = normalizedTags.filter(tag => 
        termTags.some(termTag => 
          termTag.includes(tag) || tag.includes(termTag)
        )
      ).length;
      return { term, score: matchCount };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  
  return scoredTerms.slice(0, limit).map(({ term }) => term);
}

/**
 * Get glossary term by slug
 */
export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(t => t.slug === slug);
}

// ============================================
// QUESTIONS (Q&A)
// ============================================

/**
 * Find questions that match any of the given tags/category
 */
export function getRelatedQuestions(tags: string[], limit: number = 4, excludeSlug?: string): QuestionEntry[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  const scoredQuestions = questions
    .filter(q => q.slug !== excludeSlug)
    .map(question => {
      // Match against category, query text, and keyPoints
      const questionTags = [
        question.category,
        ...question.query.split(' '),
        ...(question.keyPoints || []).flatMap(kp => kp.split(' ')),
      ].map(t => t.toLowerCase());
      
      const matchCount = normalizedTags.filter(tag => 
        questionTags.some(qTag => 
          qTag.includes(tag) || tag.includes(qTag)
        )
      ).length;
      return { question, score: matchCount };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      // Prioritize by score, then by priority field
      if (b.score !== a.score) return b.score - a.score;
      return a.question.priority - b.question.priority;
    });
  
  return scoredQuestions.slice(0, limit).map(({ question }) => question);
}

/**
 * Find questions related to a specific glossary term
 */
export function getQuestionsForGlossaryTerm(termSlug: string, limit: number = 4): QuestionEntry[] {
  const term = getGlossaryTermBySlug(termSlug);
  if (!term) return [];
  
  // Build search tags from term data
  const searchTags = [
    term.term,
    ...term.keywords,
    ...term.relatedTags,
    term.category,
  ];
  
  return getRelatedQuestions(searchTags, limit);
}

/**
 * Get question by slug
 */
export function getQuestionBySlug(slug: string): QuestionEntry | undefined {
  return questions.find(q => q.slug === slug);
}

// ============================================
// PLAYBOOKS
// ============================================

/**
 * Find playbooks that match any of the given tags
 */
export function getRelatedPlaybooks(tags: string[], limit: number = 3, excludeSlug?: string): Playbook[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  const scoredPlaybooks = playbooks
    .filter(p => p.slug !== excludeSlug)
    .map(playbook => {
      const playbookTags = [
        ...playbook.keywords,
        ...(playbook.relatedInfographicTags || []),
        ...(playbook.relatedBlogTags || []),
        playbook.title,
      ].map(t => t.toLowerCase());
      
      const matchCount = normalizedTags.filter(tag => 
        playbookTags.some(pTag => 
          pTag.includes(tag) || tag.includes(pTag)
        )
      ).length;
      return { playbook, score: matchCount };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  
  return scoredPlaybooks.slice(0, limit).map(({ playbook }) => playbook);
}

/**
 * Get playbook by slug
 */
export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return playbooks.find(p => p.slug === slug);
}

// ============================================
// COMPARISONS
// ============================================

/**
 * Find comparisons that match any of the given tags
 */
export function getRelatedComparisons(tags: string[], limit: number = 3, excludeSlug?: string): ComparisonData[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  const scoredComparisons = comparisons
    .filter(c => c.slug !== excludeSlug)
    .map(comparison => {
      const comparisonTags = [
        ...comparison.relatedTags,
        ...comparison.keywords,
        comparison.name,
      ].map(t => t.toLowerCase());
      
      const matchCount = normalizedTags.filter(tag => 
        comparisonTags.some(cTag => 
          cTag.includes(tag) || tag.includes(cTag)
        )
      ).length;
      return { comparison, score: matchCount };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  
  return scoredComparisons.slice(0, limit).map(({ comparison }) => comparison);
}

/**
 * Get comparison by slug
 */
export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return comparisons.find(c => c.slug === slug);
}

// ============================================
// UNIFIED "SEE ALSO" DATA
// ============================================

export interface SeeAlsoData {
  glossaryTerms: GlossaryTerm[];
  questions: QuestionEntry[];
  playbooks: Playbook[];
  comparisons: ComparisonData[];
  infographics: InfographicMeta[];
  blogPosts: BlogPost[];
}

/**
 * Get all related content across all programmatic types
 * Used for "See Also" sections
 */
export function getSeeAlsoContent(
  tags: string[],
  options?: {
    excludeGlossarySlug?: string;
    excludeQuestionSlug?: string;
    excludePlaybookSlug?: string;
    excludeComparisonSlug?: string;
    limits?: {
      glossary?: number;
      questions?: number;
      playbooks?: number;
      comparisons?: number;
      infographics?: number;
      blogPosts?: number;
    };
  }
): SeeAlsoData {
  const limits = options?.limits || {};
  
  return {
    glossaryTerms: getRelatedGlossaryTerms(tags, limits.glossary || 3, options?.excludeGlossarySlug),
    questions: getRelatedQuestions(tags, limits.questions || 3, options?.excludeQuestionSlug),
    playbooks: getRelatedPlaybooks(tags, limits.playbooks || 2, options?.excludePlaybookSlug),
    comparisons: getRelatedComparisons(tags, limits.comparisons || 2, options?.excludeComparisonSlug),
    infographics: getRelatedInfographics(tags, limits.infographics || 3),
    blogPosts: getRelatedBlogPosts(tags, limits.blogPosts || 3),
  };
}

/**
 * Get all related content (both blog posts and infographics) for given tags
 * Legacy function for backwards compatibility
 */
export function getAllRelatedContent(tags: string[], limits?: { posts?: number; infographics?: number }) {
  return {
    blogPosts: getRelatedBlogPosts(tags, limits?.posts || 4),
    infographics: getRelatedInfographics(tags, limits?.infographics || 4),
  };
}

// ============================================
// TAG MAPPINGS
// ============================================

/**
 * Tag mapping for comparison pages
 */
export const comparisonTagMap: Record<string, string[]> = {
  bitcoin: ['Bitcoin', 'BTC', 'UTXO', 'PoW', 'Proof-of-Work', 'fair launch', 'mining'],
  ethereum: ['Ethereum', 'ETH', 'EVM', 'Solidity', 'PoS', 'smart contracts', 'DeFi', 'MEV'],
  cardano: ['Cardano', 'ADA', 'eUTXO', 'Plutus', 'PoS', 'Ouroboros'],
  monero: ['Monero', 'XMR', 'privacy', 'ring signatures', 'privacy coin'],
  zcash: ['Zcash', 'ZEC', 'zk-SNARKs', 'privacy', 'zero-knowledge', 'shielded'],
  solana: ['Solana', 'SOL', 'PoS', 'high TPS', 'VC chain'],
  cbdc: ['CBDC', 'central bank', 'surveillance', 'financial freedom', 'censorship'],
  'vc-chains': ['VC', 'venture capital', 'ICO', 'premine', 'fair launch', 'tokenomics'],
  avalanche: ['Avalanche', 'AVAX', 'PoS', 'VC funding', 'EVM', 'smart contracts'],
  algorand: ['Algorand', 'ALGO', 'Pure PoS', 'MIT', 'enterprise'],
  litecoin: ['Litecoin', 'LTC', 'PoW', 'payments', 'MWEB'],
};

/**
 * Get related content for a specific comparison page
 */
export function getRelatedContentForComparison(comparisonSlug: string) {
  const tags = comparisonTagMap[comparisonSlug] || [];
  return getAllRelatedContent(tags);
}

