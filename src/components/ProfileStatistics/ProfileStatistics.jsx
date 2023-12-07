import flame from "../../assets/Flame.svg";

import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ProfileStatistics() {

    return(
        <ThemeProvider theme={bookmarkd}>
            <div className="p-3">
        <Typography variant="h5" className="text-white">
                            Your Statistics</Typography>
        <Box className="bg-element-blue rounded-3xl grid grid-cols-3 my-3 p-3">

<div>     
<Typography variant="h4">Total Books Read: 24</Typography>
{/* needs icons */}
</div> 
<div>
<Typography variant="h4">Total Pages Read: 20,000</Typography>
{/* needs isons */}
</div>
<div>
<img src={flame} alt="Flame" />
<Typography variant="h4">Reading Streak: 24</Typography>
{/* needs icons */}

</div>
</Box>
</div>
</ThemeProvider>


)}


export default ProfileStatistics;