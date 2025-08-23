import { menuData } from "@/app/docs/menuData";

export type DocsSearchIndexItem = {
  title: string;
  href: string;
  section: string;
  parents: string[];
  // Новые поля для расширенного поиска
  type: "docs" | "blog" | "api" | "community" | "release" | "tutorial";
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
        
        // Создаем полный текст для поиска вхождений
        const fullText = `${item.title} ${(item.parents || []).join(' ')} ${tags.join(' ')}`;
        
        // Базовый элемент
        const searchItem: DocsSearchIndexItem = {
          title: item.title,
          href: item.href,
          section,
          parents: parents || [],
          type: contentType,
          tags,
          language: 'en', // По умолчанию английский
          occurrences: [], // Будет заполнено при поиске
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