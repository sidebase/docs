import type { Config } from 'tailwindcss'

export default <Config> {
  content: ['./layouts/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'sidebase-green': {
          DEFAULT: '#5BF3C7',
          50: '#FFFFFF',
          100: '#F3FEFB',
          200: '#CDFBEE',
          300: '#A7F9E1',
          400: '#81F6D4',
          500: '#5BF3C7',
          600: '#27EFB5',
          700: '#0FCF97',
          800: '#0B9A71',
          900: '#07664B',
        },
        'pickled-bluewood': {
          DEFAULT: '#2F4858',
          50: '#6490AC',
          100: '#5A89A7',
          200: '#4F7994',
          300: '#446980',
          400: '#3A586C',
          500: '#2F4858',
          600: '#243844',
          700: '#1A2730',
          800: '#0F171C',
          900: '#040708',
        },
      },
    },
  },
}
