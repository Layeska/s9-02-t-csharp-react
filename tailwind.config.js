/** @type {import('tailwindcss').Config} */
export default {
    content:["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
      extend: {
        backgroundColor: {
          primary: '#F9BC60'
        },
        boxShadow: {
          boxshadowHistory: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        },
        animation: {
          myAnimacion: "myAnim 2s cubic-bezier(0.32, 0, 0.67, 0) 0s infinite normal forwards"
        },
        keyframes: {
          myAnim: {
            "0%": { transform: "scale3d(1, 1, 1)" },
            "30%": { transform: "scale3d(1.25, 0.75, 1)" },
            "40%": { transform: "scale3d(0.75, 1.25, 1)" },
            "50%": { transform: "scale3d(1.15, 0.85, 1)" },
            "65%": { transform: "scale3d(0.95, 1.05, 1)" },
            "75%": { transform: "scale3d(1.05, 0.95, 1)" },
            "100%": { transform: "scale3d(1, 1, 1)" }
          }
        }
      },
    },
    fontFamily: {
      Roboto: ["Roboto"],
      Inter: ["Inter", "ui-sans-serif"],
      Lato: ["Lato", "Roboto"]
    },
    plugins: [],
}
