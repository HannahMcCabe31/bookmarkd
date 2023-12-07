import React, { useState, useEffect } from "react";
import { Box, TextField, Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import BookSlider from "../BookSlider/BookSlider.jsx"

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
      <Typography variant="h5" className="text-white">
        Currently Reading
      </Typography>
      <Box className="bg-element-blue rounded-3xl p-3 my-3">
        <Box className="m-3">
          <Typography variant="h6">The Wind in the Willows</Typography>

          <Typography variant="h8">by Kenneth Grahame</Typography>
          <Box className="grid  grid-cols-3 grid-rows-1 grid-flow-row-dense ">
            <Typography variant="h7" className="col-start-1">
              Progress:
            </Typography>
            <BookSlider
              className="col-start-2 row-span-1"
              
            />
            {/* <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              className="text-background-blue"
            /> */}
            <Typography variant="h8" className="col-start-3">
              46%
            </Typography>
          </Box>
          <Box className="text-right">
            <Typography variant="h8">
              Page{" "}
              <TextField
                size="small"
                className="w-1/4 bg-white rounded-xl"
              ></TextField>{" "}
              of 288
            </Typography>
          </Box>
          <Typography variant="h6">Neuromancer</Typography>
          <Typography variant="subtitle">by Ameenah Jalil</Typography>
          <Box className="flex space-x-2 items-center">
            <Typography variant="h7">Progress:</Typography>
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              className="text-background-blue"
            />
            <Typography variant="h8">46%</Typography>
          </Box>
          <Box className="text-right">
            <Typography variant="h8">
              Page{" "}
              <TextField
                size="small"
                className="w-1/4 bg-white rounded-xl"
                name="Current Page"
              >
                140
              </TextField>{" "}
              of 288
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ProfileCurrentlyReading;
