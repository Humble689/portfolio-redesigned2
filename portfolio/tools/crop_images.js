const Jimp = require('jimp');
const path = require('path');

const images = [
  path.join(__dirname, '..', 'public', 'images', 'study-buddy.png'),
  path.join(__dirname, '..', 'public', 'images', 'cinequest.png'),
];

async function processImage(p) {
  const img = await Jimp.read(p);
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const targetRatio = 16 / 9;
  const currentRatio = w / h;

  let cropW = w;
  let cropH = h;
  let x = 0;
  let y = 0;

  if (currentRatio > targetRatio) {
    // wider -> crop width
    cropW = Math.floor(h * targetRatio);
    x = Math.floor((w - cropW) / 2);
  } else {
    // taller -> crop height
    cropH = Math.floor(w / targetRatio);
    y = Math.floor((h - cropH) / 2);
  }

  img.crop(x, y, cropW, cropH);
  img.resize(1280, 720, Jimp.RESIZE_BEZIER);
  await img.quality(85).writeAsync(p);
  console.log('Processed', p);
}

async function run() {
  for (const p of images) {
    try {
      await processImage(p);
    } catch (err) {
      console.error('Failed processing', p, err);
    }
  }
}

run();
