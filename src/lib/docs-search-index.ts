
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import { menuData } from "@/app/[locale]/docs/menuData";
import { glossaryTerms } from "@/data/glossary";
import { playbooks } from "@/data/playbooks";
import { devPatterns } from "@/data/dev-patterns";
import { topics } from "@/data/topics";
import { infographics } from "@/data/infographics";
import { questions } from "@/data/questions";

export type DocsSearchIndexItem = {
  title: string;
  href: string;
  section: string;
  parents: string[];
  // Новые поля для расширенного поиска
  type: "docs" | "blog" | "api" | "community" | "release" | "tutorial" | "glossary" | "playbook" | "pattern" | "topic" | "question" | "infographic" | "page";
  language?: string;
  excerpt?: string;
  anchors?: string[];
  codeBlocks?: string[];
  tags: string[];
  lastModified?: string;
  externalLinks?: Array<{
    title: string;
    url: string;
    type: "github" | "discord" | "forum" | "stackexchange";
  }>;
  // Новые поля для поиска всех вхождений
  occurrences: Array<{
    type: "title" | "content" | "code" | "anchor";
    text: string;
    context: string;
    position: number;
  }>;
  totalOccurrences: number;
};

// Расширенная функция для извлечения контента из markdown
function extractContentFromMarkdown(content: string) {
  const anchors: string[] = [];
  const codeBlocks: string[] = [];
  const excerpts: string[] = [];
  
  // Извлекаем заголовки (анкоры)
  const headerMatches = content.match(/^#{1,6}\s+(.+)$/gm);
  if (headerMatches) {
    anchors.push(...headerMatches.map(h => h.replace(/^#{1,6}\s+/, '')));
  }
  
  // Извлекаем код
  const codeMatches = content.match(/```[\s\S]*?```/g);
  if (codeMatches) {
    codeBlocks.push(...codeMatches.map(c => c.replace(/```[\w]*\n?/, '').replace(/```$/, '')));
  }
  
  // Извлекаем фрагменты текста
  const textMatches = content.match(/^[^#\n].{50,200}/gm);
  if (textMatches) {
    excerpts.push(...textMatches.slice(0, 3)); // Берем первые 3 фрагмента
  }
  
  return { anchors, codeBlocks, excerpts };
}

// Функция для поиска всех вхождений термина в тексте
function findOccurrences(text: string, query: string): Array<{
  type: "title" | "content" | "code" | "anchor";
  text: string;
  context: string;
  position: number;
}> {
  const occurrences: Array<{
    type: "title" | "content" | "code" | "anchor";
    text: string;
    context: string;
    position: number;
  }> = [];
  
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  
  let position = 0;
  while ((position = textLower.indexOf(queryLower, position)) !== -1) {
    // Получаем контекст вокруг вхождения
    const start = Math.max(0, position - 50);
    const end = Math.min(text.length, position + query.length + 50);
    const context = text.substring(start, end);
    
    // Определяем тип вхождения
    let type: "title" | "content" | "code" | "anchor" = "content";
    if (position < 100) type = "title"; // Если в начале текста, считаем заголовком
    if (text.includes("```") && text.indexOf("```") < position) type = "code";
    
    occurrences.push({
      type,
      text: text.substring(position, position + query.length),
      context,
      position
    });
    
    position += query.length;
  }
  
  return occurrences;
}

// Генерация тегов на основе контента
function generateTags(title: string, section: string, content?: string): string[] {
  const tags = new Set<string>();
  
  // Основные теги на основе названия
  const titleLower = title.toLowerCase();
  if (titleLower.includes('autolykos')) {
    tags.add('Autolykos');
    tags.add('Mining');
    tags.add('Algorithm');
    tags.add('Proof of Work');
  }
  if (titleLower.includes('defi') || titleLower.includes('financial')) {
    tags.add('DeFi');
    tags.add('Financial');
  }
  if (titleLower.includes('privacy') || titleLower.includes('mixer')) {
    tags.add('Privacy');
    tags.add('Mixers');
  }
  if (titleLower.includes('smart contract') || titleLower.includes('ergoscript')) {
    tags.add('Smart Contracts');
    tags.add('ErgoScript');
  }
  if (titleLower.includes('api') || titleLower.includes('reference')) {
    tags.add('API');
    tags.add('Reference');
  }
  if (titleLower.includes('tutorial') || titleLower.includes('guide')) {
    tags.add('Tutorial');
    tags.add('Guide');
  }
  
  // Теги на основе секции
  const sectionLower = section.toLowerCase();
  if (sectionLower.includes('introduction')) tags.add('Introduction');
  if (sectionLower.includes('ecosystem')) tags.add('Ecosystem');
  if (sectionLower.includes('miners')) tags.add('Mining');
  if (sectionLower.includes('developers')) tags.add('Development');
  
  // Теги на основе контента
  if (content) {
    const contentLower = content.toLowerCase();
    if (contentLower.includes('code') || contentLower.includes('example')) tags.add('Code Examples');
    if (contentLower.includes('security') || contentLower.includes('audit')) tags.add('Security');
    if (contentLower.includes('release') || contentLower.includes('update')) tags.add('Release Notes');
  }
  
  return Array.from(tags);
}

export function buildDocsSearchIndex(): DocsSearchIndexItem[] {
  const result: DocsSearchIndexItem[] = [];

  // ==========================================
  // 1. Index docs from menuData
  // ==========================================
  function walk(items: any[], section: string, parents: string[] = [], type: DocsSearchIndexItem['type'] = 'docs') {
    for (const item of items) {
      if (item.href) {
        // Определяем тип контента
        let contentType: DocsSearchIndexItem['type'] = type;
        if (item.href.includes('/blog/')) contentType = 'blog';
        else if (item.href.includes('/api/')) contentType = 'api';
        else if (item.href.includes('/community/')) contentType = 'community';
        else if (item.href.includes('/release/')) contentType = 'release';
        else if (item.href.includes('/tutorial/')) contentType = 'tutorial';
        
        // Генерируем теги
        const tags = generateTags(item.title, section);
        
        // Базовый элемент
        const searchItem: DocsSearchIndexItem = {
          title: item.title,
          href: item.href,
          section,
          parents: parents || [],
          type: contentType,
          tags,
          language: 'en',
          occurrences: [],
          totalOccurrences: 0
        };
        
        // Добавляем внешние ссылки для определенных страниц
        if (item.title.toLowerCase().includes('mixer')) {
          searchItem.externalLinks = [
            {
              title: "GitHub: ErgoMixer",
              url: "https://github.com/ergo-mixer",
              type: "github"
            },
            {
              title: "Discord: Privacy Channel",
              url: "https://discord.gg/ergo",
              type: "discord"
            }
          ];
        }
        
        result.push(searchItem);
      }
      if (item.items) {
        walk(item.items, section, [...parents, item.title], type);
      }
    }
  }

  for (const section of menuData) {
    walk(section.items || [], section.title, []);
  }

  // ==========================================
  // 2. Index Glossary Terms (250+ terms)
  // ==========================================
  for (const term of glossaryTerms) {
    const tags = [term.category, term.difficulty, ...term.keywords.slice(0, 5)];
    
    result.push({
      title: term.term,
      href: `/learn/glossary/${term.slug}`,
      section: "Glossary",
      parents: ["Learn", "Glossary"],
      type: "glossary",
      tags,
      excerpt: term.shortDefinition,
      language: 'en',
      occurrences: [],
      totalOccurrences: 0
    });
  }

  // ==========================================
  // 3. Index Playbooks (16 playbooks)
  // ==========================================
  for (const playbook of playbooks) {
    const tags = [playbook.cluster, playbook.difficulty, ...(playbook.keywords || []).slice(0, 5)];
    
    result.push({
      title: playbook.title,
      href: `/playbooks/${playbook.slug}`,
      section: "Playbooks",
      parents: ["Learn", "Playbooks"],
      type: "playbook",
      tags,
      excerpt: playbook.subtitle,
      language: 'en',
      occurrences: [],
      totalOccurrences: 0
    });
  }

  // ==========================================
  // 4. Index Dev Patterns (18 patterns)
  // ==========================================
  for (const pattern of devPatterns) {
    const tags = [pattern.category, pattern.difficulty, ...pattern.keywords.slice(0, 5)];
    
    result.push({
      title: pattern.title,
      href: `/patterns/${pattern.slug}`,
      section: "Dev Patterns",
      parents: ["Learn", "Dev Patterns"],
      type: "pattern",
      tags,
      excerpt: pattern.shortDescription,
      language: 'en',
      occurrences: [],
      totalOccurrences: 0
    });
  }

  // ==========================================
  // 5. Index Topics (6 topic hubs)
  // ==========================================
  for (const topic of topics) {
    const tags = [...topic.keyDifferentiators.slice(0, 3)];
    
    result.push({
      title: topic.title,
      href: `/topics/${topic.slug}`,
      section: "Topics",
      parents: ["Learn", "Topics"],
      type: "topic",
      tags,
      excerpt: topic.subtitle,
      language: 'en',
      occurrences: [],
      totalOccurrences: 0
    });
  }

  // ==========================================
  // 6. Index Infographics
  // ==========================================
  for (const infographic of infographics) {
    const tags = [infographic.category, ...infographic.tags.slice(0, 5)];
    
    result.push({
      title: infographic.title,
      href: `/infographics/${infographic.slug}`,
      section: "Infographics",
      parents: ["Learn", "Infographics"],
      type: "infographic",
      tags,
      excerpt: infographic.description,
      language: 'en',
      occurrences: [],
      totalOccurrences: 0
    });
  }

  // ==========================================
  // 7. Index Q&A Questions
  // ==========================================
  for (const question of questions) {
    const tags = [question.category, question.intent, question.persona].filter(Boolean);
    
    result.push({
      title: question.query,
      href: `/questions/${question.slug}`,
      section: "Q&A",
      parents: ["Learn", "Q&A"],
      type: "question",
      tags,
      excerpt: question.shortAnswer,
      language: 'en',
      occurrences: [],
      totalOccurrences: 0
    });
  }

  // ==========================================
  // 8. Index Main Pages
  // ==========================================
  const mainPages = [
    { title: "For Miners", href: "/miners", section: "Personas", excerpt: "GPU mining guides, profitability calculator, pools, and software", tags: ["Mining", "GPU", "Autolykos", "Pools"] },
    { title: "For Hodlers", href: "/hodlers", section: "Personas", excerpt: "Long-term investment guides, wallets, and staking information", tags: ["Investment", "Wallets", "Staking", "HODL"] },
    { title: "For Builders", href: "/builders", section: "Personas", excerpt: "Developer resources, SDKs, and smart contract guides", tags: ["Development", "ErgoScript", "SDK", "Smart Contracts"] },
    { title: "Use Cases", href: "/use", section: "Platform", excerpt: "Practical guides for wallets, DeFi, mining, bridges, and more", tags: ["DeFi", "Wallets", "Bridges", "Stablecoins"] },
    { title: "Technology", href: "/technology", section: "Platform", excerpt: "Ergo's technical foundations: eUTXO, ErgoScript, NIPoPoWs", tags: ["eUTXO", "ErgoScript", "NIPoPoWs", "Technology"] },
    { title: "Ecosystem", href: "/ecosystem", section: "Platform", excerpt: "Explore Ergo ecosystem: dApps, tools, and community projects", tags: ["Ecosystem", "dApps", "Projects", "Community"] },
    { title: "Compare Blockchains", href: "/compare", section: "Platform", excerpt: "Compare Ergo with Bitcoin, Ethereum, Cardano, and other L1s", tags: ["Comparison", "Bitcoin", "Ethereum", "Cardano"] },
    { title: "Learning Hub", href: "/learn", section: "Learn", excerpt: "Your starting point for mastering Ergo: guides, glossary, Q&A", tags: ["Learn", "Education", "Guides", "Tutorial"] },
    { title: "Knowledge Base FAQ", href: "/learn/faq", section: "Learn", excerpt: "Technical FAQ covering eUTXO, ErgoScript, privacy, tokenomics", tags: ["FAQ", "Technical", "eUTXO", "Privacy"] },
    { title: "Beginner FAQ", href: "/start/faq", section: "Start", excerpt: "Frequently asked questions for newcomers to Ergo", tags: ["FAQ", "Beginner", "Getting Started"] },
    { title: "Introduction to Ergo", href: "/start/introduction", section: "Start", excerpt: "Learn the basics of Ergo blockchain and its unique features", tags: ["Introduction", "Basics", "Getting Started"] },
    { title: "Blockchain Comparison", href: "/start/comparison", section: "Start", excerpt: "How Ergo compares to other blockchain platforms", tags: ["Comparison", "Analysis", "Blockchains"] },
    { title: "Wallets", href: "/wallet", section: "Use", excerpt: "Choose and set up an Ergo wallet: Nautilus, Yoroi, and more", tags: ["Wallets", "Nautilus", "Yoroi", "Storage"] },
    { title: "DeFi on Ergo", href: "/use/defi", section: "Use", excerpt: "Decentralized finance: DEXs, lending, stablecoins on Ergo", tags: ["DeFi", "DEX", "Lending", "Finance"] },
    { title: "Privacy Tools", href: "/use/privacy", section: "Use", excerpt: "Privacy features: ErgoMixer, Sigma protocols, confidential transactions", tags: ["Privacy", "ErgoMixer", "Sigma", "Confidential"] },
    { title: "Bridges", href: "/use/bridges", section: "Use", excerpt: "Cross-chain bridges: Rosen Bridge, wrapped assets", tags: ["Bridges", "Cross-chain", "Rosen", "Wrapped"] },
    { title: "Stablecoins", href: "/use/stablecoins", section: "Use", excerpt: "Stablecoins on Ergo: SigmaUSD, algorithmic stability", tags: ["Stablecoins", "SigmaUSD", "Algorithmic", "Stability"] },
  ];

  for (const page of mainPages) {
    result.push({
      title: page.title,
      href: page.href,
      section: page.section,
      parents: [page.section],
      type: "page",
      tags: page.tags,
      excerpt: page.excerpt,
      language: 'en',
      occurrences: [],
      totalOccurrences: 0
    });
  }

  return result;
}

// Функция для нечеткого поиска (fuzzy search)
export function fuzzySearch(query: string, text: string): boolean {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  
  // Простая реализация fuzzy search
  let queryIndex = 0;
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex++;
    }
  }
  
  return queryIndex === queryLower.length;
}

// Функция для поиска с учетом опечаток и подсчета вхождений
export function searchWithTypos(query: string, items: DocsSearchIndexItem[]): DocsSearchIndexItem[] {
  const results: DocsSearchIndexItem[] = [];
  const queryLower = query.toLowerCase();
  
  for (const item of items) {
    // Создаем полный текст для поиска
    const fullText = `${item.title} ${item.parents.join(' ')} ${item.tags.join(' ')}`;
    
    // Ищем вхождения в полном тексте
    const occurrences = findOccurrences(fullText, query);
    
    // Проверяем, есть ли совпадения
    const hasExactMatch = item.title.toLowerCase().includes(queryLower) ||
                          item.section.toLowerCase().includes(queryLower) ||
                          item.tags.some(tag => tag.toLowerCase().includes(queryLower));
    
    const hasFuzzyMatch = fuzzySearch(query, item.title) || 
                          fuzzySearch(query, item.section) ||
                          item.tags.some(tag => fuzzySearch(query, tag));
    
    if (hasExactMatch || hasFuzzyMatch || occurrences.length > 0) {
      // Добавляем найденные вхождения к элементу
      const itemWithOccurrences = {
        ...item,
        occurrences,
        totalOccurrences: occurrences.length
      };
      
      results.push(itemWithOccurrences);
    }
  }
  
  // Сортируем по количеству вхождений (больше вхождений = выше в результатах)
  return results.sort((a, b) => b.totalOccurrences - a.totalOccurrences);
} 