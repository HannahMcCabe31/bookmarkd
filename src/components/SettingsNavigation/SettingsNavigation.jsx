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
      <div className="text-3xl flex flex-col mt-5 md:mt-[10vw] px-5 md:pt-[2vh]">
        <div className="">
          <Link to="/privacy-policy">
            <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between ">
              <Typography variant="h3" className="md:text-xl ">
                Privacy Policy
              </Typography>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <Link to="/terms-and-conditions">
            <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between ">
              <Typography variant="h3" className="md:text-xl">
                Terms and Conditions
              </Typography>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <Link to="/ai-powered">
            <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between ">
              <Typography variant="h3" className="md:text-xl">
                AI Powered
              </Typography>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <Link to="/contact-us">
            <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between ">
              <Typography variant="h3" className="md:text-xl">
                Contact Us
              </Typography>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <div className=" py-5 px-2  border-element-blue border-t-2 flex flex-row justify-between mb-2"></div>
        </div>
      </div>
      {/* flex flex-col items-center mb-10 mt-4 md:absolute md:top-[10vh] md:right-10 md:m-0 md:p-0 lg:mr-4 */}

      <div className="md:hidden lg:hidden flex justify-center">
        <Button
          className="bg-navbar text-lg text-white font-semi-bold py-1 px-10 rounded-md mb-8  "
          onClick={handleSignOut}
        >
          LOG OUT
        </Button>
      </div>
    </>
  );
}

export default SettingsNavigation;
