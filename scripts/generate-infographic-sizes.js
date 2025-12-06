/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const infographicsDir = path.join(__dirname, '../public/infographics');
const sizes = {
  large: 1920,
  medium: 1200,
  small: 800
};

async function generateSizes() {
  try {
    // Check if sharp is available
    console.log('📸 Generating infographic sizes...');
    
    // Get all PNG files in infographics directory
    const files = fs.readdirSync(infographicsDir).filter(file => 
      file.endsWith('.png') && !file.includes('-large') && !file.includes('-medium') && !file.includes('-small')
    );
    
    for (const file of files) {
      const inputPath = path.join(infographicsDir, file);
      const baseName = path.parse(file).name;
      
      console.log(`Processing: ${file}`);
      
      // Get original image info
      const metadata = await sharp(inputPath).metadata();
      console.log(`  Original size: ${metadata.width}x${metadata.height}`);
      
      // Generate each size
      for (const [sizeName, maxWidth] of Object.entries(sizes)) {
        const outputPath = path.join(infographicsDir, `${baseName}-${sizeName}.png`);
        
        // Only resize if original is larger than target
        if (metadata.width > maxWidth) {
          await sharp(inputPath)
            .resize(maxWidth, null, {
              withoutEnlargement: true,
              fit: 'inside'
            })
            .png({ quality: 90 })
            .toFile(outputPath);
          
          const newMetadata = await sharp(outputPath).metadata();
          console.log(`  ✅ ${sizeName}: ${newMetadata.width}x${newMetadata.height}`);
        } else {
          // Copy original if it's already smaller
          fs.copyFileSync(inputPath, outputPath);
          console.log(`  ✅ ${sizeName}: copied original (already small enough)`);
        }
      }
    }
    
    console.log('🎉 All sizes generated successfully!');
  } catch (error) {
    console.error('❌ Error generating sizes:', error.message);
    
    if (error.message.includes('sharp')) {
      console.log('\n📦 Installing sharp...');
      console.log('Run: npm install sharp --save-dev');
    }
  }
}

generateSizes();
