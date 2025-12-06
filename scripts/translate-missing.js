#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const { getAllKeys } = require('./analyze-i18n.js');

// Словарь переводов для основных языков
const translations = {
  ru: {
    // Common
    'common.loading': 'Загрузка...',
    'common.error': 'Ошибка',
    'common.retry': 'Повторить',
    'common.close': 'Закрыть',
    'common.open': 'Открыть',
    'common.menu': 'Меню',
    'common.search': 'Поиск',
    'common.searchPlaceholder': 'Поиск...',
    'common.readMore': 'Читать далее',
    'common.learnMore': 'Узнать больше',
    'common.getStarted': 'Начать',
    'common.viewAll': 'Посмотреть все',
    'common.backToTop': 'Наверх',
    'common.previous': 'Предыдущий',
    'common.next': 'Следующий',
    'common.home': 'Главная',
    
    // Navigation
    'navigation.main.start': 'Начало',
    'navigation.main.technology': 'Технологии',
    'navigation.main.use': 'Применение',
    'navigation.main.learn': 'Обучение',
    'navigation.main.docs': 'Документация',
    'navigation.main.ecosystem': 'Экосистема',
    'navigation.main.blog': 'Блог',
    'navigation.main.wallet': 'Кошелек',
    'navigation.footer.about': 'О проекте',
    'navigation.footer.community': 'Сообщество',
    'navigation.footer.developers': 'Разработчикам',
    'navigation.footer.resources': 'Ресурсы',
    'navigation.footer.legal': 'Правовая информация',
    
    // Hero section
    'hero.title': 'Блокчейн нового поколения',
    'hero.subtitle': 'Мощная, безопасная и масштабируемая платформа для децентрализованных приложений',
    'hero.cta.primary': 'Начать разработку',
    'hero.cta.secondary': 'Изучить документацию',
    
    // Technology
    'technology.title': 'Технологии',
    'technology.subtitle': 'Инновационные решения для блокчейна',
    'technology.eutxo.title': 'eUTXO модель',
    'technology.eutxo.description': 'Расширенная модель UTXO с поддержкой смарт-контрактов',
    'technology.nipopows.title': 'NIPoPoWs',
    'technology.nipopows.description': 'Неинтерактивные доказательства работы',
    'technology.sigmaDsl.title': 'Sigma DSL',
    'technology.sigmaDsl.description': 'Язык для криптографических доказательств',
    'technology.overview.useCases': 'Случаи использования',
    'technology.overview.architecture': 'Архитектура',
    'technology.overview.resources': 'Ресурсы',
    'technology.features.eutxo.title': 'eUTXO модель',
    'technology.features.eutxo.description': 'Расширенная модель UTXO, обеспечивающая параллельное выполнение смарт-контрактов и композитные DeFi приложения. Исключает атаки повторного входа, сохраняя проверенную модель безопасности Bitcoin.',
    'technology.features.eutxo.benefits.parallelExecution.title': 'Параллельное выполнение',
    'technology.features.eutxo.benefits.parallelExecution.description': 'Смарт-контракты работают независимо без конфликтов глобального состояния.',
    'technology.features.eutxo.benefits.composability.title': 'Композитность',
    'technology.features.eutxo.benefits.composability.description': 'Создавайте сложные DeFi приложения из простых, переиспользуемых компонентов.',
    'technology.features.eutxo.benefits.security.title': 'Безопасность уровня Bitcoin',
    'technology.features.eutxo.benefits.security.description': 'Наследует проверенную временем защиту UTXO от двойных трат.',
    
    // Use cases
    'use.title': 'Применение',
    'use.subtitle': 'Реальные случаи использования Ergo',
    'use.defi.title': 'DeFi',
    'use.defi.description': 'Децентрализованные финансовые услуги',
    'use.nft.title': 'NFT',
    'use.nft.description': 'Невзаимозаменяемые токены',
    'use.stablecoins.title': 'Стейблкоины',
    'use.stablecoins.description': 'Стабильные криптовалюты',
    
    // Docs
    'docs.title': 'Документация',
    'docs.subtitle': 'Полное руководство по разработке на Ergo',
    'docs.gettingStarted': 'Начало работы',
    'docs.tutorials': 'Руководства',
    'docs.apiReference': 'API справочник',
    
    // Footer
    'footer.copyright': '© 2024 Ergo Platform. Все права защищены.',
    'footer.community': 'Сообщество',
    'footer.developers': 'Разработчикам',
    'footer.resources': 'Ресурсы'
  },
  
  de: {
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Fehler',
    'common.retry': 'Wiederholen',
    'common.close': 'Schließen',
    'common.open': 'Öffnen',
    'common.menu': 'Menü',
    'common.search': 'Suchen',
    'common.searchPlaceholder': 'Suchen...',
    'common.readMore': 'Mehr lesen',
    'common.learnMore': 'Mehr erfahren',
    'common.getStarted': 'Loslegen',
    'common.viewAll': 'Alle anzeigen',
    'common.backToTop': 'Nach oben',
    'common.previous': 'Vorherige',
    'common.next': 'Nächste',
    'common.home': 'Startseite',
    
    // Navigation
    'navigation.main.start': 'Start',
    'navigation.main.technology': 'Technologie',
    'navigation.main.use': 'Anwendung',
    'navigation.main.learn': 'Lernen',
    'navigation.main.docs': 'Dokumentation',
    'navigation.main.ecosystem': 'Ökosystem',
    'navigation.main.blog': 'Blog',
    'navigation.main.wallet': 'Wallet',
    'navigation.footer.about': 'Über uns',
    'navigation.footer.community': 'Gemeinschaft',
    'navigation.footer.developers': 'Entwickler',
    'navigation.footer.resources': 'Ressourcen',
    'navigation.footer.legal': 'Rechtliches',
    
    // Hero section
    'hero.title': 'Blockchain der nächsten Generation',
    'hero.subtitle': 'Leistungsstarke, sichere und skalierbare Plattform für dezentrale Anwendungen',
    'hero.cta.primary': 'Entwicklung starten',
    'hero.cta.secondary': 'Dokumentation erkunden',
    'hero.message1': 'Dezentrales Geld für eine freie Gesellschaft',
    'hero.message2': 'Die global-neutrale Settlement-Schicht für programmierbare Währungen.',
    'hero.message3': 'Die Open-Source-Heimat der digitalen Freiheit',
    'hero.message4': 'Schließen Sie sich der Bewegung für dezentrales, Open-Source-Geld an',
    
    // Technology
    'technology.title': 'Technologie',
    'technology.subtitle': 'Innovative Blockchain-Lösungen',
    'technology.eutxo.title': 'eUTXO-Modell',
    'technology.eutxo.description': 'Erweiterte UTXO-Modell mit Smart-Contract-Unterstützung',
    'technology.nipopows.title': 'NIPoPoWs',
    'technology.nipopows.description': 'Nicht-interaktive Arbeitsbeweise',
    'technology.sigmaDsl.title': 'Sigma DSL',
    'technology.sigmaDsl.description': 'Sprache für kryptographische Beweise',
    'technology.overview.useCases': 'Anwendungsfälle',
    'technology.overview.architecture': 'Architektur',
    'technology.overview.resources': 'Ressourcen',
    'technology.features.eutxo.title': 'eUTXO-Modell',
    'technology.features.eutxo.description': 'Erweiterte UTXO-Modell, das parallele Smart-Contract-Ausführung und zusammensetzbare DeFi-Anwendungen ermöglicht. Eliminiert Reentrancy-Angriffe und behält Bitcoins bewährtes Sicherheitsmodell bei.',
    'technology.features.eutxo.benefits.parallelExecution.title': 'Parallele Ausführung',
    'technology.features.eutxo.benefits.parallelExecution.description': 'Smart Contracts laufen unabhängig ohne globale Zustandskonflikte.',
    'technology.features.eutxo.benefits.composability.title': 'Zusammensetzbarkeit',
    'technology.features.eutxo.benefits.composability.description': 'Erstellen Sie komplexe DeFi-Anwendungen aus einfachen, wiederverwendbaren Komponenten.',
    'technology.features.eutxo.benefits.security.title': 'Bitcoin-Level-Sicherheit',
    'technology.features.eutxo.benefits.security.description': 'Erbt UTXOs kampferprobten Schutz vor Double-Spending.',
    
    // Use cases
    'use.title': 'Anwendung',
    'use.subtitle': 'Reale Anwendungsfälle von Ergo',
    'use.defi.title': 'DeFi',
    'use.defi.description': 'Dezentrale Finanzdienstleistungen',
    'use.nft.title': 'NFT',
    'use.nft.description': 'Nicht-fungible Token',
    'use.stablecoins.title': 'Stablecoins',
    'use.stablecoins.description': 'Stabile Kryptowährungen',
    
    // Start section
    'start.title': 'Erste Schritte',
    'start.subtitle': 'Beginnen Sie Ihre Reise mit Ergo',
    'start.introduction.title': 'Einführung',
    'start.introduction.description': 'Lernen Sie die Grundlagen von Ergo kennen',
    
    // Docs
    'docs.title': 'Dokumentation',
    'docs.subtitle': 'Vollständiger Leitfaden für die Entwicklung auf Ergo',
    'docs.gettingStarted': 'Erste Schritte',
    'docs.tutorials': 'Tutorials',
    'docs.apiReference': 'API-Referenz',
    
    // Wallet
    'wallet.title': 'Wallet',
    'wallet.subtitle': 'Verwalten Sie Ihre ERG sicher',
    
    // Events
    'events.title': 'Veranstaltungen',
    'events.subtitle': 'Kommende Ergo-Events',
    
    // Footer
    'footer.copyright': '© 2024 Ergo Platform. Alle Rechte vorbehalten.',
    'footer.community': 'Gemeinschaft',
    'footer.developers': 'Entwickler',
    'footer.resources': 'Ressourcen'
  },
  
  fr: {
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.retry': 'Réessayer',
    'common.close': 'Fermer',
    'common.open': 'Ouvrir',
    'common.menu': 'Menu',
    'common.search': 'Rechercher',
    'common.searchPlaceholder': 'Rechercher...',
    'common.readMore': 'Lire la suite',
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.viewAll': 'Voir tout',
    'common.backToTop': 'Haut de page',
    
    // Navigation
    'navigation.main.start': 'Démarrer',
    'navigation.main.technology': 'Technologie',
    'navigation.main.use': 'Utilisation',
    'navigation.main.learn': 'Apprendre',
    'navigation.main.docs': 'Documentation',
    'navigation.main.ecosystem': 'Écosystème',
    'navigation.main.blog': 'Blog',
    
    // Hero section
    'hero.title': 'Blockchain de nouvelle génération',
    'hero.subtitle': 'Plateforme puissante, sécurisée et évolutive pour les applications décentralisées',
    'hero.cta.primary': 'Commencer le développement',
    'hero.cta.secondary': 'Explorer la documentation',
    
    // Technology
    'technology.title': 'Technologie',
    'technology.subtitle': 'Solutions blockchain innovantes',
    'technology.eutxo.title': 'Modèle eUTXO',
    'technology.eutxo.description': 'Modèle UTXO étendu avec support des contrats intelligents',
    'technology.nipopows.title': 'NIPoPoWs',
    'technology.nipopows.description': 'Preuves de travail non-interactives',
    'technology.sigmaDsl.title': 'Sigma DSL',
    'technology.sigmaDsl.description': 'Langage pour les preuves cryptographiques',
    
    // Use cases
    'use.title': 'Utilisation',
    'use.subtitle': 'Cas d\'usage réels d\'Ergo',
    'use.defi.title': 'DeFi',
    'use.defi.description': 'Services financiers décentralisés',
    'use.nft.title': 'NFT',
    'use.nft.description': 'Jetons non-fongibles',
    'use.stablecoins.title': 'Stablecoins',
    'use.stablecoins.description': 'Cryptomonnaies stables',
    
    // Docs
    'docs.title': 'Documentation',
    'docs.subtitle': 'Guide complet pour développer sur Ergo',
    'docs.gettingStarted': 'Premiers pas',
    'docs.tutorials': 'Tutoriels',
    'docs.apiReference': 'Référence API',
    
    // Footer
    'footer.copyright': '© 2024 Ergo Platform. Tous droits réservés.',
    'footer.community': 'Communauté',
    'footer.developers': 'Développeurs',
    'footer.resources': 'Ressources'
  }
};

