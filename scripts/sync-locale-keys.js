#!/usr/bin/env node
/**
 * Sync missing keys from messages/en/*.json to messages/ru/*.json
 *
 * - Не трогает существующие значения в ru
 * - Рекурсивно добавляет отсутствующие ключи
 * - Для массивов: если ключ существует — оставляем как есть; если нет — копируем целиком из en
 *
 * Запуск:
 *   node scripts/sync-locale-keys.js
 */

const fs = require('fs');
const path = require('path');

const LOCALES = ['ru']; // можно добавить 'zh-cn' при необходимости

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Рекурсивно добавляем отсутствующие ключи из source в target
function mergeMissing(source, target) {
  if (source === null || source === undefined) return target;

  // Если target отсутствует - просто копируем источник
  if (target === undefined) {
    return source;
  }

  // Примитивы и массивы: если target уже есть - оставляем как есть
  if (typeof source !== 'object' || Array.isArray(source)) {
    return target;
  }

  // Оба объекта
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (!(key in target)) {
      result[key] = source[key];
    } else {
      result[key] = mergeMissing(source[key], target[key]);
    }
  }
  return result;
}

function syncLocale(locale) {
  const enDir = path.join(process.cwd(), 'messages', 'en');
  const localeDir = path.join(process.cwd(), 'messages', locale);

  const files = fs.readdirSync(enDir).filter((f) => f.endsWith('.json'));

  console.log(`Syncing missing keys from en -> ${locale} for ${files.length} files...`);

  for (const file of files) {
    const enPath = path.join(enDir, file);
    const localePath = path.join(localeDir, file);

    const enJson = readJson(enPath);
    let localeJson;

    if (fs.existsSync(localePath)) {
      localeJson = readJson(localePath);
    } else {
      // Если файла для локали нет - просто копируем весь en
      localeJson = {};
    }

    const merged = mergeMissing(enJson, localeJson);

    writeJson(localePath, merged);
    console.log(`  Synced: ${file}`);
  }

  console.log(`Done for locale: ${locale}\n`);
}

function main() {
  LOCALES.forEach(syncLocale);
}

main();


