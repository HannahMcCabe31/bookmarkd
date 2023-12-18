import { Box, Button, Select, MenuItem, TextField } from "@mui/material";

import { SearchBar } from "../../definitions/CustomComponents";

import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import testData from "./testData.js";
import { useState, useEffect } from "react";

function Search() {
  const [searchResults, setSearchResults] = useState(testData);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSearchValue, setCurrentSearchValue] = useState("");

  function handleUpdateQuery(e) {
    setCurrentSearchValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(currentSearchValue);
  }

  useEffect(() => {
    const results = testData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    console.log(searchResults);
  }, [searchQuery]);

  return (
    <div className=" md:max-w-[85%] md:pl-[20%]">
      <div className="bg-search h-screen flex flex-col text-white p-[3vw]">
        <Box className="flex text-center items-center md:hidden">
          <Link to="/dashboard">
            <img src={backArrow} alt="backArrow" className="w-[8vw] h-[8vw]" />
          </Link>

          <Typography variant="h1" className="mt-[5vw] ml-[25%]">
            Search
          </Typography>
        </Box>

        <form className="text-center" onSubmit={handleSearch}>
          <TextField
            onChange={handleUpdateQuery}
            className="border bg-element-blue rounded-[15vw] m-0 mt-[10vw] p-0 w-4/5 md:mt-[5vh] md:w-[80vh] md:rounded-[5vw] md:p-[0.2rem] md:mb-[5vh]"
            placeholder="Search for books, users, authors..."
            inputProps={{ "aria-label": "search", style: { color: "white" } }}
            color="starBlue"
            variant="outlined"
          />
        </form>

        <Box>
          <div className="md:ml-[12vh]">
            <SearchContainer data={searchResults} />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Search;
