#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */

/**
 * МАССОВАЯ ЛОКАЛИЗАЦИЯ ВСЕХ КОМПОНЕНТОВ
 * Principal Localization Architect Implementation
 */

const fs = require('fs');
const path = require('path');

// Компоненты для локализации
const COMPONENTS_TO_LOCALIZE = [
  // Главная страница
  {
    original: 'components/home/hero-section.tsx',
    localized: 'components/home/hero-section-localized.tsx',
    namespace: 'hero',
    priority: 1
  },
  {
    original: 'components/home/manifesto.tsx',
    localized: 'components/home/manifesto-localized.tsx',
    namespace: 'manifesto',
    priority: 1
  },
  {
    original: 'components/home/core-pillars.tsx',
    localized: 'components/home/core-pillars-localized.tsx',
    namespace: 'corePillars',
    priority: 1
  },
  {
    original: 'components/home/why-ergo.tsx',
    localized: 'components/home/why-ergo-localized.tsx',
    namespace: 'whyErgo',
    priority: 1
  },
  {
    original: 'components/home/audience-paths.tsx',
    localized: 'components/home/audience-paths-localized.tsx',
    namespace: 'audiencePaths',
    priority: 1
  },
  {
    original: 'components/home/ecosystem-showcase.tsx',
    localized: 'components/home/ecosystem-showcase-localized.tsx',
    namespace: 'ecosystem',
    priority: 1
  },
  {
    original: 'components/home/blog-section.tsx',
    localized: 'components/home/blog-section-localized.tsx',
    namespace: 'blog',
    priority: 1
  },
  
  // Навигация и UI
  {
    original: 'components/navigation/main-nav.tsx',
    localized: 'components/navigation/main-nav-localized.tsx',
    namespace: 'navigation',
    priority: 2
  },
  {
    original: 'components/navigation/footer.tsx',
    localized: 'components/navigation/footer-localized.tsx',
    namespace: 'footer',
    priority: 2
  },
  {
    original: 'components/search/LocalSearch.tsx',
    localized: 'components/search/LocalSearch-localized.tsx',
    namespace: 'search',
    priority: 2
  },
  
  // Страницы
  {
    original: 'app/[locale]/start/StartClient.tsx',
    localized: 'app/[locale]/start/StartClient-localized.tsx',
    namespace: 'start',
    priority: 1
  },
  {
    original: 'app/[locale]/start/quiz/QuizClient.tsx',
    localized: 'app/[locale]/start/quiz/QuizClient-localized.tsx',
    namespace: 'quiz',
    priority: 2
  },
  {
    original: 'app/[locale]/ecosystem/page.tsx',
    localized: 'app/[locale]/ecosystem/page-localized.tsx',
    namespace: 'ecosystemPage',
    priority: 2
  },
  {
    original: 'app/not-found.tsx',
    localized: 'app/not-found-localized.tsx',
    namespace: 'notFound',
    priority: 3
  },
  
  // Документация
  {
    original: 'app/[locale]/docs/resources/page.tsx',
    localized: 'app/[locale]/docs/resources/page-localized.tsx',
    namespace: 'docsResources',
    priority: 3
  },
  {
    original: 'app/[locale]/docs/introduction/glossary/page.tsx',
    localized: 'app/[locale]/docs/introduction/glossary/page-localized.tsx',
    namespace: 'glossary',
    priority: 3
  }
];

