import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";



function DashboardNavigation() {
  return (
    <div className="text-3xl flex flex-col mt-5 px-5  md:w-[70vw] lg:w-[50vw]">
      <div>
        <Link to="/profile">
          <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
            <Typography variant="h2" className="text-4xl">
              My Profile
            </Typography>
            <img src={rightArrow} alt="Right arrow" />
          </div>
        </Link>
        <Link to="/recommendations">
          <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
            <Typography variant="h2" className="text-4xl ">
              My Book Recommendations
            </Typography>
            <img src={rightArrow} alt="Right arrow" />
          </div>
        </Link>
        {/* <Link to="/friends">
            <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
              <p>My Friends</p>
              <img src={rightArrow} alt="Right arrow" />
            </div>
          </Link> */}
        <Link to="/settings">
          <div className="py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
            <Typography variant="h2" className="text-4xl ">
              Settings
            </Typography>
            <img src={rightArrow} alt="Right arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DashboardNavigation;
