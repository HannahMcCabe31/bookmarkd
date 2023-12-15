import { Routes, Route, Navigate } from "react-router-dom";
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

function AppRoutes({ token }) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/" element={<LoginPage />} />

                {/* Redirect to login if no token */}
                {!token && (
                    <Route path="/dashboard" element={<Navigate to="/" />} />
                )}
                {!token && (
                    <Route path="/profile" element={<Navigate to="/" />} />
                )}
                {!token && (
                    <Route path="/search" element={<Navigate to="/" />} />
                )}
                {!token && (
                    <Route
                        path="/recommendations"
                        element={<Navigate to="/" />}
                    />
                )}
                {!token && (
                    <Route path="/settings" element={<Navigate to="/" />} />
                )}

                {/* Protected routes */}
                {token && <Route path="/dashboard" element={<Dashboard />} />}
                {token && <Route path="/profile" element={<Profile />} />}
                {token && <Route path="/search" element={<Search />} />}
                {token && (
                    <Route
                        path="/recommendations"
                        element={<Recommendations />}
                    />
                )}
                {token && <Route path="/friends" element={<Friends />} />}
                {token && <Route path="/settings" element={<Settings />} />}
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
                {token && <Route path="/book-page/:book_url_id" element={<BookPage />} />}
            </Routes>
        </>
    );
}

export default AppRoutes;
