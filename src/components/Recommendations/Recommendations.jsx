import React, { useState } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";
import CircularProgress from "@mui/material/CircularProgress";

import { useContext, useEffect } from "react";
import { data } from "autoprefixer";

function Recommendations() {
    window.scrollTo(0, 0); // Reset page to top when page is first loaded

    const [searchType, setSearchType] = useState("title");
    const [searchInput, setSearchInput] = useState("");
    const [recommendations, setRecommendations] = useState();

    const [loading, setLoading] = useState(false);

    function handleSearchTypeChange(e) {
        setSearchType(e.target.value);
    }

    function handleSearchInputChange(e) {
        setSearchInput(e.target.value);
    }
    // Do i need a function to handle search submit?

    function saveRecommendations() {
        setRecommendations([]);
    }
    useEffect(() => {}, []);
    async function fetchAIRec(e) {
        e.preventDefault();
        setLoading(true);
        // fetch data from server
        const response = await fetch(
            "https://bookmarkd-server.onrender.com/api/ai_api",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: searchInput,
                    searchType: searchType,
                }),
            }
        );

        if (response.ok) {
            const data = await response.json();
            // setRecommendations(data.payload.content);
            setRecommendations(extractBooks(data.payload.content));
        } else {
            console.log("error");
        }

        setLoading(false);
    }

    function extractBooks(text) {
        const regex = /(\d+)\.\s+\"(.*?)\" by (.*?)$/gm; // Regex pattern to match the book titles and authors

        let matches;
        const books = [];

        while ((matches = regex.exec(text)) !== null) {
            const [, number, title, author] = matches;
            books.push({ number: parseInt(number), title, author });
        }

        // Storing book titles and authors in separate variables
        let book1, book2, book3;
        if (books.length >= 3) {
            [book1, book2, book3] = books;
        }

        return books;
    }

    return (
        <div className="md:m-auto md:max-w-[640px]">
            <div>
                <Link to="/dashboard" className="md:hidden">
                    <img
                        src={backArrow}
                        alt="backArrow"
                        className="w-8 h-8 ml-10 mt-10"
                    />
                </Link>
                <div className="bg-background-blue text-white">
                    <Box
                        component="section"
                        sx={{ p: 2, fontFamily: "League Spartan" }}
                    >
                        {" "}
                        <Box className="flex py-8 flex-col items-start">
                            <Typography variant="h1" className="md:text-[7vh]">
                                Recommendations
                            </Typography>
                            <Typography
                                variant="p"
                                className="md:text-[3vh] italic my-6"
                            >
                                "The sky above the port was the colour of
                                television, tuned to a dead channel." - William
                                Gibson, Neuromancer
                            </Typography>
                            <Typography
                                variant="p"
                                className="md:text-[3vh] md:mb-5 mb-5 "
                            >
                                We use AI to generate book recommendations based
                                on your search.
                            </Typography>

                            <Typography variant="p" className="md:text-[3.5vh]">
                                Choose a category from the dropdown menu and
                                enter your search below.
                            </Typography>
                        </Box>
                        <Box className="">
                            <div className="">
                                <Box className="p-4 mb-8 rounded-2xl bg-element-blue md:min-w-[30vw]">
                                    <div>
                                        <Typography
                                            variant="h3"
                                            className="md:text-2xl mb-2 lg:text-xl"
                                        >
                                            Get recommendation by:
                                        </Typography>
                                    </div>
                                    <Select
                                        id="searchType"
                                        value={searchType}
                                        onChange={handleSearchTypeChange}
                                        className="bg-white rounded-lg min-w-[99%]"
                                    >
                                        <MenuItem value="title">Title</MenuItem>
                                        <MenuItem value="author">
                                            Author
                                        </MenuItem>
                                        <MenuItem value="genre">Genre</MenuItem>
                                    </Select>
                                </Box>

                                <Box
                                    // // className="md:grow-1 bg-element-blue "
                                    className="p-4 mb-8 rounded-2xl bg-element-blue md:text-2xl flex justify-between items-center"
                                >
                                    <SearchBar
                                        // className=""
                                        id="search-bar"
                                        label={`Search by ${searchType}`}
                                        variant="standard"
                                        inputProps={{
                                            style: { color: "white" },
                                        }}
                                        onChange={handleSearchInputChange}
                                    ></SearchBar>
                                    <button
                                        className="bg-background-blue md:text-base lg:text-base text-white rounded-2xl px-5 pt-2 pb-1 "
                                        onClick={fetchAIRec}
                                    >
                                        Submit
                                    </button>
                                </Box>
                                <div className="flex justify-center"></div>
                            </div>
                            <Box
                                component="section"
                                className="p-4 pb-8  rounded-2xl bg-element-blue md:w-auto"
                            >
                                <Box className="flex justify-between">
                                    <Typography
                                        variant="h4"
                                        className="md:text-2xl lg:text-2xl"
                                    >
                                        We recommend:
                                    </Typography>
                                    <Typography
                                        variant="p"
                                        className="mt-[-0.15rem] font-medium md:text-xl"
                                    >
                                        OpenAi.
                                    </Typography>
                                </Box>
                                {loading && (
                                    <CircularProgress className="hidden={!loading}" />
                                )}
                                {recommendations &&
                                    recommendations.map((item, val) => {
                                        return (
                                            <div
                                                className="m-5"
                                                key={val}
                                                hidden={loading}
                                            >
                                                <p className="md:text-2xl md:py-[0.4vh]">
                                                    {item.number}.{" "}
                                                    <span className="italic md:m-2 md:text-2xl text-xl m-1">
                                                        "{item.title}"
                                                    </span>
                                                    <br /> by{" "}
                                                    <span className="">
                                                        {item.author}
                                                    </span>
                                                </p>
                                            </div>
                                        );
                                    })}{" "}
                                <br />
                            </Box>
                        </Box>
                        {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              > */}
                        {/* <Button
                  variant="contained"
                  sx={{
                    borderRadius: 6,
                    marginLeft: 4,
                    fontFamily: "League Spartan",
                  }}
                  className="md:text-[2vh] bg-element-blue"
                >
                  Generate more
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 6,
                    marginRight: 4,
                    fontFamily: "League Spartan",
                  }}
                  className="md:text-[2vh] bg-element-blue"
                >
                  Save response
                </Button> */}
                        {/* </Box> */}
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Recommendations;
