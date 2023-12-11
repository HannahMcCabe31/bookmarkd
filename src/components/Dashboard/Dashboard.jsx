import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";
import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";

function Dashboard(props) {
  const token = props.token;

  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false); // Add missing state variable

  useEffect(() => {
    function handleResize() {
      const screenSize = window.innerWidth;
      if (screenSize < 550) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
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
          <div className="text-white p-6">
            {/* This component contains the header (profile picture and username) */}
            <WelcomeUser token={token} />
            {/* This component contains the my current reads */}
            <CurrentlyReading />
            {/* This component contains multiple links to other pages */}
            <DashboardNavigation />
          </div>
        </>
      ) : (
        <MobileResizeWarning
          token={token}
          navigate={navigate}
          setToken={props.setToken}
        />
      )}
    </div>
  );
}

export default Dashboard;
