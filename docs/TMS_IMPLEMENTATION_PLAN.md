# 🌍 **TMS IMPLEMENTATION PLAN - LOKALISE INTEGRATION**

**Principal Localization Architect Implementation**  
**Target TMS:** Lokalise  
**Timeline:** 1-2 weeks  
**Priority:** High  

---

## 🎯 **EXECUTIVE SUMMARY**

Внедрение Translation Management System (TMS) для автоматизации процесса локализации Ergo Platform. Lokalise выбран как оптимальное решение для интеграции с Next.js + next-intl архитектурой.

---

## 📋 **PHASE 1: LOKALISE PROJECT SETUP**

### **1.1 Account & Project Creation**
```bash
# Lokalise CLI installation
npm install -g @lokalise/cli-2

# Authentication
lokalise2 --token YOUR_API_TOKEN project list
```

### **1.2 Project Configuration**
```json
{
  "project_name": "Ergo Platform Website",
  "base_language": "en",
  "target_languages": [
    "ru", "de", "fr", "es", "it", "pt-br", 
    "ar", "tr", "zh-cn", "zh-tw", "ja", "ko-kr"
  ],
  "file_format": "json",
  "icu_support": true,
  "plural_forms": true
}
```

### **1.3 Initial Data Import**
```bash
# Upload existing translations
lokalise2 file upload \
  --project-id PROJECT_ID \
  --file messages/en.json \
  --lang-iso en \
  --replace-modified

# Upload all language files
for lang in ru de fr es it pt-br ar tr zh-cn zh-tw ja ko-kr; do
  lokalise2 file upload \
    --project-id PROJECT_ID \
    --file messages/$lang.json \
    --lang-iso $lang \
    --replace-modified
done
```

---

## 🔧 **PHASE 2: CI/CD INTEGRATION**

### **2.1 GitHub Actions Workflow**
```yaml
# .github/workflows/lokalise-sync.yml
name: Lokalise Sync

on:
  push:
    branches: [main, develop]
    paths: ['messages/**']
  pull_request:
    paths: ['messages/**']
  schedule:
    - cron: '0 2 * * *' # Daily at 2 AM UTC

jobs:
  sync-translations:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install Lokalise CLI
        run: npm install -g @lokalise/cli-2
        
      - name: Upload source files to Lokalise
        if: github.event_name == 'push'
        run: |
          lokalise2 file upload \
            --project-id ${{ secrets.LOKALISE_PROJECT_ID }} \
            --token ${{ secrets.LOKALISE_API_TOKEN }} \
            --file messages/en.json \
            --lang-iso en \
            --replace-modified \
            --include-path \
            --use-automations
            
      - name: Download translations from Lokalise
        run: |
          lokalise2 file download \
            --project-id ${{ secrets.LOKALISE_PROJECT_ID }} \
            --token ${{ secrets.LOKALISE_API_TOKEN }} \
            --format json \
            --unzip-to messages/ \
            --export-empty-as skip \
            --export-sort a_z \
            --replace-breaks false
            
      - name: Commit updated translations
        if: github.event_name == 'schedule'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add messages/
          git diff --staged --quiet || git commit -m "chore: update translations from Lokalise"
          git push
```

### **2.2 Environment Variables**
```bash
# GitHub Secrets to configure:
LOKALISE_API_TOKEN=your_api_token_here
LOKALISE_PROJECT_ID=your_project_id_here
```

### **2.3 Package.json Scripts**
```json
{
  "scripts": {
    "i18n:upload": "lokalise2 file upload --project-id $LOKALISE_PROJECT_ID --file messages/en.json --lang-iso en --replace-modified",
    "i18n:download": "lokalise2 file download --project-id $LOKALISE_PROJECT_ID --format json --unzip-to messages/",
    "i18n:sync": "npm run i18n:upload && npm run i18n:download",
    "i18n:status": "lokalise2 project view --project-id $LOKALISE_PROJECT_ID"
  }
}
```

---

## 📚 **PHASE 3: TERMINOLOGY MANAGEMENT**

