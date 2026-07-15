/** @type {import('next').NextConfig} */
// GitHub Pages sert le site sur https://<user>.github.io/emc-btp/ (sous-chemin), donc il
// faut un basePath. Vercel (et le dev local) servent le site a la racine, donc basePath vide.
// On applique le basePath UNIQUEMENT quand on build pour GitHub Pages (variable definie
// dans le workflow .github/workflows/deploy.yml). Partout ailleurs il reste vide.
const repo = 'emc-btp';
const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';
const basePath = isGithubPages ? `/${repo}` : '';

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
