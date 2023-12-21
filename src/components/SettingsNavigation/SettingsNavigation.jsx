import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SetTokenContext } from "../App/App.jsx";
import { useContext } from "react";

function SettingsNavigation() {
  const setToken = useContext(SetTokenContext);

  function handleSignOut() {
    sessionStorage.removeItem("token");
    setToken(false);
    setHasProfilePic([]);
  }

  return (
    <>
      <div className="text-3xl flex flex-col mt-5 px-5 md:pt-[2vh] md:max-w-[60%] ">
        <div>
          <Link to="/privacy-policy">
            <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between ">
              <Typography variant="h3" className="md:text-4xl md:my-[2vh]">
                Privacy Policy
              </Typography>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <Link to="/terms-and-conditions">
            <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between ">
              <Typography variant="h3" className="md:text-4xl md:my-[2vh]">
                Terms and Conditions
              </Typography>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <Link to="/ai-powered">
            <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between mb-5">
              <Typography variant="h3" className="md:text-4xl md:my-[2vh]">
                AI Powered
              </Typography>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
        </div>
        <Box className="flex flex-row justify-between">
          <Link to="/contact-us">
            <Typography
              variant="h3"
              className="md:text-3xl md:my-[2vh] md:hidden"
            >
              Contact Us
            </Typography>
          </Link>

          <div className="md:hidden">
            <Button
              className="bg-navbar text-lg text-white font-semi-bold py-1 px-10 rounded-md mb-5"
              onClick={handleSignOut}
            >
              LOG OUT
            </Button>
          </div>
        </Box>
      </div>
      <div className="md:flex md:flex-row-reverse hidden">
        <Link to="/contact-us">
          <Typography
            variant="h3"
            className="md:fixed md:w-full md:bottom-[3%] md:left-[74%] md:text-4xl md:my-[2vh] "
          >
            Contact Us
          </Typography>
        </Link>
      </div>
    </>
  );
}

export default SettingsNavigation;
