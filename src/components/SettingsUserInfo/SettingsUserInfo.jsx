import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ProfileUserInfo() {
    return (
        <ThemeProvider theme={bookmarkd}>
        <Box>
        <Typography variant="h2">Update Profile Information</Typography>
            <Box>
                <TextField>Username</TextField>
                <TextField>Email</TextField>
                <TextField>Password</TextField>
            </Box>
            <Box>
                <Typography variant="h2">Update Profile Picture</Typography>
                <Button>Upload</Button>
            </Box>
            <Button>Update</Button>
            </Box>
        </ThemeProvider>
    );
}

export default ProfileUserInfo;