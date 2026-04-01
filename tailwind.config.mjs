/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wr: {
          dark: '#132738',
          teal: '#4ED5D8',
          'teal-deep': '#3BBFC2',
          pink: '#FD7B99',
          yellow: '#FFE74C',
          light: '#F2F7F9',
          nav: '#F8F8F7',
          muted: '#6B8299',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['80px', { lineHeight: '1.05', fontWeight: '500' }],
        'h1': ['56px', { lineHeight: '1.1', fontWeight: '500' }],
        'h2': ['40px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['20px', { lineHeight: '30px' }],
        'body': ['17px', { lineHeight: '28px' }],
        'small': ['14px', { lineHeight: '22px' }],
      },
      borderRadius: {
        'nav': '10px',
      },
      maxWidth: {
        'prose': '720px',
        'content': '1200px',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #132738 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '24px 24px',
      },
    },
  },
  plugins: [],
};
