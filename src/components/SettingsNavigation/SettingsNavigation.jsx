import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";


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
      </div>
    )
}

export default SettingsNavigation