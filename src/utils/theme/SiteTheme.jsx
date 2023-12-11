'use client'
import { ThemeProvider, createTheme } from "@mui/material";

let customTheme = createTheme({
  palette: {
    primary: {
      main: "#222",
    },
    secondary: {
      main: "#E5CCFD"
    },
    info: {
      main: "#034e78"
    }
  },
});
const SiteTheme = ({ children }) => {
  return <ThemeProvider  theme={customTheme}>{children}</ThemeProvider>;
};

export default SiteTheme;
