#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Функция для получения всех ключей из объекта (рекурсивно)
function getAllKeys(obj, prefix = '') {
  let keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys = keys.concat(getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

// Функция для подсчета вложенных объектов
function countNestedObjects(obj) {
  let count = 0;
  
  for (const value of Object.values(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      count++;
      count += countNestedObjects(value);
    }
  }
  
  return count;
}

// Основная функция анализа
function analyzeI18n() {
  const messagesDir = path.join(__dirname, '../messages');
  const files = fs.readdirSync(messagesDir).filter(file => file.endsWith('.json'));
  
  console.log('🌍 АНАЛИЗ ЛОКАЛИЗАЦИЙ\n');
  console.log('='.repeat(60));
  
  // Загружаем эталонный английский файл
  const enPath = path.join(messagesDir, 'en.json');
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const enKeys = getAllKeys(enData);
  const enSections = Object.keys(enData);
  
  console.log(`📚 Эталон (English):`);
  console.log(`   Всего ключей: ${enKeys.length}`);
  console.log(`   Разделов: ${enSections.length}`);
  console.log(`   Разделы: ${enSections.join(', ')}\n`);
  
  const results = [];
  
  // Анализируем каждый язык
  files.forEach(file => {
    if (file === 'en.json') return;
    
    const lang = file.replace('.json', '');
    const langPath = path.join(messagesDir, file);
    const langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    const langKeys = getAllKeys(langData);
    const langSections = Object.keys(langData);
    
    const missingKeys = enKeys.filter(key => !langKeys.includes(key));
    const extraKeys = langKeys.filter(key => !enKeys.includes(key));
    const missingSections = enSections.filter(section => !langSections.includes(section));
    
    const completeness = ((langKeys.length / enKeys.length) * 100).toFixed(1);
    
    results.push({
      lang,
      totalKeys: langKeys.length,
      missingKeys: missingKeys.length,
      extraKeys: extraKeys.length,
      completeness: parseFloat(completeness),
      sections: langSections.length,
      missingSections: missingSections.length,
      missingKeysList: missingKeys.slice(0, 10), // Первые 10 для примера
      missingSectionsList: missingSections
    });
  });
  
  // Сортируем по полноте (по убыванию)
  results.sort((a, b) => b.completeness - a.completeness);
  
  console.log('📊 СТАТИСТИКА ПО ЯЗЫКАМ:\n');
  console.log('Язык'.padEnd(12) + 'Ключи'.padEnd(8) + 'Полнота'.padEnd(10) + 'Недостает'.padEnd(12) + 'Статус');
  console.log('-'.repeat(60));
  
  results.forEach(result => {
    const status = result.completeness >= 90 ? '✅ Готов' : 
                   result.completeness >= 50 ? '⚠️ Частично' : '❌ Критично';
    
    console.log(
      result.lang.padEnd(12) + 
      result.totalKeys.toString().padEnd(8) + 
      `${result.completeness}%`.padEnd(10) + 
      result.missingKeys.toString().padEnd(12) + 
      status
    );
  });
  
  console.log('\n🔍 ДЕТАЛЬНЫЙ АНАЛИЗ ПРИОРИТЕТНЫХ ЯЗЫКОВ:\n');
  
  // Показываем детали для языков с низкой полнотой
  results.filter(r => r.completeness < 90).forEach(result => {
    console.log(`\n📍 ${result.lang.toUpperCase()}:`);
    console.log(`   Полнота: ${result.completeness}%`);
    console.log(`   Недостает ключей: ${result.missingKeys}`);
    console.log(`   Недостает разделов: ${result.missingSections}`);
    
    if (result.missingSectionsList.length > 0) {
      console.log(`   Отсутствующие разделы: ${result.missingSectionsList.join(', ')}`);
    }
    
    if (result.missingKeysList.length > 0) {
      console.log(`   Примеры недостающих ключей:`);
      result.missingKeysList.forEach(key => {
        console.log(`     - ${key}`);
      });
      if (result.missingKeys > 10) {
        console.log(`     ... и еще ${result.missingKeys - 10} ключей`);
      }
    }
  });
  
  console.log('\n🎯 РЕКОМЕНДАЦИИ:\n');
  
  // Приоритизация
  const tier1 = results.filter(r => r.completeness >= 40 && r.completeness < 90);
  const tier2 = results.filter(r => r.completeness >= 10 && r.completeness < 40);
  const tier3 = results.filter(r => r.completeness < 10);
  
  if (tier1.length > 0) {
    console.log('🔴 TIER 1 (Приоритет - довести до 100%):');
    tier1.forEach(r => console.log(`   - ${r.lang}: ${r.missingKeys} ключей`));
  }
  
  if (tier2.length > 0) {
    console.log('\n🟡 TIER 2 (Средний приоритет):');
    tier2.forEach(r => console.log(`   - ${r.lang}: ${r.missingKeys} ключей`));
  }
  
  if (tier3.length > 0) {
    console.log('\n🟢 TIER 3 (Низкий приоритет):');
    tier3.forEach(r => console.log(`   - ${r.lang}: ${r.missingKeys} ключей`));
  }
  
  // Общая статистика
  const totalMissingKeys = results.reduce((sum, r) => sum + r.missingKeys, 0);
  const avgCompleteness = (results.reduce((sum, r) => sum + r.completeness, 0) / results.length).toFixed(1);
  
  console.log('\n📈 ОБЩАЯ СТАТИСТИКА:');
  console.log(`   Всего языков: ${results.length + 1} (включая English)`);
  console.log(`   Средняя полнота: ${avgCompleteness}%`);
  console.log(`   Всего недостающих ключей: ${totalMissingKeys}`);
  console.log(`   Объем работы: ~${Math.ceil(totalMissingKeys / 100)} человеко-дней`);
  
  return results;
}

// Запускаем анализ
if (require.main === module) {
  analyzeI18n();
}

module.exports = { analyzeI18n, getAllKeys }; 