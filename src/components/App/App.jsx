/* eslint-disable no-inner-declarations */
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { bookmarkd } from "../../definitions/bookmarkdTheme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { supabase } from "../Supabase/client.js";
import AppRoutes from "../AppRoutes/AppRoutes.jsx";

export const TokenContext = createContext();
export const SetTokenContext = createContext();

function App() {
    const [token, setToken] = useState(false);

    function handleResize() {
        const screenSize = window.innerWidth;
        if (screenSize < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }

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
                        {token && <Navbar />}
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
