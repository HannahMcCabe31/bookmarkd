import { useContext } from "react";
import { TokenContext } from "../App/App";
import { Link } from "react-router-dom";

function DesktopNavbar() {
  const token = useContext(TokenContext);

  return (
    <>
      {token ? (
        <nav className="bg-gradient-to-b from-desktop-navbar to-background-blue p-2 pl-10 pr-10 fixed left-0 w-1/8 flex flex-col justify-between items-center z-[1500] h-full">
          <Link to="/profile" className="text-button-beige">
            <img className="max-h-9" src="/img/profile_icon.png" />
          </Link>
          <Link to="/dashboard" className="text-button-beige">
            <img className="max-h-9" src="/img/dashboard_icon.png" />
          </Link>
          <Link to="/search" className="text-button-beige">
            <img className="max-h-9" src="/img/search_icon.png" />
          </Link>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}

export default DesktopNavbar;


// md:flex md:flex-col md:left-0 md:h-full md:w-1/6 md:bg-gradient-to-b md:from-desktop-navbar md:to-background-blue