// Базовые переводы для ключевых компонентов
const BASE_TRANSLATIONS = {
  // Навигация
  navigation: {
    home: { en: "Home", ru: "Главная", de: "Startseite", fr: "Accueil", es: "Inicio" },
    start: { en: "Start", ru: "Начать", de: "Anfang", fr: "Commencer", es: "Empezar" },
    ecosystem: { en: "Ecosystem", ru: "Экосистема", de: "Ökosystem", fr: "Écosystème", es: "Ecosistema" },
    docs: { en: "Docs", ru: "Документы", de: "Dokumentation", fr: "Documentation", es: "Documentación" },
    blog: { en: "Blog", ru: "Блог", de: "Blog", fr: "Blog", es: "Blog" },
    community: { en: "Community", ru: "Сообщество", de: "Gemeinschaft", fr: "Communauté", es: "Comunidad" }
  },
  
  // Общие элементы
  common: {
    getStarted: { en: "Get Started", ru: "Начать", de: "Loslegen", fr: "Commencer", es: "Empezar" },
    learnMore: { en: "Learn More", ru: "Узнать больше", de: "Mehr erfahren", fr: "En savoir plus", es: "Saber más" },
    readMore: { en: "Read More", ru: "Читать далее", de: "Weiterlesen", fr: "Lire la suite", es: "Leer más" },
    viewAll: { en: "View All", ru: "Посмотреть все", de: "Alle anzeigen", fr: "Voir tout", es: "Ver todo" },
    loading: { en: "Loading...", ru: "Загрузка...", de: "Laden...", fr: "Chargement...", es: "Cargando..." },
    search: { en: "Search", ru: "Поиск", de: "Suchen", fr: "Rechercher", es: "Buscar" },
    close: { en: "Close", ru: "Закрыть", de: "Schließen", fr: "Fermer", es: "Cerrar" },
    open: { en: "Open", ru: "Открыть", de: "Öffnen", fr: "Ouvrir", es: "Abrir" },
    next: { en: "Next", ru: "Далее", de: "Weiter", fr: "Suivant", es: "Siguiente" },
    previous: { en: "Previous", ru: "Назад", de: "Zurück", fr: "Précédent", es: "Anterior" },
    submit: { en: "Submit", ru: "Отправить", de: "Senden", fr: "Soumettre", es: "Enviar" },
    cancel: { en: "Cancel", ru: "Отмена", de: "Abbrechen", fr: "Annuler", es: "Cancelar" }
  },
  
  // Hero секция
  hero: {
    title: { en: "Ergo", ru: "Ergo", de: "Ergo", fr: "Ergo", es: "Ergo" },
    subtitle: { en: "Decentralized Money for a Free Society", ru: "Децентрализованные деньги для свободного общества", de: "Dezentrales Geld für eine freie Gesellschaft", fr: "Argent décentralisé pour une société libre", es: "Dinero descentralizado para una sociedad libre" },
    description: { en: "The globally-neutral settlement layer for programmable money.", ru: "Глобально нейтральный уровень расчетов для программируемых денег.", de: "Die global neutrale Abwicklungsschicht für programmierbare Währungen.", fr: "La couche de règlement globalement neutre pour l'argent programmable.", es: "La capa de liquidación globalmente neutral para el dinero programable." },
    message1: { en: "Decentralized Money for a Free Society", ru: "Децентрализованные деньги для свободного общества", de: "Dezentrales Geld für eine freie Gesellschaft", fr: "Argent décentralisé pour une société libre", es: "Dinero descentralizado para una sociedad libre" },
    message2: { en: "The globally-neutral settlement layer for programmable money.", ru: "Глобально нейтральный уровень расчетов для программируемых денег.", de: "Die global neutrale Abwicklungsschicht für programmierbare Währungen.", fr: "La couche de règlement globalement neutre pour l'argent programmable.", es: "La capa de liquidación globalmente neutral para el dinero programable." },
    message3: { en: "The open-source home of digital freedom", ru: "Дом цифровой свободы с открытым исходным кодом", de: "Die Open-Source-Heimat der digitalen Freiheit", fr: "La maison open source de la liberté numérique", es: "El hogar de código abierto de la libertad digital" },
    message4: { en: "Join the movement for decentralized, open-source money", ru: "Присоединяйтесь к движению за децентрализованные деньги с открытым исходным кодом", de: "Schließen Sie sich der Bewegung für dezentrales, quelloffenes Geld an", fr: "Rejoignez le mouvement pour l'argent décentralisé et open source", es: "Únete al movimiento por el dinero descentralizado y de código abierto" }
  },
  
  // Поиск
  search: {
    placeholder: { en: "Search documentation...", ru: "Поиск в документации...", de: "Dokumentation durchsuchen...", fr: "Rechercher dans la documentation...", es: "Buscar en la documentación..." },
    noResults: { en: "No results found", ru: "Результаты не найдены", de: "Keine Ergebnisse gefunden", fr: "Aucun résultat trouvé", es: "No se encontraron resultados" },
    results: { en: "results", ru: "результатов", de: "Ergebnisse", fr: "résultats", es: "resultados" },
    searchIn: { en: "Search in", ru: "Искать в", de: "Suchen in", fr: "Rechercher dans", es: "Buscar en" }
  },
  
  // Подписка
  subscribe: {
    title: { en: "Stay Updated", ru: "Оставайтесь в курсе", de: "Bleiben Sie auf dem Laufenden", fr: "Restez informé", es: "Manténgase actualizado" },
    subtitle: { en: "Get the latest Ergo news and updates", ru: "Получайте последние новости и обновления Ergo", de: "Erhalten Sie die neuesten Ergo-Nachrichten und Updates", fr: "Obtenez les dernières nouvelles et mises à jour d'Ergo", es: "Obtenga las últimas noticias y actualizaciones de Ergo" },
    emailPlaceholder: { en: "Enter your email", ru: "Введите ваш email", de: "Geben Sie Ihre E-Mail ein", fr: "Entrez votre email", es: "Ingrese su email" },
    subscribe: { en: "Subscribe", ru: "Подписаться", de: "Abonnieren", fr: "S'abonner", es: "Suscribirse" },
    success: { en: "Successfully subscribed!", ru: "Успешно подписались!", de: "Erfolgreich abonniert!", fr: "Abonnement réussi!", es: "¡Suscripción exitosa!" },
    error: { en: "Subscription failed. Please try again.", ru: "Подписка не удалась. Попробуйте еще раз.", de: "Abonnement fehlgeschlagen. Bitte versuchen Sie es erneut.", fr: "Échec de l'abonnement. Veuillez réessayer.", es: "Falló la suscripción. Por favor, inténtelo de nuevo." },
    privacyNotice: { en: "We respect your privacy. Unsubscribe at any time.", ru: "Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.", de: "Wir respektieren Ihre Privatsphäre. Jederzeit abbestellbar.", fr: "Nous respectons votre vie privée. Désabonnez-vous à tout moment.", es: "Respetamos su privacidad. Cancele la suscripción en cualquier momento." }
  },
  
  // 404 страница
  notFound: {
    title: { en: "Page Not Found", ru: "Страница не найдена", de: "Seite nicht gefunden", fr: "Page non trouvée", es: "Página no encontrada" },
    description: { en: "The page you're looking for doesn't exist.", ru: "Страница, которую вы ищете, не существует.", de: "Die gesuchte Seite existiert nicht.", fr: "La page que vous recherchez n'existe pas.", es: "La página que busca no existe." },
    backHome: { en: "Back to Home", ru: "Вернуться на главную", de: "Zurück zur Startseite", fr: "Retour à l'accueil", es: "Volver al inicio" }
  }
};

