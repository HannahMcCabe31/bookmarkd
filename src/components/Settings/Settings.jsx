import React from "react";
import { useNavigate, Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation"
import Typography from "@mui/material/Typography";
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
        <div className="text-white">
          <WelcomeUser token={token} />
          {/* need a section for user email */}
          <SettingsUserInfo />
          <SettingsNavigation/>
         
         
         
          
         
          
            <div>
              <Link to="/contact-us">
                <h1>Contact Us</h1>
              </Link>
            </div>
            <div>
              <button
                className="bg-navbar text-white font-bold py-1 px-5 rounded-md ml-5"
                onClick={handleLogout}
              >
                LOG OUT
              </button>
            </div>
          </div>
        
      </>
    </ThemeProvider>
  );
}

export default Settings;
