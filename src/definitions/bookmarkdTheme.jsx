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
    inputGray: {    
        main: "#C4C4C4",
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
    green: {
        main: "#06B502"
    }
  },
  typography: {
    body2: {
      fontWeight: "normal",
      marginBottom: 10,

    },
    h1: {
      fontSize: "10vw",
      fontWeight: 400,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "-0.01562em",
    },
    logo: {
      fontSize: "13vw",
      fontWeight: 250,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0.05em",
    },
    h2: {
      fontSize: "8vw",
      fontWeight: 300,
      lineHeight: 1.2,
      fontFamily: "League Spartan",
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "6vw",
      fontWeight: 200,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "5vw",
      fontWeight: 200,
      lineHeight: 1.235,
      fontFamily: "League Spartan",
      letterSpacing: "0.00735em",
    },
    p: {
      fontSize: "4vw",
      fontWeight: 200,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0.00938em",
      
    },
    subtitle:{
      fontSize: "3vw",
      fontWeight: 200,
      lineHeight: 1.2,
      fontFamily: "League Spartan",
      letterSpacing: "0.00938em",
    },
    h5: {
      fontSize: "5.5vw",
      fontWeight: 330,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0.05em",
    },
    h6: {
      fontSize: "4.5vw",
      fontWeight: 500,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0.005em",
    },
    h7: { 
      fontSize: "3.5vw",
      fontWeight: 400,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0.00938em",
    },
    h8: {
      fontSize: "3.5vw",
      fontWeight: 200,
      lineHeight: 1.167,
      fontFamily: "League Spartan",
      letterSpacing: "0.00938em",
    },
    stats: { 
      fontSize: "5vw",
      fontWeight: 500,
      lineHeight: 1.167,
      fontFamily: "League Spartan", 
      letterSpacing: "0.00938em",
    },
    
    button: {
        textTransform: "none",
        
    },
    terms: {
        fontSize: "2.5vw",
        fontWeight: 400,
        lineHeight: 1.167,
        fontFamily: "League Spartan",
        letterSpacing: "0.00938em",
      },
    
  },
  select: {
    height: "10vh"
}
});
