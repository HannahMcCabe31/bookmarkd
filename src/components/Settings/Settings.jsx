import React from "react";
import { Link } from "react-router-dom";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation";
import UserHeader from "../UserHeader/UserHeader";
import backArrow from "../../assets/BackArrow.svg";
import { useContext } from "react";
import { TokenContext } from "../App/App";

function Settings() {
    const token = useContext(TokenContext)

  return (
    // md:max-w-[85%] 
        <div className="lg:ml-20">
          <Link to="/dashboard">
            <img
              src={backArrow}
              alt="backArrow"
              className="w-8 h-8 ml-10 mt-10 md:hidden"
            />
          </Link>
          <div className="text-white">
            <div className="mx-10 md:m-0">
              <UserHeader token={token}/>
              {/* need a section for user email */}
              <SettingsUserInfo token={token}/>
              <SettingsNavigation />
            </div>
          </div>
        </div>
  );
}

export default Settings;
