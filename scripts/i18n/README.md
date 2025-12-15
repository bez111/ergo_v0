# i18n Scripts

Scripts for managing internationalization of the Ergo website.

## Overview

| Script | Purpose |
|--------|---------|
| `export-for-translation.js` | Export en.json to CSV/JSON for translators |
| `import-translations.js` | Import translated CSV/JSON back to messages/*.json |
| `translate-batch.js` | AI-powered batch translation (OpenAI/Anthropic) |
| `sync-locales.js` | Check locale coverage and find missing keys |

## Current Status

```
English keys: 7,813
Russian (ru): 12.8% coverage
Other locales: ~4.8% coverage
```

## Quick Start

### 1. Check Translation Coverage

```bash
node scripts/i18n/sync-locales.js --report
```

### 2. Export for Manual Translation

```bash
# Export to CSV (for spreadsheets)
node scripts/i18n/export-for-translation.js --format csv --output translations.csv

# Export to JSON (for translation platforms)
node scripts/i18n/export-for-translation.js --format json --output translations.json
```

### 3. AI-Powered Translation

```bash
# Set API key
export OPENAI_API_KEY="your-key"
# or
export ANTHROPIC_API_KEY="your-key"

# Translate to Russian
node scripts/i18n/translate-batch.js --locale ru --provider openai

# Translate to German
node scripts/i18n/translate-batch.js --locale de --provider anthropic
```

### 4. Import Translated Files

```bash
# Import from CSV
node scripts/i18n/import-translations.js --locale de --input translated-de.csv

# Import from JSON
node scripts/i18n/import-translations.js --locale fr --input translated-fr.json
```

### 5. Fill Missing Keys (for manual translation)

```bash
# Fill missing keys with [EN] prefix
node scripts/i18n/sync-locales.js --locale ru --fill
```

## Supported Locales

| Code | Language |
|------|----------|
| ru | Russian |
| de | German |
| fr | French |
| es | Spanish |
| it | Italian |
| pt-br | Portuguese (Brazil) |
| zh-cn | Chinese (Simplified) |
| zh-tw | Chinese (Traditional) |
| ja | Japanese |
| ko-kr | Korean |
| ar | Arabic |
| tr | Turkish |

## Best Practices

1. **Keep technical terms unchanged**: Ergo, ERG, eUTXO, ErgoScript, Sigma, DeFi, NFT, etc.
2. **Preserve placeholders**: `{count}`, `{name}`, etc.
3. **Maintain formatting**: Keep HTML tags and line breaks
4. **Test locally**: Run `npm run dev` and check translated pages
5. **Review AI translations**: AI translations should be reviewed by native speakers

## Workflow for Mass Translation

1. Run `sync-locales.js --report` to see missing keys
2. Export with `export-for-translation.js`
3. Translate using AI or professional service
4. Import with `import-translations.js`
5. Review and fix issues manually
6. Run `sync-locales.js` to verify coverage

## Files

- `messages/en.json` - English (source of truth)
- `messages/ru.json` - Russian
- `messages/de.json` - German
- ... (other locales)

