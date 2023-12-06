import React, { useState } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
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
        <Box component="section" sx={{ p: 2, fontFamily: "League Spartan" }}>
          {" "}
          <Box
            className="flex p-8 flex-col items-start"
          >
            <Typography variant="h1">Recommendations</Typography>
            <Typography variant="p" marginY={4}>
              The sky above the port was the colour of television, tuned to a
              dead channel.
            </Typography>
            <Typography variant="p">
              Choose a category from the dropdown menu and enter your search
              below.
            </Typography>
          </Box>
          <Box
            component="section"
            bgcolor="elementBlue.main"
            marginRight={4}
            marginLeft={4}
            sx={{ p: "auto", borderRadius: 4 }}
          >
            <Box margin={2} sx={{ p: 1}}>
              <div>
<Typography variant="h3" sx={{fontWeight: "bold", fontSize: "5vw"}}>
                  Get recommendation by:
                  </Typography>
              </div>
              <Select
                id="searchType"
                value={searchType}
                onChange={handleSearchTypeChange}
                sx={{
                  bgcolor: "white.main",
                  borderRadius: 1,
                  minWidth: 19 / 20,
                  height: 40,
                  marginBottom: 2,
                  marginTop: 1,
                }}
              >
                <MenuItem value="title">
                  Title
                </MenuItem>
                <MenuItem value="author">Author</MenuItem>
                <MenuItem value="genre">Genre</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box
            bgcolor="elementBlue.main"
            margin={4}
            component="section"
            sx={{ p: 2, borderRadius: 4 }}
          >
            <SearchBar
              id="search-bar"
              label={`Search by ${searchType}`}
              variant="standard"
              color="starBlue"
              inputProps={{style: {color: "white"}}}
            ></SearchBar>
          </Box>
          <Box
            bgcolor="elementBlue.main"
            margin={4}
            component="section"
            sx={{ p: 2, borderRadius: 4 }}
          >
            <Typography variant="p">Recommendation output will get put here eventually</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              color="elementBlue"
              variant="contained"
              sx={{ borderRadius: 6, marginLeft: 4, fontFamily: "League Spartan" }}
            >
              Generate more
            </Button>
            <Button
              color="elementBlue"
              variant="contained"
              sx={{ borderRadius: 6, marginRight: 4, fontFamily: "League Spartan"}}
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
