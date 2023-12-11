import React from "react";
import { useNavigate, Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation"

import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function Settings(props) {
  const token = props.token;

  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <ThemeProvider theme={bookmarkd}>
      <>
        <div className="text-white mx-10">
          <WelcomeUser token={token} />
          {/* need a section for user email */}
          <SettingsUserInfo />
          <SettingsNavigation/>
          </div>
        
      </>
    </ThemeProvider>
  );
}

export default Settings;
