const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          blue: '#0071e3',
          'blue-hover': '#0077ed',
          'blue-electric': '#2997ff',
          green: '#30d158',
          orange: '#ff9f0a',
          purple: '#af52de',
          red: '#ff453a',
          indigo: '#5e5ce6',
          cyan: '#32ade6',
          label: '#1d1d1f',
          secondary: '#6e6e73',
          tertiary: '#86868b',
          quaternary: '#aeaeb2',
          fill: '#f5f5f7',
          surface: '#ffffff',
          'surface-dark': '#161617',
          'card-dark': '#1c1c1e',
          elevated: '#1d1d1f',
          hairline: 'rgba(0,0,0,0.06)',
          'hairline-dark': 'rgba(255,255,255,0.08)'
        },
        'blue-opaque': 'rgb(0 113 227 / 12%)',
        gray: {
          0: '#ffffff',
          50: '#f5f5f7',
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#86868b',
          500: '#6e6e73',
          600: '#424245',
          700: '#2d2d2f',
          800: '#1d1d1f',
          900: '#000000'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'SF Pro Display',
          'Segoe UI',
          'IBM Plex Sans',
          ...fontFamily.sans
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          ...fontFamily.mono
        ]
      },
      boxShadow: {
        apple: '0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        'apple-sm': '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        'apple-md': '0 4px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'apple-lg': '0 8px 40px rgba(0,0,0,0.12)',
        'apple-xl': '0 24px 60px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.06)',
        'apple-glow': '0 0 35px rgba(0,113,227,0.18)',
        'apple-glow-green': '0 0 35px rgba(48,209,88,0.18)',
        'apple-dark': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)'
      },
      borderRadius: {
        'apple-sm': '12px',
        apple: '18px',
        'apple-md': '22px',
        'apple-lg': '26px',
        sheet: '28px',
        'apple-xl': '32px'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.apple.blue'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline'
              },
              code: { color: theme('colors.apple.blue') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
              fontWeight: '600',
              letterSpacing: '-0.02em',
              color: theme('colors.gray.800')
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.apple.blue') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: '#2997ff',
              '&:hover': {
                color: '#64b5ff'
              },
              code: { color: '#2997ff' }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.400') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.400') }
              }
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100')
              },
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
