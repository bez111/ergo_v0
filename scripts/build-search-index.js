#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { extractTags, getContentType } = require('../lib/algolia-config');

// Configuration
const DOCS_DIR = path.join(__dirname, '../app/docs');
const OUTPUT_FILE = path.join(__dirname, '../public/search-index.json');

// Extract content from MDX files
function extractContentFromMDX(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: mdxContent } = matter(content);
    
    // Extract headings and text content
    const lines = mdxContent.split('\n');
    const headings = [];
    const textContent = [];
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('#')) {
        headings.push(trimmed.replace(/^#+\s*/, ''));
      } else if (trimmed && !trimmed.startsWith('```') && !trimmed.startsWith('import')) {
        textContent.push(trimmed);
      }
    });
    
    return {
      title: data.title || headings[0] || path.basename(filePath, '.mdx'),
      content: textContent.join(' '),
      headings: headings,
      frontmatter: data
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

// Build section path from file path
function buildSectionPath(filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  const parts = relativePath.split(path.sep);
  const section = parts.slice(0, -1).map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' > ');
  
  return section || 'Documentation';
}

// Recursively scan for MDX files
function scanMDXFiles(dir, baseDir = dir) {
  const files = [];
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...scanMDXFiles(fullPath, baseDir));
    } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Build search index
function buildSearchIndexFromFiles() {
  console.log('🔍 Building search index...');
  
  const mdxFiles = scanMDXFiles(DOCS_DIR);
  const searchIndex = [];
  
  mdxFiles.forEach(filePath => {
    const content = extractContentFromMDX(filePath);
    if (!content) return;
    
    // Build URL from file path
    const relativePath = path.relative(DOCS_DIR, filePath);
    const url = `/docs/${relativePath.replace(/\.(mdx|md)$/, '')}`;
    
    // Build section path
    const section = buildSectionPath(filePath);
    
    // Extract tags
    const tags = extractTags(content.content, section);
    
    // Determine content type
    const contentType = getContentType(url, content.title);
    
    // Create search entry
    const entry = {
      objectID: url,
      title: content.title,
      content: content.content,
      url: url,
      section: section,
      tags: tags,
      type: contentType,
      headings: content.headings,
      frontmatter: content.frontmatter,
      lastModified: fs.statSync(filePath).mtime.toISOString()
    };
    
    searchIndex.push(entry);
  });
  
  // Write to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2));
  
  console.log(`✅ Search index built with ${searchIndex.length} entries`);
  console.log(`📁 Output: ${OUTPUT_FILE}`);
  
  // Print statistics
  const stats = {
    total: searchIndex.length,
    byType: {},
    bySection: {},
    tags: new Set()
  };
  
  searchIndex.forEach(entry => {
    stats.byType[entry.type] = (stats.byType[entry.type] || 0) + 1;
    stats.bySection[entry.section] = (stats.bySection[entry.section] || 0) + 1;
    entry.tags.forEach(tag => stats.tags.add(tag));
  });
  
  console.log('\n📊 Statistics:');
  console.log('By type:', stats.byType);
  console.log('By section:', stats.bySection);
  console.log('Unique tags:', stats.tags.size);
  
  return searchIndex;
}

// Upload to Algolia (if credentials are provided)
async function uploadToAlgolia(searchIndex) {
  const appId = process.env.ALGOLIA_APP_ID;
  const apiKey = process.env.ALGOLIA_ADMIN_API_KEY;
  const indexName = process.env.ALGOLIA_INDEX_NAME || 'ergo-docs';
  
  if (!appId || !apiKey) {
    console.log('⚠️  Algolia credentials not provided, skipping upload');
    return;
  }
  
  try {
    console.log('📤 Uploading to Algolia...');
    
    const response = await fetch(`https://${appId}.algolia.net/1/indexes/${indexName}/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,
      },
      body: JSON.stringify({
        requests: searchIndex.map(entry => ({
          action: 'updateObject',
          body: entry
        }))
      })
    });
    
    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('✅ Successfully uploaded to Algolia');
    console.log(`📊 Task ID: ${result.taskID}`);
    
  } catch (error) {
    console.error('❌ Failed to upload to Algolia:', error.message);
  }
}

// Main execution
if (require.main === module) {
  const searchIndex = buildSearchIndexFromFiles();
  
  // Upload to Algolia if in production
  if (process.env.NODE_ENV === 'production') {
    uploadToAlgolia(searchIndex);
  }
}

module.exports = { buildSearchIndexFromFiles, uploadToAlgolia }; 