import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#7a7a7a",
          "200": "#777",
          "300": "#2b2b2d",
          "400": "#252727",
          "500": "rgba(255, 255, 255, 0.6)",
          "600": "rgba(119, 119, 119, 0.47)",
          "700": "rgba(122, 122, 122, 0.47)",
          "800": "rgba(255, 255, 255, 0.47)",
        },
        primay: "#cb6f04",
        chocolate: "#cb6f04",
        whitesmoke: {
          "100": "#f7f7f8",
          "200": "#ececec",
          "300": "#e9e9e9",
        },
        darkgray: {
          "100": "#adadad",
          "200": "#999",
        },
        sandybrown: "#f59758",
        mediumseagreen: "#3bb77e",
        lightskyblue: "#67bcee",
        hotpink: "#f74b81",
        tomato: "#f53e32",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        baloo: "Baloo",
        "baloo-2": "'Baloo 2'",
        lato: "Lato",
        quicksand: "Quicksand",
        "paytone-one": "'Paytone One'",
        "barlow-condensed": "'Barlow Condensed'",
        inherit: "inherit",
        "baloo-bhaijaan": "'Baloo Bhaijaan'",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        mini: "15px",
        xl: "20px",
        "16xl": "35px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "3xl": "1.375rem",
      lg: "1.125rem",
      xl: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      "16xl": "2.188rem",
      "2xl": "1.313rem",
      "9xl": "1.75rem",
      "2xs": "0.688rem",
      mini: "0.938rem",
      xs: "0.75rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "21xl": "2.5rem",
      "41xl": "3.75rem",
      "17xl": "2.25rem",
      "29xl": "3rem",
      "6xl": "1.563rem",
      lgi: "1.188rem",
      inherit: "inherit",
    },
    screens: {
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
export default config;
