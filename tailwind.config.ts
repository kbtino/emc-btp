import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F6E56',
          dark: '#0a4f3d',
          darker: '#0a2e24',
          light: '#7fd4bc',
          badge: '#e9f4f0',
        },
        accent: {
          DEFAULT: '#f4a460',
          hover: '#ee9748',
          text: '#3b2409',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          body: '#374151',
          muted: '#6b7280',
          placeholder: '#9ca3af',
        },
        hairline: '#e8e9e8',
        page: '#f5f7f5',
        whatsapp: '#25D366',
      },
      maxWidth: {
        container: '1280px',
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
