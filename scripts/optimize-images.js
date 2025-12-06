#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */

/**
 * Image Optimization Script for Core Web Vitals
 * 
 * This script converts PNG/JPG images to WebP format for better compression
 * and adds AVIF versions for modern browsers.
 * 
 * Requirements:
 * - npm install sharp
 * 
 * Usage:
 * - node scripts/optimize-images.js
 * - node scripts/optimize-images.js --dry-run (preview only)
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Error: sharp is not installed. Run: npm install sharp');
  process.exit(1);
}

const DRY_RUN = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose');

// Directories to process
const DIRECTORIES = [
  'public',
  'public/infographics',
  'public/og',
  'public/images',
  'public/assets/img',
  'public/assets/img/avl',
  'public/assets/img/blog',
  'public/assets/img/merkle-batch-proofs',
];

// Files to skip (icons, favicons that need to stay as PNG)
const SKIP_FILES = [
  'icon-192x192.png',
  'icon-512x512.png',
  'apple-touch-icon.png',
  'favicon.ico',
];

// Image quality settings
const QUALITY = {
  webp: 85,
  avif: 80,
  jpeg: 85,
  png: 85,
};

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  totalSaved: 0,
};

async function getFileSize(filePath) {
  try {
    const stat = await fs.promises.stat(filePath);
    return stat.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const fileName = path.basename(inputPath);
  const dirName = path.dirname(inputPath);
  
  // Skip if not an image we can optimize
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return;
  }

  // Skip icons and favicons
  if (SKIP_FILES.includes(fileName)) {
    if (VERBOSE) {
      console.log(`⏭️  Skipping ${inputPath} (icon/favicon)`);
    }
    stats.skipped++;
    return;
  }

  const webpPath = path.join(dirName, `${baseName}.webp`);
  const avifPath = path.join(dirName, `${baseName}.avif`);

  try {
    const originalSize = await getFileSize(inputPath);
    
    // Check if WebP already exists
    const webpExists = fs.existsSync(webpPath);
    const avifExists = fs.existsSync(avifPath);

    if (webpExists && avifExists) {
      if (VERBOSE) {
        console.log(`⏭️  Skipping ${inputPath} (already optimized)`);
      }
      stats.skipped++;
      return;
    }

    console.log(`🔄 Processing: ${inputPath}`);

    if (DRY_RUN) {
      console.log(`   Would create: ${webpPath}`);
      console.log(`   Would create: ${avifPath}`);
      stats.processed++;
      return;
    }

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Create WebP version
    if (!webpExists) {
      await image
        .webp({ quality: QUALITY.webp, effort: 6 })
        .toFile(webpPath);
      
      const webpSize = await getFileSize(webpPath);
      const saved = originalSize - webpSize;
      stats.totalSaved += Math.max(0, saved);
      
      console.log(`   ✅ WebP: ${formatBytes(webpSize)} (saved ${formatBytes(saved)})`);
    }

    // Create AVIF version (even better compression)
    if (!avifExists) {
      await sharp(inputPath)
        .avif({ quality: QUALITY.avif, effort: 6 })
        .toFile(avifPath);
      
      const avifSize = await getFileSize(avifPath);
      const saved = originalSize - avifSize;
      
      console.log(`   ✅ AVIF: ${formatBytes(avifSize)} (saved ${formatBytes(saved)})`);
    }

    stats.processed++;
  } catch (error) {
    console.error(`   ❌ Error processing ${inputPath}: ${error.message}`);
    stats.errors++;
  }
}

async function processDirectory(dir) {
  const fullPath = path.join(process.cwd(), dir);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  console.log(`\n📁 Processing directory: ${dir}`);
  
  const files = await fs.promises.readdir(fullPath);
  
  for (const file of files) {
    const filePath = path.join(fullPath, file);
    const stat = await fs.promises.stat(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(path.join(dir, file));
    } else {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script for Core Web Vitals');
  console.log('================================================');
  
  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  for (const dir of DIRECTORIES) {
    await processDirectory(dir);
  }

  console.log('\n📊 Summary:');
  console.log(`   Processed: ${stats.processed}`);
  console.log(`   Skipped: ${stats.skipped}`);
  console.log(`   Errors: ${stats.errors}`);
  if (!DRY_RUN) {
    console.log(`   Total saved: ${formatBytes(stats.totalSaved)}`);
  }

  console.log('\n💡 Next steps:');
  console.log('   1. Update Next.js config to serve WebP/AVIF with fallback');
  console.log('   2. Use <picture> element or Next.js Image for automatic format selection');
  console.log('   3. Run Lighthouse to verify LCP improvement');
}

main().catch(console.error);

