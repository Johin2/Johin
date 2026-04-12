/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#f5f2ea',
          dim: '#a8a298',
          faint: '#6b675e',
          line: '#2a2722',
        },
        obsidian: {
          DEFAULT: '#0b0a08',
          raised: '#15130f',
          deeper: '#05040a',
        },
        ember: {
          DEFAULT: '#e07a36',
          deep: '#a84b16',
          glow: '#f4a66a',
        },
        paper: '#f5f2ea',
        // legacy aliases kept so any old class references don't blow up
        primary: '#0b0a08',
        secondary: '#e07a36',
        primaryAccent: {
          light: '#15130f',
          medium: '#2a2722',
        },
        secondaryAccent: {
          light: '#f4a66a',
          medium: '#a84b16',
        },
        scrollbarTrack: 'transparent',
        scrollbarThumb: '#2a2722',
        scrollbarThumbHover: '#e07a36',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        merriweather: ['Fraunces', 'serif'], // legacy alias
      },
      fontSize: {
        'mega': ['clamp(4rem, 14vw, 16rem)', { lineHeight: '0.85', letterSpacing: '-0.045em' }],
        'display': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'micro': ['10px', { lineHeight: '1.2', letterSpacing: '0.15em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        editorial: '-0.035em',
      },
      animation: {
        'marquee': 'marquee 45s linear infinite',
        'marquee-slow': 'marquee 90s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
        'blink': 'blink 1.2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(-4%, 2%)' },
          '30%': { transform: 'translate(2%, -4%)' },
          '40%': { transform: 'translate(-2%, 5%)' },
          '50%': { transform: 'translate(-4%, 2%)' },
          '60%': { transform: 'translate(3%, 0)' },
          '70%': { transform: 'translate(0, 3%)' },
          '80%': { transform: 'translate(-3%, 0)' },
          '90%': { transform: 'translate(2%, 2%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
}
