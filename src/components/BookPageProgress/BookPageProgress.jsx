import React from "react";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function BookProgress({
  isOpen,
  onClose,
  onUpdateProgress,
  currentPageNumber,
  bookPageData,
}) {
  const [pageNumber, setPageNumber] = useState("");
  const maxPages = bookPageData.number_of_pages;

  function handleInputChange(e) {
    setPageNumber(()=> {
      if(e.target.value > maxPages) {
        return maxPages
      } else if(e.target.value < 0) {
        return 0
      } else {
        return e.target.value
      }
      
    });
   
  }

  function handleProgressUpdate() {
    onUpdateProgress(pageNumber);
    onClose();
  }

  console.log("progress modal open in bookprogress: ", isOpen);
  return (
    <Box
      className={`modal ${
        isOpen ? `block` : `hidden`
      }  bg-element-blue rounded-lg p-6 content-center m-auto z-[1400]`}
    >
      <Box className="">
        <label>
          <Typography>
            Page Number:
            <input
              className="text-black rounded ml-5"
              type="number"
              value={pageNumber}
              onChange={handleInputChange}
              placeholder={currentPageNumber}
              max={maxPages}
            ></input>
          </Typography>
        </label>
        <Box className="mx-auto p-auto text-center mt-3">
          <Button onClick={handleProgressUpdate} className="mx-2 text-white">
            Update Progress
          </Button>
          <Button onClick={onClose} className="mx-2 text-white">
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
    }

export default BookProgress;
