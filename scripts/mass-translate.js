#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { getAllKeys } = require('./analyze-i18n.js');

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

// Простой словарь для базового перевода
const basicTranslations = {
  de: {
    // Основные термины
    'blockchain': 'Blockchain',
    'smart contract': 'Smart Contract',
    'smart contracts': 'Smart Contracts',
    'cryptocurrency': 'Kryptowährung',
    'decentralized': 'dezentral',
    'platform': 'Plattform',
    'technology': 'Technologie',
    'development': 'Entwicklung',
    'documentation': 'Dokumentation',
    'tutorial': 'Tutorial',
    'tutorials': 'Tutorials',
    'guide': 'Leitfaden',
    'example': 'Beispiel',
    'examples': 'Beispiele',
    'feature': 'Funktion',
    'features': 'Funktionen',
    'security': 'Sicherheit',
    'privacy': 'Datenschutz',
    'wallet': 'Wallet',
    'transaction': 'Transaktion',
    'transactions': 'Transaktionen',
    'mining': 'Mining',
    'network': 'Netzwerk',
    'node': 'Node',
    'nodes': 'Nodes',
    'consensus': 'Konsens',
    'protocol': 'Protokoll',
    'algorithm': 'Algorithmus',
    'proof': 'Beweis',
    'verification': 'Verifikation',
    'validation': 'Validierung',
    'address': 'Adresse',
    'balance': 'Guthaben',
    'token': 'Token',
    'tokens': 'Tokens',
    'asset': 'Asset',
    'assets': 'Assets',
    'contract': 'Vertrag',
    'contracts': 'Verträge',
    'application': 'Anwendung',
    'applications': 'Anwendungen',
    'ecosystem': 'Ökosystem',
    'community': 'Gemeinschaft',
    'developer': 'Entwickler',
    'developers': 'Entwickler',
    'user': 'Benutzer',
    'users': 'Benutzer',
    'overview': 'Übersicht',
    'introduction': 'Einführung',
    'getting started': 'Erste Schritte',
    'advanced': 'Erweitert',
    'basic': 'Grundlagen',
    'learn': 'Lernen',
    'explore': 'Erkunden',
    'discover': 'Entdecken',
    'build': 'Erstellen',
    'create': 'Erstellen',
    'deploy': 'Bereitstellen',
    'integrate': 'Integrieren',
    'implement': 'Implementieren',
    'configure': 'Konfigurieren',
    'install': 'Installieren',
    'setup': 'Einrichten',
    'download': 'Herunterladen',
    'update': 'Aktualisieren',
    'upgrade': 'Upgrade',
    'version': 'Version',
    'release': 'Release',
    'changelog': 'Changelog',
    'roadmap': 'Roadmap',
    'whitepaper': 'Whitepaper',
    'research': 'Forschung',
    'paper': 'Paper',
    'blog': 'Blog',
    'news': 'Nachrichten',
    'announcement': 'Ankündigung',
    'announcements': 'Ankündigungen',
    'event': 'Veranstaltung',
    'events': 'Veranstaltungen',
    'conference': 'Konferenz',
    'meetup': 'Meetup',
    'workshop': 'Workshop',
    'webinar': 'Webinar',
    'support': 'Support',
    'help': 'Hilfe',
    'faq': 'FAQ',
    'contact': 'Kontakt',
    'about': 'Über uns',
    'team': 'Team',
    'careers': 'Karriere',
    'legal': 'Rechtliches',
    'privacy policy': 'Datenschutzerklärung',
    'terms': 'Bedingungen',
    'license': 'Lizenz',
    'open source': 'Open Source',
    'github': 'GitHub',
    'repository': 'Repository',
    'code': 'Code',
    'api': 'API',
    'sdk': 'SDK',
    'library': 'Bibliothek',
    'framework': 'Framework',
    'tool': 'Tool',
    'tools': 'Tools',
    'resource': 'Ressource',
    'resources': 'Ressourcen',
    'link': 'Link',
    'links': 'Links',
    'reference': 'Referenz',
    'specification': 'Spezifikation',
    'standard': 'Standard',
    'proposal': 'Vorschlag',
    'improvement': 'Verbesserung',
    'update': 'Update',
    'patch': 'Patch',
    'fix': 'Fix',
    'bug': 'Bug',
    'issue': 'Problem',
    'feature request': 'Feature-Anfrage',
    'feedback': 'Feedback',
    'review': 'Review',
    'test': 'Test',
    'testing': 'Testen',
    'benchmark': 'Benchmark',
    'performance': 'Leistung',
    'optimization': 'Optimierung',
    'scalability': 'Skalierbarkeit',
    'efficiency': 'Effizienz',
    'speed': 'Geschwindigkeit',
    'throughput': 'Durchsatz',
    'latency': 'Latenz',
    'capacity': 'Kapazität',
    'limit': 'Limit',
    'threshold': 'Schwellenwert',
    'parameter': 'Parameter',
    'configuration': 'Konfiguration',
    'setting': 'Einstellung',
    'settings': 'Einstellungen',
    'option': 'Option',
    'options': 'Optionen',
    'preference': 'Präferenz',
    'preferences': 'Präferenzen'
  },
  
  fr: {
    // Основные термины для французского
    'blockchain': 'blockchain',
    'smart contract': 'contrat intelligent',
    'smart contracts': 'contrats intelligents',
    'cryptocurrency': 'cryptomonnaie',
    'decentralized': 'décentralisé',
    'platform': 'plateforme',
    'technology': 'technologie',
    'development': 'développement',
    'documentation': 'documentation',
    'tutorial': 'tutoriel',
    'tutorials': 'tutoriels',
    'guide': 'guide',
    'example': 'exemple',
    'examples': 'exemples',
    'feature': 'fonctionnalité',
    'features': 'fonctionnalités',
    'security': 'sécurité',
    'privacy': 'confidentialité',
    'wallet': 'portefeuille',
    'transaction': 'transaction',
    'transactions': 'transactions',
    'mining': 'minage',
    'network': 'réseau',
    'node': 'nœud',
    'nodes': 'nœuds',
    'consensus': 'consensus',
    'protocol': 'protocole',
    'algorithm': 'algorithme',
    'proof': 'preuve',
    'verification': 'vérification',
    'validation': 'validation',
    'address': 'adresse',
    'balance': 'solde',
    'token': 'jeton',
    'tokens': 'jetons',
    'asset': 'actif',
    'assets': 'actifs',
    'contract': 'contrat',
    'contracts': 'contrats',
    'application': 'application',
    'applications': 'applications',
    'ecosystem': 'écosystème',
    'community': 'communauté',
    'developer': 'développeur',
    'developers': 'développeurs',
    'user': 'utilisateur',
    'users': 'utilisateurs',
    'overview': 'aperçu',
    'introduction': 'introduction',
    'getting started': 'premiers pas',
    'advanced': 'avancé',
    'basic': 'basique',
    'learn': 'apprendre',
    'explore': 'explorer',
    'discover': 'découvrir',
    'build': 'construire',
    'create': 'créer',
    'deploy': 'déployer',
    'integrate': 'intégrer',
    'implement': 'implémenter',
    'configure': 'configurer',
    'install': 'installer',
    'setup': 'configuration',
    'download': 'télécharger',
    'update': 'mettre à jour',
    'upgrade': 'mise à niveau',
    'version': 'version',
    'release': 'version',
    'changelog': 'journal des modifications',
    'roadmap': 'feuille de route',
    'whitepaper': 'livre blanc',
    'research': 'recherche',
    'paper': 'article',
    'blog': 'blog',
    'news': 'actualités',
    'announcement': 'annonce',
    'announcements': 'annonces',
    'event': 'événement',
    'events': 'événements',
    'conference': 'conférence',
    'meetup': 'meetup',
    'workshop': 'atelier',
    'webinar': 'webinaire',
    'support': 'support',
    'help': 'aide',
    'faq': 'FAQ',
    'contact': 'contact',
    'about': 'à propos',
    'team': 'équipe',
    'careers': 'carrières',
    'legal': 'légal',
    'privacy policy': 'politique de confidentialité',
    'terms': 'conditions',
    'license': 'licence',
    'open source': 'open source',
    'github': 'GitHub',
    'repository': 'dépôt',
    'code': 'code',
    'api': 'API',
    'sdk': 'SDK',
    'library': 'bibliothèque',
    'framework': 'framework',
    'tool': 'outil',
    'tools': 'outils',
    'resource': 'ressource',
    'resources': 'ressources',
    'link': 'lien',
    'links': 'liens',
    'reference': 'référence',
    'specification': 'spécification',
    'standard': 'standard',
    'proposal': 'proposition',
    'improvement': 'amélioration',
    'update': 'mise à jour',
    'patch': 'correctif',
    'fix': 'correction',
    'bug': 'bug',
    'issue': 'problème',
    'feature request': 'demande de fonctionnalité',
    'feedback': 'retour',
    'review': 'révision',
    'test': 'test',
    'testing': 'test',
    'benchmark': 'benchmark',
    'performance': 'performance',
    'optimization': 'optimisation',
    'scalability': 'évolutivité',
    'efficiency': 'efficacité',
    'speed': 'vitesse',
    'throughput': 'débit',
    'latency': 'latence',
    'capacity': 'capacité',
    'limit': 'limite',
    'threshold': 'seuil',
    'parameter': 'paramètre',
    'configuration': 'configuration',
    'setting': 'paramètre',
    'settings': 'paramètres',
    'option': 'option',
    'options': 'options',
    'preference': 'préférence',
    'preferences': 'préférences'
  }
};

