/** @type {import('next').NextConfig} */
// GitHub Pages sert le site sur https://<user>.github.io/emc-btp/ (sous-chemin).
// On applique le basePath en production uniquement ; en dev (npm run dev), il reste vide
// pour que le site tourne sur http://localhost:3000/.
const repo = 'emc-btp';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
