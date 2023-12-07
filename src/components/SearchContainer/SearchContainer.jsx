import React from "react";
import { Box } from "@mui/material";
import SearchResult from "../SearchResult/SearchResult";

function SearchContainer() {
  return (
    <div>
      <Box>
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </Box>
    </div>
  );
}

export default SearchContainer;
