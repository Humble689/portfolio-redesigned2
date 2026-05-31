const sharp = require('sharp');
const path = require('path');

const images = [
  path.join(__dirname, '..', 'public', 'images', 'cinequest.png'),
  path.join(__dirname, '..', 'public', 'images', 'study-buddy.png'),
];

async function processImage(file) {
  try {
    const tmp = file + '.tmp';
    await sharp(file)
      .resize(1280, 720, {
        fit: 'cover',
        position: 'attention',
      })
      .toFile(tmp);
    // replace original
    const fs = require('fs');
    fs.renameSync(tmp, file);
    console.log('Processed', file);
  } catch (err) {
    console.error('Failed processing', file, err);
  }
}

(async () => {
  for (const img of images) {
    await processImage(img);
  }
  console.log('Done');
})();
