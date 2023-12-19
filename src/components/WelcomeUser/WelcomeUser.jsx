import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../App/App.jsx";
import defaultProfilePic from "/default-profile-pic.jpg"

function WelcomeUser() {
  const token = useContext(TokenContext);

  return (
    <Box
      component="section"
      className=" flex items-center space-x-6 mb-10 mt-4 md:items-center md:justify-center"
    >
      <Link to="/profile">
        <img
          className="w-24 h-24 bg-white border rounded-full"
          src={defaultProfilePic}
        />
      </Link>
      <Typography variant="h2">
        Hello, {token.user.user_metadata.username}!
      </Typography>
    </Box>
  );
}

export default WelcomeUser;
