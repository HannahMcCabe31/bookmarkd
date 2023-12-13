import { useState, useEffect } from "react";
import ProfileBookshelves from "../Profile_Components/ProfileBookshelves/ProfileBookshelves";
import ProfileStatistics from "../Profile_Components/ProfileStatistics/ProfileStatistics";
import ProfileCurrentlyReading from "../Profile_Components/ProfileCurrentlyReading/ProfileCurrentlyReading";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
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
