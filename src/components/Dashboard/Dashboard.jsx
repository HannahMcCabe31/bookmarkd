import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";

import { useContext } from "react";

function Dashboard() {
  let navigate = useNavigate();


  return (
    <div>
        <>
          <div className="text-white p-6 mt-[5vh] mb-[8vh]">
            {/* This component contains the header (profile picture and username) */}
            <WelcomeUser />
            {/* This component contains the my current reads */}
            <CurrentlyReading />
            {/* This component contains multiple links to other pages */}
            <DashboardNavigation />
          </div>
        </>
    </div>
  );
}

export default Dashboard;
