#!/usr/bin/env node
/**
 * Translation script using OpenAI API
 * 
 * Setup:
 *   Add OPENAI_API_KEY to .env.local file
 * 
 * Usage:
 *   npm run translate messages/en/home.json ru
 *   npm run translate:ru     # translate all to Russian
 *   npm run translate:zh     # translate all to Chinese
 */

const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length) {
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const LOCALE_NAMES = {
  'ru': 'Russian',
  'zh-cn': 'Simplified Chinese',
  'de': 'German',
  'fr': 'French',
  'es': 'Spanish',
  'ja': 'Japanese',
  'ko': 'Korean',
  'pt-br': 'Brazilian Portuguese',
};

async function translateWithOpenAI(text, targetLocale) {
  const targetLang = LOCALE_NAMES[targetLocale] || targetLocale;
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator. Translate the following JSON values from English to ${targetLang}.
Keep all JSON keys exactly the same (in English).
Only translate the string values.
Preserve any placeholders like {name}, {{variable}}, etc.
Return valid JSON only, no markdown or explanation.`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.3,
    }),
  });

  const raw = await response.text();

  if (!response.ok) {
    let message = `OpenAI API error (status ${response.status})`;
    try {
      const err = JSON.parse(raw);
      if (err && err.error && err.error.message) {
        message += `: ${err.error.message}`;
      }
    } catch {
      message += `: ${raw.slice(0, 200)}`;
    }
    throw new Error(message);
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error('Failed to parse OpenAI response as JSON');
  }

  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('OpenAI response has no choices; got: ' + JSON.stringify(data).slice(0, 200));
  }

  return data.choices[0].message.content;
}

async function translateFile(sourcePath, targetLocale) {
  console.log(`\nTranslating: ${sourcePath} -> ${targetLocale}`);
  
  const sourceContent = fs.readFileSync(sourcePath, 'utf8');
  const sourceJson = JSON.parse(sourceContent);
  
  // Split into chunks of keys to avoid token limits
  const keys = Object.keys(sourceJson);
  const chunkSize = 10;
  const result = {};
  
  for (let i = 0; i < keys.length; i += chunkSize) {
    const chunkKeys = keys.slice(i, i + chunkSize);
    const chunk = {};
    chunkKeys.forEach(k => (chunk[k] = sourceJson[k]));
    
    console.log(`  Chunk ${Math.floor(i / chunkSize) + 1}/${Math.ceil(keys.length / chunkSize)}...`);

    const maxRetries = 3;
    let attempt = 0;
    let success = false;

    while (attempt < maxRetries && !success) {
      attempt++;
      try {
        const translated = await translateWithOpenAI(JSON.stringify(chunk, null, 2), targetLocale);
        const parsedChunk = JSON.parse(translated);
        Object.assign(result, parsedChunk);
        success = true;
      } catch (e) {
        console.error(`  Error translating chunk (attempt ${attempt}/${maxRetries}): ${e.message}`);
        if (attempt >= maxRetries) {
          console.error(`  Giving up on this chunk, keeping English text as fallback.`);
          Object.assign(result, chunk);
        } else {
          // Exponential backoff between retries
          const delayMs = 1000 * attempt;
          await new Promise((r) => setTimeout(r, delayMs));
        }
      }
    }

    // Small pause between chunks to be gentle on the API
    await new Promise((r) => setTimeout(r, 300));
  }
  
  // Write to target file
  const targetPath = sourcePath.replace('/en/', `/${targetLocale}/`);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, JSON.stringify(result, null, 2), 'utf8');
  
  console.log(`  Saved: ${targetPath}`);
  return targetPath;
}

async function translateAll(targetLocale) {
  const enDir = 'messages/en';
  const files = fs.readdirSync(enDir).filter(f => f.endsWith('.json'));
  
  console.log(`Translating ${files.length} files to ${targetLocale}...`);
  
  for (const file of files) {
    await translateFile(path.join(enDir, file), targetLocale);
  }
  
  console.log('\nDone!');
}

// Main
async function main() {
  if (!OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY environment variable is required');
    console.log('\nUsage:');
    console.log('  OPENAI_API_KEY=sk-xxx node scripts/translate-json.js messages/en/home.json ru');
    console.log('  OPENAI_API_KEY=sk-xxx node scripts/translate-json.js --all ru');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage:');
    console.log('  node scripts/translate-json.js [source-file] [target-locale]');
    console.log('  node scripts/translate-json.js --all [target-locale]');
    console.log('\nExamples:');
    console.log('  node scripts/translate-json.js messages/en/home.json ru');
    console.log('  node scripts/translate-json.js --all zh-cn');
    process.exit(1);
  }

  if (args[0] === '--all') {
    await translateAll(args[1]);
  } else {
    await translateFile(args[0], args[1]);
  }
}

main().catch(console.error);

