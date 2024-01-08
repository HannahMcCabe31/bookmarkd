import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [selectedPage, setSelectedPage] = useState("dashboard");

    return (
        <>
            <nav className="bg-navbar h-[7%] fixed bottom-[-0.2rem] left-0 w-full flex justify-around items-center z-[1500] transition-all">
                <div
                    className={`bg-background-blue  h-[100%] absolute z-[-1]  transition-all
        ${selectedPage === "profile" ? "translate-x-[-33.3vw] w-[5rem]" : ""}
        ${selectedPage === "dashboard" ? "w-[8rem]" : ""} } 
        ${selectedPage === "search" ? "translate-x-[33.3vw] w-[5rem]" : ""}
        `}
                ></div>

                <div
                    className="m-full transition-al"
                    onClick={() => {
                        setSelectedPage("profile");
                    }}
                >
                    <Link to="/profile" className="text-button-beige">
                        <img className="max-h-9" src="/img/profile_icon.png" />
                    </Link>
                </div>
                <div
                    className="m-full"
                    onClick={() => {
                        setSelectedPage("dashboard");
                    }}
                >
                    <Link to="/dashboard" className="text-button-beige">
                        <img
                            className="max-h-9 "
                            src="/img/dashboard_icon.png"
                        />
                    </Link>
                </div>
                <div
                    className="m-full"
                    onClick={() => {
                        setSelectedPage("search");
                    }}
                >
                    <Link to="/search" className="text-button-beige">
                        <img className="max-h-9 aspect-square" src="/img/search_icon.png" />
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
