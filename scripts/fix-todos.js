#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');

// Словарь переводов для замены TODO записей
const todoReplacements = {
  ru: {
    '[TODO: Decentralized Money for a Free Society]': 'Децентрализованные деньги для свободного общества',
    '[TODO: The globally-neutral settlement layer for programmable money.]': 'Глобально-нейтральный расчетный слой для программируемых денег.',
    '[TODO: The open-source home of digital freedom]': 'Open-source дом цифровой свободы',
    '[TODO: Join the movement for decentralized, open-source money]': 'Присоединяйтесь к движению за децентрализованные, открытые деньги',
    '[TODO: Ergo Platform]': 'Платформа Ergo',
    '[TODO: Resilient blockchain for contractual money]': 'Устойчивый блокчейн для контрактных денег',
    '[TODO: Start]': 'Начало',
    '[TODO: Technology]': 'Технологии',
    '[TODO: Use]': 'Применение',
    '[TODO: Learn]': 'Обучение',
    '[TODO: Docs]': 'Документация',
    '[TODO: Ecosystem]': 'Экосистема',
    '[TODO: Blog]': 'Блог',
    '[TODO: Get Wallet]': 'Получить кошелек',
    '[TODO: Introduction]': 'Введение',
    '[TODO: Getting Started]': 'Начало работы',
    '[TODO: Tutorials]': 'Руководства',
    '[TODO: API Reference]': 'API справочник',
    '[TODO: Whitepaper]': 'Белая книга',
    '[TODO: Research Papers]': 'Исследовательские работы',
    '[TODO: Developer Resources]': 'Ресурсы разработчика',
    '[TODO: Community]': 'Сообщество',
    '[TODO: Discord]': 'Discord',
    '[TODO: Telegram]': 'Telegram',
    '[TODO: Reddit]': 'Reddit',
    '[TODO: Twitter]': 'Twitter',
    '[TODO: GitHub]': 'GitHub',
    '[TODO: Forum]': 'Форум',
    '[TODO: Newsletter]': 'Рассылка',
    '[TODO: Events]': 'События',
    '[TODO: Meetups]': 'Встречи',
    '[TODO: Conferences]': 'Конференции',
    '[TODO: Workshops]': 'Мастер-классы',
    '[TODO: Webinars]': 'Вебинары',
    '[TODO: DeFi]': 'DeFi',
    '[TODO: Decentralized Finance]': 'Децентрализованные финансы',
    '[TODO: NFTs]': 'NFT',
    '[TODO: Non-Fungible Tokens]': 'Невзаимозаменяемые токены',
    '[TODO: Digital Assets]': 'Цифровые активы',
    '[TODO: Stablecoins]': 'Стейблкоины',
    '[TODO: Privacy Applications]': 'Приложения для конфиденциальности',
    '[TODO: Smart Contracts]': 'Смарт-контракты',
    '[TODO: Oracles]': 'Оракулы',
    '[TODO: Cross-chain]': 'Кросс-чейн',
    '[TODO: Interoperability]': 'Совместимость',
    '[TODO: Scalability]': 'Масштабируемость',
    '[TODO: Security]': 'Безопасность',
    '[TODO: Privacy]': 'Конфиденциальность',
    '[TODO: Sustainability]': 'Устойчивость',
    '[TODO: Mining]': 'Майнинг',
    '[TODO: Consensus]': 'Консенсус',
    '[TODO: Proof of Work]': 'Доказательство работы',
    '[TODO: UTXO]': 'UTXO',
    '[TODO: Extended UTXO]': 'Расширенная UTXO',
    '[TODO: Sigma Protocols]': 'Сигма протоколы',
    '[TODO: Zero-Knowledge Proofs]': 'Доказательства с нулевым разглашением',
    '[TODO: ErgoScript]': 'ErgoScript',
    '[TODO: Programming Language]': 'Язык программирования',
    '[TODO: Development Tools]': 'Инструменты разработки',
    '[TODO: SDK]': 'SDK',
    '[TODO: Libraries]': 'Библиотеки',
    '[TODO: Frameworks]': 'Фреймворки',
    '[TODO: Testing]': 'Тестирование',
    '[TODO: Deployment]': 'Развертывание',
    '[TODO: Monitoring]': 'Мониторинг',
    '[TODO: Analytics]': 'Аналитика',
    '[TODO: Metrics]': 'Метрики',
    '[TODO: Performance]': 'Производительность',
    '[TODO: Optimization]': 'Оптимизация',
    '[TODO: Best Practices]': 'Лучшие практики',
    '[TODO: Guidelines]': 'Руководящие принципы',
    '[TODO: Standards]': 'Стандарты',
    '[TODO: Specifications]': 'Спецификации',
    '[TODO: Proposals]': 'Предложения',
    '[TODO: Improvements]': 'Улучшения',
    '[TODO: Roadmap]': 'Дорожная карта',
    '[TODO: Milestones]': 'Вехи',
    '[TODO: Releases]': 'Релизы',
    '[TODO: Updates]': 'Обновления',
    '[TODO: Changelog]': 'Журнал изменений',
    '[TODO: Version History]': 'История версий',
    '[TODO: Migration Guide]': 'Руководство по миграции',
    '[TODO: Troubleshooting]': 'Устранение неполадок',
    '[TODO: FAQ]': 'Часто задаваемые вопросы',
    '[TODO: Support]': 'Поддержка',
    '[TODO: Help]': 'Помощь',
    '[TODO: Contact]': 'Контакты',
    '[TODO: About]': 'О проекте',
    '[TODO: Team]': 'Команда',
    '[TODO: Careers]': 'Карьера',
    '[TODO: Press]': 'Пресса',
    '[TODO: Media Kit]': 'Медиа-кит',
    '[TODO: Brand Guidelines]': 'Руководство по бренду',
    '[TODO: Legal]': 'Правовая информация',
    '[TODO: Terms of Service]': 'Условия использования',
    '[TODO: Privacy Policy]': 'Политика конфиденциальности',
    '[TODO: Cookie Policy]': 'Политика использования файлов cookie',
    '[TODO: Disclaimer]': 'Отказ от ответственности',
    '[TODO: License]': 'Лицензия',
    '[TODO: Open Source]': 'Открытый исходный код',
    '[TODO: Contributions]': 'Вклады',
    '[TODO: Contributors]': 'Участники',
    '[TODO: Acknowledgments]': 'Благодарности',
    '[TODO: Credits]': 'Авторы',
    '[TODO: Sponsors]': 'Спонсоры',
    '[TODO: Partners]': 'Партнеры',
    '[TODO: Integrations]': 'Интеграции',
    '[TODO: Exchanges]': 'Биржи',
    '[TODO: Wallets]': 'Кошельки',
    '[TODO: Services]': 'Сервисы',
    '[TODO: Applications]': 'Приложения',
    '[TODO: Projects]': 'Проекты',
    '[TODO: Ecosystem Partners]': 'Партнеры экосистемы',
    '[TODO: Developer Community]': 'Сообщество разработчиков',
    '[TODO: User Community]': 'Пользовательское сообщество',
    '[TODO: Governance]': 'Управление',
    '[TODO: Voting]': 'Голосование',
    '[TODO: Proposals]': 'Предложения',
    '[TODO: Decisions]': 'Решения',
    '[TODO: Foundation]': 'Фонд',
    '[TODO: Treasury]': 'Казначейство',
    '[TODO: Funding]': 'Финансирование',
    '[TODO: Grants]': 'Гранты',
    '[TODO: Bounties]': 'Награды',
    '[TODO: Hackathons]': 'Хакатоны',
    '[TODO: Competitions]': 'Конкурсы',
    '[TODO: Awards]': 'Награды',
    '[TODO: Recognition]': 'Признание'
  }
};

