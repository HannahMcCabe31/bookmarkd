import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg"
function Dashboard(props) {
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(true);
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
  });

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      
      {isMobile ? (
        <>
         {/* Mobile display only  */}
          <div className="text-white">
            {/* This div contains the header (profile picture and username) */}
            <div className="mt-10 ml-4">
              <div className="w-24 h-24 mb-4 mt-3 bg-white border rounded-full"></div>
              <h1 className="ml-5 mb-3 text-3xl">
                Hello, {props.token.user.user_metadata.username}!
              </h1>
            </div>
            {/* This div conatins the my current reads */}
            <div className=" text-black p-3">
              <div className="border rounded-2xl bg-white p-1 border-element-blue border-4">
                <button className="border rounded-full bg-element-blue text-white p-2  "> 
                <div className="flex flex-row justify-between">
                    <p className="text-sm mr-1">My Current Read</p> <img className="w-4"src={rightArrow} alt="Right arrow"/></div> </button>
             
              <div className="flex mx-5 justify-between">
              <div className="w-36 h-44 mb-4 mt-3 bg-black border rounded-md"></div>
                <div className="font-light">
                  <h2 className="pl-3 text-2xl">Neuromancer</h2>
                  <p>Author:</p>
                  <p className="pl-11">William Gibson</p>
                  <p>Rating:</p>
                  <p className="pl-11">3.90 / 5</p>
                  <p>Current Page:</p>
                  <p className="pl-8 font-medium">160 of 320</p>
                  <button className="border rounded-full bg-element-blue text-white p-2  "> 
                <div className="flex flex-row justify-between">
                    <p className="text-sm">Update Activity</p> </div> </button>
                </div>
              </div>
              </div>
            </div>
            {/* This div contains multiple links to other pages */}
            <div className="text-3xl flex flex-col m-5 mb-20">
              <div>
              <Link to="/profile">
                <div className=" py-5 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
                  <p>My Profile</p>
                  <img src={rightArrow} alt="Right arrow"/>
                </div>
                </Link>
                <Link to="/recommendations">
                <div className=" py-5 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
                  <p>My Book Recommendation</p>
                  <img src={rightArrow} alt="Right arrow"/>
                </div>
                </Link>
                <Link to="/friends">
                <div className=" py-5 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
                  <p>My Friends</p>
                  <img src={rightArrow} alt="Right arrow"/>
                </div>
                </Link>
                <Link to="/settings">
                <div className=" py-5 px-2 border-t border-element-blue border-t-2 flex flex-row justify-between ">
                  <p>Settings</p>
                  <img src={rightArrow} alt="Right arrow"/>
                </div>
                </Link>

                
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center text-3xl text-white ">
          <div className="max-w-md">
            <h1 className="mb-3">
              Hello, {props.token.user.user_metadata.username}
            </h1>
            <p className="mb-5">
              For an optimal mobile experience, please resize your browser
              window to a mobile size screen. This will ensure you have access
              to all of the website's features.
            </p>
          </div>
          <button
            className="border p-2 hover:text-star-blue"
            onClick={handleLogout}
          >
            LOG OUT
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
