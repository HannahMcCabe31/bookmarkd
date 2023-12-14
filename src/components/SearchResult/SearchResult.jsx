import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function SearchResult({ title, cover, id }) {
  // console.log(title);
  const [typographyVariant, setTypographyVariant] = useState("h2");

  function changeTextSize(title) {
    if (title.length > 40) {
      return "p";
    } else if (title.length > 20) {
      return "h3";
    } else {
      return "h2";
    }
  }

  useEffect(() => {
    setTypographyVariant(changeTextSize(title));
  }, [title]);

  return (
    <div className="border border-heart-red my-[2vh] mx-[3vh]">
      <div className="flex justify-center">
        <Box className="grow-1 mr-[4vh] p-auto items-center">
          <img src={cover} className="max-w-[10vh]" />
        </Box>
        <Box className="flex justify-center text-ellipsis grow">
          <Typography className="line-clamp-3 text-3xl">{title}</Typography>
        </Box>
      </div>
    </div>
  );
}

export default SearchResult;
