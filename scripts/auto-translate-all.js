#!/usr/bin/env node

/**
 * Автоматический перевод для всех языков
 * Principal Localization Architect Implementation
 */

const fs = require('fs');
const path = require('path');

// Базовые переводы для ключевых терминов
const translations = {
  // FAQ переводы
  faq: {
    title: {
      en: "Need Help?",
      ru: "Нужна помощь?",
      de: "Brauchen Sie Hilfe?",
      fr: "Besoin d'aide ?",
      es: "¿Necesitas ayuda?",
      it: "Hai bisogno di aiuto?",
      pt: "Precisa de ajuda?",
      ja: "ヘルプが必要ですか？",
      ko: "도움이 필요하신가요?",
      zh: "需要帮助吗？",
      ar: "هل تحتاج مساعدة؟",
      tr: "Yardıma mı ihtiyacınız var?"
    },
    subtitle: {
      en: "Find answers to common questions about Ergo, its technology, and the ecosystem. If you can't find what you're looking for, join our community channels.",
      ru: "Найдите ответы на часто задаваемые вопросы о Ergo, его технологиях и экосистеме. Если не можете найти нужную информацию, присоединяйтесь к нашим каналам сообщества.",
      de: "Finden Sie Antworten auf häufige Fragen zu Ergo, seiner Technologie und dem Ökosystem. Wenn Sie nicht finden, was Sie suchen, treten Sie unseren Community-Kanälen bei.",
      fr: "Trouvez des réponses aux questions courantes sur Ergo, sa technologie et son écosystème. Si vous ne trouvez pas ce que vous cherchez, rejoignez nos canaux communautaires.",
      es: "Encuentra respuestas a preguntas comunes sobre Ergo, su tecnología y el ecosistema. Si no encuentras lo que buscas, únete a nuestros canales de la comunidad.",
      it: "Trova risposte alle domande comuni su Ergo, la sua tecnologia e l'ecosistema. Se non trovi quello che cerchi, unisciti ai nostri canali della community.",
      pt: "Encontre respostas para perguntas comuns sobre Ergo, sua tecnologia e ecossistema. Se não encontrar o que procura, junte-se aos nossos canais da comunidade.",
      ja: "Ergo、その技術、エコシステムに関するよくある質問への回答を見つけてください。お探しのものが見つからない場合は、コミュニティチャンネルにご参加ください。",
      ko: "Ergo, 기술 및 생태계에 대한 일반적인 질문에 대한 답변을 찾아보세요. 찾고 있는 것을 찾을 수 없다면 커뮤니티 채널에 참여하세요.",
      zh: "查找有关Ergo、其技术和生态系统的常见问题答案。如果找不到您要找的内容，请加入我们的社区频道。",
      ar: "ابحث عن إجابات للأسئلة الشائعة حول Ergo وتقنيته والنظام البيئي. إذا لم تجد ما تبحث عنه، انضم إلى قنوات مجتمعنا.",
      tr: "Ergo, teknolojisi ve ekosistemi hakkında sık sorulan soruların cevaplarını bulun. Aradığınızı bulamazsanız, topluluk kanallarımıza katılın."
    },
    searchPlaceholder: {
      en: "Search questions...",
      ru: "Поиск вопросов...",
      de: "Fragen suchen...",
      fr: "Rechercher des questions...",
      es: "Buscar preguntas...",
      it: "Cerca domande...",
      pt: "Pesquisar perguntas...",
      ja: "質問を検索...",
      ko: "질문 검색...",
      zh: "搜索问题...",
      ar: "البحث في الأسئلة...",
      tr: "Soru ara..."
    },
    noResults: {
      en: "No questions found. Try a different search or filter.",
      ru: "Вопросы не найдены. Попробуйте другой поиск или фильтр.",
      de: "Keine Fragen gefunden. Versuchen Sie eine andere Suche oder einen anderen Filter.",
      fr: "Aucune question trouvée. Essayez une recherche ou un filtre différent.",
      es: "No se encontraron preguntas. Prueba una búsqueda o filtro diferente.",
      it: "Nessuna domanda trovata. Prova una ricerca o un filtro diverso.",
      pt: "Nenhuma pergunta encontrada. Tente uma pesquisa ou filtro diferente.",
      ja: "質問が見つかりませんでした。別の検索またはフィルターを試してください。",
      ko: "질문을 찾을 수 없습니다. 다른 검색이나 필터를 시도해보세요.",
      zh: "未找到问题。尝试不同的搜索或过滤器。",
      ar: "لم يتم العثور على أسئلة. جرب بحثاً أو مرشحاً مختلفاً.",
      tr: "Soru bulunamadı. Farklı bir arama veya filtre deneyin."
    }
  },
  // Категории FAQ
  categories: {
    all: {
      en: "All", ru: "Все", de: "Alle", fr: "Tout", es: "Todo", it: "Tutto", 
      pt: "Tudo", ja: "すべて", ko: "전체", zh: "全部", ar: "الكل", tr: "Hepsi"
    },
    basics: {
      en: "Basics", ru: "Основы", de: "Grundlagen", fr: "Bases", es: "Básicos", 
      it: "Basi", pt: "Básicos", ja: "基本", ko: "기본", zh: "基础", ar: "الأساسيات", tr: "Temel"
    },
    technology: {
      en: "Technology", ru: "Технологии", de: "Technologie", fr: "Technologie", 
      es: "Tecnología", it: "Tecnologia", pt: "Tecnologia", ja: "技術", ko: "기술", 
      zh: "技术", ar: "التكنولوجيا", tr: "Teknoloji"
    },
    gettingStarted: {
      en: "Getting Started", ru: "Начало работы", de: "Erste Schritte", fr: "Commencer", 
      es: "Empezar", it: "Iniziare", pt: "Começar", ja: "はじめに", ko: "시작하기", 
      zh: "开始", ar: "البدء", tr: "Başlarken"
    },
    ecosystem: {
      en: "Ecosystem", ru: "Экосистема", de: "Ökosystem", fr: "Écosystème", 
      es: "Ecosistema", it: "Ecosistema", pt: "Ecossistema", ja: "エコシステム", 
      ko: "생태계", zh: "生态系统", ar: "النظام البيئي", tr: "Ekosistem"
    },
    community: {
      en: "Community", ru: "Сообщество", de: "Gemeinschaft", fr: "Communauté", 
      es: "Comunidad", it: "Comunità", pt: "Comunidade", ja: "コミュニティ", 
      ko: "커뮤니티", zh: "社区", ar: "المجتمع", tr: "Topluluk"
    }
  }
};

