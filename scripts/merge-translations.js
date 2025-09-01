const fs = require('fs');
const path = require('path');

// Read the main en.json file
const mainFilePath = path.join(__dirname, '..', 'messages', 'en.json');
const mainData = JSON.parse(fs.readFileSync(mainFilePath, 'utf8'));

// Directory containing technology translation files
const techDir = path.join(__dirname, '..', 'messages', 'technology');

// Ensure technology object exists
if (!mainData.technology) {
  mainData.technology = {};
}

// Read all JSON files from technology directory
if (fs.existsSync(techDir)) {
  const files = fs.readdirSync(techDir).filter(file => file.endsWith('.json'));
  
  files.forEach(file => {
    const filePath = path.join(techDir, file);
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Merge the data into main technology object
    Object.assign(mainData.technology, fileData);
    
    console.log(`✓ Merged ${file}`);
  });
}

// Write the updated main file
fs.writeFileSync(mainFilePath, JSON.stringify(mainData, null, 2));
console.log('\n✅ Successfully merged all technology translations into en.json'); 