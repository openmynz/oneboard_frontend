// tailwind.config.js

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "10vw":"10vw","20vw":"20vw","30vw":"30vw","40vw":"40vw","50vw":"50vw",
        "60vw":"60vw",
        "70vw":"70vw",
        "80vw":"80vw",
        "90vw":"90vw",
        "100vw":"100vw"


      },
      colors: {
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: "#131A2B",
            subtle: colors.gray[800],
            DEFAULT: colors.white,
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[700],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[900],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[900],
            strong: colors.gray[900],
            inverted: colors.gray[900],
          },
        },

        customOrange: "#F16422",
        customBlue: "#254980",
        customGrey: "#EDEDED",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
     
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [],
};
