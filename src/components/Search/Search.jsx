import { Box, Button, Select, MenuItem, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import testData from "./testData.js";
import { useState } from "react";

function Search() {
  const [searchResults, setSearchResults] = useState(testData);

  return (
    <ThemeProvider theme={bookmarkd}>
      <div className="bg-search h-screen flex flex-col text-white p-[3vw]">
        <Box className="flex text-center items-center">
          <Link to="/dashboard">
            <img src={backArrow} alt="backArrow" className="w-[8vw] h-[8vw]" />
          </Link>

          <Typography variant="h1" className="mt-[5vw] ml-[25%]">
            Search
          </Typography>
        </Box>

        <Box className="text-center">
          <TextField
            className="border bg-element-blue rounded-[15vw] m-0 mt-[10vw] p-0 w-4/5"
            placeholder="Search for books, users, authors..."
            inputProps={{ "aria-label": "search", style: { color: "white" } }}
            color="starBlue"
            variant="outlined"
          />
        </Box>

        <Box className="text-center">
          <SearchContainer data={searchResults} />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Search;