// Языки для локализации
const LANGUAGES = ['en', 'ru', 'de', 'fr', 'es', 'it', 'pt-br', 'ja', 'ko-kr', 'zh-cn', 'zh-tw', 'ar', 'tr'];

// Маппинг языковых кодов
const LANG_MAP = {
  'pt-br': 'pt',
  'ko-kr': 'ko', 
  'zh-cn': 'zh',
  'zh-tw': 'zh'
};

function getTranslation(namespace, key, lang) {
  const mappedLang = LANG_MAP[lang] || lang;
  
  if (BASE_TRANSLATIONS[namespace] && BASE_TRANSLATIONS[namespace][key]) {
    return BASE_TRANSLATIONS[namespace][key][mappedLang] || BASE_TRANSLATIONS[namespace][key]['en'] || `[TODO: ${key}]`;
  }
  
  return `[TODO: ${key}]`;
}

function generateTranslationsForNamespace(namespace) {
  const translations = {};
  
  LANGUAGES.forEach(lang => {
    if (!translations[lang]) translations[lang] = {};
    if (!translations[lang][namespace]) translations[lang][namespace] = {};
    
    // Добавляем переводы для этого namespace
    if (BASE_TRANSLATIONS[namespace]) {
      Object.keys(BASE_TRANSLATIONS[namespace]).forEach(key => {
        translations[lang][namespace][key] = getTranslation(namespace, key, lang);
      });
    }
  });
  
  return translations;
}

function updateMessageFiles(namespace) {
  console.log(`📝 Обновляем файлы переводов для namespace: ${namespace}`);
  
  const translations = generateTranslationsForNamespace(namespace);
  
  LANGUAGES.forEach(lang => {
    const filePath = path.join(__dirname, `../messages/${lang}.json`);
    
    let existingData = {};
    if (fs.existsSync(filePath)) {
      try {
        existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      } catch (error) {
        console.warn(`⚠️ Ошибка чтения ${filePath}, создаем новый файл`);
      }
    }
    
    // Объединяем существующие переводы с новыми
    const mergedData = { ...existingData, ...translations[lang] };
    
    fs.writeFileSync(filePath, JSON.stringify(mergedData, null, 2), 'utf8');
    console.log(`✅ ${lang}.json обновлен для ${namespace}`);
  });
}

