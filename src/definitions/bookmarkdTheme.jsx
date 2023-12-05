import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const bookmarkd = createTheme({
  palette: {
    navbar: {
      main: "#302D40",
    },
    backgroundBlue: {
      main: "#14191D",
    },
    elementBlue: {
      main: "#16344E",
    },
    coolGray: {
      main: "#A7ADBB",
    },
    shadowGray: {
      main: "#596278",
    },
    buttonBeige: {
      main: "#E1DDD1",
    },
    heartRed: {
      main: "#FF584E",
    },
    starBlue: {
      main: "#68B9FF",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 300,
      lineHeight: 1.2,
      fontFamily: "League Spartan",
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0em",
    },
    p: {
      fontSize: "1.5rem",
      fontWeight: 200,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0.00938em",
    },
  },
});
