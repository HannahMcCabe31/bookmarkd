import React, { useState, useEffect } from "react";
import { Box, TextField, Slider } from "@mui/material"
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";



function ProfileCurrentlyReading(){
const [bookProgress, setBookProgress]= useState({
title:"", author:"", totalPages:288, currentPage:144
})

//AFTER BREAK WORK ON THIS 
// function handlePageChange(e){
// (const currentPage, Value)
// }

  return(
    <ThemeProvider theme={bookmarkd}>
    <Box className="bg-element-blue">
      <Typography variant="h3">The Wind in the Willows</Typography>
      
      <Typography variant="h4">by Kenneth Grahame</Typography>
      <Box>
      <Typography variant="h4">Progress:</Typography>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <Typography>46%</Typography>
      </Box>
      <Typography>Page <TextField></TextField> of 288</Typography>
      <Typography variant="h3">Neuromancer</Typography>
      <Typography variant="h4">by Ameenah Jalil</Typography>
      
      <Box>
      <Typography variant="h4">Progress:</Typography>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <Typography>46%</Typography>
      </Box>
      <Typography>Page <TextField></TextField> of 288</Typography>

    </Box>
    </ThemeProvider>
  )  
}

export default ProfileCurrentlyReading