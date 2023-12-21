import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { Link } from "react-router-dom";
import defaultProfilePic from "/default-profile-pic.jpg"

function UserHeader({ token }) {

  return (
    <ThemeProvider theme={bookmarkd}>
      <Box
        component="section"
        className=" flex flex-col items-center mb-10 mt-4 md:absolute lg:absolute lg:right-[20vw] md:right-[20vw] md:top-[10vh] md:m-0 md:p-0 lg:mr-4 "
      >
        <Link to="/profile">
          <img
            className="w-24 h-24 bg-white border rounded-full md:m-0 md:w-[15vh] md:h-[15vh] md:mb-[2.5vh] lg:w-[20vh] lg:h-[20vh]"
            src={defaultProfilePic}
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
