import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";


function DashboardNavigation() {
  return (
    <div className="text-3xl flex flex-col mt-5 px-5">
      <div>
        <Link to="/profile">
          <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
            <p>My Profile</p>
            <img src={rightArrow} alt="Right arrow" />
          </div>
        </Link>
        <Link to="/recommendations">
          <div className=" py-8 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
            <p>My Book Recommendation</p>
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
            <p>Settings</p>
            <img src={rightArrow} alt="Right arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DashboardNavigation;
