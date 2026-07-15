# PROMPT CLAUDE CODE — Développement du site vitrine EMC BTP

> Colle ce prompt dans Claude Code, à la racine d'un dossier contenant ce bundle (`design_handoff_emc_btp/`).

---

Tu es chargé de développer le **site vitrine one-page d'EMC BTP** (Équipement Matériaux de Construction, Sagbado, Lomé, Togo) — vente et livraison de matériaux de construction + services d'architecture et suivi de chantiers.

## Référence de design (OBLIGATOIRE)

Le fichier `EMC BTP - Site Vitrine.html` dans ce dossier est la **maquette haute-fidélité validée par le client**. C'est un prototype HTML autonome (ouvre-le dans un navigateur pour le voir). Ta mission est de **recréer ce design pixel-perfect** dans une vraie stack de production — pas de copier le HTML tel quel.

Le dossier `assets/` contient toutes les photos et vidéos réelles de l'entreprise à utiliser.

## Stack imposée

- **Next.js 14+ (App Router) + Tailwind CSS** — site statique exporté (`output: 'export'`) pour un hébergement simple et un chargement rapide (cible : mobile 3G au Togo).
- Icônes : **Tabler Icons** (`@tabler/icons-react`) — un seul set, style outline.
- Pas de CMS pour la v1 : contenu dans un fichier `content.ts` unique pour faciliter les modifications.
- Images optimisées (`next/image`, WebP, lazy loading) ; vidéos en `preload="metadata"`.
- SEO : métadonnées FR, Open Graph, JSON-LD `LocalBusiness` (adresse Sagbado Lomé, secteur BTP), sitemap.

## Design tokens (extraits du logo — à respecter exactement)

- Vert primaire : `#0F6E56` ; vert foncé : `#0a4f3d` ; vert très foncé (footer) : `#0a2e24`
- Dégradé de marque : `linear-gradient(135deg, #0F6E56, #0c5c48, #0a4f3d)`
- Accent CTA (sable/orange) : `#f4a460`, hover `#ee9748`, texte sur accent `#3b2409`
- Vert clair (icônes sur fond sombre) : `#7fd4bc` ; badge fond `#e9f4f0`
- Fond de page : `#f5f7f5` ; surfaces blanches ; bordures hairline `#e8e9e8`
- Texte : `#1a1a1a` (titres), `#374151` (corps), `#6b7280` (muted), `#9ca3af` (placeholder)
- WhatsApp : `#25D366`
- Typo : stack système sans-serif ; titres 800, tracking négatif (H1 52px, H2 38px, H3 20–26px) ; corps 15–17px
- Radius : cartes 12–16px, boutons 10px, badges 5px, pills 999px
- Ombres douces ; hover cartes : `translateY(-4px)` + ombre verte `rgba(15,110,86,.14)` ; transitions 150–180ms
- Conteneur max 1280px, padding sections 96px vertical / 24px horizontal

## Structure de la page (ordre exact, ancres identiques à la maquette)

