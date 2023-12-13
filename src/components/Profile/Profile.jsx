import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCurrentlyReading from "../ProfileCurrentlyReading/ProfileCurrentlyReading";
import ProfileStatistics from "../ProfileStatistics/ProfileStatistics";
import Typography from "@mui/material/Typography";
import ProfileBookshelves from "../BookshelvesContainer/BookshelvesContainer";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";

import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";
import { useContext } from "react";
import {
  IsMobileContext,
  SetIsMobileContext,
  HandleResizeFunction,
} from "../App/App";

// create container to render bookshelf components within

function Profile() {
  let navigate = useNavigate();
  const isMobile = useContext(IsMobileContext);
  const setIsMobile = useContext(SetIsMobileContext);
  const handleResize = useContext(HandleResizeFunction);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          {/* Mobile display only  */}
          <Link to="/dashboard">
            <img
              src={backArrow}
              alt="backArrow"
              className="w-8 h-8 ml-10 mt-10"
            />
          </Link>
          <div className="text-white p-[5vw]">
            {/* This component contains the header (profile picture and username) */}
            <WelcomeUser />
            <ProfileCurrentlyReading />
            <ProfileStatistics />
            <ProfileBookshelves />
          </div>
        </>
      ) : (
        <MobileResizeWarning />
      )}
    </div>
  );
}

export default Profile;
