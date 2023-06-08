/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        fontFamily: {
            geologica: ['Geologica'],
            monument: ['Monument Extended'],
        },
        colors: {
            'melon': '#FFB5A7',
            'russian-violet': {
                light: '#302867',
                DEFAULT: '#2B061E',
                dark: '#1B0014',
            },
            'smoky-black': '#1D1A05',
            'mint-cream': '#F7FFF7',
            'argentinian-blue': '#48ACF0',
        }
    },
    screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
    },
    container: {
        center: true,
        padding: '2rem',
    },
  },
  plugins: [],
}

