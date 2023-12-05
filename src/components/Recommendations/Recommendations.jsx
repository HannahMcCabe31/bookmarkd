import React, { useState } from "react";
import { Box, Button} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme"


function Recommendations() {
    const [searchType, setSearchType] = useState("title");
    const [searchInput, setSearchInput] = useState("");
    const [recommendations, setRecommendations] = useState([]);

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

    return (
        // Do i need to set the background colour?
        <ThemeProvider theme={bookmarkd}>
            <div className="bg-background-blue text-white">
                <Box
                    component="section"
                    sx={{ p: 2, border: "1px solid white" }}
                >
                    <h1>Recommendations</h1>
                    <p>
                        The sky above the port was the colour of television,
                        tuned to a dead channel.
                    </p>
                    <p>
                        Choose a category from the dropdown menu and enter your
                        search below.
                    </p>
                    <Box
                        component="section"
                        sx={{ p: 2, border: "1px solid white" }}
                    >
                        <label htmlFor="searchType">
                            Get recommendation by:
                        </label>
                        <select
                            id="searchType"
                            value={searchType}
                            onChange={handleSearchTypeChange}
                        >
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                            <option value="genre">Genre</option>
                        </select>
                    </Box>
                    <Box
                        component="section"
                        sx={{ p: 2, border: "1px solid white" }}
                    >
                        <SearchBar
                            id="search-bar"
                            label={`Search by ${searchType}`}
                            variant="outlined"
                            color="starBlue"
                        ></SearchBar>
                    </Box>
                    <Box
                        component="section"
                        sx={{ p: 2, border: "1px solid white" }}
                    >
                        <p>Output</p>
                    </Box>
                    <Button
                        color="elementBlue"
                        variant="contained"
                        sx={{ borderRadius: 6 }}
                    >
                        Generate more
                    </Button>
                    <Button
                        color="elementBlue"
                        variant="contained"
                        sx={{ borderRadius: 6 }}
                    >
                        Save response
                    </Button>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default Recommendations;
