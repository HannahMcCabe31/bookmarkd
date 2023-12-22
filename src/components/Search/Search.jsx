import { Box, TextField } from "@mui/material";
import { SearchPageBar } from "../../definitions/CustomComponents";
import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import { useState, useEffect } from "react";

function Search() {
  const [searchResults, setSearchResults] = useState();
  const [searchQuery, setSearchQuery] = useState(""); // Actual query sent in fetch request
  const [currentSearchValue, setCurrentSearchValue] = useState(""); // Live-updated search terms ready to be passed to query

  function handleUpdateQuery(e) {
    setCurrentSearchValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(currentSearchValue);
  }

  // Probably need to just run a search on the query again instead of trying to store the results

  /*         // Update session storage when searchQuery changes
        useEffect(() => {
            console.log(`Saving search results`)
            sessionStorage.setItem("searchResults", JSON.stringify(searchResults));
        }, [searchResults]);

    useEffect(() => {
        console.log(`Getting saved results from storage`)
        const savedResults = sessionStorage.getItem("searchResults");
        console.log(savedResults)

        if (savedResults) {
            console.log(JSON.parse(savedResults))
            setSearchResults(JSON.parse(savedResults));
        }
    }, []); */

  useEffect(() => {
    async function fetchSearchResults() {
      const responseRequest = await fetch(
        `https://bookmarkd-server.onrender.com/api/search?search=${searchQuery}`,
        {
          method: `GET`,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (responseRequest.ok) {
        const responseData = await responseRequest.json();
        return responseData.payload;
      } else if (!responseRequest.ok) {
        console.error(`Status: ${responseRequest.status}`);
        console.error(`Text: ${await responseRequest.text()}`);
        console.error("Data not available");
        return;
      }
    }

    fetchSearchResults()
      .then((payload) => {
        setSearchResults(payload);
      })
      .catch((error) => {
        console.error(`Error fetching: ${error}`);
      });
  }, [searchQuery]);

  return (
    <div className=" md:max-w-[85%]">
      <div className="bg-search h-screen flex flex-col md:items-center sm:items-center text-white p-[3vw]">
        <Box className="flex text-center items-center md:hidden lg:hidden sm:hidden">
          <Link to="/dashboard">
            <img src={backArrow} alt="backArrow" className="w-[8vw] h-[8vw]" />
          </Link>
        </Box>
        <Box className="flex flex-col items-center">
          <Typography variant="h1" className="mt-[5vw] md:text-6xl">
            Search
          </Typography>

          <form className="text-center" onSubmit={handleSearch}>
            <SearchPageBar
              onChange={handleUpdateQuery}
              className=" bg-element-blue border-element-blue rounded-[5vw] m-auto mt-[10vw]  w-[80vw] md:mt-[5vh] md:w-[80vh] md:p-[0.2rem] md:mb-[5vh]"
              placeholder="Search for books, users, authors..."
              inputProps={{
                "aria-label": "search",
                style: { color: "white" },
              }}
              color="starBlue"
              variant="outlined"
            />
          </form>

          <Box>
            <div className="md:ml-[12vh]">
              <SearchContainer
                searchResults={searchResults}
                searchQuery={searchQuery}
              />
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Search;
