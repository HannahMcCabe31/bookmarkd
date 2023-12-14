/* eslint-disable no-inner-declarations */
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { bookmarkd } from "../../definitions/bookmarkdTheme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { supabase } from "../Supabase/client.js";
import AppRoutes from "../AppRoutes/AppRoutes.jsx";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar.jsx"

export const TokenContext = createContext();
export const SetTokenContext = createContext();

function App() {
    const [token, setToken] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    function handleResize() {
        const screenSize = window.innerWidth;
        if (screenSize < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }

      useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        // Call handler right away so state gets updated with initial window size
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    if (token) {
        sessionStorage.setItem("token", JSON.stringify(token));
    }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);


    return (
        <TokenContext.Provider value={token}>
            <SetTokenContext.Provider value={setToken}>
                <ThemeProvider theme={bookmarkd}>
                    <Router>
                        {token && isMobile && <Navbar />}
                        {token && !isMobile && <DesktopNavbar />}
                        <div className="pb-16">
                            <AppRoutes token={token} />
                        </div>
                    </Router>
                </ThemeProvider>
            </SetTokenContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
