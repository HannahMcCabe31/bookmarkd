import React from "react";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function ProfileProgress({ isOpen, onClose, onUpdateProgress, currentPageNumber }) {
  const [pageNumber, setPageNumber] = useState("");
  const [progressModalOpen, setProgressModalOpen] = useState(false);
  const maxPages = 320;

  function handleInputChange(e) {
    setPageNumber(e.target.value);
  }

  function handleProgressUpdate() {
    onUpdateProgress(pageNumber);
    onClose();
  }

  return (
    <Box className={`modal ${isOpen ? `block` : `hidden`} absolute top-[50%] left-[50%]  bg-element-blue rounded p-6 content-center m-auto`}>
      <Box className="">
        <label>
        <Typography>
          New Page Number:
          <input className="text-black rounded ml-5"
            type="text"
            value={pageNumber}
            onChange={handleInputChange}
          ></input>
        </Typography></label>
        <Box className="mx-auto p-auto text-center mt-3">
        <Button   onClick={handleProgressUpdate} className="mx-2">Update Progress</Button>
        <Button onClick={onClose} className="mx-2">Cancel</Button>
      </Box></Box>
    </Box>
  );
}

export default ProfileProgress;
