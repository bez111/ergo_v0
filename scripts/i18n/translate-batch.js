#!/usr/bin/env node
/**
 * Batch translate en.json to target locales using AI
 * 
 * Usage:
 *   node scripts/i18n/translate-batch.js --locale ru [--provider openai|anthropic]
 * 
 * Options:
 *   --locale     Target locale (e.g., ru, de, fr, es, zh-cn)
 *   --provider   AI provider: openai (default) or anthropic
 *   --batch-size Number of keys per API call (default: 50)
 *   --dry-run    Show what would be translated without calling API
 * 
 * Environment variables:
 *   OPENAI_API_KEY     - OpenAI API key
 *   ANTHROPIC_API_KEY  - Anthropic API key
 */

const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);
let locale = null;
let provider = 'openai';
let batchSize = 50;
let dryRun = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--locale' && args[i + 1]) {
    locale = args[i + 1];
    i++;
  } else if (args[i] === '--provider' && args[i + 1]) {
    provider = args[i + 1];
    i++;
  } else if (args[i] === '--batch-size' && args[i + 1]) {
    batchSize = parseInt(args[i + 1]);
    i++;
  } else if (args[i] === '--dry-run') {
    dryRun = true;
  }
}

if (!locale) {
  console.error('Usage: node translate-batch.js --locale <locale>');
  process.exit(1);
}

// Locale display names
const localeNames = {
  'ru': 'Russian',
  'de': 'German',
  'fr': 'French',
  'es': 'Spanish',
  'it': 'Italian',
  'pt-br': 'Portuguese (Brazil)',
  'zh-cn': 'Chinese (Simplified)',
  'zh-tw': 'Chinese (Traditional)',
  'ja': 'Japanese',
  'ko-kr': 'Korean',
  'ar': 'Arabic',
  'tr': 'Turkish',
};

const targetLanguage = localeNames[locale] || locale;

// Load source file
const enPath = path.join(__dirname, '../../messages/en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

// Load existing locale file if exists
const localePath = path.join(__dirname, `../../messages/${locale}.json`);
let existing = {};
if (fs.existsSync(localePath)) {
  existing = JSON.parse(fs.readFileSync(localePath, 'utf-8'));
  console.log(`Loaded existing ${locale}.json`);
}

// Flatten object
function flattenObject(obj, prefix = '') {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'string') {
      result[fullKey] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === 'string') {
          result[`${fullKey}[${index}]`] = item;
        } else if (typeof item === 'object') {
          Object.assign(result, flattenObject(item, `${fullKey}[${index}]`));
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, fullKey));
    }
  }
  
  return result;
}

// Unflatten object
function unflattenObject(flat) {
  const result = {};
  
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split(/\.|\[|\]/).filter(Boolean);
    let current = result;
    
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      const nextPart = parts[i + 1];
      
      if (!current[part]) {
        current[part] = /^\d+$/.test(nextPart) ? [] : {};
      }
      current = current[part];
    }
    
    const lastPart = parts[parts.length - 1];
    current[lastPart] = value;
  }
  
  return result;
}

// Get value from nested object
function getNestedValue(obj, keyPath) {
  const parts = keyPath.split(/\.|\[|\]/).filter(Boolean);
  let current = obj;
  
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  
  return current;
}

// Find keys that need translation
function findMissingKeys(enFlat, existingFlat) {
  const missing = [];
  
  for (const [key, value] of Object.entries(enFlat)) {
    if (!existingFlat[key]) {
      missing.push({ key, value });
    }
  }
  
  return missing;
}

// Build translation prompt
function buildPrompt(batch, targetLang) {
  const items = batch.map((item, i) => 
    `${i + 1}. "${item.value}"`
  ).join('\n');
  
  return `Translate the following UI text strings from English to ${targetLang}. 
These are for a blockchain/cryptocurrency website about Ergo.

Rules:
- Keep technical terms (Ergo, ERG, eUTXO, ErgoScript, Sigma, DeFi, NFT, etc.) unchanged
- Maintain any placeholders like {count}, {name}, etc.
- Keep HTML tags unchanged if present
- Preserve the exact formatting (line breaks, punctuation)
- Be concise and natural in the target language

Strings to translate:
${items}

Return ONLY a JSON object with the translations in this exact format:
{
  "1": "translated text 1",
  "2": "translated text 2",
  ...
}`;
}

// Call OpenAI API
async function translateWithOpenAI(batch, targetLang) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator specializing in blockchain and cryptocurrency content. Translate to ${targetLang} while keeping technical terms intact.`
        },
        {
          role: 'user',
          content: buildPrompt(batch, targetLang)
        }
      ],
      temperature: 0.3,
    }),
  });
  
  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status}`);
  }
  
  const data = await response.json();
  const content = data.choices[0].message.content;
  
  // Extract JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Could not parse translation response');
  }
  
  return JSON.parse(jsonMatch[0]);
}

// Call Anthropic API
async function translateWithAnthropic(batch, targetLang) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is required');
  }
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: buildPrompt(batch, targetLang)
        }
      ],
    }),
  });
  
  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.status}`);
  }
  
  const data = await response.json();
  const content = data.content[0].text;
  
  // Extract JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Could not parse translation response');
  }
  
  return JSON.parse(jsonMatch[0]);
}

// Main execution
async function main() {
  console.log(`\nTranslating to ${targetLanguage} (${locale})`);
  console.log(`Provider: ${provider}`);
  console.log(`Batch size: ${batchSize}\n`);
  
  // Flatten both objects
  const enFlat = flattenObject(en);
  const existingFlat = flattenObject(existing);
  
  console.log(`English keys: ${Object.keys(enFlat).length}`);
  console.log(`Existing ${locale} keys: ${Object.keys(existingFlat).length}`);
  
  // Find missing keys
  const missing = findMissingKeys(enFlat, existingFlat);
  console.log(`Missing keys to translate: ${missing.length}\n`);
  
  if (missing.length === 0) {
    console.log('Nothing to translate!');
    return;
  }
  
  if (dryRun) {
    console.log('[DRY RUN] Would translate:');
    missing.slice(0, 10).forEach(item => {
      console.log(`  ${item.key}: "${item.value.substring(0, 50)}..."`);
    });
    if (missing.length > 10) {
      console.log(`  ... and ${missing.length - 10} more`);
    }
    return;
  }
  
  // Translate in batches
  const translated = { ...existingFlat };
  let totalTranslated = 0;
  
  for (let i = 0; i < missing.length; i += batchSize) {
    const batch = missing.slice(i, i + batchSize);
    console.log(`Translating batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(missing.length / batchSize)} (${batch.length} items)...`);
    
    try {
      const translateFn = provider === 'anthropic' 
        ? translateWithAnthropic 
        : translateWithOpenAI;
      
      const result = await translateFn(batch, targetLanguage);
      
      // Map results back to keys
      batch.forEach((item, index) => {
        const translation = result[String(index + 1)];
        if (translation) {
          translated[item.key] = translation;
          totalTranslated++;
        }
      });
      
      // Rate limiting - wait between batches
      if (i + batchSize < missing.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error translating batch: ${error.message}`);
      // Continue with next batch
    }
  }
  
  console.log(`\nTranslated ${totalTranslated} keys`);
  
  // Unflatten and save
  const result = unflattenObject(translated);
  fs.writeFileSync(localePath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`Saved to: ${localePath}`);
  
  console.log('\nDone!');
}

main().catch(console.error);