// Языки для перевода
const languages = ['ru', 'de', 'fr', 'es', 'it', 'pt-br', 'ja', 'ko-kr', 'zh-cn', 'zh-tw', 'ar', 'tr'];

// Маппинг языковых кодов
const langMap = {
  'pt-br': 'pt',
  'ko-kr': 'ko', 
  'zh-cn': 'zh',
  'zh-tw': 'zh'
};

function translateKey(key, targetLang, value) {
  const lang = langMap[targetLang] || targetLang;
  
  // FAQ переводы
  if (key === 'faq.title') return translations.faq.title[lang] || value;
  if (key === 'faq.subtitle') return translations.faq.subtitle[lang] || value;
  if (key === 'faq.searchPlaceholder') return translations.faq.searchPlaceholder[lang] || value;
  if (key === 'faq.noResults') return translations.faq.noResults[lang] || value;
  
  // Категории
  if (key === 'faq.categories.all') return translations.categories.all[lang] || value;
  if (key === 'faq.categories.basics') return translations.categories.basics[lang] || value;
  if (key === 'faq.categories.technology') return translations.categories.technology[lang] || value;
  if (key === 'faq.categories.gettingStarted') return translations.categories.gettingStarted[lang] || value;
  if (key === 'faq.categories.ecosystem') return translations.categories.ecosystem[lang] || value;
  if (key === 'faq.categories.community') return translations.categories.community[lang] || value;
  
  return value; // Возвращаем оригинал если перевода нет
}

function translateObject(obj, targetLang, prefix = '') {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      result[key] = translateObject(value, targetLang, fullKey);
    } else if (typeof value === 'string') {
      result[key] = translateKey(fullKey, targetLang, value);
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

function translateLanguage(lang) {
  console.log(`🔄 Переводим ${lang.toUpperCase()}...`);
  
  const enPath = path.join(__dirname, '../messages/en.json');
  const langPath = path.join(__dirname, `../messages/${lang}.json`);
  
  if (!fs.existsSync(enPath)) {
    console.error(`❌ Файл ${enPath} не найден`);
    return;
  }
  
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  let langData = {};
  
  // Загружаем существующий файл если есть
  if (fs.existsSync(langPath)) {
    try {
      langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    } catch (error) {
      console.warn(`⚠️ Ошибка чтения ${langPath}, создаем новый файл`);
    }
  }
  
  // Переводим только отсутствующие ключи
  const translatedData = translateObject(enData, lang);
  
  // Объединяем с существующими переводами
  const mergedData = { ...translatedData, ...langData };
  
  // Сохраняем файл
  fs.writeFileSync(langPath, JSON.stringify(mergedData, null, 2), 'utf8');
  console.log(`✅ ${lang.toUpperCase()} переведен и сохранен`);
}

function main() {
  console.log('🌍 АВТОМАТИЧЕСКИЙ ПЕРЕВОД ВСЕХ ЯЗЫКОВ\n');
  console.log('============================================================\n');
  
  languages.forEach(lang => {
    translateLanguage(lang);
  });
  
  console.log('\n📊 ПЕРЕВОДЫ ЗАВЕРШЕНЫ!');
  console.log('\n🎯 СЛЕДУЮЩИЕ ШАГИ:');
  console.log('   1. Проверьте переводы в файлах messages/');
  console.log('   2. Запустите: npm run dev');
  console.log('   3. Проверьте сайт на разных языках');
  console.log('   4. Загрузите в Lokalise: npm run i18n:upload');
}

if (require.main === module) {
  main();
}

module.exports = { translateLanguage, translateObject }; 