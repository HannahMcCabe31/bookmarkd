import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCurrentlyReading from "../ProfileCurrentlyReading/ProfileCurrentlyReading";
import ProfileStatistics from "../ProfileStatistics/ProfileStatistics";
import Typography from "@mui/material/Typography";
import ProfileBookshelves from "../BookshelvesContainer/BookshelvesContainer";
// import { ThemeProvider } from "@mui/material/styles";
// import { bookmarkd } from "../../definitions/bookmarkdTheme";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";

// create container to render bookshelf components within

function Profile(props) {
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
          <div className="text-white p-[5vw]">
            {/* This component contains the header (profile picture and username) */}
            <WelcomeUser token={token}/>
            <ProfileCurrentlyReading />
            <ProfileStatistics />
            <ProfileBookshelves />
          </div>
        </>
      ) : (
        <MobileResizeWarning token={token} />
      )}
    </div>
  );
}

export default Profile;
