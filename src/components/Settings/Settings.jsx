import React from "react";
import { useNavigate, Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
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
          <Typography variant="h2">Edit Profile Information</Typography>
          {/* Profile with username and email */}
          <div>Image, Username, Email</div>
          {/* update profile information */}
          <div>Profile Information</div>
          {/* List of settings options */}
          <div>
            <div>
              <div>
                <Link to="/privacy-policy">
                  <div>
                    <p>Privacy Policy</p>
                    <img src={rightArrow} alt="Right arrow" />
                  </div>
                </Link>
                <Link to="/terms-and-conditions">
                  <div>
                    <p>Terms & Conditions</p>
                    <img src={rightArrow} alt="Right arrow" />
                  </div>
                </Link>
                <Link to="/ai-powered">
                  <div>
                    <p>AI Powered</p>
                    <img src={rightArrow} alt="Right arrow" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* contact us or Log out*/}
          <div>
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
        </div>
      </>
    </ThemeProvider>
  );
}

export default Settings;