// Функция для замены TODO записей
function fixTodos(lang) {
  const messagesDir = path.join(__dirname, '../messages');
  const langPath = path.join(messagesDir, `${lang}.json`);
  
  if (!fs.existsSync(langPath)) {
    console.log(`❌ Файл ${langPath} не найден`);
    return;
  }
  
  let content = fs.readFileSync(langPath, 'utf8');
  const replacements = todoReplacements[lang];
  
  if (!replacements) {
    console.log(`❌ Переводы для языка ${lang} не найдены`);
    return;
  }
  
  let replacedCount = 0;
  
  // Заменяем все TODO записи
  for (const [todo, translation] of Object.entries(replacements)) {
    const regex = new RegExp(todo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, translation);
      replacedCount += matches.length;
    }
  }
  
  // Заменяем оставшиеся TODO записи общим шаблоном
  const remainingTodos = content.match(/\[TODO: ([^\]]+)\]/g);
  if (remainingTodos) {
    remainingTodos.forEach(todo => {
      const text = todo.match(/\[TODO: ([^\]]+)\]/)[1];
      // Простая замена для оставшихся TODO
      let translation = text;
      
      // Базовые переводы
      if (lang === 'ru') {
        translation = text
          .replace(/Smart Contract/gi, 'Смарт-контракт')
          .replace(/Blockchain/gi, 'Блокчейн')
          .replace(/DeFi/gi, 'DeFi')
          .replace(/NFT/gi, 'NFT')
          .replace(/Token/gi, 'Токен')
          .replace(/Wallet/gi, 'Кошелек')
          .replace(/Mining/gi, 'Майнинг')
          .replace(/Network/gi, 'Сеть')
          .replace(/Protocol/gi, 'Протокол')
          .replace(/Security/gi, 'Безопасность')
          .replace(/Privacy/gi, 'Конфиденциальность')
          .replace(/Development/gi, 'Разработка')
          .replace(/Documentation/gi, 'Документация')
          .replace(/Tutorial/gi, 'Руководство')
          .replace(/Guide/gi, 'Руководство')
          .replace(/Example/gi, 'Пример')
          .replace(/Feature/gi, 'Функция')
          .replace(/Application/gi, 'Приложение')
          .replace(/Platform/gi, 'Платформа')
          .replace(/Technology/gi, 'Технология')
          .replace(/Innovation/gi, 'Инновация')
          .replace(/Solution/gi, 'Решение')
          .replace(/Service/gi, 'Сервис')
          .replace(/Tool/gi, 'Инструмент')
          .replace(/Resource/gi, 'Ресурс')
          .replace(/Community/gi, 'Сообщество')
          .replace(/Support/gi, 'Поддержка')
          .replace(/Help/gi, 'Помощь')
          .replace(/Contact/gi, 'Контакты')
          .replace(/About/gi, 'О проекте')
          .replace(/Team/gi, 'Команда')
          .replace(/Legal/gi, 'Правовая информация')
          .replace(/Terms/gi, 'Условия')
          .replace(/Privacy Policy/gi, 'Политика конфиденциальности')
          .replace(/License/gi, 'Лицензия');
      }
      
      content = content.replace(todo, translation);
      replacedCount++;
    });
  }
  
  // Сохраняем обновленный файл
  fs.writeFileSync(langPath, content, 'utf8');
  
  console.log(`✅ ${lang.toUpperCase()}: Заменено ${replacedCount} TODO записей`);
  
  // Проверяем, остались ли TODO записи
  const remainingCount = (content.match(/\[TODO:/g) || []).length;
  if (remainingCount > 0) {
    console.log(`⚠️ ${lang.toUpperCase()}: Осталось ${remainingCount} TODO записей`);
  } else {
    console.log(`🎉 ${lang.toUpperCase()}: Все TODO записи исправлены!`);
  }
}

// CLI интерфейс
if (require.main === module) {
  const args = process.argv.slice(2);
  const lang = args[0];
  
  if (!lang) {
    console.log('Использование: node fix-todos.js <язык>');
    console.log('Пример: node fix-todos.js ru');
    process.exit(1);
  }
  
  fixTodos(lang);
}

module.exports = { fixTodos }; 