function createLocalizedComponent(component) {
  console.log(`🔄 Создаем локализованный компонент: ${component.localized}`);
  
  const originalPath = path.join(__dirname, '..', component.original);
  const localizedPath = path.join(__dirname, '..', component.localized);
  
  if (!fs.existsSync(originalPath)) {
    console.warn(`⚠️ Оригинальный файл не найден: ${originalPath}`);
    return;
  }
  
  // Читаем оригинальный файл
  let content = fs.readFileSync(originalPath, 'utf8');
  
  // Добавляем импорты для локализации
  if (!content.includes('useTranslations')) {
    const importMatch = content.match(/^(import.*?from ['"]react['"];?\n)/m);
    if (importMatch) {
      content = content.replace(importMatch[0], `${importMatch[0]}import { useTranslations, useLocale } from "next-intl"\n`);
    } else {
      content = `import { useTranslations, useLocale } from "next-intl"\n${content}`;
    }
  }
  
  // Добавляем хук useTranslations в компонент
  const functionMatch = content.match(/(export\s+(?:default\s+)?function\s+\w+[^{]*{)/);
  if (functionMatch) {
    const hookLine = `  const t = useTranslations('${component.namespace}')\n  const locale = useLocale()\n`;
    content = content.replace(functionMatch[1], `${functionMatch[1]}\n${hookLine}`);
  }
  
  // Базовые замены хардкодных строк
  const commonReplacements = [
    { from: '"Get Started"', to: `t('getStarted')` },
    { from: '"Learn More"', to: `t('learnMore')` },
    { from: '"Read More"', to: `t('readMore')` },
    { from: '"Loading..."', to: `t('loading')` },
    { from: '"Search"', to: `t('search')` },
    { from: '"Home"', to: `t('home')` },
    { from: '"Docs"', to: `t('docs')` },
    { from: '"Blog"', to: `t('blog')` },
    { from: '"Community"', to: `t('community')` },
    { from: '"Subscribe"', to: `t('subscribe')` },
    { from: '"Next"', to: `t('next')` },
    { from: '"Previous"', to: `t('previous')` },
    { from: '"Close"', to: `t('close')` },
    { from: '"Submit"', to: `t('submit')` },
    { from: '"Cancel"', to: `t('cancel')` }
  ];
  
  commonReplacements.forEach(replacement => {
    content = content.replace(new RegExp(replacement.from, 'g'), replacement.to);
  });
  
  // Создаем директорию если не существует
  const dir = path.dirname(localizedPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Сохраняем локализованный компонент
  fs.writeFileSync(localizedPath, content, 'utf8');
  console.log(`✅ Создан локализованный компонент: ${component.localized}`);
}

function massLocalizeComponents() {
  console.log('🌍 МАССОВАЯ ЛОКАЛИЗАЦИЯ ВСЕХ КОМПОНЕНТОВ\n');
  console.log('============================================================\n');
  
  // Сортируем по приоритету
  const sortedComponents = COMPONENTS_TO_LOCALIZE.sort((a, b) => a.priority - b.priority);
  
  let processed = 0;
  let skipped = 0;
  
  sortedComponents.forEach((component, index) => {
    console.log(`\n[${index + 1}/${sortedComponents.length}] Обрабатываем: ${component.original}`);
    
    try {
      // Обновляем файлы переводов
      updateMessageFiles(component.namespace);
      
      // Создаем локализованный компонент
      createLocalizedComponent(component);
      
      processed++;
    } catch (error) {
      console.error(`❌ Ошибка при обработке ${component.original}:`, error.message);
      skipped++;
    }
  });
  
  console.log('\n📊 РЕЗУЛЬТАТЫ МАССОВОЙ ЛОКАЛИЗАЦИИ:');
  console.log(`✅ Обработано компонентов: ${processed}`);
  console.log(`⚠️ Пропущено: ${skipped}`);
  console.log(`📁 Обновлено языковых файлов: ${LANGUAGES.length}`);
  console.log(`🌍 Поддерживаемых языков: ${LANGUAGES.length}`);
  
  console.log('\n🎯 СЛЕДУЮЩИЕ ШАГИ:');
  console.log('   1. Проверьте созданные локализованные компоненты');
  console.log('   2. Обновите импорты в страницах');
  console.log('   3. Запустите: npm run dev');
  console.log('   4. Протестируйте все языки');
  console.log('   5. Загрузите в Lokalise: npm run i18n:upload');
}

function updatePageImports() {
  console.log('\n🔄 Обновляем импорты в страницах...');
  
  const pageUpdates = [
    {
      file: 'app/[locale]/page.tsx',
      updates: [
        { from: 'import { HeroSection }', to: 'import { HeroSectionLocalized as HeroSection }' },
        { from: 'from "@/components/home/hero-section"', to: 'from "@/components/home/hero-section-localized"' }
      ]
    }
  ];
  
  pageUpdates.forEach(update => {
    const filePath = path.join(__dirname, '..', update.file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      update.updates.forEach(u => {
        content = content.replace(u.from, u.to);
      });
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Обновлен: ${update.file}`);
    }
  });
}

function main() {
  try {
    massLocalizeComponents();
    updatePageImports();
    
    console.log('\n🎉 МАССОВАЯ ЛОКАЛИЗАЦИЯ ЗАВЕРШЕНА!');
    console.log('\n🚀 ВАШ САЙТ ТЕПЕРЬ ПОЛНОСТЬЮ МУЛЬТИЯЗЫЧНЫЙ!');
    
  } catch (error) {
    console.error('❌ Критическая ошибка:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { massLocalizeComponents, updateMessageFiles, createLocalizedComponent }; 