// Функция для получения значения по ключу из объекта
function getValueByPath(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Функция для установки значения по ключу в объект
function setValueByPath(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
}

// Функция для перевода недостающих ключей
function translateMissingKeys(targetLang, dryRun = false) {
  const messagesDir = path.join(__dirname, '../messages');
  
  // Загружаем эталонный английский файл
  const enPath = path.join(messagesDir, 'en.json');
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const enKeys = getAllKeys(enData);
  
  // Загружаем целевой язык
  const langPath = path.join(messagesDir, `${targetLang}.json`);
  const langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
  const langKeys = getAllKeys(langData);
  
  // Находим недостающие ключи
  const missingKeys = enKeys.filter(key => !langKeys.includes(key));
  
  console.log(`\n🔄 Перевод для ${targetLang.toUpperCase()}:`);
  console.log(`   Недостающих ключей: ${missingKeys.length}`);
  
  if (missingKeys.length === 0) {
    console.log('   ✅ Все ключи уже переведены!');
    return;
  }
  
  let translatedCount = 0;
  let manualCount = 0;
  
  // Переводим недостающие ключи
  missingKeys.forEach(key => {
    const enValue = getValueByPath(enData, key);
    
    if (translations[targetLang] && translations[targetLang][key]) {
      // Используем готовый перевод
      setValueByPath(langData, key, translations[targetLang][key]);
      translatedCount++;
    } else {
      // Помечаем для ручного перевода
      setValueByPath(langData, key, `[TODO: ${enValue}]`);
      manualCount++;
    }
  });
  
  console.log(`   ✅ Автоматически переведено: ${translatedCount}`);
  console.log(`   ⚠️ Требует ручного перевода: ${manualCount}`);
  
  if (!dryRun) {
    // Сохраняем обновленный файл
    fs.writeFileSync(langPath, JSON.stringify(langData, null, 2) + '\n', 'utf8');
    console.log(`   💾 Файл сохранен: ${langPath}`);
  } else {
    console.log(`   🔍 Режим предварительного просмотра - файл не изменен`);
  }
  
  return {
    total: missingKeys.length,
    translated: translatedCount,
    manual: manualCount
  };
}

// Функция для перевода всех языков
function translateAllLanguages(dryRun = false) {
  const messagesDir = path.join(__dirname, '../messages');
  const files = fs.readdirSync(messagesDir).filter(file => file.endsWith('.json') && file !== 'en.json');
  
  console.log('🌍 АВТОМАТИЧЕСКИЙ ПЕРЕВОД НЕДОСТАЮЩИХ КЛЮЧЕЙ\n');
  console.log('='.repeat(60));
  
  const results = [];
  
  files.forEach(file => {
    const lang = file.replace('.json', '');
    const result = translateMissingKeys(lang, dryRun);
    if (result) {
      results.push({ lang, ...result });
    }
  });
  
  console.log('\n📊 СВОДКА ПЕРЕВОДОВ:\n');
  console.log('Язык'.padEnd(12) + 'Всего'.padEnd(8) + 'Авто'.padEnd(8) + 'Ручной'.padEnd(8) + 'Прогресс');
  console.log('-'.repeat(50));
  
  results.forEach(result => {
    const progress = result.total > 0 ? `${Math.round((result.translated / result.total) * 100)}%` : '100%';
    console.log(
      result.lang.padEnd(12) + 
      result.total.toString().padEnd(8) + 
      result.translated.toString().padEnd(8) + 
      result.manual.toString().padEnd(8) + 
      progress
    );
  });
  
  const totalKeys = results.reduce((sum, r) => sum + r.total, 0);
  const totalTranslated = results.reduce((sum, r) => sum + r.translated, 0);
  const totalManual = results.reduce((sum, r) => sum + r.manual, 0);
  
  console.log('\n📈 ОБЩАЯ СТАТИСТИКА:');
  console.log(`   Всего ключей для перевода: ${totalKeys}`);
  console.log(`   Автоматически переведено: ${totalTranslated} (${Math.round((totalTranslated/totalKeys)*100)}%)`);
  console.log(`   Требует ручного перевода: ${totalManual} (${Math.round((totalManual/totalKeys)*100)}%)`);
  
  if (!dryRun) {
    console.log('\n✅ Все файлы обновлены!');
    console.log('\n🎯 СЛЕДУЮЩИЕ ШАГИ:');
    console.log('   1. Проверьте автоматические переводы');
    console.log('   2. Переведите ключи с пометкой [TODO: ...]');
    console.log('   3. Запустите тестирование локализаций');
  }
}

// CLI интерфейс
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const lang = args.find(arg => !arg.startsWith('--'));
  
  if (lang && lang !== 'all') {
    translateMissingKeys(lang, dryRun);
  } else {
    translateAllLanguages(dryRun);
  }
}

module.exports = { translateMissingKeys, translateAllLanguages }; 