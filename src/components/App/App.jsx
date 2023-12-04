import React from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import LoginPage from "../../non_tailwind_components/LoginPage/LoginPage.jsx";

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
            <Routes>
                <Route path="/" element={<LoginPage setToken={setToken} />} />
                {token ? (
                    <Route path="/" element={<Navbar />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/search" element={<Search />} />
                    </Route>
                ) : null}
            </Routes>
        </Router>
    );
}

export default App;
