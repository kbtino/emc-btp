# EMC BTP — Site vitrine

Site vitrine one-page pour EMC BTP (Sagbado, Lomé, Togo). Next.js 14 (App Router) + TypeScript +
Tailwind CSS, exporté en statique (`output: 'export'`) pour un hébergement simple et rapide.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build de production (export statique)

```bash
npm run build       # génère le dossier out/ prêt à héberger
```

Le dossier `out/` peut être déployé tel quel sur Vercel (statique), Netlify, ou tout hébergement
mutualisé classique (upload FTP).

## Contenu

Tous les textes et données (matériaux, services, témoignages, stats, coordonnées) sont centralisés
dans `lib/content.ts`. Pour changer un texte, un prix affiché ou une photo, c'est le seul fichier à
modifier.

## Images et vidéos

Les photos/vidéos réelles de l'entreprise sont dans `asserts/` (dossier source, non servi
directement). `npm run optimize-images` régénère `public/images/*.webp` et `public/videos/*.mp4` à
partir de `asserts/` (via `scripts/optimize-images.mjs`, utilise `sharp`). Relancer ce script après
tout ajout/remplacement de photo dans `asserts/`.

## Avis clients (Supabase — optionnel)

Le formulaire "Laissez votre évaluation" fonctionne dès maintenant sans configuration : les avis
publiés apparaissent en tête du carrousel pour le visiteur qui les poste (comportement identique à
la maquette validée), mais ne sont pas partagés entre visiteurs tant que Supabase n'est pas
configuré.

Pour activer une vraie persistance partagée entre visiteurs :

1. Créer un projet sur [supabase.com](https://supabase.com) (gratuit).
2. Dans l'éditeur SQL du projet, exécuter :

   ```sql
   create table reviews (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz default now(),
     name text not null,
     role text,
     quote text not null,
     rating int not null,
     status text not null default 'pending'
   );
   alter table reviews enable row level security;
   create policy "public insert" on reviews for insert to anon with check (true);
   create policy "public read approved" on reviews for select to anon using (status = 'approved');
   ```

3. Copier `.env.example` vers `.env.local` et renseigner `NEXT_PUBLIC_SUPABASE_URL` et
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Project Settings → API sur Supabase).
4. Redémarrer `npm run dev` (ou reconstruire). Les nouveaux avis sont enregistrés avec
   `status = 'pending'` et n'apparaissent publiquement qu'après passage à `status = 'approved'`
   dans le Table Editor Supabase — c'est la modération.

## Numéro WhatsApp

Centralisé dans `lib/content.ts` (`site.whatsappNumber`). Tous les CTA WhatsApp (hero, matériaux,
livraison, contact, footer, bouton flottant) utilisent ce numéro via `lib/whatsapp.ts`.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- `@tabler/icons-react` (icônes outline)
- `@supabase/supabase-js` (optionnel, avis clients)
- Export 100% statique, aucune route API requise
