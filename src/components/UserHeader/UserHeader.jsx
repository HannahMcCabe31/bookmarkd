import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { Link } from "react-router-dom";
import { useContext } from "react";

function UserHeader() {
  const token = useContext(TokenContext);
  return (
    <ThemeProvider theme={bookmarkd}>
      <Box
        component="section"
        className=" flex flex-col items-center mb-10 mt-4 "
      >
        <Link to="/profile">
          <img
            className="w-24 h-24 bg-white border rounded-full"
            src={profilePic}
          />
        </Link>
        <Typography variant="h2">
          {token.user.user_metadata.username}
        </Typography>
        <Box>
          <Typography variant="h6">{token.user.email}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserHeader;
