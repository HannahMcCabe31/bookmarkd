import React from "react";
import { Link } from "react-router-dom";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation";
import UserHeader from "../UserHeader/UserHeader";
import backArrow from "../../assets/BackArrow.svg";
import { useContext } from "react";
import { TokenContext } from "../App/App";
import { Typography } from "@mui/material";

function Settings() {
    const token = useContext(TokenContext)

  return (
    // md:max-w-[85%]
    //
    // lg:ml-20 xl:ml-20 2xl:ml-40
    <div className="md:mr-20 lg:mr-30 sm:ml-16 md:max-w-[640px]">
      <Link to="/dashboard">
        <img
          src={backArrow}
          alt="backArrow"
          className="w-8 h-8 ml-10 mt-10 md:hidden"
        />
      </Link>
      <div className="text-white">
        <div className="">
          <UserHeader token={token} />
          {/* need a section for user email */}
          <div className="md:mt-24 hidden md:block ">
            <Typography className="text-6xl">Settings</Typography>
          </div>
          <div className="md:flex md:flex-row lg:flex lg:flex-row">
            <SettingsUserInfo token={token} />
            <div className="">
              <SettingsNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
