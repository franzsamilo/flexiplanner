import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '350px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#7286D3',
        secondary: '#8EA7E9',
        tertiary: '#8D8D8D',
        dirty: '#EEEEEE',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        'raleway-bold': ['Raleway-Bold', 'sans-serif'],
        'raleway-extrabold': ['Raleway-ExtraBold', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
