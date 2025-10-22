// AI-Powered Internal Linking System for Maximum SEO
// Automatically creates contextual links between related content

import { blogPosts } from '@/src/app/[locale]/blog/_lib/blog-data'
import { menuData } from '@/src/app/[locale]/docs/menuData'

interface ContentNode {
  id: string
  url: string
  title: string
  description: string
  keywords: string[]
  category: string
  type: 'blog' | 'doc' | 'page'
  relevanceScore?: number
  content?: string
}

interface LinkSuggestion {
  text: string
  url: string
  title: string
  relevance: number
  context: string
}

// Build content graph
export function buildContentGraph(): ContentNode[] {
  const nodes: ContentNode[] = []
  
  // Add blog posts
  blogPosts.forEach(post => {
    nodes.push({
      id: `blog-${post.slug}`,
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      keywords: [...(post.tags || []), post.category.toLowerCase()],
      category: post.category,
      type: 'blog',
      content: post.excerpt, // In real app, would use full content
    })
  })
  
  // Add documentation pages
  const flattenDocs = (items: any[], nodes: ContentNode[]) => {
    items.forEach(item => {
      if (item.href && item.label) {
        nodes.push({
          id: `doc-${item.href}`,
          url: item.href,
          title: item.label,
          description: item.description || `Documentation for ${item.label}`,
          keywords: extractKeywords(item.label),
          category: 'Documentation',
          type: 'doc',
        })
      }
      if (item.items) {
        flattenDocs(item.items, nodes)
      }
    })
  }
  flattenDocs(menuData, nodes)
  
  // Add main pages
  const mainPages = [
    {
      url: '/wallet',
      title: 'Ergo Wallets',
      keywords: ['wallet', 'nautilus', 'satergo', 'storage', 'security'],
      description: 'Choose from trusted Ergo wallets',
    },
    {
      url: '/technology',
      title: 'Ergo Technology',
      keywords: ['technology', 'eutxo', 'ergoscript', 'nipopows', 'privacy'],
      description: 'Advanced blockchain technology',
    },
    {
      url: '/ecosystem',
      title: 'Ergo Ecosystem',
      keywords: ['ecosystem', 'dapps', 'defi', 'nft', 'projects'],
      description: 'Explore Ergo ecosystem',
    },
    {
      url: '/use/mining',
      title: 'Mine Ergo',
      keywords: ['mining', 'autolykos', 'gpu', 'pools', 'hashrate'],
      description: 'Start mining Ergo',
    },
    {
      url: '/use/get-erg',
      title: 'Buy Ergo',
      keywords: ['buy', 'exchange', 'trading', 'markets', 'price'],
      description: 'Where to buy Ergo',
    },
  ]
  
  mainPages.forEach(page => {
    nodes.push({
      id: `page-${page.url}`,
      url: page.url,
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      category: 'Main',
      type: 'page',
    })
  })
  
  return nodes
}

// Extract keywords from text
function extractKeywords(text: string): string[] {
  const words = text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3)
  
  // Remove common words
  const stopWords = ['the', 'and', 'for', 'with', 'from', 'this', 'that', 'what', 'where', 'when', 'how']
  return words.filter(word => !stopWords.includes(word))
}

// Calculate relevance between two nodes
function calculateRelevance(node1: ContentNode, node2: ContentNode): number {
  if (node1.id === node2.id) return 0
  
  let score = 0
  
  // Keyword overlap
  const keywords1 = new Set(node1.keywords)
  const keywords2 = new Set(node2.keywords)
  const overlap = [...keywords1].filter(k => keywords2.has(k)).length
  score += overlap * 10
  
  // Category bonus
  if (node1.category === node2.category) {
    score += 5
  }
  
  // Type diversity bonus (link different content types)
  if (node1.type !== node2.type) {
    score += 3
  }
  
  // Title similarity
  const titleWords1 = new Set(extractKeywords(node1.title))
  const titleWords2 = new Set(extractKeywords(node2.title))
  const titleOverlap = [...titleWords1].filter(w => titleWords2.has(w)).length
  score += titleOverlap * 8
  
  // Penalize if already linked frequently
  // (In production, track existing links)
  
  return score
}

// Get related content for a given URL
export function getRelatedContent(
  currentUrl: string,
  limit: number = 5
): ContentNode[] {
  const graph = buildContentGraph()
  const currentNode = graph.find(n => n.url === currentUrl)
  
  if (!currentNode) return []
  
  // Calculate relevance scores
  const scored = graph
    .filter(n => n.id !== currentNode.id)
    .map(node => ({
      ...node,
      relevanceScore: calculateRelevance(currentNode, node)
    }))
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
    .slice(0, limit)
  
  return scored
}

