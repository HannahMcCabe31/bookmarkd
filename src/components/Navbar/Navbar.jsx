import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Navbar()  {
    return (
        <nav className="bg-navbar p-4 fixed bottom-0 left-0 w-full flex justify-between items-center z-[1500]">
                <Link to="/profile" className="text-button-beige">Profile</Link>
                <Link to="/dashboard" className="text-button-beige">Dashboard</Link>
                <Link to="/search" className="text-button-beige">Search</Link>
        </nav>
    );
}

export default Navbar;