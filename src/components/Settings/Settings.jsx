import React from "react";
import { useNavigate, Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";

const Settings = () => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <div className="text-white">
        <h1>Settings</h1>
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
  );
};

export default Settings;