// Generate contextual link suggestions for content
export function generateLinkSuggestions(
  content: string,
  currentUrl: string,
  maxLinks: number = 10
): LinkSuggestion[] {
  const suggestions: LinkSuggestion[] = []
  const graph = buildContentGraph()
  const currentNode = graph.find(n => n.url === currentUrl)
  
  if (!currentNode) return suggestions
  
  // Find potential anchor texts in content
  const contentLower = content.toLowerCase()
  
  // Priority linking targets
  const priorityTargets = [
    { text: 'ergo wallet', url: '/wallet', weight: 10 },
    { text: 'nautilus', url: '/wallet', weight: 9 },
    { text: 'mining', url: '/use/mining', weight: 9 },
    { text: 'mine ergo', url: '/use/mining', weight: 10 },
    { text: 'buy ergo', url: '/use/get-erg', weight: 10 },
    { text: 'ergoscript', url: '/technology/ergoscript', weight: 9 },
    { text: 'eutxo', url: '/technology/eutxo', weight: 8 },
    { text: 'nipopows', url: '/technology/nipopows', weight: 8 },
    { text: 'defi', url: '/ecosystem', weight: 7 },
    { text: 'ecosystem', url: '/ecosystem', weight: 7 },
    { text: 'documentation', url: '/docs', weight: 6 },
    { text: 'getting started', url: '/start', weight: 8 },
    { text: 'sigma protocols', url: '/docs/introduction/privacy', weight: 8 },
    { text: 'smart contracts', url: '/docs/developers/ergoscript', weight: 8 },
  ]
  
  // Check for priority terms
  priorityTargets.forEach(target => {
    if (contentLower.includes(target.text) && target.url !== currentUrl) {
      const index = contentLower.indexOf(target.text)
      const context = content.substring(
        Math.max(0, index - 50),
        Math.min(content.length, index + target.text.length + 50)
      )
      
      suggestions.push({
        text: target.text,
        url: target.url,
        title: graph.find(n => n.url === target.url)?.title || target.text,
        relevance: target.weight,
        context: context,
      })
    }
  })
  
  // Add related content links
  const related = getRelatedContent(currentUrl, 20)
  related.forEach(node => {
    // Try to find matching text in content
    const keywords = node.keywords
    for (const keyword of keywords) {
      if (contentLower.includes(keyword) && suggestions.length < maxLinks) {
        const index = contentLower.indexOf(keyword)
        const context = content.substring(
          Math.max(0, index - 50),
          Math.min(content.length, index + keyword.length + 50)
        )
        
        // Avoid duplicate links
        if (!suggestions.some(s => s.url === node.url)) {
          suggestions.push({
            text: keyword,
            url: node.url,
            title: node.title,
            relevance: node.relevanceScore || 5,
            context: context,
          })
          break
        }
      }
    }
  })
  
  // Sort by relevance and limit
  return suggestions
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxLinks)
}

// Apply links to HTML content
export function applyInternalLinks(
  html: string,
  currentUrl: string,
  options = { maxLinks: 10, nofollow: false }
): string {
  const suggestions = generateLinkSuggestions(html, currentUrl, options.maxLinks)
  let linkedHtml = html
  
  // Track already linked texts to avoid duplicates
  const linkedTexts = new Set<string>()
  
  suggestions.forEach(suggestion => {
    if (!linkedTexts.has(suggestion.text)) {
      const regex = new RegExp(`\\b(${escapeRegex(suggestion.text)})\\b`, 'gi')
      const replacement = `<a href="${suggestion.url}" title="${suggestion.title}"${
        options.nofollow ? ' rel="nofollow"' : ''
      } class="internal-link" data-relevance="${suggestion.relevance}">$1</a>`
      
      // Replace only first occurrence
      linkedHtml = linkedHtml.replace(regex, (match, ...args) => {
        if (linkedTexts.has(suggestion.text)) {
          return match
        }
        linkedTexts.add(suggestion.text)
        return replacement
      })
    }
  })
  
  return linkedHtml
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Generate link graph for visualization
export function generateLinkGraph() {
  const nodes = buildContentGraph()
  const edges: Array<{ source: string, target: string, weight: number }> = []
  
  nodes.forEach(node => {
    const related = getRelatedContent(node.url, 5)
    related.forEach(relatedNode => {
      edges.push({
        source: node.id,
        target: relatedNode.id,
        weight: relatedNode.relevanceScore || 1,
      })
    })
  })
  
  return { nodes, edges }
}

// Export for use in components
export const InternalLinking = {
  getRelatedContent,
  generateLinkSuggestions,
  applyInternalLinks,
  buildContentGraph,
  generateLinkGraph,
} 