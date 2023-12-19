import React, { useState, useEffect } from "react";
import { Box, TextField, Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../../definitions/bookmarkdTheme.jsx";
import ProfileBookSlider from "../ProfileBookSlider/ProfileBookSlider.jsx";

function ProfileCurrentlyReading() {
 



  return (
    <ThemeProvider theme={bookmarkd}>
      <div className="text-white p-[3vw] lg:p-0 md:p-0">
        <Typography variant="h5" className="text-white md:text-xl lg:text-xl">
          Currently Reading
        </Typography>
        <Box className="bg-element-blue rounded-3xl my-3 p-3 md:p-1">
          <Box className="m-3">
            <Typography variant="h6" className="md:text-sm">
              The Wind in the Willows
            </Typography>
    
            <Typography variant="h8" className="md:text-xs">by Kenneth Grahame</Typography>
            <div>
              <ProfileBookSlider className="col-start-2 row-span-1" />
            </div>
          </Box>
          <Box className="m-3">
            <Typography variant="h6" className="md:text-sm">Neuromancer</Typography>

            <Typography variant="h8" className="md:text-xs">by Ameenah Jalil</Typography>
            <div>
              <ProfileBookSlider className="col-start-2 row-span-1" />
            </div>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default ProfileCurrentlyReading;
