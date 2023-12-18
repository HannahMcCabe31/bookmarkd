import React from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";

function ProfileProgress({ isOpen, onClose, onUpdateProgress }) {
  const [pageNumber, setPageNumber] = useState(160);
  const maxPages = 320;

  function handleInputChange(e) {
    setPageNumber(e.target.value);
  }

  function handleProgressUpdate() {
    onUpdateProgress(pageNumber);
    onClose();
  }

  return (
    <Box className={"modal ${isOpen ? `block` : `hidden`}"}>
      <Box>
        <label>
          New Page Number:
          <input
            type="text"
            value={pageNumber}
            onChange={handleInputChange}
          ></input>
        </label>
        <Button onClick={handleProgressUpdate}>Update Progress</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Box>
    </Box>
  );
}
