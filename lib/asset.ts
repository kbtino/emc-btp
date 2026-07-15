// Préfixe les chemins des médias insérés en balises brutes (<img>, <video>) avec le
// basePath, nécessaire quand le site est servi sur un sous-chemin (GitHub Pages : /emc-btp/).
// next/image et next/link gèrent déjà le basePath automatiquement, mais pas les balises brutes.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
