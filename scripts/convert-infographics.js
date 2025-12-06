const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const infographicsDir = path.join(__dirname, '../public/infographics');

// Get all PNG and JPG files
const files = fs.readdirSync(infographicsDir).filter(f => 
  (f.endsWith('.png') || f.endsWith('.jpg')) && !f.startsWith('.')
);

async function convertFile(filename) {
  const baseName = filename.replace(/\.(png|jpg)$/, '');
  const inputPath = path.join(infographicsDir, filename);
  const webpPath = path.join(infographicsDir, `${baseName}.webp`);
  const avifPath = path.join(infographicsDir, `${baseName}.avif`);
  
  // Check if webp exists
  const webpExists = fs.existsSync(webpPath);
  // Check if avif exists
  const avifExists = fs.existsSync(avifPath);
  
  if (webpExists && avifExists) {
    console.log(`✓ ${filename} - already has webp and avif`);
    return;
  }
  
  try {
    const image = sharp(inputPath);
    
    if (!webpExists) {
      await image.clone().webp({ quality: 80 }).toFile(webpPath);
      console.log(`  Created: ${baseName}.webp`);
    }
    
    if (!avifExists) {
      await image.clone().avif({ quality: 65 }).toFile(avifPath);
      console.log(`  Created: ${baseName}.avif`);
    }
    
    console.log(`✓ ${filename} - converted`);
  } catch (error) {
    console.error(`✗ ${filename} - error: ${error.message}`);
  }
}

async function main() {
  console.log(`Found ${files.length} image files in ${infographicsDir}\n`);
  
  for (const file of files) {
    await convertFile(file);
  }
  
  console.log('\nDone!');
}

main();

