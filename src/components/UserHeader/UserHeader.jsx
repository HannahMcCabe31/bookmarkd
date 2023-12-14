import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TokenContext, ProfilePic } from "../App/App.jsx";

function UserHeader() {
  const profilePic = useContext(ProfilePic);
  const token = useContext(TokenContext);
  return (
    <ThemeProvider theme={bookmarkd}>
      <Box
        component="section"
        className=" flex flex-col items-center mb-10 mt-4  md:absolute md:top-[10vh] md:right-[18%] md:m-0 md:p-0 "
      >
        <Link to="/profile">
          <img
            className="w-24 h-24 bg-white border rounded-full md:m-0 md:w-[25vh] md:h-[25vh] md:mb-[2.5vh]"
            src={profilePic}
          />
        </Link>
        <Typography variant="h2" className="md:text-[5vh] md:mb-[0.5vh]">
          {token.user.user_metadata.username}
        </Typography>
        <Box>
          <Typography variant="h6" className="md:text-[2vh]">
            {token.user.email}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserHeader;
