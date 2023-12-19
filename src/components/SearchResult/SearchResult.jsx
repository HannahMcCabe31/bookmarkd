import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";

function SearchResult({ title, image, book_id }) {
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
    <Link to={`/book-page/${book_id}`}>
    <div className=" my-[2vh] mx-[3vh]  md:bg-element-blue md:max-w-[80%] rounded-xl">
      <div className="flex justify-center md:py-5 md:px-12 ">
        <Box className="grow-1 mr-[4vh]">
          <img src={`https://bookmarkd-server.onrender.com${image}`} className="max-w-[10vh]" />
        </Box>
        <Box className="flex justify-start  grow  items-center ">
          <Typography className="line-clamp-3  text-ellipsis text-2xl md:mx-[2vh] md:max-w-[20vh]">
            {title}
          </Typography>
        </Box>

          <img
            src={rightArrow}
            alt="rightArrow"
            className="w-8 h-8 hidden md:flex font-bold"
          />

      </div>
    </div>
    </Link>
  );
}

export default SearchResult;
