import { ProfilePic } from "../App/App.jsx";
import { TokenContext } from "../App/App.jsx";
import { SetTokenContext } from "../App/App.jsx";
import { useContext } from "react";

function MobileResizeWarning() {
  const profilePic = useContext(ProfilePic);
  const token = useContext(TokenContext);
  const setToken = useContext(SetTokenContext);

  function handleLogout() {
    setToken(false);
    console.log("helo");
    sessionStorage.removeItem("token");
    // props.navigate("/");
  }

  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center text-3xl text-white">
        <img
          src={profilePic}
          alt="profile picture"
          className="w-40 h-40 mb-[2rem] bg-white border-cool-gray rounded-full"
        />
        <div></div>
        <div className="max-w-md">
          <h1 className="mb-[1.5rem]">
            Hello, {token.user.user_metadata.username}
          </h1>
          <p className="mb-[5vh]">
            For an optimal mobile experience, please resize your browser window
            to a mobile size screen. This will ensure you have access to all
            bookmarkd's features.
          </p>
        </div>
        <button
          className="border p-2 hover:text-star-blue"
          onClick={handleLogout}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default MobileResizeWarning;
