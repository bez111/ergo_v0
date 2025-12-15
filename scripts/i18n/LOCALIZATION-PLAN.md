# Localization Plan for 21+ Languages

## Current Status

- **EN**: 9,611 keys (source of truth)
- **RU**: 2,207 keys (23% coverage)
- **Other locales**: Not started

## Strategy: 3-Phase Approach

### Phase 1: Complete Unhardcoding (Priority: HIGH)

**Goal**: All text must be in `en.json` before mass translation.

**Tasks**:
1. Audit all pages for hardcoded strings
2. Move all text to `messages/en.json`
3. Update components to use `useTranslations()`

**Pages to check** (run `audit-hardcoded.ts`):
- [ ] `/technology/*` - Mostly done
- [ ] `/use/*` - Needs work
- [ ] `/start/*` - Needs work  
- [ ] `/learn/*` - Needs work
- [ ] `/ecosystem/*` - Check status
- [ ] `/blog/*` - Check status
- [ ] `/compare/*` - Done
- [ ] `/miners`, `/hodlers`, `/faq` - Keys added, components need update

**Commands**:
```bash
# Run audit
npx ts-node scripts/i18n/audit-hardcoded.ts

# Export current state
npx ts-node scripts/i18n/export-for-translation.ts
```

### Phase 2: Translation Preparation

**Goal**: Prepare files for professional/AI translation.

**Options**:

#### Option A: Professional Translation Service
- Recommended: Crowdin, Lokalise, Phrase
- Export CSV/XLIFF
- Cost estimate: ~$0.05-0.10 per word
- Current: ~50,000 words × 21 languages = ~$50-100K

#### Option B: AI Translation + Human Review
- Use Claude/GPT for initial translation
- Native speakers review and correct
- Cost: Much lower, quality depends on review
- Recommended for MVP

#### Option C: Community Translation
- Set up Crowdin community project
- Free, but slower and less consistent
- Good for long-term maintenance

**Recommended**: Option B for initial launch, Option A for critical pages.

### Phase 3: Mass Translation

**Priority order for languages**:
1. Tier 1 (High traffic expected):
   - Spanish (es)
   - Chinese Simplified (zh-cn)
   - Russian (ru) - In progress
   - Portuguese (pt-br)
   - Japanese (ja)

2. Tier 2 (Medium priority):
   - German (de)
   - French (fr)
   - Korean (ko)
   - Turkish (tr)
   - Italian (it)

3. Tier 3 (Community demand):
   - Arabic (ar)
   - Chinese Traditional (zh-tw)
   - Others as needed

## File Structure

```
messages/
├── en.json          # Source of truth (complete)
├── ru.json          # In progress
├── es.json          # To create
├── zh-cn.json       # To create
└── ...
```

## Tools Created

1. **audit-hardcoded.ts** - Find hardcoded strings
2. **export-for-translation.ts** - Export for translators
3. **import-translations.ts** - Import completed translations

## Quality Assurance

### Before Translation
- [ ] All keys in en.json
- [ ] No hardcoded strings in components
- [ ] Keys have meaningful names
- [ ] Context provided for translators

### After Translation
- [ ] Validate JSON syntax
- [ ] Check for missing keys
- [ ] Test RTL languages (Arabic)
- [ ] Review by native speaker
- [ ] Test on staging

## Timeline Estimate

| Phase | Duration | Notes |
|-------|----------|-------|
| Phase 1 (Unhardcode) | 2-3 days | Focus on this first |
| Phase 2 (Prepare) | 1 day | Export and set up |
| Phase 3 (Translate) | 1-2 weeks | Depends on method |

## Next Steps

1. **Complete Phase 1** - Unhardcode all remaining pages
2. **Decide translation method** - AI vs Professional vs Community
3. **Start with Tier 1 languages**
4. **Set up CI/CD** for translation validation

## Commands Reference

```bash
# Audit for hardcoded strings
npx ts-node scripts/i18n/audit-hardcoded.ts

# Export for translation
npx ts-node scripts/i18n/export-for-translation.ts

# Import translations
npx ts-node scripts/i18n/import-translations.ts ru translations-ru.csv

# Validate JSON files
node -e "require('./messages/en.json'); console.log('Valid')"
```

