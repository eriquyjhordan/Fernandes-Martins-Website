import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2F1F1",
        secondary: "#A68967",
        secondaryHover: "#9D8161",
      },
      backgroundImage: {
        header: 'linear-gradient(-76.33deg, rgba(132, 88, 109, 1) 0%, rgba(57, 38, 47, 1) 77%)',
      },
      width: {
        'header-width': 'calc(100% - 488px)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.7s ease-out',
        'slide-left': 'slide-left 0.7s ease-out',
        'slide-right': 'slide-right 0.7s ease-out',
        'slide-down': 'slide-down 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;