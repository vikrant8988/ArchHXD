/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.30)",
        fontBlack: "#081323",
        fontGray: "#828282",
        overlay: "rgba(0, 0, 0, 0.30)",
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
      boxShadow: {
        // cbs: "0 2px 4px 0 rgba(0,0,0,2),0 4px 16px 0 rgba(0,0,0,0.2)",
        cbs: "0px 10px 20px -10px rgba(50,50,93,0.15),0px 30px 60px -30px rgba(0,0,0,0.3)",
        hcbs: "0px 20px 40px -20px rgba(0,150,255,0.25),0px 30px 40px -30px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
