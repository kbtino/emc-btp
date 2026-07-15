// Contenu extrait mot pour mot de la maquette Claude Design (EMC BTP.dc.html).
// Ne pas reformuler les textes FR sans validation du client.

export const site = {
  name: 'EMC BTP',
  fullName: 'Équipement Matériaux de Construction',
  tagline: 'Vos matériaux de construction, livrés sur chantier à Lomé',
  description:
    "Sable, gravier, ciment, fer à béton, briques — en gros et au détail. Qualité contrôlée, prix justes, livraison sous 24h par camions 10 roues et remorques.",
  address: 'Sagbado, Lomé, Togo',
  hours: {
    weekdays: 'Lun – Sam : 7h00 – 18h00',
    sunday: 'Dimanche : sur rendez-vous',
  },
  whatsappNumber: '+228 72202070',
  showWhatsappFloat: true,
  showTestimonials: true,
  mapsEmbedSrc: 'https://www.google.com/maps?q=Sagbado%2C%20Lom%C3%A9%2C%20Togo&z=14&output=embed',
  socials: {
    facebook: '#',
    tiktok: '#',
  },
};

export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#materiaux', label: 'Nos Matériaux' },
  { href: '#services', label: 'Nos Services' },
  { href: '#livraison', label: 'Livraison' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
];

export const stats = [
  { icon: 'IconBuildingFactory2', value: '+500', label: 'chantiers livrés à Lomé' },
  { icon: 'IconClockBolt', value: '24h', label: 'délai de livraison moyen' },
  { icon: 'IconWall', value: '10+', label: 'types de matériaux en stock' },
  { icon: 'IconTruck', value: '3', label: 'types de camions : 10 roues, Sinotruk, remorques' },
];

export type Material = { name: string; desc: string; img: string };

export const materials: Material[] = [
  { name: 'Sable', desc: 'Sable fin et gros sable, criblé et propre.', img: '/images/sable.webp' },
  { name: 'Gravier', desc: 'Concassé et roulé, tous calibres pour béton.', img: '/images/gravier.webp' },
  { name: 'Ciment', desc: 'CimTogo et Dangote, sacs de 50 kg.', img: '/images/ciment.webp' },
  { name: 'Remblage / Latérite', desc: 'Terre de remblai et latérite compactable.', img: '/images/remblai.webp' },
  { name: 'Fer à béton — chaud', desc: 'Barres laminées à chaud, du Ø6 au Ø32.', img: '/images/fer-chaud.webp' },
  { name: 'Fer à béton — froid', desc: 'Barres tréfilées à froid, haute précision.', img: '/images/fer-froid.webp' },
  { name: 'Fil de fer', desc: 'Recuit et galvanisé, pour ligature et clôture.', img: '/images/fil-de-fer.webp' },
  { name: 'Briques de fondation', desc: 'Briques pleines pour fondations solides.', img: '/images/briques-fondation.webp' },
  { name: 'Briques de construction', desc: 'Parpaings creux 10, 15 et 20 pour élévation.', img: '/images/briques.webp' },
];

export type ServiceItem = { icon: string; title: string; desc: string };

export const services: ServiceItem[] = [
  {
    icon: 'IconBuildingStore',
    title: 'Vente de matériaux',
    desc: 'Gros et détail au dépôt de Sagbado. Qualité contrôlée à la réception, prix compétitifs en FCFA, stock permanent.',
  },
  {
    icon: 'IconRuler2',
    title: 'Architecture & Construction',
    desc: 'Plans, conception et réalisation de A à Z avec nos architectes partenaires. Villas, immeubles, boutiques.',
  },
  {
    icon: 'IconChecklist',
    title: 'Suivi de chantiers',
    desc: "Accompagnement technique du terrassement à la livraison : contrôle des dosages, planning et réception des travaux.",
  },
];

export const companyVideo = {
  src: '/videos/presentation-entreprise.mp4',
  title: 'Découvrez EMC BTP en vidéo',
  desc: 'Notre dépôt, notre flotte et notre équipe à Sagbado, en une courte présentation.',
};

