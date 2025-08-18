#!/usr/bin/env node

/**
 * Script to update internal links from /Docs to /docs
 * Part of the migration from uppercase to lowercase URLs
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Configuration
const DRY_RUN = process.argv.includes('--dry-run')
const VERBOSE = process.argv.includes('--verbose')

// Patterns to find and replace
const LINK_PATTERNS = [
  // Markdown links
  { pattern: /\[([^\]]+)\]\(\/Docs([^)]*)\)/g, replacement: '[$1](/docs$2)' },
  // href attributes in JSX/TSX
  { pattern: /href=["']\/Docs([^"']*)["']/g, replacement: 'href="/docs$1"' },
  // Link component props
  { pattern: /<Link\s+href=["']\/Docs([^"']*)["']/g, replacement: '<Link href="/docs$1"' },
  // router.push calls
  { pattern: /router\.push\(["']\/Docs([^"']*)["']\)/g, replacement: 'router.push("/docs$1")' },
  // window.location assignments
  { pattern: /window\.location\.href\s*=\s*["']\/Docs([^"']*)["']/g, replacement: 'window.location.href = "/docs$1"' }
]

// File extensions to process
const FILE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx']

// Directories to search
const SEARCH_DIRS = [
  'app',
  'components',
  'lib',
  'content'
]

// Track statistics
let stats = {
  filesScanned: 0,
  filesUpdated: 0,
  linksUpdated: 0,
  errors: []
}

/**
 * Process a single file
 */
function processFile(filePath) {
  if (VERBOSE) console.log(`Scanning: ${filePath}`)
  stats.filesScanned++
  
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    let localLinksUpdated = 0
    
    // Apply all patterns
    for (const { pattern, replacement } of LINK_PATTERNS) {
      const matches = content.match(pattern)
      if (matches) {
        localLinksUpdated += matches.length
        content = content.replace(pattern, replacement)
      }
    }
    
    // If content changed, write it back
    if (content !== originalContent) {
      stats.filesUpdated++
      stats.linksUpdated += localLinksUpdated
      
      if (DRY_RUN) {
        console.log(`[DRY RUN] Would update ${filePath} (${localLinksUpdated} links)`)
        if (VERBOSE) {
          console.log('  Sample changes:')
          const lines = content.split('\n')
          const origLines = originalContent.split('\n')
          for (let i = 0; i < Math.min(5, lines.length); i++) {
            if (lines[i] !== origLines[i]) {
              console.log(`    - ${origLines[i]}`)
              console.log(`    + ${lines[i]}`)
            }
          }
        }
      } else {
        fs.writeFileSync(filePath, content, 'utf8')
        console.log(`✅ Updated ${filePath} (${localLinksUpdated} links)`)
      }
    }
  } catch (error) {
    stats.errors.push({ file: filePath, error: error.message })
    console.error(`❌ Error processing ${filePath}: ${error.message}`)
  }
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Updating internal links from /Docs to /docs')
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE UPDATE'}`)
  console.log('Directories:', SEARCH_DIRS.join(', '))
  console.log('File types:', FILE_EXTENSIONS.join(', '))
  console.log('-'.repeat(50))
  
  // Find all files to process
  const files = []
  for (const dir of SEARCH_DIRS) {
    if (!fs.existsSync(dir)) {
      console.log(`⚠️  Directory not found: ${dir}`)
      continue
    }
    
    for (const ext of FILE_EXTENSIONS) {
      const pattern = path.join(dir, '**', `*${ext}`)
      const found = glob.sync(pattern, { nodir: true })
      files.push(...found)
    }
  }
  
  console.log(`Found ${files.length} files to scan\n`)
  
  // Process each file
  files.forEach(processFile)
  
  // Print summary
  console.log('\n' + '='.repeat(50))
  console.log('📊 Summary:')
  console.log(`Files scanned: ${stats.filesScanned}`)
  console.log(`Files updated: ${stats.filesUpdated}`)
  console.log(`Links updated: ${stats.linksUpdated}`)
  
  if (stats.errors.length > 0) {
    console.log(`\n⚠️  Errors: ${stats.errors.length}`)
    stats.errors.forEach(({ file, error }) => {
      console.log(`  - ${file}: ${error}`)
    })
  }
  
  if (DRY_RUN) {
    console.log('\n💡 This was a dry run. Use without --dry-run to apply changes.')
  }
}

// Run the script
if (require.main === module) {
  main()
} 