import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Verts recalés sur le logo EMC BTP (vert feuille + vert forêt), plus teal.
        brand: {
          DEFAULT: '#1F8A3B',
          dark: '#13692B',
          darker: '#0A3D1E',
          light: '#86D69A',
          lime: '#4CB944',
          badge: '#E4F3E7',
        },
        // Jaune doré repris de la maquette page1 (moins agressif que l'orange sur les CTA).
        accent: {
          DEFAULT: '#F2B01E',
          hover: '#DE9E12',
          soft: '#FDF3D7',
          text: '#2E2205',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          body: '#374151',
          muted: '#6b7280',
          placeholder: '#9ca3af',
        },
        // Surfaces teintées alternées pour casser les aplats blancs.
        surface: {
          sand: '#FAF4E8',
          mint: '#E9F3EB',
          paper: '#F5F3ED',
        },
        hairline: '#E6E3DB',
        page: '#F5F3ED',
        whatsapp: '#25D366',
      },
      maxWidth: {
        container: '1280px',
      },
      // Valeurs .5 utilisées dans les composants mais absentes de l'échelle Tailwind par défaut
      // (sans ça, gap-4.5 / gap-5.5 / pt-4.5 ne produisent aucun espacement → champs collés).
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      keyframes: {
        waPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,.45)' },
          '70%': { boxShadow: '0 0 0 16px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        waPulse: 'waPulse 2.4s ease-out infinite',
        fadeInUp: 'fadeInUp 700ms ease both',
      },
    },
  },
  plugins: [],
};

export default config;
