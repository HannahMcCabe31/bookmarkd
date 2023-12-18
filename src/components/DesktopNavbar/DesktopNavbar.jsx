import { useContext } from "react";
import { TokenContext } from "../App/App";
import { Link } from "react-router-dom";
import BookmarkdLogo from "../../assets/BookmarkdLogo.png";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function handleSignOut() {
  sessionStorage.removeItem("token");
  setToken(false);
  setHasProfilePic([]);
}


function DesktopNavbar() {
  const token = useContext(TokenContext);

  return (
    <>
      {token ? (
        <nav className="bg-gradient-to-b from-desktop-navbar to-background-blue p-2 pt-5 fixed left-0 top-0 w-1/8 flex flex-col items-center z-[1500] h-full">
        <Box>
        <Box className="hidden lg:block">
        <Typography variant="subtitle" color="white.main">
              book
              <Typography display="inline" variant="subtitle" color="starBlue.main">
                mark
              </Typography>
              d
            </Typography>
            <Typography variant="terms" className="text-white block">By Readers, For Readers</Typography>
        </Box>
        <img
                                src={BookmarkdLogo}
                                alt="Bookmarkd Logo"
                                className="m-auto"
                            />
            
            </Box>
            <Box className="sm:bg-invisible lg:bg-element-blue w-full rounded text-center my-4"> 
          <Link to="/profile" className="text-button-beige">
            <img className="max-h-9 inline mr-1" src="/img/profile_icon.png" />
            <Typography variant="terms" className="text-white hidden lg:inline-block">Profile</Typography>
          </Link>
          </Box>
          <Box className="sm:bg-invisible lg:bg-element-blue w-full rounded text-center my-4">
          <Link to="/dashboard" className="text-button-beige">
            <img className="max-h-9 inline mr-1" src="/img/dashboard_icon.png" />
            <Typography variant="terms" className="text-white hidden lg:inline-block">Home</Typography>
          </Link>
          </Box>
          <Box className="sm:bg-invisible lg:bg-element-blue w-full rounded text-center my-4 lg:block">
          <Link to="/search" className="text-button-beige">
            <img className="max-h-9 inline mr-1" src="/img/search_icon.png" />
            <Typography variant="terms" className="text-white hidden lg:inline-block">Search</Typography>
          </Link>
          </Box>
          <Box className="sm:bg-invisible lg:bg-element-blue w-full rounded text-center my-4">
          <Link to="/recommendations" className="text-button-beige">
            <img className="max-h-9 inline mr-1" src="/img/recrobot.png" />
            <Typography variant="terms" className="text-white hidden lg:inline-block">Book REC</Typography>
          </Link>
          </Box>
          <Box className="sm:bg-invisible lg:bg-element-blue w-full rounded text-center my-4">
          <Link to="/settings" className="text-button-beige">
            <img className="max-h-9 inline mr-1" src="/img/settings.png" />
            <Typography variant="terms" className="text-white hidden lg:inline-block">Settings</Typography>
          </Link>
          </Box>
          <Box className="bg-background-blue w-full rounded text-center absolute bottom-10">
          <Link onClick={handleSignOut} className="text-button-beige">
            <Typography variant="terms" className="text-white block font-bold">LOG OUT</Typography>
          </Link>
          </Box>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}

export default DesktopNavbar;


// md:flex md:flex-col md:left-0 md:h-full md:w-1/6 md:bg-gradient-to-b md:from-desktop-navbar md:to-background-blue