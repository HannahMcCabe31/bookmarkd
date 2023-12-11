import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";
import { Box,Button} from "@mui/material";
import Typography from "@mui/material/Typography";


function SettingsNavigation() {
    return (
        <div className="text-3xl flex flex-col mt-5 px-5">
        <div>
          <Link to="/privacy-policy">
            <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
              <p>Privacy Policy</p>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <Link to="/terms-and-conditions">
            <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
              <p>Terms and Conditions</p>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
          <Link to="/ai-powered">
            <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
              <p>AI Powered</p>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link>
      
        </div>
        <Box className="flex flex-row justify-between">
        
              <Link to="/contact-us">
                <Typography variant="h3">Contact Us</Typography>
              </Link>
            
            <div>
              <Button
                className="bg-navbar text-lg text-white font-semi-bold py-1 px-10 rounded-md "
                // onClick={handleLogout}
              >
                LOG OUT
              </Button>
            </div>
            </Box>
      </div>
    )
}

export default SettingsNavigation