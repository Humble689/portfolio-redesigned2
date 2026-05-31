const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const argv = process.argv.slice(2);
if (argv.length < 5) {
  console.error('Usage: node manual_crop.cjs <file> <x%> <y%> <w%> <h%>');
  process.exit(1);
}

const [file, xPct, yPct, wPct, hPct] = argv;

(async () => {
  try {
    const img = sharp(file);
    const meta = await img.metadata();
    const imgW = meta.width;
    const imgH = meta.height;

    const left = Math.round((parseFloat(xPct) / 100) * imgW);
    const top = Math.round((parseFloat(yPct) / 100) * imgH);
    const width = Math.round((parseFloat(wPct) / 100) * imgW);
    const height = Math.round((parseFloat(hPct) / 100) * imgH);

    if (width <= 0 || height <= 0) throw new Error('Invalid crop dimensions');

    const tmp = file + '.tmp';
    await img
      .extract({ left: left, top: top, width: width, height: height })
      .resize(1280, 720, { fit: 'cover' })
      .toFile(tmp);

    fs.renameSync(tmp, file);
    console.log('Cropped and resized', file);
  } catch (err) {
    console.error('Crop failed:', err.message || err);
    process.exit(1);
  }
})();
