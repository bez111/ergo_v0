/**
 * Utilities for finding related content (blog posts, infographics) by tags
 */

import { blogPosts, BlogPost } from '@/app/[locale]/blog/_lib/blog-data';
import { infographics, InfographicMeta } from '@/data/infographics';

/**
 * Find blog posts that match any of the given tags
 * @param tags - Array of tags to match
 * @param limit - Maximum number of posts to return
 * @returns Array of matching blog posts, sorted by relevance (number of matching tags)
 */
export function getRelatedBlogPosts(tags: string[], limit: number = 4): BlogPost[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  // Score each post by number of matching tags
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
      // Sort by score first, then by date
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });
  
  return scoredPosts.slice(0, limit).map(({ post }) => post);
}

/**
 * Find infographics that match any of the given tags
 * @param tags - Array of tags to match
 * @param limit - Maximum number of infographics to return
 * @returns Array of matching infographics, sorted by relevance
 */
export function getRelatedInfographics(tags: string[], limit: number = 4): InfographicMeta[] {
  if (!tags.length) return [];
  
  const normalizedTags = tags.map(t => t.toLowerCase());
  
  // Score each infographic by number of matching tags
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
      // Sort by score first, then by date
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.infographic.publishDate).getTime() - new Date(a.infographic.publishDate).getTime();
    });
  
  return scoredInfographics.slice(0, limit).map(({ infographic }) => infographic);
}

/**
 * Get all related content (both blog posts and infographics) for given tags
 */
export function getAllRelatedContent(tags: string[], limits?: { posts?: number; infographics?: number }) {
  return {
    blogPosts: getRelatedBlogPosts(tags, limits?.posts || 4),
    infographics: getRelatedInfographics(tags, limits?.infographics || 4),
  };
}

/**
 * Tag mapping for comparison pages
 * Maps comparison slugs to relevant search tags
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
};

/**
 * Get related content for a specific comparison page
 */
export function getRelatedContentForComparison(comparisonSlug: string) {
  const tags = comparisonTagMap[comparisonSlug] || [];
  return getAllRelatedContent(tags);
}

