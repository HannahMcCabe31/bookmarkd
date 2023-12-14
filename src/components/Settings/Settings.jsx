import React from "react";
import { Link } from "react-router-dom";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation";
import UserHeader from "../UserHeader/UserHeader";


import backArrow from "../../assets/BackArrow.svg";

import { useContext } from "react";
import {
    SetTokenContext,
} from "../App/App.jsx";

function Settings() {
    const setToken = useContext(SetTokenContext);

    return (
        <div>
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
        </div>
    );
}

export default Settings;
