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
    },
  },
  plugins: [],
};
export default config;