// Функция для простого перевода текста
function simpleTranslate(text, targetLang) {
  if (!text || typeof text !== 'string') return text;
  
  const translations = basicTranslations[targetLang];
  if (!translations) return `[AUTO: ${text}]`;
  
  let translated = text.toLowerCase();
  
  // Заменяем известные термины
  for (const [english, foreign] of Object.entries(translations)) {
    const regex = new RegExp(`\\b${english}\\b`, 'gi');
    translated = translated.replace(regex, foreign);
  }
  
  // Капитализируем первую букву
  translated = translated.charAt(0).toUpperCase() + translated.slice(1);
  
  // Если перевод не изменился значительно, помечаем для ручного перевода
  if (translated.toLowerCase() === text.toLowerCase()) {
    return `[MANUAL: ${text}]`;
  }
  
  return translated;
}

// Функция для массового перевода
function massTranslate(targetLang, dryRun = false) {
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
  
  console.log(`\n🤖 МАССОВЫЙ АВТОПЕРЕВОД для ${targetLang.toUpperCase()}:`);
  console.log(`   Недостающих ключей: ${missingKeys.length}`);
  
  if (missingKeys.length === 0) {
    console.log('   ✅ Все ключи уже переведены!');
    return;
  }
  
  let autoTranslated = 0;
  let manualRequired = 0;
  
  // Переводим недостающие ключи
  missingKeys.forEach(key => {
    const enValue = getValueByPath(enData, key);
    const translated = simpleTranslate(enValue, targetLang);
    
    setValueByPath(langData, key, translated);
    
    if (translated.startsWith('[MANUAL:')) {
      manualRequired++;
    } else {
      autoTranslated++;
    }
  });
  
  console.log(`   🤖 Автоматически переведено: ${autoTranslated}`);
  console.log(`   ✋ Требует ручной доработки: ${manualRequired}`);
  
  if (!dryRun) {
    // Сохраняем обновленный файл
    fs.writeFileSync(langPath, JSON.stringify(langData, null, 2) + '\n', 'utf8');
    console.log(`   💾 Файл сохранен: ${langPath}`);
  } else {
    console.log(`   🔍 Режим предварительного просмотра - файл не изменен`);
  }
  
  return {
    total: missingKeys.length,
    auto: autoTranslated,
    manual: manualRequired
  };
}

// CLI интерфейс
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const lang = args.find(arg => !arg.startsWith('--'));
  
  if (!lang) {
    console.log('Использование: node mass-translate.js <язык> [--dry-run]');
    console.log('Пример: node mass-translate.js de');
    process.exit(1);
  }
  
  massTranslate(lang, dryRun);
}

module.exports = { massTranslate, simpleTranslate }; 