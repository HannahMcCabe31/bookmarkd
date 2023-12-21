import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  return (
    <>
      <nav className="bg-navbar p-[0.1rem]  fixed bottom-0 left-0 w-full flex justify-around items-center z-[1500] transition-all">
        <div
          className={`m-full p-auto transition-all   ${
            selectedPage === "profile" ? "bg-background-blue" : ""
          }`}
          onClick={() => {
            setSelectedPage("profile");
          }}
        >
          <Link to="/profile" className="text-button-beige">
            <img className="max-h-9" src="/img/profile_icon.png" />
          </Link>
        </div>
        <div
          className={`m-full   p-2    ${
            selectedPage === "dashboard" ? "bg-background-blue" : ""
          }`}
          onClick={() => {
            setSelectedPage("dashboard");
          }}
        >
          <Link to="/dashboard" className="text-button-beige">
            <img className="max-h-9" src="/img/dashboard_icon.png" />
          </Link>
        </div>
        <div
          className={`m-full   p-2    ${
            selectedPage === "search" ? "bg-background-blue" : ""
          }`}
          onClick={() => {
            setSelectedPage("search");
          }}
        >
          <Link to="/search" className="text-button-beige">
            <img className="max-h-9" src="/img/search_icon.png" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
