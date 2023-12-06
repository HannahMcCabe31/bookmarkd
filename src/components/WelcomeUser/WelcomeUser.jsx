import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import { ThemeProvider } from "@mui/material/styles"
import { bookmarkd } from "../../definitions/bookmarkdTheme"

function WelcomeUser(props) {

    return (
      <ThemeProvider theme={bookmarkd}>
        <Box component="section" className=" flex items-center space-x-6 mb-10 mt-4 ">
        <Box className="w-24 h-24 bg-white border rounded-full"/>
        <Typography variant="h2">
          Hello, {props.token.user.user_metadata.username}!
        </Typography>
      </Box>
      </ThemeProvider>
    )
}

export default WelcomeUser