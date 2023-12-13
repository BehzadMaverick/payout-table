import { SPACING } from "constants/index";

const theme = {
  breakpoints: {
    sm: "600px",
    md: "900px",
    lg: "1200px",
  },
  spacing: (units: number) => `${units * SPACING}px`,
  colors: {
    primary: "#999DFF",
    secondary: "#60CA57",
    backgroundColor: "#F4F4F480",
    tableHeader: "#6F767E",
    title: "#272B30",
    subtitle: "#1A1D1F",
    pending: "#6F767E66",
    paid: "#60CA57",
    white: "#FFF",
    black: "#000",
    grey: "#F0F0F0",
    backdrop: "#00000080",
    borderColor: "#CCC",
  },
  typography: {
    fontFamily: "Inter",
    size: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "40px",
    },
  },
};

export default theme;
