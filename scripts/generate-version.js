// scripts/generate-version.js
const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const versionInfo = {
  version: packageJson.version,
  name: packageJson.name,
  generatedAt: new Date().toISOString()
};

const content = `// Auto-generated file - do not edit
export const version = ${JSON.stringify(versionInfo, null, 2)};
`;

fs.writeFileSync(
  path.join(__dirname, '../lib/version.ts'),
  content
);

console.log('✅ Version info generated:', versionInfo.version);