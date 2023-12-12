import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext } from "react"
import { ProfilePic } from "../App/App.jsx";

import { Link } from "react-router-dom";

function WelcomeUser(props) {

const profilePic = useContext(ProfilePic)

  return (
    <Box
      component="section"
      className=" flex items-center space-x-6 mb-10 mt-4 "
    >
      <Link to="/profile">
        <img
          className="w-24 h-24 bg-white border rounded-full"
          src={profilePic}
        />
      </Link>
      <Typography variant="h2">
        Hello, {props.token.user.user_metadata.username}!
      </Typography>
    </Box>
  );
}

export default WelcomeUser;
