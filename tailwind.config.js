/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAFA',
        'bg-dark': '#0A0A0B',
        ink: '#111111',
        'ink-dark': '#F5F5F5',
        muted: '#666666',
        'muted-dark': '#9A9A9A',
        accent: '#2563EB',
        'accent-soft': '#EFF4FE',
        card: '#FFFFFF',
        'card-dark': '#151517',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 2px 24px -8px rgba(17, 17, 17, 0.08)',
        lift: '0 16px 40px -12px rgba(17, 17, 17, 0.18)',
        'accent-glow': '0 8px 30px -8px rgba(37, 99, 235, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
