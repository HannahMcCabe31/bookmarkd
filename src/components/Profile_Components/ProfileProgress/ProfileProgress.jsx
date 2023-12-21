import React from "react";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function ProfileProgress({
  isOpen,
  onClose,
  onUpdateProgress,
  currentPageNumber,
}) {
  const [pageNumber, setPageNumber] = useState("");
  const [progressModalOpen, setProgressModalOpen] = useState(false);
  const maxPages = 320;

  function handleInputChange(e) {
    setPageNumber(() => {
      if (e.target.value > maxPages) {
        return maxPages;
      } else if (e.target.value < 0) {
        return 0;
      } else {
        return e.target.value;
      }
    });
  }

  function handleProgressUpdate() {
    onUpdateProgress(pageNumber);
    onClose();
  }

  return (
    <Box
      className={`modal ${
        isOpen ? `block` : `hidden`
      } absolute lg:top-[50%] lg:right-[30%] md:right-[20%] bg-element-blue rounded-lg p-6 content-center m-auto z-[1400]`}
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
            ></input>
          </Typography>
        </label>
        <Box className="mx-auto p-auto text-center mt-3">
          <Button onClick={handleProgressUpdate} className="mx-2">
            Update Progress
          </Button>
          <Button onClick={onClose} className="mx-2">
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileProgress;