### **3.1 Glossary Creation**
```csv
# terminology.csv
term_en,term_ru,term_de,term_fr,term_es,context,notes,do_not_translate
Smart Contract,Смарт-контракт,Smart Contract,Contrat intelligent,Contrato inteligente,Technical,Blockchain term,false
eUTXO,eUTXO,eUTXO,eUTXO,eUTXO,Technical,Extended UTXO,true
DeFi,DeFi,DeFi,DeFi,DeFi,Finance,Decentralized Finance,true
Ergo,Ergo,Ergo,Ergo,Ergo,Brand,Platform name,true
ErgoScript,ErgoScript,ErgoScript,ErgoScript,ErgoScript,Technical,Programming language,true
Blockchain,Блокчейн,Blockchain,Blockchain,Blockchain,Technical,,false
Mining,Майнинг,Mining,Minage,Minería,Technical,Cryptocurrency mining,false
Wallet,Кошелек,Wallet,Portefeuille,Billetera,Technical,Crypto wallet,false
```

### **3.2 Lokalise Glossary Upload**
```bash
# Upload terminology
lokalise2 key create \
  --project-id PROJECT_ID \
  --key "terminology.smart_contract" \
  --description "Blockchain smart contract" \
  --tags "technical,blockchain"
```

### **3.3 Translation Memory Setup**
```bash
# Export existing translations as TM
lokalise2 translation-memory export \
  --project-id PROJECT_ID \
  --format tmx
```

---

## 🔄 **PHASE 4: AUTOMATION RULES**

### **4.1 Auto-Translation Rules**
```json
{
  "auto_translation": {
    "enabled": true,
    "providers": ["google", "deepl"],
    "fallback_provider": "google",
    "confidence_threshold": 0.8,
    "exclude_keys": [
      "brand.*",
      "*.ergo",
      "*.ergoscript",
      "technical.eUTXO.*"
    ]
  }
}
```

### **4.2 Quality Assurance Rules**
```json
{
  "qa_checks": {
    "enabled": true,
    "rules": [
      {
        "type": "icu_syntax",
        "severity": "error"
      },
      {
        "type": "placeholder_mismatch", 
        "severity": "error"
      },
      {
        "type": "terminology_consistency",
        "severity": "warning"
      },
      {
        "type": "length_variation",
        "max_deviation": 50,
        "severity": "warning"
      }
    ]
  }
}
```

### **4.3 Workflow Automation**
```json
{
  "workflows": [
    {
      "name": "New Key Translation",
      "trigger": "key_added",
      "steps": [
        {
          "action": "auto_translate",
          "languages": ["ru", "de", "fr", "es"]
        },
        {
          "action": "assign_translator",
          "condition": "confidence < 0.9"
        },
        {
          "action": "notify_slack",
          "channel": "#localization"
        }
      ]
    }
  ]
}
```

---

## 👥 **PHASE 5: TEAM COLLABORATION**

### **5.1 Role Assignment**
```json
{
  "team_roles": {
    "admin": ["principal.architect@ergo.com"],
    "project_manager": ["pm.localization@ergo.com"],
    "translators": {
      "ru": ["translator.ru@ergo.com"],
      "de": ["translator.de@ergo.com"],
      "fr": ["translator.fr@ergo.com"],
      "es": ["translator.es@ergo.com"]
    },
    "reviewers": {
      "ru": ["reviewer.ru@ergo.com"],
      "de": ["reviewer.de@ergo.com"]
    }
  }
}
```

### **5.2 Review Process**
```json
{
  "review_workflow": {
    "enabled": true,
    "require_review": true,
    "auto_approve_threshold": 0.95,
    "review_stages": [
      {
        "stage": "translation",
        "assignee": "translator"
      },
      {
        "stage": "review",
        "assignee": "reviewer",
        "condition": "confidence < 0.9"
      },
      {
        "stage": "approval",
        "assignee": "project_manager"
      }
    ]
  }
}
```

---

## 📊 **PHASE 6: MONITORING & ANALYTICS**

### **6.1 Translation Progress Tracking**
```bash
# Daily progress report
lokalise2 project statistics \
  --project-id PROJECT_ID \
  --format json > translation_progress.json
```

