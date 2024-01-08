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
    const token = useContext(TokenContext);
    window.scrollTo(0, 0); // Reset page to top when page is first loaded

    return (
        // md:max-w-[85%]
        //
        // lg:ml-20 xl:ml-20 2xl:ml-40
        <div className="md:m-auto lg:mr-30 sm:ml-16 md:max-w-[640px]">
            <Link to="/dashboard">
                <img
                    src={backArrow}
                    alt="backArrow"
                    className="w-8 h-8 ml-10 mt-10 md:hidden"
                />
            </Link>
            <div className="text-white md:grid md:grid-cols-2 md:grid-rows-2 md:items-center">
                <div className="md:col-start-2 md:row-start-1">
                    <UserHeader token={token} />
                </div>
                {/* need a section for user email */}
                <div className="hidden md:block md:col-start-1 ">
                    <Typography className="text-6xl ">Settings</Typography>
                </div>
                <div className="md:col-start-1 md:row-start-2">
                    <SettingsUserInfo token={token} />
                </div>
                <div className="md:col-start-2 md:row-start-2">
                    <SettingsNavigation />
                </div>
            </div>
        </div>
    );
}

export default Settings;
