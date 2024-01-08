import { Box, TextField } from "@mui/material";
import { SearchPageBar } from "../../definitions/CustomComponents";
import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import { useState, useEffect } from "react";

function Search() {
    window.scrollTo(0, 0);
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
        <div className=" md:max-w-[640px] m-auto">
            <div className="bg-search flex flex-col md:items-center sm:items-center text-white">
                <Box className="flex text-center items-center md:hidden lg:hidden sm:hidden">
                    <Link to="/dashboard">
                        <img
                            src={backArrow}
                            alt="backArrow"
                            className="w-[8vw] h-[8vw] mt-5 ml-5"
                        />
                    </Link>
                </Box>
                <Box className="flex max-w-[100%] flex-col items-center md:mt-[10%]">
                    <Typography variant="h1" className="md:text-6xl">
                        Search
                    </Typography>
                    <div className="w-[620px]">
                        <form
                            className="text-center md:w-[620px]"
                            onSubmit={handleSearch}
                        >
                            <SearchPageBar
                                onChange={handleUpdateQuery}
                                className=" bg-element-blue border-element-blue rounded-[5vw] m-auto mt-[10vw] md:mt-[5%] md:w-[620px] w-[50%]"
                                placeholder="Search for books, users, authors..."
                                inputProps={{
                                    "aria-label": "search",
                                    style: { color: "white" },
                                }}
                                color="starBlue"
                                variant="outlined"
                            />
                        </form>
                    </div>
                    <Box>
                        <div className="">
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
