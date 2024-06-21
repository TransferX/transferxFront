import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      vermelho: "#CE1A2B",
      cinzaMedio: "#313131",
      cinzaEscuro: "#1a1a1a",
      branco : "#F4F4F4",
      cinzaClaro: "#8D8D8D"

     }
    },
  },
  plugins: [],
};
export default config;