export const delivery = {
  title: 'Une flotte qui livre votre chantier, pas des promesses',
  text: 'Nos camions 10 roues, Sinotruk et remorques chargent à Sagbado et livrent sable, gravier, ciment et fer directement sur votre chantier — souvent le jour même.',
  fleet: [
    { icon: 'IconTruck', label: 'Camions 10 roues', desc: 'gros volumes de sable et gravier' },
    { icon: 'IconTruckLoading', label: 'Sinotruk', desc: 'bennes robustes pour remblai et latérite' },
    { icon: 'IconTir', label: 'Remorques', desc: 'fer à béton, briques et charges longues' },
  ],
  zones: 'Sagbado, Adidogomé, Agoè, Bè, Baguida, Adétikopé et tout le Grand Lomé',
  images: {
    wide: { src: '/images/gravier-en-remorque.webp', alt: 'Camion vert EMC BTP chargé de gravier en carrière' },
    a: { src: '/images/remorque-reelle.webp', alt: 'Camion EMC BTP livrant du sable à Lomé' },
    b: { src: '/images/camion-10-roues.webp', alt: 'Camion 10 roues' },
  },
};

export type GalleryItem = { src: string; caption: string; isVideo: boolean };

export const gallery: GalleryItem[] = [
  { src: '/images/gravier-en-camion.webp', caption: 'Déchargement de gravier sur chantier', isVideo: false },
  { src: '/images/sable.webp', caption: 'Sable fin prêt à livrer', isVideo: false },
  { src: '/images/gravier.webp', caption: 'Gravier concassé en stock', isVideo: false },
  { src: '/images/barre-de-fer-3.webp', caption: 'Barres de fer à béton', isVideo: false },
  { src: '/images/ciment-cimtogo.webp', caption: 'Ciment CimTogo en dépôt', isVideo: false },
  { src: '/images/fil-de-fer-1.webp', caption: 'Fil de fer recuit', isVideo: false },
  { src: '/videos/video-gravier.mp4', caption: 'Vidéo — livraison de gravier', isVideo: true },
  { src: '/videos/video-sable.mp4', caption: 'Vidéo — chargement de sable', isVideo: true },
];

export type Testimonial = { name: string; role: string; quote: string; rating: number };

export const testimonials: Testimonial[] = [
  {
    name: 'K. Amétépé',
    role: 'Promoteur immobilier, Lomé',
    rating: 5,
    quote:
      "EMC BTP livre toujours à l'heure. Sur un chantier de 40 logements, c'est la différence entre tenir le planning et le perdre.",
  },
  {
    name: 'Kossi Agbeko',
    role: 'Entrepreneur BTP, Agoè',
    rating: 5,
    quote:
      "Deux voyages de gravier commandés le matin, livrés l'après-midi sur mon chantier à Agoè. Le dosage était propre, rien à redire.",
  },
  {
    name: 'Afi Dogbé',
    role: 'Promotrice immobilière, Baguida',
    rating: 5,
    quote:
      'EMC BTP fournit tous mes chantiers depuis 2024. Les prix en gros sont corrects et le fer est toujours conforme aux sections commandées.',
  },
  {
    name: 'Yao Tchalla',
    role: 'Chef de chantier, Adidogomé',
    rating: 5,
    quote:
      "Leur suivi de chantier m'a évité de grosses erreurs de fondation. Une équipe sérieuse qui répond même le samedi.",
  },
];

export const contactMaterialOptions = [
  'Sable',
  'Gravier',
  'Ciment',
  'Remblage',
  'Latérite',
  'Fer à béton — chaud',
  'Fer à béton — froid',
  'Fil de fer',
  'Briques de fondation',
  'Briques de construction / Parpaings',
  'Plusieurs matériaux',
  'Services (architecture / suivi)',
];

export const whatsappMessages = {
  default: 'Bonjour EMC BTP, je souhaite un devis pour mon chantier.',
  tarifs: "Bonjour EMC BTP, pouvez-vous m'envoyer vos tarifs matériaux ?",
  livraison: 'Bonjour EMC BTP, je souhaite planifier une livraison.',
  contactForm: (fields: { name: string; phone: string; material: string; message: string }) =>
    `Bonjour EMC BTP,\n\nNom : ${fields.name}\nTéléphone : ${fields.phone}\nMatériau : ${fields.material}\nMessage : ${fields.message}`,
};
