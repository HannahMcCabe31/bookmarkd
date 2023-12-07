import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function SearchResult({ data }) {
  console.log(data[0]["title"]);
  const [typographyVariant, setTypographyVariant] = useState("h2");

  function changeTextSize(data) {
    if (data[0]["title"] > 40) {
      return "p";
    } else if (data[0]["title"] > 20) {
      return "h3";
    } else {
      return "h2";
    }
  }

  useEffect(() => {
    setTypographyVariant(changeTextSize(data));
  }, [data]);

  return (
    <div className="flex flex-row gap-10 m-[10vw] max-h-[50vw] pb-[5vw] justify-center border-b border-element-blue ">
      <Box className="border w-[20vw] h-[25vw] overflow-hidden min-w-[20vw]">
        <img
          src={data[0]["cover"]}
          className=" m-auto p-auto top-[-25%] object-cover"
        />
      </Box>
      <Box className="flex m-auto text-ellipsis">
        <Typography className="line-clamp-3" variant={typographyVariant}>
          {data[0]["title"]}
        </Typography>
      </Box>
    </div>
  );
}

export default SearchResult;
