import React, { useState, useEffect } from "react";
import { Box, TextField, Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import ProfileBookSlider from "../ProfileBookSlider/ProfileBookSlider.jsx";

function ProfileCurrentlyReading() {
 



  return (
    <ThemeProvider theme={bookmarkd}>
      <div className="text-white p-[3vw]">
        <Typography variant="h5" className="text-white">
          Currently Reading
        </Typography>
        <Box className="bg-element-blue rounded-3xl my-3 p-3">
          <Box className="mb-3 m-3">
            <Typography variant="h6">The Wind in the Willows</Typography>

            <Typography variant="h8">by Kenneth Grahame</Typography>
            <div className="max-w-[45vw]">
              <ProfileBookSlider className="col-start-2 row-span-1" />
            </div>
          </Box>
          <Box className="m-3">
            <Typography variant="h6">Neuromancer</Typography>

            <Typography variant="h8">by Ameenah Jalil</Typography>
              <div className="max-w-[45vw]">
                <ProfileBookSlider className="col-start-2 row-span-1" />
              </div>
            </Box>
          </Box>
      </div>
    </ThemeProvider>
  );
}

export default ProfileCurrentlyReading;
