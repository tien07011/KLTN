import palette from "./palette";

export default {
  fontFamily: ["Inter", "Montserrat", "Roboto", "Arial", "sans-serif"].join(","),
  h1: {
    fontFamily: "Montserrat",
    color: `${palette.white}`,
    fontWeight: "700",
    fontSize: "180px",
    letterSpacing: "normal",
    lineHeight: "normal",
  },
  h2: {
    fontFamily: "Montserrat",
    color: `${palette.white}`,
    fontWeight: "700",
    fontSize: "64px",
    letterSpacing: "normal",
    lineHeight: "80px",
  },
  h3: {
    fontFamily: "Montserrat",
    color: `${palette.white}`,
    fontWeight: "700",
    fontSize: "48px",
    letterSpacing: "normal",
    lineHeight: "60px",
  },
  h4: {
    fontFamily: "Montserrat",
    color: `${palette.white}`,
    fontWeight: "700",
    fontSize: "36px",
    letterSpacing: "normal",
    lineHeight: "46px",
  },
  h5: {
    fontFamily: "Inter",
    color: `${palette.white}`,
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: "normal",
    lineHeight: "24px",
  },
};
