import React, { useState } from "react";
import { Box, Button, Select, MenuItem} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme"
import Typography from "@mui/material/Typography";



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
                    sx={{ p: 2, border: "1px solid white", fontFamily: "League Spartan" }}
                >   <Box 
                      sx={{ display: "flex", flexDirection: "column", padding: 4, alignItems: "left"}}>
                    <Typography variant= "h1">Recommendations</Typography>
                    <Typography variant="p" marginY={4} >
                        The sky above the port was the colour of television,
                        tuned to a dead channel.
                    </Typography>
                    <Typography variant="p">
                        Choose a category from the dropdown menu and enter your
                        search below.
                    </Typography>
                    </Box>
                    <Box
                        component="section"
                        bgcolor = "elementBlue.main"
                        marginRight={4}
                        marginLeft={4}
                        sx={{ p: 2, borderRadius: 4  }}
                    >
                        <label htmlFor="searchType">
                            Get recommendation by:
                        </label>
                        <Select
                            id="searchType"
                            value={searchType}
                            onChange={handleSearchTypeChange}
                            sx={{ bgcolor: "white.main", borderRadius: 4 }}
                        >
                            <MenuItem value="title" className="">Title</MenuItem>
                            <MenuItem value="author">Author</MenuItem>
                            <MenuItem value="genre">Genre</MenuItem>
                        </Select>
                    </Box>
                    <Box
                        bgcolor = "elementBlue.main"
                        margin={4}
                        component="section"
                        sx={{ p: 2, borderRadius: 4 }}
                    >
                        <SearchBar
                            id="search-bar"
                            label={`Search by ${searchType}`}
                            variant="standard"
                            color="starBlue"
                        ></SearchBar>
                    </Box>
                    <Box
                        bgcolor = "elementBlue.main"
                        margin={4}
                        component="section"
                        sx={{ p: 2, borderRadius: 4 }}
                    >
                        <p>Output</p>
                    </Box>
                    <Box 
                      sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <Button
                        color="elementBlue"
                        variant="contained"
                        sx={{ borderRadius: 6, marginLeft: 4}}
                    >
                        Generate more
                    </Button>
                    <Button
                        color="elementBlue"
                        variant="contained"
                        sx={{ borderRadius: 6, marginRight: 4}}
                    >
                        Save response
                    </Button>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default Recommendations;
