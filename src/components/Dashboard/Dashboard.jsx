import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Dashboard(props) {
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(true
    );
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
      <h1 className="text-white">Dashboard</h1>
      {isMobile ? (
        <>
        <h1>Mobile</h1>
        <div className="text-white">
            {/* This div contains the header (profile picture and username) */}
            <div>
                <div className="w-10 h-10 bg-white border rounded-full"></div>
            <h1 className="mb-3 text-3xl">
              Hello, {props.token.user.user_metadata.username}!
            </h1>  

            </div>
            {/* This div conatins the my current reads */}
            <div className="bg-white text-black">
                <div>
                    <button>My Current Read - </button>

                </div>
                <div>
                    <div>Image</div>
                    <div>
                        <h2>Neuromancer</h2>
                        <p>Author:</p>
                        <p>William Gibson</p>
                        <p>Rating:</p>
                        <p>3.90/5</p>
                        <p>Current Page:</p>
                        <p>160 of 320</p>
                        <button>Update Activity</button>
                    </div>
                </div>


            </div>
            {/* This div contains multiple links to other pages */}
            <div className="text-3xl flex flex-col m-5">
                <div>
                    <div className=" border-t flex flex-row justify-between "><p>My Profile</p><p>-</p></div>
                    <Link to="/recommendations">
                    <div className="border-t flex flex-row justify-between "><p>My Book Reccommendation</p><p>-</p></div>
                        </Link> 
                    <div className="border-t flex flex-row justify-between "><p>My Friends</p><p>-</p></div>
                    <div className="border-t flex flex-row justify-between "><p>Settings</p><p>-</p></div>

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
