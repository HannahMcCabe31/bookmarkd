import React from "react";
import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";
import { useContext, useEffect } from "react";
import {
  IsMobileContext,
  SetIsMobileContext,
  HandleResizeFunction,
  TokenContext,
} from "../App/App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const isMobile = useContext(IsMobileContext);
  const setIsMobile = useContext(SetIsMobileContext);
  const handleResize = useContext(HandleResizeFunction);
  const token = useContext(TokenContext);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile && token ? (
        <nav className="bg-navbar p-2 pl-10 pr-10 fixed bottom-0 left-0 w-full flex justify-between items-center z-[1500]">
          <Link to="/profile" className="text-button-beige">
            <img className="max-h-9" src="/img/profile_icon.png" />
          </Link>
          <Link to="/dashboard" className="text-button-beige">
            <img className="max-h-9" src="/img/dashboard_icon.png" />
          </Link>
          <Link to="/search" className="text-button-beige">
            <img className="max-h-9" src="/img/search_icon.png" />
          </Link>
        </nav>
      ) : (
        <MobileResizeWarning />
      )}
    </>
  );
}

export default Navbar;
