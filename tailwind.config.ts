import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     screens: {
        'sm': '320px', 
        'md': '768px', 
        'lg': '1280px', 
        'xl': '1440px',
      },
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
       backgroundImage: {
        'hero': "linear-gradient(to left, rgba(2, 15, 8, 0.50) 0%)",
      }
    },
  },
  plugins: [],
}
export default config
