import React, { useState, useEffect } from "react";
import { Box, TextField, Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import ProfileBookSlider from "../ProfileBookSlider/ProfileBookSlider.jsx"

function ProfileCurrentlyReading() {
  const [bookProgress, setBookProgress] = useState({
    title: "",
    author: "",
    totalPages: 288,
    currentPage: 144,
  });

  //AFTER BREAK WORK ON THIS
  // function handlePageChange(e){
  // (const currentPage, Value)
  // }

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
          <Box className="grid  grid-cols-[1fr, 1fr, 1fr] grid-rows-1 grid-flow-row-dense items-center">
            {/* <Typography variant="h7" className="col-start-1">
              Progress:
            </Typography> */}
            <div className="max-w-[45vw]">
            <ProfileBookSlider
              className="col-start-2 row-span-1"
            /></div>
        

          </Box>
          </Box>
         <Box className="m-3">
          <Typography variant="h6">Neuromancer</Typography>

          <Typography variant="h8">by Ameenah Jalil</Typography>
          <Box className="grid  grid-cols-[1fr, 1fr, 1fr] grid-rows-1 grid-flow-row-dense items-center">

            <div className="max-w-[45vw]">
            <ProfileBookSlider
              className="col-start-2 row-span-1"
            /></div>
        
          </Box>
          </Box>
          </Box>
        

      </div>
    </ThemeProvider>
  
  );
}

export default ProfileCurrentlyReading;
