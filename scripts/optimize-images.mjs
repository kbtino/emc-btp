// Convertit les photos réelles EMC BTP (asserts/) en WebP optimisé dans public/images/.
// À relancer si de nouvelles photos sont ajoutées à asserts/.
import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, '..', 'asserts');
const OUT_IMAGES = path.join(ROOT, '..', 'public', 'images');
const OUT_VIDEOS = path.join(ROOT, '..', 'public', 'videos');

const IMAGES = [
  ['img sable.jpg', 'sable.webp'],
  ['img gravier.jpeg', 'gravier.webp'],
  ['ciment dangote.jpg', 'ciment.webp'],
  ['ciment cimtogo.jpg', 'ciment-cimtogo.webp'],
  ['remblai.jpg', 'remblai.webp'],
  ['barre de fer 2.jpeg', 'fer-chaud.webp'],
  ['bar de fer 1.jpeg', 'fer-froid.webp'],
  ['fil de fer.jpeg', 'fil-de-fer.webp'],
  ['fil de fer 1.jpeg', 'fil-de-fer-1.webp'],
  ['briques.jpg', 'briques.webp'],
  ['barre de fer 3.jpeg', 'barre-de-fer-3.webp'],
  ['camion 10 roues.jpg', 'camion-10-roues.webp'],
  ['cinotruck.jpg', 'cinotruck.webp'],
  ['remorque.jpg', 'remorque.webp'],
  ['gravier en camion.jpeg', 'gravier-en-camion.webp'],
  ['equipe de geni civil sur un chantier.png', 'equipe-chantier.webp'],
  ['brique de fondation.webp', 'briques-fondation.webp'],
  ['gravier en remorque.jpeg', 'gravier-en-remorque.webp'],
  ['remorque.jpeg', 'remorque-reelle.webp'],
];

const VIDEOS = [
  ['video gravier.mp4', 'video-gravier.mp4'],
  ['video sable.mp4', 'video-sable.mp4'],
  ["vidéo de presentation de l'entreprise.mp4", 'presentation-entreprise.mp4'],
];

async function run() {
  await mkdir(OUT_IMAGES, { recursive: true });
  await mkdir(OUT_VIDEOS, { recursive: true });

  for (const [from, to] of IMAGES) {
    const src = path.join(SRC, from);
    const dest = path.join(OUT_IMAGES, to);
    await sharp(src).resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
    console.log('image', from, '->', to);
  }

  await sharp(path.join(SRC, 'logo EMC.png'))
    .resize(400, 400, { fit: 'inside', withoutEnlargement: true })
    .toFile(path.join(ROOT, '..', 'public', 'logo-emc.png'));
  console.log('logo EMC.png -> logo-emc.png');

  for (const [from, to] of VIDEOS) {
    await copyFile(path.join(SRC, from), path.join(OUT_VIDEOS, to));
    console.log('video', from, '->', to);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
