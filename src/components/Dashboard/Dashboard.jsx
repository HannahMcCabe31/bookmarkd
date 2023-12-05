import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard(props) {
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      const screenSize = window.innerWidth;
      if (screenSize < 450) {
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
        <h1>Mobile</h1>
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
