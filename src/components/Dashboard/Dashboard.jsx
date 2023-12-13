import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";
import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";
import { useContext } from "react";
import {
  IsMobileContext,
  SetIsMobileContext,
  HandleResizeFunction,
} from "../App/App";

function Dashboard() {
  let navigate = useNavigate();
  const isMobile = useContext(IsMobileContext);
  const setIsMobile = useContext(SetIsMobileContext);
  const handleResize = useContext(HandleResizeFunction);
  // const [isMobile, setIsMobile] = useState(false); // Add missing state variable

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          {/* Mobile display only  */}
          <div className="text-white p-6 mt-[5vh] mb-[8vh]">
            {/* This component contains the header (profile picture and username) */}
            <WelcomeUser />
            {/* This component contains the my current reads */}
            <CurrentlyReading />
            {/* This component contains multiple links to other pages */}
            <DashboardNavigation />
          </div>
        </>
      ) : (
        <MobileResizeWarning

        // navigate={navigate}
        // setToken={props.setToken}
        // hasProfilePic={props.hasProfilePic}
        />
      )}
    </div>
  );
}

export default Dashboard;
