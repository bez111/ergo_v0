#!/usr/bin/env node

/**
 * Lokalise CLI Helper
 * Principal Localization Architect Implementation
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  projectId: process.env.LOKALISE_PROJECT_ID,
  apiToken: process.env.LOKALISE_API_TOKEN,
  messagesDir: './messages',
  backupDir: './messages/backup'
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  log(`❌ ${message}`, 'red');
}

function success(message) {
  log(`✅ ${message}`, 'green');
}

function info(message) {
  log(`ℹ️  ${message}`, 'blue');
}

function warning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

// Check if Lokalise CLI is installed
function checkLokaliseInstalled() {
  try {
    execSync('lokalise2 --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

// Install Lokalise CLI
function installLokalise() {
  info('Installing Lokalise CLI...');
  try {
    execSync('curl -sfL https://raw.githubusercontent.com/lokalise/lokalise-cli-2-go/master/install.sh | sh', { stdio: 'inherit' });
    execSync('sudo mv ./bin/lokalise2 /usr/local/bin/lokalise2', { stdio: 'inherit' });
    success('Lokalise CLI installed successfully');
  } catch (err) {
    error('Failed to install Lokalise CLI');
    process.exit(1);
  }
}

// Validate configuration
function validateConfig() {
  if (!config.projectId) {
    error('LOKALISE_PROJECT_ID environment variable is required');
    process.exit(1);
  }
  
  if (!config.apiToken) {
    error('LOKALISE_API_TOKEN environment variable is required');
    process.exit(1);
  }
}

// Create backup
function createBackup() {
  info('Creating backup...');
  
  if (!fs.existsSync(config.backupDir)) {
    fs.mkdirSync(config.backupDir, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupSubDir = path.join(config.backupDir, timestamp);
  fs.mkdirSync(backupSubDir, { recursive: true });
  
  const files = fs.readdirSync(config.messagesDir)
    .filter(file => file.endsWith('.json') && file !== 'backup');
  
  files.forEach(file => {
    const src = path.join(config.messagesDir, file);
    const dest = path.join(backupSubDir, file);
    fs.copyFileSync(src, dest);
  });
  
  success(`Backup created: ${backupSubDir}`);
  return backupSubDir;
}

// Upload source file to Lokalise
function uploadSource() {
  info('Uploading source file to Lokalise...');
  
  const sourceFile = path.join(config.messagesDir, 'en.json');
  
  if (!fs.existsSync(sourceFile)) {
    error('Source file messages/en.json not found');
    process.exit(1);
  }
  
  // Validate JSON
  try {
    JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
  } catch (err) {
    error(`Invalid JSON in source file: ${err.message}`);
    process.exit(1);
  }
  
  const command = [
    'lokalise2 file upload',
    `--project-id=${config.projectId}`,
    `--token=${config.apiToken}`,
    `--file=${sourceFile}`,
    '--lang-iso=en',
    '--replace-modified=true',
    '--tag-inserted-keys=true',
    '--tag-updated-keys=true',
    '--apply-tm=true',
    '--poll=true',
    '--poll-timeout=120'
  ].join(' ');
  
  try {
    execSync(command, { stdio: 'inherit' });
    success('Source file uploaded successfully');
  } catch (err) {
    error('Failed to upload source file');
    process.exit(1);
  }
}

// Download translations from Lokalise
function downloadTranslations() {
  info('Downloading translations from Lokalise...');
  
  createBackup();
  
  const command = [
    'lokalise2 file download',
    `--project-id=${config.projectId}`,
    `--token=${config.apiToken}`,
    '--format=json',
    '--original-filenames=false',
    '--bundle-structure=%LANG_ISO%.json',
    `--dest=${config.messagesDir}/`,
    '--export-empty-as=skip',
    '--export-sort=first_added',
    '--filter-data=reviewed'
  ].join(' ');
  
  try {
    execSync(command, { stdio: 'inherit' });
    success('Translations downloaded successfully');
    
    // Validate downloaded files
    validateDownloadedFiles();
  } catch (err) {
    error('Failed to download translations');
    process.exit(1);
  }
}

// Validate downloaded files
function validateDownloadedFiles() {
  info('Validating downloaded files...');
  
  const files = fs.readdirSync(config.messagesDir)
    .filter(file => file.endsWith('.json') && file !== 'backup');
  
  let hasErrors = false;
  
  files.forEach(file => {
    const filePath = path.join(config.messagesDir, file);
    try {
      JSON.parse(fs.readFileSync(filePath, 'utf8'));
      success(`${file} is valid`);
    } catch (err) {
      error(`${file} is invalid: ${err.message}`);
      hasErrors = true;
    }
  });
  
  if (hasErrors) {
    error('Some files are invalid. Please check the errors above.');
    process.exit(1);
  }
  
  success('All downloaded files are valid');
}

// Show project status
function showStatus() {
  info('Fetching project status...');
  
  const command = [
    'lokalise2 project show',
    `--project-id=${config.projectId}`,
    `--token=${config.apiToken}`
  ].join(' ');
  
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    error('Failed to fetch project status');
    process.exit(1);
  }
}

// Show available languages
function showLanguages() {
  info('Fetching available languages...');
  
  const command = [
    'lokalise2 language list',
    `--project-id=${config.projectId}`,
    `--token=${config.apiToken}`
  ].join(' ');
  
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    error('Failed to fetch languages');
    process.exit(1);
  }
}

// Run quality check
function runQualityCheck() {
  info('Running quality check...');
  
  // Run local analysis
  try {
    execSync('node scripts/analyze-i18n.js', { stdio: 'inherit' });
  } catch (err) {
    warning('Local analysis failed, continuing with Lokalise QA...');
  }
  
  // Run Lokalise QA
  const command = [
    'lokalise2 task list',
    `--project-id=${config.projectId}`,
    `--token=${config.apiToken}`,
    '--filter-statuses=queued,in_progress'
  ].join(' ');
  
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    error('Failed to fetch QA tasks');
    process.exit(1);
  }
}

// Show help
function showHelp() {
  log('\n🌍 Lokalise CLI Helper', 'cyan');
  log('Principal Localization Architect Implementation\n', 'bright');
  
  log('Usage:', 'yellow');
  log('  node scripts/lokalise-cli.js <command>\n');
  
  log('Commands:', 'yellow');
  log('  upload     Upload source file (en.json) to Lokalise');
  log('  download   Download all translations from Lokalise');
  log('  sync       Upload source and download translations');
  log('  status     Show project status');
  log('  languages  Show available languages');
  log('  qa         Run quality assurance check');
  log('  install    Install Lokalise CLI');
  log('  help       Show this help message\n');
  
  log('Environment Variables:', 'yellow');
  log('  LOKALISE_PROJECT_ID    Your Lokalise project ID');
  log('  LOKALISE_API_TOKEN     Your Lokalise API token\n');
  
  log('Examples:', 'yellow');
  log('  node scripts/lokalise-cli.js upload');
  log('  node scripts/lokalise-cli.js download');
  log('  node scripts/lokalise-cli.js sync');
}

// Main function
function main() {
  const command = process.argv[2];
  
  if (!command || command === 'help') {
    showHelp();
    return;
  }
  
  if (command === 'install') {
    installLokalise();
    return;
  }
  
  // Check if Lokalise CLI is installed
  if (!checkLokaliseInstalled()) {
    error('Lokalise CLI is not installed. Run: node scripts/lokalise-cli.js install');
    process.exit(1);
  }
  
  // Validate configuration
  validateConfig();
  
  switch (command) {
    case 'upload':
      uploadSource();
      break;
      
    case 'download':
      downloadTranslations();
      break;
      
    case 'sync':
      uploadSource();
      setTimeout(() => {
        info('Waiting 30 seconds for processing...');
        downloadTranslations();
      }, 30000);
      break;
      
    case 'status':
      showStatus();
      break;
      
    case 'languages':
      showLanguages();
      break;
      
    case 'qa':
      runQualityCheck();
      break;
      
    default:
      error(`Unknown command: ${command}`);
      showHelp();
      process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  uploadSource,
  downloadTranslations,
  showStatus,
  showLanguages,
  runQualityCheck
}; 