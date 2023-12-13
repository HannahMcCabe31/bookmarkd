import React from "react";
import { useNavigate, Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation";
import UserHeader from "../UserHeader/UserHeader";
import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import backArrow from "../../assets/BackArrow.svg";

import { useContext, useEffect } from "react";
import {
  SetTokenContext,
  IsMobileContext,
  SetIsMobileContext,
  HandleResizeFunction,
  ProfilePic,
} from "../App/App.jsx";

function Settings() {
  let navigate = useNavigate();
  const setToken = useContext(SetTokenContext);
  const isMobile = useContext(IsMobileContext);
  const setIsMobile = useContext(SetIsMobileContext);
  const handleResize = useContext(HandleResizeFunction);
  const profilePic = useContext(ProfilePic);

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
      {isMobile ? (
        <>
          <Link to="/dashboard">
            <img
              src={backArrow}
              alt="backArrow"
              className="w-8 h-8 ml-10 mt-10"
            />
          </Link>
          <div className="text-white">
            <div className="mx-10">
              <UserHeader />
              {/* need a section for user email */}
              <SettingsUserInfo />
            </div>
            <div>
              <SettingsNavigation />
            </div>
          </div>
        </>
      ) : (
        <MobileResizeWarning />
      )}
    </>
  );
}

export default Settings;
