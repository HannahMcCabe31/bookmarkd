import { useContext } from "react";
import { TokenContext } from "../App/App";
import { Link } from "react-router-dom";
import BookmarkdLogo from "../../assets/BookmarkdLogo.png";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useState } from "react";

function handleSignOut() {
  sessionStorage.removeItem("token");
  setToken(false);
  setHasProfilePic([]);
}

function DesktopNavbar() {
  const token = useContext(TokenContext);
  const [selectedPage, setSelectedPage] = useState("dashboard");
  console.log(selectedPage);
  return (
    <>
      {token ? (
        <nav className="bg-gradient-to-b from-desktop-navbar to-background-blue p-2 pt-5 fixed left-0 top-0 w-1/8 flex flex-col items-center z-[1500] h-full ">
          <Box className="lg:mt-2">
            <Box className="hidden lg:mx-5 lg:flex lg:flex-col justify-center">
              <Typography
                variant="subtitle"
                color="white.main"
                className="self-center"
              >
                book
                <Typography
                  display="inline"
                  variant="subtitle"
                  color="starBlue.main"
                >
                  mark
                </Typography>
                d
              </Typography>
              <Typography
                variant="terms"
                className="text-white block mt-[-0.2rem] text-[1rem] self-center"
              >
                By Readers, For Readers
              </Typography>
            </Box>
            <Box className="hidden lg:flex justify-center">
              <img src={BookmarkdLogo} alt="Bookmarkd Logo" />
            </Box>
          </Box>
          <Link to="/profile" className="text-button-beige">
            <Box
              className={`sm:bg-invisible lg:py-3 lg:px-[4rem]  w-full rounded-[3rem] p-2 text-center my-4 ${
                selectedPage === "profile"
                  ? "lg:bg-[#14191D]"
                  : "lg:bg-element-blue"
              }`}
              onClick={() => {
                setSelectedPage("profile");
              }}
            >
              <img
                className="max-h-9 inline mr-1"
                src="/img/profile_icon.png"
              />
              <Typography
                variant="terms"
                className="text-white hidden lg:inline-block ml-2"
              >
                Profile
              </Typography>
            </Box>
          </Link>
          <Link to="/dashboard" className="text-button-beige">
            <Box
              className={`sm:bg-invisible lg:py-3 lg:px-[4rem] lg:bg-element-blue w-full rounded-[3rem] p-2 text-center my-4 ${
                selectedPage === "dashboard"
                  ? "lg:bg-[#14191D] "
                  : "lg:bg-element-blue"
              }`}
              onClick={() => {
                setSelectedPage("dashboard");
              }}
            >
              <img
                className="max-h-9 inline lg:mr-3 mr-1"
                src="/img/dashboard_icon.png"
              />
              <Typography
                variant="terms"
                className="text-white hidden lg:inline-block "
              >
                Home
              </Typography>
            </Box>
          </Link>
          <Link to="/search" className="text-button-beige">
            <Box
              className={`sm:bg-invisible lg:py-3 lg:px-[4rem] lg:bg-element-blue w-full rounded-[3rem] p-2 text-center my-4 lg:block ${
                selectedPage === "search"
                  ? "lg:bg-[#14191D] "
                  : "lg:bg-element-blue"
              }`}
              onClick={() => {
                setSelectedPage("search");
              }}
            >
              <img className="max-h-9 inline mr-1" src="/img/search_icon.png" />
              <Typography
                variant="terms"
                className="text-white hidden lg:inline-block ml-2"
              >
                Search
              </Typography>
            </Box>
          </Link>
          <Link to="/recommendations" className="text-button-beige">
            <Box
              className={`sm:bg-invisible lg:py-3 lg:px-[3.2rem] lg:bg-element-blue w-full rounded-[3rem] p-2 text-center my-4 ${
                selectedPage === "recommendations"
                  ? "lg:bg-[#14191D]"
                  : "lg:bg-element-blue "
              }`}
              onClick={() => {
                setSelectedPage("recommendations");
              }}
            >
              <img className="max-h-9 inline mr-1" src="/img/recrobot.png" />
              <Typography
                variant="terms"
                className="text-white hidden lg:inline-block ml-2 mt-2"
              >
                Book REC
              </Typography>
            </Box>
          </Link>
          <Link to="/settings" className="text-button-beige">
            <Box
              className={`sm:bg-invisible lg:bg-element-blue w-full rounded-[3rem] p-2 lg:py-3 lg:px-[3.55rem] text-center my-4 ${
                selectedPage === "settings"
                  ? "lg:bg-[#14191D]"
                  : "lg:bg-element-blue"
              }`}
              onClick={() => {
                setSelectedPage("settings");
              }}
            >
              <img className="max-h-9 inline mr-1" src="/img/settings.png" />
              <Typography
                variant="terms"
                className="text-white hidden lg:inline-block ml-1"
              >
                Settings
              </Typography>
            </Box>
          </Link>
          <Box className="bg-background-blue w-full rounded text-center absolute bottom-10">
            <Link onClick={handleSignOut} className="text-button-beige">
              <Typography
                variant="terms"
                className="text-white block font-bold"
              >
                LOG OUT
              </Typography>
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
