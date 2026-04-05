import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FEFDFB',
        ink: '#1A2332',
        muted: '#6B7280',
        accent: {
          orange: '#E85D40',
          blue: '#2B5876',
          yellow: '#FBBF24',
        },
        border: {
          card: 'rgba(43, 88, 118, 0.15)',
        },
        section: {
          warm: 'rgba(245, 242, 237, 0.3)',
        },
        input: {
          bg: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'card-hover':
          '0px 12px 40px -8px rgba(0, 0, 0, 0.16), 0px 4px 6px -4px rgba(0, 0, 0, 0.08)',
        btn: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
        header: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        content: '1152px',
      },
    },
  },
  plugins: [],
}

export default config
