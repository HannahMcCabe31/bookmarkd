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
import { SetTokenContext, ProfilePic } from "../App/App.jsx";

function Settings() {
  let navigate = useNavigate();
  const setToken = useContext(SetTokenContext);

  const profilePic = useContext(ProfilePic);

  return (
    <>
      <>
        <div className="md:max-w-[85%] md:pl-[20%]">
          <Link to="/dashboard">
            <img
              src={backArrow}
              alt="backArrow"
              className="w-8 h-8 ml-10 mt-10 md:hidden"
            />
          </Link>
          <div className="text-white">
            <div className="mx-10 md:m-0">
              <UserHeader />
              {/* need a section for user email */}
              <SettingsUserInfo />
              <SettingsNavigation />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Settings;
