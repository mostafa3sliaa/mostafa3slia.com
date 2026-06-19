const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'dr-ashraf.png');
const outputPath = path.join(__dirname, 'public', 'dr-ashraf.webp');

sharp(inputPath)
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 75 })
  .toFile(outputPath)
  .then(info => {
    console.log('Image compressed successfully:', info);
    fs.unlinkSync(inputPath); // Remove original PNG
  })
  .catch(err => {
    console.error('Error compressing image:', err);
  });
