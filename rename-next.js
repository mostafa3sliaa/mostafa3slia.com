const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const nextDir = path.join(outDir, '_next');
const assetsDir = path.join(outDir, 'assets');

if (fs.existsSync(nextDir)) {
  fs.renameSync(nextDir, assetsDir);
  console.log('Renamed _next to assets');
}

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // replace all /_next/ with /assets/
  const newContent = content.replace(/\/_next\//g, '/assets/').replace(/_next\//g, 'assets/');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walk(outDir);
console.log('Replaced all _next references to assets');
