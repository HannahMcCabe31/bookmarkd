import { useContext } from "react";
import { TokenContext } from "../App/App";
import { Link } from "react-router-dom";
import BookmarkdLogo from "../../assets/BookmarkdLogo.png";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";




function DesktopNavbar() {
  const token = useContext(TokenContext);

  return (
    <>
      {token ? (
        <nav className="bg-gradient-to-b from-desktop-navbar to-background-blue p-2 pt-5 fixed left-0 w-1/8 flex flex-col items-center z-[1500] h-full">
        <Box>
        <Typography variant="subtitle" color="white.main" className="">
              book
              <Typography display="inline" variant="subtitle" color="starBlue.main">
                mark
              </Typography>
              d
            </Typography>
            <Typography variant="terms" className="text-white block">By Readers, For Readers</Typography>

        <img
                                src={BookmarkdLogo}
                                alt="Bookmarkd Logo"
                                className="m-auto"
                            />
            
            </Box>
            <Box className="bg-element-blue w-full rounded text-center my-4"> 
          <Link to="/profile" className="text-button-beige">
            <img className="max-h-9 inline" src="/img/profile_icon.png" />
            <Typography variant="terms" className="text-white">Profile</Typography>
          </Link>
          </Box>
          <Box className="bg-element-blue w-full rounded text-center my-4">
          <Link to="/dashboard" className="text-button-beige">
            <img className="max-h-9 inline" src="/img/dashboard_icon.png" />
            <Typography variant="terms" className="text-white">Home</Typography>
          </Link>
          </Box>
          <Box className="bg-element-blue w-full rounded text-center my-4">
          <Link to="/search" className="text-button-beige">
            <img className="max-h-9 inline" src="/img/search_icon.png" />
            <Typography variant="terms" className="text-white">Search</Typography>
          </Link>
          </Box>
          <Box className="bg-element-blue w-full rounded text-center my-4">
          <Link to="/search" className="text-button-beige">
            <img className="max-h-9 inline" src="/img/search_icon.png" />
            <Typography variant="terms" className="text-white">Book REC</Typography>
          </Link>
          </Box>
          <Box className="bg-element-blue w-full rounded text-center my-4">
          <Link to="/search" className="text-button-beige">
            <img className="max-h-9 inline" src="/img/search_icon.png" />
            <Typography variant="terms" className="text-white">Settings</Typography>
          </Link>
          </Box>
          <Box className="bg-background-blue w-full rounded text-center absolute bottom-10">
          <Link to="/search" className="text-button-beige">
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