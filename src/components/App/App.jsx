import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { bookmarkd } from "../../definitions/bookmarkdTheme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import LoginPage from "../../non_tailwind_components/LoginPage/LoginPage.jsx";
import Recommendations from "../Recommendations/Recommendations.jsx";
import Friends from "../Friends/Friends.jsx";
import Settings from "../Settings/Settings.jsx";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "../TermsConditions/TermsConditions.jsx";
import AIPowered from "../AIPowered/AIPowered.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import BookPage from "../BookPage/BookPage.jsx";
import Login from "../Login/Login.jsx";

export const UserData = createContext();

function App() {
  const [userData, setUserData] = useState();
  const [token, setToken] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function getUserInfo() {
      const responseRequest = await fetch(
        `https://bookmarkd-server.onrender.com/api/user?user_id=${token.user.id}`,
        {
          method: `GET`,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (responseRequest.ok) {
        const responseData = await responseRequest.json();
        return responseData.payload;
      } else if (!responseRequest.ok) {
        console.error(`Status: ${responseRequest.status}`);
        console.error(`Text: ${await responseRequest.text()}`);
        console.error("Data not available");
        return;
      }
    }
    if (token) {

      getUserInfo()
        .then((payload) => {
          setUserData(payload);
        })
        .catch((error) => {
          console.error(`Error fetching: ${error}`);
        });
    }
  }, [token]);

  // Check if user is on mobile
  useEffect(() => {
    function handleResize() {
      const screenSize = window.innerWidth;
      if (screenSize < 550) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
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
    <UserData.Provider value={userData}>
      <ThemeProvider theme={bookmarkd}>
        <Router>
          {token && <Navbar />}
          {/* Render Navbar if token is present */}
          <div className="pb-16">
            <Routes>
              {isMobile ? (
                <Route path="/" element={<Login setToken={setToken} />} />
              ) : (
                <Route path="/" element={<LoginPage setToken={setToken} />} />
              )}

              {/* Redirect to login if no token */}
              {!token && (
                <Route path="/dashboard" element={<Navigate to="/" />} />
              )}
              {!token && (
                <Route path="/profile" element={<Navigate to="/" />} />
              )}
              {!token && <Route path="/search" element={<Navigate to="/" />} />}
              {!token && (
                <Route path="/recommendations" element={<Navigate to="/" />} />
              )}
              {!token && (
                <Route path="/settings" element={<Navigate to="/" />} />
              )}

              {/* Protected routes */}
              {token && (
                <Route
                  path="/dashboard"
                  element={<Dashboard token={token} />}
                />
              )}
              {token && (
                <Route path="/profile" element={<Profile token={token} />} />
              )}
              {token && <Route path="/search" element={<Search />} />}
              {token && (
                <Route path="/recommendations" element={<Recommendations />} />
              )}
              {token && <Route path="/friends" element={<Friends />} />}
              {token && (
                <Route
                  path="/settings"
                  element={<Settings setToken={setToken} token={token} />}
                />
              )}
              {token && (
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              )}
              {token && (
                <Route
                  path="/terms-and-conditions"
                  element={<TermsConditions />}
                />
              )}
              {token && <Route path="/contact-us" element={<ContactUs />} />}
              {token && <Route path="/ai-powered" element={<AIPowered />} />}
              {token && <Route path="/book-page" element={<BookPage />} />}
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </UserData.Provider>
  );
}

export default App;
