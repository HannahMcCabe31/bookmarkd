import flame from "../../assets/Flame.svg";
import PagesRead from "../../assets/PagesRead.svg";
import BooksRead from "../../assets/BooksRead.svg";
import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ProfileStatistics() {
  return (
    <ThemeProvider theme={bookmarkd}>
      <div className="p-3">
        <Typography variant="h5" className="text-white">
          Your Statistics
        </Typography>
        <Box className="bg-element-blue rounded-3xl grid grid-cols-3 mt-3 p-3">
          <div className="m-3">
            <div>
              <img src={BooksRead} alt="Books read" className="ml-5 mb-5" />
            </div>
            <div className="">
              <Typography variant="h4">
                Total Books Read: <Typography variant="stats">24</Typography>
              </Typography>
            </div>
          </div>
          <div className="m-2">
            <img src={PagesRead} alt="Pages read" className="ml-5 mb-3" />
            <Typography variant="h4">
              Total Pages Read: <Typography variant="stats">20k</Typography>
            </Typography>
          </div>
          <div className="mx-3 mt-2">
            <img src={flame} alt="Flame" className="ml-5 mb-3" />
            <Typography variant="h4">
              Reading Streak: <Typography variant="stats">24</Typography>
            </Typography>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default ProfileStatistics;
