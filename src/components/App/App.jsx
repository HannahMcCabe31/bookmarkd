import React from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard.jsx"
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import LoginPage from "../../non_tailwind_components/LoginPage/LoginPage.jsx";
import Recommendations from "../Recommendations/Recommendations.jsx";


function App() {
    const [token, setToken] = useState(false);

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
      <Router>
        {token && <Navbar />}{" "}
        {/* Render Navbar if token is present */}
        <div className="pb-16">
          <Routes>
            <Route path="/" element={<LoginPage setToken={setToken} />} />

            {/* Redirect to login if no token */}
            {!token && (
              <Route path="/dashboard" element={<Navigate to="/" />} />
            )}
            {!token && <Route path="/profile" element={<Navigate to="/" />} />}
            {!token && <Route path="/search" element={<Navigate to="/" />} />}
            {!token && (
              <Route path="/recommendations" element={<Navigate to="/" />} />
            )}

            {/* Protected routes */}
            {token && (
              <Route path="/dashboard" element={<Dashboard token={token} />} />
            )}
            {token && <Route path="/profile" element={<Profile />} />}
            {token && <Route path="/search" element={<Search />} />}
            {token && (
              <Route
                path="/recommendations"
                element={<Recommendations />}
              />
            )}
          </Routes>
        </div>
      </Router>
    );
}

export default App;
