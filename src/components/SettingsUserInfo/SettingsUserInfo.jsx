import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ProfileUserInfo() {
    return (
        <ThemeProvider theme={bookmarkd}>
        <Box>
        <Typography className="border-b"variant="h2">Update Profile Information</Typography>
            <Box>
                <TextField
                 margin="normal"
                 required
                 fullWidth
                 id="userName"
                 label="Username"
                 name="userName"
                //  autoComplete="userName"
                //  autoFocus
                 className="bg-input-gray rounded-3xl">

                </TextField>
                <TextField
            //   onChange={handleEmailAddressChange}
              margin="normal"
              required
              fullWidth
              id="emailAddress"
              label="Email Address"
              name="emailAddress"
            //   autoComplete="emailAddress"
            //   autoFocus
              className="bg-input-gray rounded-3xl"
            />
            <TextField
            //   onChange={handlePasswordChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            //   autoComplete="password"
              className="bg-input-gray rounded-3xl"
            />
            </Box>
            <Box className="flex flex-row justify-between">
                <Typography variant="h4">Update Profile Picture</Typography>
                <Button className= "bg-white text-lg text-black font-semi-bold py-1 px-10 rounded-md">Upload</Button>
            </Box>
            <Box className="flex flex-col items-center">
            <Button 
            // onClick={handleLoginSubmit}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 2 }}
                className="bg-[#06B502] w-1/3 font-bold">UPDATE</Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ProfileUserInfo;