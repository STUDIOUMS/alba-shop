import { createTheme } from "@mui/material";
import "./fonts.css";

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "rgb(87, 127, 27)",
      dark: "rgb(60, 89, 17)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e1e1e1",
      dark: "#d1d1d1",
      contrastText: "#000000",
    },
    error: {
      main: "#b51c1c",
    },
  },
  typography: {
    fontSize: 16,
    body1: {
      fontSize: 16,
      lineHeight: "20px",
    },
    body2: {
      fontSize: 12,
      lineHeight: "16px",
    },
    h1: {
      fontSize: 28,
      fontFamily: '"Roboto Condensed", sans-serif',
      fontWeight: 500,
      marginBottom: 32,
    },
    h2: {
      fontSize: 24,
      fontFamily: '"Roboto Condensed", sans-serif',
      fontWeight: 500,
      marginBottom: 24,
    },
    h3: {
      fontSize: 20,
      fontFamily: '"Roboto Condensed", sans-serif',
      fontWeight: 500,
      marginBottom: 24,
    },
    h4: {
      fontSize: 18,
      fontFamily: '"Roboto Condensed", sans-serif',
      fontWeight: 500,
      marginBottom: 18,
    },
    h5: {
      fontSize: 16,
      fontFamily: '"Roboto Condensed", sans-serif',
      fontWeight: 500,
      marginBottom: 18,
    },
    h6: {
      fontSize: 14,
      fontFamily: '"Roboto Condensed", sans-serif',
      fontWeight: 500,
      marginBottom: 16,
    },
  },
});

export default theme;
