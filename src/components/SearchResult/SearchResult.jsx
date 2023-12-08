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
    <div className="flex flex-row gap-10 m-[10vw] max-h-[50vw] pb-[5vw] justify-center border-b border-element-blue ">
      <Box className=" shadow-element-shadow w-[20vw] h-[25vw] overflow-hidden min-w-[20vw]">
        <img src={cover} className=" m-auto p-auto top-[-25%] object-cover" />
      </Box>
      <Box className="flex m-auto text-ellipsis">
        <Typography className="line-clamp-3" variant={typographyVariant}>
          {title}
        </Typography>
      </Box>
    </div>
  );
}

export default SearchResult;
