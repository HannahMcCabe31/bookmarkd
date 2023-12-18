import React from "react";
import { Box } from "@mui/material";
import SearchResult from "../SearchResult/SearchResult";

function SearchContainer({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Box>
            <SearchResult key={item.id} title={item.title} cover={item.cover} />
          </Box>
        );
      })}
    </div>
  );
}

export default SearchContainer;