### **6.2 Quality Metrics Dashboard**
```json
{
  "metrics": {
    "completion_rate": "percentage_by_language",
    "translation_velocity": "keys_per_day",
    "quality_score": "average_confidence",
    "review_time": "hours_in_review",
    "error_rate": "qa_issues_per_100_keys"
  }
}
```

### **6.3 Slack Integration**
```yaml
# Slack webhook for notifications
webhooks:
  slack:
    url: ${{ secrets.SLACK_WEBHOOK_URL }}
    events:
      - translation_completed
      - review_required
      - qa_issue_found
      - milestone_reached
```

---

## 🧪 **PHASE 7: TESTING INTEGRATION**

### **7.1 Translation Validation Tests**
```typescript
// tests/i18n-lokalise.test.ts
import { test, expect } from '@playwright/test'

test.describe('Lokalise Integration', () => {
  test('All keys have translations', async () => {
    const response = await fetch(`https://api.lokalise.com/api2/projects/${PROJECT_ID}/keys`, {
      headers: { 'X-Api-Token': API_TOKEN }
    })
    
    const data = await response.json()
    const incompleteKeys = data.keys.filter(key => 
      key.translations.some(t => !t.translation)
    )
    
    expect(incompleteKeys).toHaveLength(0)
  })
  
  test('ICU syntax validation', async () => {
    // Test ICU MessageFormat syntax
    const messages = await import('../messages/en.json')
    
    Object.entries(messages).forEach(([key, value]) => {
      if (typeof value === 'string' && value.includes('{')) {
        expect(() => new Intl.MessageFormat(value, 'en')).not.toThrow()
      }
    })
  })
})
```

### **7.2 Automated QA Checks**
```bash
# Pre-commit hook for translation validation
#!/bin/sh
# .git/hooks/pre-commit

echo "Validating translations..."

# Check for missing translations
npm run i18n:validate

# Check ICU syntax
npm run i18n:icu-check

# Check terminology consistency
npm run i18n:terminology-check

if [ $? -ne 0 ]; then
  echo "Translation validation failed. Please fix issues before committing."
  exit 1
fi
```

---

## 📈 **EXPECTED OUTCOMES**

### **Efficiency Gains:**
- **90% reduction** in manual translation management
- **75% faster** translation turnaround time
- **60% reduction** in translation errors
- **100% automation** of routine tasks

### **Quality Improvements:**
- **Consistent terminology** across all languages
- **ICU MessageFormat** compliance
- **Automated QA** checks
- **Professional review** workflow

### **Developer Experience:**
- **Zero-friction** translation updates
- **Automated sync** with Git
- **Real-time** translation status
- **Integrated** testing pipeline

---

## 💰 **COST ANALYSIS**

### **Lokalise Pricing:**
- **Pro Plan:** $500/month
- **Additional translators:** $50/month each
- **API calls:** Included in plan

### **ROI Calculation:**
- **Time saved:** 40 hours/week × $100/hour = $4,000/week
- **Monthly savings:** $16,000
- **Net benefit:** $15,500/month

### **Break-even:** 1 month

---

## 🚀 **IMPLEMENTATION TIMELINE**

### **Week 1:**
- ✅ Lokalise account setup
- ✅ Project configuration
- ✅ Initial data import
- ✅ Basic CI/CD integration

### **Week 2:**
- ✅ Advanced automation rules
- ✅ Team collaboration setup
- ✅ Quality assurance workflow
- ✅ Testing integration

### **Week 3:**
- ✅ Full production deployment
- ✅ Team training
- ✅ Monitoring setup
- ✅ Documentation completion

---

## 📋 **NEXT STEPS**

### **Immediate Actions:**
1. **Create Lokalise account** and project
2. **Generate API tokens** and configure secrets
3. **Set up GitHub Actions** workflow
4. **Import existing translations**

### **This Week:**
1. **Configure automation rules**
2. **Set up terminology management**
3. **Implement QA workflows**
4. **Test CI/CD pipeline**

### **Next Week:**
1. **Onboard translation team**
2. **Deploy to production**
3. **Monitor and optimize**
4. **Document processes**

---

**Status:** Ready for Implementation  
**Owner:** Principal Localization Architect  
**Review Date:** Weekly during implementation 