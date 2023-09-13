import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     container: {
      padding: {
        DEFAULT: '1.25rem',
         sm: '1.25rem',
        md:'2rem',
        lg: '6.5rem',
      },
    },
    
    extend: {
      lineHeight: {
        'extra-big': '3.5em',
      },
      screens: {
        'sm': '320px', // Для маленьких екранів
        'md': '768px', // Для середніх екранів
        'lg': '1280px', // Для великих екранів
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}
export default config
