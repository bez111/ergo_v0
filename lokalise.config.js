/**
 * Lokalise Configuration
 * Principal Localization Architect Implementation
 */

module.exports = {
  // Project configuration
  project: {
    id: process.env.LOKALISE_PROJECT_ID || 'YOUR_PROJECT_ID',
    token: process.env.LOKALISE_API_TOKEN || 'YOUR_API_TOKEN'
  },

  // File paths
  paths: {
    source: './messages/en.json',
    target: './messages/',
    backup: './messages/backup/'
  },

  // Download configuration
  download: {
    format: 'json',
    original_filenames: false,
    bundle_structure: '%LANG_ISO%.json',
    directory_prefix: '',
    all_platforms: false,
    filter_langs: [
      'en',
      'ru',
      'de',
      'fr',
      'es',
      'it',
      'pt-BR',
      'ja',
      'ko',
      'zh-CN',
      'zh-TW',
      'ar',
      'tr'
    ],
    export_empty_as: 'skip',
    export_sort: 'first_added',
    replace_breaks: false,
    disable_references: false,
    filter_data: ['reviewed'],
    triggers: ['all']
  },

  // Upload configuration
  upload: {
    file: './messages/en.json',
    lang_iso: 'en',
    replace_modified: true,
    tag_inserted_keys: true,
    tag_updated_keys: true,
    tag_skipped_keys: false,
    skip_detect_lang_iso: false,
    apply_tm: true,
    cleanup_mode: false,
    distinguish_by_file: false,
    poll: true,
    poll_timeout: 120000
  },

  // Quality assurance
  qa: {
    enabled: true,
    checks: [
      'empty_translations',
      'missing_placeholders',
      'double_space',
      'leading_whitespace',
      'trailing_whitespace',
      'inconsistent_placeholders',
      'icu_syntax'
    ]
  },

  // Automation rules
  automation: {
    // Auto-translate new keys
    auto_translate: {
      enabled: true,
      provider: 'google',
      languages: ['ru', 'de', 'fr', 'es', 'it', 'pt-BR'],
      mark_as_reviewed: false
    },

    // Auto-approve simple changes
    auto_approve: {
      enabled: true,
      conditions: [
        'punctuation_only',
        'case_change_only',
        'whitespace_only'
      ]
    }
  },

  // Webhooks for CI/CD integration
  webhooks: {
    project_exported: process.env.LOKALISE_WEBHOOK_URL,
    project_imported: process.env.LOKALISE_WEBHOOK_URL,
    task_completed: process.env.LOKALISE_WEBHOOK_URL
  },

  // Branch management
  branches: {
    main: 'main',
    development: 'development',
    feature_prefix: 'feature/',
    hotfix_prefix: 'hotfix/'
  },

  // Translation memory
  tm: {
    enabled: true,
    auto_substitute: true,
    fuzzy_matching: true,
    fuzzy_threshold: 0.8
  },

  // Terminology management
  terminology: {
    enabled: true,
    enforce: true,
    case_sensitive: false,
    highlight_terms: true
  }
} 