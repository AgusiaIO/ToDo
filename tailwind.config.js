/** @type {import('tailwindcss').Config} */
const asideAnimationDistance = "50px";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        grayWhite: "#ddd",
        // Dark mode
        darkBg: "#0D0D0D",
        darkLighter: "#090909",
        darkLight: "#0A0A0A",
        darkSeparator: "#151515",
        // Light mode
        lightBg: "#DDD",
        lightLighter: "#eee",
        lightDarker: "#404040",
        lightSeparator: "#aaa",
      },
      // Keyframes #ff0000

      keyframes: {
        toRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: `translateX(${asideAnimationDistance})` },
        },
        toLeft: {
          "0%": { transform: `translateX(${asideAnimationDistance})` },
          "100%": { transform: "translateX(0)" },
        },
      },
      // Animations #fa2afa
      animation: {
        toRight: "toRight 0.6s both",
        toLeft: "toLeft 0.6s both",
      },
    },
    container: {
      center: true,
    },
  },

  plugins: [],
};
