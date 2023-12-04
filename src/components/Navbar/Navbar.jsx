import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-navbar">
        <div>
        <h1 className="text-xl font-bold text-navbar">Hello World</h1>
            <ul>
                <li className="text-green-500 font-bold">Profile</li>
                <li>Dashboard</li>
                <li>Search</li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;