1. **Nav sticky** (`backdrop-blur`, fond blanc 96%) : logo, liens d'ancre (Accueil · Nos Matériaux · Nos Services · Livraison · Réalisations · Contact), CTA orange "Demander un Devis". **Mobile : menu hamburger avec panneau slide-in** (non présent dans la maquette — à ajouter).
2. **Hero** `#accueil` : photo `gravier en camion.jpeg` plein écran, overlay dégradé sombre `linear-gradient(90deg, rgba(8,20,16,.86), rgba(10,30,24,.7) 45%, rgba(12,35,28,.42))`, badge pill "Livraison dans tout Lomé et environs", H1 "Vos matériaux de construction, livrés sur chantier à Lomé", sous-titre, 2 CTA ("Voir nos matériaux" orange + "Nous contacter sur WhatsApp" translucide), animation fade-in-up à l'arrivée.
3. **Chiffres clés** : bandeau dégradé vert, 4 stats avec icônes (+500 chantiers · 24h · 10+ matériaux · 3 types de camions). Ajouter un **count-up animé au scroll** (IntersectionObserver).
4. **Nos Matériaux** `#materiaux` : grille responsive (3 col desktop / 1 col mobile) de 9 cartes produit — photo 4:3, nom, badge "GROS & DÉTAIL", description 1 ligne. Reprendre exactement les textes et les photos de la maquette. CTA "Demander les tarifs" → WhatsApp.
5. **Nos Services** `#services` : 3 cartes (Vente de matériaux / Architecture & Construction / Suivi de chantiers), icône dans carré dégradé vert.
6. **Livraison** `#livraison` : 2 colonnes — texte + liste flotte (camions 10 roues, Sinotruk, remorques, zones : Sagbado, Adidogomé, Agoè, Bè, Baguida, Adétikopé) ; à droite mosaïque photos (`camion 10 roues.jpg` 16:9 + `cinotruck.jpg` + `remorque.jpg`). CTA "Planifier une livraison" → WhatsApp.
7. **Réalisations** `#realisations` : grille de 8 médias (6 photos + 2 vidéos avec bouton play), légendes en capsule sombre, **lightbox** au clic (fermeture Échap/clic, vidéo avec contrôles).
8. **Témoignages** : carrousel 1 carte (citation centrée, 5 étoiles orange, nom + rôle, flèches ‹ › + compteur "n / total") **+ formulaire "Laissez votre évaluation"** : 5 étoiles interactives **cochées 5/5 par défaut** (hover + clic), champs nom / profession (optionnel) / avis, bouton "Publier mon évaluation". La publication **reste sur la page** : validation (note + nom + avis requis), message de succès 4s, l'avis apparaît en tête du carrousel. **En production : persister les avis via un backend léger** (route API + base type SQLite/Supabase, ou service tiers) avec modération simple avant affichage public — ne pas se limiter au state local.
9. **Contact** `#contact` : 2 colonnes — formulaire (nom, téléphone, email optionnel, dropdown matériau [les 9 + "Plusieurs matériaux" + "Services"], message) dont l'envoi **ouvre WhatsApp avec message pré-rempli** (`https://wa.me/<numéro>?text=...`) ; à droite carte infos (adresse Sagbado, téléphone, lien WhatsApp, horaires Lun–Sam 7h–18h) + **iframe Google Maps** embarquée (`https://www.google.com/maps?q=Sagbado, Lomé, Togo&z=14&output=embed`).
10. **Footer** : fond `#0a2e24`, logo sur pastille blanche, liens rapides, icônes sociales (Facebook, WhatsApp, TikTok), "© 2026 EMC BTP — Tous droits réservés".
11. **Bouton WhatsApp flottant** : fixe bas-droite, 60px, vert `#25D366`, **animation pulse** (`box-shadow` keyframes 2.4s), sur toute la page.

## Comportements & interactions

- Scroll fluide vers les ancres (`scroll-behavior: smooth`), offset sous la nav sticky.
- Tous les liens WhatsApp utilisent un numéro centralisé dans `content.ts` — **placeholder actuel `+228 90 12 34 56` à remplacer par le vrai numéro**.
- Apparition progressive des sections au scroll (fade-in-up léger, IntersectionObserver, respect de `prefers-reduced-motion`).
- Hover cartes : élévation + ombre verte ; hover boutons : assombrissement + `scale(1.02)` ; press : opacité .78.
- Responsive : desktop 1280px+, tablette 768px, mobile 375px — CTA pleine largeur sur mobile, grilles empilées, H1 réduit (~34px), hit targets ≥ 44px.

## Contenu

Reprendre **mot pour mot** tous les textes français de la maquette (titres, descriptions matériaux, services, témoignages, labels). Ne pas inventer de contenu supplémentaire.

## Critères d'acceptation

- [ ] Rendu visuellement identique à `EMC BTP - Site Vitrine.html` sur les 3 breakpoints
- [ ] Lighthouse mobile ≥ 90 (perf, a11y, SEO)
- [ ] Tous les CTA WhatsApp fonctionnels avec messages pré-remplis
- [ ] Lightbox galerie (images + vidéos) opérationnelle
- [ ] Évaluations : validation, succès, insertion dans le carrousel, persistance backend
- [ ] Menu mobile hamburger fonctionnel
- [ ] Aucune dépendance lourde inutile ; poids page initiale raisonnable (vidéos non préchargées)
