import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ProfileStatistics() {

    return(
        <ThemeProvider theme={bookmarkd}>
        <Typography variant="h5" className="text-white">
                            Your Statistics</Typography>
        <Box className="bg-element-blue">
<Typography variant="h4">Total Books Read: 24</Typography>
{/* needs icons */}
<Typography variant="h4">Total Pages Read: 20,000</Typography>
{/* needs isons */}
<Typography variant="h4">Reading Streak: 24</Typography>
{/* needs icons */}
</Box>
</ThemeProvider>


)}


export default ProfileStatistics;