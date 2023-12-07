import React from "react";
import { Box } from "@mui/material";
import SearchResult from "../SearchResult/SearchResult";

function SearchContainer({ data }) {
  // console.log(data);
  return (
    <div>
      <Box>
        <SearchResult data={data} />
        <SearchResult data={data} />
        <SearchResult data={data} />
      </Box>
    </div>
  );
}

export default SearchContainer;
