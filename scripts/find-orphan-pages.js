#!/usr/bin/env node

/**
 * Скрипт для поиска orphan страниц (страниц без входящих ссылок)
 */

const fs = require('fs');
const path = require('path');

// Цвета для вывода
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Найти все страницы в проекте
function findAllPages(dir, pages = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Пропускаем служебные директории
      if (!file.startsWith('.') && !file.startsWith('_') && file !== 'node_modules') {
        findAllPages(fullPath, pages);
      }
    } else if (file === 'page.tsx' || file === 'page.ts') {
      // Преобразуем путь в URL
      const url = fullPath
        .replace(/^app/, '')
        .replace(/\/page\.(tsx|ts)$/, '')
        .replace(/\/\[[^\]]+\]/g, '/:param')
        .toLowerCase() || '/';
      
      pages.push({
        file: fullPath,
        url: url
      });
    }
  }
  
  return pages;
}

// Найти все ссылки в файле
function findLinksInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const links = new Set();
  
  // Паттерны для поиска ссылок
  const patterns = [
    /href=["']([^"']+)["']/g,
    /to=["']([^"']+)["']/g,
    /Link href=["']([^"']+)["']/g,
    /router\.push\(["']([^"']+)["']\)/g,
    /redirect\(["']([^"']+)["']\)/g,
  ];
  
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const link = match[1];
      // Только внутренние ссылки
      if (link.startsWith('/') && !link.startsWith('//')) {
        links.add(link.toLowerCase().split('?')[0].split('#')[0]);
      }
    }
  }
  
  return Array.from(links);
}

// Найти все внутренние ссылки в проекте
function findAllInternalLinks() {
  const linkMap = new Map();
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!file.startsWith('.') && !file.startsWith('_') && file !== 'node_modules') {
          scanDirectory(fullPath);
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const links = findLinksInFile(fullPath);
        for (const link of links) {
          if (!linkMap.has(link)) {
            linkMap.set(link, []);
          }
          linkMap.get(link).push(fullPath);
        }
      }
    }
  }
  
  scanDirectory('src/app');
  scanDirectory('src/components');
  
  return linkMap;
}

// Проверить наличие страницы в навигации
function isInNavigation(url) {
  const menuDataPath = path.join('app', 'Docs', 'menuData.ts');
  if (fs.existsSync(menuDataPath)) {
    const content = fs.readFileSync(menuDataPath, 'utf8');
    return content.toLowerCase().includes(url);
  }
  return false;
}

// Проверить наличие страницы в sitemap
function isInSitemap(url) {
  const sitemapPath = path.join('src/app', 'sitemap.ts');
  if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf8');
    return content.toLowerCase().includes(url);
  }
  return false;
}

// Главная функция
function findOrphanPages() {
  console.log(`${colors.blue}🔍 Поиск orphan страниц...${colors.reset}\n`);
  
  // Находим все страницы
  const allPages = findAllPages('src/app');
  console.log(`Найдено страниц: ${colors.green}${allPages.length}${colors.reset}`);
  
  // Находим все внутренние ссылки
  const linkMap = findAllInternalLinks();
  console.log(`Найдено уникальных ссылок: ${colors.green}${linkMap.size}${colors.reset}\n`);
  
  // Страницы, которые всегда должны быть доступны
  const alwaysAccessible = ['/', '/404', '/500', '/_error', '/api', '/admin'];
  
  // Находим orphan страницы
  const orphanPages = [];
  const linkedPages = [];
  
  for (const page of allPages) {
    const url = page.url;
    
    // Пропускаем специальные страницы
    if (alwaysAccessible.some(special => url.startsWith(special))) {
      continue;
    }
    
    // Проверяем наличие входящих ссылок
    const hasIncomingLinks = linkMap.has(url);
    const inNavigation = isInNavigation(url);
    const inSitemap = isInSitemap(url);
    
    if (!hasIncomingLinks && !inNavigation) {
      orphanPages.push({
        ...page,
        inSitemap
      });
    } else {
      linkedPages.push({
        ...page,
        sources: linkMap.get(url) || [],
        inNavigation,
        inSitemap
      });
    }
  }
  
  // Выводим результаты
  if (orphanPages.length > 0) {
    console.log(`${colors.red}❌ Найдено orphan страниц: ${orphanPages.length}${colors.reset}\n`);
    
    for (const page of orphanPages) {
      console.log(`${colors.yellow}📄 ${page.url}${colors.reset}`);
      console.log(`   Файл: ${page.file}`);
      console.log(`   В sitemap: ${page.inSitemap ? '✅' : '❌'}`);
      
      if (page.inSitemap) {
        console.log(`   ${colors.red}⚠️  Страница в sitemap, но нет входящих ссылок!${colors.reset}`);
      }
      console.log();
    }
    
    console.log(`${colors.yellow}Рекомендации:${colors.reset}`);
    console.log('1. Добавьте ссылки на эти страницы из родительских разделов');
    console.log('2. Добавьте в навигацию если страница важная');
    console.log('3. Удалите из sitemap если страница не нужна\n');
  } else {
    console.log(`${colors.green}✅ Orphan страниц не найдено!${colors.reset}\n`);
  }
  
  // Статистика по linked страницам
  console.log(`${colors.blue}📊 Статистика по связанным страницам:${colors.reset}`);
  const wellLinked = linkedPages.filter(p => p.sources.length > 3);
  const poorlyLinked = linkedPages.filter(p => p.sources.length === 1);
  
  console.log(`Хорошо связанных (>3 ссылок): ${colors.green}${wellLinked.length}${colors.reset}`);
  console.log(`Слабо связанных (1 ссылка): ${colors.yellow}${poorlyLinked.length}${colors.reset}`);
  
  if (poorlyLinked.length > 0) {
    console.log(`\n${colors.yellow}⚠️  Слабо связанные страницы:${colors.reset}`);
    for (const page of poorlyLinked.slice(0, 5)) {
      console.log(`   ${page.url}`);
    }
    if (poorlyLinked.length > 5) {
      console.log(`   ... и еще ${poorlyLinked.length - 5} страниц`);
    }
  }
  
  // Сохраняем отчет
  const report = {
    timestamp: new Date().toISOString(),
    orphanPages: orphanPages.map(p => ({
      url: p.url,
      file: p.file,
      inSitemap: p.inSitemap
    })),
    poorlyLinkedPages: poorlyLinked.map(p => ({
      url: p.url,
      file: p.file,
      linkCount: p.sources.length
    })),
    statistics: {
      totalPages: allPages.length,
      orphanPages: orphanPages.length,
      wellLinkedPages: wellLinked.length,
      poorlyLinkedPages: poorlyLinked.length
    }
  };
  
  fs.writeFileSync('orphan-pages-report.json', JSON.stringify(report, null, 2));
  console.log(`\n${colors.green}📝 Отчет сохранен в orphan-pages-report.json${colors.reset}`);
}

// Запуск
findOrphanPages(); 